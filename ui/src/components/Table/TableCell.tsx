import { TableCell as Component, TableCellProps } from '@mui/material';
import { PropsWithChildren } from 'react';

interface IProps
	extends PropsWithChildren,
		Pick<TableCellProps, 'sx' | 'component' | 'className' | 'style' | 'scope'> {}

function TableCell(props: IProps) {
	return <Component {...props} />;
}

export default TableCell;
