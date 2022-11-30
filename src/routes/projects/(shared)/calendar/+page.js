import qs from 'qs';

export async function load({ fetch }) {
    const querry = qs.stringify({
        populate: ['*'],
    });
    const res = await fetch(`https://forbgkids-cms.herokuapp.com/api/events?${querry}`);
    if (res.status === 404) {
        const error = new Error(`No events could be found`);
        return { status: 404, error };
    } else {
        const events = await res.json();
        return { events: events.data };
    }
}
