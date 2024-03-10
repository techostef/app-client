import { render, screen, within } from '@testing-library/react';
import { PATH_API } from 'services/constants';
import Clients from '../Clients';
import { mockGetClientsResponse, mockPostClientsResponse } from './mock/response';

const mockGetClients = jest.fn();
const mockPostClient = jest.fn();

class IntersectionObserver {
	constructor(callback: any, options: any) {}
	observe(target: any) {}
	unobserve(target: any) {}
	disconnect() {}
}
Object.defineProperty(window, 'IntersectionObserver', {
	writable: true,
	value: IntersectionObserver,
});

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

describe('Testing component Clients', () => {
	it('Should be render correctly', async () => {
		render(<Clients />);

		// check layout
		// title section
		expect(screen.getByText('clients')).toBeInTheDocument();
		// search section
		expect(screen.getByPlaceholderText('searchClientPlaceholder')).toBeInTheDocument();

		const tableSection = within(screen.getByTestId('basic-table'));

		// check head table is rendered
		expect(tableSection.getByText('name')).toBeInTheDocument();
		expect(tableSection.getByText('phoneNumber')).toBeInTheDocument();
		expect(tableSection.getByText('email')).toBeInTheDocument();

		// check body table is rendered
		expect(await tableSection.findByText('John Smitherin')).toBeInTheDocument();
		expect(tableSection.getByText('+6192099102')).toBeInTheDocument();
		expect(tableSection.getByText('john@gmail.com')).toBeInTheDocument();
	});
});
