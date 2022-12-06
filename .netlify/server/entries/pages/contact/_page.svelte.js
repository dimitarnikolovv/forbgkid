import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/index.js";
import { M as Main, S as Section } from "../../../chunks/Section.js";
import { M as MarkedData } from "../../../chunks/MarkedData.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1u1ey1r_START -->${$$result.title = `<title>${escape(data.contact.title)}</title>`, ""}<!-- HEAD_svelte-1u1ey1r_END -->`, ""}

${validate_component(Main, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Section, "Section").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(MarkedData, "MarkedData").$$render(
            $$result,
            {
              markedData: {
                title: data.contact.title,
                content: data.contact.content,
                media: { data: data.contact.fullscreen_media.data }
              }
            },
            {},
            {}
          )}`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};
