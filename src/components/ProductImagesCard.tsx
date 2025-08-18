import { previousIcon, nextIcon } from '../assets/vectors';
import useProductContext from '../context/useProductContext';

const ProductImageCard = () => {
	const { product, selectedProduct, setSelectedProduct } = useProductContext();
	const { productDetails, productImages } = product;

	return (
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
								selectedProduct === productImage.url ? 'opacity-45' : ''
							}`}
						/>
					</div>
				))}
			</div>
		</section>
	);
};
export default ProductImageCard;
