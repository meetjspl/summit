import { Link } from '@tanstack/react-router';

import { Wrapper } from '@/components/wrapper.tsx';

export const SummaryLink = () => {
	return (
		<div className="relative pt-4 pb-8">
			<Wrapper>
				<div className="flex justify-center">
					<Link
						to="/summary"
						className="group inline-flex items-center justify-center gap-2 rounded-lg bg-meetjs-green px-6 py-3 text-sm font-bold text-black transition-all hover:bg-meetjs-green/90 hover:shadow-lg hover:shadow-meetjs-green/20 md:text-base"
					>
						<span>Read Event Summary</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="transition-transform group-hover:translate-x-1"
						>
							<path d="M5 12h14" />
							<path d="m12 5 7 7-7 7" />
						</svg>
					</Link>
				</div>
			</Wrapper>
		</div>
	);
};
