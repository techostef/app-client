import { Table as Component, TableProps } from '@mui/material';
import { PropsWithChildren, forwardRef } from 'react';

interface IProps extends PropsWithChildren, Pick<TableProps, 'sx' | 'component' | 'className' | 'style' | 'ref'> {}

const Table = forwardRef(function Paper(props: IProps, ref: any) {
	// ...
	return <Component {...props} ref={ref} />;
});

export default Table;
