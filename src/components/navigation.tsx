import { useEffect, useState } from 'react';

import { Wrapper } from '@/components/wrapper.tsx';
import * as gtag from '@/utils/gtag';

import Logomeetjs from '../assets/meetjs_logo_white_light.svg?react';

export const Navigation = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 100);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navItems = [
		{ label: 'Tickets', id: 'tickets' },
		{ label: 'Partners', id: 'partners' },
		{ label: 'Speakers', id: 'speakers' },
		{ label: 'Venue', id: 'venue' },
		{ label: 'CFP', id: 'cfp' },
		{ label: 'Videos', id: 'videos' },
		{ label: 'Contact', id: 'contact' },
	];

	const handleNavClick = (label: string) => {
		gtag.trackNavigation(label);
		setIsMobileMenuOpen(false);
	};

	return (
		<nav
			className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
				isScrolled ? 'bg-black/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
			}`}
		>
			<Wrapper>
				<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
					<a
						href="#"
						onClick={() => handleNavClick('Logo - Scroll to top')}
						className={`flex items-center gap-2 transition-all duration-300 ${
							isScrolled
								? 'translate-x-0 opacity-100'
								: 'pointer-events-none -translate-x-4 opacity-0'
						}`}
						aria-label="Scroll to top"
					>
						<Logomeetjs className="h-8 w-auto" />
						<span className="hidden text-xl font-semibold text-white md:inline">
							Summit 2026
						</span>
					</a>

					<div
						className={`hidden items-center gap-8 md:flex ${!isScrolled ? 'ml-auto' : ''}`}
					>
						{navItems.map(item => (
							<a
								key={item.id}
								href={`#${item.id}`}
								onClick={() => handleNavClick(item.label)}
								className="text-sm font-medium text-white transition-colors hover:text-meetjs-green"
							>
								{item.label}
							</a>
						))}
					</div>

					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className={`flex flex-col gap-1.5 md:hidden ${!isScrolled ? 'ml-auto' : ''}`}
						aria-label="Toggle menu"
						aria-expanded={isMobileMenuOpen}
					>
						<span
							className={`h-0.5 w-6 bg-white transition-all ${
								isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''
							}`}
						/>
						<span
							className={`h-0.5 w-6 bg-white transition-all ${
								isMobileMenuOpen ? 'opacity-0' : ''
							}`}
						/>
						<span
							className={`h-0.5 w-6 bg-white transition-all ${
								isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
							}`}
						/>
					</button>
				</div>

				{isMobileMenuOpen && (
					<div className="border-t border-white/10 bg-black/95 backdrop-blur-sm md:hidden">
						<div className="flex flex-col gap-4 px-4 py-6">
							{navItems.map(item => (
								<a
									key={item.id}
									href={`#${item.id}`}
									onClick={() => handleNavClick(item.label)}
									className="text-left text-lg font-medium text-white transition-colors hover:text-meetjs-green"
								>
									{item.label}
								</a>
							))}
						</div>
					</div>
				)}
			</Wrapper>
		</nav>
	);
};
