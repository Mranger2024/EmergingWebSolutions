
import Script from "next/script";

export function StructuredData() {
    const baseUrl = "https://emergingwebsolutions.in";
    
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Emerging Web Solutions",
        "url": baseUrl,
        "logo": `${baseUrl}/logo.png`,
        "sameAs": [
            "https://www.instagram.com/emergingwebsolutions.in/",
            "https://x.com/EmergingWebSol",
            "https://wa.me/918688440114"
        ]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Emerging Web Solutions",
        "image": `${baseUrl}/logo.png`,
        "url": baseUrl,
        "telephone": "+91-8688440114",
        "email": "emergingwebsolutions@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "G D complex, opp. R T C, A B M Compound, bustand",
            "addressLocality": "Kavali",
            "addressRegion": "Andhra Pradesh",
            "postalCode": "524201",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 14.913182,
            "longitude": 79.992980
        },
        "priceRange": "₹9,999 - ₹14,999",
        "areaServed": "Worldwide",
        "description": "Global web development agency specializing in professional WordPress websites. We build your website demo first, you pay only after you are 100% satisfied."
    };

    return (
        <>
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
        </>
    );
}
