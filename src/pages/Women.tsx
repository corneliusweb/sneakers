import Button from '../components/Button';
import {
	logo,
	cartIcon,
	menuIcon,
	minusIcon,
	plusIcon,
	nextIcon,
	previousIcon,
	closeIcon,
} from '../assets/vectors';

import {
	avatar,
	imageProduct1,
	imageProduct1Thumbnail,
	imageProduct2Thumbnail,
	imageProduct3Thumbnail,
	imageProduct4Thumbnail,
} from '../assets/images';

const Women = () => {
	return (
		<div>
			<header className='flex-center justify-between p-4'>
				<div className='flex-center gap-5 grow'>
					<button className='cursor-pointer inline-block '>
						<img src={menuIcon} alt='menu icon' />
					</button>
					<img src={logo} alt='Sneakers logo' className='inline-block' />
					<nav className='absolute hidden top-0 left-0 bg-white p-5 h-screen w-1/2 text-black antialiased font-bold text-xl tracking-wide'>
						<img
							src={closeIcon}
							alt='close menu button'
							className='mb-12'
						/>
						<ul className='grid gap-4'>
							<li>Collections</li>
							<li>Men</li>
							<li>Women</li>
							<li>About</li>
							<li>Contact</li>
						</ul>
					</nav>
				</div>
				<div className='flex-center gap-4 shrink-0'>
					<img src={cartIcon} alt='cart icon' />
					<span>
						<img src={avatar} alt='profile avatar' className='w-9' />
					</span>
				</div>
			</header>
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

				<section>
					<p>Sneaker company</p>
					<h1>
						Fall limited edition <br /> Sneakers
					</h1>
					<p>
						These low profile sneakers are your perfect casual wear
						companion. Featuring a durable rubber outer sole they'll
						withstand everything the weather can offer.
					</p>
					<p>
						$125.00 <span>50%</span>
					</p>
					<p>$250.00</p>

					<div>
						<span>
							<button>
								<img src={minusIcon} alt='minus icon' />
							</button>
							0
							<button>
								<img src={plusIcon} alt='plus icon' />
							</button>
						</span>
						<Button />
					</div>
				</section>
			</main>
		</div>
	);
};
export default Women;
