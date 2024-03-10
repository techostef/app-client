import { css } from '@emotion/css';
import { Box } from 'components/Box';
import { Button } from 'components/Button';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DialogAdd from './DialogAdd';

function AddClient() {
	const { t } = useTranslation();
	const classes = style();
	const [open, setOpen] = useState(false);
	return (
		<Box className={classes.root}>
			<Button variant='contained' onClick={() => setOpen(true)}>
				{t('createNewClient')}
			</Button>
			<DialogAdd open={open} handleClose={() => setOpen(false)} />
		</Box>
	);
}

const style = () => {
	return {
		root: css({
			marginLeft: 'auto',
			button: {
				textTransform: 'unset',
			},
		}),
	};
};

export default AddClient;
