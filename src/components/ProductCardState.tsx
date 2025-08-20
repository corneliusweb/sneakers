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

	if (isModalOpen && window.innerWidth >= 695) { // only apply on sm: breakpoint
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'unset';
	}

	const goToNextImage = () => {
		const currentIndex = product.productImages.findIndex(
			(img) => img.url === selectedProduct
		);
		const nextIndex = (currentIndex + 1) % product.productImages.length;
		setSelectedProduct(product.productImages[nextIndex].url);
	};

	const goToPreviousImage = () => {
		const currentIndex = product.productImages.findIndex(
			(img) => img.url === selectedProduct
		);
		const previousIndex =
			currentIndex === 0
				? product.productImages.length - 1
				: currentIndex - 1;
		setSelectedProduct(product.productImages[previousIndex].url);
	};

	return (
		<ProductContext.Provider
			value={{
				product,
				selectedProduct,
				orderCount,
				isModalOpen,
				goToNextImage,
				goToPreviousImage,
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
