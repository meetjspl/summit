import premiumTicket from '@/assets/TICKET_MOCKUP (1).png';
import standardTicket from '@/assets/TICKET_MOCKUP.png';
import { TicketVariant } from '@/components/ticket-variant.tsx';
import { Wrapper } from '@/components/wrapper.tsx';

export const Tickets = () => {
	return (
		<section id="tickets" className="relative bg-black py-16 text-white">
			<div className="absolute top-1/2 h-32 w-full -translate-y-1/2 -rotate-2 bg-meetjs-green md:h-40" />

			<Wrapper>
				<h2 className="relative z-10 mb-16 text-center text-4xl font-bold text-balance md:text-5xl">
					Get Your Summit Ticket
				</h2>
				<div className="relative z-20 flex flex-col justify-center gap-8 md:flex-row">
					<TicketVariant
						title="Regular"
						subtitle="With a Standard ticket, you receive:"
						image={standardTicket}
						imageAlt="Standard Pass ticket mockup"
						pack={['Welcome Pack', 'Access to the coffee area']}
						price={256}
						link="https://cart.easy.tools/checkout/brave/meet-js-summit?plan=price_1Sq8OSLfdutmLA8HuTjzDvMo&lang=en"
					/>
					<TicketVariant
						title="VIP"
						subtitle="With a Premium ticket, you receive:"
						image={premiumTicket}
						imageAlt="Premium Pass ticket mockup"
						pack={[
							'Welcome Pack+',
							'Access to the coffee area',
							'Seating in VIP rows (2-4)',
							'Lunch at the bistro',
							<a
								href="https://instytutfullstack.pl/typescript-boost-cards"
								className="text-meetjs-green underline"
							>
								TypeScript Boost Cards from Instytut Fullstack
							</a>,
							<p>
								-10% for BRAVE courses:{' '}
								<ul className="list-disc pl-6">
									<li>
										<a
											href="https://aidevs.pl/?utm_source=website&utm_medium=vip_link&utm_campaign=meetjs_summit_2026"
											className="text-aidevs-green underline"
										>
											AI_devs 4
										</a>
									</li>
									<li>
										<a
											href="https://www.10xdevs.pl/?utm_source=website&utm_medium=vip_link&utm_campaign=meetjs_summit_2026"
											className="text-[#FFA100] underline"
										>
											10xDevs 3.0
										</a>
									</li>
									<li>
										<a
											href="https://www.aiproductheroes.pl/?utm_source=website&utm_medium=vip_link&utm_campaign=meetjs_summit_2026"
											className="text-[#4855CB] underline"
										>
											AI Product Heroes 2
										</a>
									</li>
								</ul>
							</p>,
							'More benefits soon…',
						]}
						price={512}
						highlight={true}
						link="https://cart.easy.tools/checkout/brave/meet-js-summit?plan=price_1Sq8OSLfdutmLA8HYBFn1jev&lang=en"
					/>
				</div>
			</Wrapper>
		</section>
	);
};
