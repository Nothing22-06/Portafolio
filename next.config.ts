import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    basePath: '/Portafolio', // Nombre de tu repositorio
    assetPrefix: '/Portafolio/', // Nombre de tu repositorio
};

export default nextConfig;

