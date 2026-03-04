import {createFileRoute} from '@tanstack/react-router';

import {App} from '@/components/app.tsx';

export const Route = createFileRoute('/agenda')({
	component: App,
});
