import { faker } from '@faker-js/faker';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

import { addBulkClient, addClient, listClients, updateClient } from './data/store';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// on start
app.use(cors({ origin: true, credentials: true }));

// capture json
app.use(express.json());

app.listen(port, () => {
	console.log(`Mock API is running at http://localhost:${port}`);
});

// main page
app.get('/', (req: Request, res: Response) => {
	res.send('Mock API');
});

// get clients
app.get('/clients', (req: Request, res: Response) => {
	res.send(listClients());
});

// create client
app.post('/clients', (req: Request, res: Response) => {
	const client: IClient = { ...req.body, id: new Date().toISOString() };
	addClient({ ...client, id: uuid() });

	res.send(client);
});

// update client
app.put('/clients/:id', (req: Request, res: Response) => {
	const client: IClient = req.body;
	updateClient(client);

	res.status(204);
});

// generate 1000 clients
app.get('/clients/generate', (_: Request, res: Response) => {
	const max = 1000;
	const mockClient: IClient = {
		email: 'mock@email.com',
		id: '',
		firstName: '',
		lastName: '',
		phoneNumber: '+61284612839492',
	};

	const listOfClients: IClient[] = [];

	console.log('starting generate some clients');
	for (let i = 0; i < max; i++) {
		const firstName = faker.person.firstName();
		const lastName = faker.person.lastName();
		listOfClients.push({
			...mockClient,
			id: uuid(),
			firstName,
			lastName,
		});
		console.log('index genarate of some client', i);
	}

	addBulkClient(listOfClients);
	console.log('end generate some clients');

	res.send('Mock API Generate Clients').status(200);
});
