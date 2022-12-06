import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../chunks/index.js";
import { M as Main, S as Section } from "../../../../chunks/Section.js";
import { M as MarkedData } from "../../../../chunks/MarkedData.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const dateCreated = new Date(data.post.createdAt);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-189x68v_START -->${$$result.title = `<title>${escape(data.post.title)}</title>`, ""}<!-- HEAD_svelte-189x68v_END -->`, ""}

${validate_component(Main, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Section, "Section").$$render($$result, {}, {}, {
        default: () => {
          return `<article>${validate_component(MarkedData, "MarkedData").$$render(
            $$result,
            {
              markedData: {
                title: data.post.title,
                content: data.post.content,
                date: dateCreated,
                media: { data: false }
              }
            },
            {},
            {}
          )}</article>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};
