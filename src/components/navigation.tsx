import {Link, useLocation} from '@tanstack/react-router';
import {useEffect, useState} from 'react';

import {TopBar} from '@/components/top-bar.tsx';
import {Wrapper} from '@/components/wrapper.tsx';
import * as gtag from '@/utils/gtag';

import Logomeetjs from '../assets/meetjs_logo_white_light.svg?react';

export const Navigation = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const location = useLocation();

	const isMainPage = location.pathname === '/';

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 100);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navItems = [
		{ label: 'Partners', id: 'partners' },
		{ label: 'Agenda', id: 'agenda' },
		{ label: 'Debate', id: 'debate' },
		{ label: 'Venue', id: 'venue' },
		{ label: 'Videos', id: 'videos' },
		{ label: 'Contact', id: 'contact' },
	];

	const handleNavClick = (label: string) => {
		gtag.trackNavigation(label);
		setIsMobileMenuOpen(false);
	};

	const showLogo = !isMainPage || isScrolled;

	return (
		<nav
			className={`${
				isMainPage ? 'fixed' : 'relative'
			} top-0 right-0 left-0 z-50 transition-all duration-300 ${
				isScrolled || !isMainPage
					? 'bg-black/95 shadow-lg backdrop-blur-sm'
					: 'bg-transparent'
			}`}
		>
			<TopBar />
			<Wrapper>
				<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
					{isMainPage ? (
						<a
							href="#"
							onClick={() => handleNavClick('Logo - Scroll to top')}
							className={`flex items-center gap-2 transition-all duration-300 ${
								showLogo
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
					) : (
						<Link
							to="/"
							onClick={() => handleNavClick('Logo - Go Home')}
							className="flex items-center gap-2 text-white"
							aria-label="Go to home"
						>
							<Logomeetjs className="h-8 w-auto" />
							<span className="hidden text-xl font-semibold md:inline">
								Summit 2026
							</span>
						</Link>
					)}

					{isMainPage && (
						<>
							<div
								className={`hidden items-center gap-4 md:flex ${!isScrolled ? 'ml-auto' : ''}`}
							>
								<a
									href="#tickets"
									className="inline-block w-fit rounded-lg bg-meetjs-green px-4 py-2 text-base font-bold text-black transition-all hover:bg-meetjs-green/90 hover:shadow-lg hover:shadow-meetjs-green/20"
								>
									TICKETS
								</a>
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
						</>
					)}
				</div>

				{isMainPage && isMobileMenuOpen && (
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
