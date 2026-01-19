import { Wrapper } from '@/components/wrapper.tsx';

interface Speaker {
	name: string;
	role: string;
	company: string;
	talkTitle: string;
	bio: string;
	imageUrl?: string;
	social?: {
		twitter?: string;
		linkedin?: string;
		github?: string;
	};
}

const speakers: Speaker[] = [
	// Add speakers here when ready
	// Example:
	// {
	// 	name: 'Anna Kowalska',
	// 	role: 'Lead AI Engineer',
	// 	company: 'TechCorp',
	// 	talkTitle: 'Building Production-Ready AI Applications',
	// 	bio: 'Anna specializes in deploying large-scale AI systems and has over 10 years of experience in machine learning.',
	// 	imageUrl: '/speakers/anna-kowalska.jpg',
	// 	social: {
	// 		twitter: 'https://twitter.com/annakowalska',
	// 		linkedin: 'https://linkedin.com/in/annakowalska',
	// 		github: 'https://github.com/annakowalska',
	// 	},
	// },
];

export const Speakers = () => {
	return (
		<section id="speakers" className="bg-black py-16 text-white">
			<Wrapper>
				<h2 className="mb-4 text-center text-5xl font-semibold">Speakers</h2>
				<p className="mb-12 text-center text-lg text-white-2">
					Learn from industry experts and thought leaders
				</p>

				{speakers.length === 0 ? (
					/* To Be Announced */
					<div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-gray/10 p-12 text-center">
						<div className="mb-6 flex justify-center">
							<svg
								className="h-24 w-24 text-meetjs-green"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1.5}
									d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
						</div>
						<h3 className="mb-4 text-3xl font-semibold">To Be Announced</h3>
						<p className="mb-6 text-lg text-white-2">
							We're curating an incredible lineup of industry experts, thought leaders, and
							innovators who will share their knowledge and insights.
						</p>
						<p className="text-white-2">
							Stay tuned for speaker announcements! Follow us on social media to be the first
							to know. 🎉
						</p>
					</div>
				) : (
					/* Speaker Cards */
					<>
						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
							{speakers.map((speaker) => (
								<div
									key={speaker.name}
									className="group flex flex-col overflow-hidden rounded-2xl bg-gray/20 transition-all hover:bg-gray/30 hover:shadow-xl"
								>
									{/* Speaker Image */}
									<div className="aspect-square overflow-hidden bg-gray">
										<img
											src={speaker.imageUrl || '/speaker-placeholder.png'}
											alt={speaker.name}
											className="h-full w-full object-cover transition-transform group-hover:scale-105"
										/>
									</div>

									{/* Speaker Info */}
									<div className="flex flex-col gap-2 p-6">
										<h3 className="text-xl font-semibold">{speaker.name}</h3>
										<p className="text-sm text-meetjs-green">
											{speaker.role} @ {speaker.company}
										</p>
										<p className="mt-2 text-sm font-medium text-white-2">
											{speaker.talkTitle}
										</p>
										<p className="mt-2 text-sm text-white-2/80">{speaker.bio}</p>

										{/* Social Links */}
										{speaker.social && (
											<div className="mt-4 flex gap-4">
												{speaker.social.twitter && (
													<a
														href={speaker.social.twitter}
														className="text-white-2 transition-colors hover:text-meetjs-blue"
														aria-label={`${speaker.name}'s Twitter`}
													>
														<svg
															className="h-5 w-5"
															fill="currentColor"
															viewBox="0 0 24 24"
														>
															<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
														</svg>
													</a>
												)}
												{speaker.social.linkedin && (
													<a
														href={speaker.social.linkedin}
														className="text-white-2 transition-colors hover:text-meetjs-blue"
														aria-label={`${speaker.name}'s LinkedIn`}
													>
														<svg
															className="h-5 w-5"
															fill="currentColor"
															viewBox="0 0 24 24"
														>
															<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
															<circle cx="4" cy="4" r="2" />
														</svg>
													</a>
												)}
												{speaker.social.github && (
													<a
														href={speaker.social.github}
														className="text-white-2 transition-colors hover:text-meetjs-blue"
														aria-label={`${speaker.name}'s GitHub`}
													>
														<svg
															className="h-5 w-5"
															fill="currentColor"
															viewBox="0 0 24 24"
														>
															<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
														</svg>
													</a>
												)}
											</div>
										)}
									</div>
								</div>
							))}
						</div>

						{/* More Speakers Coming Soon - Optional */}
						<div className="mt-12 text-center">
							<p className="text-lg text-white-2">
								More amazing speakers will be announced soon! 🎉
							</p>
						</div>
					</>
				)}
			</Wrapper>
		</section>
	);
};
