import { CardExperience } from '@/Components';
import { MainLayout } from '@/Layouts';
import { Experiences } from '@/utils/Models';
import React from 'react';

const index = () => {
	return (
		<MainLayout
			title={'Mi experiencia'}
			pageDescription={'Lugares donde eh trabajado'}
		>
			<div className="w-[90%] m-auto h-full pb-24">
				<h2 className="title-h2">Experiencia</h2>
				{/* <div className="w-[90%] m-auto grid grid-cols-2 gap-x-44 my-24"> */}
				<div className="w-[90%] m-auto grid grid-rows-1 gap-y-8 lg:grid-cols-2  lg:my-24 lg:gap-x-44">
					{Experiences.map((exp, i) => (
						<CardExperience data={exp} key={i} />
					))}
				</div>
			</div>
		</MainLayout>
	);
};

export default index;
