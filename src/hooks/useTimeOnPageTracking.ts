import { useEffect, useRef } from 'react';
import * as gtag from '@/utils/gtag';

export const useTimeOnPageTracking = () => {
	const trackedTimes = useRef<Set<number>>(new Set());
	const startTime = useRef<number>(0);

	useEffect(() => {
		// Initialize start time inside effect to avoid impure function during render
		startTime.current = Date.now();

		const checkTimeOnPage = () => {
			const timeSpent = Math.floor((Date.now() - startTime.current) / 1000);

			// Track at 30s, 60s, 120s (2min), and 300s (5min)
			const milestones = [30, 60, 120, 300];
			milestones.forEach((milestone) => {
				if (timeSpent >= milestone && !trackedTimes.current.has(milestone)) {
					trackedTimes.current.add(milestone);
					gtag.trackTimeOnPage(milestone);
				}
			});
		};

		const interval = setInterval(checkTimeOnPage, 5000); // Check every 5 seconds
		return () => clearInterval(interval);
	}, []);
};
