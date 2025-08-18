import ProductImageCard from './ProductImagesCard';
import ProductDetailsCard from './ProductDetailsCard';

const ProductCard = () => {
	return (
		<div className='sm:flex sm:items-center sm:justify-center sm:px-0 sm:gap-6'>
			<ProductImageCard />
			<ProductDetailsCard />
		</div>
	);
};
export default ProductCard;
