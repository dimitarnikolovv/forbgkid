import { c as create_ssr_component } from "./index.js";
import "qs";
const Entry_svelte_svelte_type_style_lang = "";
const PaginationWrapper_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.entry-wrap.svelte-cp1kcq.svelte-cp1kcq{display:flex;flex-direction:column;gap:4rem}.head.svelte-cp1kcq.svelte-cp1kcq{display:flex;justify-content:space-between}@media only screen and (max-width: 768px){.head.svelte-cp1kcq.svelte-cp1kcq{flex-direction:column;align-items:center;margin-block-end:2rem}}.controls.svelte-cp1kcq.svelte-cp1kcq{display:flex;justify-content:center;gap:3rem;align-items:center;margin-block:3rem}.controls.top.svelte-cp1kcq.svelte-cp1kcq{margin-top:0;margin-bottom:0}.controls.bottom.svelte-cp1kcq.svelte-cp1kcq{margin-bottom:0}input.svelte-cp1kcq.svelte-cp1kcq{vertical-align:middle;outline:none;border:none;border-bottom:0.0625rem solid rgb(104, 101, 101);border-radius:0.125rem;padding:0.25rem 0.5rem;margin-inline:0.8rem;width:2rem}input.svelte-cp1kcq.svelte-cp1kcq:focus{border-bottom:0.07rem solid rgb(63, 61, 61)}.pagination.svelte-cp1kcq.svelte-cp1kcq{display:flex;flex-wrap:nowrap;overflow:scroll hidden;border-radius:0.125rem;margin:auto 1rem}.pagination.svelte-cp1kcq.svelte-cp1kcq::-webkit-scrollbar{height:0}.pagination.svelte-cp1kcq button.svelte-cp1kcq{border-radius:0}button.svelte-cp1kcq.svelte-cp1kcq{vertical-align:middle;cursor:pointer;background:rgb(63, 61, 61);outline:none;border:0.0625rem solid rgb(63, 61, 61);color:#ffffff;border-radius:0.125rem;padding:0.25rem 0.5rem}button.svelte-cp1kcq.svelte-cp1kcq:hover{background:#000000}button.svelte-cp1kcq.svelte-cp1kcq:disabled{background:gray;border:0.0625rem solid gray;cursor:not-allowed}",
  map: null
};
const PaginationWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { params = {
    fetchURL: "",
    querry: "",
    title: "",
    targetEndpoint: ""
  } } = $$props;
  if ($$props.params === void 0 && $$bindings.params && params !== void 0)
    $$bindings.params(params);
  $$result.css.add(css);
  return `

${`<div class="${"skeleton"}"></div>`}`;
});
export {
  PaginationWrapper as P
};
