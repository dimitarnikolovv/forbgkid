import { c as create_ssr_component, b as subscribe, v as validate_component, d as add_classes, f as each, e as escape } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
import { M as Main, S as Section } from "../../../chunks/Section.js";
import { S as Sidebar } from "../../../chunks/Sidebar.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentPage;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
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
          return `<li><a href="${"/about"}"${add_classes((currentPage === "about" ? "active" : "").trim())}>\u041A\u0430\u043A \u043F\u043E\u043C\u0430\u0433\u0430\u043C\u0435</a></li>
        ${each(data.about.sub_pages.data, (subpage) => {
            return `<li><a href="${"/about/" + escape(subpage.attributes.slug, true)}"${add_classes((currentPage === subpage.attributes.slug ? "active" : "").trim())}>${escape(subpage.attributes.title)}</a>
            </li>`;
          })}`;
        }
      })}`;
    }
  })}`;
});
export {
  Layout as default
};
