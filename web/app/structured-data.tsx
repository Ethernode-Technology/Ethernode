
export default function StructuredData() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://ethernode.tech/#organization",
        name: "Ethernode",
        url: "https://ethernode.tech/",
        email: "inquiries@ethernode.tech",
        description:
            "Ethernode provides web development, software engineering, graphic design, corporate identity design, and systems integration services.",
        knowsAbout: [
            "Web Development",
            "Software Engineering",
            "Graphic Design",
            "Corporate Identity Design",
            "Systems Integration",
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
            }}
        />
    );
}
