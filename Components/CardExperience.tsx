import { Experience } from '@/utils/Models';
import { FC } from 'react';
import index from '../pages/experience/index';

interface Props {
	data: Experience;
}

export const CardExperience: FC<Props> = ({ data }) => {
	return (
		<div className=" container-experience ">
			<p>{data.puesto}</p>
			<p className="text-[#e48900]">Compañia: {data.compañía}</p>
			<p>{data.duracion}</p>
			<ul className="list-disc ml-6">
				{data.features.map((fe, index) => (
					<li key={index}>{fe}</li>
				))}
			</ul>
		</div>
	);
};
