import { FooterNav, HeaderNav } from '@/Components';
import Head from 'next/head';
import { FC, ReactNode } from 'react';

interface Props {
	title: string;
	pageDescription: string;
	imageFullUrl?: string;
	children: ReactNode;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const MainLayout: FC<Props> = ({
	children,
	title,
	pageDescription,
	imageFullUrl,
}) => {
	console.log(origin);
	return (
		<>
			<Head>
				<title>{title}</title>

				<meta property="og:title" content={title} />
				<meta
					property="og:description"
					content="Get from SEO newbie to SEO pro in 8 simple steps."
				/>
				<meta property="og:image" content={`${origin}/img/aboutme.jpg`} />
			</Head>

			<main>
				<div className="relative min-h-screen">
					<HeaderNav />

					{children}

					<FooterNav />
				</div>
			</main>
		</>
	);
};
