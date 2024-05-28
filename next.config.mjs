/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    images: {
      domains: ['127.0.0.1'], // Add '127.0.0.1' to the list of allowed domains
      remotePatterns: [
        {
          hostname: "localhost",
        },
      ],
    },
    // env: {
    //   SERVER_URL: process.env.SERVER_URL,
    //   HOST: process.env.HOST,
    //   FRONTEND_URL: process.env.FRONTEND_URL,
    // },
    eslint: {
      ignoreDuringBuilds: true,
    },
    generateEtags: false,
    webpack(config) {
      const fileLoaderRule = config.module.rules.find((rule) =>
        rule.test?.test?.(".svg")
      )
  
      config.module.rules.push(
        {
          test: /\.svg$/i,
          type: "asset",
          resourceQuery: /url/,
        },
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [/url/] },
          use: ["@svgr/webpack"],
        }
      )
      return config
    },
    async headers() {
      return [
        {
          source: "/:path*",
          headers: securityHeaders,
        },
      ]
    },
  }
  
  const securityHeaders = [
    {
      key: "Cache-Control",
      value: "no-store",
    },
  ]
  
  export default nextConfig
  