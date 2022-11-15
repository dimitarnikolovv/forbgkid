/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
    const response = await fetch(
        'https://forbgkids-cms.herokuapp.com/api/posts?populate=media&fields[0]=title&fields[0]=description&fields[0]=slug'
    );
    const posts = await response.json();
    return { posts: posts.data };
}
