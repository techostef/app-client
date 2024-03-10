import { DialogContent as Component, DialogContentProps } from '@mui/material';
import { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren, Pick<DialogContentProps, 'id' | 'className' | 'style' | 'dividers'> {}

function DialogContent(props: IProps) {
	return <Component {...props} />;
}

export default DialogContent;
