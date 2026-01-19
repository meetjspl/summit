import { useEffect, useState } from 'react';

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

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			setIsMobileMenuOpen(false);
		}
	};

	const navItems = [
		{ label: 'Venue', id: 'venue' },
		{ label: 'Speakers', id: 'speakers' },
		{ label: 'Schedule', id: 'schedule' },
		{ label: 'Tickets', id: 'tickets' },
		{ label: 'FAQ', id: 'faq' },
		{ label: 'Contact', id: 'contact' },
	];

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
			}`}
		>
			<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
				{/* Logo - Only visible when scrolled */}
				<button
					onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					className={`flex items-center gap-2 transition-all duration-300 ${
						isScrolled ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
					}`}
					aria-label="Scroll to top"
				>
					<Logomeetjs className="h-8 w-auto" />
					<span className="hidden text-xl font-semibold text-white md:inline">
						Summit 2026
					</span>
				</button>

				{/* Desktop Navigation */}
				<div className={`hidden items-center gap-8 md:flex ${!isScrolled ? 'ml-auto' : ''}`}>
					{navItems.map((item) => (
						<button
							key={item.id}
							onClick={() => scrollToSection(item.id)}
							className="text-sm font-medium text-white transition-colors hover:text-meetjs-green"
						>
							{item.label}
						</button>
					))}
				</div>

				{/* Mobile Menu Button */}
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

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className="border-t border-white/10 bg-black/95 backdrop-blur-sm md:hidden">
					<div className="flex flex-col gap-4 px-4 py-6">
						{navItems.map((item) => (
							<button
								key={item.id}
								onClick={() => scrollToSection(item.id)}
								className="text-left text-lg font-medium text-white transition-colors hover:text-meetjs-green"
							>
								{item.label}
							</button>
						))}
					</div>
				</div>
			)}
		</nav>
	);
};
