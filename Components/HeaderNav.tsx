import Link from 'next/link';
import {
	Drawer,
	DrawerBody,
	DrawerOverlay,
	DrawerContent,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import { FaHamburger } from 'react-icons/fa';
import { BsEmojiSunglassesFill, BsEmojiSunglasses } from 'react-icons/bs';
import { useState } from 'react';

export const HeaderNav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { toggleColorMode } = useColorMode();

	const bg = useColorModeValue('black', 'white');

	const clickButton = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="m-auto w-[90%] header  py-3 lg:py-7 relative">
			<div className="lg:hidden text-[#e48900] text-3xl flex justify-end ">
				<FaHamburger onClick={clickButton} />
			</div>

			<div className="hidden lg:flex lg:justify-center lg:items-center ">
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
			<div
				className="lg:h-12 lg:w-12 h-6 w-6  absolute top-4 lg:top-5 left-0 rounded-md flex justify-center items-center cursor-pointer lg:text-2xl text-[#e48900]"
				style={{ backgroundColor: `${bg}` }}
				onClick={toggleColorMode}
			>
				<BsEmojiSunglassesFill />
			</div>
			<Drawer
				placement={'top'}
				onClose={clickButton}
				isOpen={isOpen}
				autoFocus={false}
			>
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
							<Link className="my-2" href={'./experience'}>
								Experiencia
							</Link>
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
