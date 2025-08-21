import { logo, cartIcon, menuIcon, closeIcon } from '../assets/vectors';
import { avatar } from '../assets/images';
import { useEffect, useState } from 'react';
import CartModal from './CartModal';
import useCartContext from '../context/useCartContext';

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const { isOpen, setIsOpen, items } = useCartContext();

	const total = items.reduce((sum, i) => sum + i.quantity, 0);

	// Close cart when clicking outside (desktop only)
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as Element;
			// Only apply click-outside on desktop (sm and up)
			if (
				isOpen &&
				!target.closest('.cart-container') &&
				window.innerWidth >= 640
			) {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener('click', handleClickOutside);
		}

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [isOpen, setIsOpen]);

	// Handle body scroll for both nav and mobile cart
	useEffect(() => {
		const html = document.documentElement;
		if (isNavOpen || (isOpen && window.innerWidth < 640)) {
			html.style.overflow = 'hidden';
			document.body.style.overflow = 'hidden';
		} else {
			html.style.overflow = '';
			document.body.style.overflow = '';
		}

		return () => {
			html.style.overflow = '';
			document.body.style.overflow = '';
		};
	}, [isNavOpen, isOpen]);

	return (
		<header className='flex-center justify-between pt-4 px-4 mb-5 sm:mb-15 sm:pt-0 sm:px-0 sm:border-b-2 sm:border-dark-blue/10'>
			<div className='flex-center gap-6 sm:gap-4 md:gap-15'>
				<button
					className='cursor-pointer inline-block sm:hidden'
					onClick={() => setIsNavOpen(true)}
				>
					<img src={menuIcon} alt='menu icon' />
				</button>

				<img
					src={logo}
					alt='Sneakers logo'
					className='-mt-1.5 inline-block'
				/>

				<div
					className={`fixed inset-0 z-[100] bg-black/70 sm:bg-transparent sm:static sm:h-auto sm:z-auto sm:block ${
						isNavOpen ? 'block' : 'hidden'
					}`}
					onClick={(e) =>
						e.target === e.currentTarget && setIsNavOpen(false)
					}
				>
					<div className='bg-white w-3/5 p-5 h-screen sm:p-0 sm:h-auto'>
						<button onClick={() => setIsNavOpen(false)}>
							<img
								src={closeIcon}
								alt='close menu button'
								className='mb-12 sm:hidden'
							/>
						</button>
						<nav className=' text-black antialiased font-normal tracking-wide sm:mt-2 sm:text-dark-grayish-blue sm:font-medium sm:tracking-wide md:text-[15px]'>
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
			</div>
			<div className='flex-center gap-6 shrink-0 relative'>
				<div
					className='relative cursor-pointer p-1 mt-2 z-50 cart-container'
					onClick={() => setIsOpen(!isOpen)}
				>
					<img src={cartIcon} alt='cart icon' className='cursor-pointer' />
					{total > 0 && (
						<span className='absolute -top-2 -right-2 bg-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
							{total}
						</span>
					)}
				</div>
				{isOpen && <CartModal />}
				<span className='w-10 block rounded-full hover:ring-2 hover:ring-orange cursor-pointer'>
					<img src={avatar} alt='profile avatar' className='w-10' />
				</span>
			</div>
		</header>
	);
};
export default Header;
