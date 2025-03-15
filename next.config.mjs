/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // This enables styled-components support
  },
  output: 'standalone'
};

export default nextConfig;
