import CarolaKeskula from '@/assets/speakers/carola-keskula.jpeg';
import JakubMrugalski from '@/assets/speakers/jakub-mrugalski.png';
import MateuszChrobok from '@/assets/speakers/mateusz-chrobok.png';
import { SpeakerCard } from '@/components/speaker-card.tsx';
import { Wrapper } from '@/components/wrapper.tsx';

import type { Speaker } from '@/types/speaker.ts';

const speakers: Speaker[] = [
	{
		name: 'Jakub Mrugalski',
		role: 'Trainer',
		company: { name: 'AI_devs', url: 'https://www.aidevs.pl/' },
		talkTitle: 'Talk title to be announced',
		bio:
			'Jakub “Unknow” Mrugalski is a tech entrepreneur and AI (LLM) integration trainer, focused on building practical, real-world applications of artificial intelligence. He is the creator of projects such as AI_Devs, where he teaches developers how to effectively use AI in software products, and the weekly #unknowNews newsletter, followed by a growing community of tech professionals.\n' +
			'He actively shares knowledge about automation, cybersecurity, experimental business models, and modern web tools.',
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
		company: { name: 'AI_devs', url: 'https://www.aidevs.pl/' },
		talkTitle: 'Talk title to be announced',
		bio: 'Mateusz Chrobok is a cybersecurity expert, startup consultant, and tech educator with deep experience in digital security, innovation, and AI. He’s co-founded multiple startups and helps organisations navigate the evolving landscape of online threats and secure digital transformation. As a creator and communicator, Mateusz builds communities around technology through his popular YouTube channel and educational platform, where he explains complex cybersecurity and tech topics in a clear and engaging way.',
		imageUrl: MateuszChrobok,
		social: {
			twitter: 'https://x.com/MateuszChrobok',
			linkedin: 'https://www.linkedin.com/in/mateuszchrobok/',
			instagram: 'https://www.instagram.com/mateuszemsi/',
			youtube: 'https://www.youtube.com/@MateuszChrobok',
		},
	},
	{
		name: 'Carola Kesküla',
		role: 'Senior Front-end Developer & Capability Lead',
		company: '',
		talkTitle: 'Don’t Rush It, Refactor It: Building Better Front-Ends with AI',
		bio: 'Front-end engineer building scalable and accessible experiences. Grounded in full-stack fundamentals and obsessed with real-world impact. At Nortal, has taken the lead on front-end efforts across a wide range of domains: from government systems around the globe to some of the major players in the US tech scene. Currently focused on building interfaces for AI-driven solutions and helping fellow developers level up. Built her first website at 11 and what it was about remains a conversation starter.',
		imageUrl: CarolaKeskula,
		social: {
			linkedin: 'https://www.linkedin.com/in/carolakeskyla/',
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
						<div className="grid justify-center gap-8 md:grid-cols-2 lg:grid-cols-3">
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
