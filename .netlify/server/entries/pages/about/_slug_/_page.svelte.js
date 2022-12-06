import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
import { M as MarkedData } from "../../../../chunks/MarkedData.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let subpage;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  {
    data.about.sub_pages.data.forEach((sp) => {
      if (sp.attributes.slug === $page.params.slug)
        subpage = sp;
    });
  }
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1u2l2m0_START -->${$$result.title = `<title>${escape(subpage.title)}</title>`, ""}<!-- HEAD_svelte-1u2l2m0_END -->`, ""}

${validate_component(MarkedData, "MarkedData").$$render(
    $$result,
    {
      markedData: {
        title: subpage.attributes.title,
        content: subpage.attributes.content,
        media: {
          data: subpage.attributes.fullscreen_media.data
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
