import { Wrapper } from '@/components/wrapper.tsx';

import LogoAiDevs from '../assets/ai_devs_logo.svg?react';
import Logomeetjs from '../assets/meetjs_logo_white_light.svg?react';

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer id="contact" className="bg-black text-white">
			<div className="border-t border-white/10">
				<Wrapper>
					<div className="grid gap-12 py-16 md:grid-cols-4">
						<div className="md:col-span-2">
							<div className="mb-4 flex items-center gap-4">
								<Logomeetjs className="h-10 w-auto" />
								<span className="text-2xl font-semibold">Summit 2026</span>
							</div>
							<p className="mb-4 text-white-2">
								Join us for the 15th anniversary celebration of meet.js,
								featuring the AI_Devs Edition. A full day of learning,
								networking, and inspiration.
							</p>
							<div className="flex items-center gap-4">
								<span className="text-sm text-white-2">
									In partnership with
								</span>
								<LogoAiDevs className="h-8 w-auto" />
							</div>
						</div>

						<div>
							<h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
							<ul className="space-y-2">
								<li>
									<a
										href="#partners"
										className="text-white-2 transition-colors hover:text-meetjs-green"
									>
										Sponsor
									</a>
								</li>
								<li>
									<a
										href="#venue"
										className="text-white-2 transition-colors hover:text-meetjs-green"
									>
										Venue
									</a>
								</li>

								<li>
									<a
										href="#partners"
										className="text-white-2 transition-colors hover:text-meetjs-green"
									>
										Partners
									</a>
								</li>
								<li>
									<a
										href="#tickets"
										className="text-white-2 transition-colors hover:text-meetjs-green"
									>
										Tickets
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="mb-4 text-lg font-semibold">Connect</h3>
							<ul className="mb-6 space-y-2">
								<li className="text-white-2">
									<a
										href="mailto:contact@meetjs.pl"
										className="hover:text-meetjs-green"
									>
										contact@meetjs.pl
									</a>
								</li>
								<li className="text-white-2">
									<a
										href="tel:+48725999744"
										className="hover:text-meetjs-green"
									>
										+48 725 999 744
									</a>
								</li>
							</ul>

							<div className="flex gap-4">
								<a
									href="https://twitter.com/meetjs"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white-2 transition-colors hover:text-meetjs-blue"
									aria-label="Twitter"
								>
									<svg
										className="h-6 w-6"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
									</svg>
								</a>
								<a
									href="https://github.com/meetjs"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white-2 transition-colors hover:text-meetjs-blue"
									aria-label="GitHub"
								>
									<svg
										className="h-6 w-6"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
									</svg>
								</a>
								<a
									href="https://linkedin.com/company/meetjs"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white-2 transition-colors hover:text-meetjs-blue"
									aria-label="LinkedIn"
								>
									<svg
										className="h-6 w-6"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
										<circle cx="4" cy="4" r="2" />
									</svg>
								</a>
								<a
									href="https://discord.gg/UycCSpRh6j"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white-2 transition-colors hover:text-meetjs-blue"
									aria-label="Discord"
								>
									<svg
										className="h-6 w-6"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
									</svg>
								</a>
							</div>
						</div>
					</div>
				</Wrapper>
			</div>

			<div className="border-t border-white/10 bg-black/50">
				<Wrapper>
					<div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
						<p className="text-sm text-white-2">
							© {currentYear} meet.js Summit. All rights reserved.
						</p>
						<div className="flex gap-6 text-sm">
							<a
								href="https://berlincodeofconduct.org/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white-2 transition-colors hover:text-meetjs-green"
							>
								Code of Conduct
							</a>

							<a
								href="https://summit.meetjs.pl/2023/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white-2 transition-colors hover:text-meetjs-green"
							>
								Previous Events
							</a>
						</div>
					</div>
				</Wrapper>
			</div>
		</footer>
	);
};
