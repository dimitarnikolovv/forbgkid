import { t as get_store_value, u as onDestroy, c as create_ssr_component, w as add_styles, e as escape, v as validate_component, m as missing_component, o as spread, q as escape_object, x as merge_ssr_styles, j as add_attribute, b as subscribe, f as each } from "../../../chunks/index.js";
import { d as derived, w as writable } from "../../../chunks/index2.js";
import { M as Main, S as Section } from "../../../chunks/Section.js";
function writableDerived(origins, derive, reflect, initial) {
  var childDerivedSetter, originValues, blockNextDerive = false;
  var reflectOldValues = "withOld" in reflect;
  var wrappedDerive = (got, set) => {
    childDerivedSetter = set;
    if (reflectOldValues) {
      originValues = got;
    }
    if (!blockNextDerive) {
      let returned = derive(got, set);
      if (derive.length < 2) {
        set(returned);
      } else {
        return returned;
      }
    }
    blockNextDerive = false;
  };
  var childDerived = derived(origins, wrappedDerive, initial);
  var singleOrigin = !Array.isArray(origins);
  var sendUpstream = (setWith) => {
    if (singleOrigin) {
      blockNextDerive = true;
      origins.set(setWith);
    } else {
      setWith.forEach((value, i) => {
        blockNextDerive = true;
        origins[i].set(value);
      });
    }
    blockNextDerive = false;
  };
  if (reflectOldValues) {
    reflect = reflect.withOld;
  }
  var reflectIsAsync = reflect.length >= (reflectOldValues ? 3 : 2);
  var cleanup = null;
  function doReflect(reflecting) {
    if (cleanup) {
      cleanup();
      cleanup = null;
    }
    if (reflectOldValues) {
      var returned = reflect(reflecting, originValues, sendUpstream);
    } else {
      var returned = reflect(reflecting, sendUpstream);
    }
    if (reflectIsAsync) {
      if (typeof returned == "function") {
        cleanup = returned;
      }
    } else {
      sendUpstream(returned);
    }
  }
  var tryingSet = false;
  function update2(fn) {
    var isUpdated, mutatedBySubscriptions, oldValue, newValue;
    if (tryingSet) {
      newValue = fn(get_store_value(childDerived));
      childDerivedSetter(newValue);
      return;
    }
    var unsubscribe = childDerived.subscribe((value) => {
      if (!tryingSet) {
        oldValue = value;
      } else if (!isUpdated) {
        isUpdated = true;
      } else {
        mutatedBySubscriptions = true;
      }
    });
    newValue = fn(oldValue);
    tryingSet = true;
    childDerivedSetter(newValue);
    unsubscribe();
    tryingSet = false;
    if (mutatedBySubscriptions) {
      newValue = get_store_value(childDerived);
    }
    if (isUpdated) {
      doReflect(newValue);
    }
  }
  return {
    subscribe: childDerived.subscribe,
    set(value) {
      update2(() => value);
    },
    update: update2
  };
}
const TOAST_LIMIT = 20;
const toasts = writable([]);
const pausedAt = writable(null);
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    remove(toastId);
  }, 1e3);
  toastTimeouts.set(toastId, timeout);
};
const clearFromRemoveQueue = (toastId) => {
  const timeout = toastTimeouts.get(toastId);
  if (timeout) {
    clearTimeout(timeout);
  }
};
function update(toast2) {
  if (toast2.id) {
    clearFromRemoveQueue(toast2.id);
  }
  toasts.update(($toasts) => $toasts.map((t) => t.id === toast2.id ? { ...t, ...toast2 } : t));
}
function add(toast2) {
  toasts.update(($toasts) => [toast2, ...$toasts].slice(0, TOAST_LIMIT));
}
function upsert(toast2) {
  if (get_store_value(toasts).find((t) => t.id === toast2.id)) {
    update(toast2);
  } else {
    add(toast2);
  }
}
function dismiss(toastId) {
  toasts.update(($toasts) => {
    if (toastId) {
      addToRemoveQueue(toastId);
    } else {
      $toasts.forEach((toast2) => {
        addToRemoveQueue(toast2.id);
      });
    }
    return $toasts.map((t) => t.id === toastId || toastId === void 0 ? { ...t, visible: false } : t);
  });
}
function remove(toastId) {
  toasts.update(($toasts) => {
    if (toastId === void 0) {
      return [];
    }
    return $toasts.filter((t) => t.id !== toastId);
  });
}
function startPause(time) {
  pausedAt.set(time);
}
function endPause(time) {
  let diff;
  pausedAt.update(($pausedAt) => {
    diff = time - ($pausedAt || 0);
    return null;
  });
  toasts.update(($toasts) => $toasts.map((t) => ({
    ...t,
    pauseDuration: t.pauseDuration + diff
  })));
}
const defaultTimeouts = {
  blank: 4e3,
  error: 4e3,
  success: 2e3,
  loading: Infinity,
  custom: 4e3
};
function useToasterStore(toastOptions = {}) {
  const mergedToasts = writableDerived(toasts, ($toasts) => $toasts.map((t) => {
    var _a, _b;
    return {
      ...toastOptions,
      ...toastOptions[t.type],
      ...t,
      duration: t.duration || ((_a = toastOptions[t.type]) == null ? void 0 : _a.duration) || (toastOptions == null ? void 0 : toastOptions.duration) || defaultTimeouts[t.type],
      style: [toastOptions.style, (_b = toastOptions[t.type]) == null ? void 0 : _b.style, t.style].join(";")
    };
  }), ($toasts) => $toasts);
  return {
    toasts: mergedToasts,
    pausedAt
  };
}
const isFunction = (valOrFunction) => typeof valOrFunction === "function";
const resolveValue = (valOrFunction, arg) => isFunction(valOrFunction) ? valOrFunction(arg) : valOrFunction;
const genId = (() => {
  let count = 0;
  return () => {
    count += 1;
    return count.toString();
  };
})();
const prefersReducedMotion = (() => {
  let shouldReduceMotion;
  return () => {
    if (shouldReduceMotion === void 0 && typeof window !== "undefined") {
      const mediaQuery = matchMedia("(prefers-reduced-motion: reduce)");
      shouldReduceMotion = !mediaQuery || mediaQuery.matches;
    }
    return shouldReduceMotion;
  };
})();
const createToast = (message, type = "blank", opts) => ({
  createdAt: Date.now(),
  visible: true,
  type,
  ariaProps: {
    role: "status",
    "aria-live": "polite"
  },
  message,
  pauseDuration: 0,
  ...opts,
  id: (opts == null ? void 0 : opts.id) || genId()
});
const createHandler = (type) => (message, options) => {
  const toast2 = createToast(message, type, options);
  upsert(toast2);
  return toast2.id;
};
const toast = (message, opts) => createHandler("blank")(message, opts);
toast.error = createHandler("error");
toast.success = createHandler("success");
toast.loading = createHandler("loading");
toast.custom = createHandler("custom");
toast.dismiss = (toastId) => {
  dismiss(toastId);
};
toast.remove = (toastId) => remove(toastId);
toast.promise = (promise, msgs, opts) => {
  const id = toast.loading(msgs.loading, { ...opts, ...opts == null ? void 0 : opts.loading });
  promise.then((p) => {
    toast.success(resolveValue(msgs.success, p), {
      id,
      ...opts,
      ...opts == null ? void 0 : opts.success
    });
    return p;
  }).catch((e) => {
    toast.error(resolveValue(msgs.error, e), {
      id,
      ...opts,
      ...opts == null ? void 0 : opts.error
    });
  });
  return promise;
};
const toast$1 = toast;
function calculateOffset(toast2, $toasts, opts) {
  const { reverseOrder, gutter = 8, defaultPosition } = opts || {};
  const relevantToasts = $toasts.filter((t) => (t.position || defaultPosition) === (toast2.position || defaultPosition) && t.height);
  const toastIndex = relevantToasts.findIndex((t) => t.id === toast2.id);
  const toastsBefore = relevantToasts.filter((toast3, i) => i < toastIndex && toast3.visible).length;
  const offset = relevantToasts.filter((t) => t.visible).slice(...reverseOrder ? [toastsBefore + 1] : [0, toastsBefore]).reduce((acc, t) => acc + (t.height || 0) + gutter, 0);
  return offset;
}
const handlers = {
  startPause() {
    startPause(Date.now());
  },
  endPause() {
    endPause(Date.now());
  },
  updateHeight: (toastId, height) => {
    update({ id: toastId, height });
  },
  calculateOffset
};
function useToaster(toastOptions) {
  const { toasts: toasts2, pausedAt: pausedAt2 } = useToasterStore(toastOptions);
  const timeouts = /* @__PURE__ */ new Map();
  let _pausedAt;
  const unsubscribes = [
    pausedAt2.subscribe(($pausedAt) => {
      if ($pausedAt) {
        for (const [, timeoutId] of timeouts) {
          clearTimeout(timeoutId);
        }
        timeouts.clear();
      }
      _pausedAt = $pausedAt;
    }),
    toasts2.subscribe(($toasts) => {
      if (_pausedAt) {
        return;
      }
      const now = Date.now();
      for (const t of $toasts) {
        if (timeouts.has(t.id)) {
          continue;
        }
        if (t.duration === Infinity) {
          continue;
        }
        const durationLeft = (t.duration || 0) + t.pauseDuration - (now - t.createdAt);
        if (durationLeft < 0) {
          if (t.visible) {
            toast$1.dismiss(t.id);
          }
          return null;
        }
        timeouts.set(t.id, setTimeout(() => toast$1.dismiss(t.id), durationLeft));
      }
    })
  ];
  onDestroy(() => {
    for (const unsubscribe of unsubscribes) {
      unsubscribe();
    }
  });
  return { toasts: toasts2, handlers };
}
const CheckmarkIcon_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: "div.svelte-1vib967{width:20px;opacity:0;height:20px;border-radius:10px;background:var(--primary, #61d345);position:relative;transform:rotate(45deg);-webkit-animation:svelte-1vib967-circleAnimation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;animation:svelte-1vib967-circleAnimation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;-webkit-animation-delay:100ms;animation-delay:100ms}div.svelte-1vib967::after{content:'';box-sizing:border-box;-webkit-animation:svelte-1vib967-checkmarkAnimation 0.2s ease-out forwards;animation:svelte-1vib967-checkmarkAnimation 0.2s ease-out forwards;opacity:0;-webkit-animation-delay:200ms;animation-delay:200ms;position:absolute;border-right:2px solid;border-bottom:2px solid;border-color:var(--secondary, #fff);bottom:6px;left:6px;height:10px;width:6px}@-webkit-keyframes svelte-1vib967-circleAnimation{from{transform:scale(0) rotate(45deg);opacity:0}to{transform:scale(1) rotate(45deg);opacity:1}}@keyframes svelte-1vib967-circleAnimation{from{transform:scale(0) rotate(45deg);opacity:0}to{transform:scale(1) rotate(45deg);opacity:1}}@-webkit-keyframes svelte-1vib967-checkmarkAnimation{0%{height:0;width:0;opacity:0}40%{height:0;width:6px;opacity:1}100%{opacity:1;height:10px}}@keyframes svelte-1vib967-checkmarkAnimation{0%{height:0;width:0;opacity:0}40%{height:0;width:6px;opacity:1}100%{opacity:1;height:10px}}",
  map: null
};
const CheckmarkIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primary = "#61d345" } = $$props;
  let { secondary = "#fff" } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  $$result.css.add(css$8);
  return `


<div class="${"svelte-1vib967"}"${add_styles({
    "--primary": primary,
    "--secondary": secondary
  })}></div>`;
});
const CheckmarkIcon$1 = CheckmarkIcon;
const ErrorIcon_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "div.svelte-14jc2sj{width:20px;opacity:0;height:20px;border-radius:10px;background:var(--primary, #ff4b4b);position:relative;transform:rotate(45deg);-webkit-animation:svelte-14jc2sj-circleAnimation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;animation:svelte-14jc2sj-circleAnimation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;-webkit-animation-delay:100ms;animation-delay:100ms}div.svelte-14jc2sj::after,div.svelte-14jc2sj::before{content:'';-webkit-animation:svelte-14jc2sj-firstLineAnimation 0.15s ease-out forwards;animation:svelte-14jc2sj-firstLineAnimation 0.15s ease-out forwards;-webkit-animation-delay:150ms;animation-delay:150ms;position:absolute;border-radius:3px;opacity:0;background:var(--secondary, #fff);bottom:9px;left:4px;height:2px;width:12px}div.svelte-14jc2sj:before{-webkit-animation:svelte-14jc2sj-secondLineAnimation 0.15s ease-out forwards;animation:svelte-14jc2sj-secondLineAnimation 0.15s ease-out forwards;-webkit-animation-delay:180ms;animation-delay:180ms;transform:rotate(90deg)}@-webkit-keyframes svelte-14jc2sj-circleAnimation{from{transform:scale(0) rotate(45deg);opacity:0}to{transform:scale(1) rotate(45deg);opacity:1}}@keyframes svelte-14jc2sj-circleAnimation{from{transform:scale(0) rotate(45deg);opacity:0}to{transform:scale(1) rotate(45deg);opacity:1}}@-webkit-keyframes svelte-14jc2sj-firstLineAnimation{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes svelte-14jc2sj-firstLineAnimation{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@-webkit-keyframes svelte-14jc2sj-secondLineAnimation{from{transform:scale(0) rotate(90deg);opacity:0}to{transform:scale(1) rotate(90deg);opacity:1}}@keyframes svelte-14jc2sj-secondLineAnimation{from{transform:scale(0) rotate(90deg);opacity:0}to{transform:scale(1) rotate(90deg);opacity:1}}",
  map: null
};
const ErrorIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primary = "#ff4b4b" } = $$props;
  let { secondary = "#fff" } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  $$result.css.add(css$7);
  return `


<div class="${"svelte-14jc2sj"}"${add_styles({
    "--primary": primary,
    "--secondary": secondary
  })}></div>`;
});
const ErrorIcon$1 = ErrorIcon;
const LoaderIcon_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "div.svelte-el8rh1{width:12px;height:12px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--secondary, #e0e0e0);border-right-color:var(--primary, #616161);-webkit-animation:svelte-el8rh1-rotate 1s linear infinite;animation:svelte-el8rh1-rotate 1s linear infinite}@-webkit-keyframes svelte-el8rh1-rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}@keyframes svelte-el8rh1-rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}",
  map: null
};
const LoaderIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primary = "#616161" } = $$props;
  let { secondary = "#e0e0e0" } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  $$result.css.add(css$6);
  return `


<div class="${"svelte-el8rh1"}"${add_styles({
    "--primary": primary,
    "--secondary": secondary
  })}></div>`;
});
const LoaderIcon$1 = LoaderIcon;
const ToastIcon_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".indicator.svelte-1yutmpl{position:relative;display:flex;justify-content:center;align-items:center;min-width:20px;min-height:20px}.status.svelte-1yutmpl{position:absolute}.animated.svelte-1yutmpl{position:relative;transform:scale(0.6);opacity:0.4;min-width:20px;-webkit-animation:svelte-1yutmpl-enter 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;animation:svelte-1yutmpl-enter 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards}@-webkit-keyframes svelte-1yutmpl-enter{from{transform:scale(0.6);opacity:0.4}to{transform:scale(1);opacity:1}}@keyframes svelte-1yutmpl-enter{from{transform:scale(0.6);opacity:0.4}to{transform:scale(1);opacity:1}}",
  map: null
};
const ToastIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let type;
  let icon;
  let iconTheme;
  let { toast: toast2 } = $$props;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0)
    $$bindings.toast(toast2);
  $$result.css.add(css$5);
  ({ type, icon, iconTheme } = toast2);
  return `${typeof icon === "string" ? `<div class="${"animated svelte-1yutmpl"}">${escape(icon)}</div>` : `${typeof icon !== "undefined" ? `${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : `${type !== "blank" ? `<div class="${"indicator svelte-1yutmpl"}">${validate_component(LoaderIcon$1, "LoaderIcon").$$render($$result, Object.assign(iconTheme), {}, {})}
		${type !== "loading" ? `<div class="${"status svelte-1yutmpl"}">${type === "error" ? `${validate_component(ErrorIcon$1, "ErrorIcon").$$render($$result, Object.assign(iconTheme), {}, {})}` : `${validate_component(CheckmarkIcon$1, "CheckmarkIcon").$$render($$result, Object.assign(iconTheme), {}, {})}`}</div>` : ``}</div>` : ``}`}`}`;
});
const ToastIcon$1 = ToastIcon;
const ToastMessage_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".message.svelte-o805t1{display:flex;justify-content:center;margin:4px 10px;color:inherit;flex:1 1 auto;white-space:pre-line}",
  map: null
};
const ToastMessage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toast: toast2 } = $$props;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0)
    $$bindings.toast(toast2);
  $$result.css.add(css$4);
  return `<div${spread([{ class: "message" }, escape_object(toast2.ariaProps)], { classes: "svelte-o805t1" })}>${typeof toast2.message === "string" ? `${escape(toast2.message)}` : `${validate_component(toast2.message || missing_component, "svelte:component").$$render($$result, { toast: toast2 }, {}, {})}`}
