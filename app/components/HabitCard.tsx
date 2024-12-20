import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/16/solid';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

interface Props {
	title: string;
	description?: string;
	targetDays: number;
	completedDays: number;
	missedDays: number;
}

const HabitCard: React.FC<Props> = ({
	title,
	description,
	targetDays,
	completedDays,
	missedDays,
}) => {
	const [progressValue, setProgressValue] = useState(0);

	useEffect(() => {
		const totalDays = completedDays + missedDays;
		const progress = Math.floor((totalDays / targetDays) * 100);
		setProgressValue(progress);

		const targetProgress = Math.min(progress, 100);
		let currentProgress = 0;

		const interval = setInterval(() => {
			if (currentProgress >= targetProgress) {
				clearInterval(interval);
			} else {
				currentProgress += 1;
				setProgressValue(currentProgress);
			}
		}, 10);

		return () => clearInterval(interval);
	}, [completedDays, missedDays, targetDays]);

	return (
		<Link to='/' className='text-pretty space-y-2 group outline-none'>
			<header className='space-y-0.5'>
				<div className='flex items-center justify-between'>
					<h3 className='font-bold line-clamp-1 group-focus-visible:ring ring-primary'>
						{title}
					</h3>
					<div className='flex items-center gap-2'>
						<p className='flex items-center text-primary text-xs gap-0.5'>
							<ArrowUpIcon className='size-3' /> {completedDays}
						</p>
						{missedDays ? (
							<p className='flex items-center text-error text-xs gap-0.5'>
								<ArrowDownIcon className='size-3' />
								{missedDays}
							</p>
						) : null}
					</div>
				</div>
				{description && (
					<p className='text-sm text-neutral-content/80 font-normal'>
						{description}
					</p>
				)}
			</header>
			<footer className='flex pb-1 whitespace-nowrap items-center gap-2 text-neutral-content/70 text-sm'>
				<progress
					value={progressValue}
					max={100}
					className='progress progress-primary transition-all duration-300'
				/>
				<p className='text-xs'>
					{completedDays + missedDays}/{targetDays}
				</p>
			</footer>
		</Link>
	);
};

export default HabitCard;
