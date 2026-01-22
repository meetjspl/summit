import {TicketVariant} from '@/components/ticket-variant.tsx';
import {Wrapper} from '@/components/wrapper.tsx';

export const Tickets = () => {
	return (
		<section id="tickets" className="relative bg-black py-16 text-white">
			<div className="absolute top-1/2 h-32 w-full -translate-y-1/2 -rotate-2 bg-meetjs-green md:h-40" />

			<Wrapper>
				<h2 className="relative z-10 mb-16 text-center text-4xl font-bold md:text-5xl">
					Get Your Summit Ticket
				</h2>
				<div className="relative z-20 flex flex-col justify-center gap-8 md:flex-row">
					<TicketVariant
						title="Regular"
						subtitle="With a Standard ticket, you receive:"
						pack={['Welcome Pack', 'Access to the gastro area']}
						price={256}
						link="https://cart.easy.tools/checkout/brave/meet-js-summit?plan=price_1Sq8OSLfdutmLA8HuTjzDvMo&lang=en"
					/>
					<TicketVariant
						title="VIP"
						subtitle="With a Premium ticket, you receive:"
						pack={[
							'Welcome Pack+',
							'Access to the gastro area',
							'Seating in VIP rows (2-4)',
							'Lunch at the bistro',
							'More benefits soon...',
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
