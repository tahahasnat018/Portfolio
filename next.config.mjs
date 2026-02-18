/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/about_index.html",
        destination: "/about",
        permanent: true
      },
      {
        source: "/product.html",
        destination: "/product",
        permanent: true
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
