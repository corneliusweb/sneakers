import ProductCardState from '../components/ProductCardState';
import { products } from '../constants';
import Header from '../components/Header';

const Women = () => {
	return (
		<div className='sm:px-8 md:px-10 lg:px-20 2xl:px-28
		 max-w-[1120px] mx-auto h-screen sm:mb-80'>
			<Header />
			<main>
				{products.map((product) => (
					<ProductCardState
						key={product.id}
						product={product}
					/>
				))}
			</main>
		</div>
	);
};
export default Women;
