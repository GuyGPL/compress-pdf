/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
            config.resolve.alias['canvas'] = false;

        return config;
    },
    future: {
        webpack5: true,
    },
};

export default nextConfig;
