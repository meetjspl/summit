import { useEffect } from 'react';

import heroBg from '@/assets/SGH_ASCI.png';
import AnniversaryLogo from '@/assets/anniversary-logo.svg?react';
import { Avatar } from '@/components/avatar.tsx';
import { Organizers } from '@/components/organizers.tsx';
import { Wrapper } from '@/components/wrapper.tsx';
import { Route } from '@/routes/thank-you.tsx';
import * as gtag from '@/utils/gtag';

export const ThankYou = () => {
	const search = Route.useSearch();
	const { ec_order_id, ec_product, ec_price, ec_currency, ec_amount } = search;

	useEffect(() => {
		if (ec_order_id) {
			gtag.event({
				action: 'purchase',
				category: 'ecommerce',
				transaction_id: ec_order_id,
				value: parseFloat(ec_price),
				currency: ec_currency,
				items: [
					{
						item_name: ec_product,
						price: parseFloat(ec_price),
						quantity: parseInt(ec_amount, 10),
						currency: ec_currency,
					},
				],
			});
			gtag.trackMetaPurchase({
				value: parseFloat(ec_price),
				currency: ec_currency,
				contentName: ec_product,
			});
		}
	}, [ec_order_id, ec_product, ec_price, ec_currency, ec_amount]);

	return (
		<>
			<header
				className="hero relative flex min-h-screen flex-col overflow-hidden bg-cover bg-center md:bg-contain"
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
					<div className="flex flex-col items-center justify-center">
						<p className="text-white">
							Your order ID: <span className="font-bold">{ec_order_id}</span>*
						</p>
						<p className="py-4 text-center font-semibold text-white">
							We're preparing something special for you, and we can't wait to
							meet you on March 4th in Warsaw. Your ticket, in the form of a QR
							code, will soon be in your inbox (save it and show it during
							registration). If you don't see an email from us, check your offer
							folders or contact us at{' '}
							<a
								href="mailto:support@brave.courses"
								className="text-aidevs-green"
							>
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
						<a
							href="#avatar"
							className="mx-auto inline-block w-fit rounded-lg bg-meetjs-green px-8 py-4 text-base font-bold text-black transition-all hover:bg-meetjs-green/90 hover:shadow-lg hover:shadow-meetjs-green/20"
						>
							Generate your avatar and share on social media
						</a>
					</div>
					<p className="py-4 text-sm text-white">
						* if you have any problem with this order use this order ID with
						communication with us.
					</p>
				</Wrapper>
			</header>
			<Avatar />
		</>
	);
};
