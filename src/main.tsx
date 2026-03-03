import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import { RouterProvider, createRouter } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen';

// Handle GitHub Pages SPA redirect
const params = new URLSearchParams(window.location.search);
const redirectPath = params.get('redirect');
if (redirectPath) {
	params.delete('redirect');
	const search = params.toString();
	const newPath = `/2026/${redirectPath}`;
	window.history.replaceState(null, '', newPath + (search ? '?' + search : ''));
}

const consoleMessage =
	"🧗 Summit Console Checkpoint\nIf you're reading this, you're 100% frontend. Respect.\nSee you at the event. Promo code: ILOVEMEETJS 🎟️";

console.log(
	`%c${consoleMessage}`,
	'color: #1f2937; background: #fef08a; padding: 8px 12px; border-radius: 6px; font-weight: 700; line-height: 1.5;',
);

const router = createRouter({ routeTree, basepath: '/2026' });

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
	const root = createRoot(rootElement);
	root.render(
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>,
	);
}
