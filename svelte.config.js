import adapter from '@sveltejs/adapter-netlify';
import preprocessor from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocessor(),
    kit: {
        adapter: adapter({
            split: false,
        }),

        // Override http methods in the Todo forms
        methodOverride: {
            allowed: ['PATCH', 'DELETE'],
        },
    },
};

export default config;
