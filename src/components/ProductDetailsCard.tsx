import useProductContext from '../context/useProductContext';
import useCartContext from '../context/useCartContext';
import Button from './Button';
import { cartIcon, plusIcon, minusIcon } from '../assets/vectors';

const ProductDetailsCard = () => {
	const { product, orderCount, selectedProduct, setOrderCount } =
		useProductContext();
	const { productDetails } = product;
	const { addToCart } = useCartContext();

	return (
		<>
			{productDetails && (
				<section className='p-4 sm:max-w-[406px]'>
					<p className='uppercase tracking-widest text-[13px] text-dark-grayish-blue font-bold'>
						{productDetails.company}
					</p>
					<h1 className='font-bold text-3xl capitalize my-4 antialiased text-dark-blue md:mb-6'>
						{productDetails.heading}
					</h1>
					<p className='font-semibold text-dark-grayish-blue tracking-wide mb-7'>
						{productDetails.description}
					</p>
					<div className='flex-center justify-between mb-4 sm:mb-6'>
						<p className='text-dark-blue font-bold text-2xl grow relative'>
							${productDetails.price}
							{productDetails.percentageDiscount && (
								<span className='text-sm font-semibold bg-dark-blue text-white px-2.5 py-[3px] inline-block rounded-md absolute transform left-17 top-[45%] -translate-y-1/2'>
									{productDetails.percentageDiscount}%
								</span>
							)}
						</p>
						{productDetails.discountedPrice && (
							<p className='font-bold text-dark-grayish-blue line-through decoration-dark-grayish-blue tracking-wide'>
								${productDetails.discountedPrice}
							</p>
						)}
					</div>

					<div className='sm:flex items-center sm:justify-between'>
						<div className='w-full bg-light-grayish-blue flex-center justify-between rounded-md mb-6 sm:mb-0 sm:max-w-[310px] sm:w-60'>
							<button
								className='cursor-pointer p-4.5 hover:opacity-65'
								onClick={() =>
									setOrderCount((prevCount) =>
										Math.max(0, prevCount - 1)
									)
								}
							>
								<img src={minusIcon} alt='minus icon' />
							</button>
							<span className='font-bold'>{orderCount}</span>
							<button
								className='cursor-pointer p-4.5 hover:opacity-65'
								onClick={() => {
									setOrderCount((prevCount) => prevCount + 1);
								}}
							>
								<img src={plusIcon} alt='plus icon' />
							</button>
						</div>
						<Button
							onClick={() =>
								addToCart(product, selectedProduct, orderCount)
							}
							disabled={orderCount === 0}
						>
							<img src={cartIcon} alt='cart icon' />
							<span className='font-bold'>Add to cart</span>
						</Button>
					</div>
				</section>
			)}
		</>
	);
};
export default ProductDetailsCard;
