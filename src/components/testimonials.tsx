import { Wrapper } from '@/components/wrapper.tsx';

interface Testimonial {
	quote: string;
	name: string;
	role: string;
	company: string;
	imageUrl: string;
}

const testimonials: Testimonial[] = [
	{
		quote: 'An incredible experience! The talks were top-notch and the networking opportunities were unmatched. I left feeling inspired and full of new ideas.',
		name: 'Anna Kowalska',
		role: 'Senior Frontend Developer',
		company: 'TechCorp',
		imageUrl: 'https://i.pravatar.cc/150?img=1',
	},
	{
		quote: "meet.js Summit is hands down the best JavaScript conference in Poland. The community vibe is amazing and every edition keeps getting better.",
		name: 'Marcin Nowak',
		role: 'Tech Lead',
		company: 'StartupHub',
		imageUrl: 'https://i.pravatar.cc/150?img=3',
	},
	{
		quote: 'From the speakers to the venue to the after-party — everything was perfectly organized. Cannot wait for the next edition!',
		name: 'Katarzyna Wiśniewska',
		role: 'Full Stack Engineer',
		company: 'DevStudio',
		imageUrl: 'https://i.pravatar.cc/150?img=5',
	},
];

export const Testimonials = () => {
	return (
		<section id="testimonials" className="bg-black py-16">
			<Wrapper>
				<h2 className="mb-4 text-center text-4xl font-semibold tracking-tight text-meetjs-green md:text-[40px]">
					Testimonials
				</h2>
				<p className="mb-12 text-center text-sm leading-[140%] text-aidevs-white md:text-base">
					What attendees say about meet.js Summit
				</p>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.name}
							className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6"
						>
							<blockquote className="mb-6 flex-1 text-sm leading-relaxed text-aidevs-white md:text-base">
								"{testimonial.quote}"
							</blockquote>

							<div className="flex items-center gap-4">
								<img
									src={testimonial.imageUrl}
									alt={testimonial.name}
									className="h-12 w-12 rounded-full object-cover"
								/>
								<div>
									<p className="font-semibold text-white">
										{testimonial.name}
									</p>
									<p className="text-sm text-white/60">
										{testimonial.role}, {testimonial.company}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</Wrapper>
		</section>
	);
};
