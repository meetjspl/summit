import { createFileRoute } from '@tanstack/react-router';

import { EventSummary } from '@/components/event-summary.tsx';

export const Route = createFileRoute('/summary')({
	component: EventSummary,
});
