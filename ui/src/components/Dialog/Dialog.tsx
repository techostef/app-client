import { Dialog as Component, DialogProps } from '@mui/material';
import { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren, Pick<DialogProps, 'open' | 'onClose' | 'id' | 'className' | 'style'> {}

function Dialog(props: IProps) {
	return <Component {...props} />;
}

export default Dialog;
