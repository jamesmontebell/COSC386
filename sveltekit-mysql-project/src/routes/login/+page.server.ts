import { db } from '$lib/server/db';
import type { PageServerLoad } from './$types';
import type { User } from '$lib/server/types';
import type { Actions } from '@sveltejs/kit';

let result: string = ' ';

export const actions: Actions = {
	login: async ({ request }) => {
		const data = await request.formData();
		const username = data.get('username') as string;
		const password = data.get('password') as string;

		(await db)
			.query(`SELECT * FROM users WHERE username = "${username}" AND password = "${password}"`)
			.then((res) => {
				result = 'Welcome back, ' + username;
			})
			.catch((error) => {
				result = 'Wrong password or username.';
			});
		return { response: result };
	},
	signup: async ({ request }) => {
		const data = await request.formData();
		const username = data.get('username') as string;
		const password = data.get('password') as string;

		(await db)
			.query(`INSERT INTO users (username, password) VALUES ("${username}", "${password}")`)
			.then((res) => {
				result = 'Welcome, ' + username;
			})
			.catch((error) => {
				result = 'Wrong password or username.';
			});
	}
} satisfies Actions;

export const load = (async () => {
	const [users] = await (await db).query('SELECT * FROM users');
	return {
		users: users as User[],
		response: result
	};
}) satisfies PageServerLoad;
