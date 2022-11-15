/** @type {import('./$types').PageLoad} */

export async function load({ fetch, params }) {
    const querry = `https://forbgkids-cms.herokuapp.com/api/posts?filters[slug][$eq]=${params.slug}&populate=*`;

    const res = await fetch(querry);
    // A 404 status means "NOT FOUND"
    if (res.status === 404) {
        const error = new Error(`The post ${params.slug} was not found`);
        return { status: 404, error };
    } else {
        const post = await res.json();
        return { post: post.data[0].attributes };
    }
}
