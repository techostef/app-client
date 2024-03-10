import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';

interface ITheme {
	primary: string;
	white: string;
	black: string;
	light: string;
	gray: string;
	success: string;
	danger: string;
}

interface IThemeStorageData {
	color: ITheme;
	spacing: {
		xs: number;
		// sm is 4
		sm: number;
		md: number;
		lg: number;
		xl: number;
		xxl: number;
		xxxl: number;
	};
	rounded: {
		normal: number;
		big: number;
		circel: number;
	};
}

interface IThemeStorageAction {}

export const ThemeStorage = create<IThemeStorageData & IThemeStorageAction>(() => ({
	color: {
		primary: '#0066',
		white: '#FFFFFF',
		black: '#000000',
		light: 'rgb(149 149 149)',
		gray: '#d5d5d5',
		success: 'green',
		danger: '#d32f2f',
	},
	spacing: {
		xs: 2,
		sm: 4,
		md: 8,
		lg: 12,
		xl: 16,
		xxl: 20,
		xxxl: 24,
	},
	rounded: {
		normal: 4,
		big: 8,
		circel: 9999999,
	},
}));

// get data only
export const Theme = () => {
	return ThemeStorage(useShallow(({ color, spacing, rounded }) => ({ color, spacing, rounded })));
};
