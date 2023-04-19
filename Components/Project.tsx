import { Proyecto } from '@/utils/Models';
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa';
import { FC } from 'react';
import Image from 'next/image';

interface Props {
	data: Proyecto;
}

export const Project: FC<Props> = ({ data }) => {
	return (
		<div className="w-[30rem] h-[26rem] text-center m-auto">
			<div className="relative h-[23rem]">
				<h3>{data.title}</h3>
				<p className="h-14 max-h-14 mt-4">{data.Descripcion}</p>
				<div>
					<a
						href={data.repo}
						target="_blank"
						rel="noreferrer"
						className="my-8 no-underline"
					>
						<span className="my-3">
							<FaGithubAlt />
						</span>
						Repositorio
					</a>
					<a
						href={data.web}
						target="_blank"
						rel="noreferrer"
						className="my-8 no-underline"
					>
						<span className="my-3">
							<FaGithubAlt />
						</span>
						Sitio Web
					</a>
				</div>
				<div className="w-full absolute top-8 left-0">
					<Image className="w-full" src={data.image} alt="" />
				</div>
			</div>
		</div>
	);
};
