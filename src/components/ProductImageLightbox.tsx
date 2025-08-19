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
			className='h-screen w-screen fixed z-10 bottom-0 bg-black/70 overflow-hidden'
			onClick={() => setIsModalOpen(false)}
		>
			<div
				className='w-99 content-center'
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
