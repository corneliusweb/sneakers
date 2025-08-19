import useProductContext from '../context/useProductContext';
import ProductThumbnail from './ProductThumbnail';

const ProductImageLightBox = () => {
	const {
		isModalOpen,
		setIsModalOpen,
		selectedProduct,
		product: { productDetails},
	} = useProductContext();

	if (!isModalOpen) return;

	return (
		<div
			className='w-full h-full content-center fixed z-10 left-0 bottom-0 bg-black/70 overflow-hidden'
			onClick={() => setIsModalOpen(false)}
		>
			<div
				className='w-99 mx-auto'
				onClick={(e) => e.stopPropagation()}
			>
				<img
					src={selectedProduct}
					alt={productDetails.heading}
					className='w-full block rounded-md'
				/>
				<ProductThumbnail />
			</div>
		</div>
	);
};
export default ProductImageLightBox;
