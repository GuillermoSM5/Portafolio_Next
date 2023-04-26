import { FooterNav, HeaderNav } from '@/Components';
import Head from 'next/head';
import { FC, ReactNode } from 'react';

interface Props {
	title: string;
	pageDescription: string;
	imageFullUrl?: string;
	children: ReactNode;
}

export const MainLayout: FC<Props> = ({
	children,
	title,
	pageDescription,
	imageFullUrl,
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<main>
				<div className="relative h-screen">
					<HeaderNav />

					{children}

					<FooterNav />
				</div>
			</main>
		</>
	);
};
