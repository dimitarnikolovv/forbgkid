import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/index.js";
import { M as MarkedData } from "../../../chunks/MarkedData.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1pdhlqy_START -->${$$result.title = `<title>${escape(data.about.title)}</title>`, ""}<!-- HEAD_svelte-1pdhlqy_END -->`, ""}

${validate_component(MarkedData, "MarkedData").$$render(
    $$result,
    {
      markedData: {
        title: data.about.title,
        content: data.about.content,
        media: { data: data.about.fullscreen_media.data }
      }
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
