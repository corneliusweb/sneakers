import Button from './Button';
import {
	cartIcon,
	minusIcon,
	plusIcon,
	nextIcon,
	previousIcon,
} from '../assets/vectors';
import { type Product } from '../constants';

interface ProductCardProps {
	product: Product;
	selectedProduct: string;
	setSelectedProduct: (url: string) => void;
}

const ProductCard = ({
	product,
	selectedProduct,
	setSelectedProduct,
}: ProductCardProps) => {
	const { productImages, productDetails } = product;

	return (
		<div className='sm:flex sm:items-center sm:justify-center sm:px-0 sm:gap-6'>
			<section className='relative sm:w-[340px]'>
				<button className='prv-nxt-btn left-3 sm:hidden'>
					<img
						src={previousIcon}
						alt='previous icon'
						className='inline-block w-2.5'
					/>
				</button>
				<button className='prv-nxt-btn right-3 sm:hidden'>
					<img
						src={nextIcon}
						alt='next icon'
						className='inline-block w-2.5'
					/>
				</button>

				<img
					src={selectedProduct}
					alt={productDetails.heading}
					className='aspect-square w-full sm:rounded-md'
				/>
				<div className='hidden sm:flex w-full gap-2 mt-5'>
					{productImages.map((productImage, index) => (
						<div
							key={productImage.thumbnail}
							className={`border rounded-md ${
								selectedProduct === productImage.url
									? 'border-2 border-orange'
									: 'border-transparent'
							}`}
							onClick={() =>
								selectedProduct !== productImage.url
									? setSelectedProduct(productImage.url)
									: undefined
							}
						>
							<img
								src={productImage.thumbnail}
								alt={`${productDetails.heading} view ${index + 1}`}
								className={`rounded-sm block h-full w-full hover:opacity-45 cursor-pointer ${
									selectedProduct === productImage.url
										? 'opacity-45'
										: ''
								}`}
							/>
						</div>
					))}
				</div>
			</section>

			{product && (
				<section className='p-4 w-[406px]'>
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

					<div className='sm:flex items-center'>
						<div className='w-full bg-light-grayish-blue flex-center justify-between rounded-md mb-6 sm:mb-0 sm:w-[310px]'>
							<button className='cursor-pointer p-4.5 hover:opacity-65'>
								<img src={minusIcon} alt='minus icon' />
							</button>
							<span className='font-bold'>0</span>
							<button className='cursor-pointer p-4.5 hover:opacity-65'>
								<img src={plusIcon} alt='plus icon' />
							</button>
						</div>
						<Button>
							<img src={cartIcon} alt='cart icon' />
							<span className='font-bold'>Add to cart</span>
						</Button>
					</div>
				</section>
			)}
		</div>
	);
};
export default ProductCard;
