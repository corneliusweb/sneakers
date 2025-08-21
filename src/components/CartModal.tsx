import useCartContext from '../context/useCartContext';
import Button from './Button';

const CartModal = () => {
	const { items, removeFromCart } = useCartContext();

	return (
		<div className='absolute top-12 right-0 bg-white w-80 p-4 rounded shadow-lg'>
			<h1 className='font-bold mb-4'>Cart</h1>
			{items.length === 0 ? (
				<p className='text-center text-gray-500 py-8'>Your cart is empty</p>
			) : (
				<>
					{items.map((item) => (
						<div key={item.product.id} className='flex gap-4 mb-4'>
							<img
								src={item.selectedProduct}
								alt={item.product.productDetails.heading}
								className='w-12 h-12 rounded'
							/>
							<div className='flex-1 text-sm'>
								{item.product.productDetails.heading}
								<br />${item.product.productDetails.price} x{' '}
								{item.quantity}{' '}
								<b>
									$
									{(
										item.product.productDetails.price * item.quantity
									).toFixed(2)}
								</b>
							</div>
							<button className='cursor-pointer' onClick={() => removeFromCart(item.product.id)}>
								🗑️
							</button>
						</div>
					))}
					<Button className='w-full bg-orange text-white py-2 rounded'>
						Checkout
					</Button>
				</>
			)}
		</div>
	);
};
export default CartModal;
