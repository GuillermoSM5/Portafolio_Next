import { MainLayout } from '@/Layouts';
import Profile from '../../public/aboutme.jpg';
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import Image from 'next/image';

const index = () => {
	return (
		<MainLayout title={'Sobre mi'} pageDescription={''}>
			<div className="w-[90%] m-auto">
				<h2 className="title-h2">Sobre mí</h2>
				<div className="flex justify-center items-center ">
					<div className="w-52 h-52 rounded-[50%] overflow-hidden relative mx-12">
						<Image className="w-full absolute top-0" src={Profile} alt="" />
					</div>
					<p className="m-0 w-[35rem] text-start text-base">
						Soy un aficionado a la tecnología y a la programación, actualmente
						me encuentro estudiando FullStack JavaScript en la academia de Bedu
						que finaliza en el mes de junio. Soy una persona alegre y positiva
						siempre busco seguir aprendiendo para mejorar mis conocimientos y
						mis habilidades. A continuación te dejo mi correo y algunas otros
						lugares donde puedes contactarme.
					</p>
				</div>
				<h2 className="title-h2" style={{ marginBottom: '2rem' }}>
					Contactame
				</h2>

				<div className="px-4 flex justify-center">
					<a
						className="mx-8 text-4xl text-[#e48900] hover:text-[#c06014] "
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/GuillermoSM5"
					>
						<FaGithubAlt />
					</a>
					<a
						className="mx-8 text-4xl text-[#e48900] hover:text-[#c06014] "
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.linkedin.com/in/guillermo-soto-marquez"
					>
						<FaLinkedin />
					</a>
					<a
						className="mx-8 text-4xl text-[#e48900] hover:text-[#c06014] "
						target="_blank"
						rel="noopener noreferrer"
						href="mailto:guillermosotomarquez5@gmail.com"
					>
						<FiMail />
					</a>
				</div>
			</div>
		</MainLayout>
	);
};

export default index;
