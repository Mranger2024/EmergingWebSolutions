
import Script from "next/script";

export function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Emerging Web Solutions",
        "image": "https://emergingwebsolutions.in/logo.png",
        "url": "https://emergingwebsolutions.in",
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
            "longitude": 79.992980 // Approx for Kavali
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "09:00",
            "closes": "20:00"
        },
        "priceRange": "₹14,999",
        "sameAs": [
            "https://www.instagram.com/emergingwebsolutions.in/",
            "https://x.com/EmergingWebSol",
            "https://wa.me/918688440114"
        ]
    };

    return (
        <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