</div>`;
});
const ToastMessage$1 = ToastMessage;
const ToastBar_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "@-webkit-keyframes svelte-jj17sd-enterAnimation{0%{transform:translate3d(0, calc(var(--factor) * -200%), 0) scale(0.6);opacity:0.5}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes svelte-jj17sd-enterAnimation{0%{transform:translate3d(0, calc(var(--factor) * -200%), 0) scale(0.6);opacity:0.5}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@-webkit-keyframes svelte-jj17sd-exitAnimation{0%{transform:translate3d(0, 0, -1px) scale(1);opacity:1}100%{transform:translate3d(0, calc(var(--factor) * -150%), -1px) scale(0.6);opacity:0}}@keyframes svelte-jj17sd-exitAnimation{0%{transform:translate3d(0, 0, -1px) scale(1);opacity:1}100%{transform:translate3d(0, calc(var(--factor) * -150%), -1px) scale(0.6);opacity:0}}@-webkit-keyframes svelte-jj17sd-fadeInAnimation{0%{opacity:0}100%{opacity:1}}@keyframes svelte-jj17sd-fadeInAnimation{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes svelte-jj17sd-fadeOutAnimation{0%{opacity:1}100%{opacity:0}}@keyframes svelte-jj17sd-fadeOutAnimation{0%{opacity:1}100%{opacity:0}}.base.svelte-jj17sd{display:flex;align-items:center;background:#fff;color:#363636;line-height:1.3;will-change:transform;box-shadow:0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);max-width:350px;pointer-events:auto;padding:8px 10px;border-radius:8px}.transparent.svelte-jj17sd{opacity:0}.enter.svelte-jj17sd{-webkit-animation:svelte-jj17sd-enterAnimation 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards;animation:svelte-jj17sd-enterAnimation 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards}.exit.svelte-jj17sd{-webkit-animation:svelte-jj17sd-exitAnimation 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards;animation:svelte-jj17sd-exitAnimation 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards}.fadeIn.svelte-jj17sd{-webkit-animation:svelte-jj17sd-fadeInAnimation 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards;animation:svelte-jj17sd-fadeInAnimation 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards}.fadeOut.svelte-jj17sd{-webkit-animation:svelte-jj17sd-fadeOutAnimation 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards;animation:svelte-jj17sd-fadeOutAnimation 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards}",
  map: null
};
const ToastBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toast: toast2 } = $$props;
  let { position = void 0 } = $$props;
  let { style = "" } = $$props;
  let { Component = void 0 } = $$props;
  let factor;
  let animation;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0)
    $$bindings.toast(toast2);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.Component === void 0 && $$bindings.Component && Component !== void 0)
    $$bindings.Component(Component);
  $$result.css.add(css$3);
  {
    {
      const top = (toast2.position || position || "top-center").includes("top");
      factor = top ? 1 : -1;
      const [enter, exit] = prefersReducedMotion() ? ["fadeIn", "fadeOut"] : ["enter", "exit"];
      animation = toast2.visible ? enter : exit;
    }
  }
  return `<div class="${"base " + escape(toast2.height ? animation : "transparent", true) + " " + escape(toast2.className || "", true) + " svelte-jj17sd"}"${add_styles(merge_ssr_styles(escape(style, true) + "; " + escape(toast2.style, true), { "--factor": factor }))}>${Component ? `${validate_component(Component || missing_component, "svelte:component").$$render($$result, {}, {}, {
    message: () => {
      return `${validate_component(ToastMessage$1, "ToastMessage").$$render($$result, { toast: toast2, slot: "message" }, {}, {})}`;
    },
    icon: () => {
      return `${validate_component(ToastIcon$1, "ToastIcon").$$render($$result, { toast: toast2, slot: "icon" }, {}, {})}`;
    }
  })}` : `${slots.default ? slots.default({ ToastIcon: ToastIcon$1, ToastMessage: ToastMessage$1, toast: toast2 }) : `
			${validate_component(ToastIcon$1, "ToastIcon").$$render($$result, { toast: toast2 }, {}, {})}
			${validate_component(ToastMessage$1, "ToastMessage").$$render($$result, { toast: toast2 }, {}, {})}
		`}`}
