import { StepLabel as Component, StepLabelProps } from '@mui/material';
import { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren, Pick<StepLabelProps, 'className' | 'id'> {
	className?: string;
}

function StepLabel(props: IProps) {
	return <Component {...props} />;
}

export default StepLabel;
