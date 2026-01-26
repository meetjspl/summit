import { useEffect, useRef } from 'react';
import * as gtag from '@/utils/gtag';

export const useScrollDepthTracking = () => {
	const trackedDepths = useRef<Set<number>>(new Set());

	useEffect(() => {
		const handleScroll = () => {
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;
			const scrollTop = window.scrollY;
			const scrollPercentage = Math.round(
				((scrollTop + windowHeight) / documentHeight) * 100
			);

			// Track at 25%, 50%, 75%, and 100%
			const milestones = [25, 50, 75, 100];
			milestones.forEach((milestone) => {
				if (
					scrollPercentage >= milestone &&
					!trackedDepths.current.has(milestone)
				) {
					trackedDepths.current.add(milestone);
					gtag.trackScrollDepth(milestone);
				}
			});
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
};
