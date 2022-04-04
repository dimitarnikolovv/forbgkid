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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_3be38542 = require("../../chunks/index-3be38542.js");
var import_Main_cd69ef7f = require("../../chunks/Main-cd69ef7f.js");
var Section_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-11ek16d{display:flex;justify-content:center;position:relative;width:100vw;height:120vh}@media only screen and (max-width: 350px){section.svelte-11ek16d #mediaSmall{height:80vh}}@media only screen and (max-width: 450px){section.svelte-11ek16d #mediaSmall{height:90vh}}div.background.svelte-11ek16d{z-index:0;width:100vw;height:120vh;position:absolute}div.text-light{color:#17252a}div.container.svelte-11ek16d{z-index:1;display:flex;flex-direction:column;width:90vw;max-width:95%;max-height:80%;padding-block:5rem;background-color:transparent}@media only screen and (max-width: 768px){div.container.svelte-11ek16d{padding-block-start:1rem}}",
  map: null
};
const Section = (0, import_index_3be38542.c)(($$result, $$props, $$bindings, slots) => {
  let { clr = "white" } = $$props;
  let { cp = "" } = $$props;
  let { mediaSmall = false } = $$props;
  if ($$props.clr === void 0 && $$bindings.clr && clr !== void 0)
    $$bindings.clr(clr);
  if ($$props.cp === void 0 && $$bindings.cp && cp !== void 0)
    $$bindings.cp(cp);
  if ($$props.mediaSmall === void 0 && $$bindings.mediaSmall && mediaSmall !== void 0)
    $$bindings.mediaSmall(mediaSmall);
  $$result.css.add(css);
  return `<section class="${"svelte-11ek16d"}"><div${(0, import_index_3be38542.b)("id", mediaSmall ? "mediaSmall" : "", 0)} class="${"background svelte-11ek16d"}" style="${"background: " + (0, import_index_3be38542.e)(clr) + "; clip-path: " + (0, import_index_3be38542.e)(cp) + ";"}"></div>
    <div class="${"container " + (0, import_index_3be38542.e)(clr === "white" ? "text-dark" : "text-light") + " svelte-11ek16d"}">${slots.default ? slots.default({}) : ``}</div>
</section>`;
});
const Routes = (0, import_index_3be38542.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>\u0428\u0430\u043D\u0441 \u0437\u0430 \u0434\u0435\u0446\u0430\u0442\u0430 \u043D\u0430 \u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F - \u0424\u043E\u043D\u0434\u0430\u0446\u0438\u044F \u0437\u0430 \u043C\u043B\u0430\u0434\u0438 \u0442\u0430\u043B\u0430\u043D\u0442\u0438</title>`, ""}`, ""}

${(0, import_index_3be38542.v)(import_Main_cd69ef7f.M, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `${(0, import_index_3be38542.v)(Section, "Section").$$render($$result, {}, {}, {
        default: () => {
          return `<div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita esse, ut, eaque
            fugiat tenetur atque sed mollitia inventore iste dicta sapiente quibusdam modi.
        </div>
        <div></div>`;
        }
      })}`;
    }
  })}`;
});
