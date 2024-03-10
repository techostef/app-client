import { PATH_API } from '../constants';
import apiClient from './apiClient';

export const getClients = (): Promise<IClient[]> => {
	return apiClient.get<IClient[]>(PATH_API.clients);
};

export const createClient = (client: IClient): Promise<void> => {
	return apiClient.post<void>(PATH_API.clients, client);
};

export const updateClient = (client: IClient): Promise<void> => {
	return apiClient.put<void>(PATH_API.clients, client);
};
