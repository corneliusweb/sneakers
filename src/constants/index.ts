import {
	imageProduct1,
	imageProduct2,
	imageProduct3,
	imageProduct4,
	imageProduct1Thumbnail,
	imageProduct2Thumbnail,
	imageProduct3Thumbnail,
	imageProduct4Thumbnail,
} from '../assets/images';

export interface Product {
	id: number;
	productImages: {
		url: string;
		thumbnail: string;
	}[];
	productDetails: {
		company: string;
		heading: string;
		description: string;
		price: number;
		percentageDiscount?: number;
		discountedPrice?: number;
	};
}

export const products: Product[] = [
	{
		id: 1,
		productImages: [
			{ url: imageProduct1, thumbnail: imageProduct1Thumbnail },
			{ url: imageProduct2, thumbnail: imageProduct2Thumbnail },
			{ url: imageProduct3, thumbnail: imageProduct3Thumbnail },
			{ url: imageProduct4, thumbnail: imageProduct4Thumbnail },
		],
		productDetails: {
			company: 'Sneaker company',
			heading: 'Fall limited edition sneakers',
			description:
				"These low profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole they'll withstand everything the weather can offer.",
			price: 125.0,
			percentageDiscount: 50,
			discountedPrice: 250,
		},
	},
	{
		id: 2,
		productImages: [
			{ url: imageProduct1, thumbnail: imageProduct1Thumbnail },
			{ url: imageProduct2, thumbnail: imageProduct2Thumbnail },
			{ url: imageProduct3, thumbnail: imageProduct3Thumbnail },
			{ url: imageProduct4, thumbnail: imageProduct4Thumbnail },
		],
		productDetails: {
			company: 'Sneaker company',
			heading: 'Fall limited edition sneakers',
			description:
				"These low profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole they'll withstand everything the weather can offer.",
			price: 125.0,
			percentageDiscount: 50,
			discountedPrice: 250,
		},
	},
];
