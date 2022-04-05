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
  default: () => Contact,
  router: () => router
});
module.exports = __toCommonJS(stdin_exports);
var import_index_358b9723 = require("../../chunks/index-358b9723.js");
var import_env_838bf73b = require("../../chunks/env-838bf73b.js");
var import_Main_06dbf238 = require("../../chunks/Main-06dbf238.js");
const router = import_env_838bf73b.b;
const Contact = (0, import_index_358b9723.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438</title>`, ""}`, ""}

${(0, import_index_358b9723.v)(import_Main_06dbf238.M, "Main").$$render($$result, {}, {}, {})}`;
});
