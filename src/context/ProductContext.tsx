import { createContext } from 'react';
import { type Product } from '../constants';

interface ProductContextType {
	product: Product;
	selectedProduct: string;
	setSelectedProduct: (url: string) => void;
	orderCount: number;
	setOrderCount: React.Dispatch<React.SetStateAction<number>>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export default ProductContext;
