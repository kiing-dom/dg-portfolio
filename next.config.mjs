/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
  async headers() {
    return [
      {
        /*
         * The resume carries a phone number, so it must stay out of search
         * results. This has to be a noindex header and not a robots.txt
         * disallow: a crawler blocked from fetching the file never sees the
         * header, and the URL can still be indexed from links to it.
         */
        source: "/assets/documents/:file*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, noarchive" }],
      },
    ];
  },
};

export default nextConfig;
