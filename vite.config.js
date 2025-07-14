import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const YEAR = '20XX';

export default defineConfig({
  root: 'src',
  base: '',
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
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
    outDir: `../dist/${YEAR}`,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
      },
    },
  },
});
