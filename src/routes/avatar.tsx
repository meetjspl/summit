import { createFileRoute } from '@tanstack/react-router';

import { Avatar } from '@/components/avatar.tsx';

export const Route = createFileRoute('/avatar')({
	component: Avatar,
});
