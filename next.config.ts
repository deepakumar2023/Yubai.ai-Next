// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export', // Enable static HTML export
//   reactStrictMode: true,
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true, // disables built-in image optimization for static export
  },
};

module.exports = nextConfig;
