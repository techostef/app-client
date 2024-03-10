import { css, cx } from '@emotion/css';
import { ButtonProps, Button as Component } from '@mui/material';
import { PropsWithChildren } from 'react';

interface IProps
	extends PropsWithChildren,
		Pick<ButtonProps, 'variant' | 'onClick' | 'type' | 'style' | 'sx' | 'color' | 'disabled' | 'className'> {}

function Button({ className, ...props }: IProps) {
	const classes = style();
	return <Component {...props} className={cx(classes.root, className)} />;
}

const style = () => {
	return {
		root: css({
			'&.MuiButtonBase-root': {
				textTransform: 'unset',
			},
		}),
	};
};

export default Button;
