import { TableCell, TableRow } from 'components/Table';
import { forwardRef } from 'react';

export interface IProps {
	client: IClient;
}

const ClientRow = forwardRef(({ client, ...otherProps }: IProps, ref: any) => {
	const { id, firstName, lastName, email, phoneNumber } = client;

	return (
		<TableRow
			{...otherProps}
			key={id}
			sx={{
				'&:last-child td, &:last-child th': { border: 0 },
				cursor: 'pointer',
				'&:hover': {
					backgroundColor: '#f5f5f5',
				},
			}}
			ref={ref}
		>
			<TableCell component='th' scope='row'>
				{firstName} {lastName}
			</TableCell>
			<TableCell>{phoneNumber}</TableCell>
			<TableCell>{email}</TableCell>
		</TableRow>
	);
});

export default ClientRow;
