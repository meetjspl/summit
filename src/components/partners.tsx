import { PartnersLogos } from '@/components/partners-logos.tsx';
import { Wrapper } from '@/components/wrapper.tsx';

import type { Partner } from '@/types/partner.ts';

interface PartnersProps {
	partners: Partner[];
}

export const Partners = ({ partners }: PartnersProps) => {
	const realPartners = partners.filter(p => !p.type);
	const mainSponsor = partners.filter(p => p.type === 'main');
	const goldSponsors = partners.filter(p => p.type === 'gold');
	const silverSponsors = partners.filter(p => p.type === 'silver');
	const helloSponsors = partners.filter(p => p.type === 'hello');

	return (
		<section id="partners" className="bg-black py-16 text-white">
			<Wrapper>
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
