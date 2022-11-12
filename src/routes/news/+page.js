/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
    const response = await fetch('https://forbgkids-cms.herokuapp.com/api/posts');
    const posts = await response.json();
    return { posts: posts.data };
}
