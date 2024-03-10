import { render, screen } from '@testing-library/react';
import { mockGetClientsResponse, mockPostClientsResponse } from 'feature/clients/components/__tests__/mock/response';
import { MemoryRouter } from 'react-router-dom';
import { PATH_API } from 'services/constants';
import Clients from '../App';

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

describe('Testing component App', () => {
	it('Should be render correctly', async () => {
		render(
			<MemoryRouter>
				<Clients />
			</MemoryRouter>
		);

		expect(screen.getByText('clients')).toBeInTheDocument();
	});
});
