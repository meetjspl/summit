import {
	FaDiscord,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaXTwitter,
} from 'react-icons/fa6';

import { Wrapper } from '@/components/wrapper.tsx';

import Logomeetjs from '../assets/meetjs_logo_white_light.svg?react';
import LogoBrave from '../assets/partners/BRAVE-light.png';

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
								<a href="https://www.brave.courses/?utm_source=website&utm_medium=logo&utm_campaign=meetjs_summit_2026">
									<img src={LogoBrave} className="h-8 w-auto" alt="BRAVE" />
								</a>
							</div>
						</div>

						<div>
							<h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
							<ul className="space-y-2">
								<li>
									<a
										href="#tickets"
										className="text-white-2 transition-colors hover:text-meetjs-green"
									>
										Tickets
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
										href="#speakers"
										className="text-white-2 transition-colors hover:text-meetjs-green"
									>
										Speakers
									</a>
								</li>
								<li>
									<a
										href="#debate"
										className="text-white-2 transition-colors hover:text-meetjs-green"
									>
										Debate
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
										href="#videos"
										className="text-white-2 transition-colors hover:text-meetjs-green"
									>
										Videos
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
									href="https://x.com/meetjs?utm_source=website&utm_medium=logo&utm_campaign=meetjs_summit_2026"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white-2 transition-colors hover:text-meetjs-blue"
									aria-label="X"
								>
									<FaXTwitter className="h-6 w-6" />
								</a>
								<a
									href="https://github.com/meetjspl?utm_source=website&utm_medium=logo&utm_campaign=meetjs_summit_2026"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white-2 transition-colors hover:text-meetjs-blue"
									aria-label="GitHub"
								>
									<FaGithub className="h-6 w-6" />
								</a>
								<a
									href="https://www.instagram.com/meet.js_poland/?utm_source=website&utm_medium=logo&utm_campaign=meetjs_summit_2026"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white-2 transition-colors hover:text-meetjs-blue"
									aria-label="Instagram"
								>
									<FaInstagram className="h-6 w-6" />
								</a>
								<a
									href="https://linkedin.com/company/meetjs?utm_source=website&utm_medium=logo&utm_campaign=meetjs_summit_2026"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white-2 transition-colors hover:text-meetjs-blue"
									aria-label="LinkedIn"
								>
									<FaLinkedin className="h-6 w-6" />
								</a>
								<a
									href="https://discord.gg/UycCSpRh6j"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white-2 transition-colors hover:text-meetjs-blue"
									aria-label="Discord"
								>
									<FaDiscord className="h-6 w-6" />
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
								href="https://app.easy.tools/policies/201346d68fdc45508ee9ddc5828d97dc"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white-2 transition-colors hover:text-meetjs-green"
							>
								Privacy policy
							</a>
							<a
								href="https://app.easy.tools/terms/201346d68fdc45508ee9ddc5828d97dc"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white-2 transition-colors hover:text-meetjs-green"
							>
								Terms & Conditions
							</a>

							<a
								href="https://summit.meetjs.pl/2023/?utm_source=website&utm_medium=logo&utm_campaign=meetjs_summit_2026"
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
