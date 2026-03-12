import EventImage from '@/assets/summary.webp';
import { Wrapper } from '@/components/wrapper.tsx';

export const EventSummary = () => {
	return (
		<section className="relative overflow-hidden bg-black bg-[url(./assets/bg.png)] bg-cover bg-center bg-no-repeat py-16 md:py-24 lg:py-32">
			{/* Decorative background elements */}
			<div className="absolute top-0 left-0 -mt-20 -ml-20 h-64 w-64 rounded-full bg-meetjs-green/5 blur-[100px]" />
			<div className="absolute right-0 bottom-0 -mr-20 -mb-20 h-64 w-64 rounded-full bg-meetjs-blue/5 blur-[100px]" />

			<Wrapper>
				<div className="flex flex-col gap-8 rounded-2xl bg-black/85 p-6 lg:p-12">
					{/* Header */}
					<div className="space-y-3 text-center">
						<div className="inline-flex items-center gap-2 rounded-full border border-meetjs-green/20 bg-meetjs-green/5 px-4 py-2 text-sm font-medium text-meetjs-green">
							<span>Event Summary</span>
						</div>
						<h2 className="text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
							meet.js Summit 2026
							<br />
							<span className="bg-linear-to-r from-meetjs-blue to-meetjs-green bg-clip-text text-transparent">
								15 Years Strong
							</span>
						</h2>
					</div>

					{/* Summary Text */}
					<div className="mx-auto max-w-4xl space-y-6 text-base leading-relaxed text-gray-300 md:text-lg">
						<p>
							15 years in, meet.js is alive and well, and we've just had another
							one of our nationwide conferences called meet.js Summit.
						</p>
						<p>
							We have celebrated the 15 years of our community full of knowledge
							sharing, inspiration and meeting others - forging relationships
							that can only happen in-person.
						</p>
						<p>
							This time we focused on arranging a schedule full of the most
							up-to-date thoughts from our community members and invited guests.
							We've addressed the AI impact on the work of web developers -
							addressing the benefits, the hype, the future projections and the
							past failings.
						</p>
						<p>
							We're very thankful for our peers organizing meetups all over
							Poland and for all of our great speakers. The quality of the talks
							and communication skill has grown tremendously over the years and
							is reaching new generations of web devs now.
						</p>
						<p className="font-semibold text-white">
							We intend for the community to keep growing and can't wait to see
							you all in our meetups again!
						</p>
					</div>

					{/* Event Photo */}
					<div className="mx-auto w-full max-w-4xl">
						<div className="group relative aspect-video overflow-hidden rounded-xl border border-white/10 shadow-2xl transition-all hover:border-white/20 hover:shadow-meetjs-green/10">
							<img
								src={EventImage}
								alt="meet.js Summit 2026 Event"
								className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
						</div>
					</div>

					{/* Call to Action Links */}
					<div className="mx-auto mt-8 flex w-full max-w-4xl flex-col items-center gap-4 md:flex-row md:justify-center md:gap-6">
						<a
							href="https://forms.gle/XB9WvRvDAeBuwMmDA"
							target="_blank"
							rel="noopener noreferrer"
							className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-meetjs-green px-6 py-3 text-sm font-bold text-black transition-all hover:bg-meetjs-green/90 hover:shadow-lg hover:shadow-meetjs-green/20 md:w-auto md:text-base"
						>
							<span>Share Your Feedback</span>
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
						<a
							href="https://meetjs.pl"
							target="_blank"
							rel="noopener noreferrer"
							className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-meetjs-blue bg-transparent px-6 py-3 text-sm font-bold text-meetjs-blue transition-all hover:bg-meetjs-blue/10 md:w-auto md:text-base"
						>
							<span>Join Our Meetups</span>
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
			</Wrapper>
		</section>
	);
};
