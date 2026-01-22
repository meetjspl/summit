import { createFileRoute } from '@tanstack/react-router';

import { Agenda } from '@/components/agenda.tsx';

export const Route = createFileRoute('/agenda')({
	component: Agenda,
});
