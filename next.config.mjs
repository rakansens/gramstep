/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  headers: async () => {
    return [
      {
        source: '/:path*', // すべてのパスに適用
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate', // キャッシュを無効化
          },
        ],
      },
    ];
  },
}

export default nextConfig;
