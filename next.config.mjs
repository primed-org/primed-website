/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,  
    },
    output: 'export',
    transpilePackages: ['react-daisyui'],
    reactStrictMode: true,
};

export default nextConfig;
