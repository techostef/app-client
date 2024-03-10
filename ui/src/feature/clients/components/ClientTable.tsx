import Paper from '@mui/material/Paper';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from 'components/Table';
import { useTranslation } from 'react-i18next';

import useElementOnScreen from 'hooks/useElementOnScreen';
import ClientRow from './ClientRow';

export default function BasicTable({ clients }: { clients: IClient[] }) {
	const { t } = useTranslation();
	const { setElementRef, showClients } = useElementOnScreen<IClient>(clients);
	const lastIndex = showClients.length - 1;

	return (
		<TableContainer component={Paper} style={{ maxWidth: '100%' }}>
			<Table data-testid='basic-table' sx={{ minWidth: 400 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>{t('name')}</TableCell>
						<TableCell>{t('phoneNumber')}</TableCell>
						<TableCell>{t('email')}</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{showClients.map((client, index) => {
						const isSelected = index === lastIndex;
						return (
							<ClientRow
								key={`${client.id}${isSelected ? '-isSelected' : undefined}`}
								client={client}
								data-testid={isSelected ? 'test' : undefined}
								ref={(ref: any) => {
									if (isSelected) {
										setElementRef(ref);
									}
								}}
							/>
						);
					})}
					{!showClients ||
						(!showClients.length && (
							<TableRow sx={{ padding: 3 }}>
								<TableCell component='th' scope='row'>
									No clients
								</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
