import { Wrapper } from '@/components/wrapper.tsx';







export const Venue = () => {
	return (
		<Wrapper>
			<section
				id="venue"
				className="flex flex-col items-center justify-center gap-24 text-white md:flex-row"
			>
				<div className="flex w-full flex-col gap-6 md:w-1/2">
					<h2 className="py-8 text-5xl font-semibold">Venue</h2>
					<p>
						<span className="font-semibold">
							The Warsaw School of Economics
						</span>{' '}
						is an innovative economic university that develops intellectual
						creativity and educates leaders in response to future challenges.
					</p>
					<p>
						It is a significant{' '}
						<span className="font-semibold">global center</span> for scientific
						research, new ideas and initiatives created by the academic
						community, alumni, as well as representatives from business, social
						organizations, and public administration.
					</p>
				</div>
				<div className="w-full md:w-1/2">
					<img
						src="/src/assets/SGH.jpg"
						alt=""
						className="h-72 w-full rounded-2xl object-cover"
					/>
					<img
						src="/src/assets/SGH-logo.jpg"
						alt="SGH - Warsaw School of Economics"
						className="h-32"
					/>
					<p>The Warsaw School of Economics</p>
					<p>al. Niepodległości 162, 02-0554 Warsaw</p>
				</div>
			</section>
		</Wrapper>
	);
};
