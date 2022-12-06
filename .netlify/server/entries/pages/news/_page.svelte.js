import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { M as Main, S as Section } from "../../../chunks/Section.js";
import qs from "qs";
import { P as PaginationWrapper } from "../../../chunks/PaginationWrapper.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const querry = qs.stringify({
    fields: ["title", "description", "slug"],
    populate: "media"
  });
  const params = {
    fetchURL: "https://forbgkids-cms.herokuapp.com/api/posts",
    querry,
    targetEndpoint: "news",
    title: "\u041D\u043E\u0432\u0438\u043D\u0438"
  };
  return `${$$result.head += `<!-- HEAD_svelte-1j0c51l_START -->${$$result.title = `<title>\u041D\u043E\u0432\u0438\u043D\u0438</title>`, ""}<!-- HEAD_svelte-1j0c51l_END -->`, ""}

${validate_component(Main, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Section, "Section").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PaginationWrapper, "PaginationWrapper").$$render($$result, { params }, {}, {})}`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};
