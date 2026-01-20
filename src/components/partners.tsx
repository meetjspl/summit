import { Wrapper } from '@/components/wrapper.tsx';

interface Partner {
	name: string;
	logoUrl: string;
	websiteUrl: string;
}

interface PartnersProps {
	partners: Partner[];
}

export const Partners = ({ partners }: PartnersProps) => {
	const realPartners = partners.filter(p => p.name !== 'Your logo here');

	return (
		<section id="partners" className="bg-black py-16 text-white">
			<Wrapper>
				<div className="text-center">
					<h2 className="mb-3 text-sm font-semibold text-meetjs-green uppercase">
						15th Anniversary partners
					</h2>

					<div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
						{realPartners.map(partner => (
							<a
								key={partner.name}
								href={partner.websiteUrl || '#'}
								target={partner.websiteUrl ? '_blank' : undefined}
								rel={partner.websiteUrl ? 'noopener noreferrer' : undefined}
								className="group transition-opacity hover:opacity-80"
								aria-label={partner.name}
							>
								<img
									src={partner.logoUrl}
									alt={partner.name}
									className="h-auto w-32 object-contain grayscale transition-all group-hover:grayscale-0 md:w-40"
								/>
							</a>
						))}
					</div>
				</div>

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
									className="rounded bg-meetjs-green px-8 py-4 font-bold text-black transition-transform hover:scale-105 active:scale-95"
								>
									Download Offer (PDF)
								</a>
								<a
									href="mailto:contact@meetjs.pl"
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
