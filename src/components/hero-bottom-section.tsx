import { Countdown } from '@/components/countdown.tsx';

export const HeroBottomSection = () => {
	return (
		<div className="relative z-20 flex flex-col items-center gap-4 pt-2 pb-2 text-center text-white md:items-start md:gap-6 md:pb-4 md:text-left">
			<Countdown />

			<div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:gap-8">
				<div className="flex flex-col items-center gap-2 md:items-start">
					{/*<a*/}
					{/*	href="#tickets"*/}
					{/*	className="inline-block w-fit rounded-lg bg-meetjs-green px-8 py-4 text-base font-bold text-black transition-all hover:bg-meetjs-green/90 hover:shadow-lg hover:shadow-meetjs-green/20"*/}
					{/*>*/}
					{/*	Get your ticket!*/}
					{/*</a>*/}
					<p className="text-sm text-white/90">
						Event held in{' '}
						<span className="font-semibold text-white">🇬🇧 English</span>
					</p>
				</div>

				<div className="flex flex-col gap-1">
					<p className="text-lg font-semibold md:text-xl">
						<time className="text-meetjs-green" dateTime="2026-03-04">
							4 March 2026
						</time>
					</p>
					<p className="text-base text-white/90">
						Venue: <span className="font-semibold text-white">SGH Warsaw</span>
					</p>
				</div>
			</div>

			<p className="text-sm text-white/70 md:text-base">
				Charity Event. All profit from ticket sales goes to chosen charity
			</p>
		</div>
	);
};
