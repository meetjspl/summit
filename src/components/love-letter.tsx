import IconCommunity from '@/assets/icon-community.svg?react';
import FirstMeetupImg from '@/assets/previous-events/first-meetup.jpg';
import NetworkingImg from '@/assets/previous-events/meetjs-networking.webp';
import OrganizersImg from '@/assets/previous-events/meetjs-organizers.webp';
import ConferenceImg from '@/assets/previous-events/meetjs-summit.webp';
import {Wrapper} from '@/components/wrapper.tsx';

export const LoveLetter = () => {
	return (
		<section
			className={`relative overflow-hidden bg-black bg-[url(./assets/bg.png)] bg-cover bg-center bg-no-repeat py-16 md:py-24 lg:py-32`}
		>
			{/* Decorative background elements */}
			<div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-meetjs-blue/5 blur-[100px]" />
			<div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-64 w-64 rounded-full bg-meetjs-green/5 blur-[100px]" />

			<Wrapper>
				<div className="flex flex-col gap-8 rounded-2xl bg-black/85 p-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
					{/* Left Column: The Letter */}
					<div className="flex flex-col justify-center space-y-6">
						<div className="space-y-3">
							<div className="inline-flex items-center gap-2 rounded-full border border-meetjs-green/20 bg-meetjs-green/5 px-3 py-1 text-xs font-medium text-meetjs-green md:text-sm">
								<IconCommunity className="h-3.5 w-3.5" />
								<span>Celebrating 15 Years</span>
							</div>
							<h2 className="text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
								A Love Letter to <br />
								<span className="bg-linear-to-r from-meetjs-blue to-meetjs-green bg-clip-text text-transparent">
									Our Community
								</span>
							</h2>
						</div>

						<div className="space-y-4 text-base leading-relaxed text-gray-300 md:text-lg">
							<p>
								It all started on a valentine's eve in <strong>2011</strong>. A
								small group of us gathered at <em>Klub ZAK</em> in Poznań,
								united by a shared passion for JavaScript. We talked about
								jQuery Mobile and HTML5 audio, unaware that we were planting the
								seeds for Poland's largest developer community.
							</p>
							<p>
								15 years later, meet.js is a movement. Thousands of lines of
								code, hundreds of speakers, and countless friendships forged
								over pizza and beer. We remain{' '}
								<span className="font-semibold text-white">
									100% non-commercial
								</span>
								, community-driven, and powered by you.
							</p>
							<p>
								This Summit is our tribute to you. Thank you for showing up, for
								sharing your knowledge, and for making this ecosystem vibrant
								and alive.
							</p>
						</div>

						<div className="flex flex-wrap justify-center gap-8 border-y border-white/10 py-6">
							<div>
								<p className="text-3xl font-bold text-white">15</p>
								<p className="text-xs tracking-wider text-gray-400 uppercase">
									Years
								</p>
							</div>
							<div>
								<p className="text-3xl font-bold text-white">12</p>
								<p className="text-xs tracking-wider text-gray-400 uppercase">
									Cities
								</p>
							</div>
							<div>
								<p className="text-3xl font-bold text-white">800+</p>
								<p className="text-xs tracking-wider text-gray-400 uppercase">
									Events
								</p>
							</div>
						</div>

						<div className="flex justify-center pt-2">
							<a
								href="#tickets"
								className="group inline-flex items-center justify-center gap-2 rounded-lg bg-meetjs-green px-6 py-3 text-sm font-bold text-black transition-all hover:bg-meetjs-green/90 hover:shadow-lg hover:shadow-meetjs-green/20 md:text-base"
							>
								<span>Join the Celebration</span>
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
							</a>
						</div>
					</div>

					{/* Right Column: Visuals & Interactive */}
					<div className="flex flex-col space-y-6">
						{/* Video Placeholder (Hidden) */}
						{/* ... (Video code hidden) ... */}

						{/* Photo Grid */}
						<div className="grid grid-cols-2 gap-3">
							{/* First Meetup (2011) */}
							<div className="group relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-gray-900 shadow-xl">
								<img
									src={FirstMeetupImg}
									alt="First meetup 2011"
									className="h-full w-full object-cover sepia-[.5] transition-all duration-500 group-hover:scale-110 group-hover:sepia-0"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
								<div className="absolute bottom-2 left-3">
									<p className="font-mono text-[10px] text-meetjs-green">
										2011
									</p>
									<p className="text-xs font-bold text-white">The Start</p>
								</div>
							</div>

							{/* Networking */}
							<div className="group relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-gray-900 shadow-xl transition-all hover:-translate-y-1">
								<img
									src={NetworkingImg}
									alt="Networking at meet.js"
									className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
								<div className="absolute bottom-2 left-3">
									<p className="font-mono text-[10px] text-meetjs-blue">
										Community
									</p>
									<p className="text-xs font-bold text-white">Networking</p>
								</div>
							</div>

							{/* Conference */}
							<div className="group relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-gray-900 shadow-xl transition-all hover:-translate-y-1">
								<img
									src={ConferenceImg}
									alt="meet.js Summit"
									className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
								<div className="absolute bottom-2 left-3">
									<p className="font-mono text-[10px] text-meetjs-green">
										Summit
									</p>
									<p className="text-xs font-bold text-white">Scale</p>
								</div>
							</div>

							{/* Organizers */}
							<div className="group relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-gray-900 shadow-xl">
								<img
									src={OrganizersImg}
									alt="Organizers"
									className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
								/>
								<div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-80" />
								<div className="absolute bottom-2 left-3">
									<p className="font-mono text-[10px] text-meetjs-blue">
										People
									</p>
									<p className="text-xs font-bold text-white">Passion</p>
								</div>
							</div>
						</div>

						{/* Memory Section */}
						<div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-meetjs-blue/10 to-transparent p-5 backdrop-blur-sm">
							<div className="flex items-center gap-4">
								<div className="rounded-full bg-meetjs-blue/20 p-2.5 text-meetjs-blue">
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
									>
										<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
										<polyline points="17 8 12 3 7 8" />
										<line x1="12" x2="12" y1="3" y2="15" />
									</svg>
								</div>
								<div className="flex-1">
									<h3 className="text-sm font-bold text-white">
										Share Your Memory
									</h3>
									<p className="text-xs text-gray-400">
										Tweet your favorite moment with{' '}
										<span className="text-meetjs-blue">#meetjs15</span>.
									</p>
								</div>
								<a
									href="https://twitter.com/intent/tweet?text=My%20favorite%20meet.js%20memory%20is...%20%23meetjs15%20%23meetjsSummit"
									target="_blank"
									rel="noopener noreferrer"
									className="rounded bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/20"
								>
									Write &rarr;
								</a>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</section>
	);
};
