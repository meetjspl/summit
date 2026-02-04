import { useEffect, useState } from 'react';

interface TimeLeft {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

export const Countdown = () => {
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

	const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());
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

	if (isEnded) {
		return (
			<div className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3">
				<span className="text-lg font-bold text-white md:text-xl">
					🎉 Event ended, see you next year!
				</span>
			</div>
		);
	}

	if (isLive) {
		return (
			<div className="flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 animate-pulse">
				<div className="h-3 w-3 rounded-full bg-white animate-pulse" />
				<span className="text-lg font-bold text-white md:text-xl">
					EVENT IS LIVE NOW!
				</span>
			</div>
		);
	}

	if (!timeLeft) {
		return null;
	}

	return (
		<div className="flex flex-col items-center gap-3">
			<p className="text-sm font-semibold text-meetjs-green md:text-base">
				Event starts in:
			</p>
			<div className="flex gap-2 md:gap-4">
				<div className="flex flex-col items-center rounded-lg bg-white/10 px-3 py-2 backdrop-blur-sm md:px-4 md:py-3">
					<span className="text-2xl font-bold text-meetjs-green md:text-3xl">
						{timeLeft.days}
					</span>
					<span className="text-xs text-white/70 md:text-sm">Days</span>
				</div>
				<div className="flex flex-col items-center rounded-lg bg-white/10 px-3 py-2 backdrop-blur-sm md:px-4 md:py-3">
					<span className="text-2xl font-bold text-meetjs-green md:text-3xl">
						{String(timeLeft.hours).padStart(2, '0')}
					</span>
					<span className="text-xs text-white/70 md:text-sm">Hours</span>
				</div>
				<div className="flex flex-col items-center rounded-lg bg-white/10 px-3 py-2 backdrop-blur-sm md:px-4 md:py-3">
					<span className="text-2xl font-bold text-meetjs-green md:text-3xl">
						{String(timeLeft.minutes).padStart(2, '0')}
					</span>
					<span className="text-xs text-white/70 md:text-sm">Minutes</span>
				</div>
				<div className="flex flex-col items-center rounded-lg bg-white/10 px-3 py-2 backdrop-blur-sm md:px-4 md:py-3">
					<span className="text-2xl font-bold text-meetjs-green md:text-3xl">
						{String(timeLeft.seconds).padStart(2, '0')}
					</span>
					<span className="text-xs text-white/70 md:text-sm">Seconds</span>
				</div>
			</div>
		</div>
	);
};
