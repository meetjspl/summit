export const HeroBottomSection = () => {
	return (
		<div className="relative z-20 flex flex-col gap-6 pt-6 pb-8 text-white md:pt-4">
			{/* Button and Date/Venue - Side by Side */}
			<div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
				<a
					href="#tickets"
					className="inline-block w-fit rounded-lg bg-white px-8 py-4 text-base font-bold text-black transition-all hover:bg-meetjs-green"
				>
					Sign me up now!
				</a>

				<div className="flex flex-col gap-1">
					<p className="text-lg font-semibold md:text-xl">
						<span className="text-meetjs-green">4 March 2026</span>
					</p>
					<p className="text-base text-white/90">
						Venue: <span className="font-semibold text-white">SGH Warsaw</span>
					</p>
				</div>
			</div>

			{/* Charity Message */}
			<p className="text-sm text-white/70 md:text-base">
				Charity Event. All profit from ticket sales goes to chosen charity
			</p>
		</div>
	);
};
