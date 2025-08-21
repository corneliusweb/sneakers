import ProductCardState from '../components/ProductCardState';
import CartProvider from '../context/CartProvider';
import { womenProducts } from '../constants';
import Header from '../components/Header';

const Women = () => {
	return (
		<CartProvider>
			<div
				className='sm:px-8 md:px-10 lg:px-20 xl:px-28
			 max-w-[1120px] mx-auto sm:mb-5'
			>
				<Header />
				<main className='grid gap-20'>
					{womenProducts.map((product) => (
						<ProductCardState key={product.id} product={product} />
					))}
				</main>
			</div>
		</CartProvider>
	);
};
export default Women;
