import useProductContext from '../context/useProductContext';

const ProductThumbnail = () => {
	const {
		selectedProduct,
		setSelectedProduct,
		product: { productDetails, productImages },
	} = useProductContext();
	return (
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
	);
};
export default ProductThumbnail;
