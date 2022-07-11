export default {
  mode: 'development',
  base: '/',
  srcDir: 'src',
  filename: 'sw.ts',
  includeAssets: ['favicon.png'],
  strategies: 'injectManifest',
  manifest: {
    name: 'Test Project',
    short_name: 'Test',
    theme_color: '#ffffff',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    icons: [
      {
        src: 'logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  },
};
