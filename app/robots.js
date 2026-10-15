export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/"],
            },
        ],
        sitemap: "https://redesalomao.com.br/sitemap.xml",
        host: "https://redesalomao.com.br",
    };
}
