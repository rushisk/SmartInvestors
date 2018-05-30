/*! jQuery Mobile 1.4.1 | Git HEAD hash: 18c1e32 <> 2014-02-12T22:15:20Z | (c) 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */ ! function (a, b, c) {
    "function" == typeof define && define.amd ? define(["jquery"], function (d) {
        return c(d, a, b), d.mobile
    }) : c(a.jQuery, a, b)
}(this, document, function (a, b, c) {
    ! function (a) {
        a.mobile = {}
    }(a),
    function (a) {
        a.extend(a.mobile, {
            version: "1.4.1",
            subPageUrlKey: "ui-page",
            hideUrlBar: !0,
            keepNative: ":jqmData(role='none'), :jqmData(role='nojs')",
            activePageClass: "ui-page-active",
            activeBtnClass: "ui-btn-active",
            focusClass: "ui-focus",
            ajaxEnabled: !0,
            hashListeningEnabled: !0,
            linkBindingEnabled: !0,
            defaultPageTransition: "fade",
            maxTransitionWidth: !1,
            minScrollBack: 0,
            defaultDialogTransition: "pop",
            pageLoadErrorMessage: "Error Loading Page",
            pageLoadErrorMessageTheme: "a",
            phonegapNavigationEnabled: !1,
            autoInitializePage: !0,
            pushStateEnabled: !0,
            ignoreContentEnabled: !1,
            buttonMarkup: {
                hoverDelay: 200
            },
            dynamicBaseEnabled: !0,
            pageContainer: a(),
            allowCrossDomainPages: !1,
            dialogHashKey: "&ui-state=dialog"
        })
    }(a, this),
    function (a, b, c) {
        var d = {}, e = a.find,
            f = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            g = /:jqmData\(([^)]*)\)/g;
        a.extend(a.mobile, {
            ns: "",
            getAttribute: function (b, c) {
                var d;
                b = b.jquery ? b[0] : b, b && b.getAttribute && (d = b.getAttribute("data-" + a.mobile.ns + c));
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : f.test(d) ? JSON.parse(d) : d
                } catch (e) {}
                return d
            },
            nsNormalizeDict: d,
            nsNormalize: function (b) {
                return d[b] || (d[b] = a.camelCase(a.mobile.ns + b))
            },
            closestPageData: function (a) {
                return a.closest(":jqmData(role='page'), :jqmData(role='dialog')").data("mobile-page")
            }
        }), a.fn.jqmData = function (b, d) {
            var e;
            return "undefined" != typeof b && (b && (b = a.mobile.nsNormalize(b)), e = arguments.length < 2 || d === c ? this.data(b) : this.data(b, d)), e
        }, a.jqmData = function (b, c, d) {
            var e;
            return "undefined" != typeof c && (e = a.data(b, c ? a.mobile.nsNormalize(c) : c, d)), e
        }, a.fn.jqmRemoveData = function (b) {
            return this.removeData(a.mobile.nsNormalize(b))
        }, a.jqmRemoveData = function (b, c) {
            return a.removeData(b, a.mobile.nsNormalize(c))
        }, a.find = function (b, c, d, f) {
            return b.indexOf(":jqmData") > -1 && (b = b.replace(g, "[data-" + (a.mobile.ns || "") + "$1]")), e.call(this, b, c, d, f)
        }, a.extend(a.find, e)
    }(a, this),
    function (a, b) {
        function d(b, c) {
            var d, f, g, h = b.nodeName.toLowerCase();
            return "area" === h ? (d = b.parentNode, f = d.name, b.href && f && "map" === d.nodeName.toLowerCase() ? (g = a("img[usemap=#" + f + "]")[0], !! g && e(g)) : !1) : (/input|select|textarea|button|object/.test(h) ? !b.disabled : "a" === h ? b.href || c : c) && e(b)
        }

        function e(b) {
            return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function () {
                return "hidden" === a.css(this, "visibility")
            }).length
        }
        var f = 0,
            g = /^ui-id-\d+$/;
        a.ui = a.ui || {}, a.extend(a.ui, {
            version: "c0ab71056b936627e8a7821f03c044aec6280a40",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), a.fn.extend({
            focus: function (b) {
                return function (c, d) {
                    return "number" == typeof c ? this.each(function () {
                        var b = this;
                        setTimeout(function () {
                            a(b).focus(), d && d.call(b)
                        }, c)
                    }) : b.apply(this, arguments)
                }
            }(a.fn.focus),
            scrollParent: function () {
                var b;
                return b = a.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                    return /(relative|absolute|fixed)/.test(a.css(this, "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
                }).eq(0) : this.parents().filter(function () {
                    return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
                }).eq(0), /fixed/.test(this.css("position")) || !b.length ? a(this[0].ownerDocument || c) : b
            },
            uniqueId: function () {
                return this.each(function () {
                    this.id || (this.id = "ui-id-" + ++f)
                })
            },
            removeUniqueId: function () {
                return this.each(function () {
                    g.test(this.id) && a(this).removeAttr("id")
                })
            }
        }), a.extend(a.expr[":"], {
            data: a.expr.createPseudo ? a.expr.createPseudo(function (b) {
                return function (c) {
                    return !!a.data(c, b)
                }
            }) : function (b, c, d) {
                return !!a.data(b, d[3])
            },
            focusable: function (b) {
                return d(b, !isNaN(a.attr(b, "tabindex")))
            },
            tabbable: function (b) {
                var c = a.attr(b, "tabindex"),
                    e = isNaN(c);
                return (e || c >= 0) && d(b, !e)
            }
        }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function (c, d) {
            function e(b, c, d, e) {
                return a.each(f, function () {
                    c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), e && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
                }), c
            }
            var f = "Width" === d ? ["Left", "Right"] : ["Top", "Bottom"],
                g = d.toLowerCase(),
                h = {
                    innerWidth: a.fn.innerWidth,
                    innerHeight: a.fn.innerHeight,
                    outerWidth: a.fn.outerWidth,
                    outerHeight: a.fn.outerHeight
                };
            a.fn["inner" + d] = function (c) {
                return c === b ? h["inner" + d].call(this) : this.each(function () {
                    a(this).css(g, e(this, c) + "px")
                })
            }, a.fn["outer" + d] = function (b, c) {
                return "number" != typeof b ? h["outer" + d].call(this, b) : this.each(function () {
                    a(this).css(g, e(this, b, !0, c) + "px")
                })
            }
        }), a.fn.addBack || (a.fn.addBack = function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function (b) {
            return function (c) {
                return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
            }
        }(a.fn.removeData)), a.ui.ie = !! /msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.support.selectstart = "onselectstart" in c.createElement("div"), a.fn.extend({
            disableSelection: function () {
                return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (a) {
                    a.preventDefault()
                })
            },
            enableSelection: function () {
                return this.unbind(".ui-disableSelection")
            },
            zIndex: function (d) {
                if (d !== b) return this.css("zIndex", d);
                if (this.length)
                    for (var e, f, g = a(this[0]); g.length && g[0] !== c;) {
                        if (e = g.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (f = parseInt(g.css("zIndex"), 10), !isNaN(f) && 0 !== f)) return f;
                        g = g.parent()
                    }
                return 0
            }
        }), a.ui.plugin = {
            add: function (b, c, d) {
                var e, f = a.ui[b].prototype;
                for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
            },
            call: function (a, b, c, d) {
                var e, f = a.plugins[b];
                if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
                    for (e = 0; e < f.length; e++) a.options[f[e][0]] && f[e][1].apply(a.element, c)
            }
        }
    }(a),
    function (a, b) {
        a.extend(a.mobile, {
            window: a(b),
            document: a(c),
            keyCode: a.ui.keyCode,
            behaviors: {},
            silentScroll: function (c) {
                "number" !== a.type(c) && (c = a.mobile.defaultHomeScroll), a.event.special.scrollstart.enabled = !1, setTimeout(function () {
                    b.scrollTo(0, c), a.mobile.document.trigger("silentscroll", {
                        x: 0,
                        y: c
                    })
                }, 20), setTimeout(function () {
                    a.event.special.scrollstart.enabled = !0
                }, 150)
            },
            getClosestBaseUrl: function (b) {
                var c = a(b).closest(".ui-page").jqmData("url"),
                    d = a.mobile.path.documentBase.hrefNoHash;
                return a.mobile.dynamicBaseEnabled && c && a.mobile.path.isPath(c) || (c = d), a.mobile.path.makeUrlAbsolute(c, d)
            },
            removeActiveLinkClass: function (b) {
                !a.mobile.activeClickedLink || a.mobile.activeClickedLink.closest("." + a.mobile.activePageClass).length && !b || a.mobile.activeClickedLink.removeClass(a.mobile.activeBtnClass), a.mobile.activeClickedLink = null
            },
            getInheritedTheme: function (a, b) {
                for (var c, d, e = a[0], f = "", g = /ui-(bar|body|overlay)-([a-z])\b/; e && (c = e.className || "", !(c && (d = g.exec(c)) && (f = d[2])));) e = e.parentNode;
                return f || b || "a"
            },
            enhanceable: function (a) {
                return this.haveParents(a, "enhance")
            },
            hijackable: function (a) {
                return this.haveParents(a, "ajax")
            },
            haveParents: function (b, c) {
                if (!a.mobile.ignoreContentEnabled) return b;
                var d, e, f, g, h, i = b.length,
                    j = a();
                for (g = 0; i > g; g++) {
                    for (e = b.eq(g), f = !1, d = b[g]; d;) {
                        if (h = d.getAttribute ? d.getAttribute("data-" + a.mobile.ns + c) : "", "false" === h) {
                            f = !0;
                            break
                        }
                        d = d.parentNode
                    }
                    f || (j = j.add(e))
                }
                return j
            },
            getScreenHeight: function () {
                return b.innerHeight || a.mobile.window.height()
            },
            resetActivePageHeight: function (b) {
                var c = a("." + a.mobile.activePageClass),
                    d = c.height(),
                    e = c.outerHeight(!0);
                b = "number" == typeof b ? b : a.mobile.getScreenHeight(), c.css("min-height", b - (e - d))
            },
            loading: function () {
                var b = this.loading._widget || a(a.mobile.loader.prototype.defaultHtml).loader(),
                    c = b.loader.apply(b, arguments);
                return this.loading._widget = b, c
            }
        }), a.addDependents = function (b, c) {
            var d = a(b),
                e = d.jqmData("dependents") || a();
            d.jqmData("dependents", a(e).add(c))
        }, a.fn.extend({
            removeWithDependents: function () {
                a.removeWithDependents(this)
            },
            enhanceWithin: function () {
                var b, c = {}, d = a.mobile.page.prototype.keepNativeSelector(),
                    e = this;
                a.mobile.nojs && a.mobile.nojs(this), a.mobile.links && a.mobile.links(this), a.mobile.degradeInputsWithin && a.mobile.degradeInputsWithin(this), a.fn.buttonMarkup && this.find(a.fn.buttonMarkup.initSelector).not(d).jqmEnhanceable().buttonMarkup(), a.fn.fieldcontain && this.find(":jqmData(role='fieldcontain')").not(d).jqmEnhanceable().fieldcontain(), a.each(a.mobile.widgets, function (b, f) {
                    if (f.initSelector) {
                        var g = a.mobile.enhanceable(e.find(f.initSelector));
                        g.length > 0 && (g = g.not(d)), g.length > 0 && (c[f.prototype.widgetName] = g)
                    }
                });
                for (b in c) c[b][b]();
                return this
            },
            addDependents: function (b) {
                a.addDependents(this, b)
            },
            getEncodedText: function () {
                return a("<a>").text(this.text()).html()
            },
            jqmEnhanceable: function () {
                return a.mobile.enhanceable(this)
            },
            jqmHijackable: function () {
                return a.mobile.hijackable(this)
            }
        }), a.removeWithDependents = function (b) {
            var c = a(b);
            (c.jqmData("dependents") || a()).remove(), c.remove()
        }, a.addDependents = function (b, c) {
            var d = a(b),
                e = d.jqmData("dependents") || a();
            d.jqmData("dependents", a(e).add(c))
        }, a.find.matches = function (b, c) {
            return a.find(b, null, null, c)
        }, a.find.matchesSelector = function (b, c) {
            return a.find(c, null, null, [b]).length > 0
        }
    }(a, this),
    function (a, b) {
        var c = 0,
            d = Array.prototype.slice,
            e = a.cleanData;
        a.cleanData = function (b) {
            for (var c, d = 0; null != (c = b[d]); d++) try {
                a(c).triggerHandler("remove")
            } catch (f) {}
            e(b)
        }, a.widget = function (b, c, d) {
            var e, f, g, h, i = {}, j = b.split(".")[0];
            return b = b.split(".")[1], e = j + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function (b) {
                return !!a.data(b, e)
            }, a[j] = a[j] || {}, f = a[j][b], g = a[j][b] = function (a, b) {
                return this._createWidget ? void(arguments.length && this._createWidget(a, b)) : new g(a, b)
            }, a.extend(g, f, {
                version: d.version,
                _proto: a.extend({}, d),
                _childConstructors: []
            }), h = new c, h.options = a.widget.extend({}, h.options), a.each(d, function (b, d) {
                return a.isFunction(d) ? void(i[b] = function () {
                    var a = function () {
                        return c.prototype[b].apply(this, arguments)
                    }, e = function (a) {
                            return c.prototype[b].apply(this, a)
                        };
                    return function () {
                        var b, c = this._super,
                            f = this._superApply;
                        return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, this._superApply = f, b
                    }
                }()) : void(i[b] = d)
            }), g.prototype = a.widget.extend(h, {
                widgetEventPrefix: f ? h.widgetEventPrefix || b : b
            }, i, {
                constructor: g,
                namespace: j,
                widgetName: b,
                widgetFullName: e
            }), f ? (a.each(f._childConstructors, function (b, c) {
                var d = c.prototype;
                a.widget(d.namespace + "." + d.widgetName, g, c._proto)
            }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g), g
        }, a.widget.extend = function (c) {
            for (var e, f, g = d.call(arguments, 1), h = 0, i = g.length; i > h; h++)
                for (e in g[h]) f = g[h][e], g[h].hasOwnProperty(e) && f !== b && (c[e] = a.isPlainObject(f) ? a.isPlainObject(c[e]) ? a.widget.extend({}, c[e], f) : a.widget.extend({}, f) : f);
            return c
        }, a.widget.bridge = function (c, e) {
            var f = e.prototype.widgetFullName || c;
            a.fn[c] = function (g) {
                var h = "string" == typeof g,
                    i = d.call(arguments, 1),
                    j = this;
                return g = !h && i.length ? a.widget.extend.apply(null, [g].concat(i)) : g, this.each(h ? function () {
                    var d, e = a.data(this, f);
                    return "instance" === g ? (j = e, !1) : e ? a.isFunction(e[g]) && "_" !== g.charAt(0) ? (d = e[g].apply(e, i), d !== e && d !== b ? (j = d && d.jquery ? j.pushStack(d.get()) : d, !1) : void 0) : a.error("no such method '" + g + "' for " + c + " widget instance") : a.error("cannot call methods on " + c + " prior to initialization; attempted to call method '" + g + "'")
                } : function () {
                    var b = a.data(this, f);
                    b ? b.option(g || {})._init() : a.data(this, f, new e(g, this))
                }), j
            }
        }, a.Widget = function () {}, a.Widget._childConstructors = [], a.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function (b, d) {
                d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = c++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b), this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function (a) {
                        a.target === d && this.destroy()
                    }
                }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: a.noop,
            _getCreateEventData: a.noop,
            _create: a.noop,
            _init: a.noop,
            destroy: function () {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: a.noop,
            widget: function () {
                return this.element
            },
            option: function (c, d) {
                var e, f, g, h = c;
                if (0 === arguments.length) return a.widget.extend({}, this.options);
                if ("string" == typeof c)
                    if (h = {}, e = c.split("."), c = e.shift(), e.length) {
                        for (f = h[c] = a.widget.extend({}, this.options[c]), g = 0; g < e.length - 1; g++) f[e[g]] = f[e[g]] || {}, f = f[e[g]];
                        if (c = e.pop(), d === b) return f[c] === b ? null : f[c];
                        f[c] = d
                    } else {
                        if (d === b) return this.options[c] === b ? null : this.options[c];
                        h[c] = d
                    }
                return this._setOptions(h), this
            },
            _setOptions: function (a) {
                var b;
                for (b in a) this._setOption(b, a[b]);
                return this
            },
            _setOption: function (a, b) {
                return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !! b), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
            },
            enable: function () {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function () {
                return this._setOptions({
                    disabled: !0
                })
            },
            _on: function (b, c, d) {
                var e, f = this;
                "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function (d, g) {
                    function h() {
                        return b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0
                    }
                    "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                    var i = d.match(/^(\w+)\s*(.*)$/),
                        j = i[1] + f.eventNamespace,
                        k = i[2];
                    k ? e.delegate(k, j, h) : c.bind(j, h)
                })
            },
            _off: function (a, b) {
                b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, a.unbind(b).undelegate(b)
            },
            _delay: function (a, b) {
                function c() {
                    return ("string" == typeof a ? d[a] : a).apply(d, arguments)
                }
                var d = this;
                return setTimeout(c, b || 0)
            },
            _hoverable: function (b) {
                this.hoverable = this.hoverable.add(b), this._on(b, {
                    mouseenter: function (b) {
                        a(b.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function (b) {
                        a(b.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function (b) {
                this.focusable = this.focusable.add(b), this._on(b, {
                    focusin: function (b) {
                        a(b.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function (b) {
                        a(b.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function (b, c, d) {
                var e, f, g = this.options[b];
                if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)
                    for (e in f) e in c || (c[e] = f[e]);
                return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
            }
        }, a.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function (b, c) {
            a.Widget.prototype["_" + b] = function (d, e, f) {
                "string" == typeof e && (e = {
                    effect: e
                });
                var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
                e = e || {}, "number" == typeof e && (e = {
                    duration: e
                }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function (c) {
                    a(this)[b](), f && f.call(d[0]), c()
                })
            }
        })
    }(a),
    function (a) {
        var b = /[A-Z]/g,
            c = function (a) {
                return "-" + a.toLowerCase()
            };
        a.extend(a.Widget.prototype, {
            _getCreateOptions: function () {
                var d, e, f = this.element[0],
                    g = {};
                if (!a.mobile.getAttribute(f, "defaults"))
                    for (d in this.options) e = a.mobile.getAttribute(f, d.replace(b, c)), null != e && (g[d] = e);
                return g
            }
        }), a.mobile.widget = a.Widget
    }(a),
    function (a) {
        var b = "ui-loader",
            c = a("html");
        a.widget("mobile.loader", {
            options: {
                theme: "a",
                textVisible: !1,
                html: "",
                text: "loading"
            },
            defaultHtml: "<div class='" + b + "'><span class='ui-icon-loading'></span><h1></h1></div>",
            fakeFixLoader: function () {
                var b = a("." + a.mobile.activeBtnClass).first();
                this.element.css({
                    top: a.support.scrollTop && this.window.scrollTop() + this.window.height() / 2 || b.length && b.offset().top || 100
                })
            },
            checkLoaderPosition: function () {
                var b = this.element.offset(),
                    c = this.window.scrollTop(),
                    d = a.mobile.getScreenHeight();
                (b.top < c || b.top - c > d) && (this.element.addClass("ui-loader-fakefix"), this.fakeFixLoader(), this.window.unbind("scroll", this.checkLoaderPosition).bind("scroll", a.proxy(this.fakeFixLoader, this)))
            },
            resetHtml: function () {
                this.element.html(a(this.defaultHtml).html())
            },
            show: function (d, e, f) {
                var g, h, i;
                this.resetHtml(), "object" === a.type(d) ? (i = a.extend({}, this.options, d), d = i.theme) : (i = this.options, d = d || i.theme), h = e || (i.text === !1 ? "" : i.text), c.addClass("ui-loading"), g = i.textVisible, this.element.attr("class", b + " ui-corner-all ui-body-" + d + " ui-loader-" + (g || e || d.text ? "verbose" : "default") + (i.textonly || f ? " ui-loader-textonly" : "")), i.html ? this.element.html(i.html) : this.element.find("h1").text(h), this.element.appendTo(a.mobile.pageContainer), this.checkLoaderPosition(), this.window.bind("scroll", a.proxy(this.checkLoaderPosition, this))
            },
            hide: function () {
                c.removeClass("ui-loading"), this.options.text && this.element.removeClass("ui-loader-fakefix"), a.mobile.window.unbind("scroll", this.fakeFixLoader), a.mobile.window.unbind("scroll", this.checkLoaderPosition)
            }
        })
    }(a, this),
    function (a, b, d) {
        "$:nomunge";

        function e(a) {
            return a = a || location.href, "#" + a.replace(/^[^#]*#?(.*)$/, "$1")
        }
        var f, g = "hashchange",
            h = c,
            i = a.event.special,
            j = h.documentMode,
            k = "on" + g in b && (j === d || j > 7);
        a.fn[g] = function (a) {
            return a ? this.bind(g, a) : this.trigger(g)
        }, a.fn[g].delay = 50, i[g] = a.extend(i[g], {
            setup: function () {
                return k ? !1 : void a(f.start)
            },
            teardown: function () {
                return k ? !1 : void a(f.stop)
            }
        }), f = function () {
            function c() {
                var d = e(),
                    h = n(j);
                d !== j ? (m(j = d, h), a(b).trigger(g)) : h !== j && (location.href = location.href.replace(/#.*/, "") + h), f = setTimeout(c, a.fn[g].delay)
            }
            var f, i = {}, j = e(),
                l = function (a) {
                    return a
                }, m = l,
                n = l;
            return i.start = function () {
                f || c()
            }, i.stop = function () {
                f && clearTimeout(f), f = d
            }, b.attachEvent && !b.addEventListener && !k && function () {
                var b, d;
                i.start = function () {
                    b || (d = a.fn[g].src, d = d && d + e(), b = a('<iframe tabindex="-1" title="empty"/>').hide().one("load", function () {
                        d || m(e()), c()
                    }).attr("src", d || "javascript:0").insertAfter("body")[0].contentWindow, h.onpropertychange = function () {
                        try {
                            "title" === event.propertyName && (b.document.title = h.title)
                        } catch (a) {}
                    })
                }, i.stop = l, n = function () {
                    return e(b.location.href)
                }, m = function (c, d) {
                    var e = b.document,
                        f = a.fn[g].domain;
                    c !== d && (e.title = h.title, e.open(), f && e.write('<script>document.domain="' + f + '"</script>'), e.close(), b.location.hash = c)
                }
            }(), i
        }()
    }(a, this),
    function (a) {
        b.matchMedia = b.matchMedia || function (a) {
            var b, c = a.documentElement,
                d = c.firstElementChild || c.firstChild,
                e = a.createElement("body"),
                f = a.createElement("div");
            return f.id = "mq-test-1", f.style.cssText = "position:absolute;top:-100em", e.style.background = "none", e.appendChild(f),
            function (a) {
                return f.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>', c.insertBefore(e, d), b = 42 === f.offsetWidth, c.removeChild(e), {
                    matches: b,
                    media: a
                }
            }
        }(c), a.mobile.media = function (a) {
            return b.matchMedia(a).matches
        }
    }(a),
    function (a) {
        var b = {
            touch: "ontouchend" in c
        };
        a.mobile.support = a.mobile.support || {}, a.extend(a.support, b), a.extend(a.mobile.support, b)
    }(a),
    function (a) {
        a.extend(a.support, {
            orientation: "orientation" in b && "onorientationchange" in b
        })
    }(a),
    function (a, d) {
        function e(a) {
            var b, c = a.charAt(0).toUpperCase() + a.substr(1),
                e = (a + " " + o.join(c + " ") + c).split(" ");
            for (b in e)
                if (n[e[b]] !== d) return !0
        }

        function f() {
            var c = b,
                d = !(!c.document.createElementNS || !c.document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect || c.opera && -1 === navigator.userAgent.indexOf("Chrome")),
                e = function (b) {
                    b && d || a("html").addClass("ui-nosvg")
                }, f = new c.Image;
            f.onerror = function () {
                e(!1)
            }, f.onload = function () {
                e(1 === f.width && 1 === f.height)
            }, f.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
        }

        function g() {
            var e, f, g, h = "transform-3d",
                i = a.mobile.media("(-" + o.join("-" + h + "),(-") + "-" + h + "),(" + h + ")");
            if (i) return !!i;
            e = c.createElement("div"), f = {
                MozTransform: "-moz-transform",
                transform: "transform"
            }, m.append(e);
            for (g in f) e.style[g] !== d && (e.style[g] = "translate3d( 100px, 1px, 1px )", i = b.getComputedStyle(e).getPropertyValue(f[g]));
            return !!i && "none" !== i
        }

        function h() {
            var b, c, d = location.protocol + "//" + location.host + location.pathname + "ui-dir/",
                e = a("head base"),
                f = null,
                g = "";
            return e.length ? g = e.attr("href") : e = f = a("<base>", {
                href: d
            }).appendTo("head"), b = a("<a href='testurl' />").prependTo(m), c = b[0].href, e[0].href = g || location.pathname, f && f.remove(), 0 === c.indexOf(d)
        }

        function i() {
            var a, d = c.createElement("x"),
                e = c.documentElement,
                f = b.getComputedStyle;
            return "pointerEvents" in d.style ? (d.style.pointerEvents = "auto", d.style.pointerEvents = "x", e.appendChild(d), a = f && "auto" === f(d, "").pointerEvents, e.removeChild(d), !! a) : !1
        }

        function j() {
            var a = c.createElement("div");
            return "undefined" != typeof a.getBoundingClientRect
        }

        function k() {
            var a = b,
                c = navigator.userAgent,
                d = navigator.platform,
                e = c.match(/AppleWebKit\/([0-9]+)/),
                f = !! e && e[1],
                g = c.match(/Fennec\/([0-9]+)/),
                h = !! g && g[1],
                i = c.match(/Opera Mobi\/([0-9]+)/),
                j = !! i && i[1];
            return (d.indexOf("iPhone") > -1 || d.indexOf("iPad") > -1 || d.indexOf("iPod") > -1) && f && 534 > f || a.operamini && "[object OperaMini]" === {}.toString.call(a.operamini) || i && 7458 > j || c.indexOf("Android") > -1 && f && 533 > f || h && 6 > h || "palmGetResource" in b && f && 534 > f || c.indexOf("MeeGo") > -1 && c.indexOf("NokiaBrowser/8.5.0") > -1 ? !1 : !0
        }
        var l, m = a("<body>").prependTo("html"),
            n = m[0].style,
            o = ["Webkit", "Moz", "O"],
            p = "palmGetResource" in b,
            q = b.operamini && "[object OperaMini]" === {}.toString.call(b.operamini),
            r = b.blackberry && !e("-webkit-transform");
        a.extend(a.mobile, {
            browser: {}
        }), a.mobile.browser.oldIE = function () {
            var a = 3,
                b = c.createElement("div"),
                d = b.all || [];
            do b.innerHTML = "<!--[if gt IE " + ++a + "]><br><![endif]-->"; while (d[0]);
            return a > 4 ? a : !a
        }(), a.extend(a.support, {
            pushState: "pushState" in history && "replaceState" in history && !(b.navigator.userAgent.indexOf("Firefox") >= 0 && b.top !== b) && -1 === b.navigator.userAgent.search(/CriOS/),
            mediaquery: a.mobile.media("only all"),
            cssPseudoElement: !! e("content"),
            touchOverflow: !! e("overflowScrolling"),
            cssTransform3d: g(),
            boxShadow: !! e("boxShadow") && !r,
            fixedPosition: k(),
            scrollTop: ("pageXOffset" in b || "scrollTop" in c.documentElement || "scrollTop" in m[0]) && !p && !q,
            dynamicBaseTag: h(),
            cssPointerEvents: i(),
            boundingRect: j(),
            inlineSVG: f
        }), m.remove(), l = function () {
            var a = b.navigator.userAgent;
            return a.indexOf("Nokia") > -1 && (a.indexOf("Symbian/3") > -1 || a.indexOf("Series60/5") > -1) && a.indexOf("AppleWebKit") > -1 && a.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/)
        }(), a.mobile.gradeA = function () {
            return (a.support.mediaquery && a.support.cssPseudoElement || a.mobile.browser.oldIE && a.mobile.browser.oldIE >= 8) && (a.support.boundingRect || null !== a.fn.jquery.match(/1\.[0-7+]\.[0-9+]?/))
        }, a.mobile.ajaxBlacklist = b.blackberry && !b.WebKitPoint || q || l, l && a(function () {
            a("head link[rel='stylesheet']").attr("rel", "alternate stylesheet").attr("rel", "stylesheet")
        }), a.support.boxShadow || a("html").addClass("ui-noboxshadow")
    }(a),
    function (a, b) {
        var c, d = a.mobile.window,
            e = function () {};
        a.event.special.beforenavigate = {
            setup: function () {
                d.on("navigate", e)
            },
            teardown: function () {
                d.off("navigate", e)
            }
        }, a.event.special.navigate = c = {
            bound: !1,
            pushStateEnabled: !0,
            originalEventName: b,
            isPushStateEnabled: function () {
                return a.support.pushState && a.mobile.pushStateEnabled === !0 && this.isHashChangeEnabled()
            },
            isHashChangeEnabled: function () {
                return a.mobile.hashListeningEnabled === !0
            },
            popstate: function (b) {
                var c = new a.Event("navigate"),
                    e = new a.Event("beforenavigate"),
                    f = b.originalEvent.state || {};
                e.originalEvent = b, d.trigger(e), e.isDefaultPrevented() || (b.historyState && a.extend(f, b.historyState), c.originalEvent = b, setTimeout(function () {
                    d.trigger(c, {
                        state: f
                    })
                }, 0))
            },
            hashchange: function (b) {
                var c = new a.Event("navigate"),
                    e = new a.Event("beforenavigate");
                e.originalEvent = b, d.trigger(e), e.isDefaultPrevented() || (c.originalEvent = b, d.trigger(c, {
                    state: b.hashchangeState || {}
                }))
            },
            setup: function () {
                c.bound || (c.bound = !0, c.isPushStateEnabled() ? (c.originalEventName = "popstate", d.bind("popstate.navigate", c.popstate)) : c.isHashChangeEnabled() && (c.originalEventName = "hashchange", d.bind("hashchange.navigate", c.hashchange)))
            }
        }
    }(a),
    function (a, c) {
        var d, e, f = "&ui-state=dialog";
        a.mobile.path = d = {
            uiStateKey: "&ui-state",
            urlParseRE: /^\s*(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,
            getLocation: function (a) {
                var b = a ? this.parseUrl(a) : location,
                    c = this.parseUrl(a || location.href).hash;
                return c = "#" === c ? "" : c, b.protocol + "//" + b.host + b.pathname + b.search + c
            },
            getDocumentUrl: function (b) {
                return b ? a.extend({}, d.documentUrl) : d.documentUrl.href
            },
            parseLocation: function () {
                return this.parseUrl(this.getLocation())
            },
            parseUrl: function (b) {
                if ("object" === a.type(b)) return b;
                var c = d.urlParseRE.exec(b || "") || [];
                return {
                    href: c[0] || "",
                    hrefNoHash: c[1] || "",
                    hrefNoSearch: c[2] || "",
                    domain: c[3] || "",
                    protocol: c[4] || "",
                    doubleSlash: c[5] || "",
                    authority: c[6] || "",
                    username: c[8] || "",
                    password: c[9] || "",
                    host: c[10] || "",
                    hostname: c[11] || "",
                    port: c[12] || "",
                    pathname: c[13] || "",
                    directory: c[14] || "",
                    filename: c[15] || "",
                    search: c[16] || "",
                    hash: c[17] || ""
                }
            },
            makePathAbsolute: function (a, b) {
                var c, d, e, f;
                if (a && "/" === a.charAt(0)) return a;
                for (a = a || "", b = b ? b.replace(/^\/|(\/[^\/]*|[^\/]+)$/g, "") : "", c = b ? b.split("/") : [], d = a.split("/"), e = 0; e < d.length; e++) switch (f = d[e]) {
                case ".":
                    break;
                case "..":
                    c.length && c.pop();
                    break;
                default:
                    c.push(f)
                }
                return "/" + c.join("/")
            },
            isSameDomain: function (a, b) {
                return d.parseUrl(a).domain === d.parseUrl(b).domain
            },
            isRelativeUrl: function (a) {
                return "" === d.parseUrl(a).protocol
            },
            isAbsoluteUrl: function (a) {
                return "" !== d.parseUrl(a).protocol
            },
            makeUrlAbsolute: function (a, b) {
                if (!d.isRelativeUrl(a)) return a;
                b === c && (b = this.documentBase);
                var e = d.parseUrl(a),
                    f = d.parseUrl(b),
                    g = e.protocol || f.protocol,
                    h = e.protocol ? e.doubleSlash : e.doubleSlash || f.doubleSlash,
                    i = e.authority || f.authority,
                    j = "" !== e.pathname,
                    k = d.makePathAbsolute(e.pathname || f.filename, f.pathname),
                    l = e.search || !j && f.search || "",
                    m = e.hash;
                return g + h + i + k + l + m
            },
            addSearchParams: function (b, c) {
                var e = d.parseUrl(b),
                    f = "object" == typeof c ? a.param(c) : c,
                    g = e.search || "?";
                return e.hrefNoSearch + g + ("?" !== g.charAt(g.length - 1) ? "&" : "") + f + (e.hash || "")
            },
            convertUrlToDataUrl: function (a) {
                var c = d.parseUrl(a);
                return d.isEmbeddedPage(c) ? c.hash.split(f)[0].replace(/^#/, "").replace(/\?.*$/, "") : d.isSameDomain(c, this.documentBase) ? c.hrefNoHash.replace(this.documentBase.domain, "").split(f)[0] : b.decodeURIComponent(a)
            },
            get: function (a) {
                return a === c && (a = d.parseLocation().hash), d.stripHash(a).replace(/[^\/]*\.[^\/*]+$/, "")
            },
            set: function (a) {
                location.hash = a
            },
            isPath: function (a) {
                return /\//.test(a)
            },
            clean: function (a) {
                return a.replace(this.documentBase.domain, "")
            },
            stripHash: function (a) {
                return a.replace(/^#/, "")
            },
            stripQueryParams: function (a) {
                return a.replace(/\?.*$/, "")
            },
            cleanHash: function (a) {
                return d.stripHash(a.replace(/\?.*$/, "").replace(f, ""))
            },
            isHashValid: function (a) {
                return /^#[^#]+$/.test(a)
            },
            isExternal: function (a) {
                var b = d.parseUrl(a);
                return b.protocol && b.domain !== this.documentUrl.domain ? !0 : !1
            },
            hasProtocol: function (a) {
                return /^(:?\w+:)/.test(a)
            },
            isEmbeddedPage: function (a) {
                var b = d.parseUrl(a);
                return "" !== b.protocol ? !this.isPath(b.hash) && b.hash && (b.hrefNoHash === this.documentUrl.hrefNoHash || this.documentBaseDiffers && b.hrefNoHash === this.documentBase.hrefNoHash) : /^#/.test(b.href)
            },
            squash: function (a, b) {
                var c, e, f, g, h = this.isPath(a),
                    i = this.parseUrl(a),
                    j = i.hash,
                    k = "";
                return b = b || (d.isPath(a) ? d.getLocation() : d.getDocumentUrl()), e = h ? d.stripHash(a) : a, e = d.isPath(i.hash) ? d.stripHash(i.hash) : e, g = e.indexOf(this.uiStateKey), g > -1 && (k = e.slice(g), e = e.slice(0, g)), c = d.makeUrlAbsolute(e, b), f = this.parseUrl(c).search, h ? ((d.isPath(j) || 0 === j.replace("#", "").indexOf(this.uiStateKey)) && (j = ""), k && -1 === j.indexOf(this.uiStateKey) && (j += k), -1 === j.indexOf("#") && "" !== j && (j = "#" + j), c = d.parseUrl(c), c = c.protocol + "//" + c.host + c.pathname + f + j) : c += c.indexOf("#") > -1 ? k : "#" + k, c
            },
            isPreservableHash: function (a) {
                return 0 === a.replace("#", "").indexOf(this.uiStateKey)
            },
            hashToSelector: function (a) {
                var b = "#" === a.substring(0, 1);
                return b && (a = a.substring(1)), (b ? "#" : "") + a.replace(/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g, "\\$1")
            },
            getFilePath: function (b) {
                var c = "&" + a.mobile.subPageUrlKey;
                return b && b.split(c)[0].split(f)[0]
            },
            isFirstPageUrl: function (b) {
                var e = d.parseUrl(d.makeUrlAbsolute(b, this.documentBase)),
                    f = e.hrefNoHash === this.documentUrl.hrefNoHash || this.documentBaseDiffers && e.hrefNoHash === this.documentBase.hrefNoHash,
                    g = a.mobile.firstPage,
                    h = g && g[0] ? g[0].id : c;
                return f && (!e.hash || "#" === e.hash || h && e.hash.replace(/^#/, "") === h)
            },
            isPermittedCrossDomainRequest: function (b, c) {
                return a.mobile.allowCrossDomainPages && ("file:" === b.protocol || "content:" === b.protocol) && -1 !== c.search(/^https?:/)
            }
        }, d.documentUrl = d.parseLocation(), e = a("head").find("base"), d.documentBase = e.length ? d.parseUrl(d.makeUrlAbsolute(e.attr("href"), d.documentUrl.href)) : d.documentUrl, d.documentBaseDiffers = d.documentUrl.hrefNoHash !== d.documentBase.hrefNoHash, d.getDocumentBase = function (b) {
            return b ? a.extend({}, d.documentBase) : d.documentBase.href
        }, a.extend(a.mobile, {
            getDocumentUrl: d.getDocumentUrl,
            getDocumentBase: d.getDocumentBase
        })
    }(a),
    function (a, b) {
        a.mobile.History = function (a, b) {
            this.stack = a || [], this.activeIndex = b || 0
        }, a.extend(a.mobile.History.prototype, {
            getActive: function () {
                return this.stack[this.activeIndex]
            },
            getLast: function () {
                return this.stack[this.previousIndex]
            },
            getNext: function () {
                return this.stack[this.activeIndex + 1]
            },
            getPrev: function () {
                return this.stack[this.activeIndex - 1]
            },
            add: function (a, b) {
                b = b || {}, this.getNext() && this.clearForward(), b.hash && -1 === b.hash.indexOf("#") && (b.hash = "#" + b.hash), b.url = a, this.stack.push(b), this.activeIndex = this.stack.length - 1
            },
            clearForward: function () {
                this.stack = this.stack.slice(0, this.activeIndex + 1)
            },
            find: function (a, b, c) {
                b = b || this.stack;
                var d, e, f, g = b.length;
                for (e = 0; g > e; e++)
                    if (d = b[e], (decodeURIComponent(a) === decodeURIComponent(d.url) || decodeURIComponent(a) === decodeURIComponent(d.hash)) && (f = e, c)) return f;
                return f
            },
            closest: function (a) {
                var c, d = this.activeIndex;
                return c = this.find(a, this.stack.slice(0, d)), c === b && (c = this.find(a, this.stack.slice(d), !0), c = c === b ? c : c + d), c
            },
            direct: function (c) {
                var d = this.closest(c.url),
                    e = this.activeIndex;
                d !== b && (this.activeIndex = d, this.previousIndex = e), e > d ? (c.present || c.back || a.noop)(this.getActive(), "back") : d > e ? (c.present || c.forward || a.noop)(this.getActive(), "forward") : d === b && c.missing && c.missing(this.getActive())
            }
        })
    }(a),
    function (a) {
        var d = a.mobile.path,
            e = location.href;
        a.mobile.Navigator = function (b) {
            this.history = b, this.ignoreInitialHashChange = !0, a.mobile.window.bind({
                "popstate.history": a.proxy(this.popstate, this),
                "hashchange.history": a.proxy(this.hashchange, this)
            })
        }, a.extend(a.mobile.Navigator.prototype, {
            squash: function (e, f) {
                var g, h, i = d.isPath(e) ? d.stripHash(e) : e;
                return h = d.squash(e), g = a.extend({
                    hash: i,
                    url: h
                }, f), b.history.replaceState(g, g.title || c.title, h), g
            },
            hash: function (a, b) {
                var c, e, f, g;
                return c = d.parseUrl(a), e = d.parseLocation(), e.pathname + e.search === c.pathname + c.search ? f = c.hash ? c.hash : c.pathname + c.search : d.isPath(a) ? (g = d.parseUrl(b), f = g.pathname + g.search + (d.isPreservableHash(g.hash) ? g.hash.replace("#", "") : "")) : f = a, f
            },
            go: function (e, f, g) {
                var h, i, j, k, l = a.event.special.navigate.isPushStateEnabled();
                i = d.squash(e), j = this.hash(e, i), g && j !== d.stripHash(d.parseLocation().hash) && (this.preventNextHashChange = g), this.preventHashAssignPopState = !0, b.location.hash = j, this.preventHashAssignPopState = !1, h = a.extend({
                    url: i,
                    hash: j,
                    title: c.title
                }, f), l && (k = new a.Event("popstate"), k.originalEvent = {
                    type: "popstate",
                    state: null
                }, this.squash(e, h), g || (this.ignorePopState = !0, a.mobile.window.trigger(k))), this.history.add(h.url, h)
            },
            popstate: function (b) {
                var c, f;
                if (a.event.special.navigate.isPushStateEnabled()) return this.preventHashAssignPopState ? (this.preventHashAssignPopState = !1, void b.stopImmediatePropagation()) : this.ignorePopState ? void(this.ignorePopState = !1) : !b.originalEvent.state && 1 === this.history.stack.length && this.ignoreInitialHashChange && (this.ignoreInitialHashChange = !1, location.href === e) ? void b.preventDefault() : (c = d.parseLocation().hash, !b.originalEvent.state && c ? (f = this.squash(c), this.history.add(f.url, f), void(b.historyState = f)) : void this.history.direct({
                    url: (b.originalEvent.state || {}).url || c,
                    present: function (c, d) {
                        b.historyState = a.extend({}, c), b.historyState.direction = d
                    }
                }))
            },
            hashchange: function (b) {
                var e, f;
                if (a.event.special.navigate.isHashChangeEnabled() && !a.event.special.navigate.isPushStateEnabled()) {
                    if (this.preventNextHashChange) return this.preventNextHashChange = !1, void b.stopImmediatePropagation();
                    e = this.history, f = d.parseLocation().hash, this.history.direct({
                        url: f,
                        present: function (c, d) {
                            b.hashchangeState = a.extend({}, c), b.hashchangeState.direction = d
                        },
                        missing: function () {
                            e.add(f, {
                                hash: f,
                                title: c.title
                            })
                        }
                    })
                }
            }
        })
    }(a),
    function (a) {
        a.mobile.navigate = function (b, c, d) {
            a.mobile.navigate.navigator.go(b, c, d)
        }, a.mobile.navigate.history = new a.mobile.History, a.mobile.navigate.navigator = new a.mobile.Navigator(a.mobile.navigate.history);
        var b = a.mobile.path.parseLocation();
        a.mobile.navigate.history.add(b.href, {
            hash: b.hash
        })
    }(a),
    function (a, b) {
        var d = {
            animation: {},
            transition: {}
        }, e = c.createElement("a"),
            f = ["", "webkit-", "moz-", "o-"];
        a.each(["animation", "transition"], function (c, g) {
            var h = 0 === c ? g + "-name" : g;
            a.each(f, function (c, f) {
                return e.style[a.camelCase(f + h)] !== b ? (d[g].prefix = f, !1) : void 0
            }), d[g].duration = a.camelCase(d[g].prefix + g + "-duration"), d[g].event = a.camelCase(d[g].prefix + g + "-end"), "" === d[g].prefix && (d[g].duration = d[g].duration.toLowerCase(), d[g].event = d[g].event.toLowerCase())
        }), a.support.cssTransitions = d.transition.prefix !== b, a.support.cssAnimations = d.animation.prefix !== b, a(e).remove(), a.fn.animationComplete = function (e, f, g) {
            var h, i, j = this,
                k = f && "animation" !== f ? "transition" : "animation";
            return a.support.cssTransitions && "transition" === k || a.support.cssAnimations && "animation" === k ? (g === b && (a(this).context !== c && (i = 3e3 * parseFloat(a(this).css(d[k].duration))), (0 === i || i === b) && (i = a.fn.animationComplete.
                default)), h = setTimeout(function () {
                a(j).off(d[k].event), e.apply(j)
            }, i), a(this).one(d[k].event, function () {
                clearTimeout(h), e.call(this, arguments)
            })) : (setTimeout(a.proxy(e, this), 0), a(this))
        }, a.fn.animationComplete.
        default = 1e3
    }(a),
    function (a, b, c, d) {
        function e(a) {
            for (; a && "undefined" != typeof a.originalEvent;) a = a.originalEvent;
            return a
        }

        function f(b, c) {
            var f, g, h, i, j, k, l, m, n, o = b.type;
            if (b = a.Event(b), b.type = c, f = b.originalEvent, g = a.event.props, o.search(/^(mouse|click)/) > -1 && (g = E), f)
                for (l = g.length, i; l;) i = g[--l], b[i] = f[i];
            if (o.search(/mouse(down|up)|click/) > -1 && !b.which && (b.which = 1), -1 !== o.search(/^touch/) && (h = e(f), o = h.touches, j = h.changedTouches, k = o && o.length ? o[0] : j && j.length ? j[0] : d))
                for (m = 0, n = C.length; n > m; m++) i = C[m], b[i] = k[i];
            return b
        }

        function g(b) {
            for (var c, d, e = {}; b;) {
                c = a.data(b, z);
                for (d in c) c[d] && (e[d] = e.hasVirtualBinding = !0);
                b = b.parentNode
            }
            return e
        }

        function h(b, c) {
            for (var d; b;) {
                if (d = a.data(b, z), d && (!c || d[c])) return b;
                b = b.parentNode
            }
            return null
        }

        function i() {
            M = !1
        }

        function j() {
            M = !0
        }

        function k() {
            Q = 0, K.length = 0, L = !1, j()
        }

        function l() {
            i()
        }

        function m() {
            n(), G = setTimeout(function () {
                G = 0, k()
            }, a.vmouse.resetTimerDuration)
        }

        function n() {
            G && (clearTimeout(G), G = 0)
        }

        function o(b, c, d) {
            var e;
            return (d && d[b] || !d && h(c.target, b)) && (e = f(c, b), a(c.target).trigger(e)), e
        }

        function p(b) {
            var c, d = a.data(b.target, A);
            L || Q && Q === d || (c = o("v" + b.type, b), c && (c.isDefaultPrevented() && b.preventDefault(), c.isPropagationStopped() && b.stopPropagation(), c.isImmediatePropagationStopped() && b.stopImmediatePropagation()))
        }

        function q(b) {
            var c, d, f, h = e(b).touches;
            h && 1 === h.length && (c = b.target, d = g(c), d.hasVirtualBinding && (Q = P++, a.data(c, A, Q), n(), l(), J = !1, f = e(b).touches[0], H = f.pageX, I = f.pageY, o("vmouseover", b, d), o("vmousedown", b, d)))
        }

        function r(a) {
            M || (J || o("vmousecancel", a, g(a.target)), J = !0, m())
        }

        function s(b) {
            if (!M) {
                var c = e(b).touches[0],
                    d = J,
                    f = a.vmouse.moveDistanceThreshold,
                    h = g(b.target);
                J = J || Math.abs(c.pageX - H) > f || Math.abs(c.pageY - I) > f, J && !d && o("vmousecancel", b, h), o("vmousemove", b, h), m()
            }
        }

        function t(a) {
            if (!M) {
                j();
                var b, c, d = g(a.target);
                o("vmouseup", a, d), J || (b = o("vclick", a, d), b && b.isDefaultPrevented() && (c = e(a).changedTouches[0], K.push({
                    touchID: Q,
                    x: c.clientX,
                    y: c.clientY
                }), L = !0)), o("vmouseout", a, d), J = !1, m()
            }
        }

        function u(b) {
            var c, d = a.data(b, z);
            if (d)
                for (c in d)
                    if (d[c]) return !0;
            return !1
        }

        function v() {}

        function w(b) {
            var c = b.substr(1);
            return {
                setup: function () {
                    u(this) || a.data(this, z, {});
                    var d = a.data(this, z);
                    d[b] = !0, F[b] = (F[b] || 0) + 1, 1 === F[b] && O.bind(c, p), a(this).bind(c, v), N && (F.touchstart = (F.touchstart || 0) + 1, 1 === F.touchstart && O.bind("touchstart", q).bind("touchend", t).bind("touchmove", s).bind("scroll", r))
                },
                teardown: function () {
                    --F[b], F[b] || O.unbind(c, p), N && (--F.touchstart, F.touchstart || O.unbind("touchstart", q).unbind("touchmove", s).unbind("touchend", t).unbind("scroll", r));
                    var d = a(this),
                        e = a.data(this, z);
                    e && (e[b] = !1), d.unbind(c, v), u(this) || d.removeData(z)
                }
            }
        }
        var x, y, z = "virtualMouseBindings",
            A = "virtualTouchID",
            B = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),
            C = "clientX clientY pageX pageY screenX screenY".split(" "),
            D = a.event.mouseHooks ? a.event.mouseHooks.props : [],
            E = a.event.props.concat(D),
            F = {}, G = 0,
            H = 0,
            I = 0,
            J = !1,
            K = [],
            L = !1,
            M = !1,
            N = "addEventListener" in c,
            O = a(c),
            P = 1,
            Q = 0;
        for (a.vmouse = {
            moveDistanceThreshold: 10,
            clickDistanceThreshold: 10,
            resetTimerDuration: 1500
        }, y = 0; y < B.length; y++) a.event.special[B[y]] = w(B[y]);
        N && c.addEventListener("click", function (b) {
            var c, d, e, f, g, h, i = K.length,
                j = b.target;
            if (i)
                for (c = b.clientX, d = b.clientY, x = a.vmouse.clickDistanceThreshold, e = j; e;) {
                    for (f = 0; i > f; f++)
                        if (g = K[f], h = 0, e === j && Math.abs(g.x - c) < x && Math.abs(g.y - d) < x || a.data(e, A) === g.touchID) return b.preventDefault(), void b.stopPropagation();
                    e = e.parentNode
                }
        }, !0)
    }(a, b, c),
    function (a, b, d) {
        function e(b, c, e, f) {
            var g = e.type;
            e.type = c, f ? a.event.trigger(e, d, b) : a.event.dispatch.call(b, e), e.type = g
        }
        var f = a(c),
            g = a.mobile.support.touch,
            h = "touchmove scroll",
            i = g ? "touchstart" : "mousedown",
            j = g ? "touchend" : "mouseup",
            k = g ? "touchmove" : "mousemove";
        a.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function (b, c) {
            a.fn[c] = function (a) {
                return a ? this.bind(c, a) : this.trigger(c)
            }, a.attrFn && (a.attrFn[c] = !0)
        }), a.event.special.scrollstart = {
            enabled: !0,
            setup: function () {
                function b(a, b) {
                    c = b, e(f, c ? "scrollstart" : "scrollstop", a)
                }
                var c, d, f = this,
                    g = a(f);
                g.bind(h, function (e) {
                    a.event.special.scrollstart.enabled && (c || b(e, !0), clearTimeout(d), d = setTimeout(function () {
                        b(e, !1)
                    }, 50))
                })
            },
            teardown: function () {
                a(this).unbind(h)
            }
        }, a.event.special.tap = {
            tapholdThreshold: 750,
            emitTapOnTaphold: !0,
            setup: function () {
                var b = this,
                    c = a(b),
                    d = !1;
                c.bind("vmousedown", function (g) {
                    function h() {
                        clearTimeout(k)
                    }

                    function i() {
                        h(), c.unbind("vclick", j).unbind("vmouseup", h), f.unbind("vmousecancel", i)
                    }

                    function j(a) {
                        i(), d || l !== a.target ? d && a.stopPropagation() : e(b, "tap", a)
                    }
                    if (d = !1, g.which && 1 !== g.which) return !1;
                    var k, l = g.target;
                    c.bind("vmouseup", h).bind("vclick", j), f.bind("vmousecancel", i), k = setTimeout(function () {
                        a.event.special.tap.emitTapOnTaphold || (d = !0), e(b, "taphold", a.Event("taphold", {
                            target: l
                        }))
                    }, a.event.special.tap.tapholdThreshold)
                })
            },
            teardown: function () {
                a(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"), f.unbind("vmousecancel")
            }
        }, a.event.special.swipe = {
            scrollSupressionThreshold: 30,
            durationThreshold: 1e3,
            horizontalDistanceThreshold: 30,
            verticalDistanceThreshold: 30,
            getLocation: function (a) {
                var c = b.pageXOffset,
                    d = b.pageYOffset,
                    e = a.clientX,
                    f = a.clientY;
                return 0 === a.pageY && Math.floor(f) > Math.floor(a.pageY) || 0 === a.pageX && Math.floor(e) > Math.floor(a.pageX) ? (e -= c, f -= d) : (f < a.pageY - d || e < a.pageX - c) && (e = a.pageX - c, f = a.pageY - d), {
                    x: e,
                    y: f
                }
            },
            start: function (b) {
                var c = b.originalEvent.touches ? b.originalEvent.touches[0] : b,
                    d = a.event.special.swipe.getLocation(c);
                return {
                    time: (new Date).getTime(),
                    coords: [d.x, d.y],
                    origin: a(b.target)
                }
            },
            stop: function (b) {
                var c = b.originalEvent.touches ? b.originalEvent.touches[0] : b,
                    d = a.event.special.swipe.getLocation(c);
                return {
                    time: (new Date).getTime(),
                    coords: [d.x, d.y]
                }
            },
            handleSwipe: function (b, c, d, f) {
                if (c.time - b.time < a.event.special.swipe.durationThreshold && Math.abs(b.coords[0] - c.coords[0]) > a.event.special.swipe.horizontalDistanceThreshold && Math.abs(b.coords[1] - c.coords[1]) < a.event.special.swipe.verticalDistanceThreshold) {
                    var g = b.coords[0] > c.coords[0] ? "swipeleft" : "swiperight";
                    return e(d, "swipe", a.Event("swipe", {
                        target: f,
                        swipestart: b,
                        swipestop: c
                    }), !0), e(d, g, a.Event(g, {
                        target: f,
                        swipestart: b,
                        swipestop: c
                    }), !0), !0
                }
                return !1
            },
            eventInProgress: !1,
            setup: function () {
                var b, c = this,
                    d = a(c),
                    e = {};
                b = a.data(this, "mobile-events"), b || (b = {
                    length: 0
                }, a.data(this, "mobile-events", b)), b.length++, b.swipe = e, e.start = function (b) {
                    if (!a.event.special.swipe.eventInProgress) {
                        a.event.special.swipe.eventInProgress = !0;
                        var d, g = a.event.special.swipe.start(b),
                            h = b.target,
                            i = !1;
                        e.move = function (b) {
                            g && (d = a.event.special.swipe.stop(b), i || (i = a.event.special.swipe.handleSwipe(g, d, c, h), i && (a.event.special.swipe.eventInProgress = !1)), Math.abs(g.coords[0] - d.coords[0]) > a.event.special.swipe.scrollSupressionThreshold && b.preventDefault())
                        }, e.stop = function () {
                            i = !0, a.event.special.swipe.eventInProgress = !1, f.off(k, e.move), e.move = null
                        }, f.on(k, e.move).one(j, e.stop)
                    }
                }, d.on(i, e.start)
            },
            teardown: function () {
                var b, c;
                b = a.data(this, "mobile-events"), b && (c = b.swipe, delete b.swipe, b.length--, 0 === b.length && a.removeData(this, "mobile-events")), c && (c.start && a(this).off(i, c.start), c.move && f.off(k, c.move), c.stop && f.off(j, c.stop))
            }
        }, a.each({
            scrollstop: "scrollstart",
            taphold: "tap",
            swipeleft: "swipe",
            swiperight: "swipe"
        }, function (b, c) {
            a.event.special[b] = {
                setup: function () {
                    a(this).bind(c, a.noop)
                },
                teardown: function () {
                    a(this).unbind(c)
                }
            }
        })
    }(a, this),
    function (a) {
        a.event.special.throttledresize = {
            setup: function () {
                a(this).bind("resize", f)
            },
            teardown: function () {
                a(this).unbind("resize", f)
            }
        };
        var b, c, d, e = 250,
            f = function () {
                c = (new Date).getTime(), d = c - g, d >= e ? (g = c, a(this).trigger("throttledresize")) : (b && clearTimeout(b), b = setTimeout(f, e - d))
            }, g = 0
    }(a),
    function (a, b) {
        function d() {
            var a = e();
            a !== f && (f = a, l.trigger(m))
        }
        var e, f, g, h, i, j, k, l = a(b),
            m = "orientationchange",
            n = {
                0: !0,
                180: !0
            };
        a.support.orientation && (i = b.innerWidth || l.width(), j = b.innerHeight || l.height(), k = 50, g = i > j && i - j > k, h = n[b.orientation], (g && h || !g && !h) && (n = {
            "-90": !0,
            90: !0
        })), a.event.special.orientationchange = a.extend({}, a.event.special.orientationchange, {
            setup: function () {
                return a.support.orientation && !a.event.special.orientationchange.disabled ? !1 : (f = e(), void l.bind("throttledresize", d))
            },
            teardown: function () {
                return a.support.orientation && !a.event.special.orientationchange.disabled ? !1 : void l.unbind("throttledresize", d)
            },
            add: function (a) {
                var b = a.handler;
                a.handler = function (a) {
                    return a.orientation = e(), b.apply(this, arguments)
                }
            }
        }), a.event.special.orientationchange.orientation = e = function () {
            var d = !0,
                e = c.documentElement;
            return d = a.support.orientation ? n[b.orientation] : e && e.clientWidth / e.clientHeight < 1.1, d ? "portrait" : "landscape"
        }, a.fn[m] = function (a) {
            return a ? this.bind(m, a) : this.trigger(m)
        }, a.attrFn && (a.attrFn[m] = !0)
    }(a, this),
    function (a) {
        var b = a("head").children("base"),
            c = {
                element: b.length ? b : a("<base>", {
                    href: a.mobile.path.documentBase.hrefNoHash
                }).prependTo(a("head")),
                linkSelector: "[src], link[href], a[rel='external'], :jqmData(ajax='false'), a[target]",
                set: function (b) {
                    a.mobile.dynamicBaseEnabled && a.support.dynamicBaseTag && c.element.attr("href", a.mobile.path.makeUrlAbsolute(b, a.mobile.path.documentBase))
                },
                rewrite: function (b, d) {
                    var e = a.mobile.path.get(b);
                    d.find(c.linkSelector).each(function (b, c) {
                        var d = a(c).is("[href]") ? "href" : a(c).is("[src]") ? "src" : "action",
                            f = a(c).attr(d);
                        f = f.replace(location.protocol + "//" + location.host + location.pathname, ""), /^(\w+:|#|\/)/.test(f) || a(c).attr(d, e + f)
                    })
                },
                reset: function () {
                    c.element.attr("href", a.mobile.path.documentBase.hrefNoSearch)
                }
            };
        a.mobile.base = c
    }(a),
    function (a, b) {
        a.mobile.widgets = {};
        var c = a.widget,
            d = a.mobile.keepNative;
        a.widget = function (c) {
            return function () {
                var d = c.apply(this, arguments),
                    e = d.prototype.widgetName;
                return d.initSelector = d.prototype.initSelector !== b ? d.prototype.initSelector : ":jqmData(role='" + e + "')", a.mobile.widgets[e] = d, d
            }
        }(a.widget), a.extend(a.widget, c), a.mobile.document.on("create", function (b) {
            a(b.target).enhanceWithin()
        }), a.widget("mobile.page", {
            options: {
                theme: "a",
                domCache: !1,
                keepNativeDefault: a.mobile.keepNative,
                contentTheme: null,
                enhanced: !1
            },
            _createWidget: function () {
                a.Widget.prototype._createWidget.apply(this, arguments), this._trigger("init")
            },
            _create: function () {
                return this._trigger("beforecreate") === !1 ? !1 : (this.options.enhanced || this._enhance(), this._on(this.element, {
                    pagebeforehide: "removeContainerBackground",
                    pagebeforeshow: "_handlePageBeforeShow"
                }), this.element.enhanceWithin(), void("dialog" === a.mobile.getAttribute(this.element[0], "role") && a.mobile.dialog && this.element.dialog()))
            },
            _enhance: function () {
                var c = "data-" + a.mobile.ns,
                    d = this;
                this.options.role && this.element.attr("data-" + a.mobile.ns + "role", this.options.role), this.element.attr("tabindex", "0").addClass("ui-page ui-page-theme-" + this.options.theme), this.element.find("[" + c + "role='content']").each(function () {
                    var e = a(this),
                        f = this.getAttribute(c + "theme") || b;
                    d.options.contentTheme = f || d.options.contentTheme || d.options.dialog && d.options.theme || "dialog" === d.element.jqmData("role") && d.options.theme, e.addClass("ui-content"), d.options.contentTheme && e.addClass("ui-body-" + d.options.contentTheme), e.attr("role", "main").addClass("ui-content")
                })
            },
            bindRemove: function (b) {
                var c = this.element;
                !c.data("mobile-page").options.domCache && c.is(":jqmData(external-page='true')") && c.bind("pagehide.remove", b || function (b, c) {
                    if (!c.samePage) {
                        var d = a(this),
                            e = new a.Event("pageremove");
                        d.trigger(e), e.isDefaultPrevented() || d.removeWithDependents()
                    }
                })
            },
            _setOptions: function (c) {
                c.theme !== b && this.element.removeClass("ui-page-theme-" + this.options.theme).addClass("ui-page-theme-" + c.theme), c.contentTheme !== b && this.element.find("[data-" + a.mobile.ns + "='content']").removeClass("ui-body-" + this.options.contentTheme).addClass("ui-body-" + c.contentTheme)
            },
            _handlePageBeforeShow: function () {
                this.setContainerBackground()
            },
            removeContainerBackground: function () {
                this.element.closest(":mobile-pagecontainer").pagecontainer({
                    theme: "none"
                })
            },
            setContainerBackground: function (a) {
                this.element.parent().pagecontainer({
                    theme: a || this.options.theme
                })
            },
            keepNativeSelector: function () {
                var b = this.options,
                    c = a.trim(b.keepNative || ""),
                    e = a.trim(a.mobile.keepNative),
                    f = a.trim(b.keepNativeDefault),
                    g = d === e ? "" : e,
                    h = "" === g ? f : "";
                return (c ? [c] : []).concat(g ? [g] : []).concat(h ? [h] : []).join(", ")
            }
        })
    }(a),
    function (a, d) {
        a.widget("mobile.pagecontainer", {
            options: {
                theme: "a"
            },
            initSelector: !1,
            _create: function () {
                this.setLastScrollEnabled = !0, this._on(this.window, {
                    navigate: "_filterNavigateEvents"
                }), this._on(this.window, {
                    navigate: "_disableRecordScroll",
                    scrollstop: "_delayedRecordScroll"
                }), this._on({
                    pagechange: "_afterContentChange"
                }), this.window.one("navigate", a.proxy(function () {
                    this.setLastScrollEnabled = !0
                }, this))
            },
            _setOptions: function (a) {
                a.theme !== d && "none" !== a.theme ? this.element.removeClass("ui-overlay-" + this.options.theme).addClass("ui-overlay-" + a.theme) : a.theme !== d && this.element.removeClass("ui-overlay-" + this.options.theme), this._super(a)
            },
            _disableRecordScroll: function () {
                this.setLastScrollEnabled = !1
            },
            _enableRecordScroll: function () {
                this.setLastScrollEnabled = !0
            },
            _afterContentChange: function () {
                this.setLastScrollEnabled = !0, this._off(this.window, "scrollstop"), this._on(this.window, {
                    scrollstop: "_delayedRecordScroll"
                })
            },
            _recordScroll: function () {
                if (this.setLastScrollEnabled) {
                    var a, b, c, d = this._getActiveHistory();
                    d && (a = this._getScroll(), b = this._getMinScroll(), c = this._getDefaultScroll(), d.lastScroll = b > a ? c : a)
                }
            },
            _delayedRecordScroll: function () {
                setTimeout(a.proxy(this, "_recordScroll"), 100)
            },
            _getScroll: function () {
                return this.window.scrollTop()
            },
            _getMinScroll: function () {
                return a.mobile.minScrollBack
            },
            _getDefaultScroll: function () {
                return a.mobile.defaultHomeScroll
            },
            _filterNavigateEvents: function (b, c) {
                var d;
                b.originalEvent && b.originalEvent.isDefaultPrevented() || (d = b.originalEvent.type.indexOf("hashchange") > -1 ? c.state.hash : c.state.url, d || (d = this._getHash()), d && "#" !== d && 0 !== d.indexOf("#" + a.mobile.path.uiStateKey) || (d = location.href), this._handleNavigate(d, c.state))
            },
            _getHash: function () {
                return a.mobile.path.parseLocation().hash
            },
            getActivePage: function () {
                return this.activePage
            },
            _getInitialContent: function () {
                return a.mobile.firstPage
            },
            _getHistory: function () {
                return a.mobile.navigate.history
            },
            _getActiveHistory: function () {
                return a.mobile.navigate.history.getActive()
            },
            _getDocumentBase: function () {
                return a.mobile.path.documentBase
            },
            back: function () {
                this.go(-1)
            },
            forward: function () {
                this.go(1)
            },
            go: function (c) {
                if (a.mobile.hashListeningEnabled) b.history.go(c);
                else {
                    var d = a.mobile.navigate.history.activeIndex,
                        e = d + parseInt(c, 10),
                        f = a.mobile.navigate.history.stack[e].url,
                        g = c >= 1 ? "forward" : "back";
                    a.mobile.navigate.history.activeIndex = e, a.mobile.navigate.history.previousIndex = d, this.change(f, {
                        direction: g,
                        changeHash: !1,
                        fromHashChange: !0
                    })
                }
            },
            _handleDestination: function (b) {
                var c;
                return "string" === a.type(b) && (b = a.mobile.path.stripHash(b)), b && (c = this._getHistory(), b = a.mobile.path.isPath(b) ? b : a.mobile.path.makeUrlAbsolute("#" + b, this._getDocumentBase()), b === a.mobile.path.makeUrlAbsolute("#" + c.initialDst, this._getDocumentBase()) && c.stack.length && c.stack[0].url !== c.initialDst.replace(a.mobile.dialogHashKey, "") && (b = this._getInitialContent())), b || this._getInitialContent()
            },
            _handleDialog: function (b, c) {
                var d, e, f = this.getActivePage();
                return f && !f.hasClass("ui-dialog") ? ("back" === c.direction ? this.back() : this.forward(), !1) : (d = c.pageUrl, e = this._getActiveHistory(), a.extend(b, {
                    role: e.role,
                    transition: e.transition,
                    reverse: "back" === c.direction
                }), d)
            },
            _handleNavigate: function (b, c) {
                var e = a.mobile.path.stripHash(b),
                    f = this._getHistory(),
                    g = 0 === f.stack.length ? "none" : d,
                    h = {
                        changeHash: !1,
                        fromHashChange: !0,
                        reverse: "back" === c.direction
                    };
                a.extend(h, c, {
                    transition: (f.getLast() || {}).transition || g
                }), f.activeIndex > 0 && e.indexOf(a.mobile.dialogHashKey) > -1 && f.initialDst !== e && (e = this._handleDialog(h, c), e === !1) || this._changeContent(this._handleDestination(e), h)
            },
            _changeContent: function (b, c) {
                a.mobile.changePage(b, c)
            },
            _getBase: function () {
                return a.mobile.base
            },
            _getNs: function () {
                return a.mobile.ns
            },
            _enhance: function (a, b) {
                return a.page({
                    role: b
                })
            },
            _include: function (a, b) {
                a.appendTo(this.element), this._enhance(a, b.role), a.page("bindRemove")
            },
            _find: function (b) {
                var c, d = this._createFileUrl(b),
                    e = this._createDataUrl(b),
                    f = this._getInitialContent();
                return c = this.element.children("[data-" + this._getNs() + "url='" + e + "']"), 0 === c.length && e && !a.mobile.path.isPath(e) && (c = this.element.children(a.mobile.path.hashToSelector("#" + e)).attr("data-" + this._getNs() + "url", e).jqmData("url", e)), 0 === c.length && a.mobile.path.isFirstPageUrl(d) && f && f.parent().length && (c = a(f)), c
            },
            _getLoader: function () {
                return a.mobile.loading()
            },
            _showLoading: function (b, c, d, e) {
                this._loadMsg || (this._loadMsg = setTimeout(a.proxy(function () {
                    this._getLoader().loader("show", c, d, e), this._loadMsg = 0
                }, this), b))
            },
            _hideLoading: function () {
                clearTimeout(this._loadMsg), this._loadMsg = 0, this._getLoader().loader("hide")
            },
            _showError: function () {
                this._hideLoading(), this._showLoading(0, a.mobile.pageLoadErrorMessageTheme, a.mobile.pageLoadErrorMessage, !0), setTimeout(a.proxy(this, "_hideLoading"), 1500)
            },
            _parse: function (b, c) {
                var d, e = a("<div></div>");
                return e.get(0).innerHTML = b, d = e.find(":jqmData(role='page'), :jqmData(role='dialog')").first(), d.length || (d = a("<div data-" + this._getNs() + "role='page'>" + (b.split(/<\/?body[^>]*>/gim)[1] || "") + "</div>")), d.attr("data-" + this._getNs() + "url", a.mobile.path.convertUrlToDataUrl(c)).attr("data-" + this._getNs() + "external-page", !0), d
            },
            _setLoadedTitle: function (b, c) {
                var d = c.match(/<title[^>]*>([^<]*)/) && RegExp.$1;
                d && !b.jqmData("title") && (d = a("<div>" + d + "</div>").text(), b.jqmData("title", d))
            },
            _isRewritableBaseTag: function () {
                return a.mobile.dynamicBaseEnabled && !a.support.dynamicBaseTag
            },
            _createDataUrl: function (b) {
                return a.mobile.path.convertUrlToDataUrl(b)
            },
            _createFileUrl: function (b) {
                return a.mobile.path.getFilePath(b)
            },
            _triggerWithDeprecated: function (b, c, d) {
                var e = a.Event("page" + b),
                    f = a.Event(this.widgetName + b);
                return (d || this.element).trigger(e, c), this.element.trigger(f, c), {
                    deprecatedEvent: e,
                    event: f
                }
            },
            _loadSuccess: function (b, c, e, f) {
                var g = this._createFileUrl(b),
                    h = this._createDataUrl(b);
                return a.proxy(function (i, j, k) {
                    var l, m = new RegExp("(<[^>]+\\bdata-" + this._getNs() + "role=[\"']?page[\"']?[^>]*>)"),
                        n = new RegExp("\\bdata-" + this._getNs() + "url=[\"']?([^\"'>]*)[\"']?");
                    m.test(i) && RegExp.$1 && n.test(RegExp.$1) && RegExp.$1 && (g = a.mobile.path.getFilePath(a("<div>" + RegExp.$1 + "</div>").text())), e.prefetch === d && this._getBase().set(g), l = this._parse(i, g), this._setLoadedTitle(l, i), c.xhr = k, c.textStatus = j, c.page = l, c.content = l, this._trigger("load", d, c) && (this._isRewritableBaseTag() && l && this._getBase().rewrite(g, l), this._include(l, e), b.indexOf("&" + a.mobile.subPageUrlKey) > -1 && (l = this.element.children("[data-" + this._getNs() + "url='" + h + "']")), e.showLoadMsg && this._hideLoading(), this.element.trigger("pageload"), f.resolve(b, e, l))
                }, this)
            },
            _loadDefaults: {
                type: "get",
                data: d,
                reloadPage: !1,
                reload: !1,
                role: d,
                showLoadMsg: !1,
                loadMsgDelay: 50
            },
            load: function (b, c) {
                var e, f, g, h, i = c && c.deferred || a.Deferred(),
                    j = a.extend({}, this._loadDefaults, c),
                    k = null,
                    l = a.mobile.path.makeUrlAbsolute(b, this._findBaseWithDefault());
                return j.reload = j.reloadPage, j.data && "get" === j.type && (l = a.mobile.path.addSearchParams(l, j.data), j.data = d), j.data && "post" === j.type && (j.reload = !0), e = this._createFileUrl(l), f = this._createDataUrl(l), k = this._find(l), 0 === k.length && a.mobile.path.isEmbeddedPage(e) && !a.mobile.path.isFirstPageUrl(e) ? void i.reject(l, j) : (this._getBase().reset(), k.length && !j.reload ? (this._enhance(k, j.role), i.resolve(l, j, k), void(j.prefetch || this._getBase().set(b))) : (h = {
                    url: b,
                    absUrl: l,
                    dataUrl: f,
                    deferred: i,
                    options: j
                }, g = this._triggerWithDeprecated("beforeload", h), g.deprecatedEvent.isDefaultPrevented() || g.event.isDefaultPrevented() ? void 0 : (j.showLoadMsg && this._showLoading(j.loadMsgDelay), j.prefetch === d && this._getBase().reset(), a.mobile.allowCrossDomainPages || a.mobile.path.isSameDomain(a.mobile.path.documentUrl, l) ? void a.ajax({
                    url: e,
                    type: j.type,
                    data: j.data,
                    contentType: j.contentType,
                    dataType: "html",
                    success: this._loadSuccess(l, h, j, i),
                    error: this._loadError(l, h, j, i)
                }) : void i.reject(l, j))))
            },
            _loadError: function (b, c, d, e) {
                return a.proxy(function (f, g, h) {
                    this._getBase().set(a.mobile.path.get()), c.xhr = f, c.textStatus = g, c.errorThrown = h;
                    var i = this._triggerWithDeprecated("loadfailed", c);
                    i.deprecatedEvent.isDefaultPrevented() || i.event.isDefaultPrevented() || (d.showLoadMsg && this._showError(), e.reject(b, d))
                }, this)
            },
            _getTransitionHandler: function (b) {
                return b = a.mobile._maybeDegradeTransition(b), a.mobile.transitionHandlers[b] || a.mobile.defaultTransitionHandler
            },
            _triggerCssTransitionEvents: function (b, c, d) {
                var e = !1;
                d = d || "", c && (b[0] === c[0] && (e = !0), this._triggerWithDeprecated(d + "hide", {
                    nextPage: b,
                    samePage: e
                }, c)), this._triggerWithDeprecated(d + "show", {
                    prevPage: c || a("")
                }, b)
            },
            _cssTransition: function (b, c, d) {
                var e, f, g = d.transition,
                    h = d.reverse,
                    i = d.deferred;
                this._triggerCssTransitionEvents(b, c, "before"), this._hideLoading(), e = this._getTransitionHandler(g), f = new e(g, h, b, c).transition(), f.done(function () {
                    i.resolve.apply(i, arguments)
                }), f.done(a.proxy(function () {
                    this._triggerCssTransitionEvents(b, c)
                }, this))
            },
            _releaseTransitionLock: function () {
                f = !1, e.length > 0 && a.mobile.changePage.apply(null, e.pop())
            },
            _removeActiveLinkClass: function (b) {
                a.mobile.removeActiveLinkClass(b)
            },
            _loadUrl: function (b, c, d) {
                d.target = b, d.deferred = a.Deferred(), this.load(b, d), d.deferred.done(a.proxy(function (a, b, d) {
                    f = !1, b.absUrl = c.absUrl, this.transition(d, c, b)
                }, this)), d.deferred.fail(a.proxy(function () {
                    this._removeActiveLinkClass(!0), this._releaseTransitionLock(), this._triggerWithDeprecated("changefailed", c)
                }, this))
            },
            _triggerPageBeforeChange: function (b, c, d) {
                var e = new a.Event("pagebeforechange");
                return a.extend(c, {
                    toPage: b,
                    options: d
                }), c.absUrl = "string" === a.type(b) ? a.mobile.path.makeUrlAbsolute(b, this._findBaseWithDefault()) : d.absUrl, this.element.trigger(e, c), e.isDefaultPrevented() ? !1 : !0
            },
            change: function (b, c) {
                if (f) return void e.unshift(arguments);
                var d = a.extend({}, a.mobile.changePage.defaults, c),
                    g = {};
                d.fromPage = d.fromPage || this.activePage, this._triggerPageBeforeChange(b, g, d) && (b = g.toPage, "string" === a.type(b) ? (f = !0, this._loadUrl(b, g, d)) : this.transition(b, g, d))
            },
            transition: function (b, g, h) {
                var i, j, k, l, m, n, o, p, q, r, s, t, u, v;
                if (f) return void e.unshift([b, h]);
                if (this._triggerPageBeforeChange(b, g, h) && (v = this._triggerWithDeprecated("beforetransition", g), !v.deprecatedEvent.isDefaultPrevented() && !v.event.isDefaultPrevented())) {
                    if (f = !0, b[0] !== a.mobile.firstPage[0] || h.dataUrl || (h.dataUrl = a.mobile.path.documentUrl.hrefNoHash), i = h.fromPage, j = h.dataUrl && a.mobile.path.convertUrlToDataUrl(h.dataUrl) || b.jqmData("url"), k = j, l = a.mobile.path.getFilePath(j), m = a.mobile.navigate.history.getActive(), n = 0 === a.mobile.navigate.history.activeIndex, o = 0, p = c.title, q = ("dialog" === h.role || "dialog" === b.jqmData("role")) && b.jqmData("dialog") !== !0, i && i[0] === b[0] && !h.allowSamePageTransition) return f = !1, this._triggerWithDeprecated("transition", g), this.element.trigger("pagechange", g), void(h.fromHashChange && a.mobile.navigate.history.direct({
                        url: j
                    }));
                    b.page({
                        role: h.role
                    }), h.fromHashChange && (o = "back" === h.direction ? -1 : 1);
                    try {
                        c.activeElement && "body" !== c.activeElement.nodeName.toLowerCase() ? a(c.activeElement).blur() : a("input:focus, textarea:focus, select:focus").blur()
                    } catch (w) {}
                    r = !1, q && m && (m.url && m.url.indexOf(a.mobile.dialogHashKey) > -1 && this.activePage && !this.activePage.hasClass("ui-dialog") && a.mobile.navigate.history.activeIndex > 0 && (h.changeHash = !1, r = !0), j = m.url || "", j += !r && j.indexOf("#") > -1 ? a.mobile.dialogHashKey : "#" + a.mobile.dialogHashKey, 0 === a.mobile.navigate.history.activeIndex && j === a.mobile.navigate.history.initialDst && (j += a.mobile.dialogHashKey)), s = m ? b.jqmData("title") || b.children(":jqmData(role='header')").find(".ui-title").text() : p, s && p === c.title && (p = s), b.jqmData("title") || b.jqmData("title", p), h.transition = h.transition || (o && !n ? m.transition : d) || (q ? a.mobile.defaultDialogTransition : a.mobile.defaultPageTransition), !o && r && (a.mobile.navigate.history.getActive().pageUrl = k), j && !h.fromHashChange && (!a.mobile.path.isPath(j) && j.indexOf("#") < 0 && (j = "#" + j), t = {
                        transition: h.transition,
                        title: p,
                        pageUrl: k,
                        role: h.role
                    }, h.changeHash !== !1 && a.mobile.hashListeningEnabled ? a.mobile.navigate(j, t, !0) : b[0] !== a.mobile.firstPage[0] && a.mobile.navigate.history.add(j, t)), c.title = p, a.mobile.activePage = b, this.activePage = b, h.reverse = h.reverse || 0 > o, u = a.Deferred(), this._cssTransition(b, i, {
                        transition: h.transition,
                        reverse: h.reverse,
                        deferred: u
                    }), u.done(a.proxy(function (c, d, e, f, i) {
                        a.mobile.removeActiveLinkClass(), h.duplicateCachedPage && h.duplicateCachedPage.remove(), i || a.mobile.focusPage(b), this._releaseTransitionLock(), this.element.trigger("pagechange", g), this._triggerWithDeprecated("transition", g)
                    }, this))
                }
            },
            _findBaseWithDefault: function () {
                var b = this.activePage && a.mobile.getClosestBaseUrl(this.activePage);
                return b || a.mobile.path.documentBase.hrefNoHash
            }
        }), a.mobile.navreadyDeferred = a.Deferred();
        var e = [],
            f = !1
    }(a),
    function (a, c) {
        function d(a) {
            for (; a && ("string" != typeof a.nodeName || "a" !== a.nodeName.toLowerCase());) a = a.parentNode;
            return a
        }
        var e = a.Deferred(),
            f = a.mobile.path.documentUrl,
            g = null;
        a.mobile.loadPage = function (b, c) {
            var d;
            return c = c || {}, d = c.pageContainer || a.mobile.pageContainer, c.deferred = a.Deferred(), d.pagecontainer("load", b, c), c.deferred.promise()
        }, a.mobile.back = function () {
            var c = b.navigator;
            this.phonegapNavigationEnabled && c && c.app && c.app.backHistory ? c.app.backHistory() : a.mobile.pageContainer.pagecontainer("back")
        }, a.mobile.focusPage = function (a) {
            var b = a.find("[autofocus]"),
                c = a.find(".ui-title:eq(0)");
            return b.length ? void b.focus() : void(c.length ? c.focus() : a.focus())
        }, a.mobile._maybeDegradeTransition = a.mobile._maybeDegradeTransition || function (a) {
            return a
        }, a.mobile.changePage = function (b, c) {
            a.mobile.pageContainer.pagecontainer("change", b, c)
        }, a.mobile.changePage.defaults = {
            transition: c,
            reverse: !1,
            changeHash: !0,
            fromHashChange: !1,
            role: c,
            duplicateCachedPage: c,
            pageContainer: c,
            showLoadMsg: !0,
            dataUrl: c,
            fromPage: c,
            allowSamePageTransition: !1
        }, a.mobile._registerInternalEvents = function () {
            var e = function (b, c) {
                var d, e, h, i, j = !0;
                return !a.mobile.ajaxEnabled || b.is(":jqmData(ajax='false')") || !b.jqmHijackable().length || b.attr("target") ? !1 : (d = g && g.attr("formaction") || b.attr("action"), i = (b.attr("method") || "get").toLowerCase(), d || (d = a.mobile.getClosestBaseUrl(b), "get" === i && (d = a.mobile.path.parseUrl(d).hrefNoSearch), d === a.mobile.path.documentBase.hrefNoHash && (d = f.hrefNoSearch)), d = a.mobile.path.makeUrlAbsolute(d, a.mobile.getClosestBaseUrl(b)), a.mobile.path.isExternal(d) && !a.mobile.path.isPermittedCrossDomainRequest(f, d) ? !1 : (c || (e = b.serializeArray(), g && g[0].form === b[0] && (h = g.attr("name"), h && (a.each(e, function (a, b) {
                    return b.name === h ? (h = "", !1) : void 0
                }), h && e.push({
                    name: h,
                    value: g.attr("value")
                }))), j = {
                    url: d,
                    options: {
                        type: i,
                        data: a.param(e),
                        transition: b.jqmData("transition"),
                        reverse: "reverse" === b.jqmData("direction"),
                        reloadPage: !0
                    }
                }), j))
            };
            a.mobile.document.delegate("form", "submit", function (b) {
                var c;
                b.isDefaultPrevented() || (c = e(a(this)), c && (a.mobile.changePage(c.url, c.options), b.preventDefault()))
            }), a.mobile.document.bind("vclick", function (b) {
                var c, f, h = b.target,
                    i = !1;
                if (!(b.which > 1) && a.mobile.linkBindingEnabled) {
                    if (g = a(h), a.data(h, "mobile-button")) {
                        if (!e(a(h).closest("form"), !0)) return;
                        h.parentNode && (h = h.parentNode)
                    } else {
                        if (h = d(h), !h || "#" === a.mobile.path.parseUrl(h.getAttribute("href") || "#").hash) return;
                        if (!a(h).jqmHijackable().length) return
                    }~
                    h.className.indexOf("ui-link-inherit") ? h.parentNode && (f = a.data(h.parentNode, "buttonElements")) : f = a.data(h, "buttonElements"), f ? h = f.outer : i = !0, c = a(h), i && (c = c.closest(".ui-btn")), c.length > 0 && !c.hasClass("ui-state-disabled") && (a.mobile.removeActiveLinkClass(!0), a.mobile.activeClickedLink = c, a.mobile.activeClickedLink.addClass(a.mobile.activeBtnClass))
                }
            }), a.mobile.document.bind("click", function (e) {
                if (a.mobile.linkBindingEnabled && !e.isDefaultPrevented()) {
                    var g, h, i, j, k, l, m, n = d(e.target),
                        o = a(n),
                        p = function () {
                            b.setTimeout(function () {
                                a.mobile.removeActiveLinkClass(!0)
                            }, 200)
                        };
                    if (a.mobile.activeClickedLink && a.mobile.activeClickedLink[0] === e.target.parentNode && p(), n && !(e.which > 1) && o.jqmHijackable().length) {
                        if (o.is(":jqmData(rel='back')")) return a.mobile.back(), !1;
                        if (g = a.mobile.getClosestBaseUrl(o), h = a.mobile.path.makeUrlAbsolute(o.attr("href") || "#", g), !a.mobile.ajaxEnabled && !a.mobile.path.isEmbeddedPage(h)) return void p();
                        if (-1 !== h.search("#")) {
                            if (h = h.replace(/[^#]*#/, ""), !h) return void e.preventDefault();
                            h = a.mobile.path.isPath(h) ? a.mobile.path.makeUrlAbsolute(h, g) : a.mobile.path.makeUrlAbsolute("#" + h, f.hrefNoHash)
                        }
                        if (i = o.is("[rel='external']") || o.is(":jqmData(ajax='false')") || o.is("[target]"), j = i || a.mobile.path.isExternal(h) && !a.mobile.path.isPermittedCrossDomainRequest(f, h)) return void p();
                        k = o.jqmData("transition"), l = "reverse" === o.jqmData("direction") || o.jqmData("back"), m = o.attr("data-" + a.mobile.ns + "rel") || c, a.mobile.changePage(h, {
                            transition: k,
                            reverse: l,
                            role: m,
                            link: o
                        }), e.preventDefault()
                    }
                }
            }), a.mobile.document.delegate(".ui-page", "pageshow.prefetch", function () {
                var b = [];
                a(this).find("a:jqmData(prefetch)").each(function () {
                    var c = a(this),
                        d = c.attr("href");
                    d && -1 === a.inArray(d, b) && (b.push(d), a.mobile.loadPage(d, {
                        role: c.attr("data-" + a.mobile.ns + "rel"),
                        prefetch: !0
                    }))
                })
            }), a.mobile.pageContainer.pagecontainer(), a.mobile.document.bind("pageshow", a.mobile.resetActivePageHeight), a.mobile.window.bind("throttledresize", a.mobile.resetActivePageHeight)
        }, a(function () {
            e.resolve()
        }), a.when(e, a.mobile.navreadyDeferred).done(function () {
            a.mobile._registerInternalEvents()
        })
    }(a),
    function (a, b) {
        a.mobile.Transition = function () {
            this.init.apply(this, arguments)
        }, a.extend(a.mobile.Transition.prototype, {
            toPreClass: " ui-page-pre-in",
            init: function (b, c, d, e) {
                a.extend(this, {
                    name: b,
                    reverse: c,
                    $to: d,
                    $from: e,
                    deferred: new a.Deferred
                })
            },
            cleanFrom: function () {
                this.$from.removeClass(a.mobile.activePageClass + " out in reverse " + this.name).height("")
            },
            beforeDoneIn: function () {},
            beforeDoneOut: function () {},
            beforeStartOut: function () {},
            doneIn: function () {
                this.beforeDoneIn(), this.$to.removeClass("out in reverse " + this.name).height(""), this.toggleViewportClass(), a.mobile.window.scrollTop() !== this.toScroll && this.scrollPage(), this.sequential || this.$to.addClass(a.mobile.activePageClass), this.deferred.resolve(this.name, this.reverse, this.$to, this.$from, !0)
            },
            doneOut: function (a, b, c, d) {
                this.beforeDoneOut(), this.startIn(a, b, c, d)
            },
            hideIn: function (a) {
                this.$to.css("z-index", -10), a.call(this), this.$to.css("z-index", "")
            },
            scrollPage: function () {
                a.event.special.scrollstart.enabled = !1, (a.mobile.hideUrlBar || this.toScroll !== a.mobile.defaultHomeScroll) && b.scrollTo(0, this.toScroll), setTimeout(function () {
                    a.event.special.scrollstart.enabled = !0
                }, 150)
            },
            startIn: function (b, c, d, e) {
                this.hideIn(function () {
                    this.$to.addClass(a.mobile.activePageClass + this.toPreClass), e || a.mobile.focusPage(this.$to), this.$to.height(b + this.toScroll), d || this.scrollPage()
                }), this.$to.removeClass(this.toPreClass).addClass(this.name + " in " + c), d ? this.doneIn() : this.$to.animationComplete(a.proxy(function () {
                    this.doneIn()
                }, this))
            },
            startOut: function (b, c, d) {
                this.beforeStartOut(b, c, d), this.$from.height(b + a.mobile.window.scrollTop()).addClass(this.name + " out" + c)
            },
            toggleViewportClass: function () {
                a.mobile.pageContainer.toggleClass("ui-mobile-viewport-transitioning viewport-" + this.name)
            },
            transition: function () {
                var b = this.reverse ? " reverse" : "",
                    c = a.mobile.getScreenHeight(),
                    d = a.mobile.maxTransitionWidth !== !1 && a.mobile.window.width() > a.mobile.maxTransitionWidth,
                    e = !a.support.cssTransitions || !a.support.cssAnimations || d || !this.name || "none" === this.name || Math.max(a.mobile.window.scrollTop(), this.toScroll) > a.mobile.getMaxScrollForTransition();
                return this.toScroll = a.mobile.navigate.history.getActive().lastScroll || a.mobile.defaultHomeScroll, this.toggleViewportClass(), this.$from && !e ? this.startOut(c, b, e) : this.doneOut(c, b, e, !0), this.deferred.promise()
            }
        })
    }(a, this),
    function (a) {
        a.mobile.SerialTransition = function () {
            this.init.apply(this, arguments)
        }, a.extend(a.mobile.SerialTransition.prototype, a.mobile.Transition.prototype, {
            sequential: !0,
            beforeDoneOut: function () {
                this.$from && this.cleanFrom()
            },
            beforeStartOut: function (b, c, d) {
                this.$from.animationComplete(a.proxy(function () {
                    this.doneOut(b, c, d)
                }, this))
            }
        })
    }(a),
    function (a) {
        a.mobile.ConcurrentTransition = function () {
            this.init.apply(this, arguments)
        }, a.extend(a.mobile.ConcurrentTransition.prototype, a.mobile.Transition.prototype, {
            sequential: !1,
            beforeDoneIn: function () {
                this.$from && this.cleanFrom()
            },
            beforeStartOut: function (a, b, c) {
                this.doneOut(a, b, c)
            }
        })
    }(a),
    function (a) {
        var b = function () {
            return 3 * a.mobile.getScreenHeight()
        };
        a.mobile.transitionHandlers = {
            sequential: a.mobile.SerialTransition,
            simultaneous: a.mobile.ConcurrentTransition
        }, a.mobile.defaultTransitionHandler = a.mobile.transitionHandlers.sequential, a.mobile.transitionFallbacks = {}, a.mobile._maybeDegradeTransition = function (b) {
            return b && !a.support.cssTransform3d && a.mobile.transitionFallbacks[b] && (b = a.mobile.transitionFallbacks[b]), b
        }, a.mobile.getMaxScrollForTransition = a.mobile.getMaxScrollForTransition || b
    }(a),
    function (a) {
        a.mobile.transitionFallbacks.flip = "fade"
    }(a, this),
    function (a) {
        a.mobile.transitionFallbacks.flow = "fade"
    }(a, this),
    function (a) {
        a.mobile.transitionFallbacks.pop = "fade"
    }(a, this),
    function (a) {
        a.mobile.transitionHandlers.slide = a.mobile.transitionHandlers.simultaneous, a.mobile.transitionFallbacks.slide = "fade"
    }(a, this),
    function (a) {
        a.mobile.transitionFallbacks.slidedown = "fade"
    }(a, this),
    function (a) {
        a.mobile.transitionFallbacks.slidefade = "fade"
    }(a, this),
    function (a) {
        a.mobile.transitionFallbacks.slideup = "fade"
    }(a, this),
    function (a) {
        a.mobile.transitionFallbacks.turn = "fade"
    }(a, this),
    function (a) {
        a.mobile.degradeInputs = {
            color: !1,
            date: !1,
            datetime: !1,
            "datetime-local": !1,
            email: !1,
            month: !1,
            number: !1,
            range: "number",
            search: "text",
            tel: !1,
            time: !1,
            url: !1,
            week: !1
        }, a.mobile.page.prototype.options.degradeInputs = a.mobile.degradeInputs, a.mobile.degradeInputsWithin = function (b) {
            b = a(b), b.find("input").not(a.mobile.page.prototype.keepNativeSelector()).each(function () {
                var b, c, d, e, f = a(this),
                    g = this.getAttribute("type"),
                    h = a.mobile.degradeInputs[g] || "text";
                a.mobile.degradeInputs[g] && (b = a("<div>").html(f.clone()).html(), c = b.indexOf(" type=") > -1, d = c ? /\s+type=["']?\w+['"]?/ : /\/?>/, e = ' type="' + h + '" data-' + a.mobile.ns + 'type="' + g + '"' + (c ? "" : ">"), f.replaceWith(b.replace(d, e)))
            })
        }
    }(a),
    function (a, b, c) {
        a.widget("mobile.page", a.mobile.page, {
            options: {
                closeBtn: "left",
                closeBtnText: "Close",
                overlayTheme: "a",
                corners: !0,
                dialog: !1
            },
            _create: function () {
                this._super(), this.options.dialog && (a.extend(this, {
                    _inner: this.element.children(),
                    _headerCloseButton: null
                }), this.options.enhanced || this._setCloseBtn(this.options.closeBtn))
            },
            _enhance: function () {
                this._super(), this.options.dialog && this.element.addClass("ui-dialog").wrapInner(a("<div/>", {
                    role: "dialog",
                    "class": "ui-dialog-contain ui-overlay-shadow" + (this.options.corners ? " ui-corner-all" : "")
                }))
            },
            _setOptions: function (b) {
                var d, e, f = this.options;
                b.corners !== c && this._inner.toggleClass("ui-corner-all", !! b.corners), b.overlayTheme !== c && a.mobile.activePage[0] === this.element[0] && (f.overlayTheme = b.overlayTheme, this._handlePageBeforeShow()), b.closeBtnText !== c && (d = f.closeBtn, e = b.closeBtnText), b.closeBtn !== c && (d = b.closeBtn), d && this._setCloseBtn(d, e), this._super(b)
            },
            _handlePageBeforeShow: function () {
                this.options.overlayTheme && this.options.dialog ? (this.removeContainerBackground(), this.setContainerBackground(this.options.overlayTheme)) : this._super()
            },
            _setCloseBtn: function (b, c) {
                var d, e = this._headerCloseButton;
                b = "left" === b ? "left" : "right" === b ? "right" : "none", "none" === b ? e && (e.remove(), e = null) : e ? (e.removeClass("ui-btn-left ui-btn-right").addClass("ui-btn-" + b), c && e.text(c)) : (d = this._inner.find(":jqmData(role='header')").first(), e = a("<a></a>", {
                    href: "#",
                    "class": "ui-btn ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-" + b
                }).attr("data-" + a.mobile.ns + "rel", "back").text(c || this.options.closeBtnText || "").prependTo(d)), this._headerCloseButton = e
            }
        })
    }(a, this),
    function (a, b, c) {
        a.widget("mobile.dialog", {
            options: {
                closeBtn: "left",
                closeBtnText: "Close",
                overlayTheme: "a",
                corners: !0
            },
            _handlePageBeforeShow: function () {
                this._isCloseable = !0, this.options.overlayTheme && this.element.page("removeContainerBackground").page("setContainerBackground", this.options.overlayTheme)
            },
            _handlePageBeforeHide: function () {
                this._isCloseable = !1
            },
            _handleVClickSubmit: function (b) {
                var c, d = a(b.target).closest("vclick" === b.type ? "a" : "form");
                d.length && !d.jqmData("transition") && (c = {}, c["data-" + a.mobile.ns + "transition"] = (a.mobile.navigate.history.getActive() || {}).transition || a.mobile.defaultDialogTransition, c["data-" + a.mobile.ns + "direction"] = "reverse", d.attr(c))
            },
            _create: function () {
                var b = this.element,
                    c = this.options;
                b.addClass("ui-dialog").wrapInner(a("<div/>", {
                    role: "dialog",
                    "class": "ui-dialog-contain ui-overlay-shadow" + (c.corners ? " ui-corner-all" : "")
                })), a.extend(this, {
                    _isCloseable: !1,
                    _inner: b.children(),
                    _headerCloseButton: null
                }), this._on(b, {
                    vclick: "_handleVClickSubmit",
                    submit: "_handleVClickSubmit",
                    pagebeforeshow: "_handlePageBeforeShow",
                    pagebeforehide: "_handlePageBeforeHide"
                }), this._setCloseBtn(c.closeBtn)
            },
            _setOptions: function (b) {
                var d, e, f = this.options;
                b.corners !== c && this._inner.toggleClass("ui-corner-all", !! b.corners), b.overlayTheme !== c && a.mobile.activePage[0] === this.element[0] && (f.overlayTheme = b.overlayTheme, this._handlePageBeforeShow()), b.closeBtnText !== c && (d = f.closeBtn, e = b.closeBtnText), b.closeBtn !== c && (d = b.closeBtn), d && this._setCloseBtn(d, e), this._super(b)
            },
            _setCloseBtn: function (b, c) {
                var d, e = this._headerCloseButton;
                b = "left" === b ? "left" : "right" === b ? "right" : "none", "none" === b ? e && (e.remove(), e = null) : e ? (e.removeClass("ui-btn-left ui-btn-right").addClass("ui-btn-" + b), c && e.text(c)) : (d = this._inner.find(":jqmData(role='header')").first(), e = a("<a></a>", {
                    role: "button",
                    href: "#",
                    "class": "ui-btn ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-" + b
                }).text(c || this.options.closeBtnText || "").prependTo(d), this._on(e, {
                    click: "close"
                })), this._headerCloseButton = e
            },
            close: function () {
                var b = a.mobile.navigate.history;
                this._isCloseable && (this._isCloseable = !1, a.mobile.hashListeningEnabled && b.activeIndex > 0 ? a.mobile.back() : a.mobile.pageContainer.pagecontainer("back"))
            }
        })
    }(a, this),
    function (a, b) {
        var c = /([A-Z])/g,
            d = function (a) {
                return "ui-btn-icon-" + (null === a ? "left" : a)
            };
        a.widget("mobile.collapsible", {
            options: {
                enhanced: !1,
                expandCueText: null,
                collapseCueText: null,
                collapsed: !0,
                heading: "h1,h2,h3,h4,h5,h6,legend",
                collapsedIcon: null,
                expandedIcon: null,
                iconpos: null,
                theme: null,
                contentTheme: null,
                inset: null,
                corners: null,
                mini: null
            },
            _create: function () {
                var b = this.element,
                    c = {
                        accordion: b.closest(":jqmData(role='collapsible-set'),:jqmData(role='collapsibleset')" + (a.mobile.collapsibleset ? ", :mobile-collapsibleset" : "")).addClass("ui-collapsible-set")
                    };
                this._ui = c, this._renderedOptions = this._getOptions(this.options), this.options.enhanced ? (c.heading = a(".ui-collapsible-heading", this.element[0]), c.content = c.heading.next(), c.anchor = a("a", c.heading[0]).first(), c.status = c.anchor.children(".ui-collapsible-heading-status")) : this._enhance(b, c), this._on(c.heading, {
                    tap: function () {
                        c.heading.find("a").first().addClass(a.mobile.activeBtnClass)
                    },
                    click: function (a) {
                        this._handleExpandCollapse(!c.heading.hasClass("ui-collapsible-heading-collapsed")), a.preventDefault(), a.stopPropagation()
                    }
                })
            },
            _getOptions: function (b) {
                var d, e = this._ui.accordion,
                    f = this._ui.accordionWidget;
                b = a.extend({}, b), e.length && !f && (this._ui.accordionWidget = f = e.data("mobile-collapsibleset"));
                for (d in b) b[d] = null != b[d] ? b[d] : f ? f.options[d] : e.length ? a.mobile.getAttribute(e[0], d.replace(c, "-$1").toLowerCase()) : null, null == b[d] && (b[d] = a.mobile.collapsible.defaults[d]);
                return b
            },
            _themeClassFromOption: function (a, b) {
                return b ? "none" === b ? "" : a + b : ""
            },
            _enhance: function (b, c) {
                var e, f = this._renderedOptions,
                    g = this._themeClassFromOption("ui-body-", f.contentTheme);
                return b.addClass("ui-collapsible " + (f.inset ? "ui-collapsible-inset " : "") + (f.inset && f.corners ? "ui-corner-all " : "") + (g ? "ui-collapsible-themed-content " : "")), c.originalHeading = b.children(this.options.heading).first(), c.content = b.wrapInner("<div class='ui-collapsible-content " + g + "'></div>").children(".ui-collapsible-content"), c.heading = c.originalHeading, c.heading.is("legend") && (c.heading = a("<div role='heading'>" + c.heading.html() + "</div>"), c.placeholder = a("<div><!-- placeholder for legend --></div>").insertBefore(c.originalHeading), c.originalHeading.remove()), e = f.collapsed ? f.collapsedIcon ? "ui-icon-" + f.collapsedIcon : "" : f.expandedIcon ? "ui-icon-" + f.expandedIcon : "", c.status = a("<span class='ui-collapsible-heading-status'></span>"), c.anchor = c.heading.detach().addClass("ui-collapsible-heading").append(c.status).wrapInner("<a href='#' class='ui-collapsible-heading-toggle'></a>").find("a").first().addClass("ui-btn " + (e ? e + " " : "") + (e ? d(f.iconpos) + " " : "") + this._themeClassFromOption("ui-btn-", f.theme) + " " + (f.mini ? "ui-mini " : "")), c.heading.insertBefore(c.content), this._handleExpandCollapse(this.options.collapsed), c
            },
            refresh: function () {
                this._applyOptions(this.options), this._renderedOptions = this._getOptions(this.options)
            },
            _applyOptions: function (a) {
                var c, e, f, g, h = this.element,
                    i = this._renderedOptions,
                    j = this._ui,
                    k = j.anchor,
                    l = j.status,
                    m = this._getOptions(a);
                a.collapsed !== b && this._handleExpandCollapse(a.collapsed), c = h.hasClass("ui-collapsible-collapsed"), c ? (m.expandCueText !== b && l.text(m.expandCueText), m.collapsedIcon !== b && (i.collapsedIcon && k.removeClass("ui-icon-" + i.collapsedIcon), m.collapsedIcon && k.addClass("ui-icon-" + m.collapsedIcon))) : (m.collapseCueText !== b && l.text(m.collapseCueText), m.expandedIcon !== b && (i.expandedIcon && k.removeClass("ui-icon-" + i.expandedIcon), m.expandedIcon && k.addClass("ui-icon-" + m.expandedIcon))), m.iconpos !== b && k.removeClass(d(i.iconpos)).addClass(d(m.iconpos)), m.theme !== b && (f = this._themeClassFromOption("ui-btn-", i.theme), e = this._themeClassFromOption("ui-btn-", m.theme), k.removeClass(f).addClass(e)), m.contentTheme !== b && (f = this._themeClassFromOption("ui-body-", i.contentTheme), e = this._themeClassFromOption("ui-body-", m.contentTheme), j.content.removeClass(f).addClass(e)), m.inset !== b && (h.toggleClass("ui-collapsible-inset", m.inset), g = !(!m.inset || !m.corners && !i.corners)), m.corners !== b && (g = !(!m.corners || !m.inset && !i.inset)), g !== b && h.toggleClass("ui-corner-all", g), m.mini !== b && k.toggleClass("ui-mini", m.mini)
            },
            _setOptions: function (a) {
                this._applyOptions(a), this._super(a), this._renderedOptions = this._getOptions(this.options)
            },
            _handleExpandCollapse: function (b) {
                var c = this._renderedOptions,
                    d = this._ui;
                d.status.text(b ? c.expandCueText : c.collapseCueText), d.heading.toggleClass("ui-collapsible-heading-collapsed", b).find("a").first().toggleClass("ui-icon-" + c.expandedIcon, !b).toggleClass("ui-icon-" + c.collapsedIcon, b || c.expandedIcon === c.collapsedIcon).removeClass(a.mobile.activeBtnClass), this.element.toggleClass("ui-collapsible-collapsed", b), d.content.toggleClass("ui-collapsible-content-collapsed", b).attr("aria-hidden", b).trigger("updatelayout"), this.options.collapsed = b, this._trigger(b ? "collapse" : "expand")
            },
            expand: function () {
                this._handleExpandCollapse(!1)
            },
            collapse: function () {
                this._handleExpandCollapse(!0)
            },
            _destroy: function () {
                var a = this._ui,
                    b = this.options;
                b.enhanced || (a.placeholder ? (a.originalHeading.insertBefore(a.placeholder), a.placeholder.remove(), a.heading.remove()) : (a.status.remove(), a.heading.removeClass("ui-collapsible-heading ui-collapsible-heading-collapsed").children().contents().unwrap()), a.anchor.contents().unwrap(), a.content.contents().unwrap(), this.element.removeClass("ui-collapsible ui-collapsible-collapsed ui-collapsible-themed-content ui-collapsible-inset ui-corner-all"))
            }
        }), a.mobile.collapsible.defaults = {
            expandCueText: " click to expand contents",
            collapseCueText: " click to collapse contents",
            collapsedIcon: "plus",
            contentTheme: "inherit",
            expandedIcon: "minus",
            iconpos: "left",
            inset: !0,
            corners: !0,
            theme: "inherit",
            mini: !1
        }
    }(a),
    function (a) {
        a.mobile.behaviors.addFirstLastClasses = {
            _getVisibles: function (a, b) {
                var c;
                return b ? c = a.not(".ui-screen-hidden") : (c = a.filter(":visible"), 0 === c.length && (c = a.not(".ui-screen-hidden"))), c
            },
            _addFirstLastClasses: function (a, b, c) {
                a.removeClass("ui-first-child ui-last-child"), b.eq(0).addClass("ui-first-child").end().last().addClass("ui-last-child"), c || this.element.trigger("updatelayout")
            },
            _removeFirstLastClasses: function (a) {
                a.removeClass("ui-first-child ui-last-child")
            }
        }
    }(a),
    function (a, b) {
        var c = ":mobile-collapsible, " + a.mobile.collapsible.initSelector;
        a.widget("mobile.collapsibleset", a.extend({
            initSelector: ":jqmData(role='collapsible-set'),:jqmData(role='collapsibleset')",
            options: a.extend({
                enhanced: !1
            }, a.mobile.collapsible.defaults),
            _handleCollapsibleExpand: function (b) {
                var c = a(b.target).closest(".ui-collapsible");
                c.parent().is(":mobile-collapsibleset, :jqmData(role='collapsible-set')") && c.siblings(".ui-collapsible:not(.ui-collapsible-collapsed)").collapsible("collapse")
            },
            _create: function () {
                var b = this.element,
                    c = this.options;
                a.extend(this, {
                    _classes: ""
                }), c.enhanced || (b.addClass("ui-collapsible-set " + this._themeClassFromOption("ui-group-theme-", c.theme) + " " + (c.corners && c.inset ? "ui-corner-all " : "")), this.element.find(a.mobile.collapsible.initSelector).collapsible()), this._on(b, {
                    collapsibleexpand: "_handleCollapsibleExpand"
                })
            },
            _themeClassFromOption: function (a, b) {
                return b ? "none" === b ? "" : a + b : ""
            },
            _init: function () {
                this._refresh(!0), this.element.children(c).filter(":jqmData(collapsed='false')").collapsible("expand")
            },
            _setOptions: function (a) {
                var c, d, e = this.element,
                    f = this._themeClassFromOption("ui-group-theme-", a.theme);
                return f && e.removeClass(this._themeClassFromOption("ui-group-theme-", this.options.theme)).addClass(f), a.inset !== b && (d = !(!a.inset || !a.corners && !this.options.corners)), a.corners !== b && (d = !(!a.corners || !a.inset && !this.options.inset)), d !== b && e.toggleClass("ui-corner-all", d), c = this._super(a), this.element.children(":mobile-collapsible").collapsible("refresh"), c
            },
            _destroy: function () {
                var a = this.element;
                this._removeFirstLastClasses(a.children(c)), a.removeClass("ui-collapsible-set ui-corner-all " + this._themeClassFromOption("ui-group-theme-", this.options.theme)).children(":mobile-collapsible").collapsible("destroy")
            },
            _refresh: function (b) {
                var d = this.element.children(c);
                this.element.find(a.mobile.collapsible.initSelector).not(".ui-collapsible").collapsible(), this._addFirstLastClasses(d, this._getVisibles(d, b), b)
            },
            refresh: function () {
                this._refresh(!1)
            }
        }, a.mobile.behaviors.addFirstLastClasses))
    }(a),
    function (a) {
        a.fn.fieldcontain = function () {
            return this.addClass("ui-field-contain")
        }
    }(a),
    function (a) {
        a.fn.grid = function (b) {
            return this.each(function () {
                var c, d, e = a(this),
                    f = a.extend({
                        grid: null
                    }, b),
                    g = e.children(),
                    h = {
                        solo: 1,
                        a: 2,
                        b: 3,
                        c: 4,
                        d: 5
                    }, i = f.grid;
                if (!i)
                    if (g.length <= 5)
                        for (d in h) h[d] === g.length && (i = d);
                    else i = "a", e.addClass("ui-grid-duo");
                c = h[i], e.addClass("ui-grid-" + i), g.filter(":nth-child(" + c + "n+1)").addClass("ui-block-a"), c > 1 && g.filter(":nth-child(" + c + "n+2)").addClass("ui-block-b"), c > 2 && g.filter(":nth-child(" + c + "n+3)").addClass("ui-block-c"), c > 3 && g.filter(":nth-child(" + c + "n+4)").addClass("ui-block-d"), c > 4 && g.filter(":nth-child(" + c + "n+5)").addClass("ui-block-e")
            })
        }
    }(a),
    function (a, b) {
        a.widget("mobile.navbar", {
            options: {
                iconpos: "top",
                grid: null
            },
            _create: function () {
                var d = this.element,
                    e = d.find("a"),
                    f = e.filter(":jqmData(icon)").length ? this.options.iconpos : b;
                d.addClass("ui-navbar").attr("role", "navigation").find("ul").jqmEnhanceable().grid({
                    grid: this.options.grid
                }), e.each(function () {
                    var b = a.mobile.getAttribute(this, "icon"),
                        c = a.mobile.getAttribute(this, "theme"),
                        d = "ui-btn";
                    c && (d += " ui-btn-" + c), b && (d += " ui-icon-" + b + " ui-btn-icon-" + f), a(this).addClass(d)
                }), d.delegate("a", "vclick", function () {
                    var b = a(this);
                    b.hasClass("ui-state-disabled") || b.hasClass("ui-disabled") || b.hasClass(a.mobile.activeBtnClass) || (e.removeClass(a.mobile.activeBtnClass), b.addClass(a.mobile.activeBtnClass), a(c).one("pagehide", function () {
                        b.removeClass(a.mobile.activeBtnClass)
                    }))
                }), d.closest(".ui-page").bind("pagebeforeshow", function () {
                    e.filter(".ui-state-persist").addClass(a.mobile.activeBtnClass)
                })
            }
        })
    }(a),
    function (a) {
        var b = a.mobile.getAttribute;
        a.widget("mobile.listview", a.extend({
            options: {
                theme: null,
                countTheme: null,
                dividerTheme: null,
                icon: "carat-r",
                splitIcon: "carat-r",
                splitTheme: null,
                corners: !0,
                shadow: !0,
                inset: !1
            },
            _create: function () {
                var a = this,
                    b = "";
                b += a.options.inset ? " ui-listview-inset" : "", a.options.inset && (b += a.options.corners ? " ui-corner-all" : "", b += a.options.shadow ? " ui-shadow" : ""), a.element.addClass(" ui-listview" + b), a.refresh(!0)
            },
            _findFirstElementByTagName: function (a, b, c, d) {
                var e = {};
                for (e[c] = e[d] = !0; a;) {
                    if (e[a.nodeName]) return a;
                    a = a[b]
                }
                return null
            },
            _addThumbClasses: function (b) {
                var c, d, e = b.length;
                for (c = 0; e > c; c++) d = a(this._findFirstElementByTagName(b[c].firstChild, "nextSibling", "img", "IMG")), d.length && a(this._findFirstElementByTagName(d[0].parentNode, "parentNode", "li", "LI")).addClass(d.hasClass("ui-li-icon") ? "ui-li-has-icon" : "ui-li-has-thumb")
            },
            _getChildrenByTagName: function (b, c, d) {
                var e = [],
                    f = {};
                for (f[c] = f[d] = !0, b = b.firstChild; b;) f[b.nodeName] && e.push(b), b = b.nextSibling;
                return a(e)
            },
            _beforeListviewRefresh: a.noop,
            _afterListviewRefresh: a.noop,
            refresh: function (c) {
                var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x = this.options,
                    y = this.element,
                    z = !! a.nodeName(y[0], "ol"),
                    A = y.attr("start"),
                    B = {}, C = y.find(".ui-li-count"),
                    D = b(y[0], "counttheme") || this.options.countTheme,
                    E = D ? "ui-body-" + D : "ui-body-inherit";
                for (x.theme && y.addClass("ui-group-theme-" + x.theme), z && (A || 0 === A) && (n = parseInt(A, 10) - 1, y.css("counter-reset", "listnumbering " + n)), this._beforeListviewRefresh(), w = this._getChildrenByTagName(y[0], "li", "LI"), e = 0, f = w.length; f > e; e++) g = w.eq(e), h = "", (c || g[0].className.search(/\bui-li-static\b|\bui-li-divider\b/) < 0) && (l = this._getChildrenByTagName(g[0], "a", "A"), m = "list-divider" === b(g[0], "role"), p = g.attr("value"), i = b(g[0], "theme"), l.length && l[0].className.search(/\bui-btn\b/) < 0 && !m ? (j = b(g[0], "icon"), k = j === !1 ? !1 : j || x.icon, l.removeClass("ui-link"), d = "ui-btn", i && (d += " ui-btn-" + i), l.length > 1 ? (h = "ui-li-has-alt", q = l.last(), r = b(q[0], "theme") || x.splitTheme || b(g[0], "theme", !0), s = r ? " ui-btn-" + r : "", t = b(q[0], "icon") || b(g[0], "icon") || x.splitIcon, u = "ui-btn ui-btn-icon-notext ui-icon-" + t + s, q.attr("title", a.trim(q.getEncodedText())).addClass(u).empty()) : k && (d += " ui-btn-icon-right ui-icon-" + k), l.first().addClass(d)) : m ? (v = b(g[0], "theme") || x.dividerTheme || x.theme, h = "ui-li-divider ui-bar-" + (v ? v : "inherit"), g.attr("role", "heading")) : l.length <= 0 && (h = "ui-li-static ui-body-" + (i ? i : "inherit")), z && p && (o = parseInt(p, 10) - 1, g.css("counter-reset", "listnumbering " + o))), B[h] || (B[h] = []), B[h].push(g[0]);
                for (h in B) a(B[h]).addClass(h);
                C.each(function () {
                    a(this).closest("li").addClass("ui-li-has-count")
                }), E && C.addClass(E), this._addThumbClasses(w), this._addThumbClasses(w.find(".ui-btn")), this._afterListviewRefresh(), this._addFirstLastClasses(w, this._getVisibles(w, c), c)
            }
        }, a.mobile.behaviors.addFirstLastClasses))
    }(a),
    function (a) {
        function b(b) {
            var c = a.trim(b.text()) || null;
            return c ? c = c.slice(0, 1).toUpperCase() : null
        }
        a.widget("mobile.listview", a.mobile.listview, {
            options: {
                autodividers: !1,
                autodividersSelector: b
            },
            _beforeListviewRefresh: function () {
                this.options.autodividers && (this._replaceDividers(), this._superApply(arguments))
            },
            _replaceDividers: function () {
                var b, d, e, f, g, h = null,
                    i = this.element;
                for (i.children("li:jqmData(role='list-divider')").remove(), d = i.children("li"), b = 0; b < d.length; b++) e = d[b], f = this.options.autodividersSelector(a(e)), f && h !== f && (g = c.createElement("li"), g.appendChild(c.createTextNode(f)), g.setAttribute("data-" + a.mobile.ns + "role", "list-divider"), e.parentNode.insertBefore(g, e)), h = f
            }
        })
    }(a),
    function (a) {
        var b = /(^|\s)ui-li-divider($|\s)/,
            c = /(^|\s)ui-screen-hidden($|\s)/;
        a.widget("mobile.listview", a.mobile.listview, {
            options: {
                hideDividers: !1
            },
            _afterListviewRefresh: function () {
                var a, d, e, f = !0;
                if (this._superApply(arguments), this.options.hideDividers)
                    for (a = this._getChildrenByTagName(this.element[0], "li", "LI"), d = a.length - 1; d > -1; d--) e = a[d], e.className.match(b) ? (f && (e.className = e.className + " ui-screen-hidden"), f = !0) : e.className.match(c) || (f = !1)
            }
        })
    }(a),
    function (a) {
        a.mobile.nojs = function (b) {
            a(":jqmData(role='nojs')", b).addClass("ui-nojs")
        }
    }(a),
    function (a) {
        a.mobile.behaviors.formReset = {
            _handleFormReset: function () {
                this._on(this.element.closest("form"), {
                    reset: function () {
                        this._delay("_reset")
                    }
                })
            }
        }
    }(a),
    function (a, b) {
        a.widget("mobile.checkboxradio", a.extend({
            initSelector: "input:not( :jqmData(role='flipswitch' ) )[type='checkbox'],input[type='radio']:not( :jqmData(role='flipswitch' ))",
            options: {
                theme: "inherit",
                mini: !1,
                wrapperClass: null,
                enhanced: !1,
                iconpos: "left"
            },
            _create: function () {
                var b = this.element,
                    c = this.options,
                    d = function (a, b) {
                        return a.jqmData(b) || a.closest("form, fieldset").jqmData(b)
                    }, e = b.closest("label"),
                    f = e.length ? e : b.closest("form, fieldset, :jqmData(role='page'), :jqmData(role='dialog')").find("label").filter("[for='" + a.mobile.path.hashToSelector(b[0].id) + "']").first(),
                    g = b[0].type,
                    h = "ui-" + g + "-on",
                    i = "ui-" + g + "-off";
                ("checkbox" === g || "radio" === g) && (this.element[0].disabled && (this.options.disabled = !0), c.iconpos = d(b, "iconpos") || f.attr("data-" + a.mobile.ns + "iconpos") || c.iconpos, c.mini = d(b, "mini") || c.mini, a.extend(this, {
                        input: b,
                        label: f,
                        parentLabel: e,
                        inputtype: g,
                        checkedClass: h,
                        uncheckedClass: i
                    }), this.options.enhanced || this._enhance(), this._on(f, {
                        vmouseover: "_handleLabelVMouseOver",
                        vclick: "_handleLabelVClick"
                    }), this._on(b, {
                        vmousedown: "_cacheVals",
                        vclick: "_handleInputVClick",
                        focus: "_handleInputFocus",
                        blur: "_handleInputBlur"
                    }), this._handleFormReset(), this.refresh())
            },
            _enhance: function () {
                this.label.addClass("ui-btn ui-corner-all"), this.parentLabel.length > 0 ? this.input.add(this.label).wrapAll(this._wrapper()) : (this.element.wrap(this._wrapper()), this.element.parent().prepend(this.label)), this._setOptions({
                    theme: this.options.theme,
                    iconpos: this.options.iconpos,
                    mini: this.options.mini
                })
            },
            _wrapper: function () {
                return a("<div class='" + (this.options.wrapperClass ? this.options.wrapperClass : "") + " ui-" + this.inputtype + (this.options.disabled ? " ui-state-disabled" : "") + "' ></div>")
            },
            _handleInputFocus: function () {
                this.label.addClass(a.mobile.focusClass)
            },
            _handleInputBlur: function () {
                this.label.removeClass(a.mobile.focusClass)
            },
            _handleInputVClick: function () {
                var a = this.element;
                a.is(":checked") ? (a.prop("checked", !0), this._getInputSet().not(a).prop("checked", !1)) : a.prop("checked", !1), this._updateAll()
            },
            _handleLabelVMouseOver: function (a) {
                this.label.parent().hasClass("ui-state-disabled") && a.stopPropagation()
            },
            _handleLabelVClick: function (a) {
                var b = this.element;
                return b.is(":disabled") ? void a.preventDefault() : (this._cacheVals(), b.prop("checked", "radio" === this.inputtype && !0 || !b.prop("checked")), b.triggerHandler("click"), this._getInputSet().not(b).prop("checked", !1), this._updateAll(), !1)
            },
            _cacheVals: function () {
                this._getInputSet().each(function () {
                    a(this).attr("data-" + a.mobile.ns + "cacheVal", this.checked)
                })
            },
            _getInputSet: function () {
                return "checkbox" === this.inputtype ? this.element : this.element.closest("form, :jqmData(role='page'), :jqmData(role='dialog')").find("input[name='" + this.element[0].name + "'][type='" + this.inputtype + "']")
            },
            _updateAll: function () {
                var b = this;
                this._getInputSet().each(function () {
                    var c = a(this);
                    (this.checked || "checkbox" === b.inputtype) && c.trigger("change")
                }).checkboxradio("refresh")
            },
            _reset: function () {
                this.refresh()
            },
            _hasIcon: function () {
                var b, c, d = a.mobile.controlgroup;
                return d && (b = this.element.closest(":mobile-controlgroup," + d.prototype.initSelector), b.length > 0) ? (c = a.data(b[0], "mobile-controlgroup"), "horizontal" !== (c ? c.options.type : b.attr("data-" + a.mobile.ns + "type"))) : !0
            },
            refresh: function () {
                var b = this._hasIcon(),
                    c = this.element[0].checked,
                    d = a.mobile.activeBtnClass,
                    e = "ui-btn-icon-" + this.options.iconpos,
                    f = [],
                    g = [];
                b ? (g.push(d), f.push(e)) : (g.push(e), (c ? f : g).push(d)), c ? (f.push(this.checkedClass), g.push(this.uncheckedClass)) : (f.push(this.uncheckedClass), g.push(this.checkedClass)), this.label.addClass(f.join(" ")).removeClass(g.join(" "))
            },
            widget: function () {
                return this.label.parent()
            },
            _setOptions: function (a) {
                var c = this.label,
                    d = this.options,
                    e = this.widget(),
                    f = this._hasIcon();
                a.disabled !== b && (this.input.prop("disabled", !! a.disabled), e.toggleClass("ui-state-disabled", !! a.disabled)), a.mini !== b && e.toggleClass("ui-mini", !! a.mini), a.theme !== b && c.removeClass("ui-btn-" + d.theme).addClass("ui-btn-" + a.theme), a.wrapperClass !== b && e.removeClass(d.wrapperClass).addClass(a.wrapperClass), a.iconpos !== b && f ? c.removeClass("ui-btn-icon-" + d.iconpos).addClass("ui-btn-icon-" + a.iconpos) : f || c.removeClass("ui-btn-icon-" + d.iconpos), this._super(a)
            }
        }, a.mobile.behaviors.formReset))
    }(a),
    function (a, b) {
        a.widget("mobile.button", {
            initSelector: "input[type='button'], input[type='submit'], input[type='reset']",
            options: {
                theme: null,
                icon: null,
                iconpos: "left",
                iconshadow: !1,
                corners: !0,
                shadow: !0,
                inline: null,
                mini: null,
                wrapperClass: null,
                enhanced: !1
            },
            _create: function () {
                this.element.is(":disabled") && (this.options.disabled = !0), this.options.enhanced || this._enhance(), a.extend(this, {
                    wrapper: this.element.parent()
                }), this._on({
                    focus: function () {
                        this.widget().addClass(a.mobile.focusClass)
                    },
                    blur: function () {
                        this.widget().removeClass(a.mobile.focusClass)
                    }
                }), this.refresh(!0)
            },
            _enhance: function () {
                this.element.wrap(this._button())
            },
            _button: function () {
                var b = this.options,
                    c = this._getIconClasses(this.options);
                return a("<div class='ui-btn ui-input-btn" + (b.wrapperClass ? " " + b.wrapperClass : "") + (b.theme ? " ui-btn-" + b.theme : "") + (b.corners ? " ui-corner-all" : "") + (b.shadow ? " ui-shadow" : "") + (b.inline ? " ui-btn-inline" : "") + (b.mini ? " ui-mini" : "") + (b.disabled ? " ui-state-disabled" : "") + (c ? " " + c : "") + "' >" + this.element.val() + "</div>")
            },
            widget: function () {
                return this.wrapper
            },
            _destroy: function () {
                this.element.insertBefore(this.button), this.button.remove()
            },
            _getIconClasses: function (a) {
                return a.icon ? "ui-icon-" + a.icon + (a.iconshadow ? " ui-shadow-icon" : "") + " ui-btn-icon-" + a.iconpos : ""
            },
            _setOptions: function (c) {
                var d = this.widget();
                c.theme !== b && d.removeClass(this.options.theme).addClass("ui-btn-" + c.theme), c.corners !== b && d.toggleClass("ui-corner-all", c.corners), c.shadow !== b && d.toggleClass("ui-shadow", c.shadow), c.inline !== b && d.toggleClass("ui-btn-inline", c.inline), c.mini !== b && d.toggleClass("ui-mini", c.mini), c.disabled !== b && (this.element.prop("disabled", c.disabled), d.toggleClass("ui-state-disabled", c.disabled)), (c.icon !== b || c.iconshadow !== b || c.iconpos !== b) && d.removeClass(this._getIconClasses(this.options)).addClass(this._getIconClasses(a.extend({}, this.options, c))), this._super(c)
            },
            refresh: function (b) {
                if (this.options.icon && "notext" === this.options.iconpos && this.element.attr("title") && this.element.attr("title", this.element.val()), !b) {
                    var c = this.element.detach();
                    a(this.wrapper).text(this.element.val()).append(c)
                }
            }
        })
    }(a),
    function (a) {
        var b = a("meta[name=viewport]"),
            c = b.attr("content"),
            d = c + ",maximum-scale=1, user-scalable=no",
            e = c + ",maximum-scale=10, user-scalable=yes",
            f = /(user-scalable[\s]*=[\s]*no)|(maximum-scale[\s]*=[\s]*1)[$,\s]/.test(c);
        a.mobile.zoom = a.extend({}, {
            enabled: !f,
            locked: !1,
            disable: function (c) {
                f || a.mobile.zoom.locked || (b.attr("content", d), a.mobile.zoom.enabled = !1, a.mobile.zoom.locked = c || !1)
            },
            enable: function (c) {
                f || a.mobile.zoom.locked && c !== !0 || (b.attr("content", e), a.mobile.zoom.enabled = !0, a.mobile.zoom.locked = !1)
            },
            restore: function () {
                f || (b.attr("content", c), a.mobile.zoom.enabled = !0)
            }
        })
    }(a),
    function (a, b) {
        a.widget("mobile.textinput", {
            initSelector: "input[type='text'],input[type='search'],:jqmData(type='search'),input[type='number'],:jqmData(type='number'),input[type='password'],input[type='email'],input[type='url'],input[type='tel'],textarea,input[type='time'],input[type='date'],input[type='month'],input[type='week'],input[type='datetime'],input[type='datetime-local'],input[type='color'],input:not([type]),input[type='file']",
            options: {
                theme: null,
                corners: !0,
                mini: !1,
                preventFocusZoom: /iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1,
                wrapperClass: "",
                enhanced: !1
            },
            _create: function () {
                var b = this.options,
                    c = this.element.is("[type='search'], :jqmData(type='search')"),
                    d = "TEXTAREA" === this.element[0].tagName,
                    e = this.element.is("[data-" + (a.mobile.ns || "") + "type='range']"),
                    f = (this.element.is("input") || this.element.is("[data-" + (a.mobile.ns || "") + "type='search']")) && !e;
                this.element.prop("disabled") && (b.disabled = !0), a.extend(this, {
                    classes: this._classesFromOptions(),
                    isSearch: c,
                    isTextarea: d,
                    isRange: e,
                    inputNeedsWrap: f
                }), this._autoCorrect(), b.enhanced || this._enhance(), this._on({
                    focus: "_handleFocus",
                    blur: "_handleBlur"
                })
            },
            refresh: function () {
                this.setOptions({
                    disabled: this.element.is(":disabled")
                })
            },
            _enhance: function () {
                var a = [];
                this.isTextarea && a.push("ui-input-text"), (this.isTextarea || this.isRange) && a.push("ui-shadow-inset"), this.inputNeedsWrap ? this.element.wrap(this._wrap()) : a = a.concat(this.classes), this.element.addClass(a.join(" "))
            },
            widget: function () {
                return this.inputNeedsWrap ? this.element.parent() : this.element
            },
            _classesFromOptions: function () {
                var a = this.options,
                    b = [];
                return b.push("ui-body-" + (null === a.theme ? "inherit" : a.theme)), a.corners && b.push("ui-corner-all"), a.mini && b.push("ui-mini"), a.disabled && b.push("ui-state-disabled"), a.wrapperClass && b.push(a.wrapperClass), b
            },
            _wrap: function () {
                return a("<div class='" + (this.isSearch ? "ui-input-search " : "ui-input-text ") + this.classes.join(" ") + " ui-shadow-inset'></div>")
            },
            _autoCorrect: function () {
                "undefined" == typeof this.element[0].autocorrect || a.support.touchOverflow || (this.element[0].setAttribute("autocorrect", "off"), this.element[0].setAttribute("autocomplete", "off"))
            },
            _handleBlur: function () {
                this.widget().removeClass(a.mobile.focusClass), this.options.preventFocusZoom && a.mobile.zoom.enable(!0)
            },
            _handleFocus: function () {
                this.options.preventFocusZoom && a.mobile.zoom.disable(!0), this.widget().addClass(a.mobile.focusClass)
            },
            _setOptions: function (a) {
                var c = this.widget();
                this._super(a), (a.disabled !== b || a.mini !== b || a.corners !== b || a.theme !== b || a.wrapperClass !== b) && (c.removeClass(this.classes.join(" ")), this.classes = this._classesFromOptions(), c.addClass(this.classes.join(" "))), a.disabled !== b && this.element.prop("disabled", !! a.disabled)
            },
            _destroy: function () {
                this.options.enhanced || (this.inputNeedsWrap && this.element.unwrap(), this.element.removeClass("ui-input-text " + this.classes.join(" ")))
            }
        })
    }(a),
    function (a, d) {
        a.widget("mobile.slider", a.extend({
            initSelector: "input[type='range'], :jqmData(type='range'), :jqmData(role='slider')",
            widgetEventPrefix: "slide",
            options: {
                theme: null,
                trackTheme: null,
                corners: !0,
                mini: !1,
                highlight: !1
            },
            _create: function () {
                var e, f, g, h, i, j, k, l, m, n, o = this,
                    p = this.element,
                    q = this.options.trackTheme || a.mobile.getAttribute(p[0], "theme"),
                    r = q ? " ui-bar-" + q : " ui-bar-inherit",
                    s = this.options.corners || p.jqmData("corners") ? " ui-corner-all" : "",
                    t = this.options.mini || p.jqmData("mini") ? " ui-mini" : "",
                    u = p[0].nodeName.toLowerCase(),
                    v = "select" === u,
                    w = p.parent().is(":jqmData(role='rangeslider')"),
                    x = v ? "ui-slider-switch" : "",
                    y = p.attr("id"),
                    z = a("[for='" + y + "']"),
                    A = z.attr("id") || y + "-label",
                    B = v ? 0 : parseFloat(p.attr("min")),
                    C = v ? p.find("option").length - 1 : parseFloat(p.attr("max")),
                    D = b.parseFloat(p.attr("step") || 1),
                    E = c.createElement("a"),
                    F = a(E),
                    G = c.createElement("div"),
                    H = a(G),
                    I = this.options.highlight && !v ? function () {
                        var b = c.createElement("div");
                        return b.className = "ui-slider-bg " + a.mobile.activeBtnClass, a(b).prependTo(H)
                    }() : !1;
                if (z.attr("id", A), this.isToggleSwitch = v, E.setAttribute("href", "#"), G.setAttribute("role", "application"), G.className = [this.isToggleSwitch ? "ui-slider ui-slider-track ui-shadow-inset " : "ui-slider-track ui-shadow-inset ", x, r, s, t].join(""), E.className = "ui-slider-handle", G.appendChild(E), F.attr({
                    role: "slider",
                    "aria-valuemin": B,
                    "aria-valuemax": C,
                    "aria-valuenow": this._value(),
                    "aria-valuetext": this._value(),
                    title: this._value(),
                    "aria-labelledby": A
                }), a.extend(this, {
                    slider: H,
                    handle: F,
                    control: p,
                    type: u,
                    step: D,
                    max: C,
                    min: B,
                    valuebg: I,
                    isRangeslider: w,
                    dragging: !1,
                    beforeStart: null,
                    userModified: !1,
                    mouseMoved: !1
                }), v) {
                    for (k = p.attr("tabindex"), k && F.attr("tabindex", k), p.attr("tabindex", "-1").focus(function () {
                        a(this).blur(), F.focus()
                    }), f = c.createElement("div"), f.className = "ui-slider-inneroffset", g = 0, h = G.childNodes.length; h > g; g++) f.appendChild(G.childNodes[g]);
                    for (G.appendChild(f), F.addClass("ui-slider-handle-snapping"), e = p.find("option"), i = 0, j = e.length; j > i; i++) l = i ? "a" : "b", m = i ? " " + a.mobile.activeBtnClass : "", n = c.createElement("span"), n.className = ["ui-slider-label ui-slider-label-", l, m].join(""), n.setAttribute("role", "img"), n.appendChild(c.createTextNode(e[i].innerHTML)), a(n).prependTo(H);
                    o._labels = a(".ui-slider-label", H)
                }
                p.addClass(v ? "ui-slider-switch" : "ui-slider-input"), this._on(p, {
                    change: "_controlChange",
                    keyup: "_controlKeyup",
                    blur: "_controlBlur",
                    vmouseup: "_controlVMouseUp"
                }), H.bind("vmousedown", a.proxy(this._sliderVMouseDown, this)).bind("vclick", !1), this._on(c, {
                    vmousemove: "_preventDocumentDrag"
                }), this._on(H.add(c), {
                    vmouseup: "_sliderVMouseUp"
                }), H.insertAfter(p), v || w || (f = this.options.mini ? "<div class='ui-slider ui-mini'>" : "<div class='ui-slider'>", p.add(H).wrapAll(f)), this._on(this.handle, {
                    vmousedown: "_handleVMouseDown",
                    keydown: "_handleKeydown",
                    keyup: "_handleKeyup"
                }), this.handle.bind("vclick", !1), this._handleFormReset(), this.refresh(d, d, !0)
            },
            _setOptions: function (a) {
                a.theme !== d && this._setTheme(a.theme), a.trackTheme !== d && this._setTrackTheme(a.trackTheme), a.corners !== d && this._setCorners(a.corners), a.mini !== d && this._setMini(a.mini), a.highlight !== d && this._setHighlight(a.highlight), a.disabled !== d && this._setDisabled(a.disabled), this._super(a)
            },
            _controlChange: function (a) {
                return this._trigger("controlchange", a) === !1 ? !1 : void(this.mouseMoved || this.refresh(this._value(), !0))
            },
            _controlKeyup: function () {
                this.refresh(this._value(), !0, !0)
            },
            _controlBlur: function () {
                this.refresh(this._value(), !0)
            },
            _controlVMouseUp: function () {
                this._checkedRefresh()
            },
            _handleVMouseDown: function () {
                this.handle.focus()
            },
            _handleKeydown: function (b) {
                var c = this._value();
                if (!this.options.disabled) {
                    switch (b.keyCode) {
                    case a.mobile.keyCode.HOME:
                    case a.mobile.keyCode.END:
                    case a.mobile.keyCode.PAGE_UP:
                    case a.mobile.keyCode.PAGE_DOWN:
                    case a.mobile.keyCode.UP:
                    case a.mobile.keyCode.RIGHT:
                    case a.mobile.keyCode.DOWN:
                    case a.mobile.keyCode.LEFT:
                        b.preventDefault(), this._keySliding || (this._keySliding = !0, this.handle.addClass("ui-state-active"))
                    }
                    switch (b.keyCode) {
                    case a.mobile.keyCode.HOME:
                        this.refresh(this.min);
                        break;
                    case a.mobile.keyCode.END:
                        this.refresh(this.max);
                        break;
                    case a.mobile.keyCode.PAGE_UP:
                    case a.mobile.keyCode.UP:
                    case a.mobile.keyCode.RIGHT:
                        this.refresh(c + this.step);
                        break;
                    case a.mobile.keyCode.PAGE_DOWN:
                    case a.mobile.keyCode.DOWN:
                    case a.mobile.keyCode.LEFT:
                        this.refresh(c - this.step)
                    }
                }
            },
            _handleKeyup: function () {
                this._keySliding && (this._keySliding = !1, this.handle.removeClass("ui-state-active"))
            },
            _sliderVMouseDown: function (a) {
                return this.options.disabled || 1 !== a.which && 0 !== a.which && a.which !== d ? !1 : this._trigger("beforestart", a) === !1 ? !1 : (this.dragging = !0, this.userModified = !1, this.mouseMoved = !1, this.isToggleSwitch && (this.beforeStart = this.element[0].selectedIndex), this.refresh(a), this._trigger("start"), !1)
            },
            _sliderVMouseUp: function () {
                return this.dragging ? (this.dragging = !1, this.isToggleSwitch && (this.handle.addClass("ui-slider-handle-snapping"), this.refresh(this.mouseMoved ? this.userModified ? 0 === this.beforeStart ? 1 : 0 : this.beforeStart : 0 === this.beforeStart ? 1 : 0)), this.mouseMoved = !1, this._trigger("stop"), !1) : void 0
            },
            _preventDocumentDrag: function (a) {
                return this._trigger("drag", a) === !1 ? !1 : this.dragging && !this.options.disabled ? (this.mouseMoved = !0, this.isToggleSwitch && this.handle.removeClass("ui-slider-handle-snapping"), this.refresh(a), this.userModified = this.beforeStart !== this.element[0].selectedIndex, !1) : void 0
            },
            _checkedRefresh: function () {
                this.value !== this._value() && this.refresh(this._value())
            },
            _value: function () {
                return this.isToggleSwitch ? this.element[0].selectedIndex : parseFloat(this.element.val())
            },
            _reset: function () {
                this.refresh(d, !1, !0)
            },
            refresh: function (b, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z = this,
                    A = a.mobile.getAttribute(this.element[0], "theme"),
                    B = this.options.theme || A,
                    C = B ? " ui-btn-" + B : "",
                    D = this.options.trackTheme || A,
                    E = D ? " ui-bar-" + D : " ui-bar-inherit",
                    F = this.options.corners ? " ui-corner-all" : "",
                    G = this.options.mini ? " ui-mini" : "";
                if (z.slider[0].className = [this.isToggleSwitch ? "ui-slider ui-slider-switch ui-slider-track ui-shadow-inset" : "ui-slider-track ui-shadow-inset", E, F, G].join(""), (this.options.disabled || this.element.prop("disabled")) && this.disable(), this.value = this._value(), this.options.highlight && !this.isToggleSwitch && 0 === this.slider.find(".ui-slider-bg").length && (this.valuebg = function () {
                    var b = c.createElement("div");
                    return b.className = "ui-slider-bg " + a.mobile.activeBtnClass, a(b).prependTo(z.slider)
                }()), this.handle.addClass("ui-btn" + C + " ui-shadow"), l = this.element, m = !this.isToggleSwitch, n = m ? [] : l.find("option"), o = m ? parseFloat(l.attr("min")) : 0, p = m ? parseFloat(l.attr("max")) : n.length - 1, q = m && parseFloat(l.attr("step")) > 0 ? parseFloat(l.attr("step")) : 1, "object" == typeof b) {
                    if (h = b, i = 8, f = this.slider.offset().left, g = this.slider.width(), j = g / ((p - o) / q), !this.dragging || h.pageX < f - i || h.pageX > f + g + i) return;
                    k = j > 1 ? (h.pageX - f) / g * 100 : Math.round((h.pageX - f) / g * 100)
                } else null == b && (b = m ? parseFloat(l.val() || 0) : l[0].selectedIndex), k = (parseFloat(b) - o) / (p - o) * 100; if (!isNaN(k) && (r = k / 100 * (p - o) + o, s = (r - o) % q, t = r - s, 2 * Math.abs(s) >= q && (t += s > 0 ? q : -q), u = 100 / ((p - o) / q), r = parseFloat(t.toFixed(5)), "undefined" == typeof j && (j = g / ((p - o) / q)), j > 1 && m && (k = (r - o) * u * (1 / q)), 0 > k && (k = 0), k > 100 && (k = 100), o > r && (r = o), r > p && (r = p), this.handle.css("left", k + "%"), this.handle[0].setAttribute("aria-valuenow", m ? r : n.eq(r).attr("value")), this.handle[0].setAttribute("aria-valuetext", m ? r : n.eq(r).getEncodedText()), this.handle[0].setAttribute("title", m ? r : n.eq(r).getEncodedText()), this.valuebg && this.valuebg.css("width", k + "%"), this._labels && (v = this.handle.width() / this.slider.width() * 100, w = k && v + (100 - v) * k / 100, x = 100 === k ? 0 : Math.min(v + 100 - w, 100), this._labels.each(function () {
                    var b = a(this).hasClass("ui-slider-label-a");
                    a(this).width((b ? w : x) + "%")
                })), !e)) {
                    if (y = !1, m ? (y = l.val() !== r, l.val(r)) : (y = l[0].selectedIndex !== r, l[0].selectedIndex = r), this._trigger("beforechange", b) === !1) return !1;
                    !d && y && l.trigger("change")
                }
            },
            _setHighlight: function (a) {
                a = !! a, a ? (this.options.highlight = !! a, this.refresh()) : this.valuebg && (this.valuebg.remove(), this.valuebg = !1)
            },
            _setTheme: function (a) {
                this.handle.removeClass("ui-btn-" + this.options.theme).addClass("ui-btn-" + a);
                var b = this.options.theme ? this.options.theme : "inherit",
                    c = a ? a : "inherit";
                this.control.removeClass("ui-body-" + b).addClass("ui-body-" + c)
            },
            _setTrackTheme: function (a) {
                var b = this.options.trackTheme ? this.options.trackTheme : "inherit",
                    c = a ? a : "inherit";
                this.slider.removeClass("ui-body-" + b).addClass("ui-body-" + c)
            },
            _setMini: function (a) {
                a = !! a, this.isToggleSwitch || this.isRangeslider || (this.slider.parent().toggleClass("ui-mini", a), this.element.toggleClass("ui-mini", a)), this.slider.toggleClass("ui-mini", a)
            },
            _setCorners: function (a) {
                this.slider.toggleClass("ui-corner-all", a), this.isToggleSwitch || this.control.toggleClass("ui-corner-all", a)
            },
            _setDisabled: function (a) {
                a = !! a, this.element.prop("disabled", a), this.slider.toggleClass("ui-state-disabled", a).attr("aria-disabled", a)
            }
        }, a.mobile.behaviors.formReset))
    }(a),
    function (a) {
        function b() {
            return c || (c = a("<div></div>", {
                "class": "ui-slider-popup ui-shadow ui-corner-all"
            })), c.clone()
        }
        var c;
        a.widget("mobile.slider", a.mobile.slider, {
            options: {
                popupEnabled: !1,
                showValue: !1
            },
            _create: function () {
                this._super(), a.extend(this, {
                    _currentValue: null,
                    _popup: null,
                    _popupVisible: !1
                }), this._setOption("popupEnabled", this.options.popupEnabled), this._on(this.handle, {
                    vmousedown: "_showPopup"
                }), this._on(this.slider.add(this.document), {
                    vmouseup: "_hidePopup"
                }), this._refresh()
            },
            _positionPopup: function () {
                var a = this.handle.offset();
                this._popup.offset({
                    left: a.left + (this.handle.width() - this._popup.width()) / 2,
                    top: a.top - this._popup.outerHeight() - 5
                })
            },
            _setOption: function (a, c) {
                this._super(a, c), "showValue" === a ? this.handle.html(c && !this.options.mini ? this._value() : "") : "popupEnabled" === a && c && !this._popup && (this._popup = b().addClass("ui-body-" + (this.options.theme || "a")).hide().insertBefore(this.element))
            },
            refresh: function () {
                this._super.apply(this, arguments), this._refresh()
            },
            _refresh: function () {
                var a, b = this.options;
                b.popupEnabled && this.handle.removeAttr("title"), a = this._value(), a !== this._currentValue && (this._currentValue = a, b.popupEnabled && this._popup ? (this._positionPopup(), this._popup.html(a)) : b.showValue && !this.options.mini && this.handle.html(a))
            },
            _showPopup: function () {
                this.options.popupEnabled && !this._popupVisible && (this.handle.html(""), this._popup.show(), this._positionPopup(), this._popupVisible = !0)
            },
            _hidePopup: function () {
                var a = this.options;
                a.popupEnabled && this._popupVisible && (a.showValue && !a.mini && this.handle.html(this._value()), this._popup.hide(), this._popupVisible = !1)
            }
        })
    }(a),
    function (a, b) {
        a.widget("mobile.flipswitch", a.extend({
            options: {
                onText: "On",
                offText: "Off",
                theme: null,
                enhanced: !1,
                wrapperClass: null,
                corners: !0,
                mini: !1
            },
            _create: function () {
                this.options.enhanced ? a.extend(this, {
                    flipswitch: this.element.parent(),
                    on: this.element.find(".ui-flipswitch-on").eq(0),
                    off: this.element.find(".ui-flipswitch-off").eq(0),
                    type: this.element.get(0).tagName
                }) : this._enhance(), this._handleFormReset(), this._originalTabIndex = this.element.attr("tabindex"), null != this._originalTabIndex && this.on.attr("tabindex", this._originalTabIndex), this.element.attr("tabindex", "-1"), this._on({
                    focus: "_handleInputFocus"
                }), this.element.is(":disabled") && this._setOptions({
                    disabled: !0
                }), this._on(this.flipswitch, {
                    click: "_toggle",
                    swipeleft: "_left",
                    swiperight: "_right"
                }), this._on(this.on, {
                    keydown: "_keydown"
                }), this._on({
                    change: "refresh"
                })
            },
            _handleInputFocus: function () {
                this.on.focus()
            },
            widget: function () {
                return this.flipswitch
            },
            _left: function () {
                this.flipswitch.removeClass("ui-flipswitch-active"), "SELECT" === this.type ? this.element.get(0).selectedIndex = 0 : this.element.prop("checked", !1), this.element.trigger("change")
            },
            _right: function () {
                this.flipswitch.addClass("ui-flipswitch-active"), "SELECT" === this.type ? this.element.get(0).selectedIndex = 1 : this.element.prop("checked", !0), this.element.trigger("change")
            },
            _enhance: function () {
                var b = a("<div>"),
                    c = this.options,
                    d = this.element,
                    e = c.theme ? c.theme : "inherit",
                    f = a("<a></a>", {
                        href: "#"
                    }),
                    g = a("<span></span>"),
                    h = d.get(0).tagName,
                    i = "INPUT" === h ? c.onText : d.find("option").eq(1).text(),
                    j = "INPUT" === h ? c.offText : d.find("option").eq(0).text();
                f.addClass("ui-flipswitch-on ui-btn ui-shadow ui-btn-inherit").text(i), g.addClass("ui-flipswitch-off").text(j), b.addClass("ui-flipswitch ui-shadow-inset ui-bar-" + e + " " + (c.wrapperClass ? c.wrapperClass : "") + " " + (d.is(":checked") || d.find("option").eq(1).is(":selected") ? "ui-flipswitch-active" : "") + (d.is(":disabled") ? " ui-state-disabled" : "") + (c.corners ? " ui-corner-all" : "") + (c.mini ? " ui-mini" : "")).append(f, g), d.addClass("ui-flipswitch-input").after(b).appendTo(b), a.extend(this, {
                    flipswitch: b,
                    on: f,
                    off: g,
                    type: h
                })
            },
            _reset: function () {
                this.refresh()
            },
            refresh: function () {
                var a, b = this.flipswitch.hasClass("ui-flipswitch-active") ? "_right" : "_left";
                a = "SELECT" === this.type ? this.element.get(0).selectedIndex > 0 ? "_right" : "_left" : this.element.prop("checked") ? "_right" : "_left", a !== b && this[a]()
            },
            _toggle: function () {
                var a = this.flipswitch.hasClass("ui-flipswitch-active") ? "_left" : "_right";
                this[a]()
            },
            _keydown: function (b) {
                b.which === a.mobile.keyCode.LEFT ? this._left() : b.which === a.mobile.keyCode.RIGHT ? this._right() : b.which === a.mobile.keyCode.SPACE && (this._toggle(), b.preventDefault())
            },
            _setOptions: function (a) {
                if (a.theme !== b) {
                    var c = a.theme ? a.theme : "inherit",
                        d = a.theme ? a.theme : "inherit";
                    this.widget().removeClass("ui-bar-" + c).addClass("ui-bar-" + d)
                }
                a.onText !== b && this.on.text(a.onText), a.offText !== b && this.off.text(a.offText), a.disabled !== b && this.widget().toggleClass("ui-state-disabled", a.disabled), a.mini !== b && this.widget().toggleClass("ui-mini", a.mini), a.corners !== b && this.widget().toggleClass("ui-corner-all", a.corners), this._super(a)
            },
            _destroy: function () {
                this.options.enhanced || (null != this._originalTabIndex ? this.element.attr("tabindex", this._originalTabIndex) : this.element.removeAttr("tabindex"), this.on.remove(), this.off.remove(), this.element.unwrap(), this.flipswitch.remove(), this.removeClass("ui-flipswitch-input"))
            }
        }, a.mobile.behaviors.formReset))
    }(a),
    function (a, b) {
        a.widget("mobile.rangeslider", a.extend({
            options: {
                theme: null,
                trackTheme: null,
                corners: !0,
                mini: !1,
                highlight: !0
            },
            _create: function () {
                var b = this.element,
                    c = this.options.mini ? "ui-rangeslider ui-mini" : "ui-rangeslider",
                    d = b.find("input").first(),
                    e = b.find("input").last(),
                    f = b.find("label").first(),
                    g = a.data(d.get(0), "mobile-slider") || a.data(d.slider().get(0), "mobile-slider"),
                    h = a.data(e.get(0), "mobile-slider") || a.data(e.slider().get(0), "mobile-slider"),
                    i = g.slider,
                    j = h.slider,
                    k = g.handle,
                    l = a("<div class='ui-rangeslider-sliders' />").appendTo(b);
                d.addClass("ui-rangeslider-first"), e.addClass("ui-rangeslider-last"), b.addClass(c), i.appendTo(l), j.appendTo(l), f.insertBefore(b), k.prependTo(j), a.extend(this, {
                    _inputFirst: d,
                    _inputLast: e,
                    _sliderFirst: i,
                    _sliderLast: j,
                    _label: f,
                    _targetVal: null,
                    _sliderTarget: !1,
                    _sliders: l,
                    _proxy: !1
                }), this.refresh(), this._on(this.element.find("input.ui-slider-input"), {
                    slidebeforestart: "_slidebeforestart",
                    slidestop: "_slidestop",
                    slidedrag: "_slidedrag",
                    slidebeforechange: "_change",
                    blur: "_change",
                    keyup: "_change"
                }), this._on({
                    mousedown: "_change"
                }), this._on(this.element.closest("form"), {
                    reset: "_handleReset"
                }), this._on(k, {
                    vmousedown: "_dragFirstHandle"
                })
            },
            _handleReset: function () {
                var a = this;
                setTimeout(function () {
                    a._updateHighlight()
                }, 0)
            },
            _dragFirstHandle: function (b) {
                return a.data(this._inputFirst.get(0), "mobile-slider").dragging = !0, a.data(this._inputFirst.get(0), "mobile-slider").refresh(b), !1
            },
            _slidedrag: function (b) {
                var c = a(b.target).is(this._inputFirst),
                    d = c ? this._inputLast : this._inputFirst;
                return this._sliderTarget = !1, "first" === this._proxy && c || "last" === this._proxy && !c ? (a.data(d.get(0), "mobile-slider").dragging = !0, a.data(d.get(0), "mobile-slider").refresh(b), !1) : void 0
            },
            _slidestop: function (b) {
                var c = a(b.target).is(this._inputFirst);
                this._proxy = !1, this.element.find("input").trigger("vmouseup"), this._sliderFirst.css("z-index", c ? 1 : "")
            },
            _slidebeforestart: function (b) {
                this._sliderTarget = !1, a(b.originalEvent.target).hasClass("ui-slider-track") && (this._sliderTarget = !0, this._targetVal = a(b.target).val())
            },
            _setOptions: function (a) {
                a.theme !== b && this._setTheme(a.theme), a.trackTheme !== b && this._setTrackTheme(a.trackTheme), a.mini !== b && this._setMini(a.mini), a.highlight !== b && this._setHighlight(a.highlight), this._super(a), this.refresh()
            },
            refresh: function () {
                var a = this.element,
                    b = this.options;
                (this._inputFirst.is(":disabled") || this._inputLast.is(":disabled")) && (this.options.disabled = !0), a.find("input").slider({
                        theme: b.theme,
                        trackTheme: b.trackTheme,
                        disabled: b.disabled,
                        corners: b.corners,
                        mini: b.mini,
                        highlight: b.highlight
                    }).slider("refresh"), this._updateHighlight()
            },
            _change: function (b) {
                if ("keyup" === b.type) return this._updateHighlight(), !1;
                var c = this,
                    d = parseFloat(this._inputFirst.val(), 10),
                    e = parseFloat(this._inputLast.val(), 10),
                    f = a(b.target).hasClass("ui-rangeslider-first"),
                    g = f ? this._inputFirst : this._inputLast,
                    h = f ? this._inputLast : this._inputFirst;
                if (this._inputFirst.val() > this._inputLast.val() && "mousedown" === b.type && !a(b.target).hasClass("ui-slider-handle")) g.blur();
                else if ("mousedown" === b.type) return;
                return d > e && !this._sliderTarget ? (g.val(f ? e : d).slider("refresh"), this._trigger("normalize")) : d > e && (g.val(this._targetVal).slider("refresh"), setTimeout(function () {
                    h.val(f ? d : e).slider("refresh"), a.data(h.get(0), "mobile-slider").handle.focus(), c._sliderFirst.css("z-index", f ? "" : 1), c._trigger("normalize")
                }, 0), this._proxy = f ? "first" : "last"), d === e ? (a.data(g.get(0), "mobile-slider").handle.css("z-index", 1), a.data(h.get(0), "mobile-slider").handle.css("z-index", 0)) : (a.data(h.get(0), "mobile-slider").handle.css("z-index", ""), a.data(g.get(0), "mobile-slider").handle.css("z-index", "")), this._updateHighlight(), d >= e ? !1 : void 0
            },
            _updateHighlight: function () {
                var b = parseInt(a.data(this._inputFirst.get(0), "mobile-slider").handle.get(0).style.left, 10),
                    c = parseInt(a.data(this._inputLast.get(0), "mobile-slider").handle.get(0).style.left, 10),
                    d = c - b;
                this.element.find(".ui-slider-bg").css({
                    "margin-left": b + "%",
                    width: d + "%"
                })
            },
            _setTheme: function (a) {
                this._inputFirst.slider("option", "theme", a), this._inputLast.slider("option", "theme", a)
            },
            _setTrackTheme: function (a) {
                this._inputFirst.slider("option", "trackTheme", a), this._inputLast.slider("option", "trackTheme", a)
            },
            _setMini: function (a) {
                this._inputFirst.slider("option", "mini", a), this._inputLast.slider("option", "mini", a), this.element.toggleClass("ui-mini", !! a)
            },
            _setHighlight: function (a) {
                this._inputFirst.slider("option", "highlight", a), this._inputLast.slider("option", "highlight", a)
            },
            _destroy: function () {
                this._label.prependTo(this.element), this.element.removeClass("ui-rangeslider ui-mini"), this._inputFirst.after(this._sliderFirst), this._inputLast.after(this._sliderLast), this._sliders.remove(), this.element.find("input").removeClass("ui-rangeslider-first ui-rangeslider-last").slider("destroy")
            }
        }, a.mobile.behaviors.formReset))
    }(a),
    function (a, b) {
        a.widget("mobile.textinput", a.mobile.textinput, {
            options: {
                clearBtn: !1,
                clearBtnText: "Clear text"
            },
            _create: function () {
                this._super(), (this.options.clearBtn || this.isSearch) && this._addClearBtn()
            },
            clearButton: function () {
                return a("<a href='#' class='ui-input-clear ui-btn ui-icon-delete ui-btn-icon-notext ui-corner-all' title='" + this.options.clearBtnText + "'>" + this.options.clearBtnText + "</a>")
            },
            _clearBtnClick: function (a) {
                this.element.val("").focus().trigger("change"), this._clearBtn.addClass("ui-input-clear-hidden"), a.preventDefault()
            },
            _addClearBtn: function () {
                this.options.enhanced || this._enhanceClear(), a.extend(this, {
                    _clearBtn: this.widget().find("a.ui-input-clear")
                }), this._bindClearEvents(), this._toggleClear()
            },
            _enhanceClear: function () {
                this.clearButton().appendTo(this.widget()), this.widget().addClass("ui-input-has-clear")
            },
            _bindClearEvents: function () {
                this._on(this._clearBtn, {
                    click: "_clearBtnClick"
                }), this._on({
                    keyup: "_toggleClear",
                    change: "_toggleClear",
                    input: "_toggleClear",
                    focus: "_toggleClear",
                    blur: "_toggleClear",
                    cut: "_toggleClear",
                    paste: "_toggleClear"
                })
            },
            _unbindClear: function () {
                this._off(this._clearBtn, "click"), this._off(this.element, "keyup change input focus blur cut paste")
            },
            _setOptions: function (a) {
                this._super(a), a.clearBtn === b || this.element.is("textarea, :jqmData(type='range')") || (a.clearBtn ? this._addClearBtn() : this._destroyClear()), a.clearBtnText !== b && this._clearBtn !== b && this._clearBtn.text(a.clearBtnText).attr("title", a.clearBtnText)
            },
            _toggleClear: function () {
                this._delay("_toggleClearClass", 0)
            },
            _toggleClearClass: function () {
                this._clearBtn.toggleClass("ui-input-clear-hidden", !this.element.val())
            },
            _destroyClear: function () {
                this.widget().removeClass("ui-input-has-clear"), this._unbindClear(), this._clearBtn.remove()
            },
            _destroy: function () {
                this._super(), this._destroyClear()
            }
        })
    }(a),
    function (a, b) {
        a.widget("mobile.textinput", a.mobile.textinput, {
            options: {
                autogrow: !0,
                keyupTimeoutBuffer: 100
            },
            _create: function () {
                this._super(), this.options.autogrow && this.isTextarea && this._autogrow()
            },
            _autogrow: function () {
                this.element.addClass("ui-textinput-autogrow"), this._on({
                    keyup: "_timeout",
                    change: "_timeout",
                    input: "_timeout",
                    paste: "_timeout"
                }), this._on(!0, this.document, {
                    pageshow: "_handleShow",
                    popupbeforeposition: "_handleShow",
                    updatelayout: "_handleShow",
                    panelopen: "_handleShow"
                })
            },
            _handleShow: function (b) {
                a.contains(b.target, this.element[0]) && this.element.is(":visible") && ("popupbeforeposition" !== b.type && this.element.addClass("ui-textinput-autogrow-resize").animationComplete(a.proxy(function () {
                    this.element.removeClass("ui-textinput-autogrow-resize")
                }, this), "transition"), this._timeout())
            },
            _unbindAutogrow: function () {
                this.element.removeClass("ui-textinput-autogrow"), this._off(this.element, "keyup change input paste"), this._off(this.document, "pageshow popupbeforeposition updatelayout panelopen")
            },
            keyupTimeout: null,
            _prepareHeightUpdate: function (a) {
                this.keyupTimeout && clearTimeout(this.keyupTimeout), a === b ? this._updateHeight() : this.keyupTimeout = this._delay("_updateHeight", a)
            },
            _timeout: function () {
                this._prepareHeightUpdate(this.options.keyupTimeoutBuffer)
            },
            _updateHeight: function () {
                var a, b, c, d, e, f, g, h, i, j = this.window.scrollTop();
                this.keyupTimeout = 0, "onpage" in this.element[0] || this.element.css({
                    height: 0,
                    "min-height": 0,
                    "max-height": 0
                }), d = this.element[0].scrollHeight, e = this.element[0].clientHeight, f = parseFloat(this.element.css("border-top-width")), g = parseFloat(this.element.css("border-bottom-width")), h = f + g, i = d + h + 15, 0 === e && (a = parseFloat(this.element.css("padding-top")), b = parseFloat(this.element.css("padding-bottom")), c = a + b, i += c), this.element.css({
                    height: i,
                    "min-height": "",
                    "max-height": ""
                }), this.window.scrollTop(j)
            },
            refresh: function () {
                this.options.autogrow && this.isTextarea && this._updateHeight()
            },
            _setOptions: function (a) {
                this._super(a), a.autogrow !== b && this.isTextarea && (a.autogrow ? this._autogrow() : this._unbindAutogrow())
            }
        })
    }(a),
    function (a) {
        a.widget("mobile.selectmenu", a.extend({
            initSelector: "select:not( :jqmData(role='slider')):not( :jqmData(role='flipswitch') )",
            options: {
                theme: null,
                icon: "carat-d",
                iconpos: "right",
                inline: !1,
                corners: !0,
                shadow: !0,
                iconshadow: !1,
                overlayTheme: null,
                dividerTheme: null,
                hidePlaceholderMenuItems: !0,
                closeText: "Close",
                nativeMenu: !0,
                preventFocusZoom: /iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1,
                mini: !1
            },
            _button: function () {
                return a("<div/>")
            },
            _setDisabled: function (a) {
                return this.element.attr("disabled", a), this.button.attr("aria-disabled", a), this._setOption("disabled", a)
            },
            _focusButton: function () {
                var a = this;
                setTimeout(function () {
                    a.button.focus()
                }, 40)
            },
            _selectOptions: function () {
                return this.select.find("option")
            },
            _preExtension: function () {
                var b = this.options.inline || this.element.jqmData("inline"),
                    c = this.options.mini || this.element.jqmData("mini"),
                    d = "";~
                this.element[0].className.indexOf("ui-btn-left") && (d = " ui-btn-left"), ~this.element[0].className.indexOf("ui-btn-right") && (d = " ui-btn-right"), b && (d += " ui-btn-inline"), c && (d += " ui-mini"), this.select = this.element.removeClass("ui-btn-left ui-btn-right").wrap("<div class='ui-select" + d + "'>"), this.selectId = this.select.attr("id") || "select-" + this.uuid, this.buttonId = this.selectId + "-button", this.label = a("label[for='" + this.selectId + "']"), this.isMultiple = this.select[0].multiple
            },
            _destroy: function () {
                var a = this.element.parents(".ui-select");
                a.length > 0 && (a.is(".ui-btn-left, .ui-btn-right") && this.element.addClass(a.hasClass("ui-btn-left") ? "ui-btn-left" : "ui-btn-right"), this.element.insertAfter(a), a.remove())
            },
            _create: function () {
                this._preExtension(), this.button = this._button();
                var c = this,
                    d = this.options,
                    e = d.icon ? d.iconpos || this.select.jqmData("iconpos") : !1,
                    f = this.button.insertBefore(this.select).attr("id", this.buttonId).addClass("ui-btn" + (d.icon ? " ui-icon-" + d.icon + " ui-btn-icon-" + e + (d.iconshadow ? " ui-shadow-icon" : "") : "") + (d.theme ? " ui-btn-" + d.theme : "") + (d.corners ? " ui-corner-all" : "") + (d.shadow ? " ui-shadow" : ""));
                this.setButtonText(), d.nativeMenu && b.opera && b.opera.version && f.addClass("ui-select-nativeonly"), this.isMultiple && (this.buttonCount = a("<span>").addClass("ui-li-count ui-body-inherit").hide().appendTo(f.addClass("ui-li-has-count"))), (d.disabled || this.element.attr("disabled")) && this.disable(), this.select.change(function () {
                    c.refresh(), d.nativeMenu && this.blur()
                }), this._handleFormReset(), this._on(this.button, {
                    keydown: "_handleKeydown"
                }), this.build()
            },
            build: function () {
                var b = this;
                this.select.appendTo(b.button).bind("vmousedown", function () {
                    b.button.addClass(a.mobile.activeBtnClass)
                }).bind("focus", function () {
                    b.button.addClass(a.mobile.focusClass)
                }).bind("blur", function () {
                    b.button.removeClass(a.mobile.focusClass)
                }).bind("focus vmouseover", function () {
                    b.button.trigger("vmouseover")
                }).bind("vmousemove", function () {
                    b.button.removeClass(a.mobile.activeBtnClass)
                }).bind("change blur vmouseout", function () {
                    b.button.trigger("vmouseout").removeClass(a.mobile.activeBtnClass)
                }), b.button.bind("vmousedown", function () {
                    b.options.preventFocusZoom && a.mobile.zoom.disable(!0)
                }), b.label.bind("click focus", function () {
                    b.options.preventFocusZoom && a.mobile.zoom.disable(!0)
                }), b.select.bind("focus", function () {
                    b.options.preventFocusZoom && a.mobile.zoom.disable(!0)
                }), b.button.bind("mouseup", function () {
                    b.options.preventFocusZoom && setTimeout(function () {
                        a.mobile.zoom.enable(!0)
                    }, 0)
                }), b.select.bind("blur", function () {
                    b.options.preventFocusZoom && a.mobile.zoom.enable(!0)
                })
            },
            selected: function () {
                return this._selectOptions().filter(":selected")
            },
            selectedIndices: function () {
                var a = this;
                return this.selected().map(function () {
                    return a._selectOptions().index(this)
                }).get()
            },
            setButtonText: function () {
                var b = this,
                    d = this.selected(),
                    e = this.placeholder,
                    f = a(c.createElement("span"));
                this.button.children("span").not(".ui-li-count").remove().end().end().prepend(function () {
                    return e = d.length ? d.map(function () {
                        return a(this).text()
                    }).get().join(", ") : b.placeholder, e ? f.text(e) : f.html("&#160;"), f.addClass(b.select.attr("class")).addClass(d.attr("class")).removeClass("ui-screen-hidden")
                }())
            },
            setButtonCount: function () {
                var a = this.selected();
                this.isMultiple && this.buttonCount[a.length > 1 ? "show" : "hide"]().text(a.length)
            },
            _handleKeydown: function () {
                this._delay("_refreshButton")
            },
            _reset: function () {
                this.refresh()
            },
            _refreshButton: function () {
                this.setButtonText(), this.setButtonCount()
            },
            refresh: function () {
                this._refreshButton()
            },
            open: a.noop,
            close: a.noop,
            disable: function () {
                this._setDisabled(!0), this.button.addClass("ui-state-disabled")
            },
            enable: function () {
                this._setDisabled(!1), this.button.removeClass("ui-state-disabled")
            }
        }, a.mobile.behaviors.formReset))
    }(a),
    function (a) {
        a.mobile.links = function (b) {
            a(b).find("a").jqmEnhanceable().filter(":jqmData(rel='popup')[href][href!='']").each(function () {
                var a = this,
                    b = a.getAttribute("href").substring(1);
                b && (a.setAttribute("aria-haspopup", !0), a.setAttribute("aria-owns", b), a.setAttribute("aria-expanded", !1))
            }).end().not(".ui-btn, :jqmData(role='none'), :jqmData(role='nojs')").addClass("ui-link")
        }
    }(a),
    function (a, c) {
        function d(a, b, c, d) {
            var e = d;
            return e = b > a ? c + (a - b) / 2 : Math.min(Math.max(c, d - b / 2), c + a - b)
        }

        function e(a) {
            return {
                x: a.scrollLeft(),
                y: a.scrollTop(),
                cx: a[0].innerWidth || a.width(),
                cy: a[0].innerHeight || a.height()
            }
        }
        a.widget("mobile.popup", {
            options: {
                wrapperClass: null,
                theme: null,
                overlayTheme: null,
                shadow: !0,
                corners: !0,
                transition: "none",
                positionTo: "origin",
                tolerance: null,
                closeLinkSelector: "a:jqmData(rel='back')",
                closeLinkEvents: "click.popup",
                navigateEvents: "navigate.popup",
                closeEvents: "navigate.popup pagebeforechange.popup",
                dismissible: !0,
                enhanced: !1,
                history: !a.mobile.browser.oldIE
            },
            _create: function () {
                var b = this.element,
                    c = b.attr("id"),
                    d = this.options;
                d.history = d.history && a.mobile.ajaxEnabled && a.mobile.hashListeningEnabled, a.extend(this, {
                    _scrollTop: 0,
                    _page: b.closest(".ui-page"),
                    _ui: null,
                    _fallbackTransition: "",
                    _currentTransition: !1,
                    _prerequisites: null,
                    _isOpen: !1,
                    _tolerance: null,
                    _resizeData: null,
                    _ignoreResizeTo: 0,
                    _orientationchangeInProgress: !1
                }), 0 === this._page.length && (this._page = a("body")), d.enhanced ? this._ui = {
                    container: b.parent(),
                    screen: b.parent().prev(),
                    placeholder: a(this.document[0].getElementById(c + "-placeholder"))
                } : (this._ui = this._enhance(b, c), this._applyTransition(d.transition)), this._setTolerance(d.tolerance)._ui.focusElement = this._ui.container, this._on(this._ui.screen, {
                    vclick: "_eatEventAndClose"
                }), this._on(this.window, {
                    orientationchange: a.proxy(this, "_handleWindowOrientationchange"),
                    resize: a.proxy(this, "_handleWindowResize"),
                    keyup: a.proxy(this, "_handleWindowKeyUp")
                }), this._on(this.document, {
                    focusin: "_handleDocumentFocusIn"
                })
            },
            _enhance: function (b, c) {
                var d = this.options,
                    e = d.wrapperClass,
                    f = {
                        screen: a("<div class='ui-screen-hidden ui-popup-screen " + this._themeClassFromOption("ui-overlay-", d.overlayTheme) + "'></div>"),
                        placeholder: a("<div style='display: none;'><!-- placeholder --></div>"),
                        container: a("<div class='ui-popup-container ui-popup-hidden ui-popup-truncate" + (e ? " " + e : "") + "'></div>")
                    }, g = this.document[0].createDocumentFragment();
                return g.appendChild(f.screen[0]), g.appendChild(f.container[0]), c && (f.screen.attr("id", c + "-screen"), f.container.attr("id", c + "-popup"), f.placeholder.attr("id", c + "-placeholder").html("<!-- placeholder for " + c + " -->")), this._page[0].appendChild(g), f.placeholder.insertAfter(b), b.detach().addClass("ui-popup " + this._themeClassFromOption("ui-body-", d.theme) + " " + (d.shadow ? "ui-overlay-shadow " : "") + (d.corners ? "ui-corner-all " : "")).appendTo(f.container), f
            },
            _eatEventAndClose: function (a) {
                return a.preventDefault(), a.stopImmediatePropagation(), this.options.dismissible && this.close(), !1
            },
            _resizeScreen: function () {
                var a = this._ui.screen,
                    b = this._ui.container.outerHeight(!0),
                    c = a.removeAttr("style").height(),
                    d = this.document.height() - 1;
                d > c ? a.height(d) : b > c && a.height(b)
            },
            _handleWindowKeyUp: function (b) {
                return this._isOpen && b.keyCode === a.mobile.keyCode.ESCAPE ? this._eatEventAndClose(b) : void 0
            },
            _expectResizeEvent: function () {
                var a = e(this.window);
                if (this._resizeData) {
                    if (a.x === this._resizeData.windowCoordinates.x && a.y === this._resizeData.windowCoordinates.y && a.cx === this._resizeData.windowCoordinates.cx && a.cy === this._resizeData.windowCoordinates.cy) return !1;
                    clearTimeout(this._resizeData.timeoutId)
                }
                return this._resizeData = {
                    timeoutId: this._delay("_resizeTimeout", 200),
                    windowCoordinates: a
                }, !0
            },
            _resizeTimeout: function () {
                this._isOpen ? this._expectResizeEvent() || (this._ui.container.hasClass("ui-popup-hidden") && (this._ui.container.removeClass("ui-popup-hidden ui-popup-truncate"), this.reposition({
                    positionTo: "window"
                }), this._ignoreResizeEvents()), this._resizeScreen(), this._resizeData = null, this._orientationchangeInProgress = !1) : (this._resizeData = null, this._orientationchangeInProgress = !1)
            },
            _stopIgnoringResizeEvents: function () {
                this._ignoreResizeTo = 0
            },
            _ignoreResizeEvents: function () {
                this._ignoreResizeTo && clearTimeout(this._ignoreResizeTo), this._ignoreResizeTo = this._delay("_stopIgnoringResizeEvents", 1e3)
            },
            _handleWindowResize: function () {
                this._isOpen && 0 === this._ignoreResizeTo && (!this._expectResizeEvent() && !this._orientationchangeInProgress || this._ui.container.hasClass("ui-popup-hidden") || this._ui.container.addClass("ui-popup-hidden ui-popup-truncate").removeAttr("style"))
            },
            _handleWindowOrientationchange: function () {
                !this._orientationchangeInProgress && this._isOpen && 0 === this._ignoreResizeTo && (this._expectResizeEvent(), this._orientationchangeInProgress = !0)
            },
            _handleDocumentFocusIn: function (b) {
                var c, d = b.target,
                    e = this._ui;
                if (this._isOpen) {
                    if (d !== e.container[0]) {
                        if (c = a(d), 0 === c.parents().filter(e.container[0]).length) return a(this.document[0].activeElement).one("focus", function () {
                            c.blur()
                        }), e.focusElement.focus(), b.preventDefault(), b.stopImmediatePropagation(), !1;
                        e.focusElement[0] === e.container[0] && (e.focusElement = c)
                    }
                    this._ignoreResizeEvents()
                }
            },
            _themeClassFromOption: function (a, b) {
                return b ? "none" === b ? "" : a + b : a + "inherit"
            },
            _applyTransition: function (b) {
                return b && (this._ui.container.removeClass(this._fallbackTransition), "none" !== b && (this._fallbackTransition = a.mobile._maybeDegradeTransition(b), "none" === this._fallbackTransition && (this._fallbackTransition = ""), this._ui.container.addClass(this._fallbackTransition))), this
            },
            _setOptions: function (a) {
                var b = this.options,
                    d = this.element,
                    e = this._ui.screen;
                return a.wrapperClass !== c && this._ui.container.removeClass(b.wrapperClass).addClass(a.wrapperClass), a.theme !== c && d.removeClass(this._themeClassFromOption("ui-body-", b.theme)).addClass(this._themeClassFromOption("ui-body-", a.theme)), a.overlayTheme !== c && (e.removeClass(this._themeClassFromOption("ui-overlay-", b.overlayTheme)).addClass(this._themeClassFromOption("ui-overlay-", a.overlayTheme)), this._isOpen && e.addClass("in")), a.shadow !== c && d.toggleClass("ui-overlay-shadow", a.shadow), a.corners !== c && d.toggleClass("ui-corner-all", a.corners), a.transition !== c && (this._currentTransition || this._applyTransition(a.transition)), a.tolerance !== c && this._setTolerance(a.tolerance), a.disabled !== c && a.disabled && this.close(), this._super(a)
            },
            _setTolerance: function (b) {
                var d, e = {
                        t: 30,
                        r: 15,
                        b: 30,
                        l: 15
                    };
                if (b !== c) switch (d = String(b).split(","), a.each(d, function (a, b) {
                    d[a] = parseInt(b, 10)
                }), d.length) {
                case 1:
                    isNaN(d[0]) || (e.t = e.r = e.b = e.l = d[0]);
                    break;
                case 2:
                    isNaN(d[0]) || (e.t = e.b = d[0]), isNaN(d[1]) || (e.l = e.r = d[1]);
                    break;
                case 4:
                    isNaN(d[0]) || (e.t = d[0]), isNaN(d[1]) || (e.r = d[1]), isNaN(d[2]) || (e.b = d[2]), isNaN(d[3]) || (e.l = d[3])
                }
                return this._tolerance = e, this
            },
            _clampPopupWidth: function (a) {
                var b, c = e(this.window),
                    d = {
                        x: this._tolerance.l,
                        y: c.y + this._tolerance.t,
                        cx: c.cx - this._tolerance.l - this._tolerance.r,
                        cy: c.cy - this._tolerance.t - this._tolerance.b
                    };
                return a || this._ui.container.css("max-width", d.cx), b = {
                    cx: this._ui.container.outerWidth(!0),
                    cy: this._ui.container.outerHeight(!0)
                }, {
                    rc: d,
                    menuSize: b
                }
            },
            _calculateFinalLocation: function (a, b) {
                var c, e = b.rc,
                    f = b.menuSize;
                return c = {
                    left: d(e.cx, f.cx, e.x, a.x),
                    top: d(e.cy, f.cy, e.y, a.y)
                }, c.top = Math.max(0, c.top), c.top -= Math.min(c.top, Math.max(0, c.top + f.cy - this.document.height())), c
            },
            _placementCoords: function (a) {
                return this._calculateFinalLocation(a, this._clampPopupWidth())
            },
            _createPrerequisites: function (b, c, d) {
                var e, f = this;
                e = {
                    screen: a.Deferred(),
                    container: a.Deferred()
                }, e.screen.then(function () {
                    e === f._prerequisites && b()
                }), e.container.then(function () {
                    e === f._prerequisites && c()
                }), a.when(e.screen, e.container).done(function () {
                    e === f._prerequisites && (f._prerequisites = null, d())
                }), f._prerequisites = e
            },
            _animate: function (b) {
                return this._ui.screen.removeClass(b.classToRemove).addClass(b.screenClassToAdd), b.prerequisites.screen.resolve(), b.transition && "none" !== b.transition && (b.applyTransition && this._applyTransition(b.transition), this._fallbackTransition) ? void this._ui.container.addClass(b.containerClassToAdd).removeClass(b.classToRemove).animationComplete(a.proxy(b.prerequisites.container, "resolve")) : (this._ui.container.removeClass(b.classToRemove), void b.prerequisites.container.resolve())
            },
            _desiredCoords: function (b) {
                var c, d = null,
                    f = e(this.window),
                    g = b.x,
                    h = b.y,
                    i = b.positionTo;
                if (i && "origin" !== i)
                    if ("window" === i) g = f.cx / 2 + f.x, h = f.cy / 2 + f.y;
                    else {
                        try {
                            d = a(i)
                        } catch (j) {
                            d = null
                        }
                        d && (d.filter(":visible"), 0 === d.length && (d = null))
                    }
                return d && (c = d.offset(), g = c.left + d.outerWidth() / 2, h = c.top + d.outerHeight() / 2), ("number" !== a.type(g) || isNaN(g)) && (g = f.cx / 2 + f.x), ("number" !== a.type(h) || isNaN(h)) && (h = f.cy / 2 + f.y), {
                    x: g,
                    y: h
                }
            },
            _reposition: function (a) {
                a = {
                    x: a.x,
                    y: a.y,
                    positionTo: a.positionTo
                }, this._trigger("beforeposition", c, a), this._ui.container.offset(this._placementCoords(this._desiredCoords(a)))
            },
            reposition: function (a) {
                this._isOpen && this._reposition(a)
            },
            _openPrerequisitesComplete: function () {
                var a = this.element.attr("id");
                this._ui.container.addClass("ui-popup-active"), this._isOpen = !0, this._resizeScreen(), this._ui.container.attr("tabindex", "0").focus(), this._ignoreResizeEvents(), a && this.document.find("[aria-haspopup='true'][aria-owns='" + a + "']").attr("aria-expanded", !0), this._trigger("afteropen")
            },
            _open: function (b) {
                var c = a.extend({}, this.options, b),
                    d = function () {
                        var a = navigator.userAgent,
                            b = a.match(/AppleWebKit\/([0-9\.]+)/),
                            c = !! b && b[1],
                            d = a.match(/Android (\d+(?:\.\d+))/),
                            e = !! d && d[1],
                            f = a.indexOf("Chrome") > -1;
                        return null !== d && "4.0" === e && c && c > 534.13 && !f ? !0 : !1
                    }();
                this._createPrerequisites(a.noop, a.noop, a.proxy(this, "_openPrerequisitesComplete")), this._currentTransition = c.transition, this._applyTransition(c.transition), this._ui.screen.removeClass("ui-screen-hidden"), this._ui.container.removeClass("ui-popup-truncate"), this._reposition(c), this._ui.container.removeClass("ui-popup-hidden"), this.options.overlayTheme && d && this.element.closest(".ui-page").addClass("ui-popup-open"), this._animate({
                    additionalCondition: !0,
                    transition: c.transition,
                    classToRemove: "",
                    screenClassToAdd: "in",
                    containerClassToAdd: "in",
                    applyTransition: !1,
                    prerequisites: this._prerequisites
                })
            },
            _closePrerequisiteScreen: function () {
                this._ui.screen.removeClass("out").addClass("ui-screen-hidden")
            },
            _closePrerequisiteContainer: function () {
                this._ui.container.removeClass("reverse out").addClass("ui-popup-hidden ui-popup-truncate").removeAttr("style")
            },
            _closePrerequisitesDone: function () {
                var b = this._ui.container,
                    d = this.element.attr("id");
                b.removeAttr("tabindex"), a.mobile.popup.active = c, a(":focus", b[0]).add(b[0]).blur(), d && this.document.find("[aria-haspopup='true'][aria-owns='" + d + "']").attr("aria-expanded", !1), this._trigger("afterclose")
            },
            _close: function (b) {
                this._ui.container.removeClass("ui-popup-active"), this._page.removeClass("ui-popup-open"), this._isOpen = !1, this._createPrerequisites(a.proxy(this, "_closePrerequisiteScreen"), a.proxy(this, "_closePrerequisiteContainer"), a.proxy(this, "_closePrerequisitesDone")), this._animate({
                    additionalCondition: this._ui.screen.hasClass("in"),
                    transition: b ? "none" : this._currentTransition,
                    classToRemove: "in",
                    screenClassToAdd: "out",
                    containerClassToAdd: "reverse out",
                    applyTransition: !0,
                    prerequisites: this._prerequisites
                })
            },
            _unenhance: function () {
                this.options.enhanced || (this._setOptions({
                    theme: a.mobile.popup.prototype.options.theme
                }), this.element.detach().insertAfter(this._ui.placeholder).removeClass("ui-popup ui-overlay-shadow ui-corner-all ui-body-inherit"), this._ui.screen.remove(), this._ui.container.remove(), this._ui.placeholder.remove())
            },
            _destroy: function () {
                return a.mobile.popup.active === this ? (this.element.one("popupafterclose", a.proxy(this, "_unenhance")), this.close()) : this._unenhance(), this
            },
            _closePopup: function (c, d) {
                var e, f, g = this.options,
                    h = !1;
                c && c.isDefaultPrevented() || a.mobile.popup.active !== this || (b.scrollTo(0, this._scrollTop), c && "pagebeforechange" === c.type && d && (e = "string" == typeof d.toPage ? d.toPage : d.toPage.jqmData("url"), e = a.mobile.path.parseUrl(e), f = e.pathname + e.search + e.hash, this._myUrl !== a.mobile.path.makeUrlAbsolute(f) ? h = !0 : c.preventDefault()), this.window.off(g.closeEvents), this.element.undelegate(g.closeLinkSelector, g.closeLinkEvents), this._close(h))
            },
            _bindContainerClose: function () {
                this.window.on(this.options.closeEvents, a.proxy(this, "_closePopup"))
            },
            widget: function () {
                return this._ui.container
            },
            open: function (b) {
                var c, d, e, f, g, h, i = this,
                    j = this.options;
                return a.mobile.popup.active || j.disabled ? this : (a.mobile.popup.active = this, this._scrollTop = this.window.scrollTop(), j.history ? (h = a.mobile.navigate.history, d = a.mobile.dialogHashKey, e = a.mobile.activePage, f = e ? e.hasClass("ui-dialog") : !1, this._myUrl = c = h.getActive().url, (g = c.indexOf(d) > -1 && !f && h.activeIndex > 0) ? (i._open(b), i._bindContainerClose(), this) : (-1 !== c.indexOf(d) || f ? c = a.mobile.path.parseLocation().hash + d : c += c.indexOf("#") > -1 ? d : "#" + d, 0 === h.activeIndex && c === h.initialDst && (c += d), this.window.one("beforenavigate", function (a) {
                    a.preventDefault(), i._open(b), i._bindContainerClose()
                }), this.urlAltered = !0, a.mobile.navigate(c, {
                    role: "dialog"
                }), this)) : (i._open(b), i._bindContainerClose(), i.element.delegate(j.closeLinkSelector, j.closeLinkEvents, function (a) {
                    i.close(), a.preventDefault()
                }), this))
            },
            close: function () {
                return a.mobile.popup.active !== this ? this : (this._scrollTop = this.window.scrollTop(), this.options.history && this.urlAltered ? (a.mobile.back(), this.urlAltered = !1) : this._closePopup(), this)
            }
        }), a.mobile.popup.handleLink = function (b) {
            var c, d = a.mobile.path,
                e = a(d.hashToSelector(d.parseUrl(b.attr("href")).hash)).first();
            e.length > 0 && e.data("mobile-popup") && (c = b.offset(), e.popup("open", {
                x: c.left + b.outerWidth() / 2,
                y: c.top + b.outerHeight() / 2,
                transition: b.jqmData("transition"),
                positionTo: b.jqmData("position-to")
            })), setTimeout(function () {
                b.removeClass(a.mobile.activeBtnClass)
            }, 300)
        }, a.mobile.document.on("pagebeforechange", function (b, c) {
            "popup" === c.options.role && (a.mobile.popup.handleLink(c.options.link), b.preventDefault())
        })
    }(a),
    function (a, b) {
        var d = ".ui-disabled,.ui-state-disabled,.ui-li-divider,.ui-screen-hidden,:jqmData(role='placeholder')",
            e = function (a, b, c) {
                var e = a[c + "All"]().not(d).first();
                e.length && (b.blur().attr("tabindex", "-1"), e.find("a").first().focus())
            };
        a.widget("mobile.selectmenu", a.mobile.selectmenu, {
            _create: function () {
                var a = this.options;
                return a.nativeMenu = a.nativeMenu || this.element.parents(":jqmData(role='popup'),:mobile-popup").length > 0, this._super()
            },
            _handleSelectFocus: function () {
                this.element.blur(), this.button.focus()
            },
            _handleKeydown: function (a) {
                this._super(a), this._handleButtonVclickKeydown(a)
            },
            _handleButtonVclickKeydown: function (b) {
                this.options.disabled || this.isOpen || ("vclick" === b.type || b.keyCode && (b.keyCode === a.mobile.keyCode.ENTER || b.keyCode === a.mobile.keyCode.SPACE)) && (this._decideFormat(), "overlay" === this.menuType ? this.button.attr("href", "#" + this.popupId).attr("data-" + (a.mobile.ns || "") + "rel", "popup") : this.button.attr("href", "#" + this.dialogId).attr("data-" + (a.mobile.ns || "") + "rel", "dialog"), this.isOpen = !0)
            },
            _handleListFocus: function (b) {
                var c = "focusin" === b.type ? {
                    tabindex: "0",
                    event: "vmouseover"
                } : {
                    tabindex: "-1",
                    event: "vmouseout"
                };
                a(b.target).attr("tabindex", c.tabindex).trigger(c.event)
            },
            _handleListKeydown: function (b) {
                var c = a(b.target),
                    d = c.closest("li");
                switch (b.keyCode) {
                case 38:
                    return e(d, c, "prev"), !1;
                case 40:
                    return e(d, c, "next"), !1;
                case 13:
                case 32:
                    return c.trigger("click"), !1
                }
            },
            _handleMenuPageHide: function () {
                this.thisPage.page("bindRemove")
            },
            _handleHeaderCloseClick: function () {
                return "overlay" === this.menuType ? (this.close(), !1) : void 0
            },
            build: function () {
                var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w = this.options;
                return w.nativeMenu ? this._super() : (v = this, c = this.selectId, d = c + "-listbox", e = c + "-dialog", f = this.label, g = this.element.closest(".ui-page"), h = this.element[0].multiple, i = c + "-menu", j = w.theme ? " data-" + a.mobile.ns + "theme='" + w.theme + "'" : "", k = w.overlayTheme || w.theme || null, l = k ? " data-" + a.mobile.ns + "overlay-theme='" + k + "'" : "", m = w.dividerTheme && h ? " data-" + a.mobile.ns + "divider-theme='" + w.dividerTheme + "'" : "", n = a("<div data-" + a.mobile.ns + "role='dialog' class='ui-selectmenu' id='" + e + "'" + j + l + "><div data-" + a.mobile.ns + "role='header'><div class='ui-title'>" + f.getEncodedText() + "</div></div><div data-" + a.mobile.ns + "role='content'></div></div>"), o = a("<div id='" + d + "' class='ui-selectmenu'></div>").insertAfter(this.select).popup({
                    theme: w.overlayTheme
                }), p = a("<ul class='ui-selectmenu-list' id='" + i + "' role='listbox' aria-labelledby='" + this.buttonId + "'" + j + m + "></ul>").appendTo(o), q = a("<div class='ui-header ui-bar-" + (w.theme ? w.theme : "inherit") + "'></div>").prependTo(o), r = a("<h1 class='ui-title'></h1>").appendTo(q), this.isMultiple && (u = a("<a>", {
                    role: "button",
                    text: w.closeText,
                    href: "#",
                    "class": "ui-btn ui-corner-all ui-btn-left ui-btn-icon-notext ui-icon-delete"
                }).appendTo(q)), a.extend(this, {
                    selectId: c,
                    menuId: i,
                    popupId: d,
                    dialogId: e,
                    thisPage: g,
                    menuPage: n,
                    label: f,
                    isMultiple: h,
                    theme: w.theme,
                    listbox: o,
                    list: p,
                    header: q,
                    headerTitle: r,
                    headerClose: u,
                    menuPageContent: s,
                    menuPageClose: t,
                    placeholder: ""
                }), this.refresh(), this._origTabIndex === b && (this._origTabIndex = null === this.select[0].getAttribute("tabindex") ? !1 : this.select.attr("tabindex")), this.select.attr("tabindex", "-1"), this._on(this.select, {
                    focus: "_handleSelectFocus"
                }), this._on(this.button, {
                    vclick: "_handleButtonVclickKeydown"
                }), this.list.attr("role", "listbox"), this._on(this.list, {
                    focusin: "_handleListFocus",
                    focusout: "_handleListFocus",
                    keydown: "_handleListKeydown"
                }), this.list.delegate("li:not(.ui-disabled,.ui-state-disabled,.ui-li-divider)", "click", function (b) {
                    var c = v.select[0].selectedIndex,
                        d = a.mobile.getAttribute(this, "option-index"),
                        e = v._selectOptions().eq(d)[0];
                    e.selected = v.isMultiple ? !e.selected : !0, v.isMultiple && a(this).find("a").toggleClass("ui-checkbox-on", e.selected).toggleClass("ui-checkbox-off", !e.selected), (v.isMultiple || c !== d) && v.select.trigger("change"), v.isMultiple ? v.list.find("li:not(.ui-li-divider)").eq(d).find("a").first().focus() : v.close(), b.preventDefault()
                }), this._on(this.menuPage, {
                    pagehide: "_handleMenuPageHide"
                }), this._on(this.listbox, {
                    popupafterclose: "close"
                }), this.isMultiple && this._on(this.headerClose, {
                    click: "_handleHeaderCloseClick"
                }), this)
            },
            _isRebuildRequired: function () {
                var a = this.list.find("li"),
                    b = this._selectOptions().not(".ui-screen-hidden");
                return b.text() !== a.text()
            },
            selected: function () {
                return this._selectOptions().filter(":selected:not( :jqmData(placeholder='true') )")
            },
            refresh: function (b) {
                var c, d;
                return this.options.nativeMenu ? this._super(b) : (c = this, (b || this._isRebuildRequired()) && c._buildList(), d = this.selectedIndices(), c.setButtonText(), c.setButtonCount(), void c.list.find("li:not(.ui-li-divider)").find("a").removeClass(a.mobile.activeBtnClass).end().attr("aria-selected", !1).each(function (b) {
                    if (a.inArray(b, d) > -1) {
                        var e = a(this);
                        e.attr("aria-selected", !0), c.isMultiple ? e.find("a").removeClass("ui-checkbox-off").addClass("ui-checkbox-on") : e.hasClass("ui-screen-hidden") ? e.next().find("a").addClass(a.mobile.activeBtnClass) : e.find("a").addClass(a.mobile.activeBtnClass)
                    }
                }))
            },
            close: function () {
                if (!this.options.disabled && this.isOpen) {
                    var a = this;
                    "page" === a.menuType ? (a.menuPage.dialog("close"), a.list.appendTo(a.listbox)) : a.listbox.popup("close"), a._focusButton(), a.isOpen = !1
                }
            },
            open: function () {
                this.button.click()
            },
            _focusMenuItem: function () {
                var b = this.list.find("a." + a.mobile.activeBtnClass);
                0 === b.length && (b = this.list.find("li:not(" + d + ") a.ui-btn")), b.first().focus()
            },
            _decideFormat: function () {
                var b = this,
                    c = this.window,
                    d = b.list.parent(),
                    e = d.outerHeight(),
                    f = c.scrollTop(),
                    g = b.button.offset().top,
                    h = c.height();
                e > h - 80 || !a.support.scrollTop ? (b.menuPage.appendTo(a.mobile.pageContainer).page(), b.menuPageContent = b.menuPage.find(".ui-content"), b.menuPageClose = b.menuPage.find(".ui-header a"), b.thisPage.unbind("pagehide.remove"), 0 === f && g > h && b.thisPage.one("pagehide", function () {
                    a(this).jqmData("lastScroll", g)
                }), b.menuPage.one({
                    pageshow: a.proxy(this, "_focusMenuItem"),
                    pagehide: a.proxy(this, "close")
                }), b.menuType = "page", b.menuPageContent.append(b.list), b.menuPage.find("div .ui-title").text(b.label.text())) : (b.menuType = "overlay", b.listbox.one({
                    popupafteropen: a.proxy(this, "_focusMenuItem")
                }))
            },
            _buildList: function () {
                var b, d, e, f, g, h, i, j, k, l, m, n, o, p, q = this,
                    r = this.options,
                    s = this.placeholder,
                    t = !0,
                    u = "false",
                    v = "data-" + a.mobile.ns,
                    w = v + "option-index",
                    x = v + "icon",
                    y = v + "role",
                    z = v + "placeholder",
                    A = c.createDocumentFragment(),
                    B = !1;
                for (q.list.empty().filter(".ui-listview").listview("destroy"), b = this._selectOptions(), d = b.length, e = this.select[0], g = 0; d > g; g++, B = !1) h = b[g], i = a(h), i.hasClass("ui-screen-hidden") || (j = h.parentNode, k = i.text(), l = c.createElement("a"), m = [], l.setAttribute("href", "#"), l.appendChild(c.createTextNode(k)), j !== e && "optgroup" === j.nodeName.toLowerCase() && (n = j.getAttribute("label"), n !== f && (o = c.createElement("li"), o.setAttribute(y, "list-divider"), o.setAttribute("role", "option"), o.setAttribute("tabindex", "-1"), o.appendChild(c.createTextNode(n)), A.appendChild(o), f = n)), !t || h.getAttribute("value") && 0 !== k.length && !i.jqmData("placeholder") || (t = !1, B = !0, null === h.getAttribute(z) && (this._removePlaceholderAttr = !0), h.setAttribute(z, !0), r.hidePlaceholderMenuItems && m.push("ui-screen-hidden"), s !== k && (s = q.placeholder = k)), p = c.createElement("li"), h.disabled && (m.push("ui-state-disabled"), p.setAttribute("aria-disabled", !0)), p.setAttribute(w, g), p.setAttribute(x, u), B && p.setAttribute(z, !0), p.className = m.join(" "), p.setAttribute("role", "option"), l.setAttribute("tabindex", "-1"), this.isMultiple && a(l).addClass("ui-btn ui-checkbox-off ui-btn-icon-right"), p.appendChild(l), A.appendChild(p));
                q.list[0].appendChild(A), this.isMultiple || s.length ? this.headerTitle.text(this.placeholder) : this.header.addClass("ui-screen-hidden"), q.list.listview()
            },
            _button: function () {
                return this.options.nativeMenu ? this._super() : a("<a>", {
                    href: "#",
                    role: "button",
                    id: this.buttonId,
                    "aria-haspopup": "true",
                    "aria-owns": this.menuId
                })
            },
            _destroy: function () {
                this.options.nativeMenu || (this.close(), this._origTabIndex !== b && (this._origTabIndex !== !1 ? this.select.attr("tabindex", this._origTabIndex) : this.select.removeAttr("tabindex")), this._removePlaceholderAttr && this._selectOptions().removeAttr("data-" + a.mobile.ns + "placeholder"), this.listbox.remove(), this.menuPage.remove()), this._super()
            }
        })
    }(a),
    function (a, b) {
        function c(a, b) {
            var c = b ? b : [];
            return c.push("ui-btn"), a.theme && c.push("ui-btn-" + a.theme), a.icon && (c = c.concat(["ui-icon-" + a.icon, "ui-btn-icon-" + a.iconpos]), a.iconshadow && c.push("ui-shadow-icon")), a.inline && c.push("ui-btn-inline"), a.shadow && c.push("ui-shadow"), a.corners && c.push("ui-corner-all"), a.mini && c.push("ui-mini"), c
        }

        function d(a) {
            var c, d, e, g = !1,
                h = !0,
                i = {
                    icon: "",
                    inline: !1,
                    shadow: !1,
                    corners: !1,
                    iconshadow: !1,
                    mini: !1
                }, j = [];
            for (a = a.split(" "), c = 0; c < a.length; c++) e = !0, d = f[a[c]], d !== b ? (e = !1, i[d] = !0) : 0 === a[c].indexOf("ui-btn-icon-") ? (e = !1, h = !1, i.iconpos = a[c].substring(12)) : 0 === a[c].indexOf("ui-icon-") ? (e = !1, i.icon = a[c].substring(8)) : 0 === a[c].indexOf("ui-btn-") && 8 === a[c].length ? (e = !1, i.theme = a[c].substring(7)) : "ui-btn" === a[c] && (e = !1, g = !0), e && j.push(a[c]);
            return h && (i.icon = ""), {
                options: i,
                unknownClasses: j,
                alreadyEnhanced: g
            }
        }

        function e(a) {
            return "-" + a.toLowerCase()
        }
        var f = {
            "ui-shadow": "shadow",
            "ui-corner-all": "corners",
            "ui-btn-inline": "inline",
            "ui-shadow-icon": "iconshadow",
            "ui-mini": "mini"
        }, g = function () {
                var c = a.mobile.getAttribute.apply(this, arguments);
                return null == c ? b : c
            }, h = /[A-Z]/g;
        a.fn.buttonMarkup = function (f, i) {
            var j, k, l, m, n, o = a.fn.buttonMarkup.defaults;
            for (j = 0; j < this.length; j++) {
                if (l = this[j], k = i ? {
                    alreadyEnhanced: !1,
                    unknownClasses: []
                } : d(l.className), m = a.extend({}, k.alreadyEnhanced ? k.options : {}, f), !k.alreadyEnhanced)
                    for (n in o) m[n] === b && (m[n] = g(l, n.replace(h, e)));
                l.className = c(a.extend({}, o, m), k.unknownClasses).join(" "), "button" !== l.tagName.toLowerCase() && l.setAttribute("role", "button")
            }
            return this
        }, a.fn.buttonMarkup.defaults = {
            icon: "",
            iconpos: "left",
            theme: null,
            inline: !1,
            shadow: !0,
            corners: !0,
            iconshadow: !1,
            mini: !1
        }, a.extend(a.fn.buttonMarkup, {
            initSelector: "a:jqmData(role='button'), .ui-bar > a, .ui-bar > :jqmData(role='controlgroup') > a, button"
        })
    }(a),
    function (a, b) {
        a.widget("mobile.controlgroup", a.extend({
            options: {
                enhanced: !1,
                theme: null,
                shadow: !1,
                corners: !0,
                excludeInvisible: !0,
                type: "vertical",
                mini: !1
            },
            _create: function () {
                var b = this.element,
                    c = this.options;
                a.fn.buttonMarkup && this.element.find(a.fn.buttonMarkup.initSelector).buttonMarkup(), a.each(this._childWidgets, a.proxy(function (b, c) {
                    a.mobile[c] && this.element.find(a.mobile[c].initSelector).not(a.mobile.page.prototype.keepNativeSelector())[c]()
                }, this)), a.extend(this, {
                    _ui: null,
                    _initialRefresh: !0
                }), this._ui = c.enhanced ? {
                    groupLegend: b.children(".ui-controlgroup-label").children(),
                    childWrapper: b.children(".ui-controlgroup-controls")
                } : this._enhance()
            },
            _childWidgets: ["checkboxradio", "selectmenu", "button"],
            _themeClassFromOption: function (a) {
                return a ? "none" === a ? "" : "ui-group-theme-" + a : ""
            },
            _enhance: function () {
                var b = this.element,
                    c = this.options,
                    d = {
                        groupLegend: b.children("legend"),
                        childWrapper: b.addClass("ui-controlgroup ui-controlgroup-" + ("horizontal" === c.type ? "horizontal" : "vertical") + " " + this._themeClassFromOption(c.theme) + " " + (c.corners ? "ui-corner-all " : "") + (c.mini ? "ui-mini " : "")).wrapInner("<div class='ui-controlgroup-controls " + (c.shadow === !0 ? "ui-shadow" : "") + "'></div>").children()
                    };
                return d.groupLegend.length > 0 && a("<div role='heading' class='ui-controlgroup-label'></div>").append(d.groupLegend).prependTo(b), d
            },
            _init: function () {
                this.refresh()
            },
            _setOptions: function (a) {
                var c, d, e = this.element;
                return a.type !== b && (e.removeClass("ui-controlgroup-horizontal ui-controlgroup-vertical").addClass("ui-controlgroup-" + ("horizontal" === a.type ? "horizontal" : "vertical")), c = !0), a.theme !== b && e.removeClass(this._themeClassFromOption(this.options.theme)).addClass(this._themeClassFromOption(a.theme)), a.corners !== b && e.toggleClass("ui-corner-all", a.corners), a.mini !== b && e.toggleClass("ui-mini", a.mini), a.shadow !== b && this._ui.childWrapper.toggleClass("ui-shadow", a.shadow), a.excludeInvisible !== b && (this.options.excludeInvisible = a.excludeInvisible, c = !0), d = this._super(a), c && this.refresh(), d
            },
            container: function () {
                return this._ui.childWrapper
            },
            refresh: function () {
                var b = this.container(),
                    c = b.find(".ui-btn").not(".ui-slider-handle"),
                    d = this._initialRefresh;
                a.mobile.checkboxradio && b.find(":mobile-checkboxradio").checkboxradio("refresh"), this._addFirstLastClasses(c, this.options.excludeInvisible ? this._getVisibles(c, d) : c, d), this._initialRefresh = !1
            },
            _destroy: function () {
                var a, b, c = this.options;
                return c.enhanced ? this : (a = this._ui, b = this.element.removeClass("ui-controlgroup ui-controlgroup-horizontal ui-controlgroup-vertical ui-corner-all ui-mini " + this._themeClassFromOption(c.theme)).find(".ui-btn").not(".ui-slider-handle"), this._removeFirstLastClasses(b), a.groupLegend.unwrap(), void a.childWrapper.children().unwrap())
            }
        }, a.mobile.behaviors.addFirstLastClasses))
    }(a),
    function (a, b) {
        a.widget("mobile.toolbar", {
            initSelector: ":jqmData(role='footer'), :jqmData(role='header')",
            options: {
                theme: null,
                addBackBtn: !1,
                backBtnTheme: null,
                backBtnText: "Back"
            },
            _create: function () {
                var b, c, d = this.element.is(":jqmData(role='header')") ? "header" : "footer",
                    e = this.element.closest(".ui-page");
                0 === e.length && (e = !1, this._on(this.document, {
                    pageshow: "refresh"
                })), a.extend(this, {
                    role: d,
                    page: e,
                    leftbtn: b,
                    rightbtn: c,
                    backBtn: null
                }), this.element.attr("role", "header" === d ? "banner" : "contentinfo").addClass("ui-" + d), this.refresh(), this._setOptions(this.options)
            },
            _setOptions: function (c) {
                if (c.addBackBtn !== b && (this.options.addBackBtn && "header" === this.role && a(".ui-page").length > 1 && this.page[0].getAttribute("data-" + a.mobile.ns + "url") !== a.mobile.path.stripHash(location.hash) && !this.leftbtn ? this._addBackButton() : this.element.find(".ui-toolbar-back-btn").remove()), null != c.backBtnTheme && this.element.find(".ui-toolbar-back-btn").addClass("ui-btn ui-btn-" + c.backBtnTheme), c.backBtnText !== b && this.element.find(".ui-toolbar-back-btn .ui-btn-text").text(c.backBtnText), c.theme !== b) {
                    var d = this.options.theme ? this.options.theme : "inherit",
                        e = c.theme ? c.theme : "inherit";
                    this.element.removeClass("ui-bar-" + d).addClass("ui-bar-" + e)
                }
                this._super(c)
            },
            refresh: function () {
                "header" === this.role && this._addHeaderButtonClasses(), this.page || (this._setRelative(), "footer" === this.role && this.element.appendTo("body")), this._addHeadingClasses(), this._btnMarkup()
            },
            _setRelative: function () {
                a("[data-" + a.mobile.ns + "role='page']").css({
                    position: "relative"
                })
            },
            _btnMarkup: function () {
                this.element.children("a").filter(":not([data-" + a.mobile.ns + "role='none'])").attr("data-" + a.mobile.ns + "role", "button"), this.element.trigger("create")
            },
            _addHeaderButtonClasses: function () {
                var a = this.element.children("a, button");
                this.leftbtn = a.hasClass("ui-btn-left"), this.rightbtn = a.hasClass("ui-btn-right"), this.leftbtn = this.leftbtn || a.eq(0).not(".ui-btn-right").addClass("ui-btn-left").length, this.rightbtn = this.rightbtn || a.eq(1).addClass("ui-btn-right").length
            },
            _addBackButton: function () {
                var b, c = this.options;
                this.backBtn || (b = c.backBtnTheme || c.theme, this.backBtn = a("<a role='button' href='javascript:void(0);' class='ui-btn ui-corner-all ui-shadow ui-btn-left " + (b ? "ui-btn-" + b + " " : "") + "ui-toolbar-back-btn ui-icon-carat-l ui-btn-icon-left' data-" + a.mobile.ns + "rel='back'>" + c.backBtnText + "</a>").prependTo(this.element))
            },
            _addHeadingClasses: function () {
                this.element.children("h1, h2, h3, h4, h5, h6").addClass("ui-title").attr({
                    role: "heading",
                    "aria-level": "1"
                })
            }
        })
    }(a),
    function (a, b) {
        a.widget("mobile.toolbar", a.mobile.toolbar, {
            options: {
                position: null,
                visibleOnPageShow: !0,
                disablePageZoom: !0,
                transition: "slide",
                fullscreen: !1,
                tapToggle: !0,
                tapToggleBlacklist: "a, button, input, select, textarea, .ui-header-fixed, .ui-footer-fixed, .ui-flipswitch, .ui-popup, .ui-panel, .ui-panel-dismiss-open",
                hideDuringFocus: "input, textarea, select",
                updatePagePadding: !0,
                trackPersistentToolbars: !0,
                supportBlacklist: function () {
                    return !a.support.fixedPosition
                }
            },
            _create: function () {
                this._super(), "fixed" !== this.options.position || this.options.supportBlacklist() || this._makeFixed()
            },
            _makeFixed: function () {
                this.element.addClass("ui-" + this.role + "-fixed"), this.updatePagePadding(), this._addTransitionClass(), this._bindPageEvents(), this._bindToggleHandlers(), this._setOptions(this.options)
            },
            _setOptions: function (c) {
                if ("fixed" === c.position && "fixed" !== this.options.position && this._makeFixed(), "fixed" === this.options.position && !this.options.supportBlacklist()) {
                    var d = this.page ? this.page : a(".ui-page-active").length > 0 ? a(".ui-page-active") : a(".ui-page").eq(0);
                    c.fullscreen !== b && (c.fullscreen ? (this.element.addClass("ui-" + this.role + "-fullscreen"), d.addClass("ui-page-" + this.role + "-fullscreen")) : (this.element.removeClass("ui-" + this.role + "-fullscreen"), d.removeClass("ui-page-" + this.role + "-fullscreen").addClass("ui-page-" + this.role + "-fixed")))
                }
                this._super(c)
            },
            _addTransitionClass: function () {
                var a = this.options.transition;
                a && "none" !== a && ("slide" === a && (a = this.element.hasClass("ui-header") ? "slidedown" : "slideup"), this.element.addClass(a))
            },
            _bindPageEvents: function () {
                var a = this.page ? this.element.closest(".ui-page") : this.document;
                this._on(a, {
                    pagebeforeshow: "_handlePageBeforeShow",
                    webkitAnimationStart: "_handleAnimationStart",
                    animationstart: "_handleAnimationStart",
                    updatelayout: "_handleAnimationStart",
                    pageshow: "_handlePageShow",
                    pagebeforehide: "_handlePageBeforeHide"
                })
            },
            _handlePageBeforeShow: function () {
                var b = this.options;
                b.disablePageZoom && a.mobile.zoom.disable(!0), b.visibleOnPageShow || this.hide(!0)
            },
            _handleAnimationStart: function () {
                this.options.updatePagePadding && this.updatePagePadding(this.page ? this.page : ".ui-page-active")
            },
            _handlePageShow: function () {
                this.updatePagePadding(this.page ? this.page : ".ui-page-active"), this.options.updatePagePadding && this._on(this.window, {
                    throttledresize: "updatePagePadding"
                })
            },
            _handlePageBeforeHide: function (b, c) {
                var d, e, f, g, h = this.options;
                h.disablePageZoom && a.mobile.zoom.enable(!0), h.updatePagePadding && this._off(this.window, "throttledresize"), h.trackPersistentToolbars && (d = a(".ui-footer-fixed:jqmData(id)", this.page), e = a(".ui-header-fixed:jqmData(id)", this.page), f = d.length && c.nextPage && a(".ui-footer-fixed:jqmData(id='" + d.jqmData("id") + "')", c.nextPage) || a(), g = e.length && c.nextPage && a(".ui-header-fixed:jqmData(id='" + e.jqmData("id") + "')", c.nextPage) || a(), (f.length || g.length) && (f.add(g).appendTo(a.mobile.pageContainer), c.nextPage.one("pageshow", function () {
                    g.prependTo(this), f.appendTo(this)
                })))
            },
            _visible: !0,
            updatePagePadding: function (c) {
                var d = this.element,
                    e = "header" === this.role,
                    f = parseFloat(d.css(e ? "top" : "bottom"));
                this.options.fullscreen || (c = c && c.type === b && c || this.page || d.closest(".ui-page"), c = this.page ? this.page : ".ui-page-active", a(c).css("padding-" + (e ? "top" : "bottom"), d.outerHeight() + f))
            },
            _useTransition: function (b) {
                var c = this.window,
                    d = this.element,
                    e = c.scrollTop(),
                    f = d.height(),
                    g = this.page ? d.closest(".ui-page").height() : a(".ui-page-active").height(),
                    h = a.mobile.getScreenHeight();
                return !b && (this.options.transition && "none" !== this.options.transition && ("header" === this.role && !this.options.fullscreen && e > f || "footer" === this.role && !this.options.fullscreen && g - f > e + h) || this.options.fullscreen)
            },
            show: function (a) {
                var b = "ui-fixed-hidden",
                    c = this.element;
                this._useTransition(a) ? c.removeClass("out " + b).addClass("in").animationComplete(function () {
                    c.removeClass("in")
                }) : c.removeClass(b), this._visible = !0
            },
            hide: function (a) {
                var b = "ui-fixed-hidden",
                    c = this.element,
                    d = "out" + ("slide" === this.options.transition ? " reverse" : "");
                this._useTransition(a) ? c.addClass(d).removeClass("in").animationComplete(function () {
                    c.addClass(b).removeClass(d)
                }) : c.addClass(b).removeClass(d), this._visible = !1
            },
            toggle: function () {
                this[this._visible ? "hide" : "show"]()
            },
            _bindToggleHandlers: function () {
                var b, c, d = this,
                    e = d.options,
                    f = !0,
                    g = this.page ? this.page : a(".ui-page");
                g.bind("vclick", function (b) {
                    e.tapToggle && !a(b.target).closest(e.tapToggleBlacklist).length && d.toggle()
                }).bind("focusin focusout", function (g) {
                    screen.width < 1025 && a(g.target).is(e.hideDuringFocus) && !a(g.target).closest(".ui-header-fixed, .ui-footer-fixed").length && ("focusout" !== g.type || f ? "focusin" === g.type && f && (clearTimeout(b), f = !1, c = setTimeout(function () {
                        d.hide()
                    }, 0)) : (f = !0, clearTimeout(c), b = setTimeout(function () {
                        d.show()
                    }, 0)))
                })
            },
            _setRelative: function () {
                "fixed" !== this.options.position && a("[data-" + a.mobile.ns + "role='page']").css({
                    position: "relative"
                })
            },
            _destroy: function () {
                var a = this.element,
                    b = a.hasClass("ui-header");
                a.closest(".ui-page").css("padding-" + (b ? "top" : "bottom"), ""), a.removeClass("ui-header-fixed ui-footer-fixed ui-header-fullscreen ui-footer-fullscreen in out fade slidedown slideup ui-fixed-hidden"), a.closest(".ui-page").removeClass("ui-page-header-fixed ui-page-footer-fixed ui-page-header-fullscreen ui-page-footer-fullscreen")
            }
        })
    }(a),
    function (a) {
        a.widget("mobile.toolbar", a.mobile.toolbar, {
            _makeFixed: function () {
                this._super(), this._workarounds()
            },
            _workarounds: function () {
                var a = navigator.userAgent,
                    b = navigator.platform,
                    c = a.match(/AppleWebKit\/([0-9]+)/),
                    d = !! c && c[1],
                    e = null,
                    f = this;
                if (b.indexOf("iPhone") > -1 || b.indexOf("iPad") > -1 || b.indexOf("iPod") > -1) e = "ios";
                else {
                    if (!(a.indexOf("Android") > -1)) return;
                    e = "android"
                } if ("ios" === e) f._bindScrollWorkaround();
                else {
                    if (!("android" === e && d && 534 > d)) return;
                    f._bindScrollWorkaround(), f._bindListThumbWorkaround()
                }
            },
            _viewportOffset: function () {
                var a = this.element,
                    b = a.hasClass("ui-header"),
                    c = Math.abs(a.offset().top - this.window.scrollTop());
                return b || (c = Math.round(c - this.window.height() + a.outerHeight()) - 60), c
            },
            _bindScrollWorkaround: function () {
                var a = this;
                this._on(this.window, {
                    scrollstop: function () {
                        var b = a._viewportOffset();
                        b > 2 && a._visible && a._triggerRedraw()
                    }
                })
            },
            _bindListThumbWorkaround: function () {
                this.element.closest(".ui-page").addClass("ui-android-2x-fixed")
            },
            _triggerRedraw: function () {
                var b = parseFloat(a(".ui-page-active").css("padding-bottom"));
                a(".ui-page-active").css("padding-bottom", b + 1 + "px"), setTimeout(function () {
                    a(".ui-page-active").css("padding-bottom", b + "px")
                }, 0)
            },
            destroy: function () {
                this._super(), this.element.closest(".ui-page-active").removeClass("ui-android-2x-fix")
            }
        })
    }(a),
    function (a, b) {
        function c() {
            var a = e.clone(),
                b = a.eq(0),
                c = a.eq(1),
                d = c.children();
            return {
                arEls: c.add(b),
                gd: b,
                ct: c,
                ar: d
            }
        }
        var d = a.mobile.browser.oldIE && a.mobile.browser.oldIE <= 8,
            e = a("<div class='ui-popup-arrow-guide'></div><div class='ui-popup-arrow-container" + (d ? " ie" : "") + "'><div class='ui-popup-arrow'></div></div>");
        a.widget("mobile.popup", a.mobile.popup, {
            options: {
                arrow: ""
            },
            _create: function () {
                var a, b = this._super();
                return this.options.arrow && (this._ui.arrow = a = this._addArrow()), b
            },
            _addArrow: function () {
                var a, b = this.options,
                    d = c();
                return a = this._themeClassFromOption("ui-body-", b.theme), d.ar.addClass(a + (b.shadow ? " ui-overlay-shadow" : "")), d.arEls.hide().appendTo(this.element), d
            },
            _unenhance: function () {
                var a = this._ui.arrow;
                return a && a.arEls.remove(), this._super()
            },
            _tryAnArrow: function (a, b, c, d, e) {
                var f, g, h, i = {}, j = {};
                return d.arFull[a.dimKey] > d.guideDims[a.dimKey] ? e : (i[a.fst] = c[a.fst] + (d.arHalf[a.oDimKey] + d.menuHalf[a.oDimKey]) * a.offsetFactor - d.contentBox[a.fst] + (d.clampInfo.menuSize[a.oDimKey] - d.contentBox[a.oDimKey]) * a.arrowOffsetFactor, i[a.snd] = c[a.snd], f = d.result || this._calculateFinalLocation(i, d.clampInfo), g = {
                    x: f.left,
                    y: f.top
                }, j[a.fst] = g[a.fst] + d.contentBox[a.fst] + a.tipOffset, j[a.snd] = Math.max(f[a.prop] + d.guideOffset[a.prop] + d.arHalf[a.dimKey], Math.min(f[a.prop] + d.guideOffset[a.prop] + d.guideDims[a.dimKey] - d.arHalf[a.dimKey], c[a.snd])), h = Math.abs(c.x - j.x) + Math.abs(c.y - j.y), (!e || h < e.diff) && (j[a.snd] -= d.arHalf[a.dimKey] + f[a.prop] + d.contentBox[a.snd], e = {
                    dir: b,
                    diff: h,
                    result: f,
                    posProp: a.prop,
                    posVal: j[a.snd]
                }), e)
            },
            _getPlacementState: function (a) {
                var b, c, d = this._ui.arrow,
                    e = {
                        clampInfo: this._clampPopupWidth(!a),
                        arFull: {
                            cx: d.ct.width(),
                            cy: d.ct.height()
                        },
                        guideDims: {
                            cx: d.gd.width(),
                            cy: d.gd.height()
                        },
                        guideOffset: d.gd.offset()
                    };
                return b = this.element.offset(), d.gd.css({
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }), c = d.gd.offset(), e.contentBox = {
                    x: c.left - b.left,
                    y: c.top - b.top,
                    cx: d.gd.width(),
                    cy: d.gd.height()
                }, d.gd.removeAttr("style"), e.guideOffset = {
                    left: e.guideOffset.left - b.left,
                    top: e.guideOffset.top - b.top
                }, e.arHalf = {
                    cx: e.arFull.cx / 2,
                    cy: e.arFull.cy / 2
                }, e.menuHalf = {
                    cx: e.clampInfo.menuSize.cx / 2,
                    cy: e.clampInfo.menuSize.cy / 2
                }, e
            },
            _placementCoords: function (b) {
                var c, e, f, g, h, i = this.options.arrow,
                    j = this._ui.arrow;
                return j ? (j.arEls.show(), h = {}, c = this._getPlacementState(!0), f = {
                    l: {
                        fst: "x",
                        snd: "y",
                        prop: "top",
                        dimKey: "cy",
                        oDimKey: "cx",
                        offsetFactor: 1,
                        tipOffset: -c.arHalf.cx,
                        arrowOffsetFactor: 0
                    },
                    r: {
                        fst: "x",
                        snd: "y",
                        prop: "top",
                        dimKey: "cy",
                        oDimKey: "cx",
                        offsetFactor: -1,
                        tipOffset: c.arHalf.cx + c.contentBox.cx,
                        arrowOffsetFactor: 1
                    },
                    b: {
                        fst: "y",
                        snd: "x",
                        prop: "left",
                        dimKey: "cx",
                        oDimKey: "cy",
                        offsetFactor: -1,
                        tipOffset: c.arHalf.cy + c.contentBox.cy,
                        arrowOffsetFactor: 1
                    },
                    t: {
                        fst: "y",
                        snd: "x",
                        prop: "left",
                        dimKey: "cx",
                        oDimKey: "cy",
                        offsetFactor: 1,
                        tipOffset: -c.arHalf.cy,
                        arrowOffsetFactor: 0
                    }
                }, a.each((i === !0 ? "l,t,r,b" : i).split(","), a.proxy(function (a, d) {
                    e = this._tryAnArrow(f[d], d, b, c, e)
                }, this)), e ? (j.ct.removeClass("ui-popup-arrow-l ui-popup-arrow-t ui-popup-arrow-r ui-popup-arrow-b").addClass("ui-popup-arrow-" + e.dir).removeAttr("style").css(e.posProp, e.posVal).show(), d || (g = this.element.offset(), h[f[e.dir].fst] = j.ct.offset(), h[f[e.dir].snd] = {
                    left: g.left + c.contentBox.x,
                    top: g.top + c.contentBox.y
                }), e.result) : (j.arEls.hide(), this._super(b))) : this._super(b)
            },
            _setOptions: function (a) {
                var c, d = this.options.theme,
                    e = this._ui.arrow,
                    f = this._super(a);
                if (a.arrow !== b) {
                    if (!e && a.arrow) return void(this._ui.arrow = this._addArrow());
                    e && !a.arrow && (e.arEls.remove(), this._ui.arrow = null)
                }
                return e = this._ui.arrow, e && (a.theme !== b && (d = this._themeClassFromOption("ui-body-", d), c = this._themeClassFromOption("ui-body-", a.theme), e.ar.removeClass(d).addClass(c)), a.shadow !== b && e.ar.toggleClass("ui-overlay-shadow", a.shadow)), f
            },
            _destroy: function () {
                var a = this._ui.arrow;
                return a && a.arEls.remove(), this._super()
            }
        })
    }(a),
    function (a, c) {
        a.widget("mobile.panel", {
            options: {
                classes: {
                    panel: "ui-panel",
                    panelOpen: "ui-panel-open",
                    panelClosed: "ui-panel-closed",
                    panelFixed: "ui-panel-fixed",
                    panelInner: "ui-panel-inner",
                    modal: "ui-panel-dismiss",
                    modalOpen: "ui-panel-dismiss-open",
                    pageContainer: "ui-panel-page-container",
                    pageWrapper: "ui-panel-wrapper",
                    pageFixedToolbar: "ui-panel-fixed-toolbar",
                    pageContentPrefix: "ui-panel-page-content",
                    animate: "ui-panel-animate"
                },
                animate: !0,
                theme: null,
                position: "left",
                dismissible: !0,
                display: "reveal",
                swipeClose: !0,
                positionFixed: !1
            },
            _panelID: null,
            _closeLink: null,
            _parentPage: null,
            _page: null,
            _modal: null,
            _panelInner: null,
            _wrapper: null,
            _fixedToolbars: null,
            _create: function () {
                var b = this.element,
                    c = b.closest(":jqmData(role='page')");
                a.extend(this, {
                    _panelID: b.attr("id"),
                    _closeLink: b.find(":jqmData(rel='close')"),
                    _parentPage: c.length > 0 ? c : !1,
                    _page: this._getPage,
                    _panelInner: this._getPanelInner(),
                    _wrapper: this._getWrapper,
                    _fixedToolbars: this._getFixedToolbars
                }), this._addPanelClasses(), a.support.cssTransform3d && this.options.animate && this.element.addClass(this.options.classes.animate), this._bindUpdateLayout(), this._bindCloseEvents(), this._bindLinkListeners(), this._bindPageEvents(), this.options.dismissible && this._createModal(), this._bindSwipeEvents()
            },
            _getPanelInner: function () {
                var a = this.element.find("." + this.options.classes.panelInner);
                return 0 === a.length && (a = this.element.children().wrapAll("<div class='" + this.options.classes.panelInner + "' />").parent()), a
            },
            _createModal: function () {
                var b = this,
                    c = b._parentPage ? b._parentPage.parent() : b.element.parent();
                b._modal = a("<div class='" + b.options.classes.modal + "' data-panelid='" + b._panelID + "'></div>").on("mousedown", function () {
                    b.close()
                }).appendTo(c)
            },
            _getPage: function () {
                var b = this._parentPage ? this._parentPage : a("." + a.mobile.activePageClass);
                return b
            },
            _getWrapper: function () {
                var a = this._page().find("." + this.options.classes.pageWrapper);
                return 0 === a.length && (a = this._page().children(".ui-header:not(.ui-header-fixed), .ui-content:not(.ui-popup), .ui-footer:not(.ui-footer-fixed)").wrapAll("<div class='" + this.options.classes.pageWrapper + "'></div>").parent()), a
            },
            _getFixedToolbars: function () {
                var b = a("body").children(".ui-header-fixed, .ui-footer-fixed"),
                    c = this._page().find(".ui-header-fixed, .ui-footer-fixed"),
                    d = b.add(c).addClass(this.options.classes.pageFixedToolbar);
                return d
            },
            _getPosDisplayClasses: function (a) {
                return a + "-position-" + this.options.position + " " + a + "-display-" + this.options.display
            },
            _getPanelClasses: function () {
                var a = this.options.classes.panel + " " + this._getPosDisplayClasses(this.options.classes.panel) + " " + this.options.classes.panelClosed + " ui-body-" + (this.options.theme ? this.options.theme : "inherit");
                return this.options.positionFixed && (a += " " + this.options.classes.panelFixed), a
            },
            _addPanelClasses: function () {
                this.element.addClass(this._getPanelClasses())
            },
            _handleCloseClickAndEatEvent: function (a) {
                return a.isDefaultPrevented() ? void 0 : (a.preventDefault(), this.close(), !1)
            },
            _handleCloseClick: function (a) {
                a.isDefaultPrevented() || this.close()
            },
            _bindCloseEvents: function () {
                this._on(this._closeLink, {
                    click: "_handleCloseClick"
                }), this._on({
                    "click a:jqmData(ajax='false')": "_handleCloseClick"
                })
            },
            _positionPanel: function () {
                var c = this,
                    d = c._panelInner.outerHeight(),
                    e = d > a.mobile.getScreenHeight();
                e || !c.options.positionFixed ? (e && (c._unfixPanel(), a.mobile.resetActivePageHeight(d)), b.scrollTo(0, a.mobile.defaultHomeScroll)) : c._fixPanel()
            },
            _bindFixListener: function () {
                this._on(a(b), {
                    throttledresize: "_positionPanel"
                })
            },
            _unbindFixListener: function () {
                this._off(a(b), "throttledresize")
            },
            _unfixPanel: function () {
                this.options.positionFixed && a.support.fixedPosition && this.element.removeClass(this.options.classes.panelFixed)
            },
            _fixPanel: function () {
                this.options.positionFixed && a.support.fixedPosition && this.element.addClass(this.options.classes.panelFixed)
            },
            _bindUpdateLayout: function () {
                var a = this;
                a.element.on("updatelayout", function () {
                    a._open && a._positionPanel()
                })
            },
            _bindLinkListeners: function () {
                this._on("body", {
                    "click a": "_handleClick"
                })
            },
            _handleClick: function (b) {
                if (b.currentTarget.href.split("#")[1] === this._panelID && this._panelID !== c) {
                    b.preventDefault();
                    var d = a(b.target);
                    return d.hasClass("ui-btn") && (d.addClass(a.mobile.activeBtnClass), this.element.one("panelopen panelclose", function () {
                        d.removeClass(a.mobile.activeBtnClass)
                    })), this.toggle(), !1
                }
            },
            _bindSwipeEvents: function () {
                var a = this,
                    b = a._modal ? a.element.add(a._modal) : a.element;
                a.options.swipeClose && ("left" === a.options.position ? b.on("swipeleft.panel", function () {
                    a.close()
                }) : b.on("swiperight.panel", function () {
                    a.close()
                }))
            },
            _bindPageEvents: function () {
                var a = this;
                this.document.on("panelbeforeopen", function (b) {
                    a._open && b.target !== a.element[0] && a.close()
                }).on("keyup.panel", function (b) {
                    27 === b.keyCode && a._open && a.close()
                }), a._parentPage ? this.document.on("pagehide", ":jqmData(role='page')", function () {
                    a._open && a.close(!0)
                }) : this.document.on("pagebeforehide", function () {
                    a._open && a.close(!0)
                })
            },
            _open: !1,
            _pageContentOpenClasses: null,
            _modalOpenClasses: null,
            open: function (b) {
                if (!this._open) {
                    var c = this,
                        d = c.options,
                        e = function () {
                            c.document.off("panelclose"), c._page().jqmData("panel", "open"), a.support.cssTransform3d && d.animate && "overlay" !== d.display && (c._wrapper().addClass(d.classes.animate), c._fixedToolbars().addClass(d.classes.animate)), !b && a.support.cssTransform3d && d.animate ? c.element.animationComplete(f, "transition") : setTimeout(f, 0), d.theme && "overlay" !== d.display && c._page().parent().addClass(d.classes.pageContainer + "-themed " + d.classes.pageContainer + "-" + d.theme), c.element.removeClass(d.classes.panelClosed).addClass(d.classes.panelOpen), c._positionPanel(), c._pageContentOpenClasses = c._getPosDisplayClasses(d.classes.pageContentPrefix), "overlay" !== d.display && (c._page().parent().addClass(d.classes.pageContainer), c._wrapper().addClass(c._pageContentOpenClasses), c._fixedToolbars().addClass(c._pageContentOpenClasses)), c._modalOpenClasses = c._getPosDisplayClasses(d.classes.modal) + " " + d.classes.modalOpen, c._modal && c._modal.addClass(c._modalOpenClasses).height(Math.max(c._modal.height(), c.document.height()))
                        }, f = function () {
                            "overlay" !== d.display && (c._wrapper().addClass(d.classes.pageContentPrefix + "-open"), c._fixedToolbars().addClass(d.classes.pageContentPrefix + "-open")), c._bindFixListener(), c._trigger("open")
                        };
                    c._trigger("beforeopen"), "open" === c._page().jqmData("panel") ? c.document.on("panelclose", function () {
                        e()
                    }) : e(), c._open = !0
                }
            },
            close: function (b) {
                if (this._open) {
                    var c = this,
                        d = this.options,
                        e = function () {
                            c.element.removeClass(d.classes.panelOpen), "overlay" !== d.display && (c._wrapper().removeClass(c._pageContentOpenClasses), c._fixedToolbars().removeClass(c._pageContentOpenClasses)), !b && a.support.cssTransform3d && d.animate ? c.element.animationComplete(f, "transition") : setTimeout(f, 0), c._modal && c._modal.removeClass(c._modalOpenClasses)
                        }, f = function () {
                            d.theme && "overlay" !== d.display && c._page().parent().removeClass(d.classes.pageContainer + "-themed " + d.classes.pageContainer + "-" + d.theme), c.element.addClass(d.classes.panelClosed), "overlay" !== d.display && (c._page().parent().removeClass(d.classes.pageContainer), c._wrapper().removeClass(d.classes.pageContentPrefix + "-open"), c._fixedToolbars().removeClass(d.classes.pageContentPrefix + "-open")), a.support.cssTransform3d && d.animate && "overlay" !== d.display && (c._wrapper().removeClass(d.classes.animate), c._fixedToolbars().removeClass(d.classes.animate)), c._fixPanel(), c._unbindFixListener(), a.mobile.resetActivePageHeight(), c._page().jqmRemoveData("panel"), c._trigger("close")
                        };
                    c._trigger("beforeclose"), e(), c._open = !1
                }
            },
            toggle: function () {
                this[this._open ? "close" : "open"]()
            },
            _destroy: function () {
                var b, c = this.options,
                    d = a("body > :mobile-panel").length + a.mobile.activePage.find(":mobile-panel").length > 1;
                "overlay" !== c.display && (b = a("body > :mobile-panel").add(a.mobile.activePage.find(":mobile-panel")), 0 === b.not(".ui-panel-display-overlay").not(this.element).length && this._wrapper().children().unwrap(), this._open && (this._fixedToolbars().removeClass(c.classes.pageContentPrefix + "-open"), a.support.cssTransform3d && c.animate && this._fixedToolbars().removeClass(c.classes.animate), this._page().parent().removeClass(c.classes.pageContainer), c.theme && this._page().parent().removeClass(c.classes.pageContainer + "-themed " + c.classes.pageContainer + "-" + c.theme))), d || this.document.off("panelopen panelclose"), this._open && this._page().jqmRemoveData("panel"), this._panelInner.children().unwrap(), this.element.removeClass([this._getPanelClasses(), c.classes.panelOpen, c.classes.animate].join(" ")).off("swipeleft.panel swiperight.panel").off("panelbeforeopen").off("panelhide").off("keyup.panel").off("updatelayout"), this._modal && this._modal.remove()
            }
        })
    }(a),
    function (a, b) {
        a.widget("mobile.table", {
            options: {
                classes: {
                    table: "ui-table"
                },
                enhanced: !1
            },
            _create: function () {
                this.options.enhanced || this.element.addClass(this.options.classes.table), a.extend(this, {
                    headers: b,
                    allHeaders: b
                }), this._refresh(!0)
            },
            _setHeaders: function () {
                var a = this.element.find("thead tr");
                this.headers = this.element.find("tr:eq(0)").children(), this.allHeaders = this.headers.add(a.children())
            },
            refresh: function () {
                this._refresh()
            },
            rebuild: a.noop,
            _refresh: function () {
                var b = this.element,
                    c = b.find("thead tr");
                this._setHeaders(), c.each(function () {
                    var d = 0;
                    a(this).children().each(function () {
                        var e, f = parseInt(this.getAttribute("colspan"), 10),
                            g = ":nth-child(" + (d + 1) + ")";
                        if (this.setAttribute("data-" + a.mobile.ns + "colstart", d + 1), f)
                            for (e = 0; f - 1 > e; e++) d++, g += ", :nth-child(" + (d + 1) + ")";
                        a(this).jqmData("cells", b.find("tr").not(c.eq(0)).not(this).children(g)), d++
                    })
                })
            }
        })
    }(a),
    function (a) {
        a.widget("mobile.table", a.mobile.table, {
            options: {
                mode: "columntoggle",
                columnBtnTheme: null,
                columnPopupTheme: null,
                columnBtnText: "Columns...",
                classes: a.extend(a.mobile.table.prototype.options.classes, {
                    popup: "ui-table-columntoggle-popup",
                    columnBtn: "ui-table-columntoggle-btn",
                    priorityPrefix: "ui-table-priority-",
                    columnToggleTable: "ui-table-columntoggle"
                })
            },
            _create: function () {
                this._super(), "columntoggle" === this.options.mode && (a.extend(this, {
                    _menu: null
                }), this.options.enhanced ? (this._menu = a(this.document[0].getElementById(this._id() + "-popup")).children().first(), this._addToggles(this._menu, !0)) : (this._menu = this._enhanceColToggle(), this.element.addClass(this.options.classes.columnToggleTable)), this._setupEvents(), this._setToggleState())
            },
            _id: function () {
                return this.element.attr("id") || this.widgetName + this.uuid
            },
            _setupEvents: function () {
                this._on(this.window, {
                    throttledresize: "_setToggleState"
                }), this._on(this._menu, {
                    "change input": "_menuInputChange"
                })
            },
            _addToggles: function (b, c) {
                var d, e = 0,
                    f = this.options,
                    g = b.controlgroup("container");
                c ? d = b.find("input") : g.empty(), this.headers.not("td").each(function () {
                    var b = a(this),
                        h = a.mobile.getAttribute(this, "priority"),
                        i = b.add(b.jqmData("cells"));
                    h && (i.addClass(f.classes.priorityPrefix + h), (c ? d.eq(e++) : a("<label><input type='checkbox' checked />" + (b.children("abbr").first().attr("title") || b.text()) + "</label>").appendTo(g).children(0).checkboxradio({
                        theme: f.columnPopupTheme
                    })).jqmData("cells", i))
                }), c || b.controlgroup("refresh")
            },
            _menuInputChange: function (b) {
                var c = a(b.target),
                    d = c[0].checked;
                c.jqmData("cells").toggleClass("ui-table-cell-hidden", !d).toggleClass("ui-table-cell-visible", d), c[0].getAttribute("locked") ? (c.removeAttr("locked"), this._unlockCells(c.jqmData("cells"))) : c.attr("locked", !0)
            },
            _unlockCells: function (a) {
                a.removeClass("ui-table-cell-hidden ui-table-cell-visible")
            },
            _enhanceColToggle: function () {
                var b, c, d, e, f = this.element,
                    g = this.options,
                    h = a.mobile.ns,
                    i = this.document[0].createDocumentFragment();
                return b = this._id() + "-popup", c = a("<a href='#" + b + "' class='" + g.classes.columnBtn + " ui-btn ui-btn-" + (g.columnBtnTheme || "a") + " ui-corner-all ui-shadow ui-mini' data-" + h + "rel='popup'>" + g.columnBtnText + "</a>"), d = a("<div class='" + g.classes.popup + "' id='" + b + "'></div>"), e = a("<fieldset></fieldset>").controlgroup(), this._addToggles(e, !1), e.appendTo(d), i.appendChild(d[0]), i.appendChild(c[0]), f.before(i), d.popup(), e
            },
            rebuild: function () {
                this._super(), "columntoggle" === this.options.mode && this._refresh(!1)
            },
            _refresh: function (a) {
                this._super(a), a || "columntoggle" !== this.options.mode || (this._unlockCells(this.allHeaders), this._addToggles(this._menu, a), this._setToggleState())
            },
            _setToggleState: function () {
                this._menu.find("input").each(function () {
                    var b = a(this);
                    this.checked = "table-cell" === b.jqmData("cells").eq(0).css("display"), b.checkboxradio("refresh")
                })
            },
            _destroy: function () {
                this._super()
            }
        })
    }(a),
    function (a) {
        a.widget("mobile.table", a.mobile.table, {
            options: {
                mode: "reflow",
                classes: a.extend(a.mobile.table.prototype.options.classes, {
                    reflowTable: "ui-table-reflow",
                    cellLabels: "ui-table-cell-label"
                })
            },
            _create: function () {
                this._super(), "reflow" === this.options.mode && (this.options.enhanced || (this.element.addClass(this.options.classes.reflowTable), this._updateReflow()))
            },
            rebuild: function () {
                this._super(), "reflow" === this.options.mode && this._refresh(!1)
            },
            _refresh: function (a) {
                this._super(a), a || "reflow" !== this.options.mode || this._updateReflow()
            },
            _updateReflow: function () {
                var b = this,
                    c = this.options;
                a(b.allHeaders.get().reverse()).each(function () {
                    var d, e, f = a(this).jqmData("cells"),
                        g = a.mobile.getAttribute(this, "colstart"),
                        h = f.not(this).filter("thead th").length && " ui-table-cell-label-top",
                        i = a(this).text();
                    "" !== i && (h ? (d = parseInt(this.getAttribute("colspan"), 10), e = "", d && (e = "td:nth-child(" + d + "n + " + g + ")"), b._addLabels(f.filter(e), c.classes.cellLabels + h, i)) : b._addLabels(f, c.classes.cellLabels, i))
                })
            },
            _addLabels: function (a, b, c) {
                a.not(":has(b." + b + ")").prepend("<b class='" + b + "'>" + c + "</b>")
            }
        })
    }(a),
    function (a, c) {
        var d = function (b, c) {
            return -1 === ("" + (a.mobile.getAttribute(this, "filtertext") || a(this).text())).toLowerCase().indexOf(c)
        };
        a.widget("mobile.filterable", {
            initSelector: ":jqmData(filter='true')",
            options: {
                filterReveal: !1,
                filterCallback: d,
                enhanced: !1,
                input: null,
                children: "> li, > option, > optgroup option, > tbody tr, > .ui-controlgroup-controls > .ui-btn, > .ui-controlgroup-controls > .ui-checkbox, > .ui-controlgroup-controls > .ui-radio"
            },
            _create: function () {
                var b = this.options;
                a.extend(this, {
                    _search: null,
                    _timer: 0
                }), this._setInput(b.input), b.enhanced || this._filterItems((this._search && this._search.val() || "").toLowerCase())
            },
            _onKeyUp: function () {
                var c, d, e = this._search;
                if (e) {
                    if (c = e.val().toLowerCase(), d = a.mobile.getAttribute(e[0], "lastval") + "", d && d === c) return;
                    this._timer && (b.clearTimeout(this._timer), this._timer = 0), this._timer = this._delay(function () {
                        this._trigger("beforefilter", null, {
                            input: e
                        }), e[0].setAttribute("data-" + a.mobile.ns + "lastval", c), this._filterItems(c), this._timer = 0
                    }, 250)
                }
            },
            _getFilterableItems: function () {
                var b = this.element,
                    c = this.options.children,
                    d = c ? a.isFunction(c) ? c() : c.nodeName ? a(c) : c.jquery ? c : this.element.find(c) : {
                        length: 0
                    };
                return 0 === d.length && (d = b.children()), d
            },
            _filterItems: function (b) {
                var c, e, f, g, h = [],
                    i = [],
                    j = this.options,
                    k = this._getFilterableItems();
                if (null != b)
                    for (e = j.filterCallback || d, f = k.length, c = 0; f > c; c++) g = e.call(k[c], c, b) ? i : h, g.push(k[c]);
                0 === i.length ? k[j.filterReveal ? "addClass" : "removeClass"]("ui-screen-hidden") : (a(i).addClass("ui-screen-hidden"), a(h).removeClass("ui-screen-hidden")), this._refreshChildWidget(), this._trigger("filter", null, {
                    items: k
                })
            },
            _refreshChildWidget: function () {
                var b, c, d = ["collapsibleset", "selectmenu", "controlgroup", "listview"];
                for (c = d.length - 1; c > -1; c--) b = d[c], a.mobile[b] && (b = this.element.data("mobile-" + b), b && a.isFunction(b.refresh) && b.refresh())
            },
            _setInput: function (c) {
                var d = this._search;
                this._timer && (b.clearTimeout(this._timer), this._timer = 0), d && (this._off(d, "keyup change input"), d = null), c && (d = c.jquery ? c : c.nodeName ? a(c) : this.document.find(c), this._on(d, {
                    keyup: "_onKeyUp",
                    change: "_onKeyUp",
                    input: "_onKeyUp"
                })), this._search = d
            },
            _setOptions: function (a) {
                var b = !(a.filterReveal === c && a.filterCallback === c && a.children === c);
                this._super(a), a.input !== c && (this._setInput(a.input), b = !0), b && this.refresh()
            },
            _destroy: function () {
                var a = this.options,
                    b = this._getFilterableItems();
                a.enhanced ? b.toggleClass("ui-screen-hidden", a.filterReveal) : b.removeClass("ui-screen-hidden")
            },
            refresh: function () {
                this._timer && (b.clearTimeout(this._timer), this._timer = 0), this._filterItems((this._search && this._search.val() || "").toLowerCase())
            }
        })
    }(a),
    function (a, b) {
        var c = function (a, b) {
            return function (c) {
                b.call(this, c), a._syncTextInputOptions(c)
            }
        }, d = /(^|\s)ui-li-divider(\s|$)/,
            e = a.mobile.filterable.prototype.options.filterCallback;
        a.mobile.filterable.prototype.options.filterCallback = function (a, b) {
            return !this.className.match(d) && e.call(this, a, b)
        }, a.widget("mobile.filterable", a.mobile.filterable, {
            options: {
                filterPlaceholder: "Filter items...",
                filterTheme: null
            },
            _create: function () {
                var b, c, d = this.element,
                    e = ["collapsibleset", "selectmenu", "controlgroup", "listview"],
                    f = {};
                for (this._super(), a.extend(this, {
                    _widget: null
                }), b = e.length - 1; b > -1; b--)
                    if (c = e[b], a.mobile[c]) {
                        if (this._setWidget(d.data("mobile-" + c))) break;
                        f[c + "create"] = "_handleCreate"
                    }
                this._widget || this._on(d, f)
            },
            _handleCreate: function (a) {
                this._setWidget(this.element.data("mobile-" + a.type.substring(0, a.type.length - 6)))
            },
            _trigger: function (a, b, c) {
                this._widget && "mobile-listview" === this._widget.widgetFullName && "beforefilter" === a && this._widget._trigger("beforefilter", b, c), this._super(a, b, c)
            },
            _setWidget: function (a) {
                return !this._widget && a && (this._widget = a, this._widget._setOptions = c(this, this._widget._setOptions)), this._widget && (this._syncTextInputOptions(this._widget.options), "listview" === this._widget.widgetName && (this._widget.options.hideDividers = !0, this._widget.element.listview("refresh"))), !! this._widget
            },
            _isSearchInternal: function () {
                return this._search && this._search.jqmData("ui-filterable-" + this.uuid + "-internal")
            },
            _setInput: function (b) {
                var c = this.options,
                    d = !0,
                    e = {};
                if (!b) {
                    if (this._isSearchInternal()) return;
                    d = !1, b = a("<input data-" + a.mobile.ns + "type='search' placeholder='" + c.filterPlaceholder + "'></input>").jqmData("ui-filterable-" + this.uuid + "-internal", !0), a("<form class='ui-filterable'></form>").append(b).submit(function (a) {
                        a.preventDefault(), b.blur()
                    }).insertBefore(this.element), a.mobile.textinput && (null != this.options.filterTheme && (e.theme = c.filterTheme), b.textinput(e))
                }
                this._super(b), this._isSearchInternal() && d && this._search.attr("placeholder", this.options.filterPlaceholder)
            },
            _setOptions: function (c) {
                var d = this._super(c);
                return c.filterPlaceholder !== b && this._isSearchInternal() && this._search.attr("placeholder", c.filterPlaceholder), c.filterTheme !== b && this._search && a.mobile.textinput && this._search.textinput("option", "theme", c.filterTheme), d
            },
            _destroy: function () {
                this._isSearchInternal() && this._search.remove(), this._super()
            },
            _syncTextInputOptions: function (c) {
                var d, e = {};
                if (this._isSearchInternal() && a.mobile.textinput) {
                    for (d in a.mobile.textinput.prototype.options) c[d] !== b && (e[d] = "theme" === d && null != this.options.filterTheme ? this.options.filterTheme : c[d]);
                    this._search.textinput("option", e)
                }
            }
        })
    }(a),
    function (a, b) {
        function c() {
            return ++e
        }

        function d(a) {
            return a.hash.length > 1 && decodeURIComponent(a.href.replace(f, "")) === decodeURIComponent(location.href.replace(f, ""))
        }
        var e = 0,
            f = /#.*$/;
        a.widget("ui.tabs", {
            version: "fadf2b312a05040436451c64bbfaf4814bc62c56",
            delay: 300,
            options: {
                active: null,
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _create: function () {
                var b = this,
                    c = this.options;
                this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", c.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function (b) {
                    a(this).is(".ui-state-disabled") && b.preventDefault()
                }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
                    a(this).closest("li").is(".ui-state-disabled") && this.blur()
                }), this._processTabs(), c.active = this._initialActive(), a.isArray(c.disabled) && (c.disabled = a.unique(c.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"), function (a) {
                    return b.tabs.index(a)
                }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(c.active) : a(), this._refresh(), this.active.length && this.load(c.active)
            },
            _initialActive: function () {
                var b = this.options.active,
                    c = this.options.collapsible,
                    d = location.hash.substring(1);
                return null === b && (d && this.tabs.each(function (c, e) {
                    return a(e).attr("aria-controls") === d ? (b = c, !1) : void 0
                }), null === b && (b = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === b || -1 === b) && (b = this.tabs.length ? 0 : !1)), b !== !1 && (b = this.tabs.index(this.tabs.eq(b)), -1 === b && (b = c ? !1 : 0)), !c && b === !1 && this.anchors.length && (b = 0), b
            },
            _getCreateEventData: function () {
                return {
                    tab: this.active,
                    panel: this.active.length ? this._getPanelForTab(this.active) : a()
                }
            },
            _tabKeydown: function (b) {
                var c = a(this.document[0].activeElement).closest("li"),
                    d = this.tabs.index(c),
                    e = !0;
                if (!this._handlePageNav(b)) {
                    switch (b.keyCode) {
                    case a.ui.keyCode.RIGHT:
                    case a.ui.keyCode.DOWN:
                        d++;
                        break;
                    case a.ui.keyCode.UP:
                    case a.ui.keyCode.LEFT:
                        e = !1, d--;
                        break;
                    case a.ui.keyCode.END:
                        d = this.anchors.length - 1;
                        break;
                    case a.ui.keyCode.HOME:
                        d = 0;
                        break;
                    case a.ui.keyCode.SPACE:
                        return b.preventDefault(), clearTimeout(this.activating), void this._activate(d);
                    case a.ui.keyCode.ENTER:
                        return b.preventDefault(), clearTimeout(this.activating), void this._activate(d === this.options.active ? !1 : d);
                    default:
                        return
                    }
                    b.preventDefault(), clearTimeout(this.activating), d = this._focusNextTab(d, e), b.ctrlKey || (c.attr("aria-selected", "false"), this.tabs.eq(d).attr("aria-selected", "true"), this.activating = this._delay(function () {
                        this.option("active", d)
                    }, this.delay))
                }
            },
            _panelKeydown: function (b) {
                this._handlePageNav(b) || b.ctrlKey && b.keyCode === a.ui.keyCode.UP && (b.preventDefault(), this.active.focus())
            },
            _handlePageNav: function (b) {
                return b.altKey && b.keyCode === a.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : b.altKey && b.keyCode === a.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
            },
            _findNextTab: function (b, c) {
                function d() {
                    return b > e && (b = 0), 0 > b && (b = e), b
                }
                for (var e = this.tabs.length - 1; - 1 !== a.inArray(d(), this.options.disabled);) b = c ? b + 1 : b - 1;
                return b
            },
            _focusNextTab: function (a, b) {
                return a = this._findNextTab(a, b), this.tabs.eq(a).focus(), a
            },
            _setOption: function (a, b) {
                return "active" === a ? void this._activate(b) : "disabled" === a ? void this._setupDisabled(b) : (this._super(a, b), "collapsible" === a && (this.element.toggleClass("ui-tabs-collapsible", b), b || this.options.active !== !1 || this._activate(0)), "event" === a && this._setupEvents(b), void("heightStyle" === a && this._setupHeightStyle(b)))
            },
            _tabId: function (a) {
                return a.attr("aria-controls") || "ui-tabs-" + c()
            },
            _sanitizeSelector: function (a) {
                return a ? a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function () {
                var b = this.options,
                    c = this.tablist.children(":has(a[href])");
                b.disabled = a.map(c.filter(".ui-state-disabled"), function (a) {
                    return c.index(a)
                }), this._processTabs(), b.active !== !1 && this.anchors.length ? this.active.length && !a.contains(this.tablist[0], this.active[0]) ? this.tabs.length === b.disabled.length ? (b.active = !1, this.active = a()) : this._activate(this._findNextTab(Math.max(0, b.active - 1), !1)) : b.active = this.tabs.index(this.active) : (b.active = !1, this.active = a()), this._refresh()
            },
            _refresh: function () {
                this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    tabIndex: -1
                }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                    "aria-selected": "true",
                    tabIndex: 0
                }), this._getPanelForTab(this.active).show().attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                })) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function () {
                var b = this;
                this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                    role: "tab",
                    tabIndex: -1
                }), this.anchors = this.tabs.map(function () {
                    return a("a", this)[0]
                }).addClass("ui-tabs-anchor").attr({
                    role: "presentation",
                    tabIndex: -1
                }), this.panels = a(), this.anchors.each(function (c, e) {
                    var f, g, h, i = a(e).uniqueId().attr("id"),
                        j = a(e).closest("li"),
                        k = j.attr("aria-controls");
                    d(e) ? (f = e.hash, g = b.element.find(b._sanitizeSelector(f))) : (h = b._tabId(j), f = "#" + h, g = b.element.find(f), g.length || (g = b._createPanel(h), g.insertAfter(b.panels[c - 1] || b.tablist)), g.attr("aria-live", "polite")), g.length && (b.panels = b.panels.add(g)), k && j.data("ui-tabs-aria-controls", k), j.attr({
                        "aria-controls": f.substring(1),
                        "aria-labelledby": i
                    }), g.attr("aria-labelledby", i)
                }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
            },
            _getList: function () {
                return this.element.find("ol,ul").eq(0)
            },
            _createPanel: function (b) {
                return a("<div>").attr("id", b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
            },
            _setupDisabled: function (b) {
                a.isArray(b) && (b.length ? b.length === this.anchors.length && (b = !0) : b = !1);
                for (var c, d = 0; c = this.tabs[d]; d++) b === !0 || -1 !== a.inArray(d, b) ? a(c).addClass("ui-state-disabled").attr("aria-disabled", "true") : a(c).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                this.options.disabled = b
            },
            _setupEvents: function (b) {
                var c = {
                    click: function (a) {
                        a.preventDefault()
                    }
                };
                b && a.each(b.split(" "), function (a, b) {
                    c[b] = "_eventHandler"
                }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, c), this._on(this.tabs, {
                    keydown: "_tabKeydown"
                }), this._on(this.panels, {
                    keydown: "_panelKeydown"
                }), this._focusable(this.tabs), this._hoverable(this.tabs)
            },
            _setupHeightStyle: function (b) {
                var c, d = this.element.parent();
                "fill" === b ? (c = d.height(), c -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
                    var b = a(this),
                        d = b.css("position");
                    "absolute" !== d && "fixed" !== d && (c -= b.outerHeight(!0))
                }), this.element.children().not(this.panels).each(function () {
                    c -= a(this).outerHeight(!0)
                }), this.panels.each(function () {
                    a(this).height(Math.max(0, c - a(this).innerHeight() + a(this).height()))
                }).css("overflow", "auto")) : "auto" === b && (c = 0, this.panels.each(function () {
                    c = Math.max(c, a(this).height("").height())
                }).height(c))
            },
            _eventHandler: function (b) {
                var c = this.options,
                    d = this.active,
                    e = a(b.currentTarget),
                    f = e.closest("li"),
                    g = f[0] === d[0],
                    h = g && c.collapsible,
                    i = h ? a() : this._getPanelForTab(f),
                    j = d.length ? this._getPanelForTab(d) : a(),
                    k = {
                        oldTab: d,
                        oldPanel: j,
                        newTab: h ? a() : f,
                        newPanel: i
                    };
                b.preventDefault(), f.hasClass("ui-state-disabled") || f.hasClass("ui-tabs-loading") || this.running || g && !c.collapsible || this._trigger("beforeActivate", b, k) === !1 || (c.active = h ? !1 : this.tabs.index(f), this.active = g ? a() : f, this.xhr && this.xhr.abort(), j.length || i.length || a.error("jQuery UI Tabs: Mismatching fragment identifier."), i.length && this.load(this.tabs.index(f), b), this._toggle(b, k))
            },
            _toggle: function (b, c) {
                function d() {
                    f.running = !1, f._trigger("activate", b, c)
                }

                function e() {
                    c.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), g.length && f.options.show ? f._show(g, f.options.show, d) : (g.show(), d())
                }
                var f = this,
                    g = c.newPanel,
                    h = c.oldPanel;
                this.running = !0, h.length && this.options.hide ? this._hide(h, this.options.hide, function () {
                    c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), e()
                }) : (c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), h.hide(), e()), h.attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }), c.oldTab.attr("aria-selected", "false"), g.length && h.length ? c.oldTab.attr("tabIndex", -1) : g.length && this.tabs.filter(function () {
                    return 0 === a(this).attr("tabIndex")
                }).attr("tabIndex", -1), g.attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                }), c.newTab.attr({
                    "aria-selected": "true",
                    tabIndex: 0
                })
            },
            _activate: function (b) {
                var c, d = this._findActive(b);
                d[0] !== this.active[0] && (d.length || (d = this.active), c = d.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: c,
                    currentTarget: c,
                    preventDefault: a.noop
                }))
            },
            _findActive: function (b) {
                return b === !1 ? a() : this.tabs.eq(b)
            },
            _getIndex: function (a) {
                return "string" == typeof a && (a = this.anchors.index(this.anchors.filter("[href$='" + a + "']"))), a
            },
            _destroy: function () {
                this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
                    a.data(this, "ui-tabs-destroy") ? a(this).remove() : a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                }), this.tabs.each(function () {
                    var b = a(this),
                        c = b.data("ui-tabs-aria-controls");
                    c ? b.attr("aria-controls", c).removeData("ui-tabs-aria-controls") : b.removeAttr("aria-controls")
                }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function (c) {
                var d = this.options.disabled;
                d !== !1 && (c === b ? d = !1 : (c = this._getIndex(c), d = a.isArray(d) ? a.map(d, function (a) {
                    return a !== c ? a : null
                }) : a.map(this.tabs, function (a, b) {
                    return b !== c ? b : null
                })), this._setupDisabled(d))
            },
            disable: function (c) {
                var d = this.options.disabled;
                if (d !== !0) {
                    if (c === b) d = !0;
                    else {
                        if (c = this._getIndex(c), -1 !== a.inArray(c, d)) return;
                        d = a.isArray(d) ? a.merge([c], d).sort() : [c]
                    }
                    this._setupDisabled(d)
                }
            },
            load: function (b, c) {
                b = this._getIndex(b);
                var e = this,
                    f = this.tabs.eq(b),
                    g = f.find(".ui-tabs-anchor"),
                    h = this._getPanelForTab(f),
                    i = {
                        tab: f,
                        panel: h
                    };
                d(g[0]) || (this.xhr = a.ajax(this._ajaxSettings(g, c, i)), this.xhr && "canceled" !== this.xhr.statusText && (f.addClass("ui-tabs-loading"), h.attr("aria-busy", "true"), this.xhr.success(function (a) {
                    setTimeout(function () {
                        h.html(a), e._trigger("load", c, i)
                    }, 1)
                }).complete(function (a, b) {
                    setTimeout(function () {
                        "abort" === b && e.panels.stop(!1, !0), f.removeClass("ui-tabs-loading"), h.removeAttr("aria-busy"), a === e.xhr && delete e.xhr
                    }, 1)
                })))
            },
            _ajaxSettings: function (b, c, d) {
                var e = this;
                return {
                    url: b.attr("href"),
                    beforeSend: function (b, f) {
                        return e._trigger("beforeLoad", c, a.extend({
                            jqXHR: b,
                            ajaxSettings: f
                        }, d))
                    }
                }
            },
            _getPanelForTab: function (b) {
                var c = a(b).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + c))
            }
        })
    }(a),
    function () {}(a),
    function (a, b) {
        function c(a) {
            e = a.originalEvent, i = e.accelerationIncludingGravity, f = Math.abs(i.x), g = Math.abs(i.y), h = Math.abs(i.z), !b.orientation && (f > 7 || (h > 6 && 8 > g || 8 > h && g > 6) && f > 5) ? d.enabled && d.disable() : d.enabled || d.enable()
        }
        a.mobile.iosorientationfixEnabled = !0;
        var d, e, f, g, h, i, j = navigator.userAgent;
        return /iPhone|iPad|iPod/.test(navigator.platform) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(j) && j.indexOf("AppleWebKit") > -1 ? (d = a.mobile.zoom, void a.mobile.document.on("mobileinit", function () {
            a.mobile.iosorientationfixEnabled && a.mobile.window.bind("orientationchange.iosorientationfix", d.enable).bind("devicemotion.iosorientationfix", c)
        })) : void(a.mobile.iosorientationfixEnabled = !1)
    }(a, this),
    function (a, b) {
        function d() {
            e.removeClass("ui-mobile-rendering")
        }
        var e = a("html"),
            f = a.mobile.window;
        a(b.document).trigger("mobileinit"), a.mobile.gradeA() && (a.mobile.ajaxBlacklist && (a.mobile.ajaxEnabled = !1), e.addClass("ui-mobile ui-mobile-rendering"), setTimeout(d, 5e3), a.extend(a.mobile, {
            initializePage: function () {
                var b = a.mobile.path,
                    e = a(":jqmData(role='page'), :jqmData(role='dialog')"),
                    g = b.stripHash(b.stripQueryParams(b.parseLocation().hash)),
                    h = c.getElementById(g);
                e.length || (e = a("body").wrapInner("<div data-" + a.mobile.ns + "role='page'></div>").children(0)), e.each(function () {
                    var b = a(this);
                    b[0].getAttribute("data-" + a.mobile.ns + "url") || b.attr("data-" + a.mobile.ns + "url", b.attr("id") || location.pathname + location.search)
                }), a.mobile.firstPage = e.first(), a.mobile.pageContainer = a.mobile.firstPage.parent().addClass("ui-mobile-viewport").pagecontainer(), a.mobile.navreadyDeferred.resolve(), f.trigger("pagecontainercreate"), a.mobile.loading("show"), d(), a.mobile.hashListeningEnabled && a.mobile.path.isHashValid(location.hash) && (a(h).is(":jqmData(role='page')") || a.mobile.path.isPath(g) || g === a.mobile.dialogHashKey) ? a.event.special.navigate.isPushStateEnabled() ? (a.mobile.navigate.history.stack = [], a.mobile.navigate(a.mobile.path.isPath(location.hash) ? location.hash : location.href)) : f.trigger("hashchange", [!0]) : (a.mobile.path.isHashValid(location.hash) && (a.mobile.navigate.history.initialDst = g.replace("#", "")), a.event.special.navigate.isPushStateEnabled() && a.mobile.navigate.navigator.squash(b.parseLocation().href), a.mobile.changePage(a.mobile.firstPage, {
                    transition: "none",
                    reverse: !0,
                    changeHash: !1,
                    fromHashChange: !0
                }))
            }
        }), a(function () {
            a.support.inlineSVG(), a.mobile.hideUrlBar && b.scrollTo(0, 1), a.mobile.defaultHomeScroll = a.support.scrollTop && 1 !== a.mobile.window.scrollTop() ? 1 : 0, a.mobile.autoInitializePage && a.mobile.initializePage(), a.mobile.hideUrlBar && f.load(a.mobile.silentScroll), a.support.cssPointerEvents || a.mobile.document.delegate(".ui-state-disabled,.ui-disabled", "vclick", function (a) {
                a.preventDefault(), a.stopImmediatePropagation()
            })
        }))
    }(a, this)
});
//# sourceMappingURL=jquery.mobile-1.4.1.min.map