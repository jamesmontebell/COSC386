import { db } from '$lib/server/db';
import type { Movie, Star, StarsIn, Studio } from '$lib/server/types';
import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

let result: string = ' ';

export const actions: Actions = {
	createstudio: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name') as string;
		const address = data.get('address') as string;

		(await db)
			.query(`INSERT INTO studios (name, address) VALUES ("${name}", "${address}")`)
			.then(() => {
				result = 'Studio added';
			})
			.catch(() => {
				result = 'Error adding studio';
			});
		return { response: result };
	},
	createmovie: async ({ request }) => {
		const data = await request.formData();
		const title = data.get('title') as string;
		const year = data.get('year') as string;
		const length = data.get('length') as string;
		const genre = data.get('genre') as string;
		const studioName = data.get('studioName') as string;

		(await db)
			.query(
				`INSERT INTO movies (title, year, length, genre, studioName) VALUES ("${title}", "${year}", "${length}", "${genre}", (SELECT name FROM studios WHERE name = "${studioName}"))`
			)
			.then(() => {
				result = 'Movie added';
			})
			.catch(() => {
				result = 'Error adding movie';
			});
		return { response: result };
	},
	createstar: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name') as string;
		const address = data.get('address') as string;

		(await db)
			.query(`INSERT INTO stars (name, address) VALUES ("${name}", "${address}")`)
			.then(() => {
				result = 'Star added';
			})
			.catch((error: string) => {
				result = 'Error adding star';
				console.log(error);
			});
		return { response: result };
	},
	createstarsin: async ({ request }) => {
		const data = await request.formData();
		const title = data.get('title') as string;
		const starName = data.get('starName') as string;
		const year = data.get('year') as string;

		(await db)
			.query(
				`INSERT INTO stars_in (title, starName, year) VALUES ((SELECT title FROM movies WHERE title = "${title}"), (SELECT name FROM stars WHERE name = "${starName}"), ${year})`
			)
			.then(() => {
				result = 'Stars In added';
			})
			.catch((error: string) => {
				result = 'Error adding stars in';
				console.log(error);
			});
		return { response: result };
	}
} satisfies Actions;

export const load = (async () => {
	const [studio] = await (await db).query('SELECT * FROM studios');
	const [movie] = await (await db).query('SELECT * FROM movies');
	const [star] = await (await db).query('SELECT * FROM stars');
	const [starsin] = await (await db).query('SELECT * FROM stars_in');
	return {
		movies: movie as Movie[],
		studios: studio as Studio[],
		stars: star as Star[],
		starsin: starsin as StarsIn[],
		response: result
	};
}) satisfies PageServerLoad;
