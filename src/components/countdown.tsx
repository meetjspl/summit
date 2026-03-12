import { Link } from '@tanstack/react-router';

import { useCountdown } from '@/hooks/useCountdown.ts';

export const Countdown = () => {
	const { isEnded, timeLeft, isLive } = useCountdown();

	if (isEnded) {
		return (
			<Link
				to="/summary"
				className="group inline-flex items-center justify-center gap-2 rounded-lg bg-meetjs-green px-6 py-3 text-sm font-bold text-black transition-all hover:bg-meetjs-green/90 hover:shadow-lg hover:shadow-meetjs-green/20 md:text-base"
			>
				<span>Read Event Summary</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="transition-transform group-hover:translate-x-1"
				>
					<path d="M5 12h14" />
					<path d="m12 5 7 7-7 7" />
				</svg>
			</Link>
		);
	}

	if (isLive) {
		return (
			<div className="flex animate-pulse items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3">
				<div className="h-3 w-3 animate-pulse rounded-full bg-white" />
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
