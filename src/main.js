import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		tagline: 'Coming soon™'
	}
});

export default app;