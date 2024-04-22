/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "http://localhost:8080"
            }
        ]
    }
};

export default nextConfig;
