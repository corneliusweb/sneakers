import { useState } from 'react';
import { type Product } from '../constants';
import ProductCard from './ProductCard';

interface Props {
	product: Product;
}

const ProductCardState = ({ product }: Props) => {
	const [selectedProduct, setSelectedProduct] = useState(
		product.productImages[0]?.url || ''
	);

	return (
		<ProductCard
			product={product}
			selectedProduct={selectedProduct}
			setSelectedProduct={setSelectedProduct}
		/>
	);
};
export default ProductCardState;
