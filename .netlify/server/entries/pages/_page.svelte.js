import { c as create_ssr_component, k as compute_rest_props, l as createEventDispatcher, o as spread, p as escape_attribute_value, q as escape_object, j as add_attribute, v as validate_component, f as each, e as escape } from "../../chunks/index.js";
import { M as Main, S as Section } from "../../chunks/Section.js";
import { M as MarkedData } from "../../chunks/MarkedData.js";
import { S as Sidebar } from "../../chunks/Sidebar.js";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function forOwn(object, iteratee) {
  if (object) {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key !== "__proto__") {
        if (iteratee(object[key], key) === false) {
          break;
        }
      }
    }
  }
  return object;
}
function isObject(subject) {
  return subject !== null && typeof subject === "object";
}
function isEqualDeep(subject1, subject2) {
  if (Array.isArray(subject1) && Array.isArray(subject2)) {
    return subject1.length === subject2.length && !subject1.some((elm, index) => !isEqualDeep(elm, subject2[index]));
  }
  if (isObject(subject1) && isObject(subject2)) {
    const keys1 = Object.keys(subject1);
    const keys2 = Object.keys(subject2);
    return keys1.length === keys2.length && !keys1.some((key) => {
      return !Object.prototype.hasOwnProperty.call(subject2, key) || !isEqualDeep(subject1[key], subject2[key]);
    });
  }
  return subject1 === subject2;
}
function merge(object, source) {
  const merged = object;
  forOwn(source, (value, key) => {
    if (Array.isArray(value)) {
      merged[key] = value.slice();
    } else if (isObject(value)) {
      merged[key] = merge(isObject(merged[key]) ? merged[key] : {}, value);
    } else {
      merged[key] = value;
    }
  });
  return merged;
}
function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}
function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}
function typeOf(type, subject) {
  return typeof subject === type;
}
apply(typeOf, "function");
apply(typeOf, "string");
apply(typeOf, "undefined");
const Splide_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "options", "splide", "extensions", "transition", "hasTrack", "go", "sync"]);
  let { class: className = void 0 } = $$props;
  let { options = {} } = $$props;
  let { splide = void 0 } = $$props;
  let { extensions = void 0 } = $$props;
  let { transition = void 0 } = $$props;
  let { hasTrack = true } = $$props;
  createEventDispatcher();
  let root;
  let prevOptions = merge({}, options);
  function go(control) {
    splide == null ? void 0 : splide.go(control);
  }
  function sync(target) {
    splide == null ? void 0 : splide.sync(target);
  }
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.splide === void 0 && $$bindings.splide && splide !== void 0)
    $$bindings.splide(splide);
  if ($$props.extensions === void 0 && $$bindings.extensions && extensions !== void 0)
    $$bindings.extensions(extensions);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.hasTrack === void 0 && $$bindings.hasTrack && hasTrack !== void 0)
    $$bindings.hasTrack(hasTrack);
  if ($$props.go === void 0 && $$bindings.go && go !== void 0)
    $$bindings.go(go);
  if ($$props.sync === void 0 && $$bindings.sync && sync !== void 0)
    $$bindings.sync(sync);
  {
    if (splide && !isEqualDeep(prevOptions, options)) {
      splide.options = options;
      prevOptions = merge({}, prevOptions);
    }
  }
  return `

<div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", root, 0)}>${hasTrack ? `${validate_component(SplideTrack, "SplideTrack").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${slots.default ? slots.default({}) : ``}`}</div>`;
});
const SplideTrack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__track", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}><ul class="${"splide__list"}">${slots.default ? slots.default({}) : ``}</ul></div>`;
});
const SplideSlide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<li${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__slide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</li>`;
});
const splide_min = "";
const ArrowSlide_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".left.svelte-ir8zwo{transform:rotate(180deg)}svg.svelte-ir8zwo{height:3rem;fill:white;transition:fill 200ms ease}svg.svelte-ir8zwo:hover{fill:white;cursor:pointer}",
  map: null
};
const ArrowSlide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { direction = "right" } = $$props;
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  $$result.css.add(css$1);
  return `<svg version="${"1.1"}" x="${"0px"}" y="${"0px"}" viewBox="${"0 0 330.002 330.002"}" style="${"enable-background:new 0 0 330.002 330.002;"}" xml:space="${"preserve"}" class="${[
    "svelte-ir8zwo",
    (direction === "left" ? "left" : "") + " " + (direction === "right" ? "right" : "")
  ].join(" ").trim()}"><path d="${"M233.252,155.997L120.752,6.001c-4.972-6.628-14.372-7.97-21-3c-6.628,4.971-7.971,14.373-3,21\n                l105.75,140.997L96.752,306.001c-4.971,6.627-3.627,16.03,3,21c2.698,2.024,5.856,3.001,8.988,3.001\n                c4.561,0,9.065-2.072,12.012-6.001l112.5-150.004C237.252,168.664,237.252,161.33,233.252,155.997z"}"></path></svg>`;
});
const Carousel_svelte_svelte_type_style_lang = "";
const css = {
  code: ".splide{background-color:black}.slide-title.svelte-167hcap.svelte-167hcap{height:fit-content;display:flex;justify-content:center;margin-block:0.5rem}.slide-title.svelte-167hcap a.svelte-167hcap{margin-inline:auto;font-size:large;color:white}.splide__arrow.svelte-167hcap.svelte-167hcap{width:3rem;height:3rem;background-color:transparent;opacity:1}.splide__arrow--prev.svelte-167hcap.svelte-167hcap{left:4rem}@media only screen and (max-width: 860px){.splide__arrow--prev.svelte-167hcap.svelte-167hcap{left:0.6rem}}@media only screen and (max-width: 430px){.splide__arrow--prev.svelte-167hcap.svelte-167hcap{left:-0.6rem}}.splide__arrow--next.svelte-167hcap.svelte-167hcap{right:4rem}@media only screen and (max-width: 860px){.splide__arrow--next.svelte-167hcap.svelte-167hcap{right:0.6rem}}@media only screen and (max-width: 430px){.splide__arrow--next.svelte-167hcap.svelte-167hcap{right:-0.6rem}}.background.svelte-167hcap.svelte-167hcap{height:100%;width:15%;position:absolute;top:0}@media only screen and (max-width: 1020px){.background.svelte-167hcap.svelte-167hcap{background:none !important}}.background--left.svelte-167hcap.svelte-167hcap{left:0;background:linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(255, 255, 255, 0) 100%)}.background--right.svelte-167hcap.svelte-167hcap{right:0;background:linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0) 100%)}@media only screen and (max-width: 1000px){img.svelte-167hcap.svelte-167hcap,a.svelte-167hcap.svelte-167hcap{width:40rem}}@media only screen and (max-width: 640px){img.svelte-167hcap.svelte-167hcap,a.svelte-167hcap.svelte-167hcap{width:28rem}}@media only screen and (max-width: 450px){img.svelte-167hcap.svelte-167hcap,a.svelte-167hcap.svelte-167hcap{width:20rem}}",
  map: null
};
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slides = {
    name: "",
    url: "",
    caption: "",
    alternativeText: ""
  } } = $$props;
  const options = {
    rewind: true,
    gap: "1rem",
    autoplay: true,
    arrows: true,
    autoHeight: true,
    autoWidth: true,
    type: "loop",
    perPage: 3,
    perMove: 1,
    pagination: false,
    focus: "center"
  };
  if ($$props.slides === void 0 && $$bindings.slides && slides !== void 0)
    $$bindings.slides(slides);
  $$result.css.add(css);
  return `${validate_component(Splide_1, "Splide").$$render($$result, { options, hasTrack: false }, {}, {
    default: () => {
      return `<div><div style="${"position: relative"}">${validate_component(SplideTrack, "SplideTrack").$$render($$result, {}, {}, {
        default: () => {
          return `${each(slides, (slide) => {
            return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
              default: () => {
                return `<img class="${"image-wh svelte-167hcap"}"${add_attribute("src", slide.attributes.url, 0)}${add_attribute("alt", slide.attributes.alternativeText, 0)}>
                        <div class="${"slide-title svelte-167hcap"}"><a${add_attribute("href", slide.attributes.name, 0)} class="${"svelte-167hcap"}">${escape(slide.attributes.caption)}</a></div>
                    `;
              }
            })}`;
          })}`;
        }
      })}

            <div class="${"splide__arrows"}"><button class="${"splide__arrow splide__arrow--prev svelte-167hcap"}">${validate_component(ArrowSlide, "ArrowSlide").$$render($$result, { direction: "left" }, {}, {})}</button>
                <button class="${"splide__arrow splide__arrow--next svelte-167hcap"}">${validate_component(ArrowSlide, "ArrowSlide").$$render($$result, { direction: "right" }, {}, {})}</button>
                <div class="${"background background--left svelte-167hcap"}"></div>
                <div class="${"background background--right svelte-167hcap"}"></div></div></div>

        <div class="${"splide__progress"}"><div class="${"splide__progress__bar"}"></div></div></div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1kzxdcj_START -->${$$result.title = `<title>\u0428\u0430\u043D\u0441 \u0437\u0430 \u0434\u0435\u0446\u0430\u0442\u0430 \u043D\u0430 \u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F - \u0424\u043E\u043D\u0434\u0430\u0446\u0438\u044F \u0437\u0430 \u043C\u043B\u0430\u0434\u0438 \u0442\u0430\u043B\u0430\u043D\u0442\u0438</title>`, ""}<!-- HEAD_svelte-1kzxdcj_END -->`, ""}

