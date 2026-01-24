import * as gtag from '@/utils/gtag';

interface TicketVariantProps {
	title: string;
	subtitle: string;
	pack: (string | React.ReactNode)[];
	price: number;
	link: string;
	highlight?: boolean;
}

export const TicketVariant = ({
	title,
	subtitle,
	pack,
	price,
	link,
	highlight = false,
}: TicketVariantProps) => {
	const handleBuyClick = () => {
		gtag.event({
			action: 'begin_checkout',
			category: 'ecommerce',
			label: title,
			value: price,
			items: [
				{
					item_name: title,
					price: price,
					currency: 'PLN',
				},
			],
		});
	};

	return (
		<div
			className={`flex w-full flex-col rounded-2xl border-2 bg-black p-8 transition-all hover:scale-105 md:w-96 ${
				highlight
					? 'border-meetjs-green shadow-xl shadow-meetjs-green/20'
					: 'border-white/20 hover:border-white/40'
			}`}
		>
			<h3 className="mb-2 text-3xl font-bold text-white">{title}</h3>
			<p className="mb-6 text-sm text-white/70">{subtitle}</p>
			<ul className="mb-8 flex-1 space-y-3">
				{pack.map((item, index) => (
					<li key={index} className="flex items-start gap-3">
						<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-meetjs-green text-xs font-bold text-black">
							✓
						</span>
						<span className="text-sm text-white/90">{item}</span>
					</li>
				))}
			</ul>

			<div className="mb-6 border-t border-white/10 pt-6">
				<p className="text-left">
					<span className="text-4xl font-bold text-white">{price} PLN</span>
					<span className="ml-2 text-sm text-white/60">netto</span>
				</p>
			</div>

			<a
				href={link}
				onClick={handleBuyClick}
				className="block rounded-lg bg-meetjs-green py-4 text-center font-semibold text-black transition-all hover:bg-meetjs-green/90 hover:shadow-lg hover:shadow-meetjs-green/20"
			>
				Get your ticket!
			</a>
		</div>
	);
};
