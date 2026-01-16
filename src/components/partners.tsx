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
	return (
		<section>
			<Wrapper>
				<h2 className="text-center text-white">
					<span className="text-meetjs-green">15th Anniversary</span> partners
				</h2>
				<div className="flex flex-wrap items-center justify-around gap-8">
					{partners.map(partner => (
						<a key={partner.name} href={partner.websiteUrl}>
							<img src={partner.logoUrl} alt="name" className="h-12" />
						</a>
					))}
				</div>
			</Wrapper>
		</section>
	);
};
