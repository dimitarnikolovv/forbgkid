import qs from 'qs';

export async function load({ fetch }) {
    const querry = qs.stringify({
        populate: ['*', 'fullscreen_media', 'nested_subpage'],
    });

    const res = await fetch(`https://forbgkids-cms.herokuapp.com/api/centre?${querry}`);

    if (res.status === 404) {
        const error = new Error(`The post was not found`);
        return { status: 404, error };
    } else {
        const centre = await res.json();
        return { centre: centre.data.attributes };
    }
}
