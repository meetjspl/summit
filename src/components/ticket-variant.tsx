interface TicketVariantProps {
	title: string;
	pack: string[];
	price: number;
	link: string;
	highlight?: boolean;
}

export const TicketVariant = ({
	title,
	pack,
	price,
	link,
	highlight = false,
}: TicketVariantProps) => {
	const classes = highlight
		? 'border-meetjs-green shadow-[0_30px_60px_0_rgba(132,153,41,0.1)]'
		: 'border-gray';

	return (
		<div
			className={`flex w-1/3 flex-col gap-4 rounded-md border bg-black p-8 ${classes}`}
		>
			<h3 className="text-2xl font-semibold">{title}</h3>
			<p>with a {title} ticket, you receive:</p>
			<ul>
				{pack.map((text, i) => (
					<li key={i}>{text}</li>
				))}
			</ul>
			<div className="self-auto">
				<h3 className="text-2xl font-semibold">
					{price} PLN <span className="text-lg font-normal">netto</span>
				</h3>
				<a
					href={link}
					className="block w-full rounded-md bg-gray px-4 py-6 text-center"
				>
					Sign me up now!
				</a>
			</div>
		</div>
	);
};
