import { createConnection } from 'mysql2/promise';

export async function connect() {
	const db = await createConnection({
		host: 'localhost',
		user: 'user',
		password: 'password',
		database: 'test'
	});

	return db;
}

const db = connect();

export { db };