</div>`;
});
const ToastBar$1 = ToastBar;
const ToastWrapper_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".wrapper.svelte-1pakgpd{left:0;right:0;display:flex;position:absolute;transform:translateY(calc(var(--offset, 16px) * var(--factor) * 1px))}.transition.svelte-1pakgpd{transition:all 230ms cubic-bezier(0.21, 1.02, 0.73, 1)}.active.svelte-1pakgpd{z-index:9999}.active.svelte-1pakgpd>*{pointer-events:auto}",
  map: null
};
const ToastWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c, _d, _e;
  let top;
  let bottom;
  let factor;
  let justifyContent;
  let { toast: toast2 } = $$props;
  let { setHeight } = $$props;
  let wrapperEl;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0)
    $$bindings.toast(toast2);
  if ($$props.setHeight === void 0 && $$bindings.setHeight && setHeight !== void 0)
    $$bindings.setHeight(setHeight);
  $$result.css.add(css$2);
  top = ((_a = toast2.position) == null ? void 0 : _a.includes("top")) ? 0 : null;
  bottom = ((_b = toast2.position) == null ? void 0 : _b.includes("bottom")) ? 0 : null;
  factor = ((_c = toast2.position) == null ? void 0 : _c.includes("top")) ? 1 : -1;
  justifyContent = ((_d = toast2.position) == null ? void 0 : _d.includes("center")) && "center" || ((_e = toast2.position) == null ? void 0 : _e.includes("right")) && "flex-end" || null;
  return `<div class="${[
    "wrapper svelte-1pakgpd",
    (toast2.visible ? "active" : "") + " " + (!prefersReducedMotion() ? "transition" : "")
  ].join(" ").trim()}"${add_styles({
    "--factor": factor,
    "--offset": toast2.offset,
    top,
    bottom,
    "justify-content": justifyContent
  })}${add_attribute("this", wrapperEl, 0)}>${toast2.type === "custom" ? `${validate_component(ToastMessage$1, "ToastMessage").$$render($$result, { toast: toast2 }, {}, {})}` : `${slots.default ? slots.default({ toast: toast2 }) : `
			${validate_component(ToastBar$1, "ToastBar").$$render($$result, { toast: toast2, position: toast2.position }, {}, {})}
		`}`}
