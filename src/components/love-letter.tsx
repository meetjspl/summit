import { Wrapper } from '@/components/wrapper.tsx';
import OrganizersImg from '@/assets/previous-events/meetjs-organizers.webp';
import FirstMeetupImg from '@/assets/previous-events/first-meetup.jpg';
import IconCommunity from '@/assets/icon-community.svg?react';

export const LoveLetter = () => {
	const handleScrollToTickets = () => {
		const ticketsSection = document.getElementById('tickets');
		ticketsSection?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section className="relative overflow-hidden bg-black py-20 text-white md:py-32">
			{/* Decorative background elements */}
			<div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-meetjs-blue/5 blur-[100px]" />
			<div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-meetjs-green/5 blur-[100px]" />

			<Wrapper>
				<div className="flex flex-col gap-16 lg:grid lg:grid-cols-2 lg:gap-24">
					{/* Left Column: The Letter */}
					<div className="flex flex-col justify-center space-y-8">
						<div className="space-y-4">
							<div className="inline-flex items-center gap-2 rounded-full border border-meetjs-green/20 bg-meetjs-green/5 px-4 py-1.5 text-sm md:text-base text-meetjs-green font-medium">
								<IconCommunity className="h-4 w-4" />
								<span>Celebrating 15 Years</span>
							</div>
							<h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
								A Love Letter to <br />
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-meetjs-blue to-meetjs-green">
									Our Community
								</span>
							</h2>
						</div>

						<div className="space-y-6 text-lg leading-relaxed text-gray-300">
							<p>
								Dear <strong>Impact Makers, Dreamers, and Code Wranglers</strong>,
							</p>
							<p>
								It all started on a valentine's eve in <strong>2011</strong>. A small group of
								us gathered at <em>Klub ZAK</em> in Poznań, united by nothing more
								than a shared passion for a quirky language called JavaScript. We
								talked about jQuery Mobile and HTML5 audio, unaware that we were
								planting the seeds for what would become Poland's largest
								developer community.
							</p>
							<p>
								15 years later, meet.js isn't just a meetup—it's a movement. It's
								thousands of lines of code, hundreds of speakers, and countless
								friendships forged over pizza and beer. We remain{' '}
								<span className="text-white font-semibold">100% non-commercial</span>, 
								community-driven, and powered by you.
							</p>
							<p>
								As we celebrate our 15th birthday, this Summit is our tribute to
								you. Thank you for showing up, for sharing your knowledge, and for
								making this ecosystem vibrant and alive.
							</p>
						</div>

						<div className="pt-4">
							<button
								onClick={handleScrollToTickets}
								className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 font-bold text-black transition-all hover:bg-gray-200 hover:scale-105 active:scale-95"
							>
								<span>Join the Celebration</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
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
							</button>
						</div>
					</div>

					{/* Right Column: Visuals & Interactive */}
					<div className="flex flex-col space-y-8">
						{/* Video Placeholder */}
						<div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-gray-900 shadow-2xl transition-all hover:border-meetjs-blue/50">
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="rounded-full bg-white/10 p-4 backdrop-blur-sm transition-all group-hover:bg-meetjs-blue group-hover:text-black">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										viewBox="0 0 24 24"
										fill="currentColor"
										className="ml-1"
									>
										<polygon points="5 3 19 12 5 21 5 3" />
									</svg>
								</div>
							</div>
							<div className="absolute bottom-4 left-4 rounded bg-black/50 px-3 py-1 text-sm text-white backdrop-blur-md">
								Watch 15 Years of Memories
							</div>
						</div>

						{/* Photo & Caption */}
						<div className="grid gap-4 sm:grid-cols-2">
							{/* First Meetup Photo */}
							<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900 shadow-xl transition-transform hover:-rotate-1">
								<img
									src={FirstMeetupImg}
									alt="First meet.js meetup in 2011"
									className="h-full w-full object-cover sepia-[.5] transition-all hover:sepia-0"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
								<div className="absolute bottom-0 left-0 p-4">
									<p className="font-mono text-xs text-meetjs-green">
										Feb 12, 2011
									</p>
									<h4 className="text-sm font-bold text-white">Where It Started</h4>
								</div>
							</div>

							{/* Human Touch Photo */}
							<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900 transition-transform hover:rotate-1">
								<img
									src={OrganizersImg}
									alt="meet.js organizers and community"
									className="h-full w-full object-cover opacity-80 transition-opacity hover:opacity-100"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
								<div className="absolute bottom-0 left-0 p-4">
									<h3 className="text-sm font-bold text-white">The Human Touch</h3>
									<p className="mt-1 text-xs text-gray-300">
										Built by people, for people.
									</p>
								</div>
							</div>
						</div>

						{/* Memory Section (Interactive Placeholder) */}
						<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-meetjs-blue/10 to-transparent p-6 backdrop-blur-sm">
							<div className="flex items-start gap-4">
								<div className="rounded-full bg-meetjs-blue/20 p-3 text-meetjs-blue">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
										<polyline points="17 8 12 3 7 8" />
										<line x1="12" x2="12" y1="3" y2="15" />
									</svg>
								</div>
								<div>
									<h3 className="font-bold text-white">Share Your Memory</h3>
									<p className="mt-1 text-sm text-gray-400">
										Got a favorite meet.js moment? Share it with the world using <span className="text-meetjs-blue">#meetjs15</span>.
									</p>
									<a
										href="https://twitter.com/intent/tweet?text=My%20favorite%20meet.js%20memory%20is...%20%23meetjs15%20%23meetjsSummit"
										target="_blank"
										rel="noopener noreferrer"
										className="mt-4 inline-block text-sm font-medium text-meetjs-blue hover:text-white transition-colors"
									>
										Write a post &rarr;
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</section>
	);
};
