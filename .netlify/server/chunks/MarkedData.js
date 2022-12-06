import { c as create_ssr_component, e as escape, f as each, j as add_attribute, v as validate_component } from "./index.js";
import { marked } from "marked";
import { B as Button } from "./Button.js";
const MarkedData_svelte_svelte_type_style_lang = "";
const css = {
  code: '.wrapper.svelte-1cnjjcu.svelte-1cnjjcu{display:flex;flex-direction:column;width:100%}.images.svelte-1cnjjcu.svelte-1cnjjcu{display:flex;flex-wrap:wrap;justify-content:center}.content.svelte-1cnjjcu div.images.svelte-1cnjjcu{min-height:30vh}.content.svelte-1cnjjcu img.fullscreen-image.svelte-1cnjjcu{max-width:100%;max-height:unset;margin-block:2rem;margin-inline:1rem;float:none}.wrapper .content img{display:block;float:right;max-width:24vw;max-height:35vh;width:fit-content;height:fit-content;margin-block:1rem;margin-inline-start:1rem;border-radius:10px}@media only screen and (max-width: 768px){.wrapper .content img{max-width:38vw;max-height:40vh}}.wrapper .content a{font-weight:500;font-style:italic;color:rgb(41, 76, 174);background-image:linear-gradient(90deg, rgba(38, 58, 130, 0.771), rgb(57, 70, 152));background-size:0% 2px;background-repeat:no-repeat;background-position:left bottom;transition:background-size 200ms ease-in-out}.wrapper .content a:hover{background-size:100% 2px}.wrapper .content ul li{background-image:url("/icons/check-mark-24x24.svg");background-repeat:no-repeat;padding-inline-start:32px;max-width:100%}.wrapper .content ul{display:inline}.wrapper .content table{margin-block:3rem}',
  map: null
};
const MarkedData = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { markedData = {
    title: "",
    content: "",
    date: "",
    media: { data: false },
    button: { text: "", link: "" }
  } } = $$props;
  if ($$props.markedData === void 0 && $$bindings.markedData && markedData !== void 0)
    $$bindings.markedData(markedData);
  $$result.css.add(css);
  return `<div class="${"wrapper svelte-1cnjjcu"}">${markedData.title ? `<h1>${escape(markedData.title)}</h1>` : ``}
    ${markedData.date ? `<span>${escape(markedData.date.toLocaleString("bg-BG"))}</span>` : ``}

    <div class="${"content svelte-1cnjjcu"}"><!-- HTML_TAG_START -->${marked(markedData.content)}<!-- HTML_TAG_END -->
        ${markedData.media.data ? `${each(markedData.media.data, (image) => {
    return `<div class="${"images svelte-1cnjjcu"}"><img class="${"fullscreen-image svelte-1cnjjcu"}"${add_attribute("src", image.attributes.url, 0)}${add_attribute("alt", image.attributes.alternativeText, 0)}>
                </div>`;
  })}` : ``}</div>

    ${markedData.button ? `${validate_component(Button, "Button").$$render($$result, { params: markedData.button }, {}, {})}` : ``}
</div>`;
});
export {
  MarkedData as M
};
