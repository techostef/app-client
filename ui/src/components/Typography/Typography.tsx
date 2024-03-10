import { Typography as Component, TypographyProps } from '@mui/material';
import { PropsWithChildren } from 'react';

interface IProps
	extends PropsWithChildren,
		Pick<TypographyProps, 'gutterBottom' | 'variant' | 'style' | 'className' | 'onClick'> {}

function Typography(props: IProps) {
	return <Component {...props} />;
}

export default Typography;
