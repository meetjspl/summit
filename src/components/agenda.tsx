import PlanByLogo from '@/assets/partners/hello/planby-pro.png';
import { Schedule } from '@/components/schedule/schedule';
import { Wrapper } from '@/components/wrapper.tsx';

export const Agenda = () => {
	return (
		<section id="agenda" className="px-0 py-20 md:px-6">
			<Wrapper className="xs:px-0 px-0! sm:px-0">
				<h2 className="pb-8 text-center text-5xl font-semibold text-white">
					Agenda
				</h2>
				<div className="mx-0 max-w-6xl md:mx-auto">
					<div className="mx-0 max-w-full md:mx-auto md:max-w-2xl">
						<Schedule />
					</div>
				</div>
				<p className="py-2 text-center text-sm text-white">
					* the schedule is indicative and subject to change
				</p>
				<div className="flex items-center justify-center gap-4 p-4 text-white">
					<p className="text-xl">schedule powered by</p>
					<a href="https://planby.app/">
						<img src={PlanByLogo} alt="planby" className="w-64" />
					</a>
				</div>
			</Wrapper>
		</section>
	);
};
