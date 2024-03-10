import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';

interface IAddFormClientData {
	client: IClient;
}

interface IAddFormClientAction {
	updateClient: (data: Partial<IClient>) => void;
	restartClient: () => void;
}

const INITIAL_CLIENT = {
	id: '',
	firstName: '',
	lastName: '',
	email: '',
	phoneNumber: '',
};

export const ClientStorage = create<IAddFormClientData & IAddFormClientAction>((set) => ({
	client: INITIAL_CLIENT,
	updateClient: (data) => {
		set((state) => {
			return {
				client: {
					...state.client,
					...data,
				},
			};
		});
	},
	restartClient: () => {
		set(() => {
			return {
				client: INITIAL_CLIENT,
			};
		});
	},
}));

export const useAddForm = () => {
	return ClientStorage(useShallow((state) => state));
};
