import { prisma } from '$lib/prisma.server';
import type { PageServerLoad } from './$types';
import type { Actions } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	return {
		users: await prisma.user.findMany()
	};
};

export const actions: Actions = {
	login: async ({ request }) => {
		// TODO sign up the user
		const data = await request.formData();
		const username = data.get('username') as string;
		const password = data.get('password') as string;

		try {
			const user = await prisma.user.findUnique({
				where: {
					username: username,
					password: password
				}
			});
			if (user != null) {
				return { response: 'Welcome back, ', user };
			} else {
				return { error: 'Wrong password or username.' };
			}
		} catch (error) {}
	},
	signup: async ({ request }) => {
		const data = await request.formData();
		const username = data.get('username') as string;
		const password = data.get('password') as string;
		try {
			const user = await prisma.user.create({
				data: {
					username,
					password
				}
			});
			return { response: 'Welcome, ', user };
		} catch (error) {
			return { error: 'User already exists' };
		}
	}
};
