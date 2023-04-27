import Image from 'next/image';
import { Inter } from 'next/font/google';
import { MainLayout } from '@/Layouts';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	//TO-DO : Poner mi cv para descargar

	return (
		<div>
			<MainLayout title="Guillermo Soto - Home" pageDescription="Hola">
				{/* <Image
					src={'/img/aboutme.jpg'}
					alt={''}
					width={100}
					height={100}
					// style={{ border: '1px solid red' }}
				/> */}
				<div className="absolute top-[33%] left-[5%] m-auto flex justify-center w-[90%] items-center">
					<div className="text-center flex flex-col items-center">
						<div className="flex flex-col items-center lg:flex-row">
							<h2 className="text-center text-8xl lg:text-start lg:text-9xl">
								Hola!
							</h2>
							<p className="text-center w-full my-4 lg:text-start lg:text-base lg:pt-4 lg:ml-4 lg:w-[400px] lg:tracking-widest">
								Mi nombre es
								<span className="mb-[10px] rounded-[10px] font-bold bg-[#e48900] py-1 px-2 mx-2">
									Guillermo Soto
								</span>
								soy desarrollador Front-end. En esta pagina te comparto algunos
								de los proyectos en los que he trabajado
							</p>
						</div>
						<a
							href=""
							className="w-52 no-underline font-bold py-2 px-4 bg-[#e48900] mb-4 mt-4 tracking-widest rounded-[20px] hover:bg-[#c06014]"
						>
							Cv
						</a>
					</div>
				</div>
			</MainLayout>
		</div>
	);
}
