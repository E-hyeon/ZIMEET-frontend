import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
    VitePWA({ 
      registerType: 'autoUpdate',
      manifest: {
        name: 'ZI밋 - 지금 우리 만나요!',
        short_name: 'ZI밋',
        description: 'GDG 행사 미팅 플랫폼',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'zimeet_icon.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'zimeet_icon.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 6 * 1024 * 1024,
      }
    }),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      assets: path.resolve(__dirname, 'src/assets'),
      utils: path.resolve(__dirname, 'src/utils'),
      api: path.resolve(__dirname, 'src/api'),
      recoilStores: path.resolve(__dirname, 'src/recoilStores'),
      styles: path.resolve(__dirname, 'src/styles'),
      types: path.resolve(__dirname, 'src/types'),
      pages: path.resolve(__dirname, 'src/pages'),
      fonts: path.resolve(__dirname, 'src/fonts'),
      data: path.resolve(__dirname, 'src/data'),
    },
  },
  define: {
    global: 'window',
  },
});
