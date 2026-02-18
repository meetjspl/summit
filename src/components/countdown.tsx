import {useCountdown} from '@/hooks/useCountdown.ts';


export const Countdown = () => {
	const { isEnded, timeLeft, isLive } = useCountdown();

	if (isEnded) {
		return (
			<div className="flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-purple-600 to-blue-600 px-6 py-3">
				<span className="text-lg font-bold text-white md:text-xl">
					🎉 Event ended, see you next year!
				</span>
			</div>
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
