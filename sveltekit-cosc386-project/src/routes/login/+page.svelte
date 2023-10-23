<script lang="ts">
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;
</script>

{#each data.users as user}
	<div>
		{user.id}
		{user.username}
		{user.password}
	</div>
{/each}

<form method="POST">
	<label>
		Username
		<input name="username" type="username" required />
	</label>
	<label>
		Password
		<input name="password" type="password" required />
		<button formaction="?/login">Log in</button>
		<button formaction="?/signup">Sign up</button>
	</label>
</form>

{#if form?.error}
	<p>{form.error}</p>
{/if}

{#if form?.response}
	<p>{form?.response}{form?.user?.username}</p>
{/if}
