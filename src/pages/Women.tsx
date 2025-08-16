import Button from '../components/Button';
import {
	logo,
	cartIcon,
	menuIcon,
	minusIcon,
	plusIcon,
	nextIcon,
	previousIcon,
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
			<header>
				<div>
					<img src={menuIcon} alt='menu icon' />

					<img src={logo} alt='Sneakers logo' />
					<nav>
						<ul>
							<li>Collections</li>
							<li>Men</li>
							<li>Women</li>
							<li>About</li>
							<li>Contact</li>
						</ul>
					</nav>
				</div>
				<div>
					<img src={cartIcon} alt='cart icon' />
					<span>
						<img src={avatar} alt='profile avatar' />
					</span>
				</div>
			</header>
			<main>
				<section>
					<img src={imageProduct1} alt='shoe image' />
					<button>
						<img src={previousIcon} alt='previous icon' />
					</button>
					<button>
						<img src={nextIcon} alt='next icon' />
					</button>
					<div>
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
