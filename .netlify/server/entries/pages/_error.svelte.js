import { c as create_ssr_component, e as escape } from "../../chunks/index.js";
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-1fhnf6y{height:72vh;width:100vw;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:white}",
  map: null
};
function load({ error, status }) {
  return {
    props: { message: error.message, status }
  };
}
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { message } = $$props;
  let { status } = $$props;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  $$result.css.add(css);
  return `<div class="${"svelte-1fhnf6y"}"><h1>${escape(message)}</h1>
    <p>Error code: ${escape(status)}</p>
</div>`;
});
export {
  Error as default,
  load
};
