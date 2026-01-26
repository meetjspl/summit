import type { Partner } from '@/types/partner.ts';

interface PartnersLogosProps {
	title: string;
	partners: Partner[];
	type?: Partner['type'];
}

export const PartnersLogos = ({
	title,
	partners,
	type,
}: PartnersLogosProps) => {
	const logoSizeClass =
		type === 'main'
			? 'w-48 md:w-96'
			: type === 'gold'
				? 'w-40 md:w-72'
				: type === 'silver'
					? 'w-32 md:w-60'
					: type === 'hello'
						? 'w-28 md:w-48'
						: 'w-22 md:w-40';

	return (
		<div className="text-center">
			<h2 className="text-xl font-semibold text-meetjs-green uppercase">
				{title}
			</h2>

			<div className="flex flex-wrap items-center justify-center gap-8 py-12 md:gap-12">
				{partners.map(partner => (
					<a
						key={partner.name}
						href={
							partner.websiteUrl
								? `${partner.websiteUrl}?utm_source=website&utm_medium=logo&utm_campaign=meetjs_summit_2026`
								: '#'
						}
						target={partner.websiteUrl ? '_blank' : undefined}
						rel={partner.websiteUrl ? 'noopener noreferrer' : undefined}
						className="group transition-opacity hover:opacity-80"
						aria-label={partner.name}
					>
						<img
							src={partner.logoUrl}
							alt={partner.name}
							className={`h-auto ${!type ? 'max-h-12' : ''} object-contain grayscale transition-all group-hover:grayscale-0 ${logoSizeClass}`}
						/>
					</a>
				))}
			</div>
		</div>
	);
};
