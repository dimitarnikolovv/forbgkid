import qs from 'qs';

export async function load({ fetch }) {
    const querry = qs.stringify({
        populate: ['*', 'media', 'subpage.media'],
    });

    const res = await fetch(`https://forbgkids-cms.herokuapp.com/api/about/?${querry}`);
    if (res.status === 404) {
        const error = new Error(`The page was not found`);
        return { status: 404, error };
    } else {
        const about = await res.json();
        return { about: about.data.attributes };
    }
}
