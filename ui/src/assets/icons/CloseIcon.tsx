import Icon from '@mui/icons-material/Close';

interface IProps extends Partial<HTMLOrSVGElement> {}

function CloseIcon(props: IProps) {
	return <Icon {...props} />;
}

export default CloseIcon;
