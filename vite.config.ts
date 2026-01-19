import * as path from 'node:path';

import tailwindcss from '@tailwindcss/vite';
import tanstackRouter from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
	base: '/2026/',
	build: {
		outDir: 'dist/2026',
		emptyOutDir: true,
	},
	plugins: [
		tailwindcss(),
		svgr(),
		tanstackRouter({
			target: 'react',
			autoCodeSplitting: true,
		}),
		react({
			babel: {
				plugins: [['babel-plugin-react-compiler']],
			},
		}),
		viteStaticCopy({
			targets: [
				{
					src: 'redirect.html',
					dest: '../',
					rename: 'index.html',
				},
				{
					src: '404.html',
					dest: '../',
				},
				{
					src: 'CNAME',
					dest: '../',
				},
				{
					src: 'robots.txt',
					dest: '../',
					rename: 'robots.txt',
				},
				{
					src: 'legacy-pages/*',
					dest: '../',
				},
			],
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
