import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { PATH_API } from 'services/constants';
import { mockGetClientsResponse, mockPostClientsResponse } from '../../__tests__/mock/response';
import AddClient from '../AddClient';

const mockGetClients = jest.fn();
const mockPostClient = jest.fn();

jest.mock('services/api/apiClient', () => {
	return {
		get: (url: string, params: Record<string, any>) => {
			switch (url) {
				case PATH_API.clients:
					const resultGetClients = mockGetClients.mockResolvedValue(mockGetClientsResponse);

					return resultGetClients(params);
				default:
					return new Error('not implemented yet');
			}
		},
		post: (url: string, params: Record<string, any>) => {
			switch (url) {
				case PATH_API.clients:
					const resultPostClient = mockPostClient.mockResolvedValue(mockPostClientsResponse);

					return resultPostClient(params);
				default:
					return new Error('not implemented yet');
			}
		},
	};
});

describe('Testing component AddClient', () => {
	it('Should be render correctly', async () => {
		render(<AddClient />);

		// fire button create new client and trigger the dialog to open
		fireEvent.click(screen.getByText('createNewClient'));

		// check the dialog is show
		expect(screen.getByTestId('customized-dialog-title')).toBeInTheDocument();

		// check stepper options
		expect(screen.getByText('personDetails')).toBeInTheDocument();
		expect(screen.getByText('contactDetails')).toBeInTheDocument();

		// fill the form person details
		fireEvent.change(screen.getByPlaceholderText('firstName'), {
			target: {
				value: 'john',
			},
		});
		fireEvent.change(screen.getByPlaceholderText('lastName'), {
			target: {
				value: 'john smith',
			},
		});

		// go to next section
		fireEvent.click(screen.getByText('continue'));

		// fill the form contact details
		fireEvent.change(screen.getByPlaceholderText('email'), {
			target: {
				value: 'test@gmail.com',
			},
		});
		fireEvent.change(screen.getByPlaceholderText('phoneNumber'), {
			target: {
				value: '+624263237',
			},
		});

		await waitFor(() => {
			return expect(screen.getByTestId('create-client-btn')).not.toBeDisabled();
		});
		fireEvent.click(screen.getByTestId('create-client-btn'));

		await waitFor(async () => {
			return expect(mockPostClient).toHaveBeenNthCalledWith(1, {
				email: 'test@gmail.com',
				firstName: 'john',
				id: '',
				lastName: 'john smith',
				phoneNumber: '+624263237',
			});
		});
	});

	it('Continue and back still same value', async () => {
		render(<AddClient />);

		// fire button create new client and trigger the dialog to open
		fireEvent.click(screen.getByText('createNewClient'));

		// check the dialog is show
		expect(screen.getByTestId('customized-dialog-title')).toBeInTheDocument();

		// fill the form person details
		fireEvent.change(screen.getByPlaceholderText('firstName'), {
			target: {
				value: 'john',
			},
		});
		fireEvent.change(screen.getByPlaceholderText('lastName'), {
			target: {
				value: 'smith',
			},
		});

		// go to next section
		fireEvent.click(screen.getByText('continue'));

		// fill the form contact details
		fireEvent.change(screen.getByPlaceholderText('email'), {
			target: {
				value: 'test@gmail.com',
			},
		});
		fireEvent.change(screen.getByPlaceholderText('phoneNumber'), {
			target: {
				value: '+624263237',
			},
		});

		fireEvent.click(screen.getByText('back'));
		// check form person details still had the same value
		expect(screen.getByDisplayValue('john')).toBeInTheDocument();
		expect(screen.getByDisplayValue('smith')).toBeInTheDocument();

		// go to contact details
		fireEvent.click(screen.getByText('continue'));

		// check form contact details still had the same value
		expect(screen.getByDisplayValue('test@gmail.com')).toBeInTheDocument();
		expect(screen.getByDisplayValue('+624263237')).toBeInTheDocument();
	});
});
