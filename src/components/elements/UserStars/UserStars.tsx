'use client';

import { useMemo } from 'react';
import {addClass} from "@/core/utils/classNames";

interface UserStarsProps {
	rating?: number;
	className?: string;
}

export const UserStars = ({ rating = 2.5, className }: UserStarsProps) => {
	const ratingComputed = useMemo(() => {
		return (rating / 5) * 100;
	}, [rating]);

	return (
		<div
			className={addClass(
				'relative inline-block text-[#FACA21] select-none',
				className,
			)}
		>
			<span
				style={{ width: ratingComputed + '%' }}
				className="absolute transition-all inset-0 overflow-hidden whitespace-nowrap"
			>
				★★★★★
			</span>
			<div>☆☆☆☆☆</div>
		</div>
	);
};
