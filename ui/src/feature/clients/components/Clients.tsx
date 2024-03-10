import { useEffect, useMemo, useState } from 'react';

import { css } from '@emotion/css';
import { Box } from 'components/Box';
import { Page } from 'components/Page';
import { Paper } from 'components/Paper';
import { Typography } from 'components/Typography';
import useDebouncedValue from 'hooks/useDebounce';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Theme } from 'storage/useTheme';
import useClients from '../contexts/useClients';
import { AddClient } from './AddClient';
import ClientSearch from './ClientSearch';
import ClientTable from './ClientTable';

function Clients() {
	const { t } = useTranslation();
	const classes = style();
	const { data, error } = useClients();
	const [query, setQuery] = useState('');
	const deferredQuery = useDebouncedValue(query, 500);

	useEffect(() => {
		if (error) {
			console.error('failed_get_clients', error);
			toast('Failed to get data clients', {
				type: 'error',
			});
		}
	}, [error]);

	const filteredClients = useMemo(() => {
		return data.filter((item) => {
			const lowerCaseFullName = `${item.firstName} ${item.lastName}`.toLocaleLowerCase();
			return lowerCaseFullName.indexOf(deferredQuery.toLowerCase()) >= 0;
		});
	}, [data, deferredQuery]);

	return (
		<Page>
			<Typography variant='h4' style={{ textAlign: 'start' }}>
				{t('clients')}
			</Typography>
			<Box className={classes.actionContainer}>
				<ClientSearch setQuery={setQuery} />
				<AddClient />
			</Box>
			<Paper className={classes.containerTable}>
				<ClientTable clients={filteredClients} />
			</Paper>
		</Page>
	);
}

const style = () => {
	const { spacing } = Theme();
	return {
		containerTable: css({ margin: 'auto', marginTop: spacing.sm, maxHeight: `calc(100vh - 150px)`, overflowY: 'auto' }),
		actionContainer: css({
			display: 'flex',
			marginBottom: spacing.md,
			marginTop: spacing.md,
			'@media(max-width: 460px)': {
				flexDirection: 'column',
				gap: spacing.md,
				'> div': {
					width: '100%',
					'& .MuiInput-input': {
						width: '100%',
					},
					'> div, > button': {
						width: '100%',
					},
				},
			},
		}),
	};
};

export default Clients;
