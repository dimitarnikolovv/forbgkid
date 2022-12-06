import qs from "qs";
async function load({ fetch, params }) {
  const querry = qs.stringify({
    filters: {
      slug: {
        $eq: params.slug
      }
    },
    populate: "*"
  });
  const res = await fetch(`https://forbgkids-cms.herokuapp.com/api/posts?${querry}`);
  if (res.status === 404) {
    const error = new Error(`The post ${params.slug} was not found`);
    return { status: 404, error };
  } else {
    const post = await res.json();
    return { post: post.data[0].attributes };
  }
}
export {
  load
};
