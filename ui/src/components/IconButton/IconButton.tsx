import { IconButton as Component, IconButtonProps } from '@mui/material';
import { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren, Pick<IconButtonProps, 'onClick' | 'type' | 'style' | 'sx'> {
	className?: string;
}

function Button(props: IProps) {
	return <Component {...props} />;
}

export default Button;
