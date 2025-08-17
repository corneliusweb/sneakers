import { useState } from 'react';
import { imageProduct1 } from '../assets/images';
import { products } from '../constants';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const Women = () => {
	const [selectedProduct, setSelectedProduct] = useState(imageProduct1);

	return (
		<div className='sm:px-8 md:px-10 lg:px-20 max-w-[1120px] mx-auto h-screen'>
			<Header />
			<main>
				{products.map((product) => (
					<ProductCard
						key={product.productDetails.heading}
						selectedProduct={selectedProduct}
						setSelectedProduct={setSelectedProduct}
						product={product}
					/>
				))}
			</main>
		</div>
	);
};
export default Women;
