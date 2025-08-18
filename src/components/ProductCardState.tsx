import { useState } from 'react';
import { type Product } from '../constants';
import ProductCard from './ProductCard';
import ProductContext from '../context/ProductContext';

interface Props {
	product: Product;
}

const ProductCardState = ({ product }: Props) => {
	const [selectedProduct, setSelectedProduct] = useState(
		product.productImages[0]?.url || ''
	);

	return (
		<ProductContext.Provider
			value={{ product, selectedProduct, setSelectedProduct }}
		>
			<ProductCard />
		</ProductContext.Provider>
	);
};
export default ProductCardState;
