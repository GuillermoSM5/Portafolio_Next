import Link from 'next/link';

export const HeaderNav = () => {
	return (
		<div className="m-auto w-[90%] header flex justify-center py-7">
			<Link className="header_link" href={'./'}>
				Hola!
			</Link>
			<Link className="header_link" href={'./skills'}>
				Habilidades
			</Link>
			<Link className="header_link" href={'./projects'}>
				Proyectos
			</Link>
			<Link className="header_link" href={'./experience'}>
				Experiencia
			</Link>
			<Link className="header_link" href={'./aboutme'}>
				Sobre Mi
			</Link>
		</div>
	);
};
