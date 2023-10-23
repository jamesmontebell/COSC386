<script>
	import '../app.postcss';
</script>

<button><a href="/" class="button">Home</a></button>
<button><a href="/login">Log in Sign up</a></button>
<br />
<slot />

<style>
	.button {
		text-decoration: none;
		color: black;
		background-color: white;
		padding: 0%;
	}
</style>
