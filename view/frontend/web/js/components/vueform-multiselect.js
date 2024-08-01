/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/@vueform/multiselect@2.6.2/dist/multiselect.global.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var VueformMultiselect = function (e) {
    "use strict";

    function a(e) {
        return -1 !== [null, void 0].indexOf(e)
    }

    function l(l, t, u) {
        const {object: r, valueProp: o, mode: n} = e.toRefs(l), i = e.getCurrentInstance().proxy, s = u.iv,
            c = e => r.value || a(e) ? e : Array.isArray(e) ? e.map((e => e[o.value])) : e[o.value],
            d = e => a(e) ? "single" === n.value ? {} : [] : e;
        return {
            update: (e, a = !0) => {
                s.value = d(e);
                const l = c(e);
                t.emit("change", l, i), a && (t.emit("input", l), t.emit("update:modelValue", l))
            }
        }
    }

    function t(a, l) {
        const {value: t, modelValue: u, mode: r, valueProp: o} = e.toRefs(a), n = e.ref("single" !== r.value ? [] : {}),
            i = u && void 0 !== u.value ? u : t,
            s = e.computed((() => "single" === r.value ? n.value[o.value] : n.value.map((e => e[o.value])))),
            c = e.computed((() => "single" !== r.value ? n.value.map((e => e[o.value])).join(",") : n.value[o.value]));
        return {iv: n, internalValue: n, ev: i, externalValue: i, textValue: c, plainValue: s}
    }

    function u(a, l, t) {
        const {regex: u} = e.toRefs(a), r = e.getCurrentInstance().proxy, o = t.isOpen, n = t.open, i = e.ref(null),
            s = e.ref(null);
        return e.watch(i, (e => {
            !o.value && e && n(), l.emit("search-change", e, r)
        })), {
            search: i, input: s, clearSearch: () => {
                i.value = ""
            }, handleSearchInput: e => {
                i.value = e.target.value
            }, handleKeypress: e => {
                if (u && u.value) {
                    let a = u.value;
                    "string" == typeof a && (a = new RegExp(a)), e.key.match(a) || e.preventDefault()
                }
            }, handlePaste: e => {
                if (u && u.value) {
                    let a = (e.clipboardData || window.clipboardData).getData("Text"), l = u.value;
                    "string" == typeof l && (l = new RegExp(l)), a.split("").every((e => !!e.match(l))) || e.preventDefault()
                }
                l.emit("paste", e, r)
            }
        }
    }

    function r(a, l, t) {
        const {groupSelect: u, mode: r, groups: o, disabledProp: n} = e.toRefs(a), i = e.ref(null), s = e => {
            void 0 === e || null !== e && e[n.value] || o.value && e && e.group && ("single" === r.value || !u.value) || (i.value = e)
        };
        return {
            pointer: i, setPointer: s, clearPointer: () => {
                s(null)
            }
        }
    }

    function o(e, a = !0) {
        return a ? String(e).toLowerCase().trim() : String(e).toLowerCase().normalize("NFD").trim().replace(new RegExp(/æ/g), "ae").replace(new RegExp(/œ/g), "oe").replace(new RegExp(/ø/g), "o").replace(/\p{Diacritic}/gu, "")
    }

    function n(l, t, u) {
        const {
                options: r,
                mode: n,
                trackBy: i,
                limit: s,
                hideSelected: c,
                createTag: d,
                createOption: v,
                label: p,
                appendNewTag: m,
                appendNewOption: f,
                multipleLabel: g,
                object: h,
                loading: b,
                delay: y,
                resolveOnLoad: S,
                minChars: k,
                filterResults: C,
                clearOnSearch: L,
                clearOnSelect: O,
                valueProp: E,
                allowAbsent: w,
                groupLabel: _,
                canDeselect: x,
                max: B,
                strict: T,
                closeOnSelect: V,
                closeOnDeselect: q,
                groups: N,
                reverse: P,
                infinite: I,
                groupOptions: R,
                groupHideEmpty: D,
                groupSelect: z,
                onCreate: A,
                disabledProp: M,
                searchStart: j,
                searchFilter: $
            } = e.toRefs(l), F = e.getCurrentInstance().proxy, K = u.iv, H = u.ev, G = u.search, U = u.clearSearch,
            W = u.update, J = u.pointer, Q = u.clearPointer, X = u.focus, Y = u.deactivate, Z = u.close,
            ee = u.localize, ae = e.ref([]), le = e.ref([]), te = e.ref(!1), ue = e.ref(null),
            re = e.ref(I.value && -1 === s.value ? 10 : s.value), oe = e.computed((() => d.value || v.value || !1)),
            ne = e.computed((() => void 0 !== m.value ? m.value : void 0 === f.value || f.value)),
            ie = e.computed((() => {
                if (N.value) {
                    let e = de.value || [], a = [];
                    return e.forEach((e => {
                        Ae(e[R.value]).forEach((l => {
                            a.push(Object.assign({}, l, e[M.value] ? {[M.value]: !0} : {}))
                        }))
                    })), a
                }
                {
                    let e = Ae(le.value || []);
                    return ae.value.length && (e = e.concat(ae.value)), e
                }
            })), se = e.computed((() => {
                let e = ie.value;
                return P.value && (e = e.reverse()), be.value.length && (e = be.value.concat(e)), ze(e)
            })), ce = e.computed((() => {
                let e = se.value;
                return re.value > 0 && (e = e.slice(0, re.value)), e
            })), de = e.computed((() => {
                if (!N.value) return [];
                let e = [], a = le.value || [];
                return ae.value.length && e.push({[_.value]: " ", [R.value]: [...ae.value], __CREATE__: !0}), e.concat(a)
            })), ve = e.computed((() => {
                let e = [...de.value].map((e => ({...e})));
                return be.value.length && (e[0] && e[0].__CREATE__ ? e[0][R.value] = [...be.value, ...e[0][R.value]] : e = [{
                    [_.value]: " ",
                    [R.value]: [...be.value],
                    __CREATE__: !0
                }].concat(e)), e
            })), pe = e.computed((() => {
                if (!N.value) return [];
                let e = ve.value;
                return De((e || []).map(((e, a) => {
                    const l = Ae(e[R.value]);
                    return {
                        ...e,
                        index: a,
                        group: !0,
                        [R.value]: ze(l, !1).map((a => Object.assign({}, a, e[M.value] ? {[M.value]: !0} : {}))),
                        __VISIBLE__: ze(l).map((a => Object.assign({}, a, e[M.value] ? {[M.value]: !0} : {})))
                    }
                })))
            })), me = e.computed((() => {
                switch (n.value) {
                    case"single":
                        return !a(K.value[E.value]);
                    case"multiple":
                    case"tags":
                        return !a(K.value) && K.value.length > 0
                }
            })),
            fe = e.computed((() => void 0 !== g && void 0 !== g.value ? g.value(K.value, F) : K.value && K.value.length > 1 ? `${K.value.length} options selected` : "1 option selected")),
            ge = e.computed((() => !ie.value.length && !te.value && !be.value.length)),
            he = e.computed((() => ie.value.length > 0 && 0 == ce.value.length && (G.value && N.value || !N.value))),
            be = e.computed((() => !1 !== oe.value && G.value ? -1 !== Ie(G.value) ? [] : [{
                [E.value]: G.value,
                [ye.value]: G.value,
                [p.value]: G.value,
                __CREATE__: !0
            }] : [])), ye = e.computed((() => i.value || p.value)), Se = e.computed((() => {
                switch (n.value) {
                    case"single":
                        return null;
                    case"multiple":
                    case"tags":
                        return []
                }
            })), ke = e.computed((() => b.value || te.value)), Ce = e => {
                switch ("object" != typeof e && (e = Pe(e)), n.value) {
                    case"single":
                        W(e);
                        break;
                    case"multiple":
                    case"tags":
                        W(K.value.concat(e))
                }
                t.emit("select", Oe(e), e, F)
            }, Le = e => {
                switch ("object" != typeof e && (e = Pe(e)), n.value) {
                    case"single":
                        we();
                        break;
                    case"tags":
                    case"multiple":
                        W(Array.isArray(e) ? K.value.filter((a => -1 === e.map((e => e[E.value])).indexOf(a[E.value]))) : K.value.filter((a => a[E.value] != e[E.value])))
                }
                t.emit("deselect", Oe(e), e, F)
            }, Oe = e => h.value ? e : e[E.value], Ee = e => {
                Le(e)
            }, we = () => {
                t.emit("clear", F), W(Se.value)
            }, _e = e => {
                if (void 0 !== e.group) return "single" !== n.value && (Ne(e[R.value]) && e[R.value].length);
                switch (n.value) {
                    case"single":
                        return !a(K.value) && K.value[E.value] == e[E.value];
                    case"tags":
                    case"multiple":
                        return !a(K.value) && -1 !== K.value.map((e => e[E.value])).indexOf(e[E.value])
                }
            }, xe = e => !0 === e[M.value],
            Be = () => !(void 0 === B || -1 === B.value || !me.value && B.value > 0) && K.value.length >= B.value,
            Te = e => {
                switch (e.__CREATE__ && delete (e = {...e}).__CREATE__, n.value) {
                    case"single":
                        if (e && _e(e)) return x.value && Le(e), void (q.value && (Q(), Z()));
                        e && Ve(e), O.value && U(), V.value && (Q(), Z()), e && Ce(e);
                        break;
                    case"multiple":
                        if (e && _e(e)) return Le(e), void (q.value && (Q(), Z()));
                        if (Be()) return void t.emit("max", F);
                        e && (Ve(e), Ce(e)), O.value && U(), c.value && Q(), V.value && Z();
                        break;
                    case"tags":
                        if (e && _e(e)) return Le(e), void (q.value && (Q(), Z()));
                        if (Be()) return void t.emit("max", F);
                        e && Ve(e), O.value && U(), e && Ce(e), c.value && Q(), V.value && Z()
                }
                V.value || X()
            }, Ve = e => {
                void 0 === Pe(e[E.value]) && oe.value && (t.emit("tag", e[E.value], F), t.emit("option", e[E.value], F), t.emit("create", e[E.value], F), ne.value && Re(e), U())
            }, qe = e => void 0 === e.find((e => !_e(e) && !e[M.value])), Ne = e => void 0 === e.find((e => !_e(e))),
            Pe = e => ie.value[ie.value.map((e => String(e[E.value]))).indexOf(String(e))],
            Ie = (e, a = !0) => ie.value.map((e => parseInt(e[ye.value]) == e[ye.value] ? parseInt(e[ye.value]) : e[ye.value])).indexOf(parseInt(e) == e ? parseInt(e) : e),
            Re = e => {
                ae.value.push(e)
            },
            De = e => D.value ? e.filter((e => G.value ? e.__VISIBLE__.length : e[R.value].length)) : e.filter((e => !G.value || e.__VISIBLE__.length)),
            ze = (e, a = !0) => {
                let l = e;
                if (G.value && C.value) {
                    let e = $.value;
                    e || (e = (e, a) => {
                        let l = o(ee(e[ye.value]), T.value);
                        return j.value ? l.startsWith(o(G.value, T.value)) : -1 !== l.indexOf(o(G.value, T.value))
                    }), l = l.filter(e)
                }
                return c.value && a && (l = l.filter((e => !(e => -1 !== ["tags", "multiple"].indexOf(n.value) && c.value && _e(e))(e)))), l
            }, Ae = e => {
                let a = e;
                var l;
                return l = a, "[object Object]" === Object.prototype.toString.call(l) && (a = Object.keys(a).map((e => {
                    let l = a[e];
                    return {[E.value]: e, [ye.value]: l, [p.value]: l}
                }))), a = a.map((e => "object" == typeof e ? e : {[E.value]: e, [ye.value]: e, [p.value]: e})), a
            }, Me = () => {
                a(H.value) || (K.value = Fe(H.value))
            }, je = e => (te.value = !0, new Promise(((a, l) => {
                r.value(G.value, F).then((a => {
                    le.value = a || [], "function" == typeof e && e(a), te.value = !1
                })).catch((e => {
                    console.error(e), le.value = [], te.value = !1
                })).finally((() => {
                    a()
                }))
            }))), $e = () => {
                if (me.value) if ("single" === n.value) {
                    let e = Pe(K.value[E.value]);
                    if (void 0 !== e) {
                        let a = e[p.value];
                        K.value[p.value] = a, h.value && (H.value[p.value] = a)
                    }
                } else K.value.forEach(((e, a) => {
                    let l = Pe(K.value[a][E.value]);
                    if (void 0 !== l) {
                        let e = l[p.value];
                        K.value[a][p.value] = e, h.value && (H.value[a][p.value] = e)
                    }
                }))
            }, Fe = e => a(e) ? "single" === n.value ? {} : [] : h.value ? e : "single" === n.value ? Pe(e) || (w.value ? {
                [p.value]: e,
                [E.value]: e,
                [ye.value]: e
            } : {}) : e.filter((e => !!Pe(e) || w.value)).map((e => Pe(e) || {[p.value]: e, [E.value]: e, [ye.value]: e})),
            Ke = () => {
                ue.value = e.watch(G, (e => {
                    e.length < k.value || !e && 0 !== k.value || (te.value = !0, L.value && (le.value = []), setTimeout((() => {
                        e == G.value && r.value(G.value, F).then((a => {
                            e != G.value && G.value || (le.value = a, J.value = ce.value.filter((e => !0 !== e[M.value]))[0] || null, te.value = !1)
                        })).catch((e => {
                            console.error(e)
                        }))
                    }), y.value))
                }), {flush: "sync"})
            };
        if ("single" !== n.value && !a(H.value) && !Array.isArray(H.value)) throw new Error(`v-model must be an array when using "${n.value}" mode`);
        return r && "function" == typeof r.value ? S.value ? je(Me) : 1 == h.value && Me() : (le.value = r.value, Me()), y.value > -1 && Ke(), e.watch(y, ((e, a) => {
            ue.value && ue.value(), e >= 0 && Ke()
        })), e.watch(H, (e => {
            if (a(e)) W(Fe(e), !1); else switch (n.value) {
                case"single":
                    (h.value ? e[E.value] != K.value[E.value] : e != K.value[E.value]) && W(Fe(e), !1);
                    break;
                case"multiple":
                case"tags":
                    (function (e, a) {
                        const l = a.slice().sort();
                        return e.length === a.length && e.slice().sort().every((function (e, a) {
                            return e === l[a]
                        }))
                    })(h.value ? e.map((e => e[E.value])) : e, K.value.map((e => e[E.value]))) || W(Fe(e), !1)
            }
        }), {deep: !0}), e.watch(r, ((e, a) => {
            "function" == typeof l.options ? S.value && (!a || e && e.toString() !== a.toString()) && je() : (le.value = l.options, Object.keys(K.value).length || Me(), $e())
        })), e.watch(p, $e), {
            pfo: se,
            fo: ce,
            filteredOptions: ce,
            hasSelected: me,
            multipleLabelText: fe,
            eo: ie,
            extendedOptions: ie,
            eg: de,
            extendedGroups: de,
            fg: pe,
            filteredGroups: pe,
            noOptions: ge,
            noResults: he,
            resolving: te,
            busy: ke,
            offset: re,
            select: Ce,
            deselect: Le,
            remove: Ee,
            selectAll: () => {
                "single" !== n.value && Ce(ce.value.filter((e => !e.disabled && !_e(e))))
            },
            clear: we,
            isSelected: _e,
            isDisabled: xe,
            isMax: Be,
            getOption: Pe,
            handleOptionClick: e => {
                if (!xe(e)) return A && A.value && !_e(e) && e.__CREATE__ && (delete (e = {...e}).__CREATE__, (e = A.value(e, F)) instanceof Promise) ? (te.value = !0, void e.then((e => {
                    te.value = !1, Te(e)
                }))) : void Te(e)
            },
            handleGroupClick: e => {
                if (!xe(e) && "single" !== n.value && z.value) {
                    switch (n.value) {
                        case"multiple":
                        case"tags":
                            qe(e[R.value]) ? Le(e[R.value]) : Ce(e[R.value].filter((e => -1 === K.value.map((e => e[E.value])).indexOf(e[E.value]))).filter((e => !e[M.value])).filter(((e, a) => K.value.length + 1 + a <= B.value || -1 === B.value)))
                    }
                    V.value && Y()
                }
            },
            handleTagRemove: (e, a) => {
                0 === a.button ? Ee(e) : a.preventDefault()
            },
            refreshOptions: e => {
                je(e)
            },
            resolveOptions: je,
            refreshLabels: $e
        }
    }

    function i(a, l, t) {
        const {
                valueProp: u,
                showOptions: r,
                searchable: o,
                groupLabel: n,
                groups: i,
                mode: s,
                groupSelect: c,
                disabledProp: d,
                groupOptions: v
            } = e.toRefs(a), p = t.fo, m = t.fg, f = t.handleOptionClick, g = t.handleGroupClick, h = t.search,
            b = t.pointer, y = t.setPointer, S = t.clearPointer, k = t.multiselect, C = t.isOpen,
            L = e.computed((() => p.value.filter((e => !e[d.value])))),
            O = e.computed((() => m.value.filter((e => !e[d.value])))),
            E = e.computed((() => "single" !== s.value && c.value)), w = e.computed((() => b.value && b.value.group)),
            _ = e.computed((() => D(b.value))), x = e.computed((() => {
                const e = w.value ? b.value : D(b.value), a = O.value.map((e => e[n.value])).indexOf(e[n.value]);
                let l = O.value[a - 1];
                return void 0 === l && (l = T.value), l
            })), B = e.computed((() => {
                let e = O.value.map((e => e.label)).indexOf(w.value ? b.value[n.value] : D(b.value)[n.value]) + 1;
                return O.value.length <= e && (e = 0), O.value[e]
            })), T = e.computed((() => [...O.value].slice(-1)[0])),
            V = e.computed((() => b.value.__VISIBLE__.filter((e => !e[d.value]))[0])), q = e.computed((() => {
                const e = _.value.__VISIBLE__.filter((e => !e[d.value]));
                return e[e.map((e => e[u.value])).indexOf(b.value[u.value]) - 1]
            })), N = e.computed((() => {
                const e = D(b.value).__VISIBLE__.filter((e => !e[d.value]));
                return e[e.map((e => e[u.value])).indexOf(b.value[u.value]) + 1]
            })), P = e.computed((() => [...x.value.__VISIBLE__.filter((e => !e[d.value]))].slice(-1)[0])),
            I = e.computed((() => [...T.value.__VISIBLE__.filter((e => !e[d.value]))].slice(-1)[0])), R = () => {
                y(L.value[0] || null)
            }, D = e => O.value.find((a => -1 !== a.__VISIBLE__.map((e => e[u.value])).indexOf(e[u.value]))), z = () => {
                let e = k.value.querySelector("[data-pointed]");
                if (!e) return;
                let a = e.parentElement.parentElement;
                i.value && (a = w.value ? e.parentElement.parentElement.parentElement : e.parentElement.parentElement.parentElement.parentElement), e.offsetTop + e.offsetHeight > a.clientHeight + a.scrollTop && (a.scrollTop = e.offsetTop + e.offsetHeight - a.clientHeight), e.offsetTop < a.scrollTop && (a.scrollTop = e.offsetTop)
            };
        return e.watch(h, (e => {
            o.value && (e.length && r.value ? R() : S())
        })), e.watch(C, (a => {
            if (a) {
                let a = k.value.querySelectorAll("[data-selected]")[0];
                if (!a) return;
                let l = a.parentElement.parentElement;
                e.nextTick((() => {
                    l.scrollTop > 0 || (l.scrollTop = a.offsetTop)
                }))
            }
        })), {
            pointer: b,
            canPointGroups: E,
            isPointed: e => !(!b.value || !(!e.group && b.value[u.value] === e[u.value] || void 0 !== e.group && b.value[n.value] === e[n.value])) || void 0,
            setPointerFirst: R,
            selectPointer: () => {
                b.value && !0 !== b.value[d.value] && (w.value ? g(b.value) : f(b.value))
            },
            forwardPointer: () => {
                if (null === b.value) y((i.value && E.value ? O.value[0].__CREATE__ ? L.value[0] : O.value[0] : L.value[0]) || null); else if (i.value && E.value) {
                    let e = w.value ? V.value : N.value;
                    void 0 === e && (e = B.value, e.__CREATE__ && (e = e[v.value][0])), y(e || null)
                } else {
                    let e = L.value.map((e => e[u.value])).indexOf(b.value[u.value]) + 1;
                    L.value.length <= e && (e = 0), y(L.value[e] || null)
                }
                e.nextTick((() => {
                    z()
                }))
            },
            backwardPointer: () => {
                if (null === b.value) {
                    let e = L.value[L.value.length - 1];
                    i.value && E.value && (e = I.value, void 0 === e && (e = T.value)), y(e || null)
                } else if (i.value && E.value) {
                    let e = w.value ? P.value : q.value;
                    void 0 === e && (e = w.value ? x.value : _.value, e.__CREATE__ && (e = P.value, void 0 === e && (e = x.value))), y(e || null)
                } else {
                    let e = L.value.map((e => e[u.value])).indexOf(b.value[u.value]) - 1;
                    e < 0 && (e = L.value.length - 1), y(L.value[e] || null)
                }
                e.nextTick((() => {
                    z()
                }))
            }
        }
    }

    function s(a, l, t) {
        const {disabled: u} = e.toRefs(a), r = e.getCurrentInstance().proxy, o = e.ref(!1);
        return {
            isOpen: o, open: () => {
                o.value || u.value || (o.value = !0, l.emit("open", r))
            }, close: () => {
                o.value && (o.value = !1, l.emit("close", r))
            }
        }
    }

    function c(a, l, t) {
        const {searchable: u, disabled: r, clearOnBlur: o} = e.toRefs(a), n = t.input, i = t.open, s = t.close,
            c = t.clearSearch, d = t.isOpen, v = e.ref(null), p = e.ref(null), m = e.ref(null), f = e.ref(!1),
            g = e.ref(!1), h = e.computed((() => u.value || r.value ? -1 : 0)), b = () => {
                u.value && n.value.blur(), p.value.blur()
            }, y = (e = !0) => {
                r.value || (f.value = !0, e && i())
            }, S = () => {
                f.value = !1, setTimeout((() => {
                    f.value || (s(), o.value && c())
                }), 1)
            };
        return {
            multiselect: v, wrapper: p, tags: m, tabindex: h, isActive: f, mouseClicked: g, blur: b, focus: () => {
                u.value && !r.value && n.value.focus()
            }, activate: y, deactivate: S, handleFocusIn: e => {
                e.target.closest("[data-tags]") && "INPUT" !== e.target.nodeName || e.target.closest("[data-clear]") || y(g.value)
            }, handleFocusOut: () => {
                S()
            }, handleCaretClick: () => {
                S(), b()
            }, handleMousedown: e => {
                g.value = !0, d.value && (e.target.isEqualNode(p.value) || e.target.isEqualNode(m.value)) ? setTimeout((() => {
                    S()
                }), 0) : document.activeElement.isEqualNode(p.value) && !d.value && y(), setTimeout((() => {
                    g.value = !1
                }), 0)
            }
        }
    }

    function d(a, l, t) {
        const {
                mode: u,
                addTagOn: r,
                openDirection: o,
                searchable: n,
                showOptions: i,
                valueProp: s,
                groups: c,
                addOptionOn: d,
                createTag: v,
                createOption: p,
                reverse: m
            } = e.toRefs(a), f = e.getCurrentInstance().proxy, g = t.iv, h = t.update, b = t.search, y = t.setPointer,
            S = t.selectPointer, k = t.backwardPointer, C = t.forwardPointer, L = t.multiselect, O = t.wrapper,
            E = t.tags, w = t.isOpen, _ = t.open, x = t.blur, B = t.fo,
            T = e.computed((() => v.value || p.value || !1)),
            V = e.computed((() => void 0 !== r.value ? r.value : void 0 !== d.value ? d.value : ["enter"])), q = () => {
                "tags" === u.value && !i.value && T.value && n.value && !c.value && y(B.value[B.value.map((e => e[s.value])).indexOf(b.value)])
            };
        return {
            handleKeydown: e => {
                let a, t;
                switch (l.emit("keydown", e, f), -1 !== ["ArrowLeft", "ArrowRight", "Enter"].indexOf(e.key) && "tags" === u.value && (a = [...L.value.querySelectorAll("[data-tags] > *")].filter((e => e !== E.value)), t = a.findIndex((e => e === document.activeElement))), e.key) {
                    case"Backspace":
                        if ("single" === u.value) return;
                        if (n.value && -1 === [null, ""].indexOf(b.value)) return;
                        if (0 === g.value.length) return;
                        h((e => {
                            let a = e.length - 1;
                            for (; a >= 0 && (!1 === e[a].remove || e[a].disabled);) a--;
                            return a < 0 || e.splice(a, 1), e
                        })([...g.value]));
                        break;
                    case"Enter":
                        if (e.preventDefault(), 229 === e.keyCode) return;
                        if (-1 !== t && void 0 !== t) return h([...g.value].filter(((e, a) => a !== t))), void (t === a.length - 1 && (a.length - 1 ? a[a.length - 2].focus() : n.value ? E.value.querySelector("input").focus() : O.value.focus()));
                        if (-1 === V.value.indexOf("enter") && T.value) return;
                        q(), S();
                        break;
                    case" ":
                        if (!T.value && !n.value) return e.preventDefault(), q(), void S();
                        if (!T.value) return !1;
                        if (-1 === V.value.indexOf("space") && T.value) return;
                        e.preventDefault(), q(), S();
                        break;
                    case"Tab":
                    case";":
                    case",":
                        if (-1 === V.value.indexOf(e.key.toLowerCase()) || !T.value) return;
                        q(), S(), e.preventDefault();
                        break;
                    case"Escape":
                        x();
                        break;
                    case"ArrowUp":
                        if (e.preventDefault(), !i.value) return;
                        w.value || _(), k();
                        break;
                    case"ArrowDown":
                        if (e.preventDefault(), !i.value) return;
                        w.value || _(), C();
                        break;
                    case"ArrowLeft":
                        if (n.value && E.value && E.value.querySelector("input").selectionStart || e.shiftKey || "tags" !== u.value || !g.value || !g.value.length) return;
                        e.preventDefault(), -1 === t ? a[a.length - 1].focus() : t > 0 && a[t - 1].focus();
                        break;
                    case"ArrowRight":
                        if (-1 === t || e.shiftKey || "tags" !== u.value || !g.value || !g.value.length) return;
                        e.preventDefault(), a.length > t + 1 ? a[t + 1].focus() : n.value ? E.value.querySelector("input").focus() : n.value || O.value.focus()
                }
            }, handleKeyup: e => {
                l.emit("keyup", e, f)
            }, preparePointer: q
        }
    }

    function v(a, l, t) {
        const {classes: u, disabled: r, openDirection: o, showOptions: n} = e.toRefs(a), i = t.isOpen, s = t.isPointed,
            c = t.isSelected, d = t.isDisabled, v = t.isActive, p = t.canPointGroups, m = t.resolving, f = t.fo,
            g = e.computed((() => ({
                container: "multiselect",
                containerDisabled: "is-disabled",
                containerOpen: "is-open",
                containerOpenTop: "is-open-top",
                containerActive: "is-active",
                wrapper: "multiselect-wrapper",
                singleLabel: "multiselect-single-label",
                singleLabelText: "multiselect-single-label-text",
                multipleLabel: "multiselect-multiple-label",
                search: "multiselect-search",
                tags: "multiselect-tags",
                tag: "multiselect-tag",
                tagDisabled: "is-disabled",
                tagRemove: "multiselect-tag-remove",
                tagRemoveIcon: "multiselect-tag-remove-icon",
                tagsSearchWrapper: "multiselect-tags-search-wrapper",
                tagsSearch: "multiselect-tags-search",
                tagsSearchCopy: "multiselect-tags-search-copy",
                placeholder: "multiselect-placeholder",
                caret: "multiselect-caret",
                caretOpen: "is-open",
                clear: "multiselect-clear",
                clearIcon: "multiselect-clear-icon",
                spinner: "multiselect-spinner",
                inifinite: "multiselect-inifite",
                inifiniteSpinner: "multiselect-inifite-spinner",
                dropdown: "multiselect-dropdown",
                dropdownTop: "is-top",
                dropdownHidden: "is-hidden",
                options: "multiselect-options",
                optionsTop: "is-top",
                group: "multiselect-group",
                groupLabel: "multiselect-group-label",
                groupLabelPointable: "is-pointable",
                groupLabelPointed: "is-pointed",
                groupLabelSelected: "is-selected",
                groupLabelDisabled: "is-disabled",
                groupLabelSelectedPointed: "is-selected is-pointed",
                groupLabelSelectedDisabled: "is-selected is-disabled",
                groupOptions: "multiselect-group-options",
                option: "multiselect-option",
                optionPointed: "is-pointed",
                optionSelected: "is-selected",
                optionDisabled: "is-disabled",
                optionSelectedPointed: "is-selected is-pointed",
                optionSelectedDisabled: "is-selected is-disabled",
                noOptions: "multiselect-no-options",
                noResults: "multiselect-no-results",
                fakeInput: "multiselect-fake-input",
                assist: "multiselect-assistive-text",
                spacer: "multiselect-spacer", ...u.value
            }))), h = e.computed((() => !!(i.value && n.value && (!m.value || m.value && f.value.length))));
        return {
            classList: e.computed((() => {
                const e = g.value;
                return {
                    container: [e.container].concat(r.value ? e.containerDisabled : []).concat(h.value && "top" === o.value ? e.containerOpenTop : []).concat(h.value && "top" !== o.value ? e.containerOpen : []).concat(v.value ? e.containerActive : []),
                    wrapper: e.wrapper,
                    spacer: e.spacer,
                    singleLabel: e.singleLabel,
                    singleLabelText: e.singleLabelText,
                    multipleLabel: e.multipleLabel,
                    search: e.search,
                    tags: e.tags,
                    tag: [e.tag].concat(r.value ? e.tagDisabled : []),
                    tagDisabled: e.tagDisabled,
                    tagRemove: e.tagRemove,
                    tagRemoveIcon: e.tagRemoveIcon,
                    tagsSearchWrapper: e.tagsSearchWrapper,
                    tagsSearch: e.tagsSearch,
                    tagsSearchCopy: e.tagsSearchCopy,
                    placeholder: e.placeholder,
                    caret: [e.caret].concat(i.value ? e.caretOpen : []),
                    clear: e.clear,
                    clearIcon: e.clearIcon,
                    spinner: e.spinner,
                    inifinite: e.inifinite,
                    inifiniteSpinner: e.inifiniteSpinner,
                    dropdown: [e.dropdown].concat("top" === o.value ? e.dropdownTop : []).concat(i.value && n.value && h.value ? [] : e.dropdownHidden),
                    options: [e.options].concat("top" === o.value ? e.optionsTop : []),
                    group: e.group,
                    groupLabel: a => {
                        let l = [e.groupLabel];
                        return s(a) ? l.push(c(a) ? e.groupLabelSelectedPointed : e.groupLabelPointed) : c(a) && p.value ? l.push(d(a) ? e.groupLabelSelectedDisabled : e.groupLabelSelected) : d(a) && l.push(e.groupLabelDisabled), p.value && l.push(e.groupLabelPointable), l
                    },
                    groupOptions: e.groupOptions,
                    option: (a, l) => {
                        let t = [e.option];
                        return s(a) ? t.push(c(a) ? e.optionSelectedPointed : e.optionPointed) : c(a) ? t.push(d(a) ? e.optionSelectedDisabled : e.optionSelected) : (d(a) || l && d(l)) && t.push(e.optionDisabled), t
                    },
                    noOptions: e.noOptions,
                    noResults: e.noResults,
                    assist: e.assist,
                    fakeInput: e.fakeInput
                }
            })), showDropdown: h
        }
    }

    function p(a, l, t) {
        const {limit: u, infinite: r} = e.toRefs(a), o = t.isOpen, n = t.offset, i = t.search, s = t.pfo, c = t.eo,
            d = e.ref(null), v = e.ref(null), p = e.computed((() => n.value < s.value.length)), m = a => {
                const {isIntersecting: l, target: t} = a[0];
                if (l) {
                    const a = t.offsetParent, l = a.scrollTop;
                    n.value += -1 == u.value ? 10 : u.value, e.nextTick((() => {
                        a.scrollTop = l
                    }))
                }
            }, f = () => {
                o.value && n.value < s.value.length ? d.value.observe(v.value) : !o.value && d.value && d.value.disconnect()
            };
        return e.watch(o, (() => {
            r.value && f()
        })), e.watch(i, (() => {
            r.value && (n.value = u.value, f())
        }), {flush: "post"}), e.watch(c, (() => {
            r.value && f()
        }), {immediate: !1, flush: "post"}), e.onMounted((() => {
            window && window.IntersectionObserver && (d.value = new IntersectionObserver(m))
        })), {hasMore: p, infiniteLoader: v}
    }

    function m(a, l, t) {
        const {
                placeholder: u,
                id: r,
                valueProp: o,
                label: n,
                mode: i,
                groupLabel: s,
                aria: c,
                searchable: d
            } = e.toRefs(a), v = t.pointer, p = t.iv, m = t.hasSelected, f = t.multipleLabelText, g = e.ref(null),
            h = e.computed((() => {
                let e = [];
                return r && r.value && e.push(r.value), e.push("assist"), e.join("-")
            })), b = e.computed((() => {
                let e = [];
                return r && r.value && e.push(r.value), e.push("multiselect-options"), e.join("-")
            })), y = e.computed((() => {
                let e = [];
                if (r && r.value && e.push(r.value), v.value) return e.push(v.value.group ? "multiselect-group" : "multiselect-option"), e.push(v.value.group ? v.value.index : v.value[o.value]), e.join("-")
            })), S = e.computed((() => u.value)), k = e.computed((() => "single" !== i.value)), C = e.computed((() => {
                let e = "";
                return "single" === i.value && m.value && (e += p.value[n.value]), "multiple" === i.value && m.value && (e += f.value), "tags" === i.value && m.value && (e += p.value.map((e => e[n.value])).join(", ")), e
            })), L = e.computed((() => {
                let e = {...c.value};
                return d.value && (e["aria-labelledby"] = e["aria-labelledby"] ? `${h.value} ${e["aria-labelledby"]}` : h.value, C.value && e["aria-label"] && (e["aria-label"] = `${C.value}, ${e["aria-label"]}`)), e
            }));
        return e.onMounted((() => {
            if (r && r.value && document && document.querySelector) {
                let e = document.querySelector(`[for="${r.value}"]`);
                g.value = e ? e.innerText : null
            }
        })), {
            arias: L,
            ariaLabel: C,
            ariaAssist: h,
            ariaControls: b,
            ariaPlaceholder: S,
            ariaMultiselectable: k,
            ariaActiveDescendant: y,
            ariaOptionId: e => {
                let a = [];
                return r && r.value && a.push(r.value), a.push("multiselect-option"), a.push(e[o.value]), a.join("-")
            },
            ariaOptionLabel: e => {
                let a = [];
                return a.push(e), a.join(" ")
            },
            ariaGroupId: e => {
                let a = [];
                return r && r.value && a.push(r.value), a.push("multiselect-group"), a.push(e.index), a.join("-")
            },
            ariaGroupLabel: e => {
                let a = [];
                return a.push(e), a.join(" ")
            },
            ariaTagLabel: e => `${e} ❎`
        }
    }

    function f(a, l, t) {
        const {locale: u, fallbackLocale: r} = e.toRefs(a);
        return {localize: e => e && "object" == typeof e ? e && e[u.value] ? e[u.value] : e && u.value && e[u.value.toUpperCase()] ? e[u.value.toUpperCase()] : e && e[r.value] ? e[r.value] : e && r.value && e[r.value.toUpperCase()] ? e[r.value.toUpperCase()] : e && Object.keys(e)[0] ? e[Object.keys(e)[0]] : "" : e}
    }

    var g = {
        name: "Multiselect",
        emits: ["paste", "open", "close", "select", "deselect", "input", "search-change", "tag", "option", "update:modelValue", "change", "clear", "keydown", "keyup", "max", "create"],
        props: {
            value: {required: !1},
            modelValue: {required: !1},
            options: {type: [Array, Object, Function], required: !1, default: () => []},
            id: {type: [String, Number], required: !1},
            name: {type: [String, Number], required: !1, default: "multiselect"},
            disabled: {type: Boolean, required: !1, default: !1},
            label: {type: String, required: !1, default: "label"},
            trackBy: {type: String, required: !1, default: void 0},
            valueProp: {type: String, required: !1, default: "value"},
            placeholder: {type: String, required: !1, default: null},
            mode: {type: String, required: !1, default: "single"},
            searchable: {type: Boolean, required: !1, default: !1},
            limit: {type: Number, required: !1, default: -1},
            hideSelected: {type: Boolean, required: !1, default: !0},
            createTag: {type: Boolean, required: !1, default: void 0},
            createOption: {type: Boolean, required: !1, default: void 0},
            appendNewTag: {type: Boolean, required: !1, default: void 0},
            appendNewOption: {type: Boolean, required: !1, default: void 0},
            addTagOn: {type: Array, required: !1, default: void 0},
            addOptionOn: {type: Array, required: !1, default: void 0},
            caret: {type: Boolean, required: !1, default: !0},
            loading: {type: Boolean, required: !1, default: !1},
            noOptionsText: {type: [String, Object], required: !1, default: "The list is empty"},
            noResultsText: {type: [String, Object], required: !1, default: "No results found"},
            multipleLabel: {type: Function, required: !1},
            object: {type: Boolean, required: !1, default: !1},
            delay: {type: Number, required: !1, default: -1},
            minChars: {type: Number, required: !1, default: 0},
            resolveOnLoad: {type: Boolean, required: !1, default: !0},
            filterResults: {type: Boolean, required: !1, default: !0},
            clearOnSearch: {type: Boolean, required: !1, default: !1},
            clearOnSelect: {type: Boolean, required: !1, default: !0},
            canDeselect: {type: Boolean, required: !1, default: !0},
            canClear: {type: Boolean, required: !1, default: !0},
            max: {type: Number, required: !1, default: -1},
            showOptions: {type: Boolean, required: !1, default: !0},
            required: {type: Boolean, required: !1, default: !1},
            openDirection: {type: String, required: !1, default: "bottom"},
            nativeSupport: {type: Boolean, required: !1, default: !1},
            classes: {type: Object, required: !1, default: () => ({})},
            strict: {type: Boolean, required: !1, default: !0},
            closeOnSelect: {type: Boolean, required: !1, default: !0},
            closeOnDeselect: {type: Boolean, required: !1, default: !1},
            autocomplete: {type: String, required: !1},
            groups: {type: Boolean, required: !1, default: !1},
            groupLabel: {type: String, required: !1, default: "label"},
            groupOptions: {type: String, required: !1, default: "options"},
            groupHideEmpty: {type: Boolean, required: !1, default: !1},
            groupSelect: {type: Boolean, required: !1, default: !0},
            inputType: {type: String, required: !1, default: "text"},
            attrs: {required: !1, type: Object, default: () => ({})},
            onCreate: {required: !1, type: Function},
            disabledProp: {type: String, required: !1, default: "disabled"},
            searchStart: {type: Boolean, required: !1, default: !1},
            reverse: {type: Boolean, required: !1, default: !1},
            regex: {type: [Object, String, RegExp], required: !1, default: void 0},
            rtl: {type: Boolean, required: !1, default: !1},
            infinite: {type: Boolean, required: !1, default: !1},
            aria: {required: !1, type: Object, default: () => ({})},
            clearOnBlur: {required: !1, type: Boolean, default: !0},
            locale: {required: !1, type: String, default: null},
            fallbackLocale: {required: !1, type: String, default: "en"},
            searchFilter: {required: !1, type: Function, default: null},
            allowAbsent: {required: !1, type: Boolean, default: !1}
        },
        setup: (e, a) => function (e, a, l, t = {}) {
            return l.forEach((l => {
                l && (t = {...t, ...l(e, a, t)})
            })), t
        }(e, a, [f, t, r, s, u, l, c, n, p, i, d, v, m])
    };
    const h = ["id", "dir"],
        b = ["tabindex", "aria-controls", "aria-placeholder", "aria-expanded", "aria-activedescendant", "aria-multiselectable", "role"],
        y = ["type", "modelValue", "value", "autocomplete", "id", "aria-controls", "aria-placeholder", "aria-expanded", "aria-activedescendant", "aria-multiselectable"],
        S = ["onKeyup", "aria-label"], k = ["onClick"],
        C = ["type", "modelValue", "value", "id", "autocomplete", "aria-controls", "aria-placeholder", "aria-expanded", "aria-activedescendant", "aria-multiselectable"],
        L = ["innerHTML"], O = ["id"], E = ["id", "aria-label", "aria-selected"],
        w = ["data-pointed", "onMouseenter", "onClick"], _ = ["innerHTML"], x = ["aria-label"],
        B = ["data-pointed", "data-selected", "onMouseenter", "onClick", "id", "aria-selected", "aria-label"],
        T = ["data-pointed", "data-selected", "onMouseenter", "onClick", "id", "aria-selected", "aria-label"],
        V = ["innerHTML"], q = ["innerHTML"], N = ["value"], P = ["name", "value"], I = ["name", "value"], R = ["id"];
    return g.render = function (a, l, t, u, r, o) {
        return e.openBlock(), e.createElementBlock("div", {
            ref: "multiselect",
            class: e.normalizeClass(a.classList.container),
            id: t.searchable ? void 0 : t.id,
            dir: t.rtl ? "rtl" : void 0,
            onFocusin: l[10] || (l[10] = (...e) => a.handleFocusIn && a.handleFocusIn(...e)),
            onFocusout: l[11] || (l[11] = (...e) => a.handleFocusOut && a.handleFocusOut(...e)),
            onKeyup: l[12] || (l[12] = (...e) => a.handleKeyup && a.handleKeyup(...e)),
            onKeydown: l[13] || (l[13] = (...e) => a.handleKeydown && a.handleKeydown(...e))
        }, [e.createElementVNode("div", e.mergeProps({
            class: a.classList.wrapper,
            onMousedown: l[9] || (l[9] = (...e) => a.handleMousedown && a.handleMousedown(...e)),
            ref: "wrapper",
            tabindex: a.tabindex,
            "aria-controls": t.searchable ? void 0 : a.ariaControls,
            "aria-placeholder": t.searchable ? void 0 : a.ariaPlaceholder,
            "aria-expanded": t.searchable ? void 0 : a.isOpen,
            "aria-activedescendant": t.searchable ? void 0 : a.ariaActiveDescendant,
            "aria-multiselectable": t.searchable ? void 0 : a.ariaMultiselectable,
            role: t.searchable ? void 0 : "combobox"
        }, t.searchable ? {} : a.arias), [e.createCommentVNode(" Search "), "tags" !== t.mode && t.searchable && !t.disabled ? (e.openBlock(), e.createElementBlock("input", e.mergeProps({
            key: 0,
            type: t.inputType,
            modelValue: a.search,
            value: a.search,
            class: a.classList.search,
            autocomplete: t.autocomplete,
            id: t.searchable ? t.id : void 0,
            onInput: l[0] || (l[0] = (...e) => a.handleSearchInput && a.handleSearchInput(...e)),
            onKeypress: l[1] || (l[1] = (...e) => a.handleKeypress && a.handleKeypress(...e)),
            onPaste: l[2] || (l[2] = e.withModifiers(((...e) => a.handlePaste && a.handlePaste(...e)), ["stop"])),
            ref: "input",
            "aria-controls": a.ariaControls,
            "aria-placeholder": a.ariaPlaceholder,
            "aria-expanded": a.isOpen,
            "aria-activedescendant": a.ariaActiveDescendant,
            "aria-multiselectable": a.ariaMultiselectable,
            role: "combobox"
        }, {...t.attrs, ...a.arias}), null, 16, y)) : e.createCommentVNode("v-if", !0), e.createCommentVNode(" Tags (with search) "), "tags" == t.mode ? (e.openBlock(), e.createElementBlock("div", {
            key: 1,
            class: e.normalizeClass(a.classList.tags),
            "data-tags": ""
        }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(a.iv, ((l, u, r) => e.renderSlot(a.$slots, "tag", {
            option: l,
            handleTagRemove: a.handleTagRemove,
            disabled: t.disabled
        }, (() => [(e.openBlock(), e.createElementBlock("span", {
            class: e.normalizeClass([a.classList.tag, l.disabled ? a.classList.tagDisabled : null]),
            tabindex: "-1",
            onKeyup: e.withKeys((e => a.handleTagRemove(l, e)), ["enter"]),
            key: r,
            "aria-label": a.ariaTagLabel(a.localize(l[t.label]))
        }, [e.createTextVNode(e.toDisplayString(a.localize(l[t.label])) + " ", 1), t.disabled || l.disabled ? e.createCommentVNode("v-if", !0) : (e.openBlock(), e.createElementBlock("span", {
            key: 0,
            class: e.normalizeClass(a.classList.tagRemove),
            onClick: e.withModifiers((e => a.handleTagRemove(l, e)), ["stop"])
        }, [e.createElementVNode("span", {class: e.normalizeClass(a.classList.tagRemoveIcon)}, null, 2)], 10, k))], 42, S))])))), 256)), e.createElementVNode("div", {
            class: e.normalizeClass(a.classList.tagsSearchWrapper),
            ref: "tags"
        }, [e.createCommentVNode(" Used for measuring search width "), e.createElementVNode("span", {class: e.normalizeClass(a.classList.tagsSearchCopy)}, e.toDisplayString(a.search), 3), e.createCommentVNode(" Actual search input "), t.searchable && !t.disabled ? (e.openBlock(), e.createElementBlock("input", e.mergeProps({
            key: 0,
            type: t.inputType,
            modelValue: a.search,
            value: a.search,
            class: a.classList.tagsSearch,
            id: t.searchable ? t.id : void 0,
            autocomplete: t.autocomplete,
            onInput: l[3] || (l[3] = (...e) => a.handleSearchInput && a.handleSearchInput(...e)),
            onKeypress: l[4] || (l[4] = (...e) => a.handleKeypress && a.handleKeypress(...e)),
            onPaste: l[5] || (l[5] = e.withModifiers(((...e) => a.handlePaste && a.handlePaste(...e)), ["stop"])),
            ref: "input",
            "aria-controls": a.ariaControls,
            "aria-placeholder": a.ariaPlaceholder,
            "aria-expanded": a.isOpen,
            "aria-activedescendant": a.ariaActiveDescendant,
            "aria-multiselectable": a.ariaMultiselectable,
            role: "combobox"
        }, {...t.attrs, ...a.arias}), null, 16, C)) : e.createCommentVNode("v-if", !0)], 2)], 2)) : e.createCommentVNode("v-if", !0), e.createCommentVNode(" Single label "), "single" == t.mode && a.hasSelected && !a.search && a.iv ? e.renderSlot(a.$slots, "singlelabel", {
            key: 2,
            value: a.iv
        }, (() => [e.createElementVNode("div", {class: e.normalizeClass(a.classList.singleLabel)}, [e.createElementVNode("span", {class: e.normalizeClass(a.classList.singleLabelText)}, e.toDisplayString(a.localize(a.iv[t.label])), 3)], 2)])) : e.createCommentVNode("v-if", !0), e.createCommentVNode(" Multiple label "), "multiple" == t.mode && a.hasSelected && !a.search ? e.renderSlot(a.$slots, "multiplelabel", {
            key: 3,
            values: a.iv
        }, (() => [e.createElementVNode("div", {
            class: e.normalizeClass(a.classList.multipleLabel),
            innerHTML: a.multipleLabelText
        }, null, 10, L)])) : e.createCommentVNode("v-if", !0), e.createCommentVNode(" Placeholder "), !t.placeholder || a.hasSelected || a.search ? e.createCommentVNode("v-if", !0) : e.renderSlot(a.$slots, "placeholder", {key: 4}, (() => [e.createElementVNode("div", {
            class: e.normalizeClass(a.classList.placeholder),
            "aria-hidden": "true"
        }, e.toDisplayString(t.placeholder), 3)])), e.createCommentVNode(" Spinner "), t.loading || a.resolving ? e.renderSlot(a.$slots, "spinner", {key: 5}, (() => [e.createElementVNode("span", {
            class: e.normalizeClass(a.classList.spinner),
            "aria-hidden": "true"
        }, null, 2)])) : e.createCommentVNode("v-if", !0), e.createCommentVNode(" Clear "), a.hasSelected && !t.disabled && t.canClear && !a.busy ? e.renderSlot(a.$slots, "clear", {
            key: 6,
            clear: a.clear
        }, (() => [e.createElementVNode("span", {
            "aria-hidden": "true",
            tabindex: "0",
            role: "button",
            "data-clear": "",
            "aria-roledescription": "❎",
            class: e.normalizeClass(a.classList.clear),
            onClick: l[6] || (l[6] = (...e) => a.clear && a.clear(...e)),
            onKeyup: l[7] || (l[7] = e.withKeys(((...e) => a.clear && a.clear(...e)), ["enter"]))
        }, [e.createElementVNode("span", {class: e.normalizeClass(a.classList.clearIcon)}, null, 2)], 34)])) : e.createCommentVNode("v-if", !0), e.createCommentVNode(" Caret "), t.caret && t.showOptions ? e.renderSlot(a.$slots, "caret", {key: 7}, (() => [e.createElementVNode("span", {
            class: e.normalizeClass(a.classList.caret),
            onClick: l[8] || (l[8] = (...e) => a.handleCaretClick && a.handleCaretClick(...e)),
            "aria-hidden": "true"
        }, null, 2)])) : e.createCommentVNode("v-if", !0)], 16, b), e.createCommentVNode(" Options "), e.createElementVNode("div", {
            class: e.normalizeClass(a.classList.dropdown),
            tabindex: "-1"
        }, [e.renderSlot(a.$slots, "beforelist", {options: a.fo}), e.createElementVNode("ul", {
            class: e.normalizeClass(a.classList.options),
            id: a.ariaControls,
            role: "listbox"
        }, [t.groups ? (e.openBlock(!0), e.createElementBlock(e.Fragment, {key: 0}, e.renderList(a.fg, ((l, u, r) => (e.openBlock(), e.createElementBlock("li", {
            class: e.normalizeClass(a.classList.group),
            key: r,
            id: a.ariaGroupId(l),
            "aria-label": a.ariaGroupLabel(a.localize(l[t.groupLabel])),
            "aria-selected": a.isSelected(l),
            role: "option"
        }, [l.__CREATE__ ? e.createCommentVNode("v-if", !0) : (e.openBlock(), e.createElementBlock("div", {
            key: 0,
            class: e.normalizeClass(a.classList.groupLabel(l)),
            "data-pointed": a.isPointed(l),
            onMouseenter: e => a.setPointer(l, u),
            onClick: e => a.handleGroupClick(l)
        }, [e.renderSlot(a.$slots, "grouplabel", {
            group: l,
            isSelected: a.isSelected,
            isPointed: a.isPointed
        }, (() => [e.createElementVNode("span", {innerHTML: a.localize(l[t.groupLabel])}, null, 8, _)]))], 42, w)), e.createElementVNode("ul", {
            class: e.normalizeClass(a.classList.groupOptions),
            "aria-label": a.ariaGroupLabel(a.localize(l[t.groupLabel])),
            role: "group"
        }, [(e.openBlock(!0), e.createElementBlock(e.Fragment, null, e.renderList(l.__VISIBLE__, ((u, r, o) => (e.openBlock(), e.createElementBlock("li", {
            class: e.normalizeClass(a.classList.option(u, l)),
            "data-pointed": a.isPointed(u),
            "data-selected": a.isSelected(u) || void 0,
            key: o,
            onMouseenter: e => a.setPointer(u),
            onClick: e => a.handleOptionClick(u),
            id: a.ariaOptionId(u),
            "aria-selected": a.isSelected(u),
            "aria-label": a.ariaOptionLabel(a.localize(u[t.label])),
            role: "option"
        }, [e.renderSlot(a.$slots, "option", {
            option: u,
            isSelected: a.isSelected,
            isPointed: a.isPointed,
            search: a.search
        }, (() => [e.createElementVNode("span", null, e.toDisplayString(a.localize(u[t.label])), 1)]))], 42, B)))), 128))], 10, x)], 10, E)))), 128)) : (e.openBlock(!0), e.createElementBlock(e.Fragment, {key: 1}, e.renderList(a.fo, ((l, u, r) => (e.openBlock(), e.createElementBlock("li", {
            class: e.normalizeClass(a.classList.option(l)),
            "data-pointed": a.isPointed(l),
            "data-selected": a.isSelected(l) || void 0,
            key: r,
            onMouseenter: e => a.setPointer(l),
            onClick: e => a.handleOptionClick(l),
            id: a.ariaOptionId(l),
            "aria-selected": a.isSelected(l),
            "aria-label": a.ariaOptionLabel(a.localize(l[t.label])),
            role: "option"
        }, [e.renderSlot(a.$slots, "option", {
            option: l,
            isSelected: a.isSelected,
            isPointed: a.isPointed,
            search: a.search
        }, (() => [e.createElementVNode("span", null, e.toDisplayString(a.localize(l[t.label])), 1)]))], 42, T)))), 128))], 10, O), a.noOptions ? e.renderSlot(a.$slots, "nooptions", {key: 0}, (() => [e.createElementVNode("div", {
            class: e.normalizeClass(a.classList.noOptions),
            innerHTML: a.localize(t.noOptionsText)
        }, null, 10, V)])) : e.createCommentVNode("v-if", !0), a.noResults ? e.renderSlot(a.$slots, "noresults", {key: 1}, (() => [e.createElementVNode("div", {
            class: e.normalizeClass(a.classList.noResults),
            innerHTML: a.localize(t.noResultsText)
        }, null, 10, q)])) : e.createCommentVNode("v-if", !0), t.infinite && a.hasMore ? (e.openBlock(), e.createElementBlock("div", {
            key: 2,
            class: e.normalizeClass(a.classList.inifinite),
            ref: "infiniteLoader"
        }, [e.renderSlot(a.$slots, "infinite", {}, (() => [e.createElementVNode("span", {class: e.normalizeClass(a.classList.inifiniteSpinner)}, null, 2)]))], 2)) : e.createCommentVNode("v-if", !0), e.renderSlot(a.$slots, "afterlist", {options: a.fo})], 2), e.createCommentVNode(" Hacky input element to show HTML5 required warning "), t.required ? (e.openBlock(), e.createElementBlock("input", {
            key: 0,
            class: e.normalizeClass(a.classList.fakeInput),
            tabindex: "-1",
            value: a.textValue,
            required: ""
        }, null, 10, N)) : e.createCommentVNode("v-if", !0), e.createCommentVNode(" Native input support "), t.nativeSupport ? (e.openBlock(), e.createElementBlock(e.Fragment, {key: 1}, ["single" == t.mode ? (e.openBlock(), e.createElementBlock("input", {
            key: 0,
            type: "hidden",
            name: t.name,
            value: void 0 !== a.plainValue ? a.plainValue : ""
        }, null, 8, P)) : (e.openBlock(!0), e.createElementBlock(e.Fragment, {key: 1}, e.renderList(a.plainValue, ((a, l) => (e.openBlock(), e.createElementBlock("input", {
            type: "hidden",
            name: `${t.name}[]`,
            value: a,
            key: l
        }, null, 8, I)))), 128))], 64)) : e.createCommentVNode("v-if", !0), e.createCommentVNode(" Screen reader assistive text "), t.searchable && a.hasSelected ? (e.openBlock(), e.createElementBlock("div", {
            key: 2,
            class: e.normalizeClass(a.classList.assist),
            id: a.ariaAssist,
            "aria-hidden": "true"
        }, e.toDisplayString(a.ariaLabel), 11, R)) : e.createCommentVNode("v-if", !0), e.createCommentVNode(" Create height for empty input "), e.createElementVNode("div", {class: e.normalizeClass(a.classList.spacer)}, null, 2)], 42, h)
    }, g.__file = "src/Multiselect.vue", g
}(Vue);
