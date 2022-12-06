import { c as create_ssr_component, e as escape, h as null_to_empty } from "./index.js";
const Main_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "main.svelte-56rwmt{display:flex;justify-content:center;gap:3rem;padding-block:3rem;padding-inline:2.5rem;background-color:white}@media only screen and (max-width: 1080px){main.svelte-56rwmt{flex-direction:column}}@media only screen and (max-width: 968px){main.svelte-56rwmt{padding:1rem}}",
  map: null
};
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<main class="${"svelte-56rwmt"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
const Section_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1g413z6{display:flex;justify-content:center;min-height:110vh;min-width:60vw;max-width:60rem}div.text-light{color:#17252a}",
  map: null
};
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { clr = "white" } = $$props;
  if ($$props.clr === void 0 && $$bindings.clr && clr !== void 0)
    $$bindings.clr(clr);
  $$result.css.add(css);
  return `<section style="${"background-color: " + escape(clr, true) + ";"}" class="${escape(null_to_empty(clr === "white" ? "text-dark" : "text-light"), true) + " svelte-1g413z6"}">${slots.default ? slots.default({}) : ``}
</section>`;
});
export {
  Main as M,
  Section as S
};