${validate_component(Carousel, "Carousel").$$render($$result, { slides: data.homepage.carousel.data }, {}, {})}

${validate_component(Main, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Section, "Section").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(MarkedData, "MarkedData").$$render(
            $$result,
            {
              markedData: {
                content: data.homepage.content,
                media: {
                  data: data.homepage.fullscreen_media.data
                },
                button: { text: "\u041E\u0449\u0435 \u0437\u0430 \u0426\u0435\u043D\u0442\u044A\u0440\u0430", link: "/centre" }
              }
            },
            {},
            {}
          )}`;
        }
      })}

    ${validate_component(Sidebar, "Sidebar").$$render(
        $$result,
        {
          title: "\u0410\u043A\u0442\u0443\u0430\u043B\u043D\u043E",
          button: { text: "\u0412\u0438\u0436 \u0432\u0441\u0438\u0447\u043A\u0438", link: "/news" }
        },
        {},
        {
          default: () => {
            return `${each(data.postsPreview, (post) => {
              return `<li><a href="${"/news/" + escape(post.attributes.slug, true)}"><!-- HTML_TAG_START -->${post.attributes.title}<!-- HTML_TAG_END --></a>
            </li>`;
            })}`;
          }
        }
      )}`;
    }
  })}`;
});
export {
  Page as default
};
