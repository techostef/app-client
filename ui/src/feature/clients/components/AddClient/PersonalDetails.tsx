import { css } from '@emotion/css';
import { Box } from 'components/Box';
import { TextField } from 'components/TextField';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Theme } from 'storage/useTheme';

function PersonalDetails() {
	const { color } = Theme();
	const classes = style();
	const { t } = useTranslation();
	const { control } = useFormContext<IClient>();

	return (
		<Box className={classes.root}>
			<Controller
				control={control}
				name='firstName'
				render={({ field }) => {
					return (
						<TextField
							label={t('firstName')}
							placeholder={t('firstName')}
							className='input'
							color={color.light}
							fullWidth
							onChange={(e) => {
								field.onChange(e.target.value);
							}}
							defaultValue={field.value}
						/>
					);
				}}
			/>
			<Controller
				control={control}
				name='lastName'
				render={({ field }) => {
					return (
						<TextField
							label={t('lastName')}
							placeholder={t('lastName')}
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

export default PersonalDetails;
