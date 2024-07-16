/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbo: {
            resolveAlias: {
                convas: './empty-module.ts'
            }
        }
    }
};

export default nextConfig;