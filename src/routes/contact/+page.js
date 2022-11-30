import qs from 'qs';

export async function load({ fetch }) {
    const querry = qs.stringify({
        populate: ['*', 'fullscreen_media', 'sub_pages.fullscreen_media'],
    });

    const res = await fetch(`https://forbgkids-cms.herokuapp.com/api/contact?${querry}`);
    if (res.status === 404) {
        const error = new Error(`The page was not found`);
        return { status: 404, error };
    } else {
        const contact = await res.json();
        return { contact: contact.data.attributes };
    }
}
