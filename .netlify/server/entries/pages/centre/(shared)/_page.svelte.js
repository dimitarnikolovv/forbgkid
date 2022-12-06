import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../chunks/index.js";
import { M as MarkedData } from "../../../../chunks/MarkedData.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-6i79m4_START -->${$$result.title = `<title>${escape(data.centre.title)}</title>`, ""}<!-- HEAD_svelte-6i79m4_END -->`, ""}

${validate_component(MarkedData, "MarkedData").$$render(
    $$result,
    {
      markedData: {
        title: data.centre.title,
        content: data.centre.content,
        media: { data: data.centre.fullscreen_media.data }
      }
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
