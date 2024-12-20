import { PlusIcon } from '@heroicons/react/24/solid';

const NavBar = () => {
	return (
		<nav className='container h-[50px] px-4 w-full flex max-w-screen-sm mx-auto items-center justify-between'>
			<h2 className='text-xl font-semibold'>Habbit</h2>
			<button className='capitalize gap-1 btn btn-primary btn-sm'>
				<PlusIcon className='size-5' />
				<span>new Habbit</span>
			</button>
		</nav>
	);
};

export default NavBar;
