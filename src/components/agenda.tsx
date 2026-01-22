import PlanByLogo from '@/assets/partners/planby-pro-logo.svg';
import { Schedule } from '@/components/schedule/schedule';
import { Wrapper } from '@/components/wrapper.tsx';

export const Agenda = () => {
	return (
		<section id="agenda" className="px-0 py-20 md:px-6">
			<div className="mx-0 max-w-6xl md:mx-auto">
				<div className="mx-0 max-w-full md:mx-auto md:max-w-2xl">
					<Schedule />
				</div>
			</div>
			<Wrapper>
				<div className="flex items-center justify-center gap-4 p-4 text-white">
					<p className="text-xl">schedule powered by</p>
					<a href="https://planby.app/?utm_source=website&utm_medium=logo&utm_campaign=meetjs_summit_2026">
						<img src={PlanByLogo} alt="planby" className="w-64" />
					</a>
				</div>
			</Wrapper>
		</section>
	);
};
