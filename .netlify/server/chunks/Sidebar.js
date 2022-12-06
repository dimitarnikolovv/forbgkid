import { c as create_ssr_component, e as escape, v as validate_component } from "./index.js";
import { B as Button } from "./Button.js";
const Sidebar_svelte_svelte_type_style_lang = "";
const css = {
  code: "aside.svelte-t8lve2{z-index:1;position:sticky;top:10rem;width:30%;min-width:30%;height:fit-content;background-color:wheat;padding-block:0.5rem;display:flex;flex-direction:column;align-items:center}@media only screen and (max-width: 1080px){aside.svelte-t8lve2{width:100%}}aside ul li{padding:0.8rem}aside ul li a{font-style:italic;font-weight:300;background-image:linear-gradient(90deg, rgb(139, 138, 138), rgb(65, 65, 65));background-size:0% 2px;background-repeat:no-repeat;background-position:left bottom;transition:background-size 300ms ease-in-out, font-weight 200ms ease}aside ul li a.active{font-weight:500}aside ul li a:hover{background-size:100% 2px}",
  map: null
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { button = { text: "", link: "" } } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.button === void 0 && $$bindings.button && button !== void 0)
    $$bindings.button(button);
  $$result.css.add(css);
  return `<aside class="${"svelte-t8lve2"}"><h1>${escape(title)}</h1>
    <nav><ul>${slots.default ? slots.default({}) : ``}</ul></nav>
    ${button.text != "" ? `${validate_component(Button, "Button").$$render($$result, { params: button }, {}, {})}` : ``}
</aside>`;
});
export {
  Sidebar as S
};
