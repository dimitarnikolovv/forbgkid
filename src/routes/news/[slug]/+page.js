/** @type {import('./$types').PageLoad} */

export async function load({ fetch, params }) {
    const res = await fetch(`https://forbgkids-cms.herokuapp.com/api/posts/${params.slug}`);
    // A 404 status means "NOT FOUND"
    if (res.status === 404) {
        // We can create a custom error and return it.
        // SvelteKit will automatically show us an error page that we'll learn to customise later on.
        const error = new Error(`The post ${id} was not found`);
        return { status: 404, error };
    } else {
        const post = await res.json();
        return { post: post.data.attributes };
    }
}
