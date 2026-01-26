import * as gtag from '@/utils/gtag';

interface OutboundLinkProps {
	href: string;
	children: React.ReactNode;
	label?: string;
	className?: string;
	target?: string;
	rel?: string;
}

export const OutboundLink = ({
	href,
	children,
	label,
	className,
	target = '_blank',
	rel = 'noopener noreferrer',
}: OutboundLinkProps) => {
	const handleClick = () => {
		gtag.trackOutboundLink(href, label);
	};

	return (
		<a
			href={href}
			className={className}
			target={target}
			rel={rel}
			onClick={handleClick}
		>
			{children}
		</a>
	);
};
