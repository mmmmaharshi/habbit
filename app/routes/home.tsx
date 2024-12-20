import HabitCard from '~/components/HabitCard';
import type { Route } from './+types/home';
import { calculateTargetDays } from '~/lib/utils';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Habbit' },
		{ name: 'description', content: 'Simple Habit Tracker' },
	];
}

const fakeHabits = [
	{
		title: 'Drink Water',
		description: 'Hydration is key! Stay consistent throughout the day.',
		startDate: new Date('2024-11-01'),
		endDate: new Date('2024-11-30'),

		missedDays: [
			'2024-11-03',
			'2024-11-05',
			'2024-11-07',
			'2024-11-10',
			'2024-11-12',
		],
	},
	{
		title: 'Exercise',
		description:
			"Stay fit by exercising daily, even if it's just 10 minutes.",
		startDate: new Date('2024-11-01'),
		endDate: new Date('2024-11-07'),

		missedDays: ['2024-11-02', '2024-11-04', '2024-11-06'],
	},
	{
		title: 'Read a Book',
		description: 'Expand your knowledge with every page you turn.',
		startDate: new Date('2024-10-01'),
		endDate: new Date('2024-10-30'),

		missedDays: ['2024-10-07', '2024-10-14', '2024-10-18', '2024-10-22'],
	},
	{
		title: 'Meditate',
		description: 'Find peace by meditating for at least 5 minutes every day.',
		startDate: new Date('2024-10-01'),
		endDate: new Date('2024-10-14'),

		missedDays: ['2024-10-05', '2024-10-11'],
	},
	{
		title: 'Learn a New Skill',
		description: 'Spend time daily improving your skills.',
		startDate: new Date('2024-11-01'),
		endDate: new Date('2024-11-30'),
		missedDays: ['2024-11-03', '2024-11-10', '2024-11-14'],
	},
	{
		title: 'Practice Coding',
		description: 'Solve problems daily to improve your programming skills.',
		startDate: new Date('2024-09-01'),
		endDate: new Date('2024-09-30'),

		missedDays: ['2024-09-03', '2024-09-06', '2024-09-12'],
	},
	{
		title: 'Eat Healthy',
		description:
			'Track your meals to stay consistent with healthy eating habits.',
		startDate: new Date('2024-09-01'),
		endDate: new Date('2024-09-21'),

		missedDays: ['2024-09-04', '2024-09-08'],
	},
	{
		title: 'Wake Up Early',
		description: 'Build a habit of waking up early for a productive start.',
		startDate: new Date('2024-11-01'),
		endDate: new Date('2024-11-30'),

		missedDays: ['2024-11-05', '2024-11-10', '2024-11-15'],
	},
	{
		title: 'Write a Journal',
		description: 'Reflect on your day by writing down your thoughts.',
		startDate: new Date('2024-10-01'),
		endDate: new Date('2024-10-31'),

		missedDays: ['2024-10-03', '2024-10-07'],
	},
	{
		title: 'Learn a Language',
		description: 'Practice a new language to expand your horizons.',
		startDate: new Date('2024-08-01'),
		endDate: new Date('2024-10-31'),

		missedDays: ['2024-08-08', '2024-08-15', '2024-08-21'],
	},
];

export default function Home({ loaderData }: Route.ComponentProps) {
	return (
		<main className='container  h-full min-h-screen mx-auto max-w-screen-sm px-4 py-4 md:py-6 pb-10'>
			<section className='space-y-2'>
				{fakeHabits.map(
					(
						{ description, startDate, endDate, title, missedDays },
						idx
					) => {
						const targetDays = calculateTargetDays(startDate, endDate); // Calculate targetDays
						const completedDays = targetDays - missedDays.length; // Calculate completedDays

						return (
							<div key={idx}>
								<HabitCard
									completedDays={completedDays}
									targetDays={targetDays}
									title={title}
									description={description}
									missedDays={missedDays.length}
								/>
								{idx !== fakeHabits.length - 1 && (
									<div className='divider !py-0 !my-0' />
								)}
							</div>
						);
					}
				)}
			</section>
		</main>
	);
}