</div>`;
});
const ToastWrapper$1 = ToastWrapper;
const Toaster_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".toaster.svelte-jyff3d{--default-offset:16px;position:fixed;z-index:9999;top:var(--default-offset);left:var(--default-offset);right:var(--default-offset);bottom:var(--default-offset);pointer-events:none}",
  map: null
};
const Toaster = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $toasts, $$unsubscribe_toasts;
  let { reverseOrder = false } = $$props;
  let { position = "top-center" } = $$props;
  let { toastOptions = void 0 } = $$props;
  let { gutter = 8 } = $$props;
  let { containerStyle = void 0 } = $$props;
  let { containerClassName = void 0 } = $$props;
  const { toasts: toasts2, handlers: handlers2 } = useToaster(toastOptions);
  $$unsubscribe_toasts = subscribe(toasts2, (value) => $toasts = value);
  let _toasts;
  if ($$props.reverseOrder === void 0 && $$bindings.reverseOrder && reverseOrder !== void 0)
    $$bindings.reverseOrder(reverseOrder);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.toastOptions === void 0 && $$bindings.toastOptions && toastOptions !== void 0)
    $$bindings.toastOptions(toastOptions);
  if ($$props.gutter === void 0 && $$bindings.gutter && gutter !== void 0)
    $$bindings.gutter(gutter);
  if ($$props.containerStyle === void 0 && $$bindings.containerStyle && containerStyle !== void 0)
    $$bindings.containerStyle(containerStyle);
  if ($$props.containerClassName === void 0 && $$bindings.containerClassName && containerClassName !== void 0)
    $$bindings.containerClassName(containerClassName);
  $$result.css.add(css$1);
  _toasts = $toasts.map((toast2) => ({
    ...toast2,
    position: toast2.position || position,
    offset: handlers2.calculateOffset(toast2, $toasts, {
      reverseOrder,
      gutter,
      defaultPosition: position
    })
  }));
  $$unsubscribe_toasts();
  return `<div class="${"toaster " + escape(containerClassName || "", true) + " svelte-jyff3d"}"${add_attribute("style", containerStyle, 0)}>${each(_toasts, (toast2) => {
    return `${validate_component(ToastWrapper$1, "ToastWrapper").$$render(
      $$result,
      {
        toast: toast2,
        setHeight: (height) => handlers2.updateHeight(toast2.id, height)
      },
      {},
      {}
    )}`;
  })}
