import { c as create_ssr_component, e as escape, b as subscribe, v as validate_component } from "../../chunks/index.js";
import { w as writable } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
import { marked } from "marked";
const scrollY = writable(0);
const Arrow_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "svg.svelte-1svwrx5{transition:fill 200ms ease-in-out}",
  map: null
};
const Arrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let direction;
  let clr;
  let { active = false } = $$props;
  let { directional = false } = $$props;
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.directional === void 0 && $$bindings.directional && directional !== void 0)
    $$bindings.directional(directional);
  $$result.css.add(css$5);
  direction = directional && active ? "left" : "right";
  clr = active ? "white" : "#b2b2b2";
  return `<svg style="${"fill: " + escape(clr, true)}" width="${"30"}" height="${"20"}" xmlns="${"http://www.w3.org/2000/svg"}" fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" class="${"svelte-1svwrx5"}">${direction === "right" ? `<path d="${"M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"}"></path>` : ``}${direction === "left" ? `<path d="${"M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"}"></path>` : ``}</svg>`;
});
const Nav_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "a.active.svelte-5av8u7.svelte-5av8u7.svelte-5av8u7{color:white}ul.svelte-5av8u7.svelte-5av8u7.svelte-5av8u7{display:flex;gap:1rem;justify-content:center}ul.svelte-5av8u7 li.svelte-5av8u7.svelte-5av8u7{font-weight:500;font-style:normal;display:flex;align-items:center;justify-content:center;gap:0.5rem;height:2rem;color:#aaa}ul.svelte-5av8u7 li div.svelte-5av8u7.svelte-5av8u7{transition:transform 200ms ease-in-out}ul.svelte-5av8u7 a.svelte-5av8u7.svelte-5av8u7{text-transform:uppercase;font-weight:600;font-size:small;padding-inline-start:0.4rem;transition:color 200ms ease-in-out}@media only screen and (min-width: 1470px){ul.svelte-5av8u7 a.svelte-5av8u7.svelte-5av8u7{font-size:medium}}ul.svelte-5av8u7 a.svelte-5av8u7:hover+div.svelte-5av8u7{transform:translateX(5px)}ul.svelte-5av8u7 div.arrow.svelte-5av8u7 svg{transform:scale(0.9)}@media only screen and (min-width: 1470px){ul.svelte-5av8u7 div.arrow.svelte-5av8u7 svg{transform:scale(1)}}@media only screen and (max-width: 1219px){ul.main-nav.svelte-5av8u7.svelte-5av8u7.svelte-5av8u7{display:none}}ul.mobile-nav.svelte-5av8u7.svelte-5av8u7.svelte-5av8u7{flex-direction:column;gap:0;width:100vw}ul.mobile-nav.svelte-5av8u7 li.svelte-5av8u7.svelte-5av8u7{width:inherit;height:10vh}label.nav-button.svelte-5av8u7.svelte-5av8u7.svelte-5av8u7{display:flex;flex-direction:column;width:40px;cursor:pointer}label.nav-button.svelte-5av8u7 span.svelte-5av8u7.svelte-5av8u7{background:#fff;border-radius:10px;height:3px;margin:5px 0;transition:0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6)}label.nav-button.svelte-5av8u7 span.svelte-5av8u7.svelte-5av8u7:nth-of-type(1){width:50%}label.nav-button.svelte-5av8u7 span.svelte-5av8u7.svelte-5av8u7:nth-of-type(2){width:100%}label.nav-button.svelte-5av8u7 span.svelte-5av8u7.svelte-5av8u7:nth-of-type(3){width:75%}label.nav-button.svelte-5av8u7 input[type=checkbox].svelte-5av8u7.svelte-5av8u7{display:none}label.nav-button.svelte-5av8u7 input[type=checkbox].svelte-5av8u7:checked~span.svelte-5av8u7:nth-of-type(1){transform-origin:bottom;transform:rotatez(45deg) translate(8px, 0px)}label.nav-button.svelte-5av8u7 input[type=checkbox].svelte-5av8u7:checked~span.svelte-5av8u7:nth-of-type(2){transform-origin:top;transform:rotatez(-45deg)}label.nav-button.svelte-5av8u7 input[type=checkbox].svelte-5av8u7:checked~span.svelte-5av8u7:nth-of-type(3){transform-origin:bottom;width:50%;transform:translate(19px, -7px) rotatez(45deg)}label.nav-button.svelte-5av8u7 div.nav-container.svelte-5av8u7.svelte-5av8u7{z-index:10;position:absolute;display:flex;justify-content:center;align-items:center;top:100%;left:0;width:100vw;height:80vh;background-color:rgba(0, 0, 0, 0.85);transition:transform 200ms ease-in-out}@media only screen and (min-width: 1220px){label.nav-button.svelte-5av8u7.svelte-5av8u7.svelte-5av8u7{display:none}}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isActive;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$4);
  isActive = function(url) {
    let pattern = new RegExp(`\\B\\${url}`);
    let matched = $page.url.pathname.match(pattern);
    return url == matched;
  };
  $$unsubscribe_page();
  return `<nav><label class="${"nav-button svelte-5av8u7"}" for="${"check"}"><input type="${"checkbox"}" id="${"check"}" ${""} class="${"svelte-5av8u7"}">
        <span class="${"svelte-5av8u7"}"></span>
        <span class="${"svelte-5av8u7"}"></span>
        <span class="${"svelte-5av8u7"}"></span>

        ${``}</label>
    <ul class="${"main-nav svelte-5av8u7"}"><li class="${"svelte-5av8u7"}"><a href="${"/"}" class="${["svelte-5av8u7", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}">\u041D\u0430\u0447\u0430\u043B\u043E</a>
            <div class="${"arrow svelte-5av8u7"}">${validate_component(Arrow, "Arrow").$$render(
    $$result,
    {
      active: $page.url.pathname === "/",
      directional: true
    },
    {},
    {}
  )}</div></li>
        <li class="${"svelte-5av8u7"}"><a href="${"/about"}" class="${["svelte-5av8u7", isActive("/about") ? "active" : ""].join(" ").trim()}">\u041A\u0430\u043A \u043F\u043E\u043C\u0430\u0433\u0430\u043C\u0435</a>
            <div class="${"arrow svelte-5av8u7"}">${validate_component(Arrow, "Arrow").$$render(
    $$result,
    {
      active: isActive("/about"),
      directional: true
    },
    {},
    {}
  )}</div></li>
        <li class="${"svelte-5av8u7"}"><a href="${"/projects"}" class="${["svelte-5av8u7", isActive("/projects") ? "active" : ""].join(" ").trim()}">\u041F\u0440\u043E\u0435\u043A\u0442\u0438</a>
            <div class="${"arrow svelte-5av8u7"}">${validate_component(Arrow, "Arrow").$$render(
    $$result,
    {
      active: isActive("/projects"),
      directional: true
    },
    {},
    {}
  )}</div></li>
        <li class="${"svelte-5av8u7"}"><a href="${"/centre"}" class="${["svelte-5av8u7", isActive("/centre") ? "active" : ""].join(" ").trim()}">\u0417\u0430 \u0446\u0435\u043D\u0442\u044A\u0440\u0430</a>
            <div class="${"arrow svelte-5av8u7"}">${validate_component(Arrow, "Arrow").$$render(
    $$result,
    {
      active: isActive("/centre"),
      directional: true
    },
    {},
    {}
  )}</div></li>
        <li class="${"svelte-5av8u7"}"><a href="${"/donate"}" class="${["svelte-5av8u7", isActive("/donate") ? "active" : ""].join(" ").trim()}">\u0414\u0430\u0440\u0435\u043D\u0438\u0435</a>
            <div class="${"arrow svelte-5av8u7"}">${validate_component(Arrow, "Arrow").$$render(
    $$result,
    {
      active: isActive("/donate"),
      directional: true
    },
    {},
    {}
  )}</div></li>
        <li class="${"svelte-5av8u7"}"><a href="${"/contact"}" class="${["svelte-5av8u7", isActive("/contact") ? "active" : ""].join(" ").trim()}">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438</a>
            <div class="${"arrow svelte-5av8u7"}">${validate_component(Arrow, "Arrow").$$render(
    $$result,
    {
      active: isActive("/contact"),
      directional: true
    },
    {},
    {}
  )}</div></li></ul>
</nav>`;
});
const Logo_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "a.svelte-wj2o9c.svelte-wj2o9c{height:100%}a.svelte-wj2o9c img.svelte-wj2o9c{height:100%}@media only screen and (max-width: 350px){a.svelte-wj2o9c.svelte-wj2o9c{height:4rem}}",
  map: null
};
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<a class="${"small svelte-wj2o9c"}" href="${"/"}"><img src="${"/images/forbgkids-logo-only.png"}" alt="${"Tree with leaves of kid's hands"}" class="${"svelte-wj2o9c"}">
</a>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "header.svelte-110b5sj.svelte-110b5sj{position:fixed;top:0;z-index:10;width:100vw;min-height:3rem;padding-block:1rem;background:rgba(0, 0, 0, 0.7);backdrop-filter:saturate(50%) blur(4px)}header.svelte-110b5sj div.container.svelte-110b5sj{z-index:12;display:flex;justify-content:space-between;align-items:center;height:6rem;max-width:90%;margin-inline:auto}@media only screen and (max-width: 768px){header.svelte-110b5sj div.container.svelte-110b5sj{height:3rem}}header.fixed.svelte-110b5sj .container.svelte-110b5sj{height:3rem}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let onScroll;
  let $scrollY, $$unsubscribe_scrollY;
  $$unsubscribe_scrollY = subscribe(scrollY, (value) => $scrollY = value);
  $$result.css.add(css$2);
  onScroll = $scrollY > 100;
  $$unsubscribe_scrollY();
  return `<header id="${"app-head"}" class="${["svelte-110b5sj", onScroll ? "fixed" : ""].join(" ").trim()}"><div class="${"container svelte-110b5sj"}">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}
        ${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}</div>
</header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-sl4ing.svelte-sl4ing{width:100vw;min-height:5rem;background-color:white}footer.svelte-sl4ing .container.svelte-sl4ing{margin-inline:auto;display:flex;align-items:center;justify-content:center;flex-direction:column;width:80%;font-size:0.8rem}@media only screen and (max-width: 768px){footer.svelte-sl4ing .container.svelte-sl4ing{width:90vw;font-size:0.7rem}}footer.svelte-sl4ing span.text-modifier.svelte-sl4ing{font-weight:600;font-style:italic;color:#18144c}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content = "" } = $$props;
  const year = new Date().getFullYear();
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  $$result.css.add(css$1);
  return `<footer class="${"svelte-sl4ing"}"><div class="${"container svelte-sl4ing"}"><p><!-- HTML_TAG_START -->${marked(content)}<!-- HTML_TAG_END --></p>
        <p>Designed and Made as non-profit project By <a href="${"https://www.infrablu.xyz"}" target="${"blank"}"><span class="${"text-modifier svelte-sl4ing"}">InfraBlu</span></a>
            ${escape(year)} \xA9
        </p></div>
</footer>`;
});
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.wrap.svelte-br1r3y{position:relative;margin-top:8rem}@media only screen and (max-width: 768px){div.wrap.svelte-br1r3y{margin-top:5rem}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_scrollY;
  $$unsubscribe_scrollY = subscribe(scrollY, (value) => value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_scrollY();
  return `

${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<div class="${"wrap svelte-br1r3y"}">${slots.default ? slots.default({}) : ``}

    ${validate_component(Footer, "Footer").$$render($$result, { content: data.homepage.footer.content }, {}, {})}
</div>`;
});
export {
  Layout as default
};
