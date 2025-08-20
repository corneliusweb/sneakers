import useCartContext from '../context/useCartContext';
import Button from './Button';

const CartModal = () => {
	const { items } = useCartContext();

	return (
		<div className='absolute top-12 right-0 bg-white w-80 p-4 rounded shadow-lg'>
			<h1 className='font-bold mb-4'>Cart</h1>
			{items.length === 0 ? (
				<p className='text-center text-gray-500 py-8'>Your cart is empty</p>
			) : (
				<>
					{items.map((i) => (
						<div key={i.product.id} className='flex gap-4 mb-4'>
							<img
								src={i.selectedProduct}
								alt={i.product.productDetails.heading}
								className='w-12 h-12 rounded'
							/>
							<div className='flex-1 text-sm'>
								{i.product.productDetails.heading}
								<br />${i.product.productDetails.price} x {i.quantity}{' '}
								<b>
									$
									{(
										i.product.productDetails.price * i.quantity
									).toFixed(2)}
								</b>
							</div>
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
