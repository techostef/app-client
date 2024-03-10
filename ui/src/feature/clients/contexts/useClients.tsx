import { useState } from 'react';
import { toast } from 'react-toastify';
import { createClient, getClients } from 'services/api';
import { PATH_API } from 'services/constants';
import useSWR from 'swr';

const useClients = () => {
	const [isLoading, setIsLoading] = useState(false);
	const {
		isLoading: isLoadingData,
		data = [],
		error,
		mutate,
	} = useSWR(PATH_API.clients, getClients, {
		errorRetryCount: 0,
		onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
			// Only retry up to 1 times.
			if (retryCount >= 1) return;

			// Retry after 5 seconds.
			setTimeout(() => revalidate({ retryCount }), 5000);
		},
	});

	const handleCreateClient = async (client: IClient, onSuccess: () => void) => {
		setIsLoading(true);
		try {
			await createClient(client);
			mutate();
			onSuccess();
		} catch (err) {
			console.error('failed_update_clients', error);
			toast('Failed to update data clients', {
				type: 'error',
			});
		} finally {
			setIsLoading(false);
		}
	};

	return {
		mutate,
		isLoading: isLoadingData || isLoading,
		data,
		error,
		handleCreateClient,
	};
};

export default useClients;
