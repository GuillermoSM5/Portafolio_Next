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

				<nav>
					<HeaderNav />
				</nav>

				<main>{children}</main>

				<footer>
					<FooterNav />
				</footer>
			</Head>
		</>
	);
};
