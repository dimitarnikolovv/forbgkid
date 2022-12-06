import { c as create_ssr_component, b as subscribe, v as validate_component, d as add_classes, f as each, e as escape } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
import { M as Main, S as Section } from "../../../chunks/Section.js";
import { S as Sidebar } from "../../../chunks/Sidebar.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.donate.svelte-1wjlmax.svelte-1wjlmax{z-index:30;position:fixed;bottom:1rem;left:1rem}div.donate.svelte-1wjlmax a.svelte-1wjlmax{display:block}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentPage;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  currentPage = $page.url.pathname.substring($page.url.pathname.lastIndexOf("/") + 1);
  $$unsubscribe_page();
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Section, "Section").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}
    ${validate_component(Sidebar, "Sidebar").$$render($$result, { title: "\u041E\u0449\u0435" }, {}, {
        default: () => {
          return `<li><a href="${"/donate"}"${add_classes((currentPage === "donate" ? "active" : "").trim())}>\u0414\u0430\u0440\u0438\u0442\u0435\u043B\u0441\u0442\u0432\u043E</a></li>
        ${each(data.donate.sub_pages.data, (subpage) => {
            return `<li><a href="${"/donate/" + escape(subpage.attributes.slug, true)}"${add_classes((currentPage === subpage.attributes.slug ? "active" : "").trim())}>${escape(subpage.attributes.title)}</a>
            </li>`;
          })}`;
        }
      })}

    ${currentPage !== "darete-sega" ? `<div class="${"donate svelte-1wjlmax"}"><a href="${"/donate/darete-sega"}" class="${"svelte-1wjlmax"}"><div class="${"donate-now-icon"}"></div></a></div>` : ``}`;
    }
  })}`;
});
export {
  Layout as default
};
