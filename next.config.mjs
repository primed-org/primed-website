/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // Disable image optimization for static exports
    },
    transpilePackages: ['react-daisyui'],
    reactStrictMode: true,
};

export default nextConfig;
