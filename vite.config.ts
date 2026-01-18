import * as path from 'node:path';

import tailwindcss from '@tailwindcss/vite';
import tanstackRouter from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
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
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
