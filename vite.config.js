import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import context from './src/assets/data';

export default defineConfig({
  root: 'src',
  base: '',
  plugins: [
    handlebars({
      context,
      partialDirectory: resolve(__dirname, 'src/partials'),
      helpers: {
        eq: (a, b) => a === b,
        lookup: (obj, key) => {
          return obj?.[key] || null;
        },
        hasItems: (array) => {
          return Array.isArray(array) && array.length > 0;
        },
        addUtm: (url, utmConfig) => {
          if (!url || !utmConfig) return url;
          
          const separator = url.includes('?') ? '&' : '?';
          const utmParams = `utm_source=${utmConfig.source}&utm_medium=${utmConfig.medium}&utm_campaign=${utmConfig.campaign}`;
          
          return `${url}${separator}${utmParams}`;
        }
      }
    }),
    viteStaticCopy({
      targets: [
        {
          src: '../redirect.html',
          dest: '../',
          rename: 'index.html',
        },
        {
          src: '../CNAME',
          dest: '../',
        },
        {
          src: 'robots.txt',
          dest: '../',
          rename: 'robots.txt',
        },
        {
          src: '../legacy-pages/*',
          dest: '../',
        },
      ],
    }),
  ],

  build: {
    outDir: `../dist/${context.year || '20XX'}`,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
      },
    },
  },
});
