<script>
	import Floaty from "./components/floaty.svelte";
	import Logo from "./components/logo.svelte";

	export let tagline;
</script>

<main>
	<div class="inner">
		<Logo class="logo"/>

		<p>{tagline}</p>
		<p>
			<a href="https://github.com/umbracoworld">Get involved on GitHub</a>
		</p>
	</div>
	<Floaty />
</main>

<style>
	main {
		text-align: center;
		height: 100vh;
		display: grid;
		place-content: center;
	}

	.inner {
		z-index: 2;
		width: clamp(300px, 50vw, 520px);
	}

</style>
