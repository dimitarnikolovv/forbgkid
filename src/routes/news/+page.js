/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
    const res = await fetch(
        'https://forbgkids-cms.herokuapp.com/api/posts?populate=media&fields[0]=title&fields[0]=description&fields[0]=slug'
    );
    if (res.status === 404) {
        const error = new Error(`The post ${params.slug} was not found`);
        return { status: 404, error };
    } else {
        const posts = await res.json();
        return { posts: posts.data };
    }
}
