import { Wrapper } from '@/components/wrapper.tsx';

export const CFP = () => {
	return (
		<section id="cfp" className="relative bg-black py-16">
			<Wrapper>
				<div className="flex flex-col items-center gap-8 text-white">
					<div className="flex w-full flex-col gap-6 text-center">
						<h2 className="text-4xl font-semibold leading-[140%] tracking-tight text-meetjs-green md:text-[40px]">
							Call for Papers
						</h2>

						<div className="mx-auto max-w-3xl space-y-4 text-sm leading-[140%] text-aidevs-white md:text-base">
							<p>
								We're looking for passionate speakers to share their knowledge and
								experience at meet.js Summit 2026!
							</p>

							<p>
								Whether you're an experienced speaker or presenting for the first
								time, we'd love to hear your ideas. We welcome talks on JavaScript,
								web development, AI, and related technologies.
							</p>

							<p className="font-semibold text-white">
								Share your expertise and inspire the community!
							</p>
						</div>

						<div className="mt-4">
							<a
								href="https://forms.gle/nYgebJPC8rvD6GWn9"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 rounded-lg bg-meetjs-green px-8 py-4 text-base font-semibold text-black transition-all hover:bg-meetjs-green/90 hover:scale-105"
							>
								<svg
									className="h-5 w-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
									/>
								</svg>
								Submit Your Proposal
							</a>
						</div>

						<div className="mt-8 grid gap-6 text-left md:grid-cols-3">
							<div className="rounded-lg border border-white/10 bg-white/5 p-6">
								<div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-meetjs-green/10">
									<svg
										className="h-6 w-6 text-meetjs-green"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<h3 className="mb-2 text-lg font-semibold">Talk Duration</h3>
								<p className="text-sm text-white/70">
									20 minute sessions with Q&A
								</p>
							</div>

							<div className="rounded-lg border border-white/10 bg-white/5 p-6">
								<div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-meetjs-blue/10">
									<svg
										className="h-6 w-6 text-meetjs-blue"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
										/>
									</svg>
								</div>
								<h3 className="mb-2 text-lg font-semibold">Topics</h3>
								<p className="text-sm text-white/70">
									JavaScript, Web Dev, AI, and more
								</p>
							</div>

							<div className="rounded-lg border border-white/10 bg-white/5 p-6">
								<div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-meetjs-green/10">
									<svg
										className="h-6 w-6 text-meetjs-green"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
										/>
									</svg>
								</div>
								<h3 className="mb-2 text-lg font-semibold">Audience</h3>
								<p className="text-sm text-white/70">
									500+ developers and tech enthusiasts
								</p>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</section>
	);
};
