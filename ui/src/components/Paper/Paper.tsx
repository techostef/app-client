import { Paper as Component, PaperProps } from '@mui/material';
import { PropsWithChildren, forwardRef } from 'react';

interface IProps extends PropsWithChildren, Pick<PaperProps, 'style' | 'className' | 'ref' | 'id'> {}

const Paper = forwardRef(function Paper(props: IProps, ref: any) {
	// ...
	return <Component {...props} ref={ref} />;
});

export default Paper;
