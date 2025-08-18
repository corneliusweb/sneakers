import { createContext } from 'react';

interface Product {
	productDetails: {
		company: string;
		heading: string;
		description: string;
		price: number;
		percentageDiscount?: number;
		discountedPrice?: number;
	};
}

interface ProductCardProps {
	product: Product;
	selectedProduct: string;
	setSelectedProduct: (url: string) => void;
}

const ProductContext = createContext<ProductCardProps | object>({});

export default ProductContext;
