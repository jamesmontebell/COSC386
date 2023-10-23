<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: data;

	onMount(() => {
		data.response = '';
	});
</script>

<div class="body">
	<div class="forms">
		<form method="POST" class="form">
			<label for="">Name</label>
			<input type="text" name="name" placeholder="" />
			<label for="">Address</label>
			<input type="text" name="address" placeholder="" />
			<button class="button" formaction="?/createstudio">Create Studio</button>
		</form>
		<form method="POST" class="form">
			<label for="">Title</label>
			<input type="text" name="title" placeholder="" />
			<label for="">Year</label>
			<input type="text" name="year" placeholder="" />
			<label for="">Length</label>
			<input type="text" name="length" placeholder="" />
			<label for="">Genre</label>
			<input type="text" name="genre" placeholder="" />
			<label for="">Studio Name</label>
			<input type="text" name="studioName" placeholder="" />
			<button class="button" formaction="?/createmovie">Create Movie</button>
		</form>
		<form method="POST" class="form">
			<label for="">Name</label>
			<input type="text" name="name" placeholder="" />
			<label for="">Address</label>
			<input type="text" name="address" placeholder="" />
			<button class="button" formaction="?/createstar">Create Star</button>
		</form>
		<form method="POST" class="form">
			<label for="">Title</label>
			<input type="text" name="title" placeholder="" />
			<label for="">Star Name</label>
			<input type="text" name="starName" placeholder="" />
			<label for="">Year</label>
			<input type="text" name="year" placeholder="" />
			<button class="button" formaction="?/createstarsin">Create Stars In</button>
		</form>
	</div>

	<div>
		<h2>Studios</h2>
		{#each data.studios as studio}
			<div class="data">
				<div class="header">Name:</div>
				<div class="text">{studio.name}</div>
				<div class="header">Address:</div>
				<div class="text">{studio.address}</div>
			</div>
		{/each}

		<div>
			<h2>Movies</h2>
			{#each data.movies as movie}
				<div class="data">
					<div class="header">Title:</div>
					<div class="text">{movie.title}</div>
					<div class="header">Year:</div>
					<div class="text">{movie.year}</div>
					<div class="header">Length:</div>
					<div class="text">{movie.length}</div>
					<div class="header">Studio Name:</div>
					<div class="text">{movie.studioName}</div>
				</div>
			{/each}
		</div>

		<div>
			<h2>Stars</h2>
			{#each data.stars as star}
				<div class="data">
					<div class="header">Name:</div>
					<div class="text">{star.name}</div>
					<div class="header">Address:</div>
					<div class="text">{star.address}</div>

					{#each data.starsin as starred}
						{#if star.name == starred.starName}
							<div class="header">Appears in:</div>
							<div class="text">{starred.title}</div>
							<div class="header">Year:</div>
							<div class="text">{starred.year}</div>
						{/if}
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>
<h1>{data.response}</h1>

<style>
	.forms {
		display: flex;
		flex-direction: row;
		padding: 6px;
		gap: 50px;
	}
	.form {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
	.body {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.data {
		display: flex;
		flex-direction: row;
		gap: 10px;
	}

	.button {
		width: auto;
	}
	.header {
		padding: 6px;
		font-weight: bold;
	}
	.text {
		padding: 6px;
	}
	input {
		width: auto;
	}
</style>
