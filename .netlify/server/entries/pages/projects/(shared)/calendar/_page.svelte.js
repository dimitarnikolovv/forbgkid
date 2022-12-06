import { c as create_ssr_component, e as escape, f as each, v as validate_component } from "../../../../../chunks/index.js";
import { marked } from "marked";
const EventList_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".event-list.svelte-yg20nb.svelte-yg20nb{display:flex;flex-direction:column;gap:1.2rem;position:absolute;overflow-y:auto;z-index:2;width:calc(100% - 2rem);height:fit-content;max-height:calc(100% - 1rem);padding:1rem;background-color:white;box-shadow:0 15px 40px rgba(0, 0, 0, 0.12);border-radius:10px}.event-list.svelte-yg20nb.svelte-yg20nb::-webkit-scrollbar{width:1px}.event-list.svelte-yg20nb h5.svelte-yg20nb{font-size:1.4rem}.event-list.svelte-yg20nb p.svelte-yg20nb{font-size:0.8em}.event-list.svelte-yg20nb div.content-wrapper.svelte-yg20nb{text-align:left}.event-list.svelte-yg20nb header.svelte-yg20nb{display:flex;justify-content:space-between;gap:1.5rem;padding-block-end:0.5rem;width:100%;border-bottom:1px solid rgba(0, 0, 0, 0.12)}.event-list.svelte-yg20nb header span.svelte-yg20nb{font-size:1.2rem;cursor:pointer;border-radius:50%;width:1.3em;height:1.3em;border:none;background:none;text-align:center;line-height:1.3em}.event-list.svelte-yg20nb header span.svelte-yg20nb:hover{background-color:#f2f2f2}",
  map: null
};
const EventList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { events } = $$props;
  let { date = { day: 0, month: "" } } = $$props;
  let { onClose } = $$props;
  if ($$props.events === void 0 && $$bindings.events && events !== void 0)
    $$bindings.events(events);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0)
    $$bindings.onClose(onClose);
  $$result.css.add(css$1);
  return `<div class="${"event-list svelte-yg20nb"}"><header class="${"svelte-yg20nb"}"><h5 class="${"svelte-yg20nb"}">\u0421\u044A\u0431\u0438\u0442\u0438\u044F \u0437\u0430 ${escape(date.day)}. ${escape(date.month)}</h5>
        <span class="${"material-symbols-rounded svelte-yg20nb"}">close</span></header>

    ${each(events, (event) => {
    return `<div class="${"event-entry"}"><h5 class="${"svelte-yg20nb"}">${escape(event.title)}</h5>
            <span class="${"svelte-yg20nb"}">${escape(new Date(event.startsAt).toLocaleTimeString("bg-BG", { hour: "2-digit", minute: "2-digit" }))} - ${escape(new Date(event.endsAt).toLocaleTimeString("bg-BG", { hour: "2-digit", minute: "2-digit" }))}</span>
            <p class="${"svelte-yg20nb"}">${escape(event.description)}</p>
            <div class="${"content-wrapper svelte-yg20nb"}"><!-- HTML_TAG_START -->${marked(event.content)}<!-- HTML_TAG_END --></div>
        </div>`;
  })}
</div>`;
});
const Calendar_svelte_svelte_type_style_lang = "";
const css = {
  code: '.wrapper.svelte-chkza3.svelte-chkza3{width:100%;height:fit-content;background:#fff;border-radius:10px;box-shadow:0 15px 40px rgba(0, 0, 0, 0.12)}.wrapper.svelte-chkza3 header.svelte-chkza3{display:flex;align-items:center;padding:25px 30px 10px;justify-content:space-between}.wrapper.svelte-chkza3 header .current-date.svelte-chkza3{font-size:1.45rem;font-weight:500}.wrapper.svelte-chkza3 header .icons.svelte-chkza3{display:flex}.wrapper.svelte-chkza3 header .icons span.svelte-chkza3{height:38px;width:38px;margin:0 1px;cursor:pointer;color:#878787;text-align:center;line-height:38px;font-size:1.9rem;user-select:none;border-radius:50%}.wrapper.svelte-chkza3 header .icons span.svelte-chkza3:last-child{margin-right:-10px}.wrapper.svelte-chkza3 header .icons span.svelte-chkza3:hover{background:#f2f2f2}.calendar.svelte-chkza3.svelte-chkza3{padding:20px}.calendar.svelte-chkza3 ul.svelte-chkza3{display:flex;flex-wrap:wrap;list-style:none;text-align:center}.calendar.svelte-chkza3 ul li.svelte-chkza3{color:#333;width:14.2857142857%;font-size:1.07rem}.calendar.svelte-chkza3 ul.weeks.svelte-chkza3{margin-block-end:30px}.calendar.svelte-chkza3 ul.weeks li.svelte-chkza3{font-weight:600;cursor:default}.calendar.svelte-chkza3 .days.svelte-chkza3{position:relative;margin-bottom:20px}.calendar.svelte-chkza3 .days li.svelte-chkza3{z-index:1;cursor:pointer;position:relative;height:5rem;padding-block:0.3rem}.calendar.svelte-chkza3 .days li .events.svelte-chkza3{display:flex;flex-direction:column;flex:1;gap:0.3em;margin-block-start:0.3em;overflow-y:auto;max-width:100%;max-height:70%}.calendar.svelte-chkza3 .days li .events.svelte-chkza3::-webkit-scrollbar{width:1px}.calendar.svelte-chkza3 .days li .event-preview.svelte-chkza3{border-radius:10px;margin-inline:auto;width:fit-content;max-width:100%;min-height:1.6em;height:1.6em;overflow:hidden}.calendar.svelte-chkza3 .days li .event-preview p.svelte-chkza3{background-color:wheat;padding:0.2em;border-radius:10px;margin:0;font-size:0.6rem}.calendar.svelte-chkza3 .days li.inactive.svelte-chkza3{color:#aaa}.calendar.svelte-chkza3 .days li.today.svelte-chkza3{color:#fff}.calendar.svelte-chkza3 .days li.today.svelte-chkza3::before{background:#9b59b6}.calendar.svelte-chkza3 .days li.svelte-chkza3::before{position:absolute;z-index:-1;content:"";left:50%;top:18%;height:1.6em;width:1.6em;border-radius:50%;transform:translate(-50%, -50%)}.calendar.svelte-chkza3 .days li.svelte-chkza3:not(.today):hover::before{background:#f2f2f2}.calendar.svelte-chkza3 .days li .indicator.svelte-chkza3{position:absolute;top:30%;left:calc(50% - 0.2em);background-color:rgb(255, 52, 75);width:0.4em;height:0.4em;border-radius:50%}',
  map: null
};
function findEvents(year, month, dates = [], events = []) {
  events.forEach((event) => {
    const eventDate = new Date(event.attributes.startsAt);
    if (eventDate.getFullYear() === year && eventDate.getMonth() === month) {
      dates.forEach((date) => {
        if (date.day === eventDate.getDate()) {
          date.eventStatus.hasEvents = true;
          date.events.push(event.attributes);
        }
      });
    }
    if (eventDate.getFullYear() === year && eventDate.getMonth() === month - 1) {
      dates.forEach((date) => {
        if (date.isActive === false && date.position === "last" && date.day === eventDate.getDate()) {
          date.eventStatus.hasEvents = true;
          date.events.push(event.attributes);
        }
      });
    }
    if (eventDate.getFullYear() === year && eventDate.getMonth() === month + 1) {
      dates.forEach((date) => {
        if (date.isActive === false && date.position === "next" && date.day === eventDate.getDate()) {
          date.eventStatus.hasEvents = true;
          date.events.push(event.attributes);
        }
      });
    }
  });
}
const Calendar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { events } = $$props;
  let currentDate;
  let date = new Date(), dates = [
    {
      day: 0,
      isActive: true,
      isToday: false,
      eventStatus: { hasEvents: false, showEventList: false },
      events: [{}]
    }
  ], currYear = date.getFullYear(), currMonth = date.getMonth();
  const months = [
    "\u042F\u043D\u0443\u0430\u0440\u0438",
    "\u0424\u0435\u0432\u0440\u0443\u0430\u0440\u0438",
    "\u041C\u0430\u0440\u0442",
    "\u0410\u043F\u0440\u0438\u043B",
    "\u041C\u0430\u0439",
    "\u042E\u043D\u0438",
    "\u042E\u043B\u0438",
    "\u0410\u0432\u0433\u0443\u0441\u0442",
    "\u0421\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438",
    "\u041E\u043A\u0442\u043E\u043C\u0432\u0440\u0438",
    "\u041D\u043E\u0435\u043C\u0432\u0440\u0438",
    "\u0414\u0435\u043A\u0435\u043C\u0432\u0440\u0438"
  ];
  function renderCalendar() {
    let firstDayofMonth = new Date(currYear, currMonth, 0).getDay(), lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    dates = [];
    currentDate = `${months[currMonth]} ${currYear}`;
    for (let i = firstDayofMonth; i > 0; i--) {
      dates.push({
        day: lastDateofLastMonth - i + 1,
        isActive: false,
        position: "last",
        eventStatus: { hasEvents: false, showEventList: false },
        events: []
      });
    }
    for (let i = 1; i <= lastDateofMonth; i++) {
      let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear();
      dates.push({
        day: i,
        isActive: true,
        isToday,
        eventStatus: { hasEvents: false, showEventList: false },
        events: []
      });
    }
    if (lastDayofMonth > 0) {
      for (let i = lastDayofMonth; i <= 6; i++) {
        dates.push({
          day: i - lastDayofMonth + 1,
          isActive: false,
          position: "next",
          eventStatus: { hasEvents: false, showEventList: false },
          events: []
        });
      }
    }
    findEvents(currYear, currMonth, dates, events);
  }
  renderCalendar();
  if ($$props.events === void 0 && $$bindings.events && events !== void 0)
    $$bindings.events(events);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-15oxowy_START --><link rel="${"stylesheet"}" href="${"https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"}"><!-- HEAD_svelte-15oxowy_END -->`, ""}

<div class="${"wrapper svelte-chkza3"}"><header class="${"svelte-chkza3"}"><p class="${"current-date svelte-chkza3"}">${escape(currentDate)}</p>
        <div class="${"icons svelte-chkza3"}"><span id="${"prev"}" class="${"material-symbols-rounded svelte-chkza3"}">chevron_left</span>
            <span id="${"next"}" class="${"material-symbols-rounded svelte-chkza3"}">chevron_right</span></div></header>
    <div class="${"calendar svelte-chkza3"}"><ul class="${"weeks svelte-chkza3"}"><li class="${"svelte-chkza3"}">\u041F</li>
            <li class="${"svelte-chkza3"}">\u0412</li>
            <li class="${"svelte-chkza3"}">\u0421</li>
            <li class="${"svelte-chkza3"}">\u0427</li>
            <li class="${"svelte-chkza3"}">\u041F</li>
            <li class="${"svelte-chkza3"}">\u0421</li>
            <li class="${"svelte-chkza3"}">\u041D</li></ul>
        <ul class="${"days svelte-chkza3"}">${each(dates, (date2) => {
    return `<li class="${[
      "svelte-chkza3",
      (!date2.isActive ? "inactive" : "") + " " + ((date2 == null ? void 0 : date2.isToday) ? "today" : "")
    ].join(" ").trim()}"><span class="${"svelte-chkza3"}">${escape(date2.day)}</span>
                    ${date2.eventStatus.hasEvents === true ? `<div class="${"indicator svelte-chkza3"}"></div>

                        <div class="${"events svelte-chkza3"}">${each(date2.events, (event) => {
      return `<div class="${"event-preview svelte-chkza3"}"><p class="${"svelte-chkza3"}">${escape(event.title)}</p>
                                </div>`;
    })}
                        </div>` : ``}</li>
                ${date2.eventStatus.showEventList ? `${validate_component(EventList, "EventList").$$render(
      $$result,
      {
        events: date2.events,
        date: { day: date2.day, month: months[currMonth] },
        onClose: () => {
          date2.eventStatus.showEventList = false;
        }
      },
      {},
      {}
    )}` : ``}`;
  })}</ul></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1t6xfvc_START -->${$$result.title = `<title>\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440</title>`, ""}<!-- HEAD_svelte-1t6xfvc_END -->`, ""}

${validate_component(Calendar, "Calendar").$$render($$result, { events: data.events }, {}, {})}`;
});
export {
  Page as default
};
