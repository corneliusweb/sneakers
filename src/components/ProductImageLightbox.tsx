import useProductContext from '../context/useProductContext';
import ProductThumbnail from './ProductThumbnail';
import { nextIcon, previousIcon } from '../assets/vectors';

const ProductImageLightBox = () => {
	const {
		isModalOpen,
		setIsModalOpen,
		goToNextImage,
		goToPreviousImage,
		selectedProduct,
		product: { productDetails },
	} = useProductContext();

	if (!isModalOpen) return;

	return (
		<div
			className='hidden sm:block w-full h-full content-center fixed z-10 left-0 bottom-0 bg-black/70 overflow-hidden'
			onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
		>
			<div className='w-99 mx-auto '>
				<div className='relative'>
					<img
						src={selectedProduct}
						alt={productDetails.heading}
						className='w-full block rounded-md'
					/>
					<button
						className='prv-nxt-btn -left-4'
						onClick={goToPreviousImage}
					>
						<img
							src={previousIcon}
							alt='previous icon'
							className='inline-block w-2.5'
						/>
					</button>
					<button className='prv-nxt-btn -right-4' onClick={goToNextImage}>
						<img
							src={nextIcon}
							alt='next icon'
							className='inline-block w-2.5'
						/>
					</button>
				</div>
				<ProductThumbnail />
			</div>
		</div>
	);
};
export default ProductImageLightBox;
