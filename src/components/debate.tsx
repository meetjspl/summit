import BartoszPampuch from '@/assets/speakers/bartosz-pampuch.jpeg';
import MarcinCzarkowski from '@/assets/speakers/marcin-czarkowski.jpeg';
import MateuszChrobok from '@/assets/speakers/mateusz-chrobok.png';
import ZbyszekTenerowicz from '@/assets/speakers/zbyszek-tenerowicz.jpg';
import { SpeakerCard } from '@/components/speaker-card.tsx';
import { Wrapper } from '@/components/wrapper.tsx';

import type { Speaker } from '@/types/speaker.ts';

const host: Speaker = {
	name: 'Zbyszek Tenerowicz',
	role: 'Host',
	company: '',
	talkTitle: '',
	bio: 'Host of the panel discussion.',
	imageUrl: ZbyszekTenerowicz,
	social: {
		bluesky: 'https://bsky.app/profile/naugtur.pl',
		linkedin: 'https://www.linkedin.com/in/zbigniew-tenerowicz-288175165/',
	},
};

const panelists: Speaker[] = [
	{
		name: 'Bartosz Pampuch',
		role: 'Panelist',
		company: '',
		talkTitle: '',
		bio: '',
		imageUrl: BartoszPampuch,
		social: {
			linkedin: 'https://www.linkedin.com/in/bartoszpampuch/',
		},
	},
	{
		name: 'Mateusz Chrobok',
		role: 'Panelist / Trainer / Co-Founder',
		company: [{ name: 'AI_devs', url: 'https://www.aidevs.pl/' }],
		talkTitle: '',
		bio: '',
		imageUrl: MateuszChrobok,
		social: {
			x: 'https://x.com/MateuszChrobok',
			linkedin: 'https://www.linkedin.com/in/mateuszchrobok/',
			instagram: 'https://www.instagram.com/mateuszemsi/',
			youtube: 'https://www.youtube.com/@MateuszChrobok',
		},
	},
	{
		name: 'Marcin Czarkowski',
		role: 'Panelist / Co-Founder',
		company: [
			{
				name: 'Przeprogramowani',
				url: 'https://przeprogramowani.pl/',
			},
			{
				name: '10xDevs',
				url: 'https://www.10xdevs.pl/',
			},
		],
		talkTitle: '',
		bio: '',
		imageUrl: MarcinCzarkowski,
		social: {
			linkedin: 'https://www.linkedin.com/in/mkczarkowski/',
		},
	},
	{
		name: 'TBA',
		role: 'Panelist',
		company: '',
		talkTitle: '',
		bio: '',
		imageUrl: '',
	},
	{
		name: 'TBA',
		role: 'Panelist',
		company: '',
		talkTitle: '',
		bio: '',
		imageUrl: '',
	},
];

export const Debate = () => {
	// Combine host and panelists for the grid, but keep host first
	const participants = [...panelists, host];

	return (
		<section
			id="debate"
			className="flex min-h-screen items-center bg-black py-12 text-white"
		>
			<Wrapper className="flex flex-col gap-12 lg:flex-row-reverse lg:items-center lg:gap-16">
				<div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
					<h2 className="mb-4 text-5xl font-semibold">Debate</h2>
					<h3 className="mb-8 text-2xl font-medium text-meetjs-green md:text-3xl">
						“Humans in the loop - where do we go next”
					</h3>
					<div className="space-y-4 text-lg text-white-2">
						<p>
							A panel discussion with{' '}
							<span className="font-semibold text-white">
								experts on AI ranging from academics to hackers
							</span>
							, about the{' '}
							<span className="font-semibold text-white">
								future of programming and agents
							</span>
							.
						</p>
						<p>
							A unique conversation that doesn’t start from the basics of what a
							token is to{' '}
							<span className="font-semibold text-white">
								reach more advanced ideas faster
							</span>
							.
						</p>
						<p>
							With follow-up questions sourced from the audience - you get to{' '}
							<span className="font-semibold text-white">
								suggest and upvote the questions
							</span>
							.
						</p>
					</div>
				</div>

				<div className="w-full flex-[1.5]">
					<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
						{participants.map((participant, index) => (
							<SpeakerCard {...participant} variant="debate" key={index} />
						))}
					</div>
				</div>
			</Wrapper>
		</section>
	);
};
