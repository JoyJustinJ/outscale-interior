var e = Object.create,
    t = Object.defineProperty,
    n = Object.getOwnPropertyDescriptor,
    r = Object.getOwnPropertyNames,
    i = Object.getPrototypeOf,
    a = Object.prototype.hasOwnProperty,
    o = (e, t) => () => (t || (e((t = {
        exports: {}
    }).exports, t), e = null), t.exports),
    s = (e, n) => {
        let r = {};
        for (var i in e) t(r, i, {
            get: e[i],
            enumerable: !0
        });
        return n || t(r, Symbol.toStringTag, {
            value: `Module`
        }), r
    },
    c = (e, i, o, s) => {
        if (i && typeof i == `object` || typeof i == `function`)
            for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
                get: (e => i[e]).bind(null, d),
                enumerable: !(s = n(i, d)) || s.enumerable
            });
        return e
    },
    l = (n, r, o) => (o = n == null ? {} : e(i(n)), c(r || !n || !n.__esModule || !a.call(n, `default`) ? t(o, `default`, {
        value: n,
        enumerable: !0
    }) : o, n));
(function() {
    let e = document.createElement(`link`).relList;
    if (e && e.supports && e.supports(`modulepreload`)) return;
    for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
    new MutationObserver(e => {
        for (let t of e)
            if (t.type === `childList`)
                for (let e of t.addedNodes) e.tagName === `LINK` && e.rel === `modulepreload` && n(e)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function t(e) {
        let t = {};
        return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), t.credentials = e.crossOrigin === `use-credentials` ? `include` : e.crossOrigin === `anonymous` ? `omit` : `same-origin`, t
    }

    function n(e) {
        if (e.ep) return;
        e.ep = !0;
        let n = t(e);
        fetch(e.href, n)
    }
})();
var u = o((e => {
        var t = Symbol.for(`react.element`),
            n = Symbol.for(`react.portal`),
            r = Symbol.for(`react.fragment`),
            i = Symbol.for(`react.strict_mode`),
            a = Symbol.for(`react.profiler`),
            o = Symbol.for(`react.provider`),
            s = Symbol.for(`react.context`),
            c = Symbol.for(`react.forward_ref`),
            l = Symbol.for(`react.suspense`),
            u = Symbol.for(`react.memo`),
            d = Symbol.for(`react.lazy`),
            f = Symbol.iterator;

        function p(e) {
            return typeof e != `object` || !e ? null : (e = f && e[f] || e[`@@iterator`], typeof e == `function` ? e : null)
        }
        var m = {
                isMounted: function() {
                    return !1
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            },
            h = Object.assign,
            g = {};

        function _(e, t, n) {
            this.props = e, this.context = t, this.refs = g, this.updater = n || m
        }
        _.prototype.isReactComponent = {}, _.prototype.setState = function(e, t) {
            if (typeof e != `object` && typeof e != `function` && e != null) throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);
            this.updater.enqueueSetState(this, e, t, `setState`)
        }, _.prototype.forceUpdate = function(e) {
            this.updater.enqueueForceUpdate(this, e, `forceUpdate`)
        };

        function v() {}
        v.prototype = _.prototype;

        function y(e, t, n) {
            this.props = e, this.context = t, this.refs = g, this.updater = n || m
        }
        var b = y.prototype = new v;
        b.constructor = y, h(b, _.prototype), b.isPureReactComponent = !0;
        var x = Array.isArray,
            S = Object.prototype.hasOwnProperty,
            C = {
                current: null
            },
            w = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };

        function T(e, n, r) {
            var i, a = {},
                o = null,
                s = null;
            if (n != null)
                for (i in n.ref !== void 0 && (s = n.ref), n.key !== void 0 && (o = `` + n.key), n) S.call(n, i) && !w.hasOwnProperty(i) && (a[i] = n[i]);
            var c = arguments.length - 2;
            if (c === 1) a.children = r;
            else if (1 < c) {
                for (var l = Array(c), u = 0; u < c; u++) l[u] = arguments[u + 2];
                a.children = l
            }
            if (e && e.defaultProps)
                for (i in c = e.defaultProps, c) a[i] === void 0 && (a[i] = c[i]);
            return {
                $$typeof: t,
                type: e,
                key: o,
                ref: s,
                props: a,
                _owner: C.current
            }
        }

        function ee(e, n) {
            return {
                $$typeof: t,
                type: e.type,
                key: n,
                ref: e.ref,
                props: e.props,
                _owner: e._owner
            }
        }

        function E(e) {
            return typeof e == `object` && !!e && e.$$typeof === t
        }

        function te(e) {
            var t = {
                "=": `=0`,
                ":": `=2`
            };
            return `$` + e.replace(/[=:]/g, function(e) {
                return t[e]
            })
        }
        var ne = /\/+/g;

        function re(e, t) {
            return typeof e == `object` && e && e.key != null ? te(`` + e.key) : t.toString(36)
        }

        function ie(e, r, i, a, o) {
            var s = typeof e;
            (s === `undefined` || s === `boolean`) && (e = null);
            var c = !1;
            if (e === null) c = !0;
            else switch (s) {
                case `string`:
                case `number`:
                    c = !0;
                    break;
                case `object`:
                    switch (e.$$typeof) {
                        case t:
                        case n:
                            c = !0
                    }
            }
            if (c) return c = e, o = o(c), e = a === `` ? `.` + re(c, 0) : a, x(o) ? (i = ``, e != null && (i = e.replace(ne, `$&/`) + `/`), ie(o, r, i, ``, function(e) {
                return e
            })) : o != null && (E(o) && (o = ee(o, i + (!o.key || c && c.key === o.key ? `` : (`` + o.key).replace(ne, `$&/`) + `/`) + e)), r.push(o)), 1;
            if (c = 0, a = a === `` ? `.` : a + `:`, x(e))
                for (var l = 0; l < e.length; l++) {
                    s = e[l];
                    var u = a + re(s, l);
                    c += ie(s, r, i, u, o)
                } else if (u = p(e), typeof u == `function`)
                    for (e = u.call(e), l = 0; !(s = e.next()).done;) s = s.value, u = a + re(s, l++), c += ie(s, r, i, u, o);
                else if (s === `object`) throw r = String(e), Error(`Objects are not valid as a React child (found: ` + (r === `[object Object]` ? `object with keys {` + Object.keys(e).join(`, `) + `}` : r) + `). If you meant to render a collection of children, use an array instead.`);
            return c
        }

        function D(e, t, n) {
            if (e == null) return e;
            var r = [],
                i = 0;
            return ie(e, r, ``, ``, function(e) {
                return t.call(n, e, i++)
            }), r
        }

        function ae(e) {
            if (e._status === -1) {
                var t = e._result;
                t = t(), t.then(function(t) {
                    (e._status === 0 || e._status === -1) && (e._status = 1, e._result = t)
                }, function(t) {
                    (e._status === 0 || e._status === -1) && (e._status = 2, e._result = t)
                }), e._status === -1 && (e._status = 0, e._result = t)
            }
            if (e._status === 1) return e._result.default;
            throw e._result
        }
        var O = {
                current: null
            },
            k = {
                transition: null
            },
            A = {
                ReactCurrentDispatcher: O,
                ReactCurrentBatchConfig: k,
                ReactCurrentOwner: C
            };

        function j() {
            throw Error(`act(...) is not supported in production builds of React.`)
        }
        e.Children = {
            map: D,
            forEach: function(e, t, n) {
                D(e, function() {
                    t.apply(this, arguments)
                }, n)
            },
            count: function(e) {
                var t = 0;
                return D(e, function() {
                    t++
                }), t
            },
            toArray: function(e) {
                return D(e, function(e) {
                    return e
                }) || []
            },
            only: function(e) {
                if (!E(e)) throw Error(`React.Children.only expected to receive a single React element child.`);
                return e
            }
        }, e.Component = _, e.Fragment = r, e.Profiler = a, e.PureComponent = y, e.StrictMode = i, e.Suspense = l, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A, e.act = j, e.cloneElement = function(e, n, r) {
            if (e == null) throw Error(`React.cloneElement(...): The argument must be a React element, but you passed ` + e + `.`);
            var i = h({}, e.props),
                a = e.key,
                o = e.ref,
                s = e._owner;
            if (n != null) {
                if (n.ref !== void 0 && (o = n.ref, s = C.current), n.key !== void 0 && (a = `` + n.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
                for (l in n) S.call(n, l) && !w.hasOwnProperty(l) && (i[l] = n[l] === void 0 && c !== void 0 ? c[l] : n[l])
            }
            var l = arguments.length - 2;
            if (l === 1) i.children = r;
            else if (1 < l) {
                c = Array(l);
                for (var u = 0; u < l; u++) c[u] = arguments[u + 2];
                i.children = c
            }
            return {
                $$typeof: t,
                type: e.type,
                key: a,
                ref: o,
                props: i,
                _owner: s
            }
        }, e.createContext = function(e) {
            return e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null
            }, e.Provider = {
                $$typeof: o,
                _context: e
            }, e.Consumer = e
        }, e.createElement = T, e.createFactory = function(e) {
            var t = T.bind(null, e);
            return t.type = e, t
        }, e.createRef = function() {
            return {
                current: null
            }
        }, e.forwardRef = function(e) {
            return {
                $$typeof: c,
                render: e
            }
        }, e.isValidElement = E, e.lazy = function(e) {
            return {
                $$typeof: d,
                _payload: {
                    _status: -1,
                    _result: e
                },
                _init: ae
            }
        }, e.memo = function(e, t) {
            return {
                $$typeof: u,
                type: e,
                compare: t === void 0 ? null : t
            }
        }, e.startTransition = function(e) {
            var t = k.transition;
            k.transition = {};
            try {
                e()
            } finally {
                k.transition = t
            }
        }, e.unstable_act = j, e.useCallback = function(e, t) {
            return O.current.useCallback(e, t)
        }, e.useContext = function(e) {
            return O.current.useContext(e)
        }, e.useDebugValue = function() {}, e.useDeferredValue = function(e) {
            return O.current.useDeferredValue(e)
        }, e.useEffect = function(e, t) {
            return O.current.useEffect(e, t)
        }, e.useId = function() {
            return O.current.useId()
        }, e.useImperativeHandle = function(e, t, n) {
            return O.current.useImperativeHandle(e, t, n)
        }, e.useInsertionEffect = function(e, t) {
            return O.current.useInsertionEffect(e, t)
        }, e.useLayoutEffect = function(e, t) {
            return O.current.useLayoutEffect(e, t)
        }, e.useMemo = function(e, t) {
            return O.current.useMemo(e, t)
        }, e.useReducer = function(e, t, n) {
            return O.current.useReducer(e, t, n)
        }, e.useRef = function(e) {
            return O.current.useRef(e)
        }, e.useState = function(e) {
            return O.current.useState(e)
        }, e.useSyncExternalStore = function(e, t, n) {
            return O.current.useSyncExternalStore(e, t, n)
        }, e.useTransition = function() {
            return O.current.useTransition()
        }, e.version = `18.3.1`
    })),
    d = o(((e, t) => {
        t.exports = u()
    })),
    f = o((e => {
        function t(e, t) {
            var n = e.length;
            e.push(t);
            a: for (; 0 < n;) {
                var r = n - 1 >>> 1,
                    a = e[r];
                if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;
                else break a
            }
        }

        function n(e) {
            return e.length === 0 ? null : e[0]
        }

        function r(e) {
            if (e.length === 0) return null;
            var t = e[0],
                n = e.pop();
            if (n !== t) {
                e[0] = n;
                a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
                    var s = 2 * (r + 1) - 1,
                        c = e[s],
                        l = s + 1,
                        u = e[l];
                    if (0 > i(c, n)) l < a && 0 > i(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);
                    else if (l < a && 0 > i(u, n)) e[r] = u, e[l] = n, r = l;
                    else break a
                }
            }
            return t
        }

        function i(e, t) {
            var n = e.sortIndex - t.sortIndex;
            return n === 0 ? e.id - t.id : n
        }
        if (typeof performance == `object` && typeof performance.now == `function`) {
            var a = performance;
            e.unstable_now = function() {
                return a.now()
            }
        } else {
            var o = Date,
                s = o.now();
            e.unstable_now = function() {
                return o.now() - s
            }
        }
        var c = [],
            l = [],
            u = 1,
            d = null,
            f = 3,
            p = !1,
            m = !1,
            h = !1,
            g = typeof setTimeout == `function` ? setTimeout : null,
            _ = typeof clearTimeout == `function` ? clearTimeout : null,
            v = typeof setImmediate < `u` ? setImmediate : null;
        typeof navigator < `u` && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

        function y(e) {
            for (var i = n(l); i !== null;) {
                if (i.callback === null) r(l);
                else if (i.startTime <= e) r(l), i.sortIndex = i.expirationTime, t(c, i);
                else break;
                i = n(l)
            }
        }

        function b(e) {
            if (h = !1, y(e), !m)
                if (n(c) !== null) m = !0, D(x);
                else {
                    var t = n(l);
                    t !== null && ae(b, t.startTime - e)
                }
        }

        function x(t, i) {
            m = !1, h && (h = !1, _(w), w = -1), p = !0;
            var a = f;
            try {
                for (y(i), d = n(c); d !== null && (!(d.expirationTime > i) || t && !E());) {
                    var o = d.callback;
                    if (typeof o == `function`) {
                        d.callback = null, f = d.priorityLevel;
                        var s = o(d.expirationTime <= i);
                        i = e.unstable_now(), typeof s == `function` ? d.callback = s : d === n(c) && r(c), y(i)
                    } else r(c);
                    d = n(c)
                }
                if (d !== null) var u = !0;
                else {
                    var g = n(l);
                    g !== null && ae(b, g.startTime - i), u = !1
                }
                return u
            } finally {
                d = null, f = a, p = !1
            }
        }
        var S = !1,
            C = null,
            w = -1,
            T = 5,
            ee = -1;

        function E() {
            return !(e.unstable_now() - ee < T)
        }

        function te() {
            if (C !== null) {
                var t = e.unstable_now();
                ee = t;
                var n = !0;
                try {
                    n = C(!0, t)
                } finally {
                    n ? ne() : (S = !1, C = null)
                }
            } else S = !1
        }
        var ne;
        if (typeof v == `function`) ne = function() {
            v(te)
        };
        else if (typeof MessageChannel < `u`) {
            var re = new MessageChannel,
                ie = re.port2;
            re.port1.onmessage = te, ne = function() {
                ie.postMessage(null)
            }
        } else ne = function() {
            g(te, 0)
        };

        function D(e) {
            C = e, S || (S = !0, ne())
        }

        function ae(t, n) {
            w = g(function() {
                t(e.unstable_now())
            }, n)
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
            e.callback = null
        }, e.unstable_continueExecution = function() {
            m || p || (m = !0, D(x))
        }, e.unstable_forceFrameRate = function(e) {
            0 > e || 125 < e ? console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`) : T = 0 < e ? Math.floor(1e3 / e) : 5
        }, e.unstable_getCurrentPriorityLevel = function() {
            return f
        }, e.unstable_getFirstCallbackNode = function() {
            return n(c)
        }, e.unstable_next = function(e) {
            switch (f) {
                case 1:
                case 2:
                case 3:
                    var t = 3;
                    break;
                default:
                    t = f
            }
            var n = f;
            f = t;
            try {
                return e()
            } finally {
                f = n
            }
        }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(e, t) {
            switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    e = 3
            }
            var n = f;
            f = e;
            try {
                return t()
            } finally {
                f = n
            }
        }, e.unstable_scheduleCallback = function(r, i, a) {
            var o = e.unstable_now();
            switch (typeof a == `object` && a ? (a = a.delay, a = typeof a == `number` && 0 < a ? o + a : o) : a = o, r) {
                case 1:
                    var s = -1;
                    break;
                case 2:
                    s = 250;
                    break;
                case 5:
                    s = 1073741823;
                    break;
                case 4:
                    s = 1e4;
                    break;
                default:
                    s = 5e3
            }
            return s = a + s, r = {
                id: u++,
                callback: i,
                priorityLevel: r,
                startTime: a,
                expirationTime: s,
                sortIndex: -1
            }, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (_(w), w = -1) : h = !0, ae(b, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, D(x))), r
        }, e.unstable_shouldYield = E, e.unstable_wrapCallback = function(e) {
            var t = f;
            return function() {
                var n = f;
                f = t;
                try {
                    return e.apply(this, arguments)
                } finally {
                    f = n
                }
            }
        }
    })),
    p = o(((e, t) => {
        t.exports = f()
    })),
    m = o((e => {
        var t = d(),
            n = p();

        function r(e) {
            for (var t = `https://reactjs.org/docs/error-decoder.html?invariant=` + e, n = 1; n < arguments.length; n++) t += `&args[]=` + encodeURIComponent(arguments[n]);
            return `Minified React error #` + e + `; visit ` + t + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
        }
        var i = new Set,
            a = {};

        function o(e, t) {
            s(e, t), s(e + `Capture`, t)
        }

        function s(e, t) {
            for (a[e] = t, e = 0; e < t.length; e++) i.add(t[e])
        }
        var c = !(typeof window > `u` || window.document === void 0 || window.document.createElement === void 0),
            l = Object.prototype.hasOwnProperty,
            u = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
            f = {},
            m = {};

        function h(e) {
            return l.call(m, e) ? !0 : l.call(f, e) ? !1 : u.test(e) ? m[e] = !0 : (f[e] = !0, !1)
        }

        function g(e, t, n, r) {
            if (n !== null && n.type === 0) return !1;
            switch (typeof t) {
                case `function`:
                case `symbol`:
                    return !0;
                case `boolean`:
                    return r ? !1 : n === null ? (e = e.toLowerCase().slice(0, 5), e !== `data-` && e !== `aria-`) : !n.acceptsBooleans;
                default:
                    return !1
            }
        }

        function _(e, t, n, r) {
            if (t == null || g(e, t, n, r)) return !0;
            if (r) return !1;
            if (n !== null) switch (n.type) {
                case 3:
                    return !t;
                case 4:
                    return !1 === t;
                case 5:
                    return isNaN(t);
                case 6:
                    return isNaN(t) || 1 > t
            }
            return !1
        }

        function v(e, t, n, r, i, a, o) {
            this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o
        }
        var y = {};
        `children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e) {
            y[e] = new v(e, 0, !1, e, null, !1, !1)
        }), [
            [`acceptCharset`, `accept-charset`],
            [`className`, `class`],
            [`htmlFor`, `for`],
            [`httpEquiv`, `http-equiv`]
        ].forEach(function(e) {
            var t = e[0];
            y[t] = new v(t, 1, !1, e[1], null, !1, !1)
        }), [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach(function(e) {
            y[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1)
        }), [`autoReverse`, `externalResourcesRequired`, `focusable`, `preserveAlpha`].forEach(function(e) {
            y[e] = new v(e, 2, !1, e, null, !1, !1)
        }), `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e) {
            y[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1)
        }), [`checked`, `multiple`, `muted`, `selected`].forEach(function(e) {
            y[e] = new v(e, 3, !0, e, null, !1, !1)
        }), [`capture`, `download`].forEach(function(e) {
            y[e] = new v(e, 4, !1, e, null, !1, !1)
        }), [`cols`, `rows`, `size`, `span`].forEach(function(e) {
            y[e] = new v(e, 6, !1, e, null, !1, !1)
        }), [`rowSpan`, `start`].forEach(function(e) {
            y[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1)
        });
        var b = /[\-:]([a-z])/g;

        function x(e) {
            return e[1].toUpperCase()
        }
        `accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e) {
            var t = e.replace(b, x);
            y[t] = new v(t, 1, !1, e, null, !1, !1)
        }), `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e) {
            var t = e.replace(b, x);
            y[t] = new v(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1)
        }), [`xml:base`, `xml:lang`, `xml:space`].forEach(function(e) {
            var t = e.replace(b, x);
            y[t] = new v(t, 1, !1, e, `http://www.w3.org/XML/1998/namespace`, !1, !1)
        }), [`tabIndex`, `crossOrigin`].forEach(function(e) {
            y[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1)
        }), y.xlinkHref = new v(`xlinkHref`, 1, !1, `xlink:href`, `http://www.w3.org/1999/xlink`, !0, !1), [`src`, `href`, `action`, `formAction`].forEach(function(e) {
            y[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0)
        });

        function S(e, t, n, r) {
            var i = y.hasOwnProperty(t) ? y[t] : null;
            (i === null ? r || !(2 < t.length) || t[0] !== `o` && t[0] !== `O` || t[1] !== `n` && t[1] !== `N` : i.type !== 0) && (_(t, n, i, r) && (n = null), r || i === null ? h(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, `` + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type !== 3 && `` : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && !0 === n ? `` : `` + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
        }
        var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
            w = Symbol.for(`react.element`),
            T = Symbol.for(`react.portal`),
            ee = Symbol.for(`react.fragment`),
            E = Symbol.for(`react.strict_mode`),
            te = Symbol.for(`react.profiler`),
            ne = Symbol.for(`react.provider`),
            re = Symbol.for(`react.context`),
            ie = Symbol.for(`react.forward_ref`),
            D = Symbol.for(`react.suspense`),
            ae = Symbol.for(`react.suspense_list`),
            O = Symbol.for(`react.memo`),
            k = Symbol.for(`react.lazy`),
            A = Symbol.for(`react.offscreen`),
            j = Symbol.iterator;

        function oe(e) {
            return typeof e != `object` || !e ? null : (e = j && e[j] || e[`@@iterator`], typeof e == `function` ? e : null)
        }
        var M = Object.assign,
            se;

        function ce(e) {
            if (se === void 0) try {
                throw Error()
            } catch (e) {
                var t = e.stack.trim().match(/\n( *(at )?)/);
                se = t && t[1] || ``
            }
            return `
` + se + e
        }
        var le = !1;

        function ue(e, t) {
            if (!e || le) return ``;
            le = !0;
            var n = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                if (t)
                    if (t = function() {
                            throw Error()
                        }, Object.defineProperty(t.prototype, "props", {
                            set: function() {
                                throw Error()
                            }
                        }), typeof Reflect == `object` && Reflect.construct) {
                        try {
                            Reflect.construct(t, [])
                        } catch (e) {
                            var r = e
                        }
                        Reflect.construct(e, [], t)
                    } else {
                        try {
                            t.call()
                        } catch (e) {
                            r = e
                        }
                        e.call(t.prototype)
                    }
                else {
                    try {
                        throw Error()
                    } catch (e) {
                        r = e
                    }
                    e()
                }
            } catch (t) {
                if (t && r && typeof t.stack == `string`) {
                    for (var i = t.stack.split(`
`), a = r.stack.split(`
`), o = i.length - 1, s = a.length - 1; 1 <= o && 0 <= s && i[o] !== a[s];) s--;
                    for (; 1 <= o && 0 <= s; o--, s--)
                        if (i[o] !== a[s]) {
                            if (o !== 1 || s !== 1)
                                do
                                    if (o--, s--, 0 > s || i[o] !== a[s]) {
                                        var c = `
` + i[o].replace(` at new `, ` at `);
                                        return e.displayName && c.includes(`<anonymous>`) && (c = c.replace(`<anonymous>`, e.displayName)), c
                                    }
                            while (1 <= o && 0 <= s);
                            break
                        }
                }
            } finally {
                le = !1, Error.prepareStackTrace = n
            }
            return (e = e ? e.displayName || e.name : ``) ? ce(e) : ``
        }

        function de(e) {
            switch (e.tag) {
                case 5:
                    return ce(e.type);
                case 16:
                    return ce(`Lazy`);
                case 13:
                    return ce(`Suspense`);
                case 19:
                    return ce(`SuspenseList`);
                case 0:
                case 2:
                case 15:
                    return e = ue(e.type, !1), e;
                case 11:
                    return e = ue(e.type.render, !1), e;
                case 1:
                    return e = ue(e.type, !0), e;
                default:
                    return ``
            }
        }

        function fe(e) {
            if (e == null) return null;
            if (typeof e == `function`) return e.displayName || e.name || null;
            if (typeof e == `string`) return e;
            switch (e) {
                case ee:
                    return `Fragment`;
                case T:
                    return `Portal`;
                case te:
                    return `Profiler`;
                case E:
                    return `StrictMode`;
                case D:
                    return `Suspense`;
                case ae:
                    return `SuspenseList`
            }
            if (typeof e == `object`) switch (e.$$typeof) {
                case re:
                    return (e.displayName || `Context`) + `.Consumer`;
                case ne:
                    return (e._context.displayName || `Context`) + `.Provider`;
                case ie:
                    var t = e.render;
                    return e = e.displayName, e ||= (e = t.displayName || t.name || ``, e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`), e;
                case O:
                    return t = e.displayName || null, t === null ? fe(e.type) || `Memo` : t;
                case k:
                    t = e._payload, e = e._init;
                    try {
                        return fe(e(t))
                    } catch {}
            }
            return null
        }

        function pe(e) {
            var t = e.type;
            switch (e.tag) {
                case 24:
                    return `Cache`;
                case 9:
                    return (t.displayName || `Context`) + `.Consumer`;
                case 10:
                    return (t._context.displayName || `Context`) + `.Provider`;
                case 18:
                    return `DehydratedFragment`;
                case 11:
                    return e = t.render, e = e.displayName || e.name || ``, t.displayName || (e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`);
                case 7:
                    return `Fragment`;
                case 5:
                    return t;
                case 4:
                    return `Portal`;
                case 3:
                    return `Root`;
                case 6:
                    return `Text`;
                case 16:
                    return fe(t);
                case 8:
                    return t === E ? `StrictMode` : `Mode`;
                case 22:
                    return `Offscreen`;
                case 12:
                    return `Profiler`;
                case 21:
                    return `Scope`;
                case 13:
                    return `Suspense`;
                case 19:
                    return `SuspenseList`;
                case 25:
                    return `TracingMarker`;
                case 1:
                case 0:
                case 17:
                case 2:
                case 14:
                case 15:
                    if (typeof t == `function`) return t.displayName || t.name || null;
                    if (typeof t == `string`) return t
            }
            return null
        }

        function me(e) {
            switch (typeof e) {
                case `boolean`:
                case `number`:
                case `string`:
                case `undefined`:
                    return e;
                case `object`:
                    return e;
                default:
                    return ``
            }
        }

        function he(e) {
            var t = e.type;
            return (e = e.nodeName) && e.toLowerCase() === `input` && (t === `checkbox` || t === `radio`)
        }

        function ge(e) {
            var t = he(e) ? `checked` : `value`,
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = `` + e[t];
            if (!e.hasOwnProperty(t) && n !== void 0 && typeof n.get == `function` && typeof n.set == `function`) {
                var i = n.get,
                    a = n.set;
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function() {
                        return i.call(this)
                    },
                    set: function(e) {
                        r = `` + e, a.call(this, e)
                    }
                }), Object.defineProperty(e, t, {
                    enumerable: n.enumerable
                }), {
                    getValue: function() {
                        return r
                    },
                    setValue: function(e) {
                        r = `` + e
                    },
                    stopTracking: function() {
                        e._valueTracker = null, delete e[t]
                    }
                }
            }
        }

        function _e(e) {
            e._valueTracker ||= ge(e)
        }

        function ve(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var n = t.getValue(),
                r = ``;
            return e && (r = he(e) ? e.checked ? `true` : `false` : e.value), e = r, e !== n && (t.setValue(e), !0)
        }

        function ye(e) {
            if (e ||= typeof document < `u` ? document : void 0, e === void 0) return null;
            try {
                return e.activeElement || e.body
            } catch {
                return e.body
            }
        }

        function be(e, t) {
            var n = t.checked;
            return M({}, t, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: void 0,
                checked: n ?? e._wrapperState.initialChecked
            })
        }

        function xe(e, t) {
            var n = t.defaultValue == null ? `` : t.defaultValue,
                r = t.checked == null ? t.defaultChecked : t.checked;
            n = me(t.value == null ? n : t.value), e._wrapperState = {
                initialChecked: r,
                initialValue: n,
                controlled: t.type === `checkbox` || t.type === `radio` ? t.checked != null : t.value != null
            }
        }

        function Se(e, t) {
            t = t.checked, t != null && S(e, `checked`, t, !1)
        }

        function Ce(e, t) {
            Se(e, t);
            var n = me(t.value),
                r = t.type;
            if (n != null) r === `number` ? (n === 0 && e.value === `` || e.value != n) && (e.value = `` + n) : e.value !== `` + n && (e.value = `` + n);
            else if (r === `submit` || r === `reset`) {
                e.removeAttribute(`value`);
                return
            }
            t.hasOwnProperty(`value`) ? Te(e, t.type, n) : t.hasOwnProperty(`defaultValue`) && Te(e, t.type, me(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
        }

        function we(e, t, n) {
            if (t.hasOwnProperty(`value`) || t.hasOwnProperty(`defaultValue`)) {
                var r = t.type;
                if (!(r !== `submit` && r !== `reset` || t.value !== void 0 && t.value !== null)) return;
                t = `` + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
            }
            n = e.name, n !== `` && (e.name = ``), e.defaultChecked = !!e._wrapperState.initialChecked, n !== `` && (e.name = n)
        }

        function Te(e, t, n) {
            (t !== `number` || ye(e.ownerDocument) !== e) && (n == null ? e.defaultValue = `` + e._wrapperState.initialValue : e.defaultValue !== `` + n && (e.defaultValue = `` + n))
        }
        var Ee = Array.isArray;

        function De(e, t, n, r) {
            if (e = e.options, t) {
                t = {};
                for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
                for (n = 0; n < e.length; n++) i = t.hasOwnProperty(`$` + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
            } else {
                for (n = `` + me(n), t = null, i = 0; i < e.length; i++) {
                    if (e[i].value === n) {
                        e[i].selected = !0, r && (e[i].defaultSelected = !0);
                        return
                    }
                    t !== null || e[i].disabled || (t = e[i])
                }
                t !== null && (t.selected = !0)
            }
        }

        function Oe(e, t) {
            if (t.dangerouslySetInnerHTML != null) throw Error(r(91));
            return M({}, t, {
                value: void 0,
                defaultValue: void 0,
                children: `` + e._wrapperState.initialValue
            })
        }

        function ke(e, t) {
            var n = t.value;
            if (n == null) {
                if (n = t.children, t = t.defaultValue, n != null) {
                    if (t != null) throw Error(r(92));
                    if (Ee(n)) {
                        if (1 < n.length) throw Error(r(93));
                        n = n[0]
                    }
                    t = n
                }
                t ??= ``, n = t
            }
            e._wrapperState = {
                initialValue: me(n)
            }
        }

        function Ae(e, t) {
            var n = me(t.value),
                r = me(t.defaultValue);
            n != null && (n = `` + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = `` + r)
        }

        function je(e) {
            var t = e.textContent;
            t === e._wrapperState.initialValue && t !== `` && t !== null && (e.value = t)
        }

        function Me(e) {
            switch (e) {
                case `svg`:
                    return `http://www.w3.org/2000/svg`;
                case `math`:
                    return `http://www.w3.org/1998/Math/MathML`;
                default:
                    return `http://www.w3.org/1999/xhtml`
            }
        }

        function Ne(e, t) {
            return e == null || e === `http://www.w3.org/1999/xhtml` ? Me(t) : e === `http://www.w3.org/2000/svg` && t === `foreignObject` ? `http://www.w3.org/1999/xhtml` : e
        }
        var Pe, Fe = function(e) {
            return typeof MSApp < `u` && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
                MSApp.execUnsafeLocalFunction(function() {
                    return e(t, n, r, i)
                })
            } : e
        }(function(e, t) {
            if (e.namespaceURI !== `http://www.w3.org/2000/svg` || `innerHTML` in e) e.innerHTML = t;
            else {
                for (Pe ||= document.createElement(`div`), Pe.innerHTML = `<svg>` + t.valueOf().toString() + `</svg>`, t = Pe.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                for (; t.firstChild;) e.appendChild(t.firstChild)
            }
        });

        function Ie(e, t) {
            if (t) {
                var n = e.firstChild;
                if (n && n === e.lastChild && n.nodeType === 3) {
                    n.nodeValue = t;
                    return
                }
            }
            e.textContent = t
        }
        var Le = {
                animationIterationCount: !0,
                aspectRatio: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            },
            Re = [`Webkit`, `ms`, `Moz`, `O`];
        Object.keys(Le).forEach(function(e) {
            Re.forEach(function(t) {
                t = t + e.charAt(0).toUpperCase() + e.substring(1), Le[t] = Le[e]
            })
        });

        function ze(e, t, n) {
            return t == null || typeof t == `boolean` || t === `` ? `` : n || typeof t != `number` || t === 0 || Le.hasOwnProperty(e) && Le[e] ? (`` + t).trim() : t + `px`
        }

        function Be(e, t) {
            for (var n in e = e.style, t)
                if (t.hasOwnProperty(n)) {
                    var r = n.indexOf(`--`) === 0,
                        i = ze(n, t[n], r);
                    n === `float` && (n = `cssFloat`), r ? e.setProperty(n, i) : e[n] = i
                }
        }
        var Ve = M({
            menuitem: !0
        }, {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        });

        function He(e, t) {
            if (t) {
                if (Ve[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(r(137, e));
                if (t.dangerouslySetInnerHTML != null) {
                    if (t.children != null) throw Error(r(60));
                    if (typeof t.dangerouslySetInnerHTML != `object` || !(`__html` in t.dangerouslySetInnerHTML)) throw Error(r(61))
                }
                if (t.style != null && typeof t.style != `object`) throw Error(r(62))
            }
        }

        function Ue(e, t) {
            if (e.indexOf(`-`) === -1) return typeof t.is == `string`;
            switch (e) {
                case `annotation-xml`:
                case `color-profile`:
                case `font-face`:
                case `font-face-src`:
                case `font-face-uri`:
                case `font-face-format`:
                case `font-face-name`:
                case `missing-glyph`:
                    return !1;
                default:
                    return !0
            }
        }
        var We = null;

        function Ge(e) {
            return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
        }
        var Ke = null,
            qe = null,
            Je = null;

        function Ye(e) {
            if (e = Gi(e)) {
                if (typeof Ke != `function`) throw Error(r(280));
                var t = e.stateNode;
                t && (t = qi(t), Ke(e.stateNode, e.type, t))
            }
        }

        function Xe(e) {
            qe ? Je ? Je.push(e) : Je = [e] : qe = e
        }

        function Ze() {
            if (qe) {
                var e = qe,
                    t = Je;
                if (Je = qe = null, Ye(e), t)
                    for (e = 0; e < t.length; e++) Ye(t[e])
            }
        }

        function Qe(e, t) {
            return e(t)
        }

        function $e() {}
        var et = !1;

        function tt(e, t, n) {
            if (et) return e(t, n);
            et = !0;
            try {
                return Qe(e, t, n)
            } finally {
                et = !1, (qe !== null || Je !== null) && ($e(), Ze())
            }
        }

        function nt(e, t) {
            var n = e.stateNode;
            if (n === null) return null;
            var i = qi(n);
            if (i === null) return null;
            n = i[t];
            a: switch (t) {
                case `onClick`:
                case `onClickCapture`:
                case `onDoubleClick`:
                case `onDoubleClickCapture`:
                case `onMouseDown`:
                case `onMouseDownCapture`:
                case `onMouseMove`:
                case `onMouseMoveCapture`:
                case `onMouseUp`:
                case `onMouseUpCapture`:
                case `onMouseEnter`:
                    (i = !i.disabled) || (e = e.type, i = e !== `button` && e !== `input` && e !== `select` && e !== `textarea`), e = !i;
                    break a;
                default:
                    e = !1
            }
            if (e) return null;
            if (n && typeof n != `function`) throw Error(r(231, t, typeof n));
            return n
        }
        var rt = !1;
        if (c) try {
            var it = {};
            Object.defineProperty(it, "passive", {
                get: function() {
                    rt = !0
                }
            }), window.addEventListener(`test`, it, it), window.removeEventListener(`test`, it, it)
        } catch {
            rt = !1
        }

        function at(e, t, n, r, i, a, o, s, c) {
            var l = Array.prototype.slice.call(arguments, 3);
            try {
                t.apply(n, l)
            } catch (e) {
                this.onError(e)
            }
        }
        var ot = !1,
            st = null,
            ct = !1,
            lt = null,
            ut = {
                onError: function(e) {
                    ot = !0, st = e
                }
            };

        function dt(e, t, n, r, i, a, o, s, c) {
            ot = !1, st = null, at.apply(ut, arguments)
        }

        function ft(e, t, n, i, a, o, s, c, l) {
            if (dt.apply(this, arguments), ot) {
                if (ot) {
                    var u = st;
                    ot = !1, st = null
                } else throw Error(r(198));
                ct || (ct = !0, lt = u)
            }
        }

        function pt(e) {
            var t = e,
                n = e;
            if (e.alternate)
                for (; t.return;) t = t.return;
            else {
                e = t;
                do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
            }
            return t.tag === 3 ? n : null
        }

        function mt(e) {
            if (e.tag === 13) {
                var t = e.memoizedState;
                if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
            }
            return null
        }

        function ht(e) {
            if (pt(e) !== e) throw Error(r(188))
        }

        function gt(e) {
            var t = e.alternate;
            if (!t) {
                if (t = pt(e), t === null) throw Error(r(188));
                return t === e ? e : null
            }
            for (var n = e, i = t;;) {
                var a = n.return;
                if (a === null) break;
                var o = a.alternate;
                if (o === null) {
                    if (i = a.return, i !== null) {
                        n = i;
                        continue
                    }
                    break
                }
                if (a.child === o.child) {
                    for (o = a.child; o;) {
                        if (o === n) return ht(a), e;
                        if (o === i) return ht(a), t;
                        o = o.sibling
                    }
                    throw Error(r(188))
                }
                if (n.return !== i.return) n = a, i = o;
                else {
                    for (var s = !1, c = a.child; c;) {
                        if (c === n) {
                            s = !0, n = a, i = o;
                            break
                        }
                        if (c === i) {
                            s = !0, i = a, n = o;
                            break
                        }
                        c = c.sibling
                    }
                    if (!s) {
                        for (c = o.child; c;) {
                            if (c === n) {
                                s = !0, n = o, i = a;
                                break
                            }
                            if (c === i) {
                                s = !0, i = o, n = a;
                                break
                            }
                            c = c.sibling
                        }
                        if (!s) throw Error(r(189))
                    }
                }
                if (n.alternate !== i) throw Error(r(190))
            }
            if (n.tag !== 3) throw Error(r(188));
            return n.stateNode.current === n ? e : t
        }

        function _t(e) {
            return e = gt(e), e === null ? null : vt(e)
        }

        function vt(e) {
            if (e.tag === 5 || e.tag === 6) return e;
            for (e = e.child; e !== null;) {
                var t = vt(e);
                if (t !== null) return t;
                e = e.sibling
            }
            return null
        }
        var yt = n.unstable_scheduleCallback,
            bt = n.unstable_cancelCallback,
            xt = n.unstable_shouldYield,
            St = n.unstable_requestPaint,
            Ct = n.unstable_now,
            wt = n.unstable_getCurrentPriorityLevel,
            Tt = n.unstable_ImmediatePriority,
            Et = n.unstable_UserBlockingPriority,
            Dt = n.unstable_NormalPriority,
            Ot = n.unstable_LowPriority,
            kt = n.unstable_IdlePriority,
            At = null,
            jt = null;

        function Mt(e) {
            if (jt && typeof jt.onCommitFiberRoot == `function`) try {
                jt.onCommitFiberRoot(At, e, void 0, (e.current.flags & 128) == 128)
            } catch {}
        }
        var Nt = Math.clz32 ? Math.clz32 : It,
            Pt = Math.log,
            Ft = Math.LN2;

        function It(e) {
            return e >>>= 0, e === 0 ? 32 : 31 - (Pt(e) / Ft | 0) | 0
        }
        var Lt = 64,
            Rt = 4194304;

        function zt(e) {
            switch (e & -e) {
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 4:
                    return 4;
                case 8:
                    return 8;
                case 16:
                    return 16;
                case 32:
                    return 32;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return e & 4194240;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    return e & 130023424;
                case 134217728:
                    return 134217728;
                case 268435456:
                    return 268435456;
                case 536870912:
                    return 536870912;
                case 1073741824:
                    return 1073741824;
                default:
                    return e
            }
        }

        function Bt(e, t) {
            var n = e.pendingLanes;
            if (n === 0) return 0;
            var r = 0,
                i = e.suspendedLanes,
                a = e.pingedLanes,
                o = n & 268435455;
            if (o !== 0) {
                var s = o & ~i;
                s === 0 ? (a &= o, a !== 0 && (r = zt(a))) : r = zt(s)
            } else o = n & ~i, o === 0 ? a !== 0 && (r = zt(a)) : r = zt(o);
            if (r === 0) return 0;
            if (t !== 0 && t !== r && (t & i) === 0 && (i = r & -r, a = t & -t, i >= a || i === 16 && a & 4194240)) return t;
            if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
                for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Nt(t), i = 1 << n, r |= e[n], t &= ~i;
            return r
        }

        function Vt(e, t) {
            switch (e) {
                case 1:
                case 2:
                case 4:
                    return t + 250;
                case 8:
                case 16:
                case 32:
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return t + 5e3;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    return -1;
                case 134217728:
                case 268435456:
                case 536870912:
                case 1073741824:
                    return -1;
                default:
                    return -1
            }
        }

        function Ht(e, t) {
            for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
                var o = 31 - Nt(a),
                    s = 1 << o,
                    c = i[o];
                c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Vt(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s
            }
        }

        function Ut(e) {
            return e = e.pendingLanes & -1073741825, e === 0 ? e & 1073741824 ? 1073741824 : 0 : e
        }

        function Wt() {
            var e = Lt;
            return Lt <<= 1, !(Lt & 4194240) && (Lt = 64), e
        }

        function Gt(e) {
            for (var t = [], n = 0; 31 > n; n++) t.push(e);
            return t
        }

        function Kt(e, t, n) {
            e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Nt(t), e[t] = n
        }

        function qt(e, t) {
            var n = e.pendingLanes & ~t;
            e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
            var r = e.eventTimes;
            for (e = e.expirationTimes; 0 < n;) {
                var i = 31 - Nt(n),
                    a = 1 << i;
                t[i] = 0, r[i] = -1, e[i] = -1, n &= ~a
            }
        }

        function Jt(e, t) {
            var n = e.entangledLanes |= t;
            for (e = e.entanglements; n;) {
                var r = 31 - Nt(n),
                    i = 1 << r;
                i & t | e[r] & t && (e[r] |= t), n &= ~i
            }
        }
        var N = 0;

        function Yt(e) {
            return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
        }
        var Xt, Zt, Qt, $t, en, tn = !1,
            nn = [],
            P = null,
            rn = null,
            an = null,
            on = new Map,
            sn = new Map,
            cn = [],
            ln = `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);

        function un(e, t) {
            switch (e) {
                case `focusin`:
                case `focusout`:
                    P = null;
                    break;
                case `dragenter`:
                case `dragleave`:
                    rn = null;
                    break;
                case `mouseover`:
                case `mouseout`:
                    an = null;
                    break;
                case `pointerover`:
                case `pointerout`:
                    on.delete(t.pointerId);
                    break;
                case `gotpointercapture`:
                case `lostpointercapture`:
                    sn.delete(t.pointerId)
            }
        }

        function dn(e, t, n, r, i, a) {
            return e === null || e.nativeEvent !== a ? (e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [i]
            }, t !== null && (t = Gi(t), t !== null && Zt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
        }

        function fn(e, t, n, r, i) {
            switch (t) {
                case `focusin`:
                    return P = dn(P, e, t, n, r, i), !0;
                case `dragenter`:
                    return rn = dn(rn, e, t, n, r, i), !0;
                case `mouseover`:
                    return an = dn(an, e, t, n, r, i), !0;
                case `pointerover`:
                    var a = i.pointerId;
                    return on.set(a, dn(on.get(a) || null, e, t, n, r, i)), !0;
                case `gotpointercapture`:
                    return a = i.pointerId, sn.set(a, dn(sn.get(a) || null, e, t, n, r, i)), !0
            }
            return !1
        }

        function pn(e) {
            var t = Wi(e.target);
            if (t !== null) {
                var n = pt(t);
                if (n !== null) {
                    if (t = n.tag, t === 13) {
                        if (t = mt(n), t !== null) {
                            e.blockedOn = t, en(e.priority, function() {
                                Qt(n)
                            });
                            return
                        }
                    } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                        return
                    }
                }
            }
            e.blockedOn = null
        }

        function mn(e) {
            if (e.blockedOn !== null) return !1;
            for (var t = e.targetContainers; 0 < t.length;) {
                var n = Tn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                if (n === null) {
                    n = e.nativeEvent;
                    var r = new n.constructor(n.type, n);
                    We = r, n.target.dispatchEvent(r), We = null
                } else return t = Gi(n), t !== null && Zt(t), e.blockedOn = n, !1;
                t.shift()
            }
            return !0
        }

        function hn(e, t, n) {
            mn(e) && n.delete(t)
        }

        function gn() {
            tn = !1, P !== null && mn(P) && (P = null), rn !== null && mn(rn) && (rn = null), an !== null && mn(an) && (an = null), on.forEach(hn), sn.forEach(hn)
        }

        function _n(e, t) {
            e.blockedOn === t && (e.blockedOn = null, tn || (tn = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, gn)))
        }

        function vn(e) {
            function t(t) {
                return _n(t, e)
            }
            if (0 < nn.length) {
                _n(nn[0], e);
                for (var n = 1; n < nn.length; n++) {
                    var r = nn[n];
                    r.blockedOn === e && (r.blockedOn = null)
                }
            }
            for (P !== null && _n(P, e), rn !== null && _n(rn, e), an !== null && _n(an, e), on.forEach(t), sn.forEach(t), n = 0; n < cn.length; n++) r = cn[n], r.blockedOn === e && (r.blockedOn = null);
            for (; 0 < cn.length && (n = cn[0], n.blockedOn === null);) pn(n), n.blockedOn === null && cn.shift()
        }
        var yn = C.ReactCurrentBatchConfig,
            bn = !0;

        function xn(e, t, n, r) {
            var i = N,
                a = yn.transition;
            yn.transition = null;
            try {
                N = 1, Cn(e, t, n, r)
            } finally {
                N = i, yn.transition = a
            }
        }

        function Sn(e, t, n, r) {
            var i = N,
                a = yn.transition;
            yn.transition = null;
            try {
                N = 4, Cn(e, t, n, r)
            } finally {
                N = i, yn.transition = a
            }
        }

        function Cn(e, t, n, r) {
            if (bn) {
                var i = Tn(e, t, n, r);
                if (i === null) gi(e, t, r, wn, n), un(e, r);
                else if (fn(i, e, t, n, r)) r.stopPropagation();
                else if (un(e, r), t & 4 && -1 < ln.indexOf(e)) {
                    for (; i !== null;) {
                        var a = Gi(i);
                        if (a !== null && Xt(a), a = Tn(e, t, n, r), a === null && gi(e, t, r, wn, n), a === i) break;
                        i = a
                    }
                    i !== null && r.stopPropagation()
                } else gi(e, t, r, null, n)
            }
        }
        var wn = null;

        function Tn(e, t, n, r) {
            if (wn = null, e = Ge(r), e = Wi(e), e !== null)
                if (t = pt(e), t === null) e = null;
                else if (n = t.tag, n === 13) {
                if (e = mt(t), e !== null) return e;
                e = null
            } else if (n === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                e = null
            } else t !== e && (e = null);
            return wn = e, null
        }

        function En(e) {
            switch (e) {
                case `cancel`:
                case `click`:
                case `close`:
                case `contextmenu`:
                case `copy`:
                case `cut`:
                case `auxclick`:
                case `dblclick`:
                case `dragend`:
                case `dragstart`:
                case `drop`:
                case `focusin`:
                case `focusout`:
                case `input`:
                case `invalid`:
                case `keydown`:
                case `keypress`:
                case `keyup`:
                case `mousedown`:
                case `mouseup`:
                case `paste`:
                case `pause`:
                case `play`:
                case `pointercancel`:
                case `pointerdown`:
                case `pointerup`:
                case `ratechange`:
                case `reset`:
                case `resize`:
                case `seeked`:
                case `submit`:
                case `touchcancel`:
                case `touchend`:
                case `touchstart`:
                case `volumechange`:
                case `change`:
                case `selectionchange`:
                case `textInput`:
                case `compositionstart`:
                case `compositionend`:
                case `compositionupdate`:
                case `beforeblur`:
                case `afterblur`:
                case `beforeinput`:
                case `blur`:
                case `fullscreenchange`:
                case `focus`:
                case `hashchange`:
                case `popstate`:
                case `select`:
                case `selectstart`:
                    return 1;
                case `drag`:
                case `dragenter`:
                case `dragexit`:
                case `dragleave`:
                case `dragover`:
                case `mousemove`:
                case `mouseout`:
                case `mouseover`:
                case `pointermove`:
                case `pointerout`:
                case `pointerover`:
                case `scroll`:
                case `toggle`:
                case `touchmove`:
                case `wheel`:
                case `mouseenter`:
                case `mouseleave`:
                case `pointerenter`:
                case `pointerleave`:
                    return 4;
                case `message`:
                    switch (wt()) {
                        case Tt:
                            return 1;
                        case Et:
                            return 4;
                        case Dt:
                        case Ot:
                            return 16;
                        case kt:
                            return 536870912;
                        default:
                            return 16
                    }
                default:
                    return 16
            }
        }
        var Dn = null,
            On = null,
            kn = null;

        function An() {
            if (kn) return kn;
            var e, t = On,
                n = t.length,
                r, i = `value` in Dn ? Dn.value : Dn.textContent,
                a = i.length;
            for (e = 0; e < n && t[e] === i[e]; e++);
            var o = n - e;
            for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
            return kn = i.slice(e, 1 < r ? 1 - r : void 0)
        }

        function jn(e) {
            var t = e.keyCode;
            return `charCode` in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
        }

        function Mn() {
            return !0
        }

        function Nn() {
            return !1
        }

        function Pn(e) {
            function t(t, n, r, i, a) {
                for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
                return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? Mn : Nn, this.isPropagationStopped = Nn, this
            }
            return M(t.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var e = this.nativeEvent;
                    e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != `unknown` && (e.returnValue = !1), this.isDefaultPrevented = Mn)
                },
                stopPropagation: function() {
                    var e = this.nativeEvent;
                    e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0), this.isPropagationStopped = Mn)
                },
                persist: function() {},
                isPersistent: Mn
            }), t
        }
        var Fn = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function(e) {
                    return e.timeStamp || Date.now()
                },
                defaultPrevented: 0,
                isTrusted: 0
            },
            In = Pn(Fn),
            Ln = M({}, Fn, {
                view: 0,
                detail: 0
            }),
            Rn = Pn(Ln),
            zn, Bn, Vn, Hn = M({}, Ln, {
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                getModifierState: $n,
                button: 0,
                buttons: 0,
                relatedTarget: function(e) {
                    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                },
                movementX: function(e) {
                    return `movementX` in e ? e.movementX : (e !== Vn && (Vn && e.type === `mousemove` ? (zn = e.screenX - Vn.screenX, Bn = e.screenY - Vn.screenY) : Bn = zn = 0, Vn = e), zn)
                },
                movementY: function(e) {
                    return `movementY` in e ? e.movementY : Bn
                }
            }),
            Un = Pn(Hn),
            Wn = Pn(M({}, Hn, {
                dataTransfer: 0
            })),
            Gn = Pn(M({}, Ln, {
                relatedTarget: 0
            })),
            Kn = Pn(M({}, Fn, {
                animationName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            })),
            qn = Pn(M({}, Fn, {
                clipboardData: function(e) {
                    return `clipboardData` in e ? e.clipboardData : window.clipboardData
                }
            })),
            Jn = Pn(M({}, Fn, {
                data: 0
            })),
            Yn = {
                Esc: `Escape`,
                Spacebar: ` `,
                Left: `ArrowLeft`,
                Up: `ArrowUp`,
                Right: `ArrowRight`,
                Down: `ArrowDown`,
                Del: `Delete`,
                Win: `OS`,
                Menu: `ContextMenu`,
                Apps: `ContextMenu`,
                Scroll: `ScrollLock`,
                MozPrintableKey: `Unidentified`
            },
            Xn = {
                8: `Backspace`,
                9: `Tab`,
                12: `Clear`,
                13: `Enter`,
                16: `Shift`,
                17: `Control`,
                18: `Alt`,
                19: `Pause`,
                20: `CapsLock`,
                27: `Escape`,
                32: ` `,
                33: `PageUp`,
                34: `PageDown`,
                35: `End`,
                36: `Home`,
                37: `ArrowLeft`,
                38: `ArrowUp`,
                39: `ArrowRight`,
                40: `ArrowDown`,
                45: `Insert`,
                46: `Delete`,
                112: `F1`,
                113: `F2`,
                114: `F3`,
                115: `F4`,
                116: `F5`,
                117: `F6`,
                118: `F7`,
                119: `F8`,
                120: `F9`,
                121: `F10`,
                122: `F11`,
                123: `F12`,
                144: `NumLock`,
                145: `ScrollLock`,
                224: `Meta`
            },
            Zn = {
                Alt: `altKey`,
                Control: `ctrlKey`,
                Meta: `metaKey`,
                Shift: `shiftKey`
            };

        function Qn(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : (e = Zn[e]) ? !!t[e] : !1
        }

        function $n() {
            return Qn
        }
        var er = Pn(M({}, Ln, {
                key: function(e) {
                    if (e.key) {
                        var t = Yn[e.key] || e.key;
                        if (t !== `Unidentified`) return t
                    }
                    return e.type === `keypress` ? (e = jn(e), e === 13 ? `Enter` : String.fromCharCode(e)) : e.type === `keydown` || e.type === `keyup` ? Xn[e.keyCode] || `Unidentified` : ``
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: $n,
                charCode: function(e) {
                    return e.type === `keypress` ? jn(e) : 0
                },
                keyCode: function(e) {
                    return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0
                },
                which: function(e) {
                    return e.type === `keypress` ? jn(e) : e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0
                }
            })),
            tr = Pn(M({}, Hn, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0
            })),
            nr = Pn(M({}, Ln, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: $n
            })),
            rr = Pn(M({}, Fn, {
                propertyName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            })),
            ir = Pn(M({}, Hn, {
                deltaX: function(e) {
                    return `deltaX` in e ? e.deltaX : `wheelDeltaX` in e ? -e.wheelDeltaX : 0
                },
                deltaY: function(e) {
                    return `deltaY` in e ? e.deltaY : `wheelDeltaY` in e ? -e.wheelDeltaY : `wheelDelta` in e ? -e.wheelDelta : 0
                },
                deltaZ: 0,
                deltaMode: 0
            })),
            ar = [9, 13, 27, 32],
            or = c && `CompositionEvent` in window,
            sr = null;
        c && `documentMode` in document && (sr = document.documentMode);
        var cr = c && `TextEvent` in window && !sr,
            lr = c && (!or || sr && 8 < sr && 11 >= sr),
            ur = ` `,
            dr = !1;

        function fr(e, t) {
            switch (e) {
                case `keyup`:
                    return ar.indexOf(t.keyCode) !== -1;
                case `keydown`:
                    return t.keyCode !== 229;
                case `keypress`:
                case `mousedown`:
                case `focusout`:
                    return !0;
                default:
                    return !1
            }
        }

        function pr(e) {
            return e = e.detail, typeof e == `object` && `data` in e ? e.data : null
        }
        var mr = !1;

        function hr(e, t) {
            switch (e) {
                case `compositionend`:
                    return pr(t);
                case `keypress`:
                    return t.which === 32 ? (dr = !0, ur) : null;
                case `textInput`:
                    return e = t.data, e === ur && dr ? null : e;
                default:
                    return null
            }
        }

        function gr(e, t) {
            if (mr) return e === `compositionend` || !or && fr(e, t) ? (e = An(), kn = On = Dn = null, mr = !1, e) : null;
            switch (e) {
                case `paste`:
                    return null;
                case `keypress`:
                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                        if (t.char && 1 < t.char.length) return t.char;
                        if (t.which) return String.fromCharCode(t.which)
                    }
                    return null;
                case `compositionend`:
                    return lr && t.locale !== `ko` ? null : t.data;
                default:
                    return null
            }
        }
        var _r = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        };

        function vr(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t === `input` ? !!_r[e.type] : t === `textarea`
        }

        function F(e, t, n, r) {
            Xe(r), t = vi(t, `onChange`), 0 < t.length && (n = new In(`onChange`, `change`, null, n, r), e.push({
                event: n,
                listeners: t
            }))
        }
        var yr = null,
            br = null;

        function xr(e) {
            ui(e, 0)
        }

        function Sr(e) {
            if (ve(Ki(e))) return e
        }

        function Cr(e, t) {
            if (e === `change`) return t
        }
        var wr = !1;
        if (c) {
            var Tr;
            if (c) {
                var Er = `oninput` in document;
                if (!Er) {
                    var Dr = document.createElement(`div`);
                    Dr.setAttribute(`oninput`, `return;`), Er = typeof Dr.oninput == `function`
                }
                Tr = Er
            } else Tr = !1;
            wr = Tr && (!document.documentMode || 9 < document.documentMode)
        }

        function Or() {
            yr && (yr.detachEvent(`onpropertychange`, I), br = yr = null)
        }

        function I(e) {
            if (e.propertyName === `value` && Sr(br)) {
                var t = [];
                F(t, br, e, Ge(e)), tt(xr, t)
            }
        }

        function kr(e, t, n) {
            e === `focusin` ? (Or(), yr = t, br = n, yr.attachEvent(`onpropertychange`, I)) : e === `focusout` && Or()
        }

        function Ar(e) {
            if (e === `selectionchange` || e === `keyup` || e === `keydown`) return Sr(br)
        }

        function jr(e, t) {
            if (e === `click`) return Sr(t)
        }

        function Mr(e, t) {
            if (e === `input` || e === `change`) return Sr(t)
        }

        function Nr(e, t) {
            return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t
        }
        var Pr = typeof Object.is == `function` ? Object.is : Nr;

        function Fr(e, t) {
            if (Pr(e, t)) return !0;
            if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
            var n = Object.keys(e),
                r = Object.keys(t);
            if (n.length !== r.length) return !1;
            for (r = 0; r < n.length; r++) {
                var i = n[r];
                if (!l.call(t, i) || !Pr(e[i], t[i])) return !1
            }
            return !0
        }

        function L(e) {
            for (; e && e.firstChild;) e = e.firstChild;
            return e
        }

        function Ir(e, t) {
            var n = L(e);
            e = 0;
            for (var r; n;) {
                if (n.nodeType === 3) {
                    if (r = e + n.textContent.length, e <= t && r >= t) return {
                        node: n,
                        offset: t - e
                    };
                    e = r
                }
                a: {
                    for (; n;) {
                        if (n.nextSibling) {
                            n = n.nextSibling;
                            break a
                        }
                        n = n.parentNode
                    }
                    n = void 0
                }
                n = L(n)
            }
        }

        function Lr(e, t) {
            return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Lr(e, t.parentNode) : `contains` in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
        }

        function Rr() {
            for (var e = window, t = ye(); t instanceof e.HTMLIFrameElement;) {
                try {
                    var n = typeof t.contentWindow.location.href == `string`
                } catch {
                    n = !1
                }
                if (n) e = t.contentWindow;
                else break;
                t = ye(e.document)
            }
            return t
        }

        function zr(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && (t === `input` && (e.type === `text` || e.type === `search` || e.type === `tel` || e.type === `url` || e.type === `password`) || t === `textarea` || e.contentEditable === `true`)
        }

        function Br(e) {
            var t = Rr(),
                n = e.focusedElem,
                r = e.selectionRange;
            if (t !== n && n && n.ownerDocument && Lr(n.ownerDocument.documentElement, n)) {
                if (r !== null && zr(n)) {
                    if (t = r.start, e = r.end, e === void 0 && (e = t), `selectionStart` in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                    else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                        e = e.getSelection();
                        var i = n.textContent.length,
                            a = Math.min(r.start, i);
                        r = r.end === void 0 ? a : Math.min(r.end, i), !e.extend && a > r && (i = r, r = a, a = i), i = Ir(n, a);
                        var o = Ir(n, r);
                        i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
                    }
                }
                for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
                    element: e,
                    left: e.scrollLeft,
                    top: e.scrollTop
                });
                for (typeof n.focus == `function` && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
            }
        }
        var Vr = c && `documentMode` in document && 11 >= document.documentMode,
            Hr = null,
            Ur = null,
            Wr = null,
            Gr = !1;

        function Kr(e, t, n) {
            var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
            Gr || Hr == null || Hr !== ye(r) || (r = Hr, `selectionStart` in r && zr(r) ? r = {
                start: r.selectionStart,
                end: r.selectionEnd
            } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
                anchorNode: r.anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset
            }), Wr && Fr(Wr, r) || (Wr = r, r = vi(Ur, `onSelect`), 0 < r.length && (t = new In(`onSelect`, `select`, null, t, n), e.push({
                event: t,
                listeners: r
            }), t.target = Hr)))
        }

        function qr(e, t) {
            var n = {};
            return n[e.toLowerCase()] = t.toLowerCase(), n[`Webkit` + e] = `webkit` + t, n[`Moz` + e] = `moz` + t, n
        }
        var Jr = {
                animationend: qr(`Animation`, `AnimationEnd`),
                animationiteration: qr(`Animation`, `AnimationIteration`),
                animationstart: qr(`Animation`, `AnimationStart`),
                transitionend: qr(`Transition`, `TransitionEnd`)
            },
            Yr = {},
            Xr = {};
        c && (Xr = document.createElement(`div`).style, `AnimationEvent` in window || (delete Jr.animationend.animation, delete Jr.animationiteration.animation, delete Jr.animationstart.animation), `TransitionEvent` in window || delete Jr.transitionend.transition);

        function Zr(e) {
            if (Yr[e]) return Yr[e];
            if (!Jr[e]) return e;
            var t = Jr[e],
                n;
            for (n in t)
                if (t.hasOwnProperty(n) && n in Xr) return Yr[e] = t[n];
            return e
        }
        var Qr = Zr(`animationend`),
            $r = Zr(`animationiteration`),
            ei = Zr(`animationstart`),
            ti = Zr(`transitionend`),
            ni = new Map,
            ri = `abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);

        function ii(e, t) {
            ni.set(e, t), o(t, [e])
        }
        for (var ai = 0; ai < ri.length; ai++) {
            var oi = ri[ai];
            ii(oi.toLowerCase(), `on` + (oi[0].toUpperCase() + oi.slice(1)))
        }
        ii(Qr, `onAnimationEnd`), ii($r, `onAnimationIteration`), ii(ei, `onAnimationStart`), ii(`dblclick`, `onDoubleClick`), ii(`focusin`, `onFocus`), ii(`focusout`, `onBlur`), ii(ti, `onTransitionEnd`), s(`onMouseEnter`, [`mouseout`, `mouseover`]), s(`onMouseLeave`, [`mouseout`, `mouseover`]), s(`onPointerEnter`, [`pointerout`, `pointerover`]), s(`onPointerLeave`, [`pointerout`, `pointerover`]), o(`onChange`, `change click focusin focusout input keydown keyup selectionchange`.split(` `)), o(`onSelect`, `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)), o(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]), o(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)), o(`onCompositionStart`, `compositionstart focusout keydown keypress keyup mousedown`.split(` `)), o(`onCompositionUpdate`, `compositionupdate focusout keydown keypress keyup mousedown`.split(` `));
        var si = `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),
            ci = new Set(`cancel close invalid load scroll toggle`.split(` `).concat(si));

        function li(e, t, n) {
            var r = e.type || `unknown-event`;
            e.currentTarget = n, ft(r, t, void 0, e), e.currentTarget = null
        }

        function ui(e, t) {
            t = !!(t & 4);
            for (var n = 0; n < e.length; n++) {
                var r = e[n],
                    i = r.event;
                r = r.listeners;
                a: {
                    var a = void 0;
                    if (t)
                        for (var o = r.length - 1; 0 <= o; o--) {
                            var s = r[o],
                                c = s.instance,
                                l = s.currentTarget;
                            if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
                            li(i, s, l), a = c
                        } else
                            for (o = 0; o < r.length; o++) {
                                if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
                                li(i, s, l), a = c
                            }
                }
            }
            if (ct) throw e = lt, ct = !1, lt = null, e
        }

        function di(e, t) {
            var n = t[Vi];
            n === void 0 && (n = t[Vi] = new Set);
            var r = e + `__bubble`;
            n.has(r) || (hi(t, e, 2, !1), n.add(r))
        }

        function fi(e, t, n) {
            var r = 0;
            t && (r |= 4), hi(n, e, r, t)
        }
        var pi = `_reactListening` + Math.random().toString(36).slice(2);

        function mi(e) {
            if (!e[pi]) {
                e[pi] = !0, i.forEach(function(t) {
                    t !== `selectionchange` && (ci.has(t) || fi(t, !1, e), fi(t, !0, e))
                });
                var t = e.nodeType === 9 ? e : e.ownerDocument;
                t === null || t[pi] || (t[pi] = !0, fi(`selectionchange`, !1, t))
            }
        }

        function hi(e, t, n, r) {
            switch (En(t)) {
                case 1:
                    var i = xn;
                    break;
                case 4:
                    i = Sn;
                    break;
                default:
                    i = Cn
            }
            n = i.bind(null, t, n, e), i = void 0, !rt || t !== `touchstart` && t !== `touchmove` && t !== `wheel` || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
                capture: !0,
                passive: i
            }) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, {
                passive: i
            })
        }

        function gi(e, t, n, r, i) {
            var a = r;
            if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
                if (r === null) return;
                var o = r.tag;
                if (o === 3 || o === 4) {
                    var s = r.stateNode.containerInfo;
                    if (s === i || s.nodeType === 8 && s.parentNode === i) break;
                    if (o === 4)
                        for (o = r.return; o !== null;) {
                            var c = o.tag;
                            if ((c === 3 || c === 4) && (c = o.stateNode.containerInfo, c === i || c.nodeType === 8 && c.parentNode === i)) return;
                            o = o.return
                        }
                    for (; s !== null;) {
                        if (o = Wi(s), o === null) return;
                        if (c = o.tag, c === 5 || c === 6) {
                            r = a = o;
                            continue a
                        }
                        s = s.parentNode
                    }
                }
                r = r.return
            }
            tt(function() {
                var r = a,
                    i = Ge(n),
                    o = [];
                a: {
                    var s = ni.get(e);
                    if (s !== void 0) {
                        var c = In,
                            l = e;
                        switch (e) {
                            case `keypress`:
                                if (jn(n) === 0) break a;
                            case `keydown`:
                            case `keyup`:
                                c = er;
                                break;
                            case `focusin`:
                                l = `focus`, c = Gn;
                                break;
                            case `focusout`:
                                l = `blur`, c = Gn;
                                break;
                            case `beforeblur`:
                            case `afterblur`:
                                c = Gn;
                                break;
                            case `click`:
                                if (n.button === 2) break a;
                            case `auxclick`:
                            case `dblclick`:
                            case `mousedown`:
                            case `mousemove`:
                            case `mouseup`:
                            case `mouseout`:
                            case `mouseover`:
                            case `contextmenu`:
                                c = Un;
                                break;
                            case `drag`:
                            case `dragend`:
                            case `dragenter`:
                            case `dragexit`:
                            case `dragleave`:
                            case `dragover`:
                            case `dragstart`:
                            case `drop`:
                                c = Wn;
                                break;
                            case `touchcancel`:
                            case `touchend`:
                            case `touchmove`:
                            case `touchstart`:
                                c = nr;
                                break;
                            case Qr:
                            case $r:
                            case ei:
                                c = Kn;
                                break;
                            case ti:
                                c = rr;
                                break;
                            case `scroll`:
                                c = Rn;
                                break;
                            case `wheel`:
                                c = ir;
                                break;
                            case `copy`:
                            case `cut`:
                            case `paste`:
                                c = qn;
                                break;
                            case `gotpointercapture`:
                            case `lostpointercapture`:
                            case `pointercancel`:
                            case `pointerdown`:
                            case `pointermove`:
                            case `pointerout`:
                            case `pointerover`:
                            case `pointerup`:
                                c = tr
                        }
                        var u = !!(t & 4),
                            d = !u && e === `scroll`,
                            f = u ? s === null ? null : s + `Capture` : s;
                        u = [];
                        for (var p = r, m; p !== null;) {
                            m = p;
                            var h = m.stateNode;
                            if (m.tag === 5 && h !== null && (m = h, f !== null && (h = nt(p, f), h != null && u.push(_i(p, h, m)))), d) break;
                            p = p.return
                        }
                        0 < u.length && (s = new c(s, l, null, n, i), o.push({
                            event: s,
                            listeners: u
                        }))
                    }
                }
                if (!(t & 7)) {
                    a: {
                        if (s = e === `mouseover` || e === `pointerover`, c = e === `mouseout` || e === `pointerout`, s && n !== We && (l = n.relatedTarget || n.fromElement) && (Wi(l) || l[Bi])) break a;
                        if ((c || s) && (s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? Wi(l) : null, l !== null && (d = pt(l), l !== d || l.tag !== 5 && l.tag !== 6) && (l = null)) : (c = null, l = r), c !== l)) {
                            if (u = Un, h = `onMouseLeave`, f = `onMouseEnter`, p = `mouse`, (e === `pointerout` || e === `pointerover`) && (u = tr, h = `onPointerLeave`, f = `onPointerEnter`, p = `pointer`), d = c == null ? s : Ki(c), m = l == null ? s : Ki(l), s = new u(h, p + `leave`, c, n, i), s.target = d, s.relatedTarget = m, h = null, Wi(i) === r && (u = new u(f, p + `enter`, l, n, i), u.target = m, u.relatedTarget = d, h = u), d = h, c && l) b: {
                                for (u = c, f = l, p = 0, m = u; m; m = yi(m)) p++;
                                for (m = 0, h = f; h; h = yi(h)) m++;
                                for (; 0 < p - m;) u = yi(u),
                                p--;
                                for (; 0 < m - p;) f = yi(f),
                                m--;
                                for (; p--;) {
                                    if (u === f || f !== null && u === f.alternate) break b;
                                    u = yi(u), f = yi(f)
                                }
                                u = null
                            }
                            else u = null;
                            c !== null && bi(o, s, c, u, !1), l !== null && d !== null && bi(o, d, l, u, !0)
                        }
                    }
                    a: {
                        if (s = r ? Ki(r) : window, c = s.nodeName && s.nodeName.toLowerCase(), c === `select` || c === `input` && s.type === `file`) var g = Cr;
                        else if (vr(s))
                            if (wr) g = Mr;
                            else {
                                g = Ar;
                                var _ = kr
                            }
                        else(c = s.nodeName) && c.toLowerCase() === `input` && (s.type === `checkbox` || s.type === `radio`) && (g = jr);
                        if (g &&= g(e, r)) {
                            F(o, g, n, i);
                            break a
                        }
                        _ && _(e, s, r),
                        e === `focusout` && (_ = s._wrapperState) && _.controlled && s.type === `number` && Te(s, `number`, s.value)
                    }
                    switch (_ = r ? Ki(r) : window, e) {
                        case `focusin`:
                            (vr(_) || _.contentEditable === `true`) && (Hr = _, Ur = r, Wr = null);
                            break;
                        case `focusout`:
                            Wr = Ur = Hr = null;
                            break;
                        case `mousedown`:
                            Gr = !0;
                            break;
                        case `contextmenu`:
                        case `mouseup`:
                        case `dragend`:
                            Gr = !1, Kr(o, n, i);
                            break;
                        case `selectionchange`:
                            if (Vr) break;
                        case `keydown`:
                        case `keyup`:
                            Kr(o, n, i)
                    }
                    var v;
                    if (or) b: {
                        switch (e) {
                            case `compositionstart`:
                                var y = `onCompositionStart`;
                                break b;
                            case `compositionend`:
                                y = `onCompositionEnd`;
                                break b;
                            case `compositionupdate`:
                                y = `onCompositionUpdate`;
                                break b
                        }
                        y = void 0
                    }
                    else mr ? fr(e, n) && (y = `onCompositionEnd`) : e === `keydown` && n.keyCode === 229 && (y = `onCompositionStart`);y && (lr && n.locale !== `ko` && (mr || y !== `onCompositionStart` ? y === `onCompositionEnd` && mr && (v = An()) : (Dn = i, On = `value` in Dn ? Dn.value : Dn.textContent, mr = !0)), _ = vi(r, y), 0 < _.length && (y = new Jn(y, e, null, n, i), o.push({
                        event: y,
                        listeners: _
                    }), v ? y.data = v : (v = pr(n), v !== null && (y.data = v)))),
                    (v = cr ? hr(e, n) : gr(e, n)) && (r = vi(r, `onBeforeInput`), 0 < r.length && (i = new Jn(`onBeforeInput`, `beforeinput`, null, n, i), o.push({
                        event: i,
                        listeners: r
                    }), i.data = v))
                }
                ui(o, t)
            })
        }

        function _i(e, t, n) {
            return {
                instance: e,
                listener: t,
                currentTarget: n
            }
        }

        function vi(e, t) {
            for (var n = t + `Capture`, r = []; e !== null;) {
                var i = e,
                    a = i.stateNode;
                i.tag === 5 && a !== null && (i = a, a = nt(e, n), a != null && r.unshift(_i(e, a, i)), a = nt(e, t), a != null && r.push(_i(e, a, i))), e = e.return
            }
            return r
        }

        function yi(e) {
            if (e === null) return null;
            do e = e.return; while (e && e.tag !== 5);
            return e || null
        }

        function bi(e, t, n, r, i) {
            for (var a = t._reactName, o = []; n !== null && n !== r;) {
                var s = n,
                    c = s.alternate,
                    l = s.stateNode;
                if (c !== null && c === r) break;
                s.tag === 5 && l !== null && (s = l, i ? (c = nt(n, a), c != null && o.unshift(_i(n, c, s))) : i || (c = nt(n, a), c != null && o.push(_i(n, c, s)))), n = n.return
            }
            o.length !== 0 && e.push({
                event: t,
                listeners: o
            })
        }
        var xi = /\r\n?/g,
            Si = /\u0000|\uFFFD/g;

        function Ci(e) {
            return (typeof e == `string` ? e : `` + e).replace(xi, `
`).replace(Si, ``)
        }

        function wi(e, t, n) {
            if (t = Ci(t), Ci(e) !== t && n) throw Error(r(425))
        }

        function Ti() {}
        var Ei = null,
            Di = null;

        function Oi(e, t) {
            return e === `textarea` || e === `noscript` || typeof t.children == `string` || typeof t.children == `number` || typeof t.dangerouslySetInnerHTML == `object` && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
        }
        var ki = typeof setTimeout == `function` ? setTimeout : void 0,
            Ai = typeof clearTimeout == `function` ? clearTimeout : void 0,
            ji = typeof Promise == `function` ? Promise : void 0,
            Mi = typeof queueMicrotask == `function` ? queueMicrotask : ji === void 0 ? ki : function(e) {
                return ji.resolve(null).then(e).catch(Ni)
            };

        function Ni(e) {
            setTimeout(function() {
                throw e
            })
        }

        function Pi(e, t) {
            var n = t,
                r = 0;
            do {
                var i = n.nextSibling;
                if (e.removeChild(n), i && i.nodeType === 8)
                    if (n = i.data, n === `/$`) {
                        if (r === 0) {
                            e.removeChild(i), vn(t);
                            return
                        }
                        r--
                    } else n !== `$` && n !== `$?` && n !== `$!` || r++;
                n = i
            } while (n);
            vn(t)
        }

        function Fi(e) {
            for (; e != null; e = e.nextSibling) {
                var t = e.nodeType;
                if (t === 1 || t === 3) break;
                if (t === 8) {
                    if (t = e.data, t === `$` || t === `$!` || t === `$?`) break;
                    if (t === `/$`) return null
                }
            }
            return e
        }

        function Ii(e) {
            e = e.previousSibling;
            for (var t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === `$` || n === `$!` || n === `$?`) {
                        if (t === 0) return e;
                        t--
                    } else n === `/$` && t++
                }
                e = e.previousSibling
            }
            return null
        }
        var Li = Math.random().toString(36).slice(2),
            Ri = `__reactFiber$` + Li,
            zi = `__reactProps$` + Li,
            Bi = `__reactContainer$` + Li,
            Vi = `__reactEvents$` + Li,
            Hi = `__reactListeners$` + Li,
            Ui = `__reactHandles$` + Li;

        function Wi(e) {
            var t = e[Ri];
            if (t) return t;
            for (var n = e.parentNode; n;) {
                if (t = n[Bi] || n[Ri]) {
                    if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                        for (e = Ii(e); e !== null;) {
                            if (n = e[Ri]) return n;
                            e = Ii(e)
                        }
                    return t
                }
                e = n, n = e.parentNode
            }
            return null
        }

        function Gi(e) {
            return e = e[Ri] || e[Bi], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
        }

        function Ki(e) {
            if (e.tag === 5 || e.tag === 6) return e.stateNode;
            throw Error(r(33))
        }

        function qi(e) {
            return e[zi] || null
        }
        var Ji = [],
            Yi = -1;

        function Xi(e) {
            return {
                current: e
            }
        }

        function R(e) {
            0 > Yi || (e.current = Ji[Yi], Ji[Yi] = null, Yi--)
        }

        function z(e, t) {
            Yi++, Ji[Yi] = e.current, e.current = t
        }
        var Zi = {},
            Qi = Xi(Zi),
            $i = Xi(!1),
            ea = Zi;

        function ta(e, t) {
            var n = e.type.contextTypes;
            if (!n) return Zi;
            var r = e.stateNode;
            if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
            var i = {},
                a;
            for (a in n) i[a] = t[a];
            return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
        }

        function na(e) {
            return e = e.childContextTypes, e != null
        }

        function ra() {
            R($i), R(Qi)
        }

        function ia(e, t, n) {
            if (Qi.current !== Zi) throw Error(r(168));
            z(Qi, t), z($i, n)
        }

        function aa(e, t, n) {
            var i = e.stateNode;
            if (t = t.childContextTypes, typeof i.getChildContext != `function`) return n;
            for (var a in i = i.getChildContext(), i)
                if (!(a in t)) throw Error(r(108, pe(e) || `Unknown`, a));
            return M({}, n, i)
        }

        function oa(e) {
            return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Zi, ea = Qi.current, z(Qi, e), z($i, $i.current), !0
        }

        function sa(e, t, n) {
            var i = e.stateNode;
            if (!i) throw Error(r(169));
            n ? (e = aa(e, t, ea), i.__reactInternalMemoizedMergedChildContext = e, R($i), R(Qi), z(Qi, e)) : R($i), z($i, n)
        }
        var ca = null,
            la = !1,
            ua = !1;

        function da(e) {
            ca === null ? ca = [e] : ca.push(e)
        }

        function fa(e) {
            la = !0, da(e)
        }

        function pa() {
            if (!ua && ca !== null) {
                ua = !0;
                var e = 0,
                    t = N;
                try {
                    var n = ca;
                    for (N = 1; e < n.length; e++) {
                        var r = n[e];
                        do r = r(!0); while (r !== null)
                    }
                    ca = null, la = !1
                } catch (t) {
                    throw ca !== null && (ca = ca.slice(e + 1)), yt(Tt, pa), t
                } finally {
                    N = t, ua = !1
                }
            }
            return null
        }
        var ma = [],
            ha = 0,
            ga = null,
            _a = 0,
            va = [],
            ya = 0,
            ba = null,
            xa = 1,
            Sa = ``;

        function Ca(e, t) {
            ma[ha++] = _a, ma[ha++] = ga, ga = e, _a = t
        }

        function wa(e, t, n) {
            va[ya++] = xa, va[ya++] = Sa, va[ya++] = ba, ba = e;
            var r = xa;
            e = Sa;
            var i = 32 - Nt(r) - 1;
            r &= ~(1 << i), n += 1;
            var a = 32 - Nt(t) + i;
            if (30 < a) {
                var o = i - i % 5;
                a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, xa = 1 << 32 - Nt(t) + i | n << i | r, Sa = a + e
            } else xa = 1 << a | n << i | r, Sa = e
        }

        function Ta(e) {
            e.return !== null && (Ca(e, 1), wa(e, 1, 0))
        }

        function Ea(e) {
            for (; e === ga;) ga = ma[--ha], ma[ha] = null, _a = ma[--ha], ma[ha] = null;
            for (; e === ba;) ba = va[--ya], va[ya] = null, Sa = va[--ya], va[ya] = null, xa = va[--ya], va[ya] = null
        }
        var Da = null,
            Oa = null,
            ka = !1,
            Aa = null;

        function ja(e, t) {
            var n = Ql(5, null, null, 0);
            n.elementType = `DELETED`, n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
        }

        function Ma(e, t) {
            switch (e.tag) {
                case 5:
                    var n = e.type;
                    return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null && (e.stateNode = t, Da = e, Oa = Fi(t.firstChild), !0);
                case 6:
                    return t = e.pendingProps === `` || t.nodeType !== 3 ? null : t, t !== null && (e.stateNode = t, Da = e, Oa = null, !0);
                case 13:
                    return t = t.nodeType === 8 ? t : null, t !== null && (n = ba === null ? null : {
                        id: xa,
                        overflow: Sa
                    }, e.memoizedState = {
                        dehydrated: t,
                        treeContext: n,
                        retryLane: 1073741824
                    }, n = Ql(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Da = e, Oa = null, !0);
                default:
                    return !1
            }
        }

        function Na(e) {
            return !!(e.mode & 1) && !(e.flags & 128)
        }

        function Pa(e) {
            if (ka) {
                var t = Oa;
                if (t) {
                    var n = t;
                    if (!Ma(e, t)) {
                        if (Na(e)) throw Error(r(418));
                        t = Fi(n.nextSibling);
                        var i = Da;
                        t && Ma(e, t) ? ja(i, n) : (e.flags = e.flags & -4097 | 2, ka = !1, Da = e)
                    }
                } else {
                    if (Na(e)) throw Error(r(418));
                    e.flags = e.flags & -4097 | 2, ka = !1, Da = e
                }
            }
        }

        function Fa(e) {
            for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
            Da = e
        }

        function Ia(e) {
            if (e !== Da) return !1;
            if (!ka) return Fa(e), ka = !0, !1;
            var t;
            if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== `head` && t !== `body` && !Oi(e.type, e.memoizedProps)), t &&= Oa) {
                if (Na(e)) throw La(), Error(r(418));
                for (; t;) ja(e, t), t = Fi(t.nextSibling)
            }
            if (Fa(e), e.tag === 13) {
                if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(r(317));
                a: {
                    for (e = e.nextSibling, t = 0; e;) {
                        if (e.nodeType === 8) {
                            var n = e.data;
                            if (n === `/$`) {
                                if (t === 0) {
                                    Oa = Fi(e.nextSibling);
                                    break a
                                }
                                t--
                            } else n !== `$` && n !== `$!` && n !== `$?` || t++
                        }
                        e = e.nextSibling
                    }
                    Oa = null
                }
            } else Oa = Da ? Fi(e.stateNode.nextSibling) : null;
            return !0
        }

        function La() {
            for (var e = Oa; e;) e = Fi(e.nextSibling)
        }

        function Ra() {
            Oa = Da = null, ka = !1
        }

        function za(e) {
            Aa === null ? Aa = [e] : Aa.push(e)
        }
        var Ba = C.ReactCurrentBatchConfig;

        function Va(e, t, n) {
            if (e = n.ref, e !== null && typeof e != `function` && typeof e != `object`) {
                if (n._owner) {
                    if (n = n._owner, n) {
                        if (n.tag !== 1) throw Error(r(309));
                        var i = n.stateNode
                    }
                    if (!i) throw Error(r(147, e));
                    var a = i,
                        o = `` + e;
                    return t !== null && t.ref !== null && typeof t.ref == `function` && t.ref._stringRef === o ? t.ref : (t = function(e) {
                        var t = a.refs;
                        e === null ? delete t[o] : t[o] = e
                    }, t._stringRef = o, t)
                }
                if (typeof e != `string`) throw Error(r(284));
                if (!n._owner) throw Error(r(290, e))
            }
            return e
        }

        function Ha(e, t) {
            throw e = Object.prototype.toString.call(t), Error(r(31, e === `[object Object]` ? `object with keys {` + Object.keys(t).join(`, `) + `}` : e))
        }

        function Ua(e) {
            var t = e._init;
            return t(e._payload)
        }

        function Wa(e) {
            function t(t, n) {
                if (e) {
                    var r = t.deletions;
                    r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n)
                }
            }

            function n(n, r) {
                if (!e) return null;
                for (; r !== null;) t(n, r), r = r.sibling;
                return null
            }

            function i(e, t) {
                for (e = new Map; t !== null;) t.key === null ? e.set(t.index, t) : e.set(t.key, t), t = t.sibling;
                return e
            }

            function a(e, t) {
                return e = tu(e, t), e.index = 0, e.sibling = null, e
            }

            function o(t, n, r) {
                return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 2, n) : (r = r.index, r < n ? (t.flags |= 2, n) : r)) : (t.flags |= 1048576, n)
            }

            function s(t) {
                return e && t.alternate === null && (t.flags |= 2), t
            }

            function c(e, t, n, r) {
                return t === null || t.tag !== 6 ? (t = au(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t)
            }

            function l(e, t, n, r) {
                var i = n.type;
                return i === ee ? d(e, t, n.props.children, r, n.key) : t !== null && (t.elementType === i || typeof i == `object` && i && i.$$typeof === k && Ua(i) === t.type) ? (r = a(t, n.props), r.ref = Va(e, t, n), r.return = e, r) : (r = nu(n.type, n.key, n.props, null, e.mode, r), r.ref = Va(e, t, n), r.return = e, r)
            }

            function u(e, t, n, r) {
                return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = ou(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t)
            }

            function d(e, t, n, r, i) {
                return t === null || t.tag !== 7 ? (t = ru(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t)
            }

            function f(e, t, n) {
                if (typeof t == `string` && t !== `` || typeof t == `number`) return t = au(`` + t, e.mode, n), t.return = e, t;
                if (typeof t == `object` && t) {
                    switch (t.$$typeof) {
                        case w:
                            return n = nu(t.type, t.key, t.props, null, e.mode, n), n.ref = Va(e, null, t), n.return = e, n;
                        case T:
                            return t = ou(t, e.mode, n), t.return = e, t;
                        case k:
                            var r = t._init;
                            return f(e, r(t._payload), n)
                    }
                    if (Ee(t) || oe(t)) return t = ru(t, e.mode, n, null), t.return = e, t;
                    Ha(e, t)
                }
                return null
            }

            function p(e, t, n, r) {
                var i = t === null ? null : t.key;
                if (typeof n == `string` && n !== `` || typeof n == `number`) return i === null ? c(e, t, `` + n, r) : null;
                if (typeof n == `object` && n) {
                    switch (n.$$typeof) {
                        case w:
                            return n.key === i ? l(e, t, n, r) : null;
                        case T:
                            return n.key === i ? u(e, t, n, r) : null;
                        case k:
                            return i = n._init, p(e, t, i(n._payload), r)
                    }
                    if (Ee(n) || oe(n)) return i === null ? d(e, t, n, r, null) : null;
                    Ha(e, n)
                }
                return null
            }

            function m(e, t, n, r, i) {
                if (typeof r == `string` && r !== `` || typeof r == `number`) return e = e.get(n) || null, c(t, e, `` + r, i);
                if (typeof r == `object` && r) {
                    switch (r.$$typeof) {
                        case w:
                            return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
                        case T:
                            return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
                        case k:
                            var a = r._init;
                            return m(e, t, n, a(r._payload), i)
                    }
                    if (Ee(r) || oe(r)) return e = e.get(n) || null, d(t, e, r, i, null);
                    Ha(t, r)
                }
                return null
            }

            function h(r, a, s, c) {
                for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
                    d.index > h ? (g = d, d = null) : g = d.sibling;
                    var _ = p(r, d, s[h], c);
                    if (_ === null) {
                        d === null && (d = g);
                        break
                    }
                    e && d && _.alternate === null && t(r, d), a = o(_, a, h), u === null ? l = _ : u.sibling = _, u = _, d = g
                }
                if (h === s.length) return n(r, d), ka && Ca(r, h), l;
                if (d === null) {
                    for (; h < s.length; h++) d = f(r, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
                    return ka && Ca(r, h), l
                }
                for (d = i(r, d); h < s.length; h++) g = m(d, r, h, s[h], c), g !== null && (e && g.alternate !== null && d.delete(g.key === null ? h : g.key), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
                return e && d.forEach(function(e) {
                    return t(r, e)
                }), ka && Ca(r, h), l
            }

            function g(a, s, c, l) {
                var u = oe(c);
                if (typeof u != `function`) throw Error(r(150));
                if (c = u.call(c), c == null) throw Error(r(151));
                for (var d = u = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
                    h.index > g ? (_ = h, h = null) : _ = h.sibling;
                    var y = p(a, h, v.value, l);
                    if (y === null) {
                        h === null && (h = _);
                        break
                    }
                    e && h && y.alternate === null && t(a, h), s = o(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _
                }
                if (v.done) return n(a, h), ka && Ca(a, g), u;
                if (h === null) {
                    for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
                    return ka && Ca(a, g), u
                }
                for (h = i(a, h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && v.alternate !== null && h.delete(v.key === null ? g : v.key), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
                return e && h.forEach(function(e) {
                    return t(a, e)
                }), ka && Ca(a, g), u
            }

            function _(e, r, i, o) {
                if (typeof i == `object` && i && i.type === ee && i.key === null && (i = i.props.children), typeof i == `object` && i) {
                    switch (i.$$typeof) {
                        case w:
                            a: {
                                for (var c = i.key, l = r; l !== null;) {
                                    if (l.key === c) {
                                        if (c = i.type, c === ee) {
                                            if (l.tag === 7) {
                                                n(e, l.sibling), r = a(l, i.props.children), r.return = e, e = r;
                                                break a
                                            }
                                        } else if (l.elementType === c || typeof c == `object` && c && c.$$typeof === k && Ua(c) === l.type) {
                                            n(e, l.sibling), r = a(l, i.props), r.ref = Va(e, l, i), r.return = e, e = r;
                                            break a
                                        }
                                        n(e, l);
                                        break
                                    }
                                    t(e, l), l = l.sibling
                                }
                                i.type === ee ? (r = ru(i.props.children, e.mode, o, i.key), r.return = e, e = r) : (o = nu(i.type, i.key, i.props, null, e.mode, o), o.ref = Va(e, r, i), o.return = e, e = o)
                            }
                            return s(e);
                        case T:
                            a: {
                                for (l = i.key; r !== null;) {
                                    if (r.key === l)
                                        if (r.tag === 4 && r.stateNode.containerInfo === i.containerInfo && r.stateNode.implementation === i.implementation) {
                                            n(e, r.sibling), r = a(r, i.children || []), r.return = e, e = r;
                                            break a
                                        } else {
                                            n(e, r);
                                            break
                                        }
                                    t(e, r), r = r.sibling
                                }
                                r = ou(i, e.mode, o),
                                r.return = e,
                                e = r
                            }
                            return s(e);
                        case k:
                            return l = i._init, _(e, r, l(i._payload), o)
                    }
                    if (Ee(i)) return h(e, r, i, o);
                    if (oe(i)) return g(e, r, i, o);
                    Ha(e, i)
                }
                return typeof i == `string` && i !== `` || typeof i == `number` ? (i = `` + i, r !== null && r.tag === 6 ? (n(e, r.sibling), r = a(r, i), r.return = e, e = r) : (n(e, r), r = au(i, e.mode, o), r.return = e, e = r), s(e)) : n(e, r)
            }
            return _
        }
        var Ga = Wa(!0),
            Ka = Wa(!1),
            qa = Xi(null),
            Ja = null,
            Ya = null,
            Xa = null;

        function Za() {
            Xa = Ya = Ja = null
        }

        function Qa(e) {
            var t = qa.current;
            R(qa), e._currentValue = t
        }

        function $a(e, t, n) {
            for (; e !== null;) {
                var r = e.alternate;
                if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
                e = e.return
            }
        }

        function eo(e, t) {
            Ja = e, Xa = Ya = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Hs = !0), e.firstContext = null)
        }

        function to(e) {
            var t = e._currentValue;
            if (Xa !== e)
                if (e = {
                        context: e,
                        memoizedValue: t,
                        next: null
                    }, Ya === null) {
                    if (Ja === null) throw Error(r(308));
                    Ya = e, Ja.dependencies = {
                        lanes: 0,
                        firstContext: e
                    }
                } else Ya = Ya.next = e;
            return t
        }
        var no = null;

        function ro(e) {
            no === null ? no = [e] : no.push(e)
        }

        function io(e, t, n, r) {
            var i = t.interleaved;
            return i === null ? (n.next = n, ro(t)) : (n.next = i.next, i.next = n), t.interleaved = n, ao(e, r)
        }

        function ao(e, t) {
            e.lanes |= t;
            var n = e.alternate;
            for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
            return n.tag === 3 ? n.stateNode : null
        }
        var oo = !1;

        function so(e) {
            e.updateQueue = {
                baseState: e.memoizedState,
                firstBaseUpdate: null,
                lastBaseUpdate: null,
                shared: {
                    pending: null,
                    interleaved: null,
                    lanes: 0
                },
                effects: null
            }
        }

        function co(e, t) {
            e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects
            })
        }

        function lo(e, t) {
            return {
                eventTime: e,
                lane: t,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            }
        }

        function uo(e, t, n) {
            var r = e.updateQueue;
            if (r === null) return null;
            if (r = r.shared, G & 2) {
                var i = r.pending;
                return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, ao(e, n)
            }
            return i = r.interleaved, i === null ? (t.next = t, ro(r)) : (t.next = i.next, i.next = t), r.interleaved = t, ao(e, n)
        }

        function fo(e, t, n) {
            if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194240)) {
                var r = t.lanes;
                r &= e.pendingLanes, n |= r, t.lanes = n, Jt(e, n)
            }
        }

        function po(e, t) {
            var n = e.updateQueue,
                r = e.alternate;
            if (r !== null && (r = r.updateQueue, n === r)) {
                var i = null,
                    a = null;
                if (n = n.firstBaseUpdate, n !== null) {
                    do {
                        var o = {
                            eventTime: n.eventTime,
                            lane: n.lane,
                            tag: n.tag,
                            payload: n.payload,
                            callback: n.callback,
                            next: null
                        };
                        a === null ? i = a = o : a = a.next = o, n = n.next
                    } while (n !== null);
                    a === null ? i = a = t : a = a.next = t
                } else i = a = t;
                n = {
                    baseState: r.baseState,
                    firstBaseUpdate: i,
                    lastBaseUpdate: a,
                    shared: r.shared,
                    effects: r.effects
                }, e.updateQueue = n;
                return
            }
            e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
        }

        function mo(e, t, n, r) {
            var i = e.updateQueue;
            oo = !1;
            var a = i.firstBaseUpdate,
                o = i.lastBaseUpdate,
                s = i.shared.pending;
            if (s !== null) {
                i.shared.pending = null;
                var c = s,
                    l = c.next;
                c.next = null, o === null ? a = l : o.next = l, o = c;
                var u = e.alternate;
                u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c))
            }
            if (a !== null) {
                var d = i.baseState;
                o = 0, u = l = c = null, s = a;
                do {
                    var f = s.lane,
                        p = s.eventTime;
                    if ((r & f) === f) {
                        u !== null && (u = u.next = {
                            eventTime: p,
                            lane: 0,
                            tag: s.tag,
                            payload: s.payload,
                            callback: s.callback,
                            next: null
                        });
                        a: {
                            var m = e,
                                h = s;
                            switch (f = t, p = n, h.tag) {
                                case 1:
                                    if (m = h.payload, typeof m == `function`) {
                                        d = m.call(p, d, f);
                                        break a
                                    }
                                    d = m;
                                    break a;
                                case 3:
                                    m.flags = m.flags & -65537 | 128;
                                case 0:
                                    if (m = h.payload, f = typeof m == `function` ? m.call(p, d, f) : m, f == null) break a;
                                    d = M({}, d, f);
                                    break a;
                                case 2:
                                    oo = !0
                            }
                        }
                        s.callback !== null && s.lane !== 0 && (e.flags |= 64, f = i.effects, f === null ? i.effects = [s] : f.push(s))
                    } else p = {
                        eventTime: p,
                        lane: f,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null
                    }, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
                    if (s = s.next, s === null) {
                        if (s = i.shared.pending, s === null) break;
                        f = s, s = f.next, f.next = null, i.lastBaseUpdate = f, i.shared.pending = null
                    }
                } while (1);
                if (u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, t = i.shared.interleaved, t !== null) {
                    i = t;
                    do o |= i.lane, i = i.next; while (i !== t)
                } else a === null && (i.shared.lanes = 0);
                nl |= o, e.lanes = o, e.memoizedState = d
            }
        }

        function ho(e, t, n) {
            if (e = t.effects, t.effects = null, e !== null)
                for (t = 0; t < e.length; t++) {
                    var i = e[t],
                        a = i.callback;
                    if (a !== null) {
                        if (i.callback = null, i = n, typeof a != `function`) throw Error(r(191, a));
                        a.call(i)
                    }
                }
        }
        var go = {},
            _o = Xi(go),
            vo = Xi(go),
            yo = Xi(go);

        function bo(e) {
            if (e === go) throw Error(r(174));
            return e
        }

        function xo(e, t) {
            switch (z(yo, t), z(vo, e), z(_o, go), e = t.nodeType, e) {
                case 9:
                case 11:
                    t = (t = t.documentElement) ? t.namespaceURI : Ne(null, ``);
                    break;
                default:
                    e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ne(t, e)
            }
            R(_o), z(_o, t)
        }

        function So() {
            R(_o), R(vo), R(yo)
        }

        function Co(e) {
            bo(yo.current);
            var t = bo(_o.current),
                n = Ne(t, e.type);
            t !== n && (z(vo, e), z(_o, n))
        }

        function wo(e) {
            vo.current === e && (R(_o), R(vo))
        }
        var To = Xi(0);

        function Eo(e) {
            for (var t = e; t !== null;) {
                if (t.tag === 13) {
                    var n = t.memoizedState;
                    if (n !== null && (n = n.dehydrated, n === null || n.data === `$?` || n.data === `$!`)) return t
                } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                    if (t.flags & 128) return t
                } else if (t.child !== null) {
                    t.child.return = t, t = t.child;
                    continue
                }
                if (t === e) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) return null;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
            return null
        }
        var Do = [];

        function Oo() {
            for (var e = 0; e < Do.length; e++) Do[e]._workInProgressVersionPrimary = null;
            Do.length = 0
        }
        var ko = C.ReactCurrentDispatcher,
            Ao = C.ReactCurrentBatchConfig,
            jo = 0,
            Mo = null,
            No = null,
            Po = null,
            Fo = !1,
            Io = !1,
            Lo = 0,
            Ro = 0;

        function zo() {
            throw Error(r(321))
        }

        function Bo(e, t) {
            if (t === null) return !1;
            for (var n = 0; n < t.length && n < e.length; n++)
                if (!Pr(e[n], t[n])) return !1;
            return !0
        }

        function Vo(e, t, n, i, a, o) {
            if (jo = o, Mo = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ko.current = e === null || e.memoizedState === null ? Cs : ws, e = n(i, a), Io) {
                o = 0;
                do {
                    if (Io = !1, Lo = 0, 25 <= o) throw Error(r(301));
                    o += 1, Po = No = null, t.updateQueue = null, ko.current = Ts, e = n(i, a)
                } while (Io)
            }
            if (ko.current = Ss, t = No !== null && No.next !== null, jo = 0, Po = No = Mo = null, Fo = !1, t) throw Error(r(300));
            return e
        }

        function Ho() {
            var e = Lo !== 0;
            return Lo = 0, e
        }

        function Uo() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return Po === null ? Mo.memoizedState = Po = e : Po = Po.next = e, Po
        }

        function Wo() {
            if (No === null) {
                var e = Mo.alternate;
                e = e === null ? null : e.memoizedState
            } else e = No.next;
            var t = Po === null ? Mo.memoizedState : Po.next;
            if (t !== null) Po = t, No = e;
            else {
                if (e === null) throw Error(r(310));
                No = e, e = {
                    memoizedState: No.memoizedState,
                    baseState: No.baseState,
                    baseQueue: No.baseQueue,
                    queue: No.queue,
                    next: null
                }, Po === null ? Mo.memoizedState = Po = e : Po = Po.next = e
            }
            return Po
        }

        function Go(e, t) {
            return typeof t == `function` ? t(e) : t
        }

        function Ko(e) {
            var t = Wo(),
                n = t.queue;
            if (n === null) throw Error(r(311));
            n.lastRenderedReducer = e;
            var i = No,
                a = i.baseQueue,
                o = n.pending;
            if (o !== null) {
                if (a !== null) {
                    var s = a.next;
                    a.next = o.next, o.next = s
                }
                i.baseQueue = a = o, n.pending = null
            }
            if (a !== null) {
                o = a.next, i = i.baseState;
                var c = s = null,
                    l = null,
                    u = o;
                do {
                    var d = u.lane;
                    if ((jo & d) === d) l !== null && (l = l.next = {
                        lane: 0,
                        action: u.action,
                        hasEagerState: u.hasEagerState,
                        eagerState: u.eagerState,
                        next: null
                    }), i = u.hasEagerState ? u.eagerState : e(i, u.action);
                    else {
                        var f = {
                            lane: d,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null
                        };
                        l === null ? (c = l = f, s = i) : l = l.next = f, Mo.lanes |= d, nl |= d
                    }
                    u = u.next
                } while (u !== null && u !== o);
                l === null ? s = i : l.next = c, Pr(i, t.memoizedState) || (Hs = !0), t.memoizedState = i, t.baseState = s, t.baseQueue = l, n.lastRenderedState = i
            }
            if (e = n.interleaved, e !== null) {
                a = e;
                do o = a.lane, Mo.lanes |= o, nl |= o, a = a.next; while (a !== e)
            } else a === null && (n.lanes = 0);
            return [t.memoizedState, n.dispatch]
        }

        function qo(e) {
            var t = Wo(),
                n = t.queue;
            if (n === null) throw Error(r(311));
            n.lastRenderedReducer = e;
            var i = n.dispatch,
                a = n.pending,
                o = t.memoizedState;
            if (a !== null) {
                n.pending = null;
                var s = a = a.next;
                do o = e(o, s.action), s = s.next; while (s !== a);
                Pr(o, t.memoizedState) || (Hs = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
            }
            return [o, i]
        }

        function Jo() {}

        function Yo(e, t) {
            var n = Mo,
                i = Wo(),
                a = t(),
                o = !Pr(i.memoizedState, a);
            if (o && (i.memoizedState = a, Hs = !0), i = i.queue, ss(Qo.bind(null, n, i, e), [e]), i.getSnapshot !== t || o || Po !== null && Po.memoizedState.tag & 1) {
                if (n.flags |= 2048, ns(9, Zo.bind(null, n, i, a, t), void 0, null), Yc === null) throw Error(r(349));
                jo & 30 || Xo(n, t, a)
            }
            return a
        }

        function Xo(e, t, n) {
            e.flags |= 16384, e = {
                getSnapshot: t,
                value: n
            }, t = Mo.updateQueue, t === null ? (t = {
                lastEffect: null,
                stores: null
            }, Mo.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
        }

        function Zo(e, t, n, r) {
            t.value = n, t.getSnapshot = r, $o(t) && es(e)
        }

        function Qo(e, t, n) {
            return n(function() {
                $o(t) && es(e)
            })
        }

        function $o(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var n = t();
                return !Pr(e, n)
            } catch {
                return !0
            }
        }

        function es(e) {
            var t = ao(e, 1);
            t !== null && xl(t, e, 1, -1)
        }

        function ts(e) {
            var t = Uo();
            return typeof e == `function` && (e = e()), t.memoizedState = t.baseState = e, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Go,
                lastRenderedState: e
            }, t.queue = e, e = e.dispatch = vs.bind(null, Mo, e), [t.memoizedState, e]
        }

        function ns(e, t, n, r) {
            return e = {
                tag: e,
                create: t,
                destroy: n,
                deps: r,
                next: null
            }, t = Mo.updateQueue, t === null ? (t = {
                lastEffect: null,
                stores: null
            }, Mo.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
        }

        function rs() {
            return Wo().memoizedState
        }

        function is(e, t, n, r) {
            var i = Uo();
            Mo.flags |= e, i.memoizedState = ns(1 | t, n, void 0, r === void 0 ? null : r)
        }

        function as(e, t, n, r) {
            var i = Wo();
            r = r === void 0 ? null : r;
            var a = void 0;
            if (No !== null) {
                var o = No.memoizedState;
                if (a = o.destroy, r !== null && Bo(r, o.deps)) {
                    i.memoizedState = ns(t, n, a, r);
                    return
                }
            }
            Mo.flags |= e, i.memoizedState = ns(1 | t, n, a, r)
        }

        function os(e, t) {
            return is(8390656, 8, e, t)
        }

        function ss(e, t) {
            return as(2048, 8, e, t)
        }

        function cs(e, t) {
            return as(4, 2, e, t)
        }

        function ls(e, t) {
            return as(4, 4, e, t)
        }

        function B(e, t) {
            if (typeof t == `function`) return e = e(), t(e),
                function() {
                    t(null)
                };
            if (t != null) return e = e(), t.current = e,
                function() {
                    t.current = null
                }
        }

        function us(e, t, n) {
            return n = n == null ? null : n.concat([e]), as(4, 4, B.bind(null, t, e), n)
        }

        function ds() {}

        function fs(e, t) {
            var n = Wo();
            t = t === void 0 ? null : t;
            var r = n.memoizedState;
            return r !== null && t !== null && Bo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
        }

        function ps(e, t) {
            var n = Wo();
            t = t === void 0 ? null : t;
            var r = n.memoizedState;
            return r !== null && t !== null && Bo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
        }

        function ms(e, t, n) {
            return jo & 21 ? (Pr(n, t) || (n = Wt(), Mo.lanes |= n, nl |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Hs = !0), e.memoizedState = n)
        }

        function hs(e, t) {
            var n = N;
            N = n !== 0 && 4 > n ? n : 4, e(!0);
            var r = Ao.transition;
            Ao.transition = {};
            try {
                e(!1), t()
            } finally {
                N = n, Ao.transition = r
            }
        }

        function gs() {
            return Wo().memoizedState
        }

        function _s(e, t, n) {
            var r = K(e);
            if (n = {
                    lane: r,
                    action: n,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                }, ys(e)) bs(t, n);
            else if (n = io(e, t, n, r), n !== null) {
                var i = bl();
                xl(n, e, r, i), xs(n, t, r)
            }
        }

        function vs(e, t, n) {
            var r = K(e),
                i = {
                    lane: r,
                    action: n,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                };
            if (ys(e)) bs(t, i);
            else {
                var a = e.alternate;
                if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
                    var o = t.lastRenderedState,
                        s = a(o, n);
                    if (i.hasEagerState = !0, i.eagerState = s, Pr(s, o)) {
                        var c = t.interleaved;
                        c === null ? (i.next = i, ro(t)) : (i.next = c.next, c.next = i), t.interleaved = i;
                        return
                    }
                } catch {}
                n = io(e, t, i, r), n !== null && (i = bl(), xl(n, e, r, i), xs(n, t, r))
            }
        }

        function ys(e) {
            var t = e.alternate;
            return e === Mo || t !== null && t === Mo
        }

        function bs(e, t) {
            Io = Fo = !0;
            var n = e.pending;
            n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
        }

        function xs(e, t, n) {
            if (n & 4194240) {
                var r = t.lanes;
                r &= e.pendingLanes, n |= r, t.lanes = n, Jt(e, n)
            }
        }
        var Ss = {
                readContext: to,
                useCallback: zo,
                useContext: zo,
                useEffect: zo,
                useImperativeHandle: zo,
                useInsertionEffect: zo,
                useLayoutEffect: zo,
                useMemo: zo,
                useReducer: zo,
                useRef: zo,
                useState: zo,
                useDebugValue: zo,
                useDeferredValue: zo,
                useTransition: zo,
                useMutableSource: zo,
                useSyncExternalStore: zo,
                useId: zo,
                unstable_isNewReconciler: !1
            },
            Cs = {
                readContext: to,
                useCallback: function(e, t) {
                    return Uo().memoizedState = [e, t === void 0 ? null : t], e
                },
                useContext: to,
                useEffect: os,
                useImperativeHandle: function(e, t, n) {
                    return n = n == null ? null : n.concat([e]), is(4194308, 4, B.bind(null, t, e), n)
                },
                useLayoutEffect: function(e, t) {
                    return is(4194308, 4, e, t)
                },
                useInsertionEffect: function(e, t) {
                    return is(4, 2, e, t)
                },
                useMemo: function(e, t) {
                    var n = Uo();
                    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
                },
                useReducer: function(e, t, n) {
                    var r = Uo();
                    return t = n === void 0 ? t : n(t), r.memoizedState = r.baseState = t, e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t
                    }, r.queue = e, e = e.dispatch = _s.bind(null, Mo, e), [r.memoizedState, e]
                },
                useRef: function(e) {
                    var t = Uo();
                    return e = {
                        current: e
                    }, t.memoizedState = e
                },
                useState: ts,
                useDebugValue: ds,
                useDeferredValue: function(e) {
                    return Uo().memoizedState = e
                },
                useTransition: function() {
                    var e = ts(!1),
                        t = e[0];
                    return e = hs.bind(null, e[1]), Uo().memoizedState = e, [t, e]
                },
                useMutableSource: function() {},
                useSyncExternalStore: function(e, t, n) {
                    var i = Mo,
                        a = Uo();
                    if (ka) {
                        if (n === void 0) throw Error(r(407));
                        n = n()
                    } else {
                        if (n = t(), Yc === null) throw Error(r(349));
                        jo & 30 || Xo(i, t, n)
                    }
                    a.memoizedState = n;
                    var o = {
                        value: n,
                        getSnapshot: t
                    };
                    return a.queue = o, os(Qo.bind(null, i, o, e), [e]), i.flags |= 2048, ns(9, Zo.bind(null, i, o, n, t), void 0, null), n
                },
                useId: function() {
                    var e = Uo(),
                        t = Yc.identifierPrefix;
                    if (ka) {
                        var n = Sa,
                            r = xa;
                        n = (r & ~(1 << 32 - Nt(r) - 1)).toString(32) + n, t = `:` + t + `R` + n, n = Lo++, 0 < n && (t += `H` + n.toString(32)), t += `:`
                    } else n = Ro++, t = `:` + t + `r` + n.toString(32) + `:`;
                    return e.memoizedState = t
                },
                unstable_isNewReconciler: !1
            },
            ws = {
                readContext: to,
                useCallback: fs,
                useContext: to,
                useEffect: ss,
                useImperativeHandle: us,
                useInsertionEffect: cs,
                useLayoutEffect: ls,
                useMemo: ps,
                useReducer: Ko,
                useRef: rs,
                useState: function() {
                    return Ko(Go)
                },
                useDebugValue: ds,
                useDeferredValue: function(e) {
                    return ms(Wo(), No.memoizedState, e)
                },
                useTransition: function() {
                    return [Ko(Go)[0], Wo().memoizedState]
                },
                useMutableSource: Jo,
                useSyncExternalStore: Yo,
                useId: gs,
                unstable_isNewReconciler: !1
            },
            Ts = {
                readContext: to,
                useCallback: fs,
                useContext: to,
                useEffect: ss,
                useImperativeHandle: us,
                useInsertionEffect: cs,
                useLayoutEffect: ls,
                useMemo: ps,
                useReducer: qo,
                useRef: rs,
                useState: function() {
                    return qo(Go)
                },
                useDebugValue: ds,
                useDeferredValue: function(e) {
                    var t = Wo();
                    return No === null ? t.memoizedState = e : ms(t, No.memoizedState, e)
                },
                useTransition: function() {
                    return [qo(Go)[0], Wo().memoizedState]
                },
                useMutableSource: Jo,
                useSyncExternalStore: Yo,
                useId: gs,
                unstable_isNewReconciler: !1
            };

        function V(e, t) {
            if (e && e.defaultProps) {
                for (var n in t = M({}, t), e = e.defaultProps, e) t[n] === void 0 && (t[n] = e[n]);
                return t
            }
            return t
        }

        function Es(e, t, n, r) {
            t = e.memoizedState, n = n(r, t), n = n == null ? t : M({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
        }
        var Ds = {
            isMounted: function(e) {
                return (e = e._reactInternals) ? pt(e) === e : !1
            },
            enqueueSetState: function(e, t, n) {
                e = e._reactInternals;
                var r = bl(),
                    i = K(e),
                    a = lo(r, i);
                a.payload = t, n != null && (a.callback = n), t = uo(e, a, i), t !== null && (xl(t, e, i, r), fo(t, e, i))
            },
            enqueueReplaceState: function(e, t, n) {
                e = e._reactInternals;
                var r = bl(),
                    i = K(e),
                    a = lo(r, i);
                a.tag = 1, a.payload = t, n != null && (a.callback = n), t = uo(e, a, i), t !== null && (xl(t, e, i, r), fo(t, e, i))
            },
            enqueueForceUpdate: function(e, t) {
                e = e._reactInternals;
                var n = bl(),
                    r = K(e),
                    i = lo(n, r);
                i.tag = 2, t != null && (i.callback = t), t = uo(e, i, r), t !== null && (xl(t, e, r, n), fo(t, e, r))
            }
        };

        function Os(e, t, n, r, i, a, o) {
            return e = e.stateNode, typeof e.shouldComponentUpdate == `function` ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Fr(n, r) || !Fr(i, a) : !0
        }

        function ks(e, t, n) {
            var r = !1,
                i = Zi,
                a = t.contextType;
            return typeof a == `object` && a ? a = to(a) : (i = na(t) ? ea : Qi.current, r = t.contextTypes, a = (r = r != null) ? ta(e, i) : Zi), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ds, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t
        }

        function As(e, t, n, r) {
            e = t.state, typeof t.componentWillReceiveProps == `function` && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == `function` && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ds.enqueueReplaceState(t, t.state, null)
        }

        function js(e, t, n, r) {
            var i = e.stateNode;
            i.props = n, i.state = e.memoizedState, i.refs = {}, so(e);
            var a = t.contextType;
            typeof a == `object` && a ? i.context = to(a) : (a = na(t) ? ea : Qi.current, i.context = ta(e, a)), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == `function` && (Es(e, t, a, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == `function` || typeof i.getSnapshotBeforeUpdate == `function` || typeof i.UNSAFE_componentWillMount != `function` && typeof i.componentWillMount != `function` || (t = i.state, typeof i.componentWillMount == `function` && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == `function` && i.UNSAFE_componentWillMount(), t !== i.state && Ds.enqueueReplaceState(i, i.state, null), mo(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == `function` && (e.flags |= 4194308)
        }

        function Ms(e, t) {
            try {
                var n = ``,
                    r = t;
                do n += de(r), r = r.return; while (r);
                var i = n
            } catch (e) {
                i = `
Error generating stack: ` + e.message + `
` + e.stack
            }
            return {
                value: e,
                source: t,
                stack: i,
                digest: null
            }
        }

        function Ns(e, t, n) {
            return {
                value: e,
                source: null,
                stack: n ?? null,
                digest: t ?? null
            }
        }

        function Ps(e, t) {
            try {
                console.error(t.value)
            } catch (e) {
                setTimeout(function() {
                    throw e
                })
            }
        }
        var Fs = typeof WeakMap == `function` ? WeakMap : Map;

        function Is(e, t, n) {
            n = lo(-1, n), n.tag = 3, n.payload = {
                element: null
            };
            var r = t.value;
            return n.callback = function() {
                ul || (ul = !0, dl = r), Ps(e, t)
            }, n
        }

        function Ls(e, t, n) {
            n = lo(-1, n), n.tag = 3;
            var r = e.type.getDerivedStateFromError;
            if (typeof r == `function`) {
                var i = t.value;
                n.payload = function() {
                    return r(i)
                }, n.callback = function() {
                    Ps(e, t)
                }
            }
            var a = e.stateNode;
            return a !== null && typeof a.componentDidCatch == `function` && (n.callback = function() {
                Ps(e, t), typeof r != `function` && (fl === null ? fl = new Set([this]) : fl.add(this));
                var n = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: n === null ? `` : n
                })
            }), n
        }

        function Rs(e, t, n) {
            var r = e.pingCache;
            if (r === null) {
                r = e.pingCache = new Fs;
                var i = new Set;
                r.set(t, i)
            } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
            i.has(n) || (i.add(n), e = Gl.bind(null, e, t, n), t.then(e, e))
        }

        function zs(e) {
            do {
                var t;
                if ((t = e.tag === 13) && (t = e.memoizedState, t = t === null || t.dehydrated !== null), t) return e;
                e = e.return
            } while (e !== null);
            return null
        }

        function Bs(e, t, n, r, i) {
            return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = lo(-1, 1), t.tag = 2, uo(n, t, 1))), n.lanes |= 1), e)
        }
        var Vs = C.ReactCurrentOwner,
            Hs = !1;

        function H(e, t, n, r) {
            t.child = e === null ? Ka(t, null, n, r) : Ga(t, e.child, n, r)
        }

        function Us(e, t, n, r, i) {
            n = n.render;
            var a = t.ref;
            return eo(t, i), r = Vo(e, t, n, r, a, i), n = Ho(), e !== null && !Hs ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, lc(e, t, i)) : (ka && n && Ta(t), t.flags |= 1, H(e, t, r, i), t.child)
        }

        function Ws(e, t, n, r, i) {
            if (e === null) {
                var a = n.type;
                return typeof a == `function` && !$l(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Gs(e, t, a, r, i)) : (e = nu(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
            }
            if (a = e.child, (e.lanes & i) === 0) {
                var o = a.memoizedProps;
                if (n = n.compare, n = n === null ? Fr : n, n(o, r) && e.ref === t.ref) return lc(e, t, i)
            }
            return t.flags |= 1, e = tu(a, r), e.ref = t.ref, e.return = t, t.child = e
        }

        function Gs(e, t, n, r, i) {
            if (e !== null) {
                var a = e.memoizedProps;
                if (Fr(a, r) && e.ref === t.ref)
                    if (Hs = !1, t.pendingProps = r = a, (e.lanes & i) !== 0) e.flags & 131072 && (Hs = !0);
                    else return t.lanes = e.lanes, lc(e, t, i)
            }
            return Js(e, t, n, r, i)
        }

        function Ks(e, t, n) {
            var r = t.pendingProps,
                i = r.children,
                a = e === null ? null : e.memoizedState;
            if (r.mode === `hidden`)
                if (!(t.mode & 1)) t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, z($c, Qc), Qc |= n;
                else {
                    if (!(n & 1073741824)) return e = a === null ? n : a.baseLanes | n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    }, t.updateQueue = null, z($c, Qc), Qc |= e, null;
                    t.memoizedState = {
                        baseLanes: 0,
                        cachePool: null,
                        transitions: null
                    }, r = a === null ? n : a.baseLanes, z($c, Qc), Qc |= r
                }
            else a === null ? r = n : (r = a.baseLanes | n, t.memoizedState = null), z($c, Qc), Qc |= r;
            return H(e, t, i, n), t.child
        }

        function qs(e, t) {
            var n = t.ref;
            (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
        }

        function Js(e, t, n, r, i) {
            var a = na(n) ? ea : Qi.current;
            return a = ta(t, a), eo(t, i), n = Vo(e, t, n, r, a, i), r = Ho(), e !== null && !Hs ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, lc(e, t, i)) : (ka && r && Ta(t), t.flags |= 1, H(e, t, n, i), t.child)
        }

        function Ys(e, t, n, r, i) {
            if (na(n)) {
                var a = !0;
                oa(t)
            } else a = !1;
            if (eo(t, i), t.stateNode === null) cc(e, t), ks(t, n, r), js(t, n, r, i), r = !0;
            else if (e === null) {
                var o = t.stateNode,
                    s = t.memoizedProps;
                o.props = s;
                var c = o.context,
                    l = n.contextType;
                typeof l == `object` && l ? l = to(l) : (l = na(n) ? ea : Qi.current, l = ta(t, l));
                var u = n.getDerivedStateFromProps,
                    d = typeof u == `function` || typeof o.getSnapshotBeforeUpdate == `function`;
                d || typeof o.UNSAFE_componentWillReceiveProps != `function` && typeof o.componentWillReceiveProps != `function` || (s !== r || c !== l) && As(t, o, r, l), oo = !1;
                var f = t.memoizedState;
                o.state = f, mo(t, r, o, i), c = t.memoizedState, s !== r || f !== c || $i.current || oo ? (typeof u == `function` && (Es(t, n, u, r), c = t.memoizedState), (s = oo || Os(t, n, s, r, f, c, l)) ? (d || typeof o.UNSAFE_componentWillMount != `function` && typeof o.componentWillMount != `function` || (typeof o.componentWillMount == `function` && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == `function` && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == `function` && (t.flags |= 4194308)) : (typeof o.componentDidMount == `function` && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = l, r = s) : (typeof o.componentDidMount == `function` && (t.flags |= 4194308), r = !1)
            } else {
                o = t.stateNode, co(e, t), s = t.memoizedProps, l = t.type === t.elementType ? s : V(t.type, s), o.props = l, d = t.pendingProps, f = o.context, c = n.contextType, typeof c == `object` && c ? c = to(c) : (c = na(n) ? ea : Qi.current, c = ta(t, c));
                var p = n.getDerivedStateFromProps;
                (u = typeof p == `function` || typeof o.getSnapshotBeforeUpdate == `function`) || typeof o.UNSAFE_componentWillReceiveProps != `function` && typeof o.componentWillReceiveProps != `function` || (s !== d || f !== c) && As(t, o, r, c), oo = !1, f = t.memoizedState, o.state = f, mo(t, r, o, i);
                var m = t.memoizedState;
                s !== d || f !== m || $i.current || oo ? (typeof p == `function` && (Es(t, n, p, r), m = t.memoizedState), (l = oo || Os(t, n, l, r, f, m, c) || !1) ? (u || typeof o.UNSAFE_componentWillUpdate != `function` && typeof o.componentWillUpdate != `function` || (typeof o.componentWillUpdate == `function` && o.componentWillUpdate(r, m, c), typeof o.UNSAFE_componentWillUpdate == `function` && o.UNSAFE_componentWillUpdate(r, m, c)), typeof o.componentDidUpdate == `function` && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == `function` && (t.flags |= 1024)) : (typeof o.componentDidUpdate != `function` || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != `function` || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), o.props = r, o.state = m, o.context = c, r = l) : (typeof o.componentDidUpdate != `function` || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != `function` || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
            }
            return Xs(e, t, n, r, a, i)
        }

        function Xs(e, t, n, r, i, a) {
            qs(e, t);
            var o = !!(t.flags & 128);
            if (!r && !o) return i && sa(t, n, !1), lc(e, t, a);
            r = t.stateNode, Vs.current = t;
            var s = o && typeof n.getDerivedStateFromError != `function` ? null : r.render();
            return t.flags |= 1, e !== null && o ? (t.child = Ga(t, e.child, null, a), t.child = Ga(t, null, s, a)) : H(e, t, s, a), t.memoizedState = r.state, i && sa(t, n, !0), t.child
        }

        function Zs(e) {
            var t = e.stateNode;
            t.pendingContext ? ia(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ia(e, t.context, !1), xo(e, t.containerInfo)
        }

        function Qs(e, t, n, r, i) {
            return Ra(), za(i), t.flags |= 256, H(e, t, n, r), t.child
        }
        var $s = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0
        };

        function ec(e) {
            return {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }
        }

        function tc(e, t, n) {
            var r = t.pendingProps,
                i = To.current,
                a = !1,
                o = !!(t.flags & 128),
                s;
            if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : !!(i & 2)), s ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), z(To, i & 1), e === null) return Pa(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.lanes = t.mode & 1 ? e.data === `$!` ? 8 : 1073741824 : 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = {
                mode: `hidden`,
                children: o
            }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = iu(o, r, 0, null), e = ru(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = ec(n), t.memoizedState = $s, e) : nc(t, o));
            if (i = e.memoizedState, i !== null && (s = i.dehydrated, s !== null)) return ic(e, t, o, r, s, i, n);
            if (a) {
                a = r.fallback, o = t.mode, i = e.child, s = i.sibling;
                var c = {
                    mode: `hidden`,
                    children: r.children
                };
                return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = tu(i, c), r.subtreeFlags = i.subtreeFlags & 14680064), s === null ? (a = ru(a, o, n, null), a.flags |= 2) : a = tu(s, a), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? ec(n) : {
                    baseLanes: o.baseLanes | n,
                    cachePool: null,
                    transitions: o.transitions
                }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = $s, r
            }
            return a = e.child, e = a.sibling, r = tu(a, {
                mode: `visible`,
                children: r.children
            }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
        }

        function nc(e, t) {
            return t = iu({
                mode: `visible`,
                children: t
            }, e.mode, 0, null), t.return = e, e.child = t
        }

        function rc(e, t, n, r) {
            return r !== null && za(r), Ga(t, e.child, null, n), e = nc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
        }

        function ic(e, t, n, i, a, o, s) {
            if (n) return t.flags & 256 ? (t.flags &= -257, i = Ns(Error(r(422))), rc(e, t, s, i)) : t.memoizedState === null ? (o = i.fallback, a = t.mode, i = iu({
                mode: `visible`,
                children: i.children
            }, a, 0, null), o = ru(o, a, s, null), o.flags |= 2, i.return = t, o.return = t, i.sibling = o, t.child = i, t.mode & 1 && Ga(t, e.child, null, s), t.child.memoizedState = ec(s), t.memoizedState = $s, o) : (t.child = e.child, t.flags |= 128, null);
            if (!(t.mode & 1)) return rc(e, t, s, null);
            if (a.data === `$!`) {
                if (i = a.nextSibling && a.nextSibling.dataset, i) var c = i.dgst;
                return i = c, o = Error(r(419)), i = Ns(o, i, void 0), rc(e, t, s, i)
            }
            if (c = (s & e.childLanes) !== 0, Hs || c) {
                if (i = Yc, i !== null) {
                    switch (s & -s) {
                        case 4:
                            a = 2;
                            break;
                        case 16:
                            a = 8;
                            break;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            a = 32;
                            break;
                        case 536870912:
                            a = 268435456;
                            break;
                        default:
                            a = 0
                    }
                    a = (a & (i.suspendedLanes | s)) === 0 ? a : 0, a !== 0 && a !== o.retryLane && (o.retryLane = a, ao(e, a), xl(i, e, a, -1))
                }
                return Fl(), i = Ns(Error(r(421))), rc(e, t, s, i)
            }
            return a.data === `$?` ? (t.flags |= 128, t.child = e.child, t = ql.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, Oa = Fi(a.nextSibling), Da = t, ka = !0, Aa = null, e !== null && (va[ya++] = xa, va[ya++] = Sa, va[ya++] = ba, xa = e.id, Sa = e.overflow, ba = t), t = nc(t, i.children), t.flags |= 4096, t)
        }

        function ac(e, t, n) {
            e.lanes |= t;
            var r = e.alternate;
            r !== null && (r.lanes |= t), $a(e.return, t, n)
        }

        function oc(e, t, n, r, i) {
            var a = e.memoizedState;
            a === null ? e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: i
            } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = i)
        }

        function sc(e, t, n) {
            var r = t.pendingProps,
                i = r.revealOrder,
                a = r.tail;
            if (H(e, t, r.children, n), r = To.current, r & 2) r = r & 1 | 2, t.flags |= 128;
            else {
                if (e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
                    if (e.tag === 13) e.memoizedState !== null && ac(e, n, t);
                    else if (e.tag === 19) ac(e, n, t);
                    else if (e.child !== null) {
                        e.child.return = e, e = e.child;
                        continue
                    }
                    if (e === t) break a;
                    for (; e.sibling === null;) {
                        if (e.return === null || e.return === t) break a;
                        e = e.return
                    }
                    e.sibling.return = e.return, e = e.sibling
                }
                r &= 1
            }
            if (z(To, r), !(t.mode & 1)) t.memoizedState = null;
            else switch (i) {
                case `forwards`:
                    for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && Eo(e) === null && (i = n), n = n.sibling;
                    n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), oc(t, !1, i, n, a);
                    break;
                case `backwards`:
                    for (n = null, i = t.child, t.child = null; i !== null;) {
                        if (e = i.alternate, e !== null && Eo(e) === null) {
                            t.child = i;
                            break
                        }
                        e = i.sibling, i.sibling = n, n = i, i = e
                    }
                    oc(t, !0, n, null, a);
                    break;
                case `together`:
                    oc(t, !1, null, null, void 0);
                    break;
                default:
                    t.memoizedState = null
            }
            return t.child
        }

        function cc(e, t) {
            !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
        }

        function lc(e, t, n) {
            if (e !== null && (t.dependencies = e.dependencies), nl |= t.lanes, (n & t.childLanes) === 0) return null;
            if (e !== null && t.child !== e.child) throw Error(r(153));
            if (t.child !== null) {
                for (e = t.child, n = tu(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = tu(e, e.pendingProps), n.return = t;
                n.sibling = null
            }
            return t.child
        }

        function uc(e, t, n) {
            switch (t.tag) {
                case 3:
                    Zs(t), Ra();
                    break;
                case 5:
                    Co(t);
                    break;
                case 1:
                    na(t.type) && oa(t);
                    break;
                case 4:
                    xo(t, t.stateNode.containerInfo);
                    break;
                case 10:
                    var r = t.type._context,
                        i = t.memoizedProps.value;
                    z(qa, r._currentValue), r._currentValue = i;
                    break;
                case 13:
                    if (r = t.memoizedState, r !== null) return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (z(To, To.current & 1), e = lc(e, t, n), e === null ? null : e.sibling) : tc(e, t, n) : (z(To, To.current & 1), t.flags |= 128, null);
                    z(To, To.current & 1);
                    break;
                case 19:
                    if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                        if (r) return sc(e, t, n);
                        t.flags |= 128
                    }
                    if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), z(To, To.current), r) break;
                    return null;
                case 22:
                case 23:
                    return t.lanes = 0, Ks(e, t, n)
            }
            return lc(e, t, n)
        }
        var dc = function(e, t) {
                for (var n = t.child; n !== null;) {
                    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
                    else if (n.tag !== 4 && n.child !== null) {
                        n.child.return = n, n = n.child;
                        continue
                    }
                    if (n === t) break;
                    for (; n.sibling === null;) {
                        if (n.return === null || n.return === t) return;
                        n = n.return
                    }
                    n.sibling.return = n.return, n = n.sibling
                }
            },
            fc = function(e, t, n, r) {
                var i = e.memoizedProps;
                if (i !== r) {
                    e = t.stateNode, bo(_o.current);
                    var o = null;
                    switch (n) {
                        case `input`:
                            i = be(e, i), r = be(e, r), o = [];
                            break;
                        case `select`:
                            i = M({}, i, {
                                value: void 0
                            }), r = M({}, r, {
                                value: void 0
                            }), o = [];
                            break;
                        case `textarea`:
                            i = Oe(e, i), r = Oe(e, r), o = [];
                            break;
                        default:
                            typeof i.onClick != `function` && typeof r.onClick == `function` && (e.onclick = Ti)
                    }
                    He(n, r);
                    var s;
                    for (u in n = null, i)
                        if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                            if (u === `style`) {
                                var c = i[u];
                                for (s in c) c.hasOwnProperty(s) && (n ||= {}, n[s] = ``)
                            } else u !== `dangerouslySetInnerHTML` && u !== `children` && u !== `suppressContentEditableWarning` && u !== `suppressHydrationWarning` && u !== `autoFocus` && (a.hasOwnProperty(u) ? o ||= [] : (o ||= []).push(u, null));
                    for (u in r) {
                        var l = r[u];
                        if (c = i ?.[u], r.hasOwnProperty(u) && l !== c && (l != null || c != null))
                            if (u === `style`)
                                if (c) {
                                    for (s in c) !c.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n ||= {}, n[s] = ``);
                                    for (s in l) l.hasOwnProperty(s) && c[s] !== l[s] && (n ||= {}, n[s] = l[s])
                                } else n || (o ||= [], o.push(u, n)), n = l;
                        else u === `dangerouslySetInnerHTML` ? (l = l ? l.__html : void 0, c = c ? c.__html : void 0, l != null && c !== l && (o ||= []).push(u, l)) : u === `children` ? typeof l != `string` && typeof l != `number` || (o ||= []).push(u, `` + l) : u !== `suppressContentEditableWarning` && u !== `suppressHydrationWarning` && (a.hasOwnProperty(u) ? (l != null && u === `onScroll` && di(`scroll`, e), o || c === l || (o = [])) : (o ||= []).push(u, l))
                    }
                    n && (o ||= []).push(`style`, n);
                    var u = o;
                    (t.updateQueue = u) && (t.flags |= 4)
                }
            },
            pc = function(e, t, n, r) {
                n !== r && (t.flags |= 4)
            };

        function mc(e, t) {
            if (!ka) switch (e.tailMode) {
                case `hidden`:
                    t = e.tail;
                    for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
                    n === null ? e.tail = null : n.sibling = null;
                    break;
                case `collapsed`:
                    n = e.tail;
                    for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
                    r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
            }
        }

        function hc(e) {
            var t = e.alternate !== null && e.alternate.child === e.child,
                n = 0,
                r = 0;
            if (t)
                for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
            else
                for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
            return e.subtreeFlags |= r, e.childLanes = n, t
        }

        function gc(e, t, n) {
            var i = t.pendingProps;
            switch (Ea(t), t.tag) {
                case 2:
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                    return hc(t), null;
                case 1:
                    return na(t.type) && ra(), hc(t), null;
                case 3:
                    return i = t.stateNode, So(), R($i), R(Qi), Oo(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (Ia(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Aa !== null && (Tl(Aa), Aa = null))), hc(t), null;
                case 5:
                    wo(t);
                    var o = bo(yo.current);
                    if (n = t.type, e !== null && t.stateNode != null) fc(e, t, n, i, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                    else {
                        if (!i) {
                            if (t.stateNode === null) throw Error(r(166));
                            return hc(t), null
                        }
                        if (e = bo(_o.current), Ia(t)) {
                            i = t.stateNode, n = t.type;
                            var s = t.memoizedProps;
                            switch (i[Ri] = t, i[zi] = s, e = !!(t.mode & 1), n) {
                                case `dialog`:
                                    di(`cancel`, i), di(`close`, i);
                                    break;
                                case `iframe`:
                                case `object`:
                                case `embed`:
                                    di(`load`, i);
                                    break;
                                case `video`:
                                case `audio`:
                                    for (o = 0; o < si.length; o++) di(si[o], i);
                                    break;
                                case `source`:
                                    di(`error`, i);
                                    break;
                                case `img`:
                                case `image`:
                                case `link`:
                                    di(`error`, i), di(`load`, i);
                                    break;
                                case `details`:
                                    di(`toggle`, i);
                                    break;
                                case `input`:
                                    xe(i, s), di(`invalid`, i);
                                    break;
                                case `select`:
                                    i._wrapperState = {
                                        wasMultiple: !!s.multiple
                                    }, di(`invalid`, i);
                                    break;
                                case `textarea`:
                                    ke(i, s), di(`invalid`, i)
                            }
                            for (var c in He(n, s), o = null, s)
                                if (s.hasOwnProperty(c)) {
                                    var l = s[c];
                                    c === `children` ? typeof l == `string` ? i.textContent !== l && (!0 !== s.suppressHydrationWarning && wi(i.textContent, l, e), o = [`children`, l]) : typeof l == `number` && i.textContent !== `` + l && (!0 !== s.suppressHydrationWarning && wi(i.textContent, l, e), o = [`children`, `` + l]) : a.hasOwnProperty(c) && l != null && c === `onScroll` && di(`scroll`, i)
                                }
                            switch (n) {
                                case `input`:
                                    _e(i), we(i, s, !0);
                                    break;
                                case `textarea`:
                                    _e(i), je(i);
                                    break;
                                case `select`:
                                case `option`:
                                    break;
                                default:
                                    typeof s.onClick == `function` && (i.onclick = Ti)
                            }
                            i = o, t.updateQueue = i, i !== null && (t.flags |= 4)
                        } else {
                            c = o.nodeType === 9 ? o : o.ownerDocument, e === `http://www.w3.org/1999/xhtml` && (e = Me(n)), e === `http://www.w3.org/1999/xhtml` ? n === `script` ? (e = c.createElement(`div`), e.innerHTML = `<script><\/script>`, e = e.removeChild(e.firstChild)) : typeof i.is == `string` ? e = c.createElement(n, {
                                is: i.is
                            }) : (e = c.createElement(n), n === `select` && (c = e, i.multiple ? c.multiple = !0 : i.size && (c.size = i.size))) : e = c.createElementNS(e, n), e[Ri] = t, e[zi] = i, dc(e, t, !1, !1), t.stateNode = e;
                            a: {
                                switch (c = Ue(n, i), n) {
                                    case `dialog`:
                                        di(`cancel`, e), di(`close`, e), o = i;
                                        break;
                                    case `iframe`:
                                    case `object`:
                                    case `embed`:
                                        di(`load`, e), o = i;
                                        break;
                                    case `video`:
                                    case `audio`:
                                        for (o = 0; o < si.length; o++) di(si[o], e);
                                        o = i;
                                        break;
                                    case `source`:
                                        di(`error`, e), o = i;
                                        break;
                                    case `img`:
                                    case `image`:
                                    case `link`:
                                        di(`error`, e), di(`load`, e), o = i;
                                        break;
                                    case `details`:
                                        di(`toggle`, e), o = i;
                                        break;
                                    case `input`:
                                        xe(e, i), o = be(e, i), di(`invalid`, e);
                                        break;
                                    case `option`:
                                        o = i;
                                        break;
                                    case `select`:
                                        e._wrapperState = {
                                            wasMultiple: !!i.multiple
                                        }, o = M({}, i, {
                                            value: void 0
                                        }), di(`invalid`, e);
                                        break;
                                    case `textarea`:
                                        ke(e, i), o = Oe(e, i), di(`invalid`, e);
                                        break;
                                    default:
                                        o = i
                                }
                                for (s in He(n, o), l = o, l)
                                    if (l.hasOwnProperty(s)) {
                                        var u = l[s];
                                        s === `style` ? Be(e, u) : s === `dangerouslySetInnerHTML` ? (u = u ? u.__html : void 0, u != null && Fe(e, u)) : s === `children` ? typeof u == `string` ? (n !== `textarea` || u !== ``) && Ie(e, u) : typeof u == `number` && Ie(e, `` + u) : s !== `suppressContentEditableWarning` && s !== `suppressHydrationWarning` && s !== `autoFocus` && (a.hasOwnProperty(s) ? u != null && s === `onScroll` && di(`scroll`, e) : u != null && S(e, s, u, c))
                                    }
                                switch (n) {
                                    case `input`:
                                        _e(e), we(e, i, !1);
                                        break;
                                    case `textarea`:
                                        _e(e), je(e);
                                        break;
                                    case `option`:
                                        i.value != null && e.setAttribute(`value`, `` + me(i.value));
                                        break;
                                    case `select`:
                                        e.multiple = !!i.multiple, s = i.value, s == null ? i.defaultValue != null && De(e, !!i.multiple, i.defaultValue, !0) : De(e, !!i.multiple, s, !1);
                                        break;
                                    default:
                                        typeof o.onClick == `function` && (e.onclick = Ti)
                                }
                                switch (n) {
                                    case `button`:
                                    case `input`:
                                    case `select`:
                                    case `textarea`:
                                        i = !!i.autoFocus;
                                        break a;
                                    case `img`:
                                        i = !0;
                                        break a;
                                    default:
                                        i = !1
                                }
                            }
                            i && (t.flags |= 4)
                        }
                        t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
                    }
                    return hc(t), null;
                case 6:
                    if (e && t.stateNode != null) pc(e, t, e.memoizedProps, i);
                    else {
                        if (typeof i != `string` && t.stateNode === null) throw Error(r(166));
                        if (n = bo(yo.current), bo(_o.current), Ia(t)) {
                            if (i = t.stateNode, n = t.memoizedProps, i[Ri] = t, (s = i.nodeValue !== n) && (e = Da, e !== null)) switch (e.tag) {
                                case 3:
                                    wi(i.nodeValue, n, !!(e.mode & 1));
                                    break;
                                case 5:
                                    !0 !== e.memoizedProps.suppressHydrationWarning && wi(i.nodeValue, n, !!(e.mode & 1))
                            }
                            s && (t.flags |= 4)
                        } else i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i), i[Ri] = t, t.stateNode = i
                    }
                    return hc(t), null;
                case 13:
                    if (R(To), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                        if (ka && Oa !== null && t.mode & 1 && !(t.flags & 128)) La(), Ra(), t.flags |= 98560, s = !1;
                        else if (s = Ia(t), i !== null && i.dehydrated !== null) {
                            if (e === null) {
                                if (!s) throw Error(r(318));
                                if (s = t.memoizedState, s = s === null ? null : s.dehydrated, !s) throw Error(r(317));
                                s[Ri] = t
                            } else Ra(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                            hc(t), s = !1
                        } else Aa !== null && (Tl(Aa), Aa = null), s = !0;
                        if (!s) return t.flags & 65536 ? t : null
                    }
                    return t.flags & 128 ? (t.lanes = n, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, t.mode & 1 && (e === null || To.current & 1 ? el === 0 && (el = 3) : Fl())), t.updateQueue !== null && (t.flags |= 4), hc(t), null);
                case 4:
                    return So(), e === null && mi(t.stateNode.containerInfo), hc(t), null;
                case 10:
                    return Qa(t.type._context), hc(t), null;
                case 17:
                    return na(t.type) && ra(), hc(t), null;
                case 19:
                    if (R(To), s = t.memoizedState, s === null) return hc(t), null;
                    if (i = !!(t.flags & 128), c = s.rendering, c === null)
                        if (i) mc(s, !1);
                        else {
                            if (el !== 0 || e !== null && e.flags & 128)
                                for (e = t.child; e !== null;) {
                                    if (c = Eo(e), c !== null) {
                                        for (t.flags |= 128, mc(s, !1), i = c.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = n, n = t.child; n !== null;) s = n, e = i, s.flags &= 14680066, c = s.alternate, c === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = c.childLanes, s.lanes = c.lanes, s.child = c.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = c.memoizedProps, s.memoizedState = c.memoizedState, s.updateQueue = c.updateQueue, s.type = c.type, e = c.dependencies, s.dependencies = e === null ? null : {
                                            lanes: e.lanes,
                                            firstContext: e.firstContext
                                        }), n = n.sibling;
                                        return z(To, To.current & 1 | 2), t.child
                                    }
                                    e = e.sibling
                                }
                            s.tail !== null && Ct() > cl && (t.flags |= 128, i = !0, mc(s, !1), t.lanes = 4194304)
                        }
                    else {
                        if (!i)
                            if (e = Eo(c), e !== null) {
                                if (t.flags |= 128, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), mc(s, !0), s.tail === null && s.tailMode === `hidden` && !c.alternate && !ka) return hc(t), null
                            } else 2 * Ct() - s.renderingStartTime > cl && n !== 1073741824 && (t.flags |= 128, i = !0, mc(s, !1), t.lanes = 4194304);
                        s.isBackwards ? (c.sibling = t.child, t.child = c) : (n = s.last, n === null ? t.child = c : n.sibling = c, s.last = c)
                    }
                    return s.tail === null ? (hc(t), null) : (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = Ct(), t.sibling = null, n = To.current, z(To, i ? n & 1 | 2 : n & 1), t);
                case 22:
                case 23:
                    return jl(), i = t.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (t.flags |= 8192), i && t.mode & 1 ? Qc & 1073741824 && (hc(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : hc(t), null;
                case 24:
                    return null;
                case 25:
                    return null
            }
            throw Error(r(156, t.tag))
        }

        function _c(e, t) {
            switch (Ea(t), t.tag) {
                case 1:
                    return na(t.type) && ra(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 3:
                    return So(), R($i), R(Qi), Oo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
                case 5:
                    return wo(t), null;
                case 13:
                    if (R(To), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                        if (t.alternate === null) throw Error(r(340));
                        Ra()
                    }
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 19:
                    return R(To), null;
                case 4:
                    return So(), null;
                case 10:
                    return Qa(t.type._context), null;
                case 22:
                case 23:
                    return jl(), null;
                case 24:
                    return null;
                default:
                    return null
            }
        }
        var vc = !1,
            yc = !1,
            bc = typeof WeakSet == `function` ? WeakSet : Set,
            U = null;

        function xc(e, t) {
            var n = e.ref;
            if (n !== null)
                if (typeof n == `function`) try {
                    n(null)
                } catch (n) {
                    q(e, t, n)
                } else n.current = null
        }

        function Sc(e, t, n) {
            try {
                n()
            } catch (n) {
                q(e, t, n)
            }
        }
        var Cc = !1;

        function wc(e, t) {
            if (Ei = bn, e = Rr(), zr(e)) {
                if (`selectionStart` in e) var n = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
                else a: {
                    n = (n = e.ownerDocument) && n.defaultView || window;
                    var i = n.getSelection && n.getSelection();
                    if (i && i.rangeCount !== 0) {
                        n = i.anchorNode;
                        var a = i.anchorOffset,
                            o = i.focusNode;
                        i = i.focusOffset;
                        try {
                            n.nodeType, o.nodeType
                        } catch {
                            n = null;
                            break a
                        }
                        var s = 0,
                            c = -1,
                            l = -1,
                            u = 0,
                            d = 0,
                            f = e,
                            p = null;
                        b: for (;;) {
                            for (var m; f !== n || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || i !== 0 && f.nodeType !== 3 || (l = s + i), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
                            for (;;) {
                                if (f === e) break b;
                                if (p === n && ++u === a && (c = s), p === o && ++d === i && (l = s), (m = f.nextSibling) !== null) break;
                                f = p, p = f.parentNode
                            }
                            f = m
                        }
                        n = c === -1 || l === -1 ? null : {
                            start: c,
                            end: l
                        }
                    } else n = null
                }
                n ||= {
                    start: 0,
                    end: 0
                }
            } else n = null;
            for (Di = {
                    focusedElem: e,
                    selectionRange: n
                }, bn = !1, U = t; U !== null;)
                if (t = U, e = t.child, t.subtreeFlags & 1028 && e !== null) e.return = t, U = e;
                else
                    for (; U !== null;) {
                        t = U;
                        try {
                            var h = t.alternate;
                            if (t.flags & 1024) switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    break;
                                case 1:
                                    if (h !== null) {
                                        var g = h.memoizedProps,
                                            _ = h.memoizedState,
                                            v = t.stateNode;
                                        v.__reactInternalSnapshotBeforeUpdate = v.getSnapshotBeforeUpdate(t.elementType === t.type ? g : V(t.type, g), _)
                                    }
                                    break;
                                case 3:
                                    var y = t.stateNode.containerInfo;
                                    y.nodeType === 1 ? y.textContent = `` : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                                    break;
                                case 5:
                                case 6:
                                case 4:
                                case 17:
                                    break;
                                default:
                                    throw Error(r(163))
                            }
                        } catch (e) {
                            q(t, t.return, e)
                        }
                        if (e = t.sibling, e !== null) {
                            e.return = t.return, U = e;
                            break
                        }
                        U = t.return
                    }
            return h = Cc, Cc = !1, h
        }

        function Tc(e, t, n) {
            var r = t.updateQueue;
            if (r = r === null ? null : r.lastEffect, r !== null) {
                var i = r = r.next;
                do {
                    if ((i.tag & e) === e) {
                        var a = i.destroy;
                        i.destroy = void 0, a !== void 0 && Sc(t, n, a)
                    }
                    i = i.next
                } while (i !== r)
            }
        }

        function Ec(e, t) {
            if (t = t.updateQueue, t = t === null ? null : t.lastEffect, t !== null) {
                var n = t = t.next;
                do {
                    if ((n.tag & e) === e) {
                        var r = n.create;
                        n.destroy = r()
                    }
                    n = n.next
                } while (n !== t)
            }
        }

        function Dc(e) {
            var t = e.ref;
            if (t !== null) {
                var n = e.stateNode;
                switch (e.tag) {
                    case 5:
                        e = n;
                        break;
                    default:
                        e = n
                }
                typeof t == `function` ? t(e) : t.current = e
            }
        }

        function Oc(e) {
            var t = e.alternate;
            t !== null && (e.alternate = null, Oc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ri], delete t[zi], delete t[Vi], delete t[Hi], delete t[Ui])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
        }

        function kc(e) {
            return e.tag === 5 || e.tag === 3 || e.tag === 4
        }

        function Ac(e) {
            a: for (;;) {
                for (; e.sibling === null;) {
                    if (e.return === null || kc(e.return)) return null;
                    e = e.return
                }
                for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                    if (e.flags & 2 || e.child === null || e.tag === 4) continue a;
                    e.child.return = e, e = e.child
                }
                if (!(e.flags & 2)) return e.stateNode
            }
        }

        function jc(e, t, n) {
            var r = e.tag;
            if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ti));
            else if (r !== 4 && (e = e.child, e !== null))
                for (jc(e, t, n), e = e.sibling; e !== null;) jc(e, t, n), e = e.sibling
        }

        function Mc(e, t, n) {
            var r = e.tag;
            if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
            else if (r !== 4 && (e = e.child, e !== null))
                for (Mc(e, t, n), e = e.sibling; e !== null;) Mc(e, t, n), e = e.sibling
        }
        var Nc = null,
            Pc = !1;

        function Fc(e, t, n) {
            for (n = n.child; n !== null;) Ic(e, t, n), n = n.sibling
        }

        function Ic(e, t, n) {
            if (jt && typeof jt.onCommitFiberUnmount == `function`) try {
                jt.onCommitFiberUnmount(At, n)
            } catch {}
            switch (n.tag) {
                case 5:
                    yc || xc(n, t);
                case 6:
                    var r = Nc,
                        i = Pc;
                    Nc = null, Fc(e, t, n), Nc = r, Pc = i, Nc !== null && (Pc ? (e = Nc, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Nc.removeChild(n.stateNode));
                    break;
                case 18:
                    Nc !== null && (Pc ? (e = Nc, n = n.stateNode, e.nodeType === 8 ? Pi(e.parentNode, n) : e.nodeType === 1 && Pi(e, n), vn(e)) : Pi(Nc, n.stateNode));
                    break;
                case 4:
                    r = Nc, i = Pc, Nc = n.stateNode.containerInfo, Pc = !0, Fc(e, t, n), Nc = r, Pc = i;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    if (!yc && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                        i = r = r.next;
                        do {
                            var a = i,
                                o = a.destroy;
                            a = a.tag, o !== void 0 && (a & 2 || a & 4) && Sc(n, t, o), i = i.next
                        } while (i !== r)
                    }
                    Fc(e, t, n);
                    break;
                case 1:
                    if (!yc && (xc(n, t), r = n.stateNode, typeof r.componentWillUnmount == `function`)) try {
                        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
                    } catch (e) {
                        q(n, t, e)
                    }
                    Fc(e, t, n);
                    break;
                case 21:
                    Fc(e, t, n);
                    break;
                case 22:
                    n.mode & 1 ? (yc = (r = yc) || n.memoizedState !== null, Fc(e, t, n), yc = r) : Fc(e, t, n);
                    break;
                default:
                    Fc(e, t, n)
            }
        }

        function Lc(e) {
            var t = e.updateQueue;
            if (t !== null) {
                e.updateQueue = null;
                var n = e.stateNode;
                n === null && (n = e.stateNode = new bc), t.forEach(function(t) {
                    var r = Jl.bind(null, e, t);
                    n.has(t) || (n.add(t), t.then(r, r))
                })
            }
        }

        function Rc(e, t) {
            var n = t.deletions;
            if (n !== null)
                for (var i = 0; i < n.length; i++) {
                    var a = n[i];
                    try {
                        var o = e,
                            s = t,
                            c = s;
                        a: for (; c !== null;) {
                            switch (c.tag) {
                                case 5:
                                    Nc = c.stateNode, Pc = !1;
                                    break a;
                                case 3:
                                    Nc = c.stateNode.containerInfo, Pc = !0;
                                    break a;
                                case 4:
                                    Nc = c.stateNode.containerInfo, Pc = !0;
                                    break a
                            }
                            c = c.return
                        }
                        if (Nc === null) throw Error(r(160));
                        Ic(o, s, a), Nc = null, Pc = !1;
                        var l = a.alternate;
                        l !== null && (l.return = null), a.return = null
                    } catch (e) {
                        q(a, t, e)
                    }
                }
            if (t.subtreeFlags & 12854)
                for (t = t.child; t !== null;) zc(t, e), t = t.sibling
        }

        function zc(e, t) {
            var n = e.alternate,
                i = e.flags;
            switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    if (Rc(t, e), Bc(e), i & 4) {
                        try {
                            Tc(3, e, e.return), Ec(3, e)
                        } catch (t) {
                            q(e, e.return, t)
                        }
                        try {
                            Tc(5, e, e.return)
                        } catch (t) {
                            q(e, e.return, t)
                        }
                    }
                    break;
                case 1:
                    Rc(t, e), Bc(e), i & 512 && n !== null && xc(n, n.return);
                    break;
                case 5:
                    if (Rc(t, e), Bc(e), i & 512 && n !== null && xc(n, n.return), e.flags & 32) {
                        var a = e.stateNode;
                        try {
                            Ie(a, ``)
                        } catch (t) {
                            q(e, e.return, t)
                        }
                    }
                    if (i & 4 && (a = e.stateNode, a != null)) {
                        var o = e.memoizedProps,
                            s = n === null ? o : n.memoizedProps,
                            c = e.type,
                            l = e.updateQueue;
                        if (e.updateQueue = null, l !== null) try {
                            c === `input` && o.type === `radio` && o.name != null && Se(a, o), Ue(c, s);
                            var u = Ue(c, o);
                            for (s = 0; s < l.length; s += 2) {
                                var d = l[s],
                                    f = l[s + 1];
                                d === `style` ? Be(a, f) : d === `dangerouslySetInnerHTML` ? Fe(a, f) : d === `children` ? Ie(a, f) : S(a, d, f, u)
                            }
                            switch (c) {
                                case `input`:
                                    Ce(a, o);
                                    break;
                                case `textarea`:
                                    Ae(a, o);
                                    break;
                                case `select`:
                                    var p = a._wrapperState.wasMultiple;
                                    a._wrapperState.wasMultiple = !!o.multiple;
                                    var m = o.value;
                                    m == null ? p !== !!o.multiple && (o.defaultValue == null ? De(a, !!o.multiple, o.multiple ? [] : ``, !1) : De(a, !!o.multiple, o.defaultValue, !0)) : De(a, !!o.multiple, m, !1)
                            }
                            a[zi] = o
                        } catch (t) {
                            q(e, e.return, t)
                        }
                    }
                    break;
                case 6:
                    if (Rc(t, e), Bc(e), i & 4) {
                        if (e.stateNode === null) throw Error(r(162));
                        a = e.stateNode, o = e.memoizedProps;
                        try {
                            a.nodeValue = o
                        } catch (t) {
                            q(e, e.return, t)
                        }
                    }
                    break;
                case 3:
                    if (Rc(t, e), Bc(e), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
                        vn(t.containerInfo)
                    } catch (t) {
                        q(e, e.return, t)
                    }
                    break;
                case 4:
                    Rc(t, e), Bc(e);
                    break;
                case 13:
                    Rc(t, e), Bc(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (sl = Ct())), i & 4 && Lc(e);
                    break;
                case 22:
                    if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (yc = (u = yc) || d, Rc(t, e), yc = u) : Rc(t, e), Bc(e), i & 8192) {
                        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1)
                            for (U = e, d = e.child; d !== null;) {
                                for (f = U = d; U !== null;) {
                                    switch (p = U, m = p.child, p.tag) {
                                        case 0:
                                        case 11:
                                        case 14:
                                        case 15:
                                            Tc(4, p, p.return);
                                            break;
                                        case 1:
                                            xc(p, p.return);
                                            var h = p.stateNode;
                                            if (typeof h.componentWillUnmount == `function`) {
                                                i = p, n = p.return;
                                                try {
                                                    t = i, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount()
                                                } catch (e) {
                                                    q(i, n, e)
                                                }
                                            }
                                            break;
                                        case 5:
                                            xc(p, p.return);
                                            break;
                                        case 22:
                                            if (p.memoizedState !== null) {
                                                Wc(f);
                                                continue
                                            }
                                    }
                                    m === null ? Wc(f) : (m.return = p, U = m)
                                }
                                d = d.sibling
                            }
                        a: for (d = null, f = e;;) {
                            if (f.tag === 5) {
                                if (d === null) {
                                    d = f;
                                    try {
                                        a = f.stateNode, u ? (o = a.style, typeof o.setProperty == `function` ? o.setProperty(`display`, `none`, `important`) : o.display = `none`) : (c = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty(`display`) ? l.display : null, c.style.display = ze(`display`, s))
                                    } catch (t) {
                                        q(e, e.return, t)
                                    }
                                }
                            } else if (f.tag === 6) {
                                if (d === null) try {
                                    f.stateNode.nodeValue = u ? `` : f.memoizedProps
                                } catch (t) {
                                    q(e, e.return, t)
                                }
                            } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                                f.child.return = f, f = f.child;
                                continue
                            }
                            if (f === e) break a;
                            for (; f.sibling === null;) {
                                if (f.return === null || f.return === e) break a;
                                d === f && (d = null), f = f.return
                            }
                            d === f && (d = null), f.sibling.return = f.return, f = f.sibling
                        }
                    }
                    break;
                case 19:
                    Rc(t, e), Bc(e), i & 4 && Lc(e);
                    break;
                case 21:
                    break;
                default:
                    Rc(t, e), Bc(e)
            }
        }

        function Bc(e) {
            var t = e.flags;
            if (t & 2) {
                try {
                    a: {
                        for (var n = e.return; n !== null;) {
                            if (kc(n)) {
                                var i = n;
                                break a
                            }
                            n = n.return
                        }
                        throw Error(r(160))
                    }
                    switch (i.tag) {
                        case 5:
                            var a = i.stateNode;
                            i.flags & 32 && (Ie(a, ``), i.flags &= -33), Mc(e, Ac(e), a);
                            break;
                        case 3:
                        case 4:
                            var o = i.stateNode.containerInfo;
                            jc(e, Ac(e), o);
                            break;
                        default:
                            throw Error(r(161))
                    }
                }
                catch (t) {
                    q(e, e.return, t)
                }
                e.flags &= -3
            }
            t & 4096 && (e.flags &= -4097)
        }

        function Vc(e, t, n) {
            U = e, Hc(e, t, n)
        }

        function Hc(e, t, n) {
            for (var r = !!(e.mode & 1); U !== null;) {
                var i = U,
                    a = i.child;
                if (i.tag === 22 && r) {
                    var o = i.memoizedState !== null || vc;
                    if (!o) {
                        var s = i.alternate,
                            c = s !== null && s.memoizedState !== null || yc;
                        s = vc;
                        var l = yc;
                        if (vc = o, (yc = c) && !l)
                            for (U = i; U !== null;) o = U, c = o.child, o.tag === 22 && o.memoizedState !== null || c === null ? Gc(i) : (c.return = o, U = c);
                        for (; a !== null;) U = a, Hc(a, t, n), a = a.sibling;
                        U = i, vc = s, yc = l
                    }
                    Uc(e, t, n)
                } else i.subtreeFlags & 8772 && a !== null ? (a.return = i, U = a) : Uc(e, t, n)
            }
        }

        function Uc(e) {
            for (; U !== null;) {
                var t = U;
                if (t.flags & 8772) {
                    var n = t.alternate;
                    try {
                        if (t.flags & 8772) switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                yc || Ec(5, t);
                                break;
                            case 1:
                                var i = t.stateNode;
                                if (t.flags & 4 && !yc)
                                    if (n === null) i.componentDidMount();
                                    else {
                                        var a = t.elementType === t.type ? n.memoizedProps : V(t.type, n.memoizedProps);
                                        i.componentDidUpdate(a, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate)
                                    }
                                var o = t.updateQueue;
                                o !== null && ho(t, o, i);
                                break;
                            case 3:
                                var s = t.updateQueue;
                                if (s !== null) {
                                    if (n = null, t.child !== null) switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode
                                    }
                                    ho(t, s, n)
                                }
                                break;
                            case 5:
                                var c = t.stateNode;
                                if (n === null && t.flags & 4) {
                                    n = c;
                                    var l = t.memoizedProps;
                                    switch (t.type) {
                                        case `button`:
                                        case `input`:
                                        case `select`:
                                        case `textarea`:
                                            l.autoFocus && n.focus();
                                            break;
                                        case `img`:
                                            l.src && (n.src = l.src)
                                    }
                                }
                                break;
                            case 6:
                                break;
                            case 4:
                                break;
                            case 12:
                                break;
                            case 13:
                                if (t.memoizedState === null) {
                                    var u = t.alternate;
                                    if (u !== null) {
                                        var d = u.memoizedState;
                                        if (d !== null) {
                                            var f = d.dehydrated;
                                            f !== null && vn(f)
                                        }
                                    }
                                }
                                break;
                            case 19:
                            case 17:
                            case 21:
                            case 22:
                            case 23:
                            case 25:
                                break;
                            default:
                                throw Error(r(163))
                        }
                        yc || t.flags & 512 && Dc(t)
                    } catch (e) {
                        q(t, t.return, e)
                    }
                }
                if (t === e) {
                    U = null;
                    break
                }
                if (n = t.sibling, n !== null) {
                    n.return = t.return, U = n;
                    break
                }
                U = t.return
            }
        }

        function Wc(e) {
            for (; U !== null;) {
                var t = U;
                if (t === e) {
                    U = null;
                    break
                }
                var n = t.sibling;
                if (n !== null) {
                    n.return = t.return, U = n;
                    break
                }
                U = t.return
            }
        }

        function Gc(e) {
            for (; U !== null;) {
                var t = U;
                try {
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            var n = t.return;
                            try {
                                Ec(4, t)
                            } catch (e) {
                                q(t, n, e)
                            }
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (typeof r.componentDidMount == `function`) {
                                var i = t.return;
                                try {
                                    r.componentDidMount()
                                } catch (e) {
                                    q(t, i, e)
                                }
                            }
                            var a = t.return;
                            try {
                                Dc(t)
                            } catch (e) {
                                q(t, a, e)
                            }
                            break;
                        case 5:
                            var o = t.return;
                            try {
                                Dc(t)
                            } catch (e) {
                                q(t, o, e)
                            }
                    }
                } catch (e) {
                    q(t, t.return, e)
                }
                if (t === e) {
                    U = null;
                    break
                }
                var s = t.sibling;
                if (s !== null) {
                    s.return = t.return, U = s;
                    break
                }
                U = t.return
            }
        }
        var Kc = Math.ceil,
            qc = C.ReactCurrentDispatcher,
            Jc = C.ReactCurrentOwner,
            W = C.ReactCurrentBatchConfig,
            G = 0,
            Yc = null,
            Xc = null,
            Zc = 0,
            Qc = 0,
            $c = Xi(0),
            el = 0,
            tl = null,
            nl = 0,
            rl = 0,
            il = 0,
            al = null,
            ol = null,
            sl = 0,
            cl = 1 / 0,
            ll = null,
            ul = !1,
            dl = null,
            fl = null,
            pl = !1,
            ml = null,
            hl = 0,
            gl = 0,
            _l = null,
            vl = -1,
            yl = 0;

        function bl() {
            return G & 6 ? Ct() : vl === -1 ? vl = Ct() : vl
        }

        function K(e) {
            return e.mode & 1 ? G & 2 && Zc !== 0 ? Zc & -Zc : Ba.transition === null ? (e = N, e === 0 ? (e = window.event, e = e === void 0 ? 16 : En(e.type), e) : e) : (yl === 0 && (yl = Wt()), yl) : 1
        }

        function xl(e, t, n, i) {
            if (50 < gl) throw gl = 0, _l = null, Error(r(185));
            Kt(e, n, i), (!(G & 2) || e !== Yc) && (e === Yc && (!(G & 2) && (rl |= n), el === 4 && Dl(e, Zc)), Sl(e, i), n === 1 && G === 0 && !(t.mode & 1) && (cl = Ct() + 500, la && pa()))
        }

        function Sl(e, t) {
            var n = e.callbackNode;
            Ht(e, t);
            var r = Bt(e, e === Yc ? Zc : 0);
            if (r === 0) n !== null && bt(n), e.callbackNode = null, e.callbackPriority = 0;
            else if (t = r & -r, e.callbackPriority !== t) {
                if (n != null && bt(n), t === 1) e.tag === 0 ? fa(Ol.bind(null, e)) : da(Ol.bind(null, e)), Mi(function() {
                    !(G & 6) && pa()
                }), n = null;
                else {
                    switch (Yt(r)) {
                        case 1:
                            n = Tt;
                            break;
                        case 4:
                            n = Et;
                            break;
                        case 16:
                            n = Dt;
                            break;
                        case 536870912:
                            n = kt;
                            break;
                        default:
                            n = Dt
                    }
                    n = Xl(n, Cl.bind(null, e))
                }
                e.callbackPriority = t, e.callbackNode = n
            }
        }

        function Cl(e, t) {
            if (vl = -1, yl = 0, G & 6) throw Error(r(327));
            var n = e.callbackNode;
            if (Ul() && e.callbackNode !== n) return null;
            var i = Bt(e, e === Yc ? Zc : 0);
            if (i === 0) return null;
            if (i & 30 || (i & e.expiredLanes) !== 0 || t) t = Il(e, i);
            else {
                t = i;
                var a = G;
                G |= 2;
                var o = Pl();
                (Yc !== e || Zc !== t) && (ll = null, cl = Ct() + 500, Ml(e, t));
                do try {
                    Rl();
                    break
                } catch (t) {
                    Nl(e, t)
                }
                while (1);
                Za(), qc.current = o, G = a, Xc === null ? (Yc = null, Zc = 0, t = el) : t = 0
            }
            if (t !== 0) {
                if (t === 2 && (a = Ut(e), a !== 0 && (i = a, t = wl(e, a))), t === 1) throw n = tl, Ml(e, 0), Dl(e, i), Sl(e, Ct()), n;
                if (t === 6) Dl(e, i);
                else {
                    if (a = e.current.alternate, !(i & 30) && !El(a) && (t = Il(e, i), t === 2 && (o = Ut(e), o !== 0 && (i = o, t = wl(e, o))), t === 1)) throw n = tl, Ml(e, 0), Dl(e, i), Sl(e, Ct()), n;
                    switch (e.finishedWork = a, e.finishedLanes = i, t) {
                        case 0:
                        case 1:
                            throw Error(r(345));
                        case 2:
                            Vl(e, ol, ll);
                            break;
                        case 3:
                            if (Dl(e, i), (i & 130023424) === i && (t = sl + 500 - Ct(), 10 < t)) {
                                if (Bt(e, 0) !== 0) break;
                                if (a = e.suspendedLanes, (a & i) !== i) {
                                    bl(), e.pingedLanes |= e.suspendedLanes & a;
                                    break
                                }
                                e.timeoutHandle = ki(Vl.bind(null, e, ol, ll), t);
                                break
                            }
                            Vl(e, ol, ll);
                            break;
                        case 4:
                            if (Dl(e, i), (i & 4194240) === i) break;
                            for (t = e.eventTimes, a = -1; 0 < i;) {
                                var s = 31 - Nt(i);
                                o = 1 << s, s = t[s], s > a && (a = s), i &= ~o
                            }
                            if (i = a, i = Ct() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * Kc(i / 1960)) - i, 10 < i) {
                                e.timeoutHandle = ki(Vl.bind(null, e, ol, ll), i);
                                break
                            }
                            Vl(e, ol, ll);
                            break;
                        case 5:
                            Vl(e, ol, ll);
                            break;
                        default:
                            throw Error(r(329))
                    }
                }
            }
            return Sl(e, Ct()), e.callbackNode === n ? Cl.bind(null, e) : null
        }

        function wl(e, t) {
            var n = al;
            return e.current.memoizedState.isDehydrated && (Ml(e, t).flags |= 256), e = Il(e, t), e !== 2 && (t = ol, ol = n, t !== null && Tl(t)), e
        }

        function Tl(e) {
            ol === null ? ol = e : ol.push.apply(ol, e)
        }

        function El(e) {
            for (var t = e;;) {
                if (t.flags & 16384) {
                    var n = t.updateQueue;
                    if (n !== null && (n = n.stores, n !== null))
                        for (var r = 0; r < n.length; r++) {
                            var i = n[r],
                                a = i.getSnapshot;
                            i = i.value;
                            try {
                                if (!Pr(a(), i)) return !1
                            } catch {
                                return !1
                            }
                        }
                }
                if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
                else {
                    if (t === e) break;
                    for (; t.sibling === null;) {
                        if (t.return === null || t.return === e) return !0;
                        t = t.return
                    }
                    t.sibling.return = t.return, t = t.sibling
                }
            }
            return !0
        }

        function Dl(e, t) {
            for (t &= ~il, t &= ~rl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                var n = 31 - Nt(t),
                    r = 1 << n;
                e[n] = -1, t &= ~r
            }
        }

        function Ol(e) {
            if (G & 6) throw Error(r(327));
            Ul();
            var t = Bt(e, 0);
            if (!(t & 1)) return Sl(e, Ct()), null;
            var n = Il(e, t);
            if (e.tag !== 0 && n === 2) {
                var i = Ut(e);
                i !== 0 && (t = i, n = wl(e, i))
            }
            if (n === 1) throw n = tl, Ml(e, 0), Dl(e, t), Sl(e, Ct()), n;
            if (n === 6) throw Error(r(345));
            return e.finishedWork = e.current.alternate, e.finishedLanes = t, Vl(e, ol, ll), Sl(e, Ct()), null
        }

        function kl(e, t) {
            var n = G;
            G |= 1;
            try {
                return e(t)
            } finally {
                G = n, G === 0 && (cl = Ct() + 500, la && pa())
            }
        }

        function Al(e) {
            ml !== null && ml.tag === 0 && !(G & 6) && Ul();
            var t = G;
            G |= 1;
            var n = W.transition,
                r = N;
            try {
                if (W.transition = null, N = 1, e) return e()
            } finally {
                N = r, W.transition = n, G = t, !(G & 6) && pa()
            }
        }

        function jl() {
            Qc = $c.current, R($c)
        }

        function Ml(e, t) {
            e.finishedWork = null, e.finishedLanes = 0;
            var n = e.timeoutHandle;
            if (n !== -1 && (e.timeoutHandle = -1, Ai(n)), Xc !== null)
                for (n = Xc.return; n !== null;) {
                    var r = n;
                    switch (Ea(r), r.tag) {
                        case 1:
                            r = r.type.childContextTypes, r != null && ra();
                            break;
                        case 3:
                            So(), R($i), R(Qi), Oo();
                            break;
                        case 5:
                            wo(r);
                            break;
                        case 4:
                            So();
                            break;
                        case 13:
                            R(To);
                            break;
                        case 19:
                            R(To);
                            break;
                        case 10:
                            Qa(r.type._context);
                            break;
                        case 22:
                        case 23:
                            jl()
                    }
                    n = n.return
                }
            if (Yc = e, Xc = e = tu(e.current, null), Zc = Qc = t, el = 0, tl = null, il = rl = nl = 0, ol = al = null, no !== null) {
                for (t = 0; t < no.length; t++)
                    if (n = no[t], r = n.interleaved, r !== null) {
                        n.interleaved = null;
                        var i = r.next,
                            a = n.pending;
                        if (a !== null) {
                            var o = a.next;
                            a.next = i, r.next = o
                        }
                        n.pending = r
                    }
                no = null
            }
            return e
        }

        function Nl(e, t) {
            do {
                var n = Xc;
                try {
                    if (Za(), ko.current = Ss, Fo) {
                        for (var i = Mo.memoizedState; i !== null;) {
                            var a = i.queue;
                            a !== null && (a.pending = null), i = i.next
                        }
                        Fo = !1
                    }
                    if (jo = 0, Po = No = Mo = null, Io = !1, Lo = 0, Jc.current = null, n === null || n.return === null) {
                        el = 1, tl = t, Xc = null;
                        break
                    }
                    a: {
                        var o = e,
                            s = n.return,
                            c = n,
                            l = t;
                        if (t = Zc, c.flags |= 32768, typeof l == `object` && l && typeof l.then == `function`) {
                            var u = l,
                                d = c,
                                f = d.tag;
                            if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                                var p = d.alternate;
                                p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null)
                            }
                            var m = zs(s);
                            if (m !== null) {
                                m.flags &= -257, Bs(m, s, c, o, t), m.mode & 1 && Rs(o, u, t), t = m, l = u;
                                var h = t.updateQueue;
                                if (h === null) {
                                    var g = new Set;
                                    g.add(l), t.updateQueue = g
                                } else h.add(l);
                                break a
                            }
                            if (!(t & 1)) {
                                Rs(o, u, t), Fl();
                                break a
                            }
                            l = Error(r(426))
                        } else if (ka && c.mode & 1) {
                            var _ = zs(s);
                            if (_ !== null) {
                                !(_.flags & 65536) && (_.flags |= 256), Bs(_, s, c, o, t), za(Ms(l, c));
                                break a
                            }
                        }
                        o = l = Ms(l, c),
                        el !== 4 && (el = 2),
                        al === null ? al = [o] : al.push(o),
                        o = s;do {
                            switch (o.tag) {
                                case 3:
                                    o.flags |= 65536, t &= -t, o.lanes |= t;
                                    var v = Is(o, l, t);
                                    po(o, v);
                                    break a;
                                case 1:
                                    c = l;
                                    var y = o.type,
                                        b = o.stateNode;
                                    if (!(o.flags & 128) && (typeof y.getDerivedStateFromError == `function` || b !== null && typeof b.componentDidCatch == `function` && (fl === null || !fl.has(b)))) {
                                        o.flags |= 65536, t &= -t, o.lanes |= t;
                                        var x = Ls(o, c, t);
                                        po(o, x);
                                        break a
                                    }
                            }
                            o = o.return
                        } while (o !== null)
                    }
                    Bl(n)
                } catch (e) {
                    t = e, Xc === n && n !== null && (Xc = n = n.return);
                    continue
                }
                break
            } while (1)
        }

        function Pl() {
            var e = qc.current;
            return qc.current = Ss, e === null ? Ss : e
        }

        function Fl() {
            (el === 0 || el === 3 || el === 2) && (el = 4), Yc === null || !(nl & 268435455) && !(rl & 268435455) || Dl(Yc, Zc)
        }

        function Il(e, t) {
            var n = G;
            G |= 2;
            var i = Pl();
            (Yc !== e || Zc !== t) && (ll = null, Ml(e, t));
            do try {
                Ll();
                break
            } catch (t) {
                Nl(e, t)
            }
            while (1);
            if (Za(), G = n, qc.current = i, Xc !== null) throw Error(r(261));
            return Yc = null, Zc = 0, el
        }

        function Ll() {
            for (; Xc !== null;) zl(Xc)
        }

        function Rl() {
            for (; Xc !== null && !xt();) zl(Xc)
        }

        function zl(e) {
            var t = Yl(e.alternate, e, Qc);
            e.memoizedProps = e.pendingProps, t === null ? Bl(e) : Xc = t, Jc.current = null
        }

        function Bl(e) {
            var t = e;
            do {
                var n = t.alternate;
                if (e = t.return, t.flags & 32768) {
                    if (n = _c(n, t), n !== null) {
                        n.flags &= 32767, Xc = n;
                        return
                    }
                    if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                    else {
                        el = 6, Xc = null;
                        return
                    }
                } else if (n = gc(n, t, Qc), n !== null) {
                    Xc = n;
                    return
                }
                if (t = t.sibling, t !== null) {
                    Xc = t;
                    return
                }
                Xc = t = e
            } while (t !== null);
            el === 0 && (el = 5)
        }

        function Vl(e, t, n) {
            var r = N,
                i = W.transition;
            try {
                W.transition = null, N = 1, Hl(e, t, n, r)
            } finally {
                W.transition = i, N = r
            }
            return null
        }

        function Hl(e, t, n, i) {
            do Ul(); while (ml !== null);
            if (G & 6) throw Error(r(327));
            n = e.finishedWork;
            var a = e.finishedLanes;
            if (n === null) return null;
            if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(r(177));
            e.callbackNode = null, e.callbackPriority = 0;
            var o = n.lanes | n.childLanes;
            if (qt(e, o), e === Yc && (Xc = Yc = null, Zc = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || pl || (pl = !0, Xl(Dt, function() {
                    return Ul(), null
                })), o = !!(n.flags & 15990), n.subtreeFlags & 15990 || o) {
                o = W.transition, W.transition = null;
                var s = N;
                N = 1;
                var c = G;
                G |= 4, Jc.current = null, wc(e, n), zc(n, e), Br(Di), bn = !!Ei, Di = Ei = null, e.current = n, Vc(n, e, a), St(), G = c, N = s, W.transition = o
            } else e.current = n;
            if (pl && (pl = !1, ml = e, hl = a), o = e.pendingLanes, o === 0 && (fl = null), Mt(n.stateNode, i), Sl(e, Ct()), t !== null)
                for (i = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], i(a.value, {
                    componentStack: a.stack,
                    digest: a.digest
                });
            if (ul) throw ul = !1, e = dl, dl = null, e;
            return hl & 1 && e.tag !== 0 && Ul(), o = e.pendingLanes, o & 1 ? e === _l ? gl++ : (gl = 0, _l = e) : gl = 0, pa(), null
        }

        function Ul() {
            if (ml !== null) {
                var e = Yt(hl),
                    t = W.transition,
                    n = N;
                try {
                    if (W.transition = null, N = 16 > e ? 16 : e, ml === null) var i = !1;
                    else {
                        if (e = ml, ml = null, hl = 0, G & 6) throw Error(r(331));
                        var a = G;
                        for (G |= 4, U = e.current; U !== null;) {
                            var o = U,
                                s = o.child;
                            if (U.flags & 16) {
                                var c = o.deletions;
                                if (c !== null) {
                                    for (var l = 0; l < c.length; l++) {
                                        var u = c[l];
                                        for (U = u; U !== null;) {
                                            var d = U;
                                            switch (d.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    Tc(8, d, o)
                                            }
                                            var f = d.child;
                                            if (f !== null) f.return = d, U = f;
                                            else
                                                for (; U !== null;) {
                                                    d = U;
                                                    var p = d.sibling,
                                                        m = d.return;
                                                    if (Oc(d), d === u) {
                                                        U = null;
                                                        break
                                                    }
                                                    if (p !== null) {
                                                        p.return = m, U = p;
                                                        break
                                                    }
                                                    U = m
                                                }
                                        }
                                    }
                                    var h = o.alternate;
                                    if (h !== null) {
                                        var g = h.child;
                                        if (g !== null) {
                                            h.child = null;
                                            do {
                                                var _ = g.sibling;
                                                g.sibling = null, g = _
                                            } while (g !== null)
                                        }
                                    }
                                    U = o
                                }
                            }
                            if (o.subtreeFlags & 2064 && s !== null) s.return = o, U = s;
                            else b: for (; U !== null;) {
                                if (o = U, o.flags & 2048) switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Tc(9, o, o.return)
                                }
                                var v = o.sibling;
                                if (v !== null) {
                                    v.return = o.return, U = v;
                                    break b
                                }
                                U = o.return
                            }
                        }
                        var y = e.current;
                        for (U = y; U !== null;) {
                            s = U;
                            var b = s.child;
                            if (s.subtreeFlags & 2064 && b !== null) b.return = s, U = b;
                            else b: for (s = y; U !== null;) {
                                if (c = U, c.flags & 2048) try {
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ec(9, c)
                                    }
                                } catch (e) {
                                    q(c, c.return, e)
                                }
                                if (c === s) {
                                    U = null;
                                    break b
                                }
                                var x = c.sibling;
                                if (x !== null) {
                                    x.return = c.return, U = x;
                                    break b
                                }
                                U = c.return
                            }
                        }
                        if (G = a, pa(), jt && typeof jt.onPostCommitFiberRoot == `function`) try {
                            jt.onPostCommitFiberRoot(At, e)
                        } catch {}
                        i = !0
                    }
                    return i
                } finally {
                    N = n, W.transition = t
                }
            }
            return !1
        }

        function Wl(e, t, n) {
            t = Ms(n, t), t = Is(e, t, 1), e = uo(e, t, 1), t = bl(), e !== null && (Kt(e, 1, t), Sl(e, t))
        }

        function q(e, t, n) {
            if (e.tag === 3) Wl(e, e, n);
            else
                for (; t !== null;) {
                    if (t.tag === 3) {
                        Wl(t, e, n);
                        break
                    }
                    if (t.tag === 1) {
                        var r = t.stateNode;
                        if (typeof t.type.getDerivedStateFromError == `function` || typeof r.componentDidCatch == `function` && (fl === null || !fl.has(r))) {
                            e = Ms(n, e), e = Ls(t, e, 1), t = uo(t, e, 1), e = bl(), t !== null && (Kt(t, 1, e), Sl(t, e));
                            break
                        }
                    }
                    t = t.return
                }
        }

        function Gl(e, t, n) {
            var r = e.pingCache;
            r !== null && r.delete(t), t = bl(), e.pingedLanes |= e.suspendedLanes & n, Yc === e && (Zc & n) === n && (el === 4 || el === 3 && (Zc & 130023424) === Zc && 500 > Ct() - sl ? Ml(e, 0) : il |= n), Sl(e, t)
        }

        function Kl(e, t) {
            t === 0 && (e.mode & 1 ? (t = Rt, Rt <<= 1, !(Rt & 130023424) && (Rt = 4194304)) : t = 1);
            var n = bl();
            e = ao(e, t), e !== null && (Kt(e, t, n), Sl(e, n))
        }

        function ql(e) {
            var t = e.memoizedState,
                n = 0;
            t !== null && (n = t.retryLane), Kl(e, n)
        }

        function Jl(e, t) {
            var n = 0;
            switch (e.tag) {
                case 13:
                    var i = e.stateNode,
                        a = e.memoizedState;
                    a !== null && (n = a.retryLane);
                    break;
                case 19:
                    i = e.stateNode;
                    break;
                default:
                    throw Error(r(314))
            }
            i !== null && i.delete(t), Kl(e, n)
        }
        var Yl = function(e, t, n) {
            if (e !== null)
                if (e.memoizedProps !== t.pendingProps || $i.current) Hs = !0;
                else {
                    if ((e.lanes & n) === 0 && !(t.flags & 128)) return Hs = !1, uc(e, t, n);
                    Hs = !!(e.flags & 131072)
                }
            else Hs = !1, ka && t.flags & 1048576 && wa(t, _a, t.index);
            switch (t.lanes = 0, t.tag) {
                case 2:
                    var i = t.type;
                    cc(e, t), e = t.pendingProps;
                    var a = ta(t, Qi.current);
                    eo(t, n), a = Vo(null, t, i, e, a, n);
                    var o = Ho();
                    return t.flags |= 1, typeof a == `object` && a && typeof a.render == `function` && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, na(i) ? (o = !0, oa(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, so(t), a.updater = Ds, t.stateNode = a, a._reactInternals = t, js(t, i, e, n), t = Xs(null, t, i, !0, o, n)) : (t.tag = 0, ka && o && Ta(t), H(null, t, a, n), t = t.child), t;
                case 16:
                    i = t.elementType;
                    a: {
                        switch (cc(e, t), e = t.pendingProps, a = i._init, i = a(i._payload), t.type = i, a = t.tag = eu(i), e = V(i, e), a) {
                            case 0:
                                t = Js(null, t, i, e, n);
                                break a;
                            case 1:
                                t = Ys(null, t, i, e, n);
                                break a;
                            case 11:
                                t = Us(null, t, i, e, n);
                                break a;
                            case 14:
                                t = Ws(null, t, i, V(i.type, e), n);
                                break a
                        }
                        throw Error(r(306, i, ``))
                    }
                    return t;
                case 0:
                    return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : V(i, a), Js(e, t, i, a, n);
                case 1:
                    return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : V(i, a), Ys(e, t, i, a, n);
                case 3:
                    a: {
                        if (Zs(t), e === null) throw Error(r(387));i = t.pendingProps,
                        o = t.memoizedState,
                        a = o.element,
                        co(e, t),
                        mo(t, i, null, n);
                        var s = t.memoizedState;
                        if (i = s.element, o.isDehydrated)
                            if (o = {
                                    element: i,
                                    isDehydrated: !1,
                                    cache: s.cache,
                                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                                    transitions: s.transitions
                                }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                                a = Ms(Error(r(423)), t), t = Qs(e, t, i, n, a);
                                break a
                            } else if (i !== a) {
                            a = Ms(Error(r(424)), t), t = Qs(e, t, i, n, a);
                            break a
                        } else
                            for (Oa = Fi(t.stateNode.containerInfo.firstChild), Da = t, ka = !0, Aa = null, n = Ka(t, null, i, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                        else {
                            if (Ra(), i === a) {
                                t = lc(e, t, n);
                                break a
                            }
                            H(e, t, i, n)
                        }
                        t = t.child
                    }
                    return t;
                case 5:
                    return Co(t), e === null && Pa(t), i = t.type, a = t.pendingProps, o = e === null ? null : e.memoizedProps, s = a.children, Oi(i, a) ? s = null : o !== null && Oi(i, o) && (t.flags |= 32), qs(e, t), H(e, t, s, n), t.child;
                case 6:
                    return e === null && Pa(t), null;
                case 13:
                    return tc(e, t, n);
                case 4:
                    return xo(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = Ga(t, null, i, n) : H(e, t, i, n), t.child;
                case 11:
                    return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : V(i, a), Us(e, t, i, a, n);
                case 7:
                    return H(e, t, t.pendingProps, n), t.child;
                case 8:
                    return H(e, t, t.pendingProps.children, n), t.child;
                case 12:
                    return H(e, t, t.pendingProps.children, n), t.child;
                case 10:
                    a: {
                        if (i = t.type._context, a = t.pendingProps, o = t.memoizedProps, s = a.value, z(qa, i._currentValue), i._currentValue = s, o !== null)
                            if (Pr(o.value, s)) {
                                if (o.children === a.children && !$i.current) {
                                    t = lc(e, t, n);
                                    break a
                                }
                            } else
                                for (o = t.child, o !== null && (o.return = t); o !== null;) {
                                    var c = o.dependencies;
                                    if (c !== null) {
                                        s = o.child;
                                        for (var l = c.firstContext; l !== null;) {
                                            if (l.context === i) {
                                                if (o.tag === 1) {
                                                    l = lo(-1, n & -n), l.tag = 2;
                                                    var u = o.updateQueue;
                                                    if (u !== null) {
                                                        u = u.shared;
                                                        var d = u.pending;
                                                        d === null ? l.next = l : (l.next = d.next, d.next = l), u.pending = l
                                                    }
                                                }
                                                o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), $a(o.return, n, t), c.lanes |= n;
                                                break
                                            }
                                            l = l.next
                                        }
                                    } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
                                    else if (o.tag === 18) {
                                        if (s = o.return, s === null) throw Error(r(341));
                                        s.lanes |= n, c = s.alternate, c !== null && (c.lanes |= n), $a(s, n, t), s = o.sibling
                                    } else s = o.child;
                                    if (s !== null) s.return = o;
                                    else
                                        for (s = o; s !== null;) {
                                            if (s === t) {
                                                s = null;
                                                break
                                            }
                                            if (o = s.sibling, o !== null) {
                                                o.return = s.return, s = o;
                                                break
                                            }
                                            s = s.return
                                        }
                                    o = s
                                }
                        H(e, t, a.children, n),
                        t = t.child
                    }
                    return t;
                case 9:
                    return a = t.type, i = t.pendingProps.children, eo(t, n), a = to(a), i = i(a), t.flags |= 1, H(e, t, i, n), t.child;
                case 14:
                    return i = t.type, a = V(i, t.pendingProps), a = V(i.type, a), Ws(e, t, i, a, n);
                case 15:
                    return Gs(e, t, t.type, t.pendingProps, n);
                case 17:
                    return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : V(i, a), cc(e, t), t.tag = 1, na(i) ? (e = !0, oa(t)) : e = !1, eo(t, n), ks(t, i, a), js(t, i, a, n), Xs(null, t, i, !0, e, n);
                case 19:
                    return sc(e, t, n);
                case 22:
                    return Ks(e, t, n)
            }
            throw Error(r(156, t.tag))
        };

        function Xl(e, t) {
            return yt(e, t)
        }

        function Zl(e, t, n, r) {
            this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
        }

        function Ql(e, t, n, r) {
            return new Zl(e, t, n, r)
        }

        function $l(e) {
            return e = e.prototype, !(!e || !e.isReactComponent)
        }

        function eu(e) {
            if (typeof e == `function`) return +!!$l(e);
            if (e != null) {
                if (e = e.$$typeof, e === ie) return 11;
                if (e === O) return 14
            }
            return 2
        }

        function tu(e, t) {
            var n = e.alternate;
            return n === null ? (n = Ql(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
        }

        function nu(e, t, n, i, a, o) {
            var s = 2;
            if (i = e, typeof e == `function`) $l(e) && (s = 1);
            else if (typeof e == `string`) s = 5;
            else a: switch (e) {
                case ee:
                    return ru(n.children, a, o, t);
                case E:
                    s = 8, a |= 8;
                    break;
                case te:
                    return e = Ql(12, n, t, a | 2), e.elementType = te, e.lanes = o, e;
                case D:
                    return e = Ql(13, n, t, a), e.elementType = D, e.lanes = o, e;
                case ae:
                    return e = Ql(19, n, t, a), e.elementType = ae, e.lanes = o, e;
                case A:
                    return iu(n, a, o, t);
                default:
                    if (typeof e == `object` && e) switch (e.$$typeof) {
                        case ne:
                            s = 10;
                            break a;
                        case re:
                            s = 9;
                            break a;
                        case ie:
                            s = 11;
                            break a;
                        case O:
                            s = 14;
                            break a;
                        case k:
                            s = 16, i = null;
                            break a
                    }
                    throw Error(r(130, e == null ? e : typeof e, ``))
            }
            return t = Ql(s, n, t, a), t.elementType = e, t.type = i, t.lanes = o, t
        }

        function ru(e, t, n, r) {
            return e = Ql(7, e, r, t), e.lanes = n, e
        }

        function iu(e, t, n, r) {
            return e = Ql(22, e, r, t), e.elementType = A, e.lanes = n, e.stateNode = {
                isHidden: !1
            }, e
        }

        function au(e, t, n) {
            return e = Ql(6, e, null, t), e.lanes = n, e
        }

        function ou(e, t, n) {
            return t = Ql(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            }, t
        }

        function su(e, t, n, r, i) {
            this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Gt(0), this.expirationTimes = Gt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gt(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
        }

        function cu(e, t, n, r, i, a, o, s, c) {
            return e = new su(e, t, n, s, c), t === 1 ? (t = 1, !0 === a && (t |= 8)) : t = 0, a = Ql(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = {
                element: r,
                isDehydrated: n,
                cache: null,
                transitions: null,
                pendingSuspenseBoundaries: null
            }, so(a), e
        }

        function lu(e, t, n) {
            var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: T,
                key: r == null ? null : `` + r,
                children: e,
                containerInfo: t,
                implementation: n
            }
        }

        function uu(e) {
            if (!e) return Zi;
            e = e._reactInternals;
            a: {
                if (pt(e) !== e || e.tag !== 1) throw Error(r(170));
                var t = e;do {
                    switch (t.tag) {
                        case 3:
                            t = t.stateNode.context;
                            break a;
                        case 1:
                            if (na(t.type)) {
                                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                break a
                            }
                    }
                    t = t.return
                } while (t !== null);
                throw Error(r(171))
            }
            if (e.tag === 1) {
                var n = e.type;
                if (na(n)) return aa(e, n, t)
            }
            return t
        }

        function du(e, t, n, r, i, a, o, s, c) {
            return e = cu(n, r, !0, e, i, a, o, s, c), e.context = uu(null), n = e.current, r = bl(), i = K(n), a = lo(r, i), a.callback = t ?? null, uo(n, a, i), e.current.lanes = i, Kt(e, i, r), Sl(e, r), e
        }

        function fu(e, t, n, r) {
            var i = t.current,
                a = bl(),
                o = K(i);
            return n = uu(n), t.context === null ? t.context = n : t.pendingContext = n, t = lo(a, o), t.payload = {
                element: e
            }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = uo(i, t, o), e !== null && (xl(e, i, o, a), fo(e, i, o)), o
        }

        function pu(e) {
            if (e = e.current, !e.child) return null;
            switch (e.child.tag) {
                case 5:
                    return e.child.stateNode;
                default:
                    return e.child.stateNode
            }
        }

        function mu(e, t) {
            if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
                var n = e.retryLane;
                e.retryLane = n !== 0 && n < t ? n : t
            }
        }

        function hu(e, t) {
            mu(e, t), (e = e.alternate) && mu(e, t)
        }

        function gu() {
            return null
        }
        var _u = typeof reportError == `function` ? reportError : function(e) {
            console.error(e)
        };

        function vu(e) {
            this._internalRoot = e
        }
        yu.prototype.render = vu.prototype.render = function(e) {
            var t = this._internalRoot;
            if (t === null) throw Error(r(409));
            fu(e, t, null, null)
        }, yu.prototype.unmount = vu.prototype.unmount = function() {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                Al(function() {
                    fu(null, e, null, null)
                }), t[Bi] = null
            }
        };

        function yu(e) {
            this._internalRoot = e
        }
        yu.prototype.unstable_scheduleHydration = function(e) {
            if (e) {
                var t = $t();
                e = {
                    blockedOn: null,
                    target: e,
                    priority: t
                };
                for (var n = 0; n < cn.length && t !== 0 && t < cn[n].priority; n++);
                cn.splice(n, 0, e), n === 0 && pn(e)
            }
        };

        function bu(e) {
            return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
        }

        function xu(e) {
            return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== ` react-mount-point-unstable `))
        }

        function Su() {}

        function Cu(e, t, n, r, i) {
            if (i) {
                if (typeof r == `function`) {
                    var a = r;
                    r = function() {
                        var e = pu(o);
                        a.call(e)
                    }
                }
                var o = du(t, r, e, 0, null, !1, !1, ``, Su);
                return e._reactRootContainer = o, e[Bi] = o.current, mi(e.nodeType === 8 ? e.parentNode : e), Al(), o
            }
            for (; i = e.lastChild;) e.removeChild(i);
            if (typeof r == `function`) {
                var s = r;
                r = function() {
                    var e = pu(c);
                    s.call(e)
                }
            }
            var c = cu(e, 0, !1, null, null, !1, !1, ``, Su);
            return e._reactRootContainer = c, e[Bi] = c.current, mi(e.nodeType === 8 ? e.parentNode : e), Al(function() {
                fu(t, c, n, r)
            }), c
        }

        function wu(e, t, n, r, i) {
            var a = n._reactRootContainer;
            if (a) {
                var o = a;
                if (typeof i == `function`) {
                    var s = i;
                    i = function() {
                        var e = pu(o);
                        s.call(e)
                    }
                }
                fu(t, o, e, i)
            } else o = Cu(n, t, e, i, r);
            return pu(o)
        }
        Xt = function(e) {
            switch (e.tag) {
                case 3:
                    var t = e.stateNode;
                    if (t.current.memoizedState.isDehydrated) {
                        var n = zt(t.pendingLanes);
                        n !== 0 && (Jt(t, n | 1), Sl(t, Ct()), !(G & 6) && (cl = Ct() + 500, pa()))
                    }
                    break;
                case 13:
                    Al(function() {
                        var t = ao(e, 1);
                        t !== null && xl(t, e, 1, bl())
                    }), hu(e, 1)
            }
        }, Zt = function(e) {
            if (e.tag === 13) {
                var t = ao(e, 134217728);
                t !== null && xl(t, e, 134217728, bl()), hu(e, 134217728)
            }
        }, Qt = function(e) {
            if (e.tag === 13) {
                var t = K(e),
                    n = ao(e, t);
                n !== null && xl(n, e, t, bl()), hu(e, t)
            }
        }, $t = function() {
            return N
        }, en = function(e, t) {
            var n = N;
            try {
                return N = e, t()
            } finally {
                N = n
            }
        }, Ke = function(e, t, n) {
            switch (t) {
                case `input`:
                    if (Ce(e, n), t = n.name, n.type === `radio` && t != null) {
                        for (n = e; n.parentNode;) n = n.parentNode;
                        for (n = n.querySelectorAll(`input[name=` + JSON.stringify(`` + t) + `][type="radio"]`), t = 0; t < n.length; t++) {
                            var i = n[t];
                            if (i !== e && i.form === e.form) {
                                var a = qi(i);
                                if (!a) throw Error(r(90));
                                ve(i), Ce(i, a)
                            }
                        }
                    }
                    break;
                case `textarea`:
                    Ae(e, n);
                    break;
                case `select`:
                    t = n.value, t != null && De(e, !!n.multiple, t, !1)
            }
        }, Qe = kl, $e = Al;
        var Tu = {
                usingClientEntryPoint: !1,
                Events: [Gi, Ki, qi, Xe, Ze, kl]
            },
            Eu = {
                findFiberByHostInstance: Wi,
                bundleType: 0,
                version: `18.3.1`,
                rendererPackageName: `react-dom`
            },
            Du = {
                bundleType: Eu.bundleType,
                version: Eu.version,
                rendererPackageName: Eu.rendererPackageName,
                rendererConfig: Eu.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setErrorHandler: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: C.ReactCurrentDispatcher,
                findHostInstanceByFiber: function(e) {
                    return e = _t(e), e === null ? null : e.stateNode
                },
                findFiberByHostInstance: Eu.findFiberByHostInstance || gu,
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null,
                reconcilerVersion: `18.3.1-next-f1338f8080-20240426`
            };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
            var Ou = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!Ou.isDisabled && Ou.supportsFiber) try {
                At = Ou.inject(Du), jt = Ou
            } catch {}
        }
        e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tu, e.createPortal = function(e, t) {
            var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!bu(t)) throw Error(r(200));
            return lu(e, t, null, n)
        }, e.createRoot = function(e, t) {
            if (!bu(e)) throw Error(r(299));
            var n = !1,
                i = ``,
                a = _u;
            return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = cu(e, 1, !1, null, null, n, !1, i, a), e[Bi] = t.current, mi(e.nodeType === 8 ? e.parentNode : e), new vu(t)
        }, e.findDOMNode = function(e) {
            if (e == null) return null;
            if (e.nodeType === 1) return e;
            var t = e._reactInternals;
            if (t === void 0) throw typeof e.render == `function` ? Error(r(188)) : (e = Object.keys(e).join(`,`), Error(r(268, e)));
            return e = _t(t), e = e === null ? null : e.stateNode, e
        }, e.flushSync = function(e) {
            return Al(e)
        }, e.hydrate = function(e, t, n) {
            if (!xu(t)) throw Error(r(200));
            return wu(null, e, t, !0, n)
        }, e.hydrateRoot = function(e, t, n) {
            if (!bu(e)) throw Error(r(405));
            var i = n != null && n.hydratedSources || null,
                a = !1,
                o = ``,
                s = _u;
            if (n != null && (!0 === n.unstable_strictMode && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = du(t, null, e, 1, n ?? null, a, !1, o, s), e[Bi] = t.current, mi(e), i)
                for (e = 0; e < i.length; e++) n = i[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
            return new yu(t)
        }, e.render = function(e, t, n) {
            if (!xu(t)) throw Error(r(200));
            return wu(null, e, t, !1, n)
        }, e.unmountComponentAtNode = function(e) {
            if (!xu(e)) throw Error(r(40));
            return e._reactRootContainer ? (Al(function() {
                wu(null, null, e, !1, function() {
                    e._reactRootContainer = null, e[Bi] = null
                })
            }), !0) : !1
        }, e.unstable_batchedUpdates = kl, e.unstable_renderSubtreeIntoContainer = function(e, t, n, i) {
            if (!xu(n)) throw Error(r(200));
            if (e == null || e._reactInternals === void 0) throw Error(r(38));
            return wu(e, t, n, !1, i)
        }, e.version = `18.3.1-next-f1338f8080-20240426`
    })),
    h = o(((e, t) => {
        function n() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`)) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (e) {
                console.error(e)
            }
        }
        n(), t.exports = m()
    })),
    g = l(o((e => {
        var t = h();
        e.createRoot = t.createRoot, e.hydrateRoot = t.hydrateRoot
    }))(), 1),
    _ = l(d(), 1),
    v = 20,
    y = 1e6,
    b = {
        ADD_TOAST: `ADD_TOAST`,
        UPDATE_TOAST: `UPDATE_TOAST`,
        DISMISS_TOAST: `DISMISS_TOAST`,
        REMOVE_TOAST: `REMOVE_TOAST`
    },
    x = 0;

function S() {
    return x = (x + 1) % Number.MAX_VALUE, x.toString()
}
var C = new Map,
    w = e => {
        if (C.has(e)) return;
        let t = setTimeout(() => {
            C.delete(e), te({
                type: b.REMOVE_TOAST,
                toastId: e
            })
        }, y);
        C.set(e, t)
    },
    T = (e, t) => {
        switch (t.type) {
            case b.ADD_TOAST:
                return { ...e,
                    toasts: [t.toast, ...e.toasts].slice(0, v)
                };
            case b.UPDATE_TOAST:
                return { ...e,
                    toasts: e.toasts.map(e => e.id === t.toast.id ? { ...e,
                        ...t.toast
                    } : e)
                };
            case b.DISMISS_TOAST:
                {
                    let {
                        toastId: n
                    } = t;
                    return n ? w(n) : e.toasts.forEach(e => {
                        w(e.id)
                    }),
                    { ...e,
                        toasts: e.toasts.map(e => e.id === n || n === void 0 ? { ...e,
                            open: !1
                        } : e)
                    }
                }
            case b.REMOVE_TOAST:
                return t.toastId === void 0 ? { ...e,
                    toasts: []
                } : { ...e,
                    toasts: e.toasts.filter(e => e.id !== t.toastId)
                }
        }
    },
    ee = [],
    E = {
        toasts: []
    };

function te(e) {
    E = T(E, e), ee.forEach(e => {
        e(E)
    })
}

function ne({ ...e
}) {
    let t = S(),
        n = e => te({
            type: b.UPDATE_TOAST,
            toast: { ...e,
                id: t
            }
        }),
        r = () => te({
            type: b.DISMISS_TOAST,
            toastId: t
        });
    return te({
        type: b.ADD_TOAST,
        toast: { ...e,
            id: t,
            open: !0,
            onOpenChange: e => {
                e || r()
            }
        }
    }), {
        id: t,
        dismiss: r,
        update: n
    }
}

function re() {
    let [e, t] = (0, _.useState)(E);
    return (0, _.useEffect)(() => (ee.push(t), () => {
        let e = ee.indexOf(t);
        e > -1 && ee.splice(e, 1)
    }), [e]), { ...e,
        toast: ne,
        dismiss: e => te({
            type: b.DISMISS_TOAST,
            toastId: e
        })
    }
}
var ie = l(h(), 1);
typeof window < `u` && window.document && window.document.createElement;

function D(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(r) {
        if (e ?.(r), n === !1 || !r.defaultPrevented) return t ?.(r)
    }
}

function ae(e, t) {
    if (typeof e == `function`) return e(t);
    e != null && (e.current = t)
}

function O(...e) {
    return t => {
        let n = !1,
            r = e.map(e => {
                let r = ae(e, t);
                return !n && typeof r == `function` && (n = !0), r
            });
        if (n) return () => {
            for (let t = 0; t < r.length; t++) {
                let n = r[t];
                typeof n == `function` ? n() : ae(e[t], null)
            }
        }
    }
}

function k(...e) {
    return _.useCallback(O(...e), e)
}
var A = o((e => {
        var t = d(),
            n = Symbol.for(`react.element`),
            r = Symbol.for(`react.fragment`),
            i = Object.prototype.hasOwnProperty,
            a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
            o = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };

        function s(e, t, r) {
            var s, c = {},
                l = null,
                u = null;
            for (s in r !== void 0 && (l = `` + r), t.key !== void 0 && (l = `` + t.key), t.ref !== void 0 && (u = t.ref), t) i.call(t, s) && !o.hasOwnProperty(s) && (c[s] = t[s]);
            if (e && e.defaultProps)
                for (s in t = e.defaultProps, t) c[s] === void 0 && (c[s] = t[s]);
            return {
                $$typeof: n,
                type: e,
                key: l,
                ref: u,
                props: c,
                _owner: a.current
            }
        }
        e.Fragment = r, e.jsx = s, e.jsxs = s
    })),
    j = o(((e, t) => {
        t.exports = A()
    }))();

function oe(e, t = []) {
    let n = [];

    function r(t, r) {
        let i = _.createContext(r),
            a = n.length;
        n = [...n, r];
        let o = t => {
            let {
                scope: n,
                children: r,
                ...o
            } = t, s = n ?.[e] ?.[a] || i, c = _.useMemo(() => o, Object.values(o));
            return (0, j.jsx)(s.Provider, {
                value: c,
                children: r
            })
        };
        o.displayName = t + `Provider`;

        function s(n, o) {
            let s = o ?.[e] ?.[a] || i,
                c = _.useContext(s);
            if (c) return c;
            if (r !== void 0) return r;
            throw Error(`\`${n}\` must be used within \`${t}\``)
        }
        return [o, s]
    }
    let i = () => {
        let t = n.map(e => _.createContext(e));
        return function(n) {
            let r = n ?.[e] || t;
            return _.useMemo(() => ({
                [`__scope${e}`]: { ...n,
                    [e]: r
                }
            }), [n, r])
        }
    };
    return i.scopeName = e, [r, M(i, ...t)]
}

function M(...e) {
    let t = e[0];
    if (e.length === 1) return t;
    let n = () => {
        let n = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
        }));
        return function(e) {
            let r = n.reduce((t, {
                useScope: n,
                scopeName: r
            }) => {
                let i = n(e)[`__scope${r}`];
                return { ...t,
                    ...i
                }
            }, {});
            return _.useMemo(() => ({
                [`__scope${t.scopeName}`]: r
            }), [r])
        }
    };
    return n.scopeName = t.scopeName, n
}

function se(e) {
    let t = ce(e),
        n = _.forwardRef((e, n) => {
            let {
                children: r,
                ...i
            } = e, a = _.Children.toArray(r), o = a.find(ue);
            if (o) {
                let e = o.props.children,
                    r = a.map(t => t === o ? _.Children.count(e) > 1 ? _.Children.only(null) : _.isValidElement(e) ? e.props.children : null : t);
                return (0, j.jsx)(t, { ...i,
                    ref: n,
                    children: _.isValidElement(e) ? _.cloneElement(e, void 0, r) : null
                })
            }
            return (0, j.jsx)(t, { ...i,
                ref: n,
                children: r
            })
        });
    return n.displayName = `${e}.Slot`, n
}

function ce(e) {
    let t = _.forwardRef((e, t) => {
        let {
            children: n,
            ...r
        } = e;
        if (_.isValidElement(n)) {
            let e = fe(n),
                i = de(r, n.props);
            return n.type !== _.Fragment && (i.ref = t ? O(t, e) : e), _.cloneElement(n, i)
        }
        return _.Children.count(n) > 1 ? _.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var le = Symbol(`radix.slottable`);

function ue(e) {
    return _.isValidElement(e) && typeof e.type == `function` && `__radixId` in e.type && e.type.__radixId === le
}

function de(e, t) {
    let n = { ...t
    };
    for (let r in t) {
        let i = e[r],
            a = t[r];
        /^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
            let t = a(...e);
            return i(...e), t
        } : i && (n[r] = i) : r === `style` ? n[r] = { ...i,
            ...a
        } : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `))
    }
    return { ...e,
        ...n
    }
}

function fe(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`) ?.get,
        n = t && `isReactWarning` in t && t.isReactWarning;
    return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, `ref`) ?.get, n = t && `isReactWarning` in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function pe(e) {
    let t = e + `CollectionProvider`,
        [n, r] = oe(t),
        [i, a] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        o = e => {
            let {
                scope: t,
                children: n
            } = e, r = _.useRef(null), a = _.useRef(new Map).current;
            return (0, j.jsx)(i, {
                scope: t,
                itemMap: a,
                collectionRef: r,
                children: n
            })
        };
    o.displayName = t;
    let s = e + `CollectionSlot`,
        c = se(s),
        l = _.forwardRef((e, t) => {
            let {
                scope: n,
                children: r
            } = e, i = k(t, a(s, n).collectionRef);
            return (0, j.jsx)(c, {
                ref: i,
                children: r
            })
        });
    l.displayName = s;
    let u = e + `CollectionItemSlot`,
        d = `data-radix-collection-item`,
        f = se(u),
        p = _.forwardRef((e, t) => {
            let {
                scope: n,
                children: r,
                ...i
            } = e, o = _.useRef(null), s = k(t, o), c = a(u, n);
            return _.useEffect(() => (c.itemMap.set(o, {
                ref: o,
                ...i
            }), () => void c.itemMap.delete(o))), (0, j.jsx)(f, {
                [d]: ``,
                ref: s,
                children: r
            })
        });
    p.displayName = u;

    function m(t) {
        let n = a(e + `CollectionConsumer`, t);
        return _.useCallback(() => {
            let e = n.collectionRef.current;
            if (!e) return [];
            let t = Array.from(e.querySelectorAll(`[${d}]`));
            return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
        }, [n.collectionRef, n.itemMap])
    }
    return [{
        Provider: o,
        Slot: l,
        ItemSlot: p
    }, m, r]
}

function me(e) {
    let t = he(e),
        n = _.forwardRef((e, n) => {
            let {
                children: r,
                ...i
            } = e, a = _.Children.toArray(r), o = a.find(_e);
            if (o) {
                let e = o.props.children,
                    r = a.map(t => t === o ? _.Children.count(e) > 1 ? _.Children.only(null) : _.isValidElement(e) ? e.props.children : null : t);
                return (0, j.jsx)(t, { ...i,
                    ref: n,
                    children: _.isValidElement(e) ? _.cloneElement(e, void 0, r) : null
                })
            }
            return (0, j.jsx)(t, { ...i,
                ref: n,
                children: r
            })
        });
    return n.displayName = `${e}.Slot`, n
}

function he(e) {
    let t = _.forwardRef((e, t) => {
        let {
            children: n,
            ...r
        } = e;
        if (_.isValidElement(n)) {
            let e = ye(n),
                i = ve(r, n.props);
            return n.type !== _.Fragment && (i.ref = t ? O(t, e) : e), _.cloneElement(n, i)
        }
        return _.Children.count(n) > 1 ? _.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var ge = Symbol(`radix.slottable`);

function _e(e) {
    return _.isValidElement(e) && typeof e.type == `function` && `__radixId` in e.type && e.type.__radixId === ge
}

function ve(e, t) {
    let n = { ...t
    };
    for (let r in t) {
        let i = e[r],
            a = t[r];
        /^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
            let t = a(...e);
            return i(...e), t
        } : i && (n[r] = i) : r === `style` ? n[r] = { ...i,
            ...a
        } : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `))
    }
    return { ...e,
        ...n
    }
}

function ye(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`) ?.get,
        n = t && `isReactWarning` in t && t.isReactWarning;
    return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, `ref`) ?.get, n = t && `isReactWarning` in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var be = [`a`, `button`, `div`, `form`, `h2`, `h3`, `img`, `input`, `label`, `li`, `nav`, `ol`, `p`, `select`, `span`, `svg`, `ul`].reduce((e, t) => {
    let n = me(`Primitive.${t}`),
        r = _.forwardRef((e, r) => {
            let {
                asChild: i,
                ...a
            } = e, o = i ? n : t;
            return typeof window < `u` && (window[Symbol.for(`radix-ui`)] = !0), (0, j.jsx)(o, { ...a,
                ref: r
            })
        });
    return r.displayName = `Primitive.${t}`, { ...e,
        [t]: r
    }
}, {});

function xe(e, t) {
    e && ie.flushSync(() => e.dispatchEvent(t))
}

function Se(e) {
    let t = _.useRef(e);
    return _.useEffect(() => {
        t.current = e
    }), _.useMemo(() => (...e) => t.current ?.(...e), [])
}

function Ce(e, t = globalThis ?.document) {
    let n = Se(e);
    _.useEffect(() => {
        let e = e => {
            e.key === `Escape` && n(e)
        };
        return t.addEventListener(`keydown`, e, {
            capture: !0
        }), () => t.removeEventListener(`keydown`, e, {
            capture: !0
        })
    }, [n, t])
}
var we = `DismissableLayer`,
    Te = `dismissableLayer.update`,
    Ee = `dismissableLayer.pointerDownOutside`,
    De = `dismissableLayer.focusOutside`,
    Oe, ke = _.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    Ae = _.forwardRef((e, t) => {
        let {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: i,
            onFocusOutside: a,
            onInteractOutside: o,
            onDismiss: s,
            ...c
        } = e, l = _.useContext(ke), [u, d] = _.useState(null), f = u ?.ownerDocument ?? globalThis ?.document, [, p] = _.useState({}), m = k(t, e => d(e)), h = Array.from(l.layers), [g] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), v = h.indexOf(g), y = u ? h.indexOf(u) : -1, b = l.layersWithOutsidePointerEventsDisabled.size > 0, x = y >= v, S = Ne(e => {
            let t = e.target,
                n = [...l.branches].some(e => e.contains(t));
            !x || n || (i ?.(e), o ?.(e), e.defaultPrevented || s ?.())
        }, f), C = Pe(e => {
            let t = e.target;
            [...l.branches].some(e => e.contains(t)) || (a ?.(e), o ?.(e), e.defaultPrevented || s ?.())
        }, f);
        return Ce(e => {
            y === l.layers.size - 1 && (r ?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()))
        }, f), _.useEffect(() => {
            if (u) return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Oe = f.body.style.pointerEvents, f.body.style.pointerEvents = `none`), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), Fe(), () => {
                n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Oe)
            }
        }, [u, f, n, l]), _.useEffect(() => () => {
            u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), Fe())
        }, [u, l]), _.useEffect(() => {
            let e = () => p({});
            return document.addEventListener(Te, e), () => document.removeEventListener(Te, e)
        }, []), (0, j.jsx)(be.div, { ...c,
            ref: m,
            style: {
                pointerEvents: b ? x ? `auto` : `none` : void 0,
                ...e.style
            },
            onFocusCapture: D(e.onFocusCapture, C.onFocusCapture),
            onBlurCapture: D(e.onBlurCapture, C.onBlurCapture),
            onPointerDownCapture: D(e.onPointerDownCapture, S.onPointerDownCapture)
        })
    });
Ae.displayName = we;
var je = `DismissableLayerBranch`,
    Me = _.forwardRef((e, t) => {
        let n = _.useContext(ke),
            r = _.useRef(null),
            i = k(t, r);
        return _.useEffect(() => {
            let e = r.current;
            if (e) return n.branches.add(e), () => {
                n.branches.delete(e)
            }
        }, [n.branches]), (0, j.jsx)(be.div, { ...e,
            ref: i
        })
    });
Me.displayName = je;

function Ne(e, t = globalThis ?.document) {
    let n = Se(e),
        r = _.useRef(!1),
        i = _.useRef(() => {});
    return _.useEffect(() => {
        let e = e => {
                if (e.target && !r.current) {
                    let r = function() {
                            Ie(Ee, n, a, {
                                discrete: !0
                            })
                        },
                        a = {
                            originalEvent: e
                        };
                    e.pointerType === `touch` ? (t.removeEventListener(`click`, i.current), i.current = r, t.addEventListener(`click`, i.current, {
                        once: !0
                    })) : r()
                } else t.removeEventListener(`click`, i.current);
                r.current = !1
            },
            a = window.setTimeout(() => {
                t.addEventListener(`pointerdown`, e)
            }, 0);
        return () => {
            window.clearTimeout(a), t.removeEventListener(`pointerdown`, e), t.removeEventListener(`click`, i.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => r.current = !0
    }
}

function Pe(e, t = globalThis ?.document) {
    let n = Se(e),
        r = _.useRef(!1);
    return _.useEffect(() => {
        let e = e => {
            e.target && !r.current && Ie(De, n, {
                originalEvent: e
            }, {
                discrete: !1
            })
        };
        return t.addEventListener(`focusin`, e), () => t.removeEventListener(`focusin`, e)
    }, [t, n]), {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}

function Fe() {
    let e = new CustomEvent(Te);
    document.dispatchEvent(e)
}

function Ie(e, t, n, {
    discrete: r
}) {
    let i = n.originalEvent.target,
        a = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && i.addEventListener(e, t, {
        once: !0
    }), r ? xe(i, a) : i.dispatchEvent(a)
}
var Le = Ae,
    Re = Me,
    ze = globalThis ?.document ? _.useLayoutEffect : () => {},
    Be = `Portal`,
    Ve = _.forwardRef((e, t) => {
        let {
            container: n,
            ...r
        } = e, [i, a] = _.useState(!1);
        ze(() => a(!0), []);
        let o = n || i && globalThis ?.document ?.body;
        return o ? ie.createPortal((0, j.jsx)(be.div, { ...r,
            ref: t
        }), o) : null
    });
Ve.displayName = Be;

function He(e, t) {
    return _.useReducer((e, n) => t[e][n] ?? e, e)
}
var Ue = e => {
    let {
        present: t,
        children: n
    } = e, r = We(t), i = typeof n == `function` ? n({
        present: r.isPresent
    }) : _.Children.only(n), a = k(r.ref, Ke(i));
    return typeof n == `function` || r.isPresent ? _.cloneElement(i, {
        ref: a
    }) : null
};
Ue.displayName = `Presence`;

function We(e) {
    let [t, n] = _.useState(), r = _.useRef(null), i = _.useRef(e), a = _.useRef(`none`), [o, s] = He(e ? `mounted` : `unmounted`, {
        mounted: {
            UNMOUNT: `unmounted`,
            ANIMATION_OUT: `unmountSuspended`
        },
        unmountSuspended: {
            MOUNT: `mounted`,
            ANIMATION_END: `unmounted`
        },
        unmounted: {
            MOUNT: `mounted`
        }
    });
    return _.useEffect(() => {
        let e = Ge(r.current);
        a.current = o === `mounted` ? e : `none`
    }, [o]), ze(() => {
        let t = r.current,
            n = i.current;
        if (n !== e) {
            let r = a.current,
                o = Ge(t);
            e ? s(`MOUNT`) : o === `none` || t ?.display === `none` ? s(`UNMOUNT`) : s(n && r !== o ? `ANIMATION_OUT` : `UNMOUNT`), i.current = e
        }
    }, [e, s]), ze(() => {
        if (t) {
            let e, n = t.ownerDocument.defaultView ?? window,
                o = a => {
                    let o = Ge(r.current).includes(CSS.escape(a.animationName));
                    if (a.target === t && o && (s(`ANIMATION_END`), !i.current)) {
                        let r = t.style.animationFillMode;
                        t.style.animationFillMode = `forwards`, e = n.setTimeout(() => {
                            t.style.animationFillMode === `forwards` && (t.style.animationFillMode = r)
                        })
                    }
                },
                c = e => {
                    e.target === t && (a.current = Ge(r.current))
                };
            return t.addEventListener(`animationstart`, c), t.addEventListener(`animationcancel`, o), t.addEventListener(`animationend`, o), () => {
                n.clearTimeout(e), t.removeEventListener(`animationstart`, c), t.removeEventListener(`animationcancel`, o), t.removeEventListener(`animationend`, o)
            }
        }
        s(`ANIMATION_END`)
    }, [t, s]), {
        isPresent: [`mounted`, `unmountSuspended`].includes(o),
        ref: _.useCallback(e => {
            r.current = e ? getComputedStyle(e) : null, n(e)
        }, [])
    }
}

function Ge(e) {
    return e ?.animationName || `none`
}

function Ke(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`) ?.get,
        n = t && `isReactWarning` in t && t.isReactWarning;
    return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, `ref`) ?.get, n = t && `isReactWarning` in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var qe = _.useInsertionEffect || ze;

function Je({
    prop: e,
    defaultProp: t,
    onChange: n = () => {},
    caller: r
}) {
    let [i, a, o] = Ye({
        defaultProp: t,
        onChange: n
    }), s = e !== void 0, c = s ? e : i; {
        let t = _.useRef(e !== void 0);
        _.useEffect(() => {
            let e = t.current;
            e !== s && console.warn(`${r} is changing from ${e?`controlled`:`uncontrolled`} to ${s?`controlled`:`uncontrolled`}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), t.current = s
        }, [s, r])
    }
    return [c, _.useCallback(t => {
        if (s) {
            let n = Xe(t) ? t(e) : t;
            n !== e && o.current ?.(n)
        } else a(t)
    }, [s, e, a, o])]
}

function Ye({
    defaultProp: e,
    onChange: t
}) {
    let [n, r] = _.useState(e), i = _.useRef(n), a = _.useRef(t);
    return qe(() => {
        a.current = t
    }, [t]), _.useEffect(() => {
        i.current !== n && (a.current ?.(n), i.current = n)
    }, [n, i]), [n, r, a]
}

function Xe(e) {
    return typeof e == `function`
}
var Ze = Object.freeze({
        position: `absolute`,
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: `hidden`,
        clip: `rect(0, 0, 0, 0)`,
        whiteSpace: `nowrap`,
        wordWrap: `normal`
    }),
    Qe = `VisuallyHidden`,
    $e = _.forwardRef((e, t) => (0, j.jsx)(be.span, { ...e,
        ref: t,
        style: { ...Ze,
            ...e.style
        }
    }));
$e.displayName = Qe;
var et = `ToastProvider`,
    [tt, nt, rt] = pe(`Toast`),
    [it, at] = oe(`Toast`, [rt]),
    [ot, st] = it(et),
    ct = e => {
        let {
            __scopeToast: t,
            label: n = `Notification`,
            duration: r = 5e3,
            swipeDirection: i = `right`,
            swipeThreshold: a = 50,
            children: o
        } = e, [s, c] = _.useState(null), [l, u] = _.useState(0), d = _.useRef(!1), f = _.useRef(!1);
        return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${et}\`. Expected non-empty \`string\`.`), (0, j.jsx)(tt.Provider, {
            scope: t,
            children: (0, j.jsx)(ot, {
                scope: t,
                label: n,
                duration: r,
                swipeDirection: i,
                swipeThreshold: a,
                toastCount: l,
                viewport: s,
                onViewportChange: c,
                onToastAdd: _.useCallback(() => u(e => e + 1), []),
                onToastRemove: _.useCallback(() => u(e => e - 1), []),
                isFocusedToastEscapeKeyDownRef: d,
                isClosePausedRef: f,
                children: o
            })
        })
    };
ct.displayName = et;
var lt = `ToastViewport`,
    ut = [`F8`],
    dt = `toast.viewportPause`,
    ft = `toast.viewportResume`,
    pt = _.forwardRef((e, t) => {
        let {
            __scopeToast: n,
            hotkey: r = ut,
            label: i = `Notifications ({hotkey})`,
            ...a
        } = e, o = st(lt, n), s = nt(n), c = _.useRef(null), l = _.useRef(null), u = _.useRef(null), d = _.useRef(null), f = k(t, d, o.onViewportChange), p = r.join(`+`).replace(/Key/g, ``).replace(/Digit/g, ``), m = o.toastCount > 0;
        _.useEffect(() => {
            let e = e => {
                r.length !== 0 && r.every(t => e[t] || e.code === t) && d.current ?.focus()
            };
            return document.addEventListener(`keydown`, e), () => document.removeEventListener(`keydown`, e)
        }, [r]), _.useEffect(() => {
            let e = c.current,
                t = d.current;
            if (m && e && t) {
                let n = () => {
                        if (!o.isClosePausedRef.current) {
                            let e = new CustomEvent(dt);
                            t.dispatchEvent(e), o.isClosePausedRef.current = !0
                        }
                    },
                    r = () => {
                        if (o.isClosePausedRef.current) {
                            let e = new CustomEvent(ft);
                            t.dispatchEvent(e), o.isClosePausedRef.current = !1
                        }
                    },
                    i = t => {
                        e.contains(t.relatedTarget) || r()
                    },
                    a = () => {
                        e.contains(document.activeElement) || r()
                    };
                return e.addEventListener(`focusin`, n), e.addEventListener(`focusout`, i), e.addEventListener(`pointermove`, n), e.addEventListener(`pointerleave`, a), window.addEventListener(`blur`, n), window.addEventListener(`focus`, r), () => {
                    e.removeEventListener(`focusin`, n), e.removeEventListener(`focusout`, i), e.removeEventListener(`pointermove`, n), e.removeEventListener(`pointerleave`, a), window.removeEventListener(`blur`, n), window.removeEventListener(`focus`, r)
                }
            }
        }, [m, o.isClosePausedRef]);
        let h = _.useCallback(({
            tabbingDirection: e
        }) => {
            let t = s().map(t => {
                let n = t.ref.current,
                    r = [n, ...Bt(n)];
                return e === `forwards` ? r : r.reverse()
            });
            return (e === `forwards` ? t.reverse() : t).flat()
        }, [s]);
        return _.useEffect(() => {
            let e = d.current;
            if (e) {
                let t = t => {
                    let n = t.altKey || t.ctrlKey || t.metaKey;
                    if (t.key === `Tab` && !n) {
                        let n = document.activeElement,
                            r = t.shiftKey;
                        if (t.target === e && r) {
                            l.current ?.focus();
                            return
                        }
                        let i = h({
                                tabbingDirection: r ? `backwards` : `forwards`
                            }),
                            a = i.findIndex(e => e === n);
                        Vt(i.slice(a + 1)) ? t.preventDefault() : r ? l.current ?.focus() : u.current ?.focus()
                    }
                };
                return e.addEventListener(`keydown`, t), () => e.removeEventListener(`keydown`, t)
            }
        }, [s, h]), (0, j.jsxs)(Re, {
            ref: c,
            role: `region`,
            "aria-label": i.replace(`{hotkey}`, p),
            tabIndex: -1,
            style: {
                pointerEvents: m ? void 0 : `none`
            },
            children: [m && (0, j.jsx)(ht, {
                ref: l,
                onFocusFromOutsideViewport: () => {
                    Vt(h({
                        tabbingDirection: `forwards`
                    }))
                }
            }), (0, j.jsx)(tt.Slot, {
                scope: n,
                children: (0, j.jsx)(be.ol, {
                    tabIndex: -1,
                    ...a,
                    ref: f
                })
            }), m && (0, j.jsx)(ht, {
                ref: u,
                onFocusFromOutsideViewport: () => {
                    Vt(h({
                        tabbingDirection: `backwards`
                    }))
                }
            })]
        })
    });
pt.displayName = lt;
var mt = `ToastFocusProxy`,
    ht = _.forwardRef((e, t) => {
        let {
            __scopeToast: n,
            onFocusFromOutsideViewport: r,
            ...i
        } = e, a = st(mt, n);
        return (0, j.jsx)($e, {
            tabIndex: 0,
            ...i,
            ref: t,
            style: {
                position: `fixed`
            },
            onFocus: e => {
                let t = e.relatedTarget;
                a.viewport ?.contains(t) || r()
            }
        })
    });
ht.displayName = mt;
var gt = `Toast`,
    _t = `toast.swipeStart`,
    vt = `toast.swipeMove`,
    yt = `toast.swipeCancel`,
    bt = `toast.swipeEnd`,
    xt = _.forwardRef((e, t) => {
        let {
            forceMount: n,
            open: r,
            defaultOpen: i,
            onOpenChange: a,
            ...o
        } = e, [s, c] = Je({
            prop: r,
            defaultProp: i ?? !0,
            onChange: a,
            caller: gt
        });
        return (0, j.jsx)(Ue, {
            present: n || s,
            children: (0, j.jsx)(wt, {
                open: s,
                ...o,
                ref: t,
                onClose: () => c(!1),
                onPause: Se(e.onPause),
                onResume: Se(e.onResume),
                onSwipeStart: D(e.onSwipeStart, e => {
                    e.currentTarget.setAttribute(`data-swipe`, `start`)
                }),
                onSwipeMove: D(e.onSwipeMove, e => {
                    let {
                        x: t,
                        y: n
                    } = e.detail.delta;
                    e.currentTarget.setAttribute(`data-swipe`, `move`), e.currentTarget.style.setProperty(`--radix-toast-swipe-move-x`, `${t}px`), e.currentTarget.style.setProperty(`--radix-toast-swipe-move-y`, `${n}px`)
                }),
                onSwipeCancel: D(e.onSwipeCancel, e => {
                    e.currentTarget.setAttribute(`data-swipe`, `cancel`), e.currentTarget.style.removeProperty(`--radix-toast-swipe-move-x`), e.currentTarget.style.removeProperty(`--radix-toast-swipe-move-y`), e.currentTarget.style.removeProperty(`--radix-toast-swipe-end-x`), e.currentTarget.style.removeProperty(`--radix-toast-swipe-end-y`)
                }),
                onSwipeEnd: D(e.onSwipeEnd, e => {
                    let {
                        x: t,
                        y: n
                    } = e.detail.delta;
                    e.currentTarget.setAttribute(`data-swipe`, `end`), e.currentTarget.style.removeProperty(`--radix-toast-swipe-move-x`), e.currentTarget.style.removeProperty(`--radix-toast-swipe-move-y`), e.currentTarget.style.setProperty(`--radix-toast-swipe-end-x`, `${t}px`), e.currentTarget.style.setProperty(`--radix-toast-swipe-end-y`, `${n}px`), c(!1)
                })
            })
        })
    });
xt.displayName = gt;
var [St, Ct] = it(gt, {
    onClose() {}
}), wt = _.forwardRef((e, t) => {
    let {
        __scopeToast: n,
        type: r = `foreground`,
        duration: i,
        open: a,
        onClose: o,
        onEscapeKeyDown: s,
        onPause: c,
        onResume: l,
        onSwipeStart: u,
        onSwipeMove: d,
        onSwipeCancel: f,
        onSwipeEnd: p,
        ...m
    } = e, h = st(gt, n), [g, v] = _.useState(null), y = k(t, e => v(e)), b = _.useRef(null), x = _.useRef(null), S = i || h.duration, C = _.useRef(0), w = _.useRef(S), T = _.useRef(0), {
        onToastAdd: ee,
        onToastRemove: E
    } = h, te = Se(() => {
        g ?.contains(document.activeElement) && h.viewport ?.focus(), o()
    }), ne = _.useCallback(e => {
        !e || e === 1 / 0 || (window.clearTimeout(T.current), C.current = new Date().getTime(), T.current = window.setTimeout(te, e))
    }, [te]);
    _.useEffect(() => {
        let e = h.viewport;
        if (e) {
            let t = () => {
                    ne(w.current), l ?.()
                },
                n = () => {
                    let e = new Date().getTime() - C.current;
                    w.current -= e, window.clearTimeout(T.current), c ?.()
                };
            return e.addEventListener(dt, n), e.addEventListener(ft, t), () => {
                e.removeEventListener(dt, n), e.removeEventListener(ft, t)
            }
        }
    }, [h.viewport, S, c, l, ne]), _.useEffect(() => {
        a && !h.isClosePausedRef.current && ne(S)
    }, [a, S, h.isClosePausedRef, ne]), _.useEffect(() => (ee(), () => E()), [ee, E]);
    let re = _.useMemo(() => g ? Ft(g) : null, [g]);
    return h.viewport ? (0, j.jsxs)(j.Fragment, {
        children: [re && (0, j.jsx)(Tt, {
            __scopeToast: n,
            role: `status`,
            "aria-live": r === `foreground` ? `assertive` : `polite`,
            children: re
        }), (0, j.jsx)(St, {
            scope: n,
            onClose: te,
            children: ie.createPortal((0, j.jsx)(tt.ItemSlot, {
                scope: n,
                children: (0, j.jsx)(Le, {
                    asChild: !0,
                    onEscapeKeyDown: D(s, () => {
                        h.isFocusedToastEscapeKeyDownRef.current || te(), h.isFocusedToastEscapeKeyDownRef.current = !1
                    }),
                    children: (0, j.jsx)(be.li, {
                        tabIndex: 0,
                        "data-state": a ? `open` : `closed`,
                        "data-swipe-direction": h.swipeDirection,
                        ...m,
                        ref: y,
                        style: {
                            userSelect: `none`,
                            touchAction: `none`,
                            ...e.style
                        },
                        onKeyDown: D(e.onKeyDown, e => {
                            e.key === `Escape` && (s ?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0, te()))
                        }),
                        onPointerDown: D(e.onPointerDown, e => {
                            e.button === 0 && (b.current = {
                                x: e.clientX,
                                y: e.clientY
                            })
                        }),
                        onPointerMove: D(e.onPointerMove, e => {
                            if (!b.current) return;
                            let t = e.clientX - b.current.x,
                                n = e.clientY - b.current.y,
                                r = !!x.current,
                                i = [`left`, `right`].includes(h.swipeDirection),
                                a = [`left`, `up`].includes(h.swipeDirection) ? Math.min : Math.max,
                                o = i ? a(0, t) : 0,
                                s = i ? 0 : a(0, n),
                                c = e.pointerType === `touch` ? 10 : 2,
                                l = {
                                    x: o,
                                    y: s
                                },
                                f = {
                                    originalEvent: e,
                                    delta: l
                                };
                            r ? (x.current = l, It(vt, d, f, {
                                discrete: !1
                            })) : Lt(l, h.swipeDirection, c) ? (x.current = l, It(_t, u, f, {
                                discrete: !1
                            }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > c || Math.abs(n) > c) && (b.current = null)
                        }),
                        onPointerUp: D(e.onPointerUp, e => {
                            let t = x.current,
                                n = e.target;
                            if (n.hasPointerCapture(e.pointerId) && n.releasePointerCapture(e.pointerId), x.current = null, b.current = null, t) {
                                let n = e.currentTarget,
                                    r = {
                                        originalEvent: e,
                                        delta: t
                                    };
                                Lt(t, h.swipeDirection, h.swipeThreshold) ? It(bt, p, r, {
                                    discrete: !0
                                }) : It(yt, f, r, {
                                    discrete: !0
                                }), n.addEventListener(`click`, e => e.preventDefault(), {
                                    once: !0
                                })
                            }
                        })
                    })
                })
            }), h.viewport)
        })]
    }) : null
}), Tt = e => {
    let {
        __scopeToast: t,
        children: n,
        ...r
    } = e, i = st(gt, t), [a, o] = _.useState(!1), [s, c] = _.useState(!1);
    return Rt(() => o(!0)), _.useEffect(() => {
        let e = window.setTimeout(() => c(!0), 1e3);
        return () => window.clearTimeout(e)
    }, []), s ? null : (0, j.jsx)(Ve, {
        asChild: !0,
        children: (0, j.jsx)($e, { ...r,
            children: a && (0, j.jsxs)(j.Fragment, {
                children: [i.label, ` `, n]
            })
        })
    })
}, Et = `ToastTitle`, Dt = _.forwardRef((e, t) => {
    let {
        __scopeToast: n,
        ...r
    } = e;
    return (0, j.jsx)(be.div, { ...r,
        ref: t
    })
});
Dt.displayName = Et;
var Ot = `ToastDescription`,
    kt = _.forwardRef((e, t) => {
        let {
            __scopeToast: n,
            ...r
        } = e;
        return (0, j.jsx)(be.div, { ...r,
            ref: t
        })
    });
kt.displayName = Ot;
var At = `ToastAction`,
    jt = _.forwardRef((e, t) => {
        let {
            altText: n,
            ...r
        } = e;
        return n.trim() ? (0, j.jsx)(Pt, {
            altText: n,
            asChild: !0,
            children: (0, j.jsx)(Nt, { ...r,
                ref: t
            })
        }) : (console.error(`Invalid prop \`altText\` supplied to \`${At}\`. Expected non-empty \`string\`.`), null)
    });
jt.displayName = At;
var Mt = `ToastClose`,
    Nt = _.forwardRef((e, t) => {
        let {
            __scopeToast: n,
            ...r
        } = e, i = Ct(Mt, n);
        return (0, j.jsx)(Pt, {
            asChild: !0,
            children: (0, j.jsx)(be.button, {
                type: `button`,
                ...r,
                ref: t,
                onClick: D(e.onClick, i.onClose)
            })
        })
    });
Nt.displayName = Mt;
var Pt = _.forwardRef((e, t) => {
    let {
        __scopeToast: n,
        altText: r,
        ...i
    } = e;
    return (0, j.jsx)(be.div, {
        "data-radix-toast-announce-exclude": ``,
        "data-radix-toast-announce-alt": r || void 0,
        ...i,
        ref: t
    })
});

function Ft(e) {
    let t = [];
    return Array.from(e.childNodes).forEach(e => {
        if (e.nodeType === e.TEXT_NODE && e.textContent && t.push(e.textContent), zt(e)) {
            let n = e.ariaHidden || e.hidden || e.style.display === `none`,
                r = e.dataset.radixToastAnnounceExclude === ``;
            if (!n)
                if (r) {
                    let n = e.dataset.radixToastAnnounceAlt;
                    n && t.push(n)
                } else t.push(...Ft(e))
        }
    }), t
}

function It(e, t, n, {
    discrete: r
}) {
    let i = n.originalEvent.currentTarget,
        a = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: n
        });
    t && i.addEventListener(e, t, {
        once: !0
    }), r ? xe(i, a) : i.dispatchEvent(a)
}
var Lt = (e, t, n = 0) => {
    let r = Math.abs(e.x),
        i = Math.abs(e.y),
        a = r > i;
    return t === `left` || t === `right` ? a && r > n : !a && i > n
};

function Rt(e = () => {}) {
    let t = Se(e);
    ze(() => {
        let e = 0,
            n = 0;
        return e = window.requestAnimationFrame(() => n = window.requestAnimationFrame(t)), () => {
            window.cancelAnimationFrame(e), window.cancelAnimationFrame(n)
        }
    }, [t])
}

function zt(e) {
    return e.nodeType === e.ELEMENT_NODE
}

function Bt(e) {
    let t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
                let t = e.tagName === `INPUT` && e.type === `hidden`;
                return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function Vt(e) {
    let t = document.activeElement;
    return e.some(e => e === t || (e.focus(), document.activeElement !== t))
}
var Ht = ct,
    Ut = pt,
    Wt = xt,
    Gt = Dt,
    Kt = kt,
    qt = jt,
    Jt = Nt;

function N(e) {
    var t, n, r = ``;
    if (typeof e == `string` || typeof e == `number`) r += e;
    else if (typeof e == `object`)
        if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++) e[t] && (n = N(e[t])) && (r && (r += ` `), r += n)
        } else
            for (n in e) e[n] && (r && (r += ` `), r += n);
    return r
}

function Yt() {
    for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)(e = arguments[n]) && (t = N(e)) && (r && (r += ` `), r += t);
    return r
}
var Xt = e => typeof e == `boolean` ? `${e}` : e === 0 ? `0` : e,
    Zt = Yt,
    Qt = (e, t) => n => {
        if (t ?.variants == null) return Zt(e, n ?.class, n ?.className);
        let {
            variants: r,
            defaultVariants: i
        } = t, a = Object.keys(r).map(e => {
            let t = n ?.[e],
                a = i ?.[e];
            if (t === null) return null;
            let o = Xt(t) || Xt(a);
            return r[e][o]
        }), o = n && Object.entries(n).reduce((e, t) => {
            let [n, r] = t;
            return r === void 0 || (e[n] = r), e
        }, {});
        return Zt(e, a, t ?.compoundVariants ?.reduce((e, t) => {
            let {
                class: n,
                className: r,
                ...a
            } = t;
            return Object.entries(a).every(e => {
                let [t, n] = e;
                return Array.isArray(n) ? n.includes({ ...i,
                    ...o
                }[t]) : { ...i,
                    ...o
                }[t] === n
            }) ? [...e, n, r] : e
        }, []), n ?.class, n ?.className)
    },
    $t = e => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
    en = (...e) => e.filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t).join(` `).trim(),
    tn = {
        xmlns: `http://www.w3.org/2000/svg`,
        width: 24,
        height: 24,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: 2,
        strokeLinecap: `round`,
        strokeLinejoin: `round`
    },
    nn = (0, _.forwardRef)(({
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: a,
        iconNode: o,
        ...s
    }, c) => (0, _.createElement)(`svg`, {
        ref: c,
        ...tn,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? Number(n) * 24 / Number(t) : n,
        className: en(`lucide`, i),
        ...s
    }, [...o.map(([e, t]) => (0, _.createElement)(e, t)), ...Array.isArray(a) ? a : [a]])),
    P = (e, t) => {
        let n = (0, _.forwardRef)(({
            className: n,
            ...r
        }, i) => (0, _.createElement)(nn, {
            ref: i,
            iconNode: t,
            className: en(`lucide-${$t(e)}`, n),
            ...r
        }));
        return n.displayName = `${e}`, n
    },
    rn = P(`ArrowLeft`, [
        [`path`, {
            d: `m12 19-7-7 7-7`,
            key: `1l729n`
        }],
        [`path`, {
            d: `M19 12H5`,
            key: `x3x0zl`
        }]
    ]),
    an = P(`ArrowRight`, [
        [`path`, {
            d: `M5 12h14`,
            key: `1ays0h`
        }],
        [`path`, {
            d: `m12 5 7 7-7 7`,
            key: `xquz4c`
        }]
    ]),
    on = P(`ArrowUpRight`, [
        [`path`, {
            d: `M7 7h10v10`,
            key: `1tivn9`
        }],
        [`path`, {
            d: `M7 17 17 7`,
            key: `1vkiza`
        }]
    ]),
    sn = P(`Check`, [
        [`path`, {
            d: `M20 6 9 17l-5-5`,
            key: `1gmf2c`
        }]
    ]),
    cn = P(`ChevronDown`, [
        [`path`, {
            d: `m6 9 6 6 6-6`,
            key: `qrunsl`
        }]
    ]),
    ln = P(`Clock`, [
        [`circle`, {
            cx: `12`,
            cy: `12`,
            r: `10`,
            key: `1mglay`
        }],
        [`polyline`, {
            points: `12 6 12 12 16 14`,
            key: `68esgv`
        }]
    ]),
    un = P(`Download`, [
        [`path`, {
            d: `M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,
            key: `ih7n3h`
        }],
        [`polyline`, {
            points: `7 10 12 15 17 10`,
            key: `2ggqvy`
        }],
        [`line`, {
            x1: `12`,
            x2: `12`,
            y1: `15`,
            y2: `3`,
            key: `1vk2je`
        }]
    ]),
    dn = P(`Eye`, [
        [`path`, {
            d: `M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,
            key: `1nclc0`
        }],
        [`circle`, {
            cx: `12`,
            cy: `12`,
            r: `3`,
            key: `1v7zrd`
        }]
    ]),
    fn = P(`Facebook`, [
        [`path`, {
            d: `M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z`,
            key: `1jg4f8`
        }]
    ]),
    pn = P(`FileText`, [
        [`path`, {
            d: `M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z`,
            key: `1rqfz7`
        }],
        [`path`, {
            d: `M14 2v4a2 2 0 0 0 2 2h4`,
            key: `tnqrlb`
        }],
        [`path`, {
            d: `M10 9H8`,
            key: `b1mrlr`
        }],
        [`path`, {
            d: `M16 13H8`,
            key: `t4e002`
        }],
        [`path`, {
            d: `M16 17H8`,
            key: `z1uh3a`
        }]
    ]),
    mn = P(`Instagram`, [
        [`rect`, {
            width: `20`,
            height: `20`,
            x: `2`,
            y: `2`,
            rx: `5`,
            ry: `5`,
            key: `2e1cvw`
        }],
        [`path`, {
            d: `M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z`,
            key: `9exkf1`
        }],
        [`line`, {
            x1: `17.5`,
            x2: `17.51`,
            y1: `6.5`,
            y2: `6.5`,
            key: `r4j83e`
        }]
    ]),
    hn = P(`Leaf`, [
        [`path`, {
            d: `M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z`,
            key: `nnexq3`
        }],
        [`path`, {
            d: `M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12`,
            key: `mt58a7`
        }]
    ]),
    gn = P(`Link2`, [
        [`path`, {
            d: `M9 17H7A5 5 0 0 1 7 7h2`,
            key: `8i5ue5`
        }],
        [`path`, {
            d: `M15 7h2a5 5 0 1 1 0 10h-2`,
            key: `1b9ql8`
        }],
        [`line`, {
            x1: `8`,
            x2: `16`,
            y1: `12`,
            y2: `12`,
            key: `1jonct`
        }]
    ]),
    _n = P(`Linkedin`, [
        [`path`, {
            d: `M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z`,
            key: `c2jq9f`
        }],
        [`rect`, {
            width: `4`,
            height: `12`,
            x: `2`,
            y: `9`,
            key: `mk3on5`
        }],
        [`circle`, {
            cx: `4`,
            cy: `4`,
            r: `2`,
            key: `bt5ra8`
        }]
    ]),
    vn = P(`Mail`, [
        [`rect`, {
            width: `20`,
            height: `16`,
            x: `2`,
            y: `4`,
            rx: `2`,
            key: `18n3k1`
        }],
        [`path`, {
            d: `m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7`,
            key: `1ocrg3`
        }]
    ]),
    yn = P(`MapPin`, [
        [`path`, {
            d: `M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,
            key: `1r0f0z`
        }],
        [`circle`, {
            cx: `12`,
            cy: `10`,
            r: `3`,
            key: `ilqhr7`
        }]
    ]),
    bn = P(`Maximize2`, [
        [`polyline`, {
            points: `15 3 21 3 21 9`,
            key: `mznyad`
        }],
        [`polyline`, {
            points: `9 21 3 21 3 15`,
            key: `1avn1i`
        }],
        [`line`, {
            x1: `21`,
            x2: `14`,
            y1: `3`,
            y2: `10`,
            key: `ota7mn`
        }],
        [`line`, {
            x1: `3`,
            x2: `10`,
            y1: `21`,
            y2: `14`,
            key: `1atl0r`
        }]
    ]),
    xn = P(`Menu`, [
        [`line`, {
            x1: `4`,
            x2: `20`,
            y1: `12`,
            y2: `12`,
            key: `1e0a9i`
        }],
        [`line`, {
            x1: `4`,
            x2: `20`,
            y1: `6`,
            y2: `6`,
            key: `1owob3`
        }],
        [`line`, {
            x1: `4`,
            x2: `20`,
            y1: `18`,
            y2: `18`,
            key: `yk5zj1`
        }]
    ]),
    Sn = P(`MessageCircle`, [
        [`path`, {
            d: `M7.9 20A9 9 0 1 0 4 16.1L2 22Z`,
            key: `vv11sd`
        }]
    ]),
    Cn = P(`Phone`, [
        [`path`, {
            d: `M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z`,
            key: `foiqr5`
        }]
    ]),
    wn = P(`Play`, [
        [`polygon`, {
            points: `6 3 20 12 6 21 6 3`,
            key: `1oa8hb`
        }]
    ]),
    Tn = P(`Quote`, [
        [`path`, {
            d: `M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z`,
            key: `rib7q0`
        }],
        [`path`, {
            d: `M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z`,
            key: `1ymkrd`
        }]
    ]),
    En = P(`Ruler`, [
        [`path`, {
            d: `M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z`,
            key: `icamh8`
        }],
        [`path`, {
            d: `m14.5 12.5 2-2`,
            key: `inckbg`
        }],
        [`path`, {
            d: `m11.5 9.5 2-2`,
            key: `fmmyf7`
        }],
        [`path`, {
            d: `m8.5 6.5 2-2`,
            key: `vc6u1g`
        }],
        [`path`, {
            d: `m17.5 15.5 2-2`,
            key: `wo5hmg`
        }]
    ]),
    Dn = P(`Share2`, [
        [`circle`, {
            cx: `18`,
            cy: `5`,
            r: `3`,
            key: `gq8acd`
        }],
        [`circle`, {
            cx: `6`,
            cy: `12`,
            r: `3`,
            key: `w7nqdw`
        }],
        [`circle`, {
            cx: `18`,
            cy: `19`,
            r: `3`,
            key: `1xt0gg`
        }],
        [`line`, {
            x1: `8.59`,
            x2: `15.42`,
            y1: `13.51`,
            y2: `17.49`,
            key: `47mynk`
        }],
        [`line`, {
            x1: `15.41`,
            x2: `8.59`,
            y1: `6.51`,
            y2: `10.49`,
            key: `1n3mei`
        }]
    ]),
    On = P(`ShieldCheck`, [
        [`path`, {
            d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
            key: `oel41y`
        }],
        [`path`, {
            d: `m9 12 2 2 4-4`,
            key: `dzmm74`
        }]
    ]),
    kn = P(`Star`, [
        [`path`, {
            d: `M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,
            key: `r04s7s`
        }]
    ]),
    An = P(`X`, [
        [`path`, {
            d: `M18 6 6 18`,
            key: `1bl5f8`
        }],
        [`path`, {
            d: `m6 6 12 12`,
            key: `d8bk6v`
        }]
    ]),
    jn = (e, t) => {
        let n = Array(e.length + t.length);
        for (let t = 0; t < e.length; t++) n[t] = e[t];
        for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
        return n
    },
    Mn = (e, t) => ({
        classGroupId: e,
        validator: t
    }),
    Nn = (e = new Map, t = null, n) => ({
        nextPart: e,
        validators: t,
        classGroupId: n
    }),
    Pn = `-`,
    Fn = [],
    In = `arbitrary..`,
    Ln = e => {
        let t = Bn(e),
            {
                conflictingClassGroups: n,
                conflictingClassGroupModifiers: r
            } = e;
        return {
            getClassGroupId: e => {
                if (e.startsWith(`[`) && e.endsWith(`]`)) return zn(e);
                let n = e.split(Pn);
                return Rn(n, +(n[0] === `` && n.length > 1), t)
            },
            getConflictingClassGroupIds: (e, t) => {
                if (t) {
                    let t = r[e],
                        i = n[e];
                    return t ? i ? jn(i, t) : t : i || Fn
                }
                return n[e] || Fn
            }
        }
    },
    Rn = (e, t, n) => {
        if (e.length - t === 0) return n.classGroupId;
        let r = e[t],
            i = n.nextPart.get(r);
        if (i) {
            let n = Rn(e, t + 1, i);
            if (n) return n
        }
        let a = n.validators;
        if (a === null) return;
        let o = t === 0 ? e.join(Pn) : e.slice(t).join(Pn),
            s = a.length;
        for (let e = 0; e < s; e++) {
            let t = a[e];
            if (t.validator(o)) return t.classGroupId
        }
    },
    zn = e => e.slice(1, -1).indexOf(`:`) === -1 ? void 0 : (() => {
        let t = e.slice(1, -1),
            n = t.indexOf(`:`),
            r = t.slice(0, n);
        return r ? In + r : void 0
    })(),
    Bn = e => {
        let {
            theme: t,
            classGroups: n
        } = e;
        return Vn(n, t)
    },
    Vn = (e, t) => {
        let n = Nn();
        for (let r in e) {
            let i = e[r];
            Hn(i, n, r, t)
        }
        return n
    },
    Hn = (e, t, n, r) => {
        let i = e.length;
        for (let a = 0; a < i; a++) {
            let i = e[a];
            Un(i, t, n, r)
        }
    },
    Un = (e, t, n, r) => {
        if (typeof e == `string`) {
            Wn(e, t, n);
            return
        }
        if (typeof e == `function`) {
            Gn(e, t, n, r);
            return
        }
        Kn(e, t, n, r)
    },
    Wn = (e, t, n) => {
        let r = e === `` ? t : qn(t, e);
        r.classGroupId = n
    },
    Gn = (e, t, n, r) => {
        if (Jn(e)) {
            Hn(e(r), t, n, r);
            return
        }
        t.validators === null && (t.validators = []), t.validators.push(Mn(n, e))
    },
    Kn = (e, t, n, r) => {
        let i = Object.entries(e),
            a = i.length;
        for (let e = 0; e < a; e++) {
            let [a, o] = i[e];
            Hn(o, qn(t, a), n, r)
        }
    },
    qn = (e, t) => {
        let n = e,
            r = t.split(Pn),
            i = r.length;
        for (let e = 0; e < i; e++) {
            let t = r[e],
                i = n.nextPart.get(t);
            i || (i = Nn(), n.nextPart.set(t, i)), n = i
        }
        return n
    },
    Jn = e => `isThemeGetter` in e && e.isThemeGetter === !0,
    Yn = e => {
        if (e < 1) return {
            get: () => void 0,
            set: () => {}
        };
        let t = 0,
            n = Object.create(null),
            r = Object.create(null),
            i = (i, a) => {
                n[i] = a, t++, t > e && (t = 0, r = n, n = Object.create(null))
            };
        return {
            get(e) {
                let t = n[e];
                if (t !== void 0) return t;
                if ((t = r[e]) !== void 0) return i(e, t), t
            },
            set(e, t) {
                e in n ? n[e] = t : i(e, t)
            }
        }
    },
    Xn = `!`,
    Zn = `:`,
    Qn = [],
    $n = (e, t, n, r, i) => ({
        modifiers: e,
        hasImportantModifier: t,
        baseClassName: n,
        maybePostfixModifierPosition: r,
        isExternal: i
    }),
    er = e => {
        let {
            prefix: t,
            experimentalParseClassName: n
        } = e, r = e => {
            let t = [],
                n = 0,
                r = 0,
                i = 0,
                a, o = e.length;
            for (let s = 0; s < o; s++) {
                let o = e[s];
                if (n === 0 && r === 0) {
                    if (o === Zn) {
                        t.push(e.slice(i, s)), i = s + 1;
                        continue
                    }
                    if (o === `/`) {
                        a = s;
                        continue
                    }
                }
                o === `[` ? n++ : o === `]` ? n-- : o === `(` ? r++ : o === `)` && r--
            }
            let s = t.length === 0 ? e : e.slice(i),
                c = s,
                l = !1;
            s.endsWith(Xn) ? (c = s.slice(0, -1), l = !0) : s.startsWith(Xn) && (c = s.slice(1), l = !0);
            let u = a && a > i ? a - i : void 0;
            return $n(t, l, c, u)
        };
        if (t) {
            let e = t + Zn,
                n = r;
            r = t => t.startsWith(e) ? n(t.slice(e.length)) : $n(Qn, !1, t, void 0, !0)
        }
        if (n) {
            let e = r;
            r = t => n({
                className: t,
                parseClassName: e
            })
        }
        return r
    },
    tr = e => {
        let t = new Map;
        return e.orderSensitiveModifiers.forEach((e, n) => {
            t.set(e, 1e6 + n)
        }), e => {
            let n = [],
                r = [];
            for (let i = 0; i < e.length; i++) {
                let a = e[i],
                    o = a[0] === `[`,
                    s = t.has(a);
                o || s ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(a)) : r.push(a)
            }
            return r.length > 0 && (r.sort(), n.push(...r)), n
        }
    },
    nr = e => ({
        cache: Yn(e.cacheSize),
        parseClassName: er(e),
        sortModifiers: tr(e),
        ...Ln(e)
    }),
    rr = /\s+/,
    ir = (e, t) => {
        let {
            parseClassName: n,
            getClassGroupId: r,
            getConflictingClassGroupIds: i,
            sortModifiers: a
        } = t, o = [], s = e.trim().split(rr), c = ``;
        for (let e = s.length - 1; e >= 0; --e) {
            let t = s[e],
                {
                    isExternal: l,
                    modifiers: u,
                    hasImportantModifier: d,
                    baseClassName: f,
                    maybePostfixModifierPosition: p
                } = n(t);
            if (l) {
                c = t + (c.length > 0 ? ` ` + c : c);
                continue
            }
            let m = !!p,
                h = r(m ? f.substring(0, p) : f);
            if (!h) {
                if (!m) {
                    c = t + (c.length > 0 ? ` ` + c : c);
                    continue
                }
                if (h = r(f), !h) {
                    c = t + (c.length > 0 ? ` ` + c : c);
                    continue
                }
                m = !1
            }
            let g = u.length === 0 ? `` : u.length === 1 ? u[0] : a(u).join(`:`),
                _ = d ? g + Xn : g,
                v = _ + h;
            if (o.indexOf(v) > -1) continue;
            o.push(v);
            let y = i(h, m);
            for (let e = 0; e < y.length; ++e) {
                let t = y[e];
                o.push(_ + t)
            }
            c = t + (c.length > 0 ? ` ` + c : c)
        }
        return c
    },
    ar = (...e) => {
        let t = 0,
            n, r, i = ``;
        for (; t < e.length;)(n = e[t++]) && (r = or(n)) && (i && (i += ` `), i += r);
        return i
    },
    or = e => {
        if (typeof e == `string`) return e;
        let t, n = ``;
        for (let r = 0; r < e.length; r++) e[r] && (t = or(e[r])) && (n && (n += ` `), n += t);
        return n
    },
    sr = (e, ...t) => {
        let n, r, i, a, o = o => (n = nr(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)),
            s = e => {
                let t = r(e);
                if (t) return t;
                let a = ir(e, n);
                return i(e, a), a
            };
        return a = o, (...e) => a(ar(...e))
    },
    cr = [],
    lr = e => {
        let t = t => t[e] || cr;
        return t.isThemeGetter = !0, t
    },
    ur = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    dr = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    fr = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
    pr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    mr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    hr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    gr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    _r = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    vr = e => fr.test(e),
    F = e => !!e && !Number.isNaN(Number(e)),
    yr = e => !!e && Number.isInteger(Number(e)),
    br = e => e.endsWith(`%`) && F(e.slice(0, -1)),
    xr = e => pr.test(e),
    Sr = () => !0,
    Cr = e => mr.test(e) && !hr.test(e),
    wr = () => !1,
    Tr = e => gr.test(e),
    Er = e => _r.test(e),
    Dr = e => !I(e) && !L(e),
    Or = e => Ur(e, qr, wr),
    I = e => ur.test(e),
    kr = e => Ur(e, Jr, Cr),
    Ar = e => Ur(e, Yr, F),
    jr = e => Ur(e, Zr, Sr),
    Mr = e => Ur(e, Xr, wr),
    Nr = e => Ur(e, Gr, wr),
    Pr = e => Ur(e, Kr, Er),
    Fr = e => Ur(e, Qr, Tr),
    L = e => dr.test(e),
    Ir = e => Wr(e, Jr),
    Lr = e => Wr(e, Xr),
    Rr = e => Wr(e, Gr),
    zr = e => Wr(e, qr),
    Br = e => Wr(e, Kr),
    Vr = e => Wr(e, Qr, !0),
    Hr = e => Wr(e, Zr, !0),
    Ur = (e, t, n) => {
        let r = ur.exec(e);
        return r ? r[1] ? t(r[1]) : n(r[2]) : !1
    },
    Wr = (e, t, n = !1) => {
        let r = dr.exec(e);
        return r ? r[1] ? t(r[1]) : n : !1
    },
    Gr = e => e === `position` || e === `percentage`,
    Kr = e => e === `image` || e === `url`,
    qr = e => e === `length` || e === `size` || e === `bg-size`,
    Jr = e => e === `length`,
    Yr = e => e === `number`,
    Xr = e => e === `family-name`,
    Zr = e => e === `number` || e === `weight`,
    Qr = e => e === `shadow`,
    $r = sr(() => {
        let e = lr(`color`),
            t = lr(`font`),
            n = lr(`text`),
            r = lr(`font-weight`),
            i = lr(`tracking`),
            a = lr(`leading`),
            o = lr(`breakpoint`),
            s = lr(`container`),
            c = lr(`spacing`),
            l = lr(`radius`),
            u = lr(`shadow`),
            d = lr(`inset-shadow`),
            f = lr(`text-shadow`),
            p = lr(`drop-shadow`),
            m = lr(`blur`),
            h = lr(`perspective`),
            g = lr(`aspect`),
            _ = lr(`ease`),
            v = lr(`animate`),
            y = () => [`auto`, `avoid`, `all`, `avoid-page`, `page`, `left`, `right`, `column`],
            b = () => [`center`, `top`, `bottom`, `left`, `right`, `top-left`, `left-top`, `top-right`, `right-top`, `bottom-right`, `right-bottom`, `bottom-left`, `left-bottom`],
            x = () => [...b(), L, I],
            S = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
            C = () => [`auto`, `contain`, `none`],
            w = () => [L, I, c],
            T = () => [vr, `full`, `auto`, ...w()],
            ee = () => [yr, `none`, `subgrid`, L, I],
            E = () => [`auto`, {
                span: [`full`, yr, L, I]
            }, yr, L, I],
            te = () => [yr, `auto`, L, I],
            ne = () => [`auto`, `min`, `max`, `fr`, L, I],
            re = () => [`start`, `end`, `center`, `between`, `around`, `evenly`, `stretch`, `baseline`, `center-safe`, `end-safe`],
            ie = () => [`start`, `end`, `center`, `stretch`, `center-safe`, `end-safe`],
            D = () => [`auto`, ...w()],
            ae = () => [vr, `auto`, `full`, `dvw`, `dvh`, `lvw`, `lvh`, `svw`, `svh`, `min`, `max`, `fit`, ...w()],
            O = () => [vr, `screen`, `full`, `dvw`, `lvw`, `svw`, `min`, `max`, `fit`, ...w()],
            k = () => [vr, `screen`, `full`, `lh`, `dvh`, `lvh`, `svh`, `min`, `max`, `fit`, ...w()],
            A = () => [e, L, I],
            j = () => [...b(), Rr, Nr, {
                position: [L, I]
            }],
            oe = () => [`no-repeat`, {
                repeat: [``, `x`, `y`, `space`, `round`]
            }],
            M = () => [`auto`, `cover`, `contain`, zr, Or, {
                size: [L, I]
            }],
            se = () => [br, Ir, kr],
            ce = () => [``, `none`, `full`, l, L, I],
            le = () => [``, F, Ir, kr],
            ue = () => [`solid`, `dashed`, `dotted`, `double`],
            de = () => [`normal`, `multiply`, `screen`, `overlay`, `darken`, `lighten`, `color-dodge`, `color-burn`, `hard-light`, `soft-light`, `difference`, `exclusion`, `hue`, `saturation`, `color`, `luminosity`],
            fe = () => [F, br, Rr, Nr],
            pe = () => [``, `none`, m, L, I],
            me = () => [`none`, F, L, I],
            he = () => [`none`, F, L, I],
            ge = () => [F, L, I],
            _e = () => [vr, `full`, ...w()];
        return {
            cacheSize: 500,
            theme: {
                animate: [`spin`, `ping`, `pulse`, `bounce`],
                aspect: [`video`],
                blur: [xr],
                breakpoint: [xr],
                color: [Sr],
                container: [xr],
                "drop-shadow": [xr],
                ease: [`in`, `out`, `in-out`],
                font: [Dr],
                "font-weight": [`thin`, `extralight`, `light`, `normal`, `medium`, `semibold`, `bold`, `extrabold`, `black`],
                "inset-shadow": [xr],
                leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
                perspective: [`dramatic`, `near`, `normal`, `midrange`, `distant`, `none`],
                radius: [xr],
                shadow: [xr],
                spacing: [`px`, F],
                text: [xr],
                "text-shadow": [xr],
                tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`]
            },
            classGroups: {
                aspect: [{
                    aspect: [`auto`, `square`, vr, I, L, g]
                }],
                container: [`container`],
                columns: [{
                    columns: [F, I, L, s]
                }],
                "break-after": [{
                    "break-after": y()
                }],
                "break-before": [{
                    "break-before": y()
                }],
                "break-inside": [{
                    "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`]
                }],
                "box-decoration": [{
                    "box-decoration": [`slice`, `clone`]
                }],
                box: [{
                    box: [`border`, `content`]
                }],
                display: [`block`, `inline-block`, `inline`, `flex`, `inline-flex`, `table`, `inline-table`, `table-caption`, `table-cell`, `table-column`, `table-column-group`, `table-footer-group`, `table-header-group`, `table-row-group`, `table-row`, `flow-root`, `grid`, `inline-grid`, `contents`, `list-item`, `hidden`],
                sr: [`sr-only`, `not-sr-only`],
                float: [{
                    float: [`right`, `left`, `none`, `start`, `end`]
                }],
                clear: [{
                    clear: [`left`, `right`, `both`, `none`, `start`, `end`]
                }],
                isolation: [`isolate`, `isolation-auto`],
                "object-fit": [{
                    object: [`contain`, `cover`, `fill`, `none`, `scale-down`]
                }],
                "object-position": [{
                    object: x()
                }],
                overflow: [{
                    overflow: S()
                }],
                "overflow-x": [{
                    "overflow-x": S()
                }],
                "overflow-y": [{
                    "overflow-y": S()
                }],
                overscroll: [{
                    overscroll: C()
                }],
                "overscroll-x": [{
                    "overscroll-x": C()
                }],
                "overscroll-y": [{
                    "overscroll-y": C()
                }],
                position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
                inset: [{
                    inset: T()
                }],
                "inset-x": [{
                    "inset-x": T()
                }],
                "inset-y": [{
                    "inset-y": T()
                }],
                start: [{
                    "inset-s": T(),
                    start: T()
                }],
                end: [{
                    "inset-e": T(),
                    end: T()
                }],
                "inset-bs": [{
                    "inset-bs": T()
                }],
                "inset-be": [{
                    "inset-be": T()
                }],
                top: [{
                    top: T()
                }],
                right: [{
                    right: T()
                }],
                bottom: [{
                    bottom: T()
                }],
                left: [{
                    left: T()
                }],
                visibility: [`visible`, `invisible`, `collapse`],
                z: [{
                    z: [yr, `auto`, L, I]
                }],
                basis: [{
                    basis: [vr, `full`, `auto`, s, ...w()]
                }],
                "flex-direction": [{
                    flex: [`row`, `row-reverse`, `col`, `col-reverse`]
                }],
                "flex-wrap": [{
                    flex: [`nowrap`, `wrap`, `wrap-reverse`]
                }],
                flex: [{
                    flex: [F, vr, `auto`, `initial`, `none`, I]
                }],
                grow: [{
                    grow: [``, F, L, I]
                }],
                shrink: [{
                    shrink: [``, F, L, I]
                }],
                order: [{
                    order: [yr, `first`, `last`, `none`, L, I]
                }],
                "grid-cols": [{
                    "grid-cols": ee()
                }],
                "col-start-end": [{
                    col: E()
                }],
                "col-start": [{
                    "col-start": te()
                }],
                "col-end": [{
                    "col-end": te()
                }],
                "grid-rows": [{
                    "grid-rows": ee()
                }],
                "row-start-end": [{
                    row: E()
                }],
                "row-start": [{
                    "row-start": te()
                }],
                "row-end": [{
                    "row-end": te()
                }],
                "grid-flow": [{
                    "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`]
                }],
                "auto-cols": [{
                    "auto-cols": ne()
                }],
                "auto-rows": [{
                    "auto-rows": ne()
                }],
                gap: [{
                    gap: w()
                }],
                "gap-x": [{
                    "gap-x": w()
                }],
                "gap-y": [{
                    "gap-y": w()
                }],
                "justify-content": [{
                    justify: [...re(), `normal`]
                }],
                "justify-items": [{
                    "justify-items": [...ie(), `normal`]
                }],
                "justify-self": [{
                    "justify-self": [`auto`, ...ie()]
                }],
                "align-content": [{
                    content: [`normal`, ...re()]
                }],
                "align-items": [{
                    items: [...ie(), {
                        baseline: [``, `last`]
                    }]
                }],
                "align-self": [{
                    self: [`auto`, ...ie(), {
                        baseline: [``, `last`]
                    }]
                }],
                "place-content": [{
                    "place-content": re()
                }],
                "place-items": [{
                    "place-items": [...ie(), `baseline`]
                }],
                "place-self": [{
                    "place-self": [`auto`, ...ie()]
                }],
                p: [{
                    p: w()
                }],
                px: [{
                    px: w()
                }],
                py: [{
                    py: w()
                }],
                ps: [{
                    ps: w()
                }],
                pe: [{
                    pe: w()
                }],
                pbs: [{
                    pbs: w()
                }],
                pbe: [{
                    pbe: w()
                }],
                pt: [{
                    pt: w()
                }],
                pr: [{
                    pr: w()
                }],
                pb: [{
                    pb: w()
                }],
                pl: [{
                    pl: w()
                }],
                m: [{
                    m: D()
                }],
                mx: [{
                    mx: D()
                }],
                my: [{
                    my: D()
                }],
                ms: [{
                    ms: D()
                }],
                me: [{
                    me: D()
                }],
                mbs: [{
                    mbs: D()
                }],
                mbe: [{
                    mbe: D()
                }],
                mt: [{
                    mt: D()
                }],
                mr: [{
                    mr: D()
                }],
                mb: [{
                    mb: D()
                }],
                ml: [{
                    ml: D()
                }],
                "space-x": [{
                    "space-x": w()
                }],
                "space-x-reverse": [`space-x-reverse`],
                "space-y": [{
                    "space-y": w()
                }],
                "space-y-reverse": [`space-y-reverse`],
                size: [{
                    size: ae()
                }],
                "inline-size": [{
                    inline: [`auto`, ...O()]
                }],
                "min-inline-size": [{
                    "min-inline": [`auto`, ...O()]
                }],
                "max-inline-size": [{
                    "max-inline": [`none`, ...O()]
                }],
                "block-size": [{
                    block: [`auto`, ...k()]
                }],
                "min-block-size": [{
                    "min-block": [`auto`, ...k()]
                }],
                "max-block-size": [{
                    "max-block": [`none`, ...k()]
                }],
                w: [{
                    w: [s, `screen`, ...ae()]
                }],
                "min-w": [{
                    "min-w": [s, `screen`, `none`, ...ae()]
                }],
                "max-w": [{
                    "max-w": [s, `screen`, `none`, `prose`, {
                        screen: [o]
                    }, ...ae()]
                }],
                h: [{
                    h: [`screen`, `lh`, ...ae()]
                }],
                "min-h": [{
                    "min-h": [`screen`, `lh`, `none`, ...ae()]
                }],
                "max-h": [{
                    "max-h": [`screen`, `lh`, ...ae()]
                }],
                "font-size": [{
                    text: [`base`, n, Ir, kr]
                }],
                "font-smoothing": [`antialiased`, `subpixel-antialiased`],
                "font-style": [`italic`, `not-italic`],
                "font-weight": [{
                    font: [r, Hr, jr]
                }],
                "font-stretch": [{
                    "font-stretch": [`ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal`, `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`, br, I]
                }],
                "font-family": [{
                    font: [Lr, Mr, t]
                }],
                "font-features": [{
                    "font-features": [I]
                }],
                "fvn-normal": [`normal-nums`],
                "fvn-ordinal": [`ordinal`],
                "fvn-slashed-zero": [`slashed-zero`],
                "fvn-figure": [`lining-nums`, `oldstyle-nums`],
                "fvn-spacing": [`proportional-nums`, `tabular-nums`],
                "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
                tracking: [{
                    tracking: [i, L, I]
                }],
                "line-clamp": [{
                    "line-clamp": [F, `none`, L, Ar]
                }],
                leading: [{
                    leading: [a, ...w()]
                }],
                "list-image": [{
                    "list-image": [`none`, L, I]
                }],
                "list-style-position": [{
                    list: [`inside`, `outside`]
                }],
                "list-style-type": [{
                    list: [`disc`, `decimal`, `none`, L, I]
                }],
                "text-alignment": [{
                    text: [`left`, `center`, `right`, `justify`, `start`, `end`]
                }],
                "placeholder-color": [{
                    placeholder: A()
                }],
                "text-color": [{
                    text: A()
                }],
                "text-decoration": [`underline`, `overline`, `line-through`, `no-underline`],
                "text-decoration-style": [{
                    decoration: [...ue(), `wavy`]
                }],
                "text-decoration-thickness": [{
                    decoration: [F, `from-font`, `auto`, L, kr]
                }],
                "text-decoration-color": [{
                    decoration: A()
                }],
                "underline-offset": [{
                    "underline-offset": [F, `auto`, L, I]
                }],
                "text-transform": [`uppercase`, `lowercase`, `capitalize`, `normal-case`],
                "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
                "text-wrap": [{
                    text: [`wrap`, `nowrap`, `balance`, `pretty`]
                }],
                indent: [{
                    indent: w()
                }],
                "vertical-align": [{
                    align: [`baseline`, `top`, `middle`, `bottom`, `text-top`, `text-bottom`, `sub`, `super`, L, I]
                }],
                whitespace: [{
                    whitespace: [`normal`, `nowrap`, `pre`, `pre-line`, `pre-wrap`, `break-spaces`]
                }],
                break: [{
                    break: [`normal`, `words`, `all`, `keep`]
                }],
                wrap: [{
                    wrap: [`break-word`, `anywhere`, `normal`]
                }],
                hyphens: [{
                    hyphens: [`none`, `manual`, `auto`]
                }],
                content: [{
                    content: [`none`, L, I]
                }],
                "bg-attachment": [{
                    bg: [`fixed`, `local`, `scroll`]
                }],
                "bg-clip": [{
                    "bg-clip": [`border`, `padding`, `content`, `text`]
                }],
                "bg-origin": [{
                    "bg-origin": [`border`, `padding`, `content`]
                }],
                "bg-position": [{
                    bg: j()
                }],
                "bg-repeat": [{
                    bg: oe()
                }],
                "bg-size": [{
                    bg: M()
                }],
                "bg-image": [{
                    bg: [`none`, {
                        linear: [{
                            to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`]
                        }, yr, L, I],
                        radial: [``, L, I],
                        conic: [yr, L, I]
                    }, Br, Pr]
                }],
                "bg-color": [{
                    bg: A()
                }],
                "gradient-from-pos": [{
                    from: se()
                }],
                "gradient-via-pos": [{
                    via: se()
                }],
                "gradient-to-pos": [{
                    to: se()
                }],
                "gradient-from": [{
                    from: A()
                }],
                "gradient-via": [{
                    via: A()
                }],
                "gradient-to": [{
                    to: A()
                }],
                rounded: [{
                    rounded: ce()
                }],
                "rounded-s": [{
                    "rounded-s": ce()
                }],
                "rounded-e": [{
                    "rounded-e": ce()
                }],
                "rounded-t": [{
                    "rounded-t": ce()
                }],
                "rounded-r": [{
                    "rounded-r": ce()
                }],
                "rounded-b": [{
                    "rounded-b": ce()
                }],
                "rounded-l": [{
                    "rounded-l": ce()
                }],
                "rounded-ss": [{
                    "rounded-ss": ce()
                }],
                "rounded-se": [{
                    "rounded-se": ce()
                }],
                "rounded-ee": [{
                    "rounded-ee": ce()
                }],
                "rounded-es": [{
                    "rounded-es": ce()
                }],
                "rounded-tl": [{
                    "rounded-tl": ce()
                }],
                "rounded-tr": [{
                    "rounded-tr": ce()
                }],
                "rounded-br": [{
                    "rounded-br": ce()
                }],
                "rounded-bl": [{
                    "rounded-bl": ce()
                }],
                "border-w": [{
                    border: le()
                }],
                "border-w-x": [{
                    "border-x": le()
                }],
                "border-w-y": [{
                    "border-y": le()
                }],
                "border-w-s": [{
                    "border-s": le()
                }],
                "border-w-e": [{
                    "border-e": le()
                }],
                "border-w-bs": [{
                    "border-bs": le()
                }],
                "border-w-be": [{
                    "border-be": le()
                }],
                "border-w-t": [{
                    "border-t": le()
                }],
                "border-w-r": [{
                    "border-r": le()
                }],
                "border-w-b": [{
                    "border-b": le()
                }],
                "border-w-l": [{
                    "border-l": le()
                }],
                "divide-x": [{
                    "divide-x": le()
                }],
                "divide-x-reverse": [`divide-x-reverse`],
                "divide-y": [{
                    "divide-y": le()
                }],
                "divide-y-reverse": [`divide-y-reverse`],
                "border-style": [{
                    border: [...ue(), `hidden`, `none`]
                }],
                "divide-style": [{
                    divide: [...ue(), `hidden`, `none`]
                }],
                "border-color": [{
                    border: A()
                }],
                "border-color-x": [{
                    "border-x": A()
                }],
                "border-color-y": [{
                    "border-y": A()
                }],
                "border-color-s": [{
                    "border-s": A()
                }],
                "border-color-e": [{
                    "border-e": A()
                }],
                "border-color-bs": [{
                    "border-bs": A()
                }],
                "border-color-be": [{
                    "border-be": A()
                }],
                "border-color-t": [{
                    "border-t": A()
                }],
                "border-color-r": [{
                    "border-r": A()
                }],
                "border-color-b": [{
                    "border-b": A()
                }],
                "border-color-l": [{
                    "border-l": A()
                }],
                "divide-color": [{
                    divide: A()
                }],
                "outline-style": [{
                    outline: [...ue(), `none`, `hidden`]
                }],
                "outline-offset": [{
                    "outline-offset": [F, L, I]
                }],
                "outline-w": [{
                    outline: [``, F, Ir, kr]
                }],
                "outline-color": [{
                    outline: A()
                }],
                shadow: [{
                    shadow: [``, `none`, u, Vr, Fr]
                }],
                "shadow-color": [{
                    shadow: A()
                }],
                "inset-shadow": [{
                    "inset-shadow": [`none`, d, Vr, Fr]
                }],
                "inset-shadow-color": [{
                    "inset-shadow": A()
                }],
                "ring-w": [{
                    ring: le()
                }],
                "ring-w-inset": [`ring-inset`],
                "ring-color": [{
                    ring: A()
                }],
                "ring-offset-w": [{
                    "ring-offset": [F, kr]
                }],
                "ring-offset-color": [{
                    "ring-offset": A()
                }],
                "inset-ring-w": [{
                    "inset-ring": le()
                }],
                "inset-ring-color": [{
                    "inset-ring": A()
                }],
                "text-shadow": [{
                    "text-shadow": [`none`, f, Vr, Fr]
                }],
                "text-shadow-color": [{
                    "text-shadow": A()
                }],
                opacity: [{
                    opacity: [F, L, I]
                }],
                "mix-blend": [{
                    "mix-blend": [...de(), `plus-darker`, `plus-lighter`]
                }],
                "bg-blend": [{
                    "bg-blend": de()
                }],
                "mask-clip": [{
                    "mask-clip": [`border`, `padding`, `content`, `fill`, `stroke`, `view`]
                }, `mask-no-clip`],
                "mask-composite": [{
                    mask: [`add`, `subtract`, `intersect`, `exclude`]
                }],
                "mask-image-linear-pos": [{
                    "mask-linear": [F]
                }],
                "mask-image-linear-from-pos": [{
                    "mask-linear-from": fe()
                }],
                "mask-image-linear-to-pos": [{
                    "mask-linear-to": fe()
                }],
                "mask-image-linear-from-color": [{
                    "mask-linear-from": A()
                }],
                "mask-image-linear-to-color": [{
                    "mask-linear-to": A()
                }],
                "mask-image-t-from-pos": [{
                    "mask-t-from": fe()
                }],
                "mask-image-t-to-pos": [{
                    "mask-t-to": fe()
                }],
                "mask-image-t-from-color": [{
                    "mask-t-from": A()
                }],
                "mask-image-t-to-color": [{
                    "mask-t-to": A()
                }],
                "mask-image-r-from-pos": [{
                    "mask-r-from": fe()
                }],
                "mask-image-r-to-pos": [{
                    "mask-r-to": fe()
                }],
                "mask-image-r-from-color": [{
                    "mask-r-from": A()
                }],
                "mask-image-r-to-color": [{
                    "mask-r-to": A()
                }],
                "mask-image-b-from-pos": [{
                    "mask-b-from": fe()
                }],
                "mask-image-b-to-pos": [{
                    "mask-b-to": fe()
                }],
                "mask-image-b-from-color": [{
                    "mask-b-from": A()
                }],
                "mask-image-b-to-color": [{
                    "mask-b-to": A()
                }],
                "mask-image-l-from-pos": [{
                    "mask-l-from": fe()
                }],
                "mask-image-l-to-pos": [{
                    "mask-l-to": fe()
                }],
                "mask-image-l-from-color": [{
                    "mask-l-from": A()
                }],
                "mask-image-l-to-color": [{
                    "mask-l-to": A()
                }],
                "mask-image-x-from-pos": [{
                    "mask-x-from": fe()
                }],
                "mask-image-x-to-pos": [{
                    "mask-x-to": fe()
                }],
                "mask-image-x-from-color": [{
                    "mask-x-from": A()
                }],
                "mask-image-x-to-color": [{
                    "mask-x-to": A()
                }],
                "mask-image-y-from-pos": [{
                    "mask-y-from": fe()
                }],
                "mask-image-y-to-pos": [{
                    "mask-y-to": fe()
                }],
                "mask-image-y-from-color": [{
                    "mask-y-from": A()
                }],
                "mask-image-y-to-color": [{
                    "mask-y-to": A()
                }],
                "mask-image-radial": [{
                    "mask-radial": [L, I]
                }],
                "mask-image-radial-from-pos": [{
                    "mask-radial-from": fe()
                }],
                "mask-image-radial-to-pos": [{
                    "mask-radial-to": fe()
                }],
                "mask-image-radial-from-color": [{
                    "mask-radial-from": A()
                }],
                "mask-image-radial-to-color": [{
                    "mask-radial-to": A()
                }],
                "mask-image-radial-shape": [{
                    "mask-radial": [`circle`, `ellipse`]
                }],
                "mask-image-radial-size": [{
                    "mask-radial": [{
                        closest: [`side`, `corner`],
                        farthest: [`side`, `corner`]
                    }]
                }],
                "mask-image-radial-pos": [{
                    "mask-radial-at": b()
                }],
                "mask-image-conic-pos": [{
                    "mask-conic": [F]
                }],
                "mask-image-conic-from-pos": [{
                    "mask-conic-from": fe()
                }],
                "mask-image-conic-to-pos": [{
                    "mask-conic-to": fe()
                }],
                "mask-image-conic-from-color": [{
                    "mask-conic-from": A()
                }],
                "mask-image-conic-to-color": [{
                    "mask-conic-to": A()
                }],
                "mask-mode": [{
                    mask: [`alpha`, `luminance`, `match`]
                }],
                "mask-origin": [{
                    "mask-origin": [`border`, `padding`, `content`, `fill`, `stroke`, `view`]
                }],
                "mask-position": [{
                    mask: j()
                }],
                "mask-repeat": [{
                    mask: oe()
                }],
                "mask-size": [{
                    mask: M()
                }],
                "mask-type": [{
                    "mask-type": [`alpha`, `luminance`]
                }],
                "mask-image": [{
                    mask: [`none`, L, I]
                }],
                filter: [{
                    filter: [``, `none`, L, I]
                }],
                blur: [{
                    blur: pe()
                }],
                brightness: [{
                    brightness: [F, L, I]
                }],
                contrast: [{
                    contrast: [F, L, I]
                }],
                "drop-shadow": [{
                    "drop-shadow": [``, `none`, p, Vr, Fr]
                }],
                "drop-shadow-color": [{
                    "drop-shadow": A()
                }],
                grayscale: [{
                    grayscale: [``, F, L, I]
                }],
                "hue-rotate": [{
                    "hue-rotate": [F, L, I]
                }],
                invert: [{
                    invert: [``, F, L, I]
                }],
                saturate: [{
                    saturate: [F, L, I]
                }],
                sepia: [{
                    sepia: [``, F, L, I]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": [``, `none`, L, I]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": pe()
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [F, L, I]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [F, L, I]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": [``, F, L, I]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [F, L, I]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": [``, F, L, I]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [F, L, I]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [F, L, I]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": [``, F, L, I]
                }],
                "border-collapse": [{
                    border: [`collapse`, `separate`]
                }],
                "border-spacing": [{
                    "border-spacing": w()
                }],
                "border-spacing-x": [{
                    "border-spacing-x": w()
                }],
                "border-spacing-y": [{
                    "border-spacing-y": w()
                }],
                "table-layout": [{
                    table: [`auto`, `fixed`]
                }],
                caption: [{
                    caption: [`top`, `bottom`]
                }],
                transition: [{
                    transition: [``, `all`, `colors`, `opacity`, `shadow`, `transform`, `none`, L, I]
                }],
                "transition-behavior": [{
                    transition: [`normal`, `discrete`]
                }],
                duration: [{
                    duration: [F, `initial`, L, I]
                }],
                ease: [{
                    ease: [`linear`, `initial`, _, L, I]
                }],
                delay: [{
                    delay: [F, L, I]
                }],
                animate: [{
                    animate: [`none`, v, L, I]
                }],
                backface: [{
                    backface: [`hidden`, `visible`]
                }],
                perspective: [{
                    perspective: [h, L, I]
                }],
                "perspective-origin": [{
                    "perspective-origin": x()
                }],
                rotate: [{
                    rotate: me()
                }],
                "rotate-x": [{
                    "rotate-x": me()
                }],
                "rotate-y": [{
                    "rotate-y": me()
                }],
                "rotate-z": [{
                    "rotate-z": me()
                }],
                scale: [{
                    scale: he()
                }],
                "scale-x": [{
                    "scale-x": he()
                }],
                "scale-y": [{
                    "scale-y": he()
                }],
                "scale-z": [{
                    "scale-z": he()
                }],
                "scale-3d": [`scale-3d`],
                skew: [{
                    skew: ge()
                }],
                "skew-x": [{
                    "skew-x": ge()
                }],
                "skew-y": [{
                    "skew-y": ge()
                }],
                transform: [{
                    transform: [L, I, ``, `none`, `gpu`, `cpu`]
                }],
                "transform-origin": [{
                    origin: x()
                }],
                "transform-style": [{
                    transform: [`3d`, `flat`]
                }],
                translate: [{
                    translate: _e()
                }],
                "translate-x": [{
                    "translate-x": _e()
                }],
                "translate-y": [{
                    "translate-y": _e()
                }],
                "translate-z": [{
                    "translate-z": _e()
                }],
                "translate-none": [`translate-none`],
                accent: [{
                    accent: A()
                }],
                appearance: [{
                    appearance: [`none`, `auto`]
                }],
                "caret-color": [{
                    caret: A()
                }],
                "color-scheme": [{
                    scheme: [`normal`, `dark`, `light`, `light-dark`, `only-dark`, `only-light`]
                }],
                cursor: [{
                    cursor: [`auto`, `default`, `pointer`, `wait`, `text`, `move`, `help`, `not-allowed`, `none`, `context-menu`, `progress`, `cell`, `crosshair`, `vertical-text`, `alias`, `copy`, `no-drop`, `grab`, `grabbing`, `all-scroll`, `col-resize`, `row-resize`, `n-resize`, `e-resize`, `s-resize`, `w-resize`, `ne-resize`, `nw-resize`, `se-resize`, `sw-resize`, `ew-resize`, `ns-resize`, `nesw-resize`, `nwse-resize`, `zoom-in`, `zoom-out`, L, I]
                }],
                "field-sizing": [{
                    "field-sizing": [`fixed`, `content`]
                }],
                "pointer-events": [{
                    "pointer-events": [`auto`, `none`]
                }],
                resize: [{
                    resize: [`none`, ``, `y`, `x`]
                }],
                "scroll-behavior": [{
                    scroll: [`auto`, `smooth`]
                }],
                "scroll-m": [{
                    "scroll-m": w()
                }],
                "scroll-mx": [{
                    "scroll-mx": w()
                }],
                "scroll-my": [{
                    "scroll-my": w()
                }],
                "scroll-ms": [{
                    "scroll-ms": w()
                }],
                "scroll-me": [{
                    "scroll-me": w()
                }],
                "scroll-mbs": [{
                    "scroll-mbs": w()
                }],
                "scroll-mbe": [{
                    "scroll-mbe": w()
                }],
                "scroll-mt": [{
                    "scroll-mt": w()
                }],
                "scroll-mr": [{
                    "scroll-mr": w()
                }],
                "scroll-mb": [{
                    "scroll-mb": w()
                }],
                "scroll-ml": [{
                    "scroll-ml": w()
                }],
                "scroll-p": [{
                    "scroll-p": w()
                }],
                "scroll-px": [{
                    "scroll-px": w()
                }],
                "scroll-py": [{
                    "scroll-py": w()
                }],
                "scroll-ps": [{
                    "scroll-ps": w()
                }],
                "scroll-pe": [{
                    "scroll-pe": w()
                }],
                "scroll-pbs": [{
                    "scroll-pbs": w()
                }],
                "scroll-pbe": [{
                    "scroll-pbe": w()
                }],
                "scroll-pt": [{
                    "scroll-pt": w()
                }],
                "scroll-pr": [{
                    "scroll-pr": w()
                }],
                "scroll-pb": [{
                    "scroll-pb": w()
                }],
                "scroll-pl": [{
                    "scroll-pl": w()
                }],
                "snap-align": [{
                    snap: [`start`, `end`, `center`, `align-none`]
                }],
                "snap-stop": [{
                    snap: [`normal`, `always`]
                }],
                "snap-type": [{
                    snap: [`none`, `x`, `y`, `both`]
                }],
                "snap-strictness": [{
                    snap: [`mandatory`, `proximity`]
                }],
                touch: [{
                    touch: [`auto`, `none`, `manipulation`]
                }],
                "touch-x": [{
                    "touch-pan": [`x`, `left`, `right`]
                }],
                "touch-y": [{
                    "touch-pan": [`y`, `up`, `down`]
                }],
                "touch-pz": [`touch-pinch-zoom`],
                select: [{
                    select: [`none`, `text`, `all`, `auto`]
                }],
                "will-change": [{
                    "will-change": [`auto`, `scroll`, `contents`, `transform`, L, I]
                }],
                fill: [{
                    fill: [`none`, ...A()]
                }],
                "stroke-w": [{
                    stroke: [F, Ir, kr, Ar]
                }],
                stroke: [{
                    stroke: [`none`, ...A()]
                }],
                "forced-color-adjust": [{
                    "forced-color-adjust": [`auto`, `none`]
                }]
            },
            conflictingClassGroups: {
                overflow: [`overflow-x`, `overflow-y`],
                overscroll: [`overscroll-x`, `overscroll-y`],
                inset: [`inset-x`, `inset-y`, `inset-bs`, `inset-be`, `start`, `end`, `top`, `right`, `bottom`, `left`],
                "inset-x": [`right`, `left`],
                "inset-y": [`top`, `bottom`],
                flex: [`basis`, `grow`, `shrink`],
                gap: [`gap-x`, `gap-y`],
                p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
                px: [`pr`, `pl`],
                py: [`pt`, `pb`],
                m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
                mx: [`mr`, `ml`],
                my: [`mt`, `mb`],
                size: [`w`, `h`],
                "font-size": [`leading`],
                "fvn-normal": [`fvn-ordinal`, `fvn-slashed-zero`, `fvn-figure`, `fvn-spacing`, `fvn-fraction`],
                "fvn-ordinal": [`fvn-normal`],
                "fvn-slashed-zero": [`fvn-normal`],
                "fvn-figure": [`fvn-normal`],
                "fvn-spacing": [`fvn-normal`],
                "fvn-fraction": [`fvn-normal`],
                "line-clamp": [`display`, `overflow`],
                rounded: [`rounded-s`, `rounded-e`, `rounded-t`, `rounded-r`, `rounded-b`, `rounded-l`, `rounded-ss`, `rounded-se`, `rounded-ee`, `rounded-es`, `rounded-tl`, `rounded-tr`, `rounded-br`, `rounded-bl`],
                "rounded-s": [`rounded-ss`, `rounded-es`],
                "rounded-e": [`rounded-se`, `rounded-ee`],
                "rounded-t": [`rounded-tl`, `rounded-tr`],
                "rounded-r": [`rounded-tr`, `rounded-br`],
                "rounded-b": [`rounded-br`, `rounded-bl`],
                "rounded-l": [`rounded-tl`, `rounded-bl`],
                "border-spacing": [`border-spacing-x`, `border-spacing-y`],
                "border-w": [`border-w-x`, `border-w-y`, `border-w-s`, `border-w-e`, `border-w-bs`, `border-w-be`, `border-w-t`, `border-w-r`, `border-w-b`, `border-w-l`],
                "border-w-x": [`border-w-r`, `border-w-l`],
                "border-w-y": [`border-w-t`, `border-w-b`],
                "border-color": [`border-color-x`, `border-color-y`, `border-color-s`, `border-color-e`, `border-color-bs`, `border-color-be`, `border-color-t`, `border-color-r`, `border-color-b`, `border-color-l`],
                "border-color-x": [`border-color-r`, `border-color-l`],
                "border-color-y": [`border-color-t`, `border-color-b`],
                translate: [`translate-x`, `translate-y`, `translate-none`],
                "translate-none": [`translate`, `translate-x`, `translate-y`, `translate-z`],
                "scroll-m": [`scroll-mx`, `scroll-my`, `scroll-ms`, `scroll-me`, `scroll-mbs`, `scroll-mbe`, `scroll-mt`, `scroll-mr`, `scroll-mb`, `scroll-ml`],
                "scroll-mx": [`scroll-mr`, `scroll-ml`],
                "scroll-my": [`scroll-mt`, `scroll-mb`],
                "scroll-p": [`scroll-px`, `scroll-py`, `scroll-ps`, `scroll-pe`, `scroll-pbs`, `scroll-pbe`, `scroll-pt`, `scroll-pr`, `scroll-pb`, `scroll-pl`],
                "scroll-px": [`scroll-pr`, `scroll-pl`],
                "scroll-py": [`scroll-pt`, `scroll-pb`],
                touch: [`touch-x`, `touch-y`, `touch-pz`],
                "touch-x": [`touch`],
                "touch-y": [`touch`],
                "touch-pz": [`touch`]
            },
            conflictingClassGroupModifiers: {
                "font-size": [`leading`]
            },
            orderSensitiveModifiers: [`*`, `**`, `after`, `backdrop`, `before`, `details-content`, `file`, `first-letter`, `first-line`, `marker`, `placeholder`, `selection`]
        }
    });

function ei(...e) {
    return $r(Yt(e))
}
window.self, window.top;
var ti = Ht,
    ni = _.forwardRef(({
        className: e,
        ...t
    }, n) => (0, j.jsx)(Ut, {
        ref: n,
        className: ei(`fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]`, e),
        ...t
    }));
ni.displayName = Ut.displayName;
var ri = Qt(`group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full`, {
        variants: {
            variant: {
                default: `border bg-background text-foreground`,
                destructive: `destructive group border-destructive bg-destructive text-destructive-foreground`
            }
        },
        defaultVariants: {
            variant: `default`
        }
    }),
    ii = _.forwardRef(({
        className: e,
        variant: t,
        ...n
    }, r) => (0, j.jsx)(Wt, {
        ref: r,
        className: ei(ri({
            variant: t
        }), e),
        ...n
    }));
ii.displayName = Wt.displayName;
var ai = _.forwardRef(({
    className: e,
    ...t
}, n) => (0, j.jsx)(qt, {
    ref: n,
    className: ei(`inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive`, e),
    ...t
}));
ai.displayName = qt.displayName;
var oi = _.forwardRef(({
    className: e,
    ...t
}, n) => (0, j.jsx)(Jt, {
    ref: n,
    className: ei(`absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600`, e),
    "toast-close": ``,
    ...t,
    children: (0, j.jsx)(An, {
        className: `h-4 w-4`
    })
}));
oi.displayName = Jt.displayName;
var si = _.forwardRef(({
    className: e,
    ...t
}, n) => (0, j.jsx)(Gt, {
    ref: n,
    className: ei(`text-sm font-semibold`, e),
    ...t
}));
si.displayName = Gt.displayName;
var ci = _.forwardRef(({
    className: e,
    ...t
}, n) => (0, j.jsx)(Kt, {
    ref: n,
    className: ei(`text-sm opacity-90`, e),
    ...t
}));
ci.displayName = Kt.displayName;

function li() {
    let {
        toasts: e
    } = re();
    return (0, j.jsxs)(ti, {
        children: [e.map(function({
            id: e,
            title: t,
            description: n,
            action: r,
            ...i
        }) {
            return (0, j.jsxs)(ii, { ...i,
                children: [(0, j.jsxs)(`div`, {
                    className: `grid gap-1`,
                    children: [t && (0, j.jsx)(si, {
                        children: t
                    }), n && (0, j.jsx)(ci, {
                        children: n
                    })]
                }), r, (0, j.jsx)(oi, {})]
            }, e)
        }), (0, j.jsx)(ni, {})]
    })
}
var ui = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            return this.listeners.add(e), this.onSubscribe(), () => {
                this.listeners.delete(e), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    di = {
        setTimeout: (e, t) => setTimeout(e, t),
        clearTimeout: e => clearTimeout(e),
        setInterval: (e, t) => setInterval(e, t),
        clearInterval: e => clearInterval(e)
    },
    fi = new class {#e = di;
        setTimeoutProvider(e) {
            this.#e = e
        }
        setTimeout(e, t) {
            return this.#e.setTimeout(e, t)
        }
        clearTimeout(e) {
            this.#e.clearTimeout(e)
        }
        setInterval(e, t) {
            return this.#e.setInterval(e, t)
        }
        clearInterval(e) {
            this.#e.clearInterval(e)
        }
    };

function pi(e) {
    setTimeout(e, 0)
}
var mi = typeof window > `u` || `Deno` in globalThis;

function hi() {}

function gi(e, t) {
    return typeof e == `function` ? e(t) : e
}

function _i(e) {
    return typeof e == `number` && e >= 0 && e !== 1 / 0
}

function vi(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}

function yi(e, t) {
    return typeof e == `function` ? e(t) : e
}

function bi(e, t) {
    return typeof e == `function` ? e(t) : e
}

function xi(e, t) {
    let {
        type: n = `all`,
        exact: r,
        fetchStatus: i,
        predicate: a,
        queryKey: o,
        stale: s
    } = e;
    if (o) {
        if (r) {
            if (t.queryHash !== Ci(o, t.options)) return !1
        } else if (!Ti(t.queryKey, o)) return !1
    }
    if (n !== `all`) {
        let e = t.isActive();
        if (n === `active` && !e || n === `inactive` && e) return !1
    }
    return !(typeof s == `boolean` && t.isStale() !== s || i && i !== t.state.fetchStatus || a && !a(t))
}

function Si(e, t) {
    let {
        exact: n,
        status: r,
        predicate: i,
        mutationKey: a
    } = e;
    if (a) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (wi(t.options.mutationKey) !== wi(a)) return !1
        } else if (!Ti(t.options.mutationKey, a)) return !1
    }
    return !(r && t.state.status !== r || i && !i(t))
}

function Ci(e, t) {
    return (t ?.queryKeyHashFn || wi)(e)
}

function wi(e) {
    return JSON.stringify(e, (e, t) => Ai(t) ? Object.keys(t).sort().reduce((e, n) => (e[n] = t[n], e), {}) : t)
}

function Ti(e, t) {
    return e === t ? !0 : typeof e == typeof t && e && t && typeof e == `object` && typeof t == `object` ? Object.keys(t).every(n => Ti(e[n], t[n])) : !1
}
var Ei = Object.prototype.hasOwnProperty;

function Di(e, t, n = 0) {
    if (e === t) return e;
    if (n > 500) return t;
    let r = ki(e) && ki(t);
    if (!r && !(Ai(e) && Ai(t))) return t;
    let i = (r ? e : Object.keys(e)).length,
        a = r ? t : Object.keys(t),
        o = a.length,
        s = r ? Array(o) : {},
        c = 0;
    for (let l = 0; l < o; l++) {
        let o = r ? l : a[l],
            u = e[o],
            d = t[o];
        if (u === d) {
            s[o] = u, (r ? l < i : Ei.call(e, o)) && c++;
            continue
        }
        if (u === null || d === null || typeof u != `object` || typeof d != `object`) {
            s[o] = d;
            continue
        }
        let f = Di(u, d, n + 1);
        s[o] = f, f === u && c++
    }
    return i === o && c === i ? e : s
}

function Oi(e, t) {
    if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
    for (let n in e)
        if (e[n] !== t[n]) return !1;
    return !0
}

function ki(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}

function Ai(e) {
    if (!ji(e)) return !1;
    let t = e.constructor;
    if (t === void 0) return !0;
    let n = t.prototype;
    return !(!ji(n) || !n.hasOwnProperty(`isPrototypeOf`) || Object.getPrototypeOf(e) !== Object.prototype)
}

function ji(e) {
    return Object.prototype.toString.call(e) === `[object Object]`
}

function Mi(e) {
    return new Promise(t => {
        fi.setTimeout(t, e)
    })
}

function Ni(e, t, n) {
    return typeof n.structuralSharing == `function` ? n.structuralSharing(e, t) : n.structuralSharing === !1 ? t : Di(e, t)
}

function Pi(e, t, n = 0) {
    let r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}

function Fi(e, t, n = 0) {
    let r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var Ii = Symbol();

function Li(e, t) {
    return !e.queryFn && t ?.initialPromise ? () => t.initialPromise : !e.queryFn || e.queryFn === Ii ? () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}

function Ri(e, t) {
    return typeof e == `function` ? e(...t) : !!e
}

function zi(e, t, n) {
    let r = !1,
        i;
    return Object.defineProperty(e, "signal", {
        enumerable: !0,
        get: () => (i ??= t(), r ? i : (r = !0, i.aborted ? n() : i.addEventListener(`abort`, n, {
            once: !0
        }), i))
    }), e
}
var Bi = new class extends ui {#e;#t;#n;
    constructor() {
        super(), this.#n = e => {
            if (!mi && window.addEventListener) {
                let t = () => e();
                return window.addEventListener(`visibilitychange`, t, !1), () => {
                    window.removeEventListener(`visibilitychange`, t)
                }
            }
        }
    }
    onSubscribe() {
        this.#t || this.setEventListener(this.#n)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#t ?.(), this.#t = void 0)
    }
    setEventListener(e) {
        this.#n = e, this.#t ?.(), this.#t = e(e => {
            typeof e == `boolean` ? this.setFocused(e) : this.onFocus()
        })
    }
    setFocused(e) {
        this.#e !== e && (this.#e = e, this.onFocus())
    }
    onFocus() {
        let e = this.isFocused();
        this.listeners.forEach(t => {
            t(e)
        })
    }
    isFocused() {
        return typeof this.#e == `boolean` ? this.#e : globalThis.document ?.visibilityState !== `hidden`
    }
};

function Vi() {
    let e, t, n = new Promise((n, r) => {
        e = n, t = r
    });
    n.status = `pending`, n.catch(() => {});

    function r(e) {
        Object.assign(n, e), delete n.resolve, delete n.reject
    }
    return n.resolve = t => {
        r({
            status: `fulfilled`,
            value: t
        }), e(t)
    }, n.reject = e => {
        r({
            status: `rejected`,
            reason: e
        }), t(e)
    }, n
}
var Hi = pi;

function Ui() {
    let e = [],
        t = 0,
        n = e => {
            e()
        },
        r = e => {
            e()
        },
        i = Hi,
        a = r => {
            t ? e.push(r) : i(() => {
                n(r)
            })
        },
        o = () => {
            let t = e;
            e = [], t.length && i(() => {
                r(() => {
                    t.forEach(e => {
                        n(e)
                    })
                })
            })
        };
    return {
        batch: e => {
            let n;
            t++;
            try {
                n = e()
            } finally {
                t--, t || o()
            }
            return n
        },
        batchCalls: e => (...t) => {
            a(() => {
                e(...t)
            })
        },
        schedule: a,
        setNotifyFunction: e => {
            n = e
        },
        setBatchNotifyFunction: e => {
            r = e
        },
        setScheduler: e => {
            i = e
        }
    }
}
var Wi = Ui(),
    Gi = new class extends ui {#e = !0;#t;#n;
        constructor() {
            super(), this.#n = e => {
                if (!mi && window.addEventListener) {
                    let t = () => e(!0),
                        n = () => e(!1);
                    return window.addEventListener(`online`, t, !1), window.addEventListener(`offline`, n, !1), () => {
                        window.removeEventListener(`online`, t), window.removeEventListener(`offline`, n)
                    }
                }
            }
        }
        onSubscribe() {
            this.#t || this.setEventListener(this.#n)
        }
        onUnsubscribe() {
            this.hasListeners() || (this.#t ?.(), this.#t = void 0)
        }
        setEventListener(e) {
            this.#n = e, this.#t ?.(), this.#t = e(this.setOnline.bind(this))
        }
        setOnline(e) {
            this.#e !== e && (this.#e = e, this.listeners.forEach(t => {
                t(e)
            }))
        }
        isOnline() {
            return this.#e
        }
    };

function Ki(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}

function qi(e) {
    return (e ?? `online`) !== `online` || Gi.isOnline()
}
var Ji = class extends Error {
    constructor(e) {
        super(`CancelledError`), this.revert = e ?.revert, this.silent = e ?.silent
    }
};

function Yi(e) {
    let t = !1,
        n = 0,
        r, i = Vi(),
        a = () => i.status !== `pending`,
        o = t => {
            if (!a()) {
                let n = new Ji(t);
                f(n), e.onCancel ?.(n)
            }
        },
        s = () => {
            t = !0
        },
        c = () => {
            t = !1
        },
        l = () => Bi.isFocused() && (e.networkMode === `always` || Gi.isOnline()) && e.canRun(),
        u = () => qi(e.networkMode) && e.canRun(),
        d = e => {
            a() || (r ?.(), i.resolve(e))
        },
        f = e => {
            a() || (r ?.(), i.reject(e))
        },
        p = () => new Promise(t => {
            r = e => {
                (a() || l()) && t(e)
            }, e.onPause ?.()
        }).then(() => {
            r = void 0, a() || e.onContinue ?.()
        }),
        m = () => {
            if (a()) return;
            let r, i = n === 0 ? e.initialPromise : void 0;
            try {
                r = i ?? e.fn()
            } catch (e) {
                r = Promise.reject(e)
            }
            Promise.resolve(r).then(d).catch(r => {
                if (a()) return;
                let i = e.retry ?? (mi ? 0 : 3),
                    o = e.retryDelay ?? Ki,
                    s = typeof o == `function` ? o(n, r) : o,
                    c = i === !0 || typeof i == `number` && n < i || typeof i == `function` && i(n, r);
                if (t || !c) {
                    f(r);
                    return
                }
                n++, e.onFail ?.(n, r), Mi(s).then(() => l() ? void 0 : p()).then(() => {
                    t ? f(r) : m()
                })
            })
        };
    return {
        promise: i,
        status: () => i.status,
        cancel: o,
        continue: () => (r ?.(), i),
        cancelRetry: s,
        continueRetry: c,
        canStart: u,
        start: () => (u() ? m() : p().then(m), i)
    }
}
var Xi = class {#e;
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), _i(this.gcTime) && (this.#e = fi.setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ?? (mi ? 1 / 0 : 3e5))
        }
        clearGcTimeout() {
            this.#e &&= (fi.clearTimeout(this.#e), void 0)
        }
    },
    R = class extends Xi {#e;#t;#n;#r;#i;#a;#o;
        constructor(e) {
            super(), this.#o = !1, this.#a = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#r = e.client, this.#n = this.#r.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#e = Qi(this.options), this.state = e.state ?? this.#e, this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            return this.#i ?.promise
        }
        setOptions(e) {
            if (this.options = { ...this.#a,
                    ...e
                }, this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
                let e = Qi(this.options);
                e.data !== void 0 && (this.setState(Zi(e.data, e.dataUpdatedAt)), this.#e = e)
            }
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === `idle` && this.#n.remove(this)
        }
        setData(e, t) {
            let n = Ni(this.state.data, e, this.options);
            return this.#s({
                data: n,
                type: `success`,
                dataUpdatedAt: t ?.updatedAt,
                manual: t ?.manual
            }), n
        }
        setState(e, t) {
            this.#s({
                type: `setState`,
                state: e,
                setStateOptions: t
            })
        }
        cancel(e) {
            let t = this.#i ?.promise;
            return this.#i ?.cancel(e), t ? t.then(hi).catch(hi) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(this.#e)
        }
        isActive() {
            return this.observers.some(e => bi(e.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Ii || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
        }
        isStatic() {
            return this.getObserversCount() > 0 && this.observers.some(e => yi(e.options.staleTime, this) === `static`)
        }
        isStale() {
            return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
        }
        isStaleByTime(e = 0) {
            return this.state.data === void 0 ? !0 : e === `static` ? !1 : this.state.isInvalidated ? !0 : !vi(this.state.dataUpdatedAt, e)
        }
        onFocus() {
            this.observers.find(e => e.shouldFetchOnWindowFocus()) ?.refetch({
                cancelRefetch: !1
            }), this.#i ?.continue()
        }
        onOnline() {
            this.observers.find(e => e.shouldFetchOnReconnect()) ?.refetch({
                cancelRefetch: !1
            }), this.#i ?.continue()
        }
        addObserver(e) {
            this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.#n.notify({
                type: `observerAdded`,
                query: this,
                observer: e
            }))
        }
        removeObserver(e) {
            this.observers.includes(e) && (this.observers = this.observers.filter(t => t !== e), this.observers.length || (this.#i && (this.#o ? this.#i.cancel({
                revert: !0
            }) : this.#i.cancelRetry()), this.scheduleGc()), this.#n.notify({
                type: `observerRemoved`,
                query: this,
                observer: e
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || this.#s({
                type: `invalidate`
            })
        }
        async fetch(e, t) {
            if (this.state.fetchStatus !== `idle` && this.#i ?.status() !== `rejected`) {
                if (this.state.data !== void 0 && t ?.cancelRefetch) this.cancel({
                    silent: !0
                });
                else if (this.#i) return this.#i.continueRetry(), this.#i.promise
            }
            if (e && this.setOptions(e), !this.options.queryFn) {
                let e = this.observers.find(e => e.options.queryFn);
                e && this.setOptions(e.options)
            }
            let n = new AbortController,
                r = e => {
                    Object.defineProperty(e, "signal", {
                        enumerable: !0,
                        get: () => (this.#o = !0, n.signal)
                    })
                },
                i = () => {
                    let e = Li(this.options, t),
                        n = (() => {
                            let e = {
                                client: this.#r,
                                queryKey: this.queryKey,
                                meta: this.meta
                            };
                            return r(e), e
                        })();
                    return this.#o = !1, this.options.persister ? this.options.persister(e, n, this) : e(n)
                },
                a = (() => {
                    let e = {
                        fetchOptions: t,
                        options: this.options,
                        queryKey: this.queryKey,
                        client: this.#r,
                        state: this.state,
                        fetchFn: i
                    };
                    return r(e), e
                })();
            this.options.behavior ?.onFetch(a, this), this.#t = this.state, (this.state.fetchStatus === `idle` || this.state.fetchMeta !== a.fetchOptions ?.meta) && this.#s({
                type: `fetch`,
                meta: a.fetchOptions ?.meta
            }), this.#i = Yi({
                initialPromise: t ?.initialPromise,
                fn: a.fetchFn,
                onCancel: e => {
                    e instanceof Ji && e.revert && this.setState({ ...this.#t,
                        fetchStatus: `idle`
                    }), n.abort()
                },
                onFail: (e, t) => {
                    this.#s({
                        type: `failed`,
                        failureCount: e,
                        error: t
                    })
                },
                onPause: () => {
                    this.#s({
                        type: `pause`
                    })
                },
                onContinue: () => {
                    this.#s({
                        type: `continue`
                    })
                },
                retry: a.options.retry,
                retryDelay: a.options.retryDelay,
                networkMode: a.options.networkMode,
                canRun: () => !0
            });
            try {
                let e = await this.#i.start();
                if (e === void 0) throw Error(`${this.queryHash} data is undefined`);
                return this.setData(e), this.#n.config.onSuccess ?.(e, this), this.#n.config.onSettled ?.(e, this.state.error, this), e
            } catch (e) {
                if (e instanceof Ji) {
                    if (e.silent) return this.#i.promise;
                    if (e.revert) {
                        if (this.state.data === void 0) throw e;
                        return this.state.data
                    }
                }
                throw this.#s({
                    type: `error`,
                    error: e
                }), this.#n.config.onError ?.(e, this), this.#n.config.onSettled ?.(this.state.data, e, this), e
            } finally {
                this.scheduleGc()
            }
        }#s(e) {
            let t = t => {
                switch (e.type) {
                    case `failed`:
                        return { ...t,
                            fetchFailureCount: e.failureCount,
                            fetchFailureReason: e.error
                        };
                    case `pause`:
                        return { ...t,
                            fetchStatus: `paused`
                        };
                    case `continue`:
                        return { ...t,
                            fetchStatus: `fetching`
                        };
                    case `fetch`:
                        return { ...t,
                            ...z(t.data, this.options),
                            fetchMeta: e.meta ?? null
                        };
                    case `success`:
                        let n = { ...t,
                            ...Zi(e.data, e.dataUpdatedAt),
                            dataUpdateCount: t.dataUpdateCount + 1,
                            ...!e.manual && {
                                fetchStatus: `idle`,
                                fetchFailureCount: 0,
                                fetchFailureReason: null
                            }
                        };
                        return this.#t = e.manual ? n : void 0, n;
                    case `error`:
                        let r = e.error;
                        return { ...t,
                            error: r,
                            errorUpdateCount: t.errorUpdateCount + 1,
                            errorUpdatedAt: Date.now(),
                            fetchFailureCount: t.fetchFailureCount + 1,
                            fetchFailureReason: r,
                            fetchStatus: `idle`,
                            status: `error`,
                            isInvalidated: !0
                        };
                    case `invalidate`:
                        return { ...t,
                            isInvalidated: !0
                        };
                    case `setState`:
                        return { ...t,
                            ...e.state
                        }
                }
            };
            this.state = t(this.state), Wi.batch(() => {
                this.observers.forEach(e => {
                    e.onQueryUpdate()
                }), this.#n.notify({
                    query: this,
                    type: `updated`,
                    action: e
                })
            })
        }
    };

function z(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: qi(t.networkMode) ? `fetching` : `paused`,
        ...e === void 0 && {
            error: null,
            status: `pending`
        }
    }
}

function Zi(e, t) {
    return {
        data: e,
        dataUpdatedAt: t ?? Date.now(),
        error: null,
        isInvalidated: !1,
        status: `success`
    }
}

function Qi(e) {
    let t = typeof e.initialData == `function` ? e.initialData() : e.initialData,
        n = t !== void 0,
        r = n ? typeof e.initialDataUpdatedAt == `function` ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? `success` : `pending`,
        fetchStatus: `idle`
    }
}
var $i = class extends ui {
    constructor(e, t) {
        super(), this.options = t, this.#e = e, this.#s = null, this.#o = Vi(), this.bindMethods(), this.setOptions(t)
    }#e;#t = void 0;#n = void 0;#r = void 0;#i;#a;#o;#s;#c;#l;#u;#d;#f;#p;#m = new Set;
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (this.#t.addObserver(this), ta(this.#t, this.options) ? this.#h() : this.updateResult(), this.#y())
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return na(this.#t, this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return na(this.#t, this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set, this.#b(), this.#x(), this.#t.removeObserver(this)
    }
    setOptions(e) {
        let t = this.options,
            n = this.#t;
        if (this.options = this.#e.defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != `boolean` && typeof this.options.enabled != `function` && typeof bi(this.options.enabled, this.#t) != `boolean`) throw Error(`Expected enabled to be a boolean or a callback that returns a boolean`);
        this.#S(), this.#t.setOptions(this.options), t._defaulted && !Oi(this.options, t) && this.#e.getQueryCache().notify({
            type: `observerOptionsUpdated`,
            query: this.#t,
            observer: this
        });
        let r = this.hasListeners();
        r && ra(this.#t, n, this.options, t) && this.#h(), this.updateResult(), r && (this.#t !== n || bi(this.options.enabled, this.#t) !== bi(t.enabled, this.#t) || yi(this.options.staleTime, this.#t) !== yi(t.staleTime, this.#t)) && this.#g();
        let i = this.#_();
        r && (this.#t !== n || bi(this.options.enabled, this.#t) !== bi(t.enabled, this.#t) || i !== this.#p) && this.#v(i)
    }
    getOptimisticResult(e) {
        let t = this.#e.getQueryCache().build(this.#e, e),
            n = this.createResult(t, e);
        return aa(this, n) && (this.#r = n, this.#a = this.options, this.#i = this.#t.state), n
    }
    getCurrentResult() {
        return this.#r
    }
    trackResult(e, t) {
        return new Proxy(e, {
            get: (e, n) => (this.trackProp(n), t ?.(n), n === `promise` && (this.trackProp(`data`), !this.options.experimental_prefetchInRender && this.#o.status === `pending` && this.#o.reject(Error(`experimental_prefetchInRender feature flag is not enabled`))), Reflect.get(e, n))
        })
    }
    trackProp(e) {
        this.#m.add(e)
    }
    getCurrentQuery() {
        return this.#t
    }
    refetch({ ...e
    } = {}) {
        return this.fetch({ ...e
        })
    }
    fetchOptimistic(e) {
        let t = this.#e.defaultQueryOptions(e),
            n = this.#e.getQueryCache().build(this.#e, t);
        return n.fetch().then(() => this.createResult(n, t))
    }
    fetch(e) {
        return this.#h({ ...e,
            cancelRefetch: e.cancelRefetch ?? !0
        }).then(() => (this.updateResult(), this.#r))
    }#h(e) {
        this.#S();
        let t = this.#t.fetch(this.options, e);
        return e ?.throwOnError || (t = t.catch(hi)), t
    }#g() {
        this.#b();
        let e = yi(this.options.staleTime, this.#t);
        if (mi || this.#r.isStale || !_i(e)) return;
        let t = vi(this.#r.dataUpdatedAt, e) + 1;
        this.#d = fi.setTimeout(() => {
            this.#r.isStale || this.updateResult()
        }, t)
    }#_() {
        return (typeof this.options.refetchInterval == `function` ? this.options.refetchInterval(this.#t) : this.options.refetchInterval) ?? !1
    }#v(e) {
        this.#x(), this.#p = e, !(mi || bi(this.options.enabled, this.#t) === !1 || !_i(this.#p) || this.#p === 0) && (this.#f = fi.setInterval(() => {
            (this.options.refetchIntervalInBackground || Bi.isFocused()) && this.#h()
        }, this.#p))
    }#y() {
        this.#g(), this.#v(this.#_())
    }#b() {
        this.#d &&= (fi.clearTimeout(this.#d), void 0)
    }#x() {
        this.#f &&= (fi.clearInterval(this.#f), void 0)
    }
    createResult(e, t) {
        let n = this.#t,
            r = this.options,
            i = this.#r,
            a = this.#i,
            o = this.#a,
            s = e === n ? this.#n : e.state,
            {
                state: c
            } = e,
            l = { ...c
            },
            u = !1,
            d;
        if (t._optimisticResults) {
            let i = this.hasListeners(),
                a = !i && ta(e, t),
                o = i && ra(e, n, t, r);
            (a || o) && (l = { ...l,
                ...z(c.data, e.options)
            }), t._optimisticResults === `isRestoring` && (l.fetchStatus = `idle`)
        }
        let {
            error: f,
            errorUpdatedAt: p,
            status: m
        } = l;
        d = l.data;
        let h = !1;
        if (t.placeholderData !== void 0 && d === void 0 && m === `pending`) {
            let e;
            i ?.isPlaceholderData && t.placeholderData === o ?.placeholderData ? (e = i.data, h = !0) : e = typeof t.placeholderData == `function` ? t.placeholderData(this.#u ?.state.data, this.#u) : t.placeholderData, e !== void 0 && (m = `success`, d = Ni(i ?.data, e, t), u = !0)
        }
        if (t.select && d !== void 0 && !h)
            if (i && d === a ?.data && t.select === this.#c) d = this.#l;
            else try {
                this.#c = t.select, d = t.select(d), d = Ni(i ?.data, d, t), this.#l = d, this.#s = null
            } catch (e) {
                this.#s = e
            }
        this.#s && (f = this.#s, d = this.#l, p = Date.now(), m = `error`);
        let g = l.fetchStatus === `fetching`,
            _ = m === `pending`,
            v = m === `error`,
            y = _ && g,
            b = d !== void 0,
            x = {
                status: m,
                fetchStatus: l.fetchStatus,
                isPending: _,
                isSuccess: m === `success`,
                isError: v,
                isInitialLoading: y,
                isLoading: y,
                data: d,
                dataUpdatedAt: l.dataUpdatedAt,
                error: f,
                errorUpdatedAt: p,
                failureCount: l.fetchFailureCount,
                failureReason: l.fetchFailureReason,
                errorUpdateCount: l.errorUpdateCount,
                isFetched: l.dataUpdateCount > 0 || l.errorUpdateCount > 0,
                isFetchedAfterMount: l.dataUpdateCount > s.dataUpdateCount || l.errorUpdateCount > s.errorUpdateCount,
                isFetching: g,
                isRefetching: g && !_,
                isLoadingError: v && !b,
                isPaused: l.fetchStatus === `paused`,
                isPlaceholderData: u,
                isRefetchError: v && b,
                isStale: ia(e, t),
                refetch: this.refetch,
                promise: this.#o,
                isEnabled: bi(t.enabled, e) !== !1
            };
        if (this.options.experimental_prefetchInRender) {
            let t = x.data !== void 0,
                r = x.status === `error` && !t,
                i = e => {
                    r ? e.reject(x.error) : t && e.resolve(x.data)
                },
                a = () => {
                    let e = this.#o = x.promise = Vi();
                    i(e)
                },
                o = this.#o;
            switch (o.status) {
                case `pending`:
                    e.queryHash === n.queryHash && i(o);
                    break;
                case `fulfilled`:
                    (r || x.data !== o.value) && a();
                    break;
                case `rejected`:
                    (!r || x.error !== o.reason) && a()
            }
        }
        return x
    }
    updateResult() {
        let e = this.#r,
            t = this.createResult(this.#t, this.options);
        this.#i = this.#t.state, this.#a = this.options, this.#i.data !== void 0 && (this.#u = this.#t), !Oi(t, e) && (this.#r = t, this.#C({
            listeners: (() => {
                if (!e) return !0;
                let {
                    notifyOnChangeProps: t
                } = this.options, n = typeof t == `function` ? t() : t;
                if (n === `all` || !n && !this.#m.size) return !0;
                let r = new Set(n ?? this.#m);
                return this.options.throwOnError && r.add(`error`), Object.keys(this.#r).some(t => {
                    let n = t;
                    return this.#r[n] !== e[n] && r.has(n)
                })
            })()
        }))
    }#S() {
        let e = this.#e.getQueryCache().build(this.#e, this.options);
        if (e === this.#t) return;
        let t = this.#t;
        this.#t = e, this.#n = e.state, this.hasListeners() && (t ?.removeObserver(this), e.addObserver(this))
    }
    onQueryUpdate() {
        this.updateResult(), this.hasListeners() && this.#y()
    }#C(e) {
        Wi.batch(() => {
            e.listeners && this.listeners.forEach(e => {
                e(this.#r)
            }), this.#e.getQueryCache().notify({
                query: this.#t,
                type: `observerResultsUpdated`
            })
        })
    }
};

function ea(e, t) {
    return bi(t.enabled, e) !== !1 && e.state.data === void 0 && (e.state.status !== `error` || t.retryOnMount !== !1)
}

function ta(e, t) {
    return ea(e, t) || e.state.data !== void 0 && na(e, t, t.refetchOnMount)
}

function na(e, t, n) {
    if (bi(t.enabled, e) !== !1 && yi(t.staleTime, e) !== `static`) {
        let r = typeof n == `function` ? n(e) : n;
        return r === `always` || r !== !1 && ia(e, t)
    }
    return !1
}

function ra(e, t, n, r) {
    return (e !== t || bi(r.enabled, e) === !1) && (!n.suspense || e.state.status !== `error`) && ia(e, n)
}

function ia(e, t) {
    return bi(t.enabled, e) !== !1 && e.isStaleByTime(yi(t.staleTime, e))
}

function aa(e, t) {
    return !Oi(e.getCurrentResult(), t)
}

function oa(e) {
    return {
        onFetch: (t, n) => {
            let r = t.options,
                i = t.fetchOptions ?.meta ?.fetchMore ?.direction,
                a = t.state.data ?.pages || [],
                o = t.state.data ?.pageParams || [],
                s = {
                    pages: [],
                    pageParams: []
                },
                c = 0,
                l = async () => {
                    let n = !1,
                        l = e => {
                            zi(e, () => t.signal, () => n = !0)
                        },
                        u = Li(t.options, t.fetchOptions),
                        d = async (e, r, i) => {
                            if (n) return Promise.reject();
                            if (r == null && e.pages.length) return Promise.resolve(e);
                            let a = (() => {
                                    let e = {
                                        client: t.client,
                                        queryKey: t.queryKey,
                                        pageParam: r,
                                        direction: i ? `backward` : `forward`,
                                        meta: t.options.meta
                                    };
                                    return l(e), e
                                })(),
                                o = await u(a),
                                {
                                    maxPages: s
                                } = t.options,
                                c = i ? Fi : Pi;
                            return {
                                pages: c(e.pages, o, s),
                                pageParams: c(e.pageParams, r, s)
                            }
                        };
                    if (i && a.length) {
                        let e = i === `backward`,
                            t = e ? ca : sa,
                            n = {
                                pages: a,
                                pageParams: o
                            };
                        s = await d(n, t(r, n), e)
                    } else {
                        let t = e ?? a.length;
                        do {
                            let e = c === 0 ? o[0] ?? r.initialPageParam : sa(r, s);
                            if (c > 0 && e == null) break;
                            s = await d(s, e), c++
                        } while (c < t)
                    }
                    return s
                };
            t.fetchFn = t.options.persister ? () => t.options.persister ?.(l, {
                client: t.client,
                queryKey: t.queryKey,
                meta: t.options.meta,
                signal: t.signal
            }, n) : l
        }
    }
}

function sa(e, {
    pages: t,
    pageParams: n
}) {
    let r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}

function ca(e, {
    pages: t,
    pageParams: n
}) {
    return t.length > 0 ? e.getPreviousPageParam ?.(t[0], t, n[0], n) : void 0
}
var la = class extends Xi {#e;#t;#n;#r;
    constructor(e) {
        super(), this.#e = e.client, this.mutationId = e.mutationId, this.#n = e.mutationCache, this.#t = [], this.state = e.state || ua(), this.setOptions(e.options), this.scheduleGc()
    }
    setOptions(e) {
        this.options = e, this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(e) {
        this.#t.includes(e) || (this.#t.push(e), this.clearGcTimeout(), this.#n.notify({
            type: `observerAdded`,
            mutation: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.#t = this.#t.filter(t => t !== e), this.scheduleGc(), this.#n.notify({
            type: `observerRemoved`,
            mutation: this,
            observer: e
        })
    }
    optionalRemove() {
        this.#t.length || (this.state.status === `pending` ? this.scheduleGc() : this.#n.remove(this))
    }
    continue () {
        return this.#r ?.continue() ?? this.execute(this.state.variables)
    }
    async execute(e) {
        let t = () => {
                this.#i({
                    type: `continue`
                })
            },
            n = {
                client: this.#e,
                meta: this.options.meta,
                mutationKey: this.options.mutationKey
            };
        this.#r = Yi({
            fn: () => this.options.mutationFn ? this.options.mutationFn(e, n) : Promise.reject(Error(`No mutationFn found`)),
            onFail: (e, t) => {
                this.#i({
                    type: `failed`,
                    failureCount: e,
                    error: t
                })
            },
            onPause: () => {
                this.#i({
                    type: `pause`
                })
            },
            onContinue: t,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => this.#n.canRun(this)
        });
        let r = this.state.status === `pending`,
            i = !this.#r.canStart();
        try {
            if (r) t();
            else {
                this.#i({
                    type: `pending`,
                    variables: e,
                    isPaused: i
                }), this.#n.config.onMutate && await this.#n.config.onMutate(e, this, n);
                let t = await this.options.onMutate ?.(e, n);
                t !== this.state.context && this.#i({
                    type: `pending`,
                    context: t,
                    variables: e,
                    isPaused: i
                })
            }
            let a = await this.#r.start();
            return await this.#n.config.onSuccess ?.(a, e, this.state.context, this, n), await this.options.onSuccess ?.(a, e, this.state.context, n), await this.#n.config.onSettled ?.(a, null, this.state.variables, this.state.context, this, n), await this.options.onSettled ?.(a, null, e, this.state.context, n), this.#i({
                type: `success`,
                data: a
            }), a
        } catch (t) {
            try {
                await this.#n.config.onError ?.(t, e, this.state.context, this, n)
            } catch (e) {
                Promise.reject(e)
            }
            try {
                await this.options.onError ?.(t, e, this.state.context, n)
            } catch (e) {
                Promise.reject(e)
            }
            try {
                await this.#n.config.onSettled ?.(void 0, t, this.state.variables, this.state.context, this, n)
            } catch (e) {
                Promise.reject(e)
            }
            try {
                await this.options.onSettled ?.(void 0, t, e, this.state.context, n)
            } catch (e) {
                Promise.reject(e)
            }
            throw this.#i({
                type: `error`,
                error: t
            }), t
        } finally {
            this.#n.runNext(this)
        }
    }#i(e) {
        let t = t => {
            switch (e.type) {
                case `failed`:
                    return { ...t,
                        failureCount: e.failureCount,
                        failureReason: e.error
                    };
                case `pause`:
                    return { ...t,
                        isPaused: !0
                    };
                case `continue`:
                    return { ...t,
                        isPaused: !1
                    };
                case `pending`:
                    return { ...t,
                        context: e.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: e.isPaused,
                        status: `pending`,
                        variables: e.variables,
                        submittedAt: Date.now()
                    };
                case `success`:
                    return { ...t,
                        data: e.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: `success`,
                        isPaused: !1
                    };
                case `error`:
                    return { ...t,
                        data: void 0,
                        error: e.error,
                        failureCount: t.failureCount + 1,
                        failureReason: e.error,
                        isPaused: !1,
                        status: `error`
                    }
            }
        };
        this.state = t(this.state), Wi.batch(() => {
            this.#t.forEach(t => {
                t.onMutationUpdate(e)
            }), this.#n.notify({
                mutation: this,
                type: `updated`,
                action: e
            })
        })
    }
};

function ua() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: `idle`,
        variables: void 0,
        submittedAt: 0
    }
}
var da = class extends ui {
    constructor(e = {}) {
        super(), this.config = e, this.#e = new Set, this.#t = new Map, this.#n = 0
    }#e;#t;#n;
    build(e, t, n) {
        let r = new la({
            client: e,
            mutationCache: this,
            mutationId: ++this.#n,
            options: e.defaultMutationOptions(t),
            state: n
        });
        return this.add(r), r
    }
    add(e) {
        this.#e.add(e);
        let t = fa(e);
        if (typeof t == `string`) {
            let n = this.#t.get(t);
            n ? n.push(e) : this.#t.set(t, [e])
        }
        this.notify({
            type: `added`,
            mutation: e
        })
    }
    remove(e) {
        if (this.#e.delete(e)) {
            let t = fa(e);
            if (typeof t == `string`) {
                let n = this.#t.get(t);
                if (n)
                    if (n.length > 1) {
                        let t = n.indexOf(e);
                        t !== -1 && n.splice(t, 1)
                    } else n[0] === e && this.#t.delete(t)
            }
        }
        this.notify({
            type: `removed`,
            mutation: e
        })
    }
    canRun(e) {
        let t = fa(e);
        if (typeof t == `string`) {
            let n = this.#t.get(t) ?.find(e => e.state.status === `pending`);
            return !n || n === e
        }
        return !0
    }
    runNext(e) {
        let t = fa(e);
        return typeof t == `string` ? (this.#t.get(t) ?.find(t => t !== e && t.state.isPaused)) ?.continue() ?? Promise.resolve() : Promise.resolve()
    }
    clear() {
        Wi.batch(() => {
            this.#e.forEach(e => {
                this.notify({
                    type: `removed`,
                    mutation: e
                })
            }), this.#e.clear(), this.#t.clear()
        })
    }
    getAll() {
        return Array.from(this.#e)
    }
    find(e) {
        let t = {
            exact: !0,
            ...e
        };
        return this.getAll().find(e => Si(t, e))
    }
    findAll(e = {}) {
        return this.getAll().filter(t => Si(e, t))
    }
    notify(e) {
        Wi.batch(() => {
            this.listeners.forEach(t => {
                t(e)
            })
        })
    }
    resumePausedMutations() {
        let e = this.getAll().filter(e => e.state.isPaused);
        return Wi.batch(() => Promise.all(e.map(e => e.continue().catch(hi))))
    }
};

function fa(e) {
    return e.options.scope ?.id
}
var pa = class extends ui {
        constructor(e = {}) {
            super(), this.config = e, this.#e = new Map
        }#e;
        build(e, t, n) {
            let r = t.queryKey,
                i = t.queryHash ?? Ci(r, t),
                a = this.get(i);
            return a || (a = new R({
                client: e,
                queryKey: r,
                queryHash: i,
                options: e.defaultQueryOptions(t),
                state: n,
                defaultOptions: e.getQueryDefaults(r)
            }), this.add(a)), a
        }
        add(e) {
            this.#e.has(e.queryHash) || (this.#e.set(e.queryHash, e), this.notify({
                type: `added`,
                query: e
            }))
        }
        remove(e) {
            let t = this.#e.get(e.queryHash);
            t && (e.destroy(), t === e && this.#e.delete(e.queryHash), this.notify({
                type: `removed`,
                query: e
            }))
        }
        clear() {
            Wi.batch(() => {
                this.getAll().forEach(e => {
                    this.remove(e)
                })
            })
        }
        get(e) {
            return this.#e.get(e)
        }
        getAll() {
            return [...this.#e.values()]
        }
        find(e) {
            let t = {
                exact: !0,
                ...e
            };
            return this.getAll().find(e => xi(t, e))
        }
        findAll(e = {}) {
            let t = this.getAll();
            return Object.keys(e).length > 0 ? t.filter(t => xi(e, t)) : t
        }
        notify(e) {
            Wi.batch(() => {
                this.listeners.forEach(t => {
                    t(e)
                })
            })
        }
        onFocus() {
            Wi.batch(() => {
                this.getAll().forEach(e => {
                    e.onFocus()
                })
            })
        }
        onOnline() {
            Wi.batch(() => {
                this.getAll().forEach(e => {
                    e.onOnline()
                })
            })
        }
    },
    ma = class {#e;#t;#n;#r;#i;#a;#o;#s;
        constructor(e = {}) {
            this.#e = e.queryCache || new pa, this.#t = e.mutationCache || new da, this.#n = e.defaultOptions || {}, this.#r = new Map, this.#i = new Map, this.#a = 0
        }
        mount() {
            this.#a++, this.#a === 1 && (this.#o = Bi.subscribe(async e => {
                e && (await this.resumePausedMutations(), this.#e.onFocus())
            }), this.#s = Gi.subscribe(async e => {
                e && (await this.resumePausedMutations(), this.#e.onOnline())
            }))
        }
        unmount() {
            this.#a--, this.#a === 0 && (this.#o ?.(), this.#o = void 0, this.#s ?.(), this.#s = void 0)
        }
        isFetching(e) {
            return this.#e.findAll({ ...e,
                fetchStatus: `fetching`
            }).length
        }
        isMutating(e) {
            return this.#t.findAll({ ...e,
                status: `pending`
            }).length
        }
        getQueryData(e) {
            let t = this.defaultQueryOptions({
                queryKey: e
            });
            return this.#e.get(t.queryHash) ?.state.data
        }
        ensureQueryData(e) {
            let t = this.defaultQueryOptions(e),
                n = this.#e.build(this, t),
                r = n.state.data;
            return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(yi(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(r))
        }
        getQueriesData(e) {
            return this.#e.findAll(e).map(({
                queryKey: e,
                state: t
            }) => [e, t.data])
        }
        setQueryData(e, t, n) {
            let r = this.defaultQueryOptions({
                    queryKey: e
                }),
                i = this.#e.get(r.queryHash) ?.state.data,
                a = gi(t, i);
            if (a !== void 0) return this.#e.build(this, r).setData(a, { ...n,
                manual: !0
            })
        }
        setQueriesData(e, t, n) {
            return Wi.batch(() => this.#e.findAll(e).map(({
                queryKey: e
            }) => [e, this.setQueryData(e, t, n)]))
        }
        getQueryState(e) {
            let t = this.defaultQueryOptions({
                queryKey: e
            });
            return this.#e.get(t.queryHash) ?.state
        }
        removeQueries(e) {
            let t = this.#e;
            Wi.batch(() => {
                t.findAll(e).forEach(e => {
                    t.remove(e)
                })
            })
        }
        resetQueries(e, t) {
            let n = this.#e;
            return Wi.batch(() => (n.findAll(e).forEach(e => {
                e.reset()
            }), this.refetchQueries({
                type: `active`,
                ...e
            }, t)))
        }
        cancelQueries(e, t = {}) {
            let n = {
                    revert: !0,
                    ...t
                },
                r = Wi.batch(() => this.#e.findAll(e).map(e => e.cancel(n)));
            return Promise.all(r).then(hi).catch(hi)
        }
        invalidateQueries(e, t = {}) {
            return Wi.batch(() => (this.#e.findAll(e).forEach(e => {
                e.invalidate()
            }), e ?.refetchType === `none` ? Promise.resolve() : this.refetchQueries({ ...e,
                type: e ?.refetchType ?? e ?.type ?? `active`
            }, t)))
        }
        refetchQueries(e, t = {}) {
            let n = { ...t,
                    cancelRefetch: t.cancelRefetch ?? !0
                },
                r = Wi.batch(() => this.#e.findAll(e).filter(e => !e.isDisabled() && !e.isStatic()).map(e => {
                    let t = e.fetch(void 0, n);
                    return n.throwOnError || (t = t.catch(hi)), e.state.fetchStatus === `paused` ? Promise.resolve() : t
                }));
            return Promise.all(r).then(hi)
        }
        fetchQuery(e) {
            let t = this.defaultQueryOptions(e);
            t.retry === void 0 && (t.retry = !1);
            let n = this.#e.build(this, t);
            return n.isStaleByTime(yi(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
        }
        prefetchQuery(e) {
            return this.fetchQuery(e).then(hi).catch(hi)
        }
        fetchInfiniteQuery(e) {
            return e.behavior = oa(e.pages), this.fetchQuery(e)
        }
        prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(hi).catch(hi)
        }
        ensureInfiniteQueryData(e) {
            return e.behavior = oa(e.pages), this.ensureQueryData(e)
        }
        resumePausedMutations() {
            return Gi.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return this.#e
        }
        getMutationCache() {
            return this.#t
        }
        getDefaultOptions() {
            return this.#n
        }
        setDefaultOptions(e) {
            this.#n = e
        }
        setQueryDefaults(e, t) {
            this.#r.set(wi(e), {
                queryKey: e,
                defaultOptions: t
            })
        }
        getQueryDefaults(e) {
            let t = [...this.#r.values()],
                n = {};
            return t.forEach(t => {
                Ti(e, t.queryKey) && Object.assign(n, t.defaultOptions)
            }), n
        }
        setMutationDefaults(e, t) {
            this.#i.set(wi(e), {
                mutationKey: e,
                defaultOptions: t
            })
        }
        getMutationDefaults(e) {
            let t = [...this.#i.values()],
                n = {};
            return t.forEach(t => {
                Ti(e, t.mutationKey) && Object.assign(n, t.defaultOptions)
            }), n
        }
        defaultQueryOptions(e) {
            if (e._defaulted) return e;
            let t = { ...this.#n.queries,
                ...this.getQueryDefaults(e.queryKey),
                ...e,
                _defaulted: !0
            };
            return t.queryHash ||= Ci(t.queryKey, t), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== `always`), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = `offlineFirst`), t.queryFn === Ii && (t.enabled = !1), t
        }
        defaultMutationOptions(e) {
            return e ?._defaulted ? e : { ...this.#n.mutations,
                ...e ?.mutationKey && this.getMutationDefaults(e.mutationKey),
                ...e,
                _defaulted : !0
            }
        }
        clear() {
            this.#e.clear(), this.#t.clear()
        }
    },
    ha = _.createContext(void 0),
    ga = e => {
        let t = _.useContext(ha);
        if (e) return e;
        if (!t) throw Error(`No QueryClient set, use QueryClientProvider to set one`);
        return t
    },
    _a = ({
        client: e,
        children: t
    }) => (_.useEffect(() => (e.mount(), () => {
        e.unmount()
    }), [e]), (0, j.jsx)(ha.Provider, {
        value: e,
        children: t
    })),
    va = _.createContext(!1),
    ya = () => _.useContext(va);
va.Provider;

function ba() {
    let e = !1;
    return {
        clearReset: () => {
            e = !1
        },
        reset: () => {
            e = !0
        },
        isReset: () => e
    }
}
var xa = _.createContext(ba()),
    Sa = () => _.useContext(xa),
    Ca = (e, t, n) => {
        let r = n ?.state.error && typeof e.throwOnError == `function` ? Ri(e.throwOnError, [n.state.error, n]) : e.throwOnError;
        (e.suspense || e.experimental_prefetchInRender || r) && (t.isReset() || (e.retryOnMount = !1))
    },
    wa = e => {
        _.useEffect(() => {
            e.clearReset()
        }, [e])
    },
    Ta = ({
        result: e,
        errorResetBoundary: t,
        throwOnError: n,
        query: r,
        suspense: i
    }) => e.isError && !t.isReset() && !e.isFetching && r && (i && e.data === void 0 || Ri(n, [e.error, r])),
    Ea = e => {
        if (e.suspense) {
            let t = 1e3,
                n = e => e === `static` ? e : Math.max(e ?? t, t),
                r = e.staleTime;
            e.staleTime = typeof r == `function` ? (...e) => n(r(...e)) : n(r), typeof e.gcTime == `number` && (e.gcTime = Math.max(e.gcTime, t))
        }
    },
    Da = (e, t) => e.isLoading && e.isFetching && !t,
    Oa = (e, t) => e ?.suspense && t.isPending,
    ka = (e, t, n) => t.fetchOptimistic(e).catch(() => {
        n.clearReset()
    });

function Aa(e, t, n) {
    let r = ya(),
        i = Sa(),
        a = ga(n),
        o = a.defaultQueryOptions(e);
    a.getDefaultOptions().queries ?._experimental_beforeQuery ?.(o);
    let s = a.getQueryCache().get(o.queryHash);
    o._optimisticResults = r ? `isRestoring` : `optimistic`, Ea(o), Ca(o, i, s), wa(i);
    let c = !a.getQueryCache().get(o.queryHash),
        [l] = _.useState(() => new t(a, o)),
        u = l.getOptimisticResult(o),
        d = !r && e.subscribed !== !1;
    if (_.useSyncExternalStore(_.useCallback(e => {
            let t = d ? l.subscribe(Wi.batchCalls(e)) : hi;
            return l.updateResult(), t
        }, [l, d]), () => l.getCurrentResult(), () => l.getCurrentResult()), _.useEffect(() => {
            l.setOptions(o)
        }, [o, l]), Oa(o, u)) throw ka(o, l, i);
    if (Ta({
            result: u,
            errorResetBoundary: i,
            throwOnError: o.throwOnError,
            query: s,
            suspense: o.suspense
        })) throw u.error;
    return a.getDefaultOptions().queries ?._experimental_afterQuery ?.(o, u), o.experimental_prefetchInRender && !mi && Da(u, r) && (c ? ka(o, l, i) : s ?.promise) ?.catch(hi).finally(() => {
        l.updateResult()
    }), o.notifyOnChangeProps ? u : l.trackResult(u)
}

function ja(e, t) {
    return Aa(e, $i, t)
}
var Ma = new ma({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: !1,
            retry: 1
        }
    }
});

function Na() {
    return Na = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Na.apply(null, arguments)
}
var Pa;
(function(e) {
    e.Pop = `POP`, e.Push = `PUSH`, e.Replace = `REPLACE`
})(Pa ||= {});
var Fa = `popstate`;

function Ia(e) {
    e === void 0 && (e = {});

    function t(e, t) {
        let {
            pathname: n,
            search: r,
            hash: i
        } = e.location;
        return Va(``, {
            pathname: n,
            search: r,
            hash: i
        }, t.state && t.state.usr || null, t.state && t.state.key || `default`)
    }

    function n(e, t) {
        return typeof t == `string` ? t : Ha(t)
    }
    return Wa(t, n, null, e)
}

function La(e, t) {
    if (e === !1 || e == null) throw Error(t)
}

function Ra(e, t) {
    if (!e) {
        typeof console < `u` && console.warn(t);
        try {
            throw Error(t)
        } catch {}
    }
}

function za() {
    return Math.random().toString(36).substr(2, 8)
}

function Ba(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function Va(e, t, n, r) {
    return n === void 0 && (n = null), Na({
        pathname: typeof e == `string` ? e : e.pathname,
        search: ``,
        hash: ``
    }, typeof t == `string` ? Ua(t) : t, {
        state: n,
        key: t && t.key || r || za()
    })
}

function Ha(e) {
    let {
        pathname: t = `/`,
        search: n = ``,
        hash: r = ``
    } = e;
    return n && n !== `?` && (t += n.charAt(0) === `?` ? n : `?` + n), r && r !== `#` && (t += r.charAt(0) === `#` ? r : `#` + r), t
}

function Ua(e) {
    let t = {};
    if (e) {
        let n = e.indexOf(`#`);
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf(`?`);
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function Wa(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: i = document.defaultView,
        v5Compat: a = !1
    } = r, o = i.history, s = Pa.Pop, c = null, l = u();
    l ?? (l = 0, o.replaceState(Na({}, o.state, {
        idx: l
    }), ``));

    function u() {
        return (o.state || {
            idx: null
        }).idx
    }

    function d() {
        s = Pa.Pop;
        let e = u(),
            t = e == null ? null : e - l;
        l = e, c && c({
            action: s,
            location: h.location,
            delta: t
        })
    }

    function f(e, t) {
        s = Pa.Push;
        let r = Va(h.location, e, t);
        n && n(r, e), l = u() + 1;
        let d = Ba(r, l),
            f = h.createHref(r);
        try {
            o.pushState(d, ``, f)
        } catch (e) {
            if (e instanceof DOMException && e.name === `DataCloneError`) throw e;
            i.location.assign(f)
        }
        a && c && c({
            action: s,
            location: h.location,
            delta: 1
        })
    }

    function p(e, t) {
        s = Pa.Replace;
        let r = Va(h.location, e, t);
        n && n(r, e), l = u();
        let i = Ba(r, l),
            d = h.createHref(r);
        o.replaceState(i, ``, d), a && c && c({
            action: s,
            location: h.location,
            delta: 0
        })
    }

    function m(e) {
        let t = i.location.origin === `null` ? i.location.href : i.location.origin,
            n = typeof e == `string` ? e : Ha(e);
        return n = n.replace(/ $/, `%20`), La(t, `No window.location.(origin|href) available to create URL for href: ` + n), new URL(n, t)
    }
    let h = {
        get action() {
            return s
        },
        get location() {
            return e(i, o)
        },
        listen(e) {
            if (c) throw Error(`A history only accepts one active listener`);
            return i.addEventListener(Fa, d), c = e, () => {
                i.removeEventListener(Fa, d), c = null
            }
        },
        createHref(e) {
            return t(i, e)
        },
        createURL: m,
        encodeLocation(e) {
            let t = m(e);
            return {
                pathname: t.pathname,
                search: t.search,
                hash: t.hash
            }
        },
        push: f,
        replace: p,
        go(e) {
            return o.go(e)
        }
    };
    return h
}
var Ga;
(function(e) {
    e.data = `data`, e.deferred = `deferred`, e.redirect = `redirect`, e.error = `error`
})(Ga ||= {});

function Ka(e, t, n) {
    return n === void 0 && (n = `/`), qa(e, t, n, !1)
}

function qa(e, t, n, r) {
    let i = uo((typeof t == `string` ? Ua(t) : t).pathname || `/`, n);
    if (i == null) return null;
    let a = Ja(e);
    Xa(a);
    let o = null,
        s = lo(i);
    for (let e = 0; o == null && e < a.length; ++e) o = oo(a[e], s, r);
    return o
}

function Ja(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = ``);
    let i = (e, i, a) => {
        let o = {
            relativePath: a === void 0 ? e.path || `` : a,
            caseSensitive: e.caseSensitive === !0,
            childrenIndex: i,
            route: e
        };
        o.relativePath.startsWith(`/`) && (La(o.relativePath.startsWith(r), `Absolute route path "` + o.relativePath + `" nested under path ` + (`"` + r + `" is not valid. An absolute child route path `) + `must start with the combined path of all its parent routes.`), o.relativePath = o.relativePath.slice(r.length));
        let s = yo([r, o.relativePath]),
            c = n.concat(o);
        e.children && e.children.length > 0 && (La(e.index !== !0, `Index routes must not have child routes. Please remove ` + (`all child routes from route path "` + s + `".`)), Ja(e.children, t, c, s)), !(e.path == null && !e.index) && t.push({
            path: s,
            score: io(s, e.index),
            routesMeta: c
        })
    };
    return e.forEach((e, t) => {
        var n;
        if (e.path === `` || !((n = e.path) != null && n.includes(`?`))) i(e, t);
        else
            for (let n of Ya(e.path)) i(e, t, n)
    }), t
}

function Ya(e) {
    let t = e.split(`/`);
    if (t.length === 0) return [];
    let [n, ...r] = t, i = n.endsWith(`?`), a = n.replace(/\?$/, ``);
    if (r.length === 0) return i ? [a, ``] : [a];
    let o = Ya(r.join(`/`)),
        s = [];
    return s.push(...o.map(e => e === `` ? a : [a, e].join(`/`))), i && s.push(...o), s.map(t => e.startsWith(`/`) && t === `` ? `/` : t)
}

function Xa(e) {
    e.sort((e, t) => e.score === t.score ? ao(e.routesMeta.map(e => e.childrenIndex), t.routesMeta.map(e => e.childrenIndex)) : t.score - e.score)
}
var Za = /^:[\w-]+$/,
    Qa = 3,
    $a = 2,
    eo = 1,
    to = 10,
    no = -2,
    ro = e => e === `*`;

function io(e, t) {
    let n = e.split(`/`),
        r = n.length;
    return n.some(ro) && (r += no), t && (r += $a), n.filter(e => !ro(e)).reduce((e, t) => e + (Za.test(t) ? Qa : t === `` ? eo : to), r)
}

function ao(e, t) {
    return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function oo(e, t, n) {
    n === void 0 && (n = !1);
    let {
        routesMeta: r
    } = e, i = {}, a = `/`, o = [];
    for (let e = 0; e < r.length; ++e) {
        let s = r[e],
            c = e === r.length - 1,
            l = a === `/` ? t : t.slice(a.length) || `/`,
            u = so({
                path: s.relativePath,
                caseSensitive: s.caseSensitive,
                end: c
            }, l),
            d = s.route;
        if (!u && c && n && !r[r.length - 1].route.index && (u = so({
                path: s.relativePath,
                caseSensitive: s.caseSensitive,
                end: !1
            }, l)), !u) return null;
        Object.assign(i, u.params), o.push({
            params: i,
            pathname: yo([a, u.pathname]),
            pathnameBase: bo(yo([a, u.pathnameBase])),
            route: d
        }), u.pathnameBase !== `/` && (a = yo([a, u.pathnameBase]))
    }
    return o
}

function so(e, t) {
    typeof e == `string` && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = co(e.path, e.caseSensitive, e.end), i = t.match(n);
    if (!i) return null;
    let a = i[0],
        o = a.replace(/(.)\/+$/, `$1`),
        s = i.slice(1);
    return {
        params: r.reduce((e, t, n) => {
            let {
                paramName: r,
                isOptional: i
            } = t;
            if (r === `*`) {
                let e = s[n] || ``;
                o = a.slice(0, a.length - e.length).replace(/(.)\/+$/, `$1`)
            }
            let c = s[n];
            return e[r] = i && !c ? void 0 : (c || ``).replace(/%2F/g, `/`), e
        }, {}),
        pathname: a,
        pathnameBase: o,
        pattern: e
    }
}

function co(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), Ra(e === `*` || !e.endsWith(`*`) || e.endsWith(`/*`), `Route path "` + e + `" will be treated as if it were ` + (`"` + e.replace(/\*$/, `/*`) + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + (`please change the route path to "` + e.replace(/\*$/, `/*`) + `".`));
    let r = [],
        i = `^` + e.replace(/\/*\*?$/, ``).replace(/^\/*/, `/`).replace(/[\\.*+^${}|()[\]]/g, `\\$&`).replace(/\/:([\w-]+)(\?)?/g, (e, t, n) => (r.push({
            paramName: t,
            isOptional: n != null
        }), n ? `/?([^\\/]+)?` : `/([^\\/]+)`));
    return e.endsWith(`*`) ? (r.push({
        paramName: `*`
    }), i += e === `*` || e === `/*` ? `(.*)$` : `(?:\\/(.+)|\\/*)$`) : n ? i += `\\/*$` : e !== `` && e !== `/` && (i += `(?:(?=\\/|$))`), [new RegExp(i, t ? void 0 : `i`), r]
}

function lo(e) {
    try {
        return e.split(`/`).map(e => decodeURIComponent(e).replace(/\//g, `%2F`)).join(`/`)
    } catch (t) {
        return Ra(!1, `The URL path "` + e + `" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ` + (`encoding (` + t + `).`)), e
    }
}

function uo(e, t) {
    if (t === `/`) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith(`/`) ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== `/` ? null : e.slice(n) || `/`
}

function fo(e, t) {
    t === void 0 && (t = `/`);
    let {
        pathname: n,
        search: r = ``,
        hash: i = ``
    } = typeof e == `string` ? Ua(e) : e, a;
    return n ? (n = vo(n), a = n.startsWith(`/`) ? po(n.substring(1), `/`) : po(n, t)) : a = t, {
        pathname: a,
        search: xo(r),
        hash: So(i)
    }
}

function po(e, t) {
    let n = t.replace(/\/+$/, ``).split(`/`);
    return e.split(`/`).forEach(e => {
        e === `..` ? n.length > 1 && n.pop() : e !== `.` && n.push(e)
    }), n.length > 1 ? n.join(`/`) : `/`
}

function mo(e, t, n, r) {
    return `Cannot include a '` + e + `' character in a manually specified ` + ("`to." + t + "` field [" + JSON.stringify(r) + `].  Please separate it out to the `) + ("`to." + n + "` field. Alternatively you may provide the full path as ") + `a string in <Link to="..."> and the router will parse it for you.`
}

function ho(e) {
    return e.filter((e, t) => t === 0 || e.route.path && e.route.path.length > 0)
}

function go(e, t) {
    let n = ho(e);
    return t ? n.map((e, t) => t === n.length - 1 ? e.pathname : e.pathnameBase) : n.map(e => e.pathnameBase)
}

function _o(e, t, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof e == `string` ? i = Ua(e) : (i = Na({}, e), La(!i.pathname || !i.pathname.includes(`?`), mo(`?`, `pathname`, `search`, i)), La(!i.pathname || !i.pathname.includes(`#`), mo(`#`, `pathname`, `hash`, i)), La(!i.search || !i.search.includes(`#`), mo(`#`, `search`, `hash`, i)));
    let a = e === `` || i.pathname === ``,
        o = a ? `/` : i.pathname,
        s;
    if (o == null) s = n;
    else {
        let e = t.length - 1;
        if (!r && o.startsWith(`..`)) {
            let t = o.split(`/`);
            for (; t[0] === `..`;) t.shift(), --e;
            i.pathname = t.join(`/`)
        }
        s = e >= 0 ? t[e] : `/`
    }
    let c = fo(i, s),
        l = o && o !== `/` && o.endsWith(`/`),
        u = (a || o === `.`) && n.endsWith(`/`);
    return !c.pathname.endsWith(`/`) && (l || u) && (c.pathname += `/`), c
}
var vo = e => e.replace(/\/\/+/g, `/`),
    yo = e => vo(e.join(`/`)),
    bo = e => e.replace(/\/+$/, ``).replace(/^\/*/, `/`),
    xo = e => !e || e === `?` ? `` : e.startsWith(`?`) ? e : `?` + e,
    So = e => !e || e === `#` ? `` : e.startsWith(`#`) ? e : `#` + e;

function Co(e) {
    return e != null && typeof e.status == `number` && typeof e.statusText == `string` && typeof e.internal == `boolean` && `data` in e
}
var wo = [`post`, `put`, `patch`, `delete`];
new Set(wo);
var To = [`get`, ...wo];
new Set(To);

function Eo() {
    return Eo = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Eo.apply(null, arguments)
}
var Do = _.createContext(null),
    Oo = _.createContext(null),
    ko = _.createContext(null),
    Ao = _.createContext(null),
    jo = _.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    Mo = _.createContext(null);

function No(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t;
    !Po() && La(!1);
    let {
        basename: r,
        navigator: i
    } = _.useContext(ko), {
        hash: a,
        pathname: o,
        search: s
    } = Uo(e, {
        relative: n
    }), c = o;
    return r !== `/` && (c = o === `/` ? r : yo([r, o])), i.createHref({
        pathname: c,
        search: s,
        hash: a
    })
}

function Po() {
    return _.useContext(Ao) != null
}

function Fo() {
    return !Po() && La(!1), _.useContext(Ao).location
}

function Io() {
    return _.useContext(Ao).navigationType
}

function Lo(e) {
    _.useContext(ko).static || _.useLayoutEffect(e)
}

function Ro() {
    let {
        isDataRoute: e
    } = _.useContext(jo);
    return e ? is() : zo()
}

function zo() {
    !Po() && La(!1);
    let e = _.useContext(Do),
        {
            basename: t,
            future: n,
            navigator: r
        } = _.useContext(ko),
        {
            matches: i
        } = _.useContext(jo),
        {
            pathname: a
        } = Fo(),
        o = JSON.stringify(go(i, n.v7_relativeSplatPath)),
        s = _.useRef(!1);
    return Lo(() => {
        s.current = !0
    }), _.useCallback(function(n, i) {
        if (i === void 0 && (i = {}), !s.current) return;
        if (typeof n == `number`) {
            r.go(n);
            return
        }
        let c = _o(n, JSON.parse(o), a, i.relative === `path`);
        e == null && t !== `/` && (c.pathname = c.pathname === `/` ? t : yo([t, c.pathname])), (i.replace ? r.replace : r.push)(c, i.state, i)
    }, [t, r, o, a, e])
}
var Bo = _.createContext(null);

function Vo(e) {
    let t = _.useContext(jo).outlet;
    return t && _.createElement(Bo.Provider, {
        value: e
    }, t)
}

function Ho() {
    let {
        matches: e
    } = _.useContext(jo), t = e[e.length - 1];
    return t ? t.params : {}
}

function Uo(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t, {
        future: r
    } = _.useContext(ko), {
        matches: i
    } = _.useContext(jo), {
        pathname: a
    } = Fo(), o = JSON.stringify(go(i, r.v7_relativeSplatPath));
    return _.useMemo(() => _o(e, JSON.parse(o), a, n === `path`), [e, o, a, n])
}

function Wo(e, t) {
    return Go(e, t)
}

function Go(e, t, n, r) {
    !Po() && La(!1);
    let {
        navigator: i
    } = _.useContext(ko), {
        matches: a
    } = _.useContext(jo), o = a[a.length - 1], s = o ? o.params : {};
    o && o.pathname;
    let c = o ? o.pathnameBase : `/`;
    o && o.route;
    let l = Fo(),
        u;
    if (t) {
        let e = typeof t == `string` ? Ua(t) : t;
        !(c === `/` || e.pathname ?.startsWith(c)) && La(!1), u = e
    } else u = l;
    let d = u.pathname || `/`,
        f = d;
    if (c !== `/`) {
        let e = c.replace(/^\//, ``).split(`/`);
        f = `/` + d.replace(/^\//, ``).split(`/`).slice(e.length).join(`/`)
    }
    let p = Ka(e, {
            pathname: f
        }),
        m = Xo(p && p.map(e => Object.assign({}, e, {
            params: Object.assign({}, s, e.params),
            pathname: yo([c, i.encodeLocation ? i.encodeLocation(e.pathname).pathname : e.pathname]),
            pathnameBase: e.pathnameBase === `/` ? c : yo([c, i.encodeLocation ? i.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
        })), a, n, r);
    return t && m ? _.createElement(Ao.Provider, {
        value: {
            location: Eo({
                pathname: `/`,
                search: ``,
                hash: ``,
                state: null,
                key: `default`
            }, u),
            navigationType: Pa.Pop
        }
    }, m) : m
}

function Ko() {
    let e = rs(),
        t = Co(e) ? e.status + ` ` + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null;
    return _.createElement(_.Fragment, null, _.createElement(`h2`, null, `Unexpected Application Error!`), _.createElement(`h3`, {
        style: {
            fontStyle: `italic`
        }
    }, t), n ? _.createElement(`pre`, {
        style: {
            padding: `0.5rem`,
            backgroundColor: `rgba(200,200,200, 0.5)`
        }
    }, n) : null, null)
}
var qo = _.createElement(Ko, null),
    Jo = class extends _.Component {
        constructor(e) {
            super(e), this.state = {
                location: e.location,
                revalidation: e.revalidation,
                error: e.error
            }
        }
        static getDerivedStateFromError(e) {
            return {
                error: e
            }
        }
        static getDerivedStateFromProps(e, t) {
            return t.location !== e.location || t.revalidation !== `idle` && e.revalidation === `idle` ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation
            } : {
                error: e.error === void 0 ? t.error : e.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation
            }
        }
        componentDidCatch(e, t) {
            console.error(`React Router caught the following error during render`, e, t)
        }
        render() {
            return this.state.error === void 0 ? this.props.children : _.createElement(jo.Provider, {
                value: this.props.routeContext
            }, _.createElement(Mo.Provider, {
                value: this.state.error,
                children: this.props.component
            }))
        }
    };

function Yo(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, i = _.useContext(Do);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), _.createElement(jo.Provider, {
        value: t
    }, r)
}

function Xo(e, t, n, r) {
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
        var i;
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
        else return null
    }
    let a = e,
        o = n ?.errors;
    if (o != null) {
        let e = a.findIndex(e => e.route.id && o ?.[e.route.id] !== void 0);
        !(e >= 0) && La(!1), a = a.slice(0, Math.min(a.length, e + 1))
    }
    let s = !1,
        c = -1;
    if (n && r && r.v7_partialHydration)
        for (let e = 0; e < a.length; e++) {
            let t = a[e];
            if ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (c = e), t.route.id) {
                let {
                    loaderData: e,
                    errors: r
                } = n, i = t.route.loader && e[t.route.id] === void 0 && (!r || r[t.route.id] === void 0);
                if (t.route.lazy || i) {
                    s = !0, a = c >= 0 ? a.slice(0, c + 1) : [a[0]];
                    break
                }
            }
        }
    return a.reduceRight((e, r, i) => {
        let l, u = !1,
            d = null,
            f = null;
        n && (l = o && r.route.id ? o[r.route.id] : void 0, d = r.route.errorElement || qo, s && (c < 0 && i === 0 ? (os(`route-fallback`, !1, "No `HydrateFallback` element provided to render during initial hydration"), u = !0, f = null) : c === i && (u = !0, f = r.route.hydrateFallbackElement || null)));
        let p = t.concat(a.slice(0, i + 1)),
            m = () => {
                let t;
                return t = l ? d : u ? f : r.route.Component ? _.createElement(r.route.Component, null) : r.route.element ? r.route.element : e, _.createElement(Yo, {
                    match: r,
                    routeContext: {
                        outlet: e,
                        matches: p,
                        isDataRoute: n != null
                    },
                    children: t
                })
            };
        return n && (r.route.ErrorBoundary || r.route.errorElement || i === 0) ? _.createElement(Jo, {
            location: n.location,
            revalidation: n.revalidation,
            component: d,
            error: l,
            children: m(),
            routeContext: {
                outlet: null,
                matches: p,
                isDataRoute: !0
            }
        }) : m()
    }, null)
}
var Zo = function(e) {
        return e.UseBlocker = `useBlocker`, e.UseRevalidator = `useRevalidator`, e.UseNavigateStable = `useNavigate`, e
    }(Zo || {}),
    Qo = function(e) {
        return e.UseBlocker = `useBlocker`, e.UseLoaderData = `useLoaderData`, e.UseActionData = `useActionData`, e.UseRouteError = `useRouteError`, e.UseNavigation = `useNavigation`, e.UseRouteLoaderData = `useRouteLoaderData`, e.UseMatches = `useMatches`, e.UseRevalidator = `useRevalidator`, e.UseNavigateStable = `useNavigate`, e.UseRouteId = `useRouteId`, e
    }(Qo || {});

function $o(e) {
    let t = _.useContext(Do);
    return !t && La(!1), t
}

function es(e) {
    let t = _.useContext(Oo);
    return !t && La(!1), t
}

function ts(e) {
    let t = _.useContext(jo);
    return !t && La(!1), t
}

function ns(e) {
    let t = ts(e),
        n = t.matches[t.matches.length - 1];
    return !n.route.id && La(!1), n.route.id
}

function rs() {
    let e = _.useContext(Mo),
        t = es(Qo.UseRouteError),
        n = ns(Qo.UseRouteError);
    return e === void 0 ? t.errors ?.[n] : e
}

function is() {
    let {
        router: e
    } = $o(Zo.UseNavigateStable), t = ns(Qo.UseNavigateStable), n = _.useRef(!1);
    return Lo(() => {
        n.current = !0
    }), _.useCallback(function(r, i) {
        i === void 0 && (i = {}), n.current && (typeof r == `number` ? e.navigate(r) : e.navigate(r, Eo({
            fromRouteId: t
        }, i)))
    }, [e, t])
}
var as = {};

function os(e, t, n) {
    !t && !as[e] && (as[e] = !0)
}
var ss = (e, t, n) => (`` + t + ("You can use the `" + e + "` future flag to opt-in early. ") + (`For more information, see ` + n + `.`), void 0);

function cs(e, t) {
    e ?.v7_startTransition === void 0 && ss(`v7_startTransition`, "React Router will begin wrapping state updates in `React.startTransition` in v7", `https://reactrouter.com/v6/upgrading/future#v7_starttransition`), e ?.v7_relativeSplatPath === void 0 && (!t || t.v7_relativeSplatPath === void 0) && ss(`v7_relativeSplatPath`, `Relative route resolution within Splat routes is changing in v7`, `https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath`), t && (t.v7_fetcherPersist === void 0 && ss(`v7_fetcherPersist`, `The persistence behavior of fetchers is changing in v7`, `https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist`), t.v7_normalizeFormMethod === void 0 && ss(`v7_normalizeFormMethod`, "Casing of `formMethod` fields is being normalized to uppercase in v7", `https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod`), t.v7_partialHydration === void 0 && ss(`v7_partialHydration`, "`RouterProvider` hydration behavior is changing in v7", `https://reactrouter.com/v6/upgrading/future#v7_partialhydration`), t.v7_skipActionErrorRevalidation === void 0 && ss(`v7_skipActionErrorRevalidation`, "The revalidation behavior after 4xx/5xx `action` responses is changing in v7", `https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation`))
}

function ls(e) {
    return Vo(e.context)
}

function B(e) {
    La(!1)
}

function us(e) {
    let {
        basename: t = `/`,
        children: n = null,
        location: r,
        navigationType: i = Pa.Pop,
        navigator: a,
        static: o = !1,
        future: s
    } = e;
    Po() && La(!1);
    let c = t.replace(/^\/*/, `/`),
        l = _.useMemo(() => ({
            basename: c,
            navigator: a,
            static: o,
            future: Eo({
                v7_relativeSplatPath: !1
            }, s)
        }), [c, s, a, o]);
    typeof r == `string` && (r = Ua(r));
    let {
        pathname: u = `/`,
        search: d = ``,
        hash: f = ``,
        state: p = null,
        key: m = `default`
    } = r, h = _.useMemo(() => {
        let e = uo(u, c);
        return e == null ? null : {
            location: {
                pathname: e,
                search: d,
                hash: f,
                state: p,
                key: m
            },
            navigationType: i
        }
    }, [c, u, d, f, p, m, i]);
    return h == null ? null : _.createElement(ko.Provider, {
        value: l
    }, _.createElement(Ao.Provider, {
        children: n,
        value: h
    }))
}

function ds(e) {
    let {
        children: t,
        location: n
    } = e;
    return Wo(ps(t), n)
}
var fs = function(e) {
    return e[e.pending = 0] = `pending`, e[e.success = 1] = `success`, e[e.error = 2] = `error`, e
}(fs || {});
new Promise(() => {}), _.Component;

function ps(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return _.Children.forEach(e, (e, r) => {
        if (!_.isValidElement(e)) return;
        let i = [...t, r];
        if (e.type === _.Fragment) {
            n.push.apply(n, ps(e.props.children, i));
            return
        }
        e.type !== B && La(!1), !(!e.props.index || !e.props.children) && La(!1);
        let a = {
            id: e.props.id || i.join(`-`),
            caseSensitive: e.props.caseSensitive,
            element: e.props.element,
            Component: e.props.Component,
            index: e.props.index,
            path: e.props.path,
            loader: e.props.loader,
            action: e.props.action,
            errorElement: e.props.errorElement,
            ErrorBoundary: e.props.ErrorBoundary,
            hasErrorBoundary: e.props.ErrorBoundary != null || e.props.errorElement != null,
            shouldRevalidate: e.props.shouldRevalidate,
            handle: e.props.handle,
            lazy: e.props.lazy
        };
        e.props.children && (a.children = ps(e.props.children, i)), n.push(a)
    }), n
}

function ms() {
    return ms = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ms.apply(null, arguments)
}

function hs(e, t) {
    if (e == null) return {};
    var n = {};
    for (var r in e)
        if ({}.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) !== -1) continue;
            n[r] = e[r]
        }
    return n
}

function gs(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function _s(e, t) {
    return e.button === 0 && (!t || t === `_self`) && !gs(e)
}

function vs(e) {
    return e === void 0 && (e = ``), new URLSearchParams(typeof e == `string` || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, n) => {
        let r = e[n];
        return t.concat(Array.isArray(r) ? r.map(e => [n, e]) : [
            [n, r]
        ])
    }, []))
}

function ys(e, t) {
    let n = vs(e);
    return t && t.forEach((e, r) => {
        n.has(r) || t.getAll(r).forEach(e => {
            n.append(r, e)
        })
    }), n
}
var bs = [`onClick`, `relative`, `reloadDocument`, `replace`, `state`, `target`, `to`, `preventScrollReset`, `viewTransition`],
    xs = `6`;
try {
    window.__reactRouterVersion = xs
} catch {}
var Ss = _.startTransition;

function Cs(e) {
    let {
        basename: t,
        children: n,
        future: r,
        window: i
    } = e, a = _.useRef();
    a.current ??= Ia({
        window: i,
        v5Compat: !0
    });
    let o = a.current,
        [s, c] = _.useState({
            action: o.action,
            location: o.location
        }),
        {
            v7_startTransition: l
        } = r || {},
        u = _.useCallback(e => {
            l && Ss ? Ss(() => c(e)) : c(e)
        }, [c, l]);
    return _.useLayoutEffect(() => o.listen(u), [o, u]), _.useEffect(() => cs(r), [r]), _.createElement(us, {
        basename: t,
        children: n,
        location: s.location,
        navigationType: s.action,
        navigator: o,
        future: r
    })
}
var ws = typeof window < `u` && window.document !== void 0 && window.document.createElement !== void 0,
    Ts = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    V = _.forwardRef(function(e, t) {
        let {
            onClick: n,
            relative: r,
            reloadDocument: i,
            replace: a,
            state: o,
            target: s,
            to: c,
            preventScrollReset: l,
            viewTransition: u
        } = e, d = hs(e, bs), {
            basename: f
        } = _.useContext(ko), p, m = !1;
        if (typeof c == `string` && Ts.test(c) && (p = c, ws)) try {
            let e = new URL(window.location.href),
                t = c.startsWith(`//`) ? new URL(e.protocol + c) : new URL(c),
                n = uo(t.pathname, f);
            t.origin === e.origin && n != null ? c = n + t.search + t.hash : m = !0
        } catch {}
        let h = No(c, {
                relative: r
            }),
            g = Os(c, {
                replace: a,
                state: o,
                target: s,
                preventScrollReset: l,
                relative: r,
                viewTransition: u
            });

        function v(e) {
            n && n(e), e.defaultPrevented || g(e)
        }
        return _.createElement(`a`, ms({}, d, {
            href: p || h,
            onClick: m || i ? n : v,
            ref: t,
            target: s
        }))
    }),
    Es;
(function(e) {
    e.UseScrollRestoration = `useScrollRestoration`, e.UseSubmit = `useSubmit`, e.UseSubmitFetcher = `useSubmitFetcher`, e.UseFetcher = `useFetcher`, e.useViewTransitionState = `useViewTransitionState`
})(Es ||= {});
var Ds;
(function(e) {
    e.UseFetcher = `useFetcher`, e.UseFetchers = `useFetchers`, e.UseScrollRestoration = `useScrollRestoration`
})(Ds ||= {});

function Os(e, t) {
    let {
        target: n,
        replace: r,
        state: i,
        preventScrollReset: a,
        relative: o,
        viewTransition: s
    } = t === void 0 ? {} : t, c = Ro(), l = Fo(), u = Uo(e, {
        relative: o
    });
    return _.useCallback(t => {
        if (_s(t, n)) {
            t.preventDefault();
            let n = r === void 0 ? Ha(l) === Ha(u) : r;
            c(e, {
                replace: n,
                state: i,
                preventScrollReset: a,
                relative: o,
                viewTransition: s
            })
        }
    }, [l, c, u, r, i, n, e, a, o, s])
}

function ks(e) {
    let t = _.useRef(vs(e)),
        n = _.useRef(!1),
        r = Fo(),
        i = _.useMemo(() => ys(r.search, n.current ? null : t.current), [r.search]),
        a = Ro();
    return [i, _.useCallback((e, t) => {
        let r = vs(typeof e == `function` ? e(i) : e);
        n.current = !0, a(`?` + r, t)
    }, [a, i])]
}

function As(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
var {
    toString: js
} = Object.prototype, {
    getPrototypeOf: Ms
} = Object, {
    iterator: Ns,
    toStringTag: Ps
} = Symbol, Fs = (({
    hasOwnProperty: e
}) => (t, n) => e.call(t, n))(Object.prototype), Is = e => typeof e == `string` && (e === `__proto__` || e === `constructor` || e === `prototype`), Ls = (e, t, n) => e === Object.prototype || !n && t === null, Rs = e => {
    if (!Object.isExtensible(e)) return !1;
    let t = Object.getOwnPropertyNames(e);
    return Object.getOwnPropertySymbols && t.push(...Object.getOwnPropertySymbols(e)), t.every(t => {
        if (Is(t)) return !1;
        let n = Object.getOwnPropertyDescriptor(e, t);
        return !!n && n.configurable && n.writable === !0
    })
}, zs = (e, t) => {
    let n = e,
        r = [];
    for (; n != null;) {
        if (r.indexOf(n) !== -1) return !1;
        r.push(n);
        let i = Ms(n);
        if (Ls(n, i, n === e)) return !1;
        if (Fs(n, t)) return !0;
        n = i
    }
    return !1
}, Bs = (e, t) => e != null && zs(e, t) ? e[t] : void 0, Vs = e => {
    if (e == null || typeof e != `object` && typeof e != `function`) return e;
    let t = Ms(e);
    if (t === null && Rs(e)) return e;
    let n = Object.create(null),
        r = Object.create(null),
        i = [],
        a = e;
    for (; a != null && i.indexOf(a) === -1;) {
        i.push(a);
        let o = a === e ? t : Ms(a);
        if (Ls(a, o, a === e)) break;
        let s = Object.getOwnPropertyNames(a);
        Object.getOwnPropertySymbols && s.push(...Object.getOwnPropertySymbols(a));
        for (let t of s) Is(t) || Fs(r, t) || (n[t] = e[t], r[t] = !0);
        a = o
    }
    return n
}, Hs = (e => t => {
    let n = js.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
})(Object.create(null)), H = e => (e = e.toLowerCase(), t => Hs(t) === e), Us = e => t => typeof t === e, {
    isArray: Ws
} = Array, Gs = Us(`undefined`);

function Ks(e) {
    return e !== null && !Gs(e) && e.constructor !== null && !Gs(e.constructor) && Xs(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
var qs = H(`ArrayBuffer`);

function Js(e) {
    let t;
    return t = typeof ArrayBuffer < `u` && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && qs(e.buffer), t
}
var Ys = Us(`string`),
    Xs = Us(`function`),
    Zs = Us(`number`),
    Qs = e => typeof e == `object` && !!e,
    $s = e => e === !0 || e === !1,
    ec = e => {
        if (!Qs(e)) return !1;
        let t = Ms(e);
        return (t === null || t === Object.prototype || Ms(t) === null) && !zs(e, Ps) && !zs(e, Ns)
    },
    tc = e => {
        if (!Qs(e) || Ks(e)) return !1;
        try {
            return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype
        } catch {
            return !1
        }
    },
    nc = H(`Date`),
    rc = H(`File`),
    ic = e => !!(e && e.uri !== void 0),
    ac = e => e && e.getParts !== void 0,
    oc = H(`Blob`),
    sc = H(`FileList`),
    cc = H(`Set`),
    lc = e => Qs(e) && Xs(e.pipe);

function uc() {
    return typeof globalThis < `u` ? globalThis : typeof self < `u` ? self : typeof window < `u` ? window : typeof global < `u` ? global : {}
}
var dc = uc(),
    fc = dc.FormData === void 0 ? void 0 : dc.FormData,
    pc = e => {
        if (!e) return !1;
        if (fc && e instanceof fc) return !0;
        let t = Ms(e);
        if (!t || t === Object.prototype || !Xs(e.append)) return !1;
        let n = Hs(e);
        return n === `formdata` || n === `object` && Xs(e.toString) && e.toString() === `[object FormData]`
    },
    mc = H(`URLSearchParams`),
    [hc, gc, _c, vc] = [`ReadableStream`, `Request`, `Response`, `Headers`].map(H),
    yc = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ``);

function bc(e, t, {
    allOwnKeys: n = !1
} = {}) {
    if (e == null) return;
    let r, i;
    if (typeof e != `object` && (e = [e]), Ws(e))
        for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
    else {
        if (Ks(e)) return;
        let i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
            a = i.length,
            o;
        for (r = 0; r < a; r++) o = i[r], t.call(null, e[o], o, e)
    }
}

function U(e, t) {
    if (Ks(e)) return null;
    t = t.toLowerCase();
    let n = Object.keys(e),
        r = n.length,
        i;
    for (; r-- > 0;)
        if (i = n[r], t === i.toLowerCase()) return i;
    return null
}
var xc = typeof globalThis < `u` ? globalThis : typeof self < `u` ? self : typeof window < `u` ? window : global,
    Sc = e => !Gs(e) && e !== xc;

function Cc(...e) {
    let {
        caseless: t,
        skipUndefined: n
    } = Sc(this) && this || {}, r = {}, i = (e, i) => {
        if (i === `__proto__` || i === `constructor` || i === `prototype`) return;
        let a = t && typeof i == `string` && U(r, i) || i,
            o = Fs(r, a) ? r[a] : void 0;
        ec(o) && ec(e) ? r[a] = Cc(o, e) : ec(e) ? r[a] = Cc({}, e) : Ws(e) ? r[a] = e.slice() : (!n || !Gs(e)) && (r[a] = e)
    };
    for (let t = 0, n = e.length; t < n; t++) {
        let n = e[t];
        if (!n || Ks(n) || (bc(n, i), typeof n != `object` || Ws(n))) continue;
        let r = Object.getOwnPropertySymbols(n);
        for (let e = 0; e < r.length; e++) {
            let t = r[e];
            Fc.call(n, t) && i(n[t], t)
        }
    }
    return r
}
var wc = (e, t, n, {
        allOwnKeys: r
    } = {}) => (bc(t, (t, r) => {
        n && Xs(t) ? Object.defineProperty(e, r, {
            __proto__: null,
            value: As(t, n),
            writable: !0,
            enumerable: !0,
            configurable: !0
        }) : Object.defineProperty(e, r, {
            __proto__: null,
            value: t,
            writable: !0,
            enumerable: !0,
            configurable: !0
        })
    }, {
        allOwnKeys: r
    }), e),
    Tc = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    Ec = (e, t, n, r) => {
        e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
            __proto__: null,
            value: e,
            writable: !0,
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e, "super", {
            __proto__: null,
            value: t.prototype
        }), n && Object.assign(e.prototype, n)
    },
    Dc = (e, t, n, r) => {
        let i, a, o, s = {};
        if (t ||= {}, e == null) return t;
        do {
            for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0;) o = i[a], (!r || r(o, e, t)) && !s[o] && (t[o] = e[o], s[o] = !0);
            e = n !== !1 && Ms(e)
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t
    },
    Oc = (e, t, n) => {
        e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
        let r = e.indexOf(t, n);
        return r !== -1 && r === n
    },
    kc = e => {
        if (!e) return null;
        if (Ws(e)) return e;
        let t = e.length;
        if (!Zs(t)) return null;
        let n = Array(t);
        for (; t-- > 0;) n[t] = e[t];
        return n
    },
    Ac = (e => t => e && t instanceof e)(typeof Uint8Array < `u` && Ms(Uint8Array)),
    jc = (e, t) => {
        let n = (e && e[Ns]).call(e),
            r;
        for (;
            (r = n.next()) && !r.done;) {
            let n = r.value;
            t.call(e, n[0], n[1])
        }
    },
    Mc = (e, t) => {
        let n, r = [];
        for (;
            (n = e.exec(t)) !== null;) r.push(n);
        return r
    },
    Nc = H(`HTMLFormElement`),
    Pc = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, n) {
        return t.toUpperCase() + n
    }),
    {
        propertyIsEnumerable: Fc
    } = Object.prototype,
    Ic = H(`RegExp`),
    Lc = (e, t) => {
        let n = Object.getOwnPropertyDescriptors(e),
            r = {};
        bc(n, (n, i) => {
            let a;
            (a = t(n, i, e)) !== !1 && (r[i] = a || n)
        }), Object.defineProperties(e, r)
    },
    Rc = e => {
        Lc(e, (t, n) => {
            if (Xs(e) && [`arguments`, `caller`, `callee`].includes(n)) return !1;
            let r = e[n];
            if (Xs(r)) {
                if (t.enumerable = !1, `writable` in t) {
                    t.writable = !1;
                    return
                }
                t.set ||= () => {
                    throw Error(`Can not rewrite read-only method '` + n + `'`)
                }
            }
        })
    },
    zc = (e, t) => {
        let n = {},
            r = e => {
                e.forEach(e => {
                    n[e] = !0
                })
            };
        return Ws(e) ? r(e) : r(String(e).split(t)), n
    },
    Bc = () => {},
    Vc = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;

function Hc(e) {
    return !!(e && Xs(e.append) && e[Ps] === `FormData` && e[Ns])
}
var Uc = e => {
        let t = new WeakSet,
            n = e => {
                if (Qs(e)) {
                    if (t.has(e)) return;
                    if (Ks(e)) return e;
                    if (!(`toJSON` in e)) {
                        t.add(e);
                        let r;
                        if (cc(e)) {
                            r = [];
                            for (let t of e) {
                                let e = n(t);
                                !Gs(e) && r.push(e)
                            }
                        } else r = Ws(e) ? [] : {}, bc(e, (e, t) => {
                            let i = n(e);
                            !Gs(i) && (r[t] = i)
                        });
                        return t.delete(e), r
                    }
                }
                return e
            };
        return n(e)
    },
    Wc = H(`AsyncFunction`),
    Gc = e => e && (Qs(e) || Xs(e)) && Xs(e.then) && Xs(e.catch),
    Kc = ((e, t) => e ? setImmediate : t ? ((e, t) => (xc.addEventListener(`message`, ({
        source: n,
        data: r
    }) => {
        n === xc && r === e && t.length && t.shift()()
    }, !1), n => {
        t.push(n), xc.postMessage(e, `*`)
    }))(`axios@${Math.random()}`, []) : e => setTimeout(e))(typeof setImmediate == `function`, Xs(xc.postMessage)),
    qc = typeof queueMicrotask < `u` ? queueMicrotask.bind(xc) : typeof process < `u` && process.nextTick || Kc,
    Jc = e => e != null && Xs(e[Ns]),
    W = {
        isArray: Ws,
        isArrayBuffer: qs,
        isBuffer: Ks,
        isFormData: pc,
        isArrayBufferView: Js,
        isString: Ys,
        isNumber: Zs,
        isBoolean: $s,
        isObject: Qs,
        isPlainObject: ec,
        isEmptyObject: tc,
        isReadableStream: hc,
        isRequest: gc,
        isResponse: _c,
        isHeaders: vc,
        isUndefined: Gs,
        isDate: nc,
        isFile: rc,
        isReactNativeBlob: ic,
        isReactNative: ac,
        isBlob: oc,
        isRegExp: Ic,
        isFunction: Xs,
        isStream: lc,
        isURLSearchParams: mc,
        isTypedArray: Ac,
        isFileList: sc,
        forEach: bc,
        merge: Cc,
        extend: wc,
        trim: yc,
        stripBOM: Tc,
        inherits: Ec,
        toFlatObject: Dc,
        kindOf: Hs,
        kindOfTest: H,
        endsWith: Oc,
        toArray: kc,
        forEachEntry: jc,
        matchAll: Mc,
        isHTMLForm: Nc,
        hasOwnProperty: Fs,
        hasOwnProp: Fs,
        hasOwnInPrototypeChain: zs,
        getSafeProp: Bs,
        toSafeFlatObject: Vs,
        reduceDescriptors: Lc,
        freezeMethods: Rc,
        toObjectSet: zc,
        toCamelCase: Pc,
        noop: Bc,
        toFiniteNumber: Vc,
        findKey: U,
        global: xc,
        isContextDefined: Sc,
        isSpecCompliantForm: Hc,
        toJSONObject: Uc,
        isAsyncFn: Wc,
        isThenable: Gc,
        setImmediate: Kc,
        asap: qc,
        isIterable: Jc,
        isSafeIterable: e => e != null && zs(e, Ns) && Jc(e)
    },
    G = W.toObjectSet([`age`, `authorization`, `content-length`, `content-type`, `etag`, `expires`, `from`, `host`, `if-modified-since`, `if-unmodified-since`, `last-modified`, `location`, `max-forwards`, `proxy-authorization`, `referer`, `retry-after`, `user-agent`]),
    Yc = e => {
        let t = {},
            n, r, i;
        return e && e.split(`
`).forEach(function(e) {
            i = e.indexOf(`:`), n = e.substring(0, i).trim().toLowerCase(), r = e.substring(i + 1).trim();
            let a = W.hasOwnProp(t, n);
            !n || a && W.hasOwnProp(G, n) || (n === `set-cookie` ? a ? t[n].push(r) : t[n] = [r] : t[n] = a ? t[n] + `, ` + r : r)
        }), t
    };

function Xc(e) {
    let t = 0,
        n = e.length;
    for (; t < n;) {
        let n = e.charCodeAt(t);
        if (n !== 9 && n !== 32) break;
        t += 1
    }
    for (; n > t;) {
        let t = e.charCodeAt(n - 1);
        if (t !== 9 && t !== 32) break;
        --n
    }
    return t === 0 && n === e.length ? e : e.slice(t, n)
}
var Zc = RegExp(`[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+`, `g`),
    Qc = RegExp(`[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+`, `g`);

function $c(e, t) {
    return W.isArray(e) ? e.map(e => $c(e, t)) : Xc(String(e).replace(t, ``))
}
var el = e => $c(e, Zc),
    tl = e => $c(e, Qc);

function nl(e) {
    let t = Object.create(null);
    return W.forEach(e.toJSON(), (e, n) => {
        t[n] = tl(e)
    }), t
}
var rl = Symbol(`internals`);

function il(e) {
    return e && String(e).trim().toLowerCase()
}

function al(e) {
    return e === !1 || e == null ? e : W.isArray(e) ? e.map(al) : el(String(e))
}

function ol(e) {
    let t = Object.create(null),
        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,
        r;
    for (; r = n.exec(e);) t[r[1]] = r[2];
    return t
}
var sl = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;

function cl(e) {
    let t = 0,
        n = e.length;
    for (; t < n;) {
        let n = e.charCodeAt(t);
        if (n !== 9 && n !== 32) break;
        t += 1
    }
    for (; n > t;) {
        let t = e.charCodeAt(n - 1);
        if (t !== 9 && t !== 32) break;
        --n
    }
    return t === 0 && n === e.length ? e : e.slice(t, n)
}

function ll(e) {
    let t = e.length - 1;
    if (t < 1 || e.charCodeAt(0) !== 34 || e.charCodeAt(t) !== 34) return e;
    let n = ``;
    for (let r = 1; r < t; r++) {
        let i = e.charCodeAt(r);
        if (i === 34 || i === 92 && (r += 1, r >= t)) return e;
        n += e[r]
    }
    return n
}

function ul(e) {
    let t = Object.create(null),
        n = String(e),
        r = 0,
        i = !1,
        a = !1;

    function o(e) {
        let i = cl(n.slice(r, e)),
            a = i.indexOf(`=`);
        if (a < 1) return;
        let o = cl(i.slice(0, a));
        if (!sl.test(o)) return;
        let s = o.toLowerCase();
        if (s === `__proto__` || s === `constructor` || s === `prototype`) return;
        let c = cl(i.slice(a + 1));
        t[s] = ll(c)
    }
    for (let e = 0; e < n.length; e++) {
        let t = n.charCodeAt(e);
        i ? a ? a = !1 : t === 92 ? a = !0 : t === 34 && (i = !1) : t === 34 ? i = !0 : (t === 44 || t === 59) && (o(e), r = e + 1)
    }
    return o(n.length), t
}
var dl = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

function fl(e, t, n, r, i) {
    if (W.isFunction(r)) return r.call(this, t, n);
    if (i && (t = n), W.isString(t)) {
        if (W.isString(r)) return t.indexOf(r) !== -1;
        if (W.isRegExp(r)) return r.test(t)
    }
}

function pl(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n)
}

function ml(e, t) {
    let n = W.toCamelCase(` ` + t);
    [`get`, `set`, `has`].forEach(r => {
        Object.defineProperty(e, r + n, {
            __proto__: null,
            value: function(e, n, i) {
                return this[r].call(this, t, e, n, i)
            },
            configurable: !0
        })
    })
}
var hl = class {
    constructor(e) {
        e && this.set(e)
    }
    set(e, t, n) {
        let r = this;

        function i(e, t, n) {
            let i = il(t);
            if (!i) return;
            let a = W.findKey(r, i);
            (!a || r[a] === void 0 || n === !0 || n === void 0 && r[a] !== !1) && (r[a || t] = al(e))
        }
        let a = (e, t) => W.forEach(e, (e, n) => i(e, n, t));
        if (W.isPlainObject(e) || e instanceof this.constructor) a(e, t);
        else if (W.isString(e) && (e = e.trim()) && !dl(e)) a(Yc(e), t);
        else if (W.isObject(e) && W.isSafeIterable(e)) {
            let n = Object.create(null),
                r, i;
            for (let t of e) {
                if (!W.isArray(t)) throw TypeError(`Object iterator must return a key-value pair`);
                i = t[0], W.hasOwnProp(n, i) ? (r = n[i], n[i] = W.isArray(r) ? [...r, t[1]] : [r, t[1]]) : n[i] = t[1]
            }
            a(n, t)
        } else e != null && i(t, e, n);
        return this
    }
    get(e, t) {
        if (e = il(e), e) {
            let n = W.findKey(this, e);
            if (n) {
                let e = this[n];
                if (!t) return e;
                if (t === !0) return ol(e);
                if (W.isFunction(t)) return t.call(this, e, n);
                if (W.isRegExp(t)) return t.exec(e);
                throw TypeError(`parser must be boolean|regexp|function`)
            }
        }
    }
    has(e, t) {
        if (e = il(e), e) {
            let n = W.findKey(this, e);
            return !!(n && this[n] !== void 0 && (!t || fl(this, this[n], n, t)))
        }
        return !1
    }
    delete(e, t) {
        let n = this,
            r = !1;

        function i(e) {
            if (e = il(e), e) {
                let i = W.findKey(n, e);
                i && (!t || fl(n, n[i], i, t)) && (delete n[i], r = !0)
            }
        }
        return W.isArray(e) ? e.forEach(i) : i(e), r
    }
    clear(e) {
        let t = Object.keys(this),
            n = t.length,
            r = !1;
        for (; n--;) {
            let i = t[n];
            (!e || fl(this, this[i], i, e, !0)) && (delete this[i], r = !0)
        }
        return r
    }
    normalize(e) {
        let t = this,
            n = {};
        return W.forEach(this, (r, i) => {
            let a = W.findKey(n, i);
            if (a) {
                t[a] = al(r), delete t[i];
                return
            }
            let o = e ? pl(i) : String(i).trim();
            o !== i && delete t[i], t[o] = al(r), n[o] = !0
        }), this
    }
    concat(...e) {
        return this.constructor.concat(this, ...e)
    }
    toJSON(e) {
        let t = Object.create(null);
        return W.forEach(this, (n, r) => {
            n != null && n !== !1 && (t[r] = e && W.isArray(n) ? n.join(`, `) : n)
        }), t
    }[Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([e, t]) => e + `: ` + t).join(`
`)
    }
    getSetCookie() {
        let e = this.get(`set-cookie`);
        return W.isArray(e) ? e : e == null || e === !1 ? [] : [e]
    }
    get[Symbol.toStringTag]() {
        return `AxiosHeaders`
    }
    static from(e) {
        return e instanceof this ? e : new this(e)
    }
    static parseParameters(e) {
        return ul(e)
    }
    static concat(e, ...t) {
        let n = new this(e);
        return t.forEach(e => n.set(e)), n
    }
    static accessor(e) {
        let t = (this[rl] = this[rl] = {
                accessors: {}
            }).accessors,
            n = this.prototype;

        function r(e) {
            let r = il(e);
            t[r] || (ml(n, e), t[r] = !0)
        }
        return W.isArray(e) ? e.forEach(r) : r(e), this
    }
};
hl.accessor([`Content-Type`, `Content-Length`, `Accept`, `Accept-Encoding`, `User-Agent`, `Authorization`]), W.reduceDescriptors(hl.prototype, ({
    value: e
}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(e) {
            this[n] = e
        }
    }
}), W.freezeMethods(hl);
var gl = `[REDACTED ****]`;

function _l(e) {
    if (W.hasOwnProp(e, `toJSON`)) return !0;
    let t = Object.getPrototypeOf(e);
    for (; t && t !== Object.prototype;) {
        if (W.hasOwnProp(t, `toJSON`)) return !0;
        t = Object.getPrototypeOf(t)
    }
    return !1
}

function vl(e, t) {
    let n = new Set(t.map(e => String(e).toLowerCase())),
        r = [],
        i = e => {
            if (typeof e != `object` || !e || W.isBuffer(e)) return e;
            if (r.indexOf(e) !== -1) return;
            e instanceof hl && (e = e.toJSON()), r.push(e);
            let t;
            if (W.isArray(e)) t = [], e.forEach((e, n) => {
                let r = i(e);
                W.isUndefined(r) || (t[n] = r)
            });
            else {
                if (!W.isPlainObject(e) && _l(e)) return r.pop(), e;
                t = Object.create(null);
                for (let [r, a] of Object.entries(e)) {
                    let e = n.has(r.toLowerCase()) ? gl : i(a);
                    W.isUndefined(e) || (t[r] = e)
                }
            }
            return r.pop(), t
        };
    return i(e)
}

function yl(e) {
    try {
        return String(e)
    } catch {
        return ``
    }
}

function bl(e) {
    return e.errors.map(e => {
        try {
            return e && e.message ? yl(e.message) : yl(e)
        } catch {
            return ``
        }
    }).filter(Boolean).join(`; `) || e.name || `AggregateError`
}
var K = class e extends Error {
    static from(t, n, r, i, a, o) {
        let s = t.message;
        !s && W.isArray(t.errors) && t.errors.length && (s = bl(t));
        let c = new e(s, n || t.code, r, i, a);
        return Object.defineProperty(c, "cause", {
            __proto__: null,
            value: t,
            writable: !0,
            enumerable: !1,
            configurable: !0
        }), c.name = t.name, t.status != null && c.status == null && (c.status = t.status), o && Object.assign(c, o), c
    }
    constructor(e, t, n, r, i) {
        super(e), Object.defineProperty(this, "message", {
            __proto__: null,
            value: e,
            enumerable: !0,
            writable: !0,
            configurable: !0
        }), this.name = `AxiosError`, this.isAxiosError = !0, t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i, this.status = i.status)
    }
    toJSON() {
        let e = this.config,
            t = e && W.hasOwnProp(e, `redact`) ? e.redact : void 0,
            n = W.isArray(t) && t.length > 0 ? vl(e, t) : W.toJSONObject(e);
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: n,
            code: this.code,
            status: this.status
        }
    }
};
K.ERR_BAD_OPTION_VALUE = `ERR_BAD_OPTION_VALUE`, K.ERR_BAD_OPTION = `ERR_BAD_OPTION`, K.ECONNABORTED = `ECONNABORTED`, K.ETIMEDOUT = `ETIMEDOUT`, K.ECONNREFUSED = `ECONNREFUSED`, K.ERR_NETWORK = `ERR_NETWORK`, K.ERR_FR_TOO_MANY_REDIRECTS = `ERR_FR_TOO_MANY_REDIRECTS`, K.ERR_DEPRECATED = `ERR_DEPRECATED`, K.ERR_BAD_RESPONSE = `ERR_BAD_RESPONSE`, K.ERR_BAD_REQUEST = `ERR_BAD_REQUEST`, K.ERR_CANCELED = `ERR_CANCELED`, K.ERR_NOT_SUPPORT = `ERR_NOT_SUPPORT`, K.ERR_INVALID_URL = `ERR_INVALID_URL`, K.ERR_FORM_DATA_DEPTH_EXCEEDED = `ERR_FORM_DATA_DEPTH_EXCEEDED`;

function xl(e) {
    return W.isPlainObject(e) || W.isArray(e)
}

function Sl(e) {
    return W.endsWith(e, `[]`) ? e.slice(0, -2) : e
}

function Cl(e, t, n) {
    return e ? e.concat(t).map(function(e, t) {
        return e = Sl(e), !n && t ? `[` + e + `]` : e
    }).join(n ? `.` : ``) : t
}

function wl(e) {
    return W.isArray(e) && !e.some(xl)
}
var Tl = W.toFlatObject(W, {}, null, function(e) {
    return /^is[A-Z]/.test(e)
});

function El(e, t, n) {
    if (!W.isObject(e)) throw TypeError(`target must be an object`);
    t ||= new FormData;
    let r = (e, t) => {
            let r = W.getSafeProp(n, e);
            return W.isUndefined(r) ? t : r
        },
        i = r(`metaTokens`, !0),
        a = r(`visitor`) || h,
        o = r(`dots`, !1),
        s = r(`indexes`, !1),
        c = r(`Blob`) || typeof Blob < `u` && Blob,
        l = r(`maxDepth`, 100),
        u = c && W.isSpecCompliantForm(t),
        d = [];
    if (!W.isFunction(a)) throw TypeError(`visitor must be a function`);

    function f(e) {
        if (e === null) return ``;
        if (W.isDate(e)) return e.toISOString();
        if (W.isBoolean(e)) return e.toString();
        if (!u && W.isBlob(e)) throw new K(`Blob is not supported. Use a Buffer instead.`);
        if (W.isArrayBuffer(e) || W.isTypedArray(e)) {
            if (u && typeof c == `function`) return new c([e]);
            throw new K(`Blob is not supported. Use a Buffer instead.`, K.ERR_NOT_SUPPORT)
        }
        return e
    }

    function p(e) {
        if (e > l) throw new K(`Object is too deeply nested (` + e + ` levels). Max depth: ` + l, K.ERR_FORM_DATA_DEPTH_EXCEEDED)
    }

    function m(e, t) {
        if (l === 1 / 0) return JSON.stringify(e);
        let n = [];
        return JSON.stringify(e, function(e, r) {
            if (!W.isObject(r)) return r;
            for (; n.length && n[n.length - 1] !== this;) n.pop();
            return n.push(r), p(t + n.length - 1), r
        })
    }

    function h(e, n, r) {
        let a = e;
        if (W.isReactNative(t) && W.isReactNativeBlob(e)) return t.append(Cl(r, n, o), f(e)), !1;
        if (e && !r && typeof e == `object`) {
            if (W.endsWith(n, `{}`)) n = i ? n : n.slice(0, -2), e = m(e, 1);
            else if (W.isArray(e) && wl(e) || (W.isFileList(e) || W.endsWith(n, `[]`)) && (a = W.toArray(e))) return n = Sl(n), a.forEach(function(e, r) {
                !(W.isUndefined(e) || e === null) && t.append(s === !0 ? Cl([n], r, o) : s === null ? n : n + `[]`, f(e))
            }), !1
        }
        return xl(e) ? !0 : (t.append(Cl(r, n, o), f(e)), !1)
    }
    let g = Object.assign(Tl, {
        defaultVisitor: h,
        convertValue: f,
        isVisitable: xl
    });

    function _(e, n, r = 0) {
        if (!W.isUndefined(e)) {
            if (p(r), d.indexOf(e) !== -1) throw Error(`Circular reference detected in ` + n.join(`.`));
            d.push(e), W.forEach(e, function(e, i) {
                (!(W.isUndefined(e) || e === null) && a.call(t, e, W.isString(i) ? i.trim() : i, n, g)) === !0 && _(e, n ? n.concat(i) : [i], r + 1)
            }), d.pop()
        }
    }
    if (!W.isObject(e)) throw TypeError(`data must be an object`);
    return _(e), t
}

function Dl(e) {
    let t = {
        "!": `%21`,
        "'": `%27`,
        "(": `%28`,
        ")": `%29`,
        "~": `%7E`,
        "%20": `+`
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20/g, function(e) {
        return t[e]
    })
}

function Ol(e, t) {
    this._pairs = [], e && El(e, this, t)
}
var kl = Ol.prototype;
kl.append = function(e, t) {
    this._pairs.push([e, t])
}, kl.toString = function(e) {
    let t = e ? t => e.call(this, t, Dl) : Dl;
    return this._pairs.map(function(e) {
        return t(e[0]) + `=` + t(e[1])
    }, ``).join(`&`)
};

function Al(e) {
    return encodeURIComponent(e).replace(/%3A/gi, `:`).replace(/%24/g, `$`).replace(/%2C/gi, `,`).replace(/%20/g, `+`)
}

function jl(e, t, n) {
    if (!t) return e;
    e ||= ``;
    let r = W.isFunction(n) ? {
            serialize: n
        } : n,
        i = W.getSafeProp(r, `encode`) || Al,
        a = W.getSafeProp(r, `serialize`),
        o;
    if (o = a ? a(t, r) : W.isURLSearchParams(t) ? t.toString() : new Ol(t, r).toString(i), o) {
        let t = e.indexOf(`#`);
        t !== -1 && (e = e.slice(0, t)), e += (e.indexOf(`?`) === -1 ? `?` : `&`) + o
    }
    return e
}
var Ml = Symbol(`internals`);

function Nl(e) {
    return e ? e.length : 0
}

function Pl(e) {
    if (e)
        for (; e.length && e[e.length - 1] === null;) e.pop()
}

function Fl(e, t) {
    let n = e.handlers,
        r = Nl(n);
    n === t.handlersRef ? r !== t.handlersLength && (r ? t.handlerEntries.forEach(function(e, r) {
        n[e.index] !== e.handler && t.handlerEntries.delete(r)
    }) : t.handlerEntries.clear()) : (t.handlersRef = n, t.handlerEntries.clear()), t.handlersLength = r
}
var Il = class {
        constructor() {
            this.handlers = [], this[Ml] = {
                handlersRef: this.handlers,
                handlersLength: this.handlers.length,
                handlerEntries: new Map,
                iterationDepth: 0,
                nextId: 0
            }
        }
        use(e, t, n) {
            let r = {
                    fulfilled: e,
                    rejected: t,
                    synchronous: n ? n.synchronous : !1,
                    runWhen: n ? n.runWhen : null
                },
                i = this[Ml];
            this.handlers ??= [], Fl(this, i);
            let a = i.nextId++;
            return this.handlers.push(r), i.handlerEntries.set(a, {
                handler: r,
                index: this.handlers.length - 1
            }), i.handlersLength = this.handlers.length, a
        }
        eject(e) {
            let t = this[Ml];
            Fl(this, t);
            let n = t.handlerEntries.get(e);
            if (n) {
                if (t.handlerEntries.delete(e), this.handlers[n.index] !== n.handler) return;
                this.handlers[n.index] = null, t.iterationDepth || (Pl(this.handlers), t.handlersLength = this.handlers.length)
            }
        }
        clear() {
            this.handlers && (this.handlers = [], Fl(this, this[Ml]))
        }
        forEach(e) {
            let t = this[Ml];
            Fl(this, t), t.iterationDepth++;
            try {
                W.forEach(this.handlers, function(t) {
                    t !== null && e(t)
                })
            } finally {
                --t.iterationDepth || (Fl(this, t), Pl(this.handlers), t.handlersLength = Nl(this.handlers))
            }
        }
    },
    Ll = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
        legacyInterceptorReqResOrdering: !0,
        advertiseZstdAcceptEncoding: !1,
        validateStatusUndefinedResolves: !0
    },
    Rl = {
        isBrowser: !0,
        classes: {
            URLSearchParams: typeof URLSearchParams < `u` ? URLSearchParams : Ol,
            FormData: typeof FormData < `u` ? FormData : null,
            Blob: typeof Blob < `u` ? Blob : null
        },
        protocols: [`http`, `https`, `file`, `blob`, `url`, `data`]
    },
    zl = s({
        hasBrowserEnv: () => Bl,
        hasStandardBrowserEnv: () => Hl,
        hasStandardBrowserWebWorkerEnv: () => Ul,
        navigator: () => Vl,
        origin: () => Wl
    }),
    Bl = typeof window < `u` && typeof document < `u`,
    Vl = typeof navigator == `object` && navigator || void 0,
    Hl = Bl && (!Vl || [`ReactNative`, `NativeScript`, `NS`].indexOf(Vl.product) < 0),
    Ul = typeof WorkerGlobalScope < `u` && self instanceof WorkerGlobalScope && typeof self.importScripts == `function`,
    Wl = Bl && window.location.href || `http://localhost`,
    q = { ...zl,
        ...Rl
    };

function Gl(e, t) {
    return El(e, new q.classes.URLSearchParams, {
        visitor: function(e, t, n, r) {
            return q.isNode && W.isBuffer(e) ? (this.append(t, e.toString(`base64`)), !1) : r.defaultVisitor.apply(this, arguments)
        },
        ...t
    })
}
var Kl = 100;

function ql(e) {
    if (e > Kl) throw new K(`FormData field is too deeply nested (` + e + ` levels). Max depth: ` + Kl, K.ERR_FORM_DATA_DEPTH_EXCEEDED)
}

function Jl(e) {
    let t = [],
        n = /[^.[\]]+|\[([^.[\]]*)]/g,
        r;
    for (;
        (r = n.exec(e)) !== null;) ql(t.length), t.push(r[0] === `[]` ? `` : r[1] || r[0]);
    return t
}

function Yl(e) {
    let t = {},
        n = Object.keys(e),
        r, i = n.length,
        a;
    for (r = 0; r < i; r++) a = n[r], t[a] = e[a];
    return t
}

function Xl(e) {
    function t(e, n, r, i) {
        ql(i);
        let a = e[i++];
        if (a === `__proto__`) return !0;
        let o = Number.isFinite(+a),
            s = i >= e.length;
        return a = !a && W.isArray(r) ? r.length : a, s ? (W.hasOwnProp(r, a) ? r[a] = W.isArray(r[a]) ? r[a].concat(n) : [r[a], n] : r[a] = n, !o) : ((!W.hasOwnProp(r, a) || !W.isObject(r[a])) && (r[a] = []), t(e, n, r[a], i) && W.isArray(r[a]) && (r[a] = Yl(r[a])), !o)
    }
    if (W.isFormData(e) && W.isFunction(e.entries)) {
        let n = {};
        return W.forEachEntry(e, (e, r) => {
            t(Jl(e), r, n, 0)
        }), n
    }
    return null
}
var Zl = Object.freeze([`get`, `delete`, `head`, `options`, `post`, `put`, `patch`, `purge`, `link`, `unlink`, `query`]),
    Ql = (e, t) => e != null && W.hasOwnProp(e, t) ? e[t] : void 0;

function $l(e, t, n) {
    if (W.isString(e)) try {
        return (t || JSON.parse)(e), W.trim(e)
    } catch (e) {
        if (e.name !== `SyntaxError`) throw e
    }
    return (n || JSON.stringify)(e)
}
var eu = {
    transitional: Ll,
    adapter: [`xhr`, `http`, `fetch`],
    transformRequest: [function(e, t) {
        let n = t.getContentType() || ``,
            r = n.indexOf(`application/json`) > -1,
            i = W.isObject(e);
        if (i && W.isHTMLForm(e) && (e = new FormData(e)), W.isFormData(e)) return r ? JSON.stringify(Xl(e)) : e;
        if (W.isArrayBuffer(e) || W.isBuffer(e) || W.isStream(e) || W.isFile(e) || W.isBlob(e) || W.isReadableStream(e)) return e;
        if (W.isArrayBufferView(e)) return e.buffer;
        if (W.isURLSearchParams(e)) return t.setContentType(`application/x-www-form-urlencoded;charset=utf-8`, !1), e.toString();
        let a;
        if (i) {
            let t = Ql(this, `formSerializer`);
            if (n.indexOf(`application/x-www-form-urlencoded`) > -1) return Gl(e, t).toString();
            if ((a = W.isFileList(e)) || n.indexOf(`multipart/form-data`) > -1) {
                let n = Ql(this, `env`),
                    r = n && n.FormData;
                return El(a ? {
                    "files[]": e
                } : e, r && new r, t)
            }
        }
        return i || r ? (t.setContentType(`application/json`, !1), $l(e)) : e
    }],
    transformResponse: [function(e) {
        let t = Ql(this, `transitional`) || eu.transitional,
            n = t && t.forcedJSONParsing,
            r = Ql(this, `responseType`),
            i = r === `json`;
        if (W.isResponse(e) || W.isReadableStream(e)) return e;
        if (e && W.isString(e) && (n && !r || i)) {
            let n = !(t && t.silentJSONParsing) && i;
            try {
                return JSON.parse(e, Ql(this, `parseReviver`))
            } catch (e) {
                if (n) throw e.name === `SyntaxError` ? K.from(e, K.ERR_BAD_RESPONSE, this, null, Ql(this, `response`)) : e
            }
        }
        return e
    }],
    timeout: 0,
    xsrfCookieName: `XSRF-TOKEN`,
    xsrfHeaderName: `X-XSRF-TOKEN`,
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: q.classes.FormData,
        Blob: q.classes.Blob
    },
    validateStatus: function(e) {
        return e >= 200 && e < 300
    },
    headers: {
        common: {
            Accept: `application/json, text/plain, */*`,
            "Content-Type": void 0
        }
    }
};
W.forEach(Zl, e => {
    eu.headers[e] = {}
});

function tu(e, t) {
    let n = this || eu,
        r = t || n,
        i = hl.from(r.headers),
        a = r.data;
    return W.forEach(e, function(e) {
        a = e.call(n, a, i.normalize(), t ? t.status : void 0)
    }), i.normalize(), a
}

function nu(e) {
    return !!(e && e.__CANCEL__)
}
var ru = class extends K {
    constructor(e, t, n) {
        super(e ?? `canceled`, K.ERR_CANCELED, t, n), this.name = `CanceledError`, this.__CANCEL__ = !0
    }
};

function iu(e, t, n) {
    let r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new K(`Request failed with status code ` + n.status, n.status >= 400 && n.status < 500 ? K.ERR_BAD_REQUEST : K.ERR_BAD_RESPONSE, n.config, n.request, n))
}
var au = /[\t\n\r]/g;

function ou(e) {
    if (typeof e != `string`) return e;
    let t = 0;
    for (; t < e.length && e.charCodeAt(t) <= 32;) t++;
    return e.slice(t).replace(au, ``)
}

function su(e) {
    let t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
    return t && t[1] || ``
}

function cu(e, t) {
    e ||= 10;
    let n = Array(e),
        r = Array(e),
        i = 0,
        a = 0,
        o;
    return t = t === void 0 ? 1e3 : t,
        function(s) {
            let c = Date.now(),
                l = r[a];
            o ||= c, n[i] = s, r[i] = c;
            let u = a,
                d = 0;
            for (; u !== i;) d += n[u++], u %= e;
            if (i = (i + 1) % e, i === a && (a = (a + 1) % e), c - o < t) return;
            let f = l && c - l;
            return f ? Math.round(d * 1e3 / f) : void 0
        }
}

function lu(e, t) {
    let n = 0,
        r = 1e3 / t,
        i, a, o = (t, r = Date.now()) => {
            n = r, i = null, a &&= (clearTimeout(a), null), e(...t)
        };
    return [(...e) => {
        let t = Date.now(),
            s = t - n;
        s >= r ? o(e, t) : (i = e, a ||= setTimeout(() => {
            a = null, o(i)
        }, r - s))
    }, () => i && o(i), (...e) => o(e)]
}
var uu = (e, t, n = 3) => {
        let r = 0,
            i = cu(50, 250);
        return lu(n => {
            if (!n || !W.isNumber(n.loaded)) return;
            let a = n.loaded,
                o = n.lengthComputable ? n.total : void 0,
                s = Math.max(0, o == null ? a : Math.min(a, o)),
                c = Math.max(0, s - r),
                l = i(c);
            r = Math.max(r, s), e({
                loaded: s,
                total: o,
                progress: o ? s / o : void 0,
                bytes: c,
                rate: l || void 0,
                estimated: l && o ? (o - s) / l : void 0,
                event: n,
                lengthComputable: o != null,
                [t ? `download` : `upload`]: !0
            })
        }, n)
    },
    du = (e, t) => {
        let n = e != null;
        return [r => t[0]({
            lengthComputable: n,
            total: e,
            loaded: r
        }), t[1]]
    },
    fu = (e, t = W.asap) => (...n) => t(() => e(...n)),
    pu = q.hasStandardBrowserEnv ? ((e, t) => n => (n = new URL(n, q.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(q.origin), q.navigator && /(msie|trident)/i.test(q.navigator.userAgent)) : () => !0,
    mu = q.hasStandardBrowserEnv ? {
        write(e, t, n, r, i, a, o) {
            if (typeof document > `u`) return;
            let s = [`${e}=${encodeURIComponent(t)}`];
            W.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`), W.isString(r) && s.push(`path=${r}`), W.isString(i) && s.push(`domain=${i}`), a === !0 && s.push(`secure`), W.isString(o) && s.push(`SameSite=${o}`), document.cookie = s.join(`; `)
        },
        read(e) {
            if (typeof document > `u`) return null;
            let t = document.cookie.split(`;`);
            for (let n = 0; n < t.length; n++) {
                let r = t[n].replace(/^\s+/, ``),
                    i = r.indexOf(`=`);
                if (i !== -1 && r.slice(0, i) === e) try {
                    return decodeURIComponent(r.slice(i + 1))
                } catch {
                    return r.slice(i + 1)
                }
            }
            return null
        },
        remove(e) {
            this.write(e, ``, Date.now() - 864e5, `/`)
        }
    } : {
        write() {},
        read() {
            return null
        },
        remove() {}
    };

function hu(e) {
    return typeof e == `string` && /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}

function gu(e, t) {
    if (!t) return e;
    let n = e.length;
    for (; n > 0 && e.charCodeAt(n - 1) === 47;) n--;
    return e.slice(0, n) + `/` + t.replace(/^\/+/, ``)
}
var _u = /^https?:(?!\/\/)/i;

function vu(e) {
    return e && e.replace(/(^|&)([^=&]*=)?[^&]+/g, (e, t, n = ``) => `${t}${n}${gl}`)
}

function yu(e) {
    let t = e.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${gl}@`),
        n = t.indexOf(`#`),
        r = (n === -1 ? t : t.slice(0, n)).replace(/([?&][^=&#]*=)[^&#]*/g, `$1${gl}`);
    return n === -1 ? r : `${r}#${vu(t.slice(n+1))}`
}

function bu(e, t) {
    if (typeof e == `string`) {
        let n = ou(e);
        if (_u.test(n)) throw new K(`Invalid URL ${JSON.stringify(yu(n))}: missing "//" after protocol`, K.ERR_INVALID_URL, t)
    }
}

function xu(e, t, n, r) {
    bu(t, r);
    let i = !hu(t);
    return e && (i || n === !1) ? (bu(e, r), gu(e, t)) : t
}
var Su = e => e instanceof hl ? { ...e
    } : e,
    Cu = e => Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor ? Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter(t => Object.getOwnPropertyDescriptor(e, t).enumerable)) : Object.keys(e);

function wu(e, t) {
    e ||= {}, t ||= {};
    let n = Object.create(null);
    Object.defineProperty(n, "hasOwnProperty", {
        __proto__: null,
        value: Object.prototype.hasOwnProperty,
        enumerable: !1,
        writable: !0,
        configurable: !0
    });

    function r(e, t, n, r) {
        return W.isPlainObject(e) && W.isPlainObject(t) ? W.merge.call({
            caseless: r
        }, e, t) : W.isPlainObject(t) ? W.merge({}, t) : W.isArray(t) ? t.slice() : t
    }

    function i(e, t, n, i) {
        if (!W.isUndefined(t)) return r(e, t, n, i);
        if (!W.isUndefined(e)) return r(void 0, e, n, i)
    }

    function a(e, t) {
        if (!W.isUndefined(t)) return r(void 0, t)
    }

    function o(e, t) {
        if (!W.isUndefined(t)) return r(void 0, t);
        if (!W.isUndefined(e)) return r(void 0, e)
    }

    function s(n) {
        let r = W.hasOwnProp(t, `transitional`) ? t.transitional : void 0;
        if (!W.isUndefined(r))
            if (W.isPlainObject(r)) {
                if (W.hasOwnProp(r, n)) return r[n]
            } else return;
        let i = W.hasOwnProp(e, `transitional`) ? e.transitional : void 0;
        if (W.isPlainObject(i) && W.hasOwnProp(i, n)) return i[n]
    }

    function c(n, i, a) {
        if (W.hasOwnProp(t, a)) return r(n, i);
        if (W.hasOwnProp(e, a)) return r(void 0, n)
    }
    let l = {
        url: a,
        method: a,
        data: a,
        baseURL: o,
        transformRequest: o,
        transformResponse: o,
        paramsSerializer: o,
        timeout: o,
        timeoutErrorMessage: o,
        withCredentials: o,
        withXSRFToken: o,
        adapter: o,
        responseType: o,
        xsrfCookieName: o,
        xsrfHeaderName: o,
        onUploadProgress: o,
        onDownloadProgress: o,
        decompress: o,
        maxContentLength: o,
        maxBodyLength: o,
        beforeRedirect: o,
        transport: o,
        httpAgent: o,
        httpsAgent: o,
        cancelToken: o,
        socketPath: o,
        allowedSocketPaths: o,
        responseEncoding: o,
        validateStatus: c,
        headers: (e, t, n) => i(Su(e), Su(t), n, !0)
    };
    return W.forEach(Cu({ ...e,
        ...t
    }), function(r) {
        if (r === `__proto__` || r === `constructor` || r === `prototype`) return;
        let a = W.hasOwnProp(l, r) ? l[r] : i,
            o = a(W.hasOwnProp(e, r) ? e[r] : void 0, W.hasOwnProp(t, r) ? t[r] : void 0, r);
        W.isUndefined(o) && a !== c || (n[r] = o)
    }), W.hasOwnProp(t, `validateStatus`) && W.isUndefined(t.validateStatus) && s(`validateStatusUndefinedResolves`) === !1 && (W.hasOwnProp(e, `validateStatus`) ? n.validateStatus = r(void 0, e.validateStatus) : delete n.validateStatus), n
}
var Tu = [`content-type`, `content-length`];

function Eu(e, t, n) {
    if (n !== `content-only`) {
        e.set(t);
        return
    }
    Object.entries(t || {}).forEach(([t, n]) => {
        Tu.includes(t.toLowerCase()) && e.set(t, n)
    })
}
var Du = e => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16)));

function Ou(e) {
    let t = wu({}, e),
        n = e => W.hasOwnProp(t, e) ? t[e] : void 0,
        r = n(`data`),
        i = n(`withXSRFToken`),
        a = n(`xsrfHeaderName`),
        o = n(`xsrfCookieName`),
        s = n(`headers`),
        c = n(`auth`),
        l = n(`baseURL`),
        u = n(`allowAbsoluteUrls`),
        d = n(`url`);
    if (t.headers = s = hl.from(s), t.url = jl(xu(l, d, u, t), n(`params`), n(`paramsSerializer`)), c) {
        let t = W.getSafeProp(c, `username`) || ``,
            n = W.getSafeProp(c, `password`) || ``;
        try {
            s.set(`Authorization`, `Basic ` + btoa(t + `:` + (n ? Du(n) : ``)))
        } catch (t) {
            throw K.from(t, K.ERR_BAD_OPTION_VALUE, e)
        }
    }
    if (W.isFormData(r)) {
        let e = W.getSafeProp(r, `getHeaders`);
        q.hasStandardBrowserEnv || q.hasStandardBrowserWebWorkerEnv || W.isReactNative(r) ? s.setContentType(void 0) : W.isFunction(e) && Eu(s, e.call(r), n(`formDataHeaderPolicy`))
    }
    if (q.hasStandardBrowserEnv && (W.isFunction(i) && (i = i(t)), i === !0 || i == null && pu(t.url))) {
        let e = a && o && mu.read(o);
        e && s.set(a, e)
    }
    return t
}
var ku = typeof XMLHttpRequest < `u` && function(e) {
        return new Promise(function(t, n) {
            let r = Ou(e),
                i = r.data,
                a = hl.from(r.headers).normalize(),
                {
                    responseType: o,
                    onUploadProgress: s,
                    onDownloadProgress: c
                } = r,
                l, u, d, f, p, m;

            function h() {
                f && f(), p && p(), r.cancelToken && r.cancelToken.unsubscribe(l), r.signal && r.signal.removeEventListener(`abort`, l)
            }
            let g = new XMLHttpRequest;
            g.open(r.method.toUpperCase(), r.url, !0), g.timeout = r.timeout;

            function _(i) {
                if (!g) return;
                if (g.status === 0 && (su(ou(r.url)) || su(q.origin)) !== `file` && !(g.responseURL && g.responseURL.startsWith(`file:`))) {
                    n(new K(`Request aborted`, K.ECONNABORTED, e, g)), h(), g = null;
                    return
                }
                try {
                    i ? m && m(i) : p && p()
                } catch (e) {
                    setTimeout(() => {
                        throw e
                    })
                }
                if (!g) return;
                let a = hl.from(`getAllResponseHeaders` in g && g.getAllResponseHeaders());
                iu(function(e) {
                    t(e), h()
                }, function(e) {
                    n(e), h()
                }, {
                    data: !o || o === `text` || o === `json` ? g.responseText : g.response,
                    status: g.status,
                    statusText: g.statusText,
                    headers: a,
                    config: e,
                    request: g
                }), g = null
            }
            `onloadend` in g ? g.onloadend = _ : g.onreadystatechange = function() {
                !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.startsWith(`file:`)) || setTimeout(_)
            }, g.onabort = function() {
                g &&= (n(new K(`Request aborted`, K.ECONNABORTED, e, g)), h(), null)
            }, g.onerror = function(t) {
                let r = new K(t && t.message ? t.message : `Network Error`, K.ERR_NETWORK, e, g);
                r.event = t || null, n(r), h(), g = null
            }, g.ontimeout = function() {
                let t = r.timeout ? `timeout of ` + r.timeout + `ms exceeded` : `timeout exceeded`,
                    i = r.transitional || Ll;
                r.timeoutErrorMessage && (t = r.timeoutErrorMessage), n(new K(t, i.clarifyTimeoutError ? K.ETIMEDOUT : K.ECONNABORTED, e, g)), h(), g = null
            }, i === void 0 && a.setContentType(null), `setRequestHeader` in g && W.forEach(nl(a), function(e, t) {
                g.setRequestHeader(t, e)
            }), W.isUndefined(r.withCredentials) || (g.withCredentials = !!r.withCredentials), o && o !== `json` && (g.responseType = r.responseType), c && ([d, p, m] = uu(c, !0), g.addEventListener(`progress`, d)), s && g.upload && ([u, f] = uu(s), g.upload.addEventListener(`progress`, u), g.upload.addEventListener(`loadend`, f)), (r.cancelToken || r.signal) && (l = t => {
                g &&= (n(!t || t.type ? new ru(null, e, g) : t), g.abort(), h(), null)
            }, r.cancelToken && r.cancelToken.subscribe(l), r.signal && (r.signal.aborted ? l() : r.signal.addEventListener(`abort`, l)));
            let v = su(r.url);
            if (v && !q.protocols.includes(v)) {
                n(new K(`Unsupported protocol ` + v + `:`, K.ERR_BAD_REQUEST, e)), h();
                return
            }
            g.send(i || null)
        })
    },
    Au = (e, t) => {
        if (e = e ? e.filter(Boolean) : [], !t && !e.length) return;
        let n = new AbortController,
            r = !1,
            i = function(e) {
                if (!r) {
                    r = !0, o();
                    let t = e instanceof Error ? e : this.reason;
                    n.abort(t instanceof K ? t : new ru(t instanceof Error ? t.message : t))
                }
            },
            a = t && setTimeout(() => {
                a = null, i(new K(`timeout of ${t}ms exceeded`, K.ETIMEDOUT))
            }, t),
            o = () => {
                e &&= (a && clearTimeout(a), a = null, e.forEach(e => {
                    e.unsubscribe ? e.unsubscribe(i) : e.removeEventListener(`abort`, i)
                }), null)
            };
        e.forEach(e => {
            if (!r) {
                if (e.aborted) {
                    i.call(e);
                    return
                }
                e.addEventListener(`abort`, i, {
                    once: !0
                })
            }
        });
        let {
            signal: s
        } = n;
        return s.unsubscribe = () => W.asap(o), s
    },
    ju = function*(e, t) {
        let n = e.byteLength;
        if (!t || n < t) {
            yield e;
            return
        }
        let r = 0,
            i;
        for (; r < n;) i = r + t, yield e.slice(r, i), r = i
    },
    Mu = async function*(e, t) {
        for await (let n of Nu(e)) yield* ju(n, t)
    },
    Nu = async function*(e) {
        if (e[Symbol.asyncIterator]) {
            yield* e;
            return
        }
        let t = e.getReader();
        try {
            for (;;) {
                let {
                    done: e,
                    value: n
                } = await t.read();
                if (e) break;
                yield n
            }
        } finally {
            await t.cancel()
        }
    },
    Pu = (e, t, n, r) => {
        let i = Mu(e, t),
            a = 0,
            o, s = e => {
                o || (o = !0, r && r(e))
            };
        return new ReadableStream({
            async pull(e) {
                try {
                    let {
                        done: t,
                        value: r
                    } = await i.next();
                    if (t) {
                        s(), e.close();
                        return
                    }
                    let o = r.byteLength;
                    n && n(a += o), e.enqueue(new Uint8Array(r))
                } catch (e) {
                    throw s(e), e
                }
            },
            cancel(e) {
                return s(e), i.return()
            }
        }, {
            highWaterMark: 2
        })
    },
    Fu = e => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102,
    Iu = (e, t, n) => t + 2 < n && Fu(e.charCodeAt(t + 1)) && Fu(e.charCodeAt(t + 2)),
    Lu = e => e <= 57 ? e - 48 : (e & 223) - 55,
    Ru = e => e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || e === 43 || e === 47 || e === 45 || e === 95,
    zu = e => e === 9 || e === 10 || e === 12 || e === 13 || e === 32,
    Bu = e => {
        let t = Math.floor(e / 4),
            n = e % 4;
        return t * 3 + (n === 2 ? 1 : n === 3 ? 2 : 0)
    },
    Vu = e => {
        let t = e.length,
            n = 0;
        return t > 0 && e.charCodeAt(t - 1) === 61 && (n++, t > 1 && e.charCodeAt(t - 2) === 61 && n++), Math.floor((t - n) * 3 / 4)
    },
    Hu = e => {
        let t = e.length,
            n = 0,
            r = 0,
            i = !1;
        for (let a = 0; a < t; a++) {
            let o = e.charCodeAt(a);
            if (o === 37 && Iu(e, a, t) && (o = Lu(e.charCodeAt(a + 1)) * 16 + Lu(e.charCodeAt(a + 2)), a += 2), !zu(o)) {
                if (o === 61) {
                    r++;
                    continue
                }
                if (!Ru(o) || r > 0) {
                    i = !0;
                    continue
                }
                n++
            }
        }
        return i || r > 2 || r > 0 && (n + r) % 4 != 0 || n % 4 == 1 ? Vu(e) : Bu(n)
    },
    Uu = (e, t) => {
        if (!e || typeof e != `string` || !e.startsWith(`data:`)) return 0;
        let n = e.indexOf(`,`);
        if (n < 0) return 0;
        let r = e.slice(5, n),
            i = e.slice(n + 1);
        if (/;base64/i.test(r)) return t(i);
        let a = 0;
        for (let e = 0, t = i.length; e < t; e++) {
            let n = i.charCodeAt(e);
            if (n === 37 && Iu(i, e, t)) a += 1, e += 2;
            else if (n < 128) a += 1;
            else if (n < 2048) a += 2;
            else if (n >= 55296 && n <= 56319 && e + 1 < t) {
                let t = i.charCodeAt(e + 1);
                t >= 56320 && t <= 57343 ? (a += 4, e++) : a += 3
            } else a += 3
        }
        return a
    };

function Wu(e) {
    let t = typeof e == `string` ? e.indexOf(`#`) : -1;
    return Uu(t === -1 ? e : e.slice(0, t), Hu)
}
var Gu = `1.20.0`,
    Ku = 65536,
    qu = {
        cache: `default`,
        redirect: `follow`,
        referrer: `about:client`,
        referrerPolicy: ``,
        mode: `cors`,
        integrity: ``,
        keepalive: !1,
        priority: `auto`,
        window: null
    },
    {
        isFunction: Ju
    } = W,
    Yu = e => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16))),
    Xu = e => {
        if (!W.isString(e)) return e;
        try {
            return decodeURIComponent(e)
        } catch {
            return e
        }
    },
    Zu = (e, ...t) => {
        try {
            return !!e(...t)
        } catch {
            return !1
        }
    },
    Qu = e => {
        let t = e.indexOf(`://`),
            n = e;
        return t !== -1 && (n = n.slice(t + 3)), n.includes(`@`) || n.includes(`:`)
    },
    $u = e => {
        let t = W.global !== void 0 && W.global !== null ? W.global : globalThis,
            {
                ReadableStream: n,
                TextEncoder: r
            } = t;
        e = W.merge.call({
            skipUndefined: !0
        }, {
            Request: t.Request,
            Response: t.Response
        }, e);
        let {
            fetch: i,
            Request: a,
            Response: o
        } = e, s = i ? Ju(i) : typeof fetch == `function`, c = Ju(a), l = Ju(o);
        if (!s) return !1;
        let u = s && Ju(n),
            d = s && (typeof r == `function` ? (e => t => e.encode(t))(new r) : async e => new Uint8Array(await new a(e).arrayBuffer())),
            f = c && u && Zu(() => {
                let e = !1,
                    t = new a(q.origin, {
                        body: new n,
                        method: `POST`,
                        get duplex() {
                            return e = !0, `half`
                        }
                    }),
                    r = t.headers.has(`Content-Type`);
                return t.body != null && t.body.cancel(), e && !r
            }),
            p = l && u && Zu(() => W.isReadableStream(new o(``).body)),
            m = {
                stream: p && (e => e.body)
            };
        s && [`text`, `arrayBuffer`, `blob`, `formData`, `stream`].forEach(e => {
            !m[e] && (m[e] = (t, n) => {
                let r = t && t[e];
                if (r) return r.call(t);
                throw new K(`Response type '${e}' is not supported`, K.ERR_NOT_SUPPORT, n)
            })
        });
        let h = async e => {
                if (e == null) return 0;
                if (W.isBlob(e)) return e.size;
                if (W.isSpecCompliantForm(e)) return (await new a(q.origin, {
                    method: `POST`,
                    body: e
                }).arrayBuffer()).byteLength;
                if (W.isArrayBufferView(e) || W.isArrayBuffer(e)) return e.byteLength;
                if (W.isURLSearchParams(e) && (e += ``), W.isString(e)) return (await d(e)).byteLength
            },
            g = async (e, t) => W.toFiniteNumber(e.getContentLength()) ?? h(t);
        return async e => {
            let {
                url: t,
                method: n,
                data: s,
                signal: l,
                cancelToken: d,
                timeout: _,
                onDownloadProgress: v,
                onUploadProgress: y,
                responseType: b,
                headers: x,
                withCredentials: S = `same-origin`,
                fetchOptions: C,
                maxContentLength: w,
                maxBodyLength: T,
                maxRedirects: ee
            } = Ou(e), E = W.isNumber(w) && w > -1, te = W.isNumber(T) && T > -1, ne = t => W.hasOwnProp(e, t) ? e[t] : void 0, re = i || fetch;
            b = b ? (b + ``).toLowerCase() : `text`;
            let ie = Au([l, d && d.toAbortSignal()], _),
                D = null,
                ae = ie && ie.unsubscribe && (() => {
                    ie.unsubscribe()
                }),
                O, k = null,
                A = () => new K(`Request body larger than maxBodyLength limit`, K.ERR_BAD_REQUEST, e, D);
            try {
                let i, l = ne(`auth`);
                if (l && (i = {
                        username: W.getSafeProp(l, `username`) || ``,
                        password: W.getSafeProp(l, `password`) || ``
                    }), Qu(t)) {
                    let e = new URL(t, q.origin);
                    !i && (e.username || e.password) && (i = {
                        username: Xu(e.username),
                        password: Xu(e.password)
                    }), (e.username || e.password) && (e.username = ``, e.password = ``, t = e.href)
                }
                if (i && (x.delete(`authorization`), x.set(`Authorization`, `Basic ` + btoa(Yu((i.username || ``) + `:` + (i.password || ``))))), E && typeof t == `string` && t.startsWith(`data:`) && Wu(t) > w) throw new K(`maxContentLength size of ` + w + ` exceeded`, K.ERR_BAD_RESPONSE, e, D);
                if (te && n !== `get` && n !== `head`) {
                    let e = await h(s);
                    if (typeof e == `number` && isFinite(e) && (O = e, e > T)) throw A()
                }
                let d = te && (W.isReadableStream(s) || W.isStream(s)),
                    _ = (e, t, n) => Pu(e, Ku, e => {
                        if (te && e > T) throw k = A();
                        t && t(e)
                    }, n);
                if (f && n !== `get` && n !== `head` && (y || d)) {
                    if (O ??= await g(x, s), O !== 0 || d) {
                        let e = new a(t, {
                                method: `POST`,
                                body: s,
                                duplex: `half`
                            }),
                            n;
                        if (W.isFormData(s) && (n = e.headers.get(`content-type`)) && x.setContentType(n), e.body) {
                            let [t, n] = y && du(O, uu(fu(y))) || [];
                            s = _(e.body, t, n)
                        }
                    }
                } else if (d && !c && u && n !== `get` && n !== `head`) s = _(s);
                else if (d && c && !f && n !== `get` && n !== `head`) throw new K(`Stream request bodies are not supported by the current fetch implementation`, K.ERR_NOT_SUPPORT, e, D);
                W.isString(S) || (S = S ? `include` : `omit`);
                let j = c && `credentials` in a.prototype;
                if (W.isFormData(s)) {
                    let e = x.getContentType();
                    e && /^multipart\/form-data/i.test(e) && !/boundary=/i.test(e) && x.delete(`content-type`)
                }
                x.set(`User-Agent`, `axios/` + Gu, !1);
                let oe = C == null ? C : Object.assign(Object.create(null), C);
                oe && (delete oe.body, delete oe.headers, delete oe.method, delete oe.signal, delete oe.duplex, delete oe.credentials);
                let M = Object.assign(Object.create(null), oe, {
                    signal: ie,
                    method: n.toUpperCase(),
                    headers: nl(x.normalize()),
                    body: s,
                    duplex: `half`,
                    credentials: j ? S : void 0
                });
                c && (W.forEach(qu, (e, t) => {
                    M[t] === void 0 && (M[t] = e)
                }), M.signal === void 0 && (M.signal = null), M.body === void 0 && (M.body = null)), ee === 0 && (M.redirect = `manual`, oe && (oe.redirect = `manual`)), D = c && new a(t, M);
                let se = await (c ? re(D, oe) : re(t, M)),
                    ce = hl.from(se.headers);
                if (E) {
                    let t = W.toFiniteNumber(ce.getContentLength());
                    if (t != null && t > w) throw new K(`maxContentLength size of ` + w + ` exceeded`, K.ERR_BAD_RESPONSE, e, D)
                }
                let le = p && (b === `stream` || b === `response`);
                if (p && se.body && (v || E || le && ae)) {
                    let t = {};
                    [`status`, `statusText`, `headers`].forEach(e => {
                        t[e] = se[e]
                    });
                    let n = W.toFiniteNumber(ce.getContentLength()),
                        [r, i] = v && du(n, uu(fu(v), !0)) || [],
                        a = 0;
                    se = new o(Pu(se.body, Ku, t => {
                        if (E && (a = t, a > w)) throw new K(`maxContentLength size of ` + w + ` exceeded`, K.ERR_BAD_RESPONSE, e, D);
                        r && r(t)
                    }, () => {
                        i && i(), ae && ae()
                    }), t)
                }
                b ||= `text`;
                let ue = await m[W.findKey(m, b) || `text`](se, e);
                if (E && !p && !le) {
                    let t;
                    if (ue != null && (typeof ue.byteLength == `number` ? t = ue.byteLength : typeof ue.size == `number` ? t = ue.size : typeof ue == `string` && (t = typeof r == `function` ? new r().encode(ue).byteLength : ue.length)), typeof t == `number` && t > w) throw new K(`maxContentLength size of ` + w + ` exceeded`, K.ERR_BAD_RESPONSE, e, D)
                }
                return !le && ae && ae(), await new Promise((t, n) => {
                    iu(t, n, {
                        data: ue,
                        headers: hl.from(se.headers),
                        status: se.status,
                        statusText: se.statusText,
                        config: e,
                        request: D
                    })
                })
            } catch (t) {
                if (ae && ae(), ie && ie.aborted && ie.reason instanceof K) {
                    let n = ie.reason;
                    throw n.config = e, D && (n.request = D), t !== n && Object.defineProperty(n, "cause", {
                        __proto__: null,
                        value: t,
                        writable: !0,
                        enumerable: !1,
                        configurable: !0
                    }), n
                }
                if (k) throw D && !k.request && (k.request = D), k;
                if (t instanceof K) throw D && !t.request && (t.request = D), t;
                if (t && t.name === `TypeError` && /Load failed|fetch/i.test(t.message)) {
                    let n = new K(`Network Error`, K.ERR_NETWORK, e, D, t && t.response);
                    throw Object.defineProperty(n, "cause", {
                        __proto__: null,
                        value: t.cause || t,
                        writable: !0,
                        enumerable: !1,
                        configurable: !0
                    }), n
                }
                throw K.from(t, t && t.code, e, D, t && t.response)
            }
        }
    },
    ed = new Map,
    td = e => {
        let t = e && e.env || {},
            {
                fetch: n,
                Request: r,
                Response: i
            } = t,
            a = [r, i, n],
            o = a.length,
            s, c, l = ed;
        for (; o--;) s = a[o], c = l.get(s), c === void 0 && l.set(s, c = o ? new Map : $u(t)), l = c;
        return c
    };
td();
var nd = {
    http: null,
    xhr: ku,
    fetch: {
        get: td
    }
};
W.forEach(nd, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                __proto__: null,
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            __proto__: null,
            value: t
        })
    }
});
var rd = e => `- ${e}`,
    id = e => W.isFunction(e) || e === null || e === !1;

function ad(e, t) {
    e = W.isArray(e) ? e : [e];
    let {
        length: n
    } = e, r, i, a = {};
    for (let o = 0; o < n; o++) {
        r = e[o];
        let n;
        if (i = r, !id(r) && (i = nd[(n = String(r)).toLowerCase()], i === void 0)) throw new K(`Unknown adapter '${n}'`);
        if (i && (W.isFunction(i) || (i = i.get(t)))) break;
        a[n || `#` + o] = i
    }
    if (!i) {
        let e = Object.entries(a).map(([e, t]) => `adapter ${e} ` + (t === !1 ? `is not supported by the environment` : `is not available in the build`));
        throw new K(`There is no suitable adapter to dispatch the request ` + (n ? e.length > 1 ? `since :
` + e.map(rd).join(`
`) : ` ` + rd(e[0]) : `as no adapter specified`), K.ERR_NOT_SUPPORT)
    }
    return i
}
var od = {
    getAdapter: ad,
    adapters: nd
};

function sd(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new ru(null, e)
}

function cd(e) {
    let t = W.toSafeFlatObject(e);
    return sd(t), t.headers = hl.from(W.getSafeProp(t, `headers`)), t.data = tu.call(t, t.transformRequest), [`post`, `put`, `patch`].indexOf(t.method) !== -1 && t.headers.setContentType(`application/x-www-form-urlencoded`, !1), od.getAdapter(t.adapter || eu.adapter, t)(t).then(function(e) {
        sd(t), t.response = e;
        try {
            e.data = tu.call(t, t.transformResponse, e)
        } finally {
            delete t.response
        }
        return e.headers = hl.from(e.headers), e
    }, function(e) {
        if (!nu(e) && (sd(t), e && e.response)) {
            t.response = e.response;
            try {
                e.response.data = tu.call(t, t.transformResponse, e.response)
            } finally {
                delete t.response
            }
            e.response.headers = hl.from(e.response.headers)
        }
        return Promise.reject(e)
    })
}
var ld = {};
[`object`, `boolean`, `number`, `function`, `string`, `symbol`].forEach((e, t) => {
    ld[e] = function(n) {
        return typeof n === e || `a` + (t < 1 ? `n ` : ` `) + e
    }
});
var ud = {};
ld.transitional = function(e, t, n) {
    function r(e, t) {
        return `[Axios v` + Gu + `] Transitional option '` + e + `'` + t + (n ? `. ` + n : ``)
    }
    return (n, i, a) => {
        if (e === !1) throw new K(r(i, ` has been removed` + (t ? ` in ` + t : ``)), K.ERR_DEPRECATED);
        return t && !ud[i] && (ud[i] = !0, console.warn(r(i, ` has been deprecated since v` + t + ` and will be removed in the near future`))), !e || e(n, i, a)
    }
}, ld.spelling = function(e) {
    return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0)
};

function dd(e, t, n) {
    if (typeof e != `object` || !e) throw new K(`options must be an object`, K.ERR_BAD_OPTION_VALUE);
    let r = Object.keys(e),
        i = r.length;
    for (; i-- > 0;) {
        let a = r[i],
            o = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : void 0;
        if (o) {
            let t = e[a],
                n = t === void 0 || o(t, a, e);
            if (n !== !0) throw new K(`option ` + a + ` must be ` + n, K.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0) throw new K(`Unknown option ` + a, K.ERR_BAD_OPTION)
    }
}
var fd = {
        assertOptions: dd,
        validators: ld
    },
    pd = fd.validators,
    md = class {
        constructor(e) {
            this.defaults = e || {}, this.interceptors = {
                request: new Il,
                response: new Il
            }
        }
        async request(e, t) {
            try {
                return await this._request(e, t)
            } catch (e) {
                if (e instanceof Error) try {
                    let t = {};
                    Error.captureStackTrace ? Error.captureStackTrace(t) : t = Error();
                    let n = t.stack,
                        r = ``;
                    if (typeof n == `string`) {
                        let e = n.indexOf(`
`);
                        r = e === -1 ? `` : n.slice(e + 1)
                    }
                    if (!e.stack) e.stack = r;
                    else if (r) {
                        let t = r.indexOf(`
`),
                            n = t === -1 ? -1 : r.indexOf(`
`, t + 1),
                            i = n === -1 ? `` : r.slice(n + 1);
                        String(e.stack).endsWith(i) || (e.stack += `
` + r)
                    }
                } catch {}
                throw e
            }
        }
        _request(e, t) {
            typeof e == `string` ? (t ||= {}, t.url = e) : t = e || {}, t = wu(this.defaults, t);
            let {
                transitional: n,
                paramsSerializer: r,
                headers: i
            } = t;
            n !== void 0 && fd.assertOptions(n, {
                silentJSONParsing: pd.transitional(pd.boolean),
                forcedJSONParsing: pd.transitional(pd.boolean),
                clarifyTimeoutError: pd.transitional(pd.boolean),
                legacyInterceptorReqResOrdering: pd.transitional(pd.boolean),
                advertiseZstdAcceptEncoding: pd.transitional(pd.boolean),
                validateStatusUndefinedResolves: pd.transitional(pd.boolean)
            }, !1), r != null && (W.isFunction(r) ? t.paramsSerializer = {
                serialize: r
            } : fd.assertOptions(r, {
                encode: pd.function,
                serialize: pd.function
            }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls === void 0 ? t.allowAbsoluteUrls = !0 : t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls), fd.assertOptions(t, {
                baseUrl: pd.spelling(`baseURL`),
                withXsrfToken: pd.spelling(`withXSRFToken`)
            }, !0), t.method = (W.getSafeProp(t, `method`) || W.getSafeProp(this.defaults, `method`) || `get`).toLowerCase();
            let a = i && W.merge(i.common, i[t.method]);
            i && W.forEach(Zl.concat(`common`), e => {
                delete i[e]
            }), t.headers = hl.concat(a, i);
            let o = [],
                s = !0;
            this.interceptors.request.forEach(function(e) {
                if (typeof e.runWhen == `function` && e.runWhen(t) === !1) return;
                s &&= e.synchronous;
                let n = t.transitional || Ll;
                n && n.legacyInterceptorReqResOrdering ? o.unshift(e.fulfilled, e.rejected) : o.push(e.fulfilled, e.rejected)
            });
            let c = [];
            this.interceptors.response.forEach(function(e) {
                c.push(e.fulfilled, e.rejected)
            });
            let l, u = 0,
                d;
            if (!s) {
                let e = [cd.bind(this), void 0];
                for (e.unshift(...o), e.push(...c), d = e.length, l = Promise.resolve(t); u < d;) l = l.then(e[u++], e[u++]);
                return l
            }
            d = o.length;
            let f = t;
            for (; u < d;) {
                let e = o[u++],
                    t = o[u++];
                try {
                    f = e ? e(f) : f
                } catch (e) {
                    if (!t) {
                        l = Promise.reject(e);
                        break
                    }
                    try {
                        let n = t.call(this, e);
                        W.isThenable(n) && (l = Promise.resolve(n).then(() => cd.call(this, f)))
                    } catch (e) {
                        l = Promise.reject(e)
                    }
                    break
                }
            }
            if (!l) try {
                l = cd.call(this, f)
            } catch (e) {
                l = Promise.reject(e)
            }
            for (u = 0, d = c.length; u < d;) l = l.then(c[u++], c[u++]);
            return l
        }
        getUri(e) {
            return e = wu(this.defaults, e), jl(xu(e.baseURL, e.url, e.allowAbsoluteUrls, e), e.params, e.paramsSerializer)
        }
    };
W.forEach([`delete`, `get`, `head`, `options`], function(e) {
    md.prototype[e] = function(t, n) {
        return this.request(wu(n || {}, {
            method: e,
            url: t,
            data: n && W.hasOwnProp(n, `data`) ? n.data : void 0
        }))
    }
}), W.forEach([`post`, `put`, `patch`, `query`], function(e) {
    function t(t) {
        return function(n, r, i) {
            return this.request(wu(i || {}, {
                method: e,
                headers: t ? {
                    "Content-Type": `multipart/form-data`
                } : {},
                url: n,
                data: r
            }))
        }
    }
    md.prototype[e] = t(), e !== `query` && (md.prototype[e + `Form`] = t(!0))
});
var hd = class e {
    constructor(e) {
        if (typeof e != `function`) throw TypeError(`executor must be a function.`);
        let t;
        this.promise = new Promise(function(e) {
            t = e
        });
        let n = this;
        this.promise.then(e => {
            if (!n._listeners) return;
            let t = n._listeners.length;
            for (; t-- > 0;) n._listeners[t](e);
            n._listeners = null
        }), this.promise.then = e => {
            let t, r = new Promise(e => {
                n.subscribe(e), t = e
            }).then(e);
            return r.cancel = function() {
                n.unsubscribe(t)
            }, r
        }, e(function(e, r, i) {
            n.reason || (n.reason = new ru(e, r, i), t(n.reason))
        })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(e) {
        if (this.reason) {
            e(this.reason);
            return
        }
        this._listeners ? this._listeners.push(e) : this._listeners = [e]
    }
    unsubscribe(e) {
        if (!this._listeners) return;
        let t = this._listeners.indexOf(e);
        t !== -1 && this._listeners.splice(t, 1)
    }
    toAbortSignal() {
        let e = new AbortController,
            t = t => {
                e.abort(t)
            };
        return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal
    }
    static source() {
        let t;
        return {
            token: new e(function(e) {
                t = e
            }),
            cancel: t
        }
    }
};

function gd(e) {
    return function(t) {
        return e.apply(null, t)
    }
}

function _d(e) {
    return W.isObject(e) && e.isAxiosError === !0
}
var vd = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    ContentTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    UnprocessableContent: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerReturnsAnUnknownError: 520,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526
};
Object.entries(vd).forEach(([e, t]) => {
    vd[t] === void 0 && (vd[t] = e)
});

function yd(e) {
    let t = new md(e),
        n = As(md.prototype.request, t);
    return W.extend(n, md.prototype, t, {
        allOwnKeys: !0
    }), W.extend(n, t, null, {
        allOwnKeys: !0
    }), n.create = function(t) {
        return yd(wu(e, t))
    }, n
}
var bd = yd(eu);
bd.Axios = md, bd.CanceledError = ru, bd.CancelToken = hd, bd.isCancel = nu, bd.VERSION = Gu, bd.toFormData = El, bd.AxiosError = K, bd.Cancel = bd.CanceledError, bd.all = function(e) {
    return Promise.all(e)
}, bd.spread = gd, bd.isAxiosError = _d, bd.mergeConfig = wu, bd.AxiosHeaders = hl, bd.formToJSON = e => Xl(W.isHTMLForm(e) ? new FormData(e) : e), bd.getAdapter = od.getAdapter, bd.HttpStatusCode = vd, bd.default = bd;
var xd = typeof window > `u`,
    Sd = !xd && window.self !== window.top,
    Cd = !xd && typeof document > `u`,
    wd = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
    Td = [];
for (let e = 0; e < 256; ++e) Td.push((e + 256).toString(16).slice(1));

function Ed(e, t = 0) {
    return (Td[e[t + 0]] + Td[e[t + 1]] + Td[e[t + 2]] + Td[e[t + 3]] + `-` + Td[e[t + 4]] + Td[e[t + 5]] + `-` + Td[e[t + 6]] + Td[e[t + 7]] + `-` + Td[e[t + 8]] + Td[e[t + 9]] + `-` + Td[e[t + 10]] + Td[e[t + 11]] + Td[e[t + 12]] + Td[e[t + 13]] + Td[e[t + 14]] + Td[e[t + 15]]).toLowerCase()
}
var Dd, Od = new Uint8Array(16);

function kd() {
    if (!Dd) {
        if (typeof crypto > `u` || !crypto.getRandomValues) throw Error(`crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported`);
        Dd = crypto.getRandomValues.bind(crypto)
    }
    return Dd(Od)
}
var Ad = {
    randomUUID: typeof crypto < `u` && crypto.randomUUID && crypto.randomUUID.bind(crypto)
};

function jd(e, t, n) {
    e ||= {};
    let r = e.random ?? e.rng ?.() ?? kd();
    if (r.length < 16) throw Error(`Random bytes length must be >= 16`);
    if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
        if (n ||= 0, n < 0 || n + 16 > t.length) throw RangeError(`UUID byte range ${n}:${n+15} is out of buffer bounds`);
        for (let e = 0; e < 16; ++e) t[n + e] = r[e];
        return t
    }
    return Ed(r)
}

function Md(e, t, n) {
    return Ad.randomUUID && !t && !e ? Ad.randomUUID() : jd(e, t, n)
}
var Nd = typeof window < `u` ? window : {
    base44SharedInstances: {}
};

function Pd(e, t) {
    return Nd.base44SharedInstances ||= {}, Nd.base44SharedInstances[e] || (Nd.base44SharedInstances[e] = {
        instance: t()
    }), Nd.base44SharedInstances[e].instance
}
var Fd = `__user_heartbeat_event__`,
    Id = `__initialization_event__`,
    Ld = `__session_duration_event__`,
    Rd = `analytics-enable`,
    zd = `base44_analytics_session_id`,
    Bd = {
        enabled: !0,
        maxQueueSize: 1e3,
        throttleTime: 1e3,
        batchSize: 30,
        heartBeatInterval: 6e4
    },
    J = Pd(`analytics`, () => ({
        requestsQueue: [],
        isProcessing: !1,
        isHeartBeatProcessing: !1,
        wasInitializationTracked: !1,
        sessionContext: null,
        sessionStartTime: null,
        fallbackSessionId: null,
        config: { ...Bd,
            ...tf()
        }
    })),
    Vd = ({
        axiosClient: e,
        serverUrl: t,
        appId: n,
        userAuthModule: r,
        enabled: i
    }) => {
        let {
            maxQueueSize: a,
            throttleTime: o,
            batchSize: s
        } = J.config;
        if (!i || !J.config ?.enabled || Cd) return {
            track: () => {},
            cleanup: () => {}
        };
        let c, l = `${t}/api/apps/${n}/analytics/track/batch`,
            u = async t => {
                await e.request({
                    method: `POST`,
                    url: `/apps/${n}/analytics/track/batch`,
                    data: {
                        events: t
                    }
                })
            },
            d = e => {
                try {
                    let t = JSON.stringify({
                            events: e
                        }),
                        n = new Blob([t], {
                            type: `application/json`
                        });
                    return typeof navigator > `u` || t.length > 6e4 || !navigator.sendBeacon(l, n)
                } catch {
                    return !1
                }
            },
            f = async (e, t = {}) => {
                if (e.length === 0) return;
                let n = await ef(r),
                    i = e.map(Zd(n));
                try {
                    (!t.isBeacon || !d(i)) && await u(i)
                } catch {}
            },
            p = () => {
                Ud(f, {
                    throttleTime: o,
                    batchSize: s
                })
            },
            m = e => {
                if (J.requestsQueue.length >= a) return;
                let t = Xd();
                J.requestsQueue.push({ ...e,
                    ...t
                }), p()
            },
            h = () => {
                Ud(f, {
                    throttleTime: o,
                    batchSize: s
                }), c = Wd(m), Jd()
            },
            g = () => {
                Hd(), c ?.(), Yd(m);
                let e = J.requestsQueue.splice(0);
                f(e, {
                    isBeacon: !0
                })
            },
            _ = () => {
                typeof window > `u` || (document.visibilityState === `hidden` ? g() : document.visibilityState === `visible` && h())
            };
        return p(), c = Wd(m), Gd(m), typeof window < `u` && window.addEventListener(`visibilitychange`, _), {
            track: m,
            cleanup: () => {
                Hd(), c ?.(), typeof window < `u` && window.removeEventListener(`visibilitychange`, _)
            }
        }
    };

function Hd() {
    J.isProcessing = !1
}
async function Ud(e, t) {
    if (J.isProcessing) return;
    J.isProcessing = !0;
    let {
        throttleTime: n = 1e3,
        batchSize: r = 30
    } = t ?? {};
    for (; J.isProcessing && J.requestsQueue.length > 0;) {
        let t = J.requestsQueue.splice(0, r);
        t.length && await e(t), await new Promise(e => setTimeout(e, n))
    }
    J.isProcessing = !1
}

function Wd(e) {
    if (typeof window > `u` || J.isHeartBeatProcessing || (J.config.heartBeatInterval ?? 0) < 10) return () => {};
    J.isHeartBeatProcessing = !0;
    let t = setInterval(() => {
        e({
            eventName: Fd
        })
    }, J.config.heartBeatInterval);
    return () => {
        clearInterval(t), J.isHeartBeatProcessing = !1
    }
}

function Gd(e) {
    typeof window > `u` || J.wasInitializationTracked || (J.wasInitializationTracked = !0, e({
        eventName: Id,
        properties: {
            referrer: document == null ? void 0 : document.referrer,
            ...qd()
        }
    }))
}
var Kd = [`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `utm_id`, `gclid`, `gbraid`, `wbraid`, `gad_source`, `gad_campaignid`, `fbclid`, `msclkid`, `ttclid`, `li_fat_id`];

function qd() {
    try {
        let e = new URLSearchParams(window.location.search),
            t = {};
        for (let n of Kd) {
            let r = e.get(n);
            r && (t[n] = r.slice(0, 500))
        }
        return t
    } catch {
        return {}
    }
}

function Jd() {
    typeof window > `u` || J.sessionStartTime !== null || (J.sessionStartTime = new Date().toISOString())
}

function Yd(e) {
    if (typeof window > `u` || J.sessionStartTime === null) return;
    let t = new Date().getTime() - new Date(J.sessionStartTime).getTime();
    J.sessionStartTime = null, e({
        eventName: Ld,
        properties: {
            sessionDuration: t
        }
    })
}

function Xd() {
    return {
        timestamp: new Date().toISOString(),
        pageUrl: typeof window < `u` ? window.location ?.pathname ?? null : null
    }
}

function Zd(e) {
    return t => ({
        event_name: t.eventName,
        properties: t.properties,
        timestamp: t.timestamp,
        page_url: t.pageUrl,
        ...e
    })
}
var Qd = null;

function $d() {
    J.sessionContext = null, Qd = null
}
async function ef(e) {
    if (!J.sessionContext) {
        if (!e.hasToken()) return {
            user_id: null,
            session_id: rf()
        };
        if (!Qd) {
            let t = rf();
            Qd = e.me().then(e => ({
                user_id: e.id,
                session_id: t
            })).catch(() => ({
                user_id: null,
                session_id: t
            }))
        }
        let t = Qd,
            n = await t;
        return Qd === t && (J.sessionContext = n), n
    }
    return J.sessionContext
}

function tf() {
    if (typeof window > `u` || !window.location) return;
    let e = new URLSearchParams(window.location.search).get(Rd);
    if (e == null || !e.length) return;
    let t = new URLSearchParams(window.location.search);
    t.delete(Rd);
    let n = window.location.pathname + (t.toString() ? `?` + t.toString() : ``);
    return window.history.replaceState({}, ``, n), {
        enabled: e === `true`
    }
}

function nf() {
    return J.fallbackSessionId ??= wd()
}

function rf() {
    if (typeof window > `u`) return nf();
    try {
        let e = localStorage.getItem(zd);
        if (!e) {
            let e = wd();
            return localStorage.setItem(zd, e), e
        }
        return e
    } catch {
        return nf()
    }
}
var af = class extends Error {
    constructor(e, t, n, r, i) {
        super(e), this.name = `Base44Error`, this.status = t, this.code = n, this.data = r, this.originalError = i
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            code: this.code,
            data: this.data
        }
    }
};

function of ({
    baseURL: e,
    headers: t = {},
    token: n,
    interceptResponses: r = !0,
    onError: i
}) {
    let a = bd.create({
        baseURL: e,
        headers: {
            "Content-Type": `application/json`,
            Accept: `application/json`,
            ...t
        }
    });
    return n && (a.defaults.headers.common.Authorization = `Bearer ${n}`), a.interceptors.request.use(t => {
        typeof window < `u` && (window.location && t.headers.set(`X-Origin-URL`, window.location.href), t.headers.get(`Authorization`) || t.headers.set(`X-Base44-Anonymous-Id`, rf()));
        let n = Md();
        if (t.requestId = n, Sd) try {
            window.parent.postMessage({
                type: `api-request-start`,
                requestId: n,
                data: {
                    url: e + t.url,
                    method: t.method,
                    body: t.data instanceof FormData ? `[FormData object]` : t.data
                }
            }, `*`)
        } catch {}
        return t
    }), r && a.interceptors.response.use(e => {
        let t = e.config ?.requestId;
        try {
            Sd && t && window.parent.postMessage({
                type: `api-request-end`,
                requestId: t,
                data: {
                    statusCode: e.status,
                    response: e.data
                }
            }, `*`)
        } catch {}
        return e.data
    }, e => {
        var t;
        let n = e.response ?.data,
            r = new af(n ?.error ?.message || n ?.message || n ?.detail || e.message, e.response ?.status, n ?.error ?.code ?? n ?.code ?? ((t = e.response ?.headers) ?.get) ?.call(t, `x-base44-connector-error`) ?? e.response ?.headers ?.[`x-base44-connector-error`], n, e);
        return i ?.(r), Promise.reject(r)
    }), a
}

function sf(e) {
    let {
        axios: t,
        appId: n,
        getSocket: r
    } = e;
    return new Proxy({}, {
        get(e, i) {
            if (!(typeof i != `string` || i === `then` || i.startsWith(`_`))) return df(t, n, i, r)
        }
    })
}

function cf(e) {
    try {
        let t = JSON.parse(e);
        return {
            type: t.type,
            data: t.data,
            id: t.id || t.data ?.id,
            timestamp: t.timestamp || new Date().toISOString()
        }
    } catch (e) {
        return console.warn(`[Base44 SDK] Failed to parse realtime message:`, e), null
    }
}
var lf = 100;

function uf(e) {
    return typeof e == `object` && !!e
}

function df(e, t, n, r) {
    let i = `/apps/${t}/entities/${n}`,
        a = e => Array.isArray(e) ? e.join(`,`) : e,
        o = (t, n, r, o, s) => {
            let c = {};
            return s && (c.q = JSON.stringify(s)), t && (c.sort = t), n && (c.limit = n), r && (c.skip = r), o && (c.fields = a(o)), e.get(i, {
                params: c
            })
        },
        s = (t, n) => {
            let r = {};
            return n && (r.q = JSON.stringify(n)), r.limit = t.limit || lf, t.cursor && (r.cursor = t.cursor), `distinct` in t ? r.distinct = t.distinct : (t.sort && (r.sort = t.sort), t.fields && (r.fields = a(t.fields))), e.get(`${i}/v2/list`, {
                params: r
            })
        };
    return {
        async list(...e) {
            let [t, n, r, i] = e;
            return uf(t) ? s(t) : o(t, n, r, i)
        },
        async filter(e, ...t) {
            let [n, r, i, a] = t;
            return uf(n) ? s(n, e) : o(n, r, i, a, e)
        },
        async get(t) {
            return e.get(`${i}/${t}`)
        },
        async create(t) {
            return e.post(i, t)
        },
        async update(t, n) {
            return e.put(`${i}/${t}`, n)
        },
        async delete(t) {
            return e.delete(`${i}/${t}`)
        },
        async deleteMany(t) {
            return e.delete(i, {
                data: t
            })
        },
        async bulkCreate(t) {
            return e.post(`${i}/bulk`, t)
        },
        async updateMany(t, n) {
            return e.patch(`${i}/update-many`, {
                query: t,
                data: n
            })
        },
        async count(t) {
            let n = {};
            return t && (n.q = JSON.stringify(t)), (await e.get(`${i}/count`, {
                params: n
            })).count
        },
        async aggregate(t) {
            return e.post(`${i}/aggregate`, t)
        },
        async upsert(t, n) {
            return e.post(`${i}/upsert`, {
                records: t,
                key: n.key
            })
        },
        async bulkUpdate(t) {
            return e.put(`${i}/bulk`, t)
        },
        async importEntities(t) {
            let n = new FormData;
            return n.append(`file`, t, t.name), e.post(`${i}/import`, n, {
                headers: {
                    "Content-Type": `multipart/form-data`
                }
            })
        },
        subscribe(e) {
            let i = `entities:${t}:${n}`;
            return r().subscribeToRoom(i, {
                update_model: t => {
                    let r = cf(t.data);
                    if (r) {
                        r.type !== `delete` && r.data ?._oversize && console.error(`[Base44 SDK] Realtime broadcast for ${n}#${r.id} was oversize and got slimmed for transport. Fields >10 KB are empty and the rest of the record may be a stub. Call \`entities.${n}.get("${r.id}")\` to fetch the full record.`);
                        try {
                            e(r)
                        } catch (e) {
                            console.error(`[Base44 SDK] Subscription callback error:`, e)
                        }
                    }
                }
            })
        }
    }
}

function ff(e, t) {
    return {
        async call(n, r, i) {
            if (!n ?.trim()) throw Error(`Integration slug is required and cannot be empty`);
            if (!r ?.trim()) throw Error(`Operation ID is required and cannot be empty`);
            let {
                pathParams: a,
                queryParams: o,
                ...s
            } = i ?? {}, c = { ...s,
                ...a && {
                    path_params: a
                },
                ...o && {
                    query_params: o
                }
            };
            return await e.post(`/apps/${t}/integrations/custom/${n}/${r}`, c)
        }
    }
}

function pf(e, t) {
    let n = ff(e, t);
    return new Proxy({}, {
        get(r, i) {
            if (!(typeof i != `string` || i === `then` || i.startsWith(`_`))) return i === `custom` ? n : new Proxy({}, {
                get(n, r) {
                    if (!(typeof r != `string` || r === `then` || r.startsWith(`_`))) return async n => {
                        if (typeof n == `string`) throw Error(`Integration ${r} must receive an object with named parameters, received: ${n}`);
                        let a, o;
                        return n instanceof FormData || n && Object.values(n).some(e => e instanceof File) ? (a = new FormData, Object.keys(n).forEach(e => {
                            n[e] instanceof File ? a.append(e, n[e], n[e].name) : typeof n[e] == `object` && n[e] !== null ? a.append(e, JSON.stringify(n[e])) : a.append(e, n[e])
                        }), o = `multipart/form-data`) : (a = n, o = `application/json`), i === `Core` ? e.post(`/apps/${t}/integration-endpoints/Core/${r}`, a || n, {
                            headers: {
                                "Content-Type": o
                            }
                        }) : e.post(`/apps/${t}/integration-endpoints/installable/${i}/integration-endpoints/${r}`, a || n, {
                            headers: {
                                "Content-Type": o
                            }
                        })
                    }
                }
            })
        }
    })
}

function mf() {
    return typeof window > `u` ? !1 : window !== window.parent
}

function hf(e, t, n) {
    let r = Math.round(window.screenX + (window.outerWidth - 500) / 2),
        i = Math.round(window.screenY + (window.outerHeight - 600) / 2),
        a = window.open(e, `base44_auth`, `width=500,height=600,left=${r},top=${i},resizable=yes,scrollbars=yes`);
    if (!a) return;
    let o = () => {
            window.removeEventListener(`message`, s), clearInterval(c), a.closed || a.close()
        },
        s = e => {
            if (e.origin !== n || e.source !== a || !e.data ?.access_token) return;
            o();
            let r = new URL(t),
                {
                    access_token: i,
                    is_new_user: s
                } = e.data;
            r.searchParams.set(`access_token`, i), s != null && r.searchParams.set(`is_new_user`, String(s)), window.location.href = r.toString()
        },
        c = setInterval(() => {
            a.closed && o()
        }, 500);
    window.addEventListener(`message`, s)
}

function gf(e, t, n, r) {
    let i = null,
        a = () => {
            i = null
        },
        o = !!r.token;
    return {
        hasToken() {
            return o
        },
        async me() {
            let t = i ?? e.get(`/apps/${n}/entities/User/me`).finally(() => {
                i === t && (i = null)
            });
            return i = t, t
        },
        async updateMe(t) {
            return e.put(`/apps/${n}/entities/User/me`, t)
        },
        redirectToLogin(e) {
            if (typeof window > `u`) throw Error(`Login method can only be used in a browser environment`);
            let t = e ? new URL(e, window.location.origin).toString() : window.location.href,
                n = `${r.appBaseUrl}/login?from_url=${encodeURIComponent(t)}`;
            window.location.href = n
        },
        loginWithProvider(e, t = `/`) {
            let i = new URL(t, window.location.origin).toString(),
                a = `app_id=${n}&from_url=${encodeURIComponent(i)}`,
                o;
            o = e === `sso` ? `/apps/${n}/auth/sso/login` : `/apps/auth${e===`google`?``:`/${e}`}/login`;
            let s = `${r.appBaseUrl}/api${o}?${a}`;
            if (mf()) return hf(`${s}&popup_origin=${encodeURIComponent(window.location.origin)}`, i, window.location.origin);
            window.location.href = s
        },
        logout(t) {
            if (delete e.defaults.headers.common.Authorization, a(), $d(), o = !1, typeof window < `u`) {
                if (window.localStorage) try {
                    window.localStorage.removeItem(`base44_access_token`), window.localStorage.removeItem(`token`)
                } catch (e) {
                    console.error(`Failed to remove token from localStorage:`, e)
                }
                let e = t || window.location.href,
                    n = `${r.appBaseUrl}/api/apps/auth/logout?from_url=${encodeURIComponent(e)}`;
                window.location.href = n
            }
        },
        setToken(n, r = !0) {
            if (n && (a(), $d(), o = !0, e.defaults.headers.common.Authorization = `Bearer ${n}`, t.defaults.headers.common.Authorization = `Bearer ${n}`, r && typeof window < `u` && window.localStorage)) try {
                window.localStorage.setItem(`base44_access_token`, n), window.localStorage.setItem(`token`, n)
            } catch (e) {
                console.error(`Failed to save token to localStorage:`, e)
            }
        },
        async loginViaEmailPassword(t, r, i) {
            try {
                let {
                    access_token: a,
                    user: o
                } = await e.post(`/apps/${n}/auth/login`, {
                    email: t,
                    password: r,
                    ...i && {
                        turnstile_token: i
                    }
                });
                return a && this.setToken(a), {
                    access_token: a,
                    user: o
                }
            } catch (e) {
                throw e.response ?.status === 401 && await this.logout(), e
            }
        },
        async isAuthenticated() {
            try {
                return await this.me(), !0
            } catch {
                return !1
            }
        },
        inviteUser(t, r) {
            return e.post(`/apps/${n}/users/invite-user`, {
                user_email: t,
                role: r
            })
        },
        register(t) {
            return e.post(`/apps/${n}/auth/register`, t)
        },
        verifyOtp({
            email: t,
            otpCode: r
        }) {
            return e.post(`/apps/${n}/auth/verify-otp`, {
                email: t,
                otp_code: r
            })
        },
        resendOtp(t) {
            return e.post(`/apps/${n}/auth/resend-otp`, {
                email: t
            })
        },
        resetPasswordRequest(t) {
            return e.post(`/apps/${n}/auth/reset-password-request`, {
                email: t
            })
        },
        resetPassword({
            resetToken: t,
            newPassword: r
        }) {
            return e.post(`/apps/${n}/auth/reset-password`, {
                reset_token: t,
                new_password: r
            })
        },
        changePassword({
            userId: t,
            currentPassword: r,
            newPassword: i
        }) {
            return e.post(`/apps/${n}/auth/change-password`, {
                user_id: t,
                current_password: r,
                new_password: i
            })
        }
    }
}

function _f(e, t) {
    return {
        async getAccessToken(n) {
            let r = `/apps/${t}/auth/sso/accesstoken/${n}`;
            return e.get(r)
        },
        async getIdToken(n) {
            let r = `/apps/${t}/auth/sso/idtoken/${n}`;
            return e.get(r)
        }
    }
}
var vf = new Set([`GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`]);

function yf(e, t) {
    return {
        async getAccessToken(n) {
            if (!n || typeof n != `string`) throw Error(`Integration type is required and must be a string`);
            return (await e.get(`/apps/${t}/external-auth/tokens/${encodeURIComponent(n)}`)).access_token
        },
        async getConnection(n) {
            if (!n || typeof n != `string`) throw Error(`Integration type is required and must be a string`);
            let r = await e.get(`/apps/${t}/external-auth/tokens/${encodeURIComponent(n)}`);
            return {
                accessToken: r.access_token,
                connectionConfig: r.connection_config ?? null
            }
        },
        async getWorkspaceConnection(n) {
            if (!n || typeof n != `string`) throw Error(`Connector ID is required and must be a string`);
            let r = await e.get(`/apps/${t}/external-auth/tokens/connectors/${encodeURIComponent(n)}`);
            return {
                accessToken: r.access_token,
                connectionConfig: r.connection_config ?? null
            }
        },
        async getCurrentAppUserAccessToken(n) {
            if (!n || typeof n != `string`) throw Error(`Connector ID is required and must be a string`);
            return (await e.get(`/apps/${t}/app-user-auth/connectors/${encodeURIComponent(n)}/token`)).access_token
        },
        async getCurrentAppUserConnection(n) {
            if (!n || typeof n != `string`) throw Error(`Connector ID is required and must be a string`);
            let r = await e.get(`/apps/${t}/app-user-auth/connectors/${encodeURIComponent(n)}/token`);
            return {
                accessToken: r.access_token,
                connectionConfig: r.connection_config ?? null
            }
        },
        async callApi(n, r) {
            return bf(n, `Integration type`), xf(e, `/apps/${t}/connectors/${encodeURIComponent(n)}/call`, r)
        }
    }
}

function bf(e, t) {
    if (!e || typeof e != `string`) throw Error(`${t} is required and must be a string`)
}
async function xf(e, t, n) {
    if (!n || typeof n != `object`) throw Error(`Request is required and must be an object`);
    bf(n.path, `Request path`);
    let r = n.method ?? `GET`;
    if (!vf.has(r)) throw Error(`Request method must be one of GET, POST, PUT, PATCH, DELETE, or HEAD`);
    let i = await e.post(t, {
        method: r,
        ...n.host == null ? {} : {
            host: n.host
        },
        path: n.path,
        query: n.query ?? {},
        headers: n.headers ?? {},
        body: n.body ?? null
    });
    return {
        success: i.success,
        phase: i.phase,
        status: i.status_code ?? null,
        data: i.data,
        dataBase64: i.data_base64 ?? null,
        contentType: i.content_type ?? null,
        headers: i.headers ?? {},
        creditsCharged: i.credits_charged ?? 0
    }
}

function Sf(e, t) {
    return {
        async connectAppUser(n) {
            if (!n || typeof n != `string`) throw Error(`Connector ID is required and must be a string`);
            return (await e.post(`/apps/${t}/app-user-auth/connectors/${encodeURIComponent(n)}/initiate`)).redirect_url
        },
        async disconnectAppUser(n) {
            if (!n || typeof n != `string`) throw Error(`Connector ID is required and must be a string`);
            await e.delete(`/apps/${t}/app-user-auth/connectors/${encodeURIComponent(n)}`)
        }
    }
}

function Cf(e = {}) {
    let {
        storageKey: t = `base44_access_token`,
        paramName: n = `access_token`,
        saveToStorage: r = !0,
        removeFromUrl: i = !0
    } = e, a = null;
    if (typeof window < `u` && window.location) try {
        let e = new URLSearchParams(window.location.search);
        if (a = e.get(n), a) {
            if (r && wf(a, {
                    storageKey: t
                }), i) {
                e.delete(n);
                let t = `${window.location.pathname}${e.toString()?`?${e.toString()}`:``}${window.location.hash}`;
                window.history.replaceState({}, document.title, t)
            }
            return a
        }
    } catch (e) {
        console.error(`Error retrieving token from URL:`, e)
    }
    if (typeof window < `u` && window.localStorage) try {
        return a = window.localStorage.getItem(t), a
    } catch (e) {
        console.error(`Error retrieving token from local storage:`, e)
    }
    return null
}

function wf(e, t) {
    let {
        storageKey: n = `base44_access_token`
    } = t;
    if (typeof window > `u` || !window.localStorage || !e) return !1;
    try {
        return window.localStorage.setItem(n, e), window.localStorage.setItem(`token`, e), !0
    } catch (e) {
        return console.error(`Error saving token to local storage:`, e), !1
    }
}

function Tf({
    axios: e,
    serviceRoleAxios: t,
    appId: n,
    serverUrl: r,
    functionsVersion: i,
    platformHeaders: a
}) {
    let o = new Headers(a),
        s = e => {
            let t = e.defaults.headers.common.Authorization;
            return typeof t == `string` && t.startsWith(`Bearer `) ? t : null
        };
    return async function(a, c = {}) {
        Ef(a);
        let {
            fetch: l = fetch,
            ...u
        } = c, d = new Headers(c.headers), f = (e, t) => {
            t && !d.has(e) && d.set(e, t)
        };
        return f(`Authorization`, s(e)), f(`Base44-Service-Authorization`, s(t)), f(`Base44-App-Id`, n), f(`Base44-Api-Url`, r), f(`Base44-Functions-Version`, i), f(`Base44-State`, o.get(`Base44-State`)), f(`X-Data-Env`, o.get(`X-Data-Env`)), l(a, { ...u,
            headers: d
        })
    }
}

function Ef(e) {
    if (typeof e != `string` || e === ``) throw Error(`fetchWithAuth() requires a path, such as '/api/orders'.`);
    let t = e.replace(/[\t\n\r]/g, ``).replace(/^[\x00-\x20]+/, ``);
    if (!t.startsWith(`/`) || t.startsWith(`//`) || t.startsWith(`/\\`)) throw Error(`fetchWithAuth() only sends requests to your app's own origin, so your app's credentials never reach a third party. "${e}" is not a path on it — pass a relative path such as '/api/orders'. Use base44.functions.fetch() to call a Base44 backend function, or plain fetch() for another origin.`)
}

function Df(e, t, n) {
    let r = (e, t) => e ? `${String(e).replace(/\/$/,``)}${t}` : t,
        i = e => {
            let t = new Headers;
            if (n ?.getAuthHeaders) {
                let e = n.getAuthHeaders();
                Object.entries(e).forEach(([e, n]) => {
                    n != null && t.set(e, String(n))
                })
            }
            return e && new Headers(e).forEach((e, n) => {
                t.set(n, e)
            }), t
        };
    return {
        async invoke(n, r) {
            if (typeof r == `string`) throw Error(`Function ${n} must receive an object with named parameters, received: ${r}`);
            let i, a;
            return r instanceof FormData || r && Object.values(r).some(e => e instanceof File) ? (i = new FormData, Object.keys(r).forEach(e => {
                r[e] instanceof File ? i.append(e, r[e], r[e].name) : typeof r[e] == `object` && r[e] !== null ? i.append(e, JSON.stringify(r[e])) : i.append(e, r[e])
            }), a = `multipart/form-data`) : (i = r, a = `application/json`), e.post(`/apps/${t}/functions/${n}`, i || r, {
                headers: {
                    "Content-Type": a
                }
            })
        },
        async fetch(e, t = {}) {
            let a = `/functions${e.startsWith(`/`)?e:`/${e}`}`,
                o = i(t.headers),
                s = { ...t,
                    headers: o
                };
            return await fetch(r(n ?.baseURL, a), s)
        }
    }
}

function Of({
    axios: e,
    getSocket: t,
    appId: n,
    serverUrl: r,
    token: i
}) {
    let a = `/apps/${n}/agents`,
        o = {},
        s = () => e.get(`${a}/conversations`),
        c = t => e.get(`${a}/conversations/${t}`);
    return {
        getConversations: s,
        getConversation: c,
        listConversations: t => e.get(`${a}/conversations`, {
            params: t
        }),
        createConversation: t => e.post(`${a}/conversations`, t),
        addMessage: async (t, n) => e.post(`${a}/conversations/v2/${t.id}/messages`, n),
        subscribeToConversation: (e, n) => {
            let r = `/agent-conversations/${e}`,
                i = t(),
                a = c(e).then(t => (o[e] = t, t));
            return i.subscribeToRoom(r, {
                connect: () => {},
                update_model: async ({
                    data: t
                }) => {
                    let r = JSON.parse(t);
                    if (r._message) {
                        await a;
                        let t = r._message,
                            i = o[e];
                        if (i) {
                            let r = i.messages || [],
                                a = r.findIndex(e => e.id === t.id),
                                s = a === -1 ? [...r, t] : r.map((e, n) => n === a ? t : e);
                            o[e] = { ...i,
                                messages: s
                            }, n ?.(o[e])
                        }
                    }
                }
            })
        },
        getWhatsAppConnectURL: e => {
            let t = `${r}/api/apps/${n}/agents/${encodeURIComponent(e)}/whatsapp`,
                a = i ?? Cf();
            return a ? `${t}?token=${a}` : t
        },
        getTelegramConnectURL: e => {
            let t = `${r}/api/apps/${n}/agents/${encodeURIComponent(e)}/telegram`,
                a = i ?? Cf();
            return a ? `${t}?token=${a}` : t
        }
    }
}
var kf = {
    openai: `openai`,
    typesafe: `typesafe`
};

function Af({
    serverUrl: e,
    token: t,
    appId: n,
    headers: r = {}
}) {
    return {
        connection: ({
            provider: i = `openai`
        } = {}) => {
            if (!Object.prototype.hasOwnProperty.call(kf, i)) throw Error(`Unsupported AI Gateway provider: ${i}`);
            return {
                baseURL: `${e}/api/apps/${n}/ai/${kf[i]}/v1`,
                token: t ?? Cf() ?? ``,
                headers: { ...r
                }
            }
        }
    }
}

function jf(e, t) {
    let n = `/app-logs/${t}`;
    return {
        async logUserInApp(t) {
            await e.post(`${n}/log-user-in-app/${t}`)
        },
        async fetchLogs(t = {}) {
            return await e.get(n, {
                params: t
            })
        },
        async getStats(t = {}) {
            return await e.get(`${n}/stats`, {
                params: t
            })
        }
    }
}

function Mf(e, t) {
    return {
        async getPublicSettings() {
            return e.get(`/apps/public/prod/public-settings/by-id/${t}`)
        }
    }
}

function Nf(e, t) {
    return {
        async inviteUser(n, r) {
            if (r !== `user` && r !== `admin`) throw Error(`Invalid role: "${r}". Role must be either "user" or "admin".`);
            return await e.post(`/apps/${t}/runtime/users/invite-user`, {
                user_email: n,
                role: r
            })
        }
    }
}
var Pf = Object.create(null);
Pf.open = `0`, Pf.close = `1`, Pf.ping = `2`, Pf.pong = `3`, Pf.message = `4`, Pf.upgrade = `5`, Pf.noop = `6`;
var Ff = Object.create(null);
Object.keys(Pf).forEach(e => {
    Ff[Pf[e]] = e
});
var If = {
        type: `error`,
        data: `parser error`
    },
    Lf = typeof Blob == `function` || typeof Blob < `u` && Object.prototype.toString.call(Blob) === `[object BlobConstructor]`,
    Rf = typeof ArrayBuffer == `function`,
    zf = e => typeof ArrayBuffer.isView == `function` ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer,
    Bf = ({
        type: e,
        data: t
    }, n, r) => Lf && t instanceof Blob ? n ? r(t) : Vf(t, r) : Rf && (t instanceof ArrayBuffer || zf(t)) ? n ? r(t) : Vf(new Blob([t]), r) : r(Pf[e] + (t || ``)),
    Vf = (e, t) => {
        let n = new FileReader;
        return n.onload = function() {
            let e = n.result.split(`,`)[1];
            t(`b` + (e || ``))
        }, n.readAsDataURL(e)
    };

function Hf(e) {
    return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
}
var Uf;

function Wf(e, t) {
    if (Lf && e.data instanceof Blob) return e.data.arrayBuffer().then(Hf).then(t);
    if (Rf && (e.data instanceof ArrayBuffer || zf(e.data))) return t(Hf(e.data));
    Bf(e, !1, e => {
        Uf ||= new TextEncoder, t(Uf.encode(e))
    })
}
var Gf = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,
    Kf = typeof Uint8Array > `u` ? [] : new Uint8Array(256);
for (let e = 0; e < 64; e++) Kf[Gf.charCodeAt(e)] = e;
var qf = e => {
        let t = e.length * .75,
            n = e.length,
            r, i = 0,
            a, o, s, c;
        e[e.length - 1] === `=` && (t--, e[e.length - 2] === `=` && t--);
        let l = new ArrayBuffer(t),
            u = new Uint8Array(l);
        for (r = 0; r < n; r += 4) a = Kf[e.charCodeAt(r)], o = Kf[e.charCodeAt(r + 1)], s = Kf[e.charCodeAt(r + 2)], c = Kf[e.charCodeAt(r + 3)], u[i++] = a << 2 | o >> 4, u[i++] = (o & 15) << 4 | s >> 2, u[i++] = (s & 3) << 6 | c & 63;
        return l
    },
    Jf = typeof ArrayBuffer == `function`,
    Yf = (e, t) => {
        if (typeof e != `string`) return {
            type: `message`,
            data: Zf(e, t)
        };
        let n = e.charAt(0);
        return n === `b` ? {
            type: `message`,
            data: Xf(e.substring(1), t)
        } : Ff[n] ? e.length > 1 ? {
            type: Ff[n],
            data: e.substring(1)
        } : {
            type: Ff[n]
        } : If
    },
    Xf = (e, t) => Jf ? Zf(qf(e), t) : {
        base64: !0,
        data: e
    },
    Zf = (e, t) => {
        switch (t) {
            case `blob`:
                return e instanceof Blob ? e : new Blob([e]);
            default:
                return e instanceof ArrayBuffer ? e : e.buffer
        }
    },
    Qf = ``,
    $f = (e, t) => {
        let n = e.length,
            r = Array(n),
            i = 0;
        e.forEach((e, a) => {
            Bf(e, !1, e => {
                r[a] = e, ++i === n && t(r.join(Qf))
            })
        })
    },
    ep = (e, t) => {
        let n = e.split(Qf),
            r = [];
        for (let e = 0; e < n.length; e++) {
            let i = Yf(n[e], t);
            if (r.push(i), i.type === `error`) break
        }
        return r
    };

function tp() {
    return new TransformStream({
        transform(e, t) {
            Wf(e, n => {
                let r = n.length,
                    i;
                if (r < 126) i = new Uint8Array(1), new DataView(i.buffer).setUint8(0, r);
                else if (r < 65536) {
                    i = new Uint8Array(3);
                    let e = new DataView(i.buffer);
                    e.setUint8(0, 126), e.setUint16(1, r)
                } else {
                    i = new Uint8Array(9);
                    let e = new DataView(i.buffer);
                    e.setUint8(0, 127), e.setBigUint64(1, BigInt(r))
                }
                e.data && typeof e.data != `string` && (i[0] |= 128), t.enqueue(i), t.enqueue(n)
            })
        }
    })
}
var np;

function rp(e) {
    return e.reduce((e, t) => e + t.length, 0)
}

function ip(e, t) {
    if (e[0].length === t) return e.shift();
    let n = new Uint8Array(t),
        r = 0;
    for (let i = 0; i < t; i++) n[i] = e[0][r++], r === e[0].length && (e.shift(), r = 0);
    return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n
}

function ap(e, t) {
    np ||= new TextDecoder;
    let n = [],
        r = 0,
        i = -1,
        a = !1;
    return new TransformStream({
        transform(o, s) {
            for (n.push(o);;) {
                if (r === 0) {
                    if (rp(n) < 1) break;
                    let e = ip(n, 1);
                    a = (e[0] & 128) == 128, i = e[0] & 127, r = i < 126 ? 3 : i === 126 ? 1 : 2
                } else if (r === 1) {
                    if (rp(n) < 2) break;
                    let e = ip(n, 2);
                    i = new DataView(e.buffer, e.byteOffset, e.length).getUint16(0), r = 3
                } else if (r === 2) {
                    if (rp(n) < 8) break;
                    let e = ip(n, 8),
                        t = new DataView(e.buffer, e.byteOffset, e.length),
                        a = t.getUint32(0);
                    if (a > 2 ** 21 - 1) {
                        s.enqueue(If);
                        break
                    }
                    i = a * 2 ** 32 + t.getUint32(4), r = 3
                } else {
                    if (rp(n) < i) break;
                    let e = ip(n, i);
                    s.enqueue(Yf(a ? e : np.decode(e), t)), r = 0
                }
                if (i === 0 || i > e) {
                    s.enqueue(If);
                    break
                }
            }
        }
    })
}

function op(e) {
    if (e) return sp(e)
}

function sp(e) {
    for (var t in op.prototype) e[t] = op.prototype[t];
    return e
}
op.prototype.on = op.prototype.addEventListener = function(e, t) {
    return this._callbacks = this._callbacks || {}, (this._callbacks[`$` + e] = this._callbacks[`$` + e] || []).push(t), this
}, op.prototype.once = function(e, t) {
    function n() {
        this.off(e, n), t.apply(this, arguments)
    }
    return n.fn = t, this.on(e, n), this
}, op.prototype.off = op.prototype.removeListener = op.prototype.removeAllListeners = op.prototype.removeEventListener = function(e, t) {
    if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
    var n = this._callbacks[`$` + e];
    if (!n) return this;
    if (arguments.length == 1) return delete this._callbacks[`$` + e], this;
    for (var r, i = 0; i < n.length; i++)
        if (r = n[i], r === t || r.fn === t) {
            n.splice(i, 1);
            break
        }
    return n.length === 0 && delete this._callbacks[`$` + e], this
}, op.prototype.emit = function(e) {
    this._callbacks = this._callbacks || {};
    for (var t = Array(arguments.length - 1), n = this._callbacks[`$` + e], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    if (n) {
        n = n.slice(0);
        for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, t)
    }
    return this
}, op.prototype.emitReserved = op.prototype.emit, op.prototype.listeners = function(e) {
    return this._callbacks = this._callbacks || {}, this._callbacks[`$` + e] || []
}, op.prototype.hasListeners = function(e) {
    return !!this.listeners(e).length
};
var cp = typeof Promise == `function` && typeof Promise.resolve == `function` ? e => Promise.resolve().then(e) : (e, t) => t(e, 0),
    lp = typeof self < `u` ? self : typeof window < `u` ? window : Function(`return this`)(),
    up = `arraybuffer`;

function dp(e, ...t) {
    return t.reduce((t, n) => (e.hasOwnProperty(n) && (t[n] = e[n]), t), {})
}
var fp = lp.setTimeout,
    pp = lp.clearTimeout;

function mp(e, t) {
    t.useNativeTimers ? (e.setTimeoutFn = fp.bind(lp), e.clearTimeoutFn = pp.bind(lp)) : (e.setTimeoutFn = lp.setTimeout.bind(lp), e.clearTimeoutFn = lp.clearTimeout.bind(lp))
}
var hp = 1.33;

function gp(e) {
    return typeof e == `string` ? _p(e) : Math.ceil((e.byteLength || e.size) * hp)
}

function _p(e) {
    let t = 0,
        n = 0;
    for (let r = 0, i = e.length; r < i; r++) t = e.charCodeAt(r), t < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (r++, n += 4);
    return n
}

function vp() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5)
}

function yp(e) {
    let t = ``;
    for (let n in e) e.hasOwnProperty(n) && (t.length && (t += `&`), t += encodeURIComponent(n) + `=` + encodeURIComponent(e[n]));
    return t
}

function bp(e) {
    let t = {},
        n = e.split(`&`);
    for (let e = 0, r = n.length; e < r; e++) {
        let r = n[e].split(`=`);
        t[decodeURIComponent(r[0])] = decodeURIComponent(r[1])
    }
    return t
}
var xp = class extends Error {
        constructor(e, t, n) {
            super(e), this.description = t, this.context = n, this.type = `TransportError`
        }
    },
    Sp = class extends op {
        constructor(e) {
            super(), this.writable = !1, mp(this, e), this.opts = e, this.query = e.query, this.socket = e.socket, this.supportsBinary = !e.forceBase64
        }
        onError(e, t, n) {
            return super.emitReserved(`error`, new xp(e, t, n)), this
        }
        open() {
            return this.readyState = `opening`, this.doOpen(), this
        }
        close() {
            return (this.readyState === `opening` || this.readyState === `open`) && (this.doClose(), this.onClose()), this
        }
        send(e) {
            this.readyState === `open` && this.write(e)
        }
        onOpen() {
            this.readyState = `open`, this.writable = !0, super.emitReserved(`open`)
        }
        onData(e) {
            let t = Yf(e, this.socket.binaryType);
            this.onPacket(t)
        }
        onPacket(e) {
            super.emitReserved(`packet`, e)
        }
        onClose(e) {
            this.readyState = `closed`, super.emitReserved(`close`, e)
        }
        pause(e) {}
        createUri(e, t = {}) {
            return e + `://` + this._hostname() + this._port() + this.opts.path + this._query(t)
        }
        _hostname() {
            let e = this.opts.hostname;
            return e.indexOf(`:`) === -1 ? e : `[` + e + `]`
        }
        _port() {
            return this.opts.port && (this.opts.secure && Number(this.opts.port) !== 443 || !this.opts.secure && Number(this.opts.port) !== 80) ? `:` + this.opts.port : ``
        }
        _query(e) {
            let t = yp(e);
            return t.length ? `?` + t : ``
        }
    },
    Cp = class extends Sp {
        constructor() {
            super(...arguments), this._polling = !1
        }
        get name() {
            return `polling`
        }
        doOpen() {
            this._poll()
        }
        pause(e) {
            this.readyState = `pausing`;
            let t = () => {
                this.readyState = `paused`, e()
            };
            if (this._polling || !this.writable) {
                let e = 0;
                this._polling && (e++, this.once(`pollComplete`, function() {
                    --e || t()
                })), this.writable || (e++, this.once(`drain`, function() {
                    --e || t()
                }))
            } else t()
        }
        _poll() {
            this._polling = !0, this.doPoll(), this.emitReserved(`poll`)
        }
        onData(e) {
            ep(e, this.socket.binaryType).forEach(e => {
                if (this.readyState === `opening` && e.type === `open` && this.onOpen(), e.type === `close`) return this.onClose({
                    description: `transport closed by the server`
                }), !1;
                this.onPacket(e)
            }), this.readyState !== `closed` && (this._polling = !1, this.emitReserved(`pollComplete`), this.readyState === `open` && this._poll())
        }
        doClose() {
            let e = () => {
                this.write([{
                    type: `close`
                }])
            };
            this.readyState === `open` ? e() : this.once(`open`, e)
        }
        write(e) {
            this.writable = !1, $f(e, e => {
                this.doWrite(e, () => {
                    this.writable = !0, this.emitReserved(`drain`)
                })
            })
        }
        uri() {
            let e = this.opts.secure ? `https` : `http`,
                t = this.query || {};
            return !1 !== this.opts.timestampRequests && (t[this.opts.timestampParam] = vp()), !this.supportsBinary && !t.sid && (t.b64 = 1), this.createUri(e, t)
        }
    },
    wp = !1;
try {
    wp = typeof XMLHttpRequest < `u` && `withCredentials` in new XMLHttpRequest
} catch {}
var Tp = wp;

function Ep() {}
var Dp = class extends Cp {
        constructor(e) {
            if (super(e), typeof location < `u`) {
                let t = location.protocol === `https:`,
                    n = location.port;
                n ||= t ? `443` : `80`, this.xd = typeof location < `u` && e.hostname !== location.hostname || n !== e.port
            }
        }
        doWrite(e, t) {
            let n = this.request({
                method: `POST`,
                data: e
            });
            n.on(`success`, t), n.on(`error`, (e, t) => {
                this.onError(`xhr post error`, e, t)
            })
        }
        doPoll() {
            let e = this.request();
            e.on(`data`, this.onData.bind(this)), e.on(`error`, (e, t) => {
                this.onError(`xhr poll error`, e, t)
            }), this.pollXhr = e
        }
    },
    Op = class e extends op {
        constructor(e, t, n) {
            super(), this.createRequest = e, mp(this, n), this._opts = n, this._method = n.method || `GET`, this._uri = t, this._data = n.data === void 0 ? null : n.data, this._create()
        }
        _create() {
            var t;
            let n = dp(this._opts, `agent`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`, `autoUnref`);
            n.xdomain = !!this._opts.xd;
            let r = this._xhr = this.createRequest(n);
            try {
                r.open(this._method, this._uri, !0);
                try {
                    if (this._opts.extraHeaders) {
                        r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
                        for (let e in this._opts.extraHeaders) this._opts.extraHeaders.hasOwnProperty(e) && r.setRequestHeader(e, this._opts.extraHeaders[e])
                    }
                } catch {}
                if (this._method === `POST`) try {
                    r.setRequestHeader(`Content-type`, `text/plain;charset=UTF-8`)
                } catch {}
                try {
                    r.setRequestHeader(`Accept`, `*/*`)
                } catch {}(t = this._opts.cookieJar) == null || t.addCookies(r), `withCredentials` in r && (r.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (r.timeout = this._opts.requestTimeout), r.onreadystatechange = () => {
                    var e;
                    r.readyState === 3 && ((e = this._opts.cookieJar) == null || e.parseCookies(r.getResponseHeader(`set-cookie`))), r.readyState === 4 && (r.status === 200 || r.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
                        this._onError(typeof r.status == `number` ? r.status : 0)
                    }, 0))
                }, r.send(this._data)
            } catch (e) {
                this.setTimeoutFn(() => {
                    this._onError(e)
                }, 0);
                return
            }
            typeof document < `u` && (this._index = e.requestsCount++, e.requests[this._index] = this)
        }
        _onError(e) {
            this.emitReserved(`error`, e, this._xhr), this._cleanup(!0)
        }
        _cleanup(t) {
            if (this._xhr !== void 0 && this._xhr !== null) {
                if (this._xhr.onreadystatechange = Ep, t) try {
                    this._xhr.abort()
                } catch {}
                typeof document < `u` && delete e.requests[this._index], this._xhr = null
            }
        }
        _onLoad() {
            let e = this._xhr.responseText;
            e !== null && (this.emitReserved(`data`, e), this.emitReserved(`success`), this._cleanup())
        }
        abort() {
            this._cleanup()
        }
    };
if (Op.requestsCount = 0, Op.requests = {}, typeof document < `u`) {
    if (typeof attachEvent == `function`) attachEvent(`onunload`, kp);
    else if (typeof addEventListener == `function`) {
        let e = `onpagehide` in lp ? `pagehide` : `unload`;
        addEventListener(e, kp, !1)
    }
}

function kp() {
    for (let e in Op.requests) Op.requests.hasOwnProperty(e) && Op.requests[e].abort()
}
var Ap = (function() {
        let e = Mp({
            xdomain: !1
        });
        return e && e.responseType !== null
    })(),
    jp = class extends Dp {
        constructor(e) {
            super(e);
            let t = e && e.forceBase64;
            this.supportsBinary = Ap && !t
        }
        request(e = {}) {
            return Object.assign(e, {
                xd: this.xd
            }, this.opts), new Op(Mp, this.uri(), e)
        }
    };

function Mp(e) {
    let t = e.xdomain;
    try {
        if (typeof XMLHttpRequest < `u` && (!t || Tp)) return new XMLHttpRequest
    } catch {}
    if (!t) try {
        return new lp[[`Active`, `Object`].join(`X`)](`Microsoft.XMLHTTP`)
    } catch {}
}
var Np = typeof navigator < `u` && typeof navigator.product == `string` && navigator.product.toLowerCase() === `reactnative`,
    Pp = class extends Sp {
        get name() {
            return `websocket`
        }
        doOpen() {
            let e = this.uri(),
                t = this.opts.protocols,
                n = Np ? {} : dp(this.opts, `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`, `localAddress`, `protocolVersion`, `origin`, `maxPayload`, `family`, `checkServerIdentity`);
            this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
            try {
                this.ws = this.createSocket(e, t, n)
            } catch (e) {
                return this.emitReserved(`error`, e)
            }
            this.ws.binaryType = this.socket.binaryType, this.addEventListeners()
        }
        addEventListeners() {
            this.ws.onopen = () => {
                this.opts.autoUnref && this.ws._socket.unref(), this.onOpen()
            }, this.ws.onclose = e => this.onClose({
                description: `websocket connection closed`,
                context: e
            }), this.ws.onmessage = e => this.onData(e.data), this.ws.onerror = e => this.onError(`websocket error`, e)
        }
        write(e) {
            this.writable = !1;
            for (let t = 0; t < e.length; t++) {
                let n = e[t],
                    r = t === e.length - 1;
                Bf(n, this.supportsBinary, e => {
                    try {
                        this.doWrite(n, e)
                    } catch {}
                    r && cp(() => {
                        this.writable = !0, this.emitReserved(`drain`)
                    }, this.setTimeoutFn)
                })
            }
        }
        doClose() {
            this.ws !== void 0 && (this.ws.onerror = () => {}, this.ws.close(), this.ws = null)
        }
        uri() {
            let e = this.opts.secure ? `wss` : `ws`,
                t = this.query || {};
            return this.opts.timestampRequests && (t[this.opts.timestampParam] = vp()), this.supportsBinary || (t.b64 = 1), this.createUri(e, t)
        }
    },
    Fp = lp.WebSocket || lp.MozWebSocket,
    Ip = {
        websocket: class extends Pp {
            createSocket(e, t, n) {
                return Np ? new Fp(e, t, n) : t ? new Fp(e, t) : new Fp(e)
            }
            doWrite(e, t) {
                this.ws.send(t)
            }
        },
        webtransport: class extends Sp {
            get name() {
                return `webtransport`
            }
            doOpen() {
                try {
                    this._transport = new WebTransport(this.createUri(`https`), this.opts.transportOptions[this.name])
                } catch (e) {
                    return this.emitReserved(`error`, e)
                }
                this._transport.closed.then(() => {
                    this.onClose()
                }).catch(e => {
                    this.onError(`webtransport error`, e)
                }), this._transport.ready.then(() => {
                    this._transport.createBidirectionalStream().then(e => {
                        let t = ap(2 ** 53 - 1, this.socket.binaryType),
                            n = e.readable.pipeThrough(t).getReader(),
                            r = tp();
                        r.readable.pipeTo(e.writable), this._writer = r.writable.getWriter();
                        let i = () => {
                            n.read().then(({
                                done: e,
                                value: t
                            }) => {
                                e || (this.onPacket(t), i())
                            }).catch(e => {})
                        };
                        i();
                        let a = {
                            type: `open`
                        };
                        this.query.sid && (a.data = `{"sid":"${this.query.sid}"}`), this._writer.write(a).then(() => this.onOpen())
                    })
                })
            }
            write(e) {
                this.writable = !1;
                for (let t = 0; t < e.length; t++) {
                    let n = e[t],
                        r = t === e.length - 1;
                    this._writer.write(n).then(() => {
                        r && cp(() => {
                            this.writable = !0, this.emitReserved(`drain`)
                        }, this.setTimeoutFn)
                    })
                }
            }
            doClose() {
                var e;
                (e = this._transport) == null || e.close()
            }
        },
        polling: jp
    },
    Lp = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    Rp = [`source`, `protocol`, `authority`, `userInfo`, `user`, `password`, `host`, `port`, `relative`, `path`, `directory`, `file`, `query`, `anchor`];

function zp(e) {
    if (e.length > 8e3) throw `URI too long`;
    let t = e,
        n = e.indexOf(`[`),
        r = e.indexOf(`]`);
    n != -1 && r != -1 && (e = e.substring(0, n) + e.substring(n, r).replace(/:/g, `;`) + e.substring(r, e.length));
    let i = Lp.exec(e || ``),
        a = {},
        o = 14;
    for (; o--;) a[Rp[o]] = i[o] || ``;
    return n != -1 && r != -1 && (a.source = t, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, `:`), a.authority = a.authority.replace(`[`, ``).replace(`]`, ``).replace(/;/g, `:`), a.ipv6uri = !0), a.pathNames = Bp(a, a.path), a.queryKey = Vp(a, a.query), a
}

function Bp(e, t) {
    let n = t.replace(/\/{2,9}/g, `/`).split(`/`);
    return (t.slice(0, 1) == `/` || t.length === 0) && n.splice(0, 1), t.slice(-1) == `/` && n.splice(n.length - 1, 1), n
}

function Vp(e, t) {
    let n = {};
    return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(e, t, r) {
        t && (n[t] = r)
    }), n
}
var Hp = typeof addEventListener == `function` && typeof removeEventListener == `function`,
    Up = [];
Hp && addEventListener(`offline`, () => {
    Up.forEach(e => e())
}, !1);
var Wp = class e extends op {
    constructor(e, t) {
        if (super(), this.binaryType = up, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, e && typeof e == `object` && (t = e, e = null), e) {
            let n = zp(e);
            t.hostname = n.host, t.secure = n.protocol === `https` || n.protocol === `wss`, t.port = n.port, n.query && (t.query = n.query)
        } else t.host && (t.hostname = zp(t.host).host);
        mp(this, t), this.secure = t.secure == null ? typeof location < `u` && location.protocol === `https:` : t.secure, t.hostname && !t.port && (t.port = this.secure ? `443` : `80`), this.hostname = t.hostname || (typeof location < `u` ? location.hostname : `localhost`), this.port = t.port || (typeof location < `u` && location.port ? location.port : this.secure ? `443` : `80`), this.transports = [], this._transportsByName = {}, t.transports.forEach(e => {
            let t = e.prototype.name;
            this.transports.push(t), this._transportsByName[t] = e
        }), this.opts = Object.assign({
            path: `/engine.io`,
            agent: !1,
            withCredentials: !1,
            upgrade: !0,
            timestampParam: `t`,
            rememberUpgrade: !1,
            addTrailingSlash: !0,
            rejectUnauthorized: !0,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: !1
        }, t), this.opts.path = this.opts.path.replace(/\/$/, ``) + (this.opts.addTrailingSlash ? `/` : ``), typeof this.opts.query == `string` && (this.opts.query = bp(this.opts.query)), Hp && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
            this.transport && (this.transport.removeAllListeners(), this.transport.close())
        }, addEventListener(`beforeunload`, this._beforeunloadEventListener, !1)), this.hostname !== `localhost` && (this._offlineEventListener = () => {
            this._onClose(`transport close`, {
                description: `network connection lost`
            })
        }, Up.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open()
    }
    createTransport(e) {
        let t = Object.assign({}, this.opts.query);
        t.EIO = 4, t.transport = e, this.id && (t.sid = this.id);
        let n = Object.assign({}, this.opts, {
            query: t,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        }, this.opts.transportOptions[e]);
        return new this._transportsByName[e](n)
    }
    _open() {
        if (this.transports.length === 0) {
            this.setTimeoutFn(() => {
                this.emitReserved(`error`, `No transports available`)
            }, 0);
            return
        }
        let t = this.opts.rememberUpgrade && e.priorWebsocketSuccess && this.transports.indexOf(`websocket`) !== -1 ? `websocket` : this.transports[0];
        this.readyState = `opening`;
        let n = this.createTransport(t);
        n.open(), this.setTransport(n)
    }
    setTransport(e) {
        this.transport && this.transport.removeAllListeners(), this.transport = e, e.on(`drain`, this._onDrain.bind(this)).on(`packet`, this._onPacket.bind(this)).on(`error`, this._onError.bind(this)).on(`close`, e => this._onClose(`transport close`, e))
    }
    onOpen() {
        this.readyState = `open`, e.priorWebsocketSuccess = this.transport.name === `websocket`, this.emitReserved(`open`), this.flush()
    }
    _onPacket(e) {
        if (this.readyState === `opening` || this.readyState === `open` || this.readyState === `closing`) switch (this.emitReserved(`packet`, e), this.emitReserved(`heartbeat`), e.type) {
            case `open`:
                this.onHandshake(JSON.parse(e.data));
                break;
            case `ping`:
                this._sendPacket(`pong`), this.emitReserved(`ping`), this.emitReserved(`pong`), this._resetPingTimeout();
                break;
            case `error`:
                let t = Error(`server error`);
                t.code = e.data, this._onError(t);
                break;
            case `message`:
                this.emitReserved(`data`, e.data), this.emitReserved(`message`, e.data)
        }
    }
    onHandshake(e) {
        this.emitReserved(`handshake`, e), this.id = e.sid, this.transport.query.sid = e.sid, this._pingInterval = e.pingInterval, this._pingTimeout = e.pingTimeout, this._maxPayload = e.maxPayload, this.onOpen(), this.readyState !== `closed` && this._resetPingTimeout()
    }
    _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        let e = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + e, this._pingTimeoutTimer = this.setTimeoutFn(() => {
            this._onClose(`ping timeout`)
        }, e), this.opts.autoUnref && this._pingTimeoutTimer.unref()
    }
    _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved(`drain`) : this.flush()
    }
    flush() {
        if (this.readyState !== `closed` && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            let e = this._getWritablePackets();
            this.transport.send(e), this._prevBufferLen = e.length, this.emitReserved(`flush`)
        }
    }
    _getWritablePackets() {
        if (!(this._maxPayload && this.transport.name === `polling` && this.writeBuffer.length > 1)) return this.writeBuffer;
        let e = 1;
        for (let t = 0; t < this.writeBuffer.length; t++) {
            let n = this.writeBuffer[t].data;
            if (n && (e += gp(n)), t > 0 && e > this._maxPayload) return this.writeBuffer.slice(0, t);
            e += 2
        }
        return this.writeBuffer
    }
    _hasPingExpired() {
        if (!this._pingTimeoutTime) return !0;
        let e = Date.now() > this._pingTimeoutTime;
        return e && (this._pingTimeoutTime = 0, cp(() => {
            this._onClose(`ping timeout`)
        }, this.setTimeoutFn)), e
    }
    write(e, t, n) {
        return this._sendPacket(`message`, e, t, n), this
    }
    send(e, t, n) {
        return this._sendPacket(`message`, e, t, n), this
    }
    _sendPacket(e, t, n, r) {
        if (typeof t == `function` && (r = t, t = void 0), typeof n == `function` && (r = n, n = null), this.readyState === `closing` || this.readyState === `closed`) return;
        n ||= {}, n.compress = !1 !== n.compress;
        let i = {
            type: e,
            data: t,
            options: n
        };
        this.emitReserved(`packetCreate`, i), this.writeBuffer.push(i), r && this.once(`flush`, r), this.flush()
    }
    close() {
        let e = () => {
                this._onClose(`forced close`), this.transport.close()
            },
            t = () => {
                this.off(`upgrade`, t), this.off(`upgradeError`, t), e()
            },
            n = () => {
                this.once(`upgrade`, t), this.once(`upgradeError`, t)
            };
        return (this.readyState === `opening` || this.readyState === `open`) && (this.readyState = `closing`, this.writeBuffer.length ? this.once(`drain`, () => {
            this.upgrading ? n() : e()
        }) : this.upgrading ? n() : e()), this
    }
    _onError(t) {
        if (e.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === `opening`) return this.transports.shift(), this._open();
        this.emitReserved(`error`, t), this._onClose(`transport error`, t)
    }
    _onClose(e, t) {
        if (this.readyState === `opening` || this.readyState === `open` || this.readyState === `closing`) {
            if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners(`close`), this.transport.close(), this.transport.removeAllListeners(), Hp && (this._beforeunloadEventListener && removeEventListener(`beforeunload`, this._beforeunloadEventListener, !1), this._offlineEventListener)) {
                let e = Up.indexOf(this._offlineEventListener);
                e !== -1 && Up.splice(e, 1)
            }
            this.readyState = `closed`, this.id = null, this.emitReserved(`close`, e, t), this.writeBuffer = [], this._prevBufferLen = 0
        }
    }
};
Wp.protocol = 4;
var Gp = class extends Wp {
        constructor() {
            super(...arguments), this._upgrades = []
        }
        onOpen() {
            if (super.onOpen(), this.readyState === `open` && this.opts.upgrade)
                for (let e = 0; e < this._upgrades.length; e++) this._probe(this._upgrades[e])
        }
        _probe(e) {
            let t = this.createTransport(e),
                n = !1;
            Wp.priorWebsocketSuccess = !1;
            let r = () => {
                n || (t.send([{
                    type: `ping`,
                    data: `probe`
                }]), t.once(`packet`, e => {
                    if (!n)
                        if (e.type === `pong` && e.data === `probe`) {
                            if (this.upgrading = !0, this.emitReserved(`upgrading`, t), !t) return;
                            Wp.priorWebsocketSuccess = t.name === `websocket`, this.transport.pause(() => {
                                n || this.readyState !== `closed` && (l(), this.setTransport(t), t.send([{
                                    type: `upgrade`
                                }]), this.emitReserved(`upgrade`, t), t = null, this.upgrading = !1, this.flush())
                            })
                        } else {
                            let e = Error(`probe error`);
                            e.transport = t.name, this.emitReserved(`upgradeError`, e)
                        }
                }))
            };

            function i() {
                n || (n = !0, l(), t.close(), t = null)
            }
            let a = e => {
                let n = Error(`probe error: ` + e);
                n.transport = t.name, i(), this.emitReserved(`upgradeError`, n)
            };

            function o() {
                a(`transport closed`)
            }

            function s() {
                a(`socket closed`)
            }

            function c(e) {
                t && e.name !== t.name && i()
            }
            let l = () => {
                t.removeListener(`open`, r), t.removeListener(`error`, a), t.removeListener(`close`, o), this.off(`close`, s), this.off(`upgrading`, c)
            };
            t.once(`open`, r), t.once(`error`, a), t.once(`close`, o), this.once(`close`, s), this.once(`upgrading`, c), this._upgrades.indexOf(`webtransport`) !== -1 && e !== `webtransport` ? this.setTimeoutFn(() => {
                n || t.open()
            }, 200) : t.open()
        }
        onHandshake(e) {
            this._upgrades = this._filterUpgrades(e.upgrades), super.onHandshake(e)
        }
        _filterUpgrades(e) {
            let t = [];
            for (let n = 0; n < e.length; n++) ~this.transports.indexOf(e[n]) && t.push(e[n]);
            return t
        }
    },
    Kp = class extends Gp {
        constructor(e, t = {}) {
            let n = typeof e == `object`,
                r = n ? { ...e
                } : { ...t
                };
            (!r.transports || r.transports && typeof r.transports[0] == `string`) && (r.transports = (r.transports || [`polling`, `websocket`, `webtransport`]).map(e => Ip[e]).filter(e => !!e)), super(n ? r : e, r)
        }
    };
Kp.protocol;

function qp(e, t = ``, n) {
    let r = e;
    n ||= typeof location < `u` && location, e ??= n.protocol + `//` + n.host, typeof e == `string` && (e.charAt(0) === `/` && (e = e.charAt(1) === `/` ? n.protocol + e : n.host + e), /^(https?|wss?):\/\//.test(e) || (e = n === void 0 ? `https://` + e : n.protocol + `//` + e), r = zp(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = `80` : /^(http|ws)s$/.test(r.protocol) && (r.port = `443`)), r.path = r.path || `/`;
    let i = r.host.indexOf(`:`) === -1 ? r.host : `[` + r.host + `]`;
    return r.id = r.protocol + `://` + i + `:` + r.port + t, r.href = r.protocol + `://` + i + (n && n.port === r.port ? `` : `:` + r.port), r
}
var Jp = typeof ArrayBuffer == `function`,
    Yp = e => typeof ArrayBuffer.isView == `function` ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer,
    Xp = Object.prototype.toString,
    Zp = typeof Blob == `function` || typeof Blob < `u` && Xp.call(Blob) === `[object BlobConstructor]`,
    Qp = typeof File == `function` || typeof File < `u` && Xp.call(File) === `[object FileConstructor]`;

function $p(e) {
    return Jp && (e instanceof ArrayBuffer || Yp(e)) || Zp && e instanceof Blob || Qp && e instanceof File
}

function em(e, t) {
    if (!e || typeof e != `object`) return !1;
    if (Array.isArray(e)) {
        for (let t = 0, n = e.length; t < n; t++)
            if (em(e[t])) return !0;
        return !1
    }
    if ($p(e)) return !0;
    if (e.toJSON && typeof e.toJSON == `function` && arguments.length === 1) return em(e.toJSON(), !0);
    for (let t in e)
        if (Object.prototype.hasOwnProperty.call(e, t) && em(e[t])) return !0;
    return !1
}

function tm(e) {
    let t = [],
        n = e.data,
        r = e;
    return r.data = nm(n, t), r.attachments = t.length, {
        packet: r,
        buffers: t
    }
}

function nm(e, t, n) {
    if (!e) return e;
    if ($p(e)) {
        let n = {
            _placeholder: !0,
            num: t.length
        };
        return t.push(e), n
    }
    if (Array.isArray(e)) {
        let n = Array(e.length);
        for (let r = 0; r < e.length; r++) n[r] = nm(e[r], t);
        return n
    }
    if (typeof e == `object` && !(e instanceof Date)) {
        if (e.toJSON && typeof e.toJSON == `function` && !n) return nm(e.toJSON(), t, !0);
        let r = {};
        for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && (r[n] = nm(e[n], t));
        return r
    }
    return e
}

function rm(e, t) {
    return e.data = im(e.data, t), delete e.attachments, e
}

function im(e, t) {
    if (!e) return e;
    if (e && e._placeholder === !0) {
        if (typeof e.num == `number` && e.num >= 0 && e.num < t.length) return t[e.num];
        throw Error(`illegal attachments`)
    }
    if (Array.isArray(e))
        for (let n = 0; n < e.length; n++) e[n] = im(e[n], t);
    else if (typeof e == `object`)
        for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && (e[n] = im(e[n], t));
    return e
}
var am = s({
        Decoder: () => cm,
        Encoder: () => sm,
        PacketType: () => Y,
        isPacketValid: () => hm,
        protocol: () => 5
    }),
    om = [`connect`, `connect_error`, `disconnect`, `disconnecting`, `newListener`, `removeListener`],
    Y;
(function(e) {
    e[e.CONNECT = 0] = `CONNECT`, e[e.DISCONNECT = 1] = `DISCONNECT`, e[e.EVENT = 2] = `EVENT`, e[e.ACK = 3] = `ACK`, e[e.CONNECT_ERROR = 4] = `CONNECT_ERROR`, e[e.BINARY_EVENT = 5] = `BINARY_EVENT`, e[e.BINARY_ACK = 6] = `BINARY_ACK`
})(Y ||= {});
var sm = class {
        constructor(e) {
            this.replacer = e
        }
        encode(e) {
            return (e.type === Y.EVENT || e.type === Y.ACK) && em(e) ? this.encodeAsBinary({
                type: e.type === Y.EVENT ? Y.BINARY_EVENT : Y.BINARY_ACK,
                nsp: e.nsp,
                data: e.data,
                id: e.id
            }) : [this.encodeAsString(e)]
        }
        encodeAsString(e) {
            let t = `` + e.type;
            return (e.type === Y.BINARY_EVENT || e.type === Y.BINARY_ACK) && (t += e.attachments + `-`), e.nsp && e.nsp !== `/` && (t += e.nsp + `,`), e.id != null && (t += e.id), e.data != null && (t += JSON.stringify(e.data, this.replacer)), t
        }
        encodeAsBinary(e) {
            let t = tm(e),
                n = this.encodeAsString(t.packet),
                r = t.buffers;
            return r.unshift(n), r
        }
    },
    cm = class e extends op {
        constructor(e) {
            super(), this.opts = Object.assign({
                reviver: void 0,
                maxAttachments: 10
            }, typeof e == `function` ? {
                reviver: e
            } : e)
        }
        add(e) {
            let t;
            if (typeof e == `string`) {
                if (this.reconstructor) throw Error(`got plaintext data when reconstructing a packet`);
                t = this.decodeString(e);
                let n = t.type === Y.BINARY_EVENT;
                n || t.type === Y.BINARY_ACK ? (t.type = n ? Y.EVENT : Y.ACK, this.reconstructor = new lm(t)) : super.emitReserved(`decoded`, t)
            } else if ($p(e) || e.base64)
                if (this.reconstructor) t = this.reconstructor.takeBinaryData(e), t && (this.reconstructor = null, super.emitReserved(`decoded`, t));
                else throw Error(`got binary data when not reconstructing a packet`);
            else throw Error(`Unknown type: ` + e)
        }
        decodeString(t) {
            let n = 0,
                r = {
                    type: Number(t.charAt(0))
                };
            if (Y[r.type] === void 0) throw Error(`unknown packet type ` + r.type);
            if (r.type === Y.BINARY_EVENT || r.type === Y.BINARY_ACK) {
                let e = n + 1;
                for (; t.charAt(++n) !== `-` && n != t.length;);
                let i = t.substring(e, n);
                if (i != Number(i) || t.charAt(n) !== `-`) throw Error(`Illegal attachments`);
                let a = Number(i);
                if (!dm(a) || a < 1) throw Error(`Illegal attachments`);
                if (a > this.opts.maxAttachments) throw Error(`too many attachments`);
                r.attachments = a
            }
            if (t.charAt(n + 1) === `/`) {
                let e = n + 1;
                for (; ++n && t.charAt(n) !== `,` && n !== t.length;);
                r.nsp = t.substring(e, n)
            } else r.nsp = `/`;
            let i = t.charAt(n + 1);
            if (i !== `` && Number(i) == i) {
                let e = n + 1;
                for (; ++n;) {
                    let e = t.charAt(n);
                    if (e == null || Number(e) != e) {
                        --n;
                        break
                    }
                    if (n === t.length) break
                }
                r.id = Number(t.substring(e, n + 1))
            }
            if (t.charAt(++n)) {
                let i = this.tryParse(t.substr(n));
                if (e.isPayloadValid(r.type, i)) r.data = i;
                else throw Error(`invalid payload`)
            }
            return r
        }
        tryParse(e) {
            try {
                return JSON.parse(e, this.opts.reviver)
            } catch {
                return !1
            }
        }
        static isPayloadValid(e, t) {
            switch (e) {
                case Y.CONNECT:
                    return pm(t);
                case Y.DISCONNECT:
                    return t === void 0;
                case Y.CONNECT_ERROR:
                    return typeof t == `string` || pm(t);
                case Y.EVENT:
                case Y.BINARY_EVENT:
                    return Array.isArray(t) && (typeof t[0] == `number` || typeof t[0] == `string` && om.indexOf(t[0]) === -1);
                case Y.ACK:
                case Y.BINARY_ACK:
                    return Array.isArray(t)
            }
        }
        destroy() {
            this.reconstructor &&= (this.reconstructor.finishedReconstruction(), null)
        }
    },
    lm = class {
        constructor(e) {
            this.packet = e, this.buffers = [], this.reconPack = e
        }
        takeBinaryData(e) {
            if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
                let e = rm(this.reconPack, this.buffers);
                return this.finishedReconstruction(), e
            }
            return null
        }
        finishedReconstruction() {
            this.reconPack = null, this.buffers = []
        }
    };

function um(e) {
    return typeof e == `string`
}
var dm = Number.isInteger || function(e) {
    return typeof e == `number` && isFinite(e) && Math.floor(e) === e
};

function fm(e) {
    return e === void 0 || dm(e)
}

function pm(e) {
    return Object.prototype.toString.call(e) === `[object Object]`
}

function mm(e, t) {
    switch (e) {
        case Y.CONNECT:
            return t === void 0 || pm(t);
        case Y.DISCONNECT:
            return t === void 0;
        case Y.EVENT:
            return Array.isArray(t) && (typeof t[0] == `number` || typeof t[0] == `string` && om.indexOf(t[0]) === -1);
        case Y.ACK:
            return Array.isArray(t);
        case Y.CONNECT_ERROR:
            return typeof t == `string` || pm(t);
        default:
            return !1
    }
}

function hm(e) {
    return um(e.nsp) && fm(e.id) && mm(e.type, e.data)
}

function gm(e, t, n) {
    return e.on(t, n),
        function() {
            e.off(t, n)
        }
}
var _m = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        newListener: 1,
        removeListener: 1
    }),
    vm = class extends op {
        constructor(e, t, n) {
            super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = t, n && n.auth && (this.auth = n.auth), this._opts = Object.assign({}, n), this.io._autoConnect && this.open()
        }
        get disconnected() {
            return !this.connected
        }
        subEvents() {
            if (this.subs) return;
            let e = this.io;
            this.subs = [gm(e, `open`, this.onopen.bind(this)), gm(e, `packet`, this.onpacket.bind(this)), gm(e, `error`, this.onerror.bind(this)), gm(e, `close`, this.onclose.bind(this))]
        }
        get active() {
            return !!this.subs
        }
        connect() {
            return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === `open` && this.onopen(), this)
        }
        open() {
            return this.connect()
        }
        send(...e) {
            return e.unshift(`message`), this.emit.apply(this, e), this
        }
        emit(e, ...t) {
            if (_m.hasOwnProperty(e)) throw Error(`"` + e.toString() + `" is a reserved event name`);
            if (t.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) return this._addToQueue(t), this;
            let n = {
                type: Y.EVENT,
                data: t
            };
            if (n.options = {}, n.options.compress = this.flags.compress !== !1, typeof t[t.length - 1] == `function`) {
                let e = this.ids++,
                    r = t.pop();
                this._registerAckCallback(e, r), n.id = e
            }
            let r = this.io.engine ?.transport ?.writable,
                i = this.connected && !this.io.engine ?._hasPingExpired();
            return this.flags.volatile && !r || (i ? (this.notifyOutgoingListeners(n), this.packet(n)) : this.sendBuffer.push(n)), this.flags = {}, this
        }
        _registerAckCallback(e, t) {
            let n = this.flags.timeout ?? this._opts.ackTimeout;
            if (n === void 0) {
                this.acks[e] = t;
                return
            }
            let r = this.io.setTimeoutFn(() => {
                    delete this.acks[e];
                    for (let t = 0; t < this.sendBuffer.length; t++) this.sendBuffer[t].id === e && this.sendBuffer.splice(t, 1);
                    t.call(this, Error(`operation has timed out`))
                }, n),
                i = (...e) => {
                    this.io.clearTimeoutFn(r), t.apply(this, e)
                };
            i.withError = !0, this.acks[e] = i
        }
        emitWithAck(e, ...t) {
            return new Promise((n, r) => {
                let i = (e, t) => e ? r(e) : n(t);
                i.withError = !0, t.push(i), this.emit(e, ...t)
            })
        }
        _addToQueue(e) {
            let t;
            typeof e[e.length - 1] == `function` && (t = e.pop());
            let n = {
                id: this._queueSeq++,
                tryCount: 0,
                pending: !1,
                args: e,
                flags: Object.assign({
                    fromQueue: !0
                }, this.flags)
            };
            e.push((e, ...r) => (this._queue[0], e === null ? (this._queue.shift(), t && t(null, ...r)) : n.tryCount > this._opts.retries && (this._queue.shift(), t && t(e)), n.pending = !1, this._drainQueue())), this._queue.push(n), this._drainQueue()
        }
        _drainQueue(e = !1) {
            if (!this.connected || this._queue.length === 0) return;
            let t = this._queue[0];
            t.pending && !e || (t.pending = !0, t.tryCount++, this.flags = t.flags, this.emit.apply(this, t.args))
        }
        packet(e) {
            e.nsp = this.nsp, this.io._packet(e)
        }
        onopen() {
            typeof this.auth == `function` ? this.auth(e => {
                this._sendConnectPacket(e)
            }) : this._sendConnectPacket(this.auth)
        }
        _sendConnectPacket(e) {
            this.packet({
                type: Y.CONNECT,
                data: this._pid ? Object.assign({
                    pid: this._pid,
                    offset: this._lastOffset
                }, e) : e
            })
        }
        onerror(e) {
            this.connected || this.emitReserved(`connect_error`, e)
        }
        onclose(e, t) {
            this.connected = !1, delete this.id, this.emitReserved(`disconnect`, e, t), this._clearAcks()
        }
        _clearAcks() {
            Object.keys(this.acks).forEach(e => {
                if (!this.sendBuffer.some(t => String(t.id) === e)) {
                    let t = this.acks[e];
                    delete this.acks[e], t.withError && t.call(this, Error(`socket has been disconnected`))
                }
            })
        }
        onpacket(e) {
            if (e.nsp === this.nsp) switch (e.type) {
                case Y.CONNECT:
                    e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved(`connect_error`, Error(`It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)`));
                    break;
                case Y.EVENT:
                case Y.BINARY_EVENT:
                    this.onevent(e);
                    break;
                case Y.ACK:
                case Y.BINARY_ACK:
                    this.onack(e);
                    break;
                case Y.DISCONNECT:
                    this.ondisconnect();
                    break;
                case Y.CONNECT_ERROR:
                    this.destroy();
                    let t = Error(e.data.message);
                    t.data = e.data.data, this.emitReserved(`connect_error`, t)
            }
        }
        onevent(e) {
            let t = e.data || [];
            e.id != null && t.push(this.ack(e.id)), this.connected ? this.emitEvent(t) : this.receiveBuffer.push(Object.freeze(t))
        }
        emitEvent(e) {
            if (this._anyListeners && this._anyListeners.length) {
                let t = this._anyListeners.slice();
                for (let n of t) n.apply(this, e)
            }
            super.emit.apply(this, e), this._pid && e.length && typeof e[e.length - 1] == `string` && (this._lastOffset = e[e.length - 1])
        }
        ack(e) {
            let t = this,
                n = !1;
            return function(...r) {
                n || (n = !0, t.packet({
                    type: Y.ACK,
                    id: e,
                    data: r
                }))
            }
        }
        onack(e) {
            let t = this.acks[e.id];
            typeof t == `function` && (delete this.acks[e.id], t.withError && e.data.unshift(null), t.apply(this, e.data))
        }
        onconnect(e, t) {
            this.id = e, this.recovered = t && this._pid === t, this._pid = t, this.connected = !0, this.emitBuffered(), this._drainQueue(!0), this.emitReserved(`connect`)
        }
        emitBuffered() {
            this.receiveBuffer.forEach(e => this.emitEvent(e)), this.receiveBuffer = [], this.sendBuffer.forEach(e => {
                this.notifyOutgoingListeners(e), this.packet(e)
            }), this.sendBuffer = []
        }
        ondisconnect() {
            this.destroy(), this.onclose(`io server disconnect`)
        }
        destroy() {
            this.subs &&= (this.subs.forEach(e => e()), void 0), this.io._destroy(this)
        }
        disconnect() {
            return this.connected && this.packet({
                type: Y.DISCONNECT
            }), this.destroy(), this.connected && this.onclose(`io client disconnect`), this
        }
        close() {
            return this.disconnect()
        }
        compress(e) {
            return this.flags.compress = e, this
        }
        get volatile() {
            return this.flags.volatile = !0, this
        }
        timeout(e) {
            return this.flags.timeout = e, this
        }
        onAny(e) {
            return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this
        }
        prependAny(e) {
            return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this
        }
        offAny(e) {
            if (!this._anyListeners) return this;
            if (e) {
                let t = this._anyListeners;
                for (let n = 0; n < t.length; n++)
                    if (e === t[n]) return t.splice(n, 1), this
            } else this._anyListeners = [];
            return this
        }
        listenersAny() {
            return this._anyListeners || []
        }
        onAnyOutgoing(e) {
            return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e), this
        }
        prependAnyOutgoing(e) {
            return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e), this
        }
        offAnyOutgoing(e) {
            if (!this._anyOutgoingListeners) return this;
            if (e) {
                let t = this._anyOutgoingListeners;
                for (let n = 0; n < t.length; n++)
                    if (e === t[n]) return t.splice(n, 1), this
            } else this._anyOutgoingListeners = [];
            return this
        }
        listenersAnyOutgoing() {
            return this._anyOutgoingListeners || []
        }
        notifyOutgoingListeners(e) {
            if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
                let t = this._anyOutgoingListeners.slice();
                for (let n of t) n.apply(this, e.data)
            }
        }
    };

function ym(e) {
    e ||= {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
}
ym.prototype.duration = function() {
    var e = this.ms * this.factor ** +this.attempts++;
    if (this.jitter) {
        var t = Math.random(),
            n = Math.floor(t * this.jitter * e);
        e = Math.floor(t * 10) & 1 ? e + n : e - n
    }
    return Math.min(e, this.max) | 0
}, ym.prototype.reset = function() {
    this.attempts = 0
}, ym.prototype.setMin = function(e) {
    this.ms = e
}, ym.prototype.setMax = function(e) {
    this.max = e
}, ym.prototype.setJitter = function(e) {
    this.jitter = e
};
var bm = class extends op {
        constructor(e, t) {
            super(), this.nsps = {}, this.subs = [], e && typeof e == `object` && (t = e, e = void 0), t ||= {}, t.path = t.path || `/socket.io`, this.opts = t, mp(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor(t.randomizationFactor ??.5), this.backoff = new ym({
                min: this.reconnectionDelay(),
                max: this.reconnectionDelayMax(),
                jitter: this.randomizationFactor()
            }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this._readyState = `closed`, this.uri = e;
            let n = t.parser || am;
            this.encoder = new n.Encoder, this.decoder = new n.Decoder, this._autoConnect = t.autoConnect !== !1, this._autoConnect && this.open()
        }
        reconnection(e) {
            return arguments.length ? (this._reconnection = !!e, e || (this.skipReconnect = !0), this) : this._reconnection
        }
        reconnectionAttempts(e) {
            return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this)
        }
        reconnectionDelay(e) {
            var t;
            return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e, (t = this.backoff) == null || t.setMin(e), this)
        }
        randomizationFactor(e) {
            var t;
            return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e, (t = this.backoff) == null || t.setJitter(e), this)
        }
        reconnectionDelayMax(e) {
            var t;
            return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, (t = this.backoff) == null || t.setMax(e), this)
        }
        timeout(e) {
            return arguments.length ? (this._timeout = e, this) : this._timeout
        }
        maybeReconnectOnOpen() {
            !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
        }
        open(e) {
            if (~this._readyState.indexOf(`open`)) return this;
            this.engine = new Kp(this.uri, this.opts);
            let t = this.engine,
                n = this;
            this._readyState = `opening`, this.skipReconnect = !1;
            let r = gm(t, `open`, function() {
                    n.onopen(), e && e()
                }),
                i = t => {
                    this.cleanup(), this._readyState = `closed`, this.emitReserved(`error`, t), e ? e(t) : this.maybeReconnectOnOpen()
                },
                a = gm(t, `error`, i);
            if (!1 !== this._timeout) {
                let e = this._timeout,
                    n = this.setTimeoutFn(() => {
                        r(), i(Error(`timeout`)), t.close()
                    }, e);
                this.opts.autoUnref && n.unref(), this.subs.push(() => {
                    this.clearTimeoutFn(n)
                })
            }
            return this.subs.push(r), this.subs.push(a), this
        }
        connect(e) {
            return this.open(e)
        }
        onopen() {
            this.cleanup(), this._readyState = `open`, this.emitReserved(`open`);
            let e = this.engine;
            this.subs.push(gm(e, `ping`, this.onping.bind(this)), gm(e, `data`, this.ondata.bind(this)), gm(e, `error`, this.onerror.bind(this)), gm(e, `close`, this.onclose.bind(this)), gm(this.decoder, `decoded`, this.ondecoded.bind(this)))
        }
        onping() {
            this.emitReserved(`ping`)
        }
        ondata(e) {
            try {
                this.decoder.add(e)
            } catch (e) {
                this.onclose(`parse error`, e)
            }
        }
        ondecoded(e) {
            cp(() => {
                this.emitReserved(`packet`, e)
            }, this.setTimeoutFn)
        }
        onerror(e) {
            this.emitReserved(`error`, e)
        }
        socket(e, t) {
            let n = this.nsps[e];
            return n ? this._autoConnect && !n.active && n.connect() : (n = new vm(this, e, t), this.nsps[e] = n), n
        }
        _destroy(e) {
            let t = Object.keys(this.nsps);
            for (let e of t)
                if (this.nsps[e].active) return;
            this._close()
        }
        _packet(e) {
            let t = this.encoder.encode(e);
            for (let n = 0; n < t.length; n++) this.engine.write(t[n], e.options)
        }
        cleanup() {
            this.subs.forEach(e => e()), this.subs.length = 0, this.decoder.destroy()
        }
        _close() {
            this.skipReconnect = !0, this._reconnecting = !1, this.onclose(`forced close`)
        }
        disconnect() {
            return this._close()
        }
        onclose(e, t) {
            var n;
            this.cleanup(), (n = this.engine) == null || n.close(), this.backoff.reset(), this._readyState = `closed`, this.emitReserved(`close`, e, t), this._reconnection && !this.skipReconnect && this.reconnect()
        }
        reconnect() {
            if (this._reconnecting || this.skipReconnect) return this;
            let e = this;
            if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved(`reconnect_failed`), this._reconnecting = !1;
            else {
                let t = this.backoff.duration();
                this._reconnecting = !0;
                let n = this.setTimeoutFn(() => {
                    e.skipReconnect || (this.emitReserved(`reconnect_attempt`, e.backoff.attempts), !e.skipReconnect && e.open(t => {
                        t ? (e._reconnecting = !1, e.reconnect(), this.emitReserved(`reconnect_error`, t)) : e.onreconnect()
                    }))
                }, t);
                this.opts.autoUnref && n.unref(), this.subs.push(() => {
                    this.clearTimeoutFn(n)
                })
            }
        }
        onreconnect() {
            let e = this.backoff.attempts;
            this._reconnecting = !1, this.backoff.reset(), this.emitReserved(`reconnect`, e)
        }
    },
    xm = {};

function Sm(e, t) {
    typeof e == `object` && (t = e, e = void 0), t ||= {};
    let n = qp(e, t.path || `/socket.io`),
        r = n.source,
        i = n.id,
        a = n.path,
        o = xm[i] && a in xm[i].nsps,
        s = t.forceNew || t[`force new connection`] || !1 === t.multiplex || o,
        c;
    return s ? c = new bm(r, t) : (xm[i] || (xm[i] = new bm(r, t)), c = xm[i]), n.query && !t.query && (t.query = n.queryKey), c.socket(n.path, t)
}
Object.assign(Sm, {
    Manager: bm,
    Socket: vm,
    io: Sm,
    connect: Sm
});
var Cm = 250;

function wm(e, t) {
    let n = e.token ?? Cf(),
        r = {
            app_id: e.appId
        };
    n ? r.token = n : r.anonymous_id = rf();
    let i = Sm(e.serverUrl, {
        path: e.mountPath,
        transports: e.transports,
        query: r
    });
    return i.on(`connect`, async () => (console.log(`connect`, i.id), t.connect ?.call(t))), i.on(`update_model`, async e => t.update_model ?.call(t, e)), i.on(`error`, async e => t.error ?.call(t, e)), i.on(`connect_error`, async e => (console.error(`connect_error`, e), t.error ?.call(t, e))), i
}

function Tm({
    config: e
}) {
    let t = { ...e
        },
        n = {},
        r = {},
        i = {
            connect: async () => {
                let e = [];
                Object.keys(n).forEach(t => {
                    let n = f(t);
                    n.length !== 0 && (l(t), n.forEach(({
                        connect: t
                    }) => {
                        e.push((async () => t ?.())())
                    }))
                }), await Promise.all(e)
            },
            update_model: async e => {
                let t = f(e.room).map(t => t.update_model ?.call(t, e));
                await Promise.all(t)
            },
            error: async e => {
                console.error(`error`, e);
                let t = Object.values(n).flat().map(t => t.error ?.call(t, e));
                await Promise.all(t)
            }
        },
        a = wm(e, i);

    function o() {
        s()
    }

    function s() {
        m(), a && a.disconnect()
    }

    function c(e) {
        o(), t = { ...t,
            ...e
        }, a = wm(t, i)
    }

    function l(e) {
        a.emit(`join`, e)
    }

    function u(e) {
        a.emit(`leave`, e)
    }
    async function d(e, t) {
        let n = JSON.stringify(t);
        return i.update_model ?.call(i, {
            room: e,
            data: n
        })
    }

    function f(e) {
        return n[e] ?? []
    }

    function p(e) {
        let t = r[e];
        t && (clearTimeout(t), delete r[e])
    }

    function m() {
        Object.keys(r).forEach(e => {
            clearTimeout(r[e]), delete r[e], (n[e] ?.length ?? 0) === 0 && delete n[e]
        })
    }

    function h(e) {
        p(e), r[e] = setTimeout(() => {
            delete r[e], !((n[e] ?.length ?? 0) > 0) && (u(e), delete n[e])
        }, Cm)
    }
    return {
        socket: a,
        subscribeToRoom: (e, t) => {
            n[e] ? p(e) : (l(e), n[e] = []), n[e].push(t);
            let r = !1;
            return () => {
                r || (r = !0, n[e] = n[e] ?.filter(e => e !== t) ?? [], n[e].length === 0 && h(e))
            }
        },
        updateConfig: c,
        updateModel: d,
        disconnect: s
    }
}(!globalThis.EventTarget || !globalThis.Event) && console.error(`
  PartySocket requires a global 'EventTarget' class to be available!
  You can polyfill this global by adding this to your code before any partysocket imports: 
  
  \`\`\`
  import 'partysocket/event-target-polyfill';
  \`\`\`
  Please file an issue at https://github.com/partykit/partykit if you're still having trouble.
`);
var Em = class extends Event {
        message;
        error;
        constructor(e, t) {
            super(`error`, t), this.message = e.message, this.error = e
        }
    },
    Dm = class extends Event {
        code;
        reason;
        wasClean = !0;
        constructor(e = 1e3, t = ``, n) {
            super(`close`, n), this.code = e, this.reason = t
        }
    },
    Om = {
        Event,
        ErrorEvent: Em,
        CloseEvent: Dm
    };

function km(e, t) {
    if (!e) throw Error(t)
}

function Am(e) {
    return new e.constructor(e.type, e)
}

function jm(e) {
    return `data` in e ? new MessageEvent(e.type, e) : `code` in e || `reason` in e ? new Dm(e.code || 1999, e.reason || `unknown reason`, e) : `error` in e ? new Em(e.error, e) : new Event(e.type, e)
}
var Mm = typeof process < `u` && process.versions ?.node !== void 0 && typeof document > `u` ? jm : Am,
    Nm = {
        maxReconnectionDelay: 1e4,
        minReconnectionDelay: 1e3 + Math.random() * 4e3,
        minUptime: 5e3,
        reconnectionDelayGrowFactor: 1.3,
        connectionTimeout: 4e3,
        maxRetries: 1 / 0,
        maxEnqueuedMessages: 1 / 0,
        startClosed: !1,
        debug: !1
    },
    Pm = !1,
    Fm = class e extends EventTarget {
        _ws;
        _retryCount = -1;
        _uptimeTimeout;
        _connectTimeout;
        _shouldReconnect = !0;
        _connectLock = !1;
        _binaryType = `blob`;
        _closeCalled = !1;
        _messageQueue = [];
        _url;
        _protocols;
        _options;
        constructor(e, t, n = {}) {
            super(), this._url = e, this._protocols = t, this._options = n, this._options.startClosed && (this._shouldReconnect = !1), this._connect()
        }
        static get CONNECTING() {
            return 0
        }
        static get OPEN() {
            return 1
        }
        static get CLOSING() {
            return 2
        }
        static get CLOSED() {
            return 3
        }
        get CONNECTING() {
            return e.CONNECTING
        }
        get OPEN() {
            return e.OPEN
        }
        get CLOSING() {
            return e.CLOSING
        }
        get CLOSED() {
            return e.CLOSED
        }
        get binaryType() {
            return this._ws ? this._ws.binaryType : this._binaryType
        }
        set binaryType(e) {
            this._binaryType = e, this._ws && (this._ws.binaryType = e)
        }
        get retryCount() {
            return Math.max(this._retryCount, 0)
        }
        get bufferedAmount() {
            return this._messageQueue.reduce((e, t) => (typeof t == `string` ? e += t.length : t instanceof Blob ? e += t.size : e += t.byteLength, e), 0) + (this._ws ? this._ws.bufferedAmount : 0)
        }
        get extensions() {
            return this._ws ? this._ws.extensions : ``
        }
        get protocol() {
            return this._ws ? this._ws.protocol : ``
        }
        get readyState() {
            return this._ws ? this._ws.readyState : this._options.startClosed ? e.CLOSED : e.CONNECTING
        }
        get url() {
            return this._ws ? this._ws.url : ``
        }
        get shouldReconnect() {
            return this._shouldReconnect
        }
        onclose = null;
        onerror = null;
        onmessage = null;
        onopen = null;
        close(e = 1e3, t) {
            if (this._closeCalled = !0, this._shouldReconnect = !1, this._clearTimeouts(), !this._ws) {
                this._debug(`close enqueued: no ws instance`);
                return
            }
            if (this._ws.readyState === this.CLOSED) {
                this._debug(`close: already closed`);
                return
            }
            this._ws.close(e, t)
        }
        reconnect(e, t) {
            this._shouldReconnect = !0, this._closeCalled = !1, this._retryCount = -1, !this._ws || this._ws.readyState === this.CLOSED || this._disconnect(e, t), this._connect()
        }
        send(e) {
            if (this._ws && this._ws.readyState === this.OPEN) this._debug(`send`, e), this._ws.send(e);
            else {
                let {
                    maxEnqueuedMessages: t = Nm.maxEnqueuedMessages
                } = this._options;
                this._messageQueue.length < t && (this._debug(`enqueue`, e), this._messageQueue.push(e))
            }
        }
        _debug(...e) {
            this._options.debug && console.log.apply(console, [`RWS>`, ...e])
        }
        _getNextDelay() {
            let {
                reconnectionDelayGrowFactor: e = Nm.reconnectionDelayGrowFactor,
                minReconnectionDelay: t = Nm.minReconnectionDelay,
                maxReconnectionDelay: n = Nm.maxReconnectionDelay
            } = this._options, r = 0;
            return this._retryCount > 0 && (r = t * e ** (this._retryCount - 1), r > n && (r = n)), this._debug(`next delay`, r), r
        }
        _wait() {
            return new Promise(e => {
                setTimeout(e, this._getNextDelay())
            })
        }
        _getNextProtocols(e) {
            if (!e) return Promise.resolve(null);
            if (typeof e == `string` || Array.isArray(e)) return Promise.resolve(e);
            if (typeof e == `function`) {
                let t = e();
                if (!t) return Promise.resolve(null);
                if (typeof t == `string` || Array.isArray(t)) return Promise.resolve(t);
                if (t.then) return t
            }
            throw Error(`Invalid protocols`)
        }
        _getNextUrl(e) {
            if (typeof e == `string`) return Promise.resolve(e);
            if (typeof e == `function`) {
                let t = e();
                if (typeof t == `string`) return Promise.resolve(t);
                if (t.then) return t
            }
            throw Error(`Invalid URL`)
        }
        _connect() {
            if (this._connectLock || !this._shouldReconnect) return;
            this._connectLock = !0;
            let {
                maxRetries: e = Nm.maxRetries,
                connectionTimeout: t = Nm.connectionTimeout
            } = this._options;
            if (this._retryCount >= e) {
                this._debug(`max retries reached`, this._retryCount, `>=`, e);
                return
            }
            this._retryCount++, this._debug(`connect`, this._retryCount), this._removeListeners(), this._wait().then(() => Promise.all([this._getNextUrl(this._url), this._getNextProtocols(this._protocols || null)])).then(([e, n]) => {
                if (this._closeCalled) {
                    this._connectLock = !1;
                    return
                }!this._options.WebSocket && typeof WebSocket > `u` && !Pm && (console.error(`‼️ No WebSocket implementation available. You should define options.WebSocket. 

For example, if you're using node.js, run \`npm install ws\`, and then in your code:

import PartySocket from 'partysocket';
import WS from 'ws';

const partysocket = new PartySocket({
  host: "127.0.0.1:1999",
  room: "test-room",
  WebSocket: WS
});

`), Pm = !0);
                let r = this._options.WebSocket || WebSocket;
                this._debug(`connect`, {
                    url: e,
                    protocols: n
                }), this._ws = n ? new r(e, n) : new r(e), this._ws.binaryType = this._binaryType, this._connectLock = !1, this._addListeners(), this._connectTimeout = setTimeout(() => this._handleTimeout(), t)
            }).catch(e => {
                this._connectLock = !1, this._handleError(new Om.ErrorEvent(Error(e.message), this))
            })
        }
        _handleTimeout() {
            this._debug(`timeout event`), this._handleError(new Om.ErrorEvent(Error(`TIMEOUT`), this))
        }
        _disconnect(e = 1e3, t) {
            if (this._clearTimeouts(), this._ws) {
                this._removeListeners();
                try {
                    this._ws.close(e, t), this._handleClose(new Om.CloseEvent(e, t, this))
                } catch {}
            }
        }
        _acceptOpen() {
            this._debug(`accept open`), this._retryCount = 0
        }
        _handleOpen = e => {
            this._debug(`open event`);
            let {
                minUptime: t = Nm.minUptime
            } = this._options;
            clearTimeout(this._connectTimeout), this._uptimeTimeout = setTimeout(() => this._acceptOpen(), t), km(this._ws, `WebSocket is not defined`), this._ws.binaryType = this._binaryType, this._messageQueue.forEach(e => this._ws ?.send(e)), this._messageQueue = [], this.onopen && this.onopen(e), this.dispatchEvent(Mm(e))
        };
        _handleMessage = e => {
            this._debug(`message event`), this.onmessage && this.onmessage(e), this.dispatchEvent(Mm(e))
        };
        _handleError = e => {
            this._debug(`error event`, e.message), this._disconnect(void 0, e.message === `TIMEOUT` ? `timeout` : void 0), this.onerror && this.onerror(e), this._debug(`exec error listeners`), this.dispatchEvent(Mm(e)), this._connect()
        };
        _handleClose = e => {
            this._debug(`close event`), this._clearTimeouts(), this._shouldReconnect && this._connect(), this.onclose && this.onclose(e), this.dispatchEvent(Mm(e))
        };
        _removeListeners() {
            this._ws && (this._debug(`removeListeners`), this._ws.removeEventListener(`open`, this._handleOpen), this._ws.removeEventListener(`close`, this._handleClose), this._ws.removeEventListener(`message`, this._handleMessage), this._ws.removeEventListener(`error`, this._handleError))
        }
        _addListeners() {
            this._ws && (this._debug(`addListeners`), this._ws.addEventListener(`open`, this._handleOpen), this._ws.addEventListener(`close`, this._handleClose), this._ws.addEventListener(`message`, this._handleMessage), this._ws.addEventListener(`error`, this._handleError))
        }
        _clearTimeouts() {
            clearTimeout(this._connectTimeout), clearTimeout(this._uptimeTimeout)
        }
    },
    Im = 1e3,
    Lm = 3e3,
    Rm = new Set([405, 409, 422, 503]),
    zm = new Set([400, 403, 404]);

function Bm(e) {
    let t = e && typeof e == `object` ? e.status : void 0;
    return typeof t == `number` ? t : void 0
}

function Vm(e) {
    return e instanceof Error ? e : Error(String(e))
}
var Hm = class {
    constructor(e, t, n, r, i) {
        this.onClose = i, this.listeners = new Set, this.heartbeat = null, this.closed = !1, this.id = r ?.id ?? crypto.randomUUID();
        let a = n.transport === `proxy`,
            o = new Fm(async () => {
                var r;
                if (this.closed) throw Error(`Actor connection is closed`);
                if (!a) try {
                    let {
                        websocket_url: r,
                        token: i
                    } = await n.mintConnectionToken(e, t, this.id);
                    return `${r}${r.includes(`?`)?`&`:`?`}token=${encodeURIComponent(i)}`
                } catch (e) {
                    let t = Bm(e);
                    if (!(n.transport !== `direct` && t !== void 0 && Rm.has(t))) {
                        t !== void 0 && zm.has(t) && this.close();
                        try {
                            (r = n.onMintError) == null || r.call(n, Vm(e))
                        } catch {}
                        throw e
                    }
                    a = !0
                }
                return Wm(n.host, e, t, this.id, n.appId, n.getAuthToken(), n.functionsVersion)
            });
        this.ws = o;
        let s = Date.now(),
            c = () => {
                s = Date.now()
            };
        o.addEventListener(`open`, c), o.addEventListener(`message`, e => {
            c();
            let t;
            try {
                t = JSON.parse(e.data)
            } catch {
                return
            }
            if ((t && typeof t == `object` ? t.type : void 0) !== `__pong`)
                for (let e of this.listeners) e(t)
        }), this.heartbeat = setInterval(() => {
            if (Date.now() - s > Lm) {
                c(), o.readyState === o.OPEN && o.reconnect();
                return
            }
            try {
                o.send(JSON.stringify({
                    type: `__ping`
                }))
            } catch {}
        }, Im)
    }
    subscribe(e) {
        return this.listeners.add(e), {
            unsubscribe: () => {
                this.listeners.delete(e)
            }
        }
    }
    send(e) {
        this.closed || this.ws.send(JSON.stringify(e))
    }
    close() {
        this.closed || (this.closed = !0, this.heartbeat &&= (clearInterval(this.heartbeat), null), this.listeners.clear(), this.ws.close(), this.onClose())
    }
};

function Um(e, t, n, r) {
    let i = null;
    return {
        connect(a) {
            if (i) return i;
            let o = new Hm(e, t, n, a, () => {
                r.delete(o), i === o && (i = null)
            });
            return i = o, r.add(o), o
        }
    }
}

function Wm(e, t, n, r, i, a, o) {
    let s = e.replace(/^(http|https|ws|wss):\/\//, ``);
    s.endsWith(`/`) && (s = s.slice(0, -1));
    let c = s.startsWith(`localhost:`) || s.startsWith(`127.0.0.1:`) || s.startsWith(`192.168.`) || s.startsWith(`10.`) || s.startsWith(`172.`) && s.split(`.`)[1] >= `16` && s.split(`.`)[1] <= `31` || s.startsWith(`[::ffff:7f00:1]:`),
        l = new URLSearchParams([
            [`_pk`, r],
            [`app_id`, i],
            [`handler`, t]
        ]);
    return a && l.append(`token`, a), o && l.append(`fv`, o), `${c?`ws`:`wss`}://${s}/parties/${t}/${n}?${l}`
}

function Gm(e, t) {
    return e && !e.startsWith(`/`) ? e : t ?? e
}

function Km(e) {
    let t = new Set;
    return {
        module: new Proxy({}, {
            get(n, r) {
                if (typeof r == `string` && r !== `then`) return n => Um(r, n, e, t)
            }
        }),
        closeAll: () => {
            for (let e of [...t]) e.close()
        }
    }
}

function qm(e) {
    let {
        serverUrl: t = `https://base44.app`,
        appId: n,
        analytics: r,
        token: i,
        serviceToken: a,
        requiresAuth: o = !1,
        appBaseUrl: s,
        options: c,
        functionsVersion: l,
        headers: u
    } = e, d = typeof s == `string` ? s : ``, f = {
        serverUrl: t,
        mountPath: `/ws-user-apps/socket.io/`,
        transports: [`websocket`],
        appId: n,
        token: i
    }, p = null, m = () => (p ||= Tm({
        config: f
    }), p), h = { ...u,
        "X-App-Id": String(n)
    }, g = u ?.[`Base44-State`], _ = g ? {
        "Base44-State": g
    } : {}, v = l ? { ...h,
        "Base44-Functions-Version": l
    } : h, y = of ({
        baseURL: `${t}/api`,
        headers: h,
        token: i,
        onError: c ?.onError
    }), b = of ({
        baseURL: `${t}/api`,
        headers: v,
        token: i,
        interceptResponses: !1,
        onError: c ?.onError
    }), x = { ...h,
        ...i ? {
            "on-behalf-of": `Bearer ${i}`
        } : {}
    }, S = of ({
        baseURL: `${t}/api`,
        headers: x,
        token: a,
        onError: c ?.onError
    }), C = of ({
        baseURL: `${t}/api`,
        headers: v,
        token: a,
        interceptResponses: !1
    }), w = of ({
        baseURL: `${t}/api`,
        headers: h
    }), T = gf(y, b, n, {
        appBaseUrl: d,
        serverUrl: t,
        token: i
    });
    if (typeof window < `u`) {
        let e = i || Cf();
        e && T.setToken(e)
    }
    let ee = Km({
            appId: n,
            host: Gm(t, typeof window < `u` ? window.location ?.origin : void 0),
            functionsVersion: l,
            getAuthToken: () => i || Cf(),
            mintConnectionToken: async (e, t, r) => {
                let a = i || Cf();
                return await w.post(`/apps/${n}/actors/${encodeURIComponent(e)}/connection-token`, {
                    room: t,
                    connection_id: r
                }, {
                    headers: { ...a ? {
                            Authorization: `Bearer ${a}`
                        } : {},
                        ...l ? {
                            "Base44-Functions-Version": l
                        } : {}
                    }
                })
            },
            transport: c ?.actorsTransport,
            onMintError: c ?.onError
        }),
        E = {
            entities: sf({
                axios: y,
                appId: n,
                getSocket: m
            }),
            integrations: pf(y, n),
            connectors: Sf(y, n),
            auth: T,
            functions: Df(b, n, {
                getAuthHeaders: () => {
                    let e = {},
                        t = i || Cf();
                    return t && (e.Authorization = `Bearer ${t}`), e
                },
                baseURL: b.defaults ?.baseURL
            }),
            agents: Of({
                axios: y,
                getSocket: m,
                appId: n,
                serverUrl: t,
                token: i
            }),
            aiGateway: Af({
                serverUrl: t,
                token: i,
                appId: n,
                headers: _
            }),
            appLogs: jf(y, n),
            app: Mf(y, n),
            users: Nf(y, n),
            analytics: Vd({
                axiosClient: y,
                serverUrl: t,
                appId: n,
                userAuthModule: T,
                enabled: r ?.enabled ?? !0
            }),
            actors: ee.module,
            cleanup: () => {
                E.analytics.cleanup(), ee.closeAll(), p && p.disconnect()
            }
        },
        te = {
            entities: sf({
                axios: S,
                appId: n,
                getSocket: m
            }),
            integrations: pf(S, n),
            sso: _f(S, n),
            connectors: yf(S, n),
            functions: Df(C, n, {
                getAuthHeaders: () => {
                    let e = {};
                    return a && (e.Authorization = `Bearer ${a}`), e
                },
                baseURL: C.defaults ?.baseURL
            }),
            agents: Of({
                axios: S,
                getSocket: m,
                appId: n,
                serverUrl: t,
                token: i
            }),
            aiGateway: Af({
                serverUrl: t,
                token: a,
                appId: n,
                headers: _
            }),
            appLogs: jf(S, n),
            cleanup: () => {
                p && p.disconnect()
            }
        };
    return o && typeof window < `u` && setTimeout(async () => {
        try {
            await E.auth.isAuthenticated() || E.auth.redirectToLogin(window.location.href)
        } catch (e) {
            console.error(`Authentication check failed:`, e), E.auth.redirectToLogin(window.location.href)
        }
    }, 0), { ...E,
        fetchWithAuth: Tf({
            axios: y,
            serviceRoleAxios: S,
            appId: String(n),
            serverUrl: t,
            functionsVersion: l,
            platformHeaders: u
        }),
        setToken(e) {
            E.auth.setToken(e), p && p.updateConfig({
                token: e
            }), f.token = e
        },
        getConfig() {
            return {
                serverUrl: t,
                appId: n,
                requiresAuth: o
            }
        },
        get asServiceRole() {
            if (!a) throw Error(`Service token is required to use asServiceRole. Please provide a serviceToken when creating the client.`);
            return te
        }
    }
}
var Jm = { ...(!(typeof window > `u`) && new URLSearchParams(window.location.search).get(`clear_access_token`) === `true` && (window.localStorage.removeItem(`base44_access_token`), window.localStorage.removeItem(`token`)), {
            appId: `6acdf8cce4114e45a1f9693e`,
            token: Cf(),
            functionsVersion: `prod`,
            appBaseUrl: void 0
        })
    },
    {
        appId: Ym,
        token: Xm,
        functionsVersion: Zm,
        appBaseUrl: Qm
    } = Jm,
    $m = qm({
        appId: Ym,
        token: Xm,
        functionsVersion: Zm,
        serverUrl: ``,
        appBaseUrl: Qm
    });

function eh({}) {
    let e = Fo().pathname.substring(1),
        {
            data: t,
            isFetched: n
        } = ja({
            queryKey: [`user`],
            queryFn: async () => {
                try {
                    return {
                        user: await $m.auth.me(),
                        isAuthenticated: !0
                    }
                } catch {
                    return {
                        user: null,
                        isAuthenticated: !1
                    }
                }
            }
        });
    return (0, j.jsx)(`div`, {
        className: `min-h-screen flex items-center justify-center p-6 bg-slate-50`,
        children: (0, j.jsx)(`div`, {
            className: `max-w-md w-full`,
            children: (0, j.jsxs)(`div`, {
                className: `text-center space-y-6`,
                children: [(0, j.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [(0, j.jsx)(`h1`, {
                        className: `text-7xl font-light text-slate-300`,
                        children: `404`
                    }), (0, j.jsx)(`div`, {
                        className: `h-0.5 w-16 bg-slate-200 mx-auto`
                    })]
                }), (0, j.jsxs)(`div`, {
                    className: `space-y-3`,
                    children: [(0, j.jsx)(`h2`, {
                        className: `text-2xl font-medium text-slate-800`,
                        children: `Page Not Found`
                    }), (0, j.jsxs)(`p`, {
                        className: `text-slate-600 leading-relaxed`,
                        children: [`The page `, (0, j.jsxs)(`span`, {
                            className: `font-medium text-slate-700`,
                            children: [`"`, e, `"`]
                        }), ` could not be found in this application.`]
                    })]
                }), n && t.isAuthenticated && t.user ?.role === `admin` && (0, j.jsx)(`div`, {
                    className: `mt-8 p-4 bg-slate-100 rounded-lg border border-slate-200`,
                    children: (0, j.jsxs)(`div`, {
                        className: `flex items-start space-x-3`,
                        children: [(0, j.jsx)(`div`, {
                            className: `flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5`,
                            children: (0, j.jsx)(`div`, {
                                className: `w-2 h-2 rounded-full bg-orange-400`
                            })
                        }), (0, j.jsxs)(`div`, {
                            className: `text-left space-y-1`,
                            children: [(0, j.jsx)(`p`, {
                                className: `text-sm font-medium text-slate-700`,
                                children: `Admin Note`
                            }), (0, j.jsx)(`p`, {
                                className: `text-sm text-slate-600 leading-relaxed`,
                                children: `This could mean that the AI hasn't implemented this page yet. Ask it to implement it in the chat.`
                            })]
                        })]
                    })
                }), (0, j.jsx)(`div`, {
                    className: `pt-6`,
                    children: (0, j.jsxs)(`button`, {
                        onClick: () => window.location.href = `/`,
                        className: `inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500`,
                        children: [(0, j.jsx)(`svg`, {
                            className: `w-4 h-4 mr-2`,
                            fill: `none`,
                            stroke: `currentColor`,
                            viewBox: `0 0 24 24`,
                            children: (0, j.jsx)(`path`, {
                                strokeLinecap: `round`,
                                strokeLinejoin: `round`,
                                strokeWidth: 2,
                                d: `M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`
                            })
                        }), `Go Home`]
                    })
                })]
            })
        })
    })
}
var th = (0, _.createContext)(),
    nh = ({
        children: e
    }) => {
        let [t, n] = (0, _.useState)(null), [r, i] = (0, _.useState)(!1), [a, o] = (0, _.useState)(!0), [s, c] = (0, _.useState)(!0), [l, u] = (0, _.useState)(null), [d, f] = (0, _.useState)(!1), [p, m] = (0, _.useState)(null);
        (0, _.useEffect)(() => {
            h()
        }, []);
        let h = async () => {
                try {
                    c(!0), u(null);
                    try {
                        let e = await $m.app.getPublicSettings();
                        m(e), Jm.token ? await g() : (o(!1), i(!1), f(!0)), c(!1)
                    } catch (e) {
                        if (console.error(`App state check failed:`, e), e.status === 403 && e.data ?.extra_data ?.reason) {
                            let t = e.data.extra_data.reason;
                            u(t === `auth_required` ? {
                                type: `auth_required`,
                                message: `Authentication required`
                            } : t === `user_not_registered` ? {
                                type: `user_not_registered`,
                                message: `User not registered for this app`
                            } : {
                                type: t,
                                message: e.message
                            })
                        } else u({
                            type: `unknown`,
                            message: e.message || `Failed to load app`
                        });
                        c(!1), o(!1)
                    }
                } catch (e) {
                    console.error(`Unexpected error:`, e), u({
                        type: `unknown`,
                        message: e.message || `An unexpected error occurred`
                    }), c(!1), o(!1)
                }
            },
            g = async () => {
                try {
                    o(!0);
                    let e = await $m.auth.me();
                    n(e), i(!0), o(!1), f(!0)
                } catch (e) {
                    console.error(`User auth check failed:`, e), o(!1), i(!1), f(!0), (e.status === 401 || e.status === 403) && u({
                        type: `auth_required`,
                        message: `Authentication required`
                    })
                }
            };
        return (0, j.jsx)(th.Provider, {
            value: {
                user: t,
                isAuthenticated: r,
                isLoadingAuth: a,
                isLoadingPublicSettings: s,
                authError: l,
                appPublicSettings: p,
                authChecked: d,
                logout: (e = !0) => {
                    n(null), i(!1), e ? $m.auth.logout(window.location.href) : $m.auth.logout()
                },
                navigateToLogin: () => {
                    $m.auth.redirectToLogin(window.location.href)
                },
                checkUserAuth: g,
                checkAppState: h
            },
            children: e
        })
    },
    rh = () => {
        let e = (0, _.useContext)(th);
        if (!e) throw Error(`useAuth must be used within an AuthProvider`);
        return e
    },
    ih = () => (0, j.jsx)(`div`, {
        className: `flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-slate-50`,
        children: (0, j.jsx)(`div`, {
            className: `max-w-md w-full p-8 bg-white rounded-lg shadow-lg border border-slate-100`,
            children: (0, j.jsxs)(`div`, {
                className: `text-center`,
                children: [(0, j.jsx)(`div`, {
                    className: `inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-100`,
                    children: (0, j.jsx)(`svg`, {
                        className: `w-8 h-8 text-orange-600`,
                        fill: `none`,
                        stroke: `currentColor`,
                        viewBox: `0 0 24 24`,
                        children: (0, j.jsx)(`path`, {
                            strokeLinecap: `round`,
                            strokeLinejoin: `round`,
                            strokeWidth: `2`,
                            d: `M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z`
                        })
                    })
                }), (0, j.jsx)(`h1`, {
                    className: `text-3xl font-bold text-slate-900 mb-4`,
                    children: `Access Restricted`
                }), (0, j.jsx)(`p`, {
                    className: `text-slate-600 mb-8`,
                    children: `You are not registered to use this application. Please contact the app administrator to request access.`
                }), (0, j.jsxs)(`div`, {
                    className: `p-4 bg-slate-50 rounded-md text-sm text-slate-600`,
                    children: [(0, j.jsx)(`p`, {
                        children: `If you believe this is an error, you can:`
                    }), (0, j.jsxs)(`ul`, {
                        className: `list-disc list-inside mt-2 space-y-1`,
                        children: [(0, j.jsx)(`li`, {
                            children: `Verify you are logged in with the correct account`
                        }), (0, j.jsx)(`li`, {
                            children: `Contact the app administrator for access`
                        }), (0, j.jsx)(`li`, {
                            children: `Try logging out and back in again`
                        })]
                    })]
                })]
            })
        })
    }),
    ah = e => {
        let t = e.slice(1);
        try {
            return decodeURIComponent(t)
        } catch {
            return t
        }
    };

function oh() {
    let {
        pathname: e,
        hash: t
    } = Fo(), n = Io();
    return (0, _.useEffect)(() => {
        if (n !== `POP`) {
            if (t) {
                let e = ah(t),
                    n = window.setTimeout(() => {
                        document.getElementById(e) ?.scrollIntoView({
                            behavior: `smooth`
                        })
                    }, 50);
                return () => window.clearTimeout(n)
            }
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: `instant`
            })
        }
    }, [e, t, n]), null
}
var sh = {
        phone: `+91 90000 00000`,
        whatsapp: `919000000000`,
        email: `hello@outscaleinteriors.com`,
        address: `Hosur, Tamil Nadu, India`,
        facebook_url: `https://facebook.com`,
        pinterest_url: `https://pinterest.com`,
        linkedin_url: `https://linkedin.com`,
        whatsapp_message: `Hi Outscale Interiors, I'd like to know more about your services.`
    },
    ch = [`Hosur`, `Krishnagiri`, `Dharmapuri`, `Salem`, `Bengaluru`],
    lh = [{
        label: `1 BHK Homes`,
        slug: `1-bhk`,
        desc: `Smart, space-maximising design for compact living.`
    }, {
        label: `2 BHK Homes`,
        slug: `2-bhk`,
        desc: `Balanced layouts for growing families.`
    }, {
        label: `3 BHK Homes`,
        slug: `3-bhk`,
        desc: `Spacious, layered interiors with room to breathe.`
    }, {
        label: `Luxury Homes`,
        slug: `luxury-homes`,
        desc: `Bespoke residences with bespoke detailing.`
    }],
    uh = [{
        label: `Cafe`,
        slug: `cafe`
    }, {
        label: `Restaurant`,
        slug: `restaurant`
    }, {
        label: `Dental Clinic`,
        slug: `dental-clinic`
    }, {
        label: `Medical Shop`,
        slug: `medical-shop`
    }, {
        label: `Salon`,
        slug: `salon`
    }, {
        label: `Spa`,
        slug: `spa`
    }, {
        label: `Textile Showroom`,
        slug: `textile-showroom`
    }, {
        label: `Jewellery Showroom`,
        slug: `jewellery-showroom`
    }, {
        label: `Retail Shop`,
        slug: `retail-shop`
    }, {
        label: `Office`,
        slug: `office`
    }, {
        label: `Hotel`,
        slug: `hotel`
    }, {
        label: `Gym`,
        slug: `gym`
    }, {
        label: `Other`,
        slug: `other`
    }],
    dh = [`Modular Kitchen`, `Living Room`, `Master Bedroom`, `Kids' Bedroom`, `Wardrobe`, `Study Room`, `Pooja Room`, `Foyer`, `Balcony`, `False Ceiling`];

function fh(e) {
    let t = `https://wa.me/${sh.whatsapp}`;
    return e ? `${t}?text=${encodeURIComponent(e)}` : t
}

function ph() {
    return `tel:${sh.phone.replace(/\s/g,``)}`
}
var mh = {
        primary: `bg-charcoal text-ivory border border-charcoal`,
        ghost: `bg-transparent text-charcoal border border-charcoal`,
        brass: `bg-brass text-ivory border border-brass`,
        light: `bg-ivory text-charcoal border border-ivory`
    },
    hh = {
        sm: `px-5 py-2.5 text-xs`,
        md: `px-7 py-3.5 text-sm`,
        lg: `px-9 py-4 text-sm`
    };

function X({
    to: e,
    href: t,
    onClick: n,
    children: r,
    variant: i = `primary`,
    size: a = `md`,
    className: o = ``,
    fill: s = !0,
    type: c,
    ...l
}) {
    let u = ei(`btn-fill group relative inline-flex items-center justify-center gap-2 font-body font-bold uppercase tracking-[0.12em] transition-colors duration-300 rounded-none select-none`, `hover:text-ivory`, mh[i], hh[a], o),
        d = (0, j.jsx)(`span`, {
            className: `relative z-10 flex items-center gap-2`,
            children: r
        });
    return e ? (0, j.jsx)(V, {
        to: e,
        className: u,
        onClick: n,
        ...l,
        children: d
    }) : t ? (0, j.jsx)(`a`, {
        href: t,
        className: u,
        onClick: n,
        ...l,
        children: d
    }) : (0, j.jsx)(`button`, {
        type: c || `button`,
        className: u,
        onClick: n,
        ...l,
        children: d
    })
}
var gh = [{
    label: `Residential`,
    to: `/residential`,
    mega: `residential`
}, {
    label: `Commercial`,
    to: `/commercial`,
    mega: `commercial`
}, {
    label: `Services`,
    to: `/services`,
    mega: `services`
}, {
    label: `Projects`,
    to: `/projects`
}, {
    label: `3D & Tours`,
    to: `/3d-designs`,
    mega: `virtual`
}, {
    label: `About`,
    to: `/about`
}, {
    label: `More`,
    to: `/service-areas`,
    mega: `more`
}];

var mobileNavLinks = [{
    label: `Home`,
    to: `/`
}, {
    label: `Residential`,
    to: `/residential`
}, {
    label: `Commercial`,
    to: `/commercial`
}, {
    label: `Services`,
    to: `/services`
}, {
    label: `Projects`,
    to: `/projects`
}, {
    label: `3D Designs`,
    to: `/3d-designs`
}, {
    label: `360° Tours`,
    to: `/360-tours`
}, {
    label: `About Studio`,
    to: `/about`
}, {
    label: `Service Areas`,
    to: `/service-areas`
}, {
    label: `Journal & Blog`,
    to: `/blog`
}, {
    label: `Downloads`,
    to: `/downloads`
}, {
    label: `Contact`,
    to: `/contact`
}];

function _h({
    type: e,
    onClose: t
}) {
    let n = t || (() => {});
    return e === `residential` ? (0, j.jsxs)(`div`, {
        className: `space-y-6`,
        children: [(0, j.jsx)(`div`, {
            className: `grid grid-cols-4 gap-6`,
            children: lh.map(e => (0, j.jsxs)(V, {
                to: `/residential/${e.slug}`,
                onClick: n,
                className: `group block p-4 bg-sand/10 hover:bg-sand/30 border border-sand/40 transition-all duration-300`,
                children: [(0, j.jsx)(`div`, {
                    className: `font-heading text-xl text-charcoal group-hover:text-brass transition-colors`,
                    children: e.label
                }), (0, j.jsx)(`div`, {
                    className: `text-xs text-charcoal/60 mt-1.5 leading-relaxed`,
                    children: e.desc
                }), (0, j.jsxs)(`div`, {
                    className: `flex items-center gap-1.5 text-[0.7rem] uppercase tracking-wider font-bold text-brass mt-3`,
                    children: [`Explore`, (0, j.jsx)(an, { size: 12 })]
                })]
            }, e.slug))
        }), (0, j.jsxs)(`div`, {
            className: `flex items-center justify-between pt-4 border-t border-sand/40 text-xs`,
            children: [(0, j.jsx)(`span`, {
                className: `text-charcoal/60`,
                children: `Tailored residential interiors for villas, apartments & independent homes.`
            }), (0, j.jsxs)(V, {
                to: `/residential`,
                onClick: n,
                className: `font-bold uppercase tracking-wider text-charcoal hover:text-brass flex items-center gap-1.5 transition-colors`,
                children: [`View Residential Overview`, (0, j.jsx)(an, { size: 13 })]
            })]
        })]
    }) : e === `commercial` ? (0, j.jsxs)(`div`, {
        className: `space-y-6`,
        children: [(0, j.jsx)(`div`, {
            className: `grid grid-cols-4 gap-x-6 gap-y-3.5`,
            children: uh.map(e => (0, j.jsxs)(V, {
                to: `/commercial/${e.slug}`,
                onClick: n,
                className: `group flex items-center justify-between py-1.5 px-2 hover:bg-sand/20 transition-colors text-charcoal/80 hover:text-brass font-body text-sm`,
                children: [(0, j.jsx)(`span`, { children: e.label }), (0, j.jsx)(an, {
                    size: 12,
                    className: `opacity-0 group-hover:opacity-100 transition-opacity text-brass`
                })]
            }, e.slug))
        }), (0, j.jsxs)(`div`, {
            className: `flex items-center justify-between pt-4 border-t border-sand/40 text-xs`,
            children: [(0, j.jsx)(`span`, {
                className: `text-charcoal/60`,
                children: `Specialized commercial spaces engineered for customer experience and operational flow.`
            }), (0, j.jsxs)(V, {
                to: `/commercial`,
                onClick: n,
                className: `font-bold uppercase tracking-wider text-charcoal hover:text-brass flex items-center gap-1.5 transition-colors`,
                children: [`View All Commercial Types`, (0, j.jsx)(an, { size: 13 })]
            })]
        })]
    }) : e === `services` ? (0, j.jsxs)(`div`, {
        className: `space-y-6`,
        children: [(0, j.jsx)(`div`, {
            className: `grid grid-cols-3 gap-x-8 gap-y-3.5`,
            children: dh.map(e => (0, j.jsxs)(V, {
                to: `/services/${e.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``)}`,
                onClick: n,
                className: `group flex items-center justify-between py-2 px-3 bg-sand/10 hover:bg-sand/30 border border-sand/30 transition-all font-body text-sm text-charcoal/80 hover:text-brass`,
                children: [(0, j.jsx)(`span`, { children: e }), (0, j.jsx)(an, {
                    size: 13,
                    className: `opacity-0 group-hover:opacity-100 transition-opacity text-brass`
                })]
            }, e))
        }), (0, j.jsxs)(`div`, {
            className: `flex items-center justify-between pt-4 border-t border-sand/40 text-xs`,
            children: [(0, j.jsx)(`span`, {
                className: `text-charcoal/60`,
                children: `Full end-to-end design, modular manufacturing, and precision on-site execution.`
            }), (0, j.jsxs)(V, {
                to: `/services`,
                onClick: n,
                className: `font-bold uppercase tracking-wider text-charcoal hover:text-brass flex items-center gap-1.5 transition-colors`,
                children: [`View All Services`, (0, j.jsx)(an, { size: 13 })]
            })]
        })]
    }) : e === `virtual` ? (0, j.jsx)(`div`, {
        className: `grid grid-cols-2 gap-8`,
        children: [(0, j.jsxs)(V, {
            to: `/3d-designs`,
            onClick: n,
            className: `group block p-6 bg-sand/15 hover:bg-sand/30 border border-sand/40 transition-all`,
            children: [(0, j.jsx)(`div`, {
                className: `eyebrow text-brass mb-2`,
                children: `Visualization`
            }), (0, j.jsx)(`div`, {
                className: `font-heading text-2xl text-charcoal group-hover:text-brass transition-colors mb-2`,
                children: `3D Photorealistic Designs`
            }), (0, j.jsx)(`p`, {
                className: `text-xs text-charcoal/70 leading-relaxed mb-4`,
                children: `High-fidelity 3D renders that let you visualize lighting, material palettes, and textures before execution.`
            }), (0, j.jsxs)(`div`, {
                className: `inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-brass`,
                children: [`Browse 3D Gallery`, (0, j.jsx)(an, { size: 13 })]
            })]
        }), (0, j.jsxs)(V, {
            to: `/360-tours`,
            onClick: n,
            className: `group block p-6 bg-sand/15 hover:bg-sand/30 border border-sand/40 transition-all`,
            children: [(0, j.jsx)(`div`, {
                className: `eyebrow text-brass mb-2`,
                children: `Virtual Reality`
            }), (0, j.jsx)(`div`, {
                className: `font-heading text-2xl text-charcoal group-hover:text-brass transition-colors mb-2`,
                children: `360° Interactive Virtual Tours`
            }), (0, j.jsx)(`p`, {
                className: `text-xs text-charcoal/70 leading-relaxed mb-4`,
                children: `Step inside completed residences and cafes in full 360-degree panoramic virtual walkthroughs.`
            }), (0, j.jsxs)(`div`, {
                className: `inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-brass`,
                children: [`Experience Virtual Tours`, (0, j.jsx)(an, { size: 13 })]
            })]
        })]
    }) : e === `more` ? (0, j.jsxs)(`div`, {
        className: `grid grid-cols-4 gap-8`,
        children: [(0, j.jsxs)(`div`, {
            className: `space-y-3`,
            children: [(0, j.jsx)(`div`, {
                className: `eyebrow text-brass`,
                children: `Service Areas`
            }), (0, j.jsx)(`div`, {
                className: `space-y-1.5`,
                children: ch.map(e => (0, j.jsx)(V, {
                    to: `/service-areas/${e.toLowerCase()}`,
                    onClick: n,
                    className: `block text-sm text-charcoal/80 hover:text-brass transition-colors py-0.5`,
                    children: e
                }, e))
            }), (0, j.jsxs)(V, {
                to: `/service-areas`,
                onClick: n,
                className: `inline-flex items-center gap-1 text-[0.7rem] uppercase tracking-wider font-bold text-brass pt-1`,
                children: [`All areas`, (0, j.jsx)(an, { size: 11 })]
            })]
        }), (0, j.jsxs)(`div`, {
            className: `space-y-3`,
            children: [(0, j.jsx)(`div`, {
                className: `eyebrow text-brass`,
                children: `Journal & Insights`
            }), (0, j.jsx)(`p`, {
                className: `text-xs text-charcoal/70 leading-relaxed`,
                children: `Design trends, material guides, budget considerations, and architectural philosophy.`
            }), (0, j.jsxs)(V, {
                to: `/blog`,
                onClick: n,
                className: `inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-charcoal hover:text-brass transition-colors pt-1`,
                children: [`Read Journal`, (0, j.jsx)(an, { size: 12 })]
            })]
        }), (0, j.jsxs)(`div`, {
            className: `space-y-3`,
            children: [(0, j.jsx)(`div`, {
                className: `eyebrow text-brass`,
                children: `Downloads & Lookbooks`
            }), (0, j.jsx)(`p`, {
                className: `text-xs text-charcoal/70 leading-relaxed`,
                children: `Download curated catalogs, finish specifications, and project lookbooks.`
            }), (0, j.jsxs)(V, {
                to: `/downloads`,
                onClick: n,
                className: `inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-charcoal hover:text-brass transition-colors pt-1`,
                children: [`View Downloads`, (0, j.jsx)(an, { size: 12 })]
            })]
        }), (0, j.jsxs)(`div`, {
            className: `space-y-3`,
            children: [(0, j.jsx)(`div`, {
                className: `eyebrow text-brass`,
                children: `Contact & Studios`
            }), (0, j.jsx)(`p`, {
                className: `text-xs text-charcoal/70 leading-relaxed`,
                children: `Reach our design offices in Hosur and Bengaluru for site visits and consultations.`
            }), (0, j.jsxs)(V, {
                to: `/contact`,
                onClick: n,
                className: `inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-charcoal hover:text-brass transition-colors pt-1`,
                children: [`Get in Touch`, (0, j.jsx)(an, { size: 12 })]
            })]
        })]
    }) : null
}

function vh() {
    let [e, t] = (0, _.useState)(!1),
        [n, r] = (0, _.useState)(!1),
        [i, a] = (0, _.useState)(null),
        o = Fo(),
        { openEnquiry: s } = bh();

    (0, _.useEffect)(() => {
        let e = () => t(window.scrollY > 40);
        return e(), window.addEventListener(`scroll`, e, { passive: !0 }), () => window.removeEventListener(`scroll`, e)
    }, []);

    (0, _.useEffect)(() => {
        r(!1);
        a(null);
    }, [o.pathname]);

    (0, _.useEffect)(() => (
        document.body.style.overflow = n ? `hidden` : ``,
        () => { document.body.style.overflow = `` }
    ), [n]);

    let c = o.pathname === `/privacy-policy` || o.pathname === `/terms`,
        l = e || i !== null || c;

    return (0, j.jsxs)(j.Fragment, {
        children: [(0, j.jsxs)(`header`, {
            className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${l ? `bg-ivory/95 backdrop-blur-md border-b border-sand shadow-sm py-3.5` : `bg-transparent py-5`}`,
            onMouseLeave: () => a(null),
            children: [(0, j.jsxs)(`div`, {
                className: `container-px max-w-[1400px] mx-auto flex items-center justify-between gap-4`,
                children: [(0, j.jsxs)(V, {
                    to: `/`,
                    className: `flex items-center gap-2 group shrink-0`,
                    onMouseEnter: () => a(null),
                    children: [(0, j.jsx)(`span`, {
                        className: `font-heading text-2xl tracking-tight transition-colors duration-300 ${l ? `text-charcoal` : `text-ivory drop-shadow-sm`}`,
                        children: `Outscale`
                    }), (0, j.jsx)(`span`, {
                        className: `font-body text-[0.6rem] uppercase tracking-[0.3em] mt-1 text-brass font-bold`,
                        children: `Interiors`
                    })]
                }), (0, j.jsx)(`nav`, {
                    className: `hidden lg:flex items-center gap-6 xl:gap-7`,
                    children: gh.map(e => {
                        let t = o.pathname === e.to || (e.to !== `/` && o.pathname.startsWith(e.to)),
                            n = i === e.mega;
                        return (0, j.jsxs)(`div`, {
                            className: `relative py-1 group cursor-pointer`,
                            onMouseEnter: () => e.mega ? a(e.mega) : a(null),
                            children: [(0, j.jsxs)(V, {
                                to: e.to,
                                className: `flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] font-bold transition-colors duration-200 ${l ? (t ? `text-brass` : `text-charcoal/80 hover:text-brass`) : (t ? `text-brass drop-shadow-sm` : `text-ivory/90 hover:text-brass drop-shadow-sm`)}`,
                                children: [e.label, e.mega && (0, j.jsx)(cn, {
                                    size: 11,
                                    className: `transition-transform duration-200 opacity-60 group-hover:opacity-100 ${n ? `rotate-180 text-brass` : ``}`
                                })]
                            }), t && (0, j.jsx)(`span`, {
                                className: `absolute bottom-0 left-0 right-0 h-0.5 bg-brass`
                            })]
                        }, e.label);
                    })
                }), (0, j.jsxs)(`div`, {
                    className: `hidden lg:flex items-center gap-4 shrink-0`,
                    children: [(0, j.jsxs)(`a`, {
                        href: ph(),
                        className: `flex items-center gap-2 text-xs uppercase tracking-[0.12em] font-bold transition-colors duration-300 ${l ? `text-charcoal hover:text-brass` : `text-ivory hover:text-brass drop-shadow-sm`}`,
                        children: [(0, j.jsx)(Cn, { size: 14, className: `text-brass` }), ` Call`]
                    }), (0, j.jsx)(X, {
                        onClick: () => s({
                            source: `navbar`,
                            title: `Start your project`,
                            subtitle: `Tell us about your space and we'll prepare a tailored proposal.`
                        }),
                        size: `sm`,
                        variant: `brass`,
                        children: `Enquire`
                    })]
                }), (0, j.jsx)(`button`, {
                    className: `lg:hidden p-2 transition-colors duration-300 ${l ? `text-charcoal` : `text-ivory`}`,
                    onClick: () => r(!0),
                    "aria-label": `Open menu`,
                    children: (0, j.jsx)(xn, { size: 26 })
                })]
            }), i && (0, j.jsx)(`div`, {
                className: `hidden lg:block absolute left-0 right-0 top-full bg-ivory border-t border-sand shadow-[0_20px_40px_-20px_rgba(28,27,25,0.25)] animate-in fade-in slide-in-from-top-2 duration-200`,
                onMouseEnter: () => a(i),
                children: (0, j.jsx)(`div`, {
                    className: `container-px max-w-[1400px] mx-auto py-8`,
                    children: (0, j.jsx)(_h, {
                        type: i,
                        onClose: () => a(null)
                    })
                })
            })]
        }), (0, j.jsxs)(`div`, {
            className: `fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${n ? `opacity-100 pointer-events-auto` : `opacity-0 pointer-events-none`}`,
            children: [(0, j.jsx)(`div`, {
                className: `absolute inset-0 bg-charcoal/70 backdrop-blur-sm transition-opacity duration-300`,
                onClick: () => r(!1)
            }), (0, j.jsxs)(`div`, {
                className: `absolute right-0 top-0 h-full w-[88%] max-w-sm bg-ivory shadow-2xl transition-transform duration-300 ease-out flex flex-col ${n ? `translate-x-0` : `translate-x-full`}`,
                children: [(0, j.jsxs)(`div`, {
                    className: `flex items-center justify-between p-6 border-b border-sand shrink-0`,
                    children: [(0, j.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [(0, j.jsx)(`span`, {
                            className: `font-heading text-2xl tracking-tight text-charcoal`,
                            children: `Outscale`
                        }), (0, j.jsx)(`span`, {
                            className: `font-body text-[0.6rem] uppercase tracking-[0.3em] mt-1 text-brass font-bold`,
                            children: `Interiors`
                        })]
                    }), (0, j.jsx)(`button`, {
                        onClick: () => r(!1),
                        className: `p-1 text-charcoal/70 hover:text-charcoal transition-colors`,
                        "aria-label": `Close menu`,
                        children: (0, j.jsx)(An, { size: 24 })
                    })]
                }), (0, j.jsx)(`nav`, {
                    className: `p-6 space-y-1 overflow-y-auto flex-1`,
                    children: mobileNavLinks.map(e => {
                        let t = o.pathname === e.to;
                        return (0, j.jsx)(V, {
                            to: e.to,
                            onClick: () => r(!1),
                            className: `block py-2 font-heading text-xl transition-colors ${t ? `text-brass font-bold` : `text-charcoal hover:text-brass`}`,
                            children: e.label
                        }, e.to);
                    })
                }), (0, j.jsxs)(`div`, {
                    className: `p-6 border-t border-sand space-y-3 shrink-0 bg-sand/10`,
                    children: [(0, j.jsxs)(`a`, {
                        href: ph(),
                        className: `btn-fill flex items-center justify-center gap-2 font-body font-bold uppercase tracking-[0.12em] text-xs py-3 border border-charcoal text-charcoal hover:text-ivory bg-transparent transition-colors duration-300`,
                        children: [(0, j.jsx)(Cn, { size: 14 }), ` Call `, sh.phone]
                    }), (0, j.jsx)(X, {
                        onClick: () => {
                            r(!1);
                            s({
                                source: `mobile-navbar`,
                                title: `Start your project`,
                                subtitle: `Tell us about your space and we'll prepare a tailored proposal.`
                            });
                        },
                        variant: `brass`,
                        size: `md`,
                        className: `w-full`,
                        children: `Enquire now`
                    })]
                })]
            })]
        })]
    });
}

var yh = (0, _.createContext)(null);

function bh() {
    return (0, _.useContext)(yh) || {
        openEnquiry: () => {}
    }
}

function xh({
    children: e
}) {
    let [t, n] = (0, _.useState)(!1), [r, i] = (0, _.useState)({}), [a, o] = (0, _.useState)(!1), [s, c] = (0, _.useState)(!1), [l, u] = (0, _.useState)(``), d = (0, _.useCallback)((e = {}) => {
        i(e), c(!1), u(``), n(!0)
    }, []), f = (0, _.useCallback)(() => n(!1), []);
    return (0, j.jsxs)(yh.Provider, {
        value: {
            openEnquiry: d
        },
        children: [e, t && (0, j.jsxs)(`div`, {
            className: `fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6`,
            children: [(0, j.jsx)(`div`, {
                className: `absolute inset-0 bg-charcoal/70 backdrop-blur-sm`,
                onClick: f
            }), (0, j.jsxs)(`div`, {
                className: `relative w-full max-w-lg bg-ivory border border-sand p-8 sm:p-10 max-h-[92vh] overflow-y-auto`,
                children: [(0, j.jsx)(`button`, {
                    onClick: f,
                    className: `absolute top-4 right-4 text-charcoal/60 hover:text-charcoal transition-colors`,
                    "aria-label": `Close`,
                    children: (0, j.jsx)(An, {
                        size: 22
                    })
                }), s ? (0, j.jsxs)(`div`, {
                    className: `text-center py-8`,
                    children: [(0, j.jsx)(`div`, {
                        className: `eyebrow mb-4`,
                        children: `Thank you`
                    }), (0, j.jsx)(`h3`, {
                        className: `h2-heading text-charcoal mb-4`,
                        children: `We'll be in touch`
                    }), (0, j.jsx)(`p`, {
                        className: `lead-text mb-8`,
                        children: `Your enquiry has been received. Our design team will reach out within one business day.`
                    }), (0, j.jsx)(X, {
                        variant: `primary`,
                        onClick: f,
                        children: `Close`
                    })]
                }) : (0, j.jsxs)(j.Fragment, {
                    children: [(0, j.jsx)(`div`, {
                        className: `eyebrow mb-3`,
                        children: r.eyebrow || `Enquire`
                    }), (0, j.jsx)(`h3`, {
                        className: `h2-heading text-charcoal mb-2`,
                        children: r.title || `Start your project`
                    }), (0, j.jsx)(`p`, {
                        className: `text-charcoal/70 mb-7 text-sm`,
                        children: r.subtitle || `Tell us a little about your space and we'll take it from there.`
                    }), (0, j.jsxs)(`form`, {
                        onSubmit: async e => {
                            e.preventDefault(), u(``);
                            let t = new FormData(e.currentTarget),
                                n = (t.get(`phone`) || ``).trim(),
                                i = (t.get(`name`) || ``).trim();
                            if (!/^[6-9]\d{9}$/.test(n)) {
                                u(`Please enter a valid 10-digit Indian mobile number.`);
                                return
                            }
                            o(!0);
                            try {
                                await $m.entities.Lead.create({
                                    name: i,
                                    phone: n,
                                    email: (t.get(`email`) || ``).trim(),
                                    space_type: r.spaceType || t.get(`space_type`) || ``,
                                    location: (t.get(`location`) || ``).trim(),
                                    message: r.message || (t.get(`message`) || ``).trim(),
                                    source: r.source || `enquiry`,
                                    page_url: window.location.pathname,
                                    consent: !0
                                }), c(!0)
                            } catch {
                                u(`Something went wrong. Please try again or call us.`)
                            } finally {
                                o(!1)
                            }
                        },
                        className: `space-y-4`,
                        children: [(0, j.jsx)(`input`, {
                            type: `text`,
                            name: `company`,
                            className: `hidden`,
                            tabIndex: -1,
                            autoComplete: `off`
                        }), (0, j.jsx)(Sh, {
                            label: `Full name *`,
                            children: (0, j.jsx)(`input`, {
                                name: `name`,
                                required: !0,
                                defaultValue: r.name || ``,
                                className: `w-full bg-transparent border-b border-charcoal/30 focus:border-brass py-2.5 outline-none transition-colors`
                            })
                        }), (0, j.jsx)(Sh, {
                            label: `Phone number *`,
                            children: (0, j.jsx)(`input`, {
                                name: `phone`,
                                required: !0,
                                inputMode: `tel`,
                                defaultValue: r.phone || ``,
                                placeholder: `10-digit mobile`,
                                className: `w-full bg-transparent border-b border-charcoal/30 focus:border-brass py-2.5 outline-none transition-colors`
                            })
                        }), (0, j.jsx)(Sh, {
                            label: `Email (optional)`,
                            children: (0, j.jsx)(`input`, {
                                name: `email`,
                                type: `email`,
                                defaultValue: r.email || ``,
                                className: `w-full bg-transparent border-b border-charcoal/30 focus:border-brass py-2.5 outline-none transition-colors`
                            })
                        }), !r.spaceType && (0, j.jsx)(Sh, {
                            label: `Space type`,
                            children: (0, j.jsx)(`input`, {
                                name: `space_type`,
                                defaultValue: ``,
                                placeholder: `e.g. 2 BHK, Cafe`,
                                className: `w-full bg-transparent border-b border-charcoal/30 focus:border-brass py-2.5 outline-none transition-colors`
                            })
                        }), (0, j.jsx)(Sh, {
                            label: `Location`,
                            children: (0, j.jsx)(`input`, {
                                name: `location`,
                                defaultValue: r.location || ``,
                                placeholder: `City / area`,
                                className: `w-full bg-transparent border-b border-charcoal/30 focus:border-brass py-2.5 outline-none transition-colors`
                            })
                        }), (0, j.jsx)(Sh, {
                            label: `Message`,
                            children: (0, j.jsx)(`textarea`, {
                                name: `message`,
                                rows: 3,
                                defaultValue: r.message || ``,
                                className: `w-full bg-transparent border-b border-charcoal/30 focus:border-brass py-2.5 outline-none transition-colors resize-none`
                            })
                        }), l && (0, j.jsx)(`p`, {
                            className: `text-destructive text-sm`,
                            children: l
                        }), (0, j.jsxs)(`label`, {
                            className: `flex items-start gap-3 text-xs text-charcoal/70 pt-2`,
                            children: [(0, j.jsx)(`input`, {
                                type: `checkbox`,
                                required: !0,
                                className: `mt-0.5 accent-brass`
                            }), (0, j.jsx)(`span`, {
                                children: `I agree to be contacted by Outscale Interiors and accept the privacy policy.`
                            })]
                        }), (0, j.jsx)(X, {
                            type: `submit`,
                            variant: `primary`,
                            size: `lg`,
                            className: `w-full`,
                            fill: !0,
                            children: a ? `Sending…` : `Send enquiry`
                        })]
                    })]
                })]
            })]
        })]
    })
}

function Sh({
    label: e,
    children: t
}) {
    return (0, j.jsxs)(`label`, {
        className: `block`,
        children: [(0, j.jsx)(`span`, {
            className: `block text-xs uppercase tracking-[0.12em] font-bold text-charcoal/60 mb-1`,
            children: e
        }), t]
    })
}

function Ch() {
    let {
        openEnquiry: e
    } = bh();
    return (0, j.jsx)(`footer`, {
        className: `bg-charcoal text-ivory`,
        children: (0, j.jsxs)(`div`, {
            className: `container-px max-w-[1400px] mx-auto section-pad`,
            children: [(0, j.jsxs)(`div`, {
                className: `grid grid-cols-1 md:grid-cols-12 gap-12`,
                children: [(0, j.jsxs)(`div`, {
                    className: `md:col-span-4`,
                    children: [(0, j.jsxs)(`div`, {
                        className: `font-heading text-3xl mb-4`,
                        children: [`Outscale `, (0, j.jsx)(`span`, {
                            className: `text-brass text-sm uppercase tracking-[0.3em] align-middle`,
                            children: `Interiors`
                        })]
                    }), (0, j.jsx)(`p`, {
                        className: `text-ivory/60 text-sm leading-relaxed max-w-xs`,
                        children: `Premium residential and commercial interior design across Hosur, Krishnagiri, Dharmapuri, Salem and Bengaluru.`
                    })]
                }), (0, j.jsxs)(`div`, {
                    className: `md:col-span-2`,
                    children: [(0, j.jsx)(`div`, {
                        className: `eyebrow mb-5 text-brass`,
                        children: `Explore`
                    }), (0, j.jsxs)(`ul`, {
                        className: `space-y-2.5 text-sm`,
                        children: [(0, j.jsx)(`li`, {
                            children: (0, j.jsx)(V, {
                                to: `/residential`,
                                className: `text-ivory/70 hover:text-ivory transition-colors`,
                                children: `Residential`
                            })
                        }), (0, j.jsx)(`li`, {
                            children: (0, j.jsx)(V, {
                                to: `/commercial`,
                                className: `text-ivory/70 hover:text-ivory transition-colors`,
                                children: `Commercial`
                            })
                        }), (0, j.jsx)(`li`, {
                            children: (0, j.jsx)(V, {
                                to: `/projects`,
                                className: `text-ivory/70 hover:text-ivory transition-colors`,
                                children: `Projects`
                            })
                        }), (0, j.jsx)(`li`, {
                            children: (0, j.jsx)(V, {
                                to: `/3d-designs`,
                                className: `text-ivory/70 hover:text-ivory transition-colors`,
                                children: `3D Designs`
                            })
                        }), (0, j.jsx)(`li`, {
                            children: (0, j.jsx)(V, {
                                to: `/360-tours`,
                                className: `text-ivory/70 hover:text-ivory transition-colors`,
                                children: `360° Tours`
                            })
                        }), (0, j.jsx)(`li`, {
                            children: (0, j.jsx)(V, {
                                to: `/blog`,
                                className: `text-ivory/70 hover:text-ivory transition-colors`,
                                children: `Blog`
                            })
                        })]
                    })]
                }), (0, j.jsxs)(`div`, {
                    className: `md:col-span-3`,
                    children: [(0, j.jsx)(`div`, {
                        className: `eyebrow mb-5 text-brass`,
                        children: `Areas we serve`
                    }), (0, j.jsx)(`ul`, {
                        className: `space-y-2.5 text-sm`,
                        children: ch.map(e => (0, j.jsx)(`li`, {
                            children: (0, j.jsx)(V, {
                                to: `/service-areas/${e.toLowerCase()}`,
                                className: `text-ivory/70 hover:text-ivory transition-colors`,
                                children: e
                            })
                        }, e))
                    })]
                }), (0, j.jsxs)(`div`, {
                    className: `md:col-span-3`,
                    children: [(0, j.jsx)(`div`, {
                        className: `eyebrow mb-5 text-brass`,
                        children: `Contact`
                    }), (0, j.jsxs)(`ul`, {
                        className: `space-y-3 text-sm`,
                        children: [(0, j.jsx)(`li`, {
                            children: (0, j.jsxs)(`a`, {
                                href: ph(),
                                className: `flex items-start gap-3 text-ivory/70 hover:text-ivory transition-colors`,
                                children: [(0, j.jsx)(Cn, {
                                    size: 16,
                                    className: `mt-0.5 shrink-0`
                                }), ` `, sh.phone]
                            })
                        }), (0, j.jsx)(`li`, {
                            children: (0, j.jsxs)(`a`, {
                                href: `mailto:${sh.email}`,
                                className: `flex items-start gap-3 text-ivory/70 hover:text-ivory transition-colors`,
                                children: [(0, j.jsx)(vn, {
                                    size: 16,
                                    className: `mt-0.5 shrink-0`
                                }), ` `, sh.email]
                            })
                        }), (0, j.jsxs)(`li`, {
                            className: `flex items-start gap-3 text-ivory/70`,
                            children: [(0, j.jsx)(yn, {
                                size: 16,
                                className: `mt-0.5 shrink-0`
                            }), ` `, sh.address]
                        })]
                    }), (0, j.jsxs)(`div`, {
                        className: `flex items-center gap-4 mt-6`,
                        children: [(0, j.jsx)(`a`, {
                            href: sh.facebook_url,
                            target: `_blank`,
                            rel: `noopener noreferrer`,
                            "aria-label": `Facebook`,
                            className: `text-ivory/60 hover:text-brass transition-colors`,
                            children: (0, j.jsx)(fn, {
                                size: 18
                            })
                        }), (0, j.jsx)(`a`, {
                            href: fh(),
                            target: `_blank`,
                            rel: `noopener noreferrer`,
                            "aria-label": `WhatsApp`,
                            className: `text-ivory/60 hover:text-brass transition-colors`,
                            children: (0, j.jsx)(mn, {
                                size: 18
                            })
                        }), (0, j.jsx)(`a`, {
                            href: sh.linkedin_url,
                            target: `_blank`,
                            rel: `noopener noreferrer`,
                            "aria-label": `LinkedIn`,
                            className: `text-ivory/60 hover:text-brass transition-colors`,
                            children: (0, j.jsx)(_n, {
                                size: 18
                            })
                        })]
                    })]
                })]
            }), (0, j.jsxs)(`div`, {
                className: `flex flex-col md:flex-row items-center justify-between gap-4 mt-16 pt-8 border-t border-ivory/15 text-xs text-ivory/50`,
                children: [(0, j.jsxs)(`p`, {
                    children: [`© `, new Date().getFullYear(), ` Outscale Interiors. All rights reserved.`]
                }), (0, j.jsxs)(`div`, {
                    className: `flex items-center gap-6`,
                    children: [(0, j.jsx)(V, {
                        to: `/privacy-policy`,
                        className: `hover:text-ivory transition-colors`,
                        children: `Privacy Policy`
                    }), (0, j.jsx)(V, {
                        to: `/terms`,
                        className: `hover:text-ivory transition-colors`,
                        children: `Terms`
                    }), (0, j.jsx)(`button`, {
                        onClick: () => e({
                            source: `footer`,
                            title: `Start your project`
                        }),
                        className: `hover:text-ivory transition-colors`,
                        children: `Enquire`
                    })]
                })]
            })]
        })
    })
}

function wh() {
    let [e, t] = (0, _.useState)(!1), {
        openEnquiry: n
    } = bh();
    return (0, _.useEffect)(() => {
        let e = () => t(window.scrollY > 600);
        return window.addEventListener(`scroll`, e, {
            passive: !0
        }), () => window.removeEventListener(`scroll`, e)
    }, []), (0, j.jsxs)(j.Fragment, {
        children: [(0, j.jsxs)(`div`, {
            className: `hidden md:flex fixed bottom-6 right-6 z-40 flex-col gap-3 transition-all duration-500 ${e?`opacity-100 translate-y-0`:`opacity-0 translate-y-4 pointer-events-none`}`,
            children: [(0, j.jsx)(`a`, {
                href: fh(sh.whatsapp_message),
                target: `_blank`,
                rel: `noopener noreferrer`,
                "aria-label": `WhatsApp`,
                className: `w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform`,
                children: (0, j.jsx)(Sn, {
                    size: 22
                })
            }), (0, j.jsx)(`a`, {
                href: ph(),
                "aria-label": `Call`,
                className: `w-12 h-12 rounded-full bg-brass text-ivory flex items-center justify-center shadow-lg hover:scale-110 transition-transform`,
                children: (0, j.jsx)(Cn, {
                    size: 20
                })
            })]
        }), (0, j.jsx)(`div`, {
            className: `md:hidden fixed bottom-0 inset-x-0 z-40 transition-transform duration-500 ${e?`translate-y-0`:`translate-y-full`}`,
            children: (0, j.jsxs)(`div`, {
                className: `grid grid-cols-3 border-t border-sand bg-ivory/95 backdrop-blur-md`,
                children: [(0, j.jsxs)(`a`, {
                    href: ph(),
                    className: `flex flex-col items-center justify-center gap-1 py-3 text-charcoal`,
                    children: [(0, j.jsx)(Cn, {
                        size: 18
                    }), (0, j.jsx)(`span`, {
                        className: `text-[0.65rem] uppercase tracking-wider font-bold`,
                        children: `Call`
                    })]
                }), (0, j.jsxs)(`a`, {
                    href: fh(sh.whatsapp_message),
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `flex flex-col items-center justify-center gap-1 py-3 text-charcoal border-x border-sand`,
                    children: [(0, j.jsx)(Sn, {
                        size: 18
                    }), (0, j.jsx)(`span`, {
                        className: `text-[0.65rem] uppercase tracking-wider font-bold`,
                        children: `WhatsApp`
                    })]
                }), (0, j.jsx)(`button`, {
                    onClick: () => n({
                        source: `floating`,
                        title: `Start your project`
                    }),
                    className: `flex flex-col items-center justify-center gap-1 py-3 bg-brass text-ivory`,
                    children: (0, j.jsx)(`span`, {
                        className: `text-[0.65rem] uppercase tracking-wider font-bold`,
                        children: `Enquire`
                    })
                })]
            })
        })]
    })
}
var Th = {
        "media.base44.com": `/images/public/`,
        "static.wixstatic.com": `/media/`
    },
    Eh = {
        OPTIMIZED: `optimized`,
        ORIGINAL: `original`,
        FALLBACK: `fallback`
    },
    Dh = [1, 2, 3],
    Oh = 6e3;

function kh(e) {
    let t = {},
        n = {};
    for (let [r, i] of Object.entries(e)) r.startsWith(`data-`) ? t[r] = i : n[r] = i;
    return {
        wrapperProps: t,
        imageProps: n
    }
}

function Ah(e, t, n) {
    let r = new Set((e || ``).split(/\s+/)),
        i = new Set(n.split(/\s+/));
    return t.split(/\s+/).filter(e => ![`inline-block`, `relative`].includes(e) || !i.has(e) || r.has(e)).join(` `)
}

function jh(e) {
    try {
        let t = new URL(e);
        if (t.protocol !== `https:` || t.username || t.password || t.port && t.port !== `443`) return null;
        let n = Th[t.hostname];
        if (!n) return null;
        let r = t.pathname.match(/^(.*)\/v1\/(?:fill|fit)\/[^/]+\/[^/]+$/i),
            i = r ? r[1] : t.pathname,
            a = i.split(`/`).pop();
        return !i.startsWith(n) || !a || !/\.[a-z0-9]+$/i.test(a) || /\.svg$/i.test(a) ? null : {
            baseUrl: `${t.origin}${i}`,
            filename: a
        }
    } catch {
        return null
    }
}
var Mh = e => Math.min(Math.max(Math.round(e), 1), Oh),
    Nh = e => Math.min(1, Math.max(0, e));

function Ph({
    baseUrl: e,
    filename: t
}, {
    width: n,
    height: r,
    crop: i,
    focalPoint: a,
    quality: o
}) {
    let s = [`w_${Mh(n)}`, `h_${Mh(r||n)}`];
    i && s.push(a ? `fp_${Nh(a.x).toFixed(2)}_${Nh(a.y).toFixed(2)}` : `al_c`);
    let c = /\.gif$/i.test(t) ? `enc_webp` : `enc_auto`;
    return s.push(`q_${o}`, `usm_0.66_1.00_0.01`, c, `quality_auto`), `${e}/v1/${i?`fill`:`fit`}/${s.join(`,`)}/${t}`
}

function Fh(e, t) {
    return Dh.map(n => `${Ph(e,{...t,width:t.width*n,height:t.height?t.height*n:void 0})} ${n}x`).join(`, `)
}

function Ih(e, t) {
    return t ?.baseUrl || e
}

function Lh(e) {
    return e === Eh.OPTIMIZED ? Eh.ORIGINAL : Eh.FALLBACK
}

function Rh(e) {
    let [t, n] = _.useState(null);
    return _.useLayoutEffect(() => {
        let t = e.current;
        if (!t) return;
        let r = t.getBoundingClientRect();
        n({
            width: r.width,
            height: r.height
        });
        let i = new ResizeObserver(([e]) => {
            let {
                width: t,
                height: r
            } = e.contentRect;
            n({
                width: t,
                height: r
            })
        });
        return i.observe(t), () => i.disconnect()
    }, [e]), t
}

function zh({
    parsed: e,
    fittingType: t,
    focalPoint: n,
    quality: r,
    className: i,
    onLoad: a,
    onSourceChange: o
}, s) {
    let c = _.useRef(null),
        l = _.useRef(null),
        u = Rh(c),
        [d, f] = _.useState(!1);
    _.useImperativeHandle(s, () => l.current), _.useEffect(() => f(!1), [e.baseUrl]), _.useEffect(() => {
        let e = c.current,
            t = t => o(t.detail.src, Ah(i, e.className, ei(`inline-block relative`, i)));
        return e.addEventListener(`base44:image-replace`, t), () => e.removeEventListener(`base44:image-replace`, t)
    }, [i, o]);
    let p = t !== `fit`;
    return {
        wrapperRef: c,
        imgRef: l,
        loaded: d,
        options: u && {
            width: u.width || 1024,
            height: u.height || void 0,
            crop: p,
            focalPoint: p ? n : void 0,
            quality: r
        },
        handleLoad: e => {
            f(!0), a ?.(e)
        }
    }
}
var Bh = _.forwardRef(({
    src: e,
    parsed: t,
    fittingType: n,
    focalPoint: r,
    quality: i,
    className: a,
    style: o,
    aspectRatio: s,
    onLoad: c,
    onSourceChange: l,
    ...u
}, d) => {
    let {
        wrapperRef: f,
        imgRef: p,
        loaded: m,
        options: h,
        handleLoad: g
    } = zh({
        parsed: t,
        fittingType: n,
        focalPoint: r,
        quality: i,
        className: a,
        onLoad: c,
        onSourceChange: l
    }, d), {
        wrapperProps: _,
        imageProps: v
    } = kh(u);
    return (0, j.jsx)(`span`, {
        ref: f,
        className: ei(`inline-block relative`, a),
        style: {
            aspectRatio: s,
            ...o
        },
        ..._,
        "data-base44-image": ``,
        "data-base44-image-src": e,
        children: (0, j.jsxs)(`span`, {
            "data-source-location": void 0,
            className: `block relative w-full h-full overflow-hidden`,
            children: [h && !m && (0, j.jsx)(`img`, {
                "data-source-location": void 0,
                src: Ph(t, { ...h,
                    width: 20,
                    height: h.height ? Math.max(1, Math.round(20 * h.height / h.width)) : void 0,
                    quality: 20
                }),
                alt: ``,
                "aria-hidden": `true`,
                className: `w-full h-full inset-0 absolute`,
                style: {
                    objectFit: n === `fit` ? `contain` : `cover`,
                    filter: `blur(10px)`,
                    transform: `scale(1.1)`
                }
            }), h && (0, j.jsx)(`img`, {
                "data-source-location": void 0,
                ref: p,
                src: Ph(t, h),
                srcSet: Fh(t, h),
                loading: `lazy`,
                className: ei(`w-full h-full inset-0 absolute`, n === `fit` ? `object-contain` : `object-cover`),
                onLoad: g,
                ...v
            })]
        })
    })
});
Bh.displayName = `ResponsiveImage`;
var Vh = `https://static.wixstatic.com/media/12d367_4f26ccd17f8f4e3a8958306ea08c2332~mv2.png`,
    Z = _.forwardRef(({
        src: e,
        fittingType: t = `fill`,
        originWidth: n,
        originHeight: r,
        focalPointX: i,
        focalPointY: a,
        quality: o = 90,
        onError: s,
        ...c
    }, l) => {
        let [u, d] = _.useState(null), f = u ?.source === e ? u : null, p = f ? f.value : e, m = (t, n) => d({
            source: e,
            value: t,
            className: n,
            sourceClassName: c.className
        });
        _.useEffect(() => d(null), [e]);
        let h = p && p !== Vh ? jh(p) : null,
            g = h ? Eh.OPTIMIZED : Eh.ORIGINAL,
            [v, y] = _.useState({
                src: p,
                mode: g
            }),
            b = v.src === p ? v.mode : g;
        _.useEffect(() => {
            y({
                src: p,
                mode: g
            })
        }, [p, g]);
        let x = e => {
                if (b === Eh.FALLBACK) return;
                let t = Lh(b);
                y({
                    src: p,
                    mode: t
                }), t === Eh.FALLBACK && s ?.(e)
            },
            S = { ...c,
                className: f && f.sourceClassName === c.className ? f.className : c.className,
                onError: x
            };
        if (!p) return (0, j.jsx)(`img`, {
            ref: l,
            src: Vh,
            ...S,
            "data-empty-image": !0
        });
        let C = b === Eh.OPTIMIZED ? h : null;
        if (!C) {
            let e = b === Eh.FALLBACK,
                t = e ? Vh : Ih(p, h);
            return (0, j.jsx)(`img`, {
                ref: l,
                src: t,
                ...S,
                "data-error-image": e || void 0
            })
        }
        let w = typeof i == `number` && typeof a == `number` ? {
                x: i,
                y: a
            } : void 0,
            T = n && r ? `${n} / ${r}` : void 0;
        return (0, j.jsx)(Bh, {
            ref: l,
            src: p,
            parsed: C,
            onSourceChange: m,
            fittingType: t,
            focalPoint: w,
            quality: o,
            aspectRatio: T,
            ...S
        })
    });
Z.displayName = `Image`;

function Hh() {
    let [e, t] = (0, _.useState)(null), [n, r] = (0, _.useState)(!1), {
        openEnquiry: i
    } = bh();
    (0, _.useEffect)(() => {
        if (sessionStorage.getItem(`outscale_offer_dismissed`)) return;
        let e = !1;
        return $m.entities.Offer.filter({
            active: !0
        }, {
            sort: `-created_date`,
            limit: 5
        }).then(({
            items: n
        }) => {
            if (e || !n || !n.length) return;
            let i = new Date,
                a = n.find(e => {
                    if (!e.active) return !1;
                    let t = e.start_date ? new Date(e.start_date) : null,
                        n = e.expiry_date ? new Date(e.expiry_date) : null;
                    return !(t && i < t || n && i > n)
                });
            if (!a) return;
            t(a);
            let o = (a.delay_seconds || 6) * 1e3;
            setTimeout(() => !e && r(!0), o)
        }).catch(() => {}).finally(() => {}), () => {
            e = !0
        }
    }, []);
    let a = () => {
        r(!1), sessionStorage.setItem(`outscale_offer_dismissed`, `1`)
    };
    return !n || !e ? null : (0, j.jsxs)(`div`, {
        className: `fixed inset-0 z-[90] flex items-end sm:items-center justify-center p-0 sm:p-6`,
        children: [(0, j.jsx)(`div`, {
            className: `absolute inset-0 bg-charcoal/70 backdrop-blur-sm`,
            onClick: a
        }), (0, j.jsxs)(`div`, {
            className: `relative w-full sm:max-w-lg bg-ivory overflow-hidden sm:border border-sand shadow-2xl rounded-t-2xl sm:rounded-none max-h-[92vh] overflow-y-auto`,
            children: [(0, j.jsx)(`button`, {
                onClick: a,
                className: `absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-ivory/80 flex items-center justify-center text-charcoal hover:bg-ivory`,
                "aria-label": `Close`,
                children: (0, j.jsx)(An, {
                    size: 18
                })
            }), e.image && (0, j.jsxs)(`div`, {
                className: `relative aspect-[16/10] overflow-hidden bg-sand`,
                children: [(0, j.jsx)(Z, {
                    src: e.image,
                    alt: e.title,
                    className: `w-full h-full`,
                    fittingType: `fill`
                }), (0, j.jsx)(`div`, {
                    className: `absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent`
                })]
            }), (0, j.jsxs)(`div`, {
                className: `p-7 sm:p-9 text-center`,
                children: [(0, j.jsx)(`div`, {
                    className: `eyebrow mb-3`,
                    children: `Limited time`
                }), (0, j.jsx)(`h3`, {
                    className: `h2-heading mb-3 text-balance`,
                    children: e.title
                }), (0, j.jsx)(`p`, {
                    className: `text-charcoal/70 mb-6`,
                    children: e.text
                }), e.show_countdown && e.expiry_date && (0, j.jsx)(Uh, {
                    expiry: e.expiry_date
                }), (0, j.jsx)(X, {
                    onClick: () => {
                        a(), e.cta_link === `enquiry` || !e.cta_link ? i({
                            source: `offer-popup`,
                            title: e.title,
                            subtitle: e.text
                        }) : window.location.href = e.cta_link
                    },
                    variant: `brass`,
                    size: `lg`,
                    className: `w-full`,
                    children: e.cta_label || `Enquire now`
                }), (0, j.jsx)(`button`, {
                    onClick: a,
                    className: `mt-4 text-xs uppercase tracking-[0.12em] text-charcoal/50 hover:text-charcoal`,
                    children: `No thanks`
                })]
            })]
        })]
    })
}

function Uh({
    expiry: e
}) {
    let [t, n] = (0, _.useState)(``);
    return (0, _.useEffect)(() => {
        let t = () => {
            let t = new Date(e).getTime() - Date.now();
            if (t <= 0) {
                n(`Expired`);
                return
            }
            let r = Math.floor(t / 864e5),
                i = Math.floor(t % 864e5 / 36e5),
                a = Math.floor(t % 36e5 / 6e4);
            n(`${r}d ${i}h ${a}m`)
        };
        t();
        let r = setInterval(t, 6e4);
        return () => clearInterval(r)
    }, [e]), (0, j.jsxs)(`div`, {
        className: `text-sm text-brass font-bold mb-5`,
        children: [`Offer ends in `, t]
    })
}

function Wh() {
    return (0, j.jsx)(xh, {
        children: (0, j.jsxs)(`div`, {
            className: `min-h-screen bg-ivory`,
            children: [(0, j.jsx)(vh, {}), (0, j.jsx)(`main`, {
                children: (0, j.jsx)(ls, {})
            }), (0, j.jsx)(Ch, {}), (0, j.jsx)(wh, {}), (0, j.jsx)(Hh, {})]
        })
    })
}
var Gh = [`https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/e4fb692d4_generated_image.png`, `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/ea39026f8_generated_image.png`, `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/5ab2b0600_generated_image.png`],
    Kh = [{
        value: 180,
        suffix: `+`,
        label: `Projects delivered`
    }, {
        value: 12,
        suffix: `yrs`,
        label: `Design experience`
    }, {
        value: 5,
        suffix: ``,
        label: `Cities served`
    }];

function qh() {
    let [e, t] = (0, _.useState)(0), {
        openEnquiry: n
    } = bh();
    return (0, _.useEffect)(() => {
        let e = setInterval(() => t(e => (e + 1) % Gh.length), 6e3);
        return () => clearInterval(e)
    }, []), (0, j.jsxs)(`section`, {
        className: `relative h-screen min-h-[640px] w-full overflow-hidden bg-charcoal`,
        children: [Gh.map((t, n) => (0, j.jsxs)(`div`, {
            className: `absolute inset-0 transition-opacity duration-[1.6s] ease-out ${n===e?`opacity-100`:`opacity-0`}`,
            children: [(0, j.jsx)(Z, {
                src: t,
                alt: ``,
                className: `w-full h-full`,
                fittingType: `fill`
            }), (0, j.jsx)(`div`, {
                className: `absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-charcoal/40`
            })]
        }, n)), (0, j.jsx)(`div`, {
            className: `absolute inset-0 bg-charcoal/20`
        }), (0, j.jsxs)(`div`, {
            className: `relative h-full container-px max-w-[1400px] mx-auto flex flex-col justify-end pb-20 md:pb-28`,
            children: [(0, j.jsxs)(`div`, {
                className: `max-w-4xl text-ivory`,
                children: [(0, j.jsx)(`p`, {
                    className: `eyebrow text-brass mb-6 fade-up in-view`,
                    style: {
                        transitionDelay: `200ms`
                    },
                    children: `Interior design studio · Hosur & Bengaluru`
                }), (0, j.jsxs)(`h1`, {
                    className: `display-heading text-ivory`,
                    children: [(0, j.jsx)(`span`, {
                        className: `line-mask in-view`,
                        style: {
                            transitionDelay: `300ms`
                        },
                        children: (0, j.jsx)(`span`, {
                            children: `Spaces that`
                        })
                    }), (0, j.jsx)(`span`, {
                        className: `line-mask in-view`,
                        style: {
                            transitionDelay: `450ms`
                        },
                        children: (0, j.jsxs)(`span`, {
                            children: [`speak `, (0, j.jsx)(`em`, {
                                className: `italic font-normal text-brass`,
                                children: `your story`
                            })]
                        })
                    })]
                }), (0, j.jsx)(`p`, {
                    className: `lead-text text-ivory/85 mt-8 max-w-xl fade-up in-view`,
                    style: {
                        transitionDelay: `700ms`
                    },
                    children: `We craft residential and commercial interiors with quiet precision — warm, architectural, and built around the way you live and work.`
                }), (0, j.jsxs)(`div`, {
                    className: `flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10 fade-up in-view`,
                    style: {
                        transitionDelay: `850ms`
                    },
                    children: [(0, j.jsxs)(X, {
                        onClick: () => n({
                            source: `hero`,
                            title: `Book a free consultation`,
                            subtitle: `Tell us about your space and we'll prepare a tailored proposal.`
                        }),
                        variant: `brass`,
                        size: `lg`,
                        children: [`Book a free consultation `, (0, j.jsx)(an, {
                            size: 16
                        })]
                    }), (0, j.jsx)(X, {
                        to: `/projects`,
                        variant: `ghost`,
                        size: `lg`,
                        className: `border-ivory/40 text-ivory hover:text-ivory`,
                        children: `View our work`
                    })]
                })]
            }), (0, j.jsx)(`div`, {
                className: `mt-14 md:mt-20 grid grid-cols-3 gap-px bg-ivory/15 border border-ivory/15 max-w-2xl fade-up in-view`,
                style: {
                    transitionDelay: `1000ms`
                },
                children: Kh.map(e => (0, j.jsxs)(`div`, {
                    className: `bg-charcoal/40 backdrop-blur-sm px-5 py-5`,
                    children: [(0, j.jsxs)(`div`, {
                        className: `font-heading text-3xl md:text-4xl text-ivory`,
                        children: [e.value, e.suffix]
                    }), (0, j.jsx)(`div`, {
                        className: `text-[0.65rem] uppercase tracking-[0.15em] text-ivory/60 mt-1`,
                        children: e.label
                    })]
                }, e.label))
            })]
        }), (0, j.jsxs)(`div`, {
            className: `absolute bottom-6 left-1/2 -translate-x-1/2 text-ivory/70 flex flex-col items-center gap-2 animate-bounce`,
            children: [(0, j.jsx)(`span`, {
                className: `text-[0.6rem] uppercase tracking-[0.2em]`,
                children: `Scroll`
            }), (0, j.jsx)(cn, {
                size: 18
            })]
        })]
    })
}

function Q({
    children: e,
    as: t = `div`,
    className: n = ``,
    delay: r = 0,
    variant: i = `fade-up`,
    once: a = !0,
    ...o
}) {
    let s = (0, _.useRef)(null),
        [c, l] = (0, _.useState)(!1);
    return (0, _.useEffect)(() => {
        let e = s.current;
        if (!e) return;
        let t = new IntersectionObserver(([e]) => {
            e.isIntersecting ? (l(!0), a && t.disconnect()) : a || l(!1)
        }, {
            threshold: .15,
            rootMargin: `0px 0px -8% 0px`
        });
        return t.observe(e), () => t.disconnect()
    }, [a]), (0, j.jsx)(t, {
        ref: s,
        className: `${i} ${c?`in-view`:``} ${n}`,
        style: {
            transitionDelay: `${r}ms`
        },
        ...o,
        children: e
    })
}

function Jh() {
    return (0, j.jsx)(`section`, {
        className: `section-pad bg-ivory`,
        children: (0, j.jsxs)(`div`, {
            className: `container-px max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center`,
            children: [(0, j.jsxs)(`div`, {
                className: `lg:col-span-7`,
                children: [(0, j.jsx)(Q, {
                    as: `p`,
                    className: `eyebrow mb-6`,
                    children: `Our philosophy`
                }), (0, j.jsxs)(Q, {
                    as: `h2`,
                    className: `h1-heading text-charcoal text-balance`,
                    delay: 80,
                    children: [`We believe a room should feel `, (0, j.jsx)(`em`, {
                        className: `italic text-brass`,
                        children: `inevitable`
                    }), ` — as though it could never have been arranged any other way.`]
                }), (0, j.jsx)(Q, {
                    as: `p`,
                    className: `lead-text mt-8`,
                    delay: 160,
                    children: `Outscale Interiors is a design studio working across homes and commercial spaces in Hosur, Krishnagiri, Dharmapuri, Salem and Bengaluru. We pair the discipline of architecture with the warmth of real life — choosing materials that age gracefully, light that flatters, and layouts that simply work.`
                }), (0, j.jsx)(Q, {
                    as: `p`,
                    className: `text-charcoal/70 mt-6`,
                    delay: 220,
                    children: `Every project begins with listening. We study how you move through a space, what you reach for first in the morning, where the afternoon light falls. Then we design around the answers — so the finished room feels less like a showroom and more like you.`
                })]
            }), (0, j.jsxs)(`div`, {
                className: `lg:col-span-5 grid grid-cols-2 gap-4`,
                children: [(0, j.jsx)(Q, {
                    as: `div`,
                    className: `aspect-[3/4] overflow-hidden bg-sand`,
                    delay: 120,
                    children: (0, j.jsx)(Z, {
                        src: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/4cc4f4328_generated_image.png`,
                        alt: `Modular kitchen detail`,
                        className: `w-full h-full`,
                        fittingType: `fill`
                    })
                }), (0, j.jsx)(Q, {
                    as: `div`,
                    className: `aspect-[3/4] overflow-hidden bg-sand mt-8`,
                    delay: 240,
                    children: (0, j.jsx)(Z, {
                        src: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/ea39026f8_generated_image.png`,
                        alt: `Master bedroom detail`,
                        className: `w-full h-full`,
                        fittingType: `fill`
                    })
                })]
            })]
        })
    })
}
var Yh = [{
    label: `Residential`,
    title: `Homes designed around the way you live`,
    desc: `From compact 1 BHKs to sprawling luxury residences — kitchens, bedrooms, wardrobes and living spaces that feel effortlessly yours.`,
    image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/b12455e05_generated_image.png`,
    to: `/residential`
}, {
    label: `Commercial`,
    title: `Spaces that work as hard as your business`,
    desc: `Cafes, clinics, salons, showrooms and offices — designed to impress customers and perform every single day.`,
    image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/5ab2b0600_generated_image.png`,
    to: `/commercial`
}];

function Xh() {
    let [e, t] = (0, _.useState)(0);
    return (0, j.jsx)(`section`, {
        className: `bg-ivory`,
        children: (0, j.jsx)(`div`, {
            className: `grid grid-cols-1 md:grid-cols-2 min-h-[60vh] md:min-h-[80vh]`,
            children: Yh.map((n, r) => (0, j.jsx)(Q, {
                as: `div`,
                delay: r * 120,
                className: `relative overflow-hidden group cursor-pointer transition-all duration-700 ${e===r?`md:flex-[3]`:`md:flex-[2]`}`,
                onMouseEnter: () => t(r),
                children: (0, j.jsxs)(V, {
                    to: n.to,
                    className: `absolute inset-0 block`,
                    children: [(0, j.jsx)(Z, {
                        src: n.image,
                        alt: n.label,
                        className: `w-full h-full transition-transform duration-[1.5s] ease-out group-hover:scale-105`,
                        fittingType: `fill`
                    }), (0, j.jsx)(`div`, {
                        className: `absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent`
                    }), (0, j.jsxs)(`div`, {
                        className: `absolute inset-0 p-8 md:p-14 flex flex-col justify-end text-ivory`,
                        children: [(0, j.jsx)(`span`, {
                            className: `eyebrow text-brass mb-4`,
                            children: n.label
                        }), (0, j.jsx)(`h3`, {
                            className: `h2-heading max-w-md text-balance`,
                            children: n.title
                        }), (0, j.jsx)(`div`, {
                            className: `overflow-hidden transition-all duration-500 ${e===r?`max-h-40 opacity-100 mt-4`:`max-h-0 opacity-0`}`,
                            children: (0, j.jsx)(`p`, {
                                className: `text-ivory/80 text-sm md:text-base max-w-md`,
                                children: n.desc
                            })
                        }), (0, j.jsxs)(`div`, {
                            className: `flex items-center gap-2 mt-6 text-ivory group-hover:text-brass transition-colors`,
                            children: [(0, j.jsxs)(`span`, {
                                className: `text-xs uppercase tracking-[0.15em] font-bold`,
                                children: [`Explore `, n.label]
                            }), (0, j.jsx)(on, {
                                size: 16
                            })]
                        })]
                    })]
                })
            }, n.label))
        })
    })
}

function Zh({
    eyebrow: e,
    title: t,
    intro: n,
    align: r = `left`,
    className: i = ``,
    light: a = !1
}) {
    return (0, j.jsxs)(`div`, {
        className: ei(`max-w-3xl`, r === `center` && `mx-auto text-center`, i),
        children: [e && (0, j.jsx)(Q, {
            as: `p`,
            className: `eyebrow mb-5`,
            children: e
        }), (0, j.jsx)(Q, {
            as: `h2`,
            className: ei(`h2-heading text-balance`, a ? `text-ivory` : `text-charcoal`),
            children: t
        }), n && (0, j.jsx)(Q, {
            as: `p`,
            className: `lead-text mt-6`,
            delay: 120,
            children: n
        })]
    })
}
var Qh = [{
    name: `Modular Kitchen`,
    image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/4cc4f4328_generated_image.png`,
    slug: `modular-kitchen`
}, {
    name: `Living Room`,
    image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/72108b898_generated_image.png`,
    slug: `living-room`
}, {
    name: `Master Bedroom`,
    image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/ea39026f8_generated_image.png`,
    slug: `master-bedroom`
}, {
    name: `Wardrobe`,
    image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/a6d68da7e_generated_image.png`,
    slug: `wardrobe`
}, {
    name: `Pooja Room`,
    image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/ea7350bba_generated_image.png`,
    slug: `pooja-room`
}, {
    name: `False Ceiling`,
    image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/e4fb692d4_generated_image.png`,
    slug: `false-ceiling`
}];

function $h() {
    return (0, j.jsx)(`section`, {
        className: `section-pad bg-ivory`,
        children: (0, j.jsxs)(`div`, {
            className: `container-px max-w-[1400px] mx-auto`,
            children: [(0, j.jsxs)(`div`, {
                className: `flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14`,
                children: [(0, j.jsx)(Zh, {
                    eyebrow: `Signature spaces`,
                    title: `Every room, considered`,
                    intro: `From the first sketch to the final fitting, we design each space to be beautiful, functional and built to last.`
                }), (0, j.jsxs)(V, {
                    to: `/services`,
                    className: `hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-bold text-charcoal hover:text-brass transition-colors shrink-0`,
                    children: [`All services `, (0, j.jsx)(on, {
                        size: 16
                    })]
                })]
            }), (0, j.jsx)(`div`, {
                className: `grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6`,
                children: Qh.map((e, t) => (0, j.jsx)(Q, {
                    as: `div`,
                    delay: t % 3 * 100,
                    className: `group`,
                    children: (0, j.jsxs)(V, {
                        to: `/services/${e.slug}`,
                        className: `block relative overflow-hidden aspect-[4/5] bg-sand`,
                        children: [(0, j.jsx)(Z, {
                            src: e.image,
                            alt: e.name,
                            className: `w-full h-full transition-transform duration-[1.2s] ease-out group-hover:scale-105`,
                            fittingType: `fill`
                        }), (0, j.jsx)(`div`, {
                            className: `absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent`
                        }), (0, j.jsxs)(`div`, {
                            className: `absolute bottom-0 left-0 right-0 p-5 md:p-6 flex items-end justify-between text-ivory`,
                            children: [(0, j.jsx)(`h3`, {
                                className: `font-heading text-xl md:text-2xl`,
                                children: e.name
                            }), (0, j.jsx)(`span`, {
                                className: `w-9 h-9 rounded-full bg-ivory/15 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity`,
                                children: (0, j.jsx)(on, {
                                    size: 15
                                })
                            })]
                        })]
                    })
                }, e.slug))
            })]
        })
    })
}

function eg({
    project: e,
    index: t = 0
}) {
    let n = e.slug || (e.id || ``).toString();
    return (0, j.jsx)(Q, {
        as: `div`,
        delay: t % 3 * 100,
        className: `group`,
        children: (0, j.jsx)(V, {
            to: `/projects/${n}`,
            className: `block`,
            children: (0, j.jsxs)(`div`, {
                className: `relative overflow-hidden aspect-[4/3] bg-sand`,
                children: [e.hero_image && (0, j.jsx)(Z, {
                    src: e.hero_image,
                    alt: `${e.title} — ${e.space_type||``} in ${e.location||``}`,
                    className: `w-full h-full transition-transform duration-[1.2s] ease-out group-hover:scale-105`,
                    fittingType: `fill`
                }), (0, j.jsx)(`div`, {
                    className: `absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-80`
                }), (0, j.jsxs)(`div`, {
                    className: `absolute bottom-0 left-0 right-0 p-6 text-ivory`,
                    children: [e.property_type && (0, j.jsx)(`span`, {
                        className: `eyebrow text-brass block mb-2`,
                        children: e.property_type
                    }), (0, j.jsx)(`h3`, {
                        className: `font-heading text-2xl md:text-3xl leading-tight`,
                        children: e.title
                    }), (e.space_type || e.location) && (0, j.jsx)(`p`, {
                        className: `text-sm text-ivory/80 mt-1`,
                        children: [e.space_type, e.location].filter(Boolean).join(` · `)
                    })]
                }), (0, j.jsx)(`div`, {
                    className: `absolute top-5 right-5 w-11 h-11 rounded-full bg-ivory text-charcoal flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`,
                    children: (0, j.jsx)(on, {
                        size: 18
                    })
                })]
            })
        })
    })
}
var tg = [{
        id: `p1`,
        title: `The Teak Residence`,
        slug: `the-teak-residence`,
        property_type: `Residential`,
        space_type: `3 BHK Home`,
        bhk_size: `3 BHK`,
        style: `Modern Warm`,
        location: `Hosur`,
        area_sqft: 1850,
        duration_weeks: 10,
        materials: `Teak oak, brass, Italian marble`,
        story: `A family home built around a central courtyard light well, blending warm teak tones with cool marble underfoot.`,
        hero_image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/b12455e05_generated_image.png`,
        gallery: [`https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/4cc4f4328_generated_image.png`, `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/ea39026f8_generated_image.png`],
        featured: !0
    }, {
        id: `p2`,
        title: `Copper & Oak Cafe`,
        slug: `copper-and-oak-cafe`,
        property_type: `Commercial`,
        space_type: `Cafe`,
        bhk_size: `Commercial`,
        style: `Industrial Warm`,
        location: `Bengaluru`,
        area_sqft: 1200,
        duration_weeks: 6,
        materials: `Reclaimed oak, copper, exposed concrete`,
        story: `A neighbourhood cafe where reclaimed timber meets warm copper detailing and the hum of daily life.`,
        hero_image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/5ab2b0600_generated_image.png`,
        gallery: [],
        featured: !0
    }, {
        id: `p3`,
        title: `The Linen Apartment`,
        slug: `the-linen-apartment`,
        property_type: `Residential`,
        space_type: `2 BHK Home`,
        bhk_size: `2 BHK`,
        style: `Scandinavian Calm`,
        location: `Salem`,
        area_sqft: 1150,
        duration_weeks: 8,
        materials: `White oak, linen, brushed brass`,
        story: `A compact apartment reimagined with soft linen tones and clever storage that disappears into the walls.`,
        hero_image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/72108b898_generated_image.png`,
        gallery: [],
        featured: !0
    }, {
        id: `p4`,
        title: `Mirror House Salon`,
        slug: `mirror-house-salon`,
        property_type: `Commercial`,
        space_type: `Salon`,
        bhk_size: `Commercial`,
        style: `Contemporary Luxe`,
        location: `Krishnagiri`,
        area_sqft: 900,
        duration_weeks: 5,
        materials: `Brass-framed mirrors, velvet, warm oak`,
        story: `A salon designed around the ritual of getting ready — warm, reflective, and quietly glamorous.`,
        hero_image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/dc9e18904_generated_image.png`,
        gallery: [],
        featured: !0
    }, {
        id: `p5`,
        title: `The Greenway Office`,
        slug: `the-greenway-office`,
        property_type: `Commercial`,
        space_type: `Office`,
        bhk_size: `Commercial`,
        style: `Biophilic Modern`,
        location: `Bengaluru`,
        area_sqft: 3200,
        duration_weeks: 12,
        materials: `Oak slatting, acoustic felt, living walls`,
        story: `A workspace that breathes — living walls, warm slatted oak and acoustic comfort for focused teams.`,
        hero_image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/78960ba57_generated_image.png`,
        gallery: [],
        featured: !0
    }, {
        id: `p6`,
        title: `The Brass Wardrobe Home`,
        slug: `the-brass-wardrobe-home`,
        property_type: `Residential`,
        space_type: `3 BHK Home`,
        bhk_size: `3 BHK`,
        style: `Contemporary`,
        location: `Dharmapuri`,
        area_sqft: 1600,
        duration_weeks: 9,
        materials: `Oak veneer, brass rods, fluted glass`,
        story: `A home organised around a showpiece walk-in wardrobe — function dressed in warm oak and brass.`,
        hero_image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/a6d68da7e_generated_image.png`,
        gallery: [],
        featured: !0
    }],
    ng = [{
        id: `d1`,
        title: `Warm Oak Kitchen Concept`,
        space_type: `Modular Kitchen`,
        style: `Modern`,
        hero_image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/4cc4f4328_generated_image.png`,
        design_notes: `An L-shaped kitchen centred on a marble island, with fluted oak cabinetry and integrated brass handles.`
    }, {
        id: `d2`,
        title: `Calm Living Concept`,
        space_type: `Living Room`,
        style: `Scandinavian`,
        hero_image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/72108b898_generated_image.png`,
        design_notes: `A serene living room with layered textures, soft daylighting and a sculptural feature wall.`
    }, {
        id: `d3`,
        title: `Brass Pooja Concept`,
        space_type: `Pooja Room`,
        style: `Traditional Modern`,
        hero_image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/ea7350bba_generated_image.png`,
        design_notes: `A contemporary pooja space with brass inlay, warm wood and a soft, reverent lighting scheme.`
    }, {
        id: `d4`,
        title: `Walk-in Wardrobe Concept`,
        space_type: `Wardrobe`,
        style: `Contemporary`,
        hero_image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/a6d68da7e_generated_image.png`,
        design_notes: `A dressing room designed around display, with glass-fronted cabinets and integrated lighting.`
    }, {
        id: `d5`,
        title: `Linen Bedroom Concept`,
        space_type: `Master Bedroom`,
        style: `Calm Luxury`,
        hero_image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/ea39026f8_generated_image.png`,
        design_notes: `A restful bedroom in cream and sand, with an oak headboard wall and brass reading lamps.`
    }, {
        id: `d6`,
        title: `Rendered Living Concept`,
        space_type: `Living Room`,
        style: `Modern`,
        hero_image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/e6e645c2e_generated_image.png`,
        design_notes: `A 3D-rendered living space exploring the interplay of warm materials and soft natural light.`
    }],
    rg = [{
        id: `t1`,
        name: `Priya & Karthik`,
        role: `Homeowners`,
        location: `Hosur`,
        quote: `Outscale turned our 3 BHK into a home that feels uniquely ours. The 3D renders meant zero surprises, and the finish quality is exceptional.`,
        rating: 5
    }, {
        id: `t2`,
        name: `Arjun Mehta`,
        role: `Cafe Owner`,
        location: `Bengaluru`,
        quote: `Our cafe opened to a full house every weekend. The design draws people in and the flow just works during rushes.`,
        rating: 5
    }, {
        id: `t3`,
        name: `Dr. Lakshmi`,
        role: `Dental Clinic Owner`,
        location: `Salem`,
        quote: `Patients constantly compliment the calm, clean feel of the clinic. Outscale understood clinical flow and aesthetics equally.`,
        rating: 5
    }, {
        id: `t4`,
        name: `The Reddy Family`,
        role: `Homeowners`,
        location: `Krishnagiri`,
        quote: `From the first sketch to handover, the team was professional and on time. Our pooja room is the heart of the house now.`,
        rating: 5
    }],
    ig = [{
        id: `b1`,
        title: `Modular Kitchen Planning: A Complete Guide`,
        slug: `modular-kitchen-planning-guide`,
        excerpt: `Everything you need to know before designing your modular kitchen — layout, materials, hardware and budgeting.`,
        category: `Guides`,
        author: `Outscale Interiors`,
        reading_time: 6,
        featured_image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/4cc4f4328_generated_image.png`,
        published_date: `2026-09-28`
    }, {
        id: `b2`,
        title: `2 BHK Interior Budgeting: Where to Spend, Where to Save`,
        slug: `2bhk-interior-budgeting`,
        excerpt: `Smart ways to allocate your 2 BHK interior budget for maximum impact without compromise.`,
        category: `Residential`,
        author: `Outscale Interiors`,
        reading_time: 5,
        featured_image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/72108b898_generated_image.png`,
        published_date: `2026-09-14`
    }, {
        id: `b3`,
        title: `False Ceiling Styles That Transform a Room`,
        slug: `false-ceiling-styles`,
        excerpt: `From warm cove lighting to sculptural forms — the ceiling designs that define a space.`,
        category: `Guides`,
        author: `Outscale Interiors`,
        reading_time: 4,
        featured_image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/e4fb692d4_generated_image.png`,
        published_date: `2026-08-30`
    }];

function ag() {
    let [e, t] = (0, _.useState)(tg);
    return (0, _.useEffect)(() => {
        $m.entities.Project.filter({
            featured: !0
        }, {
            sort: `-created_date`,
            limit: 6
        }).then(({
            items: e
        }) => {
            e && e.length && t(e)
        }).catch(() => {})
    }, []), (0, j.jsx)(`section`, {
        className: `section-pad bg-ivory`,
        children: (0, j.jsxs)(`div`, {
            className: `container-px max-w-[1400px] mx-auto`,
            children: [(0, j.jsxs)(`div`, {
                className: `flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14`,
                children: [(0, j.jsx)(Zh, {
                    eyebrow: `Featured work`,
                    title: `Selected projects`,
                    intro: `A glimpse of the homes and commercial spaces we've brought to life across the region.`
                }), (0, j.jsxs)(X, {
                    to: `/projects`,
                    variant: `ghost`,
                    size: `md`,
                    className: `shrink-0`,
                    children: [`All projects `, (0, j.jsx)(an, {
                        size: 15
                    })]
                })]
            }), (0, j.jsx)(`div`, {
                className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8`,
                children: e.slice(0, 6).map((e, t) => (0, j.jsx)(eg, {
                    project: e,
                    index: t
                }, e.id))
            })]
        })
    })
}

function og() {
    return (0, j.jsxs)(`section`, {
        className: `relative min-h-[70vh] flex items-center overflow-hidden bg-charcoal`,
        children: [(0, j.jsx)(Z, {
            src: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/e6e645c2e_generated_image.png`,
            alt: `360 tour preview`,
            className: `absolute inset-0 w-full h-full`,
            fittingType: `fill`
        }), (0, j.jsx)(`div`, {
            className: `absolute inset-0 bg-charcoal/60`
        }), (0, j.jsxs)(`div`, {
            className: `relative container-px max-w-[1400px] mx-auto text-ivory`,
            children: [(0, j.jsx)(Q, {
                as: `p`,
                className: `eyebrow text-brass mb-5`,
                children: `360° experience`
            }), (0, j.jsx)(Q, {
                as: `h2`,
                className: `h1-heading text-ivory max-w-2xl text-balance`,
                delay: 80,
                children: `Step inside, from anywhere`
            }), (0, j.jsx)(Q, {
                as: `p`,
                className: `lead-text text-ivory/80 mt-6 max-w-xl`,
                delay: 140,
                children: `Walk through our finished projects in immersive 360°. Drag, look around, and get a true sense of the space, the light and the materials — before you visit in person.`
            }), (0, j.jsx)(Q, {
                as: `div`,
                className: `mt-10`,
                delay: 200,
                children: (0, j.jsx)(X, {
                    to: `/360-tours`,
                    variant: `brass`,
                    size: `lg`,
                    children: (0, j.jsxs)(`span`, {
                        className: `flex items-center gap-2`,
                        children: [(0, j.jsx)(wn, {
                            size: 15
                        }), ` Start a tour`]
                    })
                })
            })]
        })]
    })
}

function sg() {
    let [e, t] = (0, _.useState)(50), [n, r] = (0, _.useState)(!1), i = (0, _.useRef)(null), a = (0, _.useRef)(!1);
    (0, _.useEffect)(() => {
        let e = i.current;
        if (!e) return;
        let t = new IntersectionObserver(([e]) => {
            e.isIntersecting && (r(!0), t.disconnect())
        }, {
            threshold: .15
        });
        return t.observe(e), () => t.disconnect()
    }, []);
    let o = e => {
        let n = i.current.getBoundingClientRect(),
            r = (e - n.left) / n.width * 100;
        t(Math.max(0, Math.min(100, r)))
    };
    return (0, j.jsx)(`section`, {
        className: `section-pad bg-sand/40`,
        children: (0, j.jsxs)(`div`, {
            className: `container-px max-w-[1400px] mx-auto`,
            children: [(0, j.jsx)(Zh, {
                eyebrow: `Before & after`,
                title: `The transformation, revealed`,
                intro: `Drag the handle to see how raw, unfinished rooms become considered, finished spaces.`,
                align: `center`,
                className: `mb-14`
            }), (0, j.jsxs)(`div`, {
                ref: i,
                className: `relative max-w-5xl mx-auto aspect-[16/10] overflow-hidden bg-sand select-none fade-up ${n?`in-view`:``}`,
                onMouseDown: e => {
                    a.current = !0, o(e.clientX)
                },
                onMouseMove: e => a.current && o(e.clientX),
                onMouseUp: () => {
                    a.current = !1
                },
                onMouseLeave: () => {
                    a.current = !1
                },
                onTouchStart: e => {
                    a.current = !0, o(e.touches[0].clientX)
                },
                onTouchMove: e => a.current && o(e.touches[0].clientX),
                onTouchEnd: () => {
                    a.current = !1
                },
                children: [(0, j.jsx)(`img`, {
                    src: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/b12455e05_generated_image.png`,
                    alt: `After — finished living room`,
                    className: `absolute inset-0 w-full h-full object-cover`
                }), (0, j.jsx)(`div`, {
                    className: `absolute inset-0 overflow-hidden`,
                    style: {
                        width: `${e}%`
                    },
                    children: (0, j.jsx)(`img`, {
                        src: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/789b56c23_generated_image.png`,
                        alt: `Before — empty room`,
                        className: `absolute inset-0 h-full object-cover`,
                        style: {
                            width: i.current ? `${i.current.offsetWidth}px` : `100%`
                        }
                    })
                }), (0, j.jsx)(`div`, {
                    className: `absolute top-0 bottom-0 w-px bg-ivory pointer-events-none`,
                    style: {
                        left: `${e}%`
                    },
                    children: (0, j.jsx)(`div`, {
                        className: `absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-ivory shadow-lg flex items-center justify-center text-charcoal text-xs font-bold`,
                        children: `⟷`
                    })
                }), (0, j.jsx)(`span`, {
                    className: `absolute top-4 left-4 px-3 py-1 bg-charcoal/70 text-ivory text-xs uppercase tracking-wider pointer-events-none`,
                    children: `Before`
                }), (0, j.jsx)(`span`, {
                    className: `absolute top-4 right-4 px-3 py-1 bg-brass text-ivory text-xs uppercase tracking-wider pointer-events-none`,
                    children: `After`
                })]
            })]
        })
    })
}
var cg = [{
    n: `01`,
    title: `Consultation`,
    desc: `We meet, walk through your space, and understand how you live or work. No pressure, no jargon — just listening.`
}, {
    n: `02`,
    title: `Concept`,
    desc: `Mood boards, layout options and material palettes. We refine the direction until it feels right.`
}, {
    n: `03`,
    title: `3D Design`,
    desc: `Photorealistic 3D renders let you walk through your space before a single wall is touched.`
}, {
    n: `04`,
    title: `Execution`,
    desc: `Our skilled teams bring the design to life with precise carpentry, finishing and quality checks.`
}, {
    n: `05`,
    title: `Handover`,
    desc: `We hand over a space that's move-in ready — cleaned, styled, and exactly as promised.`
}];

function lg() {
    return (0, j.jsx)(`section`, {
        className: `section-pad bg-olive text-ivory`,
        children: (0, j.jsxs)(`div`, {
            className: `container-px max-w-[1400px] mx-auto`,
            children: [(0, j.jsx)(Zh, {
                eyebrow: `How we work`,
                title: `A calm, five-step process`,
                intro: `No surprises, no chaos. Just a clear path from first conversation to final handover.`,
                light: !0,
                className: `mb-16`
            }), (0, j.jsx)(`div`, {
                className: `grid grid-cols-1 md:grid-cols-5 gap-px bg-ivory/15`,
                children: cg.map((e, t) => (0, j.jsxs)(Q, {
                    as: `div`,
                    delay: t * 100,
                    className: `bg-olive p-7 md:p-8 relative`,
                    children: [(0, j.jsx)(`div`, {
                        className: `font-heading text-5xl text-brass/40 mb-6`,
                        children: e.n
                    }), (0, j.jsx)(`h3`, {
                        className: `font-heading text-2xl mb-3`,
                        children: e.title
                    }), (0, j.jsx)(`p`, {
                        className: `text-ivory/70 text-sm leading-relaxed`,
                        children: e.desc
                    })]
                }, e.n))
            })]
        })
    })
}
var ug = [`Cafes`, `Restaurants`, `Dental Clinics`, `Salons`, `Spas`, `Textile Showrooms`, `Jewellery Showrooms`, `Retail Shops`, `Offices`, `Hotels`, `Gyms`, `Medical Shops`];

function dg() {
    let e = [...ug, ...ug];
    return (0, j.jsxs)(`section`, {
        className: `py-10 md:py-14 bg-charcoal text-ivory overflow-hidden`,
        children: [(0, j.jsx)(`div`, {
            className: `flex whitespace-nowrap`,
            children: (0, j.jsx)(`div`, {
                className: `flex shrink-0 animate-[marquee_30s_linear_infinite]`,
                children: e.map((e, t) => (0, j.jsxs)(`span`, {
                    className: `font-heading text-3xl md:text-5xl px-8 text-ivory/80 flex items-center gap-8`,
                    children: [e, (0, j.jsx)(`span`, {
                        className: `text-brass text-xl`,
                        children: `✦`
                    })]
                }, t))
            })
        }), (0, j.jsx)(`style`, {
            children: `@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`
        })]
    })
}
var fg = [{
        icon: En,
        title: `Precision design`,
        desc: `Millimetre-accurate drawings and 3D renders mean what you see is exactly what you get.`
    }, {
        icon: On,
        title: `Quality you can touch`,
        desc: `Premium hardware, moisture-resistant boards and finishes that hold up to daily life.`
    }, {
        icon: ln,
        title: `On-time delivery`,
        desc: `Clear timelines and a dedicated project manager keep your project on track.`
    }, {
        icon: hn,
        title: `Timeless materials`,
        desc: `Warm woods, natural stone and brass — chosen to age beautifully, not date quickly.`
    }],
    pg = [{
        value: 180,
        suffix: `+`,
        label: `Projects delivered`
    }, {
        value: 98,
        suffix: `%`,
        label: `Client satisfaction`
    }, {
        value: 45,
        suffix: `d`,
        label: `Avg. delivery time`
    }];

function mg({
    value: e,
    suffix: t
}) {
    let [n, r] = (0, _.useState)(0), i = (0, _.useRef)(null), a = (0, _.useRef)(!1);
    return (0, _.useEffect)(() => {
        let t = i.current;
        if (!t) return;
        let n = new IntersectionObserver(([t]) => {
            if (t.isIntersecting && !a.current) {
                a.current = !0;
                let t = performance.now(),
                    n = i => {
                        let a = Math.min((i - t) / 1600, 1);
                        r(Math.round(e * (1 - (1 - a) ** 3))), a < 1 && requestAnimationFrame(n)
                    };
                requestAnimationFrame(n)
            }
        }, {
            threshold: .4
        });
        return n.observe(t), () => n.disconnect()
    }, [e]), (0, j.jsxs)(`span`, {
        ref: i,
        children: [n, t]
    })
}

function hg() {
    return (0, j.jsx)(`section`, {
        className: `section-pad bg-ivory`,
        children: (0, j.jsxs)(`div`, {
            className: `container-px max-w-[1400px] mx-auto`,
            children: [(0, j.jsx)(Zh, {
                eyebrow: `Why Outscale`,
                title: `Designed with intention, built to last`,
                intro: `The details that set a Outscale interior apart — and the standards we never compromise on.`,
                className: `mb-14`
            }), (0, j.jsx)(`div`, {
                className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-sand`,
                children: fg.map((e, t) => (0, j.jsxs)(Q, {
                    as: `div`,
                    delay: t % 4 * 100,
                    className: `bg-ivory p-8`,
                    children: [(0, j.jsx)(e.icon, {
                        size: 28,
                        className: `text-brass mb-6`,
                        strokeWidth: 1.5
                    }), (0, j.jsx)(`h3`, {
                        className: `font-heading text-2xl mb-3`,
                        children: e.title
                    }), (0, j.jsx)(`p`, {
                        className: `text-charcoal/70 text-sm leading-relaxed`,
                        children: e.desc
                    })]
                }, e.title))
            }), (0, j.jsx)(`div`, {
                className: `grid grid-cols-3 gap-8 mt-16 border-t border-sand pt-12`,
                children: pg.map(e => (0, j.jsxs)(Q, {
                    as: `div`,
                    className: `text-center`,
                    children: [(0, j.jsx)(`div`, {
                        className: `font-heading text-4xl md:text-6xl text-charcoal`,
                        children: (0, j.jsx)(mg, {
                            value: e.value,
                            suffix: e.suffix
                        })
                    }), (0, j.jsx)(`div`, {
                        className: `text-xs uppercase tracking-[0.15em] text-charcoal/60 mt-2`,
                        children: e.label
                    })]
                }, e.label))
            })]
        })
    })
}

function gg() {
    let [e, t] = (0, _.useState)(ng);
    return (0, _.useEffect)(() => {
        $m.entities.Design3D.filter({
            featured: !0
        }, {
            sort: `-created_date`,
            limit: 6
        }).then(({
            items: e
        }) => {
            e && e.length && t(e)
        }).catch(() => {})
    }, []), (0, j.jsx)(`section`, {
        className: `section-pad bg-charcoal text-ivory`,
        children: (0, j.jsxs)(`div`, {
            className: `container-px max-w-[1400px] mx-auto`,
            children: [(0, j.jsxs)(`div`, {
                className: `flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14`,
                children: [(0, j.jsxs)(`div`, {
                    className: `max-w-2xl`,
                    children: [(0, j.jsx)(Q, {
                        as: `p`,
                        className: `eyebrow text-brass mb-5`,
                        children: `3D Designs`
                    }), (0, j.jsx)(Q, {
                        as: `h2`,
                        className: `h2-heading text-ivory`,
                        delay: 80,
                        children: `See it before you build it`
                    }), (0, j.jsx)(Q, {
                        as: `p`,
                        className: `lead-text text-ivory/70 mt-6`,
                        delay: 140,
                        children: `Every Outscale project begins with photorealistic 3D renders — so you can walk through your space, refine every detail, and approve with confidence.`
                    })]
                }), (0, j.jsxs)(X, {
                    to: `/3d-designs`,
                    variant: `ghost`,
                    size: `md`,
                    className: `border-ivory/40 text-ivory hover:text-ivory shrink-0`,
                    children: [`Explore 3D designs `, (0, j.jsx)(an, {
                        size: 15
                    })]
                })]
            }), (0, j.jsx)(`div`, {
                className: `grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6`,
                children: e.slice(0, 6).map((e, t) => (0, j.jsxs)(Q, {
                    as: V,
                    to: `/3d-designs/${e.slug||e.id}`,
                    delay: t % 3 * 100,
                    className: `group block relative overflow-hidden aspect-[4/3] bg-olive`,
                    children: [(0, j.jsx)(Z, {
                        src: e.hero_image,
                        alt: e.title,
                        className: `w-full h-full transition-transform duration-[1.2s] group-hover:scale-105`,
                        fittingType: `fill`
                    }), (0, j.jsx)(`div`, {
                        className: `absolute inset-0 bg-gradient-to-t from-charcoal/85 via-transparent to-transparent`
                    }), (0, j.jsx)(`div`, {
                        className: `absolute top-4 left-4`,
                        children: (0, j.jsx)(`span`, {
                            className: `px-2.5 py-1 bg-brass text-ivory text-[0.6rem] uppercase tracking-wider font-bold`,
                            children: `3D Concept`
                        })
                    }), (0, j.jsxs)(`div`, {
                        className: `absolute bottom-0 left-0 right-0 p-5`,
                        children: [(0, j.jsx)(`h3`, {
                            className: `font-heading text-lg md:text-xl text-ivory`,
                            children: e.title
                        }), (0, j.jsx)(`p`, {
                            className: `text-ivory/60 text-xs mt-1`,
                            children: e.space_type
                        })]
                    })]
                }, e.id))
            })]
        })
    })
}

function _g() {
    let [e, t] = (0, _.useState)(rg), [n, r] = (0, _.useState)(0);
    (0, _.useEffect)(() => {
        $m.entities.Testimonial.filter({}, {
            sort: `order`,
            limit: 10
        }).then(({
            items: e
        }) => {
            e && e.length && t(e)
        }).catch(() => {})
    }, []);
    let i = e[n] || e[0];
    return (0, j.jsx)(`section`, {
        className: `section-pad bg-sand/30`,
        children: (0, j.jsxs)(`div`, {
            className: `container-px max-w-[1400px] mx-auto`,
            children: [(0, j.jsx)(Zh, {
                eyebrow: `Client stories`,
                title: `Loved by homeowners and businesses`,
                align: `center`,
                className: `mb-14`
            }), (0, j.jsxs)(Q, {
                as: `div`,
                className: `max-w-3xl mx-auto text-center`,
                children: [(0, j.jsx)(Tn, {
                    size: 40,
                    className: `text-brass mx-auto mb-6`,
                    strokeWidth: 1
                }), (0, j.jsxs)(`p`, {
                    className: `font-heading text-2xl md:text-4xl leading-snug text-charcoal text-balance italic`,
                    children: [`"`, i ?.quote, `"`]
                }), (0, j.jsx)(`div`, {
                    className: `flex items-center justify-center gap-1 mt-8`,
                    children: Array.from({
                        length: i ?.rating || 5
                    }).map((e, t) => (0, j.jsx)(kn, {
                        size: 16,
                        className: `fill-brass text-brass`
                    }, t))
                }), (0, j.jsxs)(`div`, {
                    className: `mt-5`,
                    children: [(0, j.jsx)(`div`, {
                        className: `font-heading text-xl text-charcoal`,
                        children: i ?.name
                    }), (0, j.jsxs)(`div`, {
                        className: `text-xs uppercase tracking-[0.12em] text-charcoal/60 mt-1`,
                        children: [i ?.role, ` · `, i ?.location]
                    })]
                })]
            }), e.length > 1 && (0, j.jsx)(`div`, {
                className: `flex items-center justify-center gap-2 mt-10`,
                children: e.map((e, t) => (0, j.jsx)(`button`, {
                    onClick: () => r(t),
                    "aria-label": `Testimonial ${t+1}`,
                    className: `h-2 transition-all ${t===n?`w-8 bg-brass`:`w-2 bg-charcoal/20`}`
                }, t))
            })]
        })
    })
}

function vg() {
    return (0, j.jsx)(`section`, {
        className: `section-pad bg-sand/30`,
        children: (0, j.jsxs)(`div`, {
            className: `container-px max-w-[1400px] mx-auto`,
            children: [(0, j.jsx)(Zh, {
                eyebrow: `Where we work`,
                title: `Proudly serving five cities`,
                intro: `From our Hosur studio to homes and businesses across the region.`,
                align: `center`,
                className: `mb-12`
            }), (0, j.jsx)(`div`, {
                className: `flex flex-wrap justify-center gap-3 md:gap-4`,
                children: ch.map((e, t) => (0, j.jsxs)(Q, {
                    as: V,
                    to: `/service-areas/${e.toLowerCase()}`,
                    delay: t * 80,
                    className: `group inline-flex items-center gap-2 px-6 py-4 bg-ivory border border-sand hover:border-brass transition-colors`,
                    children: [(0, j.jsx)(`span`, {
                        className: `font-heading text-xl md:text-2xl text-charcoal group-hover:text-brass transition-colors`,
                        children: e
                    }), (0, j.jsx)(an, {
                        size: 16,
                        className: `text-brass -rotate-45 group-hover:rotate-0 transition-transform`
                    })]
                }, e))
            })]
        })
    })
}

function yg() {
    let [e, t] = (0, _.useState)(ig);
    return (0, _.useEffect)(() => {
        $m.entities.BlogPost.filter({
            status: `published`
        }, {
            sort: `-published_date`,
            limit: 3
        }).then(({
            items: e
        }) => {
            e && e.length && t(e)
        }).catch(() => {})
    }, []), (0, j.jsx)(`section`, {
        className: `section-pad bg-ivory`,
        children: (0, j.jsxs)(`div`, {
            className: `container-px max-w-[1400px] mx-auto`,
            children: [(0, j.jsxs)(`div`, {
                className: `flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14`,
                children: [(0, j.jsx)(Zh, {
                    eyebrow: `Journal`,
                    title: `From the studio`,
                    intro: `Ideas, guides and inspiration for your next interior project.`
                }), (0, j.jsxs)(X, {
                    to: `/blog`,
                    variant: `ghost`,
                    size: `md`,
                    className: `shrink-0`,
                    children: [`All articles `, (0, j.jsx)(an, {
                        size: 15
                    })]
                })]
            }), (0, j.jsx)(`div`, {
                className: `grid grid-cols-1 md:grid-cols-3 gap-8`,
                children: e.slice(0, 3).map((e, t) => (0, j.jsxs)(Q, {
                    as: V,
                    to: `/blog/${e.slug||e.id}`,
                    delay: t * 100,
                    className: `group block`,
                    children: [(0, j.jsx)(`div`, {
                        className: `relative overflow-hidden aspect-[4/3] bg-sand mb-5`,
                        children: e.featured_image && (0, j.jsx)(Z, {
                            src: e.featured_image,
                            alt: e.title,
                            className: `w-full h-full transition-transform duration-[1.2s] group-hover:scale-105`,
                            fittingType: `fill`
                        })
                    }), (0, j.jsxs)(`div`, {
                        className: `flex items-center gap-3 text-xs uppercase tracking-[0.12em] text-charcoal/50 mb-3`,
                        children: [(0, j.jsx)(`span`, {
                            className: `text-brass font-bold`,
                            children: e.category
                        }), (0, j.jsx)(`span`, {
                            children: `·`
                        }), (0, j.jsxs)(`span`, {
                            children: [e.reading_time, ` min read`]
                        })]
                    }), (0, j.jsx)(`h3`, {
                        className: `font-heading text-2xl text-charcoal group-hover:text-brass transition-colors text-balance`,
                        children: e.title
                    }), (0, j.jsx)(`p`, {
                        className: `text-charcoal/60 text-sm mt-3 leading-relaxed`,
                        children: e.excerpt
                    })]
                }, e.id))
            })]
        })
    })
}
var bg = [{
    title: `Company Brochure`,
    desc: `Our story, services and approach in one elegant document.`,
    icon: pn,
    to: `/downloads`
}, {
    title: `Design Catalogue`,
    desc: `Browse our signature styles, materials and finishes.`,
    icon: un,
    to: `/downloads`
}];

function xg() {
    return (0, j.jsx)(`section`, {
        className: `section-pad bg-ivory`,
        children: (0, j.jsxs)(`div`, {
            className: `container-px max-w-[1400px] mx-auto`,
            children: [(0, j.jsx)(Zh, {
                eyebrow: `Resources`,
                title: `Take us home with you`,
                intro: `Download our brochures and catalogues to explore our work offline, at your own pace.`,
                className: `mb-12`
            }), (0, j.jsx)(`div`, {
                className: `grid grid-cols-1 md:grid-cols-2 gap-6`,
                children: bg.map((e, t) => (0, j.jsxs)(Q, {
                    as: `div`,
                    delay: t * 120,
                    className: `group bg-sand/30 border border-sand p-8 md:p-10 flex flex-col sm:flex-row items-start gap-6`,
                    children: [(0, j.jsx)(`div`, {
                        className: `w-14 h-14 rounded-full bg-brass/10 flex items-center justify-center shrink-0`,
                        children: (0, j.jsx)(e.icon, {
                            size: 24,
                            className: `text-brass`,
                            strokeWidth: 1.5
                        })
                    }), (0, j.jsxs)(`div`, {
                        className: `flex-1`,
                        children: [(0, j.jsx)(`h3`, {
                            className: `font-heading text-2xl mb-2`,
                            children: e.title
                        }), (0, j.jsx)(`p`, {
                            className: `text-charcoal/70 text-sm mb-6`,
                            children: e.desc
                        }), (0, j.jsxs)(X, {
                            to: e.to,
                            variant: `ghost`,
                            size: `sm`,
                            children: [`Preview & download `, (0, j.jsx)(an, {
                                size: 14
                            })]
                        })]
                    })]
                }, e.title))
            })]
        })
    })
}

function Sg() {
    let [e, t] = (0, _.useState)(!1), [n, r] = (0, _.useState)(!1), [i, a] = (0, _.useState)(``);
    return (0, j.jsx)(`section`, {
        className: `section-pad bg-olive text-ivory`,
        children: (0, j.jsxs)(`div`, {
            className: `container-px max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`,
            children: [(0, j.jsxs)(`div`, {
                children: [(0, j.jsx)(Q, {
                    as: `p`,
                    className: `eyebrow text-brass mb-5`,
                    children: `Let's begin`
                }), (0, j.jsx)(Q, {
                    as: `h2`,
                    className: `h1-heading text-ivory text-balance`,
                    delay: 80,
                    children: `Tell us about your space`
                }), (0, j.jsx)(Q, {
                    as: `p`,
                    className: `lead-text text-ivory/70 mt-6 max-w-md`,
                    delay: 140,
                    children: `Share a few details and our design team will get back to you within one business day with next steps. No obligation, no pressure.`
                }), (0, j.jsx)(Q, {
                    as: `div`,
                    className: `mt-8`,
                    delay: 200,
                    children: (0, j.jsxs)(X, {
                        href: fh(`Hi Outscale Interiors, I'd like to book a free consultation.`),
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        variant: `brass`,
                        size: `md`,
                        children: [`Or chat on WhatsApp `, (0, j.jsx)(an, {
                            size: 15
                        })]
                    })
                })]
            }), (0, j.jsx)(Q, {
                as: `div`,
                delay: 120,
                className: `bg-ivory text-charcoal p-8 md:p-10`,
                children: n ? (0, j.jsxs)(`div`, {
                    className: `text-center py-10`,
                    children: [(0, j.jsx)(`div`, {
                        className: `eyebrow mb-4`,
                        children: `Thank you`
                    }), (0, j.jsx)(`h3`, {
                        className: `h2-heading mb-3`,
                        children: `Enquiry received`
                    }), (0, j.jsx)(`p`, {
                        className: `text-charcoal/70`,
                        children: `We'll be in touch within one business day.`
                    })]
                }) : (0, j.jsxs)(`form`, {
                    onSubmit: async e => {
                        e.preventDefault(), a(``);
                        let n = new FormData(e.currentTarget),
                            i = (n.get(`phone`) || ``).trim(),
                            o = (n.get(`name`) || ``).trim();
                        if (!/^[6-9]\d{9}$/.test(i)) {
                            a(`Please enter a valid 10-digit mobile number.`);
                            return
                        }
                        t(!0);
                        try {
                            await $m.entities.Lead.create({
                                name: o,
                                phone: i,
                                space_type: (n.get(`space_type`) || ``).trim(),
                                location: (n.get(`location`) || ``).trim(),
                                message: (n.get(`message`) || ``).trim(),
                                source: `home-cta`,
                                page_url: `/`,
                                consent: !0
                            }), r(!0)
                        } catch {
                            a(`Something went wrong. Please try again.`)
                        } finally {
                            t(!1)
                        }
                    },
                    className: `space-y-5`,
                    children: [(0, j.jsx)(`input`, {
                        type: `text`,
                        name: `company`,
                        className: `hidden`,
                        tabIndex: -1,
                        autoComplete: `off`
                    }), (0, j.jsxs)(`div`, {
                        className: `grid grid-cols-2 gap-5`,
                        children: [(0, j.jsx)(Cg, {
                            label: `Name *`,
                            children: (0, j.jsx)(`input`, {
                                name: `name`,
                                required: !0,
                                className: `w-full bg-transparent border-b border-charcoal/30 focus:border-brass py-2.5 outline-none transition-colors`
                            })
                        }), (0, j.jsx)(Cg, {
                            label: `Phone *`,
                            children: (0, j.jsx)(`input`, {
                                name: `phone`,
                                required: !0,
                                inputMode: `tel`,
                                placeholder: `10-digit`,
                                className: `w-full bg-transparent border-b border-charcoal/30 focus:border-brass py-2.5 outline-none transition-colors`
                            })
                        })]
                    }), (0, j.jsxs)(`div`, {
                        className: `grid grid-cols-2 gap-5`,
                        children: [(0, j.jsx)(Cg, {
                            label: `Space type`,
                            children: (0, j.jsx)(`input`, {
                                name: `space_type`,
                                placeholder: `2 BHK, Cafe…`,
                                className: `w-full bg-transparent border-b border-charcoal/30 focus:border-brass py-2.5 outline-none transition-colors`
                            })
                        }), (0, j.jsx)(Cg, {
                            label: `Location`,
                            children: (0, j.jsx)(`input`, {
                                name: `location`,
                                placeholder: `City`,
                                className: `w-full bg-transparent border-b border-charcoal/30 focus:border-brass py-2.5 outline-none transition-colors`
                            })
                        })]
                    }), (0, j.jsx)(Cg, {
                        label: `Message`,
                        children: (0, j.jsx)(`textarea`, {
                            name: `message`,
                            rows: 3,
                            className: `w-full bg-transparent border-b border-charcoal/30 focus:border-brass py-2.5 outline-none transition-colors resize-none`
                        })
                    }), i && (0, j.jsx)(`p`, {
                        className: `text-destructive text-sm`,
                        children: i
                    }), (0, j.jsxs)(`label`, {
                        className: `flex items-start gap-3 text-xs text-charcoal/70`,
                        children: [(0, j.jsx)(`input`, {
                            type: `checkbox`,
                            required: !0,
                            className: `mt-0.5 accent-brass`
                        }), (0, j.jsx)(`span`, {
                            children: `I agree to be contacted and accept the privacy policy.`
                        })]
                    }), (0, j.jsx)(X, {
                        type: `submit`,
                        variant: `primary`,
                        size: `lg`,
                        className: `w-full`,
                        fill: !0,
                        children: e ? `Sending…` : `Send enquiry`
                    })]
                })
            })]
        })
    })
}

function Cg({
    label: e,
    children: t
}) {
    return (0, j.jsxs)(`label`, {
        className: `block`,
        children: [(0, j.jsx)(`span`, {
            className: `block text-xs uppercase tracking-[0.12em] font-bold text-charcoal/60 mb-1`,
            children: e
        }), t]
    })
}

function wg() {
    return (0, j.jsxs)(j.Fragment, {
        children: [(0, j.jsx)(qh, {}), (0, j.jsx)(Jh, {}), (0, j.jsx)(Xh, {}), (0, j.jsx)($h, {}), (0, j.jsx)(ag, {}), (0, j.jsx)(og, {}), (0, j.jsx)(sg, {}), (0, j.jsx)(lg, {}), (0, j.jsx)(dg, {}), (0, j.jsx)(hg, {}), (0, j.jsx)(gg, {}), (0, j.jsx)(_g, {}), (0, j.jsx)(vg, {}), (0, j.jsx)(yg, {}), (0, j.jsx)(xg, {}), (0, j.jsx)(Sg, {})]
    })
}

function Tg({
    eyebrow: e,
    title: t,
    breadcrumb: n = [],
    image: r,
    children: i
}) {
    return (0, j.jsxs)(`section`, {
        className: `relative pt-36 md:pt-44 pb-16 md:pb-24 overflow-hidden`,
        children: [r && (0, j.jsxs)(`div`, {
            className: `absolute inset-0 -z-10`,
            children: [(0, j.jsx)(Z, {
                src: r,
                alt: ``,
                className: `w-full h-full`,
                fittingType: `fill`
            }), (0, j.jsx)(`div`, {
                className: `absolute inset-0 bg-charcoal/55`
            })]
        }), (0, j.jsxs)(`div`, {
            className: `container-px max-w-[1400px] mx-auto ${r?`text-ivory`:`text-charcoal`}`,
            children: [e && (0, j.jsx)(Q, {
                as: `p`,
                className: `eyebrow mb-5`,
                children: e
            }), (0, j.jsx)(Q, {
                as: `h1`,
                className: `display-heading text-balance max-w-4xl`,
                children: t
            }), i && (0, j.jsx)(Q, {
                as: `div`,
                className: `lead-text mt-6 max-w-2xl`,
                delay: 120,
                children: i
            }), n.length > 0 && (0, j.jsxs)(`nav`, {
                className: `mt-10 flex items-center gap-2 text-xs uppercase tracking-[0.12em] font-bold`,
                children: [(0, j.jsx)(V, {
                    to: `/`,
                    className: r ? `text-ivory/70 hover:text-ivory` : `text-charcoal/60 hover:text-brass`,
                    children: `Home`
                }), n.map((e, t) => (0, j.jsxs)(_.Fragment, {
                    children: [(0, j.jsx)(`span`, {
                        className: r ? `text-ivory/40` : `text-charcoal/30`,
                        children: `/`
                    }), e.to ? (0, j.jsx)(V, {
                        to: e.to,
                        className: r ? `text-ivory/70 hover:text-ivory` : `text-charcoal/60 hover:text-brass`,
                        children: e.label
                    }) : (0, j.jsx)(`span`, {
                        className: r ? `text-ivory` : `text-charcoal`,
                        children: e.label
                    })]
                }, t))]
            })]
        })]
    })
}

function Eg({
    title: e = `Let's design something extraordinary`,
    subtitle: t = `Book a free consultation with our design team today.`,
    light: n = !1
}) {
    let {
        openEnquiry: r
    } = bh();
    return (0, j.jsx)(`section`, {
        className: `${n?`bg-ivory`:`bg-olive text-ivory`} section-pad`,
        children: (0, j.jsxs)(`div`, {
            className: `container-px max-w-[1400px] mx-auto text-center`,
            children: [(0, j.jsx)(Q, {
                as: `p`,
                className: `eyebrow mb-5`,
                children: `Begin your project`
            }), (0, j.jsx)(Q, {
                as: `h2`,
                className: `h1-heading text-balance max-w-3xl mx-auto`,
                delay: 80,
                children: e
            }), (0, j.jsx)(Q, {
                as: `p`,
                className: `lead-text mt-6 max-w-xl mx-auto ${n?``:`text-ivory/70`}`,
                delay: 140,
                children: t
            }), (0, j.jsxs)(Q, {
                as: `div`,
                className: `mt-10 flex flex-col sm:flex-row items-center justify-center gap-4`,
                delay: 200,
                children: [(0, j.jsx)(X, {
                    onClick: () => r({
                        source: `cta-band`,
                        title: `Book a free consultation`
                    }),
                    variant: n ? `primary` : `brass`,
                    size: `lg`,
                    children: `Book a free consultation`
                }), (0, j.jsx)(X, {
                    to: `/projects`,
                    variant: `ghost`,
                    size: `lg`,
                    className: n ? `` : `border-ivory text-ivory hover:text-ivory`,
                    children: `View our work`
                })]
            })]
        })
    })
}
var Dg = [{
        title: `Intention over impulse`,
        desc: `Every material, line and finish is chosen for a reason — never for trend's sake.`
    }, {
        title: `Craft you can feel`,
        desc: `We obsess over joinery, edges and hardware — the details that reveal quality over time.`
    }, {
        title: `Honest timelines`,
        desc: `We commit to realistic schedules and keep them. Your time is part of the design.`
    }, {
        title: `Spaces that age well`,
        desc: `We favour natural materials and timeless palettes that grow more beautiful with use.`
    }],
    Og = [{
        n: `01`,
        title: `Consultation`,
        desc: `We listen first — to your routines, your tastes and your constraints.`
    }, {
        n: `02`,
        title: `Concept & 3D`,
        desc: `Layouts, palettes and photorealistic renders you can walk through.`
    }, {
        n: `03`,
        title: `Execution`,
        desc: `Skilled carpentry, finishing and quality checks, managed end to end.`
    }, {
        n: `04`,
        title: `Handover`,
        desc: `A move-in ready space, styled and delivered exactly as promised.`
    }],
    kg = [{
        name: `Vignesh R`,
        role: `Founder & Lead Designer`,
        bio: `12 years shaping residential and commercial interiors across Tamil Nadu and Karnataka.`
    }, {
        name: `Ananya S`,
        role: `Senior Interior Designer`,
        bio: `Specialist in spatial planning and material palettes with a calm, modern sensibility.`
    }, {
        name: `Karthik M`,
        role: `Project Manager`,
        bio: `Keeps timelines honest and sites spotless, from first sketch to handover.`
    }, {
        name: `Divya P`,
        role: `3D Visualiser`,
        bio: `Turns concepts into photorealistic renders so clients see every detail early.`
    }];

function Ag() {
    let [e, t] = (0, _.useState)(kg);
    return (0, _.useEffect)(() => {
        $m.entities.TeamMember.filter({}, {
            sort: `order`,
            limit: 12
        }).then(({
            items: e
        }) => {
            e && e.length && t(e)
        }).catch(() => {})
    }, []), (0, j.jsxs)(j.Fragment, {
        children: [(0, j.jsx)(Tg, {
            eyebrow: `Our studio`,
            title: `A design studio built on restraint and craft`,
            breadcrumb: [{
                label: `About`
            }],
            image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/72108b898_generated_image.png`,
            children: `Outscale Interiors is a Hosur-based studio designing residential and commercial spaces across the region — warm, architectural, and built around the way you live and work.`
        }), (0, j.jsx)(`section`, {
            className: `section-pad bg-ivory`,
            children: (0, j.jsxs)(`div`, {
                className: `container-px max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center`,
                children: [(0, j.jsxs)(`div`, {
                    className: `lg:col-span-6`,
                    children: [(0, j.jsx)(Q, {
                        as: `p`,
                        className: `eyebrow mb-5`,
                        children: `Our story`
                    }), (0, j.jsx)(Q, {
                        as: `h2`,
                        className: `h1-heading text-balance`,
                        delay: 80,
                        children: `Design that earns its place`
                    }), (0, j.jsx)(Q, {
                        as: `p`,
                        className: `lead-text mt-6`,
                        delay: 140,
                        children: `Outscale began with a simple belief: that thoughtful design should be accessible, not exclusive. We started in Hosur, working with families who wanted more from their homes than flat-pack solutions, and grew into a studio serving businesses across five cities.`
                    }), (0, j.jsx)(Q, {
                        as: `p`,
                        className: `text-charcoal/70 mt-5`,
                        delay: 200,
                        children: `Today we design kitchens, living spaces, bedrooms, wardrobes and commercial interiors — each one beginning with a conversation and ending with a space that feels inevitable. We pair the discipline of architecture with the warmth of real life, choosing materials that age gracefully and layouts that simply work.`
                    })]
                }), (0, j.jsxs)(`div`, {
                    className: `lg:col-span-6 grid grid-cols-2 gap-4`,
                    children: [(0, j.jsx)(Q, {
                        as: `div`,
                        className: `aspect-[3/4] overflow-hidden bg-sand`,
                        children: (0, j.jsx)(Z, {
                            src: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/4cc4f4328_generated_image.png`,
                            alt: `Kitchen detail`,
                            className: `w-full h-full`,
                            fittingType: `fill`
                        })
                    }), (0, j.jsx)(Q, {
                        as: `div`,
                        className: `aspect-[3/4] overflow-hidden bg-sand mt-10`,
                        delay: 120,
                        children: (0, j.jsx)(Z, {
                            src: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/ea7350bba_generated_image.png`,
                            alt: `Pooja room detail`,
                            className: `w-full h-full`,
                            fittingType: `fill`
                        })
                    })]
                })]
            })
        }), (0, j.jsx)(`section`, {
            className: `section-pad bg-sand/30`,
            children: (0, j.jsxs)(`div`, {
                className: `container-px max-w-[1400px] mx-auto`,
                children: [(0, j.jsx)(Zh, {
                    eyebrow: `What we value`,
                    title: `The principles behind every project`,
                    className: `mb-14`
                }), (0, j.jsx)(`div`, {
                    className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-sand`,
                    children: Dg.map((e, t) => (0, j.jsxs)(Q, {
                        as: `div`,
                        delay: t % 4 * 100,
                        className: `bg-ivory p-8`,
                        children: [(0, j.jsxs)(`div`, {
                            className: `font-heading text-4xl text-brass/40 mb-4`,
                            children: [`0`, t + 1]
                        }), (0, j.jsx)(`h3`, {
                            className: `font-heading text-2xl mb-3`,
                            children: e.title
                        }), (0, j.jsx)(`p`, {
                            className: `text-charcoal/70 text-sm leading-relaxed`,
                            children: e.desc
                        })]
                    }, e.title))
                })]
            })
        }), (0, j.jsx)(`section`, {
            className: `section-pad bg-ivory`,
            children: (0, j.jsxs)(`div`, {
                className: `container-px max-w-[1400px] mx-auto`,
                children: [(0, j.jsx)(Zh, {
                    eyebrow: `How we work`,
                    title: `A clear, four-phase process`,
                    className: `mb-14`
                }), (0, j.jsx)(`div`, {
                    className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`,
                    children: Og.map((e, t) => (0, j.jsxs)(Q, {
                        as: `div`,
                        delay: t * 100,
                        className: `border-t border-charcoal/15 pt-6`,
                        children: [(0, j.jsx)(`div`, {
                            className: `font-heading text-3xl text-brass mb-3`,
                            children: e.n
                        }), (0, j.jsx)(`h3`, {
                            className: `font-heading text-2xl mb-2`,
                            children: e.title
                        }), (0, j.jsx)(`p`, {
                            className: `text-charcoal/70 text-sm`,
                            children: e.desc
                        })]
                    }, e.n))
                })]
            })
        }), (0, j.jsx)(`section`, {
            className: `section-pad bg-charcoal text-ivory`,
            children: (0, j.jsxs)(`div`, {
                className: `container-px max-w-[1400px] mx-auto`,
                children: [(0, j.jsx)(Zh, {
                    eyebrow: `The team`,
                    title: `The people behind your space`,
                    light: !0,
                    className: `mb-14`
                }), (0, j.jsx)(`div`, {
                    className: `grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8`,
                    children: e.map((e, t) => (0, j.jsxs)(Q, {
                        as: `div`,
                        delay: t % 4 * 100,
                        className: `group`,
                        children: [(0, j.jsx)(`div`, {
                            className: `aspect-[3/4] overflow-hidden bg-olive mb-4`,
                            children: e.image && (0, j.jsx)(Z, {
                                src: e.image,
                                alt: e.name,
                                className: `w-full h-full transition-transform duration-[1.2s] group-hover:scale-105`,
                                fittingType: `fill`
                            })
                        }), (0, j.jsx)(`h3`, {
                            className: `font-heading text-xl`,
                            children: e.name
                        }), (0, j.jsx)(`div`, {
                            className: `text-xs uppercase tracking-[0.12em] text-brass mt-1`,
                            children: e.role
                        }), (0, j.jsx)(`p`, {
                            className: `text-ivory/60 text-sm mt-3`,
                            children: e.bio
                        })]
                    }, e.name || t))
                })]
            })
        }), (0, j.jsx)(Eg, {})]
    })
}
var jg = {
    "1-bhk": `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/72108b898_generated_image.png`,
    "2-bhk": `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/b12455e05_generated_image.png`,
    "3-bhk": `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/ea39026f8_generated_image.png`,
    "luxury-homes": `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/a6d68da7e_generated_image.png`
};

function Mg() {
    return (0, j.jsxs)(j.Fragment, {
        children: [(0, j.jsx)(Tg, {
            eyebrow: `Residential`,
            title: `Homes designed around you`,
            breadcrumb: [{
                label: `Residential`
            }],
            image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/b12455e05_generated_image.png`,
            children: `From compact 1 BHKs to sprawling luxury residences, we design homes that feel effortlessly yours — warm, functional and built to last.`
        }), (0, j.jsx)(`section`, {
            className: `section-pad bg-ivory`,
            children: (0, j.jsx)(`div`, {
                className: `container-px max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8`,
                children: lh.map((e, t) => (0, j.jsxs)(Q, {
                    as: V,
                    to: `/residential/${e.slug}`,
                    delay: t % 2 * 100,
                    className: `group relative overflow-hidden aspect-[16/10] bg-sand`,
                    children: [(0, j.jsx)(Z, {
                        src: jg[e.slug],
                        alt: e.label,
                        className: `w-full h-full transition-transform duration-[1.5s] group-hover:scale-105`,
                        fittingType: `fill`
                    }), (0, j.jsx)(`div`, {
                        className: `absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent`
                    }), (0, j.jsxs)(`div`, {
                        className: `absolute bottom-0 left-0 right-0 p-7 md:p-9 text-ivory`,
                        children: [(0, j.jsx)(`h3`, {
                            className: `font-heading text-3xl md:text-4xl mb-2`,
                            children: e.label
                        }), (0, j.jsx)(`p`, {
                            className: `text-ivory/80 max-w-md`,
                            children: e.desc
                        }), (0, j.jsxs)(`span`, {
                            className: `inline-flex items-center gap-2 mt-4 text-xs uppercase tracking-[0.15em] font-bold text-brass`,
                            children: [`Explore `, (0, j.jsx)(on, {
                                size: 15
                            })]
                        })]
                    })]
                }, e.slug))
            })
        }), (0, j.jsx)(Eg, {
            title: `Designing a home? Let's talk`,
            subtitle: `Book a free consultation and we'll prepare a tailored proposal for your space.`
        })]
    })
}

function Ng({
    eyebrow: e,
    breadcrumbLabel: t,
    contentMap: n,
    basePath: r,
    enquirySource: i
}) {
    let {
        slug: a
    } = Ho(), {
        openEnquiry: o
    } = bh(), s = n[a] || Object.values(n)[0];
    return s ? (0, j.jsxs)(j.Fragment, {
        children: [(0, j.jsx)(Tg, {
            eyebrow: e,
            title: s.title,
            breadcrumb: [{
                label: t,
                to: r
            }, {
                label: s.title
            }],
            image: s.image,
            children: s.intro
        }), (0, j.jsx)(`section`, {
            className: `section-pad bg-ivory`,
            children: (0, j.jsxs)(`div`, {
                className: `container-px max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start`,
                children: [(0, j.jsxs)(`div`, {
                    className: `lg:col-span-7`,
                    children: [(0, j.jsx)(Q, {
                        as: `p`,
                        className: `eyebrow mb-5`,
                        children: `Overview`
                    }), (0, j.jsx)(Q, {
                        as: `h2`,
                        className: `h1-heading mb-6 text-balance`,
                        delay: 80,
                        children: s.title
                    }), (0, j.jsx)(Q, {
                        as: `p`,
                        className: `lead-text`,
                        delay: 140,
                        children: s.body
                    }), s.features && (0, j.jsx)(`div`, {
                        className: `mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4`,
                        children: s.features.map((e, t) => (0, j.jsxs)(Q, {
                            as: `div`,
                            delay: t * 80,
                            className: `flex items-start gap-3`,
                            children: [(0, j.jsx)(sn, {
                                size: 18,
                                className: `text-brass mt-0.5 shrink-0`,
                                strokeWidth: 2
                            }), (0, j.jsx)(`span`, {
                                className: `text-charcoal/80 text-sm`,
                                children: e
                            })]
                        }, t))
                    })]
                }), (0, j.jsx)(`div`, {
                    className: `lg:col-span-5 lg:sticky lg:top-28`,
                    children: (0, j.jsxs)(Q, {
                        as: `div`,
                        delay: 120,
                        className: `bg-sand/30 border border-sand p-7`,
                        children: [(0, j.jsx)(`div`, {
                            className: `eyebrow mb-4`,
                            children: `Interested?`
                        }), (0, j.jsx)(`h3`, {
                            className: `font-heading text-2xl mb-3`,
                            children: `Get this for your space`
                        }), (0, j.jsx)(`p`, {
                            className: `text-charcoal/70 text-sm mb-6`,
                            children: `Book a free consultation and we'll prepare a tailored proposal with 3D previews.`
                        }), (0, j.jsx)(X, {
                            onClick: () => o({
                                source: i,
                                title: `Enquire about ${s.title}`,
                                subtitle: `Tell us about your space and we'll prepare a tailored proposal.`,
                                message: `I'm interested in ${s.title}. Please share more details.`
                            }),
                            variant: `brass`,
                            size: `md`,
                            className: `w-full mb-3`,
                            children: `Enquire now`
                        }), (0, j.jsxs)(X, {
                            href: fh(`Hi Outscale Interiors, I'm interested in ${s.title}.`),
                            target: `_blank`,
                            rel: `noopener noreferrer`,
                            variant: `ghost`,
                            size: `md`,
                            className: `w-full`,
                            children: [`WhatsApp us `, (0, j.jsx)(an, {
                                size: 14
                            })]
                        })]
                    })
                })]
            })
        }), (0, j.jsx)(Eg, {})]
    }) : (0, j.jsx)(`div`, {
        className: `pt-40 pb-40 text-center`,
        children: `Page not found.`
    })
}
var $ = {
        kitchen: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/4cc4f4328_generated_image.png`,
        living: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/72108b898_generated_image.png`,
        bedroom: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/ea39026f8_generated_image.png`,
        wardrobe: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/a6d68da7e_generated_image.png`,
        pooja: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/ea7350bba_generated_image.png`,
        ceiling: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/e4fb692d4_generated_image.png`,
        cafe: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/5ab2b0600_generated_image.png`,
        salon: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/dc9e18904_generated_image.png`,
        office: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/78960ba57_generated_image.png`,
        render: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/e6e645c2e_generated_image.png`,
        finished: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/b12455e05_generated_image.png`
    },
    Pg = {
        "1-bhk": {
            title: `1 BHK Interior Design`,
            image: $.living,
            intro: `Smart, space-maximising design that makes every square foot count.`,
            body: `A 1 BHK is all about intelligent use of space. We design multi-functional layouts, hidden storage and light palettes that make compact homes feel open and airy. From fold-away dining to wall-bed wardrobes, we find the room you didn't know you had.`
        },
        "2-bhk": {
            title: `2 BHK Interior Design`,
            image: $.finished,
            intro: `Balanced layouts for growing families, with room to live and breathe.`,
            body: `Two bedrooms give you room to breathe. We zone the space for privacy and togetherness — a kitchen that flows into the living area, a master bedroom that feels like a retreat, and a second room that grows with your child or your work.`
        },
        "3-bhk": {
            title: `3 BHK Interior Design`,
            image: $.bedroom,
            intro: `Spacious, layered interiors with room for every part of life.`,
            body: `A 3 BHK lets us layer texture, material and light. We design a home that holds a family — a kitchen built for cooking together, living spaces for gathering, a master suite for rest, and a flexible third room for guests, study or play.`
        },
        "luxury-homes": {
            title: `Luxury Home Interiors`,
            image: $.wardrobe,
            intro: `Bespoke residences with bespoke detailing, materiality and craft.`,
            body: `Luxury is in the details — the weight of a brass handle, the grain of a hand-selected stone, the way light moves across a wall through the day. We design luxury homes around a single, coherent vision, executed with craftsmen who care.`
        }
    },
    Fg = {
        cafe: {
            title: `Cafe Interior Design`,
            image: $.cafe,
            intro: `Cafes that draw people in and keep them coming back.`,
            body: `A great cafe balances atmosphere and flow. We design seating that adapts from solo visits to groups, counters that make service effortless, and lighting that flatters both coffee and conversation. Every material is chosen to age gracefully under daily use.`
        },
        restaurant: {
            title: `Restaurant Interior Design`,
            image: $.cafe,
            intro: `Restaurants designed around the dining experience.`,
            body: `From fine dining to fast-casual, we design restaurants that match your cuisine and your service style. Acoustics, lighting, table spacing and kitchen flow all work together to make every service smooth and every guest comfortable.`
        },
        "dental-clinic": {
            title: `Dental Clinic Interior Design`,
            image: $.office,
            intro: `Calm, clinical interiors that put patients at ease.`,
            body: `A dental clinic must be spotless, efficient and reassuring. We design treatment rooms with clear circulation, sterilisation zones that meet standards, and waiting areas that calm nerves with warm, soft materials and thoughtful lighting.`
        },
        "medical-shop": {
            title: `Medical Shop Interior Design`,
            image: $.office,
            intro: `Pharmacies that are organised, trustworthy and easy to shop.`,
            body: `A medical shop needs clear sightlines, secure storage and a sense of trust. We design dispensing counters, shelving that maximises display, and lighting that makes products easy to find — all in a clean, professional finish.`
        },
        salon: {
            title: `Salon Interior Design`,
            image: $.salon,
            intro: `Salons designed around the ritual of getting ready.`,
            body: `A salon is a place of transformation. We design styling stations with perfect mirror lighting, wash basins for comfort, and colour rooms that work as hard as they look beautiful — all in a warm, reflective, quietly glamorous setting.`
        },
        spa: {
            title: `Spa Interior Design`,
            image: $.salon,
            intro: `Spas that feel like a retreat from the first step.`,
            body: `A spa should slow you down the moment you enter. We design with soft materials, dimmed layered lighting and sound-absorbing surfaces to create calm treatment rooms, relaxing lounges and a sense of escape from the world outside.`
        },
        "textile-showroom": {
            title: `Textile Showroom Interior Design`,
            image: $.render,
            intro: `Showrooms that make fabric feel as rich as it should.`,
            body: `Textile showrooms are all about display. We design lighting that reveals texture and colour true-to-life, shelving and hanging systems that make browsing effortless, and a layout that guides customers through your full range.`
        },
        "jewellery-showroom": {
            title: `Jewellery Showroom Interior Design`,
            image: $.render,
            intro: `Jewellery showrooms built for display, security and trust.`,
            body: `A jewellery showroom must sparkle and secure. We design vitrine lighting that makes every piece glow, secure display cases, and a layout that gives customers space to consider important purchases in privacy and comfort.`
        },
        "retail-shop": {
            title: `Retail Shop Interior Design`,
            image: $.render,
            intro: `Retail spaces that turn browsers into buyers.`,
            body: `Good retail design guides the eye and the feet. We design window displays that stop traffic, aisles that lead customers through your range, and checkout zones that close the sale — all in a finish that matches your brand.`
        },
        office: {
            title: `Office Interior Design`,
            image: $.office,
            intro: `Offices designed for focus, collaboration and wellbeing.`,
            body: `An office should help people do their best work. We design workstations with acoustic comfort, meeting rooms that suit every kind of conversation, and break-out spaces that recharge — with biophilic touches and warm materials throughout.`
        },
        hotel: {
            title: `Hotel Interior Design`,
            image: $.finished,
            intro: `Hotels that feel like a place you'd want to stay.`,
            body: `A hotel is a sequence of impressions — lobby, corridor, room. We design each moment to build on the last, with durable materials that hold up to constant use and a palette that feels welcoming to every guest.`
        },
        gym: {
            title: `Gym Interior Design`,
            image: $.office,
            intro: `Gyms that motivate from the warm-up to the last rep.`,
            body: `A gym should energise. We design zoning for different training styles, durable rubberised flooring, mirror placement for form-checking, and lighting that flatters effort — all ventilated and laid out for safe, flowing movement.`
        },
        other: {
            title: `Commercial Interior Design`,
            image: $.office,
            intro: `Whatever your business, we design the space to match.`,
            body: `From clinics to co-working, showrooms to studios — we design commercial interiors around how your business actually works. Tell us your space and your goals, and we'll design a solution that performs.`
        }
    },
    Ig = {
        "modular-kitchen": {
            title: `Modular Kitchen Design`,
            image: $.kitchen,
            intro: `Kitchens built for cooking, gathering and everyday life.`,
            body: `We design modular kitchens around how you cook — workflow triangles, storage that suits your utensils, and materials that handle Indian cooking. Soft-close hardware, heat-resistant counters and ventilation that actually works.`,
            features: [`L-shaped, U-shaped, parallel & island layouts`, `Soft-close hardware & premium fittings`, `Heat & moisture-resistant materials`, `Smart storage: tall units, corner solutions, pull-outs`]
        },
        "living-room": {
            title: `Living Room Design`,
            image: $.living,
            intro: `Living rooms that hold the whole household.`,
            body: `The living room is where everyone gathers. We design seating arrangements that suit your family, TV or feature walls that anchor the room, and lighting that moves from bright to intimate at the touch of a switch.`,
            features: [`Feature & TV walls`, `Layered ambient & task lighting`, `Custom seating & media units`, `Acoustic-friendly material choices`]
        },
        "master-bedroom": {
            title: `Master Bedroom Design`,
            image: $.bedroom,
            intro: `A retreat built for rest.`,
            body: `We design master bedrooms as a place to switch off — a headboard wall that sets the mood, wardrobes that hide the clutter, and bedside lighting that's warm and reachable. Blackout-ready windows and sound-softening textures finish the calm.`,
            features: [`Headboard & accent walls`, `Integrated wardrobe solutions`, `Mood lighting design`, `Sound-softening finishes`]
        },
        "kids-bedroom": {
            title: `Kids' Bedroom Design`,
            image: $.bedroom,
            intro: `Bedrooms that grow with your child.`,
            body: `A child's room should adapt. We design study nooks, storage that's reachable for small hands, and beds that convert as they grow — all in palettes and themes that spark imagination without dating quickly.`,
            features: [`Study & storage integration`, `Convertible bed designs`, `Playful yet timeless palettes`, `Safety-first material choices`]
        },
        wardrobe: {
            title: `Wardrobe Design`,
            image: $.wardrobe,
            intro: `Storage that disappears into the design.`,
            body: `We design wardrobes around what you actually own — hanging space for long garments, drawers for the rest, and accessories that organise the small things. Sliding or hinged, mirrored or fluted — built to your room and your routine.`,
            features: [`Sliding & hinged wardrobes`, `Walk-in dressing rooms`, `Internal accessories & lighting`, `Floor-to-ceiling optimisation`]
        },
        "study-room": {
            title: `Study Room Design`,
            image: $.office,
            intro: `A space built for focus.`,
            body: `A study should help you concentrate. We design desks at the right height, shelving for books and files, and lighting that's bright on the page and easy on the eyes — with acoustic touches that keep the rest of the house at bay.`,
            features: [`Ergonomic desk & seating`, `Bookshelf & storage walls`, `Task-focused lighting`, `Acoustic & privacy considerations`]
        },
        "pooja-room": {
            title: `Pooja Room Design`,
            image: $.pooja,
            intro: `A sacred space, designed with reverence.`,
            body: `We design pooja rooms that honour tradition and suit modern homes — warm wood mandapams, brass inlay, soft ambient lighting and storage for rituals. Vastu-aware layouts where requested, always serene.`,
            features: [`Vastu-aware layouts`, `Brass & wood detailing`, `Soft devotional lighting`, `Ritual storage solutions`]
        },
        foyer: {
            title: `Foyer Design`,
            image: $.living,
            intro: `A first impression that sets the tone.`,
            body: `The foyer is the first thing guests see and the last thing you pass on the way out. We design console tables, shoe storage that hides away, and a moment of warmth — a mirror, a light, a place to pause.`,
            features: [`Console & shoe storage`, `Statement lighting`, `Mirror & accent walls`, `Compact space optimisation`]
        },
        balcony: {
            title: `Balcony Design`,
            image: $.living,
            intro: `An outdoor room, however small.`,
            body: `Even a small balcony can be a retreat. We design weatherproof seating, planters for greenery, and lighting that extends the evening — turning an overlooked corner into your favourite spot.`,
            features: [`Weatherproof seating`, `Vertical gardening`, `Ambient outdoor lighting`, `Space-efficient layouts`]
        },
        "false-ceiling": {
            title: `False Ceiling Design`,
            image: $.ceiling,
            intro: `The fifth wall, designed with intention.`,
            body: `A false ceiling does more than hide wires — it shapes light, absorbs sound and defines zones. We design cove lighting, sculptural forms and layered heights that transform how a room feels.`,
            features: [`Cove & layered lighting`, `Sculptural & geometric forms`, `Acoustic improvement`, `Concealed wiring & ducting`]
        }
    },
    Lg = {
        hosur: {
            title: `Interior Design in Hosur`,
            image: $.kitchen,
            intro: `Our home base — and the city that shaped our studio.`,
            body: `Hosur is where Outscale Interiors began, and it remains the heart of our practice. We've designed dozens of homes and commercial spaces across the city, from compact apartments near the industrial belt to family residences in the growing suburbs. Being local means we know the suppliers, the climate and the way families live here — and we're never far when you need us on site.`,
            projects: [`The Teak Residence — 3 BHK home`, `A modular kitchen for a Hosur family`, `A local dental clinic fit-out`],
            faq: [{
                q: `Do you work with apartments in Hosur?`,
                a: `Yes — we design for apartments, independent houses and commercial spaces throughout Hosur and nearby.`
            }, {
                q: `How long does a typical project take?`,
                a: `A 2 BHK home usually takes 6–10 weeks depending on scope. We'll give you a precise timeline after the consultation.`
            }]
        },
        krishnagiri: {
            title: `Interior Design in Krishnagiri`,
            image: $.pooja,
            intro: `Warm, family-focused interiors for Krishnagiri homes and businesses.`,
            body: `Krishnagiri clients often want interiors that feel rooted and traditional without looking dated. We blend warm woods, brass detailing and pooja-room craft with modern layouts and storage — designing homes and salons that suit the local way of life while performing for daily use.`,
            projects: [`Mirror House Salon — a Krishnagiri salon`, `A traditional-modern pooja room`, `A 2 BHK with warm wood finishes`],
            faq: [{
                q: `Can you incorporate traditional design elements?`,
                a: `Absolutely — we specialise in blending traditional craft like wood mandapams and brass detailing with modern functionality.`
            }, {
                q: `Do you travel to Krishnagiri for site visits?`,
                a: `Yes, we serve Krishnagiri and all our service areas with regular site visits throughout the project.`
            }]
        },
        dharmapuri: {
            title: `Interior Design in Dharmapuri`,
            image: $.wardrobe,
            intro: `Considered interiors for Dharmapuri homes and businesses.`,
            body: `In Dharmapuri, we've helped families make the most of growing homes — designing wardrobes, kitchens and living spaces that balance budget and quality. We focus on durable materials and clever storage that suit the local climate and stand up to daily family life.`,
            projects: [`The Brass Wardrobe Home — 3 BHK`, `A space-saving 2 BHK makeover`, `A local retail shop interior`],
            faq: [{
                q: `What's the budget for a 2 BHK in Dharmapuri?`,
                a: `It varies with materials and scope — book a free consultation and we'll prepare a transparent, tailored estimate.`
            }, {
                q: `Do you use locally available materials?`,
                a: `Where it makes sense, yes — we balance local sourcing with the quality standards we insist on.`
            }]
        },
        salem: {
            title: `Interior Design in Salem`,
            image: $.living,
            intro: `Calm, contemporary interiors for Salem homes and clinics.`,
            body: `Salem clients often want calm, contemporary spaces that still feel warm. We've designed apartments, clinics and offices across the city — with a focus on light palettes, smart storage and layouts that work for both family life and professional practice.`,
            projects: [`The Linen Apartment — 2 BHK`, `A Salem dental clinic fit-out`, `A contemporary living room redesign`],
            faq: [{
                q: `Do you design commercial spaces in Salem?`,
                a: `Yes — clinics, offices, salons and retail spaces are all within our scope across Salem.`
            }, {
                q: `Can I see 3D designs before starting?`,
                a: `Every project includes photorealistic 3D renders so you can approve every detail before execution begins.`
            }]
        },
        bengaluru: {
            title: `Interior Design in Bengaluru`,
            image: $.cafe,
            intro: `Premium interiors for Bengaluru's homes, cafes and offices.`,
            body: `In Bengaluru, we work on some of our most ambitious projects — from bustling cafes and modern offices to luxury apartments. The city's design literacy pushes us to deliver at a high standard, with the materials, craft and timelines that discerning Bengaluru clients expect.`,
            projects: [`Copper & Oak Cafe — a Bengaluru cafe`, `The Greenway Office — biophilic workspace`, `A luxury apartment fit-out`],
            faq: [{
                q: `Do you take on Bengaluru commercial projects?`,
                a: `Yes — cafes, offices, salons and showrooms across Bengaluru are a core part of our work.`
            }, {
                q: `How do you manage site visits in Bengaluru?`,
                a: `We schedule regular site visits throughout the project, with a dedicated project manager keeping everything on track.`
            }]
        }
    };

function Rg() {
    return (0, j.jsx)(Ng, {
        eyebrow: `Residential`,
        breadcrumbLabel: `Residential`,
        contentMap: Pg,
        basePath: `/residential`,
        enquirySource: `residential-detail`
    })
}
var zg = {
    cafe: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/5ab2b0600_generated_image.png`,
    salon: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/dc9e18904_generated_image.png`,
    office: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/78960ba57_generated_image.png`,
    restaurant: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/5ab2b0600_generated_image.png`
};

function Bg() {
    return (0, j.jsxs)(j.Fragment, {
        children: [(0, j.jsx)(Tg, {
            eyebrow: `Commercial`,
            title: `Spaces that work as hard as you do`,
            breadcrumb: [{
                label: `Commercial`
            }],
            image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/5ab2b0600_generated_image.png`,
            children: `Cafes, restaurants, clinics, salons, showrooms, offices and more — designed to impress customers and perform every single day.`
        }), (0, j.jsx)(`section`, {
            className: `section-pad bg-ivory`,
            children: (0, j.jsx)(`div`, {
                className: `container-px max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6`,
                children: uh.map((e, t) => (0, j.jsxs)(Q, {
                    as: V,
                    to: `/commercial/${e.slug}`,
                    delay: t % 4 * 80,
                    className: `group relative overflow-hidden aspect-[4/5] bg-sand`,
                    children: [(0, j.jsx)(Z, {
                        src: zg[e.slug] || zg.office,
                        alt: e.label,
                        className: `w-full h-full transition-transform duration-[1.2s] group-hover:scale-105`,
                        fittingType: `fill`
                    }), (0, j.jsx)(`div`, {
                        className: `absolute inset-0 bg-gradient-to-t from-charcoal/85 via-transparent to-transparent`
                    }), (0, j.jsxs)(`div`, {
                        className: `absolute bottom-0 left-0 right-0 p-5 text-ivory flex items-end justify-between`,
                        children: [(0, j.jsx)(`h3`, {
                            className: `font-heading text-xl md:text-2xl`,
                            children: e.label
                        }), (0, j.jsx)(on, {
                            size: 18,
                            className: `text-brass opacity-0 group-hover:opacity-100 transition-opacity`
                        })]
                    })]
                }, e.slug))
            })
        }), (0, j.jsx)(Eg, {
            title: `Opening a new space? Let's design it`,
            subtitle: `From concept to handover, we deliver commercial interiors that perform.`
        })]
    })
}

function Vg() {
    return (0, j.jsx)(Ng, {
        eyebrow: `Commercial`,
        breadcrumbLabel: `Commercial`,
        contentMap: Fg,
        basePath: `/commercial`,
        enquirySource: `commercial-detail`
    })
}
var Hg = {
        "modular-kitchen": `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/4cc4f4328_generated_image.png`,
        "living-room": `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/72108b898_generated_image.png`,
        "master-bedroom": `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/ea39026f8_generated_image.png`,
        wardrobe: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/a6d68da7e_generated_image.png`,
        "pooja-room": `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/ea7350bba_generated_image.png`,
        "false-ceiling": `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/e4fb692d4_generated_image.png`
    },
    Ug = e => e.toLowerCase().replace(/[^a-z0-9]+/g, `-`).replace(/^-|-$/g, ``);

function Wg() {
    let [e, t] = (0, _.useState)(dh.map(e => ({
        title: e,
        slug: Ug(e),
        image: Hg[Ug(e)]
    })));
    return (0, _.useEffect)(() => {
        $m.entities.Service.filter({}, {
            sort: `order`,
            limit: 20
        }).then(({
            items: e
        }) => {
            e && e.length && t(e)
        }).catch(() => {})
    }, []), (0, j.jsxs)(j.Fragment, {
        children: [(0, j.jsx)(Tg, {
            eyebrow: `Services`,
            title: `Every room, considered`,
            breadcrumb: [{
                label: `Services`
            }],
            image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/4cc4f4328_generated_image.png`,
            children: `From modular kitchens to false ceilings, we design and build each space with the same care and precision.`
        }), (0, j.jsx)(`section`, {
            className: `section-pad bg-ivory`,
            children: (0, j.jsx)(`div`, {
                className: `container-px max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6`,
                children: e.map((e, t) => (0, j.jsxs)(Q, {
                    as: V,
                    to: `/services/${e.slug||Ug(e.title)}`,
                    delay: t % 4 * 80,
                    className: `group relative overflow-hidden aspect-[4/5] bg-sand`,
                    children: [(0, j.jsx)(Z, {
                        src: e.image || Hg[Object.keys(Hg)[t % 6]],
                        alt: e.title,
                        className: `w-full h-full transition-transform duration-[1.2s] group-hover:scale-105`,
                        fittingType: `fill`
                    }), (0, j.jsx)(`div`, {
                        className: `absolute inset-0 bg-gradient-to-t from-charcoal/85 via-transparent to-transparent`
                    }), (0, j.jsxs)(`div`, {
                        className: `absolute bottom-0 left-0 right-0 p-5 text-ivory flex items-end justify-between`,
                        children: [(0, j.jsx)(`h3`, {
                            className: `font-heading text-lg md:text-xl`,
                            children: e.title
                        }), (0, j.jsx)(on, {
                            size: 16,
                            className: `text-brass opacity-0 group-hover:opacity-100 transition-opacity`
                        })]
                    })]
                }, e.slug || e.title))
            })
        }), (0, j.jsx)(Eg, {})]
    })
}

function Gg() {
    let {
        slug: e
    } = Ho(), {
        openEnquiry: t
    } = bh(), [n, r] = (0, _.useState)(null);
    (0, _.useEffect)(() => {
        $m.entities.Service.filter({
            slug: e
        }).then(({
            items: e
        }) => {
            e && e.length && r(e[0])
        }).catch(() => {})
    }, [e]);
    let i = Ig[e] || Object.values(Ig)[0],
        a = n ?.title || i.title,
        o = n ?.image || i.image,
        s = n ?.intro || i.intro,
        c = n ?.description || i.body,
        l = n ?.features || i.features;
    return (0, j.jsxs)(j.Fragment, {
        children: [(0, j.jsx)(Tg, {
            eyebrow: `Service`,
            title: a,
            breadcrumb: [{
                label: `Services`,
                to: `/services`
            }, {
                label: a
            }],
            image: o,
            children: s
        }), (0, j.jsx)(`section`, {
            className: `section-pad bg-ivory`,
            children: (0, j.jsxs)(`div`, {
                className: `container-px max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start`,
                children: [(0, j.jsxs)(`div`, {
                    className: `lg:col-span-7`,
                    children: [(0, j.jsx)(Q, {
                        as: `p`,
                        className: `eyebrow mb-5`,
                        children: `Overview`
                    }), (0, j.jsx)(Q, {
                        as: `h2`,
                        className: `h1-heading mb-6 text-balance`,
                        delay: 80,
                        children: a
                    }), (0, j.jsx)(Q, {
                        as: `p`,
                        className: `lead-text`,
                        delay: 140,
                        children: c
                    }), l && (0, j.jsx)(`div`, {
                        className: `mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4`,
                        children: l.map((e, t) => (0, j.jsx)(Q, {
                            as: `div`,
                            delay: t * 80,
                            className: `flex items-start gap-3 border-l border-brass pl-4`,
                            children: (0, j.jsx)(`span`, {
                                className: `text-charcoal/80 text-sm`,
                                children: e
                            })
                        }, t))
                    })]
                }), (0, j.jsx)(`div`, {
                    className: `lg:col-span-5 lg:sticky lg:top-28`,
                    children: (0, j.jsxs)(Q, {
                        as: `div`,
                        delay: 120,
                        className: `bg-sand/30 border border-sand p-7`,
                        children: [(0, j.jsx)(`div`, {
                            className: `eyebrow mb-4`,
                            children: `Interested?`
                        }), (0, j.jsx)(`h3`, {
                            className: `font-heading text-2xl mb-3`,
                            children: `Get this for your space`
                        }), (0, j.jsx)(`p`, {
                            className: `text-charcoal/70 text-sm mb-6`,
                            children: `Book a free consultation and we'll prepare a tailored proposal with 3D previews.`
                        }), (0, j.jsx)(X, {
                            onClick: () => t({
                                source: `service-detail`,
                                title: `Enquire about ${a}`,
                                subtitle: `Tell us about your space and we'll prepare a tailored proposal.`,
                                message: `I'm interested in ${a}. Please share more details.`
                            }),
                            variant: `brass`,
                            size: `md`,
                            className: `w-full mb-3`,
                            children: `Enquire now`
                        }), (0, j.jsx)(X, {
                            href: fh(`Hi Outscale Interiors, I'm interested in ${a}.`),
                            target: `_blank`,
                            rel: `noopener noreferrer`,
                            variant: `ghost`,
                            size: `md`,
                            className: `w-full`,
                            children: `WhatsApp us`
                        })]
                    })
                })]
            })
        }), (0, j.jsx)(Eg, {})]
    })
}
var Kg = [`All`, `Residential`, `Commercial`],
    qg = [`All`, `Modular Kitchen`, `Living Room`, `Master Bedroom`, `Cafe`, `Salon`, `Office`, `Wardrobe`];

function Jg() {
    let [e, t] = ks(), [n, r] = (0, _.useState)(tg), [i, a] = (0, _.useState)(!0), o = e.get(`type`) || `All`, s = e.get(`space`) || `All`, c = (0, _.useCallback)(async () => {
        a(!0);
        let e = {};
        o !== `All` && (e.property_type = o), s !== `All` && (e.space_type = s);
        try {
            let {
                items: t
            } = await $m.entities.Project.filter(e, {
                sort: `-created_date`,
                limit: 50
            });
            t && t.length ? r(t) : r(tg.filter(e => (o === `All` || e.property_type === o) && (s === `All` || e.space_type === s)))
        } catch {
            r(tg.filter(e => (o === `All` || e.property_type === o) && (s === `All` || e.space_type === s)))
        }
        a(!1)
    }, [o, s]);
    (0, _.useEffect)(() => {
        c()
    }, [c]);
    let l = (n, r) => {
        let i = new URLSearchParams(e);
        r === `All` ? i.delete(n) : i.set(n, r), t(i)
    };
    return (0, j.jsxs)(j.Fragment, {
        children: [(0, j.jsx)(Tg, {
            eyebrow: `Portfolio`,
            title: `Completed projects`,
            breadcrumb: [{
                label: `Projects`
            }],
            image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/b12455e05_generated_image.png`,
            children: `Browse our finished homes and commercial spaces across Hosur, Krishnagiri, Dharmapuri, Salem and Bengaluru.`
        }), (0, j.jsx)(`section`, {
            className: `py-10 bg-ivory border-b border-sand sticky top-[68px] z-30 backdrop-blur-md bg-ivory/95`,
            children: (0, j.jsxs)(`div`, {
                className: `container-px max-w-[1400px] mx-auto flex flex-wrap items-center gap-3`,
                children: [(0, j.jsx)(Yg, {
                    label: `Type`,
                    options: Kg,
                    value: o,
                    onChange: e => l(`type`, e)
                }), (0, j.jsx)(Yg, {
                    label: `Space`,
                    options: qg,
                    value: s,
                    onChange: e => l(`space`, e)
                })]
            })
        }), (0, j.jsx)(`section`, {
            className: `section-pad bg-ivory`,
            children: (0, j.jsx)(`div`, {
                className: `container-px max-w-[1400px] mx-auto`,
                children: i ? (0, j.jsx)(`div`, {
                    className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8`,
                    children: Array.from({
                        length: 6
                    }).map((e, t) => (0, j.jsx)(`div`, {
                        className: `aspect-[4/3] bg-sand animate-pulse`
                    }, t))
                }) : n.length === 0 ? (0, j.jsx)(`p`, {
                    className: `text-center text-charcoal/60 py-20`,
                    children: `No projects match these filters yet.`
                }) : (0, j.jsx)(`div`, {
                    className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8`,
                    children: n.map((e, t) => (0, j.jsx)(eg, {
                        project: e,
                        index: t
                    }, e.id))
                })
            })
        })]
    })
}

function Yg({
    label: e,
    options: t,
    value: n,
    onChange: r
}) {
    return (0, j.jsxs)(`div`, {
        className: `flex items-center gap-2 flex-wrap`,
        children: [(0, j.jsxs)(`span`, {
            className: `text-xs uppercase tracking-[0.12em] font-bold text-charcoal/50 mr-1`,
            children: [e, `:`]
        }), t.map(e => (0, j.jsx)(`button`, {
            onClick: () => r(e),
            className: `px-4 py-2 text-xs uppercase tracking-wider font-bold transition-colors ${n===e?`bg-charcoal text-ivory`:`text-charcoal/70 hover:text-charcoal border border-sand`}`,
            children: e
        }, e))]
    })
}

function Xg({
    title: e,
    image: t
}) {
    let [n, r] = (0, _.useState)(!1), i = typeof window < `u` ? window.location.href : ``, a = e || `Outscale Interiors`, o = e => {
        let n = encodeURIComponent(i),
            r = encodeURIComponent(a),
            o = ``;
        e === `whatsapp` ? o = `https://wa.me/?text=${r}%20${n}` : e === `facebook` ? o = `https://www.facebook.com/sharer/sharer.php?u=${n}` : e === `linkedin` ? o = `https://www.linkedin.com/sharing/share-offsite/?url=${n}` : e === `pinterest` && (o = `https://pinterest.com/pin/create/button/?url=${n}&media=${encodeURIComponent(t||``)}&description=${r}`), window.open(o, `_blank`, `noopener,noreferrer,width=600,height=500`)
    };
    return (0, j.jsxs)(`div`, {
        className: `flex items-center gap-3`,
        children: [(0, j.jsx)(`span`, {
            className: `text-xs uppercase tracking-[0.12em] font-bold text-charcoal/50`,
            children: `Share`
        }), (0, j.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [(0, j.jsx)(Zg, {
                onClick: () => o(`whatsapp`),
                label: `WhatsApp`,
                children: (0, j.jsx)(Sn, {
                    size: 16
                })
            }), (0, j.jsx)(Zg, {
                onClick: () => o(`facebook`),
                label: `Facebook`,
                children: (0, j.jsx)(fn, {
                    size: 16
                })
            }), (0, j.jsx)(Zg, {
                onClick: () => o(`linkedin`),
                label: `LinkedIn`,
                children: (0, j.jsx)(_n, {
                    size: 16
                })
            }), (0, j.jsx)(Zg, {
                onClick: () => o(`pinterest`),
                label: `Pinterest`,
                children: (0, j.jsx)(`span`, {
                    className: `text-xs font-bold`,
                    children: `P`
                })
            }), typeof navigator < `u` && navigator.share && (0, j.jsx)(Zg, {
                onClick: async () => {
                    if (navigator.share) try {
                        await navigator.share({
                            title: a,
                            url: i
                        })
                    } catch {}
                },
                label: `Share`,
                children: (0, j.jsx)(Dn, {
                    size: 16
                })
            }), (0, j.jsx)(Zg, {
                onClick: async () => {
                    try {
                        await navigator.clipboard.writeText(i), r(!0), setTimeout(() => r(!1), 2e3)
                    } catch {}
                },
                label: `Copy link`,
                children: n ? (0, j.jsx)(sn, {
                    size: 16,
                    className: `text-brass`
                }) : (0, j.jsx)(gn, {
                    size: 16
                })
            })]
        })]
    })
}

function Zg({
    onClick: e,
    label: t,
    children: n
}) {
    return (0, j.jsx)(`button`, {
        onClick: e,
        "aria-label": t,
        className: `w-9 h-9 rounded-full border border-sand flex items-center justify-center text-charcoal/70 hover:text-brass hover:border-brass transition-colors`,
        children: n
    })
}

function Qg() {
    let {
        slug: e
    } = Ho(), {
        openEnquiry: t
    } = bh(), [n, r] = (0, _.useState)(null), [i, a] = (0, _.useState)(!0), [o, s] = (0, _.useState)(null);
    if ((0, _.useEffect)(() => {
            a(!0), $m.entities.Project.filter({
                slug: e
            }).then(({
                items: t
            }) => {
                t && t.length ? r(t[0]) : r(tg.find(t => t.slug === e) || tg[0])
            }).catch(() => r(tg.find(t => t.slug === e) || tg[0])).finally(() => a(!1))
        }, [e]), i) return (0, j.jsx)(`div`, {
        className: `pt-40 pb-40 text-center text-charcoal/50`,
        children: `Loading…`
    });
    if (!n) return (0, j.jsx)(`div`, {
        className: `pt-40 pb-40 text-center`,
        children: `Project not found.`
    });
    let c = n.gallery && n.gallery.length ? n.gallery : [n.hero_image].filter(Boolean),
        l = [{
            label: `Type`,
            value: n.property_type
        }, {
            label: `Space`,
            value: n.space_type
        }, {
            label: `Area`,
            value: n.area_sqft ? `${n.area_sqft} sq ft` : null
        }, {
            label: `Location`,
            value: n.location
        }, {
            label: `Duration`,
            value: n.duration_weeks ? `${n.duration_weeks} weeks` : null
        }, {
            label: `Style`,
            value: n.style
        }, {
            label: `Materials`,
            value: n.materials
        }].filter(e => e.value),
        u = () => t({
            source: `project-enquiry`,
            title: `Enquire about ${n.title}`,
            subtitle: `Interested in this project? Tell us about your space and we'll prepare a tailored proposal.`,
            message: `I'm interested in "${n.title}". Please share more details.`,
            spaceType: n.space_type
        });
    return (0, j.jsxs)(j.Fragment, {
        children: [(0, j.jsxs)(`section`, {
            className: `relative h-[60vh] min-h-[420px] overflow-hidden bg-charcoal`,
            children: [n.hero_image && (0, j.jsx)(Z, {
                src: n.hero_image,
                alt: n.title,
                className: `w-full h-full`,
                fittingType: `fill`
            }), (0, j.jsx)(`div`, {
                className: `absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent`
            }), (0, j.jsxs)(`div`, {
                className: `absolute bottom-0 left-0 right-0 container-px max-w-[1400px] mx-auto text-ivory pb-12`,
                children: [(0, j.jsxs)(V, {
                    to: `/projects`,
                    className: `inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-ivory/70 hover:text-ivory mb-5`,
                    children: [(0, j.jsx)(rn, {
                        size: 14
                    }), ` All projects`]
                }), (0, j.jsxs)(`span`, {
                    className: `eyebrow text-brass block mb-3`,
                    children: [n.property_type, ` · `, n.space_type]
                }), (0, j.jsx)(`h1`, {
                    className: `display-heading text-balance`,
                    children: n.title
                })]
            })]
        }), (0, j.jsx)(`section`, {
            className: `section-pad bg-ivory`,
            children: (0, j.jsxs)(`div`, {
                className: `container-px max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12`,
                children: [(0, j.jsxs)(`div`, {
                    className: `lg:col-span-7`,
                    children: [(0, j.jsx)(Q, {
                        as: `p`,
                        className: `eyebrow mb-4`,
                        children: `The story`
                    }), (0, j.jsx)(Q, {
                        as: `h2`,
                        className: `h2-heading mb-6`,
                        delay: 80,
                        children: n.title
                    }), (0, j.jsx)(Q, {
                        as: `p`,
                        className: `lead-text`,
                        delay: 140,
                        children: n.story
                    })]
                }), (0, j.jsx)(`div`, {
                    className: `lg:col-span-5`,
                    children: (0, j.jsxs)(Q, {
                        as: `div`,
                        delay: 120,
                        className: `bg-sand/30 border border-sand p-7`,
                        children: [(0, j.jsx)(`div`, {
                            className: `eyebrow mb-5`,
                            children: `Project facts`
                        }), (0, j.jsx)(`dl`, {
                            className: `divide-y divide-sand`,
                            children: l.map(e => (0, j.jsxs)(`div`, {
                                className: `flex justify-between gap-4 py-3`,
                                children: [(0, j.jsx)(`dt`, {
                                    className: `text-xs uppercase tracking-[0.12em] text-charcoal/50 font-bold`,
                                    children: e.label
                                }), (0, j.jsx)(`dd`, {
                                    className: `text-sm text-charcoal text-right`,
                                    children: e.value
                                })]
                            }, e.label))
                        }), (0, j.jsx)(X, {
                            onClick: u,
                            variant: `brass`,
                            size: `md`,
                            className: `w-full mt-6`,
                            children: `Enquire about this project`
                        })]
                    })
                })]
            })
        }), c.length > 0 && (0, j.jsx)(`section`, {
            className: `bg-ivory pb-20 md:pb-28`,
            children: (0, j.jsxs)(`div`, {
                className: `container-px max-w-[1400px] mx-auto`,
                children: [(0, j.jsx)(Q, {
                    as: `p`,
                    className: `eyebrow mb-6`,
                    children: `Gallery`
                }), (0, j.jsx)(`div`, {
                    className: `grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6`,
                    children: c.map((e, t) => (0, j.jsxs)(Q, {
                        as: `button`,
                        onClick: () => s(e),
                        delay: t % 2 * 100,
                        className: `group relative overflow-hidden aspect-[4/3] bg-sand cursor-pointer`,
                        children: [(0, j.jsx)(Z, {
                            src: e,
                            alt: `${n.title} gallery ${t+1}`,
                            className: `w-full h-full transition-transform duration-[1.2s] group-hover:scale-105`,
                            fittingType: `fill`
                        }), (0, j.jsx)(`div`, {
                            className: `absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors flex items-center justify-center`,
                            children: (0, j.jsx)(bn, {
                                size: 22,
                                className: `text-ivory opacity-0 group-hover:opacity-100 transition-opacity`
                            })
                        })]
                    }, t))
                })]
            })
        }), n.before_after && n.before_after.length > 0 && (0, j.jsx)(`section`, {
            className: `section-pad bg-sand/30`,
            children: (0, j.jsxs)(`div`, {
                className: `container-px max-w-[1400px] mx-auto`,
                children: [(0, j.jsx)(Q, {
                    as: `p`,
                    className: `eyebrow mb-6`,
                    children: `Before & after`
                }), (0, j.jsx)(`div`, {
                    className: `grid grid-cols-1 md:grid-cols-2 gap-6`,
                    children: n.before_after.map((e, t) => (0, j.jsxs)(Q, {
                        as: `div`,
                        delay: t * 100,
                        className: `grid grid-cols-2 gap-2`,
                        children: [(0, j.jsxs)(`div`, {
                            className: `aspect-[4/3] overflow-hidden bg-sand relative`,
                            children: [(0, j.jsx)(Z, {
                                src: e.before,
                                alt: `Before`,
                                className: `w-full h-full`,
                                fittingType: `fill`
                            }), (0, j.jsx)(`span`, {
                                className: `absolute top-3 left-3 px-2 py-1 bg-charcoal/70 text-ivory text-[0.6rem] uppercase`,
                                children: `Before`
                            })]
                        }), (0, j.jsxs)(`div`, {
                            className: `aspect-[4/3] overflow-hidden bg-sand relative`,
                            children: [(0, j.jsx)(Z, {
                                src: e.after,
                                alt: `After`,
                                className: `w-full h-full`,
                                fittingType: `fill`
                            }), (0, j.jsx)(`span`, {
                                className: `absolute top-3 left-3 px-2 py-1 bg-brass text-ivory text-[0.6rem] uppercase`,
                                children: `After`
                            })]
                        })]
                    }, t))
                })]
            })
        }), n.tour_id && (0, j.jsx)(`section`, {
            className: `section-pad bg-charcoal text-ivory`,
            children: (0, j.jsxs)(`div`, {
                className: `container-px max-w-[1400px] mx-auto text-center`,
                children: [(0, j.jsx)(Q, {
                    as: `p`,
                    className: `eyebrow text-brass mb-4`,
                    children: `360° tour`
                }), (0, j.jsx)(Q, {
                    as: `h2`,
                    className: `h1-heading mb-8`,
                    delay: 80,
                    children: `Step inside this project`
                }), (0, j.jsxs)(X, {
                    to: `/360-tours`,
                    variant: `brass`,
                    size: `lg`,
                    children: [`Start the tour `, (0, j.jsx)(an, {
                        size: 16
                    })]
                })]
            })
        }), (0, j.jsx)(`div`, {
            className: `fixed bottom-16 md:bottom-6 left-1/2 -translate-x-1/2 z-30 hidden sm:block`,
            children: (0, j.jsxs)(`button`, {
                onClick: u,
                className: `bg-brass text-ivory px-6 py-3 text-xs uppercase tracking-[0.12em] font-bold shadow-lg flex items-center gap-2 hover:bg-charcoal transition-colors`,
                children: [`Enquire about this project `, (0, j.jsx)(an, {
                    size: 14
                })]
            })
        }), o && (0, j.jsxs)(`div`, {
            className: `fixed inset-0 z-[100] bg-charcoal/90 flex items-center justify-center p-4`,
            onClick: () => s(null),
            children: [(0, j.jsx)(Z, {
                src: o,
                alt: ``,
                className: `max-h-[90vh] max-w-[90vw]`,
                fittingType: `fit`
            }), (0, j.jsx)(`button`, {
                className: `absolute top-5 right-5 text-ivory`,
                onClick: () => s(null),
                children: `Close`
            })]
        }), (0, j.jsx)(`section`, {
            className: `bg-ivory pb-20`,
            children: (0, j.jsx)(`div`, {
                className: `container-px max-w-[1400px] mx-auto flex justify-center`,
                children: (0, j.jsx)(Xg, {
                    title: n.title,
                    image: n.hero_image
                })
            })
        }), (0, j.jsx)(Eg, {})]
    })
}
var $g = [`All`, `Modular Kitchen`, `Living Room`, `Master Bedroom`, `Wardrobe`, `Pooja Room`];

function e_() {
    let [e, t] = ks(), [n, r] = (0, _.useState)(ng), [i, a] = (0, _.useState)(!0), o = e.get(`space`) || `All`, s = (0, _.useCallback)(async () => {
        a(!0);
        let e = {};
        o !== `All` && (e.space_type = o);
        try {
            let {
                items: t
            } = await $m.entities.Design3D.filter(e, {
                sort: `-created_date`,
                limit: 50
            });
            t && t.length ? r(t) : r(ng.filter(e => o === `All` || e.space_type === o))
        } catch {
            r(ng.filter(e => o === `All` || e.space_type === o))
        }
        a(!1)
    }, [o]);
    (0, _.useEffect)(() => {
        s()
    }, [s]);
    let c = n => {
        let r = new URLSearchParams(e);
        n === `All` ? r.delete(`space`) : r.set(`space`, n), t(r)
    };
    return (0, j.jsxs)(j.Fragment, {
        children: [(0, j.jsx)(Tg, {
            eyebrow: `3D Designs`,
            title: `See it before you build it`,
            breadcrumb: [{
                label: `3D Designs`
            }],
            image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/e6e645c2e_generated_image.png`,
            children: `Photorealistic 3D renders from our studio — explore concepts by space type and bring the look to your own home.`
        }), (0, j.jsx)(`section`, {
            className: `py-10 bg-ivory border-b border-sand`,
            children: (0, j.jsxs)(`div`, {
                className: `container-px max-w-[1400px] mx-auto flex flex-wrap items-center gap-3`,
                children: [(0, j.jsx)(`span`, {
                    className: `text-xs uppercase tracking-[0.12em] font-bold text-charcoal/50 mr-1`,
                    children: `Space:`
                }), $g.map(e => (0, j.jsx)(`button`, {
                    onClick: () => c(e),
                    className: `px-4 py-2 text-xs uppercase tracking-wider font-bold transition-colors ${o===e?`bg-charcoal text-ivory`:`text-charcoal/70 hover:text-charcoal border border-sand`}`,
                    children: e
                }, e))]
            })
        }), (0, j.jsx)(`section`, {
            className: `section-pad bg-ivory`,
            children: (0, j.jsx)(`div`, {
                className: `container-px max-w-[1400px] mx-auto`,
                children: i ? (0, j.jsx)(`div`, {
                    className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`,
                    children: Array.from({
                        length: 6
                    }).map((e, t) => (0, j.jsx)(`div`, {
                        className: `aspect-[4/3] bg-sand animate-pulse`
                    }, t))
                }) : (0, j.jsx)(`div`, {
                    className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8`,
                    children: n.map((e, t) => (0, j.jsxs)(Q, {
                        as: V,
                        to: `/3d-designs/${e.slug||e.id}`,
                        delay: t % 3 * 100,
                        className: `group block`,
                        children: [(0, j.jsxs)(`div`, {
                            className: `relative overflow-hidden aspect-[4/3] bg-sand mb-5`,
                            children: [e.hero_image && (0, j.jsx)(Z, {
                                src: e.hero_image,
                                alt: e.title,
                                className: `w-full h-full transition-transform duration-[1.2s] group-hover:scale-105`,
                                fittingType: `fill`
                            }), (0, j.jsx)(`span`, {
                                className: `absolute top-4 left-4 px-2.5 py-1 bg-brass text-ivory text-[0.6rem] uppercase tracking-wider font-bold`,
                                children: `3D Concept`
                            })]
                        }), (0, j.jsx)(`h3`, {
                            className: `font-heading text-2xl text-charcoal group-hover:text-brass transition-colors`,
                            children: e.title
                        }), (0, j.jsxs)(`p`, {
                            className: `text-charcoal/60 text-sm mt-1`,
                            children: [e.space_type, ` · `, e.style]
                        })]
                    }, e.id))
                })
            })
        })]
    })
}

function t_() {
    let {
        slug: e
    } = Ho(), {
        openEnquiry: t
    } = bh(), [n, r] = (0, _.useState)(null), [i, a] = (0, _.useState)(!0);
    if ((0, _.useEffect)(() => {
            a(!0), $m.entities.Design3D.filter({
                slug: e
            }).then(({
                items: t
            }) => {
                t && t.length ? r(t[0]) : r(ng.find(t => t.slug === e) || ng[0])
            }).catch(() => r(ng.find(t => t.slug === e) || ng[0])).finally(() => a(!1))
        }, [e]), i) return (0, j.jsx)(`div`, {
        className: `pt-40 pb-40 text-center text-charcoal/50`,
        children: `Loading…`
    });
    if (!n) return (0, j.jsx)(`div`, {
        className: `pt-40 pb-40 text-center`,
        children: `Design not found.`
    });
    let o = n.gallery && n.gallery.length ? n.gallery : [n.hero_image].filter(Boolean);
    return (0, j.jsxs)(j.Fragment, {
        children: [(0, j.jsxs)(`section`, {
            className: `relative h-[55vh] min-h-[380px] overflow-hidden bg-charcoal`,
            children: [n.hero_image && (0, j.jsx)(Z, {
                src: n.hero_image,
                alt: n.title,
                className: `w-full h-full`,
                fittingType: `fill`
            }), (0, j.jsx)(`div`, {
                className: `absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent`
            }), (0, j.jsxs)(`div`, {
                className: `absolute bottom-0 left-0 right-0 container-px max-w-[1400px] mx-auto text-ivory pb-12`,
                children: [(0, j.jsxs)(V, {
                    to: `/3d-designs`,
                    className: `inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-ivory/70 hover:text-ivory mb-5`,
                    children: [(0, j.jsx)(rn, {
                        size: 14
                    }), ` All 3D designs`]
                }), (0, j.jsx)(`span`, {
                    className: `px-2.5 py-1 bg-brass text-ivory text-[0.6rem] uppercase tracking-wider font-bold mb-4 inline-block`,
                    children: `3D Concept`
                }), (0, j.jsx)(`h1`, {
                    className: `display-heading text-balance`,
                    children: n.title
                }), (0, j.jsxs)(`p`, {
                    className: `text-ivory/70 mt-3`,
                    children: [n.space_type, ` · `, n.style]
                })]
            })]
        }), (0, j.jsx)(`section`, {
            className: `section-pad bg-ivory`,
            children: (0, j.jsxs)(`div`, {
                className: `container-px max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20`,
                children: [(0, j.jsxs)(`div`, {
                    className: `lg:col-span-7`,
                    children: [(0, j.jsx)(Q, {
                        as: `p`,
                        className: `eyebrow mb-5`,
                        children: `Design notes`
                    }), (0, j.jsx)(Q, {
                        as: `h2`,
                        className: `h2-heading mb-6`,
                        delay: 80,
                        children: `The concept`
                    }), (0, j.jsx)(Q, {
                        as: `p`,
                        className: `lead-text`,
                        delay: 140,
                        children: n.design_notes
                    })]
                }), (0, j.jsx)(`div`, {
                    className: `lg:col-span-5 lg:sticky lg:top-28`,
                    children: (0, j.jsxs)(Q, {
                        as: `div`,
                        delay: 120,
                        className: `bg-sand/30 border border-sand p-7`,
                        children: [(0, j.jsx)(`div`, {
                            className: `eyebrow mb-4`,
                            children: `Bring this to life`
                        }), (0, j.jsx)(`h3`, {
                            className: `font-heading text-2xl mb-3`,
                            children: `Get this design for my space`
                        }), (0, j.jsx)(`p`, {
                            className: `text-charcoal/70 text-sm mb-6`,
                            children: `We'll adapt this concept to your room's dimensions, light and budget.`
                        }), (0, j.jsx)(X, {
                            onClick: () => t({
                                source: `3d-design-enquiry`,
                                title: `Get this design for your space`,
                                subtitle: `Interested in "${n.title}"? Tell us about your space and we'll adapt this concept for you.`,
                                message: `I'm interested in the 3D design "${n.title}". Please share more details.`,
                                spaceType: n.space_type
                            }),
                            variant: `brass`,
                            size: `md`,
                            className: `w-full mb-3`,
                            children: `Enquire now`
                        }), (0, j.jsxs)(X, {
                            href: fh(`Hi Outscale Interiors, I'm interested in the 3D design "${n.title}".`),
                            target: `_blank`,
                            rel: `noopener noreferrer`,
                            variant: `ghost`,
                            size: `md`,
                            className: `w-full`,
                            children: [`WhatsApp us `, (0, j.jsx)(an, {
                                size: 14
                            })]
                        })]
                    })
                })]
            })
        }), o.length > 0 && (0, j.jsx)(`section`, {
            className: `bg-ivory pb-20 md:pb-28`,
            children: (0, j.jsxs)(`div`, {
                className: `container-px max-w-[1400px] mx-auto`,
                children: [(0, j.jsx)(Q, {
                    as: `p`,
                    className: `eyebrow mb-6`,
                    children: `Gallery`
                }), (0, j.jsx)(`div`, {
                    className: `grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6`,
                    children: o.map((e, t) => (0, j.jsx)(Q, {
                        as: `div`,
                        delay: t % 2 * 100,
                        className: `overflow-hidden aspect-[4/3] bg-sand`,
                        children: (0, j.jsx)(Z, {
                            src: e,
                            alt: `${n.title} ${t+1}`,
                            className: `w-full h-full`,
                            fittingType: `fill`
                        })
                    }, t))
                })]
            })
        }), (0, j.jsx)(`section`, {
            className: `bg-ivory pb-20`,
            children: (0, j.jsx)(`div`, {
                className: `container-px max-w-[1400px] mx-auto flex justify-center`,
                children: (0, j.jsx)(Xg, {
                    title: n.title,
                    image: n.hero_image
                })
            })
        }), (0, j.jsx)(Eg, {})]
    })
}
var n_ = [{
    id: `t1`,
    title: `The Teak Residence Tour`,
    poster: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/b12455e05_generated_image.png`,
    scenes: [`https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/72108b898_generated_image.png`, `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/4cc4f4328_generated_image.png`, `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/ea39026f8_generated_image.png`, `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/ea7350bba_generated_image.png`],
    sceneNames: [`Living Room`, `Kitchen`, `Master Bedroom`, `Pooja Room`]
}, {
    id: `t2`,
    title: `Copper & Oak Cafe Tour`,
    poster: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/5ab2b0600_generated_image.png`,
    scenes: [`https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/5ab2b0600_generated_image.png`, `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/78960ba57_generated_image.png`],
    sceneNames: [`Main Hall`, `Counter Area`]
}];

function r_() {
    let [e, t] = (0, _.useState)(null);
    return (0, j.jsxs)(j.Fragment, {
        children: [(0, j.jsx)(Tg, {
            eyebrow: `360° Tours`,
            title: `Step inside our work`,
            breadcrumb: [{
                label: `360° Tours`
            }],
            image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/e6e645c2e_generated_image.png`,
            children: `Walk through our finished projects in immersive 360°. Drag to look around, switch between rooms, and get a true sense of the space.`
        }), (0, j.jsx)(`section`, {
            className: `section-pad bg-ivory`,
            children: (0, j.jsx)(`div`, {
                className: `container-px max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8`,
                children: n_.map((e, n) => (0, j.jsxs)(Q, {
                    as: `div`,
                    delay: n % 2 * 100,
                    className: `group relative overflow-hidden aspect-[16/10] bg-sand cursor-pointer`,
                    onClick: () => t(e),
                    children: [(0, j.jsx)(Z, {
                        src: e.poster,
                        alt: e.title,
                        className: `w-full h-full transition-transform duration-[1.5s] group-hover:scale-105`,
                        fittingType: `fill`
                    }), (0, j.jsx)(`div`, {
                        className: `absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/30 transition-colors flex items-center justify-center`,
                        children: (0, j.jsx)(`div`, {
                            className: `w-16 h-16 rounded-full bg-ivory/90 flex items-center justify-center group-hover:scale-110 transition-transform`,
                            children: (0, j.jsx)(wn, {
                                size: 24,
                                className: `text-charcoal ml-1`,
                                fill: `currentColor`
                            })
                        })
                    }), (0, j.jsxs)(`div`, {
                        className: `absolute bottom-0 left-0 right-0 p-6 text-ivory`,
                        children: [(0, j.jsxs)(`span`, {
                            className: `eyebrow text-brass block mb-2`,
                            children: [e.scenes.length, ` scenes`]
                        }), (0, j.jsx)(`h3`, {
                            className: `font-heading text-2xl md:text-3xl`,
                            children: e.title
                        })]
                    })]
                }, e.id))
            })
        }), e && (0, j.jsx)(i_, {
            tour: e,
            onClose: () => t(null)
        }), (0, j.jsx)(Eg, {
            title: `Want a tour of your future space?`,
            subtitle: `We create 3D and 360° previews for every project — so you see it before you build it.`
        })]
    })
}

function i_({
    tour: e,
    onClose: t
}) {
    let [n, r] = (0, _.useState)(0), [i, a] = (0, _.useState)(!1), [o, s] = (0, _.useState)(0), [c, l] = (0, _.useState)(!1), u = _.useRef(0), d = e => {
        l(!0), u.current = e.touches ? e.touches[0].clientX : e.clientX
    }, f = e => {
        if (!c) return;
        let t = e.touches ? e.touches[0].clientX : e.clientX;
        s(e => Math.max(-50, Math.min(50, e + (t - u.current) * .15))), u.current = t
    }, p = () => l(!1);
    return (0, j.jsxs)(`div`, {
        className: `fixed inset-0 z-[100] bg-charcoal flex flex-col`,
        children: [(0, j.jsxs)(`div`, {
            className: `flex items-center justify-between p-4 bg-charcoal text-ivory border-b border-ivory/15`,
            children: [(0, j.jsxs)(`div`, {
                children: [(0, j.jsx)(`div`, {
                    className: `eyebrow text-brass`,
                    children: e.sceneNames[n]
                }), (0, j.jsx)(`h3`, {
                    className: `font-heading text-xl`,
                    children: e.title
                })]
            }), (0, j.jsx)(`button`, {
                onClick: t,
                "aria-label": `Close tour`,
                className: `text-ivory hover:text-brass`,
                children: (0, j.jsx)(An, {
                    size: 24
                })
            })]
        }), i ? (0, j.jsxs)(`div`, {
            className: `flex-1 relative overflow-hidden cursor-grab active:cursor-grabbing select-none`,
            onMouseDown: d,
            onMouseMove: f,
            onMouseUp: p,
            onMouseLeave: p,
            onTouchStart: d,
            onTouchMove: f,
            onTouchEnd: p,
            children: [(0, j.jsx)(`div`, {
                className: `absolute inset-0`,
                style: {
                    transform: `translateX(${o}%)`,
                    transition: c ? `none` : `transform 0.3s ease-out`
                },
                children: (0, j.jsx)(`img`, {
                    src: e.scenes[n],
                    alt: e.sceneNames[n],
                    className: `w-full h-full object-cover`,
                    draggable: !1
                })
            }), (0, j.jsx)(`div`, {
                className: `absolute top-4 right-4 flex gap-2`,
                children: (0, j.jsx)(`button`, {
                    onClick: () => s(0),
                    className: `px-3 py-2 bg-ivory/20 backdrop-blur-sm text-ivory text-xs uppercase tracking-wider`,
                    children: `Reset`
                })
            })]
        }) : (0, j.jsxs)(`div`, {
            className: `flex-1 relative cursor-pointer`,
            onClick: () => a(!0),
            children: [(0, j.jsx)(Z, {
                src: e.scenes[0],
                alt: e.title,
                className: `w-full h-full`,
                fittingType: `fill`
            }), (0, j.jsxs)(`div`, {
                className: `absolute inset-0 bg-charcoal/50 flex flex-col items-center justify-center text-ivory`,
                children: [(0, j.jsx)(`div`, {
                    className: `w-20 h-20 rounded-full bg-ivory/90 flex items-center justify-center mb-4`,
                    children: (0, j.jsx)(wn, {
                        size: 28,
                        className: `text-charcoal ml-1`,
                        fill: `currentColor`
                    })
                }), (0, j.jsx)(`p`, {
                    className: `text-sm uppercase tracking-[0.15em]`,
                    children: `Click to start tour`
                }), (0, j.jsx)(`p`, {
                    className: `text-ivory/60 text-xs mt-2`,
                    children: `Drag to look around · switch scenes below`
                })]
            })]
        }), (0, j.jsx)(`div`, {
            className: `p-4 bg-charcoal border-t border-ivory/15 overflow-x-auto no-scrollbar`,
            children: (0, j.jsx)(`div`, {
                className: `flex gap-3`,
                children: e.scenes.map((t, i) => (0, j.jsx)(`button`, {
                    onClick: () => {
                        r(i), s(0), a(!0)
                    },
                    className: `shrink-0 w-28 aspect-video overflow-hidden border-2 transition-colors ${i===n?`border-brass`:`border-transparent opacity-60`}`,
                    children: (0, j.jsx)(`img`, {
                        src: t,
                        alt: e.sceneNames[i],
                        className: `w-full h-full object-cover`
                    })
                }, i))
            })
        })]
    })
}
var a_ = {
    hosur: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/4cc4f4328_generated_image.png`,
    krishnagiri: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/ea7350bba_generated_image.png`,
    dharmapuri: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/a6d68da7e_generated_image.png`,
    salem: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/72108b898_generated_image.png`,
    bengaluru: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/5ab2b0600_generated_image.png`
};

function o_() {
    return (0, j.jsxs)(j.Fragment, {
        children: [(0, j.jsx)(Tg, {
            eyebrow: `Service areas`,
            title: `Where we work`,
            breadcrumb: [{
                label: `Service Areas`
            }],
            image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/72108b898_generated_image.png`,
            children: `From our Hosur studio, we design and deliver interiors across Tamil Nadu and into Bengaluru.`
        }), (0, j.jsx)(`section`, {
            className: `section-pad bg-ivory`,
            children: (0, j.jsx)(`div`, {
                className: `container-px max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8`,
                children: ch.map((e, t) => (0, j.jsxs)(Q, {
                    as: V,
                    to: `/service-areas/${e.toLowerCase()}`,
                    delay: t % 3 * 100,
                    className: `group block`,
                    children: [(0, j.jsxs)(`div`, {
                        className: `relative overflow-hidden aspect-[4/3] bg-sand mb-5`,
                        children: [(0, j.jsx)(`img`, {
                            src: a_[e.toLowerCase()],
                            alt: `Interior design in ${e}`,
                            className: `w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105`
                        }), (0, j.jsx)(`div`, {
                            className: `absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent`
                        }), (0, j.jsx)(`h3`, {
                            className: `absolute bottom-5 left-5 font-heading text-3xl text-ivory`,
                            children: e
                        })]
                    }), (0, j.jsxs)(`span`, {
                        className: `inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-bold text-charcoal group-hover:text-brass transition-colors`,
                        children: [`Explore `, e, ` `, (0, j.jsx)(an, {
                            size: 14
                        })]
                    })]
                }, e))
            })
        }), (0, j.jsx)(Eg, {})]
    })
}

function s_() {
    let {
        slug: e
    } = Ho(), {
        openEnquiry: t
    } = bh(), [n, r] = (0, _.useState)(null);
    (0, _.useEffect)(() => {
        $m.entities.Location.filter({
            slug: e
        }).then(({
            items: e
        }) => {
            e && e.length && r(e[0])
        }).catch(() => {})
    }, [e]);
    let i = Lg[e] || Object.values(Lg)[0],
        a = n ?.title || i.title,
        o = n ?.image || i.image,
        s = n ?.intro || i.intro,
        c = n ?.description || i.body,
        l = n ?.local_projects || i.projects,
        u = n ?.local_faq || i.faq;
    return (0, j.jsxs)(j.Fragment, {
        children: [(0, j.jsx)(Tg, {
            eyebrow: `Service area`,
            title: a,
            breadcrumb: [{
                label: `Service Areas`,
                to: `/service-areas`
            }, {
                label: a.replace(`Interior Design in `, ``)
            }],
            image: o,
            children: s
        }), (0, j.jsx)(`section`, {
            className: `section-pad bg-ivory`,
            children: (0, j.jsxs)(`div`, {
                className: `container-px max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20`,
                children: [(0, j.jsxs)(`div`, {
                    className: `lg:col-span-7`,
                    children: [(0, j.jsxs)(Q, {
                        as: `p`,
                        className: `eyebrow mb-5`,
                        children: [`About `, a.replace(`Interior Design in `, ``)]
                    }), (0, j.jsxs)(Q, {
                        as: `h2`,
                        className: `h1-heading mb-6 text-balance`,
                        delay: 80,
                        children: [`Designing in `, a.replace(`Interior Design in `, ``)]
                    }), (0, j.jsx)(Q, {
                        as: `p`,
                        className: `lead-text`,
                        delay: 140,
                        children: c
                    }), l && (0, j.jsxs)(`div`, {
                        className: `mt-10`,
                        children: [(0, j.jsx)(Q, {
                            as: `p`,
                            className: `eyebrow mb-5`,
                            children: `Recent local work`
                        }), (0, j.jsx)(`ul`, {
                            className: `space-y-3`,
                            children: l.map((e, t) => (0, j.jsxs)(Q, {
                                as: `li`,
                                delay: t * 80,
                                className: `flex items-center gap-3 text-charcoal/80`,
                                children: [(0, j.jsx)(`span`, {
                                    className: `w-6 h-px bg-brass`
                                }), ` `, e]
                            }, t))
                        })]
                    })]
                }), (0, j.jsxs)(`div`, {
                    className: `lg:col-span-5`,
                    children: [(0, j.jsxs)(Q, {
                        as: `div`,
                        delay: 120,
                        className: `bg-sand/30 border border-sand p-7 mb-8`,
                        children: [(0, j.jsx)(`div`, {
                            className: `eyebrow mb-4`,
                            children: `Based here?`
                        }), (0, j.jsx)(`h3`, {
                            className: `font-heading text-2xl mb-3`,
                            children: `Let's design your space`
                        }), (0, j.jsx)(`p`, {
                            className: `text-charcoal/70 text-sm mb-6`,
                            children: `Book a free consultation — we'll come to you, anywhere in our service area.`
                        }), (0, j.jsx)(X, {
                            onClick: () => t({
                                source: `location-detail`,
                                title: `Design your space in ${a.replace(`Interior Design in `,``)}`,
                                subtitle: `Tell us about your project and we'll prepare a tailored proposal.`,
                                location: a.replace(`Interior Design in `, ``)
                            }),
                            variant: `brass`,
                            size: `md`,
                            className: `w-full mb-3`,
                            children: `Enquire now`
                        }), (0, j.jsx)(X, {
                            href: fh(`Hi Outscale Interiors, I'm looking for interior design in ${a.replace(`Interior Design in `,``)}.`),
                            target: `_blank`,
                            rel: `noopener noreferrer`,
                            variant: `ghost`,
                            size: `md`,
                            className: `w-full`,
                            children: `WhatsApp us`
                        })]
                    }), u && (0, j.jsxs)(Q, {
                        as: `div`,
                        delay: 160,
                        className: `border border-sand p-7`,
                        children: [(0, j.jsx)(`div`, {
                            className: `eyebrow mb-5`,
                            children: `Local FAQ`
                        }), (0, j.jsx)(`div`, {
                            className: `space-y-5`,
                            children: u.map((e, t) => (0, j.jsxs)(`div`, {
                                children: [(0, j.jsx)(`h4`, {
                                    className: `font-heading text-lg text-charcoal mb-1`,
                                    children: e.q
                                }), (0, j.jsx)(`p`, {
                                    className: `text-charcoal/70 text-sm`,
                                    children: e.a
                                })]
                            }, t))
                        })]
                    })]
                })]
            })
        }), (0, j.jsx)(Eg, {})]
    })
}

function c_() {
    let [e, t] = ks(), [n, r] = (0, _.useState)(ig), [i, a] = (0, _.useState)(!0), o = e.get(`category`) || `All`;
    return (0, _.useEffect)(() => {
        a(!0);
        let e = {
            status: `published`
        };
        o !== `All` && (e.category = o), $m.entities.BlogPost.filter(e, {
            sort: `-published_date`,
            limit: 30
        }).then(({
            items: e
        }) => {
            e && e.length ? r(e) : r(ig.filter(e => o === `All` || e.category === o))
        }).catch(() => r(ig.filter(e => o === `All` || e.category === o))).finally(() => a(!1))
    }, [o]), (0, j.jsxs)(j.Fragment, {
        children: [(0, j.jsx)(Tg, {
            eyebrow: `Journal`,
            title: `Ideas, guides & inspiration`,
            breadcrumb: [{
                label: `Blog`
            }],
            image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/e4fb692d4_generated_image.png`,
            children: `Practical advice and design inspiration from the Outscale studio.`
        }), (0, j.jsx)(`section`, {
            className: `py-10 bg-ivory border-b border-sand`,
            children: (0, j.jsx)(`div`, {
                className: `container-px max-w-[1400px] mx-auto flex flex-wrap items-center gap-3`,
                children: [`All`, `Residential`, `Commercial`, `Guides`].map(n => (0, j.jsx)(`button`, {
                    onClick: () => {
                        let r = new URLSearchParams(e);
                        n === `All` ? r.delete(`category`) : r.set(`category`, n), t(r)
                    },
                    className: `px-4 py-2 text-xs uppercase tracking-wider font-bold transition-colors ${o===n?`bg-charcoal text-ivory`:`text-charcoal/70 hover:text-charcoal border border-sand`}`,
                    children: n
                }, n))
            })
        }), (0, j.jsx)(`section`, {
            className: `section-pad bg-ivory`,
            children: (0, j.jsx)(`div`, {
                className: `container-px max-w-[1400px] mx-auto`,
                children: i ? (0, j.jsx)(`div`, {
                    className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`,
                    children: Array.from({
                        length: 6
                    }).map((e, t) => (0, j.jsx)(`div`, {
                        className: `aspect-[4/3] bg-sand animate-pulse`
                    }, t))
                }) : (0, j.jsx)(`div`, {
                    className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`,
                    children: n.map((e, t) => (0, j.jsxs)(Q, {
                        as: V,
                        to: `/blog/${e.slug||e.id}`,
                        delay: t % 3 * 100,
                        className: `group block`,
                        children: [(0, j.jsx)(`div`, {
                            className: `relative overflow-hidden aspect-[4/3] bg-sand mb-5`,
                            children: e.featured_image && (0, j.jsx)(Z, {
                                src: e.featured_image,
                                alt: e.title,
                                className: `w-full h-full transition-transform duration-[1.2s] group-hover:scale-105`,
                                fittingType: `fill`
                            })
                        }), (0, j.jsxs)(`div`, {
                            className: `flex items-center gap-3 text-xs uppercase tracking-[0.12em] text-charcoal/50 mb-3`,
                            children: [(0, j.jsx)(`span`, {
                                className: `text-brass font-bold`,
                                children: e.category
                            }), (0, j.jsx)(`span`, {
                                children: `·`
                            }), (0, j.jsxs)(`span`, {
                                children: [e.reading_time, ` min read`]
                            })]
                        }), (0, j.jsx)(`h3`, {
                            className: `font-heading text-2xl text-charcoal group-hover:text-brass transition-colors text-balance`,
                            children: e.title
                        }), (0, j.jsx)(`p`, {
                            className: `text-charcoal/60 text-sm mt-3`,
                            children: e.excerpt
                        })]
                    }, e.id))
                })
            })
        })]
    })
}

function l_() {
    let {
        slug: e
    } = Ho(), {
        openEnquiry: t
    } = bh(), [n, r] = (0, _.useState)(null), [i, a] = (0, _.useState)(!0);
    if ((0, _.useEffect)(() => {
            a(!0), $m.entities.BlogPost.filter({
                slug: e,
                status: `published`
            }).then(({
                items: t
            }) => {
                t && t.length ? r(t[0]) : r(ig.find(t => t.slug === e) || ig[0])
            }).catch(() => r(ig.find(t => t.slug === e) || ig[0])).finally(() => a(!1))
        }, [e]), i) return (0, j.jsx)(`div`, {
        className: `pt-40 pb-40 text-center text-charcoal/50`,
        children: `Loading…`
    });
    if (!n) return (0, j.jsx)(`div`, {
        className: `pt-40 pb-40 text-center`,
        children: `Article not found.`
    });
    let o = (n.content || u_(n)).split(`

`);
    return (0, j.jsxs)(j.Fragment, {
        children: [(0, j.jsxs)(`section`, {
            className: `relative h-[50vh] min-h-[360px] overflow-hidden bg-charcoal`,
            children: [n.featured_image && (0, j.jsx)(Z, {
                src: n.featured_image,
                alt: n.title,
                className: `w-full h-full`,
                fittingType: `fill`
            }), (0, j.jsx)(`div`, {
                className: `absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent`
            }), (0, j.jsxs)(`div`, {
                className: `absolute bottom-0 left-0 right-0 container-px max-w-[900px] mx-auto text-ivory pb-12`,
                children: [(0, j.jsxs)(V, {
                    to: `/blog`,
                    className: `inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-ivory/70 hover:text-ivory mb-5`,
                    children: [(0, j.jsx)(rn, {
                        size: 14
                    }), ` All articles`]
                }), (0, j.jsx)(`span`, {
                    className: `eyebrow text-brass block mb-3`,
                    children: n.category
                }), (0, j.jsx)(`h1`, {
                    className: `h1-heading text-balance`,
                    children: n.title
                }), (0, j.jsxs)(`div`, {
                    className: `flex items-center gap-4 mt-5 text-ivory/70 text-sm`,
                    children: [(0, j.jsx)(`span`, {
                        children: n.author
                    }), (0, j.jsx)(`span`, {
                        children: `·`
                    }), (0, j.jsxs)(`span`, {
                        className: `flex items-center gap-1`,
                        children: [(0, j.jsx)(ln, {
                            size: 13
                        }), ` `, n.reading_time, ` min read`]
                    })]
                })]
            })]
        }), (0, j.jsx)(`article`, {
            className: `section-pad bg-ivory`,
            children: (0, j.jsxs)(`div`, {
                className: `container-px max-w-[800px] mx-auto`,
                children: [(0, j.jsx)(Q, {
                    as: `p`,
                    className: `lead-text mb-10`,
                    children: n.excerpt
                }), o.map((e, t) => (0, j.jsx)(Q, {
                    as: `p`,
                    delay: t * 40,
                    className: `text-charcoal/80 mb-6 leading-relaxed`,
                    children: e
                }, t)), n.faq && n.faq.length > 0 && (0, j.jsxs)(`div`, {
                    className: `mt-12 border-t border-sand pt-10`,
                    children: [(0, j.jsx)(`h2`, {
                        className: `h2-heading mb-6`,
                        children: `Frequently asked`
                    }), (0, j.jsx)(`div`, {
                        className: `space-y-6`,
                        children: n.faq.map((e, t) => (0, j.jsxs)(`div`, {
                            children: [(0, j.jsx)(`h3`, {
                                className: `font-heading text-xl mb-2`,
                                children: e.question
                            }), (0, j.jsx)(`p`, {
                                className: `text-charcoal/70 text-sm`,
                                children: e.answer
                            })]
                        }, t))
                    })]
                }), (0, j.jsx)(`div`, {
                    className: `mt-10 flex justify-center`,
                    children: (0, j.jsx)(Xg, {
                        title: n.title,
                        image: n.featured_image
                    })
                }), (0, j.jsxs)(`div`, {
                    className: `mt-12 p-8 bg-sand/30 border border-sand text-center`,
                    children: [(0, j.jsx)(`div`, {
                        className: `eyebrow mb-3`,
                        children: `Ready to start?`
                    }), (0, j.jsx)(`h3`, {
                        className: `h2-heading mb-4`,
                        children: `Book a free consultation`
                    }), (0, j.jsx)(X, {
                        onClick: () => t({
                            source: `blog-cta`,
                            title: `Book a free consultation`
                        }),
                        variant: `brass`,
                        size: `lg`,
                        children: `Get in touch`
                    })]
                })]
            })
        }), (0, j.jsx)(Eg, {})]
    })
}

function u_(e) {
    return `${e.excerpt||``}\n\nInterior design is as much about how a space works as how it looks. At Outscale Interiors, we begin every project by understanding the way you move through your day — the things you reach for first, the light you love, the corners that feel right.\n\nGood design solves problems before you notice them. Storage that appears where you need it, lighting that shifts with your evening, materials that soften with age rather than wear out. These are the details that turn a room into a space you want to come back to.\n\nIf you're planning a project, the best first step is a conversation. Book a free consultation and we'll help you shape the brief — no obligation, just clear thinking from a team that designs and builds every day.`
}
var d_ = [{
    id: `dl1`,
    title: `Company Brochure`,
    slug: `company-brochure`,
    description: `Our story, services and design approach in one elegant document.`,
    cover_image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/72108b898_generated_image.png`,
    file_url: ``,
    file_size: `2.4 MB`,
    category: `Brochure`
}, {
    id: `dl2`,
    title: `Design Catalogue`,
    slug: `design-catalogue`,
    description: `Browse our signature styles, materials and finishes.`,
    cover_image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/4cc4f4328_generated_image.png`,
    file_url: ``,
    file_size: `5.1 MB`,
    category: `Catalogue`
}, {
    id: `dl3`,
    title: `Price List`,
    slug: `price-list`,
    description: `Transparent indicative pricing across our service range.`,
    cover_image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/ea39026f8_generated_image.png`,
    file_url: ``,
    file_size: `1.2 MB`,
    category: `Price List`
}];

function f_() {
    let [e, t] = (0, _.useState)(d_), [n, r] = (0, _.useState)(null), [i, a] = (0, _.useState)(null), [o, s] = (0, _.useState)(!1), [c, l] = (0, _.useState)(``);
    (0, _.useEffect)(() => {
        $m.entities.Download.filter({}, {
            sort: `order`,
            limit: 20
        }).then(({
            items: e
        }) => {
            e && e.length && t(e)
        }).catch(() => {})
    }, []);
    let u = async (e, t) => {
        e.preventDefault(), l(``);
        let n = new FormData(e.currentTarget),
            i = (n.get(`phone`) || ``).trim(),
            a = (n.get(`name`) || ``).trim();
        if (!/^[6-9]\d{9}$/.test(i)) {
            l(`Please enter a valid 10-digit mobile number.`);
            return
        }
        s(!0);
        try {
            await $m.entities.Lead.create({
                name: a,
                phone: i,
                source: `download`,
                document_name: t.title,
                page_url: `/downloads`,
                consent: !0
            }), t.file_url && window.open(t.file_url, `_blank`), r(null), alert(`Thank you! Your download is starting.`)
        } catch {
            l(`Something went wrong. Please try again.`)
        } finally {
            s(!1)
        }
    };
    return (0, j.jsxs)(j.Fragment, {
        children: [(0, j.jsx)(Tg, {
            eyebrow: `Resources`,
            title: `Brochures, catalogues & price lists`,
            breadcrumb: [{
                label: `Downloads`
            }],
            image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/72108b898_generated_image.png`,
            children: `Preview any document free, or download a copy — just share your name and phone number so we can follow up.`
        }), (0, j.jsx)(`section`, {
            className: `section-pad bg-ivory`,
            children: (0, j.jsx)(`div`, {
                className: `container-px max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8`,
                children: e.map((e, t) => (0, j.jsxs)(Q, {
                    as: `div`,
                    delay: t % 3 * 100,
                    className: `group bg-sand/30 border border-sand overflow-hidden`,
                    children: [(0, j.jsxs)(`div`, {
                        className: `relative aspect-[4/3] overflow-hidden bg-sand`,
                        children: [e.cover_image && (0, j.jsx)(Z, {
                            src: e.cover_image,
                            alt: e.title,
                            className: `w-full h-full transition-transform duration-[1.2s] group-hover:scale-105`,
                            fittingType: `fill`
                        }), (0, j.jsx)(`span`, {
                            className: `absolute top-4 left-4 px-2.5 py-1 bg-charcoal/70 text-ivory text-[0.6rem] uppercase tracking-wider`,
                            children: e.category
                        })]
                    }), (0, j.jsxs)(`div`, {
                        className: `p-6`,
                        children: [(0, j.jsx)(`h3`, {
                            className: `font-heading text-2xl mb-2`,
                            children: e.title
                        }), (0, j.jsx)(`p`, {
                            className: `text-charcoal/70 text-sm mb-4`,
                            children: e.description
                        }), (0, j.jsxs)(`div`, {
                            className: `flex items-center gap-2 text-xs text-charcoal/50 mb-5`,
                            children: [(0, j.jsx)(pn, {
                                size: 14
                            }), ` PDF · `, e.file_size]
                        }), (0, j.jsxs)(`div`, {
                            className: `flex gap-3`,
                            children: [(0, j.jsxs)(X, {
                                onClick: () => a(e),
                                variant: `ghost`,
                                size: `sm`,
                                className: `flex-1`,
                                children: [(0, j.jsx)(dn, {
                                    size: 14
                                }), ` Preview`]
                            }), (0, j.jsxs)(X, {
                                onClick: () => r(e),
                                variant: `brass`,
                                size: `sm`,
                                className: `flex-1`,
                                children: [(0, j.jsx)(un, {
                                    size: 14
                                }), ` Download`]
                            })]
                        })]
                    })]
                }, e.id))
            })
        }), i && (0, j.jsx)(`div`, {
            className: `fixed inset-0 z-[100] bg-charcoal/80 flex items-center justify-center p-4`,
            children: (0, j.jsxs)(`div`, {
                className: `bg-ivory w-full max-w-4xl h-[85vh] flex flex-col`,
                children: [(0, j.jsxs)(`div`, {
                    className: `flex items-center justify-between p-4 border-b border-sand`,
                    children: [(0, j.jsx)(`h3`, {
                        className: `font-heading text-xl`,
                        children: i.title
                    }), (0, j.jsx)(`button`, {
                        onClick: () => a(null),
                        "aria-label": `Close`,
                        children: (0, j.jsx)(An, {
                            size: 22
                        })
                    })]
                }), (0, j.jsx)(`div`, {
                    className: `flex-1 overflow-auto bg-sand/30 flex items-center justify-center`,
                    children: i.file_url ? (0, j.jsx)(`iframe`, {
                        src: i.file_url,
                        title: i.title,
                        className: `w-full h-full`
                    }) : (0, j.jsxs)(`div`, {
                        className: `text-center text-charcoal/50 p-10`,
                        children: [(0, j.jsx)(pn, {
                            size: 48,
                            className: `mx-auto mb-4 text-brass/40`,
                            strokeWidth: 1
                        }), (0, j.jsx)(`p`, {
                            children: `Preview placeholder — the owner will upload the real PDF here.`
                        }), (0, j.jsx)(X, {
                            onClick: () => {
                                r(i), a(null)
                            },
                            variant: `brass`,
                            size: `sm`,
                            className: `mt-6`,
                            children: `Download instead`
                        })]
                    })
                })]
            })
        }), n && (0, j.jsxs)(`div`, {
            className: `fixed inset-0 z-[100] flex items-center justify-center p-4`,
            children: [(0, j.jsx)(`div`, {
                className: `absolute inset-0 bg-charcoal/70 backdrop-blur-sm`,
                onClick: () => r(null)
            }), (0, j.jsxs)(`div`, {
                className: `relative w-full max-w-md bg-ivory border border-sand p-8`,
                children: [(0, j.jsx)(`button`, {
                    onClick: () => r(null),
                    className: `absolute top-4 right-4 text-charcoal/60 hover:text-charcoal`,
                    "aria-label": `Close`,
                    children: (0, j.jsx)(An, {
                        size: 20
                    })
                }), (0, j.jsx)(`div`, {
                    className: `eyebrow mb-3`,
                    children: `Download`
                }), (0, j.jsx)(`h3`, {
                    className: `h2-heading mb-2`,
                    children: n.title
                }), (0, j.jsx)(`p`, {
                    className: `text-charcoal/70 text-sm mb-6`,
                    children: `Enter your name and phone number to download.`
                }), (0, j.jsxs)(`form`, {
                    onSubmit: e => u(e, n),
                    className: `space-y-4`,
                    children: [(0, j.jsx)(`input`, {
                        type: `text`,
                        name: `company`,
                        className: `hidden`,
                        tabIndex: -1,
                        autoComplete: `off`
                    }), (0, j.jsxs)(`label`, {
                        className: `block`,
                        children: [(0, j.jsx)(`span`, {
                            className: `block text-xs uppercase tracking-[0.12em] font-bold text-charcoal/60 mb-1`,
                            children: `Name *`
                        }), (0, j.jsx)(`input`, {
                            name: `name`,
                            required: !0,
                            className: `w-full bg-transparent border-b border-charcoal/30 focus:border-brass py-2.5 outline-none`
                        })]
                    }), (0, j.jsxs)(`label`, {
                        className: `block`,
                        children: [(0, j.jsx)(`span`, {
                            className: `block text-xs uppercase tracking-[0.12em] font-bold text-charcoal/60 mb-1`,
                            children: `Phone number *`
                        }), (0, j.jsx)(`input`, {
                            name: `phone`,
                            required: !0,
                            inputMode: `tel`,
                            placeholder: `10-digit mobile`,
                            className: `w-full bg-transparent border-b border-charcoal/30 focus:border-brass py-2.5 outline-none`
                        })]
                    }), c && (0, j.jsx)(`p`, {
                        className: `text-destructive text-sm`,
                        children: c
                    }), (0, j.jsxs)(`label`, {
                        className: `flex items-start gap-3 text-xs text-charcoal/70`,
                        children: [(0, j.jsx)(`input`, {
                            type: `checkbox`,
                            required: !0,
                            className: `mt-0.5 accent-brass`
                        }), (0, j.jsx)(`span`, {
                            children: `I agree to be contacted and accept the privacy policy.`
                        })]
                    }), (0, j.jsx)(X, {
                        type: `submit`,
                        variant: `primary`,
                        size: `lg`,
                        className: `w-full`,
                        fill: !0,
                        children: o ? `Sending…` : `Download now`
                    })]
                })]
            })]
        })]
    })
}

function p_() {
    let [e, t] = (0, _.useState)(!1), [n, r] = (0, _.useState)(!1), [i, a] = (0, _.useState)(``);
    return (0, j.jsxs)(j.Fragment, {
        children: [(0, j.jsx)(Tg, {
            eyebrow: `Get in touch`,
            title: `Let's start a conversation`,
            breadcrumb: [{
                label: `Contact`
            }],
            image: `https://media.base44.com/images/public/6acdf8cce4114e45a1f9693e/72108b898_generated_image.png`,
            children: `Tell us about your space and we'll get back to you within one business day. Prefer to chat? Message us on WhatsApp or call directly.`
        }), (0, j.jsx)(`section`, {
            className: `section-pad bg-ivory`,
            children: (0, j.jsxs)(`div`, {
                className: `container-px max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16`,
                children: [(0, j.jsxs)(`div`, {
                    children: [(0, j.jsx)(Q, {
                        as: `p`,
                        className: `eyebrow mb-5`,
                        children: `Contact details`
                    }), (0, j.jsx)(Q, {
                        as: `h2`,
                        className: `h2-heading mb-8`,
                        delay: 80,
                        children: `Reach the studio`
                    }), (0, j.jsxs)(`div`, {
                        className: `space-y-6`,
                        children: [(0, j.jsx)(m_, {
                            icon: Cn,
                            label: `Call us`,
                            value: sh.phone,
                            href: ph()
                        }), (0, j.jsx)(m_, {
                            icon: Sn,
                            label: `WhatsApp`,
                            value: `Chat with our team`,
                            href: fh(sh.whatsapp_message),
                            external: !0
                        }), (0, j.jsx)(m_, {
                            icon: vn,
                            label: `Email`,
                            value: sh.email,
                            href: `mailto:${sh.email}`
                        }), (0, j.jsx)(m_, {
                            icon: yn,
                            label: `Studio`,
                            value: sh.address
                        }), (0, j.jsx)(m_, {
                            icon: ln,
                            label: `Hours`,
                            value: `Mon–Sat, 10:00 AM – 7:00 PM`
                        })]
                    }), (0, j.jsx)(Q, {
                        as: `div`,
                        className: `mt-10 aspect-[16/10] bg-sand border border-sand`,
                        delay: 120,
                        children: (0, j.jsx)(`div`, {
                            className: `w-full h-full flex items-center justify-center text-charcoal/40 text-sm`,
                            children: `Map embed placeholder`
                        })
                    })]
                }), (0, j.jsx)(Q, {
                    as: `div`,
                    delay: 120,
                    className: `bg-sand/30 border border-sand p-8 md:p-10`,
                    children: n ? (0, j.jsxs)(`div`, {
                        className: `text-center py-16`,
                        children: [(0, j.jsx)(`div`, {
                            className: `eyebrow mb-4`,
                            children: `Thank you`
                        }), (0, j.jsx)(`h3`, {
                            className: `h2-heading mb-3`,
                            children: `Enquiry received`
                        }), (0, j.jsx)(`p`, {
                            className: `text-charcoal/70`,
                            children: `Redirecting you…`
                        })]
                    }) : (0, j.jsxs)(j.Fragment, {
                        children: [(0, j.jsx)(`h3`, {
                            className: `h2-heading mb-2`,
                            children: `Send an enquiry`
                        }), (0, j.jsx)(`p`, {
                            className: `text-charcoal/70 mb-7 text-sm`,
                            children: `Fields marked * are required.`
                        }), (0, j.jsxs)(`form`, {
                            onSubmit: async e => {
                                e.preventDefault(), a(``);
                                let n = new FormData(e.currentTarget),
                                    i = (n.get(`phone`) || ``).trim(),
                                    o = (n.get(`name`) || ``).trim();
                                if (!/^[6-9]\d{9}$/.test(i)) {
                                    a(`Please enter a valid 10-digit Indian mobile number.`);
                                    return
                                }
                                t(!0);
                                try {
                                    await $m.entities.Lead.create({
                                        name: o,
                                        phone: i,
                                        email: (n.get(`email`) || ``).trim(),
                                        space_type: (n.get(`space_type`) || ``).trim(),
                                        location: (n.get(`location`) || ``).trim(),
                                        message: (n.get(`message`) || ``).trim(),
                                        source: `contact`,
                                        page_url: `/contact`,
                                        consent: !0
                                    }), r(!0), window.location.href = `/thank-you`
                                } catch {
                                    a(`Something went wrong. Please call us or try again.`)
                                } finally {
                                    t(!1)
                                }
                            },
                            className: `space-y-5`,
                            children: [(0, j.jsx)(`input`, {
                                type: `text`,
                                name: `company`,
                                className: `hidden`,
                                tabIndex: -1,
                                autoComplete: `off`
                            }), (0, j.jsx)(h_, {
                                label: `Full name *`,
                                children: (0, j.jsx)(`input`, {
                                    name: `name`,
                                    required: !0,
                                    className: `w-full bg-transparent border-b border-charcoal/30 focus:border-brass py-2.5 outline-none transition-colors`
                                })
                            }), (0, j.jsx)(h_, {
                                label: `Phone number *`,
                                children: (0, j.jsx)(`input`, {
                                    name: `phone`,
                                    required: !0,
                                    inputMode: `tel`,
                                    placeholder: `10-digit mobile`,
                                    className: `w-full bg-transparent border-b border-charcoal/30 focus:border-brass py-2.5 outline-none transition-colors`
                                })
                            }), (0, j.jsx)(h_, {
                                label: `Email (optional)`,
                                children: (0, j.jsx)(`input`, {
                                    name: `email`,
                                    type: `email`,
                                    className: `w-full bg-transparent border-b border-charcoal/30 focus:border-brass py-2.5 outline-none transition-colors`
                                })
                            }), (0, j.jsx)(h_, {
                                label: `Space type`,
                                children: (0, j.jsxs)(`select`, {
                                    name: `space_type`,
                                    className: `w-full bg-transparent border-b border-charcoal/30 focus:border-brass py-2.5 outline-none transition-colors`,
                                    children: [(0, j.jsx)(`option`, {
                                        value: ``,
                                        children: `Select…`
                                    }), (0, j.jsx)(`option`, {
                                        children: `1 BHK`
                                    }), (0, j.jsx)(`option`, {
                                        children: `2 BHK`
                                    }), (0, j.jsx)(`option`, {
                                        children: `3 BHK`
                                    }), (0, j.jsx)(`option`, {
                                        children: `Luxury Home`
                                    }), (0, j.jsx)(`option`, {
                                        children: `Cafe`
                                    }), (0, j.jsx)(`option`, {
                                        children: `Restaurant`
                                    }), (0, j.jsx)(`option`, {
                                        children: `Salon`
                                    }), (0, j.jsx)(`option`, {
                                        children: `Office`
                                    }), (0, j.jsx)(`option`, {
                                        children: `Other`
                                    })]
                                })
                            }), (0, j.jsx)(h_, {
                                label: `Location`,
                                children: (0, j.jsxs)(`select`, {
                                    name: `location`,
                                    className: `w-full bg-transparent border-b border-charcoal/30 focus:border-brass py-2.5 outline-none transition-colors`,
                                    children: [(0, j.jsx)(`option`, {
                                        value: ``,
                                        children: `Select…`
                                    }), ch.map(e => (0, j.jsx)(`option`, {
                                        children: e
                                    }, e)), (0, j.jsx)(`option`, {
                                        children: `Other`
                                    })]
                                })
                            }), (0, j.jsx)(h_, {
                                label: `Message`,
                                children: (0, j.jsx)(`textarea`, {
                                    name: `message`,
                                    rows: 4,
                                    className: `w-full bg-transparent border-b border-charcoal/30 focus:border-brass py-2.5 outline-none transition-colors resize-none`
                                })
                            }), i && (0, j.jsx)(`p`, {
                                className: `text-destructive text-sm`,
                                children: i
                            }), (0, j.jsxs)(`label`, {
                                className: `flex items-start gap-3 text-xs text-charcoal/70`,
                                children: [(0, j.jsx)(`input`, {
                                    type: `checkbox`,
                                    required: !0,
                                    className: `mt-0.5 accent-brass`
                                }), (0, j.jsxs)(`span`, {
                                    children: [`I agree to be contacted and accept the `, (0, j.jsx)(`a`, {
                                        href: `/privacy-policy`,
                                        className: `text-brass underline`,
                                        children: `privacy policy`
                                    }), `.`]
                                })]
                            }), (0, j.jsx)(X, {
                                type: `submit`,
                                variant: `primary`,
                                size: `lg`,
                                className: `w-full`,
                                fill: !0,
                                children: e ? `Sending…` : `Send enquiry`
                            })]
                        })]
                    })
                })]
            })
        })]
    })
}

function m_({
    icon: e,
    label: t,
    value: n,
    href: r,
    external: i
}) {
    let a = (0, j.jsxs)(`div`, {
        className: `flex items-start gap-4`,
        children: [(0, j.jsx)(`div`, {
            className: `w-11 h-11 rounded-full bg-brass/10 flex items-center justify-center shrink-0`,
            children: (0, j.jsx)(e, {
                size: 18,
                className: `text-brass`,
                strokeWidth: 1.5
            })
        }), (0, j.jsxs)(`div`, {
            children: [(0, j.jsx)(`div`, {
                className: `text-xs uppercase tracking-[0.12em] text-charcoal/50 font-bold mb-1`,
                children: t
            }), (0, j.jsx)(`div`, {
                className: `text-charcoal`,
                children: n
            })]
        })]
    });
    return r ? (0, j.jsx)(`a`, {
        href: r,
        target: i ? `_blank` : void 0,
        rel: i ? `noopener noreferrer` : void 0,
        className: `block hover:opacity-70 transition-opacity`,
        children: a
    }) : a
}

function h_({
    label: e,
    children: t
}) {
    return (0, j.jsxs)(`label`, {
        className: `block`,
        children: [(0, j.jsx)(`span`, {
            className: `block text-xs uppercase tracking-[0.12em] font-bold text-charcoal/60 mb-1`,
            children: e
        }), t]
    })
}

function g_() {
    return (0, j.jsx)(`section`, {
        className: `min-h-[70vh] flex items-center bg-ivory pt-32`,
        children: (0, j.jsxs)(`div`, {
            className: `container-px max-w-2xl mx-auto text-center`,
            children: [(0, j.jsx)(`div`, {
                className: `w-16 h-16 rounded-full bg-brass/15 flex items-center justify-center mx-auto mb-8`,
                children: (0, j.jsx)(sn, {
                    size: 28,
                    className: `text-brass`,
                    strokeWidth: 2
                })
            }), (0, j.jsx)(`p`, {
                className: `eyebrow mb-5`,
                children: `Thank you`
            }), (0, j.jsx)(`h1`, {
                className: `display-heading text-balance mb-6`,
                children: `Your enquiry is on its way`
            }), (0, j.jsx)(`p`, {
                className: `lead-text mb-10`,
                children: `We've received your details and our design team will reach out within one business day. In the meantime, feel free to explore our work or message us on WhatsApp.`
            }), (0, j.jsxs)(`div`, {
                className: `flex flex-col sm:flex-row items-center justify-center gap-4`,
                children: [(0, j.jsx)(X, {
                    href: fh(`Hi Outscale Interiors, I just submitted an enquiry on your website.`),
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    variant: `brass`,
                    size: `lg`,
                    children: `Chat on WhatsApp`
                }), (0, j.jsx)(V, {
                    to: `/projects`,
                    className: `text-xs uppercase tracking-[0.12em] font-bold text-charcoal hover:text-brass transition-colors`,
                    children: `Browse our projects →`
                })]
            })]
        })
    })
}

function __() {
    return (0, j.jsxs)(j.Fragment, {
        children: [(0, j.jsx)(Tg, {
            eyebrow: `Legal`,
            title: `Privacy Policy`,
            breadcrumb: [{
                label: `Privacy Policy`
            }]
        }), (0, j.jsx)(`section`, {
            className: `section-pad bg-ivory`,
            children: (0, j.jsxs)(`div`, {
                className: `container-px max-w-3xl mx-auto prose-styles space-y-6 text-charcoal/80`,
                children: [(0, j.jsx)(`p`, {
                    className: `lead-text`,
                    children: `Outscale Interiors respects your privacy. This policy explains what we collect and how we use it.`
                }), (0, j.jsxs)(`div`, {
                    children: [(0, j.jsx)(`h2`, {
                        className: `h2-heading !text-3xl mb-3`,
                        children: `Information we collect`
                    }), (0, j.jsx)(`p`, {
                        children: `When you submit an enquiry or download form, we collect your name, phone number, email (if provided), and the details of your message. We also capture the page you submitted from and any UTM parameters in the URL.`
                    })]
                }), (0, j.jsxs)(`div`, {
                    children: [(0, j.jsx)(`h2`, {
                        className: `h2-heading !text-3xl mb-3`,
                        children: `How we use it`
                    }), (0, j.jsx)(`p`, {
                        children: `We use your information solely to respond to your enquiry, prepare proposals, and deliver our services. We never sell your data to third parties.`
                    })]
                }), (0, j.jsxs)(`div`, {
                    children: [(0, j.jsx)(`h2`, {
                        className: `h2-heading !text-3xl mb-3`,
                        children: `Cookies`
                    }), (0, j.jsx)(`p`, {
                        children: `We use minimal cookies to remember your preferences and to understand how visitors use the site. You can disable cookies in your browser settings.`
                    })]
                }), (0, j.jsxs)(`div`, {
                    children: [(0, j.jsx)(`h2`, {
                        className: `h2-heading !text-3xl mb-3`,
                        children: `Your rights`
                    }), (0, j.jsx)(`p`, {
                        children: `You may request access to, correction of, or deletion of your personal data at any time by emailing hello@outscaleinteriors.com.`
                    })]
                }), (0, j.jsxs)(`div`, {
                    children: [(0, j.jsx)(`h2`, {
                        className: `h2-heading !text-3xl mb-3`,
                        children: `Contact`
                    }), (0, j.jsx)(`p`, {
                        children: `Questions about this policy? Write to hello@outscaleinteriors.com.`
                    })]
                })]
            })
        })]
    })
}

function v_() {
    return (0, j.jsxs)(j.Fragment, {
        children: [(0, j.jsx)(Tg, {
            eyebrow: `Legal`,
            title: `Terms of Service`,
            breadcrumb: [{
                label: `Terms`
            }]
        }), (0, j.jsx)(`section`, {
            className: `section-pad bg-ivory`,
            children: (0, j.jsxs)(`div`, {
                className: `container-px max-w-3xl mx-auto space-y-6 text-charcoal/80`,
                children: [(0, j.jsx)(`p`, {
                    className: `lead-text`,
                    children: `These terms govern your use of the Outscale Interiors website and our design services.`
                }), (0, j.jsxs)(`div`, {
                    children: [(0, j.jsx)(`h2`, {
                        className: `h2-heading !text-3xl mb-3`,
                        children: `Services`
                    }), (0, j.jsx)(`p`, {
                        children: `We provide interior design and execution services for residential and commercial clients. Project scope, timelines and pricing are agreed in a separate written proposal before work begins.`
                    })]
                }), (0, j.jsxs)(`div`, {
                    children: [(0, j.jsx)(`h2`, {
                        className: `h2-heading !text-3xl mb-3`,
                        children: `Quotes and payments`
                    }), (0, j.jsx)(`p`, {
                        children: `All quotes are valid for 30 days unless stated otherwise. Payment milestones are set out in your project proposal.`
                    })]
                }), (0, j.jsxs)(`div`, {
                    children: [(0, j.jsx)(`h2`, {
                        className: `h2-heading !text-3xl mb-3`,
                        children: `Intellectual property`
                    }), (0, j.jsx)(`p`, {
                        children: `All designs, 3D renders and content on this site are the property of Outscale Interiors and may not be reproduced without permission.`
                    })]
                }), (0, j.jsxs)(`div`, {
                    children: [(0, j.jsx)(`h2`, {
                        className: `h2-heading !text-3xl mb-3`,
                        children: `Liability`
                    }), (0, j.jsx)(`p`, {
                        children: `We take reasonable care in delivering our services. We are not liable for indirect or consequential losses arising from use of this website.`
                    })]
                }), (0, j.jsxs)(`div`, {
                    children: [(0, j.jsx)(`h2`, {
                        className: `h2-heading !text-3xl mb-3`,
                        children: `Contact`
                    }), (0, j.jsx)(`p`, {
                        children: `Questions about these terms? Write to hello@outscaleinteriors.com.`
                    })]
                })]
            })
        })]
    })
}
var y_ = () => {
    let {
        isLoadingAuth: e,
        isLoadingPublicSettings: t,
        authError: n,
        navigateToLogin: r
    } = rh();
    if (t || e) return (0, j.jsx)(`div`, {
        className: `fixed inset-0 flex items-center justify-center`,
        children: (0, j.jsx)(`div`, {
            className: `w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin`
        })
    });
    if (n) {
        if (n.type === `user_not_registered`) return (0, j.jsx)(ih, {});
        if (n.type === `auth_required`) return r(), null
    }
    return (0, j.jsxs)(ds, {
        children: [(0, j.jsxs)(B, {
            element: (0, j.jsx)(Wh, {}),
            children: [(0, j.jsx)(B, {
                path: `/`,
                element: (0, j.jsx)(wg, {})
            }), (0, j.jsx)(B, {
                path: `/about`,
                element: (0, j.jsx)(Ag, {})
            }), (0, j.jsx)(B, {
                path: `/residential`,
                element: (0, j.jsx)(Mg, {})
            }), (0, j.jsx)(B, {
                path: `/residential/:slug`,
                element: (0, j.jsx)(Rg, {})
            }), (0, j.jsx)(B, {
                path: `/commercial`,
                element: (0, j.jsx)(Bg, {})
            }), (0, j.jsx)(B, {
                path: `/commercial/:slug`,
                element: (0, j.jsx)(Vg, {})
            }), (0, j.jsx)(B, {
                path: `/services`,
                element: (0, j.jsx)(Wg, {})
            }), (0, j.jsx)(B, {
                path: `/services/:slug`,
                element: (0, j.jsx)(Gg, {})
            }), (0, j.jsx)(B, {
                path: `/projects`,
                element: (0, j.jsx)(Jg, {})
            }), (0, j.jsx)(B, {
                path: `/projects/:slug`,
                element: (0, j.jsx)(Qg, {})
            }), (0, j.jsx)(B, {
                path: `/3d-designs`,
                element: (0, j.jsx)(e_, {})
            }), (0, j.jsx)(B, {
                path: `/3d-designs/:slug`,
                element: (0, j.jsx)(t_, {})
            }), (0, j.jsx)(B, {
                path: `/360-tours`,
                element: (0, j.jsx)(r_, {})
            }), (0, j.jsx)(B, {
                path: `/service-areas`,
                element: (0, j.jsx)(o_, {})
            }), (0, j.jsx)(B, {
                path: `/service-areas/:slug`,
                element: (0, j.jsx)(s_, {})
            }), (0, j.jsx)(B, {
                path: `/blog`,
                element: (0, j.jsx)(c_, {})
            }), (0, j.jsx)(B, {
                path: `/blog/:slug`,
                element: (0, j.jsx)(l_, {})
            }), (0, j.jsx)(B, {
                path: `/downloads`,
                element: (0, j.jsx)(f_, {})
            }), (0, j.jsx)(B, {
                path: `/contact`,
                element: (0, j.jsx)(p_, {})
            }), (0, j.jsx)(B, {
                path: `/thank-you`,
                element: (0, j.jsx)(g_, {})
            }), (0, j.jsx)(B, {
                path: `/privacy-policy`,
                element: (0, j.jsx)(__, {})
            }), (0, j.jsx)(B, {
                path: `/terms`,
                element: (0, j.jsx)(v_, {})
            })]
        }), (0, j.jsx)(B, {
            path: `*`,
            element: (0, j.jsx)(eh, {})
        })]
    })
};

function b_() {
    return (0, j.jsx)(nh, {
        children: (0, j.jsxs)(_a, {
            client: Ma,
            children: [(0, j.jsxs)(Cs, {
                children: [(0, j.jsx)(oh, {}), (0, j.jsx)(y_, {})]
            }), (0, j.jsx)(li, {})]
        })
    })
}
g.createRoot(document.getElementById(`root`)).render((0, j.jsx)(b_, {}));