export const HeroBottomSection = () => {
	return (
		<div className="relative z-20 flex flex-col-reverse md:flex-row">
			<a
				href="#tickets"
				className="flex items-center justify-center rounded-lg bg-white px-8 font-bold"
			>
				Sign me up now!
			</a>
			<div className="pl-8 text-white">
				<p>Charity Event</p>
				<p>All profit from ticket sales</p>
				<p>goes to chosen charity</p>
			</div>
			<div className="ml-auto text-right text-3xl">
				<p className="font-semibold text-meetjs-green">4 March 2026</p>
				<p className="text-white">
					Venue: <span className="font-semibold">SGH Warsaw</span>
				</p>
			</div>
		</div>
	);
};
