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

type Products = {
	productUrl: string;
	thumbnail: string;
};

export const products: Products[] = [
	{ productUrl: imageProduct1, thumbnail: imageProduct1Thumbnail },
	{ productUrl: imageProduct2, thumbnail: imageProduct2Thumbnail },
	{ productUrl: imageProduct3, thumbnail: imageProduct3Thumbnail },
	{ productUrl: imageProduct4, thumbnail: imageProduct4Thumbnail },
];
