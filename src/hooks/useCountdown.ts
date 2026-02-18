import {useEffect, useState} from 'react';

import type {TimeLeft} from '@/types/timeLeft.ts';

export const useCountdown = () => {
	const eventDate = new Date('2026-03-04T08:00:00+01:00');
	const eventEndDate = new Date('2026-03-04T18:00:00+01:00');

	const calculateTimeLeft = (): TimeLeft | null => {
		const now = new Date();
		const difference = eventDate.getTime() - now.getTime();

		if (difference > 0) {
			return {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return null;
	};

	const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(
		calculateTimeLeft(),
	);
	const [isLive, setIsLive] = useState(false);
	const [isEnded, setIsEnded] = useState(false);

	useEffect(() => {
		const timer = setInterval(() => {
			const newTimeLeft = calculateTimeLeft();
			setTimeLeft(newTimeLeft);

			const now = new Date();
			setIsLive(now >= eventDate && now < eventEndDate);
			setIsEnded(now >= eventEndDate);
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return {
		eventDate,
		eventEndDate,
		timeLeft,
		isEnded,
		isLive,
	};
};
