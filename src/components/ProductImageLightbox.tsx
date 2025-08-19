import useProductContext from '../context/useProductContext';

const ProductImageLightBox = () => {
	const {
		isModalOpen,
		setIsModalOpen,
		setSelectedProduct,
		selectedProduct,
		product: { productDetails, productImages },
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
				<div
					className='hidden sm:flex w-full gap-2 mt-5'
					onClick={(e) => e.stopPropagation()}
				>
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
			</div>
		</div>
	);
};
export default ProductImageLightBox;
