import { css } from '@emotion/css';
import { Box } from 'components/Box';
import { TextField } from 'components/TextField';
import { useAddForm } from 'feature/clients/contexts/useAddForm';
import { useTranslation } from 'react-i18next';
import { Theme } from 'storage/useTheme';

function PersonalDetails() {
	const { color } = Theme();
	const classes = style();
	const { t } = useTranslation();
	const { client, updateClient } = useAddForm();

	return (
		<Box className={classes.root}>
			<TextField
				label={t('firstName')}
				placeholder={t('firstName')}
				className='input'
				onChange={(e) => {
					updateClient({
						firstName: e.target.value,
					});
				}}
				color={color.light}
				fullWidth
				defaultValue={client.firstName}
			/>
			<TextField
				label={t('lastName')}
				placeholder={t('lastName')}
				className='input'
				onChange={(e) => {
					updateClient({
						lastName: e.target.value,
					});
				}}
				color={color.light}
				fullWidth
				defaultValue={client.lastName}
			/>
		</Box>
	);
}

const style = () => {
	const { spacing } = Theme();
	return {
		root: css({
			minWidth: 400,
			width: '100%',
			'@media(max-width: 520px)': {
				minWidth: '100%',
			},
			marginTop: spacing.xl,
			'& .input': {
				marginBottom: spacing.xl,
			},
		}),
	};
};

export default PersonalDetails;
