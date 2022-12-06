import { c as create_ssr_component, j as add_attribute, e as escape } from "./index.js";
const Button_svelte_svelte_type_style_lang = "";
const css = {
  code: ".btn.svelte-13b6bl3.svelte-13b6bl3{margin-block:2rem;padding-block:0.5rem;padding-inline:1rem;border-left:4px solid black;border-right:3px solid black;border-top:1px solid black;border-bottom:1px solid black;border-radius:40% 60%;width:fit-content;transition:border-radius 200ms ease}.btn.svelte-13b6bl3 a.svelte-13b6bl3{color:currentColor;font-style:italic;background-image:linear-gradient(90deg, rgb(115, 167, 245), rgb(0, 86, 214));background-size:0% 1px;background-repeat:no-repeat;background-position:left bottom;transition:color 150ms ease, background-size 200ms ease-in-out}.btn.svelte-13b6bl3.svelte-13b6bl3:hover{border-left:4px solid rgba(0, 86, 214, 0.87);border-right:3px solid rgba(0, 86, 214, 0.87);border-top:1px solid rgba(0, 86, 214, 0.87);border-bottom:1px solid rgba(0, 86, 214, 0.87);border-radius:35% 65%}.btn.svelte-13b6bl3:hover a.svelte-13b6bl3{color:rgba(0, 86, 214, 0.87);background-size:100% 1px}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { params = { text: "", link: "" } } = $$props;
  if ($$props.params === void 0 && $$bindings.params && params !== void 0)
    $$bindings.params(params);
  $$result.css.add(css);
  return `<div class="${"btn svelte-13b6bl3"}"><a${add_attribute("href", params.link, 0)} class="${"svelte-13b6bl3"}">${escape(params.text)}</a></div>`;
});
export {
  Button as B
};
