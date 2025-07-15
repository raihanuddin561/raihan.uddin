import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: '/resume/(.*)',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/pdf',
          },
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Raihan_Uddin_Resume.pdf"',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
