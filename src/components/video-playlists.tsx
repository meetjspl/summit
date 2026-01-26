interface VideoPlaylist {
	id: string;
	title: string;
	year: string;
	playlistUrl: string;
	thumbnailUrl: string;
	videoCount?: string;
	description: string;
}

const VIDEO_PLAYLISTS: VideoPlaylist[] = [
	{
		id: '1',
		title: 'meet.js Summit 2023',
		year: '2023',
		playlistUrl:
			'https://www.youtube.com/watch?v=cSCW8N6qdNk&list=PLMCOR-t1TNte48Vv0B18RgGslQVmeRJ-7',
		thumbnailUrl: 'https://i.ytimg.com/vi/cSCW8N6qdNk/maxresdefault.jpg',
		description:
			'Watch all the amazing talks from meet.js Summit 2024 conference',
	},
	{
		id: '2',
		title: 'meet.js Summit 2022',
		year: '2022',
		playlistUrl:
			'https://www.youtube.com/watch?v=3BlGkmnrIjA&list=PLMCOR-t1TNtd1IpGSTU9HSy3srwN6cUhI',
		thumbnailUrl: 'https://i.ytimg.com/vi/3BlGkmnrIjA/maxresdefault.jpg',
		description:
			'Explore the inspiring presentations from meet.js Summit 2023',
	},
	{
		id: '3',
		title: 'meet.js Summit 2019',
		year: '2019',
		playlistUrl:
			'https://www.youtube.com/watch?v=MRad-nVzNQI&list=PLMCOR-t1TNtfyUllieWcXzevJ5LoGBYQy',
		thumbnailUrl: 'https://i.ytimg.com/vi/MRad-nVzNQI/maxresdefault.jpg',
		description: 'Relive the best moments from meet.js Summit 2022 conference',
	},
];

export const VideoPlaylists = () => {
	if (VIDEO_PLAYLISTS.length === 0) {
		return null;
	}

	return (
		<section id="videos" className="bg-gradient-to-b from-black to-gray-900 py-16 lg:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="mb-12 text-center">
					<h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
						Video Archive
					</h2>
					<p className="mx-auto max-w-2xl text-lg text-gray-300">
						Catch up on previous meet.js Summit conferences. Watch inspiring talks
						from industry experts and community leaders.
					</p>
				</div>

				{/* Playlists Grid */}
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{VIDEO_PLAYLISTS.map((playlist, index) => (
						<a
							key={playlist.id}
							href={playlist.playlistUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-gray-800/70 hover:shadow-2xl hover:shadow-meetjs-green/20 focus:outline-none focus:ring-2 focus:ring-meetjs-green focus:ring-offset-2 focus:ring-offset-black"
							style={{
								animationDelay: `${index * 150}ms`,
								animation: 'fadeInUp 0.6s ease-out forwards',
								opacity: 0,
							}}
						>
							{/* Thumbnail Container */}
							<div className="relative aspect-video overflow-hidden">
								{/* Year Badge */}
								<div className="absolute left-4 top-4 z-10 rounded-full bg-meetjs-green px-4 py-1.5 text-sm font-bold text-black shadow-lg">
									{playlist.year}
								</div>

								{/* Play Button Overlay */}
								<div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
									<div className="rounded-full bg-meetjs-green/95 p-6 shadow-2xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
										<svg
											className="h-12 w-12 text-black"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M8 5v14l11-7z" />
										</svg>
									</div>
								</div>

								{/* Gradient Overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

								{/* Thumbnail Image */}
								<img
									src={playlist.thumbnailUrl}
									alt={playlist.title}
									className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
									loading="lazy"
								/>
							</div>

							{/* Content */}
							<div className="p-6">
								<h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-meetjs-green">
									{playlist.title}
								</h3>
								<p className="text-sm text-gray-400">{playlist.description}</p>

								{/* Watch Now Link */}
								<div className="mt-4 flex items-center gap-2 text-sm font-medium text-meetjs-green">
									<span>Watch Playlist</span>
									<svg
										className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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

							{/* Playlist Icon Indicator */}
							<div className="absolute right-4 top-4 z-10 rounded-lg bg-black/60 p-2 backdrop-blur-sm">
								<svg
									className="h-5 w-5 text-white"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M4 6h2v12H4zm4-3h2v18H8zm4 6h2v6h-2zm4-3h2v12h-2zm4-3h2v18h-2z" />
								</svg>
							</div>
						</a>
					))}
				</div>

				{/* YouTube Channel Link */}
				<div className="mt-12 text-center">
					<a
						href="https://www.youtube.com/@meetjs"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-lg border-2 border-meetjs-green px-8 py-3 font-semibold text-meetjs-green transition-all hover:bg-meetjs-green hover:text-black focus:outline-none focus:ring-2 focus:ring-meetjs-green focus:ring-offset-2 focus:ring-offset-black"
					>
						<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
							<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
						</svg>
						<span>Visit our YouTube Channel</span>
					</a>
				</div>
			</div>

			{/* Keyframe animation */}
			<style>{`
				@keyframes fadeInUp {
					from {
						opacity: 0;
						transform: translateY(30px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
			`}</style>
		</section>
	);
};
