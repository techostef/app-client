import { css } from '@emotion/css';
import { Box } from 'components/Box';
import { TextField } from 'components/TextField';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Theme } from 'storage/useTheme';

function ContactDetails() {
	const { color } = Theme();
	const classes = style();
	const { t } = useTranslation();
	const { control } = useFormContext<IClient>();

	return (
		<Box className={classes.root}>
			<Controller
				control={control}
				name='email'
				rules={{
					pattern: {
						value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
						message: 'invalid email address',
					},
				}}
				render={({ field, formState: { errors } }) => {
					return (
						<TextField
							label={t('email')}
							placeholder={t('email')}
							className='input'
							onChange={(e) => {
								field.onChange(e.target.value);
							}}
							color={color.light}
							fullWidth
							defaultValue={field.value}
							error={errors.email?.message}
						/>
					);
				}}
			/>
			<Controller
				control={control}
				name='phoneNumber'
				render={({ field }) => {
					return (
						<TextField
							label={t('phoneNumber')}
							placeholder={t('phoneNumber')}
							className='input'
							onChange={(e) => {
								field.onChange(e.target.value);
							}}
							color={color.light}
							fullWidth
							defaultValue={field.value}
						/>
					);
				}}
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
			'& .text-field': {
				marginBottom: spacing.xl,
			},
		}),
	};
};

export default ContactDetails;
