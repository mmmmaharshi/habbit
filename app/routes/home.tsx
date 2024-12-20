import NavBar from '~/components/NavBar';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Habbit' },
		{ name: 'description', content: 'Simple Habit Tracker' },
	];
}

export default function Home({ loaderData }: Route.ComponentProps) {
	return (
		<main className=' mx-auto border-b input-bordered w-full'>
			<NavBar />
		</main>
	);
}
