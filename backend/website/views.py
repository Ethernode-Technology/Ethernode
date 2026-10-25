import logging

from django.conf import settings
from django.core.mail import send_mail

from rest_framework import status
from rest_framework.decorators import (
    api_view,
    authentication_classes,
    permission_classes,
    throttle_classes,
)
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.throttling import ScopedRateThrottle

from .serializers import ContactSerializer

logger = logging.getLogger(__name__)

@api_view(["POST"])
@authentication_classes([])
@permission_classes([AllowAny])
@throttle_classes([ScopedRateThrottle])
def contact(request):
    serializer = ContactSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)

    data = serializer.validated_data

    subject = f"Ethernode contact enquiry: {data['project_need']}"

    message = "\n".join([
        f"Name: {data['name']}",
        f"Email: {data['email']}",
        f"Company: {data.get('company_name') or 'Not provided'}",
        f"Project need: {data['project_need']}",
        f"Timeline: {data.get('timeline') or 'Not specified'}",
        f"Budget: {data.get('budget') if data.get('budget') is not None else 'Not provided'}",
        "",
        "Additional information:",
        data.get('extra_info') or "None provided",
    ])

    print(f'submitted data:\n\n{message}')

    try:
        send_mail(
            subject=subject,
            message=message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.CONTACT_EMAIL],
            fail_silently=False,
        )
    except Exception:
        logger.exception("Ethernode contact email delivery failed")
        return Response(
            {"detail": "Unable to send your enquiry right now."},
            status=status.HTTP_503_SERVICE_UNAVAILABLE,
        )

    return Response(
        {"detail": "Your enquiry has been submitted successfully."},
        status=status.HTTP_200_OK,
    )

contact.throttle_scope = "contact"
