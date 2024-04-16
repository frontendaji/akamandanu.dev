import { createReadStream } from 'fs';
import { join } from 'path';

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/api/sitemap',
        destination: '/sitemap.xml',
        permanent: true,
      },
    ];
  },
  async api() {
    return [
      {
        path: '/api/sitemap',
        method: 'GET',
        handler(req, res) {
          const filePath = join(process.cwd(), 'public', 'sitemap.xml');
          const stream = createReadStream(filePath);
          stream.pipe(res);
        },
      },
    ];
  },
};

export default nextConfig;
