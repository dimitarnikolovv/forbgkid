import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { M as Main, S as Section } from "../../../chunks/Section.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Section, "Section").$$render($$result, {}, {}, {
        default: () => {
          return `<h1>kids</h1>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};
