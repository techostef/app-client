import { TableBody as Component, TableBodyProps } from '@mui/material';
import { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren, Pick<TableBodyProps, 'sx' | 'component' | 'className' | 'style'> {}

function TableBody(props: IProps) {
	return <Component {...props} />;
}

export default TableBody;
