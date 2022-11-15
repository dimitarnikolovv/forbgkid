export async function load({ fetch }) {
    const query = `https://forbgkids-cms.herokuapp.com/api/centre?populate[0]=*&&populate[1]=nested_subpage`;
    const res = await fetch(query);

    if (res.status === 404) {
        const error = new Error(`The post was not found`);
        return { status: 404, error };
    } else {
        const centre = await res.json();
        return { centre: centre.data.attributes };
    }
}
