import { Proyecto } from '@/utils/Models';
import { FaGithubAlt } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import { FC } from 'react';
import Image from 'next/image';

interface Props {
	data: Proyecto;
}

export const Project: FC<Props> = ({ data }) => {
	return (
		// <div className="w-[30rem] h-[26rem] text-center m-auto">
		<div className="w-[20rem] h-[26rem] text-center m-auto lg:w-[30rem]">
			<div className="relative h-[23rem] container-project">
				<h3>{data.title}</h3>
				<p className=" max-h-14 mt-4">{data.Descripcion}</p>
				<div className="flex justify-around">
					<a
						href={data.repo}
						target="_blank"
						rel="noreferrer"
						className="my-8 no-underline flex items-center"
					>
						<span className="mx-3">
							<FaGithubAlt />
						</span>
						Repositorio
					</a>
					<a
						href={data.web}
						target="_blank"
						rel="noreferrer"
						className="my-8 no-underline flex items-center"
					>
						<span className="mx-3">
							<TbWorld />
						</span>
						Sitio Web
					</a>
				</div>
				{/* <div className="w-full absolute top-8 left-0 image-project"> */}
				<div className="w-full relative left-0  lg:top-8 lg:absolute image-project">
					<Image className="w-full" src={data.image} alt="" />
				</div>
			</div>
		</div>
	);
};
