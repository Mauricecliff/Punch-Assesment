export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Your Brand Name",
    url: "https://yourdomain.com",
    logo: "https://yourdomain.com/logo.png",
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+234-000-000-0000",
      contactType: "Customer Support",
      areaServed: "NG",
      availableLanguage: "English",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
