import Button from '../components/Button';

const Women = () => {
	return (
		<div>
			<header>
				<div>
					<img src='' alt='menu icon' aria-label='menu icon' />

					<img src='' alt='Sneakers logo' />
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
					<img src='' alt='cart icon' aria-label='cart icon' />
					<span>
						<img src='' alt='profile avatar' />
					</span>
				</div>
			</header>
			<main>
				<section>
					<img src='' alt='shoe image' />
					<div>
						<img src='' alt='shoe' />
						<img src='' alt='shoe' />
						<img src='' alt='shoe' />
						<img src='' alt='shoe' />
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
								<img src='' alt='minus icon' />
							</button>
							0
							<button>
								<img src='' alt='plus icon' />
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
