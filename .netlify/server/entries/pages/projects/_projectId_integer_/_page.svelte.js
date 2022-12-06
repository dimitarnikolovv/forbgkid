import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../chunks/index.js";
import { M as MarkedData } from "../../../../chunks/MarkedData.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1jkwix9_START -->${$$result.title = `<title>${escape(data.project.attributes.title)}</title>`, ""}<!-- HEAD_svelte-1jkwix9_END -->`, ""}

${validate_component(MarkedData, "MarkedData").$$render(
    $$result,
    {
      markedData: {
        title: data.project.attributes.title,
        content: data.project.attributes.content,
        media: {
          data: data.project.attributes.fullscreen_media
        }
      }
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
