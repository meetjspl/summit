const SHORTS = [
	{
		id: '1',
		title: 'When AI does whatever it wants — Mateusz Chrobok',
		url: 'https://www.youtube.com/shorts/Ai9KDYleSsQ',
		embedId: 'Ai9KDYleSsQ',
	},
	{
		id: '2',
		title: 'Jak naprawdę pracować z AI? Mateusz Chrobok na meet.js 2026',
		url: 'https://youtube.com/shorts/d7fr-qfX3vk',
		embedId: 'd7fr-qfX3vk',
	},
	{
		id: '3',
		title: 'AI Agent to tylko while loop z API? 👀',
		url: 'https://youtube.com/shorts/9cGMeEruL1o',
		embedId: '9cGMeEruL1o',
	},
];

export const YoutubeShorts = () => {
	return (
		<section className="bg-black py-16 lg:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-12 text-center">
					<h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
						Shorts
					</h2>
					<p className="mx-auto max-w-2xl text-lg text-gray-300">
						Quick glimpses from meet.js Summit — straight from our YouTube
						Shorts.
					</p>
				</div>

				<div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
					{SHORTS.map(short => (
						<a
							key={short.id}
							href={short.url}
							target="_blank"
							rel="noopener noreferrer"
							className="group relative flex w-full max-w-[280px] flex-col overflow-hidden rounded-2xl bg-gray-900 shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-meetjs-green/20 focus:ring-2 focus:ring-meetjs-green focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
						>
							<div className="relative" style={{ aspectRatio: '9/16' }}>
								<iframe
									src={`https://www.youtube.com/embed/${short.embedId}?rel=0`}
									title={short.title}
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									className="pointer-events-none h-full w-full"
									loading="lazy"
								/>
								{/* Click overlay so the <a> captures the click */}
								<div className="absolute inset-0" />
							</div>

							<div className="p-4">
								<p className="text-sm font-semibold text-white transition-colors group-hover:text-meetjs-green">
									{short.title}
								</p>
								<div className="mt-2 flex items-center gap-1 text-xs font-medium text-meetjs-green">
									<span>Watch Short</span>
									<svg
										className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};
