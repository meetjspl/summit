import AIDevsLogo from '@/assets/ai_devs_logo.svg';
import MeetJSLogo from '@/assets/meetjs_logo_white_light.svg';
import BRAVELogo from '@/assets/partners/BRAVE.png';
import SGHLogo from '@/assets/partners/SGH.png';
import SocketDevLogo from '@/assets/partners/gold/socket.png';
import CyberfolksLogo from '@/assets/partners/hello/cyberfolks.svg';
import PlanbyLogo from '@/assets/partners/hello/planby-pro.png';
import JetBrainsLogo from '@/assets/partners/jetbrains-mono-white.svg';
import GamedevjsLogo from '@/assets/partners/main-logo-light.png';
import SlidoLogo from '@/assets/partners/slido.svg';
import WindsurfLogo from '@/assets/partners/silver/windsurf.svg';
import HardparseLogo from '@/assets/partners/hello/hardparse.svg';
import { PartnersLogos } from '@/components/partners-logos.tsx';
import { Wrapper } from '@/components/wrapper.tsx';

import type { Partner } from '@/types/partner.ts';

const organizers: Partner[] = [
	{
		name: 'meet.js',
		logoUrl: MeetJSLogo,
		websiteUrl: 'https://meetjs.pl',
	},
	{
		name: 'AI devs',
		logoUrl: AIDevsLogo,
		websiteUrl: 'https://aidevs.pl',
	},
	{
		name: 'BRAVE',
		logoUrl: BRAVELogo,
		websiteUrl: 'https://brave.courses',
	},
];

