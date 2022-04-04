var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["fonts/Gilroy-Black.woff", "fonts/Gilroy-Black.woff2", "fonts/Gilroy-BlackItalic.woff", "fonts/Gilroy-BlackItalic.woff2", "fonts/Gilroy-Bold.woff", "fonts/Gilroy-Bold.woff2", "fonts/Gilroy-BoldItalic.woff", "fonts/Gilroy-BoldItalic.woff2", "fonts/Gilroy-ExtraBold.woff", "fonts/Gilroy-ExtraBold.woff2", "fonts/Gilroy-ExtraBoldItalic.woff", "fonts/Gilroy-ExtraBoldItalic.woff2", "fonts/Gilroy-Heavy.woff", "fonts/Gilroy-Heavy.woff2", "fonts/Gilroy-HeavyItalic.woff", "fonts/Gilroy-HeavyItalic.woff2", "fonts/Gilroy-Light.woff", "fonts/Gilroy-Light.woff2", "fonts/Gilroy-LightItalic.woff", "fonts/Gilroy-LightItalic.woff2", "fonts/Gilroy-Medium.woff", "fonts/Gilroy-Medium.woff2", "fonts/Gilroy-MediumItalic.woff", "fonts/Gilroy-MediumItalic.woff2", "fonts/Gilroy-Regular.woff", "fonts/Gilroy-Regular.woff2", "fonts/Gilroy-RegularItalic.woff", "fonts/Gilroy-RegularItalic.woff2", "fonts/Gilroy-SemiBold.woff", "fonts/Gilroy-SemiBold.woff2", "fonts/Gilroy-SemiBoldItalic.woff", "fonts/Gilroy-SemiBoldItalic.woff2", "fonts/Gilroy-Thin.woff", "fonts/Gilroy-Thin.woff2", "fonts/Gilroy-ThinItalic.woff", "fonts/Gilroy-ThinItalic.woff2", "fonts/Gilroy-UltraLight.woff", "fonts/Gilroy-UltraLight.woff2", "fonts/Gilroy-UltraLightItalic.woff", "fonts/Gilroy-UltraLightItalic.woff2", "icons/favicon.png", "icons/favicon.svg", "images/forbgkids-logo-bg.png", "images/forbgkids-logo-only.png"]),
  mimeTypes: { ".woff": "font/woff", ".woff2": "font/woff2", ".png": "image/png", ".svg": "image/svg+xml" },
  _: {
    entry: { "file": "start-475787eb.js", "js": ["start-475787eb.js", "chunks/index-14ee8c49.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/9.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        id: "projects",
        pattern: /^\/projects\/?$/,
        names: [],
        types: [],
        path: "/projects",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        id: "contact",
        pattern: /^\/contact\/?$/,
        names: [],
        types: [],
        path: "/contact",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        id: "centre",
        pattern: /^\/centre\/?$/,
        names: [],
        types: [],
        path: "/centre",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        id: "donate",
        pattern: /^\/donate\/?$/,
        names: [],
        types: [],
        path: "/donate",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        id: "about",
        pattern: /^\/about\/?$/,
        names: [],
        types: [],
        path: "/about",
        shadow: null,
        a: [0, 7],
        b: [1]
      },
      {
        type: "page",
        id: "kids",
        pattern: /^\/kids\/?$/,
        names: [],
        types: [],
        path: "/kids",
        shadow: null,
        a: [0, 8],
        b: [1]
      },
      {
        type: "page",
        id: "en",
        pattern: /^\/en\/?$/,
        names: [],
        types: [],
        path: "/en",
        shadow: null,
        a: [0, 9],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
