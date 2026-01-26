import { PartnersLogos } from '@/components/partners-logos.tsx';
import { Wrapper } from '@/components/wrapper.tsx';
import * as gtag from '@/utils/gtag';

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

	const handleSponsorOfferDownload = () => {
		gtag.event({
			action: 'download',
			category: 'sponsorship',
			label: 'Sponsor Offer PDF',
		});
	};

	const handleContactClick = () => {
		gtag.event({
			action: 'click',
			category: 'sponsorship',
			label: 'Contact Email',
		});
	};

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
				<div className="mt-24 border-t border-white/10 pt-24 pb-24 text-left">
					<div className="grid gap-12 md:grid-cols-2 md:items-center">
						<div className="flex flex-col gap-6">
							<h2 className="text-4xl leading-[140%] font-semibold tracking-tight text-meetjs-green md:text-[40px]">
								Become a Sponsor
							</h2>
							<div className="space-y-4 text-sm leading-[140%] tracking-tight text-aidevs-white md:text-base">
								<p>
									Show your brand at meet.js Summit - the 15th anniversary of
									meet.js community in Poland. It's a for-charity, community
									driven, Web Technology meets AI conference - attended by over
									500 professionals.
								</p>
								<p>
									At the Summit you will meet people working in the web
									technology space and AI builders. We're not just bolting-on AI
									- we've partnered with the best AI educators we know - AI_devs
									by Brave courses.
								</p>
								<p>
									Take action here and now - make a real connection in person
									and get your candidates emotionally engaged from the start!
								</p>
								<p className="font-semibold">
									Download our Sponsorship Offer (PDF) to find out more and
									contact us directly to discuss sponsorship opportunities.
								</p>
							</div>
						</div>

						<div className="flex flex-col items-center justify-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 text-center md:p-12">
							<h3 className="text-xl font-bold">Ready to join us?</h3>
							<div className="flex w-full max-w-sm flex-col gap-4">
								<a
									href="/2026/pdf/sponsor-offer-meetjs-2026.pdf"
									target="_blank"
									rel="noopener noreferrer"
									onClick={handleSponsorOfferDownload}
									className="rounded bg-meetjs-green px-8 py-4 font-bold text-black transition-transform hover:scale-105 active:scale-95"
								>
									Download Offer (PDF)
								</a>
								<a
									href="mailto:contact@meetjs.pl"
									onClick={handleContactClick}
									className="rounded border-2 border-white px-8 py-4 font-bold text-white transition-colors hover:bg-white hover:text-black"
								>
									Contact Us
								</a>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</section>
	);
};

