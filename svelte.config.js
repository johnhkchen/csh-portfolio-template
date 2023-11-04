import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [ vitePreprocess()],
	
	vitePlugin: {
		inspector: true,
	},
	kit: {
		adapter: adapter({
			edge: false,
			split: false
		})
	}
};
export default config;