</div>`;
});
const Toaster$1 = Toaster;
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'form fieldset label svg .ready{fill:rgb(28, 198, 28)}.sr-only.svelte-168j58u.svelte-168j58u.svelte-168j58u{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}form.svelte-168j58u.svelte-168j58u.svelte-168j58u{background-color:white;height:fit-content;min-width:60vw;max-width:100%;padding:2rem;display:flex;flex-direction:column;gap:2rem;box-shadow:0 15px 40px rgba(0, 0, 0, 0.12);border-radius:10px}.block-wrapper.svelte-168j58u.svelte-168j58u.svelte-168j58u{margin-block:0.8em}.group.svelte-168j58u.svelte-168j58u.svelte-168j58u{display:inline-flex;flex-direction:column;position:relative;margin-inline:0.3em}input.svelte-168j58u.svelte-168j58u.svelte-168j58u{position:relative}input[type=text].svelte-168j58u.svelte-168j58u.svelte-168j58u,input[type=number].svelte-168j58u.svelte-168j58u.svelte-168j58u,input[type=email].svelte-168j58u.svelte-168j58u.svelte-168j58u,input[type=tel].svelte-168j58u.svelte-168j58u.svelte-168j58u{display:inline;border:none;border-bottom:1px solid black}input[type=number].svelte-168j58u.svelte-168j58u.svelte-168j58u{width:2.5em}fieldset.svelte-168j58u label.error-label.svelte-168j58u.svelte-168j58u{color:rgb(240, 99, 99);font-size:0.6em}fieldset#files.svelte-168j58u.svelte-168j58u.svelte-168j58u{display:flex;flex-wrap:wrap;justify-content:space-between;padding-bottom:3em;border-bottom:1px solid #ccc;border-radius:3px}fieldset#files.svelte-168j58u input[type=file].svelte-168j58u:hover+label.svelte-168j58u,fieldset#files.svelte-168j58u input[type=file].svelte-168j58u:focus+label.svelte-168j58u{outline:1px solid black}fieldset#files.svelte-168j58u label.file-label.svelte-168j58u.svelte-168j58u{text-align:center;cursor:pointer;outline:1px dashed #ccc;background-color:#fbfcff;border-radius:10px;display:inline-block;margin-block-start:1em;padding:1em 2em;width:30%;transition:outline 100ms}@media only screen and (max-width: 580px){fieldset#files.svelte-168j58u label.file-label.svelte-168j58u.svelte-168j58u{width:100%}}fieldset#files.svelte-168j58u label.file-label svg.svelte-168j58u.svelte-168j58u{fill:#ccc}fieldset#files.svelte-168j58u label.file-label p.svelte-168j58u.svelte-168j58u{margin:0;font-size:0.8em}fieldset.svelte-168j58u legend.svelte-168j58u.svelte-168j58u{font-size:1.3em}fieldset.svelte-168j58u legend.svelte-168j58u.svelte-168j58u::after{content:"*";color:rgb(240, 99, 99)}fieldset.svelte-168j58u label[for=policy].svelte-168j58u.svelte-168j58u::after{content:"*";color:rgb(240, 99, 99)}fieldset.svelte-168j58u a.svelte-168j58u.svelte-168j58u{font-weight:500;font-style:italic;color:rgb(41, 76, 174);background-image:linear-gradient(90deg, rgba(38, 58, 130, 0.771), rgb(57, 70, 152));background-size:0% 2px;background-repeat:no-repeat;background-position:left bottom;transition:background-size 200ms ease-in-out}fieldset.svelte-168j58u a.svelte-168j58u.svelte-168j58u:hover{background-size:100% 2px}button[type=submit].svelte-168j58u.svelte-168j58u.svelte-168j58u{cursor:pointer;color:white;margin-inline:auto;padding:1em 1.8em;width:fit-content;border:none;border-radius:0.5em;background-color:rgb(4, 191, 4)}button[type=submit].svelte-168j58u.svelte-168j58u.svelte-168j58u:hover{background-color:rgb(28, 198, 28)}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `${validate_component(Toaster$1, "Toaster").$$render($$result, {}, {}, {})}

