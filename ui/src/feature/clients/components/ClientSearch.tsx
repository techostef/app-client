import { css } from '@emotion/css';
import { SearchIcon } from 'assets/icons';
import { TextField } from 'components/TextField';
import { useTranslation } from 'react-i18next';
import { Theme } from 'storage/useTheme';

interface IProps {
	setQuery: (query: string) => void;
}

function ClientSearch({ setQuery }: IProps) {
	const { t } = useTranslation();
	const classes = style();

	return (
		<TextField
			className={classes.input}
			placeholder={t('searchClientPlaceholder')}
			onChange={(e) => {
				setQuery(e.target.value);
			}}
			endnode={<SearchIcon />}
		/>
	);
}

const style = () => {
	const { color } = Theme();
	return {
		input: css({
			background: color.white,
			'& .MuiInputBase-input': {
				padding: '8px',
			},
			'&.MuiInput-root': {
				height: 36.5,
			},
		}),
	};
};

export default ClientSearch;
