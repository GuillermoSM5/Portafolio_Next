import { MainLayout } from '@/Layouts';
import Profile from '../../public/aboutme.jpg';
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import Image from 'next/image';

const index = () => {
	return (
		<MainLayout title={'Sobre mi'} pageDescription={''}>
			<div className="w-[90%] m-auto pb-28">
				<h2 className="title-h2">Sobre mí</h2>
				{/* <div className="flex justify-center items-center "> */}
				<div className="flex flex-col items-center lg:flex-row lg:justify-center ">
					<div className="w-32 h-32 rounded-[50%] mb-4 overflow-hidden relative lg:w-52 lg:h-52 lg:mx-12">
						<Image className="w-full absolute top-0" src={Profile} alt="" />
					</div>
					<p className="m-0 w-full text-center text-base lg:w-[35rem] lg:text-start">
						{/* <p className="m-0 w-[35rem] text-start text-base"> */}
						Hola, mi nombre Guillermo me gradué como Ingeniero Electrónico del
						Politécnico. Tengo experiencia como desarrollador Front-End, siempre
						interesado por encontrar nuevos retos. Tengo el gusto de dedicarme a
						esto que tanto me apasiona y esto me ha ayudado para aprender cada
						día más y continuar preparándome para poder convertirme en un mejor
						desarrollador
					</p>
				</div>
				<h2
					className="title-h2 hidden lg:block"
					style={{ marginBottom: '2rem' }}
				>
					Contactame
				</h2>

				<div className="px-4 justify-center none hidden lg:flex">
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
