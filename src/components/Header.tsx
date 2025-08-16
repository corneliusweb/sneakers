import { logo, cartIcon, menuIcon, closeIcon } from '../assets/vectors';
import { avatar } from '../assets/images';

const Header = () => {
	return (
		<header className='flex-center justify-between p-4 sm:px-0 sm:border-b sm:border-dark-blue/15 sm:mb-12'>
			<div className='flex-center gap-5'>
				<button className='cursor-pointer inline-block sm:hidden'>
					<img src={menuIcon} alt='menu icon' />
				</button>

				<img src={logo} alt='Sneakers logo' className='inline-block' />

				<div className='absolute z-10 top-0 left-0 bg-white p-5 h-screen w-3/5 sm:static sm:h-full '>
					<img
						src={closeIcon}
						alt='close menu button'
						className='mb-12 sm:hidden'
					/>
					<nav className=' text-black antialiased font-bold text-xl tracking-wide sm:text-lg sm:text-grayish-blue sm:font-semibold'>
						<ul className='grid gap-4 sm:flex'>
							<li>Collections</li>
							<li>Men</li>
							<li>Women</li>
							<li>About</li>
							<li>Contact</li>
						</ul>
					</nav>
				</div>
			</div>
			<div className='flex-center gap-4 shrink-0'>
				<img src={cartIcon} alt='cart icon' />
				<span>
					<img src={avatar} alt='profile avatar' className='w-9' />
				</span>
			</div>
		</header>
	);
};
export default Header;