${validate_component(Main, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Section, "Section").$$render($$result, {}, {}, {
        default: () => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
          return `<form method="${"POST"}" enctype="${"multipart/form-data"}" class="${"svelte-168j58u"}"><fieldset id="${"names"}" class="${"svelte-168j58u"}"><legend class="${"svelte-168j58u"}">\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0437\u0430 \u043A\u0430\u043D\u0434\u0438\u0434\u0430\u0442\u0430 (\u0412\u0441\u0438\u0447\u043A\u0438 \u043F\u043E\u043B\u0435\u0442\u0430 \u0441\u0430 \u0437\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u0438)</legend>
                <div class="${"block-wrapper svelte-168j58u"}">\u041A\u0430\u0437\u0432\u0430\u043C \u0441\u0435
                    <div class="${"group svelte-168j58u"}"><label for="${"firstName"}" class="${"sr-only svelte-168j58u"}">\u0418\u043C\u0435</label>

                        <input type="${"text"}" name="${"first_name"}" id="${"firstName"}" placeholder="${"\u0418\u043C\u0435"}" required class="${"svelte-168j58u"}">
                        ${((_a = form == null ? void 0 : form.errors) == null ? void 0 : _a.first_name) ? `<label class="${"error-label svelte-168j58u"}" for="${"firstName"}">${escape((_b = form == null ? void 0 : form.errors) == null ? void 0 : _b.first_name[0])}</label>` : ``}</div>

                    <div class="${"group svelte-168j58u"}"><label for="${"middleName"}" class="${"sr-only svelte-168j58u"}">\u041F\u0440\u0435\u0437\u0438\u043C\u0435</label>
                        <input type="${"text"}" name="${"middle_name"}" id="${"middleName"}" placeholder="${"\u041F\u0440\u0435\u0437\u0438\u043C\u0435"}" required class="${"svelte-168j58u"}">
                        ${((_c = form == null ? void 0 : form.errors) == null ? void 0 : _c.middle_name) ? `<label class="${"error-label svelte-168j58u"}" for="${"firstName"}">${escape((_d = form == null ? void 0 : form.errors) == null ? void 0 : _d.middle_name[0])}</label>` : ``}</div>

                    <div class="${"group svelte-168j58u"}"><label for="${"lastName"}" class="${"sr-only svelte-168j58u"}">\u0424\u0430\u043C\u0438\u043B\u0438\u044F</label>
                        <input type="${"text"}" name="${"last_name"}" id="${"lastName"}" placeholder="${"\u0424\u0430\u043C\u0438\u043B\u0438\u044F"}" required class="${"svelte-168j58u"}">
                        ${((_e = form == null ? void 0 : form.errors) == null ? void 0 : _e.last_name) ? `<label class="${"error-label svelte-168j58u"}" for="${"firstName"}">${escape((_f = form == null ? void 0 : form.errors) == null ? void 0 : _f.last_name[0])}</label>` : ``}</div>
                    .
                </div>

                <div class="${"block-wrapper svelte-168j58u"}">\u041D\u0430
                    <div class="${"group svelte-168j58u"}"><label for="${"age"}" class="${"sr-only svelte-168j58u"}">\u0412\u044A\u0437\u0440\u0430\u0441\u0442</label>
                        <input type="${"number"}" name="${"age"}" min="${"1"}" max="${"99"}" id="${"age"}" placeholder="${"\u0413\u043E\u0434\u0438\u043D\u0438"}" required class="${"svelte-168j58u"}">
                        ${((_g = form == null ? void 0 : form.errors) == null ? void 0 : _g.age) ? `<label class="${"error-label svelte-168j58u"}" for="${"firstName"}">${escape((_h = form == null ? void 0 : form.errors) == null ? void 0 : _h.age[0])}</label>` : ``}</div>
                    \u0433\u043E\u0434\u0438\u043D\u0438 \u0441\u044A\u043C \u0438 \u0443\u0447\u0430 \u0432/\u044A\u0432

                    <div class="${"group svelte-168j58u"}"><label for="${"school"}" class="${"sr-only svelte-168j58u"}">\u0423\u0447\u0435\u0431\u043D\u043E \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0435</label>
                        <input type="${"text"}" name="${"school"}" id="${"school"}" placeholder="${"\u0423\u0447\u0435\u0431\u043D\u043E \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0435"}" required class="${"svelte-168j58u"}">
                        ${((_i = form == null ? void 0 : form.errors) == null ? void 0 : _i.school) ? `<label class="${"error-label svelte-168j58u"}" for="${"firstName"}">${escape((_j = form == null ? void 0 : form.errors) == null ? void 0 : _j.school[0])}</label>` : ``}</div>
                    \u0432 \u0433\u0440\u0430\u0434
                    <div class="${"group svelte-168j58u"}"><label for="${"city"}" class="${"sr-only svelte-168j58u"}">\u0413\u0440\u0430\u0434</label>
                        <input type="${"text"}" name="${"city"}" id="${"city"}" placeholder="${"\u0413\u0440\u0430\u0434"}" required class="${"svelte-168j58u"}">
                        ${((_k = form == null ? void 0 : form.errors) == null ? void 0 : _k.city) ? `<label class="${"error-label svelte-168j58u"}" for="${"firstName"}">${escape((_l = form == null ? void 0 : form.errors) == null ? void 0 : _l.city[0])}</label>` : ``}</div>
                    .
                </div>

                <div class="${"block-wrapper svelte-168j58u"}">\u041C\u043E\u0436\u0435 \u0434\u0430 \u043C\u0435 \u043F\u043E\u0442\u044A\u0440\u0441\u0438\u0442\u0435 \u043D\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D
                    <div class="${"group svelte-168j58u"}"><label for="${"tel"}" class="${"sr-only svelte-168j58u"}">\u0422\u0435\u043B\u0435\u0444\u043E\u043D</label>
                        <input type="${"tel"}" name="${"tel"}" id="${"tel"}" placeholder="${"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"}" required class="${"svelte-168j58u"}">
                        ${((_m = form == null ? void 0 : form.errors) == null ? void 0 : _m.tel) ? `<label class="${"error-label svelte-168j58u"}" for="${"firstName"}">${escape((_n = form == null ? void 0 : form.errors) == null ? void 0 : _n.tel[0])}</label>` : ``}</div>
                    \u0438\u043B\u0438 \u043D\u0430 \u0438\u043C\u0435\u0439\u043B
                    <div class="${"group svelte-168j58u"}"><label for="${"email"}" class="${"sr-only svelte-168j58u"}">\u0418\u043C\u0435\u0439\u043B</label>
                        <input type="${"email"}" name="${"email"}" id="${"email"}" placeholder="${"\u0418\u043C\u0435\u0439\u043B"}" required class="${"svelte-168j58u"}">
                        ${((_o = form == null ? void 0 : form.errors) == null ? void 0 : _o.email) ? `<label class="${"error-label svelte-168j58u"}" for="${"firstName"}">${escape((_p = form == null ? void 0 : form.errors) == null ? void 0 : _p.email[0])}</label>` : ``}</div>
                    .
                </div></fieldset>

            <fieldset id="${"files"}" class="${"svelte-168j58u"}"><legend class="${"svelte-168j58u"}">\u0424\u0430\u0439\u043B\u043E\u0432\u0435 \u0437\u0430 \u043F\u0440\u0438\u043A\u0430\u0447\u0432\u0430\u043D\u0435</legend>

                <input class="${"sr-only svelte-168j58u"}" type="${"file"}" name="${"work"}" accept="${"*"}" id="${"work"}" required>
                <label for="${"work"}" class="${"file-label svelte-168j58u"}"><h2>\u0422\u0432\u043E\u0440\u0431\u0430</h2>
                    <svg xmlns="${"http://www.w3.org/2000/svg"}" height="${"48"}" width="${"48"}" class="${"svelte-168j58u"}"><path d="${"M12.5 40q-4.3 0-7.4-3.1Q2 33.8 2 29.5q0-3.9 2.475-6.875t6.375-3.575q1-4.85 4.7-7.925T24.1 8.05q5.65 0 9.475 4.075Q37.4 16.2 37.4 21.9v1.2q3.6-.1 6.1 2.325Q46 27.85 46 31.55q0 3.45-2.5 5.95T37.55 40H25.5q-1.2 0-2.1-.9-.9-.9-.9-2.1V24.1l-4.15 4.15-2.15-2.15 7.8-7.8 7.8 7.8-2.15 2.15-4.15-4.15V37h12.05q2.25 0 3.85-1.6t1.6-3.85q0-2.25-1.6-3.85t-3.85-1.6H34.4v-4.2q0-4.45-3.025-7.65t-7.475-3.2q-4.45 0-7.5 3.2t-3.05 7.65h-.95q-3.1 0-5.25 2.175T5 29.45q0 3.1 2.2 5.325T12.5 37h7v3ZM24 25.5Z"}"></path></svg>

                    <p class="${"svelte-168j58u"}">\u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 \u0437\u0430 \u0434\u0430 \u0438\u0437\u0431\u0435\u0440\u0435\u0442\u0435 \u0444\u0430\u0439\u043B \u0438\u043B\u0438 \u0433\u043E \u043F\u0440\u0438\u0432\u043B\u0430\u0447\u0435\u0442\u0435 \u0432 \u043F\u043E\u043B\u0435\u0442\u043E.</p></label>

                <input class="${"sr-only svelte-168j58u"}" type="${"file"}" name="${"declaration"}" accept="${"*"}" id="${"declaration"}" required>
                <label for="${"declaration"}" class="${"file-label svelte-168j58u"}"><h2>\u0414\u0435\u043A\u043B\u0430\u0440\u0430\u0446\u0438\u044F</h2>
                    <svg xmlns="${"http://www.w3.org/2000/svg"}" height="${"48"}" width="${"48"}" class="${"svelte-168j58u"}"><path d="${"M12.5 40q-4.3 0-7.4-3.1Q2 33.8 2 29.5q0-3.9 2.475-6.875t6.375-3.575q1-4.85 4.7-7.925T24.1 8.05q5.65 0 9.475 4.075Q37.4 16.2 37.4 21.9v1.2q3.6-.1 6.1 2.325Q46 27.85 46 31.55q0 3.45-2.5 5.95T37.55 40H25.5q-1.2 0-2.1-.9-.9-.9-.9-2.1V24.1l-4.15 4.15-2.15-2.15 7.8-7.8 7.8 7.8-2.15 2.15-4.15-4.15V37h12.05q2.25 0 3.85-1.6t1.6-3.85q0-2.25-1.6-3.85t-3.85-1.6H34.4v-4.2q0-4.45-3.025-7.65t-7.475-3.2q-4.45 0-7.5 3.2t-3.05 7.65h-.95q-3.1 0-5.25 2.175T5 29.45q0 3.1 2.2 5.325T12.5 37h7v3ZM24 25.5Z"}"></path></svg>
                    <p class="${"svelte-168j58u"}">\u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 \u0437\u0430 \u0434\u0430 \u0438\u0437\u0431\u0435\u0440\u0435\u0442\u0435 \u0444\u0430\u0439\u043B \u0438\u043B\u0438 \u0433\u043E \u043F\u0440\u0438\u0432\u043B\u0430\u0447\u0435\u0442\u0435 \u0432 \u043F\u043E\u043B\u0435\u0442\u043E.</p></label></fieldset>

            <fieldset class="${"svelte-168j58u"}"><input type="${"checkbox"}" name="${"policy"}" id="${"policy"}" required class="${"svelte-168j58u"}">
                <label for="${"policy"}" class="${"svelte-168j58u"}">\u0421\u044A\u0433\u043B\u0430\u0441\u0435\u043D \u0441\u044A\u043C \u0441 <a href="${"./projects/privacy"}" class="${"svelte-168j58u"}">\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0430\u0442\u0430 \u0437\u0430 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0435 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438</a>.</label>
                ${((_q = form == null ? void 0 : form.errors) == null ? void 0 : _q.policy) ? `<label class="${"error-label svelte-168j58u"}" for="${"firstName"}">${escape((_r = form == null ? void 0 : form.errors) == null ? void 0 : _r.policy[0])}</label>` : ``}</fieldset>
            <button type="${"submit"}" class="${"svelte-168j58u"}">\u0418\u0437\u043F\u0440\u0430\u0442\u0438</button></form>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};
