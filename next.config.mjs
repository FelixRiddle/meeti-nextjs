// If not set default to development
if(!process.env.NODE_ENV) {
	process.env.NODE_ENV = 'development';
}

const isDev = process.env.NODE_ENV === "development";

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
			{
				source: '/',
				destination: '/home',
				permanent: true,
			},
        ]
    },
	images: {
		// loader: 'custom',
		// loaderFile: './my/image/loader.js',
	},
	// images: isDev && [ "localhost:3006" ],
};

export default nextConfig;
