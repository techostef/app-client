import { css } from '@emotion/css';
import { CloseIcon } from 'assets/icons';
import { Box } from 'components/Box';
import { Button } from 'components/Button';
import Dialog from 'components/Dialog/Dialog';
import DialogActions from 'components/Dialog/DialogActions';
import DialogContent from 'components/Dialog/DialogContent';
import DialogTitle from 'components/Dialog/DialogTitle';
import { IconButton } from 'components/IconButton';
import Step from 'components/Stepper/Step';
import StepLabel from 'components/Stepper/StepLabel';
import Stepper from 'components/Stepper/Stepper';
import { Typography } from 'components/Typography';
import { useAddForm } from 'feature/clients/contexts/useAddForm';
import useClients from 'feature/clients/contexts/useClients';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Theme } from 'storage/useTheme';
import ContactDetails from './ContactDetails';
import PersonalDetails from './PersonalDetails';

interface IProps {
	open: boolean;
	handleClose: () => void;
}

function DialogAdd({ open, handleClose }: IProps) {
	const { t } = useTranslation();
	const steps = [t('personDetails'), t('contactDetails')];
	const [activeStep, setActiveStep] = useState(0);
	const { client, restartClient } = useAddForm();
	const { handleCreateClient, isLoading } = useClients();

	const classes = style();

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const submit = () => {
		handleCreateClient(client, () => {
			restartClient();
			handleClose();
			setActiveStep(0);
		});
	};

	const renderContent = () => {
		switch (activeStep) {
			case 0:
				return <PersonalDetails />;
			case 1:
				return <ContactDetails />;
		}
	};

	const renderActions = () => {
		switch (activeStep) {
			case 0:
				return (
					<Box className='content' style={{ display: 'flex', flexDirection: 'row', paddingTop: 2 }}>
						<Button variant='contained' className='next' onClick={handleNext}>
							{t('continue')}
						</Button>
					</Box>
				);
			case 1:
				return (
					<Box className='content' style={{ display: 'flex', flexDirection: 'row', paddingTop: 2 }}>
						<Typography className='back' onClick={handleBack}>
							{t('back')}
						</Typography>
						<Button
							data-testid='create-client-btn'
							variant='contained'
							className='next'
							disabled={isLoading}
							onClick={submit}
						>
							{t('createClient')}
						</Button>
					</Box>
				);
		}
	};

	return (
		<Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' className={classes.root} open={open}>
			<DialogTitle data-testid='customized-dialog-title' id='customized-dialog-title'>
				{t('createNewClient')}
			</DialogTitle>
			<IconButton
				aria-label='close'
				onClick={handleClose}
				sx={{
					position: 'absolute',
					right: 8,
					top: 8,
					color: (theme) => theme.palette.grey[500],
				}}
			>
				<CloseIcon />
			</IconButton>
			<DialogContent>
				<Stepper activeStep={activeStep}>
					{steps.map((label) => {
						const stepProps: { completed?: boolean } = {};
						const labelProps: {
							optional?: React.ReactNode;
						} = {};
						return (
							<Step key={label} {...stepProps}>
								<StepLabel {...labelProps}>{label}</StepLabel>
							</Step>
						);
					})}
				</Stepper>
				{renderContent()}
			</DialogContent>
			<DialogActions className={classes.actionSection}>{renderActions()}</DialogActions>
		</Dialog>
	);
}

const style = () => {
	const { spacing, color } = Theme();
	return {
		root: css({
			'.Mui-completed': {
				svg: {
					path: {
						fill: color.success,
					},
				},
			},
		}),
		actionSection: css({
			marginBottom: spacing.lg,
			'.content': {
				width: '100%',
				paddingRight: 17,
				paddingLeft: 17,
			},
			'.next': {
				marginLeft: 'auto',
			},
			'.back': {
				cursor: 'pointer',
				lineHeight: '33px',
			},
		}),
	};
};

export default DialogAdd;
