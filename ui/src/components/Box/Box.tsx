import { BoxProps, Box as Component } from '@mui/material';
import { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {
	style?: BoxProps['style'];
	className?: string;
}

function Box(props: IProps) {
	return <Component {...props} />;
}

export default Box;
