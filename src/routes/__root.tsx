import { createRootRoute, Outlet } from '@tanstack/react-router';

import { Footer } from '@/components/footer.tsx';

const RootLayout = () => (
	<>
		<Outlet />
		<Footer />
	</>
);

export const Route = createRootRoute({ component: RootLayout });
