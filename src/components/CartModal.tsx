import useCartContext from '../context/useCartContext';
import Button from './Button';

const CartModal = () => {
	const { items, removeFromCart, setIsOpen } = useCartContext();

	return (
		<>
			<div className='sm:hidden fixed inset-0 z-[200] bg-transparent'>
				<div className='bg-white min-h-70 w-[95%] rounded-md mt-24 mx-auto p-4 overflow-y-auto'>
					{/* Mobile header  */}
					<div className='flex justify-between items-center mb-6 pb-4 border-b-2 border-black/10'>
						<h1 className='font-bold text-lg'>Cart</h1>
						<button
							onClick={() => setIsOpen(false)}
							className='text-2xl font-bold hover:bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center'
						>
							×
						</button>
					</div>

					{/* Mobile cart content */}
					{items.length === 0 ? (
						<p className='text-center text-gray-500 py-8'>
							Your cart is empty
						</p>
					) : (
						<>
							{items.map((item) => (
								<div
									key={item.product.id}
									className='flex gap-4 mb-6 pb-4 border-b border-gray-100'
								>
									<img
										src={item.selectedProduct}
										alt={item.product.productDetails.heading}
										className='w-16 h-16 rounded object-cover'
									/>
									<div className='flex-1'>
										<h3 className='font-medium mb-2'>
											{item.product.productDetails.heading}
										</h3>
										<div className='flex gap-2'>
											<p className='text-gray-600'>
												${item.product.productDetails.price} ×{' '}
												{item.quantity}
											</p>
											<p className='font-bold'>
												$
												{(
													item.product.productDetails.price *
													item.quantity
												).toFixed(2)}
											</p>
										</div>
									</div>
									<button
										className='cursor-pointer hover:bg-gray-100 p-2 rounded-full h-fit'
										onClick={(e) => {
											e.stopPropagation();
											removeFromCart(item.product.id);
										}}
									>
										🗑️
									</button>
								</div>
							))}
							<Button className='w-full bg-orange text-white py-3 rounded text-lg font-bold mt-6'>
								Checkout
							</Button>
						</>
					)}
				</div>
			</div>

			{/* Desktop Dropdown */}
			<div className='hidden sm:block absolute z-[200] top-14.5 right-0 bg-white w-80 p-4 rounded shadow-lg'>
				<h1 className='font-bold mb-4'>Cart</h1>
				{items.length === 0 ? (
					<p className='text-center text-gray-500 py-8'>
						Your cart is empty
					</p>
				) : (
					<>
						{items.map((item) => (
							<div key={item.product.id} className='flex gap-4 mb-4'>
								<img
									src={item.selectedProduct}
									alt={item.product.productDetails.heading}
									className='w-12 h-12 rounded object-cover'
								/>
								<div className='flex-1 text-sm'>
									{item.product.productDetails.heading}
									<br />${item.product.productDetails.price} ×{' '}
									{item.quantity}{' '}
									<b>
										$
										{(
											item.product.productDetails.price *
											item.quantity
										).toFixed(2)}
									</b>
								</div>
								<button
									className='cursor-pointer hover:bg-gray-100 p-1 rounded'
									onClick={(e) => {
										e.stopPropagation();
										removeFromCart(item.product.id);
									}}
								>
									🗑️
								</button>
							</div>
						))}
						<Button
							className='w-full bg-orange text-white py-2 rounded'
							disabled={true}
						>
							Checkout
						</Button>
					</>
				)}
			</div>
		</>
	);
};
export default CartModal;
