import { Link } from '@tanstack/react-router';
import heroBg from '@/assets/SGH_ASCI.png';
import { Wrapper } from './wrapper';

export const NotFound = () => {
	return (
		<div
			className="relative flex min-h-[70svh] flex-col items-center justify-center overflow-hidden bg-cover bg-center text-white"
			style={{ backgroundImage: `url(${heroBg})` }}
		>
			<div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

			<Wrapper className="relative z-10 text-center">
				<h1 className="mb-4 text-9xl font-black tracking-tighter text-accent md:text-[12rem]">
					404
				</h1>

				<div className="mb-8 space-y-4">
					<h2 className="text-2xl font-bold uppercase tracking-widest text-meetjs-green md:text-4xl">
						Page Not Found
					</h2>
					<p className="mx-auto max-w-lg text-lg text-white-2/80">
						It seems your <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm">rm -rf node_modules</code> went a bit too far.
					</p>
				</div>

				<div className="flex flex-col items-center justify-center gap-4 sm:flex-row mt-12">
					<Link
						to="/"
						className="inline-flex h-12 items-center justify-center rounded-sm bg-meetjs-green px-8 text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(188,211,93,0.5)]"
					>
						Go to Homepage
					</Link>
					<Link
						to="/agenda"
						className="inline-flex h-12 items-center justify-center border border-white/20 bg-black/40 px-8 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10"
					>
						View Agenda
					</Link>
				</div>

				<div className="mt-20 flex justify-center opacity-20">
					<div className="h-px w-24 bg-gradient-to-r from-transparent via-white to-transparent" />
				</div>
			</Wrapper>
		</div>
	);
};
