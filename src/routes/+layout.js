import qs from 'qs';
export async function load({ fetch }) {
    const querryPage = qs.stringify({
        populate: '*',
    });

    const querryPosts = qs.stringify({
        pagination: {
            start: 0,
            limit: 4,
        },
        fields: ['title', 'description', 'slug'],
    });

    const [homepageReq, postsPreviewReq] = await Promise.all([
        fetch(`https://forbgkids-cms.herokuapp.com/api/home-page?${querryPage}`),
        fetch(`https://forbgkids-cms.herokuapp.com/api/posts?${querryPosts}`),
    ]);

    if (homepageReq.ok && postsPreviewReq.ok) {
        const homepageRes = await homepageReq.json();
        const postsPreviewRes = await postsPreviewReq.json();

        return {
            homepage: homepageRes.data.attributes,
            postsPreview: postsPreviewRes.data,
        };
    } else {
        const error = new Error(`Could not fecth data`);
        return { status: 404, error };
    }
}
