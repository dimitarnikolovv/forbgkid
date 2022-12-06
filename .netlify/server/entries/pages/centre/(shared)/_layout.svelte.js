import { c as create_ssr_component, b as subscribe, v as validate_component, f as each, e as escape, d as add_classes } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
import { M as Main, S as Section } from "../../../../chunks/Section.js";
import { S as Sidebar } from "../../../../chunks/Sidebar.js";
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

    ${data.centre.sub_pages.data ? `${validate_component(Sidebar, "Sidebar").$$render($$result, { title: "\u041E\u0449\u0435" }, {}, {
        default: () => {
          return `${each(data.centre.sub_pages.data, (subpage) => {
            return `<li><a href="${"/centre/" + escape(subpage.id, true)}"${add_classes((currentPage === subpage.attributes.slug ? "active" : "").trim())}>${escape(subpage.attributes.title)}</a>
                </li>`;
          })}`;
        }
      })}` : ``}`;
    }
  })}`;
});
export {
  Layout as default
};
