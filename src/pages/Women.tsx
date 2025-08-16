import {
	cartIcon,
	minusIcon,
	plusIcon,
	nextIcon,
	previousIcon,
} from '../assets/vectors';
import {
	imageProduct1,
	imageProduct1Thumbnail,
	imageProduct2Thumbnail,
	imageProduct3Thumbnail,
	imageProduct4Thumbnail,
} from '../assets/images';

import Button from '../components/Button';
import Header from '../components/Header';

const Women = () => {
	return (
		<div className='sm:px-28'>
			<Header />
			<main className='max-w-[1440px] '>
				<section className='relative'>
					<img
						src={imageProduct1}
						alt='shoe image'
						className='aspect-square'
					/>
					<button className='prv-nxt-btn left-3'>
						<img
							src={previousIcon}
							alt='previous icon'
							className='inline-block w-2.5'
						/>
					</button>
					<button className='prv-nxt-btn right-3'>
						<img
							src={nextIcon}
							alt='next icon'
							className='inline-block w-2.5'
						/>
					</button>
					<div className='hidden'>
						<img src={imageProduct1Thumbnail} alt='shoe thumbnail' />
						<img src={imageProduct2Thumbnail} alt='shoe thumbnail' />
						<img src={imageProduct3Thumbnail} alt='shoe thumbnail' />
						<img src={imageProduct4Thumbnail} alt='shoe thumbnail' />
					</div>
				</section>

				<section className='p-5'>
					<p className='uppercase tracking-widest text-[13px] text-dark-grayish-blue font-bold'>
						Sneaker company
					</p>
					<h1 className='font-bold text-3xl capitalize my-4 antialiased text-dark-blue'>
						Fall limited edition <br /> Sneakers
					</h1>
					<p className='font-semibold text-dark-grayish-blue tracking-wide mb-7'>
						These low profile sneakers are your perfect casual wear
						companion. Featuring a durable rubber outer sole they'll
						withstand everything the weather can offer.
					</p>
					<div className='flex-center justify-between mb-4'>
						<p className='text-dark-blue font-bold text-2xl grow relative'>
							$125.00
							<span className='text-base bg-dark-blue text-white px-2 py-0.5 inline-block rounded-md absolute transform left-25 top-1/2 -translate-y-1/2'>
								50%
							</span>
						</p>
						<p className='font-bold text-dark-grayish-blue line-through decoration-dark-grayish-blue tracking-wide'>
							$250.00
						</p>
					</div>

					<div>
						<div className='w-full bg-light-grayish-blue flex-center justify-between p-3 rounded-md mb-6'>
							<button className='cursor-pointer'>
								<img src={minusIcon} alt='minus icon' />
							</button>
							<span className='font-bold'>0</span>
							<button className='cursor-pointer'>
								<img src={plusIcon} alt='plus icon' />
							</button>
						</div>
						<Button>
							<img src={cartIcon} alt='cart icon' />
							<span className='font-bold'>Add to cart</span>
						</Button>
					</div>
				</section>
			</main>
		</div>
	);
};
export default Women;
