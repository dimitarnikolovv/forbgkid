import { c as create_ssr_component, b as subscribe, v as validate_component, d as add_classes } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
import { M as Main, S as Section } from "../../../../chunks/Section.js";
import { S as Sidebar } from "../../../../chunks/Sidebar.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentPage;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  currentPage = $page.url.pathname.substring($page.url.pathname.lastIndexOf("/") + 1);
  $$unsubscribe_page();
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Section, "Section").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}

    ${validate_component(Sidebar, "Sidebar").$$render($$result, { title: "\u0412\u0438\u0436\u0442\u0435 \u043E\u0449\u0435" }, {}, {
        default: () => {
          return `<li><a href="${"/projects/calendar"}"${add_classes((currentPage === "calendar" ? "active" : "").trim())}>\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440</a></li>
        <li><a href="${"/projects/awards"}"${add_classes((currentPage === "awards" ? "active" : "").trim())}>\u041D\u0430\u0433\u0440\u0430\u0434\u0438</a></li>
        <li><a href="${"/projects/privacy"}"${add_classes((currentPage === "privacy" ? "active" : "").trim())}>\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u0437\u0430 \u043F\u043E\u0432\u0435\u0440\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442 \u0438 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438</a></li>`;
        }
      })}`;
    }
  })}`;
});
export {
  Layout as default
};
