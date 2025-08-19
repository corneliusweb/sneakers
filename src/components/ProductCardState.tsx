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

	const [orderCount, setOrderCount] = useState<number>(0);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	return (
		<ProductContext.Provider
			value={{
				product,
				selectedProduct,
				orderCount,
				isModalOpen,
				setIsModalOpen,
				setOrderCount,
				setSelectedProduct,
			}}
		>
			<ProductCard />
		</ProductContext.Provider>
	);
};
export default ProductCardState;
