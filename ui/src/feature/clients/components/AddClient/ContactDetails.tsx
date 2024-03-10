import { css } from '@emotion/css';
import { Box } from 'components/Box';
import { TextField } from 'components/TextField';
import { useAddForm } from 'feature/clients/contexts/useAddForm';
import { useTranslation } from 'react-i18next';
import { Theme } from 'storage/useTheme';

function ContactDetails() {
	const { color } = Theme();
	const classes = style();
	const { t } = useTranslation();
	const { client, updateClient } = useAddForm();

	return (
		<Box className={classes.root}>
			<TextField
				label={t('email')}
				placeholder={t('email')}
				className='input'
				onChange={(e) => {
					updateClient({
						email: e.target.value,
					});
				}}
				color={color.light}
				fullWidth
				defaultValue={client.email}
			/>
			<TextField
				label={t('phoneNumber')}
				placeholder={t('phoneNumber')}
				className='input'
				onChange={(e) => {
					updateClient({
						phoneNumber: e.target.value,
					});
				}}
				color={color.light}
				fullWidth
				defaultValue={client.phoneNumber}
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

export default ContactDetails;
