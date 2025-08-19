import ProductImageCard from './ProductImagesCard';
import ProductDetailsCard from './ProductDetailsCard';
import ProductImageLightbox from './ProductImageLightbox';

const ProductCard = () => {
	return (
		<div className='sm:flex sm:items-center sm:justify-center sm:px-0 sm:gap-6'>
			<ProductImageCard />
			<ProductDetailsCard />
			<ProductImageLightbox />
		</div>
	);
};
export default ProductCard;
