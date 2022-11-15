export async function load({ fetch, params }) {
    const query = `https://forbgkids-cms.herokuapp.com/api/centre?populate[0]=*&populate[1]=fullscreen_media&populate[2]=nested_subpage.fullscreen_media&populate[3]=nested_subpage.subpage&populate[4]=nested_subpage.subpage.fullscreen_media`;
    const res = await fetch(query);

    if (res.status === 404) {
        const error = new Error(`The page was not found`);
        return { status: 404, error };
    } else {
        const centre = await res.json();
        return { centre: centre.data.attributes };
    }
}
