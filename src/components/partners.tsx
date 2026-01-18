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

					<div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-30 md:gap-12">
						{[...Array(6)].map((_, i) => (
							<div
								key={i}
								className="flex h-16 w-32 items-center justify-center rounded border-2 border-dashed border-white/20 text-xs text-white/40 md:w-40"
							>
								LOGO
							</div>
						))}
					</div>
				</div>
			</Wrapper>
		</section>
	);
};
