import { createFileRoute, redirect } from '@tanstack/react-router';

import { ThankYou } from '@/components/thank-you.tsx';

export const Route = createFileRoute('/thank-you')({
	component: ThankYou,
	validateSearch: (search: {
		ec_product: string;
		ec_price: string;
		ec_amount: string;
		ec_currency: string;
		ec_product_id: string;
		ec_product_uuid: string;
		ec_price_id: string;
		ec_order_id: string;
		ec_promo_code: string;
	}) => ({
		ec_product: search.ec_product ?? '',
		ec_price: search.ec_price ?? '',
		ec_amount: search.ec_amount ?? '1',
		ec_currency: search.ec_currency ?? '',
		ec_product_id: search.ec_product_id,
		ec_product_uuid: search.ec_product_uuid,
		ec_price_id: search.ec_price_id,
		ec_order_id: search.ec_order_id,
		ec_promo_code: search.ec_promo_code,
	}),
	beforeLoad: ({ search }) => {
		if (
			!search.ec_order_id ||
			!search.ec_product ||
			!search.ec_price ||
			!search.ec_currency ||
			!search.ec_product_id ||
			!search.ec_product_uuid ||
			!search.ec_price_id
		) {
			throw redirect({ to: '/' });
		}
	},
});
