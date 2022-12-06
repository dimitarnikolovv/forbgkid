import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component } from "../../../../../chunks/index.js";
import { p as page } from "../../../../../chunks/stores.js";
import { M as MarkedData } from "../../../../../chunks/MarkedData.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let subpage;
  let nested_page;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  {
    data.centre.sub_pages.data.forEach((sp) => {
      if (sp.id == $page.params.slug)
        subpage = sp;
    });
  }
  {
    subpage.attributes.nested_pages.data.forEach((np) => {
      if (np.attributes.slug === $page.params.nested_slug)
        nested_page = np;
    });
  }
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1ia81qz_START -->${$$result.title = `<title>${escape(nested_page.attributes.title)}</title>`, ""}<!-- HEAD_svelte-1ia81qz_END -->`, ""}

${validate_component(MarkedData, "MarkedData").$$render(
    $$result,
    {
      markedData: {
        title: nested_page.attributes.title,
        content: nested_page.attributes.content,
        media: {
          data: nested_page.attributes.fullscreen_media.data
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
