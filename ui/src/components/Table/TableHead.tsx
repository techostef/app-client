import { TableHead as Component, TableHeadProps } from '@mui/material';
import { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren, Pick<TableHeadProps, 'sx' | 'component' | 'className' | 'style'> {}

function TableHead(props: IProps) {
	return <Component {...props} />;
}

export default TableHead;
