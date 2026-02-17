import AIDevsLogo from '@/assets/ai_devs_logo.svg';
import MeetJSLogo from '@/assets/meetjs_logo_white_light.svg';
import StanislawPhoto from '@/assets/organizers/Stanisław Synowiec (meet.js).png';
import ZbyszekPhoto from '@/assets/organizers/Zbyszek Tenerowicz (meet.js) 1.png';
import KamilPhoto from '@/assets/organizers/kamil-dzieniszewski.jpeg';
import BRAVELogo from '@/assets/partners/BRAVE.png';
import { PartnersLogos } from '@/components/partners-logos.tsx';
import { SpeakerCard } from '@/components/speaker-card.tsx';
import { Wrapper } from '@/components/wrapper.tsx';

import type { Partner } from '@/types/partner.ts';
import type { Speaker } from '@/types/speaker.ts';

const organizers: Partner[] = [
	{
		name: 'meet.js',
		logoUrl: MeetJSLogo,
		websiteUrl: 'https://meetjs.pl',
	},
	{
		name: 'BRAVE',
		logoUrl: BRAVELogo,
		websiteUrl: 'https://brave.courses',
	},
	{
		name: 'AI devs',
		logoUrl: AIDevsLogo,
		websiteUrl: 'https://aidevs.pl',
	},
];

const meetjsTeam: Speaker[] = [
	{
		name: 'Zbyszek Tenerowicz',
		role: 'Organizer',
		company: 'meet.js',
		talkTitle: '',
		bio: 'Security researcher and JavaScript community advocate. Co-organizer of meet.js Warsaw, passionate about making the web safer.',
		imageUrl: ZbyszekPhoto,
		social: {
			bluesky: 'https://bsky.app/profile/naugtur.pl',
			linkedin: 'https://www.linkedin.com/in/zbigniew-tenerowicz-288175165/',
		},
	},
	{
		name: 'Stanisław Synowiec',
		role: 'Organizer',
		company: 'meet.js',
		talkTitle: '',
		bio: 'Frontend developer and community builder from Wrocław. Co-organizer of meet.js, dedicated to fostering the JavaScript community.',
		imageUrl: StanislawPhoto,
		social: {
			linkedin: 'https://www.linkedin.com/in/ssynowiecpl/',
		},
	},
	{
		name: 'Kamil Dzieniszewski',
		role: 'Organizer',
		company: 'meet.js',
		talkTitle: '',
		bio: 'Full-stack developer and event organizer. Co-organizer of meet.js Warsaw, bringing developers together through meetups and conferences.',
		imageUrl: KamilPhoto,
		social: {
			linkedin: 'https://www.linkedin.com/in/dzieniszewski/',
		},
	},
];

export const OrganizersSection = () => {
	return (
		<section
			id="organizers"
			className="bg-black py-16 text-white"
			aria-label="Event Organizers"
		>
			<Wrapper>
				<PartnersLogos
					title="Organizers"
					partners={organizers}
					type="organizers"
				/>

				<div className="mt-12">
					<h3 className="mb-4 text-center text-2xl font-bold">meet.js Team</h3>
					<p className="mb-8 text-center text-lg text-white-2">
						The core team behind meet.js Warsaw, bringing together the
						JavaScript community since 2011. This year, we're partnering with
						BRAVE and AI_devs to make the summit happen.
					</p>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{meetjsTeam.map(member => (
							<SpeakerCard key={member.name} {...member} />
						))}
					</div>
				</div>
			</Wrapper>
		</section>
	);
};
