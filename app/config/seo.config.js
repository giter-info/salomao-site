export const SITE_URL = "https://redesalomao.com.br";
export const SITE_NAME = "Rede Salomão";
export const SITE_LOGO = `${SITE_URL}/rede-salomao-new-dark-logo.png`;
export const SITE_WHATSAPP = "+5547988080041";

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: SITE_LOGO,
    description:
        "Rede Salomão: Residencial Terapêutico, Residência Inclusiva e Marketing Salomão em Blumenau e Chapecó, Santa Catarina.",
    sameAs: [
        "https://www.instagram.com/residencial.salomao/",
        "https://www.facebook.com/profile.php?id=61565632582956",
    ],
    contactPoint: [
        {
            "@type": "ContactPoint",
            telephone: SITE_WHATSAPP,
            contactType: "customer service",
            areaServed: "BR",
            availableLanguage: ["Portuguese"],
        },
    ],
};

export function localBusinessSchema({id, name, description, url, address}) {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${url}#${id}`,
        name,
        description,
        url,
        telephone: SITE_WHATSAPP,
        image: SITE_LOGO,
        parentOrganization: {"@type": "Organization", name: SITE_NAME, url: SITE_URL},
        address: {
            "@type": "PostalAddress",
            streetAddress: address.street,
            addressLocality: address.city,
            addressRegion: "SC",
            addressCountry: "BR",
        },
    };
}
