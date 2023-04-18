import Image from 'next/image';
import { Inter } from 'next/font/google';
import { MainLayout } from '@/Layouts';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<div>
			<MainLayout title="Guillermo Soto - Home" pageDescription="Hola">
				<div className="absolute top-[33%] left-[5%] m-auto flex justify-center w-[90%] items-center">
					<div className="text-center flex flex-col items-center">
						<div className="flex text-center">
							<h2 className="text-start text-9xl">Hola!</h2>
							<p className="text-start items-center text-base pt-4 ml-4 w-[400px] tracking-widest leading-7">
								Mi nombre es
								<span className="mb-[10px] rounded-[10px] font-bold bg-[#e48900] py-1 px-2 mx-2">
									Guillermo Soto
								</span>
								soy desarrollador Front-end. En esta pagina te comparto algunos
								de los proyectos en los que he trabajado
							</p>
						</div>
					</div>
				</div>
			</MainLayout>
		</div>
	);
}
