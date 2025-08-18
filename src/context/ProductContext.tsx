import { createContext } from 'react';
import { type Product } from '../constants';

interface ProductContextType {
	product: Product;
	selectedProduct: string;
	setSelectedProduct: (url: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export default ProductContext;
