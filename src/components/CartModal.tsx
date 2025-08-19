import useProductContext from '../context/useProductContext';
import Button from './Button';

const CartModal = () => {
	const {
		selectedProduct,
		product: { productDetails },
	} = useProductContext();

	const { heading, price } = productDetails;

	return (
		<dialog open className='bg-white absolute top-9 w-[80%] max-w-80'>
			<h1 className='font-bold'>Cart</h1>
			<div className='flex gap-4'>
				<img src={selectedProduct} alt={heading} />
				<p className='text-grayish-blue'>
					{heading}
					<br />
					<span>{price}</span> x <span>3</span>
					<span className='font-bold'>$375.00</span>
				</p>
				<img src='j' alt='j' />
			</div>
			<Button>Checkout</Button>
		</dialog>
	);
};
export default CartModal;
