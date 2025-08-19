import { createContext } from 'react';
import { type Product } from '../constants';

interface ProductContextType {
	product: Product;
	selectedProduct: string;
	orderCount: number;
	isModalOpen: boolean;
	setIsModalOpen: (open: boolean) => void;
	setSelectedProduct: (url: string) => void;
	setOrderCount: React.Dispatch<React.SetStateAction<number>>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export default ProductContext;
