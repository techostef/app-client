import { css, cx } from '@emotion/css';
import { Input as Component, InputProps } from '@mui/material';
import { Box } from 'components/Box';
import { Typography } from 'components/Typography';
import { PropsWithChildren, ReactNode } from 'react';
import { Theme } from 'storage/useTheme';

interface IProps
	extends PropsWithChildren,
		Pick<
			InputProps,
			'style' | 'className' | 'placeholder' | 'onChange' | 'defaultValue' | 'value' | 'disabled' | 'fullWidth'
		> {
	endnode?: ReactNode;
	label?: string;
	color?: string;
}

function TextField({ className, label, color, ...props }: IProps) {
	const classes = style();
	return (
		<Box>
			{label && (
				<Box>
					<Typography
						style={{
							color: color,
						}}
					>
						{label}
					</Typography>
				</Box>
			)}
			<Component {...props} className={cx(classes.root, className)} endAdornment={props.endnode} />
		</Box>
	);
}

const style = () => {
	const { spacing, color, rounded } = Theme();
	return {
		root: css({
			'label + &': {
				marginTop: spacing.sm,
			},
			'&.MuiInputBase-root': {
				backgroundColor: color.white,
				paddingRight: spacing.md,
				border: `1px solid ${color.gray}`,
				borderRadius: rounded.normal,
				':before, :after': {
					borderBottom: 0,
					content: 'unset',
				},
			},
			'& .MuiInputBase-input': {
				position: 'relative',
				border: '1px solid',
				fontSize: 16,
				width: 'auto',
				padding: '10px 12px',
				borderWidth: 0,
			},
		}),
	};
};

export default TextField;
