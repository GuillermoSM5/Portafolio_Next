import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
	initialColorMode: 'system',
	useSystemColorMode: true,
};

const theme = extendTheme({
	config,
	fonts: {
		body: 'Arial, Helvetica, sans-serif',
	},
});

export default theme;
