import { DialogActions as Component, DialogActionsProps } from '@mui/material';
import { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren, Pick<DialogActionsProps, 'id' | 'className' | 'style'> {}

function DialogActions(props: IProps) {
	return <Component {...props} />;
}

export default DialogActions;
