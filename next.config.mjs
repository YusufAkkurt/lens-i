/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        staleTimes: {
            dynamic: 30
        },
        serverComponentsExternalPackages: ['@node-rs/argon2']
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.pixabay.com",
            }
        ]
    }
};

export default nextConfig;
