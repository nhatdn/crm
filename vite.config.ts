import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { robots } from 'vite-plugin-robots'
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
robots();

export default ({ mode }: any) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [svgr(), react(), VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['vite.svg'],
      manifest: {
        name: 'crm',
        short_name: 'CRM',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /(.*)\.(js|css)/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 7 // one week
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })],
    // config using scss with global scope
    css: {
      preprocessorOptions: {
          scss: {
              additionalData: '@import "./src/styles/index.scss";',
          },
      },
    },
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(process.cwd(), 'src') }],
    },
    build: {
      cssCodeSplit: false,
      cssMinify: true,
    },
    envPrefix: 'CRM_',
    define: { global: {} },
    server: {
      port: 3000,
      host: '0.0.0.0',
    }
  });
};
