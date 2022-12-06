import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import qs from "qs";
import { P as PaginationWrapper } from "../../../../chunks/PaginationWrapper.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const querry = qs.stringify({
    fields: ["title", "description"],
    populate: "media"
  });
  const params = {
    fetchURL: "https://forbgkids-cms.herokuapp.com/api/projects",
    querry,
    targetEndpoint: "projects",
    title: "\u041F\u0440\u043E\u0435\u043A\u0442\u0438"
  };
  return `${$$result.head += `<!-- HEAD_svelte-uduezb_START -->${$$result.title = `<title>\u041F\u0440\u043E\u0435\u043A\u0442\u0438</title>`, ""}<!-- HEAD_svelte-uduezb_END -->`, ""}

${validate_component(PaginationWrapper, "PaginationWrapper").$$render($$result, { params }, {}, {})}`;
});
export {
  Page as default
};
