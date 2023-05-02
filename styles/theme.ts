import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
	initialColorMode: 'system',
	useSystemColorMode: true,
};

const components = {
	Drawer: {
		// setup light/dark mode component defaults
		baseStyle: (props: any) => ({
			dialog: {
				bg: mode('white', '#e48900')(props),
			},
		}),
	},
};

const theme = extendTheme({
	components,
	config,
	styles: {
		global: (props: StyleFunctionProps) => ({
			body: { bg: mode('#FFFFFF', '#000000')(props) },
		}),
	},
	fonts: {
		body: 'Arial, Helvetica, sans-serif',
	},
});

export default theme;
