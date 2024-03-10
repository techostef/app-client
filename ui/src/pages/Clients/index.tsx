import { Clients } from 'feature/clients';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

function ClientsPage() {
	const { i18n } = useTranslation();

	const params = useParams();

	useEffect(() => {
		if (params.lang) {
			i18n.changeLanguage(params.lang);
		}
	}, [params.lang, i18n]);

	return <Clients />;
}

export default ClientsPage;
