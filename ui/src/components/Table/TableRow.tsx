import { TableRow as Component, TableRowProps } from '@mui/material';
import { PropsWithChildren, forwardRef } from 'react';

interface IProps extends PropsWithChildren, Pick<TableRowProps, 'component' | 'sx' | 'className' | 'style'> {}

const TableRow = forwardRef((props: IProps, ref: any) => {
	return <Component {...props} ref={ref} />;
});

export default TableRow;
