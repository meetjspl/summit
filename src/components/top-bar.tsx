import {Wrapper} from '@/components/wrapper.tsx';
import {useCountdown} from '@/hooks/useCountdown.ts';

export const TopBar = () => {
	const { timeLeft } = useCountdown();

	if (!timeLeft) return null;

	return (
		<div className="w-full bg-meetjs-green py-2 text-center font-semibold text-black">
			<Wrapper>
				<div className="flex items-center justify-center gap-2">
					<p>
						We are starting on 4th march!{' '}
						<span className="font-bold text-red-600">
							{timeLeft.days}d {String(timeLeft.hours).padStart(2, '0')}h{' '}
							{String(timeLeft.minutes).padStart(2, '0')}m{' '}
							{String(timeLeft.seconds).padStart(2, '0')}s
						</span>{' '}
						left.
					</p>
					<a href="#tickets" className="underline underline-offset-1">
						Join now!
					</a>
				</div>
			</Wrapper>
		</div>
	);
};
