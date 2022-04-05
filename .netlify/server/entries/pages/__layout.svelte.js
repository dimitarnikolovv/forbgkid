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
var import_index_358b9723 = require("../../chunks/index-358b9723.js");
const getStores = () => {
  const stores = (0, import_index_358b9723.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var Arrow_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "svg.svelte-1svwrx5{transition:fill 200ms ease-in-out}",
  map: null
};
const Arrow = (0, import_index_358b9723.c)(($$result, $$props, $$bindings, slots) => {
  let direction;
  let clr;
  let { active = false } = $$props;
  let { directional = false } = $$props;
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.directional === void 0 && $$bindings.directional && directional !== void 0)
    $$bindings.directional(directional);
  $$result.css.add(css$4);
  direction = directional && active ? "left" : "right";
  clr = active ? "white" : "#b2b2b2";
  return `<svg style="${"fill: " + (0, import_index_358b9723.e)(clr)}" width="${"30"}" height="${"20"}" xmlns="${"http://www.w3.org/2000/svg"}" fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" class="${"svelte-1svwrx5"}">${direction === "right" ? `<path d="${"M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"}"></path>` : ``}${direction === "left" ? `<path d="${"M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"}"></path>` : ``}</svg>`;
});
var Nav_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "a.active.svelte-w18eaj.svelte-w18eaj.svelte-w18eaj{color:white}ul.svelte-w18eaj.svelte-w18eaj.svelte-w18eaj{display:flex;gap:1rem;justify-content:center}ul.svelte-w18eaj li.svelte-w18eaj.svelte-w18eaj{font-weight:500;font-style:normal;display:flex;align-items:center;justify-content:center;gap:0.5rem;height:2rem;color:#aaa}ul.svelte-w18eaj li div.svelte-w18eaj.svelte-w18eaj{transition:transform 200ms ease-in-out}ul.svelte-w18eaj a.svelte-w18eaj.svelte-w18eaj{text-transform:uppercase;font-weight:600;font-size:small;padding-inline-start:0.4rem;transition:color 200ms ease-in-out}@media only screen and (min-width: 1470px){ul.svelte-w18eaj a.svelte-w18eaj.svelte-w18eaj{font-size:medium}}ul.svelte-w18eaj a.svelte-w18eaj:hover+div.svelte-w18eaj{transform:translateX(5px)}ul.svelte-w18eaj div.arrow.svelte-w18eaj svg{transform:scale(0.9)}@media only screen and (min-width: 1470px){ul.svelte-w18eaj div.arrow.svelte-w18eaj svg{transform:scale(1)}}@media only screen and (max-width: 1219px){ul.main-nav.svelte-w18eaj.svelte-w18eaj.svelte-w18eaj{display:none}}ul.mobile-nav.svelte-w18eaj.svelte-w18eaj.svelte-w18eaj{flex-direction:column;gap:0;width:100vw}ul.mobile-nav.svelte-w18eaj li.svelte-w18eaj.svelte-w18eaj{width:inherit;height:10vh}label.nav-button.svelte-w18eaj.svelte-w18eaj.svelte-w18eaj{display:flex;flex-direction:column;width:40px;cursor:pointer}label.nav-button.svelte-w18eaj span.svelte-w18eaj.svelte-w18eaj{background:#fff;border-radius:10px;height:3px;margin:5px 0;transition:0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6)}label.nav-button.svelte-w18eaj span.svelte-w18eaj.svelte-w18eaj:nth-of-type(1){width:50%}label.nav-button.svelte-w18eaj span.svelte-w18eaj.svelte-w18eaj:nth-of-type(2){width:100%}label.nav-button.svelte-w18eaj span.svelte-w18eaj.svelte-w18eaj:nth-of-type(3){width:75%}label.nav-button.svelte-w18eaj input[type=checkbox].svelte-w18eaj.svelte-w18eaj{display:none}label.nav-button.svelte-w18eaj input[type=checkbox].svelte-w18eaj:checked~span.svelte-w18eaj:nth-of-type(1){transform-origin:bottom;transform:rotatez(45deg) translate(8px, 0px)}label.nav-button.svelte-w18eaj input[type=checkbox].svelte-w18eaj:checked~span.svelte-w18eaj:nth-of-type(2){transform-origin:top;transform:rotatez(-45deg)}label.nav-button.svelte-w18eaj input[type=checkbox].svelte-w18eaj:checked~span.svelte-w18eaj:nth-of-type(3){transform-origin:bottom;width:50%;transform:translate(19px, -7px) rotatez(45deg)}label.nav-button.svelte-w18eaj div.nav-container.svelte-w18eaj.svelte-w18eaj{z-index:3;position:absolute;display:flex;justify-content:center;align-items:center;top:6.9rem;left:-5.5%;width:100vw;height:80vh;background-color:rgba(0, 0, 0, 0.95);transition:transform 200ms ease-in-out}label.nav-button.svelte-w18eaj div.nav-container.onScroll.svelte-w18eaj.svelte-w18eaj{transform:translateY(-3.9rem)}@media only screen and (min-width: 1220px){label.nav-button.svelte-w18eaj.svelte-w18eaj.svelte-w18eaj{display:none}}",
  map: null
};
const Nav = (0, import_index_358b9723.c)(($$result, $$props, $$bindings, slots) => {
  let isActive;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_358b9723.a)(page, (value) => $page = value);
  let { onScroll = false } = $$props;
  if ($$props.onScroll === void 0 && $$bindings.onScroll && onScroll !== void 0)
    $$bindings.onScroll(onScroll);
  $$result.css.add(css$3);
  isActive = function(url) {
    return url === $page.url.pathname ? true : false;
  };
  $$unsubscribe_page();
  return `<nav><label class="${"nav-button svelte-w18eaj"}" for="${"check"}"><input type="${"checkbox"}" id="${"check"}" class="${"svelte-w18eaj"}">
        <span class="${"svelte-w18eaj"}"></span>
        <span class="${"svelte-w18eaj"}"></span>
        <span class="${"svelte-w18eaj"}"></span>

        ${``}</label>
    <ul class="${"main-nav " + (0, import_index_358b9723.e)(onScroll ? "onScroll" : "") + " svelte-w18eaj"}"><li class="${"svelte-w18eaj"}"><a href="${"/"}" class="${["svelte-w18eaj", isActive("/") ? "active" : ""].join(" ").trim()}">\u041D\u0430\u0447\u0430\u043B\u043E</a>
            <div class="${"arrow svelte-w18eaj"}">${(0, import_index_358b9723.v)(Arrow, "Arrow").$$render($$result, { active: isActive("/"), directional: true }, {}, {})}</div></li>
        <li class="${"svelte-w18eaj"}"><a href="${"/about"}" class="${["svelte-w18eaj", isActive("/about") ? "active" : ""].join(" ").trim()}">\u041A\u0430\u043A \u043F\u043E\u043C\u0430\u0433\u0430\u043C\u0435</a>
            <div class="${"arrow svelte-w18eaj"}">${(0, import_index_358b9723.v)(Arrow, "Arrow").$$render($$result, {
    active: isActive("/about"),
    directional: true
  }, {}, {})}</div></li>
        <li class="${"svelte-w18eaj"}"><a href="${"/projects"}" class="${["svelte-w18eaj", isActive("/projects") ? "active" : ""].join(" ").trim()}">\u041F\u0440\u043E\u0435\u043A\u0442\u0438</a>
            <div class="${"arrow svelte-w18eaj"}">${(0, import_index_358b9723.v)(Arrow, "Arrow").$$render($$result, {
    active: isActive("/projects"),
    directional: true
  }, {}, {})}</div></li>
        <li class="${"svelte-w18eaj"}"><a href="${"/centre"}" class="${["svelte-w18eaj", isActive("/centre") ? "active" : ""].join(" ").trim()}">\u0426\u0435\u043D\u0442\u044A\u0440 \u0437\u0430 \u043C\u043B\u0430\u0434\u0438 \u0442\u0430\u043B\u0430\u043D\u0442\u0438</a>
            <div class="${"arrow svelte-w18eaj"}">${(0, import_index_358b9723.v)(Arrow, "Arrow").$$render($$result, {
    active: isActive("/centre"),
    directional: true
  }, {}, {})}</div></li>
        <li class="${"svelte-w18eaj"}"><a href="${"/kids"}" class="${["svelte-w18eaj", isActive("/kids") ? "active" : ""].join(" ").trim()}">\u041D\u0430\u0448\u0438\u0442\u0435 \u0434\u0435\u0446\u0430</a>
            <div class="${"arrow svelte-w18eaj"}">${(0, import_index_358b9723.v)(Arrow, "Arrow").$$render($$result, {
    active: isActive("/kids"),
    directional: true
  }, {}, {})}</div></li>
        <li class="${"svelte-w18eaj"}"><a href="${"/donate"}" class="${["svelte-w18eaj", isActive("/donate") ? "active" : ""].join(" ").trim()}">\u0414\u0430\u0440\u0435\u043D\u0438\u0435</a>
            <div class="${"arrow svelte-w18eaj"}">${(0, import_index_358b9723.v)(Arrow, "Arrow").$$render($$result, {
    active: isActive("/donate"),
    directional: true
  }, {}, {})}</div></li>
        <li class="${"svelte-w18eaj"}"><a href="${"/contact"}" class="${["svelte-w18eaj", isActive("/contact") ? "active" : ""].join(" ").trim()}">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438</a>
            <div class="${"arrow svelte-w18eaj"}">${(0, import_index_358b9723.v)(Arrow, "Arrow").$$render($$result, {
    active: isActive("/contact"),
    directional: true
  }, {}, {})}</div></li></ul>
</nav>`;
});
var Logo_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "a.svelte-e45fin.svelte-e45fin{height:6rem}a.small.svelte-e45fin.svelte-e45fin{height:3rem}a.svelte-e45fin img.svelte-e45fin{height:100%}@media only screen and (max-width: 350px){a.svelte-e45fin.svelte-e45fin{height:4rem}}",
  map: null
};
const Logo = (0, import_index_358b9723.c)(($$result, $$props, $$bindings, slots) => {
  let { onScroll = false } = $$props;
  if ($$props.onScroll === void 0 && $$bindings.onScroll && onScroll !== void 0)
    $$bindings.onScroll(onScroll);
  $$result.css.add(css$2);
  return `<a href="${"https://www.kids.infrablu.xyz"}" target="${"blank"}" class="${["svelte-e45fin", onScroll ? "small" : ""].join(" ").trim()}"><img src="${"/images/forbgkids-logo-only.png"}" alt="${"Tree with leaves of kid's hands"}" class="${"svelte-e45fin"}">
</a>`;
});
var Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-1sne14n.svelte-1sne14n{width:100vw;padding-block:1rem;background-color:transparent}header.svelte-1sne14n div.container.svelte-1sne14n{position:relative;display:flex;justify-content:space-between;align-items:center;height:6rem;max-width:90vw;margin-inline:auto}header.fixed.svelte-1sne14n.svelte-1sne14n{z-index:10;position:fixed;background-color:rgba(0, 0, 0, 0.85);animation:svelte-1sne14n-headerSlideDown 200ms ease-in-out}header.fixed.svelte-1sne14n .container.svelte-1sne14n{height:2rem}@keyframes svelte-1sne14n-headerSlideDown{0%{opacity:0;transform:translateY(-100%)}50%{opacity:1}100%{transform:translateY(0)}}",
  map: null
};
const Header = (0, import_index_358b9723.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header id="${"app-head"}" class="${["svelte-1sne14n", ""].join(" ").trim()}"><div class="${"container svelte-1sne14n"}">${(0, import_index_358b9723.v)(Logo, "Logo").$$render($$result, { onScroll: false }, {}, {})}
        ${(0, import_index_358b9723.v)(Nav, "Nav").$$render($$result, { onScroll: false }, {}, {})}</div>
</header>`;
});
var Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-sl4ing.svelte-sl4ing{width:100vw;min-height:5rem;background-color:white}footer.svelte-sl4ing .container.svelte-sl4ing{margin-inline:auto;display:flex;align-items:center;justify-content:center;flex-direction:column;width:80%;font-size:0.8rem}@media only screen and (max-width: 768px){footer.svelte-sl4ing .container.svelte-sl4ing{width:90vw;font-size:0.7rem}}footer.svelte-sl4ing span.text-modifier.svelte-sl4ing{font-weight:600;font-style:italic;color:#18144c}",
  map: null
};
const Footer = (0, import_index_358b9723.c)(($$result, $$props, $$bindings, slots) => {
  const year = new Date().getFullYear();
  $$result.css.add(css);
  return `<footer class="${"svelte-sl4ing"}"><div class="${"container svelte-sl4ing"}"><p>\u0424\u043E\u043D\u0434\u0430\u0446\u0438\u044F &quot;\u0428\u0430\u043D\u0441 \u0437\u0430 \u0434\u0435\u0446\u0430\u0442\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430\u0442\u0430 \u043D\u0430 \u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F&quot; \u0435 \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u0441\u0442\u0432\u0435\u043D\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0437\u0430
            \u043E\u0441\u044A\u0449\u0435\u0441\u0442\u0432\u044F\u0432\u0430\u043D\u0435 \u043D\u0430 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043E\u043F\u043E\u043B\u0435\u0437\u043D\u0430 \u0434\u0435\u0439\u043D\u043E\u0441\u0442. \u0424\u043E\u043D\u0434\u0430\u0446\u0438\u044F\u0442\u0430 \u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u0430 \u043D\u0430 18.02.2011 \u0433.,
            \u0432\u043F\u0438\u0441\u0430\u043D\u0430 \u0432 \u0422\u0420 \u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u044A\u0440\u0430 \u043D\u0430 \u042E\u041B\u041D\u0426 \u043A\u044A\u043C \u0410\u0433\u0435\u043D\u0446\u0438\u044F\u0442\u0430 \u043F\u043E \u0432\u043F\u0438\u0441\u0432\u0430\u043D\u0438\u044F\u0442\u0430 \u0441 \u0415\u0418\u041A 176040614.
        </p>
        <p>Designed and Made By <a href="${"https://www.infrablu.xyz"}" target="${"blank"}"><span class="${"text-modifier svelte-sl4ing"}">InfraBlu</span></a>
            ${(0, import_index_358b9723.e)(year)} \xA9
        </p></div>
</footer>`;
});
var app = "";
const _layout = (0, import_index_358b9723.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_358b9723.v)(Header, "Header").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}

${(0, import_index_358b9723.v)(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
