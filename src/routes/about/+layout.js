export async function load({ fetch, params }) {
    const res = await fetch(
        `https://forbgkids-cms.herokuapp.com/api/about/?populate[0]=*&populate[1]=media&populate[2]=subpage.media`
    );
    if (res.status === 404) {
        const error = new Error(`The page was not found`);
        return { status: 404, error };
    } else {
        const about = await res.json();
        return { about: about.data.attributes };
    }
}
