import { previousIcon, nextIcon } from '../assets/vectors';
import useProductContext from '../context/useProductContext';
import ProductThumbnail from './ProductThumbnail';

const ProductImageCard = () => {
	const { product, selectedProduct, setIsModalOpen} =
		useProductContext();
	const { productDetails} = product;

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
				className='aspect-square w-full sm:rounded-md sm:cursor-pointer'
				onClick={() => setIsModalOpen(true)}
			/>
			<ProductThumbnail />
		</section>
	);
};
export default ProductImageCard;
