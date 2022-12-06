import qs from "qs";
async function load({ fetch }) {
  const querry = qs.stringify({
    populate: ["*"]
  });
  const res = await fetch(`https://forbgkids-cms.herokuapp.com/api/privacy-policy/?${querry}`);
  if (res.status === 404) {
    const error = new Error(`The page was not found`);
    return { status: 404, error };
  } else {
    const privacy = await res.json();
    return { privacy: privacy.data.attributes };
  }
}
export {
  load
};
