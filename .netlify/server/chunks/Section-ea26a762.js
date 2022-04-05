var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  S: () => Section
});
module.exports = __toCommonJS(stdin_exports);
var import_index_358b9723 = require("./index-358b9723.js");
var Section_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-3chvu{display:flex;justify-content:center;position:relative;width:100vw;min-height:110vh}div.background.svelte-3chvu{z-index:0;width:100vw;height:100%;position:absolute}div.text-light{color:#17252a}div.container.svelte-3chvu{z-index:1;display:flex;flex-direction:column;width:90vw;max-width:95%;max-height:80%;padding-block:5rem;background-color:transparent}@media only screen and (max-width: 768px){div.container.svelte-3chvu{padding-block-start:1rem}}",
  map: null
};
const Section = (0, import_index_358b9723.c)(($$result, $$props, $$bindings, slots) => {
  let { clr = "white" } = $$props;
  let { cp = "" } = $$props;
  if ($$props.clr === void 0 && $$bindings.clr && clr !== void 0)
    $$bindings.clr(clr);
  if ($$props.cp === void 0 && $$bindings.cp && cp !== void 0)
    $$bindings.cp(cp);
  $$result.css.add(css);
  return `<section class="${"svelte-3chvu"}"><div class="${"background svelte-3chvu"}" style="${"background: " + (0, import_index_358b9723.e)(clr) + "; clip-path: " + (0, import_index_358b9723.e)(cp) + ";"}"></div>
    <div class="${"container " + (0, import_index_358b9723.e)(clr === "white" ? "text-dark" : "text-light") + " svelte-3chvu"}">${slots.default ? slots.default({}) : ``}</div>
</section>`;
});
