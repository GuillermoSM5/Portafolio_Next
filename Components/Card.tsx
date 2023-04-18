import { ReactNode, FC } from 'react';

interface Props {
	children: ReactNode;
	name: string;
}

export const Card: FC<Props> = ({ children, name }) => {
	return (
		<div className="flex flex-col justify-center items-center w-20 h-24 m-auto">
			<div>{children}</div>
			<p className="mt-3">{name}</p>
		</div>
	);
};
