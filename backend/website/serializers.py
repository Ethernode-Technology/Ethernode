from rest_framework import serializers


class ContactSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=150)
    email = serializers.EmailField()

    company_name = serializers.CharField(
        max_length=200,
        required=False,
        allow_blank=True,
    )

    project_need = serializers.ChoiceField(
        choices=[
            "website_dev",
            "graphic_design",
            "software_dev",
            "system_dev",
            "security_system",
        ]
    )

    timeline = serializers.DateField(
        required=False,
        allow_null=True,
    )

    budget = serializers.DecimalField(
        max_digits=12,
        decimal_places=2,
        min_value=0,
        required=False,
        allow_null=True,
    )

    extra_info = serializers.CharField(
        required=False,
        allow_blank=True,
        max_length=5000,
    )