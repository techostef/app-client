import { TableContainer as Component, TableContainerProps } from '@mui/material';
import { PropsWithChildren, forwardRef } from 'react';

interface IProps
	extends PropsWithChildren,
		Pick<TableContainerProps, 'sx' | 'component' | 'className' | 'style' | 'ref'> {}

const TableContainer = forwardRef(function TableContainer(props: IProps, ref: any) {
	// ...
	return <Component {...props} ref={ref} />;
});

export default TableContainer;