const partners: Partner[] = [
	{
		name: 'SGH',
		logoUrl: SGHLogo,
		websiteUrl: 'https://www.sgh.waw.pl',
	},

	{
		name: 'Socket.dev',
		logoUrl: SocketDevLogo,
		websiteUrl: 'https://socket.dev',
		type: 'gold',
	},
	{
		name: 'Windsurf',
		logoUrl: WindsurfLogo,
		websiteUrl: 'https://windsurf.com',
		type: 'silver',
	},
	{
		name: 'JetBrains',
		logoUrl: JetBrainsLogo,
		websiteUrl: 'https://www.jetbrains.com',
		type: 'silver',
	},
	{
		name: 'Crossweb',
		logoUrl:
			'https://crossweb.pl/upload/materialy/logo_podstawowe_mono_biale_JPG.jpg',
		websiteUrl: 'https://crossweb.pl',
	},
	{
		name: 'Typesense',
		logoUrl: 'https://typesense.org/typesense-logo-dark.svg',
		websiteUrl: 'https://typesense.org',
		type: 'gold',
	},
	{
		name: 'slido',
		logoUrl: SlidoLogo,
		websiteUrl: 'https://www.slido.com/',
	},

	{
		name: 'cyber_Folks',
		logoUrl: CyberfolksLogo,
		websiteUrl: 'https://cyberfolks.pl/',
		type: 'hello',
	},
	{
		name: 'Netflix',
		logoUrl:
			'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjI3Ni43NDIiIHZpZXdCb3g9IjAgMCAxMDI0IDI3Ni43NDIiPjxwYXRoIGQ9Ik0xNDAuODAzIDI1OC45MDRjLTE1LjQwNCAyLjcwNS0zMS4wNzkgMy41MTYtNDcuMjk0IDUuNjc2bC00OS40NTgtMTQ0Ljg1NnYxNTEuMDczYy0xNS40MDQgMS42MjEtMjkuNDU3IDMuNzgzLTQ0LjA1MSA1Ljk0NXYtMjc2Ljc0Mmg0MS4wOGw1Ni4yMTIgMTU3LjAyMXYtMTU3LjAyMWg0My41MTF2MjU4LjkwNHptODUuMTMxLTE1Ny41NThjMTYuNzU3IDAgNDIuNDMxLS44MTEgNTcuODM1LS44MTF2NDMuMjRjLTE5LjE4OSAwLTQxLjYxOSAwLTU3LjgzNS44MTF2NjQuMzIyYzI1LjQwNS0xLjYyMSA1MC44MDktMy43ODUgNzYuNDgyLTQuNTk2djQxLjYxN2wtMTE5LjcyNCA5LjQ2MXYtMjU1LjM5aDExOS43MjR2NDMuMjQxaC03Ni40ODJ2NTguMTA1em0yMzcuMjg0LTU4LjEwNGgtNDQuODYydjE5OC45MDhjLTE0LjU5NCAwLTI5LjE4OCAwLTQzLjIzOS41Mzl2LTE5OS40NDdoLTQ0Ljg2MnYtNDMuMjQyaDEzMi45NjVsLS4wMDIgNDMuMjQyem03MC4yNjYgNTUuMTMyaDU5LjE4N3Y0My4yNGgtNTkuMTg3djk4LjEwNGgtNDIuNDMzdi0yMzkuNzE4aDEyMC44MDh2NDMuMjQxaC03OC4zNzV2NTUuMTMzem0xNDguNjQxIDEwMy41MDdjMjQuNTk0LjUzOSA0OS40NTYgMi40MzQgNzMuNTEgMy43ODN2NDIuNzAxYy0zOC42NDYtMi40MzQtNzcuMjkzLTQuODYzLTExNi43NS01LjY3NnYtMjQyLjY4OWg0My4yNHYyMDEuODgxem0xMDkuOTk0IDQ5LjQ1N2MxMy43ODMuODEyIDI4LjM3NyAxLjYyMyA0Mi40MyAzLjI0MnYtMjU0LjU4aC00Mi40M3YyNTEuMzM4em0yMzEuODgxLTI1MS4zMzhsLTU0Ljg2MyAxMzEuNjE1IDU0Ljg2MyAxNDUuMTI3Yy0xNi4yMTctMi4xNjItMzIuNDMyLTUuMTM1LTQ4LjY0OC03LjgzOGwtMzEuMDc4LTc5Ljk5NC0zMS42MTcgNzMuNTFjLTE1LjY3OC0yLjcwNS0zMC44MTItMy41MTYtNDYuNDg0LTUuNjc4bDU1LjY3Mi0xMjYuNzUtNTAuMjY5LTEyOS45OTJoNDYuNDgybDI4LjM3NyA3Mi42OTkgMzAuMjctNzIuNjk5aDQ3LjI5NXoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=',
		websiteUrl: 'https://www.netflix.com',
		type: 'hello',
	},
	{
		name: 'Instytut Fullstack',
		logoUrl: 'https://instytutfullstack.pl/assets/newLogoVector.svg',
		websiteUrl: 'https://instytutfullstack.pl',
	},
	{
		name: 'plabny',
		logoUrl: PlanbyLogo,
		websiteUrl: 'https://planby.app/',
		type: 'hello',
	},
	{
		name: 'Hardparse',
		logoUrl: HardparseLogo,
		websiteUrl: 'https://hardparse.com',
		type: 'hello',
	},
	{
		name: 'Gamedev.js',
		logoUrl: GamedevjsLogo,
		websiteUrl: 'https://gamedevjs.com',
	},
];

export const Partners = () => {
	const realPartners = partners.filter(p => !p.type);
	const mainSponsor = partners.filter(p => p.type === 'main');
	const goldSponsors = partners.filter(p => p.type === 'gold');
	const silverSponsors = partners.filter(p => p.type === 'silver');
	const helloSponsors = partners.filter(p => p.type === 'hello');

	return (
		<section id="partners" className="bg-black py-16 text-white">
			<Wrapper>
				<PartnersLogos title="Organizers" partners={organizers} type="organizers" />
				{mainSponsor.length !== 0 && (
					<PartnersLogos
						title="Main sponsor of 15th Anniversary"
						partners={mainSponsor}
						type="main"
					/>
				)}
				{goldSponsors.length !== 0 && (
					<PartnersLogos
						title="Gold sponsors"
						partners={goldSponsors}
						type="gold"
					/>
				)}
				{silverSponsors.length !== 0 && (
					<PartnersLogos
						title="Silver sponsors"
						partners={silverSponsors}
						type="silver"
					/>
				)}
				{helloSponsors.length !== 0 && (
					<PartnersLogos
						title="Hello sponsors"
						partners={helloSponsors}
						type="hello"
					/>
				)}
				{realPartners.length !== 0 && (
					<PartnersLogos title="Partners" partners={realPartners} />
				)}
			</Wrapper>
		</section>
	);
};
