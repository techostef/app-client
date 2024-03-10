import { Step as Component, StepProps } from '@mui/material';
import { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren, Pick<StepProps, 'className' | 'id'> {
	className?: string;
}

function Step(props: IProps) {
	return <Component {...props} />;
}

export default Step;
