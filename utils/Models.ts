import { StaticImageData } from 'next/image';
import CV from '../public/Portafolio.png';
import tasklist from '../public/task-list.png';
import Pokedex from '../public/pokedex.png';
import PokemonLink from '../public/pokemonlink.png';
import Shopping from '../public/shopping-cart.png';
import Matcha from '../public/Matcha.png';
import Profile from '../public/profile-card.png';

export interface Proyecto {
	title: string;
	Descripcion: string;
	repo: string;
	web: string;
	image: StaticImageData;
}

export interface Experience {
	puesto: string;
	compañía: string;
	duracion: string;
	features: string[];
}

export const Proyectos: Proyecto[] = [
	{
		title: 'Portafolio',
		Descripcion:
			'Sito web desarrollado en Next,js que estan viendo en este momento',
		repo: 'https://github.com/GuillermoSM5/Portafolio',
		web: 'https://guillermo-cv.netlify.app/',
		image: CV,
	},
	{
		title: 'Matcha',
		Descripcion: 'Ejercicio de maquetacion web',
		repo: 'https://github.com/GuillermoSM5/Proyecto_Matcha',
		web: 'https://prueba-match.netlify.app',
		image: Matcha,
	},
	{
		title: 'Profile Card',
		Descripcion: 'Ejercicio de maquetacion con html y Sass',
		repo: 'https://github.com/GuillermoSM5/ProfileCard',
		web: 'https://profile-card-gsm.netlify.app/',
		image: Profile,
	},
	{
		title: 'Task-List',
		Descripcion:
			'Sito web echo con que te permite anotar las tareas a realizar y marcar las que ya estan completadas asi como ocultar las tareas completadas',
		repo: 'https://github.com/GuillermoSM5/task-list',
		web: 'https://task-list-gsm.netlify.app/',
		image: tasklist,
	},
	{
		title: 'Pokedex',
		Descripcion:
			'Busca cualquier pokemon por nombre o id y agregarlo a tu pokedex tambien puedes liberar a cualquier pokemon',
		repo: 'https://github.com/GuillermoSM5/pokedex',
		web: 'https://pokedex149.netlify.app/',
		image: Pokedex,
	},
	{
		title: 'Pokemon Link',
		Descripcion:
			'Pequeño ejercicio con el Api de pokemon en la seccion de blog',
		repo: 'https://github.com/GuillermoSM5/Blog',
		web: 'https://pokemon-select.netlify.app',
		image: PokemonLink,
	},
	{
		title: 'Shopping cart',
		Descripcion: 'Pequeña logica para simular un carrito de compras',
		repo: 'https://github.com/GuillermoSM5/shopping_cart',
		web: 'https://shooping-cart-practice.netlify.app',
		image: Shopping,
	},
];

export const Experiences: Experience[] = [
	{
		puesto: 'Front developer',
		compañía: 'Stefanini',
		duracion: 'mayo 2021 - actualidad',
		features: [
			'Colaboracion en proyectos en React y Angular con TypeScript para clientes como Banorte',
			'Estimacion de requerimientos del cliente',
		],
	},
	{
		puesto: 'Front developer',
		compañía: 'MX Software Solutions',
		duracion: 'agosto 2022 - actualidad',
		features: [
			'Colaboracion en el desarrollo de un ecommerce con el framework Next.js',
		],
	},
];
