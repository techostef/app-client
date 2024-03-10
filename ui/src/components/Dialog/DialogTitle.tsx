import { DialogTitle as Component, DialogTitleProps } from '@mui/material';
import { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren, Pick<DialogTitleProps, 'id' | 'className' | 'style'> {}

function DialogTitle(props: IProps) {
	return <Component {...props} />;
}

export default DialogTitle;
