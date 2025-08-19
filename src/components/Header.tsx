import { logo, cartIcon, menuIcon, closeIcon } from '../assets/vectors';
import { avatar } from '../assets/images';

const Header = () => {
	return (
		<header className='flex-center justify-between pt-4 px-4 mb-15 sm:pt-0 sm:px-0 sm:border-b-2 sm:border-dark-blue/10'>
			<div className='flex-center gap-6 sm:gap-8 md:gap-10'>
				<button className='cursor-pointer inline-block sm:hidden'>
					<img src={menuIcon} alt='menu icon' />
				</button>

				<img src={logo} alt='Sneakers logo' className='-mt-1.5 inline-block' />

				<div className='absolute z-10 top-0 left-0 bg-white p-5 h-screen w-3/5 sm:p-0 sm:static sm:h-full sm:w-full sm:z-auto sm:top-auto sm:left-auto hidden sm:block'>
					<img
						src={closeIcon}
						alt='close menu button'
						className='mb-12 sm:hidden'
					/>
					<nav className=' text-black antialiased font-normal tracking-wide sm:mt-8 sm:text-dark-grayish-blue sm:font-medium sm:tracking-wide md:text-[15px]'>
						<ul className='grid gap-4 sm:gap-3 sm:flex'>
							<li className='nav-list'>Collections</li>
							<li className='nav-list'>Men</li>
							<li className='nav-list'>Women</li>
							<li className='nav-list'>About</li>
							<li className='nav-list'>Contact</li>
						</ul>
					</nav>
				</div>
			</div>
			<div className='flex-center gap-6 shrink-0'>
				<img src={cartIcon} alt='cart icon' className='cursor-pointer' />
				<span className='w-10 block rounded-full hover:ring-2 hover:ring-orange cursor-pointer'>
					<img src={avatar} alt='profile avatar' className='w-10' />
				</span>
			</div>
		</header>
	);
};
export default Header;
