import { Stepper as Component, StepperProps } from '@mui/material';
import { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren, Pick<StepperProps, 'activeStep' | 'className' | 'id'> {
	className?: string;
}

function Stepper(props: IProps) {
	return <Component {...props} />;
}

export default Stepper;
