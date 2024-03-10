import Icon from '@mui/icons-material/Search';

interface IProps extends Partial<HTMLOrSVGElement> {}

function SearchIcon(props: IProps) {
	return <Icon {...props} />;
}

export default SearchIcon;
