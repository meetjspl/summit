import AnniversaryLogo from '@/assets/Anniversary-logo.svg?react';
import heroBg from '@/assets/SGH_ASCI.png';
import { Organizers } from '@/components/organizers.tsx';
import { Wrapper } from '@/components/wrapper.tsx';
import { Route } from '@/routes/thank-you.tsx';

export const ThankYou = () => {
	const { ec_order_id } = Route.useSearch();

	return (
		<header
			className="hero relative flex flex-col overflow-hidden bg-cover bg-center md:bg-contain"
			style={{ backgroundImage: `url(${heroBg})` }}
		>
			<Wrapper>
				<Organizers />
				<div className="flex items-center justify-center">
					<AnniversaryLogo className="h-48" />
				</div>
			</Wrapper>
			<Wrapper>
				<h1 className="py-6 text-center text-5xl font-semibold text-white">
					You're in! 🚀
				</h1>
			</Wrapper>
			<div className="my-6 rotate-1 bg-meetjs-green p-4 text-2xl font-semibold">
				<Wrapper>
					<p>
						Thanks for joining meet.js Summit - 15th Anniversary AI_devs4
						Edition
					</p>
				</Wrapper>
			</div>
			<Wrapper>
				<p className="text-white">
					Your order ID: <span className="font-bold">{ec_order_id}</span>*
				</p>
				<p className="py-4 text-center font-semibold text-white">
					We're preparing something special for you, and we can't wait to meet
					you on March 4th in Warsaw. Your ticket, in the form of a QR code,
					will soon be in your inbox (save it and show it during registration).
					If you don't see an email from us, check your offer folders or contact
					us at{' '}
					<a href="mailto:support@brave.courses" className="text-aidevs-green">
						support@brave.courses
					</a>{' '}
					– we'll help!
				</p>
				<a
					href="/"
					className="my-4 flex justify-self-center rounded-xl bg-aidevs-white p-4 font-semibold"
				>
					Back to the main page
				</a>
				<p className="py-4 text-sm text-white">
					* if you have any problem with this order use this order ID with
					communication with us.
				</p>
			</Wrapper>
		</header>
	);
};
