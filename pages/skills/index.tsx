import { Card } from '@/Components';
import { MainLayout } from '@/Layouts';
import { FaReact } from 'react-icons/fa';
import {
	SiJavascript,
	SiTypescript,
	SiTailwindcss,
	SiNextdotjs,
	SiAngular,
	SiSass,
} from 'react-icons/si';
import { BsGit } from 'react-icons/bs';

const index = () => {
	return (
		<MainLayout
			title={'Skills - Guillermo Soto'}
			pageDescription={'Parte de mi conocimiento'}
		>
			<div className="w-[90%] m-auto">
				<h2 className="title-h2">Habilidades</h2>

				<div className="grid grid-cols-2 gap-y-12 mx-auto lg:grid-cols-4 lg:mt-20 lg:gap-y-24">
					<Card name={'JavaScript'}>
						<SiJavascript color="#fce51c" size={'3rem'} />
					</Card>
					<Card name={'TypeScript'}>
						<SiTypescript color="#007acc" size={'3rem'} />
					</Card>
					<Card name={'Tailwind'}>
						<SiTailwindcss color="#06b6d4" size={'3rem'} />
					</Card>
					<Card name={'Next.js'}>
						<SiNextdotjs color="white" size={'3rem'} />
					</Card>
					<Card name={'React'}>
						<FaReact color="#64dcfc" size={'3rem'} />
					</Card>
					<Card name={'Angular'}>
						<SiAngular color="Red" size={'3rem'} />
					</Card>
					<Card name={'Git'}>
						<BsGit color="#e43c14" size={'3rem'} />
					</Card>
					<Card name={'Sass'}>
						<SiSass color="#d474a0" size={'3rem'} />
					</Card>
				</div>
			</div>
		</MainLayout>
	);
};

export default index;
