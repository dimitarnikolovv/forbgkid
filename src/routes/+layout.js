export async function load({ fetch }) {
    const [homepageReq, postsPreviewReq] = await Promise.all([
        fetch('https://forbgkids-cms.herokuapp.com/api/home-page?populate=*'),
        fetch(
            'https://forbgkids-cms.herokuapp.com/api/posts?%2A&fields=title&fields=description&fields=slug'
        ),
    ]);

    if (homepageReq.ok && postsPreviewReq.ok) {
        const homepageRes = await homepageReq.json();
        const postsPreviewRes = await postsPreviewReq.json();

        return {
            homepage: homepageRes.data.attributes,
            postsPreview: postsPreviewRes.data.slice(0, 4),
        };
    } else {
        const error = new Error(`Could not fecth data`);
        return { status: 404, error };
    }
}
