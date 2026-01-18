import { createFileRoute } from '@tanstack/react-router';

import { ThankYou } from '@/components/thank-you.tsx';

export const Route = createFileRoute('/thank-you')({
	component: ThankYou,
});
