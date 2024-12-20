import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Habbit' },
		{ name: 'description', content: 'Simple Habit Tracker' },
	];
}

export default function Home({ loaderData }: Route.ComponentProps) {
	return (
		<main className='container mx-auto max-w-screen-sm w-full'>
			<nav className='h-14 w-full flex items-center justify-between  px-4 border-b input-bordered'>
				<h2 className='text-xl font-semibold'>Habbit</h2>
				<button className='capitalize btn btn-primary btn-sm'>
					new habbit
				</button>
			</nav>
		</main>
	);
}
