/** @type {import("next").NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    compress: true,
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [360, 480, 640, 768, 1024, 1280, 1536, 1920],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
            },
            {
                protocol: 'https',
                hostname: 'redesalomao.com.br',
            }
        ],
    },
    experimental: {
        optimizePackageImports: ['react-icons', 'framer-motion'],
    },
    async headers() {
        return [
            {
                source: '/:all*(webp|png|jpg|jpeg|svg|ico|woff|woff2)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
    async redirects() {
        return [
            {
                source: '/adestramento-salomao',
                destination: '/',
                statusCode: 301,
            },
            {
                source: '/adestramento-salomao/:path*',
                destination: '/',
                statusCode: 301,
            },
        ];
    },
};

export default nextConfig;
