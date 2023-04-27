import Link from 'next/link';
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
} from '@chakra-ui/react';
import { FaHamburger } from 'react-icons/fa';
import { useState } from 'react';

export const HeaderNav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const clickButton = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="m-auto w-[90%] header  py-3 lg:py-7 ">
			<div
				className="lg:hidden text-[#e48900] text-3xl flex justify-end"
				onClick={clickButton}
			>
				<FaHamburger />
			</div>

			<div className="hidden lg:flex lg:justify-center">
				<Link className="header_link" href={'./'}>
					Hola!
				</Link>
				<Link className="header_link" href={'./skills'}>
					Habilidades
				</Link>
				<Link className="header_link" href={'./projects'}>
					Proyectos
				</Link>
				{/* <Link className="header_link" href={'./experience'}>
				Experiencia
			</Link> */}
				<Link className="header_link" href={'./aboutme'}>
					Sobre Mi
				</Link>
			</div>
			<Drawer placement={'top'} onClose={clickButton} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerBody>
						<div className="flex flex-col">
							<Link className="my-2" href={'./'}>
								Hola!
							</Link>
							<Link className="my-2" href={'./skills'}>
								Habilidades
							</Link>
							<Link className="my-2" href={'./projects'}>
								Proyectos
							</Link>
							{/* <Link className="header_link" href={'./experience'}>
				Experiencia
			</Link> */}
							<Link className="my-2" href={'./aboutme'}>
								Sobre Mi
							</Link>
						</div>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</div>
	);
};
