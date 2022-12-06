import qs from "qs";
async function load({ fetch }) {
  const querry = qs.stringify({
    populate: ["*", "fullscreen_media", "sub_pages.fullscreen_media"]
  });
  const res = await fetch(`https://forbgkids-cms.herokuapp.com/api/donate/?${querry}`);
  if (res.status === 404) {
    const error = new Error(`The page was not found`);
    return { status: 404, error };
  } else {
    const donate = await res.json();
    return { donate: donate.data.attributes };
  }
}
export {
  load
};
