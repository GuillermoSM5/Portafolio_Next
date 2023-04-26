import { Project } from '@/components/Project';
import { MainLayout } from '@/Layouts';
import Proyectos from '@/utils/Models';
import React from 'react';

const index = () => {
	return (
		<MainLayout title={'Mis Proyectos'} pageDescription={''}>
			<div className="w-[90%] m-auto pb-[4.5rem]">
				<h2 className="title-h2">Proyectos</h2>
				<div className="grid grid-cols-1 lg:grid-cols-2">
					{Proyectos.map((proj, index) => (
						<Project data={proj} key={index} />
					))}
				</div>
			</div>
		</MainLayout>
	);
};

export default index;
