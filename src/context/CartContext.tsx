import { createContext } from 'react';
import { type Product } from '../constants';

export interface CartItem {
	product: Product;
	quantity: number;
	selectedProduct: string;
}

interface CartContextType {
	items: CartItem[];
	addToCart: (product: Product, image: string, qty: number) => void;
	isOpen: boolean;
	toggleCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export default CartContext;
