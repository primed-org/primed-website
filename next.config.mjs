/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    transpilePackages: ['react-daisyui'],
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
