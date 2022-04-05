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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_358b9723 = require("../../../chunks/index-358b9723.js");
var import_Main_06dbf238 = require("../../../chunks/Main-06dbf238.js");
var import_Section_ea26a762 = require("../../../chunks/Section-ea26a762.js");
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".section-wrap.svelte-jhp3sm.svelte-jhp3sm{display:flex;gap:3rem}@media only screen and (max-width: 1080px){.section-wrap.svelte-jhp3sm.svelte-jhp3sm{flex-direction:column}}.section-wrap.svelte-jhp3sm .content.svelte-jhp3sm{display:flex;flex-direction:column;gap:1rem;width:70%}@media only screen and (max-width: 1080px){.section-wrap.svelte-jhp3sm .content.svelte-jhp3sm{width:100%}}.section-wrap.svelte-jhp3sm aside.svelte-jhp3sm{width:30%;height:fit-content;background-color:wheat;padding-block:0.5rem;display:flex;flex-direction:column;align-items:center}@media only screen and (max-width: 1080px){.section-wrap.svelte-jhp3sm aside.svelte-jhp3sm{width:100%}}.section-wrap.svelte-jhp3sm aside ul li.svelte-jhp3sm{padding:0.8rem}.section-wrap.svelte-jhp3sm aside ul li a.svelte-jhp3sm{font-style:italic;font-weight:300;background-image:linear-gradient(90deg, rgb(139, 138, 138), rgb(65, 65, 65));background-size:0% 2px;background-repeat:no-repeat;background-position:left bottom;transition:background-size 300ms ease-in-out}.section-wrap.svelte-jhp3sm aside ul li a.svelte-jhp3sm:hover{background-size:100% 2px}",
  map: null
};
const _layout = (0, import_index_358b9723.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_358b9723.v)(import_Main_06dbf238.M, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `${(0, import_index_358b9723.v)(import_Section_ea26a762.S, "Section").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"section-wrap svelte-jhp3sm"}"><div class="${"content svelte-jhp3sm"}">${slots.default ? slots.default({}) : ``}</div>
            <aside class="${"svelte-jhp3sm"}"><h1>\u041E\u0449\u0435</h1>
                <nav><ul><li class="${"svelte-jhp3sm"}"><a href="${"/about"}" class="${"svelte-jhp3sm"}">\u041A\u0430\u043A \u043F\u043E\u043C\u0430\u0433\u0430\u043C\u0435</a></li>
                        <li class="${"svelte-jhp3sm"}"><a href="${"/about/mission"}" class="${"svelte-jhp3sm"}">\u041C\u0438\u0441\u0438\u044F</a></li>
                        <li class="${"svelte-jhp3sm"}"><a href="${"/about/purpose"}" class="${"svelte-jhp3sm"}">\u0426\u0435\u043B\u0438 \u0438 \u0434\u0435\u0439\u043D\u043E\u0441\u0442\u0438</a></li>
                        <li class="${"svelte-jhp3sm"}"><a href="${"/about/candidate-criteria"}" class="${"svelte-jhp3sm"}">\u041A\u0440\u0438\u0442\u0435\u0440\u0438\u0438 \u0437\u0430 \u043F\u043E\u0434\u0431\u043E\u0440 \u043D\u0430 \u043A\u0430\u043D\u0434\u0438\u0434\u0430\u0442\u0438</a></li></ul></nav></aside></div>`;
        }
      })}`;
    }
  })}`;
});
