import { useState } from 'react';
import CartContext from './CartContext';
import { type Product } from '../constants';
import { type CartItem } from './CartContext';

const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [items, setItems] = useState<CartItem[]>([]);
	const [isOpen, setIsOpen] = useState(false);

	const addToCart = (product: Product, image: string, qty: number) => {
		if (qty <= 0) return;

		setItems((prev: CartItem[]): CartItem[] => {
			const existing = prev.find((i) => i.product.id === product.id);
			if (existing) {
				return prev.map((i) =>
					i.product.id === product.id
						? { ...i, quantity: qty, selectedImage: image }
						: i
				);
			}
			return [...prev, { product, quantity: qty, selectedProduct: image }];
		});
	};

	const removeFromCart = (id: number) => {
		setItems((prev: CartItem[]): CartItem[] =>
			prev.filter((i) => i.product.id !== id)
		);
	};

	return (
		<CartContext.Provider
			value={{
				items,
				addToCart,
				isOpen,
				setIsOpen,
				removeFromCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
export default CartProvider;
