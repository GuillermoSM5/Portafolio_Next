import React from 'react';
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

export const FooterNav = () => {
	return (
		<div className="footer_content">
			<div className="text-start px-4 flex">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/GuillermoSM5"
				>
					<FaGithubAlt />
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.linkedin.com/in/guillermo-soto-marquez"
				>
					<FaLinkedin />
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="mailto:guillermosotomarquez5@gmail.com"
				>
					<FiMail />
				</a>
			</div>
			<div className="text-xs hidden lg:text-base lg:block">
				<p>Este sitio fue desarrollado en Next.js por Guillermo Soto 😁 </p>
			</div>
		</div>
	);
};
