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
var import_index_358b9723 = require("../../chunks/index-358b9723.js");
var import_Main_06dbf238 = require("../../chunks/Main-06dbf238.js");
var import_Section_ea26a762 = require("../../chunks/Section-ea26a762.js");
var ArrowSlide_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".left.svelte-14c0rj1{transform:rotate(180deg)}svg.svelte-14c0rj1{height:3rem;fill:#c4c4c4;transition:fill 200ms ease}svg.svelte-14c0rj1:hover{fill:white;cursor:pointer}",
  map: null
};
const ArrowSlide = (0, import_index_358b9723.c)(($$result, $$props, $$bindings, slots) => {
  let { direction = "right" } = $$props;
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  $$result.css.add(css$2);
  return `<svg version="${"1.1"}" x="${"0px"}" y="${"0px"}" viewBox="${"0 0 330.002 330.002"}" style="${"enable-background:new 0 0 330.002 330.002;"}" xml:space="${"preserve"}" class="${[
    "svelte-14c0rj1",
    (direction === "left" ? "left" : "") + " " + (direction === "right" ? "right" : "")
  ].join(" ").trim()}"><path d="${"M233.252,155.997L120.752,6.001c-4.972-6.628-14.372-7.97-21-3c-6.628,4.971-7.971,14.373-3,21\n                l105.75,140.997L96.752,306.001c-4.971,6.627-3.627,16.03,3,21c2.698,2.024,5.856,3.001,8.988,3.001\n                c4.561,0,9.065-2.072,12.012-6.001l112.5-150.004C237.252,168.664,237.252,161.33,233.252,155.997z"}"></path></svg>`;
});
var Carousel_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.carousel-wrap.svelte-1woju3x.svelte-1woju3x{overflow-x:hidden;position:relative}ul.svelte-1woju3x.svelte-1woju3x{display:flex;justify-content:space-around;gap:1rem;transition:transform 500ms ease}ul.svelte-1woju3x .carousel--item-title.svelte-1woju3x{height:2rem;display:flex;justify-content:center}ul.svelte-1woju3x .carousel--item-title a.svelte-1woju3x{margin-inline:auto;font-size:large;color:white}.faded.svelte-1woju3x.svelte-1woju3x{z-index:2;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;width:15%;background:rgb(0, 0, 0)}@media only screen and (max-width: 1020px){.faded.svelte-1woju3x.svelte-1woju3x{background:none !important}}.faded-left.svelte-1woju3x.svelte-1woju3x{left:0;background:linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(255, 255, 255, 0) 100%)}.faded-right.svelte-1woju3x.svelte-1woju3x{right:0;background:linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0) 100%)}",
  map: null
};
const Carousel = (0, import_index_358b9723.c)(($$result, $$props, $$bindings, slots) => {
  const carouselSlides = [
    {
      link: "/images/desk.png",
      title: "\u0415\u0432\u0440\u043E\u0434\u0435\u0441\u043A \u0432\u0435\u0447\u0435 \u0438 \u0432 \u0411\u0443\u0440\u0433\u0430\u0441",
      page: "/"
    },
    {
      link: "/images/it_2022.jpg",
      title: "VII \u043E\u0431\u043B\u0430\u0441\u0442\u043D\u0430 \u043E\u043B\u0438\u043C\u043F\u0438\u0430\u0434\u0430 \u043F\u043E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0430",
      page: "/"
    },
    {
      link: "/images/talents.jpeg",
      title: '\u041A\u0430\u043C\u043F\u0430\u043D\u0438\u044F "\u0428\u0430\u043D\u0441 \u0437\u0430 \u0442\u0430\u043B\u0430\u043D\u0442\u0430 \u043D\u0430 \u0411\u0443\u0440\u0433\u0430\u0441"',
      page: "/"
    },
    {
      link: "/images/math_test.jpg",
      title: 'IV-\u0442\u0438 \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0442\u0443\u0440\u043D\u0438\u0440 \u0437\u0430 \u0434\u0435\u0446\u0430 \u043E\u0442 \u043F\u0440\u0435\u0434\u0443\u0447\u0438\u043B\u0438\u0449\u043D\u0430 \u0432\u044A\u0437\u0440\u0430\u0441\u0442 "\u041C\u043D\u043E\u0433\u043E\u0437\u043D\u0430\u0439\u043A\u043E"',
      page: "/"
    },
    {
      link: "/images/literature.png",
      title: 'VIII \u043D\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u0435\u043D \u043B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0435\u043D \u043A\u043E\u043D\u043A\u0443\u0440\u0441 \u043D\u0430 \u0442\u0435\u043C\u0430 "\u041A\u043E\u0433\u0430\u0442\u043E \u0443\u0442\u0440\u0435 \u0441\u0442\u0430\u043D\u0435 \u0434\u043D\u0435\u0441"',
      page: "/"
    }
  ];
  let step = 0;
  $$result.css.add(css$1);
  return `<div class="${"carousel-wrap svelte-1woju3x"}"><div class="${"faded faded-left svelte-1woju3x"}">${(0, import_index_358b9723.v)(ArrowSlide, "ArrowSlide").$$render($$result, { direction: "left" }, {}, {})}</div>
    <div class="${"faded faded-right svelte-1woju3x"}">${(0, import_index_358b9723.v)(ArrowSlide, "ArrowSlide").$$render($$result, { direction: "right" }, {}, {})}</div>
    <ul id="${"carousel"}" style="${"transform: translate(" + (0, import_index_358b9723.e)(step) + "rem)"}" class="${"svelte-1woju3x"}">${(0, import_index_358b9723.b)(carouselSlides, (slide) => {
    return `<li class="${"carousel--item"}"><img${(0, import_index_358b9723.d)("src", slide.link, 0)}${(0, import_index_358b9723.d)("alt", slide.title, 0)}>
                <div class="${"carousel--item-title svelte-1woju3x"}"><a${(0, import_index_358b9723.d)("href", slide.page, 0)} class="${"svelte-1woju3x"}">${(0, import_index_358b9723.e)(slide.title)}</a></div>
            </li>`;
  })}</ul>
</div>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "span.text-modifier.svelte-wq1lkh.svelte-wq1lkh{font-weight:600}.section-wrap.svelte-wq1lkh.svelte-wq1lkh{display:flex;gap:1rem}@media only screen and (max-width: 1080px){.section-wrap.svelte-wq1lkh.svelte-wq1lkh{flex-direction:column}}.section-wrap.svelte-wq1lkh .content.svelte-wq1lkh{display:flex;flex-direction:column;gap:3rem}.section-wrap.svelte-wq1lkh aside.svelte-wq1lkh{width:100%;height:fit-content;background-color:wheat;padding-block:0.5rem;display:flex;flex-direction:column;align-items:center}.section-wrap.svelte-wq1lkh aside h3.svelte-wq1lkh{font-size:xx-large;padding-block:0.8rem}.section-wrap.svelte-wq1lkh aside ul li.svelte-wq1lkh{padding:0.8rem}.section-wrap.svelte-wq1lkh aside ul li a.svelte-wq1lkh{font-style:italic;font-weight:300;background-image:linear-gradient(90deg, rgb(139, 138, 138), rgb(65, 65, 65));background-size:0% 2px;background-repeat:no-repeat;background-position:left bottom;transition:background-size 300ms ease-in-out}.section-wrap.svelte-wq1lkh aside ul li a.svelte-wq1lkh:hover{background-size:100% 2px}.section-wrap.svelte-wq1lkh .btn.svelte-wq1lkh{margin-block:2rem;padding-block:0.5rem;padding-inline:1rem;border-left:4px solid black;border-right:3px solid black;border-top:1px solid black;border-bottom:1px solid black;border-radius:40% 60%;width:fit-content;transition:border-radius 200ms ease}.section-wrap.svelte-wq1lkh .btn a.svelte-wq1lkh{font-style:italic;background-image:linear-gradient(90deg, rgb(115, 167, 245), rgb(0, 86, 214));background-size:0% 1px;background-repeat:no-repeat;background-position:left bottom;transition:color 150ms ease, background-size 200ms ease-in-out}.section-wrap.svelte-wq1lkh .btn.svelte-wq1lkh:hover{border-left:4px solid rgba(0, 86, 214, 0.87);border-right:3px solid rgba(0, 86, 214, 0.87);border-top:1px solid rgba(0, 86, 214, 0.87);border-bottom:1px solid rgba(0, 86, 214, 0.87);border-radius:35% 65%}.section-wrap.svelte-wq1lkh .btn:hover a.svelte-wq1lkh{color:rgba(0, 86, 214, 0.87);background-size:100% 1px}",
  map: null
};
const Routes = (0, import_index_358b9723.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>\u0428\u0430\u043D\u0441 \u0437\u0430 \u0434\u0435\u0446\u0430\u0442\u0430 \u043D\u0430 \u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F - \u0424\u043E\u043D\u0434\u0430\u0446\u0438\u044F \u0437\u0430 \u043C\u043B\u0430\u0434\u0438 \u0442\u0430\u043B\u0430\u043D\u0442\u0438</title>`, ""}`, ""}

${(0, import_index_358b9723.v)(import_Main_06dbf238.M, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `${(0, import_index_358b9723.v)(Carousel, "Carousel").$$render($$result, {}, {}, {})}
    ${(0, import_index_358b9723.v)(import_Section_ea26a762.S, "Section").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"section-wrap svelte-wq1lkh"}"><div class="${"content svelte-wq1lkh"}"><div><h1>\u0424\u043E\u043D\u0434\u0430\u0446\u0438\u044F \u0437\u0430 \u043C\u043B\u0430\u0434\u0438 \u0442\u0430\u043B\u0430\u043D\u0442\u0438</h1>
                    <p>\u0424\u043E\u043D\u0434\u0430\u0446\u0438\u044F &quot;\u0428\u0430\u043D\u0441 \u0437\u0430 \u0434\u0435\u0446\u0430\u0442\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430\u0442\u0430 \u043D\u0430 \u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F\u201D \u0441\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u044F \u0431\u043B\u0430\u0433\u043E\u0440\u043E\u0434\u043D\u0430\u0442\u0430
                        \u0437\u0430\u0434\u0430\u0447\u0430 \u0434\u0430 \u043F\u043E\u0434\u043F\u043E\u043C\u0430\u0433\u0430 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435\u0442\u043E \u043D\u0430 \u0442\u0430\u043B\u0430\u043D\u0442\u043B\u0438\u0432\u0438 \u0434\u0435\u0446\u0430 \u0438 \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u0438 \u043C\u043B\u0430\u0434\u0438 \u0445\u043E\u0440\u0430 \u043D\u0430
                        \u0432\u044A\u0437\u0440\u0430\u0441\u0442 \u043E\u0442 6 \u0434\u043E 20 \u0433\u043E\u0434\u0438\u043D\u0438, \u043E\u0441\u0438\u0433\u0443\u0440\u044F\u0432\u0430\u0439\u043A\u0438 \u0438\u043C \u0448\u0430\u043D\u0441, \u0437\u0430\u0432\u0438\u0441\u0435\u0449 \u0438\u0437\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u043D\u043E \u043E\u0442
                        \u0442\u0435\u0445\u043D\u0438\u0442\u0435 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0438 \u0443\u043C\u0435\u043D\u0438\u044F, \u0442\u0440\u0443\u0434\u043E\u043B\u044E\u0431\u0438\u0435 \u0438 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u0441\u0442\u0432\u043E, \u0438 \u0434\u0430 \u0441\u043F\u043E\u043D\u0441\u043E\u0440\u0438\u0440\u0430 \u0442\u044F\u0445\u043D\u043E\u0442\u043E
                        \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435, \u043F\u0440\u043E\u0444\u0435\u0441\u0438\u043E\u043D\u0430\u043B\u043D\u043E \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0438 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435.
                    </p>
                    <p><span class="${"text-modifier svelte-wq1lkh"}">\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u0442\u0430 \u043D\u0438 \u0446\u0435\u043B</span> \u0435 \u0434\u0430 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0440\u0430\u043C\u0435 \u0432 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u0438
                        \u0438\u043D\u0438\u0446\u0438\u0430\u0442\u0438\u0432\u0438 \u0437\u0430 \u0438\u0437\u043F\u0440\u0435\u0432\u0430\u0440\u0432\u0430\u0449\u043E \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0432\u044A\u0432 \u0432\u0441\u0438\u0447\u043A\u0438 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043D\u0430 \u043D\u0430\u0443\u043A\u0430\u0442\u0430,
                        \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438\u0442\u0435 \u0438 \u0438\u0437\u043A\u0443\u0441\u0442\u0432\u043E\u0442\u043E, \u0441\u0432\u044A\u0440\u0437\u0430\u043D\u0438 \u0441 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0438\u0442\u0435 \u0438 \u0434\u0430\u0440\u0431\u0438\u0442\u0435 \u043D\u0430 \u043D\u0430\u0448\u0438\u0442\u0435 \u0434\u0435\u0446\u0430
                    </p></div>
                <div><h1>\u0426\u0435\u043D\u0442\u044A\u0440 \u0437\u0430 \u043C\u043B\u0430\u0434\u0438 \u0442\u0430\u043B\u0430\u043D\u0442\u0438</h1>
                    <p>\u041E\u0441\u043D\u043E\u0432\u0435\u043D \u043F\u0440\u043E\u0435\u043A\u0442 \u0437\u0430 \u0424\u043E\u043D\u0434\u0430\u0446\u0438\u044F \u201E\u0428\u0430\u043D\u0441 \u0437\u0430 \u0434\u0435\u0446\u0430\u0442\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430\u0442\u0430 \u043D\u0430 \u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F\u201D \u0437\u0430
                        2011\u0433. \u0435 \u0441\u044A\u0437\u0434\u0430\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u0426\u0435\u043D\u0442\u044A\u0440 \u0437\u0430 \u043C\u043B\u0430\u0434\u0438 \u0442\u0430\u043B\u0430\u043D\u0442\u0438 \u0432 \u0433\u0440 \u0411\u0443\u0440\u0433\u0430\u0441. \u041E\u0442 \u0441\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438
                        2011 \u0432 \u043D\u0435\u0433\u043E \u0441\u0435 \u043E\u0441\u044A\u0449\u0435\u0441\u0442\u0432\u044F\u0432\u0430\u0442 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0438 \u043D\u0430 \u0438\u0437\u044F\u0432\u0435\u043D\u0438 \u0443\u0447\u0438\u0442\u0435\u043B\u0438 \u0441 \u0438\u0437\u044F\u0432\u0435\u043D\u0438 \u0438
                        \u0442\u0430\u043B\u0430\u043D\u0442\u043B\u0438\u0432\u0438 \u0443\u0447\u0435\u043D\u0438\u0446\u0438 \u0437\u0430 \u043D\u0430\u0434\u0433\u0440\u0430\u0436\u0434\u0430\u043D\u0435 \u043D\u0430\u0434 \u043E\u0431\u0449\u043E\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u043D\u0430\u0442\u0430 \u0438\u043C \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430.
                    </p>

                    <div class="${"btn svelte-wq1lkh"}"><a href="${"/centre"}" class="${"svelte-wq1lkh"}">\u041E\u0449\u0435 \u0437\u0430 \u0426\u0435\u043D\u0442\u044A\u0440\u0430</a></div></div></div>
            <aside class="${"svelte-wq1lkh"}"><h3 class="${"svelte-wq1lkh"}">\u0410\u043A\u0442\u0443\u0430\u043B\u043D\u043E</h3>
                <ul><li class="${"svelte-wq1lkh"}"><a href="${"/"}" class="${"svelte-wq1lkh"}">\u0414\u0435\u0446\u0430 \u0432 \u043F\u0440\u0435\u0434\u0443\u0447\u0438\u043B\u0438\u0449\u043D\u0430 \u0432\u044A\u0437\u0440\u0430\u0441\u0442 \u0449\u0435 \u043F\u0440\u0435\u043C\u0435\u0440\u044F\u0442 \u0441\u0438\u043B\u0438 \u0432 IV \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0442\u0443\u0440\u043D\u0438\u0440
                        </a></li>
                    <li class="${"svelte-wq1lkh"}"><a href="${"/"}" class="${"svelte-wq1lkh"}">\u0414\u0435\u0431\u044E\u0442: \u0440\u043E\u0434\u0438 \u0441\u0435 \u043D\u043E\u0432\u0430 \u043C\u043B\u0430\u0434\u0435\u0436\u043A\u0430 \u043C\u0435\u0434\u0438\u044F \u2013 &quot;\u0417\u0430 \u0445\u0432\u044A\u0440\u0447\u0430\u0449\u0438\u0442\u0435 \u0445\u043E\u0440\u0430&quot; </a></li>
                    <li class="${"svelte-wq1lkh"}"><a href="${"/"}" class="${"svelte-wq1lkh"}">VII \u041E\u0431\u043B\u0430\u0441\u0442\u043D\u0430 \u043E\u043B\u0438\u043C\u043F\u0438\u0430\u0434\u0430 \u043F\u043E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0430 \u0437\u0430 \u0411\u0443\u0440\u0433\u0430\u0441 \u0438 \u0440\u0435\u0433\u0438\u043E\u043D\u0430 \u0449\u0435 \u0441\u0435 \u043F\u0440\u043E\u0432\u0435\u0434\u0435
                            \u043E\u043D\u043B\u0430\u0439\u043D
                        </a></li>
                    <li class="${"svelte-wq1lkh"}"><a href="${"/"}" class="${"svelte-wq1lkh"}">\u0421\u0442\u0438\u043C\u0443\u043B\u0438\u0440\u0430\u0442 \u0434\u0430\u0440\u043E\u0432\u0438\u0442\u0438 \u043C\u043B\u0430\u0434\u0435\u0436\u0438 \u0441 \u043F\u0430\u0440\u0438\u0447\u043D\u0438 \u0441\u0442\u0438\u043F\u0435\u043D\u0434\u0438\u0438 </a></li>
                    <li class="${"svelte-wq1lkh"}"><a href="${"/"}" class="${"svelte-wq1lkh"}">\u041E\u0431\u0443\u0447\u0438\u0442\u0435\u043B\u043D\u0438 \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u0438 \u043D\u0430 \u0442\u0435\u043C\u0430 &quot;\u041F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0442\u044F\u0432\u0430\u043D\u0435 \u0437\u0430\u043C\u044A\u0440\u0441\u044F\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043C\u043E\u0440\u0435\u0442\u043E \u0441
                            \u043F\u043B\u0430\u0441\u0442\u043C\u0430\u0441\u0430&quot;
                        </a></li></ul>

                <div class="${"btn svelte-wq1lkh"}"><a href="${"/news"}" class="${"svelte-wq1lkh"}">\u041F\u043E\u043A\u0430\u0436\u0438 \u0432\u0441\u0438\u0447\u043A\u0438</a></div></aside></div>`;
        }
      })}`;
    }
  })}`;
});
