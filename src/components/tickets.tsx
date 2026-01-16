import { TicketVariant } from '@/components/ticket-variant.tsx';
import { Wrapper } from '@/components/wrapper.tsx';

export const Tickets = () => {
	return (
		<section id="tickets" className="relative bg-black text-white">
			<div className="absolute top-1/2 h-32 w-full -rotate-2 bg-meetjs-green" />
			<Wrapper>
				<h2 className="py-8 text-center text-5xl font-semibold">
					Get Your Summit Ticket
				</h2>
				<div className="relative z-20 flex justify-around">
					<TicketVariant
						title="Standard"
						pack={['Welcome Pack', 'Access to the gastro area']}
						price={256}
						link="#"
					/>
					<TicketVariant
						title="VIP"
						pack={[
							'Welcome Pack+',
							'Access to the gastro area',
							'Seating in VIP rows (2-4)',
							'Launch at the bistro',
						]}
						price={512}
						highlight={true}
						link="#"
					/>
				</div>
			</Wrapper>
		</section>
	);
};
