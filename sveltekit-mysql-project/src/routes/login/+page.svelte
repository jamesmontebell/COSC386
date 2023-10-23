<script lang="ts">
	import type { PageData, ActionData } from './$types';

	export let data: PageData;

	$: data;
</script>

{#each data.users as user}
	<p>{JSON.stringify(user.username)}, {JSON.stringify(user.password)}</p>
{/each}

<form method="POST">
	<input name="username" placeholder="Username" />
	<input name="password" placeholder="Password" />
	<button formaction="?/login">Log in</button>
	<button formaction="?/signup">Sign up</button>
</form>

{data.response}
