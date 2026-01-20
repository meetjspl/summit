import JakubMrugalski from '@/assets/speakers/jakub-mrugalski.png';
import MateuszChrobok from '@/assets/speakers/mateusz-chrobok.png';
import { SpeakerCard } from '@/components/speaker-card.tsx';
import { Wrapper } from '@/components/wrapper.tsx';

import type { Speaker } from '@/types/speaker.ts';

const speakers: Speaker[] = [
	{
		name: 'Jakub Mrugalski',
		role: 'Trainer',
		company: 'AI_devs',
		talkTitle: 'Talk title to be announced',
		bio: 'BIO',
		imageUrl: JakubMrugalski,
		social: {
			twitter: 'https://x.com/uwteam',
			linkedin: 'https://www.linkedin.com/in/unknow/',
			github: 'https://github.com/unkn0w',
			instagram: 'https://www.instagram.com/uwteam_org/',
			youtube: 'https://www.youtube.com/@uwteamorg',
		},
	},
	{
		name: 'Mateusz Chrobok',
		role: 'Trainer / Co-Founder',
		company: 'AI_devs',
		talkTitle: 'Talk title to be announced',
		bio: 'BIO',
		imageUrl: MateuszChrobok,
		social: {
			twitter: 'https://x.com/MateuszChrobok',
			linkedin: 'https://www.linkedin.com/in/mateuszchrobok/',
			instagram: 'https://www.instagram.com/mateuszemsi/',
			youtube: 'https://www.youtube.com/@MateuszChrobok',
		},
	},
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
							We're curating an incredible lineup of industry experts, thought
							leaders, and innovators who will share their knowledge and
							insights.
						</p>
						<p className="text-white-2">
							Stay tuned for speaker announcements! Follow us on social media to
							be the first to know. 🎉
						</p>
					</div>
				) : (
					<>
						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
							{speakers.map(speaker => (
								<SpeakerCard {...speaker} key={speaker.name} />
							))}
						</div>

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
