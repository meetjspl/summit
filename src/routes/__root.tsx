import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router';

import { Footer } from '@/components/footer.tsx';
import { Navigation } from '@/components/navigation.tsx';
import { NotFound } from '@/components/not-found.tsx';

const RootLayout = () => {
	const location = useLocation();
	const isThankYouPage = location.pathname === '/thank-you';

	return (
		<>
			{!isThankYouPage && <Navigation />}
			<Outlet />
			{!isThankYouPage && <Footer />}
		</>
	);
};

export const Route = createRootRoute({
	component: RootLayout,
	notFoundComponent: NotFound,
});
