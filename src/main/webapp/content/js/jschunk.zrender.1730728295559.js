(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk.zrender"], {
    "04f6": function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return f
        }
        ));
        var n = 32
          , i = 7;
        function a(t) {
            var e = 0;
            while (t >= n)
                e |= 1 & t,
                t >>= 1;
            return t + e
        }
        function o(t, e, r, n) {
            var i = e + 1;
            if (i === r)
                return 1;
            if (n(t[i++], t[e]) < 0) {
                while (i < r && n(t[i], t[i - 1]) < 0)
                    i++;
                s(t, e, i)
            } else
                while (i < r && n(t[i], t[i - 1]) >= 0)
                    i++;
            return i - e
        }
        function s(t, e, r) {
            r--;
            while (e < r) {
                var n = t[e];
                t[e++] = t[r],
                t[r--] = n
            }
        }
        function u(t, e, r, n, i) {
            for (n === e && n++; n < r; n++) {
                var a, o = t[n], s = e, u = n;
                while (s < u)
                    a = s + u >>> 1,
                    i(o, t[a]) < 0 ? u = a : s = a + 1;
                var h = n - s;
                switch (h) {
                case 3:
                    t[s + 3] = t[s + 2];
                case 2:
                    t[s + 2] = t[s + 1];
                case 1:
                    t[s + 1] = t[s];
                    break;
                default:
                    while (h > 0)
                        t[s + h] = t[s + h - 1],
                        h--
                }
                t[s] = o
            }
        }
        function h(t, e, r, n, i, a) {
            var o = 0
              , s = 0
              , u = 1;
            if (a(t, e[r + i]) > 0) {
                s = n - i;
                while (u < s && a(t, e[r + i + u]) > 0)
                    o = u,
                    u = 1 + (u << 1),
                    u <= 0 && (u = s);
                u > s && (u = s),
                o += i,
                u += i
            } else {
                s = i + 1;
                while (u < s && a(t, e[r + i - u]) <= 0)
                    o = u,
                    u = 1 + (u << 1),
                    u <= 0 && (u = s);
                u > s && (u = s);
                var h = o;
                o = i - u,
                u = i - h
            }
            o++;
            while (o < u) {
                var l = o + (u - o >>> 1);
                a(t, e[r + l]) > 0 ? o = l + 1 : u = l
            }
            return u
        }
        function l(t, e, r, n, i, a) {
            var o = 0
              , s = 0
              , u = 1;
            if (a(t, e[r + i]) < 0) {
                s = i + 1;
                while (u < s && a(t, e[r + i - u]) < 0)
                    o = u,
                    u = 1 + (u << 1),
                    u <= 0 && (u = s);
                u > s && (u = s);
                var h = o;
                o = i - u,
                u = i - h
            } else {
                s = n - i;
                while (u < s && a(t, e[r + i + u]) >= 0)
                    o = u,
                    u = 1 + (u << 1),
                    u <= 0 && (u = s);
                u > s && (u = s),
                o += i,
                u += i
            }
            o++;
            while (o < u) {
                var l = o + (u - o >>> 1);
                a(t, e[r + l]) < 0 ? u = l : o = l + 1
            }
            return u
        }
        function c(t, e) {
            var r, n, a = i, o = 0, s = 0;
            o = t.length;
            var u = [];
            function c(t, e) {
                r[s] = t,
                n[s] = e,
                s += 1
            }
            function f() {
                while (s > 1) {
                    var t = s - 2;
                    if (t >= 1 && n[t - 1] <= n[t] + n[t + 1] || t >= 2 && n[t - 2] <= n[t] + n[t - 1])
                        n[t - 1] < n[t + 1] && t--;
                    else if (n[t] > n[t + 1])
                        break;
                    d(t)
                }
            }
            function p() {
                while (s > 1) {
                    var t = s - 2;
                    t > 0 && n[t - 1] < n[t + 1] && t--,
                    d(t)
                }
            }
            function d(i) {
                var a = r[i]
                  , o = n[i]
                  , u = r[i + 1]
                  , c = n[i + 1];
                n[i] = o + c,
                i === s - 3 && (r[i + 1] = r[i + 2],
                n[i + 1] = n[i + 2]),
                s--;
                var f = l(t[u], t, a, o, 0, e);
                a += f,
                o -= f,
                0 !== o && (c = h(t[a + o - 1], t, u, c, c - 1, e),
                0 !== c && (o <= c ? v(a, o, u, c) : y(a, o, u, c)))
            }
            function v(r, n, o, s) {
                var c = 0;
                for (c = 0; c < n; c++)
                    u[c] = t[r + c];
                var f = 0
                  , p = o
                  , d = r;
                if (t[d++] = t[p++],
                0 !== --s)
                    if (1 !== n) {
                        var v, y, g, _ = a;
                        while (1) {
                            v = 0,
                            y = 0,
                            g = !1;
                            do {
                                if (e(t[p], u[f]) < 0) {
                                    if (t[d++] = t[p++],
                                    y++,
                                    v = 0,
                                    0 === --s) {
                                        g = !0;
                                        break
                                    }
                                } else if (t[d++] = u[f++],
                                v++,
                                y = 0,
                                1 === --n) {
                                    g = !0;
                                    break
                                }
                            } while ((v | y) < _);
                            if (g)
                                break;
                            do {
                                if (v = l(t[p], u, f, n, 0, e),
                                0 !== v) {
                                    for (c = 0; c < v; c++)
                                        t[d + c] = u[f + c];
                                    if (d += v,
                                    f += v,
                                    n -= v,
                                    n <= 1) {
                                        g = !0;
                                        break
                                    }
                                }
                                if (t[d++] = t[p++],
                                0 === --s) {
                                    g = !0;
                                    break
                                }
                                if (y = h(u[f], t, p, s, 0, e),
                                0 !== y) {
                                    for (c = 0; c < y; c++)
                                        t[d + c] = t[p + c];
                                    if (d += y,
                                    p += y,
                                    s -= y,
                                    0 === s) {
                                        g = !0;
                                        break
                                    }
                                }
                                if (t[d++] = u[f++],
                                1 === --n) {
                                    g = !0;
                                    break
                                }
                                _--
                            } while (v >= i || y >= i);
                            if (g)
                                break;
                            _ < 0 && (_ = 0),
                            _ += 2
                        }
                        if (a = _,
                        a < 1 && (a = 1),
                        1 === n) {
                            for (c = 0; c < s; c++)
                                t[d + c] = t[p + c];
                            t[d + s] = u[f]
                        } else {
                            if (0 === n)
                                throw new Error;
                            for (c = 0; c < n; c++)
                                t[d + c] = u[f + c]
                        }
                    } else {
                        for (c = 0; c < s; c++)
                            t[d + c] = t[p + c];
                        t[d + s] = u[f]
                    }
                else
                    for (c = 0; c < n; c++)
                        t[d + c] = u[f + c]
            }
            function y(r, n, o, s) {
                var c = 0;
                for (c = 0; c < s; c++)
                    u[c] = t[o + c];
                var f = r + n - 1
                  , p = s - 1
                  , d = o + s - 1
                  , v = 0
                  , y = 0;
                if (t[d--] = t[f--],
                0 !== --n)
                    if (1 !== s) {
                        var g = a;
                        while (1) {
                            var _ = 0
                              , b = 0
                              , m = !1;
                            do {
                                if (e(u[p], t[f]) < 0) {
                                    if (t[d--] = t[f--],
                                    _++,
                                    b = 0,
                                    0 === --n) {
                                        m = !0;
                                        break
                                    }
                                } else if (t[d--] = u[p--],
                                b++,
                                _ = 0,
                                1 === --s) {
                                    m = !0;
                                    break
                                }
                            } while ((_ | b) < g);
                            if (m)
                                break;
                            do {
                                if (_ = n - l(u[p], t, r, n, n - 1, e),
                                0 !== _) {
                                    for (d -= _,
                                    f -= _,
                                    n -= _,
                                    y = d + 1,
                                    v = f + 1,
                                    c = _ - 1; c >= 0; c--)
                                        t[y + c] = t[v + c];
                                    if (0 === n) {
                                        m = !0;
                                        break
                                    }
                                }
                                if (t[d--] = u[p--],
                                1 === --s) {
                                    m = !0;
                                    break
                                }
                                if (b = s - h(t[f], u, 0, s, s - 1, e),
                                0 !== b) {
                                    for (d -= b,
                                    p -= b,
                                    s -= b,
                                    y = d + 1,
                                    v = p + 1,
                                    c = 0; c < b; c++)
                                        t[y + c] = u[v + c];
                                    if (s <= 1) {
                                        m = !0;
                                        break
                                    }
                                }
                                if (t[d--] = t[f--],
                                0 === --n) {
                                    m = !0;
                                    break
                                }
                                g--
                            } while (_ >= i || b >= i);
                            if (m)
                                break;
                            g < 0 && (g = 0),
                            g += 2
                        }
                        if (a = g,
                        a < 1 && (a = 1),
                        1 === s) {
                            for (d -= n,
                            f -= n,
                            y = d + 1,
                            v = f + 1,
                            c = n - 1; c >= 0; c--)
                                t[y + c] = t[v + c];
                            t[d] = u[p]
                        } else {
                            if (0 === s)
                                throw new Error;
                            for (v = d - (s - 1),
                            c = 0; c < s; c++)
                                t[v + c] = u[c]
                        }
                    } else {
                        for (d -= n,
                        f -= n,
                        y = d + 1,
                        v = f + 1,
                        c = n - 1; c >= 0; c--)
                            t[y + c] = t[v + c];
                        t[d] = u[p]
                    }
                else
                    for (v = d - (s - 1),
                    c = 0; c < s; c++)
                        t[v + c] = u[c]
            }
            return o < 120 ? 5 : o < 1542 ? 10 : o < 119151 ? 19 : 40,
            r = [],
            n = [],
            {
                mergeRuns: f,
                forceMergeRuns: p,
                pushRun: c
            }
        }
        function f(t, e, r, i) {
            r || (r = 0),
            i || (i = t.length);
            var s = i - r;
            if (!(s < 2)) {
                var h = 0;
                if (s < n)
                    return h = o(t, r, i, e),
                    void u(t, r, i, r + h, e);
                var l = c(t, e)
                  , f = a(s);
                do {
                    if (h = o(t, r, i, e),
                    h < f) {
                        var p = s;
                        p > f && (p = f),
                        u(t, r, r + p, r + h, e),
                        h = p
                    }
                    l.pushRun(r, h),
                    l.mergeRuns(),
                    s -= h,
                    r += h
                } while (0 !== s);
                l.forceMergeRuns()
            }
        }
    },
    "0655": function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return o
        }
        ));
        var n = r("8728")
          , i = 1e-8;
        function a(t, e) {
            return Math.abs(t - e) < i
        }
        function o(t, e, r) {
            var i = 0
              , o = t[0];
            if (!o)
                return !1;
            for (var s = 1; s < t.length; s++) {
                var u = t[s];
                i += Object(n["a"])(o[0], o[1], u[0], u[1], e, r),
                o = u
            }
            var h = t[0];
            return a(o[0], h[0]) && a(o[1], h[1]) || (i += Object(n["a"])(o[0], o[1], h[0], h[1], e, r)),
            0 !== i
        }
    },
    "0698": function(t, e, r) {
        "use strict";
        var n = r("2cf4")
          , i = r("6d8b")
          , a = r("21a10")
          , o = r("6fd3")
          , s = r("3437")
          , u = r("5210")
          , h = r("9850")
          , l = r("4bc4")
          , c = r("726e");
        function f(t, e, r) {
            var n = c["d"].createCanvas()
              , i = e.getWidth()
              , a = e.getHeight()
              , o = n.style;
            return o && (o.position = "absolute",
            o.left = "0",
            o.top = "0",
            o.width = i + "px",
            o.height = a + "px",
            n.setAttribute("data-zr-dom-id", t)),
            n.width = i * r,
            n.height = a * r,
            n
        }
        var p = function(t) {
            function e(e, r, a) {
                var o, s = t.call(this) || this;
                s.motionBlur = !1,
                s.lastFrameAlpha = .7,
                s.dpr = 1,
                s.virtual = !1,
                s.config = {},
                s.incremental = !1,
                s.zlevel = 0,
                s.maxRepaintRectCount = 5,
                s.__dirty = !0,
                s.__firstTimePaint = !0,
                s.__used = !1,
                s.__drawIndex = 0,
                s.__startIndex = 0,
                s.__endIndex = 0,
                s.__prevStartIndex = null,
                s.__prevEndIndex = null,
                a = a || n["e"],
                "string" === typeof e ? o = f(e, r, a) : i["isObject"](e) && (o = e,
                e = o.id),
                s.id = e,
                s.dom = o;
                var u = o.style;
                return u && (i["disableUserSelect"](o),
                o.onselectstart = function() {
                    return !1
                }
                ,
                u.padding = "0",
                u.margin = "0",
                u.borderWidth = "0"),
                s.painter = r,
                s.dpr = a,
                s
            }
            return Object(a["a"])(e, t),
            e.prototype.getElementCount = function() {
                return this.__endIndex - this.__startIndex
            }
            ,
            e.prototype.afterBrush = function() {
                this.__prevStartIndex = this.__startIndex,
                this.__prevEndIndex = this.__endIndex
            }
            ,
            e.prototype.initContext = function() {
                this.ctx = this.dom.getContext("2d"),
                this.ctx.dpr = this.dpr
            }
            ,
            e.prototype.setUnpainted = function() {
                this.__firstTimePaint = !0
            }
            ,
            e.prototype.createBackBuffer = function() {
                var t = this.dpr;
                this.domBack = f("back-" + this.id, this.painter, t),
                this.ctxBack = this.domBack.getContext("2d"),
                1 !== t && this.ctxBack.scale(t, t)
            }
            ,
            e.prototype.createRepaintRects = function(t, e, r, n) {
                if (this.__firstTimePaint)
                    return this.__firstTimePaint = !1,
                    null;
                var i, a = [], o = this.maxRepaintRectCount, s = !1, u = new h["a"](0,0,0,0);
                function c(t) {
                    if (t.isFinite() && !t.isZero())
                        if (0 === a.length) {
                            var e = new h["a"](0,0,0,0);
                            e.copy(t),
                            a.push(e)
                        } else {
                            for (var r = !1, n = 1 / 0, i = 0, l = 0; l < a.length; ++l) {
                                var c = a[l];
                                if (c.intersect(t)) {
                                    var f = new h["a"](0,0,0,0);
                                    f.copy(c),
                                    f.union(t),
                                    a[l] = f,
                                    r = !0;
                                    break
                                }
                                if (s) {
                                    u.copy(t),
                                    u.union(c);
                                    var p = t.width * t.height
                                      , d = c.width * c.height
                                      , v = u.width * u.height
                                      , y = v - p - d;
                                    y < n && (n = y,
                                    i = l)
                                }
                            }
                            if (s && (a[i].union(t),
                            r = !0),
                            !r) {
                                e = new h["a"](0,0,0,0);
                                e.copy(t),
                                a.push(e)
                            }
                            s || (s = a.length >= o)
                        }
                }
                for (var f = this.__startIndex; f < this.__endIndex; ++f) {
                    var p = t[f];
                    if (p) {
                        var d = p.shouldBePainted(r, n, !0, !0)
                          , v = p.__isRendered && (p.__dirty & l["a"] || !d) ? p.getPrevPaintRect() : null;
                        v && c(v);
                        var y = d && (p.__dirty & l["a"] || !p.__isRendered) ? p.getPaintRect() : null;
                        y && c(y)
                    }
                }
                for (f = this.__prevStartIndex; f < this.__prevEndIndex; ++f) {
                    p = e[f],
                    d = p.shouldBePainted(r, n, !0, !0);
                    if (p && (!d || !p.__zr) && p.__isRendered) {
                        v = p.getPrevPaintRect();
                        v && c(v)
                    }
                }
                do {
                    i = !1;
                    for (f = 0; f < a.length; )
                        if (a[f].isZero())
                            a.splice(f, 1);
                        else {
                            for (var g = f + 1; g < a.length; )
                                a[f].intersect(a[g]) ? (i = !0,
                                a[f].union(a[g]),
                                a.splice(g, 1)) : g++;
                            f++
                        }
                } while (i);
                return this._paintRects = a,
                a
            }
            ,
            e.prototype.debugGetPaintRects = function() {
                return (this._paintRects || []).slice()
            }
            ,
            e.prototype.resize = function(t, e) {
                var r = this.dpr
                  , n = this.dom
                  , i = n.style
                  , a = this.domBack;
                i && (i.width = t + "px",
                i.height = e + "px"),
                n.width = t * r,
                n.height = e * r,
                a && (a.width = t * r,
                a.height = e * r,
                1 !== r && this.ctxBack.scale(r, r))
            }
            ,
            e.prototype.clear = function(t, e, r) {
                var n = this.dom
                  , a = this.ctx
                  , o = n.width
                  , h = n.height;
                e = e || this.clearColor;
                var l = this.motionBlur && !t
                  , c = this.lastFrameAlpha
                  , f = this.dpr
                  , p = this;
                l && (this.domBack || this.createBackBuffer(),
                this.ctxBack.globalCompositeOperation = "copy",
                this.ctxBack.drawImage(n, 0, 0, o / f, h / f));
                var d = this.domBack;
                function v(t, r, n, o) {
                    if (a.clearRect(t, r, n, o),
                    e && "transparent" !== e) {
                        var h = void 0;
                        i["isGradientObject"](e) ? (h = e.__canvasGradient || Object(s["a"])(a, e, {
                            x: 0,
                            y: 0,
                            width: n,
                            height: o
                        }),
                        e.__canvasGradient = h) : i["isImagePatternObject"](e) && (h = Object(u["c"])(a, e, {
                            dirty: function() {
                                p.setUnpainted(),
                                p.__painter.refresh()
                            }
                        })),
                        a.save(),
                        a.fillStyle = h || e,
                        a.fillRect(t, r, n, o),
                        a.restore()
                    }
                    l && (a.save(),
                    a.globalAlpha = c,
                    a.drawImage(d, t, r, n, o),
                    a.restore())
                }
                !r || l ? v(0, 0, o, h) : r.length && i["each"](r, (function(t) {
                    v(t.x * f, t.y * f, t.width * f, t.height * f)
                }
                ))
            }
            ,
            e
        }(o["a"])
          , d = p
          , v = r("98b7")
          , y = r("22d1")
          , g = 1e5
          , _ = 314159
          , b = .01
          , m = .001;
        function x(t) {
            return !!t && (!!t.__builtin__ || "function" === typeof t.resize && "function" === typeof t.refresh)
        }
        function w(t, e) {
            var r = document.createElement("div");
            return r.style.cssText = ["position:relative", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";",
            r
        }
        var O = function() {
            function t(t, e, r, a) {
                this.type = "canvas",
                this._zlevelList = [],
                this._prevDisplayList = [],
                this._layers = {},
                this._layerConfig = {},
                this._needsManuallyCompositing = !1,
                this.type = "canvas";
                var o = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
                this._opts = r = i["extend"]({}, r || {}),
                this.dpr = r.devicePixelRatio || n["e"],
                this._singleCanvas = o,
                this.root = t;
                var u = t.style;
                u && (i["disableUserSelect"](t),
                t.innerHTML = ""),
                this.storage = e;
                var h = this._zlevelList;
                this._prevDisplayList = [];
                var l = this._layers;
                if (o) {
                    var c = t
                      , f = c.width
                      , p = c.height;
                    null != r.width && (f = r.width),
                    null != r.height && (p = r.height),
                    this.dpr = r.devicePixelRatio || 1,
                    c.width = f * this.dpr,
                    c.height = p * this.dpr,
                    this._width = f,
                    this._height = p;
                    var v = new d(c,this,this.dpr);
                    v.__builtin__ = !0,
                    v.initContext(),
                    l[_] = v,
                    v.zlevel = _,
                    h.push(_),
                    this._domRoot = t
                } else {
                    this._width = Object(s["b"])(t, 0, r),
                    this._height = Object(s["b"])(t, 1, r);
                    var y = this._domRoot = w(this._width, this._height);
                    t.appendChild(y)
                }
            }
            return t.prototype.getType = function() {
                return "canvas"
            }
            ,
            t.prototype.isSingleCanvas = function() {
                return this._singleCanvas
            }
            ,
            t.prototype.getViewportRoot = function() {
                return this._domRoot
            }
            ,
            t.prototype.getViewportRootOffset = function() {
                var t = this.getViewportRoot();
                if (t)
                    return {
                        offsetLeft: t.offsetLeft || 0,
                        offsetTop: t.offsetTop || 0
                    }
            }
            ,
            t.prototype.refresh = function(t) {
                var e = this.storage.getDisplayList(!0)
                  , r = this._prevDisplayList
                  , n = this._zlevelList;
                this._redrawId = Math.random(),
                this._paintList(e, r, t, this._redrawId);
                for (var i = 0; i < n.length; i++) {
                    var a = n[i]
                      , o = this._layers[a];
                    if (!o.__builtin__ && o.refresh) {
                        var s = 0 === i ? this._backgroundColor : null;
                        o.refresh(s)
                    }
                }
                return this._opts.useDirtyRect && (this._prevDisplayList = e.slice()),
                this
            }
            ,
            t.prototype.refreshHover = function() {
                this._paintHoverList(this.storage.getDisplayList(!1))
            }
            ,
            t.prototype._paintHoverList = function(t) {
                var e = t.length
                  , r = this._hoverlayer;
                if (r && r.clear(),
                e) {
                    for (var n, i = {
                        inHover: !0,
                        viewWidth: this._width,
                        viewHeight: this._height
                    }, a = 0; a < e; a++) {
                        var o = t[a];
                        o.__inHover && (r || (r = this._hoverlayer = this.getLayer(g)),
                        n || (n = r.ctx,
                        n.save()),
                        Object(u["a"])(n, o, i, a === e - 1))
                    }
                    n && n.restore()
                }
            }
            ,
            t.prototype.getHoverLayer = function() {
                return this.getLayer(g)
            }
            ,
            t.prototype.paintOne = function(t, e) {
                Object(u["b"])(t, e)
            }
            ,
            t.prototype._paintList = function(t, e, r, n) {
                if (this._redrawId === n) {
                    r = r || !1,
                    this._updateLayerStatus(t);
                    var i = this._doPaintList(t, e, r)
                      , a = i.finished
                      , o = i.needsRefreshHover;
                    if (this._needsManuallyCompositing && this._compositeManually(),
                    o && this._paintHoverList(t),
                    a)
                        this.eachLayer((function(t) {
                            t.afterBrush && t.afterBrush()
                        }
                        ));
                    else {
                        var s = this;
                        Object(v["a"])((function() {
                            s._paintList(t, e, r, n)
                        }
                        ))
                    }
                }
            }
            ,
            t.prototype._compositeManually = function() {
                var t = this.getLayer(_).ctx
                  , e = this._domRoot.width
                  , r = this._domRoot.height;
                t.clearRect(0, 0, e, r),
                this.eachBuiltinLayer((function(n) {
                    n.virtual && t.drawImage(n.dom, 0, 0, e, r)
                }
                ))
            }
            ,
            t.prototype._doPaintList = function(t, e, r) {
                for (var n = this, a = [], o = this._opts.useDirtyRect, s = 0; s < this._zlevelList.length; s++) {
                    var u = this._zlevelList[s]
                      , h = this._layers[u];
                    h.__builtin__ && h !== this._hoverlayer && (h.__dirty || r) && a.push(h)
                }
                for (var l = !0, c = !1, f = function(i) {
                    var s, u = a[i], h = u.ctx, f = o && u.createRepaintRects(t, e, p._width, p._height), d = r ? u.__startIndex : u.__drawIndex, v = !r && u.incremental && Date.now, y = v && Date.now(), g = u.zlevel === p._zlevelList[0] ? p._backgroundColor : null;
                    if (u.__startIndex === u.__endIndex)
                        u.clear(!1, g, f);
                    else if (d === u.__startIndex) {
                        var _ = t[d];
                        _.incremental && _.notClear && !r || u.clear(!1, g, f)
                    }
                    -1 === d && (console.error("For some unknown reason. drawIndex is -1"),
                    d = u.__startIndex);
                    var b = function(e) {
                        var r = {
                            inHover: !1,
                            allClipped: !1,
                            prevEl: null,
                            viewWidth: n._width,
                            viewHeight: n._height
                        };
                        for (s = d; s < u.__endIndex; s++) {
                            var i = t[s];
                            if (i.__inHover && (c = !0),
                            n._doPaintEl(i, u, o, e, r, s === u.__endIndex - 1),
                            v) {
                                var a = Date.now() - y;
                                if (a > 15)
                                    break
                            }
                        }
                        r.prevElClipPaths && h.restore()
                    };
                    if (f)
                        if (0 === f.length)
                            s = u.__endIndex;
                        else
                            for (var m = p.dpr, x = 0; x < f.length; ++x) {
                                var w = f[x];
                                h.save(),
                                h.beginPath(),
                                h.rect(w.x * m, w.y * m, w.width * m, w.height * m),
                                h.clip(),
                                b(w),
                                h.restore()
                            }
                    else
                        h.save(),
                        b(),
                        h.restore();
                    u.__drawIndex = s,
                    u.__drawIndex < u.__endIndex && (l = !1)
                }, p = this, d = 0; d < a.length; d++)
                    f(d);
                return y["a"].wxa && i["each"](this._layers, (function(t) {
                    t && t.ctx && t.ctx.draw && t.ctx.draw()
                }
                )),
                {
                    finished: l,
                    needsRefreshHover: c
                }
            }
            ,
            t.prototype._doPaintEl = function(t, e, r, n, i, a) {
                var o = e.ctx;
                if (r) {
                    var s = t.getPaintRect();
                    (!n || s && s.intersect(n)) && (Object(u["a"])(o, t, i, a),
                    t.setPrevPaintRect(s))
                } else
                    Object(u["a"])(o, t, i, a)
            }
            ,
            t.prototype.getLayer = function(t, e) {
                this._singleCanvas && !this._needsManuallyCompositing && (t = _);
                var r = this._layers[t];
                return r || (r = new d("zr_" + t,this,this.dpr),
                r.zlevel = t,
                r.__builtin__ = !0,
                this._layerConfig[t] ? i["merge"](r, this._layerConfig[t], !0) : this._layerConfig[t - b] && i["merge"](r, this._layerConfig[t - b], !0),
                e && (r.virtual = e),
                this.insertLayer(t, r),
                r.initContext()),
                r
            }
            ,
            t.prototype.insertLayer = function(t, e) {
                var r = this._layers
                  , n = this._zlevelList
                  , i = n.length
                  , a = this._domRoot
                  , o = null
                  , s = -1;
                if (!r[t] && x(e)) {
                    if (i > 0 && t > n[0]) {
                        for (s = 0; s < i - 1; s++)
                            if (n[s] < t && n[s + 1] > t)
                                break;
                        o = r[n[s]]
                    }
                    if (n.splice(s + 1, 0, t),
                    r[t] = e,
                    !e.virtual)
                        if (o) {
                            var u = o.dom;
                            u.nextSibling ? a.insertBefore(e.dom, u.nextSibling) : a.appendChild(e.dom)
                        } else
                            a.firstChild ? a.insertBefore(e.dom, a.firstChild) : a.appendChild(e.dom);
                    e.__painter = this
                }
            }
            ,
            t.prototype.eachLayer = function(t, e) {
                for (var r = this._zlevelList, n = 0; n < r.length; n++) {
                    var i = r[n];
                    t.call(e, this._layers[i], i)
                }
            }
            ,
            t.prototype.eachBuiltinLayer = function(t, e) {
                for (var r = this._zlevelList, n = 0; n < r.length; n++) {
                    var i = r[n]
                      , a = this._layers[i];
                    a.__builtin__ && t.call(e, a, i)
                }
            }
            ,
            t.prototype.eachOtherLayer = function(t, e) {
                for (var r = this._zlevelList, n = 0; n < r.length; n++) {
                    var i = r[n]
                      , a = this._layers[i];
                    a.__builtin__ || t.call(e, a, i)
                }
            }
            ,
            t.prototype.getLayers = function() {
                return this._layers
            }
            ,
            t.prototype._updateLayerStatus = function(t) {
                function e(t) {
                    s && (s.__endIndex !== t && (s.__dirty = !0),
                    s.__endIndex = t)
                }
                if (this.eachBuiltinLayer((function(t, e) {
                    t.__dirty = t.__used = !1
                }
                )),
                this._singleCanvas)
                    for (var r = 1; r < t.length; r++) {
                        var n = t[r];
                        if (n.zlevel !== t[r - 1].zlevel || n.incremental) {
                            this._needsManuallyCompositing = !0;
                            break
                        }
                    }
                var a, o, s = null, u = 0;
                for (o = 0; o < t.length; o++) {
                    n = t[o];
                    var h = n.zlevel
                      , c = void 0;
                    a !== h && (a = h,
                    u = 0),
                    n.incremental ? (c = this.getLayer(h + m, this._needsManuallyCompositing),
                    c.incremental = !0,
                    u = 1) : c = this.getLayer(h + (u > 0 ? b : 0), this._needsManuallyCompositing),
                    c.__builtin__ || i["logError"]("ZLevel " + h + " has been used by unkown layer " + c.id),
                    c !== s && (c.__used = !0,
                    c.__startIndex !== o && (c.__dirty = !0),
                    c.__startIndex = o,
                    c.incremental ? c.__drawIndex = -1 : c.__drawIndex = o,
                    e(o),
                    s = c),
                    n.__dirty & l["a"] && !n.__inHover && (c.__dirty = !0,
                    c.incremental && c.__drawIndex < 0 && (c.__drawIndex = o))
                }
                e(o),
                this.eachBuiltinLayer((function(t, e) {
                    !t.__used && t.getElementCount() > 0 && (t.__dirty = !0,
                    t.__startIndex = t.__endIndex = t.__drawIndex = 0),
                    t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex)
                }
                ))
            }
            ,
            t.prototype.clear = function() {
                return this.eachBuiltinLayer(this._clearLayer),
                this
            }
            ,
            t.prototype._clearLayer = function(t) {
                t.clear()
            }
            ,
            t.prototype.setBackgroundColor = function(t) {
                this._backgroundColor = t,
                i["each"](this._layers, (function(t) {
                    t.setUnpainted()
                }
                ))
            }
            ,
            t.prototype.configLayer = function(t, e) {
                if (e) {
                    var r = this._layerConfig;
                    r[t] ? i["merge"](r[t], e, !0) : r[t] = e;
                    for (var n = 0; n < this._zlevelList.length; n++) {
                        var a = this._zlevelList[n];
                        if (a === t || a === t + b) {
                            var o = this._layers[a];
                            i["merge"](o, r[t], !0)
                        }
                    }
                }
            }
            ,
            t.prototype.delLayer = function(t) {
                var e = this._layers
                  , r = this._zlevelList
                  , n = e[t];
                n && (n.dom.parentNode.removeChild(n.dom),
                delete e[t],
                r.splice(i["indexOf"](r, t), 1))
            }
            ,
            t.prototype.resize = function(t, e) {
                if (this._domRoot.style) {
                    var r = this._domRoot;
                    r.style.display = "none";
                    var n = this._opts
                      , i = this.root;
                    if (null != t && (n.width = t),
                    null != e && (n.height = e),
                    t = Object(s["b"])(i, 0, n),
                    e = Object(s["b"])(i, 1, n),
                    r.style.display = "",
                    this._width !== t || e !== this._height) {
                        for (var a in r.style.width = t + "px",
                        r.style.height = e + "px",
                        this._layers)
                            this._layers.hasOwnProperty(a) && this._layers[a].resize(t, e);
                        this.refresh(!0)
                    }
                    this._width = t,
                    this._height = e
                } else {
                    if (null == t || null == e)
                        return;
                    this._width = t,
                    this._height = e,
                    this.getLayer(_).resize(t, e)
                }
                return this
            }
            ,
            t.prototype.clearLayer = function(t) {
                var e = this._layers[t];
                e && e.clear()
            }
            ,
            t.prototype.dispose = function() {
                this.root.innerHTML = "",
                this.root = this.storage = this._domRoot = this._layers = null
            }
            ,
            t.prototype.getRenderedCanvas = function(t) {
                if (t = t || {},
                this._singleCanvas && !this._compositeManually)
                    return this._layers[_].dom;
                var e = new d("image",this,t.pixelRatio || this.dpr);
                e.initContext(),
                e.clear(!1, t.backgroundColor || this._backgroundColor);
                var r = e.ctx;
                if (t.pixelRatio <= this.dpr) {
                    this.refresh();
                    var n = e.dom.width
                      , i = e.dom.height;
                    this.eachLayer((function(t) {
                        t.__builtin__ ? r.drawImage(t.dom, 0, 0, n, i) : t.renderToCanvas && (r.save(),
                        t.renderToCanvas(r),
                        r.restore())
                    }
                    ))
                } else
                    for (var a = {
                        inHover: !1,
                        viewWidth: this._width,
                        viewHeight: this._height
                    }, o = this.storage.getDisplayList(!0), s = 0, h = o.length; s < h; s++) {
                        var l = o[s];
                        Object(u["a"])(r, l, a, s === h - 1)
                    }
                return e.dom
            }
            ,
            t.prototype.getWidth = function() {
                return this._width
            }
            ,
            t.prototype.getHeight = function() {
                return this._height
            }
            ,
            t
        }();
        e["a"] = O
    },
    "06ad": function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return b
        }
        ));
        var n = {
            linear: function(t) {
                return t
            },
            quadraticIn: function(t) {
                return t * t
            },
            quadraticOut: function(t) {
                return t * (2 - t)
            },
            quadraticInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            },
            cubicIn: function(t) {
                return t * t * t
            },
            cubicOut: function(t) {
                return --t * t * t + 1
            },
            cubicInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            },
            quarticIn: function(t) {
                return t * t * t * t
            },
            quarticOut: function(t) {
                return 1 - --t * t * t * t
            },
            quarticInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            },
            quinticIn: function(t) {
                return t * t * t * t * t
            },
            quinticOut: function(t) {
                return --t * t * t * t * t + 1
            },
            quinticInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            },
            sinusoidalIn: function(t) {
                return 1 - Math.cos(t * Math.PI / 2)
            },
            sinusoidalOut: function(t) {
                return Math.sin(t * Math.PI / 2)
            },
            sinusoidalInOut: function(t) {
                return .5 * (1 - Math.cos(Math.PI * t))
            },
            exponentialIn: function(t) {
                return 0 === t ? 0 : Math.pow(1024, t - 1)
            },
            exponentialOut: function(t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            },
            exponentialInOut: function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            },
            circularIn: function(t) {
                return 1 - Math.sqrt(1 - t * t)
            },
            circularOut: function(t) {
                return Math.sqrt(1 - --t * t)
            },
            circularInOut: function(t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            },
            elasticIn: function(t) {
                var e, r = .1, n = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (!r || r < 1 ? (r = 1,
                e = n / 4) : e = n * Math.asin(1 / r) / (2 * Math.PI),
                -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n))
            },
            elasticOut: function(t) {
                var e, r = .1, n = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (!r || r < 1 ? (r = 1,
                e = n / 4) : e = n * Math.asin(1 / r) / (2 * Math.PI),
                r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
            },
            elasticInOut: function(t) {
                var e, r = .1, n = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (!r || r < 1 ? (r = 1,
                e = n / 4) : e = n * Math.asin(1 / r) / (2 * Math.PI),
                (t *= 2) < 1 ? r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
            },
            backIn: function(t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e)
            },
            backOut: function(t) {
                var e = 1.70158;
                return --t * t * ((e + 1) * t + e) + 1
            },
            backInOut: function(t) {
                var e = 2.5949095;
                return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
            },
            bounceIn: function(t) {
                return 1 - n.bounceOut(1 - t)
            },
            bounceOut: function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            },
            bounceInOut: function(t) {
                return t < .5 ? .5 * n.bounceIn(2 * t) : .5 * n.bounceOut(2 * t - 1) + .5
            }
        }
          , i = n
          , a = r("6d8b")
          , o = r("b362")
          , s = function() {
            function t(t) {
                this._inited = !1,
                this._startTime = 0,
                this._pausedTime = 0,
                this._paused = !1,
                this._life = t.life || 1e3,
                this._delay = t.delay || 0,
                this.loop = t.loop || !1,
                this.onframe = t.onframe || a["noop"],
                this.ondestroy = t.ondestroy || a["noop"],
                this.onrestart = t.onrestart || a["noop"],
                t.easing && this.setEasing(t.easing)
            }
            return t.prototype.step = function(t, e) {
                if (this._inited || (this._startTime = t + this._delay,
                this._inited = !0),
                !this._paused) {
                    var r = this._life
                      , n = t - this._startTime - this._pausedTime
                      , i = n / r;
                    i < 0 && (i = 0),
                    i = Math.min(i, 1);
                    var a = this.easingFunc
                      , o = a ? a(i) : i;
                    if (this.onframe(o),
                    1 === i) {
                        if (!this.loop)
                            return !0;
                        var s = n % r;
                        this._startTime = t - s,
                        this._pausedTime = 0,
                        this.onrestart()
                    }
                    return !1
                }
                this._pausedTime += e
            }
            ,
            t.prototype.pause = function() {
                this._paused = !0
            }
            ,
            t.prototype.resume = function() {
                this._paused = !1
            }
            ,
            t.prototype.setEasing = function(t) {
                this.easing = t,
                this.easingFunc = Object(a["isFunction"])(t) ? t : i[t] || Object(o["a"])(t)
            }
            ,
            t
        }()
          , u = s
          , h = r("41ef")
          , l = r("7a29")
          , c = Array.prototype.slice;
        function f(t, e, r) {
            return (e - t) * r + t
        }
        function p(t, e, r, n) {
            for (var i = e.length, a = 0; a < i; a++)
                t[a] = f(e[a], r[a], n);
            return t
        }
        function d(t, e, r, n) {
            for (var i = e.length, a = i && e[0].length, o = 0; o < i; o++) {
                t[o] || (t[o] = []);
                for (var s = 0; s < a; s++)
                    t[o][s] = f(e[o][s], r[o][s], n)
            }
            return t
        }
        function v(t, e, r, n) {
            for (var i = e.length, a = 0; a < i; a++)
                t[a] = e[a] + r[a] * n;
            return t
        }
        function y(t, e, r, n) {
            for (var i = e.length, a = i && e[0].length, o = 0; o < i; o++) {
                t[o] || (t[o] = []);
                for (var s = 0; s < a; s++)
                    t[o][s] = e[o][s] + r[o][s] * n
            }
            return t
        }
        function g(t, e) {
            for (var r = t.length, n = e.length, i = r > n ? e : t, a = Math.min(r, n), o = i[a - 1] || {
                color: [0, 0, 0, 0],
                offset: 0
            }, s = a; s < Math.max(r, n); s++)
                i.push({
                    offset: o.offset,
                    color: o.color.slice()
                })
        }
        function _(t, e, r) {
            var n = t
              , i = e;
            if (n.push && i.push) {
                var a = n.length
                  , o = i.length;
                if (a !== o) {
                    var s = a > o;
                    if (s)
                        n.length = o;
                    else
                        for (var u = a; u < o; u++)
                            n.push(1 === r ? i[u] : c.call(i[u]))
                }
                var h = n[0] && n[0].length;
                for (u = 0; u < n.length; u++)
                    if (1 === r)
                        isNaN(n[u]) && (n[u] = i[u]);
                    else
                        for (var l = 0; l < h; l++)
                            isNaN(n[u][l]) && (n[u][l] = i[u][l])
            }
        }
        function b(t) {
            if (Object(a["isArrayLike"])(t)) {
                var e = t.length;
                if (Object(a["isArrayLike"])(t[0])) {
                    for (var r = [], n = 0; n < e; n++)
                        r.push(c.call(t[n]));
                    return r
                }
                return c.call(t)
            }
            return t
        }
        function m(t) {
            return t[0] = Math.floor(t[0]) || 0,
            t[1] = Math.floor(t[1]) || 0,
            t[2] = Math.floor(t[2]) || 0,
            t[3] = null == t[3] ? 1 : t[3],
            "rgba(" + t.join(",") + ")"
        }
        function x(t) {
            return Object(a["isArrayLike"])(t && t[0]) ? 2 : 1
        }
        var w = 0
          , O = 1
          , k = 2
          , j = 3
          , S = 4
          , T = 5
          , C = 6;
        function P(t) {
            return t === S || t === T
        }
        function M(t) {
            return t === O || t === k
        }
        var A = [0, 0, 0, 0]
          , L = function() {
            function t(t) {
                this.keyframes = [],
                this.discrete = !1,
                this._invalid = !1,
                this._needsSort = !1,
                this._lastFr = 0,
                this._lastFrP = 0,
                this.propName = t
            }
            return t.prototype.isFinished = function() {
                return this._finished
            }
            ,
            t.prototype.setFinished = function() {
                this._finished = !0,
                this._additiveTrack && this._additiveTrack.setFinished()
            }
            ,
            t.prototype.needsAnimate = function() {
                return this.keyframes.length >= 1
            }
            ,
            t.prototype.getAdditiveTrack = function() {
                return this._additiveTrack
            }
            ,
            t.prototype.addKeyframe = function(t, e, r) {
                this._needsSort = !0;
                var n = this.keyframes
                  , s = n.length
                  , u = !1
                  , c = C
                  , f = e;
                if (Object(a["isArrayLike"])(e)) {
                    var p = x(e);
                    c = p,
                    (1 === p && !Object(a["isNumber"])(e[0]) || 2 === p && !Object(a["isNumber"])(e[0][0])) && (u = !0)
                } else if (Object(a["isNumber"])(e) && !Object(a["eqNaN"])(e))
                    c = w;
                else if (Object(a["isString"])(e))
                    if (isNaN(+e)) {
                        var d = h["parse"](e);
                        d && (f = d,
                        c = j)
                    } else
                        c = w;
                else if (Object(a["isGradientObject"])(e)) {
                    var v = Object(a["extend"])({}, f);
                    v.colorStops = Object(a["map"])(e.colorStops, (function(t) {
                        return {
                            offset: t.offset,
                            color: h["parse"](t.color)
                        }
                    }
                    )),
                    Object(l["m"])(e) ? c = S : Object(l["o"])(e) && (c = T),
                    f = v
                }
                0 === s ? this.valType = c : c === this.valType && c !== C || (u = !0),
                this.discrete = this.discrete || u;
                var y = {
                    time: t,
                    value: f,
                    rawValue: e,
                    percent: 0
                };
                return r && (y.easing = r,
                y.easingFunc = Object(a["isFunction"])(r) ? r : i[r] || Object(o["a"])(r)),
                n.push(y),
                y
            }
            ,
            t.prototype.prepare = function(t, e) {
                var r = this.keyframes;
                this._needsSort && r.sort((function(t, e) {
                    return t.time - e.time
                }
                ));
                for (var n = this.valType, i = r.length, a = r[i - 1], o = this.discrete, s = M(n), u = P(n), h = 0; h < i; h++) {
                    var l = r[h]
                      , c = l.value
                      , f = a.value;
                    l.percent = l.time / t,
                    o || (s && h !== i - 1 ? _(c, f, n) : u && g(c.colorStops, f.colorStops))
                }
                if (!o && n !== T && e && this.needsAnimate() && e.needsAnimate() && n === e.valType && !e._finished) {
                    this._additiveTrack = e;
                    var p = r[0].value;
                    for (h = 0; h < i; h++)
                        n === w ? r[h].additiveValue = r[h].value - p : n === j ? r[h].additiveValue = v([], r[h].value, p, -1) : M(n) && (r[h].additiveValue = n === O ? v([], r[h].value, p, -1) : y([], r[h].value, p, -1))
                }
            }
            ,
            t.prototype.step = function(t, e) {
                if (!this._finished) {
                    this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
                    var r, n, i, o = null != this._additiveTrack, s = o ? "additiveValue" : "value", u = this.valType, h = this.keyframes, l = h.length, c = this.propName, v = u === j, y = this._lastFr, g = Math.min;
                    if (1 === l)
                        n = i = h[0];
                    else {
                        if (e < 0)
                            r = 0;
                        else if (e < this._lastFrP) {
                            var _ = g(y + 1, l - 1);
                            for (r = _; r >= 0; r--)
                                if (h[r].percent <= e)
                                    break;
                            r = g(r, l - 2)
                        } else {
                            for (r = y; r < l; r++)
                                if (h[r].percent > e)
                                    break;
                            r = g(r - 1, l - 2)
                        }
                        i = h[r + 1],
                        n = h[r]
                    }
                    if (n && i) {
                        this._lastFr = r,
                        this._lastFrP = e;
                        var b = i.percent - n.percent
                          , x = 0 === b ? 1 : g((e - n.percent) / b, 1);
                        i.easingFunc && (x = i.easingFunc(x));
                        var w = o ? this._additiveValue : v ? A : t[c];
                        if (!M(u) && !v || w || (w = this._additiveValue = []),
                        this.discrete)
                            t[c] = x < 1 ? n.rawValue : i.rawValue;
                        else if (M(u))
                            u === O ? p(w, n[s], i[s], x) : d(w, n[s], i[s], x);
                        else if (P(u)) {
                            var k = n[s]
                              , T = i[s]
                              , C = u === S;
                            t[c] = {
                                type: C ? "linear" : "radial",
                                x: f(k.x, T.x, x),
                                y: f(k.y, T.y, x),
                                colorStops: Object(a["map"])(k.colorStops, (function(t, e) {
                                    var r = T.colorStops[e];
                                    return {
                                        offset: f(t.offset, r.offset, x),
                                        color: m(p([], t.color, r.color, x))
                                    }
                                }
                                )),
                                global: T.global
                            },
                            C ? (t[c].x2 = f(k.x2, T.x2, x),
                            t[c].y2 = f(k.y2, T.y2, x)) : t[c].r = f(k.r, T.r, x)
                        } else if (v)
                            p(w, n[s], i[s], x),
                            o || (t[c] = m(w));
                        else {
                            var L = f(n[s], i[s], x);
                            o ? this._additiveValue = L : t[c] = L
                        }
                        o && this._addToTarget(t)
                    }
                }
            }
            ,
            t.prototype._addToTarget = function(t) {
                var e = this.valType
                  , r = this.propName
                  , n = this._additiveValue;
                e === w ? t[r] = t[r] + n : e === j ? (h["parse"](t[r], A),
                v(A, A, n, 1),
                t[r] = m(A)) : e === O ? v(t[r], t[r], n, 1) : e === k && y(t[r], t[r], n, 1)
            }
            ,
            t
        }()
          , D = function() {
            function t(t, e, r, n) {
                this._tracks = {},
                this._trackKeys = [],
                this._maxTime = 0,
                this._started = 0,
                this._clip = null,
                this._target = t,
                this._loop = e,
                e && n ? Object(a["logError"])("Can' use additive animation on looped animation.") : (this._additiveAnimators = n,
                this._allowDiscrete = r)
            }
            return t.prototype.getMaxTime = function() {
                return this._maxTime
            }
            ,
            t.prototype.getDelay = function() {
                return this._delay
            }
            ,
            t.prototype.getLoop = function() {
                return this._loop
            }
            ,
            t.prototype.getTarget = function() {
                return this._target
            }
            ,
            t.prototype.changeTarget = function(t) {
                this._target = t
            }
            ,
            t.prototype.when = function(t, e, r) {
                return this.whenWithKeys(t, e, Object(a["keys"])(e), r)
            }
            ,
            t.prototype.whenWithKeys = function(t, e, r, n) {
                for (var i = this._tracks, a = 0; a < r.length; a++) {
                    var o = r[a]
                      , s = i[o];
                    if (!s) {
                        s = i[o] = new L(o);
                        var u = void 0
                          , h = this._getAdditiveTrack(o);
                        if (h) {
                            var l = h.keyframes
                              , c = l[l.length - 1];
                            u = c && c.value,
                            h.valType === j && u && (u = m(u))
                        } else
                            u = this._target[o];
                        if (null == u)
                            continue;
                        t > 0 && s.addKeyframe(0, b(u), n),
                        this._trackKeys.push(o)
                    }
                    s.addKeyframe(t, b(e[o]), n)
                }
                return this._maxTime = Math.max(this._maxTime, t),
                this
            }
            ,
            t.prototype.pause = function() {
                this._clip.pause(),
                this._paused = !0
            }
            ,
            t.prototype.resume = function() {
                this._clip.resume(),
                this._paused = !1
            }
            ,
            t.prototype.isPaused = function() {
                return !!this._paused
            }
            ,
            t.prototype.duration = function(t) {
                return this._maxTime = t,
                this._force = !0,
                this
            }
            ,
            t.prototype._doneCallback = function() {
                this._setTracksFinished(),
                this._clip = null;
                var t = this._doneCbs;
                if (t)
                    for (var e = t.length, r = 0; r < e; r++)
                        t[r].call(this)
            }
            ,
            t.prototype._abortedCallback = function() {
                this._setTracksFinished();
                var t = this.animation
                  , e = this._abortedCbs;
                if (t && t.removeClip(this._clip),
                this._clip = null,
                e)
                    for (var r = 0; r < e.length; r++)
                        e[r].call(this)
            }
            ,
            t.prototype._setTracksFinished = function() {
                for (var t = this._tracks, e = this._trackKeys, r = 0; r < e.length; r++)
                    t[e[r]].setFinished()
            }
            ,
            t.prototype._getAdditiveTrack = function(t) {
                var e, r = this._additiveAnimators;
                if (r)
                    for (var n = 0; n < r.length; n++) {
                        var i = r[n].getTrack(t);
                        i && (e = i)
                    }
                return e
            }
            ,
            t.prototype.start = function(t) {
                if (!(this._started > 0)) {
                    this._started = 1;
                    for (var e = this, r = [], n = this._maxTime || 0, i = 0; i < this._trackKeys.length; i++) {
                        var a = this._trackKeys[i]
                          , o = this._tracks[a]
                          , s = this._getAdditiveTrack(a)
                          , h = o.keyframes
                          , l = h.length;
                        if (o.prepare(n, s),
                        o.needsAnimate())
                            if (!this._allowDiscrete && o.discrete) {
                                var c = h[l - 1];
                                c && (e._target[o.propName] = c.rawValue),
                                o.setFinished()
                            } else
                                r.push(o)
                    }
                    if (r.length || this._force) {
                        var f = new u({
                            life: n,
                            loop: this._loop,
                            delay: this._delay || 0,
                            onframe: function(t) {
                                e._started = 2;
                                var n = e._additiveAnimators;
                                if (n) {
                                    for (var i = !1, a = 0; a < n.length; a++)
                                        if (n[a]._clip) {
                                            i = !0;
                                            break
                                        }
                                    i || (e._additiveAnimators = null)
                                }
                                for (a = 0; a < r.length; a++)
                                    r[a].step(e._target, t);
                                var o = e._onframeCbs;
                                if (o)
                                    for (a = 0; a < o.length; a++)
                                        o[a](e._target, t)
                            },
                            ondestroy: function() {
                                e._doneCallback()
                            }
                        });
                        this._clip = f,
                        this.animation && this.animation.addClip(f),
                        t && f.setEasing(t)
                    } else
                        this._doneCallback();
                    return this
                }
            }
            ,
            t.prototype.stop = function(t) {
                if (this._clip) {
                    var e = this._clip;
                    t && e.onframe(1),
                    this._abortedCallback()
                }
            }
            ,
            t.prototype.delay = function(t) {
                return this._delay = t,
                this
            }
            ,
            t.prototype.during = function(t) {
                return t && (this._onframeCbs || (this._onframeCbs = []),
                this._onframeCbs.push(t)),
                this
            }
            ,
            t.prototype.done = function(t) {
                return t && (this._doneCbs || (this._doneCbs = []),
                this._doneCbs.push(t)),
                this
            }
            ,
            t.prototype.aborted = function(t) {
                return t && (this._abortedCbs || (this._abortedCbs = []),
                this._abortedCbs.push(t)),
                this
            }
            ,
            t.prototype.getClip = function() {
                return this._clip
            }
            ,
            t.prototype.getTrack = function(t) {
                return this._tracks[t]
            }
            ,
            t.prototype.getTracks = function() {
                var t = this;
                return Object(a["map"])(this._trackKeys, (function(e) {
                    return t._tracks[e]
                }
                ))
            }
            ,
            t.prototype.stopTracks = function(t, e) {
                if (!t.length || !this._clip)
                    return !0;
                for (var r = this._tracks, n = this._trackKeys, i = 0; i < t.length; i++) {
                    var a = r[t[i]];
                    a && !a.isFinished() && (e ? a.step(this._target, 1) : 1 === this._started && a.step(this._target, 0),
                    a.setFinished())
                }
                var o = !0;
                for (i = 0; i < n.length; i++)
                    if (!r[n[i]].isFinished()) {
                        o = !1;
                        break
                    }
                return o && this._abortedCallback(),
                o
            }
            ,
            t.prototype.saveTo = function(t, e, r) {
                if (t) {
                    e = e || this._trackKeys;
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n]
                          , a = this._tracks[i];
                        if (a && !a.isFinished()) {
                            var o = a.keyframes
                              , s = o[r ? 0 : o.length - 1];
                            s && (t[i] = b(s.rawValue))
                        }
                    }
                }
            }
            ,
            t.prototype.__changeFinalValue = function(t, e) {
                e = e || Object(a["keys"])(t);
                for (var r = 0; r < e.length; r++) {
                    var n = e[r]
                      , i = this._tracks[n];
                    if (i) {
                        var o = i.keyframes;
                        if (o.length > 1) {
                            var s = o.pop();
                            i.addKeyframe(s.time, t[n]),
                            i.prepare(this._maxTime, i.getAdditiveTrack())
                        }
                    }
                }
            }
            ,
            t
        }();
        e["b"] = D
    },
    "0da8": function(t, e, r) {
        "use strict";
        var n = r("21a10")
          , i = r("19eb")
          , a = r("9850")
          , o = r("6d8b")
          , s = Object(o["defaults"])({
            x: 0,
            y: 0
        }, i["b"])
          , u = {
            style: Object(o["defaults"])({
                x: !0,
                y: !0,
                width: !0,
                height: !0,
                sx: !0,
                sy: !0,
                sWidth: !0,
                sHeight: !0
            }, i["a"].style)
        };
        function h(t) {
            return !!(t && "string" !== typeof t && t.width && t.height)
        }
        var l = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return Object(n["a"])(e, t),
            e.prototype.createStyle = function(t) {
                return Object(o["createObject"])(s, t)
            }
            ,
            e.prototype._getSize = function(t) {
                var e = this.style
                  , r = e[t];
                if (null != r)
                    return r;
                var n = h(e.image) ? e.image : this.__image;
                if (!n)
                    return 0;
                var i = "width" === t ? "height" : "width"
                  , a = e[i];
                return null == a ? n[t] : n[t] / n[i] * a
            }
            ,
            e.prototype.getWidth = function() {
                return this._getSize("width")
            }
            ,
            e.prototype.getHeight = function() {
                return this._getSize("height")
            }
            ,
            e.prototype.getAnimationStyleProps = function() {
                return u
            }
            ,
            e.prototype.getBoundingRect = function() {
                var t = this.style;
                return this._rect || (this._rect = new a["a"](t.x || 0,t.y || 0,this.getWidth(),this.getHeight())),
                this._rect
            }
            ,
            e
        }(i["c"]);
        l.prototype.type = "image",
        e["a"] = l
    },
    "0e50": function(t, e, r) {
        "use strict";
        r.d(e, "b", (function() {
            return W
        }
        )),
        r.d(e, "c", (function() {
            return G
        }
        )),
        r.d(e, "a", (function() {
            return J
        }
        )),
        r.d(e, "d", (function() {
            return tt
        }
        ));
        var n = r("4a3f")
          , i = r("cbe5")
          , a = r("6d8b")
          , o = r("401b")
          , s = r("342d")
          , u = r("8582")
          , h = r("e263")
          , l = r("9850")
          , c = r("dce8")
          , f = r("87b1")
          , p = r("c7a2")
          , d = r("4aa2")
          , v = r("20c8")
          , y = v["a"].CMD;
        function g(t, e) {
            return Math.abs(t - e) < 1e-5
        }
        function _(t) {
            var e, r, n, i, a, o = t.data, s = t.len(), u = [], h = 0, l = 0, c = 0, f = 0;
            function p(t, r) {
                e && e.length > 2 && u.push(e),
                e = [t, r]
            }
            function d(t, r, n, i) {
                g(t, n) && g(r, i) || e.push(t, r, n, i, n, i)
            }
            function v(t, r, n, i, a, o) {
                var s = Math.abs(r - t)
                  , u = 4 * Math.tan(s / 4) / 3
                  , h = r < t ? -1 : 1
                  , l = Math.cos(t)
                  , c = Math.sin(t)
                  , f = Math.cos(r)
                  , p = Math.sin(r)
                  , d = l * a + n
                  , v = c * o + i
                  , y = f * a + n
                  , g = p * o + i
                  , _ = a * u * h
                  , b = o * u * h;
                e.push(d - _ * c, v + b * l, y + _ * p, g - b * f, y, g)
            }
            for (var _ = 0; _ < s; ) {
                var b = o[_++]
                  , m = 1 === _;
                switch (m && (h = o[_],
                l = o[_ + 1],
                c = h,
                f = l,
                b !== y.L && b !== y.C && b !== y.Q || (e = [c, f])),
                b) {
                case y.M:
                    h = c = o[_++],
                    l = f = o[_++],
                    p(c, f);
                    break;
                case y.L:
                    r = o[_++],
                    n = o[_++],
                    d(h, l, r, n),
                    h = r,
                    l = n;
                    break;
                case y.C:
                    e.push(o[_++], o[_++], o[_++], o[_++], h = o[_++], l = o[_++]);
                    break;
                case y.Q:
                    r = o[_++],
                    n = o[_++],
                    i = o[_++],
                    a = o[_++],
                    e.push(h + 2 / 3 * (r - h), l + 2 / 3 * (n - l), i + 2 / 3 * (r - i), a + 2 / 3 * (n - a), i, a),
                    h = i,
                    l = a;
                    break;
                case y.A:
                    var x = o[_++]
                      , w = o[_++]
                      , O = o[_++]
                      , k = o[_++]
                      , j = o[_++]
                      , S = o[_++] + j;
                    _ += 1;
                    var T = !o[_++];
                    r = Math.cos(j) * O + x,
                    n = Math.sin(j) * k + w,
                    m ? (c = r,
                    f = n,
                    p(c, f)) : d(h, l, r, n),
                    h = Math.cos(S) * O + x,
                    l = Math.sin(S) * k + w;
                    for (var C = (T ? -1 : 1) * Math.PI / 2, P = j; T ? P > S : P < S; P += C) {
                        var M = T ? Math.max(P + C, S) : Math.min(P + C, S);
                        v(P, M, x, w, O, k)
                    }
                    break;
                case y.R:
                    c = h = o[_++],
                    f = l = o[_++],
                    r = c + o[_++],
                    n = f + o[_++],
                    p(r, f),
                    d(r, f, r, n),
                    d(r, n, c, n),
                    d(c, n, c, f),
                    d(c, f, r, f);
                    break;
                case y.Z:
                    e && d(h, l, c, f),
                    h = c,
                    l = f;
                    break
                }
            }
            return e && e.length > 2 && u.push(e),
            u
        }
        function b(t, e, r, i, a, o, s, u, h, l) {
            if (g(t, r) && g(e, i) && g(a, s) && g(o, u))
                h.push(s, u);
            else {
                var c = 2 / l
                  , f = c * c
                  , p = s - t
                  , d = u - e
                  , v = Math.sqrt(p * p + d * d);
                p /= v,
                d /= v;
                var y = r - t
                  , _ = i - e
                  , m = a - s
                  , x = o - u
                  , w = y * y + _ * _
                  , O = m * m + x * x;
                if (w < f && O < f)
                    h.push(s, u);
                else {
                    var k = p * y + d * _
                      , j = -p * m - d * x
                      , S = w - k * k
                      , T = O - j * j;
                    if (S < f && k >= 0 && T < f && j >= 0)
                        h.push(s, u);
                    else {
                        var C = []
                          , P = [];
                        Object(n["g"])(t, r, a, s, .5, C),
                        Object(n["g"])(e, i, o, u, .5, P),
                        b(C[0], P[0], C[1], P[1], C[2], P[2], C[3], P[3], h, l),
                        b(C[4], P[4], C[5], P[5], C[6], P[6], C[7], P[7], h, l)
                    }
                }
            }
        }
        function m(t, e) {
            var r = _(t)
              , n = [];
            e = e || 1;
            for (var i = 0; i < r.length; i++) {
                var a = r[i]
                  , o = []
                  , s = a[0]
                  , u = a[1];
                o.push(s, u);
                for (var h = 2; h < a.length; ) {
                    var l = a[h++]
                      , c = a[h++]
                      , f = a[h++]
                      , p = a[h++]
                      , d = a[h++]
                      , v = a[h++];
                    b(s, u, l, c, f, p, d, v, o, e),
                    s = d,
                    u = v
                }
                n.push(o)
            }
            return n
        }
        function x(t, e, r) {
            var n = t[e]
              , i = t[1 - e]
              , a = Math.abs(n / i)
              , o = Math.ceil(Math.sqrt(a * r))
              , s = Math.floor(r / o);
            0 === s && (s = 1,
            o = r);
            for (var u = [], h = 0; h < o; h++)
                u.push(s);
            var l = o * s
              , c = r - l;
            if (c > 0)
                for (h = 0; h < c; h++)
                    u[h % o] += 1;
            return u
        }
        function w(t, e, r) {
            for (var n = t.r0, i = t.r, a = t.startAngle, o = t.endAngle, s = Math.abs(o - a), u = s * i, h = i - n, l = u > Math.abs(h), c = x([u, h], l ? 0 : 1, e), f = (l ? s : h) / c.length, p = 0; p < c.length; p++)
                for (var d = (l ? h : s) / c[p], v = 0; v < c[p]; v++) {
                    var y = {};
                    l ? (y.startAngle = a + f * p,
                    y.endAngle = a + f * (p + 1),
                    y.r0 = n + d * v,
                    y.r = n + d * (v + 1)) : (y.startAngle = a + d * v,
                    y.endAngle = a + d * (v + 1),
                    y.r0 = n + f * p,
                    y.r = n + f * (p + 1)),
                    y.clockwise = t.clockwise,
                    y.cx = t.cx,
                    y.cy = t.cy,
                    r.push(y)
                }
        }
        function O(t, e, r) {
            for (var n = t.width, i = t.height, a = n > i, o = x([n, i], a ? 0 : 1, e), s = a ? "width" : "height", u = a ? "height" : "width", h = a ? "x" : "y", l = a ? "y" : "x", c = t[s] / o.length, f = 0; f < o.length; f++)
                for (var p = t[u] / o[f], d = 0; d < o[f]; d++) {
                    var v = {};
                    v[h] = f * c,
                    v[l] = d * p,
                    v[s] = c,
                    v[u] = p,
                    v.x += t.x,
                    v.y += t.y,
                    r.push(v)
                }
        }
        function k(t, e, r, n) {
            return t * n - r * e
        }
        function j(t, e, r, n, i, a, o, s) {
            var u = r - t
              , h = n - e
              , l = o - i
              , f = s - a
              , p = k(l, f, u, h);
            if (Math.abs(p) < 1e-6)
                return null;
            var d = t - i
              , v = e - a
              , y = k(d, v, l, f) / p;
            return y < 0 || y > 1 ? null : new c["a"](y * u + t,y * h + e)
        }
        function S(t, e, r) {
            var n = new c["a"];
            c["a"].sub(n, r, e),
            n.normalize();
            var i = new c["a"];
            c["a"].sub(i, t, e);
            var a = i.dot(n);
            return a
        }
        function T(t, e) {
            var r = t[t.length - 1];
            r && r[0] === e[0] && r[1] === e[1] || t.push(e)
        }
        function C(t, e, r) {
            for (var n = t.length, i = [], a = 0; a < n; a++) {
                var o = t[a]
                  , s = t[(a + 1) % n]
                  , u = j(o[0], o[1], s[0], s[1], e.x, e.y, r.x, r.y);
                u && i.push({
                    projPt: S(u, e, r),
                    pt: u,
                    idx: a
                })
            }
            if (i.length < 2)
                return [{
                    points: t
                }, {
                    points: t
                }];
            i.sort((function(t, e) {
                return t.projPt - e.projPt
            }
            ));
            var h = i[0]
              , l = i[i.length - 1];
            if (l.idx < h.idx) {
                var c = h;
                h = l,
                l = c
            }
            var f = [h.pt.x, h.pt.y]
              , p = [l.pt.x, l.pt.y]
              , d = [f]
              , v = [p];
            for (a = h.idx + 1; a <= l.idx; a++)
                T(d, t[a].slice());
            T(d, p),
            T(d, f);
            for (a = l.idx + 1; a <= h.idx + n; a++)
                T(v, t[a % n].slice());
            return T(v, f),
            T(v, p),
            [{
                points: d
            }, {
                points: v
            }]
        }
        function P(t) {
            var e = t.points
              , r = []
              , n = [];
            Object(h["d"])(e, r, n);
            var i = new l["a"](r[0],r[1],n[0] - r[0],n[1] - r[1])
              , a = i.width
              , o = i.height
              , s = i.x
              , u = i.y
              , f = new c["a"]
              , p = new c["a"];
            return a > o ? (f.x = p.x = s + a / 2,
            f.y = u,
            p.y = u + o) : (f.y = p.y = u + o / 2,
            f.x = s,
            p.x = s + a),
            C(e, f, p)
        }
        function M(t, e, r, n) {
            if (1 === r)
                n.push(e);
            else {
                var i = Math.floor(r / 2)
                  , a = t(e);
                M(t, a[0], i, n),
                M(t, a[1], r - i, n)
            }
            return n
        }
        function A(t, e) {
            for (var r = [], n = 0; n < e; n++)
                r.push(Object(s["a"])(t));
            return r
        }
        function L(t, e) {
            e.setStyle(t.style),
            e.z = t.z,
            e.z2 = t.z2,
            e.zlevel = t.zlevel
        }
        function D(t) {
            for (var e = [], r = 0; r < t.length; )
                e.push([t[r++], t[r++]]);
            return e
        }
        function z(t, e) {
            var r, n = [], i = t.shape;
            switch (t.type) {
            case "rect":
                O(i, e, n),
                r = p["a"];
                break;
            case "sector":
                w(i, e, n),
                r = d["a"];
                break;
            case "circle":
                w({
                    r0: 0,
                    r: i.r,
                    startAngle: 0,
                    endAngle: 2 * Math.PI,
                    cx: i.cx,
                    cy: i.cy
                }, e, n),
                r = d["a"];
                break;
            default:
                var o = t.getComputedTransform()
                  , s = o ? Math.sqrt(Math.max(o[0] * o[0] + o[1] * o[1], o[2] * o[2] + o[3] * o[3])) : 1
                  , u = Object(a["map"])(m(t.getUpdatedPathProxy(), s), (function(t) {
                    return D(t)
                }
                ))
                  , l = u.length;
                if (0 === l)
                    M(P, {
                        points: u[0]
                    }, e, n);
                else if (l === e)
                    for (var c = 0; c < l; c++)
                        n.push({
                            points: u[c]
                        });
                else {
                    var v = 0
                      , y = Object(a["map"])(u, (function(t) {
                        var e = []
                          , r = [];
                        Object(h["d"])(t, e, r);
                        var n = (r[1] - e[1]) * (r[0] - e[0]);
                        return v += n,
                        {
                            poly: t,
                            area: n
                        }
                    }
                    ));
                    y.sort((function(t, e) {
                        return e.area - t.area
                    }
                    ));
                    var g = e;
                    for (c = 0; c < l; c++) {
                        var _ = y[c];
                        if (g <= 0)
                            break;
                        var b = c === l - 1 ? g : Math.ceil(_.area / v * e);
                        b < 0 || (M(P, {
                            points: _.poly
                        }, b, n),
                        g -= b)
                    }
                }
                r = f["a"];
                break
            }
            if (!r)
                return A(t, e);
            var x = [];
            for (c = 0; c < n.length; c++) {
                var k = new r;
                k.setShape(n[c]),
                L(t, k),
                x.push(k)
            }
            return x
        }
        function I(t, e) {
            var r = t.length
              , i = e.length;
            if (r === i)
                return [t, e];
            for (var a = [], o = [], s = r < i ? t : e, u = Math.min(r, i), h = Math.abs(i - r) / 6, l = (u - 2) / 6, c = Math.ceil(h / l) + 1, f = [s[0], s[1]], p = h, d = 2; d < u; ) {
                var v = s[d - 2]
                  , y = s[d - 1]
                  , g = s[d++]
                  , _ = s[d++]
                  , b = s[d++]
                  , m = s[d++]
                  , x = s[d++]
                  , w = s[d++];
                if (p <= 0)
                    f.push(g, _, b, m, x, w);
                else {
                    for (var O = Math.min(p, c - 1) + 1, k = 1; k <= O; k++) {
                        var j = k / O;
                        Object(n["g"])(v, g, b, x, j, a),
                        Object(n["g"])(y, _, m, w, j, o),
                        v = a[3],
                        y = o[3],
                        f.push(a[1], o[1], a[2], o[2], v, y),
                        g = a[5],
                        _ = o[5],
                        b = a[6],
                        m = o[6]
                    }
                    p -= O - 1
                }
            }
            return s === t ? [f, e] : [t, f]
        }
        function R(t, e) {
            for (var r = t.length, n = t[r - 2], i = t[r - 1], a = [], o = 0; o < e.length; )
                a[o++] = n,
                a[o++] = i;
            return a
        }
        function F(t, e) {
            for (var r, n, i, a = [], o = [], s = 0; s < Math.max(t.length, e.length); s++) {
                var u = t[s]
                  , h = e[s]
                  , l = void 0
                  , c = void 0;
                u ? h ? (r = I(u, h),
                l = r[0],
                c = r[1],
                n = l,
                i = c) : (c = R(i || u, u),
                l = u) : (l = R(n || h, h),
                c = h),
                a.push(l),
                o.push(c)
            }
            return [a, o]
        }
        function B(t) {
            for (var e = 0, r = 0, n = 0, i = t.length, a = 0, o = i - 2; a < i; o = a,
            a += 2) {
                var s = t[o]
                  , u = t[o + 1]
                  , h = t[a]
                  , l = t[a + 1]
                  , c = s * l - h * u;
                e += c,
                r += (s + h) * c,
                n += (u + l) * c
            }
            return 0 === e ? [t[0] || 0, t[1] || 0] : [r / e / 3, n / e / 3, e]
        }
        function N(t, e, r, n) {
            for (var i = (t.length - 2) / 6, a = 1 / 0, o = 0, s = t.length, u = s - 2, h = 0; h < i; h++) {
                for (var l = 6 * h, c = 0, f = 0; f < s; f += 2) {
                    var p = 0 === f ? l : (l + f - 2) % u + 2
                      , d = t[p] - r[0]
                      , v = t[p + 1] - r[1]
                      , y = e[f] - n[0]
                      , g = e[f + 1] - n[1]
                      , _ = y - d
                      , b = g - v;
                    c += _ * _ + b * b
                }
                c < a && (a = c,
                o = h)
            }
            return o
        }
        function H(t) {
            for (var e = [], r = t.length, n = 0; n < r; n += 2)
                e[n] = t[r - n - 2],
                e[n + 1] = t[r - n - 1];
            return e
        }
        function E(t, e, r, n) {
            for (var i, a = [], o = 0; o < t.length; o++) {
                var s = t[o]
                  , u = e[o]
                  , h = B(s)
                  , l = B(u);
                null == i && (i = h[2] < 0 !== l[2] < 0);
                var c = []
                  , f = []
                  , p = 0
                  , d = 1 / 0
                  , v = []
                  , y = s.length;
                i && (s = H(s));
                for (var g = 6 * N(s, u, h, l), _ = y - 2, b = 0; b < _; b += 2) {
                    var m = (g + b) % _ + 2;
                    c[b + 2] = s[m] - h[0],
                    c[b + 3] = s[m + 1] - h[1]
                }
                if (c[0] = s[g] - h[0],
                c[1] = s[g + 1] - h[1],
                r > 0)
                    for (var x = n / r, w = -n / 2; w <= n / 2; w += x) {
                        var O = Math.sin(w)
                          , k = Math.cos(w)
                          , j = 0;
                        for (b = 0; b < s.length; b += 2) {
                            var S = c[b]
                              , T = c[b + 1]
                              , C = u[b] - l[0]
                              , P = u[b + 1] - l[1]
                              , M = C * k - P * O
                              , A = C * O + P * k;
                            v[b] = M,
                            v[b + 1] = A;
                            var L = M - S
                              , D = A - T;
                            j += L * L + D * D
                        }
                        if (j < d) {
                            d = j,
                            p = w;
                            for (var z = 0; z < v.length; z++)
                                f[z] = v[z]
                        }
                    }
                else
                    for (var I = 0; I < y; I += 2)
                        f[I] = u[I] - l[0],
                        f[I + 1] = u[I + 1] - l[1];
                a.push({
                    from: c,
                    to: f,
                    fromCp: h,
                    toCp: l,
                    rotation: -p
                })
            }
            return a
        }
        function W(t) {
            return t.__isCombineMorphing
        }
        var q = "__mOriginal_";
        function X(t, e, r) {
            var n = q + e
              , i = t[n] || t[e];
            t[n] || (t[n] = t[e]);
            var a = r.replace
              , o = r.after
              , s = r.before;
            t[e] = function() {
                var t, e = arguments;
                return s && s.apply(this, e),
                t = a ? a.apply(this, e) : i.apply(this, e),
                o && o.apply(this, e),
                t
            }
        }
        function Y(t, e) {
            var r = q + e;
            t[r] && (t[e] = t[r],
            t[r] = null)
        }
        function V(t, e) {
            for (var r = 0; r < t.length; r++)
                for (var n = t[r], i = 0; i < n.length; ) {
                    var a = n[i]
                      , o = n[i + 1];
                    n[i++] = e[0] * a + e[2] * o + e[4],
                    n[i++] = e[1] * a + e[3] * o + e[5]
                }
        }
        function U(t, e) {
            var r = t.getUpdatedPathProxy()
              , n = e.getUpdatedPathProxy()
              , i = F(_(r), _(n))
              , a = i[0]
              , s = i[1]
              , u = t.getComputedTransform()
              , h = e.getComputedTransform();
            function l() {
                this.transform = null
            }
            u && V(a, u),
            h && V(s, h),
            X(e, "updateTransform", {
                replace: l
            }),
            e.transform = null;
            var c = E(a, s, 10, Math.PI)
              , f = [];
            X(e, "buildPath", {
                replace: function(t) {
                    for (var r = e.__morphT, n = 1 - r, i = [], a = 0; a < c.length; a++) {
                        var s = c[a]
                          , u = s.from
                          , h = s.to
                          , l = s.rotation * r
                          , p = s.fromCp
                          , d = s.toCp
                          , v = Math.sin(l)
                          , y = Math.cos(l);
                        Object(o["lerp"])(i, p, d, r);
                        for (var g = 0; g < u.length; g += 2) {
                            var _ = u[g]
                              , b = u[g + 1]
                              , m = h[g]
                              , x = h[g + 1]
                              , w = _ * n + m * r
                              , O = b * n + x * r;
                            f[g] = w * y - O * v + i[0],
                            f[g + 1] = w * v + O * y + i[1]
                        }
                        var k = f[0]
                          , j = f[1];
                        t.moveTo(k, j);
                        for (g = 2; g < u.length; ) {
                            m = f[g++],
                            x = f[g++];
                            var S = f[g++]
                              , T = f[g++]
                              , C = f[g++]
                              , P = f[g++];
                            k === m && j === x && S === C && T === P ? t.lineTo(C, P) : t.bezierCurveTo(m, x, S, T, C, P),
                            k = C,
                            j = P
                        }
                    }
                }
            })
        }
        function G(t, e, r) {
            if (!t || !e)
                return e;
            var n = r.done
              , i = r.during;
            function o() {
                Y(e, "buildPath"),
                Y(e, "updateTransform"),
                e.__morphT = -1,
                e.createPathProxy(),
                e.dirtyShape()
            }
            return U(t, e),
            e.__morphT = 0,
            e.animateTo({
                __morphT: 1
            }, Object(a["defaults"])({
                during: function(t) {
                    e.dirtyShape(),
                    i && i(t)
                },
                done: function() {
                    o(),
                    n && n()
                }
            }, r)),
            e
        }
        function Z(t, e, r, n, i, a) {
            var o = 16;
            t = i === r ? 0 : Math.round(32767 * (t - r) / (i - r)),
            e = a === n ? 0 : Math.round(32767 * (e - n) / (a - n));
            for (var s, u = 0, h = (1 << o) / 2; h > 0; h /= 2) {
                var l = 0
                  , c = 0;
                (t & h) > 0 && (l = 1),
                (e & h) > 0 && (c = 1),
                u += h * h * (3 * l ^ c),
                0 === c && (1 === l && (t = h - 1 - t,
                e = h - 1 - e),
                s = t,
                t = e,
                e = s)
            }
            return u
        }
        function K(t) {
            var e = 1 / 0
              , r = 1 / 0
              , n = -1 / 0
              , i = -1 / 0
              , o = Object(a["map"])(t, (function(t) {
                var a = t.getBoundingRect()
                  , o = t.getComputedTransform()
                  , s = a.x + a.width / 2 + (o ? o[4] : 0)
                  , u = a.y + a.height / 2 + (o ? o[5] : 0);
                return e = Math.min(s, e),
                r = Math.min(u, r),
                n = Math.max(s, n),
                i = Math.max(u, i),
                [s, u]
            }
            ))
              , s = Object(a["map"])(o, (function(a, o) {
                return {
                    cp: a,
                    z: Z(a[0], a[1], e, r, n, i),
                    path: t[o]
                }
            }
            ));
            return s.sort((function(t, e) {
                return t.z - e.z
            }
            )).map((function(t) {
                return t.path
            }
            ))
        }
        function Q(t) {
            return z(t.path, t.count)
        }
        function $() {
            return {
                fromIndividuals: [],
                toIndividuals: [],
                count: 0
            }
        }
        function J(t, e, r) {
            var n = [];
            function o(t) {
                for (var e = 0; e < t.length; e++) {
                    var r = t[e];
                    W(r) ? o(r.childrenRef()) : r instanceof i["b"] && n.push(r)
                }
            }
            o(t);
            var s = n.length;
            if (!s)
                return $();
            var h = r.dividePath || Q
              , l = h({
                path: e,
                count: s
            });
            if (l.length !== s)
                return console.error("Invalid morphing: unmatched splitted path"),
                $();
            n = K(n),
            l = K(l);
            for (var c = r.done, f = r.during, p = r.individualDelay, d = new u["c"], v = 0; v < s; v++) {
                var y = n[v]
                  , g = l[v];
                g.parent = e,
                g.copyTransform(d),
                p || U(y, g)
            }
            function _(t) {
                for (var e = 0; e < l.length; e++)
                    l[e].addSelfToZr(t)
            }
            function b() {
                e.__isCombineMorphing = !1,
                e.__morphT = -1,
                e.childrenRef = null,
                Y(e, "addSelfToZr"),
                Y(e, "removeSelfFromZr")
            }
            e.__isCombineMorphing = !0,
            e.childrenRef = function() {
                return l
            }
            ,
            X(e, "addSelfToZr", {
                after: function(t) {
                    _(t)
                }
            }),
            X(e, "removeSelfFromZr", {
                after: function(t) {
                    for (var e = 0; e < l.length; e++)
                        l[e].removeSelfFromZr(t)
                }
            });
            var m = l.length;
            if (p) {
                var x = m
                  , w = function() {
                    x--,
                    0 === x && (b(),
                    c && c())
                };
                for (v = 0; v < m; v++) {
                    var O = p ? Object(a["defaults"])({
                        delay: (r.delay || 0) + p(v, m, n[v], l[v]),
                        done: w
                    }, r) : r;
                    G(n[v], l[v], O)
                }
            } else
                e.__morphT = 0,
                e.animateTo({
                    __morphT: 1
                }, Object(a["defaults"])({
                    during: function(t) {
                        for (var r = 0; r < m; r++) {
                            var n = l[r];
                            n.__morphT = e.__morphT,
                            n.dirtyShape()
                        }
                        f && f(t)
                    },
                    done: function() {
                        b();
                        for (var e = 0; e < t.length; e++)
                            Y(t[e], "updateTransform");
                        c && c()
                    }
                }, r));
            return e.__zr && _(e.__zr),
            {
                fromIndividuals: n,
                toIndividuals: l,
                count: m
            }
        }
        function tt(t, e, r) {
            var n = e.length
              , o = []
              , u = r.dividePath || Q;
            function h(t) {
                for (var e = 0; e < t.length; e++) {
                    var r = t[e];
                    W(r) ? h(r.childrenRef()) : r instanceof i["b"] && o.push(r)
                }
            }
            if (W(t)) {
                h(t.childrenRef());
                var l = o.length;
                if (l < n)
                    for (var c = 0, f = l; f < n; f++)
                        o.push(Object(s["a"])(o[c++ % l]));
                o.length = n
            } else {
                o = u({
                    path: t,
                    count: n
                });
                var p = t.getComputedTransform();
                for (f = 0; f < o.length; f++)
                    o[f].setLocalTransform(p);
                if (o.length !== n)
                    return console.error("Invalid morphing: unmatched splitted path"),
                    $()
            }
            o = K(o),
            e = K(e);
            var d = r.individualDelay;
            for (f = 0; f < n; f++) {
                var v = d ? Object(a["defaults"])({
                    delay: (r.delay || 0) + d(f, n, o[f], e[f])
                }, r) : r;
                G(o[f], e[f], v)
            }
            return {
                fromIndividuals: o,
                toIndividuals: e,
                count: e.length
            }
        }
    },
    1687: function(t, e, r) {
        "use strict";
        function n() {
            return [1, 0, 0, 1, 0, 0]
        }
        function i(t) {
            return t[0] = 1,
            t[1] = 0,
            t[2] = 0,
            t[3] = 1,
            t[4] = 0,
            t[5] = 0,
            t
        }
        function a(t, e) {
            return t[0] = e[0],
            t[1] = e[1],
            t[2] = e[2],
            t[3] = e[3],
            t[4] = e[4],
            t[5] = e[5],
            t
        }
        function o(t, e, r) {
            var n = e[0] * r[0] + e[2] * r[1]
              , i = e[1] * r[0] + e[3] * r[1]
              , a = e[0] * r[2] + e[2] * r[3]
              , o = e[1] * r[2] + e[3] * r[3]
              , s = e[0] * r[4] + e[2] * r[5] + e[4]
              , u = e[1] * r[4] + e[3] * r[5] + e[5];
            return t[0] = n,
            t[1] = i,
            t[2] = a,
            t[3] = o,
            t[4] = s,
            t[5] = u,
            t
        }
        function s(t, e, r) {
            return t[0] = e[0],
            t[1] = e[1],
            t[2] = e[2],
            t[3] = e[3],
            t[4] = e[4] + r[0],
            t[5] = e[5] + r[1],
            t
        }
        function u(t, e, r) {
            var n = e[0]
              , i = e[2]
              , a = e[4]
              , o = e[1]
              , s = e[3]
              , u = e[5]
              , h = Math.sin(r)
              , l = Math.cos(r);
            return t[0] = n * l + o * h,
            t[1] = -n * h + o * l,
            t[2] = i * l + s * h,
            t[3] = -i * h + l * s,
            t[4] = l * a + h * u,
            t[5] = l * u - h * a,
            t
        }
        function h(t, e, r) {
            var n = r[0]
              , i = r[1];
            return t[0] = e[0] * n,
            t[1] = e[1] * i,
            t[2] = e[2] * n,
            t[3] = e[3] * i,
            t[4] = e[4] * n,
            t[5] = e[5] * i,
            t
        }
        function l(t, e) {
            var r = e[0]
              , n = e[2]
              , i = e[4]
              , a = e[1]
              , o = e[3]
              , s = e[5]
              , u = r * o - a * n;
            return u ? (u = 1 / u,
            t[0] = o * u,
            t[1] = -a * u,
            t[2] = -n * u,
            t[3] = r * u,
            t[4] = (n * s - o * i) * u,
            t[5] = (a * i - r * s) * u,
            t) : null
        }
        function c(t) {
            var e = n();
            return a(e, t),
            e
        }
        r.r(e),
        r.d(e, "create", (function() {
            return n
        }
        )),
        r.d(e, "identity", (function() {
            return i
        }
        )),
        r.d(e, "copy", (function() {
            return a
        }
        )),
        r.d(e, "mul", (function() {
            return o
        }
        )),
        r.d(e, "translate", (function() {
            return s
        }
        )),
        r.d(e, "rotate", (function() {
            return u
        }
        )),
        r.d(e, "scale", (function() {
            return h
        }
        )),
        r.d(e, "invert", (function() {
            return l
        }
        )),
        r.d(e, "clone", (function() {
            return c
        }
        ))
    },
    "19eb": function(t, e, r) {
        "use strict";
        r.d(e, "b", (function() {
            return h
        }
        )),
        r.d(e, "a", (function() {
            return l
        }
        ));
        var n = r("21a10")
          , i = r("d5b7")
          , a = r("9850")
          , o = r("6d8b")
          , s = r("4bc4")
          , u = "__zr_style_" + Math.round(10 * Math.random())
          , h = {
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: "#000",
            opacity: 1,
            blend: "source-over"
        }
          , l = {
            style: {
                shadowBlur: !0,
                shadowOffsetX: !0,
                shadowOffsetY: !0,
                shadowColor: !0,
                opacity: !0
            }
        };
        h[u] = !0;
        var c = ["z", "z2", "invisible"]
          , f = ["invisible"]
          , p = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return Object(n["a"])(e, t),
            e.prototype._init = function(e) {
                for (var r = Object(o["keys"])(e), n = 0; n < r.length; n++) {
                    var i = r[n];
                    "style" === i ? this.useStyle(e[i]) : t.prototype.attrKV.call(this, i, e[i])
                }
                this.style || this.useStyle({})
            }
            ,
            e.prototype.beforeBrush = function() {}
            ,
            e.prototype.afterBrush = function() {}
            ,
            e.prototype.innerBeforeBrush = function() {}
            ,
            e.prototype.innerAfterBrush = function() {}
            ,
            e.prototype.shouldBePainted = function(t, e, r, n) {
                var i = this.transform;
                if (this.ignore || this.invisible || 0 === this.style.opacity || this.culling && y(this, t, e) || i && !i[0] && !i[3])
                    return !1;
                if (r && this.__clipPaths)
                    for (var a = 0; a < this.__clipPaths.length; ++a)
                        if (this.__clipPaths[a].isZeroArea())
                            return !1;
                if (n && this.parent) {
                    var o = this.parent;
                    while (o) {
                        if (o.ignore)
                            return !1;
                        o = o.parent
                    }
                }
                return !0
            }
            ,
            e.prototype.contain = function(t, e) {
                return this.rectContain(t, e)
            }
            ,
            e.prototype.traverse = function(t, e) {
                t.call(e, this)
            }
            ,
            e.prototype.rectContain = function(t, e) {
                var r = this.transformCoordToLocal(t, e)
                  , n = this.getBoundingRect();
                return n.contain(r[0], r[1])
            }
            ,
            e.prototype.getPaintRect = function() {
                var t = this._paintRect;
                if (!this._paintRect || this.__dirty) {
                    var e = this.transform
                      , r = this.getBoundingRect()
                      , n = this.style
                      , i = n.shadowBlur || 0
                      , o = n.shadowOffsetX || 0
                      , s = n.shadowOffsetY || 0;
                    t = this._paintRect || (this._paintRect = new a["a"](0,0,0,0)),
                    e ? a["a"].applyTransform(t, r, e) : t.copy(r),
                    (i || o || s) && (t.width += 2 * i + Math.abs(o),
                    t.height += 2 * i + Math.abs(s),
                    t.x = Math.min(t.x, t.x + o - i),
                    t.y = Math.min(t.y, t.y + s - i));
                    var u = this.dirtyRectTolerance;
                    t.isZero() || (t.x = Math.floor(t.x - u),
                    t.y = Math.floor(t.y - u),
                    t.width = Math.ceil(t.width + 1 + 2 * u),
                    t.height = Math.ceil(t.height + 1 + 2 * u))
                }
                return t
            }
            ,
            e.prototype.setPrevPaintRect = function(t) {
                t ? (this._prevPaintRect = this._prevPaintRect || new a["a"](0,0,0,0),
                this._prevPaintRect.copy(t)) : this._prevPaintRect = null
            }
            ,
            e.prototype.getPrevPaintRect = function() {
                return this._prevPaintRect
            }
            ,
            e.prototype.animateStyle = function(t) {
                return this.animate("style", t)
            }
            ,
            e.prototype.updateDuringAnimation = function(t) {
                "style" === t ? this.dirtyStyle() : this.markRedraw()
            }
            ,
            e.prototype.attrKV = function(e, r) {
                "style" !== e ? t.prototype.attrKV.call(this, e, r) : this.style ? this.setStyle(r) : this.useStyle(r)
            }
            ,
            e.prototype.setStyle = function(t, e) {
                return "string" === typeof t ? this.style[t] = e : Object(o["extend"])(this.style, t),
                this.dirtyStyle(),
                this
            }
            ,
            e.prototype.dirtyStyle = function(t) {
                t || this.markRedraw(),
                this.__dirty |= s["c"],
                this._rect && (this._rect = null)
            }
            ,
            e.prototype.dirty = function() {
                this.dirtyStyle()
            }
            ,
            e.prototype.styleChanged = function() {
                return !!(this.__dirty & s["c"])
            }
            ,
            e.prototype.styleUpdated = function() {
                this.__dirty &= ~s["c"]
            }
            ,
            e.prototype.createStyle = function(t) {
                return Object(o["createObject"])(h, t)
            }
            ,
            e.prototype.useStyle = function(t) {
                t[u] || (t = this.createStyle(t)),
                this.__inHover ? this.__hoverStyle = t : this.style = t,
                this.dirtyStyle()
            }
            ,
            e.prototype.isStyleObject = function(t) {
                return t[u]
            }
            ,
            e.prototype._innerSaveToNormal = function(e) {
                t.prototype._innerSaveToNormal.call(this, e);
                var r = this._normalState;
                e.style && !r.style && (r.style = this._mergeStyle(this.createStyle(), this.style)),
                this._savePrimaryToNormal(e, r, c)
            }
            ,
            e.prototype._applyStateObj = function(e, r, n, i, a, s) {
                t.prototype._applyStateObj.call(this, e, r, n, i, a, s);
                var u, h = !(r && i);
                if (r && r.style ? a ? i ? u = r.style : (u = this._mergeStyle(this.createStyle(), n.style),
                this._mergeStyle(u, r.style)) : (u = this._mergeStyle(this.createStyle(), i ? this.style : n.style),
                this._mergeStyle(u, r.style)) : h && (u = n.style),
                u)
                    if (a) {
                        var l = this.style;
                        if (this.style = this.createStyle(h ? {} : l),
                        h)
                            for (var p = Object(o["keys"])(l), d = 0; d < p.length; d++) {
                                var v = p[d];
                                v in u && (u[v] = u[v],
                                this.style[v] = l[v])
                            }
                        var y = Object(o["keys"])(u);
                        for (d = 0; d < y.length; d++) {
                            v = y[d];
                            this.style[v] = this.style[v]
                        }
                        this._transitionState(e, {
                            style: u
                        }, s, this.getAnimationStyleProps())
                    } else
                        this.useStyle(u);
                var g = this.__inHover ? f : c;
                for (d = 0; d < g.length; d++) {
                    v = g[d];
                    r && null != r[v] ? this[v] = r[v] : h && null != n[v] && (this[v] = n[v])
                }
            }
            ,
            e.prototype._mergeStates = function(e) {
                for (var r, n = t.prototype._mergeStates.call(this, e), i = 0; i < e.length; i++) {
                    var a = e[i];
                    a.style && (r = r || {},
                    this._mergeStyle(r, a.style))
                }
                return r && (n.style = r),
                n
            }
            ,
            e.prototype._mergeStyle = function(t, e) {
                return Object(o["extend"])(t, e),
                t
            }
            ,
            e.prototype.getAnimationStyleProps = function() {
                return l
            }
            ,
            e.initDefaultProps = function() {
                var t = e.prototype;
                t.type = "displayable",
                t.invisible = !1,
                t.z = 0,
                t.z2 = 0,
                t.zlevel = 0,
                t.culling = !1,
                t.cursor = "pointer",
                t.rectHover = !1,
                t.incremental = !1,
                t._rect = null,
                t.dirtyRectTolerance = 0,
                t.__dirty = s["a"] | s["c"]
            }(),
            e
        }(i["a"])
          , d = new a["a"](0,0,0,0)
          , v = new a["a"](0,0,0,0);
        function y(t, e, r) {
            return d.copy(t.getBoundingRect()),
            t.transform && d.applyTransform(t.transform),
            v.width = e,
            v.height = r,
            !d.intersect(v)
        }
        e["c"] = p
    },
    "20c8": function(t, e, r) {
        "use strict";
        r.d(e, "b", (function() {
            return j
        }
        ));
        var n = r("401b")
          , i = r("9850")
          , a = r("2cf4")
          , o = r("e263")
          , s = r("4a3f")
          , u = {
            M: 1,
            L: 2,
            C: 3,
            Q: 4,
            A: 5,
            Z: 6,
            R: 7
        }
          , h = []
          , l = []
          , c = []
          , f = []
          , p = []
          , d = []
          , v = Math.min
          , y = Math.max
          , g = Math.cos
          , _ = Math.sin
          , b = Math.abs
          , m = Math.PI
          , x = 2 * m
          , w = "undefined" !== typeof Float32Array
          , O = [];
        function k(t) {
            var e = Math.round(t / m * 1e8) / 1e8;
            return e % 2 * m
        }
        function j(t, e) {
            var r = k(t[0]);
            r < 0 && (r += x);
            var n = r - t[0]
              , i = t[1];
            i += n,
            !e && i - r >= x ? i = r + x : e && r - i >= x ? i = r - x : !e && r > i ? i = r + (x - k(r - i)) : e && r < i && (i = r - (x - k(i - r))),
            t[0] = r,
            t[1] = i
        }
        var S = function() {
            function t(t) {
                this.dpr = 1,
                this._xi = 0,
                this._yi = 0,
                this._x0 = 0,
                this._y0 = 0,
                this._len = 0,
                t && (this._saveData = !1),
                this._saveData && (this.data = [])
            }
            return t.prototype.increaseVersion = function() {
                this._version++
            }
            ,
            t.prototype.getVersion = function() {
                return this._version
            }
            ,
            t.prototype.setScale = function(t, e, r) {
                r = r || 0,
                r > 0 && (this._ux = b(r / a["e"] / t) || 0,
                this._uy = b(r / a["e"] / e) || 0)
            }
            ,
            t.prototype.setDPR = function(t) {
                this.dpr = t
            }
            ,
            t.prototype.setContext = function(t) {
                this._ctx = t
            }
            ,
            t.prototype.getContext = function() {
                return this._ctx
            }
            ,
            t.prototype.beginPath = function() {
                return this._ctx && this._ctx.beginPath(),
                this.reset(),
                this
            }
            ,
            t.prototype.reset = function() {
                this._saveData && (this._len = 0),
                this._pathSegLen && (this._pathSegLen = null,
                this._pathLen = 0),
                this._version++
            }
            ,
            t.prototype.moveTo = function(t, e) {
                return this._drawPendingPt(),
                this.addData(u.M, t, e),
                this._ctx && this._ctx.moveTo(t, e),
                this._x0 = t,
                this._y0 = e,
                this._xi = t,
                this._yi = e,
                this
            }
            ,
            t.prototype.lineTo = function(t, e) {
                var r = b(t - this._xi)
                  , n = b(e - this._yi)
                  , i = r > this._ux || n > this._uy;
                if (this.addData(u.L, t, e),
                this._ctx && i && this._ctx.lineTo(t, e),
                i)
                    this._xi = t,
                    this._yi = e,
                    this._pendingPtDist = 0;
                else {
                    var a = r * r + n * n;
                    a > this._pendingPtDist && (this._pendingPtX = t,
                    this._pendingPtY = e,
                    this._pendingPtDist = a)
                }
                return this
            }
            ,
            t.prototype.bezierCurveTo = function(t, e, r, n, i, a) {
                return this._drawPendingPt(),
                this.addData(u.C, t, e, r, n, i, a),
                this._ctx && this._ctx.bezierCurveTo(t, e, r, n, i, a),
                this._xi = i,
                this._yi = a,
                this
            }
            ,
            t.prototype.quadraticCurveTo = function(t, e, r, n) {
                return this._drawPendingPt(),
                this.addData(u.Q, t, e, r, n),
                this._ctx && this._ctx.quadraticCurveTo(t, e, r, n),
                this._xi = r,
                this._yi = n,
                this
            }
            ,
            t.prototype.arc = function(t, e, r, n, i, a) {
                this._drawPendingPt(),
                O[0] = n,
                O[1] = i,
                j(O, a),
                n = O[0],
                i = O[1];
                var o = i - n;
                return this.addData(u.A, t, e, r, r, n, o, 0, a ? 0 : 1),
                this._ctx && this._ctx.arc(t, e, r, n, i, a),
                this._xi = g(i) * r + t,
                this._yi = _(i) * r + e,
                this
            }
            ,
            t.prototype.arcTo = function(t, e, r, n, i) {
                return this._drawPendingPt(),
                this._ctx && this._ctx.arcTo(t, e, r, n, i),
                this
            }
            ,
            t.prototype.rect = function(t, e, r, n) {
                return this._drawPendingPt(),
                this._ctx && this._ctx.rect(t, e, r, n),
                this.addData(u.R, t, e, r, n),
                this
            }
            ,
            t.prototype.closePath = function() {
                this._drawPendingPt(),
                this.addData(u.Z);
                var t = this._ctx
                  , e = this._x0
                  , r = this._y0;
                return t && t.closePath(),
                this._xi = e,
                this._yi = r,
                this
            }
            ,
            t.prototype.fill = function(t) {
                t && t.fill(),
                this.toStatic()
            }
            ,
            t.prototype.stroke = function(t) {
                t && t.stroke(),
                this.toStatic()
            }
            ,
            t.prototype.len = function() {
                return this._len
            }
            ,
            t.prototype.setData = function(t) {
                var e = t.length;
                this.data && this.data.length === e || !w || (this.data = new Float32Array(e));
                for (var r = 0; r < e; r++)
                    this.data[r] = t[r];
                this._len = e
            }
            ,
            t.prototype.appendPath = function(t) {
                t instanceof Array || (t = [t]);
                for (var e = t.length, r = 0, n = this._len, i = 0; i < e; i++)
                    r += t[i].len();
                w && this.data instanceof Float32Array && (this.data = new Float32Array(n + r));
                for (i = 0; i < e; i++)
                    for (var a = t[i].data, o = 0; o < a.length; o++)
                        this.data[n++] = a[o];
                this._len = n
            }
            ,
            t.prototype.addData = function(t, e, r, n, i, a, o, s, u) {
                if (this._saveData) {
                    var h = this.data;
                    this._len + arguments.length > h.length && (this._expandData(),
                    h = this.data);
                    for (var l = 0; l < arguments.length; l++)
                        h[this._len++] = arguments[l]
                }
            }
            ,
            t.prototype._drawPendingPt = function() {
                this._pendingPtDist > 0 && (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY),
                this._pendingPtDist = 0)
            }
            ,
            t.prototype._expandData = function() {
                if (!(this.data instanceof Array)) {
                    for (var t = [], e = 0; e < this._len; e++)
                        t[e] = this.data[e];
                    this.data = t
                }
            }
            ,
            t.prototype.toStatic = function() {
                if (this._saveData) {
                    this._drawPendingPt();
                    var t = this.data;
                    t instanceof Array && (t.length = this._len,
                    w && this._len > 11 && (this.data = new Float32Array(t)))
                }
            }
            ,
            t.prototype.getBoundingRect = function() {
                c[0] = c[1] = p[0] = p[1] = Number.MAX_VALUE,
                f[0] = f[1] = d[0] = d[1] = -Number.MAX_VALUE;
                var t, e = this.data, r = 0, a = 0, s = 0, h = 0;
                for (t = 0; t < this._len; ) {
                    var l = e[t++]
                      , v = 1 === t;
                    switch (v && (r = e[t],
                    a = e[t + 1],
                    s = r,
                    h = a),
                    l) {
                    case u.M:
                        r = s = e[t++],
                        a = h = e[t++],
                        p[0] = s,
                        p[1] = h,
                        d[0] = s,
                        d[1] = h;
                        break;
                    case u.L:
                        Object(o["c"])(r, a, e[t], e[t + 1], p, d),
                        r = e[t++],
                        a = e[t++];
                        break;
                    case u.C:
                        Object(o["b"])(r, a, e[t++], e[t++], e[t++], e[t++], e[t], e[t + 1], p, d),
                        r = e[t++],
                        a = e[t++];
                        break;
                    case u.Q:
                        Object(o["e"])(r, a, e[t++], e[t++], e[t], e[t + 1], p, d),
                        r = e[t++],
                        a = e[t++];
                        break;
                    case u.A:
                        var y = e[t++]
                          , b = e[t++]
                          , m = e[t++]
                          , x = e[t++]
                          , w = e[t++]
                          , O = e[t++] + w;
                        t += 1;
                        var k = !e[t++];
                        v && (s = g(w) * m + y,
                        h = _(w) * x + b),
                        Object(o["a"])(y, b, m, x, w, O, k, p, d),
                        r = g(O) * m + y,
                        a = _(O) * x + b;
                        break;
                    case u.R:
                        s = r = e[t++],
                        h = a = e[t++];
                        var j = e[t++]
                          , S = e[t++];
                        Object(o["c"])(s, h, s + j, h + S, p, d);
                        break;
                    case u.Z:
                        r = s,
                        a = h;
                        break
                    }
                    n["min"](c, c, p),
                    n["max"](f, f, d)
                }
                return 0 === t && (c[0] = c[1] = f[0] = f[1] = 0),
                new i["a"](c[0],c[1],f[0] - c[0],f[1] - c[1])
            }
            ,
            t.prototype._calculateLength = function() {
                var t = this.data
                  , e = this._len
                  , r = this._ux
                  , n = this._uy
                  , i = 0
                  , a = 0
                  , o = 0
                  , h = 0;
                this._pathSegLen || (this._pathSegLen = []);
                for (var l = this._pathSegLen, c = 0, f = 0, p = 0; p < e; ) {
                    var d = t[p++]
                      , m = 1 === p;
                    m && (i = t[p],
                    a = t[p + 1],
                    o = i,
                    h = a);
                    var w = -1;
                    switch (d) {
                    case u.M:
                        i = o = t[p++],
                        a = h = t[p++];
                        break;
                    case u.L:
                        var O = t[p++]
                          , k = t[p++]
                          , j = O - i
                          , S = k - a;
                        (b(j) > r || b(S) > n || p === e - 1) && (w = Math.sqrt(j * j + S * S),
                        i = O,
                        a = k);
                        break;
                    case u.C:
                        var T = t[p++]
                          , C = t[p++]
                          , P = (O = t[p++],
                        k = t[p++],
                        t[p++])
                          , M = t[p++];
                        w = Object(s["d"])(i, a, T, C, O, k, P, M, 10),
                        i = P,
                        a = M;
                        break;
                    case u.Q:
                        T = t[p++],
                        C = t[p++],
                        O = t[p++],
                        k = t[p++];
                        w = Object(s["k"])(i, a, T, C, O, k, 10),
                        i = O,
                        a = k;
                        break;
                    case u.A:
                        var A = t[p++]
                          , L = t[p++]
                          , D = t[p++]
                          , z = t[p++]
                          , I = t[p++]
                          , R = t[p++]
                          , F = R + I;
                        p += 1;
                        t[p++];
                        m && (o = g(I) * D + A,
                        h = _(I) * z + L),
                        w = y(D, z) * v(x, Math.abs(R)),
                        i = g(F) * D + A,
                        a = _(F) * z + L;
                        break;
                    case u.R:
                        o = i = t[p++],
                        h = a = t[p++];
                        var B = t[p++]
                          , N = t[p++];
                        w = 2 * B + 2 * N;
                        break;
                    case u.Z:
                        j = o - i,
                        S = h - a;
                        w = Math.sqrt(j * j + S * S),
                        i = o,
                        a = h;
                        break
                    }
                    w >= 0 && (l[f++] = w,
                    c += w)
                }
                return this._pathLen = c,
                c
            }
            ,
            t.prototype.rebuildPath = function(t, e) {
                var r, n, i, a, o, c, f, p, d, m, x, w = this.data, O = this._ux, k = this._uy, j = this._len, S = e < 1, T = 0, C = 0, P = 0;
                if (!S || (this._pathSegLen || this._calculateLength(),
                f = this._pathSegLen,
                p = this._pathLen,
                d = e * p,
                d))
                    t: for (var M = 0; M < j; ) {
                        var A = w[M++]
                          , L = 1 === M;
                        switch (L && (i = w[M],
                        a = w[M + 1],
                        r = i,
                        n = a),
                        A !== u.L && P > 0 && (t.lineTo(m, x),
                        P = 0),
                        A) {
                        case u.M:
                            r = i = w[M++],
                            n = a = w[M++],
                            t.moveTo(i, a);
                            break;
                        case u.L:
                            o = w[M++],
                            c = w[M++];
                            var D = b(o - i)
                              , z = b(c - a);
                            if (D > O || z > k) {
                                if (S) {
                                    var I = f[C++];
                                    if (T + I > d) {
                                        var R = (d - T) / I;
                                        t.lineTo(i * (1 - R) + o * R, a * (1 - R) + c * R);
                                        break t
                                    }
                                    T += I
                                }
                                t.lineTo(o, c),
                                i = o,
                                a = c,
                                P = 0
                            } else {
                                var F = D * D + z * z;
                                F > P && (m = o,
                                x = c,
                                P = F)
                            }
                            break;
                        case u.C:
                            var B = w[M++]
                              , N = w[M++]
                              , H = w[M++]
                              , E = w[M++]
                              , W = w[M++]
                              , q = w[M++];
                            if (S) {
                                I = f[C++];
                                if (T + I > d) {
                                    R = (d - T) / I;
                                    Object(s["g"])(i, B, H, W, R, h),
                                    Object(s["g"])(a, N, E, q, R, l),
                                    t.bezierCurveTo(h[1], l[1], h[2], l[2], h[3], l[3]);
                                    break t
                                }
                                T += I
                            }
                            t.bezierCurveTo(B, N, H, E, W, q),
                            i = W,
                            a = q;
                            break;
                        case u.Q:
                            B = w[M++],
                            N = w[M++],
                            H = w[M++],
                            E = w[M++];
                            if (S) {
                                I = f[C++];
                                if (T + I > d) {
                                    R = (d - T) / I;
                                    Object(s["n"])(i, B, H, R, h),
                                    Object(s["n"])(a, N, E, R, l),
                                    t.quadraticCurveTo(h[1], l[1], h[2], l[2]);
                                    break t
                                }
                                T += I
                            }
                            t.quadraticCurveTo(B, N, H, E),
                            i = H,
                            a = E;
                            break;
                        case u.A:
                            var X = w[M++]
                              , Y = w[M++]
                              , V = w[M++]
                              , U = w[M++]
                              , G = w[M++]
                              , Z = w[M++]
                              , K = w[M++]
                              , Q = !w[M++]
                              , $ = V > U ? V : U
                              , J = b(V - U) > .001
                              , tt = G + Z
                              , et = !1;
                            if (S) {
                                I = f[C++];
                                T + I > d && (tt = G + Z * (d - T) / I,
                                et = !0),
                                T += I
                            }
                            if (J && t.ellipse ? t.ellipse(X, Y, V, U, K, G, tt, Q) : t.arc(X, Y, $, G, tt, Q),
                            et)
                                break t;
                            L && (r = g(G) * V + X,
                            n = _(G) * U + Y),
                            i = g(tt) * V + X,
                            a = _(tt) * U + Y;
                            break;
                        case u.R:
                            r = i = w[M],
                            n = a = w[M + 1],
                            o = w[M++],
                            c = w[M++];
                            var rt = w[M++]
                              , nt = w[M++];
                            if (S) {
                                I = f[C++];
                                if (T + I > d) {
                                    var it = d - T;
                                    t.moveTo(o, c),
                                    t.lineTo(o + v(it, rt), c),
                                    it -= rt,
                                    it > 0 && t.lineTo(o + rt, c + v(it, nt)),
                                    it -= nt,
                                    it > 0 && t.lineTo(o + y(rt - it, 0), c + nt),
                                    it -= rt,
                                    it > 0 && t.lineTo(o, c + y(nt - it, 0));
                                    break t
                                }
                                T += I
                            }
                            t.rect(o, c, rt, nt);
                            break;
                        case u.Z:
                            if (S) {
                                I = f[C++];
                                if (T + I > d) {
                                    R = (d - T) / I;
                                    t.lineTo(i * (1 - R) + r * R, a * (1 - R) + n * R);
                                    break t
                                }
                                T += I
                            }
                            t.closePath(),
                            i = r,
                            a = n
                        }
                    }
            }
            ,
            t.prototype.clone = function() {
                var e = new t
                  , r = this.data;
                return e.data = r.slice ? r.slice() : Array.prototype.slice.call(r),
                e._len = this._len,
                e
            }
            ,
            t.CMD = u,
            t.initDefaultProps = function() {
                var e = t.prototype;
                e._saveData = !0,
                e._ux = 0,
                e._uy = 0,
                e._pendingPtDist = 0,
                e._version = 0
            }(),
            t
        }();
        e["a"] = S
    },
    "21a10": function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return i
        }
        ));
        /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
        var n = function(t, e) {
            return n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
            }
            ,
            n(t, e)
        };
        function i(t, e) {
            if ("function" !== typeof e && null !== e)
                throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            function r() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
            new r)
        }
        Object.create;
        Object.create
    },
    "22d1": function(t, e, r) {
        "use strict";
        var n = function() {
            function t() {
                this.firefox = !1,
                this.ie = !1,
                this.edge = !1,
                this.newEdge = !1,
                this.weChat = !1
            }
            return t
        }()
          , i = function() {
            function t() {
                this.browser = new n,
                this.node = !1,
                this.wxa = !1,
                this.worker = !1,
                this.svgSupported = !1,
                this.touchEventsSupported = !1,
                this.pointerEventsSupported = !1,
                this.domSupported = !1,
                this.transformSupported = !1,
                this.transform3dSupported = !1,
                this.hasGlobalWindow = "undefined" !== typeof window
            }
            return t
        }()
          , a = new i;
        function o(t, e) {
            var r = e.browser
              , n = t.match(/Firefox\/([\d.]+)/)
              , i = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/)
              , a = t.match(/Edge?\/([\d.]+)/)
              , o = /micromessenger/i.test(t);
            n && (r.firefox = !0,
            r.version = n[1]),
            i && (r.ie = !0,
            r.version = i[1]),
            a && (r.edge = !0,
            r.version = a[1],
            r.newEdge = +a[1].split(".")[0] > 18),
            o && (r.weChat = !0),
            e.svgSupported = "undefined" !== typeof SVGRect,
            e.touchEventsSupported = "ontouchstart"in window && !r.ie && !r.edge,
            e.pointerEventsSupported = "onpointerdown"in window && (r.edge || r.ie && +r.version >= 11),
            e.domSupported = "undefined" !== typeof document;
            var s = document.documentElement.style;
            e.transform3dSupported = (r.ie && "transition"in s || r.edge || "WebKitCSSMatrix"in window && "m11"in new WebKitCSSMatrix || "MozPerspective"in s) && !("OTransition"in s),
            e.transformSupported = e.transform3dSupported || r.ie && +r.version >= 9
        }
        "object" === typeof wx && "function" === typeof wx.getSystemInfoSync ? (a.wxa = !0,
        a.touchEventsSupported = !0) : "undefined" === typeof document && "undefined" !== typeof self ? a.worker = !0 : "undefined" === typeof navigator ? (a.node = !0,
        a.svgSupported = !0) : o(navigator.userAgent, a),
        e["a"] = a
    },
    "2cf4": function(t, e, r) {
        "use strict";
        r.d(e, "e", (function() {
            return a
        }
        )),
        r.d(e, "b", (function() {
            return o
        }
        )),
        r.d(e, "a", (function() {
            return s
        }
        )),
        r.d(e, "d", (function() {
            return u
        }
        )),
        r.d(e, "c", (function() {
            return h
        }
        ));
        var n = r("22d1")
          , i = 1;
        n["a"].hasGlobalWindow && (i = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
        var a = i
          , o = .4
          , s = "#333"
          , u = "#ccc"
          , h = "#eee"
    },
    "2dc5": function(t, e, r) {
        "use strict";
        var n = r("21a10")
          , i = r("6d8b")
          , a = r("d5b7")
          , o = r("9850")
          , s = function(t) {
            function e(e) {
                var r = t.call(this) || this;
                return r.isGroup = !0,
                r._children = [],
                r.attr(e),
                r
            }
            return Object(n["a"])(e, t),
            e.prototype.childrenRef = function() {
                return this._children
            }
            ,
            e.prototype.children = function() {
                return this._children.slice()
            }
            ,
            e.prototype.childAt = function(t) {
                return this._children[t]
            }
            ,
            e.prototype.childOfName = function(t) {
                for (var e = this._children, r = 0; r < e.length; r++)
                    if (e[r].name === t)
                        return e[r]
            }
            ,
            e.prototype.childCount = function() {
                return this._children.length
            }
            ,
            e.prototype.add = function(t) {
                return t && t !== this && t.parent !== this && (this._children.push(t),
                this._doAdd(t)),
                this
            }
            ,
            e.prototype.addBefore = function(t, e) {
                if (t && t !== this && t.parent !== this && e && e.parent === this) {
                    var r = this._children
                      , n = r.indexOf(e);
                    n >= 0 && (r.splice(n, 0, t),
                    this._doAdd(t))
                }
                return this
            }
            ,
            e.prototype.replace = function(t, e) {
                var r = i["indexOf"](this._children, t);
                return r >= 0 && this.replaceAt(e, r),
                this
            }
            ,
            e.prototype.replaceAt = function(t, e) {
                var r = this._children
                  , n = r[e];
                if (t && t !== this && t.parent !== this && t !== n) {
                    r[e] = t,
                    n.parent = null;
                    var i = this.__zr;
                    i && n.removeSelfFromZr(i),
                    this._doAdd(t)
                }
                return this
            }
            ,
            e.prototype._doAdd = function(t) {
                t.parent && t.parent.remove(t),
                t.parent = this;
                var e = this.__zr;
                e && e !== t.__zr && t.addSelfToZr(e),
                e && e.refresh()
            }
            ,
            e.prototype.remove = function(t) {
                var e = this.__zr
                  , r = this._children
                  , n = i["indexOf"](r, t);
                return n < 0 || (r.splice(n, 1),
                t.parent = null,
                e && t.removeSelfFromZr(e),
                e && e.refresh()),
                this
            }
            ,
            e.prototype.removeAll = function() {
                for (var t = this._children, e = this.__zr, r = 0; r < t.length; r++) {
                    var n = t[r];
                    e && n.removeSelfFromZr(e),
                    n.parent = null
                }
                return t.length = 0,
                this
            }
            ,
            e.prototype.eachChild = function(t, e) {
                for (var r = this._children, n = 0; n < r.length; n++) {
                    var i = r[n];
                    t.call(e, i, n)
                }
                return this
            }
            ,
            e.prototype.traverse = function(t, e) {
                for (var r = 0; r < this._children.length; r++) {
                    var n = this._children[r]
                      , i = t.call(e, n);
                    n.isGroup && !i && n.traverse(t, e)
                }
                return this
            }
            ,
            e.prototype.addSelfToZr = function(e) {
                t.prototype.addSelfToZr.call(this, e);
                for (var r = 0; r < this._children.length; r++) {
                    var n = this._children[r];
                    n.addSelfToZr(e)
                }
            }
            ,
            e.prototype.removeSelfFromZr = function(e) {
                t.prototype.removeSelfFromZr.call(this, e);
                for (var r = 0; r < this._children.length; r++) {
                    var n = this._children[r];
                    n.removeSelfFromZr(e)
                }
            }
            ,
            e.prototype.getBoundingRect = function(t) {
                for (var e = new o["a"](0,0,0,0), r = t || this._children, n = [], i = null, a = 0; a < r.length; a++) {
                    var s = r[a];
                    if (!s.ignore && !s.invisible) {
                        var u = s.getBoundingRect()
                          , h = s.getLocalTransform(n);
                        h ? (o["a"].applyTransform(e, u, h),
                        i = i || e.clone(),
                        i.union(e)) : (i = i || u.clone(),
                        i.union(u))
                    }
                }
                return i || e
            }
            ,
            e
        }(a["a"]);
        s.prototype.type = "group",
        e["a"] = s
    },
    3041: function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return W
        }
        )),
        r.d(e, "b", (function() {
            return q
        }
        ));
        var n, i = r("2dc5"), a = r("0da8"), o = r("d9fc"), s = r("c7a2"), u = r("ae69"), h = r("cb11"), l = r("87b1"), c = r("d498"), f = r("1687"), p = r("342d"), d = r("6d8b"), v = r("48a9"), y = r("dded"), g = r("dd4f"), _ = r("4a80"), b = {
            fill: "fill",
            stroke: "stroke",
            "stroke-width": "lineWidth",
            opacity: "opacity",
            "fill-opacity": "fillOpacity",
            "stroke-opacity": "strokeOpacity",
            "stroke-dasharray": "lineDash",
            "stroke-dashoffset": "lineDashOffset",
            "stroke-linecap": "lineCap",
            "stroke-linejoin": "lineJoin",
            "stroke-miterlimit": "miterLimit",
            "font-family": "fontFamily",
            "font-size": "fontSize",
            "font-style": "fontStyle",
            "font-weight": "fontWeight",
            "text-anchor": "textAlign",
            visibility: "visibility",
            display: "display"
        }, m = Object(d["keys"])(b), x = {
            "alignment-baseline": "textBaseline",
            "stop-color": "stopColor"
        }, w = Object(d["keys"])(x), O = function() {
            function t() {
                this._defs = {},
                this._root = null
            }
            return t.prototype.parse = function(t, e) {
                e = e || {};
                var r = Object(_["a"])(t);
                this._defsUsePending = [];
                var n = new i["a"];
                this._root = n;
                var a = []
                  , o = r.getAttribute("viewBox") || ""
                  , u = parseFloat(r.getAttribute("width") || e.width)
                  , h = parseFloat(r.getAttribute("height") || e.height);
                isNaN(u) && (u = null),
                isNaN(h) && (h = null),
                P(r, n, null, !0, !1);
                var l, c, f = r.firstChild;
                while (f)
                    this._parseNode(f, n, a, null, !1, !1),
                    f = f.nextSibling;
                if (D(this._defs, this._defsUsePending),
                this._defsUsePending = [],
                o) {
                    var p = I(o);
                    p.length >= 4 && (l = {
                        x: parseFloat(p[0] || 0),
                        y: parseFloat(p[1] || 0),
                        width: parseFloat(p[2]),
                        height: parseFloat(p[3])
                    })
                }
                if (l && null != u && null != h && (c = W(l, {
                    x: 0,
                    y: 0,
                    width: u,
                    height: h
                }),
                !e.ignoreViewBox)) {
                    var d = n;
                    n = new i["a"],
                    n.add(d),
                    d.scaleX = d.scaleY = c.scale,
                    d.x = c.x,
                    d.y = c.y
                }
                return e.ignoreRootClip || null == u || null == h || n.setClipPath(new s["a"]({
                    shape: {
                        x: 0,
                        y: 0,
                        width: u,
                        height: h
                    }
                })),
                {
                    root: n,
                    width: u,
                    height: h,
                    viewBoxRect: l,
                    viewBoxTransform: c,
                    named: a
                }
            }
            ,
            t.prototype._parseNode = function(t, e, r, i, a, o) {
                var s, u = t.nodeName.toLowerCase(), h = i;
                if ("defs" === u && (a = !0),
                "text" === u && (o = !0),
                "defs" === u || "switch" === u)
                    s = e;
                else {
                    if (!a) {
                        var l = n[u];
                        if (l && Object(d["hasOwn"])(n, u)) {
                            s = l.call(this, t, e);
                            var c = t.getAttribute("name");
                            if (c) {
                                var f = {
                                    name: c,
                                    namedFrom: null,
                                    svgNodeTagLower: u,
                                    el: s
                                };
                                r.push(f),
                                "g" === u && (h = f)
                            } else
                                i && r.push({
                                    name: i.name,
                                    namedFrom: i,
                                    svgNodeTagLower: u,
                                    el: s
                                });
                            e.add(s)
                        }
                    }
                    var p = k[u];
                    if (p && Object(d["hasOwn"])(k, u)) {
                        var v = p.call(this, t)
                          , y = t.getAttribute("id");
                        y && (this._defs[y] = v)
                    }
                }
                if (s && s.isGroup) {
                    var g = t.firstChild;
                    while (g)
                        1 === g.nodeType ? this._parseNode(g, s, r, h, a, o) : 3 === g.nodeType && o && this._parseText(g, s),
                        g = g.nextSibling
                }
            }
            ,
            t.prototype._parseText = function(t, e) {
                var r = new g["a"]({
                    style: {
                        text: t.textContent
                    },
                    silent: !0,
                    x: this._textX || 0,
                    y: this._textY || 0
                });
                T(e, r),
                P(t, r, this._defsUsePending, !1, !1),
                M(r, e);
                var n = r.style
                  , i = n.fontSize;
                i && i < 9 && (n.fontSize = 9,
                r.scaleX *= i / 9,
                r.scaleY *= i / 9);
                var a = (n.fontSize || n.fontFamily) && [n.fontStyle, n.fontWeight, (n.fontSize || 12) + "px", n.fontFamily || "sans-serif"].join(" ");
                n.font = a;
                var o = r.getBoundingRect();
                return this._textX += o.width,
                e.add(r),
                r
            }
            ,
            t.internalField = function() {
                n = {
                    g: function(t, e) {
                        var r = new i["a"];
                        return T(e, r),
                        P(t, r, this._defsUsePending, !1, !1),
                        r
                    },
                    rect: function(t, e) {
                        var r = new s["a"];
                        return T(e, r),
                        P(t, r, this._defsUsePending, !1, !1),
                        r.setShape({
                            x: parseFloat(t.getAttribute("x") || "0"),
                            y: parseFloat(t.getAttribute("y") || "0"),
                            width: parseFloat(t.getAttribute("width") || "0"),
                            height: parseFloat(t.getAttribute("height") || "0")
                        }),
                        r.silent = !0,
                        r
                    },
                    circle: function(t, e) {
                        var r = new o["a"];
                        return T(e, r),
                        P(t, r, this._defsUsePending, !1, !1),
                        r.setShape({
                            cx: parseFloat(t.getAttribute("cx") || "0"),
                            cy: parseFloat(t.getAttribute("cy") || "0"),
                            r: parseFloat(t.getAttribute("r") || "0")
                        }),
                        r.silent = !0,
                        r
                    },
                    line: function(t, e) {
                        var r = new h["a"];
                        return T(e, r),
                        P(t, r, this._defsUsePending, !1, !1),
                        r.setShape({
                            x1: parseFloat(t.getAttribute("x1") || "0"),
                            y1: parseFloat(t.getAttribute("y1") || "0"),
                            x2: parseFloat(t.getAttribute("x2") || "0"),
                            y2: parseFloat(t.getAttribute("y2") || "0")
                        }),
                        r.silent = !0,
                        r
                    },
                    ellipse: function(t, e) {
                        var r = new u["a"];
                        return T(e, r),
                        P(t, r, this._defsUsePending, !1, !1),
                        r.setShape({
                            cx: parseFloat(t.getAttribute("cx") || "0"),
                            cy: parseFloat(t.getAttribute("cy") || "0"),
                            rx: parseFloat(t.getAttribute("rx") || "0"),
                            ry: parseFloat(t.getAttribute("ry") || "0")
                        }),
                        r.silent = !0,
                        r
                    },
                    polygon: function(t, e) {
                        var r, n = t.getAttribute("points");
                        n && (r = C(n));
                        var i = new l["a"]({
                            shape: {
                                points: r || []
                            },
                            silent: !0
                        });
                        return T(e, i),
                        P(t, i, this._defsUsePending, !1, !1),
                        i
                    },
                    polyline: function(t, e) {
                        var r, n = t.getAttribute("points");
                        n && (r = C(n));
                        var i = new c["a"]({
                            shape: {
                                points: r || []
                            },
                            silent: !0
                        });
                        return T(e, i),
                        P(t, i, this._defsUsePending, !1, !1),
                        i
                    },
                    image: function(t, e) {
                        var r = new a["a"];
                        return T(e, r),
                        P(t, r, this._defsUsePending, !1, !1),
                        r.setStyle({
                            image: t.getAttribute("xlink:href") || t.getAttribute("href"),
                            x: +t.getAttribute("x"),
                            y: +t.getAttribute("y"),
                            width: +t.getAttribute("width"),
                            height: +t.getAttribute("height")
                        }),
                        r.silent = !0,
                        r
                    },
                    text: function(t, e) {
                        var r = t.getAttribute("x") || "0"
                          , n = t.getAttribute("y") || "0"
                          , a = t.getAttribute("dx") || "0"
                          , o = t.getAttribute("dy") || "0";
                        this._textX = parseFloat(r) + parseFloat(a),
                        this._textY = parseFloat(n) + parseFloat(o);
                        var s = new i["a"];
                        return T(e, s),
                        P(t, s, this._defsUsePending, !1, !0),
                        s
                    },
                    tspan: function(t, e) {
                        var r = t.getAttribute("x")
                          , n = t.getAttribute("y");
                        null != r && (this._textX = parseFloat(r)),
                        null != n && (this._textY = parseFloat(n));
                        var a = t.getAttribute("dx") || "0"
                          , o = t.getAttribute("dy") || "0"
                          , s = new i["a"];
                        return T(e, s),
                        P(t, s, this._defsUsePending, !1, !0),
                        this._textX += parseFloat(a),
                        this._textY += parseFloat(o),
                        s
                    },
                    path: function(t, e) {
                        var r = t.getAttribute("d") || ""
                          , n = Object(p["b"])(r);
                        return T(e, n),
                        P(t, n, this._defsUsePending, !1, !1),
                        n.silent = !0,
                        n
                    }
                }
            }(),
            t
        }(), k = {
            lineargradient: function(t) {
                var e = parseInt(t.getAttribute("x1") || "0", 10)
                  , r = parseInt(t.getAttribute("y1") || "0", 10)
                  , n = parseInt(t.getAttribute("x2") || "10", 10)
                  , i = parseInt(t.getAttribute("y2") || "0", 10)
                  , a = new v["a"](e,r,n,i);
                return j(t, a),
                S(t, a),
                a
            },
            radialgradient: function(t) {
                var e = parseInt(t.getAttribute("cx") || "0", 10)
                  , r = parseInt(t.getAttribute("cy") || "0", 10)
                  , n = parseInt(t.getAttribute("r") || "0", 10)
                  , i = new y["a"](e,r,n);
                return j(t, i),
                S(t, i),
                i
            }
        };
        function j(t, e) {
            var r = t.getAttribute("gradientUnits");
            "userSpaceOnUse" === r && (e.global = !0)
        }
        function S(t, e) {
            var r = t.firstChild;
            while (r) {
                if (1 === r.nodeType && "stop" === r.nodeName.toLocaleLowerCase()) {
                    var n = r.getAttribute("offset")
                      , i = void 0;
                    i = n && n.indexOf("%") > 0 ? parseInt(n, 10) / 100 : n ? parseFloat(n) : 0;
                    var a = {};
                    H(r, a, a);
                    var o = a.stopColor || r.getAttribute("stop-color") || "#000000";
                    e.colorStops.push({
                        offset: i,
                        color: o
                    })
                }
                r = r.nextSibling
            }
        }
        function T(t, e) {
            t && t.__inheritedStyle && (e.__inheritedStyle || (e.__inheritedStyle = {}),
            Object(d["defaults"])(e.__inheritedStyle, t.__inheritedStyle))
        }
        function C(t) {
            for (var e = I(t), r = [], n = 0; n < e.length; n += 2) {
                var i = parseFloat(e[n])
                  , a = parseFloat(e[n + 1]);
                r.push([i, a])
            }
            return r
        }
        function P(t, e, r, n, i) {
            var a = e
              , o = a.__inheritedStyle = a.__inheritedStyle || {}
              , s = {};
            1 === t.nodeType && (B(t, e),
            H(t, o, s),
            n || E(t, o, s)),
            a.style = a.style || {},
            null != o.fill && (a.style.fill = L(a, "fill", o.fill, r)),
            null != o.stroke && (a.style.stroke = L(a, "stroke", o.stroke, r)),
            Object(d["each"])(["lineWidth", "opacity", "fillOpacity", "strokeOpacity", "miterLimit", "fontSize"], (function(t) {
                null != o[t] && (a.style[t] = parseFloat(o[t]))
            }
            )),
            Object(d["each"])(["lineDashOffset", "lineCap", "lineJoin", "fontWeight", "fontFamily", "fontStyle", "textAlign"], (function(t) {
                null != o[t] && (a.style[t] = o[t])
            }
            )),
            i && (a.__selfStyle = s),
            o.lineDash && (a.style.lineDash = Object(d["map"])(I(o.lineDash), (function(t) {
                return parseFloat(t)
            }
            ))),
            "hidden" !== o.visibility && "collapse" !== o.visibility || (a.invisible = !0),
            "none" === o.display && (a.ignore = !0)
        }
        function M(t, e) {
            var r = e.__selfStyle;
            if (r) {
                var n = r.textBaseline
                  , i = n;
                n && "auto" !== n ? "baseline" === n ? i = "alphabetic" : "before-edge" === n || "text-before-edge" === n ? i = "top" : "after-edge" === n || "text-after-edge" === n ? i = "bottom" : "central" !== n && "mathematical" !== n || (i = "middle") : i = "alphabetic",
                t.style.textBaseline = i
            }
            var a = e.__inheritedStyle;
            if (a) {
                var o = a.textAlign
                  , s = o;
                o && ("middle" === o && (s = "center"),
                t.style.textAlign = s)
            }
        }
        var A = /^url\(\s*#(.*?)\)/;
        function L(t, e, r, n) {
            var i = r && r.match(A);
            if (!i)
                return "none" === r && (r = null),
                r;
            var a = Object(d["trim"])(i[1]);
            n.push([t, e, a])
        }
        function D(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n[0].style[n[1]] = t[n[2]]
            }
        }
        var z = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
        function I(t) {
            return t.match(z) || []
        }
        var R = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.eE,]*)\)/g
          , F = Math.PI / 180;
        function B(t, e) {
            var r = t.getAttribute("transform");
            if (r) {
                r = r.replace(/,/g, " ");
                var n = []
                  , i = null;
                r.replace(R, (function(t, e, r) {
                    return n.push(e, r),
                    ""
                }
                ));
                for (var a = n.length - 1; a > 0; a -= 2) {
                    var o = n[a]
                      , s = n[a - 1]
                      , u = I(o);
                    switch (i = i || f["create"](),
                    s) {
                    case "translate":
                        f["translate"](i, i, [parseFloat(u[0]), parseFloat(u[1] || "0")]);
                        break;
                    case "scale":
                        f["scale"](i, i, [parseFloat(u[0]), parseFloat(u[1] || u[0])]);
                        break;
                    case "rotate":
                        f["rotate"](i, i, -parseFloat(u[0]) * F);
                        break;
                    case "skewX":
                        var h = Math.tan(parseFloat(u[0]) * F);
                        f["mul"](i, [1, 0, h, 1, 0, 0], i);
                        break;
                    case "skewY":
                        var l = Math.tan(parseFloat(u[0]) * F);
                        f["mul"](i, [1, l, 0, 1, 0, 0], i);
                        break;
                    case "matrix":
                        i[0] = parseFloat(u[0]),
                        i[1] = parseFloat(u[1]),
                        i[2] = parseFloat(u[2]),
                        i[3] = parseFloat(u[3]),
                        i[4] = parseFloat(u[4]),
                        i[5] = parseFloat(u[5]);
                        break
                    }
                }
                e.setLocalTransform(i)
            }
        }
        var N = /([^\s:;]+)\s*:\s*([^:;]+)/g;
        function H(t, e, r) {
            var n = t.getAttribute("style");
            if (n) {
                var i;
                N.lastIndex = 0;
                while (null != (i = N.exec(n))) {
                    var a = i[1]
                      , o = Object(d["hasOwn"])(b, a) ? b[a] : null;
                    o && (e[o] = i[2]);
                    var s = Object(d["hasOwn"])(x, a) ? x[a] : null;
                    s && (r[s] = i[2])
                }
            }
        }
        function E(t, e, r) {
            for (var n = 0; n < m.length; n++) {
                var i = m[n]
                  , a = t.getAttribute(i);
                null != a && (e[b[i]] = a)
            }
            for (n = 0; n < w.length; n++) {
                i = w[n],
                a = t.getAttribute(i);
                null != a && (r[x[i]] = a)
            }
        }
        function W(t, e) {
            var r = e.width / t.width
              , n = e.height / t.height
              , i = Math.min(r, n);
            return {
                scale: i,
                x: -(t.x + t.width / 2) * i + (e.x + e.width / 2),
                y: -(t.y + t.height / 2) * i + (e.y + e.height / 2)
            }
        }
        function q(t, e) {
            var r = new O;
            return r.parse(t, e)
        }
    },
    "342d": function(t, e, r) {
        "use strict";
        r.d(e, "b", (function() {
            return T
        }
        )),
        r.d(e, "c", (function() {
            return C
        }
        )),
        r.d(e, "d", (function() {
            return P
        }
        )),
        r.d(e, "a", (function() {
            return M
        }
        ));
        var n = r("21a10")
          , i = r("cbe5")
          , a = r("20c8")
          , o = r("401b")
          , s = a["a"].CMD
          , u = [[], [], []]
          , h = Math.sqrt
          , l = Math.atan2;
        function c(t, e) {
            if (e) {
                var r, n, i, a, c, f, p = t.data, d = t.len(), v = s.M, y = s.C, g = s.L, _ = s.R, b = s.A, m = s.Q;
                for (i = 0,
                a = 0; i < d; ) {
                    switch (r = p[i++],
                    a = i,
                    n = 0,
                    r) {
                    case v:
                        n = 1;
                        break;
                    case g:
                        n = 1;
                        break;
                    case y:
                        n = 3;
                        break;
                    case m:
                        n = 2;
                        break;
                    case b:
                        var x = e[4]
                          , w = e[5]
                          , O = h(e[0] * e[0] + e[1] * e[1])
                          , k = h(e[2] * e[2] + e[3] * e[3])
                          , j = l(-e[1] / k, e[0] / O);
                        p[i] *= O,
                        p[i++] += x,
                        p[i] *= k,
                        p[i++] += w,
                        p[i++] *= O,
                        p[i++] *= k,
                        p[i++] += j,
                        p[i++] += j,
                        i += 2,
                        a = i;
                        break;
                    case _:
                        f[0] = p[i++],
                        f[1] = p[i++],
                        Object(o["applyTransform"])(f, f, e),
                        p[a++] = f[0],
                        p[a++] = f[1],
                        f[0] += p[i++],
                        f[1] += p[i++],
                        Object(o["applyTransform"])(f, f, e),
                        p[a++] = f[0],
                        p[a++] = f[1]
                    }
                    for (c = 0; c < n; c++) {
                        var S = u[c];
                        S[0] = p[i++],
                        S[1] = p[i++],
                        Object(o["applyTransform"])(S, S, e),
                        p[a++] = S[0],
                        p[a++] = S[1]
                    }
                }
                t.increaseVersion()
            }
        }
        var f = r("6d8b")
          , p = Math.sqrt
          , d = Math.sin
          , v = Math.cos
          , y = Math.PI;
        function g(t) {
            return Math.sqrt(t[0] * t[0] + t[1] * t[1])
        }
        function _(t, e) {
            return (t[0] * e[0] + t[1] * e[1]) / (g(t) * g(e))
        }
        function b(t, e) {
            return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(_(t, e))
        }
        function m(t, e, r, n, i, a, o, s, u, h, l) {
            var c = u * (y / 180)
              , f = v(c) * (t - r) / 2 + d(c) * (e - n) / 2
              , g = -1 * d(c) * (t - r) / 2 + v(c) * (e - n) / 2
              , m = f * f / (o * o) + g * g / (s * s);
            m > 1 && (o *= p(m),
            s *= p(m));
            var x = (i === a ? -1 : 1) * p((o * o * (s * s) - o * o * (g * g) - s * s * (f * f)) / (o * o * (g * g) + s * s * (f * f))) || 0
              , w = x * o * g / s
              , O = x * -s * f / o
              , k = (t + r) / 2 + v(c) * w - d(c) * O
              , j = (e + n) / 2 + d(c) * w + v(c) * O
              , S = b([1, 0], [(f - w) / o, (g - O) / s])
              , T = [(f - w) / o, (g - O) / s]
              , C = [(-1 * f - w) / o, (-1 * g - O) / s]
              , P = b(T, C);
            if (_(T, C) <= -1 && (P = y),
            _(T, C) >= 1 && (P = 0),
            P < 0) {
                var M = Math.round(P / y * 1e6) / 1e6;
                P = 2 * y + M % 2 * y
            }
            l.addData(h, k, j, o, s, S, P, c, a)
        }
        var x = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi
          , w = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
        function O(t) {
            var e = new a["a"];
            if (!t)
                return e;
            var r, n = 0, i = 0, o = n, s = i, u = a["a"].CMD, h = t.match(x);
            if (!h)
                return e;
            for (var l = 0; l < h.length; l++) {
                for (var c = h[l], f = c.charAt(0), p = void 0, d = c.match(w) || [], v = d.length, y = 0; y < v; y++)
                    d[y] = parseFloat(d[y]);
                var g = 0;
                while (g < v) {
                    var _ = void 0
                      , b = void 0
                      , O = void 0
                      , k = void 0
                      , j = void 0
                      , S = void 0
                      , T = void 0
                      , C = n
                      , P = i
                      , M = void 0
                      , A = void 0;
                    switch (f) {
                    case "l":
                        n += d[g++],
                        i += d[g++],
                        p = u.L,
                        e.addData(p, n, i);
                        break;
                    case "L":
                        n = d[g++],
                        i = d[g++],
                        p = u.L,
                        e.addData(p, n, i);
                        break;
                    case "m":
                        n += d[g++],
                        i += d[g++],
                        p = u.M,
                        e.addData(p, n, i),
                        o = n,
                        s = i,
                        f = "l";
                        break;
                    case "M":
                        n = d[g++],
                        i = d[g++],
                        p = u.M,
                        e.addData(p, n, i),
                        o = n,
                        s = i,
                        f = "L";
                        break;
                    case "h":
                        n += d[g++],
                        p = u.L,
                        e.addData(p, n, i);
                        break;
                    case "H":
                        n = d[g++],
                        p = u.L,
                        e.addData(p, n, i);
                        break;
                    case "v":
                        i += d[g++],
                        p = u.L,
                        e.addData(p, n, i);
                        break;
                    case "V":
                        i = d[g++],
                        p = u.L,
                        e.addData(p, n, i);
                        break;
                    case "C":
                        p = u.C,
                        e.addData(p, d[g++], d[g++], d[g++], d[g++], d[g++], d[g++]),
                        n = d[g - 2],
                        i = d[g - 1];
                        break;
                    case "c":
                        p = u.C,
                        e.addData(p, d[g++] + n, d[g++] + i, d[g++] + n, d[g++] + i, d[g++] + n, d[g++] + i),
                        n += d[g - 2],
                        i += d[g - 1];
                        break;
                    case "S":
                        _ = n,
                        b = i,
                        M = e.len(),
                        A = e.data,
                        r === u.C && (_ += n - A[M - 4],
                        b += i - A[M - 3]),
                        p = u.C,
                        C = d[g++],
                        P = d[g++],
                        n = d[g++],
                        i = d[g++],
                        e.addData(p, _, b, C, P, n, i);
                        break;
                    case "s":
                        _ = n,
                        b = i,
                        M = e.len(),
                        A = e.data,
                        r === u.C && (_ += n - A[M - 4],
                        b += i - A[M - 3]),
                        p = u.C,
                        C = n + d[g++],
                        P = i + d[g++],
                        n += d[g++],
                        i += d[g++],
                        e.addData(p, _, b, C, P, n, i);
                        break;
                    case "Q":
                        C = d[g++],
                        P = d[g++],
                        n = d[g++],
                        i = d[g++],
                        p = u.Q,
                        e.addData(p, C, P, n, i);
                        break;
                    case "q":
                        C = d[g++] + n,
                        P = d[g++] + i,
                        n += d[g++],
                        i += d[g++],
                        p = u.Q,
                        e.addData(p, C, P, n, i);
                        break;
                    case "T":
                        _ = n,
                        b = i,
                        M = e.len(),
                        A = e.data,
                        r === u.Q && (_ += n - A[M - 4],
                        b += i - A[M - 3]),
                        n = d[g++],
                        i = d[g++],
                        p = u.Q,
                        e.addData(p, _, b, n, i);
                        break;
                    case "t":
                        _ = n,
                        b = i,
                        M = e.len(),
                        A = e.data,
                        r === u.Q && (_ += n - A[M - 4],
                        b += i - A[M - 3]),
                        n += d[g++],
                        i += d[g++],
                        p = u.Q,
                        e.addData(p, _, b, n, i);
                        break;
                    case "A":
                        O = d[g++],
                        k = d[g++],
                        j = d[g++],
                        S = d[g++],
                        T = d[g++],
                        C = n,
                        P = i,
                        n = d[g++],
                        i = d[g++],
                        p = u.A,
                        m(C, P, n, i, S, T, O, k, j, p, e);
                        break;
                    case "a":
                        O = d[g++],
                        k = d[g++],
                        j = d[g++],
                        S = d[g++],
                        T = d[g++],
                        C = n,
                        P = i,
                        n += d[g++],
                        i += d[g++],
                        p = u.A,
                        m(C, P, n, i, S, T, O, k, j, p, e);
                        break
                    }
                }
                "z" !== f && "Z" !== f || (p = u.Z,
                e.addData(p),
                n = o,
                i = s),
                r = p
            }
            return e.toStatic(),
            e
        }
        var k = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return Object(n["a"])(e, t),
            e.prototype.applyTransform = function(t) {}
            ,
            e
        }(i["b"]);
        function j(t) {
            return null != t.setData
        }
        function S(t, e) {
            var r = O(t)
              , n = Object(f["extend"])({}, e);
            return n.buildPath = function(t) {
                if (j(t)) {
                    t.setData(r.data);
                    var e = t.getContext();
                    e && t.rebuildPath(e, 1)
                } else {
                    e = t;
                    r.rebuildPath(e, 1)
                }
            }
            ,
            n.applyTransform = function(t) {
                c(r, t),
                this.dirtyShape()
            }
            ,
            n
        }
        function T(t, e) {
            return new k(S(t, e))
        }
        function C(t, e) {
            var r = S(t, e)
              , i = function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.applyTransform = r.applyTransform,
                    n.buildPath = r.buildPath,
                    n
                }
                return Object(n["a"])(e, t),
                e
            }(k);
            return i
        }
        function P(t, e) {
            for (var r = [], n = t.length, a = 0; a < n; a++) {
                var o = t[a];
                r.push(o.getUpdatedPathProxy(!0))
            }
            var s = new i["b"](e);
            return s.createPathProxy(),
            s.buildPath = function(t) {
                if (j(t)) {
                    t.appendPath(r);
                    var e = t.getContext();
                    e && t.rebuildPath(e, 1)
                }
            }
            ,
            s
        }
        function M(t, e) {
            e = e || {};
            var r = new i["b"];
            return t.shape && r.setShape(t.shape),
            r.setStyle(t.style),
            e.bakeTransform ? c(r.path, t.getComputedTransform()) : e.toLocal ? r.setLocalTransform(t.getComputedTransform()) : r.copyTransform(t),
            r.buildPath = t.buildPath,
            r.applyTransform = r.applyTransform,
            r.z = t.z,
            r.z2 = t.z2,
            r.zlevel = t.zlevel,
            r
        }
    },
    3437: function(t, e, r) {
        "use strict";
        function n(t, e, r) {
            var n = null == e.x ? 0 : e.x
              , i = null == e.x2 ? 1 : e.x2
              , a = null == e.y ? 0 : e.y
              , o = null == e.y2 ? 0 : e.y2;
            e.global || (n = n * r.width + r.x,
            i = i * r.width + r.x,
            a = a * r.height + r.y,
            o = o * r.height + r.y),
            n = isNaN(n) ? 0 : n,
            i = isNaN(i) ? 1 : i,
            a = isNaN(a) ? 0 : a,
            o = isNaN(o) ? 0 : o;
            var s = t.createLinearGradient(n, a, i, o);
            return s
        }
        function i(t, e, r) {
            var n = r.width
              , i = r.height
              , a = Math.min(n, i)
              , o = null == e.x ? .5 : e.x
              , s = null == e.y ? .5 : e.y
              , u = null == e.r ? .5 : e.r;
            e.global || (o = o * n + r.x,
            s = s * i + r.y,
            u *= a);
            var h = t.createRadialGradient(o, s, 0, o, s, u);
            return h
        }
        function a(t, e, r) {
            for (var a = "radial" === e.type ? i(t, e, r) : n(t, e, r), o = e.colorStops, s = 0; s < o.length; s++)
                a.addColorStop(o[s].offset, o[s].color);
            return a
        }
        function o(t, e) {
            if (t === e || !t && !e)
                return !1;
            if (!t || !e || t.length !== e.length)
                return !0;
            for (var r = 0; r < t.length; r++)
                if (t[r] !== e[r])
                    return !0;
            return !1
        }
        function s(t) {
            return parseInt(t, 10)
        }
        function u(t, e, r) {
            var n = ["width", "height"][e]
              , i = ["clientWidth", "clientHeight"][e]
              , a = ["paddingLeft", "paddingTop"][e]
              , o = ["paddingRight", "paddingBottom"][e];
            if (null != r[n] && "auto" !== r[n])
                return parseFloat(r[n]);
            var u = document.defaultView.getComputedStyle(t);
            return (t[i] || s(u[n]) || s(t.style[n])) - (s(u[a]) || 0) - (s(u[o]) || 0) | 0
        }
        r.d(e, "a", (function() {
            return a
        }
        )),
        r.d(e, "c", (function() {
            return o
        }
        )),
        r.d(e, "b", (function() {
            return u
        }
        ))
    },
    "392f": function(t, e, r) {
        "use strict";
        var n = r("21a10")
          , i = r("19eb")
          , a = r("9850")
          , o = []
          , s = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.notClear = !0,
                e.incremental = !0,
                e._displayables = [],
                e._temporaryDisplayables = [],
                e._cursor = 0,
                e
            }
            return Object(n["a"])(e, t),
            e.prototype.traverse = function(t, e) {
                t.call(e, this)
            }
            ,
            e.prototype.useStyle = function() {
                this.style = {}
            }
            ,
            e.prototype.getCursor = function() {
                return this._cursor
            }
            ,
            e.prototype.innerAfterBrush = function() {
                this._cursor = this._displayables.length
            }
            ,
            e.prototype.clearDisplaybles = function() {
                this._displayables = [],
                this._temporaryDisplayables = [],
                this._cursor = 0,
                this.markRedraw(),
                this.notClear = !1
            }
            ,
            e.prototype.clearTemporalDisplayables = function() {
                this._temporaryDisplayables = []
            }
            ,
            e.prototype.addDisplayable = function(t, e) {
                e ? this._temporaryDisplayables.push(t) : this._displayables.push(t),
                this.markRedraw()
            }
            ,
            e.prototype.addDisplayables = function(t, e) {
                e = e || !1;
                for (var r = 0; r < t.length; r++)
                    this.addDisplayable(t[r], e)
            }
            ,
            e.prototype.getDisplayables = function() {
                return this._displayables
            }
            ,
            e.prototype.getTemporalDisplayables = function() {
                return this._temporaryDisplayables
            }
            ,
            e.prototype.eachPendingDisplayable = function(t) {
                for (var e = this._cursor; e < this._displayables.length; e++)
                    t && t(this._displayables[e]);
                for (e = 0; e < this._temporaryDisplayables.length; e++)
                    t && t(this._temporaryDisplayables[e])
            }
            ,
            e.prototype.update = function() {
                this.updateTransform();
                for (var t = this._cursor; t < this._displayables.length; t++) {
                    var e = this._displayables[t];
                    e.parent = this,
                    e.update(),
                    e.parent = null
                }
                for (t = 0; t < this._temporaryDisplayables.length; t++) {
                    e = this._temporaryDisplayables[t];
                    e.parent = this,
                    e.update(),
                    e.parent = null
                }
            }
            ,
            e.prototype.getBoundingRect = function() {
                if (!this._rect) {
                    for (var t = new a["a"](1 / 0,1 / 0,-1 / 0,-1 / 0), e = 0; e < this._displayables.length; e++) {
                        var r = this._displayables[e]
                          , n = r.getBoundingRect().clone();
                        r.needLocalTransform() && n.applyTransform(r.getLocalTransform(o)),
                        t.union(n)
                    }
                    this._rect = t
                }
                return this._rect
            }
            ,
            e.prototype.contain = function(t, e) {
                var r = this.transformCoordToLocal(t, e)
                  , n = this.getBoundingRect();
                if (n.contain(r[0], r[1]))
                    for (var i = 0; i < this._displayables.length; i++) {
                        var a = this._displayables[i];
                        if (a.contain(t, e))
                            return !0
                    }
                return !1
            }
            ,
            e
        }(i["c"]);
        e["a"] = s
    },
    "401b": function(t, e, r) {
        "use strict";
        function n(t, e) {
            return null == t && (t = 0),
            null == e && (e = 0),
            [t, e]
        }
        function i(t, e) {
            return t[0] = e[0],
            t[1] = e[1],
            t
        }
        function a(t) {
            return [t[0], t[1]]
        }
        function o(t, e, r) {
            return t[0] = e,
            t[1] = r,
            t
        }
        function s(t, e, r) {
            return t[0] = e[0] + r[0],
            t[1] = e[1] + r[1],
            t
        }
        function u(t, e, r, n) {
            return t[0] = e[0] + r[0] * n,
            t[1] = e[1] + r[1] * n,
            t
        }
        function h(t, e, r) {
            return t[0] = e[0] - r[0],
            t[1] = e[1] - r[1],
            t
        }
        function l(t) {
            return Math.sqrt(f(t))
        }
        r.r(e),
        r.d(e, "create", (function() {
            return n
        }
        )),
        r.d(e, "copy", (function() {
            return i
        }
        )),
        r.d(e, "clone", (function() {
            return a
        }
        )),
        r.d(e, "set", (function() {
            return o
        }
        )),
        r.d(e, "add", (function() {
            return s
        }
        )),
        r.d(e, "scaleAndAdd", (function() {
            return u
        }
        )),
        r.d(e, "sub", (function() {
            return h
        }
        )),
        r.d(e, "len", (function() {
            return l
        }
        )),
        r.d(e, "length", (function() {
            return c
        }
        )),
        r.d(e, "lenSquare", (function() {
            return f
        }
        )),
        r.d(e, "lengthSquare", (function() {
            return p
        }
        )),
        r.d(e, "mul", (function() {
            return d
        }
        )),
        r.d(e, "div", (function() {
            return v
        }
        )),
        r.d(e, "dot", (function() {
            return y
        }
        )),
        r.d(e, "scale", (function() {
            return g
        }
        )),
        r.d(e, "normalize", (function() {
            return _
        }
        )),
        r.d(e, "distance", (function() {
            return b
        }
        )),
        r.d(e, "dist", (function() {
            return m
        }
        )),
        r.d(e, "distanceSquare", (function() {
            return x
        }
        )),
        r.d(e, "distSquare", (function() {
            return w
        }
        )),
        r.d(e, "negate", (function() {
            return O
        }
        )),
        r.d(e, "lerp", (function() {
            return k
        }
        )),
        r.d(e, "applyTransform", (function() {
            return j
        }
        )),
        r.d(e, "min", (function() {
            return S
        }
        )),
        r.d(e, "max", (function() {
            return T
        }
        ));
        var c = l;
        function f(t) {
            return t[0] * t[0] + t[1] * t[1]
        }
        var p = f;
        function d(t, e, r) {
            return t[0] = e[0] * r[0],
            t[1] = e[1] * r[1],
            t
        }
        function v(t, e, r) {
            return t[0] = e[0] / r[0],
            t[1] = e[1] / r[1],
            t
        }
        function y(t, e) {
            return t[0] * e[0] + t[1] * e[1]
        }
        function g(t, e, r) {
            return t[0] = e[0] * r,
            t[1] = e[1] * r,
            t
        }
        function _(t, e) {
            var r = l(e);
            return 0 === r ? (t[0] = 0,
            t[1] = 0) : (t[0] = e[0] / r,
            t[1] = e[1] / r),
            t
        }
        function b(t, e) {
            return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
        }
        var m = b;
        function x(t, e) {
            return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
        }
        var w = x;
        function O(t, e) {
            return t[0] = -e[0],
            t[1] = -e[1],
            t
        }
        function k(t, e, r, n) {
            return t[0] = e[0] + n * (r[0] - e[0]),
            t[1] = e[1] + n * (r[1] - e[1]),
            t
        }
        function j(t, e, r) {
            var n = e[0]
              , i = e[1];
            return t[0] = r[0] * n + r[2] * i + r[4],
            t[1] = r[1] * n + r[3] * i + r[5],
            t
        }
        function S(t, e, r) {
            return t[0] = Math.min(e[0], r[0]),
            t[1] = Math.min(e[1], r[1]),
            t
        }
        function T(t, e, r) {
            return t[0] = Math.max(e[0], r[0]),
            t[1] = Math.max(e[1], r[1]),
            t
        }
    },
    "41ef": function(t, e, r) {
        "use strict";
        r.r(e),
        r.d(e, "parse", (function() {
            return g
        }
        )),
        r.d(e, "lift", (function() {
            return m
        }
        )),
        r.d(e, "toHex", (function() {
            return x
        }
        )),
        r.d(e, "fastLerp", (function() {
            return w
        }
        )),
        r.d(e, "fastMapToColor", (function() {
            return O
        }
        )),
        r.d(e, "lerp", (function() {
            return k
        }
        )),
        r.d(e, "mapToColor", (function() {
            return j
        }
        )),
        r.d(e, "modifyHSL", (function() {
            return S
        }
        )),
        r.d(e, "modifyAlpha", (function() {
            return T
        }
        )),
        r.d(e, "stringify", (function() {
            return C
        }
        )),
        r.d(e, "lum", (function() {
            return P
        }
        )),
        r.d(e, "random", (function() {
            return M
        }
        ));
        var n = r("d51b")
          , i = {
            transparent: [0, 0, 0, 0],
            aliceblue: [240, 248, 255, 1],
            antiquewhite: [250, 235, 215, 1],
            aqua: [0, 255, 255, 1],
            aquamarine: [127, 255, 212, 1],
            azure: [240, 255, 255, 1],
            beige: [245, 245, 220, 1],
            bisque: [255, 228, 196, 1],
            black: [0, 0, 0, 1],
            blanchedalmond: [255, 235, 205, 1],
            blue: [0, 0, 255, 1],
            blueviolet: [138, 43, 226, 1],
            brown: [165, 42, 42, 1],
            burlywood: [222, 184, 135, 1],
            cadetblue: [95, 158, 160, 1],
            chartreuse: [127, 255, 0, 1],
            chocolate: [210, 105, 30, 1],
            coral: [255, 127, 80, 1],
            cornflowerblue: [100, 149, 237, 1],
            cornsilk: [255, 248, 220, 1],
            crimson: [220, 20, 60, 1],
            cyan: [0, 255, 255, 1],
            darkblue: [0, 0, 139, 1],
            darkcyan: [0, 139, 139, 1],
            darkgoldenrod: [184, 134, 11, 1],
            darkgray: [169, 169, 169, 1],
            darkgreen: [0, 100, 0, 1],
            darkgrey: [169, 169, 169, 1],
            darkkhaki: [189, 183, 107, 1],
            darkmagenta: [139, 0, 139, 1],
            darkolivegreen: [85, 107, 47, 1],
            darkorange: [255, 140, 0, 1],
            darkorchid: [153, 50, 204, 1],
            darkred: [139, 0, 0, 1],
            darksalmon: [233, 150, 122, 1],
            darkseagreen: [143, 188, 143, 1],
            darkslateblue: [72, 61, 139, 1],
            darkslategray: [47, 79, 79, 1],
            darkslategrey: [47, 79, 79, 1],
            darkturquoise: [0, 206, 209, 1],
            darkviolet: [148, 0, 211, 1],
            deeppink: [255, 20, 147, 1],
            deepskyblue: [0, 191, 255, 1],
            dimgray: [105, 105, 105, 1],
            dimgrey: [105, 105, 105, 1],
            dodgerblue: [30, 144, 255, 1],
            firebrick: [178, 34, 34, 1],
            floralwhite: [255, 250, 240, 1],
            forestgreen: [34, 139, 34, 1],
            fuchsia: [255, 0, 255, 1],
            gainsboro: [220, 220, 220, 1],
            ghostwhite: [248, 248, 255, 1],
            gold: [255, 215, 0, 1],
            goldenrod: [218, 165, 32, 1],
            gray: [128, 128, 128, 1],
            green: [0, 128, 0, 1],
            greenyellow: [173, 255, 47, 1],
            grey: [128, 128, 128, 1],
            honeydew: [240, 255, 240, 1],
            hotpink: [255, 105, 180, 1],
            indianred: [205, 92, 92, 1],
            indigo: [75, 0, 130, 1],
            ivory: [255, 255, 240, 1],
            khaki: [240, 230, 140, 1],
            lavender: [230, 230, 250, 1],
            lavenderblush: [255, 240, 245, 1],
            lawngreen: [124, 252, 0, 1],
            lemonchiffon: [255, 250, 205, 1],
            lightblue: [173, 216, 230, 1],
            lightcoral: [240, 128, 128, 1],
            lightcyan: [224, 255, 255, 1],
            lightgoldenrodyellow: [250, 250, 210, 1],
            lightgray: [211, 211, 211, 1],
            lightgreen: [144, 238, 144, 1],
            lightgrey: [211, 211, 211, 1],
            lightpink: [255, 182, 193, 1],
            lightsalmon: [255, 160, 122, 1],
            lightseagreen: [32, 178, 170, 1],
            lightskyblue: [135, 206, 250, 1],
            lightslategray: [119, 136, 153, 1],
            lightslategrey: [119, 136, 153, 1],
            lightsteelblue: [176, 196, 222, 1],
            lightyellow: [255, 255, 224, 1],
            lime: [0, 255, 0, 1],
            limegreen: [50, 205, 50, 1],
            linen: [250, 240, 230, 1],
            magenta: [255, 0, 255, 1],
            maroon: [128, 0, 0, 1],
            mediumaquamarine: [102, 205, 170, 1],
            mediumblue: [0, 0, 205, 1],
            mediumorchid: [186, 85, 211, 1],
            mediumpurple: [147, 112, 219, 1],
            mediumseagreen: [60, 179, 113, 1],
            mediumslateblue: [123, 104, 238, 1],
            mediumspringgreen: [0, 250, 154, 1],
            mediumturquoise: [72, 209, 204, 1],
            mediumvioletred: [199, 21, 133, 1],
            midnightblue: [25, 25, 112, 1],
            mintcream: [245, 255, 250, 1],
            mistyrose: [255, 228, 225, 1],
            moccasin: [255, 228, 181, 1],
            navajowhite: [255, 222, 173, 1],
            navy: [0, 0, 128, 1],
            oldlace: [253, 245, 230, 1],
            olive: [128, 128, 0, 1],
            olivedrab: [107, 142, 35, 1],
            orange: [255, 165, 0, 1],
            orangered: [255, 69, 0, 1],
            orchid: [218, 112, 214, 1],
            palegoldenrod: [238, 232, 170, 1],
            palegreen: [152, 251, 152, 1],
            paleturquoise: [175, 238, 238, 1],
            palevioletred: [219, 112, 147, 1],
            papayawhip: [255, 239, 213, 1],
            peachpuff: [255, 218, 185, 1],
            peru: [205, 133, 63, 1],
            pink: [255, 192, 203, 1],
            plum: [221, 160, 221, 1],
            powderblue: [176, 224, 230, 1],
            purple: [128, 0, 128, 1],
            red: [255, 0, 0, 1],
            rosybrown: [188, 143, 143, 1],
            royalblue: [65, 105, 225, 1],
            saddlebrown: [139, 69, 19, 1],
            salmon: [250, 128, 114, 1],
            sandybrown: [244, 164, 96, 1],
            seagreen: [46, 139, 87, 1],
            seashell: [255, 245, 238, 1],
            sienna: [160, 82, 45, 1],
            silver: [192, 192, 192, 1],
            skyblue: [135, 206, 235, 1],
            slateblue: [106, 90, 205, 1],
            slategray: [112, 128, 144, 1],
            slategrey: [112, 128, 144, 1],
            snow: [255, 250, 250, 1],
            springgreen: [0, 255, 127, 1],
            steelblue: [70, 130, 180, 1],
            tan: [210, 180, 140, 1],
            teal: [0, 128, 128, 1],
            thistle: [216, 191, 216, 1],
            tomato: [255, 99, 71, 1],
            turquoise: [64, 224, 208, 1],
            violet: [238, 130, 238, 1],
            wheat: [245, 222, 179, 1],
            white: [255, 255, 255, 1],
            whitesmoke: [245, 245, 245, 1],
            yellow: [255, 255, 0, 1],
            yellowgreen: [154, 205, 50, 1]
        };
        function a(t) {
            return t = Math.round(t),
            t < 0 ? 0 : t > 255 ? 255 : t
        }
        function o(t) {
            return t = Math.round(t),
            t < 0 ? 0 : t > 360 ? 360 : t
        }
        function s(t) {
            return t < 0 ? 0 : t > 1 ? 1 : t
        }
        function u(t) {
            var e = t;
            return e.length && "%" === e.charAt(e.length - 1) ? a(parseFloat(e) / 100 * 255) : a(parseInt(e, 10))
        }
        function h(t) {
            var e = t;
            return e.length && "%" === e.charAt(e.length - 1) ? s(parseFloat(e) / 100) : s(parseFloat(e))
        }
        function l(t, e, r) {
            return r < 0 ? r += 1 : r > 1 && (r -= 1),
            6 * r < 1 ? t + (e - t) * r * 6 : 2 * r < 1 ? e : 3 * r < 2 ? t + (e - t) * (2 / 3 - r) * 6 : t
        }
        function c(t, e, r) {
            return t + (e - t) * r
        }
        function f(t, e, r, n, i) {
            return t[0] = e,
            t[1] = r,
            t[2] = n,
            t[3] = i,
            t
        }
        function p(t, e) {
            return t[0] = e[0],
            t[1] = e[1],
            t[2] = e[2],
            t[3] = e[3],
            t
        }
        var d = new n["a"](20)
          , v = null;
        function y(t, e) {
            v && p(v, e),
            v = d.put(t, v || e.slice())
        }
        function g(t, e) {
            if (t) {
                e = e || [];
                var r = d.get(t);
                if (r)
                    return p(e, r);
                t += "";
                var n = t.replace(/ /g, "").toLowerCase();
                if (n in i)
                    return p(e, i[n]),
                    y(t, e),
                    e;
                var a = n.length;
                if ("#" !== n.charAt(0)) {
                    var o = n.indexOf("(")
                      , s = n.indexOf(")");
                    if (-1 !== o && s + 1 === a) {
                        var l = n.substr(0, o)
                          , c = n.substr(o + 1, s - (o + 1)).split(",")
                          , v = 1;
                        switch (l) {
                        case "rgba":
                            if (4 !== c.length)
                                return 3 === c.length ? f(e, +c[0], +c[1], +c[2], 1) : f(e, 0, 0, 0, 1);
                            v = h(c.pop());
                        case "rgb":
                            return 3 !== c.length ? void f(e, 0, 0, 0, 1) : (f(e, u(c[0]), u(c[1]), u(c[2]), v),
                            y(t, e),
                            e);
                        case "hsla":
                            return 4 !== c.length ? void f(e, 0, 0, 0, 1) : (c[3] = h(c[3]),
                            _(c, e),
                            y(t, e),
                            e);
                        case "hsl":
                            return 3 !== c.length ? void f(e, 0, 0, 0, 1) : (_(c, e),
                            y(t, e),
                            e);
                        default:
                            return
                        }
                    }
                    f(e, 0, 0, 0, 1)
                } else {
                    if (4 === a || 5 === a) {
                        var g = parseInt(n.slice(1, 4), 16);
                        return g >= 0 && g <= 4095 ? (f(e, (3840 & g) >> 4 | (3840 & g) >> 8, 240 & g | (240 & g) >> 4, 15 & g | (15 & g) << 4, 5 === a ? parseInt(n.slice(4), 16) / 15 : 1),
                        y(t, e),
                        e) : void f(e, 0, 0, 0, 1)
                    }
                    if (7 === a || 9 === a) {
                        g = parseInt(n.slice(1, 7), 16);
                        return g >= 0 && g <= 16777215 ? (f(e, (16711680 & g) >> 16, (65280 & g) >> 8, 255 & g, 9 === a ? parseInt(n.slice(7), 16) / 255 : 1),
                        y(t, e),
                        e) : void f(e, 0, 0, 0, 1)
                    }
                }
            }
        }
        function _(t, e) {
            var r = (parseFloat(t[0]) % 360 + 360) % 360 / 360
              , n = h(t[1])
              , i = h(t[2])
              , o = i <= .5 ? i * (n + 1) : i + n - i * n
              , s = 2 * i - o;
            return e = e || [],
            f(e, a(255 * l(s, o, r + 1 / 3)), a(255 * l(s, o, r)), a(255 * l(s, o, r - 1 / 3)), 1),
            4 === t.length && (e[3] = t[3]),
            e
        }
        function b(t) {
            if (t) {
                var e, r, n = t[0] / 255, i = t[1] / 255, a = t[2] / 255, o = Math.min(n, i, a), s = Math.max(n, i, a), u = s - o, h = (s + o) / 2;
                if (0 === u)
                    e = 0,
                    r = 0;
                else {
                    r = h < .5 ? u / (s + o) : u / (2 - s - o);
                    var l = ((s - n) / 6 + u / 2) / u
                      , c = ((s - i) / 6 + u / 2) / u
                      , f = ((s - a) / 6 + u / 2) / u;
                    n === s ? e = f - c : i === s ? e = 1 / 3 + l - f : a === s && (e = 2 / 3 + c - l),
                    e < 0 && (e += 1),
                    e > 1 && (e -= 1)
                }
                var p = [360 * e, r, h];
                return null != t[3] && p.push(t[3]),
                p
            }
        }
        function m(t, e) {
            var r = g(t);
            if (r) {
                for (var n = 0; n < 3; n++)
                    r[n] = e < 0 ? r[n] * (1 - e) | 0 : (255 - r[n]) * e + r[n] | 0,
                    r[n] > 255 ? r[n] = 255 : r[n] < 0 && (r[n] = 0);
                return C(r, 4 === r.length ? "rgba" : "rgb")
            }
        }
        function x(t) {
            var e = g(t);
            if (e)
                return ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1)
        }
        function w(t, e, r) {
            if (e && e.length && t >= 0 && t <= 1) {
                r = r || [];
                var n = t * (e.length - 1)
                  , i = Math.floor(n)
                  , o = Math.ceil(n)
                  , u = e[i]
                  , h = e[o]
                  , l = n - i;
                return r[0] = a(c(u[0], h[0], l)),
                r[1] = a(c(u[1], h[1], l)),
                r[2] = a(c(u[2], h[2], l)),
                r[3] = s(c(u[3], h[3], l)),
                r
            }
        }
        var O = w;
        function k(t, e, r) {
            if (e && e.length && t >= 0 && t <= 1) {
                var n = t * (e.length - 1)
                  , i = Math.floor(n)
                  , o = Math.ceil(n)
                  , u = g(e[i])
                  , h = g(e[o])
                  , l = n - i
                  , f = C([a(c(u[0], h[0], l)), a(c(u[1], h[1], l)), a(c(u[2], h[2], l)), s(c(u[3], h[3], l))], "rgba");
                return r ? {
                    color: f,
                    leftIndex: i,
                    rightIndex: o,
                    value: n
                } : f
            }
        }
        var j = k;
        function S(t, e, r, n) {
            var i = g(t);
            if (t)
                return i = b(i),
                null != e && (i[0] = o(e)),
                null != r && (i[1] = h(r)),
                null != n && (i[2] = h(n)),
                C(_(i), "rgba")
        }
        function T(t, e) {
            var r = g(t);
            if (r && null != e)
                return r[3] = s(e),
                C(r, "rgba")
        }
        function C(t, e) {
            if (t && t.length) {
                var r = t[0] + "," + t[1] + "," + t[2];
                return "rgba" !== e && "hsva" !== e && "hsla" !== e || (r += "," + t[3]),
                e + "(" + r + ")"
            }
        }
        function P(t, e) {
            var r = g(t);
            return r ? (.299 * r[0] + .587 * r[1] + .114 * r[2]) * r[3] / 255 + (1 - r[3]) * e : 0
        }
        function M() {
            return C([Math.round(255 * Math.random()), Math.round(255 * Math.random()), Math.round(255 * Math.random())], "rgb")
        }
    },
    "42e5": function(t, e, r) {
        "use strict";
        var n = function() {
            function t(t) {
                this.colorStops = t || []
            }
            return t.prototype.addColorStop = function(t, e) {
                this.colorStops.push({
                    offset: t,
                    color: e
                })
            }
            ,
            t
        }();
        e["a"] = n
    },
    4573: function(t, e, r) {
        "use strict";
        var n = r("21a10")
          , i = r("cbe5")
          , a = function() {
            function t() {
                this.cx = 0,
                this.cy = 0,
                this.r = 0,
                this.r0 = 0
            }
            return t
        }()
          , o = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return Object(n["a"])(e, t),
            e.prototype.getDefaultShape = function() {
                return new a
            }
            ,
            e.prototype.buildPath = function(t, e) {
                var r = e.cx
                  , n = e.cy
                  , i = 2 * Math.PI;
                t.moveTo(r + e.r, n),
                t.arc(r, n, e.r, 0, i, !1),
                t.moveTo(r + e.r0, n),
                t.arc(r, n, e.r0, 0, i, !0)
            }
            ,
            e
        }(i["b"]);
        o.prototype.type = "ring",
        e["a"] = o
    },
    4755: function(t, e, r) {
        "use strict";
        var n = Math.round(9 * Math.random())
          , i = "function" === typeof Object.defineProperty
          , a = function() {
            function t() {
                this._id = "__ec_inner_" + n++
            }
            return t.prototype.get = function(t) {
                return this._guard(t)[this._id]
            }
            ,
            t.prototype.set = function(t, e) {
                var r = this._guard(t);
                return i ? Object.defineProperty(r, this._id, {
                    value: e,
                    enumerable: !1,
                    configurable: !0
                }) : r[this._id] = e,
                this
            }
            ,
            t.prototype["delete"] = function(t) {
                return !!this.has(t) && (delete this._guard(t)[this._id],
                !0)
            }
            ,
            t.prototype.has = function(t) {
                return !!this._guard(t)[this._id]
            }
            ,
            t.prototype._guard = function(t) {
                if (t !== Object(t))
                    throw TypeError("Value of WeakMap is not a non-null object.");
                return t
            }
            ,
            t
        }();
        e["a"] = a
    },
    "48a9": function(t, e, r) {
        "use strict";
        var n = r("21a10")
          , i = r("42e5")
          , a = function(t) {
            function e(e, r, n, i, a, o) {
                var s = t.call(this, a) || this;
                return s.x = null == e ? 0 : e,
                s.y = null == r ? 0 : r,
                s.x2 = null == n ? 1 : n,
                s.y2 = null == i ? 0 : i,
                s.type = "linear",
                s.global = o || !1,
                s
            }
            return Object(n["a"])(e, t),
            e
        }(i["a"]);
        e["a"] = a
    },
    "4a3f": function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return v
        }
        )),
        r.d(e, "b", (function() {
            return y
        }
        )),
        r.d(e, "f", (function() {
            return g
        }
        )),
        r.d(e, "c", (function() {
            return _
        }
        )),
        r.d(e, "g", (function() {
            return b
        }
        )),
        r.d(e, "e", (function() {
            return m
        }
        )),
        r.d(e, "d", (function() {
            return x
        }
        )),
        r.d(e, "h", (function() {
            return w
        }
        )),
        r.d(e, "i", (function() {
            return O
        }
        )),
        r.d(e, "m", (function() {
            return k
        }
        )),
        r.d(e, "j", (function() {
            return j
        }
        )),
        r.d(e, "n", (function() {
            return S
        }
        )),
        r.d(e, "l", (function() {
            return T
        }
        )),
        r.d(e, "k", (function() {
            return C
        }
        ));
        var n = r("401b")
          , i = Math.pow
          , a = Math.sqrt
          , o = 1e-8
          , s = 1e-4
          , u = a(3)
          , h = 1 / 3
          , l = Object(n["create"])()
          , c = Object(n["create"])()
          , f = Object(n["create"])();
        function p(t) {
            return t > -o && t < o
        }
        function d(t) {
            return t > o || t < -o
        }
        function v(t, e, r, n, i) {
            var a = 1 - i;
            return a * a * (a * t + 3 * i * e) + i * i * (i * n + 3 * a * r)
        }
        function y(t, e, r, n, i) {
            var a = 1 - i;
            return 3 * (((e - t) * a + 2 * (r - e) * i) * a + (n - r) * i * i)
        }
        function g(t, e, r, n, o, s) {
            var l = n + 3 * (e - r) - t
              , c = 3 * (r - 2 * e + t)
              , f = 3 * (e - t)
              , d = t - o
              , v = c * c - 3 * l * f
              , y = c * f - 9 * l * d
              , g = f * f - 3 * c * d
              , _ = 0;
            if (p(v) && p(y))
                if (p(c))
                    s[0] = 0;
                else {
                    var b = -f / c;
                    b >= 0 && b <= 1 && (s[_++] = b)
                }
            else {
                var m = y * y - 4 * v * g;
                if (p(m)) {
                    var x = y / v
                      , w = (b = -c / l + x,
                    -x / 2);
                    b >= 0 && b <= 1 && (s[_++] = b),
                    w >= 0 && w <= 1 && (s[_++] = w)
                } else if (m > 0) {
                    var O = a(m)
                      , k = v * c + 1.5 * l * (-y + O)
                      , j = v * c + 1.5 * l * (-y - O);
                    k = k < 0 ? -i(-k, h) : i(k, h),
                    j = j < 0 ? -i(-j, h) : i(j, h);
                    b = (-c - (k + j)) / (3 * l);
                    b >= 0 && b <= 1 && (s[_++] = b)
                } else {
                    var S = (2 * v * c - 3 * l * y) / (2 * a(v * v * v))
                      , T = Math.acos(S) / 3
                      , C = a(v)
                      , P = Math.cos(T)
                      , M = (b = (-c - 2 * C * P) / (3 * l),
                    w = (-c + C * (P + u * Math.sin(T))) / (3 * l),
                    (-c + C * (P - u * Math.sin(T))) / (3 * l));
                    b >= 0 && b <= 1 && (s[_++] = b),
                    w >= 0 && w <= 1 && (s[_++] = w),
                    M >= 0 && M <= 1 && (s[_++] = M)
                }
            }
            return _
        }
        function _(t, e, r, n, i) {
            var o = 6 * r - 12 * e + 6 * t
              , s = 9 * e + 3 * n - 3 * t - 9 * r
              , u = 3 * e - 3 * t
              , h = 0;
            if (p(s)) {
                if (d(o)) {
                    var l = -u / o;
                    l >= 0 && l <= 1 && (i[h++] = l)
                }
            } else {
                var c = o * o - 4 * s * u;
                if (p(c))
                    i[0] = -o / (2 * s);
                else if (c > 0) {
                    var f = a(c)
                      , v = (l = (-o + f) / (2 * s),
                    (-o - f) / (2 * s));
                    l >= 0 && l <= 1 && (i[h++] = l),
                    v >= 0 && v <= 1 && (i[h++] = v)
                }
            }
            return h
        }
        function b(t, e, r, n, i, a) {
            var o = (e - t) * i + t
              , s = (r - e) * i + e
              , u = (n - r) * i + r
              , h = (s - o) * i + o
              , l = (u - s) * i + s
              , c = (l - h) * i + h;
            a[0] = t,
            a[1] = o,
            a[2] = h,
            a[3] = c,
            a[4] = c,
            a[5] = l,
            a[6] = u,
            a[7] = n
        }
        function m(t, e, r, i, o, u, h, p, d, y, g) {
            var _, b, m, x, w, O = .005, k = 1 / 0;
            l[0] = d,
            l[1] = y;
            for (var j = 0; j < 1; j += .05)
                c[0] = v(t, r, o, h, j),
                c[1] = v(e, i, u, p, j),
                x = Object(n["distSquare"])(l, c),
                x < k && (_ = j,
                k = x);
            k = 1 / 0;
            for (var S = 0; S < 32; S++) {
                if (O < s)
                    break;
                b = _ - O,
                m = _ + O,
                c[0] = v(t, r, o, h, b),
                c[1] = v(e, i, u, p, b),
                x = Object(n["distSquare"])(c, l),
                b >= 0 && x < k ? (_ = b,
                k = x) : (f[0] = v(t, r, o, h, m),
                f[1] = v(e, i, u, p, m),
                w = Object(n["distSquare"])(f, l),
                m <= 1 && w < k ? (_ = m,
                k = w) : O *= .5)
            }
            return g && (g[0] = v(t, r, o, h, _),
            g[1] = v(e, i, u, p, _)),
            a(k)
        }
        function x(t, e, r, n, i, a, o, s, u) {
            for (var h = t, l = e, c = 0, f = 1 / u, p = 1; p <= u; p++) {
                var d = p * f
                  , y = v(t, r, i, o, d)
                  , g = v(e, n, a, s, d)
                  , _ = y - h
                  , b = g - l;
                c += Math.sqrt(_ * _ + b * b),
                h = y,
                l = g
            }
            return c
        }
        function w(t, e, r, n) {
            var i = 1 - n;
            return i * (i * t + 2 * n * e) + n * n * r
        }
        function O(t, e, r, n) {
            return 2 * ((1 - n) * (e - t) + n * (r - e))
        }
        function k(t, e, r, n, i) {
            var o = t - 2 * e + r
              , s = 2 * (e - t)
              , u = t - n
              , h = 0;
            if (p(o)) {
                if (d(s)) {
                    var l = -u / s;
                    l >= 0 && l <= 1 && (i[h++] = l)
                }
            } else {
                var c = s * s - 4 * o * u;
                if (p(c)) {
                    l = -s / (2 * o);
                    l >= 0 && l <= 1 && (i[h++] = l)
                } else if (c > 0) {
                    var f = a(c)
                      , v = (l = (-s + f) / (2 * o),
                    (-s - f) / (2 * o));
                    l >= 0 && l <= 1 && (i[h++] = l),
                    v >= 0 && v <= 1 && (i[h++] = v)
                }
            }
            return h
        }
        function j(t, e, r) {
            var n = t + r - 2 * e;
            return 0 === n ? .5 : (t - e) / n
        }
        function S(t, e, r, n, i) {
            var a = (e - t) * n + t
              , o = (r - e) * n + e
              , s = (o - a) * n + a;
            i[0] = t,
            i[1] = a,
            i[2] = s,
            i[3] = s,
            i[4] = o,
            i[5] = r
        }
        function T(t, e, r, i, o, u, h, p, d) {
            var v, y = .005, g = 1 / 0;
            l[0] = h,
            l[1] = p;
            for (var _ = 0; _ < 1; _ += .05) {
                c[0] = w(t, r, o, _),
                c[1] = w(e, i, u, _);
                var b = Object(n["distSquare"])(l, c);
                b < g && (v = _,
                g = b)
            }
            g = 1 / 0;
            for (var m = 0; m < 32; m++) {
                if (y < s)
                    break;
                var x = v - y
                  , O = v + y;
                c[0] = w(t, r, o, x),
                c[1] = w(e, i, u, x);
                b = Object(n["distSquare"])(c, l);
                if (x >= 0 && b < g)
                    v = x,
                    g = b;
                else {
                    f[0] = w(t, r, o, O),
                    f[1] = w(e, i, u, O);
                    var k = Object(n["distSquare"])(f, l);
                    O <= 1 && k < g ? (v = O,
                    g = k) : y *= .5
                }
            }
            return d && (d[0] = w(t, r, o, v),
            d[1] = w(e, i, u, v)),
            a(g)
        }
        function C(t, e, r, n, i, a, o) {
            for (var s = t, u = e, h = 0, l = 1 / o, c = 1; c <= o; c++) {
                var f = c * l
                  , p = w(t, r, i, f)
                  , d = w(e, n, a, f)
                  , v = p - s
                  , y = d - u;
                h += Math.sqrt(v * v + y * y),
                s = p,
                u = d
            }
            return h
        }
    },
    "4a80": function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return i
        }
        ));
        var n = r("6d8b");
        function i(t) {
            if (Object(n["isString"])(t)) {
                var e = new DOMParser;
                t = e.parseFromString(t, "text/xml")
            }
            var r = t;
            9 === r.nodeType && (r = r.firstChild);
            while ("svg" !== r.nodeName.toLowerCase() || 1 !== r.nodeType)
                r = r.nextSibling;
            return r
        }
    },
    "4aa2": function(t, e, r) {
        "use strict";
        var n = r("21a10")
          , i = r("cbe5")
          , a = r("6d8b")
          , o = Math.PI
          , s = 2 * o
          , u = Math.sin
          , h = Math.cos
          , l = Math.acos
          , c = Math.atan2
          , f = Math.abs
          , p = Math.sqrt
          , d = Math.max
          , v = Math.min
          , y = 1e-4;
        function g(t, e, r, n, i, a, o, s) {
            var u = r - t
              , h = n - e
              , l = o - i
              , c = s - a
              , f = c * u - l * h;
            if (!(f * f < y))
                return f = (l * (e - a) - c * (t - i)) / f,
                [t + f * u, e + f * h]
        }
        function _(t, e, r, n, i, a, o) {
            var s = t - r
              , u = e - n
              , h = (o ? a : -a) / p(s * s + u * u)
              , l = h * u
              , c = -h * s
              , f = t + l
              , v = e + c
              , y = r + l
              , g = n + c
              , _ = (f + y) / 2
              , b = (v + g) / 2
              , m = y - f
              , x = g - v
              , w = m * m + x * x
              , O = i - a
              , k = f * g - y * v
              , j = (x < 0 ? -1 : 1) * p(d(0, O * O * w - k * k))
              , S = (k * x - m * j) / w
              , T = (-k * m - x * j) / w
              , C = (k * x + m * j) / w
              , P = (-k * m + x * j) / w
              , M = S - _
              , A = T - b
              , L = C - _
              , D = P - b;
            return M * M + A * A > L * L + D * D && (S = C,
            T = P),
            {
                cx: S,
                cy: T,
                x0: -l,
                y0: -c,
                x1: S * (i / O - 1),
                y1: T * (i / O - 1)
            }
        }
        function b(t) {
            var e;
            if (Object(a["isArray"])(t)) {
                var r = t.length;
                if (!r)
                    return t;
                e = 1 === r ? [t[0], t[0], 0, 0] : 2 === r ? [t[0], t[0], t[1], t[1]] : 3 === r ? t.concat(t[2]) : t
            } else
                e = [t, t, t, t];
            return e
        }
        function m(t, e) {
            var r, n = d(e.r, 0), i = d(e.r0 || 0, 0), a = n > 0, m = i > 0;
            if (a || m) {
                if (a || (n = i,
                i = 0),
                i > n) {
                    var x = n;
                    n = i,
                    i = x
                }
                var w = e.startAngle
                  , O = e.endAngle;
                if (!isNaN(w) && !isNaN(O)) {
                    var k = e.cx
                      , j = e.cy
                      , S = !!e.clockwise
                      , T = f(O - w)
                      , C = T > s && T % s;
                    if (C > y && (T = C),
                    n > y)
                        if (T > s - y)
                            t.moveTo(k + n * h(w), j + n * u(w)),
                            t.arc(k, j, n, w, O, !S),
                            i > y && (t.moveTo(k + i * h(O), j + i * u(O)),
                            t.arc(k, j, i, O, w, S));
                        else {
                            var P = void 0
                              , M = void 0
                              , A = void 0
                              , L = void 0
                              , D = void 0
                              , z = void 0
                              , I = void 0
                              , R = void 0
                              , F = void 0
                              , B = void 0
                              , N = void 0
                              , H = void 0
                              , E = void 0
                              , W = void 0
                              , q = void 0
                              , X = void 0
                              , Y = n * h(w)
                              , V = n * u(w)
                              , U = i * h(O)
                              , G = i * u(O)
                              , Z = T > y;
                            if (Z) {
                                var K = e.cornerRadius;
                                K && (r = b(K),
                                P = r[0],
                                M = r[1],
                                A = r[2],
                                L = r[3]);
                                var Q = f(n - i) / 2;
                                if (D = v(Q, A),
                                z = v(Q, L),
                                I = v(Q, P),
                                R = v(Q, M),
                                N = F = d(D, z),
                                H = B = d(I, R),
                                (F > y || B > y) && (E = n * h(O),
                                W = n * u(O),
                                q = i * h(w),
                                X = i * u(w),
                                T < o)) {
                                    var $ = g(Y, V, q, X, E, W, U, G);
                                    if ($) {
                                        var J = Y - $[0]
                                          , tt = V - $[1]
                                          , et = E - $[0]
                                          , rt = W - $[1]
                                          , nt = 1 / u(l((J * et + tt * rt) / (p(J * J + tt * tt) * p(et * et + rt * rt))) / 2)
                                          , it = p($[0] * $[0] + $[1] * $[1]);
                                        N = v(F, (n - it) / (nt + 1)),
                                        H = v(B, (i - it) / (nt - 1))
                                    }
                                }
                            }
                            if (Z)
                                if (N > y) {
                                    var at = v(A, N)
                                      , ot = v(L, N)
                                      , st = _(q, X, Y, V, n, at, S)
                                      , ut = _(E, W, U, G, n, ot, S);
                                    t.moveTo(k + st.cx + st.x0, j + st.cy + st.y0),
                                    N < F && at === ot ? t.arc(k + st.cx, j + st.cy, N, c(st.y0, st.x0), c(ut.y0, ut.x0), !S) : (at > 0 && t.arc(k + st.cx, j + st.cy, at, c(st.y0, st.x0), c(st.y1, st.x1), !S),
                                    t.arc(k, j, n, c(st.cy + st.y1, st.cx + st.x1), c(ut.cy + ut.y1, ut.cx + ut.x1), !S),
                                    ot > 0 && t.arc(k + ut.cx, j + ut.cy, ot, c(ut.y1, ut.x1), c(ut.y0, ut.x0), !S))
                                } else
                                    t.moveTo(k + Y, j + V),
                                    t.arc(k, j, n, w, O, !S);
                            else
                                t.moveTo(k + Y, j + V);
                            if (i > y && Z)
                                if (H > y) {
                                    at = v(P, H),
                                    ot = v(M, H),
                                    st = _(U, G, E, W, i, -ot, S),
                                    ut = _(Y, V, q, X, i, -at, S);
                                    t.lineTo(k + st.cx + st.x0, j + st.cy + st.y0),
                                    H < B && at === ot ? t.arc(k + st.cx, j + st.cy, H, c(st.y0, st.x0), c(ut.y0, ut.x0), !S) : (ot > 0 && t.arc(k + st.cx, j + st.cy, ot, c(st.y0, st.x0), c(st.y1, st.x1), !S),
                                    t.arc(k, j, i, c(st.cy + st.y1, st.cx + st.x1), c(ut.cy + ut.y1, ut.cx + ut.x1), S),
                                    at > 0 && t.arc(k + ut.cx, j + ut.cy, at, c(ut.y1, ut.x1), c(ut.y0, ut.x0), !S))
                                } else
                                    t.lineTo(k + U, j + G),
                                    t.arc(k, j, i, O, w, S);
                            else
                                t.lineTo(k + U, j + G)
                        }
                    else
                        t.moveTo(k, j);
                    t.closePath()
                }
            }
        }
        var x = function() {
            function t() {
                this.cx = 0,
                this.cy = 0,
                this.r0 = 0,
                this.r = 0,
                this.startAngle = 0,
                this.endAngle = 2 * Math.PI,
                this.clockwise = !0,
                this.cornerRadius = 0
            }
            return t
        }()
          , w = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return Object(n["a"])(e, t),
            e.prototype.getDefaultShape = function() {
                return new x
            }
            ,
            e.prototype.buildPath = function(t, e) {
                m(t, e)
            }
            ,
            e.prototype.isZeroArea = function() {
                return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0
            }
            ,
            e
        }(i["b"]);
        w.prototype.type = "sector";
        e["a"] = w
    },
    "4bc4": function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return n
        }
        )),
        r.d(e, "c", (function() {
            return i
        }
        )),
        r.d(e, "b", (function() {
            return a
        }
        ));
        var n = 1
          , i = 2
          , a = 4
    },
    "4fac": function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return a
        }
        ));
        var n = r("401b");
        function i(t, e, r, i) {
            var a, o, s, u, h = [], l = [], c = [], f = [];
            if (i) {
                s = [1 / 0, 1 / 0],
                u = [-1 / 0, -1 / 0];
                for (var p = 0, d = t.length; p < d; p++)
                    Object(n["min"])(s, s, t[p]),
                    Object(n["max"])(u, u, t[p]);
                Object(n["min"])(s, s, i[0]),
                Object(n["max"])(u, u, i[1])
            }
            for (p = 0,
            d = t.length; p < d; p++) {
                var v = t[p];
                if (r)
                    a = t[p ? p - 1 : d - 1],
                    o = t[(p + 1) % d];
                else {
                    if (0 === p || p === d - 1) {
                        h.push(Object(n["clone"])(t[p]));
                        continue
                    }
                    a = t[p - 1],
                    o = t[p + 1]
                }
                Object(n["sub"])(l, o, a),
                Object(n["scale"])(l, l, e);
                var y = Object(n["distance"])(v, a)
                  , g = Object(n["distance"])(v, o)
                  , _ = y + g;
                0 !== _ && (y /= _,
                g /= _),
                Object(n["scale"])(c, l, -y),
                Object(n["scale"])(f, l, g);
                var b = Object(n["add"])([], v, c)
                  , m = Object(n["add"])([], v, f);
                i && (Object(n["max"])(b, b, s),
                Object(n["min"])(b, b, u),
                Object(n["max"])(m, m, s),
                Object(n["min"])(m, m, u)),
                h.push(b),
                h.push(m)
            }
            return r && h.push(h.shift()),
            h
        }
        function a(t, e, r) {
            var n = e.smooth
              , a = e.points;
            if (a && a.length >= 2) {
                if (n) {
                    var o = i(a, n, r, e.smoothConstraint);
                    t.moveTo(a[0][0], a[0][1]);
                    for (var s = a.length, u = 0; u < (r ? s : s - 1); u++) {
                        var h = o[2 * u]
                          , l = o[2 * u + 1]
                          , c = a[(u + 1) % s];
                        t.bezierCurveTo(h[0], h[1], l[0], l[1], c[0], c[1])
                    }
                } else {
                    t.moveTo(a[0][0], a[0][1]);
                    u = 1;
                    for (var f = a.length; u < f; u++)
                        t.lineTo(a[u][0], a[u][1])
                }
                r && t.closePath()
            }
        }
    },
    5210: function(t, e, r) {
        "use strict";
        r.d(e, "c", (function() {
            return m
        }
        )),
        r.d(e, "b", (function() {
            return N
        }
        )),
        r.d(e, "a", (function() {
            return H
        }
        ));
        var n = r("19eb")
          , i = r("20c8")
          , a = r("5e76")
          , o = r("3437")
          , s = r("cbe5")
          , u = r("0da8")
          , h = r("dd4f")
          , l = r("6d8b")
          , c = r("8d1d")
          , f = r("4bc4")
          , p = r("726e")
          , d = new i["a"](!0);
        function v(t) {
            var e = t.stroke;
            return !(null == e || "none" === e || !(t.lineWidth > 0))
        }
        function y(t) {
            return "string" === typeof t && "none" !== t
        }
        function g(t) {
            var e = t.fill;
            return null != e && "none" !== e
        }
        function _(t, e) {
            if (null != e.fillOpacity && 1 !== e.fillOpacity) {
                var r = t.globalAlpha;
                t.globalAlpha = e.fillOpacity * e.opacity,
                t.fill(),
                t.globalAlpha = r
            } else
                t.fill()
        }
        function b(t, e) {
            if (null != e.strokeOpacity && 1 !== e.strokeOpacity) {
                var r = t.globalAlpha;
                t.globalAlpha = e.strokeOpacity * e.opacity,
                t.stroke(),
                t.globalAlpha = r
            } else
                t.stroke()
        }
        function m(t, e, r) {
            var n = Object(a["a"])(e.image, e.__image, r);
            if (Object(a["c"])(n)) {
                var i = t.createPattern(n, e.repeat || "repeat");
                if ("function" === typeof DOMMatrix && i && i.setTransform) {
                    var o = new DOMMatrix;
                    o.translateSelf(e.x || 0, e.y || 0),
                    o.rotateSelf(0, 0, (e.rotation || 0) * l["RADIAN_TO_DEGREE"]),
                    o.scaleSelf(e.scaleX || 1, e.scaleY || 1),
                    i.setTransform(o)
                }
                return i
            }
        }
        function x(t, e, r, n) {
            var i, a = v(r), s = g(r), u = r.strokePercent, h = u < 1, l = !e.path;
            e.silent && !h || !l || e.createPathProxy();
            var p = e.path || d
              , y = e.__dirty;
            if (!n) {
                var x = r.fill
                  , w = r.stroke
                  , O = s && !!x.colorStops
                  , k = a && !!w.colorStops
                  , j = s && !!x.image
                  , S = a && !!w.image
                  , T = void 0
                  , C = void 0
                  , P = void 0
                  , M = void 0
                  , A = void 0;
                (O || k) && (A = e.getBoundingRect()),
                O && (T = y ? Object(o["a"])(t, x, A) : e.__canvasFillGradient,
                e.__canvasFillGradient = T),
                k && (C = y ? Object(o["a"])(t, w, A) : e.__canvasStrokeGradient,
                e.__canvasStrokeGradient = C),
                j && (P = y || !e.__canvasFillPattern ? m(t, x, e) : e.__canvasFillPattern,
                e.__canvasFillPattern = P),
                S && (M = y || !e.__canvasStrokePattern ? m(t, w, e) : e.__canvasStrokePattern,
                e.__canvasStrokePattern = P),
                O ? t.fillStyle = T : j && (P ? t.fillStyle = P : s = !1),
                k ? t.strokeStyle = C : S && (M ? t.strokeStyle = M : a = !1)
            }
            var L, D, z = e.getGlobalScale();
            p.setScale(z[0], z[1], e.segmentIgnoreThreshold),
            t.setLineDash && r.lineDash && (i = Object(c["a"])(e),
            L = i[0],
            D = i[1]);
            var I = !0;
            (l || y & f["b"]) && (p.setDPR(t.dpr),
            h ? p.setContext(null) : (p.setContext(t),
            I = !1),
            p.reset(),
            e.buildPath(p, e.shape, n),
            p.toStatic(),
            e.pathUpdated()),
            I && p.rebuildPath(t, h ? u : 1),
            L && (t.setLineDash(L),
            t.lineDashOffset = D),
            n || (r.strokeFirst ? (a && b(t, r),
            s && _(t, r)) : (s && _(t, r),
            a && b(t, r))),
            L && t.setLineDash([])
        }
        function w(t, e, r) {
            var n = e.__image = Object(a["a"])(r.image, e.__image, e, e.onload);
            if (n && Object(a["c"])(n)) {
                var i = r.x || 0
                  , o = r.y || 0
                  , s = e.getWidth()
                  , u = e.getHeight()
                  , h = n.width / n.height;
                if (null == s && null != u ? s = u * h : null == u && null != s ? u = s / h : null == s && null == u && (s = n.width,
                u = n.height),
                r.sWidth && r.sHeight) {
                    var l = r.sx || 0
                      , c = r.sy || 0;
                    t.drawImage(n, l, c, r.sWidth, r.sHeight, i, o, s, u)
                } else if (r.sx && r.sy) {
                    l = r.sx,
                    c = r.sy;
                    var f = s - l
                      , p = u - c;
                    t.drawImage(n, l, c, f, p, i, o, s, u)
                } else
                    t.drawImage(n, i, o, s, u)
            }
        }
        function O(t, e, r) {
            var n, i = r.text;
            if (null != i && (i += ""),
            i) {
                t.font = r.font || p["a"],
                t.textAlign = r.textAlign,
                t.textBaseline = r.textBaseline;
                var a = void 0
                  , o = void 0;
                t.setLineDash && r.lineDash && (n = Object(c["a"])(e),
                a = n[0],
                o = n[1]),
                a && (t.setLineDash(a),
                t.lineDashOffset = o),
                r.strokeFirst ? (v(r) && t.strokeText(i, r.x, r.y),
                g(r) && t.fillText(i, r.x, r.y)) : (g(r) && t.fillText(i, r.x, r.y),
                v(r) && t.strokeText(i, r.x, r.y)),
                a && t.setLineDash([])
            }
        }
        var k = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"]
          , j = [["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]];
        function S(t, e, r, i, a) {
            var o = !1;
            if (!i && (r = r || {},
            e === r))
                return !1;
            if (i || e.opacity !== r.opacity) {
                F(t, a),
                o = !0;
                var s = Math.max(Math.min(e.opacity, 1), 0);
                t.globalAlpha = isNaN(s) ? n["b"].opacity : s
            }
            (i || e.blend !== r.blend) && (o || (F(t, a),
            o = !0),
            t.globalCompositeOperation = e.blend || n["b"].blend);
            for (var u = 0; u < k.length; u++) {
                var h = k[u];
                (i || e[h] !== r[h]) && (o || (F(t, a),
                o = !0),
                t[h] = t.dpr * (e[h] || 0))
            }
            return (i || e.shadowColor !== r.shadowColor) && (o || (F(t, a),
            o = !0),
            t.shadowColor = e.shadowColor || n["b"].shadowColor),
            o
        }
        function T(t, e, r, n, i) {
            var a = B(e, i.inHover)
              , o = n ? null : r && B(r, i.inHover) || {};
            if (a === o)
                return !1;
            var s = S(t, a, o, n, i);
            if ((n || a.fill !== o.fill) && (s || (F(t, i),
            s = !0),
            y(a.fill) && (t.fillStyle = a.fill)),
            (n || a.stroke !== o.stroke) && (s || (F(t, i),
            s = !0),
            y(a.stroke) && (t.strokeStyle = a.stroke)),
            (n || a.opacity !== o.opacity) && (s || (F(t, i),
            s = !0),
            t.globalAlpha = null == a.opacity ? 1 : a.opacity),
            e.hasStroke()) {
                var u = a.lineWidth
                  , h = u / (a.strokeNoScale && e.getLineScale ? e.getLineScale() : 1);
                t.lineWidth !== h && (s || (F(t, i),
                s = !0),
                t.lineWidth = h)
            }
            for (var l = 0; l < j.length; l++) {
                var c = j[l]
                  , f = c[0];
                (n || a[f] !== o[f]) && (s || (F(t, i),
                s = !0),
                t[f] = a[f] || c[1])
            }
            return s
        }
        function C(t, e, r, n, i) {
            return S(t, B(e, i.inHover), r && B(r, i.inHover), n, i)
        }
        function P(t, e) {
            var r = e.transform
              , n = t.dpr || 1;
            r ? t.setTransform(n * r[0], n * r[1], n * r[2], n * r[3], n * r[4], n * r[5]) : t.setTransform(n, 0, 0, n, 0, 0)
        }
        function M(t, e, r) {
            for (var n = !1, i = 0; i < t.length; i++) {
                var a = t[i];
                n = n || a.isZeroArea(),
                P(e, a),
                e.beginPath(),
                a.buildPath(e, a.shape),
                e.clip()
            }
            r.allClipped = n
        }
        function A(t, e) {
            return t && e ? t[0] !== e[0] || t[1] !== e[1] || t[2] !== e[2] || t[3] !== e[3] || t[4] !== e[4] || t[5] !== e[5] : !(!t && !e)
        }
        var L = 1
          , D = 2
          , z = 3
          , I = 4;
        function R(t) {
            var e = g(t)
              , r = v(t);
            return !(t.lineDash || !(+e ^ +r) || e && "string" !== typeof t.fill || r && "string" !== typeof t.stroke || t.strokePercent < 1 || t.strokeOpacity < 1 || t.fillOpacity < 1)
        }
        function F(t, e) {
            e.batchFill && t.fill(),
            e.batchStroke && t.stroke(),
            e.batchFill = "",
            e.batchStroke = ""
        }
        function B(t, e) {
            return e && t.__hoverStyle || t.style
        }
        function N(t, e) {
            H(t, e, {
                inHover: !1,
                viewWidth: 0,
                viewHeight: 0
            }, !0)
        }
        function H(t, e, r, n) {
            var i = e.transform;
            if (!e.shouldBePainted(r.viewWidth, r.viewHeight, !1, !1))
                return e.__dirty &= ~f["a"],
                void (e.__isRendered = !1);
            var a = e.__clipPaths
              , l = r.prevElClipPaths
              , c = !1
              , p = !1;
            if (l && !Object(o["c"])(a, l) || (l && l.length && (F(t, r),
            t.restore(),
            p = c = !0,
            r.prevElClipPaths = null,
            r.allClipped = !1,
            r.prevEl = null),
            a && a.length && (F(t, r),
            t.save(),
            M(a, t, r),
            c = !0),
            r.prevElClipPaths = a),
            r.allClipped)
                e.__isRendered = !1;
            else {
                e.beforeBrush && e.beforeBrush(),
                e.innerBeforeBrush();
                var d = r.prevEl;
                d || (p = c = !0);
                var v = e instanceof s["b"] && e.autoBatch && R(e.style);
                c || A(i, d.transform) ? (F(t, r),
                P(t, e)) : v || F(t, r);
                var y = B(e, r.inHover);
                e instanceof s["b"] ? (r.lastDrawType !== L && (p = !0,
                r.lastDrawType = L),
                T(t, e, d, p, r),
                v && (r.batchFill || r.batchStroke) || t.beginPath(),
                x(t, e, y, v),
                v && (r.batchFill = y.fill || "",
                r.batchStroke = y.stroke || "")) : e instanceof h["a"] ? (r.lastDrawType !== z && (p = !0,
                r.lastDrawType = z),
                T(t, e, d, p, r),
                O(t, e, y)) : e instanceof u["a"] ? (r.lastDrawType !== D && (p = !0,
                r.lastDrawType = D),
                C(t, e, d, p, r),
                w(t, e, y)) : e.getTemporalDisplayables && (r.lastDrawType !== I && (p = !0,
                r.lastDrawType = I),
                E(t, e, r)),
                v && n && F(t, r),
                e.innerAfterBrush(),
                e.afterBrush && e.afterBrush(),
                r.prevEl = e,
                e.__dirty = 0,
                e.__isRendered = !0
            }
        }
        function E(t, e, r) {
            var n = e.getDisplayables()
              , i = e.getTemporalDisplayables();
            t.save();
            var a, o, s = {
                prevElClipPaths: null,
                prevEl: null,
                allClipped: !1,
                viewWidth: r.viewWidth,
                viewHeight: r.viewHeight,
                inHover: r.inHover
            };
            for (a = e.getCursor(),
            o = n.length; a < o; a++) {
                var u = n[a];
                u.beforeBrush && u.beforeBrush(),
                u.innerBeforeBrush(),
                H(t, u, s, a === o - 1),
                u.innerAfterBrush(),
                u.afterBrush && u.afterBrush(),
                s.prevEl = u
            }
            for (var h = 0, l = i.length; h < l; h++) {
                u = i[h];
                u.beforeBrush && u.beforeBrush(),
                u.innerBeforeBrush(),
                H(t, u, s, h === l - 1),
                u.innerAfterBrush(),
                u.afterBrush && u.afterBrush(),
                s.prevEl = u
            }
            e.clearTemporalDisplayables(),
            e.notClear = !0,
            t.restore()
        }
    },
    "5e76": function(t, e, r) {
        "use strict";
        r.d(e, "b", (function() {
            return o
        }
        )),
        r.d(e, "a", (function() {
            return s
        }
        )),
        r.d(e, "c", (function() {
            return h
        }
        ));
        var n = r("d51b")
          , i = r("726e")
          , a = new n["a"](50);
        function o(t) {
            if ("string" === typeof t) {
                var e = a.get(t);
                return e && e.image
            }
            return t
        }
        function s(t, e, r, n, o) {
            if (t) {
                if ("string" === typeof t) {
                    if (e && e.__zrImageSrc === t || !r)
                        return e;
                    var s = a.get(t)
                      , l = {
                        hostEl: r,
                        cb: n,
                        cbPayload: o
                    };
                    if (s)
                        e = s.image,
                        !h(e) && s.pending.push(l);
                    else {
                        var c = i["d"].loadImage(t, u, u);
                        c.__zrImageSrc = t,
                        a.put(t, c.__cachedImgObj = {
                            image: c,
                            pending: [l]
                        })
                    }
                    return e
                }
                return t
            }
            return e
        }
        function u() {
            var t = this.__cachedImgObj;
            this.onload = this.onerror = this.__cachedImgObj = null;
            for (var e = 0; e < t.pending.length; e++) {
                var r = t.pending[e]
                  , n = r.cb;
                n && n(this, r.cbPayload),
                r.hostEl.dirty()
            }
            t.pending.length = 0
        }
        function h(t) {
            return t && t.width && t.height
        }
    },
    "607d": function(t, e, r) {
        "use strict";
        r.d(e, "b", (function() {
            return u
        }
        )),
        r.d(e, "c", (function() {
            return l
        }
        )),
        r.d(e, "e", (function() {
            return c
        }
        )),
        r.d(e, "a", (function() {
            return p
        }
        )),
        r.d(e, "f", (function() {
            return d
        }
        )),
        r.d(e, "g", (function() {
            return v
        }
        )),
        r.d(e, "d", (function() {
            return y
        }
        ));
        var n = r("22d1")
          , i = r("65ed")
          , a = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
          , o = []
          , s = n["a"].browser.firefox && +n["a"].browser.version.split(".")[0] < 39;
        function u(t, e, r, n) {
            return r = r || {},
            n ? h(t, e, r) : s && null != e.layerX && e.layerX !== e.offsetX ? (r.zrX = e.layerX,
            r.zrY = e.layerY) : null != e.offsetX ? (r.zrX = e.offsetX,
            r.zrY = e.offsetY) : h(t, e, r),
            r
        }
        function h(t, e, r) {
            if (n["a"].domSupported && t.getBoundingClientRect) {
                var a = e.clientX
                  , s = e.clientY;
                if (Object(i["a"])(t)) {
                    var u = t.getBoundingClientRect();
                    return r.zrX = a - u.left,
                    void (r.zrY = s - u.top)
                }
                if (Object(i["b"])(o, t, a, s))
                    return r.zrX = o[0],
                    void (r.zrY = o[1])
            }
            r.zrX = r.zrY = 0
        }
        function l(t) {
            return t || window.event
        }
        function c(t, e, r) {
            if (e = l(e),
            null != e.zrX)
                return e;
            var n = e.type
              , i = n && n.indexOf("touch") >= 0;
            if (i) {
                var o = "touchend" !== n ? e.targetTouches[0] : e.changedTouches[0];
                o && u(t, o, e, r)
            } else {
                u(t, e, e, r);
                var s = f(e);
                e.zrDelta = s ? s / 120 : -(e.detail || 0) / 3
            }
            var h = e.button;
            return null == e.which && void 0 !== h && a.test(e.type) && (e.which = 1 & h ? 1 : 2 & h ? 3 : 4 & h ? 2 : 0),
            e
        }
        function f(t) {
            var e = t.wheelDelta;
            if (e)
                return e;
            var r = t.deltaX
              , n = t.deltaY;
            if (null == r || null == n)
                return e;
            var i = 0 !== n ? Math.abs(n) : Math.abs(r)
              , a = n > 0 ? -1 : n < 0 ? 1 : r > 0 ? -1 : 1;
            return 3 * i * a
        }
        function p(t, e, r, n) {
            t.addEventListener(e, r, n)
        }
        function d(t, e, r, n) {
            t.removeEventListener(e, r, n)
        }
        var v = function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            t.cancelBubble = !0
        };
        function y(t) {
            return 2 === t.which || 3 === t.which
        }
    },
    "65ed": function(t, e, r) {
        "use strict";
        r.d(e, "c", (function() {
            return h
        }
        )),
        r.d(e, "b", (function() {
            return l
        }
        )),
        r.d(e, "a", (function() {
            return p
        }
        ));
        var n = r("22d1")
          , i = Math.log(2);
        function a(t, e, r, n, o, s) {
            var u = n + "-" + o
              , h = t.length;
            if (s.hasOwnProperty(u))
                return s[u];
            if (1 === e) {
                var l = Math.round(Math.log((1 << h) - 1 & ~o) / i);
                return t[r][l]
            }
            var c = n | 1 << r
              , f = r + 1;
            while (n & 1 << f)
                f++;
            for (var p = 0, d = 0, v = 0; d < h; d++) {
                var y = 1 << d;
                y & o || (p += (v % 2 ? -1 : 1) * t[r][d] * a(t, e - 1, f, c, o | y, s),
                v++)
            }
            return s[u] = p,
            p
        }
        function o(t, e) {
            var r = [[t[0], t[1], 1, 0, 0, 0, -e[0] * t[0], -e[0] * t[1]], [0, 0, 0, t[0], t[1], 1, -e[1] * t[0], -e[1] * t[1]], [t[2], t[3], 1, 0, 0, 0, -e[2] * t[2], -e[2] * t[3]], [0, 0, 0, t[2], t[3], 1, -e[3] * t[2], -e[3] * t[3]], [t[4], t[5], 1, 0, 0, 0, -e[4] * t[4], -e[4] * t[5]], [0, 0, 0, t[4], t[5], 1, -e[5] * t[4], -e[5] * t[5]], [t[6], t[7], 1, 0, 0, 0, -e[6] * t[6], -e[6] * t[7]], [0, 0, 0, t[6], t[7], 1, -e[7] * t[6], -e[7] * t[7]]]
              , n = {}
              , i = a(r, 8, 0, 0, 0, n);
            if (0 !== i) {
                for (var o = [], s = 0; s < 8; s++)
                    for (var u = 0; u < 8; u++)
                        null == o[u] && (o[u] = 0),
                        o[u] += ((s + u) % 2 ? -1 : 1) * a(r, 7, 0 === s ? 1 : 0, 1 << s, 1 << u, n) / i * e[s];
                return function(t, e, r) {
                    var n = e * o[6] + r * o[7] + 1;
                    t[0] = (e * o[0] + r * o[1] + o[2]) / n,
                    t[1] = (e * o[3] + r * o[4] + o[5]) / n
                }
            }
        }
        var s = "___zrEVENTSAVED"
          , u = [];
        function h(t, e, r, n, i) {
            return l(u, e, n, i, !0) && l(t, r, u[0], u[1])
        }
        function l(t, e, r, i, a) {
            if (e.getBoundingClientRect && n["a"].domSupported && !p(e)) {
                var o = e[s] || (e[s] = {})
                  , u = c(e, o)
                  , h = f(u, o, a);
                if (h)
                    return h(t, r, i),
                    !0
            }
            return !1
        }
        function c(t, e) {
            var r = e.markers;
            if (r)
                return r;
            r = e.markers = [];
            for (var n = ["left", "right"], i = ["top", "bottom"], a = 0; a < 4; a++) {
                var o = document.createElement("div")
                  , s = o.style
                  , u = a % 2
                  , h = (a >> 1) % 2;
                s.cssText = ["position: absolute", "visibility: hidden", "padding: 0", "margin: 0", "border-width: 0", "user-select: none", "width:0", "height:0", n[u] + ":0", i[h] + ":0", n[1 - u] + ":auto", i[1 - h] + ":auto", ""].join("!important;"),
                t.appendChild(o),
                r.push(o)
            }
            return r
        }
        function f(t, e, r) {
            for (var n = r ? "invTrans" : "trans", i = e[n], a = e.srcCoords, s = [], u = [], h = !0, l = 0; l < 4; l++) {
                var c = t[l].getBoundingClientRect()
                  , f = 2 * l
                  , p = c.left
                  , d = c.top;
                s.push(p, d),
                h = h && a && p === a[f] && d === a[f + 1],
                u.push(t[l].offsetLeft, t[l].offsetTop)
            }
            return h && i ? i : (e.srcCoords = s,
            e[n] = r ? o(u, s) : o(s, u))
        }
        function p(t) {
            return "CANVAS" === t.nodeName.toUpperCase()
        }
    },
    "68ab": function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return i
        }
        ));
        var n = r("4a3f");
        function i(t, e, r, i, a, o, s, u, h) {
            if (0 === s)
                return !1;
            var l = s;
            if (h > e + l && h > i + l && h > o + l || h < e - l && h < i - l && h < o - l || u > t + l && u > r + l && u > a + l || u < t - l && u < r - l && u < a - l)
                return !1;
            var c = Object(n["l"])(t, e, r, i, a, o, u, h, null);
            return c <= l / 2
        }
    },
    "697e": function(t, e, r) {
        "use strict";
        r.r(e),
        r.d(e, "init", (function() {
            return ft
        }
        )),
        r.d(e, "dispose", (function() {
            return pt
        }
        )),
        r.d(e, "disposeAll", (function() {
            return dt
        }
        )),
        r.d(e, "getInstance", (function() {
            return vt
        }
        )),
        r.d(e, "registerPainter", (function() {
            return yt
        }
        )),
        r.d(e, "version", (function() {
            return gt
        }
        ));
        var n = r("22d1")
          , i = r("6d8b")
          , a = r("21a10")
          , o = r("401b")
          , s = function() {
            function t(t, e) {
                this.target = t,
                this.topTarget = e && e.topTarget
            }
            return t
        }()
          , u = function() {
            function t(t) {
                this.handler = t,
                t.on("mousedown", this._dragStart, this),
                t.on("mousemove", this._drag, this),
                t.on("mouseup", this._dragEnd, this)
            }
            return t.prototype._dragStart = function(t) {
                var e = t.target;
                while (e && !e.draggable)
                    e = e.parent || e.__hostTarget;
                e && (this._draggingTarget = e,
                e.dragging = !0,
                this._x = t.offsetX,
                this._y = t.offsetY,
                this.handler.dispatchToElement(new s(e,t), "dragstart", t.event))
            }
            ,
            t.prototype._drag = function(t) {
                var e = this._draggingTarget;
                if (e) {
                    var r = t.offsetX
                      , n = t.offsetY
                      , i = r - this._x
                      , a = n - this._y;
                    this._x = r,
                    this._y = n,
                    e.drift(i, a, t),
                    this.handler.dispatchToElement(new s(e,t), "drag", t.event);
                    var o = this.handler.findHover(r, n, e).target
                      , u = this._dropTarget;
                    this._dropTarget = o,
                    e !== o && (u && o !== u && this.handler.dispatchToElement(new s(u,t), "dragleave", t.event),
                    o && o !== u && this.handler.dispatchToElement(new s(o,t), "dragenter", t.event))
                }
            }
            ,
            t.prototype._dragEnd = function(t) {
                var e = this._draggingTarget;
                e && (e.dragging = !1),
                this.handler.dispatchToElement(new s(e,t), "dragend", t.event),
                this._dropTarget && this.handler.dispatchToElement(new s(this._dropTarget,t), "drop", t.event),
                this._draggingTarget = null,
                this._dropTarget = null
            }
            ,
            t
        }()
          , h = u
          , l = r("6fd3")
          , c = r("607d")
          , f = function() {
            function t() {
                this._track = []
            }
            return t.prototype.recognize = function(t, e, r) {
                return this._doTrack(t, e, r),
                this._recognize(t)
            }
            ,
            t.prototype.clear = function() {
                return this._track.length = 0,
                this
            }
            ,
            t.prototype._doTrack = function(t, e, r) {
                var n = t.touches;
                if (n) {
                    for (var i = {
                        points: [],
                        touches: [],
                        target: e,
                        event: t
                    }, a = 0, o = n.length; a < o; a++) {
                        var s = n[a]
                          , u = c["b"](r, s, {});
                        i.points.push([u.zrX, u.zrY]),
                        i.touches.push(s)
                    }
                    this._track.push(i)
                }
            }
            ,
            t.prototype._recognize = function(t) {
                for (var e in v)
                    if (v.hasOwnProperty(e)) {
                        var r = v[e](this._track, t);
                        if (r)
                            return r
                    }
            }
            ,
            t
        }();
        function p(t) {
            var e = t[1][0] - t[0][0]
              , r = t[1][1] - t[0][1];
            return Math.sqrt(e * e + r * r)
        }
        function d(t) {
            return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
        }
        var v = {
            pinch: function(t, e) {
                var r = t.length;
                if (r) {
                    var n = (t[r - 1] || {}).points
                      , i = (t[r - 2] || {}).points || n;
                    if (i && i.length > 1 && n && n.length > 1) {
                        var a = p(n) / p(i);
                        !isFinite(a) && (a = 1),
                        e.pinchScale = a;
                        var o = d(n);
                        return e.pinchX = o[0],
                        e.pinchY = o[1],
                        {
                            type: "pinch",
                            target: t[0].target,
                            event: e
                        }
                    }
                }
            }
        }
          , y = "silent";
        function g(t, e, r) {
            return {
                type: t,
                event: r,
                target: e.target,
                topTarget: e.topTarget,
                cancelBubble: !1,
                offsetX: r.zrX,
                offsetY: r.zrY,
                gestureEvent: r.gestureEvent,
                pinchX: r.pinchX,
                pinchY: r.pinchY,
                pinchScale: r.pinchScale,
                wheelDelta: r.zrDelta,
                zrByTouch: r.zrByTouch,
                which: r.which,
                stop: _
            }
        }
        function _() {
            c["g"](this.event)
        }
        var b = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.handler = null,
                e
            }
            return Object(a["a"])(e, t),
            e.prototype.dispose = function() {}
            ,
            e.prototype.setCursor = function() {}
            ,
            e
        }(l["a"])
          , m = function() {
            function t(t, e) {
                this.x = t,
                this.y = e
            }
            return t
        }()
          , x = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"]
          , w = function(t) {
            function e(e, r, n, i) {
                var a = t.call(this) || this;
                return a._hovered = new m(0,0),
                a.storage = e,
                a.painter = r,
                a.painterRoot = i,
                n = n || new b,
                a.proxy = null,
                a.setHandlerProxy(n),
                a._draggingMgr = new h(a),
                a
            }
            return Object(a["a"])(e, t),
            e.prototype.setHandlerProxy = function(t) {
                this.proxy && this.proxy.dispose(),
                t && (i["each"](x, (function(e) {
                    t.on && t.on(e, this[e], this)
                }
                ), this),
                t.handler = this),
                this.proxy = t
            }
            ,
            e.prototype.mousemove = function(t) {
                var e = t.zrX
                  , r = t.zrY
                  , n = k(this, e, r)
                  , i = this._hovered
                  , a = i.target;
                a && !a.__zr && (i = this.findHover(i.x, i.y),
                a = i.target);
                var o = this._hovered = n ? new m(e,r) : this.findHover(e, r)
                  , s = o.target
                  , u = this.proxy;
                u.setCursor && u.setCursor(s ? s.cursor : "default"),
                a && s !== a && this.dispatchToElement(i, "mouseout", t),
                this.dispatchToElement(o, "mousemove", t),
                s && s !== a && this.dispatchToElement(o, "mouseover", t)
            }
            ,
            e.prototype.mouseout = function(t) {
                var e = t.zrEventControl;
                "only_globalout" !== e && this.dispatchToElement(this._hovered, "mouseout", t),
                "no_globalout" !== e && this.trigger("globalout", {
                    type: "globalout",
                    event: t
                })
            }
            ,
            e.prototype.resize = function() {
                this._hovered = new m(0,0)
            }
            ,
            e.prototype.dispatch = function(t, e) {
                var r = this[t];
                r && r.call(this, e)
            }
            ,
            e.prototype.dispose = function() {
                this.proxy.dispose(),
                this.storage = null,
                this.proxy = null,
                this.painter = null
            }
            ,
            e.prototype.setCursorStyle = function(t) {
                var e = this.proxy;
                e.setCursor && e.setCursor(t)
            }
            ,
            e.prototype.dispatchToElement = function(t, e, r) {
                t = t || {};
                var n = t.target;
                if (!n || !n.silent) {
                    var i = "on" + e
                      , a = g(e, t, r);
                    while (n)
                        if (n[i] && (a.cancelBubble = !!n[i].call(n, a)),
                        n.trigger(e, a),
                        n = n.__hostTarget ? n.__hostTarget : n.parent,
                        a.cancelBubble)
                            break;
                    a.cancelBubble || (this.trigger(e, a),
                    this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer((function(t) {
                        "function" === typeof t[i] && t[i].call(t, a),
                        t.trigger && t.trigger(e, a)
                    }
                    )))
                }
            }
            ,
            e.prototype.findHover = function(t, e, r) {
                for (var n = this.storage.getDisplayList(), i = new m(t,e), a = n.length - 1; a >= 0; a--) {
                    var o = void 0;
                    if (n[a] !== r && !n[a].ignore && (o = O(n[a], t, e)) && (!i.topTarget && (i.topTarget = n[a]),
                    o !== y)) {
                        i.target = n[a];
                        break
                    }
                }
                return i
            }
            ,
            e.prototype.processGesture = function(t, e) {
                this._gestureMgr || (this._gestureMgr = new f);
                var r = this._gestureMgr;
                "start" === e && r.clear();
                var n = r.recognize(t, this.findHover(t.zrX, t.zrY, null).target, this.proxy.dom);
                if ("end" === e && r.clear(),
                n) {
                    var i = n.type;
                    t.gestureEvent = i;
                    var a = new m;
                    a.target = n.target,
                    this.dispatchToElement(a, i, n.event)
                }
            }
            ,
            e
        }(l["a"]);
        function O(t, e, r) {
            if (t[t.rectHover ? "rectContain" : "contain"](e, r)) {
                var n = t
                  , i = void 0
                  , a = !1;
                while (n) {
                    if (n.ignoreClip && (a = !0),
                    !a) {
                        var o = n.getClipPath();
                        if (o && !o.contain(e, r))
                            return !1;
                        n.silent && (i = !0)
                    }
                    var s = n.__hostTarget;
                    n = s || n.parent
                }
                return !i || y
            }
            return !1
        }
        function k(t, e, r) {
            var n = t.painter;
            return e < 0 || e > n.getWidth() || r < 0 || r > n.getHeight()
        }
        i["each"](["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], (function(t) {
            w.prototype[t] = function(e) {
                var r, n, i = e.zrX, a = e.zrY, s = k(this, i, a);
                if ("mouseup" === t && s || (r = this.findHover(i, a),
                n = r.target),
                "mousedown" === t)
                    this._downEl = n,
                    this._downPoint = [e.zrX, e.zrY],
                    this._upEl = n;
                else if ("mouseup" === t)
                    this._upEl = n;
                else if ("click" === t) {
                    if (this._downEl !== this._upEl || !this._downPoint || o["dist"](this._downPoint, [e.zrX, e.zrY]) > 4)
                        return;
                    this._downPoint = null
                }
                this.dispatchToElement(r, t, e)
            }
        }
        ));
        var j = w
          , S = r("04f6")
          , T = r("4bc4")
          , C = !1;
        function P() {
            C || (C = !0,
            console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"))
        }
        function M(t, e) {
            return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
        }
        var A = function() {
            function t() {
                this._roots = [],
                this._displayList = [],
                this._displayListLen = 0,
                this.displayableSortFunc = M
            }
            return t.prototype.traverse = function(t, e) {
                for (var r = 0; r < this._roots.length; r++)
                    this._roots[r].traverse(t, e)
            }
            ,
            t.prototype.getDisplayList = function(t, e) {
                e = e || !1;
                var r = this._displayList;
                return !t && r.length || this.updateDisplayList(e),
                r
            }
            ,
            t.prototype.updateDisplayList = function(t) {
                this._displayListLen = 0;
                for (var e = this._roots, r = this._displayList, n = 0, i = e.length; n < i; n++)
                    this._updateAndAddDisplayable(e[n], null, t);
                r.length = this._displayListLen,
                Object(S["a"])(r, M)
            }
            ,
            t.prototype._updateAndAddDisplayable = function(t, e, r) {
                if (!t.ignore || r) {
                    t.beforeUpdate(),
                    t.update(),
                    t.afterUpdate();
                    var n = t.getClipPath();
                    if (t.ignoreClip)
                        e = null;
                    else if (n) {
                        e = e ? e.slice() : [];
                        var i = n
                          , a = t;
                        while (i)
                            i.parent = a,
                            i.updateTransform(),
                            e.push(i),
                            a = i,
                            i = i.getClipPath()
                    }
                    if (t.childrenRef) {
                        for (var o = t.childrenRef(), s = 0; s < o.length; s++) {
                            var u = o[s];
                            t.__dirty && (u.__dirty |= T["a"]),
                            this._updateAndAddDisplayable(u, e, r)
                        }
                        t.__dirty = 0
                    } else {
                        var h = t;
                        e && e.length ? h.__clipPaths = e : h.__clipPaths && h.__clipPaths.length > 0 && (h.__clipPaths = []),
                        isNaN(h.z) && (P(),
                        h.z = 0),
                        isNaN(h.z2) && (P(),
                        h.z2 = 0),
                        isNaN(h.zlevel) && (P(),
                        h.zlevel = 0),
                        this._displayList[this._displayListLen++] = h
                    }
                    var l = t.getDecalElement && t.getDecalElement();
                    l && this._updateAndAddDisplayable(l, e, r);
                    var c = t.getTextGuideLine();
                    c && this._updateAndAddDisplayable(c, e, r);
                    var f = t.getTextContent();
                    f && this._updateAndAddDisplayable(f, e, r)
                }
            }
            ,
            t.prototype.addRoot = function(t) {
                t.__zr && t.__zr.storage === this || this._roots.push(t)
            }
            ,
            t.prototype.delRoot = function(t) {
                if (t instanceof Array)
                    for (var e = 0, r = t.length; e < r; e++)
                        this.delRoot(t[e]);
                else {
                    var n = i["indexOf"](this._roots, t);
                    n >= 0 && this._roots.splice(n, 1)
                }
            }
            ,
            t.prototype.delAllRoots = function() {
                this._roots = [],
                this._displayList = [],
                this._displayListLen = 0
            }
            ,
            t.prototype.getRoots = function() {
                return this._roots
            }
            ,
            t.prototype.dispose = function() {
                this._displayList = null,
                this._roots = null
            }
            ,
            t
        }()
          , L = A
          , D = r("98b7")
          , z = r("06ad");
        function I() {
            return (new Date).getTime()
        }
        var R = function(t) {
            function e(e) {
                var r = t.call(this) || this;
                return r._running = !1,
                r._time = 0,
                r._pausedTime = 0,
                r._pauseStart = 0,
                r._paused = !1,
                e = e || {},
                r.stage = e.stage || {},
                r
            }
            return Object(a["a"])(e, t),
            e.prototype.addClip = function(t) {
                t.animation && this.removeClip(t),
                this._head ? (this._tail.next = t,
                t.prev = this._tail,
                t.next = null,
                this._tail = t) : this._head = this._tail = t,
                t.animation = this
            }
            ,
            e.prototype.addAnimator = function(t) {
                t.animation = this;
                var e = t.getClip();
                e && this.addClip(e)
            }
            ,
            e.prototype.removeClip = function(t) {
                if (t.animation) {
                    var e = t.prev
                      , r = t.next;
                    e ? e.next = r : this._head = r,
                    r ? r.prev = e : this._tail = e,
                    t.next = t.prev = t.animation = null
                }
            }
            ,
            e.prototype.removeAnimator = function(t) {
                var e = t.getClip();
                e && this.removeClip(e),
                t.animation = null
            }
            ,
            e.prototype.update = function(t) {
                var e = I() - this._pausedTime
                  , r = e - this._time
                  , n = this._head;
                while (n) {
                    var i = n.next
                      , a = n.step(e, r);
                    a ? (n.ondestroy(),
                    this.removeClip(n),
                    n = i) : n = i
                }
                this._time = e,
                t || (this.trigger("frame", r),
                this.stage.update && this.stage.update())
            }
            ,
            e.prototype._startLoop = function() {
                var t = this;
                function e() {
                    t._running && (Object(D["a"])(e),
                    !t._paused && t.update())
                }
                this._running = !0,
                Object(D["a"])(e)
            }
            ,
            e.prototype.start = function() {
                this._running || (this._time = I(),
                this._pausedTime = 0,
                this._startLoop())
            }
            ,
            e.prototype.stop = function() {
                this._running = !1
            }
            ,
            e.prototype.pause = function() {
                this._paused || (this._pauseStart = I(),
                this._paused = !0)
            }
            ,
            e.prototype.resume = function() {
                this._paused && (this._pausedTime += I() - this._pauseStart,
                this._paused = !1)
            }
            ,
            e.prototype.clear = function() {
                var t = this._head;
                while (t) {
                    var e = t.next;
                    t.prev = t.next = t.animation = null,
                    t = e
                }
                this._head = this._tail = null
            }
            ,
            e.prototype.isFinished = function() {
                return null == this._head
            }
            ,
            e.prototype.animate = function(t, e) {
                e = e || {},
                this.start();
                var r = new z["b"](t,e.loop);
                return this.addAnimator(r),
                r
            }
            ,
            e
        }(l["a"])
          , F = R
          , B = 300
          , N = n["a"].domSupported
          , H = function() {
            var t = ["click", "dblclick", "mousewheel", "wheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"]
              , e = ["touchstart", "touchend", "touchmove"]
              , r = {
                pointerdown: 1,
                pointerup: 1,
                pointermove: 1,
                pointerout: 1
            }
              , n = i["map"](t, (function(t) {
                var e = t.replace("mouse", "pointer");
                return r.hasOwnProperty(e) ? e : t
            }
            ));
            return {
                mouse: t,
                touch: e,
                pointer: n
            }
        }()
          , E = {
            mouse: ["mousemove", "mouseup"],
            pointer: ["pointermove", "pointerup"]
        }
          , W = !1;
        function q(t) {
            var e = t.pointerType;
            return "pen" === e || "touch" === e
        }
        function X(t) {
            t.touching = !0,
            null != t.touchTimer && (clearTimeout(t.touchTimer),
            t.touchTimer = null),
            t.touchTimer = setTimeout((function() {
                t.touching = !1,
                t.touchTimer = null
            }
            ), 700)
        }
        function Y(t) {
            t && (t.zrByTouch = !0)
        }
        function V(t, e) {
            return Object(c["e"])(t.dom, new G(t,e), !0)
        }
        function U(t, e) {
            var r = e
              , n = !1;
            while (r && 9 !== r.nodeType && !(n = r.domBelongToZr || r !== e && r === t.painterRoot))
                r = r.parentNode;
            return n
        }
        var G = function() {
            function t(t, e) {
                this.stopPropagation = i["noop"],
                this.stopImmediatePropagation = i["noop"],
                this.preventDefault = i["noop"],
                this.type = e.type,
                this.target = this.currentTarget = t.dom,
                this.pointerType = e.pointerType,
                this.clientX = e.clientX,
                this.clientY = e.clientY
            }
            return t
        }()
          , Z = {
            mousedown: function(t) {
                t = Object(c["e"])(this.dom, t),
                this.__mayPointerCapture = [t.zrX, t.zrY],
                this.trigger("mousedown", t)
            },
            mousemove: function(t) {
                t = Object(c["e"])(this.dom, t);
                var e = this.__mayPointerCapture;
                !e || t.zrX === e[0] && t.zrY === e[1] || this.__togglePointerCapture(!0),
                this.trigger("mousemove", t)
            },
            mouseup: function(t) {
                t = Object(c["e"])(this.dom, t),
                this.__togglePointerCapture(!1),
                this.trigger("mouseup", t)
            },
            mouseout: function(t) {
                t = Object(c["e"])(this.dom, t);
                var e = t.toElement || t.relatedTarget;
                U(this, e) || (this.__pointerCapturing && (t.zrEventControl = "no_globalout"),
                this.trigger("mouseout", t))
            },
            wheel: function(t) {
                W = !0,
                t = Object(c["e"])(this.dom, t),
                this.trigger("mousewheel", t)
            },
            mousewheel: function(t) {
                W || (t = Object(c["e"])(this.dom, t),
                this.trigger("mousewheel", t))
            },
            touchstart: function(t) {
                t = Object(c["e"])(this.dom, t),
                Y(t),
                this.__lastTouchMoment = new Date,
                this.handler.processGesture(t, "start"),
                Z.mousemove.call(this, t),
                Z.mousedown.call(this, t)
            },
            touchmove: function(t) {
                t = Object(c["e"])(this.dom, t),
                Y(t),
                this.handler.processGesture(t, "change"),
                Z.mousemove.call(this, t)
            },
            touchend: function(t) {
                t = Object(c["e"])(this.dom, t),
                Y(t),
                this.handler.processGesture(t, "end"),
                Z.mouseup.call(this, t),
                +new Date - +this.__lastTouchMoment < B && Z.click.call(this, t)
            },
            pointerdown: function(t) {
                Z.mousedown.call(this, t)
            },
            pointermove: function(t) {
                q(t) || Z.mousemove.call(this, t)
            },
            pointerup: function(t) {
                Z.mouseup.call(this, t)
            },
            pointerout: function(t) {
                q(t) || Z.mouseout.call(this, t)
            }
        };
        i["each"](["click", "dblclick", "contextmenu"], (function(t) {
            Z[t] = function(e) {
                e = Object(c["e"])(this.dom, e),
                this.trigger(t, e)
            }
        }
        ));
        var K = {
            pointermove: function(t) {
                q(t) || K.mousemove.call(this, t)
            },
            pointerup: function(t) {
                K.mouseup.call(this, t)
            },
            mousemove: function(t) {
                this.trigger("mousemove", t)
            },
            mouseup: function(t) {
                var e = this.__pointerCapturing;
                this.__togglePointerCapture(!1),
                this.trigger("mouseup", t),
                e && (t.zrEventControl = "only_globalout",
                this.trigger("mouseout", t))
            }
        };
        function Q(t, e) {
            var r = e.domHandlers;
            n["a"].pointerEventsSupported ? i["each"](H.pointer, (function(n) {
                J(e, n, (function(e) {
                    r[n].call(t, e)
                }
                ))
            }
            )) : (n["a"].touchEventsSupported && i["each"](H.touch, (function(n) {
                J(e, n, (function(i) {
                    r[n].call(t, i),
                    X(e)
                }
                ))
            }
            )),
            i["each"](H.mouse, (function(n) {
                J(e, n, (function(i) {
                    i = Object(c["c"])(i),
                    e.touching || r[n].call(t, i)
                }
                ))
            }
            )))
        }
        function $(t, e) {
            function r(r) {
                function n(n) {
                    n = Object(c["c"])(n),
                    U(t, n.target) || (n = V(t, n),
                    e.domHandlers[r].call(t, n))
                }
                J(e, r, n, {
                    capture: !0
                })
            }
            n["a"].pointerEventsSupported ? i["each"](E.pointer, r) : n["a"].touchEventsSupported || i["each"](E.mouse, r)
        }
        function J(t, e, r, n) {
            t.mounted[e] = r,
            t.listenerOpts[e] = n,
            Object(c["a"])(t.domTarget, e, r, n)
        }
        function tt(t) {
            var e = t.mounted;
            for (var r in e)
                e.hasOwnProperty(r) && Object(c["f"])(t.domTarget, r, e[r], t.listenerOpts[r]);
            t.mounted = {}
        }
        var et = function() {
            function t(t, e) {
                this.mounted = {},
                this.listenerOpts = {},
                this.touching = !1,
                this.domTarget = t,
                this.domHandlers = e
            }
            return t
        }()
          , rt = function(t) {
            function e(e, r) {
                var n = t.call(this) || this;
                return n.__pointerCapturing = !1,
                n.dom = e,
                n.painterRoot = r,
                n._localHandlerScope = new et(e,Z),
                N && (n._globalHandlerScope = new et(document,K)),
                Q(n, n._localHandlerScope),
                n
            }
            return Object(a["a"])(e, t),
            e.prototype.dispose = function() {
                tt(this._localHandlerScope),
                N && tt(this._globalHandlerScope)
            }
            ,
            e.prototype.setCursor = function(t) {
                this.dom.style && (this.dom.style.cursor = t || "default")
            }
            ,
            e.prototype.__togglePointerCapture = function(t) {
                if (this.__mayPointerCapture = null,
                N && +this.__pointerCapturing ^ +t) {
                    this.__pointerCapturing = t;
                    var e = this._globalHandlerScope;
                    t ? $(this, e) : tt(e)
                }
            }
            ,
            e
        }(l["a"])
          , nt = rt
          , it = r("41ef")
          , at = r("2cf4")
          , ot = r("2dc5")
          , st = {}
          , ut = {};
        function ht(t) {
            delete ut[t]
        }
        function lt(t) {
            if (!t)
                return !1;
            if ("string" === typeof t)
                return Object(it["lum"])(t, 1) < at["b"];
            if (t.colorStops) {
                for (var e = t.colorStops, r = 0, n = e.length, i = 0; i < n; i++)
                    r += Object(it["lum"])(e[i].color, 1);
                return r /= n,
                r < at["b"]
            }
            return !1
        }
        var ct = function() {
            function t(t, e, r) {
                var a = this;
                this._sleepAfterStill = 10,
                this._stillFrameAccum = 0,
                this._needsRefresh = !0,
                this._needsRefreshHover = !0,
                this._darkMode = !1,
                r = r || {},
                this.dom = e,
                this.id = t;
                var o = new L
                  , s = r.renderer || "canvas";
                st[s] || (s = i["keys"](st)[0]),
                r.useDirtyRect = null != r.useDirtyRect && r.useDirtyRect;
                var u = new st[s](e,o,r,t)
                  , h = r.ssr || u.ssrOnly;
                this.storage = o,
                this.painter = u;
                var l = n["a"].node || n["a"].worker || h ? null : new nt(u.getViewportRoot(),u.root);
                this.handler = new j(o,u,l,u.root),
                this.animation = new F({
                    stage: {
                        update: h ? null : function() {
                            return a._flush(!0)
                        }
                    }
                }),
                h || this.animation.start()
            }
            return t.prototype.add = function(t) {
                t && (this.storage.addRoot(t),
                t.addSelfToZr(this),
                this.refresh())
            }
            ,
            t.prototype.remove = function(t) {
                t && (this.storage.delRoot(t),
                t.removeSelfFromZr(this),
                this.refresh())
            }
            ,
            t.prototype.configLayer = function(t, e) {
                this.painter.configLayer && this.painter.configLayer(t, e),
                this.refresh()
            }
            ,
            t.prototype.setBackgroundColor = function(t) {
                this.painter.setBackgroundColor && this.painter.setBackgroundColor(t),
                this.refresh(),
                this._backgroundColor = t,
                this._darkMode = lt(t)
            }
            ,
            t.prototype.getBackgroundColor = function() {
                return this._backgroundColor
            }
            ,
            t.prototype.setDarkMode = function(t) {
                this._darkMode = t
            }
            ,
            t.prototype.isDarkMode = function() {
                return this._darkMode
            }
            ,
            t.prototype.refreshImmediately = function(t) {
                t || this.animation.update(!0),
                this._needsRefresh = !1,
                this.painter.refresh(),
                this._needsRefresh = !1
            }
            ,
            t.prototype.refresh = function() {
                this._needsRefresh = !0,
                this.animation.start()
            }
            ,
            t.prototype.flush = function() {
                this._flush(!1)
            }
            ,
            t.prototype._flush = function(t) {
                var e, r = I();
                this._needsRefresh && (e = !0,
                this.refreshImmediately(t)),
                this._needsRefreshHover && (e = !0,
                this.refreshHoverImmediately());
                var n = I();
                e ? (this._stillFrameAccum = 0,
                this.trigger("rendered", {
                    elapsedTime: n - r
                })) : this._sleepAfterStill > 0 && (this._stillFrameAccum++,
                this._stillFrameAccum > this._sleepAfterStill && this.animation.stop())
            }
            ,
            t.prototype.setSleepAfterStill = function(t) {
                this._sleepAfterStill = t
            }
            ,
            t.prototype.wakeUp = function() {
                this.animation.start(),
                this._stillFrameAccum = 0
            }
            ,
            t.prototype.refreshHover = function() {
                this._needsRefreshHover = !0
            }
            ,
            t.prototype.refreshHoverImmediately = function() {
                this._needsRefreshHover = !1,
                this.painter.refreshHover && "canvas" === this.painter.getType() && this.painter.refreshHover()
            }
            ,
            t.prototype.resize = function(t) {
                t = t || {},
                this.painter.resize(t.width, t.height),
                this.handler.resize()
            }
            ,
            t.prototype.clearAnimation = function() {
                this.animation.clear()
            }
            ,
            t.prototype.getWidth = function() {
                return this.painter.getWidth()
            }
            ,
            t.prototype.getHeight = function() {
                return this.painter.getHeight()
            }
            ,
            t.prototype.setCursorStyle = function(t) {
                this.handler.setCursorStyle(t)
            }
            ,
            t.prototype.findHover = function(t, e) {
                return this.handler.findHover(t, e)
            }
            ,
            t.prototype.on = function(t, e, r) {
                return this.handler.on(t, e, r),
                this
            }
            ,
            t.prototype.off = function(t, e) {
                this.handler.off(t, e)
            }
            ,
            t.prototype.trigger = function(t, e) {
                this.handler.trigger(t, e)
            }
            ,
            t.prototype.clear = function() {
                for (var t = this.storage.getRoots(), e = 0; e < t.length; e++)
                    t[e]instanceof ot["a"] && t[e].removeSelfFromZr(this);
                this.storage.delAllRoots(),
                this.painter.clear()
            }
            ,
            t.prototype.dispose = function() {
                this.animation.stop(),
                this.clear(),
                this.storage.dispose(),
                this.painter.dispose(),
                this.handler.dispose(),
                this.animation = this.storage = this.painter = this.handler = null,
                ht(this.id)
            }
            ,
            t
        }();
        function ft(t, e) {
            var r = new ct(i["guid"](),t,e);
            return ut[r.id] = r,
            r
        }
        function pt(t) {
            t.dispose()
        }
        function dt() {
            for (var t in ut)
                ut.hasOwnProperty(t) && ut[t].dispose();
            ut = {}
        }
        function vt(t) {
            return ut[t]
        }
        function yt(t, e) {
            st[t] = e
        }
        var gt = "5.3.0"
    },
    "6d8b": function(t, e, r) {
        "use strict";
        r.r(e),
        r.d(e, "guid", (function() {
            return y
        }
        )),
        r.d(e, "logError", (function() {
            return g
        }
        )),
        r.d(e, "clone", (function() {
            return _
        }
        )),
        r.d(e, "merge", (function() {
            return b
        }
        )),
        r.d(e, "mergeAll", (function() {
            return m
        }
        )),
        r.d(e, "extend", (function() {
            return x
        }
        )),
        r.d(e, "defaults", (function() {
            return w
        }
        )),
        r.d(e, "createCanvas", (function() {
            return O
        }
        )),
        r.d(e, "indexOf", (function() {
            return k
        }
        )),
        r.d(e, "inherits", (function() {
            return j
        }
        )),
        r.d(e, "mixin", (function() {
            return S
        }
        )),
        r.d(e, "isArrayLike", (function() {
            return T
        }
        )),
        r.d(e, "each", (function() {
            return C
        }
        )),
        r.d(e, "map", (function() {
            return P
        }
        )),
        r.d(e, "reduce", (function() {
            return M
        }
        )),
        r.d(e, "filter", (function() {
            return A
        }
        )),
        r.d(e, "find", (function() {
            return L
        }
        )),
        r.d(e, "keys", (function() {
            return D
        }
        )),
        r.d(e, "bind", (function() {
            return I
        }
        )),
        r.d(e, "curry", (function() {
            return R
        }
        )),
        r.d(e, "isArray", (function() {
            return F
        }
        )),
        r.d(e, "isFunction", (function() {
            return B
        }
        )),
        r.d(e, "isString", (function() {
            return N
        }
        )),
        r.d(e, "isStringSafe", (function() {
            return H
        }
        )),
        r.d(e, "isNumber", (function() {
            return E
        }
        )),
        r.d(e, "isObject", (function() {
            return W
        }
        )),
        r.d(e, "isBuiltInObject", (function() {
            return q
        }
        )),
        r.d(e, "isTypedArray", (function() {
            return X
        }
        )),
        r.d(e, "isDom", (function() {
            return Y
        }
        )),
        r.d(e, "isGradientObject", (function() {
            return V
        }
        )),
        r.d(e, "isImagePatternObject", (function() {
            return U
        }
        )),
        r.d(e, "isRegExp", (function() {
            return G
        }
        )),
        r.d(e, "eqNaN", (function() {
            return Z
        }
        )),
        r.d(e, "retrieve", (function() {
            return K
        }
        )),
        r.d(e, "retrieve2", (function() {
            return Q
        }
        )),
        r.d(e, "retrieve3", (function() {
            return $
        }
        )),
        r.d(e, "slice", (function() {
            return J
        }
        )),
        r.d(e, "normalizeCssArray", (function() {
            return tt
        }
        )),
        r.d(e, "assert", (function() {
            return et
        }
        )),
        r.d(e, "trim", (function() {
            return rt
        }
        )),
        r.d(e, "setAsPrimitive", (function() {
            return it
        }
        )),
        r.d(e, "isPrimitive", (function() {
            return at
        }
        )),
        r.d(e, "HashMap", (function() {
            return ot
        }
        )),
        r.d(e, "createHashMap", (function() {
            return st
        }
        )),
        r.d(e, "concatArray", (function() {
            return ut
        }
        )),
        r.d(e, "createObject", (function() {
            return ht
        }
        )),
        r.d(e, "disableUserSelect", (function() {
            return lt
        }
        )),
        r.d(e, "hasOwn", (function() {
            return ct
        }
        )),
        r.d(e, "noop", (function() {
            return ft
        }
        )),
        r.d(e, "RADIAN_TO_DEGREE", (function() {
            return pt
        }
        ));
        var n = r("726e")
          , i = M(["Function", "RegExp", "Date", "Error", "CanvasGradient", "CanvasPattern", "Image", "Canvas"], (function(t, e) {
            return t["[object " + e + "]"] = !0,
            t
        }
        ), {})
          , a = M(["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64"], (function(t, e) {
            return t["[object " + e + "Array]"] = !0,
            t
        }
        ), {})
          , o = Object.prototype.toString
          , s = Array.prototype
          , u = s.forEach
          , h = s.filter
          , l = s.slice
          , c = s.map
          , f = function() {}
        .constructor
          , p = f ? f.prototype : null
          , d = "__proto__"
          , v = 2311;
        function y() {
            return v++
        }
        function g() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            "undefined" !== typeof console && console.error.apply(console, t)
        }
        function _(t) {
            if (null == t || "object" !== typeof t)
                return t;
            var e = t
              , r = o.call(t);
            if ("[object Array]" === r) {
                if (!at(t)) {
                    e = [];
                    for (var n = 0, s = t.length; n < s; n++)
                        e[n] = _(t[n])
                }
            } else if (a[r]) {
                if (!at(t)) {
                    var u = t.constructor;
                    if (u.from)
                        e = u.from(t);
                    else {
                        e = new u(t.length);
                        for (n = 0,
                        s = t.length; n < s; n++)
                            e[n] = t[n]
                    }
                }
            } else if (!i[r] && !at(t) && !Y(t))
                for (var h in e = {},
                t)
                    t.hasOwnProperty(h) && h !== d && (e[h] = _(t[h]));
            return e
        }
        function b(t, e, r) {
            if (!W(e) || !W(t))
                return r ? _(e) : t;
            for (var n in e)
                if (e.hasOwnProperty(n) && n !== d) {
                    var i = t[n]
                      , a = e[n];
                    !W(a) || !W(i) || F(a) || F(i) || Y(a) || Y(i) || q(a) || q(i) || at(a) || at(i) ? !r && n in t || (t[n] = _(e[n])) : b(i, a, r)
                }
            return t
        }
        function m(t, e) {
            for (var r = t[0], n = 1, i = t.length; n < i; n++)
                r = b(r, t[n], e);
            return r
        }
        function x(t, e) {
            if (Object.assign)
                Object.assign(t, e);
            else
                for (var r in e)
                    e.hasOwnProperty(r) && r !== d && (t[r] = e[r]);
            return t
        }
        function w(t, e, r) {
            for (var n = D(e), i = 0; i < n.length; i++) {
                var a = n[i];
                (r ? null != e[a] : null == t[a]) && (t[a] = e[a])
            }
            return t
        }
        var O = n["d"].createCanvas;
        function k(t, e) {
            if (t) {
                if (t.indexOf)
                    return t.indexOf(e);
                for (var r = 0, n = t.length; r < n; r++)
                    if (t[r] === e)
                        return r
            }
            return -1
        }
        function j(t, e) {
            var r = t.prototype;
            function n() {}
            for (var i in n.prototype = e.prototype,
            t.prototype = new n,
            r)
                r.hasOwnProperty(i) && (t.prototype[i] = r[i]);
            t.prototype.constructor = t,
            t.superClass = e
        }
        function S(t, e, r) {
            if (t = "prototype"in t ? t.prototype : t,
            e = "prototype"in e ? e.prototype : e,
            Object.getOwnPropertyNames)
                for (var n = Object.getOwnPropertyNames(e), i = 0; i < n.length; i++) {
                    var a = n[i];
                    "constructor" !== a && (r ? null != e[a] : null == t[a]) && (t[a] = e[a])
                }
            else
                w(t, e, r)
        }
        function T(t) {
            return !!t && ("string" !== typeof t && "number" === typeof t.length)
        }
        function C(t, e, r) {
            if (t && e)
                if (t.forEach && t.forEach === u)
                    t.forEach(e, r);
                else if (t.length === +t.length)
                    for (var n = 0, i = t.length; n < i; n++)
                        e.call(r, t[n], n, t);
                else
                    for (var a in t)
                        t.hasOwnProperty(a) && e.call(r, t[a], a, t)
        }
        function P(t, e, r) {
            if (!t)
                return [];
            if (!e)
                return J(t);
            if (t.map && t.map === c)
                return t.map(e, r);
            for (var n = [], i = 0, a = t.length; i < a; i++)
                n.push(e.call(r, t[i], i, t));
            return n
        }
        function M(t, e, r, n) {
            if (t && e) {
                for (var i = 0, a = t.length; i < a; i++)
                    r = e.call(n, r, t[i], i, t);
                return r
            }
        }
        function A(t, e, r) {
            if (!t)
                return [];
            if (!e)
                return J(t);
            if (t.filter && t.filter === h)
                return t.filter(e, r);
            for (var n = [], i = 0, a = t.length; i < a; i++)
                e.call(r, t[i], i, t) && n.push(t[i]);
            return n
        }
        function L(t, e, r) {
            if (t && e)
                for (var n = 0, i = t.length; n < i; n++)
                    if (e.call(r, t[n], n, t))
                        return t[n]
        }
        function D(t) {
            if (!t)
                return [];
            if (Object.keys)
                return Object.keys(t);
            var e = [];
            for (var r in t)
                t.hasOwnProperty(r) && e.push(r);
            return e
        }
        function z(t, e) {
            for (var r = [], n = 2; n < arguments.length; n++)
                r[n - 2] = arguments[n];
            return function() {
                return t.apply(e, r.concat(l.call(arguments)))
            }
        }
        var I = p && B(p.bind) ? p.call.bind(p.bind) : z;
        function R(t) {
            for (var e = [], r = 1; r < arguments.length; r++)
                e[r - 1] = arguments[r];
            return function() {
                return t.apply(this, e.concat(l.call(arguments)))
            }
        }
        function F(t) {
            return Array.isArray ? Array.isArray(t) : "[object Array]" === o.call(t)
        }
        function B(t) {
            return "function" === typeof t
        }
        function N(t) {
            return "string" === typeof t
        }
        function H(t) {
            return "[object String]" === o.call(t)
        }
        function E(t) {
            return "number" === typeof t
        }
        function W(t) {
            var e = typeof t;
            return "function" === e || !!t && "object" === e
        }
        function q(t) {
            return !!i[o.call(t)]
        }
        function X(t) {
            return !!a[o.call(t)]
        }
        function Y(t) {
            return "object" === typeof t && "number" === typeof t.nodeType && "object" === typeof t.ownerDocument
        }
        function V(t) {
            return null != t.colorStops
        }
        function U(t) {
            return null != t.image
        }
        function G(t) {
            return "[object RegExp]" === o.call(t)
        }
        function Z(t) {
            return t !== t
        }
        function K() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            for (var r = 0, n = t.length; r < n; r++)
                if (null != t[r])
                    return t[r]
        }
        function Q(t, e) {
            return null != t ? t : e
        }
        function $(t, e, r) {
            return null != t ? t : null != e ? e : r
        }
        function J(t) {
            for (var e = [], r = 1; r < arguments.length; r++)
                e[r - 1] = arguments[r];
            return l.apply(t, e)
        }
        function tt(t) {
            if ("number" === typeof t)
                return [t, t, t, t];
            var e = t.length;
            return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
        }
        function et(t, e) {
            if (!t)
                throw new Error(e)
        }
        function rt(t) {
            return null == t ? null : "function" === typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        }
        var nt = "__ec_primitive__";
        function it(t) {
            t[nt] = !0
        }
        function at(t) {
            return t[nt]
        }
        var ot = function() {
            function t(e) {
                this.data = {};
                var r = F(e);
                this.data = {};
                var n = this;
                function i(t, e) {
                    r ? n.set(t, e) : n.set(e, t)
                }
                e instanceof t ? e.each(i) : e && C(e, i)
            }
            return t.prototype.get = function(t) {
                return this.data.hasOwnProperty(t) ? this.data[t] : null
            }
            ,
            t.prototype.set = function(t, e) {
                return this.data[t] = e
            }
            ,
            t.prototype.each = function(t, e) {
                for (var r in this.data)
                    this.data.hasOwnProperty(r) && t.call(e, this.data[r], r)
            }
            ,
            t.prototype.keys = function() {
                return D(this.data)
            }
            ,
            t.prototype.removeKey = function(t) {
                delete this.data[t]
            }
            ,
            t
        }();
        function st(t) {
            return new ot(t)
        }
        function ut(t, e) {
            for (var r = new t.constructor(t.length + e.length), n = 0; n < t.length; n++)
                r[n] = t[n];
            var i = t.length;
            for (n = 0; n < e.length; n++)
                r[n + i] = e[n];
            return r
        }
        function ht(t, e) {
            var r;
            if (Object.create)
                r = Object.create(t);
            else {
                var n = function() {};
                n.prototype = t,
                r = new n
            }
            return e && x(r, e),
            r
        }
        function lt(t) {
            var e = t.style;
            e.webkitUserSelect = "none",
            e.userSelect = "none",
            e.webkitTapHighlightColor = "rgba(0,0,0,0)",
            e["-webkit-touch-callout"] = "none"
        }
        function ct(t, e) {
            return t.hasOwnProperty(e)
        }
        function ft() {}
        var pt = 180 / Math.PI
    },
    "6fd3": function(t, e, r) {
        "use strict";
        var n = function() {
            function t(t) {
                t && (this._$eventProcessor = t)
            }
            return t.prototype.on = function(t, e, r, n) {
                this._$handlers || (this._$handlers = {});
                var i = this._$handlers;
                if ("function" === typeof e && (n = r,
                r = e,
                e = null),
                !r || !t)
                    return this;
                var a = this._$eventProcessor;
                null != e && a && a.normalizeQuery && (e = a.normalizeQuery(e)),
                i[t] || (i[t] = []);
                for (var o = 0; o < i[t].length; o++)
                    if (i[t][o].h === r)
                        return this;
                var s = {
                    h: r,
                    query: e,
                    ctx: n || this,
                    callAtLast: r.zrEventfulCallAtLast
                }
                  , u = i[t].length - 1
                  , h = i[t][u];
                return h && h.callAtLast ? i[t].splice(u, 0, s) : i[t].push(s),
                this
            }
            ,
            t.prototype.isSilent = function(t) {
                var e = this._$handlers;
                return !e || !e[t] || !e[t].length
            }
            ,
            t.prototype.off = function(t, e) {
                var r = this._$handlers;
                if (!r)
                    return this;
                if (!t)
                    return this._$handlers = {},
                    this;
                if (e) {
                    if (r[t]) {
                        for (var n = [], i = 0, a = r[t].length; i < a; i++)
                            r[t][i].h !== e && n.push(r[t][i]);
                        r[t] = n
                    }
                    r[t] && 0 === r[t].length && delete r[t]
                } else
                    delete r[t];
                return this
            }
            ,
            t.prototype.trigger = function(t) {
                for (var e = [], r = 1; r < arguments.length; r++)
                    e[r - 1] = arguments[r];
                if (!this._$handlers)
                    return this;
                var n = this._$handlers[t]
                  , i = this._$eventProcessor;
                if (n)
                    for (var a = e.length, o = n.length, s = 0; s < o; s++) {
                        var u = n[s];
                        if (!i || !i.filter || null == u.query || i.filter(t, u.query))
                            switch (a) {
                            case 0:
                                u.h.call(u.ctx);
                                break;
                            case 1:
                                u.h.call(u.ctx, e[0]);
                                break;
                            case 2:
                                u.h.call(u.ctx, e[0], e[1]);
                                break;
                            default:
                                u.h.apply(u.ctx, e);
                                break
                            }
                    }
                return i && i.afterTrigger && i.afterTrigger(t),
                this
            }
            ,
            t.prototype.triggerWithContext = function(t) {
                for (var e = [], r = 1; r < arguments.length; r++)
                    e[r - 1] = arguments[r];
                if (!this._$handlers)
                    return this;
                var n = this._$handlers[t]
                  , i = this._$eventProcessor;
                if (n)
                    for (var a = e.length, o = e[a - 1], s = n.length, u = 0; u < s; u++) {
                        var h = n[u];
                        if (!i || !i.filter || null == h.query || i.filter(t, h.query))
                            switch (a) {
                            case 0:
                                h.h.call(o);
                                break;
                            case 1:
                                h.h.call(o, e[0]);
                                break;
                            case 2:
                                h.h.call(o, e[0], e[1]);
                                break;
                            default:
                                h.h.apply(o, e.slice(1, a - 1));
                                break
                            }
                    }
                return i && i.afterTrigger && i.afterTrigger(t),
                this
            }
            ,
            t
        }();
        e["a"] = n
    },
    "726e": function(t, e, r) {
        "use strict";
        r.d(e, "c", (function() {
            return n
        }
        )),
        r.d(e, "b", (function() {
            return i
        }
        )),
        r.d(e, "a", (function() {
            return a
        }
        )),
        r.d(e, "d", (function() {
            return c
        }
        )),
        r.d(e, "e", (function() {
            return f
        }
        ));
        var n = 12
          , i = "sans-serif"
          , a = n + "px " + i
          , o = 20
          , s = 100
          , u = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";
        function h(t) {
            var e = {};
            if ("undefined" === typeof JSON)
                return e;
            for (var r = 0; r < t.length; r++) {
                var n = String.fromCharCode(r + 32)
                  , i = (t.charCodeAt(r) - o) / s;
                e[n] = i
            }
            return e
        }
        var l = h(u)
          , c = {
            createCanvas: function() {
                return "undefined" !== typeof document && document.createElement("canvas")
            },
            measureText: function() {
                var t, e;
                return function(r, i) {
                    if (!t) {
                        var o = c.createCanvas();
                        t = o && o.getContext("2d")
                    }
                    if (t)
                        return e !== i && (e = t.font = i || a),
                        t.measureText(r);
                    r = r || "",
                    i = i || a;
                    var s = /^([0-9]*?)px$/.exec(i)
                      , u = +(s && s[1]) || n
                      , h = 0;
                    if (i.indexOf("mono") >= 0)
                        h = u * r.length;
                    else
                        for (var f = 0; f < r.length; f++) {
                            var p = l[r[f]];
                            h += null == p ? u : p * u
                        }
                    return {
                        width: h
                    }
                }
            }(),
            loadImage: function(t, e, r) {
                var n = new Image;
                return n.onload = e,
                n.onerror = r,
                n.src = t,
                n
            }
        };
        function f(t) {
            for (var e in c)
                t[e] && (c[e] = t[e])
        }
    },
    "76a5": function(t, e, r) {
        "use strict";
        r.d(e, "c", (function() {
            return m
        }
        )),
        r.d(e, "b", (function() {
            return w
        }
        ));
        var n = r("21a10")
          , i = r("d409")
          , a = r("dd4f")
          , o = r("6d8b")
          , s = r("e86a")
          , u = r("0da8")
          , h = r("c7a2")
          , l = r("9850")
          , c = r("19eb")
          , f = r("726e")
          , p = {
            fill: "#000"
        }
          , d = 2
          , v = {
            style: Object(o["defaults"])({
                fill: !0,
                stroke: !0,
                fillOpacity: !0,
                strokeOpacity: !0,
                lineWidth: !0,
                fontSize: !0,
                lineHeight: !0,
                width: !0,
                height: !0,
                textShadowColor: !0,
                textShadowBlur: !0,
                textShadowOffsetX: !0,
                textShadowOffsetY: !0,
                backgroundColor: !0,
                padding: !0,
                borderColor: !0,
                borderWidth: !0,
                borderRadius: !0
            }, c["a"].style)
        }
          , y = function(t) {
            function e(e) {
                var r = t.call(this) || this;
                return r.type = "text",
                r._children = [],
                r._defaultStyle = p,
                r.attr(e),
                r
            }
            return Object(n["a"])(e, t),
            e.prototype.childrenRef = function() {
                return this._children
            }
            ,
            e.prototype.update = function() {
                t.prototype.update.call(this),
                this.styleChanged() && this._updateSubTexts();
                for (var e = 0; e < this._children.length; e++) {
                    var r = this._children[e];
                    r.zlevel = this.zlevel,
                    r.z = this.z,
                    r.z2 = this.z2,
                    r.culling = this.culling,
                    r.cursor = this.cursor,
                    r.invisible = this.invisible
                }
            }
            ,
            e.prototype.updateTransform = function() {
                var e = this.innerTransformable;
                e ? (e.updateTransform(),
                e.transform && (this.transform = e.transform)) : t.prototype.updateTransform.call(this)
            }
            ,
            e.prototype.getLocalTransform = function(e) {
                var r = this.innerTransformable;
                return r ? r.getLocalTransform(e) : t.prototype.getLocalTransform.call(this, e)
            }
            ,
            e.prototype.getComputedTransform = function() {
                return this.__hostTarget && (this.__hostTarget.getComputedTransform(),
                this.__hostTarget.updateInnerText(!0)),
                t.prototype.getComputedTransform.call(this)
            }
            ,
            e.prototype._updateSubTexts = function() {
                this._childCursor = 0,
                O(this.style),
                this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(),
                this._children.length = this._childCursor,
                this.styleUpdated()
            }
            ,
            e.prototype.addSelfToZr = function(e) {
                t.prototype.addSelfToZr.call(this, e);
                for (var r = 0; r < this._children.length; r++)
                    this._children[r].__zr = e
            }
            ,
            e.prototype.removeSelfFromZr = function(e) {
                t.prototype.removeSelfFromZr.call(this, e);
                for (var r = 0; r < this._children.length; r++)
                    this._children[r].__zr = null
            }
            ,
            e.prototype.getBoundingRect = function() {
                if (this.styleChanged() && this._updateSubTexts(),
                !this._rect) {
                    for (var t = new l["a"](0,0,0,0), e = this._children, r = [], n = null, i = 0; i < e.length; i++) {
                        var a = e[i]
                          , o = a.getBoundingRect()
                          , s = a.getLocalTransform(r);
                        s ? (t.copy(o),
                        t.applyTransform(s),
                        n = n || t.clone(),
                        n.union(t)) : (n = n || o.clone(),
                        n.union(o))
                    }
                    this._rect = n || t
                }
                return this._rect
            }
            ,
            e.prototype.setDefaultTextStyle = function(t) {
                this._defaultStyle = t || p
            }
            ,
            e.prototype.setTextContent = function(t) {
                0
            }
            ,
            e.prototype._mergeStyle = function(t, e) {
                if (!e)
                    return t;
                var r = e.rich
                  , n = t.rich || r && {};
                return Object(o["extend"])(t, e),
                r && n ? (this._mergeRich(n, r),
                t.rich = n) : n && (t.rich = n),
                t
            }
            ,
            e.prototype._mergeRich = function(t, e) {
                for (var r = Object(o["keys"])(e), n = 0; n < r.length; n++) {
                    var i = r[n];
                    t[i] = t[i] || {},
                    Object(o["extend"])(t[i], e[i])
                }
            }
            ,
            e.prototype.getAnimationStyleProps = function() {
                return v
            }
            ,
            e.prototype._getOrCreateChild = function(t) {
                var e = this._children[this._childCursor];
                return e && e instanceof t || (e = new t),
                this._children[this._childCursor++] = e,
                e.__zr = this.__zr,
                e.parent = this,
                e
            }
            ,
            e.prototype._updatePlainTexts = function() {
                var t = this.style
                  , e = t.font || f["a"]
                  , r = t.padding
                  , n = C(t)
                  , o = Object(i["a"])(n, t)
                  , u = P(t)
                  , h = !!t.backgroundColor
                  , c = o.outerHeight
                  , p = o.outerWidth
                  , v = o.contentWidth
                  , y = o.lines
                  , g = o.lineHeight
                  , _ = this._defaultStyle
                  , b = t.x || 0
                  , m = t.y || 0
                  , w = t.align || _.align || "left"
                  , O = t.verticalAlign || _.verticalAlign || "top"
                  , k = b
                  , M = Object(s["b"])(m, o.contentHeight, O);
                if (u || r) {
                    var A = Object(s["a"])(b, p, w)
                      , L = Object(s["b"])(m, c, O);
                    u && this._renderBackground(t, t, A, L, p, c)
                }
                M += g / 2,
                r && (k = T(b, w, r),
                "top" === O ? M += r[0] : "bottom" === O && (M -= r[2]));
                for (var D = 0, z = !1, I = (S("fill"in t ? t.fill : (z = !0,
                _.fill))), R = (j("stroke"in t ? t.stroke : h || _.autoStroke && !z ? null : (D = d,
                _.stroke))), F = t.textShadowBlur > 0, B = null != t.width && ("truncate" === t.overflow || "break" === t.overflow || "breakAll" === t.overflow), N = o.calculatedLineHeight, H = 0; H < y.length; H++) {
                    var E = this._getOrCreateChild(a["a"])
                      , W = E.createStyle();
                    E.useStyle(W),
                    W.text = y[H],
                    W.x = k,
                    W.y = M,
                    w && (W.textAlign = w),
                    W.textBaseline = "middle",
                    W.opacity = t.opacity,
                    W.strokeFirst = !0,
                    F && (W.shadowBlur = t.textShadowBlur || 0,
                    W.shadowColor = t.textShadowColor || "transparent",
                    W.shadowOffsetX = t.textShadowOffsetX || 0,
                    W.shadowOffsetY = t.textShadowOffsetY || 0),
                    W.stroke = R,
                    W.fill = I,
                    R && (W.lineWidth = t.lineWidth || D,
                    W.lineDash = t.lineDash,
                    W.lineDashOffset = t.lineDashOffset || 0),
                    W.font = e,
                    x(W, t),
                    M += g,
                    B && E.setBoundingRect(new l["a"](Object(s["a"])(W.x, t.width, W.textAlign),Object(s["b"])(W.y, N, W.textBaseline),v,N))
                }
            }
            ,
            e.prototype._updateRichTexts = function() {
                var t = this.style
                  , e = C(t)
                  , r = Object(i["b"])(e, t)
                  , n = r.width
                  , a = r.outerWidth
                  , o = r.outerHeight
                  , u = t.padding
                  , h = t.x || 0
                  , l = t.y || 0
                  , c = this._defaultStyle
                  , f = t.align || c.align
                  , p = t.verticalAlign || c.verticalAlign
                  , d = Object(s["a"])(h, a, f)
                  , v = Object(s["b"])(l, o, p)
                  , y = d
                  , g = v;
                u && (y += u[3],
                g += u[0]);
                var _ = y + n;
                P(t) && this._renderBackground(t, t, d, v, a, o);
                for (var b = !!t.backgroundColor, m = 0; m < r.lines.length; m++) {
                    var x = r.lines[m]
                      , w = x.tokens
                      , O = w.length
                      , k = x.lineHeight
                      , j = x.width
                      , S = 0
                      , T = y
                      , M = _
                      , A = O - 1
                      , L = void 0;
                    while (S < O && (L = w[S],
                    !L.align || "left" === L.align))
                        this._placeToken(L, t, k, g, T, "left", b),
                        j -= L.width,
                        T += L.width,
                        S++;
                    while (A >= 0 && (L = w[A],
                    "right" === L.align))
                        this._placeToken(L, t, k, g, M, "right", b),
                        j -= L.width,
                        M -= L.width,
                        A--;
                    T += (n - (T - y) - (_ - M) - j) / 2;
                    while (S <= A)
                        L = w[S],
                        this._placeToken(L, t, k, g, T + L.width / 2, "center", b),
                        T += L.width,
                        S++;
                    g += k
                }
            }
            ,
            e.prototype._placeToken = function(t, e, r, n, i, u, h) {
                var c = e.rich[t.styleName] || {};
                c.text = t.text;
                var p = t.verticalAlign
                  , v = n + r / 2;
                "top" === p ? v = n + t.height / 2 : "bottom" === p && (v = n + r - t.height / 2);
                var y = !t.isLineHolder && P(c);
                y && this._renderBackground(c, e, "right" === u ? i - t.width : "center" === u ? i - t.width / 2 : i, v - t.height / 2, t.width, t.height);
                var g = !!c.backgroundColor
                  , _ = t.textPadding;
                _ && (i = T(i, u, _),
                v -= t.height / 2 - _[0] - t.innerHeight / 2);
                var b = this._getOrCreateChild(a["a"])
                  , m = b.createStyle();
                b.useStyle(m);
                var w = this._defaultStyle
                  , O = !1
                  , k = 0
                  , C = S("fill"in c ? c.fill : "fill"in e ? e.fill : (O = !0,
                w.fill))
                  , M = j("stroke"in c ? c.stroke : "stroke"in e ? e.stroke : g || h || w.autoStroke && !O ? null : (k = d,
                w.stroke))
                  , A = c.textShadowBlur > 0 || e.textShadowBlur > 0;
                m.text = t.text,
                m.x = i,
                m.y = v,
                A && (m.shadowBlur = c.textShadowBlur || e.textShadowBlur || 0,
                m.shadowColor = c.textShadowColor || e.textShadowColor || "transparent",
                m.shadowOffsetX = c.textShadowOffsetX || e.textShadowOffsetX || 0,
                m.shadowOffsetY = c.textShadowOffsetY || e.textShadowOffsetY || 0),
                m.textAlign = u,
                m.textBaseline = "middle",
                m.font = t.font || f["a"],
                m.opacity = Object(o["retrieve3"])(c.opacity, e.opacity, 1),
                x(m, c),
                M && (m.lineWidth = Object(o["retrieve3"])(c.lineWidth, e.lineWidth, k),
                m.lineDash = Object(o["retrieve2"])(c.lineDash, e.lineDash),
                m.lineDashOffset = e.lineDashOffset || 0,
                m.stroke = M),
                C && (m.fill = C);
                var L = t.contentWidth
                  , D = t.contentHeight;
                b.setBoundingRect(new l["a"](Object(s["a"])(m.x, L, m.textAlign),Object(s["b"])(m.y, D, m.textBaseline),L,D))
            }
            ,
            e.prototype._renderBackground = function(t, e, r, n, i, a) {
                var s, l, c = t.backgroundColor, f = t.borderWidth, p = t.borderColor, d = c && c.image, v = c && !d, y = t.borderRadius, g = this;
                if (v || t.lineHeight || f && p) {
                    s = this._getOrCreateChild(h["a"]),
                    s.useStyle(s.createStyle()),
                    s.style.fill = null;
                    var _ = s.shape;
                    _.x = r,
                    _.y = n,
                    _.width = i,
                    _.height = a,
                    _.r = y,
                    s.dirtyShape()
                }
                if (v) {
                    var b = s.style;
                    b.fill = c || null,
                    b.fillOpacity = Object(o["retrieve2"])(t.fillOpacity, 1)
                } else if (d) {
                    l = this._getOrCreateChild(u["a"]),
                    l.onload = function() {
                        g.dirtyStyle()
                    }
                    ;
                    var m = l.style;
                    m.image = c.image,
                    m.x = r,
                    m.y = n,
                    m.width = i,
                    m.height = a
                }
                if (f && p) {
                    b = s.style;
                    b.lineWidth = f,
                    b.stroke = p,
                    b.strokeOpacity = Object(o["retrieve2"])(t.strokeOpacity, 1),
                    b.lineDash = t.borderDash,
                    b.lineDashOffset = t.borderDashOffset || 0,
                    s.strokeContainThreshold = 0,
                    s.hasFill() && s.hasStroke() && (b.strokeFirst = !0,
                    b.lineWidth *= 2)
                }
                var x = (s || l).style;
                x.shadowBlur = t.shadowBlur || 0,
                x.shadowColor = t.shadowColor || "transparent",
                x.shadowOffsetX = t.shadowOffsetX || 0,
                x.shadowOffsetY = t.shadowOffsetY || 0,
                x.opacity = Object(o["retrieve3"])(t.opacity, e.opacity, 1)
            }
            ,
            e.makeFont = function(t) {
                var e = "";
                return w(t) && (e = [t.fontStyle, t.fontWeight, m(t.fontSize), t.fontFamily || "sans-serif"].join(" ")),
                e && Object(o["trim"])(e) || t.textFont || t.font
            }
            ,
            e
        }(c["c"])
          , g = {
            left: !0,
            right: 1,
            center: 1
        }
          , _ = {
            top: 1,
            bottom: 1,
            middle: 1
        }
          , b = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];
        function m(t) {
            return "string" !== typeof t || -1 === t.indexOf("px") && -1 === t.indexOf("rem") && -1 === t.indexOf("em") ? isNaN(+t) ? f["c"] + "px" : t + "px" : t
        }
        function x(t, e) {
            for (var r = 0; r < b.length; r++) {
                var n = b[r]
                  , i = e[n];
                null != i && (t[n] = i)
            }
        }
        function w(t) {
            return null != t.fontSize || t.fontFamily || t.fontWeight
        }
        function O(t) {
            return k(t),
            Object(o["each"])(t.rich, k),
            t
        }
        function k(t) {
            if (t) {
                t.font = y.makeFont(t);
                var e = t.align;
                "middle" === e && (e = "center"),
                t.align = null == e || g[e] ? e : "left";
                var r = t.verticalAlign;
                "center" === r && (r = "middle"),
                t.verticalAlign = null == r || _[r] ? r : "top";
                var n = t.padding;
                n && (t.padding = Object(o["normalizeCssArray"])(t.padding))
            }
        }
        function j(t, e) {
            return null == t || e <= 0 || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
        }
        function S(t) {
            return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
        }
        function T(t, e, r) {
            return "right" === e ? t - r[1] : "center" === e ? t + r[3] / 2 - r[1] / 2 : t + r[3]
        }
        function C(t) {
            var e = t.text;
            return null != e && (e += ""),
            e
        }
        function P(t) {
            return !!(t.backgroundColor || t.lineHeight || t.borderWidth && t.borderColor)
        }
        e["a"] = y
    },
    "7a29": function(t, e, r) {
        "use strict";
        (function(t) {
            r.d(e, "p", (function() {
                return s
            }
            )),
            r.d(e, "j", (function() {
                return h
            }
            )),
            r.d(e, "q", (function() {
                return c
            }
            )),
            r.d(e, "e", (function() {
                return f
            }
            )),
            r.d(e, "a", (function() {
                return p
            }
            )),
            r.d(e, "b", (function() {
                return d
            }
            )),
            r.d(e, "i", (function() {
                return v
            }
            )),
            r.d(e, "h", (function() {
                return y
            }
            )),
            r.d(e, "l", (function() {
                return g
            }
            )),
            r.d(e, "n", (function() {
                return b
            }
            )),
            r.d(e, "m", (function() {
                return m
            }
            )),
            r.d(e, "o", (function() {
                return x
            }
            )),
            r.d(e, "k", (function() {
                return w
            }
            )),
            r.d(e, "d", (function() {
                return O
            }
            )),
            r.d(e, "f", (function() {
                return k
            }
            )),
            r.d(e, "g", (function() {
                return j
            }
            )),
            r.d(e, "c", (function() {
                return S
            }
            ));
            var n = r("6d8b")
              , i = r("41ef")
              , a = r("22d1")
              , o = Math.round;
            function s(t) {
                var e;
                if (t && "transparent" !== t) {
                    if ("string" === typeof t && t.indexOf("rgba") > -1) {
                        var r = Object(i["parse"])(t);
                        r && (t = "rgb(" + r[0] + "," + r[1] + "," + r[2] + ")",
                        e = r[3])
                    }
                } else
                    t = "none";
                return {
                    color: t,
                    opacity: null == e ? 1 : e
                }
            }
            var u = 1e-4;
            function h(t) {
                return t < u && t > -u
            }
            function l(t) {
                return o(1e3 * t) / 1e3
            }
            function c(t) {
                return o(1e4 * t) / 1e4
            }
            function f(t) {
                return "matrix(" + l(t[0]) + "," + l(t[1]) + "," + l(t[2]) + "," + l(t[3]) + "," + c(t[4]) + "," + c(t[5]) + ")"
            }
            var p = {
                left: "start",
                right: "end",
                center: "middle",
                middle: "middle"
            };
            function d(t, e, r) {
                return "top" === r ? t += e / 2 : "bottom" === r && (t -= e / 2),
                t
            }
            function v(t) {
                return t && (t.shadowBlur || t.shadowOffsetX || t.shadowOffsetY)
            }
            function y(t) {
                var e = t.style
                  , r = t.getGlobalScale();
                return [e.shadowColor, (e.shadowBlur || 0).toFixed(2), (e.shadowOffsetX || 0).toFixed(2), (e.shadowOffsetY || 0).toFixed(2), r[0], r[1]].join(",")
            }
            function g(t) {
                return t && !!t.image
            }
            function _(t) {
                return t && !!t.svgElement
            }
            function b(t) {
                return g(t) || _(t)
            }
            function m(t) {
                return "linear" === t.type
            }
            function x(t) {
                return "radial" === t.type
            }
            function w(t) {
                return t && ("linear" === t.type || "radial" === t.type)
            }
            function O(t) {
                return "url(#" + t + ")"
            }
            function k(t) {
                var e = t.getGlobalScale()
                  , r = Math.max(e[0], e[1]);
                return Math.max(Math.ceil(Math.log(r) / Math.log(10)), 1)
            }
            function j(t) {
                var e = t.x || 0
                  , r = t.y || 0
                  , i = (t.rotation || 0) * n["RADIAN_TO_DEGREE"]
                  , a = Object(n["retrieve2"])(t.scaleX, 1)
                  , s = Object(n["retrieve2"])(t.scaleY, 1)
                  , u = t.skewX || 0
                  , h = t.skewY || 0
                  , l = [];
                return (e || r) && l.push("translate(" + e + "px," + r + "px)"),
                i && l.push("rotate(" + i + ")"),
                1 === a && 1 === s || l.push("scale(" + a + "," + s + ")"),
                (u || h) && l.push("skew(" + o(u * n["RADIAN_TO_DEGREE"]) + "deg, " + o(h * n["RADIAN_TO_DEGREE"]) + "deg)"),
                l.join(" ")
            }
            var S = function() {
                return a["a"].hasGlobalWindow && Object(n["isFunction"])(window.btoa) ? function(t) {
                    return window.btoa(unescape(t))
                }
                : "undefined" !== typeof t ? function(e) {
                    return t.from(e).toString("base64")
                }
                : function(t) {
                    return null
                }
            }()
        }
        ).call(this, r("b639").Buffer)
    },
    "857d": function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return i
        }
        ));
        var n = 2 * Math.PI;
        function i(t) {
            return t %= n,
            t < 0 && (t += n),
            t
        }
    },
    8582: function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return p
        }
        )),
        r.d(e, "b", (function() {
            return d
        }
        ));
        var n = r("1687")
          , i = r("401b")
          , a = n["identity"]
          , o = 5e-5;
        function s(t) {
            return t > o || t < -o
        }
        var u = []
          , h = []
          , l = n["create"]()
          , c = Math.abs
          , f = function() {
            function t() {}
            return t.prototype.getLocalTransform = function(e) {
                return t.getLocalTransform(this, e)
            }
            ,
            t.prototype.setPosition = function(t) {
                this.x = t[0],
                this.y = t[1]
            }
            ,
            t.prototype.setScale = function(t) {
                this.scaleX = t[0],
                this.scaleY = t[1]
            }
            ,
            t.prototype.setSkew = function(t) {
                this.skewX = t[0],
                this.skewY = t[1]
            }
            ,
            t.prototype.setOrigin = function(t) {
                this.originX = t[0],
                this.originY = t[1]
            }
            ,
            t.prototype.needLocalTransform = function() {
                return s(this.rotation) || s(this.x) || s(this.y) || s(this.scaleX - 1) || s(this.scaleY - 1) || s(this.skewX) || s(this.skewY)
            }
            ,
            t.prototype.updateTransform = function() {
                var t = this.parent && this.parent.transform
                  , e = this.needLocalTransform()
                  , r = this.transform;
                e || t ? (r = r || n["create"](),
                e ? this.getLocalTransform(r) : a(r),
                t && (e ? n["mul"](r, t, r) : n["copy"](r, t)),
                this.transform = r,
                this._resolveGlobalScaleRatio(r)) : r && a(r)
            }
            ,
            t.prototype._resolveGlobalScaleRatio = function(t) {
                var e = this.globalScaleRatio;
                if (null != e && 1 !== e) {
                    this.getGlobalScale(u);
                    var r = u[0] < 0 ? -1 : 1
                      , i = u[1] < 0 ? -1 : 1
                      , a = ((u[0] - r) * e + r) / u[0] || 0
                      , o = ((u[1] - i) * e + i) / u[1] || 0;
                    t[0] *= a,
                    t[1] *= a,
                    t[2] *= o,
                    t[3] *= o
                }
                this.invTransform = this.invTransform || n["create"](),
                n["invert"](this.invTransform, t)
            }
            ,
            t.prototype.getComputedTransform = function() {
                var t = this
                  , e = [];
                while (t)
                    e.push(t),
                    t = t.parent;
                while (t = e.pop())
                    t.updateTransform();
                return this.transform
            }
            ,
            t.prototype.setLocalTransform = function(t) {
                if (t) {
                    var e = t[0] * t[0] + t[1] * t[1]
                      , r = t[2] * t[2] + t[3] * t[3]
                      , n = Math.atan2(t[1], t[0])
                      , i = Math.PI / 2 + n - Math.atan2(t[3], t[2]);
                    r = Math.sqrt(r) * Math.cos(i),
                    e = Math.sqrt(e),
                    this.skewX = i,
                    this.skewY = 0,
                    this.rotation = -n,
                    this.x = +t[4],
                    this.y = +t[5],
                    this.scaleX = e,
                    this.scaleY = r,
                    this.originX = 0,
                    this.originY = 0
                }
            }
            ,
            t.prototype.decomposeTransform = function() {
                if (this.transform) {
                    var t = this.parent
                      , e = this.transform;
                    t && t.transform && (n["mul"](h, t.invTransform, e),
                    e = h);
                    var r = this.originX
                      , i = this.originY;
                    (r || i) && (l[4] = r,
                    l[5] = i,
                    n["mul"](h, e, l),
                    h[4] -= r,
                    h[5] -= i,
                    e = h),
                    this.setLocalTransform(e)
                }
            }
            ,
            t.prototype.getGlobalScale = function(t) {
                var e = this.transform;
                return t = t || [],
                e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]),
                t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]),
                e[0] < 0 && (t[0] = -t[0]),
                e[3] < 0 && (t[1] = -t[1]),
                t) : (t[0] = 1,
                t[1] = 1,
                t)
            }
            ,
            t.prototype.transformCoordToLocal = function(t, e) {
                var r = [t, e]
                  , n = this.invTransform;
                return n && i["applyTransform"](r, r, n),
                r
            }
            ,
            t.prototype.transformCoordToGlobal = function(t, e) {
                var r = [t, e]
                  , n = this.transform;
                return n && i["applyTransform"](r, r, n),
                r
            }
            ,
            t.prototype.getLineScale = function() {
                var t = this.transform;
                return t && c(t[0] - 1) > 1e-10 && c(t[3] - 1) > 1e-10 ? Math.sqrt(c(t[0] * t[3] - t[2] * t[1])) : 1
            }
            ,
            t.prototype.copyTransform = function(t) {
                d(this, t)
            }
            ,
            t.getLocalTransform = function(t, e) {
                e = e || [];
                var r = t.originX || 0
                  , i = t.originY || 0
                  , a = t.scaleX
                  , o = t.scaleY
                  , s = t.anchorX
                  , u = t.anchorY
                  , h = t.rotation || 0
                  , l = t.x
                  , c = t.y
                  , f = t.skewX ? Math.tan(t.skewX) : 0
                  , p = t.skewY ? Math.tan(-t.skewY) : 0;
                if (r || i || s || u) {
                    var d = r + s
                      , v = i + u;
                    e[4] = -d * a - f * v * o,
                    e[5] = -v * o - p * d * a
                } else
                    e[4] = e[5] = 0;
                return e[0] = a,
                e[3] = o,
                e[1] = p * a,
                e[2] = f * o,
                h && n["rotate"](e, e, h),
                e[4] += r + l,
                e[5] += i + c,
                e
            }
            ,
            t.initDefaultProps = function() {
                var e = t.prototype;
                e.scaleX = e.scaleY = e.globalScaleRatio = 1,
                e.x = e.y = e.originX = e.originY = e.skewX = e.skewY = e.rotation = e.anchorX = e.anchorY = 0
            }(),
            t
        }()
          , p = ["x", "y", "originX", "originY", "anchorX", "anchorY", "rotation", "scaleX", "scaleY", "skewX", "skewY"];
        function d(t, e) {
            for (var r = 0; r < p.length; r++) {
                var n = p[r];
                t[n] = e[n]
            }
        }
        e["c"] = f
    },
    8728: function(t, e, r) {
        "use strict";
        function n(t, e, r, n, i, a) {
            if (a > e && a > n || a < e && a < n)
                return 0;
            if (n === e)
                return 0;
            var o = (a - e) / (n - e)
              , s = n < e ? 1 : -1;
            1 !== o && 0 !== o || (s = n < e ? .5 : -.5);
            var u = o * (r - t) + t;
            return u === i ? 1 / 0 : u > i ? s : 0
        }
        r.d(e, "a", (function() {
            return n
        }
        ))
    },
    "87b1": function(t, e, r) {
        "use strict";
        var n = r("21a10")
          , i = r("cbe5")
          , a = r("4fac")
          , o = function() {
            function t() {
                this.points = null,
                this.smooth = 0,
                this.smoothConstraint = null
            }
            return t
        }()
          , s = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return Object(n["a"])(e, t),
            e.prototype.getDefaultShape = function() {
                return new o
            }
            ,
            e.prototype.buildPath = function(t, e) {
                a["a"](t, e, !0)
            }
            ,
            e
        }(i["b"]);
        s.prototype.type = "polygon",
        e["a"] = s
    },
    "8d1d": function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return a
        }
        ));
        var n = r("6d8b");
        function i(t, e) {
            return t && "solid" !== t && e > 0 ? "dashed" === t ? [4 * e, 2 * e] : "dotted" === t ? [e] : Object(n["isNumber"])(t) ? [t] : Object(n["isArray"])(t) ? t : null : null
        }
        function a(t) {
            var e = t.style
              , r = e.lineDash && e.lineWidth > 0 && i(e.lineDash, e.lineWidth)
              , a = e.lineDashOffset;
            if (r) {
                var o = e.strokeNoScale && t.getLineScale ? t.getLineScale() : 1;
                o && 1 !== o && (r = Object(n["map"])(r, (function(t) {
                    return t / o
                }
                )),
                a /= o)
            }
            return [r, a]
        }
    },
    "8d32": function(t, e, r) {
        "use strict";
        var n = r("21a10")
          , i = r("cbe5")
          , a = function() {
            function t() {
                this.cx = 0,
                this.cy = 0,
                this.r = 0,
                this.startAngle = 0,
                this.endAngle = 2 * Math.PI,
                this.clockwise = !0
            }
            return t
        }()
          , o = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return Object(n["a"])(e, t),
            e.prototype.getDefaultStyle = function() {
                return {
                    stroke: "#000",
                    fill: null
                }
            }
            ,
            e.prototype.getDefaultShape = function() {
                return new a
            }
            ,
            e.prototype.buildPath = function(t, e) {
                var r = e.cx
                  , n = e.cy
                  , i = Math.max(e.r, 0)
                  , a = e.startAngle
                  , o = e.endAngle
                  , s = e.clockwise
                  , u = Math.cos(a)
                  , h = Math.sin(a);
                t.moveTo(u * i + r, h * i + n),
                t.arc(r, n, i, a, o, !s)
            }
            ,
            e
        }(i["b"]);
        o.prototype.type = "arc",
        e["a"] = o
    },
    9680: function(t, e, r) {
        "use strict";
        function n(t, e, r, n, i, a, o) {
            if (0 === i)
                return !1;
            var s = i
              , u = 0
              , h = t;
            if (o > e + s && o > n + s || o < e - s && o < n - s || a > t + s && a > r + s || a < t - s && a < r - s)
                return !1;
            if (t === r)
                return Math.abs(a - t) <= s / 2;
            u = (e - n) / (t - r),
            h = (t * n - r * e) / (t - r);
            var l = u * a - o + h
              , c = l * l / (u * u + 1);
            return c <= s / 2 * s / 2
        }
        r.d(e, "a", (function() {
            return n
        }
        ))
    },
    9850: function(t, e, r) {
        "use strict";
        var n = r("1687")
          , i = r("dce8")
          , a = Math.min
          , o = Math.max
          , s = new i["a"]
          , u = new i["a"]
          , h = new i["a"]
          , l = new i["a"]
          , c = new i["a"]
          , f = new i["a"]
          , p = function() {
            function t(t, e, r, n) {
                r < 0 && (t += r,
                r = -r),
                n < 0 && (e += n,
                n = -n),
                this.x = t,
                this.y = e,
                this.width = r,
                this.height = n
            }
            return t.prototype.union = function(t) {
                var e = a(t.x, this.x)
                  , r = a(t.y, this.y);
                isFinite(this.x) && isFinite(this.width) ? this.width = o(t.x + t.width, this.x + this.width) - e : this.width = t.width,
                isFinite(this.y) && isFinite(this.height) ? this.height = o(t.y + t.height, this.y + this.height) - r : this.height = t.height,
                this.x = e,
                this.y = r
            }
            ,
            t.prototype.applyTransform = function(e) {
                t.applyTransform(this, this, e)
            }
            ,
            t.prototype.calculateTransform = function(t) {
                var e = this
                  , r = t.width / e.width
                  , i = t.height / e.height
                  , a = n["create"]();
                return n["translate"](a, a, [-e.x, -e.y]),
                n["scale"](a, a, [r, i]),
                n["translate"](a, a, [t.x, t.y]),
                a
            }
            ,
            t.prototype.intersect = function(e, r) {
                if (!e)
                    return !1;
                e instanceof t || (e = t.create(e));
                var n = this
                  , a = n.x
                  , o = n.x + n.width
                  , s = n.y
                  , u = n.y + n.height
                  , h = e.x
                  , l = e.x + e.width
                  , p = e.y
                  , d = e.y + e.height
                  , v = !(o < h || l < a || u < p || d < s);
                if (r) {
                    var y = 1 / 0
                      , g = 0
                      , _ = Math.abs(o - h)
                      , b = Math.abs(l - a)
                      , m = Math.abs(u - p)
                      , x = Math.abs(d - s)
                      , w = Math.min(_, b)
                      , O = Math.min(m, x);
                    o < h || l < a ? w > g && (g = w,
                    _ < b ? i["a"].set(f, -_, 0) : i["a"].set(f, b, 0)) : w < y && (y = w,
                    _ < b ? i["a"].set(c, _, 0) : i["a"].set(c, -b, 0)),
                    u < p || d < s ? O > g && (g = O,
                    m < x ? i["a"].set(f, 0, -m) : i["a"].set(f, 0, x)) : w < y && (y = w,
                    m < x ? i["a"].set(c, 0, m) : i["a"].set(c, 0, -x))
                }
                return r && i["a"].copy(r, v ? c : f),
                v
            }
            ,
            t.prototype.contain = function(t, e) {
                var r = this;
                return t >= r.x && t <= r.x + r.width && e >= r.y && e <= r.y + r.height
            }
            ,
            t.prototype.clone = function() {
                return new t(this.x,this.y,this.width,this.height)
            }
            ,
            t.prototype.copy = function(e) {
                t.copy(this, e)
            }
            ,
            t.prototype.plain = function() {
                return {
                    x: this.x,
                    y: this.y,
                    width: this.width,
                    height: this.height
                }
            }
            ,
            t.prototype.isFinite = function() {
                return isFinite(this.x) && isFinite(this.y) && isFinite(this.width) && isFinite(this.height)
            }
            ,
            t.prototype.isZero = function() {
                return 0 === this.width || 0 === this.height
            }
            ,
            t.create = function(e) {
                return new t(e.x,e.y,e.width,e.height)
            }
            ,
            t.copy = function(t, e) {
                t.x = e.x,
                t.y = e.y,
                t.width = e.width,
                t.height = e.height
            }
            ,
            t.applyTransform = function(e, r, n) {
                if (n) {
                    if (n[1] < 1e-5 && n[1] > -1e-5 && n[2] < 1e-5 && n[2] > -1e-5) {
                        var i = n[0]
                          , c = n[3]
                          , f = n[4]
                          , p = n[5];
                        return e.x = r.x * i + f,
                        e.y = r.y * c + p,
                        e.width = r.width * i,
                        e.height = r.height * c,
                        e.width < 0 && (e.x += e.width,
                        e.width = -e.width),
                        void (e.height < 0 && (e.y += e.height,
                        e.height = -e.height))
                    }
                    s.x = h.x = r.x,
                    s.y = l.y = r.y,
                    u.x = l.x = r.x + r.width,
                    u.y = h.y = r.y + r.height,
                    s.transform(n),
                    l.transform(n),
                    u.transform(n),
                    h.transform(n),
                    e.x = a(s.x, u.x, h.x, l.x),
                    e.y = a(s.y, u.y, h.y, l.y);
                    var d = o(s.x, u.x, h.x, l.x)
                      , v = o(s.y, u.y, h.y, l.y);
                    e.width = d - e.x,
                    e.height = v - e.y
                } else
                    e !== r && t.copy(e, r)
            }
            ,
            t
        }();
        e["a"] = p
    },
    "98b7": function(t, e, r) {
        "use strict";
        var n, i = r("22d1");
        n = i["a"].hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(t) {
            return setTimeout(t, 16)
        }
        ,
        e["a"] = n
    },
    "9cf9": function(t, e, r) {
        "use strict";
        r.d(e, "b", (function() {
            return i
        }
        )),
        r.d(e, "c", (function() {
            return a
        }
        )),
        r.d(e, "a", (function() {
            return o
        }
        ));
        var n = Math.round;
        function i(t, e, r) {
            if (e) {
                var i = e.x1
                  , a = e.x2
                  , s = e.y1
                  , u = e.y2;
                t.x1 = i,
                t.x2 = a,
                t.y1 = s,
                t.y2 = u;
                var h = r && r.lineWidth;
                return h ? (n(2 * i) === n(2 * a) && (t.x1 = t.x2 = o(i, h, !0)),
                n(2 * s) === n(2 * u) && (t.y1 = t.y2 = o(s, h, !0)),
                t) : t
            }
        }
        function a(t, e, r) {
            if (e) {
                var n = e.x
                  , i = e.y
                  , a = e.width
                  , s = e.height;
                t.x = n,
                t.y = i,
                t.width = a,
                t.height = s;
                var u = r && r.lineWidth;
                return u ? (t.x = o(n, u, !0),
                t.y = o(i, u, !0),
                t.width = Math.max(o(n + a, u, !1) - t.x, 0 === a ? 0 : 1),
                t.height = Math.max(o(i + s, u, !1) - t.y, 0 === s ? 0 : 1),
                t) : t
            }
        }
        function o(t, e, r) {
            if (!e)
                return t;
            var i = n(2 * t);
            return (i + n(e)) % 2 === 0 ? i / 2 : (i + (r ? 1 : -1)) / 2
        }
    },
    ac0f: function(t, e, r) {
        "use strict";
        var n = r("21a10")
          , i = r("cbe5")
          , a = r("401b")
          , o = r("4a3f")
          , s = []
          , u = function() {
            function t() {
                this.x1 = 0,
                this.y1 = 0,
                this.x2 = 0,
                this.y2 = 0,
                this.cpx1 = 0,
                this.cpy1 = 0,
                this.percent = 1
            }
            return t
        }();
        function h(t, e, r) {
            var n = t.cpx2
              , i = t.cpy2;
            return null != n || null != i ? [(r ? o["b"] : o["a"])(t.x1, t.cpx1, t.cpx2, t.x2, e), (r ? o["b"] : o["a"])(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(r ? o["i"] : o["h"])(t.x1, t.cpx1, t.x2, e), (r ? o["i"] : o["h"])(t.y1, t.cpy1, t.y2, e)]
        }
        var l = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return Object(n["a"])(e, t),
            e.prototype.getDefaultStyle = function() {
                return {
                    stroke: "#000",
                    fill: null
                }
            }
            ,
            e.prototype.getDefaultShape = function() {
                return new u
            }
            ,
            e.prototype.buildPath = function(t, e) {
                var r = e.x1
                  , n = e.y1
                  , i = e.x2
                  , a = e.y2
                  , u = e.cpx1
                  , h = e.cpy1
                  , l = e.cpx2
                  , c = e.cpy2
                  , f = e.percent;
                0 !== f && (t.moveTo(r, n),
                null == l || null == c ? (f < 1 && (Object(o["n"])(r, u, i, f, s),
                u = s[1],
                i = s[2],
                Object(o["n"])(n, h, a, f, s),
                h = s[1],
                a = s[2]),
                t.quadraticCurveTo(u, h, i, a)) : (f < 1 && (Object(o["g"])(r, u, l, i, f, s),
                u = s[1],
                l = s[2],
                i = s[3],
                Object(o["g"])(n, h, c, a, f, s),
                h = s[1],
                c = s[2],
                a = s[3]),
                t.bezierCurveTo(u, h, l, c, i, a)))
            }
            ,
            e.prototype.pointAt = function(t) {
                return h(this.shape, t, !1)
            }
            ,
            e.prototype.tangentAt = function(t) {
                var e = h(this.shape, t, !0);
                return a["normalize"](e, e)
            }
            ,
            e
        }(i["b"]);
        l.prototype.type = "bezier-curve",
        e["a"] = l
    },
    ae69: function(t, e, r) {
        "use strict";
        var n = r("21a10")
          , i = r("cbe5")
          , a = function() {
            function t() {
                this.cx = 0,
                this.cy = 0,
                this.rx = 0,
                this.ry = 0
            }
            return t
        }()
          , o = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return Object(n["a"])(e, t),
            e.prototype.getDefaultShape = function() {
                return new a
            }
            ,
            e.prototype.buildPath = function(t, e) {
                var r = .5522848
                  , n = e.cx
                  , i = e.cy
                  , a = e.rx
                  , o = e.ry
                  , s = a * r
                  , u = o * r;
                t.moveTo(n - a, i),
                t.bezierCurveTo(n - a, i - u, n - s, i - o, n, i - o),
                t.bezierCurveTo(n + s, i - o, n + a, i - u, n + a, i),
                t.bezierCurveTo(n + a, i + u, n + s, i + o, n, i + o),
                t.bezierCurveTo(n - s, i + o, n - a, i + u, n - a, i),
                t.closePath()
            }
            ,
            e
        }(i["b"]);
        o.prototype.type = "ellipse",
        e["a"] = o
    },
    b362: function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return o
        }
        ));
        var n = r("4a3f")
          , i = r("6d8b")
          , a = /cubic-bezier\(([0-9,\.e ]+)\)/;
        function o(t) {
            var e = t && a.exec(t);
            if (e) {
                var r = e[1].split(",")
                  , o = +Object(i["trim"])(r[0])
                  , s = +Object(i["trim"])(r[1])
                  , u = +Object(i["trim"])(r[2])
                  , h = +Object(i["trim"])(r[3]);
                if (isNaN(o + s + u + h))
                    return;
                var l = [];
                return function(t) {
                    return t <= 0 ? 0 : t >= 1 ? 1 : Object(n["f"])(0, o, u, 1, t, l) && Object(n["a"])(0, s, h, 1, l[0])
                }
            }
        }
    },
    c7a2: function(t, e, r) {
        "use strict";
        var n = r("21a10")
          , i = r("cbe5");
        function a(t, e) {
            var r, n, i, a, o, s = e.x, u = e.y, h = e.width, l = e.height, c = e.r;
            h < 0 && (s += h,
            h = -h),
            l < 0 && (u += l,
            l = -l),
            "number" === typeof c ? r = n = i = a = c : c instanceof Array ? 1 === c.length ? r = n = i = a = c[0] : 2 === c.length ? (r = i = c[0],
            n = a = c[1]) : 3 === c.length ? (r = c[0],
            n = a = c[1],
            i = c[2]) : (r = c[0],
            n = c[1],
            i = c[2],
            a = c[3]) : r = n = i = a = 0,
            r + n > h && (o = r + n,
            r *= h / o,
            n *= h / o),
            i + a > h && (o = i + a,
            i *= h / o,
            a *= h / o),
            n + i > l && (o = n + i,
            n *= l / o,
            i *= l / o),
            r + a > l && (o = r + a,
            r *= l / o,
            a *= l / o),
            t.moveTo(s + r, u),
            t.lineTo(s + h - n, u),
            0 !== n && t.arc(s + h - n, u + n, n, -Math.PI / 2, 0),
            t.lineTo(s + h, u + l - i),
            0 !== i && t.arc(s + h - i, u + l - i, i, 0, Math.PI / 2),
            t.lineTo(s + a, u + l),
            0 !== a && t.arc(s + a, u + l - a, a, Math.PI / 2, Math.PI),
            t.lineTo(s, u + r),
            0 !== r && t.arc(s + r, u + r, r, Math.PI, 1.5 * Math.PI)
        }
        var o = r("9cf9")
          , s = function() {
            function t() {
                this.x = 0,
                this.y = 0,
                this.width = 0,
                this.height = 0
            }
            return t
        }()
          , u = {}
          , h = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return Object(n["a"])(e, t),
            e.prototype.getDefaultShape = function() {
                return new s
            }
            ,
            e.prototype.buildPath = function(t, e) {
                var r, n, i, s;
                if (this.subPixelOptimize) {
                    var h = Object(o["c"])(u, e, this.style);
                    r = h.x,
                    n = h.y,
                    i = h.width,
                    s = h.height,
                    h.r = e.r,
                    e = h
                } else
                    r = e.x,
                    n = e.y,
                    i = e.width,
                    s = e.height;
                e.r ? a(t, e) : t.rect(r, n, i, s)
            }
            ,
            e.prototype.isZeroArea = function() {
                return !this.shape.width || !this.shape.height
            }
            ,
            e
        }(i["b"]);
        h.prototype.type = "rect";
        e["a"] = h
    },
    ca80: function(t, e, r) {
        "use strict";
        var n = r("dce8")
          , i = [0, 0]
          , a = [0, 0]
          , o = new n["a"]
          , s = new n["a"]
          , u = function() {
            function t(t, e) {
                this._corners = [],
                this._axes = [],
                this._origin = [0, 0];
                for (var r = 0; r < 4; r++)
                    this._corners[r] = new n["a"];
                for (r = 0; r < 2; r++)
                    this._axes[r] = new n["a"];
                t && this.fromBoundingRect(t, e)
            }
            return t.prototype.fromBoundingRect = function(t, e) {
                var r = this._corners
                  , i = this._axes
                  , a = t.x
                  , o = t.y
                  , s = a + t.width
                  , u = o + t.height;
                if (r[0].set(a, o),
                r[1].set(s, o),
                r[2].set(s, u),
                r[3].set(a, u),
                e)
                    for (var h = 0; h < 4; h++)
                        r[h].transform(e);
                n["a"].sub(i[0], r[1], r[0]),
                n["a"].sub(i[1], r[3], r[0]),
                i[0].normalize(),
                i[1].normalize();
                for (h = 0; h < 2; h++)
                    this._origin[h] = i[h].dot(r[0])
            }
            ,
            t.prototype.intersect = function(t, e) {
                var r = !0
                  , i = !e;
                return o.set(1 / 0, 1 / 0),
                s.set(0, 0),
                !this._intersectCheckOneSide(this, t, o, s, i, 1) && (r = !1,
                i) || !this._intersectCheckOneSide(t, this, o, s, i, -1) && (r = !1,
                i) || i || n["a"].copy(e, r ? o : s),
                r
            }
            ,
            t.prototype._intersectCheckOneSide = function(t, e, r, o, s, u) {
                for (var h = !0, l = 0; l < 2; l++) {
                    var c = this._axes[l];
                    if (this._getProjMinMaxOnAxis(l, t._corners, i),
                    this._getProjMinMaxOnAxis(l, e._corners, a),
                    i[1] < a[0] || i[0] > a[1]) {
                        if (h = !1,
                        s)
                            return h;
                        var f = Math.abs(a[0] - i[1])
                          , p = Math.abs(i[0] - a[1]);
                        Math.min(f, p) > o.len() && (f < p ? n["a"].scale(o, c, -f * u) : n["a"].scale(o, c, p * u))
                    } else if (r) {
                        f = Math.abs(a[0] - i[1]),
                        p = Math.abs(i[0] - a[1]);
                        Math.min(f, p) < r.len() && (f < p ? n["a"].scale(r, c, f * u) : n["a"].scale(r, c, -p * u))
                    }
                }
                return h
            }
            ,
            t.prototype._getProjMinMaxOnAxis = function(t, e, r) {
                for (var n = this._axes[t], i = this._origin, a = e[0].dot(n) + i[t], o = a, s = a, u = 1; u < e.length; u++) {
                    var h = e[u].dot(n) + i[t];
                    o = Math.min(h, o),
                    s = Math.max(h, s)
                }
                r[0] = o,
                r[1] = s
            }
            ,
            t
        }();
        e["a"] = u
    },
    cb11: function(t, e, r) {
        "use strict";
        var n = r("21a10")
          , i = r("cbe5")
          , a = r("9cf9")
          , o = {}
          , s = function() {
            function t() {
                this.x1 = 0,
                this.y1 = 0,
                this.x2 = 0,
                this.y2 = 0,
                this.percent = 1
            }
            return t
        }()
          , u = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return Object(n["a"])(e, t),
            e.prototype.getDefaultStyle = function() {
                return {
                    stroke: "#000",
                    fill: null
                }
            }
            ,
            e.prototype.getDefaultShape = function() {
                return new s
            }
            ,
            e.prototype.buildPath = function(t, e) {
                var r, n, i, s;
                if (this.subPixelOptimize) {
                    var u = Object(a["b"])(o, e, this.style);
                    r = u.x1,
                    n = u.y1,
                    i = u.x2,
                    s = u.y2
                } else
                    r = e.x1,
                    n = e.y1,
                    i = e.x2,
                    s = e.y2;
                var h = e.percent;
                0 !== h && (t.moveTo(r, n),
                h < 1 && (i = r * (1 - h) + i * h,
                s = n * (1 - h) + s * h),
                t.lineTo(i, s))
            }
            ,
            e.prototype.pointAt = function(t) {
                var e = this.shape;
                return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
            }
            ,
            e
        }(i["b"]);
        u.prototype.type = "line",
        e["a"] = u
    },
    cbe5: function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return L
        }
        ));
        var n = r("21a10")
          , i = r("19eb")
          , a = r("20c8")
          , o = r("9680")
          , s = r("4a3f");
        function u(t, e, r, n, i, a, o, u, h, l, c) {
            if (0 === h)
                return !1;
            var f = h;
            if (c > e + f && c > n + f && c > a + f && c > u + f || c < e - f && c < n - f && c < a - f && c < u - f || l > t + f && l > r + f && l > i + f && l > o + f || l < t - f && l < r - f && l < i - f && l < o - f)
                return !1;
            var p = s["e"](t, e, r, n, i, a, o, u, l, c, null);
            return p <= f / 2
        }
        var h = r("68ab")
          , l = r("857d")
          , c = 2 * Math.PI;
        function f(t, e, r, n, i, a, o, s, u) {
            if (0 === o)
                return !1;
            var h = o;
            s -= t,
            u -= e;
            var f = Math.sqrt(s * s + u * u);
            if (f - h > r || f + h < r)
                return !1;
            if (Math.abs(n - i) % c < 1e-4)
                return !0;
            if (a) {
                var p = n;
                n = Object(l["a"])(i),
                i = Object(l["a"])(p)
            } else
                n = Object(l["a"])(n),
                i = Object(l["a"])(i);
            n > i && (i += c);
            var d = Math.atan2(u, s);
            return d < 0 && (d += c),
            d >= n && d <= i || d + c >= n && d + c <= i
        }
        var p = r("8728")
          , d = a["a"].CMD
          , v = 2 * Math.PI
          , y = 1e-4;
        function g(t, e) {
            return Math.abs(t - e) < y
        }
        var _ = [-1, -1, -1]
          , b = [-1, -1];
        function m() {
            var t = b[0];
            b[0] = b[1],
            b[1] = t
        }
        function x(t, e, r, n, i, a, o, u, h, l) {
            if (l > e && l > n && l > a && l > u || l < e && l < n && l < a && l < u)
                return 0;
            var c = s["f"](e, n, a, u, l, _);
            if (0 === c)
                return 0;
            for (var f = 0, p = -1, d = void 0, v = void 0, y = 0; y < c; y++) {
                var g = _[y]
                  , x = 0 === g || 1 === g ? .5 : 1
                  , w = s["a"](t, r, i, o, g);
                w < h || (p < 0 && (p = s["c"](e, n, a, u, b),
                b[1] < b[0] && p > 1 && m(),
                d = s["a"](e, n, a, u, b[0]),
                p > 1 && (v = s["a"](e, n, a, u, b[1]))),
                2 === p ? g < b[0] ? f += d < e ? x : -x : g < b[1] ? f += v < d ? x : -x : f += u < v ? x : -x : g < b[0] ? f += d < e ? x : -x : f += u < d ? x : -x)
            }
            return f
        }
        function w(t, e, r, n, i, a, o, u) {
            if (u > e && u > n && u > a || u < e && u < n && u < a)
                return 0;
            var h = s["m"](e, n, a, u, _);
            if (0 === h)
                return 0;
            var l = s["j"](e, n, a);
            if (l >= 0 && l <= 1) {
                for (var c = 0, f = s["h"](e, n, a, l), p = 0; p < h; p++) {
                    var d = 0 === _[p] || 1 === _[p] ? .5 : 1
                      , v = s["h"](t, r, i, _[p]);
                    v < o || (_[p] < l ? c += f < e ? d : -d : c += a < f ? d : -d)
                }
                return c
            }
            d = 0 === _[0] || 1 === _[0] ? .5 : 1,
            v = s["h"](t, r, i, _[0]);
            return v < o ? 0 : a < e ? d : -d
        }
        function O(t, e, r, n, i, a, o, s) {
            if (s -= e,
            s > r || s < -r)
                return 0;
            var u = Math.sqrt(r * r - s * s);
            _[0] = -u,
            _[1] = u;
            var h = Math.abs(n - i);
            if (h < 1e-4)
                return 0;
            if (h >= v - 1e-4) {
                n = 0,
                i = v;
                var l = a ? 1 : -1;
                return o >= _[0] + t && o <= _[1] + t ? l : 0
            }
            if (n > i) {
                var c = n;
                n = i,
                i = c
            }
            n < 0 && (n += v,
            i += v);
            for (var f = 0, p = 0; p < 2; p++) {
                var d = _[p];
                if (d + t > o) {
                    var y = Math.atan2(s, d);
                    l = a ? 1 : -1;
                    y < 0 && (y = v + y),
                    (y >= n && y <= i || y + v >= n && y + v <= i) && (y > Math.PI / 2 && y < 1.5 * Math.PI && (l = -l),
                    f += l)
                }
            }
            return f
        }
        function k(t, e, r, n, i) {
            for (var a, s, l = t.data, c = t.len(), v = 0, y = 0, _ = 0, b = 0, m = 0, k = 0; k < c; ) {
                var j = l[k++]
                  , S = 1 === k;
                switch (j === d.M && k > 1 && (r || (v += Object(p["a"])(y, _, b, m, n, i))),
                S && (y = l[k],
                _ = l[k + 1],
                b = y,
                m = _),
                j) {
                case d.M:
                    b = l[k++],
                    m = l[k++],
                    y = b,
                    _ = m;
                    break;
                case d.L:
                    if (r) {
                        if (o["a"](y, _, l[k], l[k + 1], e, n, i))
                            return !0
                    } else
                        v += Object(p["a"])(y, _, l[k], l[k + 1], n, i) || 0;
                    y = l[k++],
                    _ = l[k++];
                    break;
                case d.C:
                    if (r) {
                        if (u(y, _, l[k++], l[k++], l[k++], l[k++], l[k], l[k + 1], e, n, i))
                            return !0
                    } else
                        v += x(y, _, l[k++], l[k++], l[k++], l[k++], l[k], l[k + 1], n, i) || 0;
                    y = l[k++],
                    _ = l[k++];
                    break;
                case d.Q:
                    if (r) {
                        if (h["a"](y, _, l[k++], l[k++], l[k], l[k + 1], e, n, i))
                            return !0
                    } else
                        v += w(y, _, l[k++], l[k++], l[k], l[k + 1], n, i) || 0;
                    y = l[k++],
                    _ = l[k++];
                    break;
                case d.A:
                    var T = l[k++]
                      , C = l[k++]
                      , P = l[k++]
                      , M = l[k++]
                      , A = l[k++]
                      , L = l[k++];
                    k += 1;
                    var D = !!(1 - l[k++]);
                    a = Math.cos(A) * P + T,
                    s = Math.sin(A) * M + C,
                    S ? (b = a,
                    m = s) : v += Object(p["a"])(y, _, a, s, n, i);
                    var z = (n - T) * M / P + T;
                    if (r) {
                        if (f(T, C, M, A, A + L, D, e, z, i))
                            return !0
                    } else
                        v += O(T, C, M, A, A + L, D, z, i);
                    y = Math.cos(A + L) * P + T,
                    _ = Math.sin(A + L) * M + C;
                    break;
                case d.R:
                    b = y = l[k++],
                    m = _ = l[k++];
                    var I = l[k++]
                      , R = l[k++];
                    if (a = b + I,
                    s = m + R,
                    r) {
                        if (o["a"](b, m, a, m, e, n, i) || o["a"](a, m, a, s, e, n, i) || o["a"](a, s, b, s, e, n, i) || o["a"](b, s, b, m, e, n, i))
                            return !0
                    } else
                        v += Object(p["a"])(a, m, a, s, n, i),
                        v += Object(p["a"])(b, s, b, m, n, i);
                    break;
                case d.Z:
                    if (r) {
                        if (o["a"](y, _, b, m, e, n, i))
                            return !0
                    } else
                        v += Object(p["a"])(y, _, b, m, n, i);
                    y = b,
                    _ = m;
                    break
                }
            }
            return r || g(_, m) || (v += Object(p["a"])(y, _, b, m, n, i) || 0),
            0 !== v
        }
        function j(t, e, r) {
            return k(t, 0, !1, e, r)
        }
        function S(t, e, r, n) {
            return k(t, e, !0, r, n)
        }
        var T = r("6d8b")
          , C = r("41ef")
          , P = r("2cf4")
          , M = r("4bc4")
          , A = r("8582")
          , L = Object(T["defaults"])({
            fill: "#000",
            stroke: null,
            strokePercent: 1,
            fillOpacity: 1,
            strokeOpacity: 1,
            lineDashOffset: 0,
            lineWidth: 1,
            lineCap: "butt",
            miterLimit: 10,
            strokeNoScale: !1,
            strokeFirst: !1
        }, i["b"])
          , D = {
            style: Object(T["defaults"])({
                fill: !0,
                stroke: !0,
                strokePercent: !0,
                fillOpacity: !0,
                strokeOpacity: !0,
                lineDashOffset: !0,
                lineWidth: !0,
                miterLimit: !0
            }, i["a"].style)
        }
          , z = A["a"].concat(["invisible", "culling", "z", "z2", "zlevel", "parent"])
          , I = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return Object(n["a"])(e, t),
            e.prototype.update = function() {
                var r = this;
                t.prototype.update.call(this);
                var n = this.style;
                if (n.decal) {
                    var i = this._decalEl = this._decalEl || new e;
                    i.buildPath === e.prototype.buildPath && (i.buildPath = function(t) {
                        r.buildPath(t, r.shape)
                    }
                    ),
                    i.silent = !0;
                    var a = i.style;
                    for (var o in n)
                        a[o] !== n[o] && (a[o] = n[o]);
                    a.fill = n.fill ? n.decal : null,
                    a.decal = null,
                    a.shadowColor = null,
                    n.strokeFirst && (a.stroke = null);
                    for (var s = 0; s < z.length; ++s)
                        i[z[s]] = this[z[s]];
                    i.__dirty |= M["a"]
                } else
                    this._decalEl && (this._decalEl = null)
            }
            ,
            e.prototype.getDecalElement = function() {
                return this._decalEl
            }
            ,
            e.prototype._init = function(e) {
                var r = Object(T["keys"])(e);
                this.shape = this.getDefaultShape();
                var n = this.getDefaultStyle();
                n && this.useStyle(n);
                for (var i = 0; i < r.length; i++) {
                    var a = r[i]
                      , o = e[a];
                    "style" === a ? this.style ? Object(T["extend"])(this.style, o) : this.useStyle(o) : "shape" === a ? Object(T["extend"])(this.shape, o) : t.prototype.attrKV.call(this, a, o)
                }
                this.style || this.useStyle({})
            }
            ,
            e.prototype.getDefaultStyle = function() {
                return null
            }
            ,
            e.prototype.getDefaultShape = function() {
                return {}
            }
            ,
            e.prototype.canBeInsideText = function() {
                return this.hasFill()
            }
            ,
            e.prototype.getInsideTextFill = function() {
                var t = this.style.fill;
                if ("none" !== t) {
                    if (Object(T["isString"])(t)) {
                        var e = Object(C["lum"])(t, 0);
                        return e > .5 ? P["a"] : e > .2 ? P["c"] : P["d"]
                    }
                    if (t)
                        return P["d"]
                }
                return P["a"]
            }
            ,
            e.prototype.getInsideTextStroke = function(t) {
                var e = this.style.fill;
                if (Object(T["isString"])(e)) {
                    var r = this.__zr
                      , n = !(!r || !r.isDarkMode())
                      , i = Object(C["lum"])(t, 0) < P["b"];
                    if (n === i)
                        return e
                }
            }
            ,
            e.prototype.buildPath = function(t, e, r) {}
            ,
            e.prototype.pathUpdated = function() {
                this.__dirty &= ~M["b"]
            }
            ,
            e.prototype.getUpdatedPathProxy = function(t) {
                return !this.path && this.createPathProxy(),
                this.path.beginPath(),
                this.buildPath(this.path, this.shape, t),
                this.path
            }
            ,
            e.prototype.createPathProxy = function() {
                this.path = new a["a"](!1)
            }
            ,
            e.prototype.hasStroke = function() {
                var t = this.style
                  , e = t.stroke;
                return !(null == e || "none" === e || !(t.lineWidth > 0))
            }
            ,
            e.prototype.hasFill = function() {
                var t = this.style
                  , e = t.fill;
                return null != e && "none" !== e
            }
            ,
            e.prototype.getBoundingRect = function() {
                var t = this._rect
                  , e = this.style
                  , r = !t;
                if (r) {
                    var n = !1;
                    this.path || (n = !0,
                    this.createPathProxy());
                    var i = this.path;
                    (n || this.__dirty & M["b"]) && (i.beginPath(),
                    this.buildPath(i, this.shape, !1),
                    this.pathUpdated()),
                    t = i.getBoundingRect()
                }
                if (this._rect = t,
                this.hasStroke() && this.path && this.path.len() > 0) {
                    var a = this._rectStroke || (this._rectStroke = t.clone());
                    if (this.__dirty || r) {
                        a.copy(t);
                        var o = e.strokeNoScale ? this.getLineScale() : 1
                          , s = e.lineWidth;
                        if (!this.hasFill()) {
                            var u = this.strokeContainThreshold;
                            s = Math.max(s, null == u ? 4 : u)
                        }
                        o > 1e-10 && (a.width += s / o,
                        a.height += s / o,
                        a.x -= s / o / 2,
                        a.y -= s / o / 2)
                    }
                    return a
                }
                return t
            }
            ,
            e.prototype.contain = function(t, e) {
                var r = this.transformCoordToLocal(t, e)
                  , n = this.getBoundingRect()
                  , i = this.style;
                if (t = r[0],
                e = r[1],
                n.contain(t, e)) {
                    var a = this.path;
                    if (this.hasStroke()) {
                        var o = i.lineWidth
                          , s = i.strokeNoScale ? this.getLineScale() : 1;
                        if (s > 1e-10 && (this.hasFill() || (o = Math.max(o, this.strokeContainThreshold)),
                        S(a, o / s, t, e)))
                            return !0
                    }
                    if (this.hasFill())
                        return j(a, t, e)
                }
                return !1
            }
            ,
            e.prototype.dirtyShape = function() {
                this.__dirty |= M["b"],
                this._rect && (this._rect = null),
                this._decalEl && this._decalEl.dirtyShape(),
                this.markRedraw()
            }
            ,
            e.prototype.dirty = function() {
                this.dirtyStyle(),
                this.dirtyShape()
            }
            ,
            e.prototype.animateShape = function(t) {
                return this.animate("shape", t)
            }
            ,
            e.prototype.updateDuringAnimation = function(t) {
                "style" === t ? this.dirtyStyle() : "shape" === t ? this.dirtyShape() : this.markRedraw()
            }
            ,
            e.prototype.attrKV = function(e, r) {
                "shape" === e ? this.setShape(r) : t.prototype.attrKV.call(this, e, r)
            }
            ,
            e.prototype.setShape = function(t, e) {
                var r = this.shape;
                return r || (r = this.shape = {}),
                "string" === typeof t ? r[t] = e : Object(T["extend"])(r, t),
                this.dirtyShape(),
                this
            }
            ,
            e.prototype.shapeChanged = function() {
                return !!(this.__dirty & M["b"])
            }
            ,
            e.prototype.createStyle = function(t) {
                return Object(T["createObject"])(L, t)
            }
            ,
            e.prototype._innerSaveToNormal = function(e) {
                t.prototype._innerSaveToNormal.call(this, e);
                var r = this._normalState;
                e.shape && !r.shape && (r.shape = Object(T["extend"])({}, this.shape))
            }
            ,
            e.prototype._applyStateObj = function(e, r, n, i, a, o) {
                t.prototype._applyStateObj.call(this, e, r, n, i, a, o);
                var s, u = !(r && i);
                if (r && r.shape ? a ? i ? s = r.shape : (s = Object(T["extend"])({}, n.shape),
                Object(T["extend"])(s, r.shape)) : (s = Object(T["extend"])({}, i ? this.shape : n.shape),
                Object(T["extend"])(s, r.shape)) : u && (s = n.shape),
                s)
                    if (a) {
                        this.shape = Object(T["extend"])({}, this.shape);
                        for (var h = {}, l = Object(T["keys"])(s), c = 0; c < l.length; c++) {
                            var f = l[c];
                            "object" === typeof s[f] ? this.shape[f] = s[f] : h[f] = s[f]
                        }
                        this._transitionState(e, {
                            shape: h
                        }, o)
                    } else
                        this.shape = s,
                        this.dirtyShape()
            }
            ,
            e.prototype._mergeStates = function(e) {
                for (var r, n = t.prototype._mergeStates.call(this, e), i = 0; i < e.length; i++) {
                    var a = e[i];
                    a.shape && (r = r || {},
                    this._mergeStyle(r, a.shape))
                }
                return r && (n.shape = r),
                n
            }
            ,
            e.prototype.getAnimationStyleProps = function() {
                return D
            }
            ,
            e.prototype.isZeroArea = function() {
                return !1
            }
            ,
            e.extend = function(t) {
                var r = function(e) {
                    function r(r) {
                        var n = e.call(this, r) || this;
                        return t.init && t.init.call(n, r),
                        n
                    }
                    return Object(n["a"])(r, e),
                    r.prototype.getDefaultStyle = function() {
                        return Object(T["clone"])(t.style)
                    }
                    ,
                    r.prototype.getDefaultShape = function() {
                        return Object(T["clone"])(t.shape)
                    }
                    ,
                    r
                }(e);
                for (var i in t)
                    "function" === typeof t[i] && (r.prototype[i] = t[i]);
                return r
            }
            ,
            e.initDefaultProps = function() {
                var t = e.prototype;
                t.type = "path",
                t.strokeContainThreshold = 5,
                t.segmentIgnoreThreshold = 0,
                t.subPixelOptimize = !1,
                t.autoBatch = !1,
                t.__dirty = M["a"] | M["c"] | M["b"]
            }(),
            e
        }(i["c"]);
        e["b"] = I
    },
    d409: function(t, e, r) {
        "use strict";
        r.d(e, "c", (function() {
            return s
        }
        )),
        r.d(e, "a", (function() {
            return c
        }
        )),
        r.d(e, "b", (function() {
            return v
        }
        ));
        var n = r("5e76")
          , i = r("6d8b")
          , a = r("e86a")
          , o = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
        function s(t, e, r, n, i) {
            if (!e)
                return "";
            var a = (t + "").split("\n");
            i = u(e, r, n, i);
            for (var o = 0, s = a.length; o < s; o++)
                a[o] = h(a[o], i);
            return a.join("\n")
        }
        function u(t, e, r, n) {
            n = n || {};
            var o = Object(i["extend"])({}, n);
            o.font = e,
            r = Object(i["retrieve2"])(r, "..."),
            o.maxIterations = Object(i["retrieve2"])(n.maxIterations, 2);
            var s = o.minChar = Object(i["retrieve2"])(n.minChar, 0);
            o.cnCharWidth = Object(a["f"])("国", e);
            var u = o.ascCharWidth = Object(a["f"])("a", e);
            o.placeholder = Object(i["retrieve2"])(n.placeholder, "");
            for (var h = t = Math.max(0, t - 1), l = 0; l < s && h >= u; l++)
                h -= u;
            var c = Object(a["f"])(r, e);
            return c > h && (r = "",
            c = 0),
            h = t - c,
            o.ellipsis = r,
            o.ellipsisWidth = c,
            o.contentWidth = h,
            o.containerWidth = t,
            o
        }
        function h(t, e) {
            var r = e.containerWidth
              , n = e.font
              , i = e.contentWidth;
            if (!r)
                return "";
            var o = Object(a["f"])(t, n);
            if (o <= r)
                return t;
            for (var s = 0; ; s++) {
                if (o <= i || s >= e.maxIterations) {
                    t += e.ellipsis;
                    break
                }
                var u = 0 === s ? l(t, i, e.ascCharWidth, e.cnCharWidth) : o > 0 ? Math.floor(t.length * i / o) : 0;
                t = t.substr(0, u),
                o = Object(a["f"])(t, n)
            }
            return "" === t && (t = e.placeholder),
            t
        }
        function l(t, e, r, n) {
            for (var i = 0, a = 0, o = t.length; a < o && i < e; a++) {
                var s = t.charCodeAt(a);
                i += 0 <= s && s <= 127 ? r : n
            }
            return a
        }
        function c(t, e) {
            null != t && (t += "");
            var r, n = e.overflow, o = e.padding, s = e.font, l = "truncate" === n, c = Object(a["e"])(s), f = Object(i["retrieve2"])(e.lineHeight, c), p = !!e.backgroundColor, d = "truncate" === e.lineOverflow, v = e.width;
            r = null == v || "break" !== n && "breakAll" !== n ? t ? t.split("\n") : [] : t ? m(t, e.font, v, "breakAll" === n, 0).lines : [];
            var y = r.length * f
              , g = Object(i["retrieve2"])(e.height, y);
            if (y > g && d) {
                var _ = Math.floor(g / f);
                r = r.slice(0, _)
            }
            if (t && l && null != v)
                for (var b = u(v, s, e.ellipsis, {
                    minChar: e.truncateMinChar,
                    placeholder: e.placeholder
                }), x = 0; x < r.length; x++)
                    r[x] = h(r[x], b);
            var w = g
              , O = 0;
            for (x = 0; x < r.length; x++)
                O = Math.max(Object(a["f"])(r[x], s), O);
            null == v && (v = O);
            var k = O;
            return o && (w += o[0] + o[2],
            k += o[1] + o[3],
            v += o[1] + o[3]),
            p && (k = v),
            {
                lines: r,
                height: g,
                outerWidth: k,
                outerHeight: w,
                lineHeight: f,
                calculatedLineHeight: c,
                contentWidth: O,
                contentHeight: y,
                width: v
            }
        }
        var f = function() {
            function t() {}
            return t
        }()
          , p = function() {
            function t(t) {
                this.tokens = [],
                t && (this.tokens = t)
            }
            return t
        }()
          , d = function() {
            function t() {
                this.width = 0,
                this.height = 0,
                this.contentWidth = 0,
                this.contentHeight = 0,
                this.outerWidth = 0,
                this.outerHeight = 0,
                this.lines = []
            }
            return t
        }();
        function v(t, e) {
            var r = new d;
            if (null != t && (t += ""),
            !t)
                return r;
            var u, h = e.width, l = e.height, c = e.overflow, f = "break" !== c && "breakAll" !== c || null == h ? null : {
                width: h,
                accumWidth: 0,
                breakAll: "breakAll" === c
            }, p = o.lastIndex = 0;
            while (null != (u = o.exec(t))) {
                var v = u.index;
                v > p && y(r, t.substring(p, v), e, f),
                y(r, u[2], e, f, u[1]),
                p = o.lastIndex
            }
            p < t.length && y(r, t.substring(p, t.length), e, f);
            var g = []
              , _ = 0
              , b = 0
              , m = e.padding
              , x = "truncate" === c
              , w = "truncate" === e.lineOverflow;
            function O(t, e, r) {
                t.width = e,
                t.lineHeight = r,
                _ += r,
                b = Math.max(b, e)
            }
            t: for (var k = 0; k < r.lines.length; k++) {
                for (var j = r.lines[k], S = 0, T = 0, C = 0; C < j.tokens.length; C++) {
                    var P = j.tokens[C]
                      , M = P.styleName && e.rich[P.styleName] || {}
                      , A = P.textPadding = M.padding
                      , L = A ? A[1] + A[3] : 0
                      , D = P.font = M.font || e.font;
                    P.contentHeight = Object(a["e"])(D);
                    var z = Object(i["retrieve2"])(M.height, P.contentHeight);
                    if (P.innerHeight = z,
                    A && (z += A[0] + A[2]),
                    P.height = z,
                    P.lineHeight = Object(i["retrieve3"])(M.lineHeight, e.lineHeight, z),
                    P.align = M && M.align || e.align,
                    P.verticalAlign = M && M.verticalAlign || "middle",
                    w && null != l && _ + P.lineHeight > l) {
                        C > 0 ? (j.tokens = j.tokens.slice(0, C),
                        O(j, T, S),
                        r.lines = r.lines.slice(0, k + 1)) : r.lines = r.lines.slice(0, k);
                        break t
                    }
                    var I = M.width
                      , R = null == I || "auto" === I;
                    if ("string" === typeof I && "%" === I.charAt(I.length - 1))
                        P.percentWidth = I,
                        g.push(P),
                        P.contentWidth = Object(a["f"])(P.text, D);
                    else {
                        if (R) {
                            var F = M.backgroundColor
                              , B = F && F.image;
                            B && (B = n["b"](B),
                            n["c"](B) && (P.width = Math.max(P.width, B.width * z / B.height)))
                        }
                        var N = x && null != h ? h - T : null;
                        null != N && N < P.width ? !R || N < L ? (P.text = "",
                        P.width = P.contentWidth = 0) : (P.text = s(P.text, N - L, D, e.ellipsis, {
                            minChar: e.truncateMinChar
                        }),
                        P.width = P.contentWidth = Object(a["f"])(P.text, D)) : P.contentWidth = Object(a["f"])(P.text, D)
                    }
                    P.width += L,
                    T += P.width,
                    M && (S = Math.max(S, P.lineHeight))
                }
                O(j, T, S)
            }
            r.outerWidth = r.width = Object(i["retrieve2"])(h, b),
            r.outerHeight = r.height = Object(i["retrieve2"])(l, _),
            r.contentHeight = _,
            r.contentWidth = b,
            m && (r.outerWidth += m[1] + m[3],
            r.outerHeight += m[0] + m[2]);
            for (k = 0; k < g.length; k++) {
                P = g[k];
                var H = P.percentWidth;
                P.width = parseInt(H, 10) / 100 * r.width
            }
            return r
        }
        function y(t, e, r, n, i) {
            var o, s, u = "" === e, h = i && r.rich[i] || {}, l = t.lines, c = h.font || r.font, d = !1;
            if (n) {
                var v = h.padding
                  , y = v ? v[1] + v[3] : 0;
                if (null != h.width && "auto" !== h.width) {
                    var g = Object(a["g"])(h.width, n.width) + y;
                    l.length > 0 && g + n.accumWidth > n.width && (o = e.split("\n"),
                    d = !0),
                    n.accumWidth = g
                } else {
                    var _ = m(e, c, n.width, n.breakAll, n.accumWidth);
                    n.accumWidth = _.accumWidth + y,
                    s = _.linesWidths,
                    o = _.lines
                }
            } else
                o = e.split("\n");
            for (var b = 0; b < o.length; b++) {
                var x = o[b]
                  , w = new f;
                if (w.styleName = i,
                w.text = x,
                w.isLineHolder = !x && !u,
                "number" === typeof h.width ? w.width = h.width : w.width = s ? s[b] : Object(a["f"])(x, c),
                b || d)
                    l.push(new p([w]));
                else {
                    var O = (l[l.length - 1] || (l[0] = new p)).tokens
                      , k = O.length;
                    1 === k && O[0].isLineHolder ? O[0] = w : (x || !k || u) && O.push(w)
                }
            }
        }
        function g(t) {
            var e = t.charCodeAt(0);
            return e >= 33 && e <= 383
        }
        var _ = Object(i["reduce"])(",&?/;] ".split(""), (function(t, e) {
            return t[e] = !0,
            t
        }
        ), {});
        function b(t) {
            return !g(t) || !!_[t]
        }
        function m(t, e, r, n, i) {
            for (var o = [], s = [], u = "", h = "", l = 0, c = 0, f = 0; f < t.length; f++) {
                var p = t.charAt(f);
                if ("\n" !== p) {
                    var d = Object(a["f"])(p, e)
                      , v = !n && !b(p);
                    (o.length ? c + d > r : i + c + d > r) ? c ? (u || h) && (v ? (u || (u = h,
                    h = "",
                    l = 0,
                    c = l),
                    o.push(u),
                    s.push(c - l),
                    h += p,
                    l += d,
                    u = "",
                    c = l) : (h && (u += h,
                    h = "",
                    l = 0),
                    o.push(u),
                    s.push(c),
                    u = p,
                    c = d)) : v ? (o.push(h),
                    s.push(l),
                    h = p,
                    l = d) : (o.push(p),
                    s.push(d)) : (c += d,
                    v ? (h += p,
                    l += d) : (h && (u += h,
                    h = "",
                    l = 0),
                    u += p))
                } else
                    h && (u += h,
                    c += l),
                    o.push(u),
                    s.push(c),
                    u = "",
                    h = "",
                    l = 0,
                    c = 0
            }
            return o.length || u || (u = t,
            h = "",
            l = 0),
            h && (u += h),
            u && (o.push(u),
            s.push(c)),
            1 === o.length && (c += i),
            {
                accumWidth: c,
                lines: o,
                linesWidths: s
            }
        }
    },
    d498: function(t, e, r) {
        "use strict";
        var n = r("21a10")
          , i = r("cbe5")
          , a = r("4fac")
          , o = function() {
            function t() {
                this.points = null,
                this.percent = 1,
                this.smooth = 0,
                this.smoothConstraint = null
            }
            return t
        }()
          , s = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return Object(n["a"])(e, t),
            e.prototype.getDefaultStyle = function() {
                return {
                    stroke: "#000",
                    fill: null
                }
            }
            ,
            e.prototype.getDefaultShape = function() {
                return new o
            }
            ,
            e.prototype.buildPath = function(t, e) {
                a["a"](t, e, !1)
            }
            ,
            e
        }(i["b"]);
        s.prototype.type = "polyline",
        e["a"] = s
    },
    d4c6: function(t, e, r) {
        "use strict";
        var n = r("21a10")
          , i = r("cbe5")
          , a = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = "compound",
                e
            }
            return Object(n["a"])(e, t),
            e.prototype._updatePathDirty = function() {
                for (var t = this.shape.paths, e = this.shapeChanged(), r = 0; r < t.length; r++)
                    e = e || t[r].shapeChanged();
                e && this.dirtyShape()
            }
            ,
            e.prototype.beforeBrush = function() {
                this._updatePathDirty();
                for (var t = this.shape.paths || [], e = this.getGlobalScale(), r = 0; r < t.length; r++)
                    t[r].path || t[r].createPathProxy(),
                    t[r].path.setScale(e[0], e[1], t[r].segmentIgnoreThreshold)
            }
            ,
            e.prototype.buildPath = function(t, e) {
                for (var r = e.paths || [], n = 0; n < r.length; n++)
                    r[n].buildPath(t, r[n].shape, !0)
            }
            ,
            e.prototype.afterBrush = function() {
                for (var t = this.shape.paths || [], e = 0; e < t.length; e++)
                    t[e].pathUpdated()
            }
            ,
            e.prototype.getBoundingRect = function() {
                return this._updatePathDirty.call(this),
                i["b"].prototype.getBoundingRect.call(this)
            }
            ,
            e
        }(i["b"]);
        e["a"] = a
    },
    d51b: function(t, e, r) {
        "use strict";
        var n = function() {
            function t(t) {
                this.value = t
            }
            return t
        }()
          , i = function() {
            function t() {
                this._len = 0
            }
            return t.prototype.insert = function(t) {
                var e = new n(t);
                return this.insertEntry(e),
                e
            }
            ,
            t.prototype.insertEntry = function(t) {
                this.head ? (this.tail.next = t,
                t.prev = this.tail,
                t.next = null,
                this.tail = t) : this.head = this.tail = t,
                this._len++
            }
            ,
            t.prototype.remove = function(t) {
                var e = t.prev
                  , r = t.next;
                e ? e.next = r : this.head = r,
                r ? r.prev = e : this.tail = e,
                t.next = t.prev = null,
                this._len--
            }
            ,
            t.prototype.len = function() {
                return this._len
            }
            ,
            t.prototype.clear = function() {
                this.head = this.tail = null,
                this._len = 0
            }
            ,
            t
        }()
          , a = function() {
            function t(t) {
                this._list = new i,
                this._maxSize = 10,
                this._map = {},
                this._maxSize = t
            }
            return t.prototype.put = function(t, e) {
                var r = this._list
                  , i = this._map
                  , a = null;
                if (null == i[t]) {
                    var o = r.len()
                      , s = this._lastRemovedEntry;
                    if (o >= this._maxSize && o > 0) {
                        var u = r.head;
                        r.remove(u),
                        delete i[u.key],
                        a = u.value,
                        this._lastRemovedEntry = u
                    }
                    s ? s.value = e : s = new n(e),
                    s.key = t,
                    r.insertEntry(s),
                    i[t] = s
                }
                return a
            }
            ,
            t.prototype.get = function(t) {
                var e = this._map[t]
                  , r = this._list;
                if (null != e)
                    return e !== r.tail && (r.remove(e),
                    r.insertEntry(e)),
                    e.value
            }
            ,
            t.prototype.clear = function() {
                this._list.clear(),
                this._map = {}
            }
            ,
            t.prototype.len = function() {
                return this._list.len()
            }
            ,
            t
        }();
        e["a"] = a
    },
    d5b7: function(t, e, r) {
        "use strict";
        var n = r("8582")
          , i = r("06ad")
          , a = r("9850")
          , o = r("6fd3")
          , s = r("e86a")
          , u = r("6d8b")
          , h = r("2cf4")
          , l = r("41ef")
          , c = r("4bc4")
          , f = "__zr_normal__"
          , p = n["a"].concat(["ignore"])
          , d = Object(u["reduce"])(n["a"], (function(t, e) {
            return t[e] = !0,
            t
        }
        ), {
            ignore: !1
        })
          , v = {}
          , y = new a["a"](0,0,0,0)
          , g = function() {
            function t(t) {
                this.id = Object(u["guid"])(),
                this.animators = [],
                this.currentStates = [],
                this.states = {},
                this._init(t)
            }
            return t.prototype._init = function(t) {
                this.attr(t)
            }
            ,
            t.prototype.drift = function(t, e, r) {
                switch (this.draggable) {
                case "horizontal":
                    e = 0;
                    break;
                case "vertical":
                    t = 0;
                    break
                }
                var n = this.transform;
                n || (n = this.transform = [1, 0, 0, 1, 0, 0]),
                n[4] += t,
                n[5] += e,
                this.decomposeTransform(),
                this.markRedraw()
            }
            ,
            t.prototype.beforeUpdate = function() {}
            ,
            t.prototype.afterUpdate = function() {}
            ,
            t.prototype.update = function() {
                this.updateTransform(),
                this.__dirty && this.updateInnerText()
            }
            ,
            t.prototype.updateInnerText = function(t) {
                var e = this._textContent;
                if (e && (!e.ignore || t)) {
                    this.textConfig || (this.textConfig = {});
                    var r = this.textConfig
                      , n = r.local
                      , i = e.innerTransformable
                      , a = void 0
                      , o = void 0
                      , u = !1;
                    i.parent = n ? this : null;
                    var h = !1;
                    if (i.copyTransform(e),
                    null != r.position) {
                        var l = y;
                        r.layoutRect ? l.copy(r.layoutRect) : l.copy(this.getBoundingRect()),
                        n || l.applyTransform(this.transform),
                        this.calculateTextPosition ? this.calculateTextPosition(v, r, l) : Object(s["c"])(v, r, l),
                        i.x = v.x,
                        i.y = v.y,
                        a = v.align,
                        o = v.verticalAlign;
                        var f = r.origin;
                        if (f && null != r.rotation) {
                            var p = void 0
                              , d = void 0;
                            "center" === f ? (p = .5 * l.width,
                            d = .5 * l.height) : (p = Object(s["g"])(f[0], l.width),
                            d = Object(s["g"])(f[1], l.height)),
                            h = !0,
                            i.originX = -i.x + p + (n ? 0 : l.x),
                            i.originY = -i.y + d + (n ? 0 : l.y)
                        }
                    }
                    null != r.rotation && (i.rotation = r.rotation);
                    var g = r.offset;
                    g && (i.x += g[0],
                    i.y += g[1],
                    h || (i.originX = -g[0],
                    i.originY = -g[1]));
                    var _ = null == r.inside ? "string" === typeof r.position && r.position.indexOf("inside") >= 0 : r.inside
                      , b = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {})
                      , m = void 0
                      , x = void 0
                      , w = void 0;
                    _ && this.canBeInsideText() ? (m = r.insideFill,
                    x = r.insideStroke,
                    null != m && "auto" !== m || (m = this.getInsideTextFill()),
                    null != x && "auto" !== x || (x = this.getInsideTextStroke(m),
                    w = !0)) : (m = r.outsideFill,
                    x = r.outsideStroke,
                    null != m && "auto" !== m || (m = this.getOutsideFill()),
                    null != x && "auto" !== x || (x = this.getOutsideStroke(m),
                    w = !0)),
                    m = m || "#000",
                    m === b.fill && x === b.stroke && w === b.autoStroke && a === b.align && o === b.verticalAlign || (u = !0,
                    b.fill = m,
                    b.stroke = x,
                    b.autoStroke = w,
                    b.align = a,
                    b.verticalAlign = o,
                    e.setDefaultTextStyle(b)),
                    e.__dirty |= c["a"],
                    u && e.dirtyStyle(!0)
                }
            }
            ,
            t.prototype.canBeInsideText = function() {
                return !0
            }
            ,
            t.prototype.getInsideTextFill = function() {
                return "#fff"
            }
            ,
            t.prototype.getInsideTextStroke = function(t) {
                return "#000"
            }
            ,
            t.prototype.getOutsideFill = function() {
                return this.__zr && this.__zr.isDarkMode() ? h["d"] : h["a"]
            }
            ,
            t.prototype.getOutsideStroke = function(t) {
                var e = this.__zr && this.__zr.getBackgroundColor()
                  , r = "string" === typeof e && Object(l["parse"])(e);
                r || (r = [255, 255, 255, 1]);
                for (var n = r[3], i = this.__zr.isDarkMode(), a = 0; a < 3; a++)
                    r[a] = r[a] * n + (i ? 0 : 255) * (1 - n);
                return r[3] = 1,
                Object(l["stringify"])(r, "rgba")
            }
            ,
            t.prototype.traverse = function(t, e) {}
            ,
            t.prototype.attrKV = function(t, e) {
                "textConfig" === t ? this.setTextConfig(e) : "textContent" === t ? this.setTextContent(e) : "clipPath" === t ? this.setClipPath(e) : "extra" === t ? (this.extra = this.extra || {},
                Object(u["extend"])(this.extra, e)) : this[t] = e
            }
            ,
            t.prototype.hide = function() {
                this.ignore = !0,
                this.markRedraw()
            }
            ,
            t.prototype.show = function() {
                this.ignore = !1,
                this.markRedraw()
            }
            ,
            t.prototype.attr = function(t, e) {
                if ("string" === typeof t)
                    this.attrKV(t, e);
                else if (Object(u["isObject"])(t))
                    for (var r = t, n = Object(u["keys"])(r), i = 0; i < n.length; i++) {
                        var a = n[i];
                        this.attrKV(a, t[a])
                    }
                return this.markRedraw(),
                this
            }
            ,
            t.prototype.saveCurrentToNormalState = function(t) {
                this._innerSaveToNormal(t);
                for (var e = this._normalState, r = 0; r < this.animators.length; r++) {
                    var n = this.animators[r]
                      , i = n.__fromStateTransition;
                    if (!(n.getLoop() || i && i !== f)) {
                        var a = n.targetName
                          , o = a ? e[a] : e;
                        n.saveTo(o)
                    }
                }
            }
            ,
            t.prototype._innerSaveToNormal = function(t) {
                var e = this._normalState;
                e || (e = this._normalState = {}),
                t.textConfig && !e.textConfig && (e.textConfig = this.textConfig),
                this._savePrimaryToNormal(t, e, p)
            }
            ,
            t.prototype._savePrimaryToNormal = function(t, e, r) {
                for (var n = 0; n < r.length; n++) {
                    var i = r[n];
                    null == t[i] || i in e || (e[i] = this[i])
                }
            }
            ,
            t.prototype.hasState = function() {
                return this.currentStates.length > 0
            }
            ,
            t.prototype.getState = function(t) {
                return this.states[t]
            }
            ,
            t.prototype.ensureState = function(t) {
                var e = this.states;
                return e[t] || (e[t] = {}),
                e[t]
            }
            ,
            t.prototype.clearStates = function(t) {
                this.useState(f, !1, t)
            }
            ,
            t.prototype.useState = function(t, e, r, n) {
                var i = t === f
                  , a = this.hasState();
                if (a || !i) {
                    var o = this.currentStates
                      , s = this.stateTransition;
                    if (!(Object(u["indexOf"])(o, t) >= 0) || !e && 1 !== o.length) {
                        var h;
                        if (this.stateProxy && !i && (h = this.stateProxy(t)),
                        h || (h = this.states && this.states[t]),
                        h || i) {
                            i || this.saveCurrentToNormalState(h);
                            var l = !!(h && h.hoverLayer || n);
                            l && this._toggleHoverLayerFlag(!0),
                            this._applyStateObj(t, h, this._normalState, e, !r && !this.__inHover && s && s.duration > 0, s);
                            var p = this._textContent
                              , d = this._textGuide;
                            return p && p.useState(t, e, r, l),
                            d && d.useState(t, e, r, l),
                            i ? (this.currentStates = [],
                            this._normalState = {}) : e ? this.currentStates.push(t) : this.currentStates = [t],
                            this._updateAnimationTargets(),
                            this.markRedraw(),
                            !l && this.__inHover && (this._toggleHoverLayerFlag(!1),
                            this.__dirty &= ~c["a"]),
                            h
                        }
                        Object(u["logError"])("State " + t + " not exists.")
                    }
                }
            }
            ,
            t.prototype.useStates = function(t, e, r) {
                if (t.length) {
                    var n = []
                      , i = this.currentStates
                      , a = t.length
                      , o = a === i.length;
                    if (o)
                        for (var s = 0; s < a; s++)
                            if (t[s] !== i[s]) {
                                o = !1;
                                break
                            }
                    if (o)
                        return;
                    for (s = 0; s < a; s++) {
                        var u = t[s]
                          , h = void 0;
                        this.stateProxy && (h = this.stateProxy(u, t)),
                        h || (h = this.states[u]),
                        h && n.push(h)
                    }
                    var l = n[a - 1]
                      , f = !!(l && l.hoverLayer || r);
                    f && this._toggleHoverLayerFlag(!0);
                    var p = this._mergeStates(n)
                      , d = this.stateTransition;
                    this.saveCurrentToNormalState(p),
                    this._applyStateObj(t.join(","), p, this._normalState, !1, !e && !this.__inHover && d && d.duration > 0, d);
                    var v = this._textContent
                      , y = this._textGuide;
                    v && v.useStates(t, e, f),
                    y && y.useStates(t, e, f),
                    this._updateAnimationTargets(),
                    this.currentStates = t.slice(),
                    this.markRedraw(),
                    !f && this.__inHover && (this._toggleHoverLayerFlag(!1),
                    this.__dirty &= ~c["a"])
                } else
                    this.clearStates()
            }
            ,
            t.prototype._updateAnimationTargets = function() {
                for (var t = 0; t < this.animators.length; t++) {
                    var e = this.animators[t];
                    e.targetName && e.changeTarget(this[e.targetName])
                }
            }
            ,
            t.prototype.removeState = function(t) {
                var e = Object(u["indexOf"])(this.currentStates, t);
                if (e >= 0) {
                    var r = this.currentStates.slice();
                    r.splice(e, 1),
                    this.useStates(r)
                }
            }
            ,
            t.prototype.replaceState = function(t, e, r) {
                var n = this.currentStates.slice()
                  , i = Object(u["indexOf"])(n, t)
                  , a = Object(u["indexOf"])(n, e) >= 0;
                i >= 0 ? a ? n.splice(i, 1) : n[i] = e : r && !a && n.push(e),
                this.useStates(n)
            }
            ,
            t.prototype.toggleState = function(t, e) {
                e ? this.useState(t, !0) : this.removeState(t)
            }
            ,
            t.prototype._mergeStates = function(t) {
                for (var e, r = {}, n = 0; n < t.length; n++) {
                    var i = t[n];
                    Object(u["extend"])(r, i),
                    i.textConfig && (e = e || {},
                    Object(u["extend"])(e, i.textConfig))
                }
                return e && (r.textConfig = e),
                r
            }
            ,
            t.prototype._applyStateObj = function(t, e, r, n, i, a) {
                var o = !(e && n);
                e && e.textConfig ? (this.textConfig = Object(u["extend"])({}, n ? this.textConfig : r.textConfig),
                Object(u["extend"])(this.textConfig, e.textConfig)) : o && r.textConfig && (this.textConfig = r.textConfig);
                for (var s = {}, h = !1, l = 0; l < p.length; l++) {
                    var c = p[l]
                      , f = i && d[c];
                    e && null != e[c] ? f ? (h = !0,
                    s[c] = e[c]) : this[c] = e[c] : o && null != r[c] && (f ? (h = !0,
                    s[c] = r[c]) : this[c] = r[c])
                }
                if (!i)
                    for (l = 0; l < this.animators.length; l++) {
                        var v = this.animators[l]
                          , y = v.targetName;
                        v.getLoop() || v.__changeFinalValue(y ? (e || r)[y] : e || r)
                    }
                h && this._transitionState(t, s, a)
            }
            ,
            t.prototype._attachComponent = function(t) {
                if ((!t.__zr || t.__hostTarget) && t !== this) {
                    var e = this.__zr;
                    e && t.addSelfToZr(e),
                    t.__zr = e,
                    t.__hostTarget = this
                }
            }
            ,
            t.prototype._detachComponent = function(t) {
                t.__zr && t.removeSelfFromZr(t.__zr),
                t.__zr = null,
                t.__hostTarget = null
            }
            ,
            t.prototype.getClipPath = function() {
                return this._clipPath
            }
            ,
            t.prototype.setClipPath = function(t) {
                this._clipPath && this._clipPath !== t && this.removeClipPath(),
                this._attachComponent(t),
                this._clipPath = t,
                this.markRedraw()
            }
            ,
            t.prototype.removeClipPath = function() {
                var t = this._clipPath;
                t && (this._detachComponent(t),
                this._clipPath = null,
                this.markRedraw())
            }
            ,
            t.prototype.getTextContent = function() {
                return this._textContent
            }
            ,
            t.prototype.setTextContent = function(t) {
                var e = this._textContent;
                e !== t && (e && e !== t && this.removeTextContent(),
                t.innerTransformable = new n["c"],
                this._attachComponent(t),
                this._textContent = t,
                this.markRedraw())
            }
            ,
            t.prototype.setTextConfig = function(t) {
                this.textConfig || (this.textConfig = {}),
                Object(u["extend"])(this.textConfig, t),
                this.markRedraw()
            }
            ,
            t.prototype.removeTextConfig = function() {
                this.textConfig = null,
                this.markRedraw()
            }
            ,
            t.prototype.removeTextContent = function() {
                var t = this._textContent;
                t && (t.innerTransformable = null,
                this._detachComponent(t),
                this._textContent = null,
                this._innerTextDefaultStyle = null,
                this.markRedraw())
            }
            ,
            t.prototype.getTextGuideLine = function() {
                return this._textGuide
            }
            ,
            t.prototype.setTextGuideLine = function(t) {
                this._textGuide && this._textGuide !== t && this.removeTextGuideLine(),
                this._attachComponent(t),
                this._textGuide = t,
                this.markRedraw()
            }
            ,
            t.prototype.removeTextGuideLine = function() {
                var t = this._textGuide;
                t && (this._detachComponent(t),
                this._textGuide = null,
                this.markRedraw())
            }
            ,
            t.prototype.markRedraw = function() {
                this.__dirty |= c["a"];
                var t = this.__zr;
                t && (this.__inHover ? t.refreshHover() : t.refresh()),
                this.__hostTarget && this.__hostTarget.markRedraw()
            }
            ,
            t.prototype.dirty = function() {
                this.markRedraw()
            }
            ,
            t.prototype._toggleHoverLayerFlag = function(t) {
                this.__inHover = t;
                var e = this._textContent
                  , r = this._textGuide;
                e && (e.__inHover = t),
                r && (r.__inHover = t)
            }
            ,
            t.prototype.addSelfToZr = function(t) {
                if (this.__zr !== t) {
                    this.__zr = t;
                    var e = this.animators;
                    if (e)
                        for (var r = 0; r < e.length; r++)
                            t.animation.addAnimator(e[r]);
                    this._clipPath && this._clipPath.addSelfToZr(t),
                    this._textContent && this._textContent.addSelfToZr(t),
                    this._textGuide && this._textGuide.addSelfToZr(t)
                }
            }
            ,
            t.prototype.removeSelfFromZr = function(t) {
                if (this.__zr) {
                    this.__zr = null;
                    var e = this.animators;
                    if (e)
                        for (var r = 0; r < e.length; r++)
                            t.animation.removeAnimator(e[r]);
                    this._clipPath && this._clipPath.removeSelfFromZr(t),
                    this._textContent && this._textContent.removeSelfFromZr(t),
                    this._textGuide && this._textGuide.removeSelfFromZr(t)
                }
            }
            ,
            t.prototype.animate = function(t, e, r) {
                var n = t ? this[t] : this;
                var a = new i["b"](n,e,r);
                return t && (a.targetName = t),
                this.addAnimator(a, t),
                a
            }
            ,
            t.prototype.addAnimator = function(t, e) {
                var r = this.__zr
                  , n = this;
                t.during((function() {
                    n.updateDuringAnimation(e)
                }
                )).done((function() {
                    var e = n.animators
                      , r = Object(u["indexOf"])(e, t);
                    r >= 0 && e.splice(r, 1)
                }
                )),
                this.animators.push(t),
                r && r.animation.addAnimator(t),
                r && r.wakeUp()
            }
            ,
            t.prototype.updateDuringAnimation = function(t) {
                this.markRedraw()
            }
            ,
            t.prototype.stopAnimation = function(t, e) {
                for (var r = this.animators, n = r.length, i = [], a = 0; a < n; a++) {
                    var o = r[a];
                    t && t !== o.scope ? i.push(o) : o.stop(e)
                }
                return this.animators = i,
                this
            }
            ,
            t.prototype.animateTo = function(t, e, r) {
                _(this, t, e, r)
            }
            ,
            t.prototype.animateFrom = function(t, e, r) {
                _(this, t, e, r, !0)
            }
            ,
            t.prototype._transitionState = function(t, e, r, n) {
                for (var i = _(this, e, r, n), a = 0; a < i.length; a++)
                    i[a].__fromStateTransition = t
            }
            ,
            t.prototype.getBoundingRect = function() {
                return null
            }
            ,
            t.prototype.getPaintRect = function() {
                return null
            }
            ,
            t.initDefaultProps = function() {
                var e = t.prototype;
                e.type = "element",
                e.name = "",
                e.ignore = e.silent = e.isGroup = e.draggable = e.dragging = e.ignoreClip = e.__inHover = !1,
                e.__dirty = c["a"];
                function r(t, r, n, i) {
                    function a(t, e) {
                        Object.defineProperty(e, 0, {
                            get: function() {
                                return t[n]
                            },
                            set: function(e) {
                                t[n] = e
                            }
                        }),
                        Object.defineProperty(e, 1, {
                            get: function() {
                                return t[i]
                            },
                            set: function(e) {
                                t[i] = e
                            }
                        })
                    }
                    Object.defineProperty(e, t, {
                        get: function() {
                            if (!this[r]) {
                                var t = this[r] = [];
                                a(this, t)
                            }
                            return this[r]
                        },
                        set: function(t) {
                            this[n] = t[0],
                            this[i] = t[1],
                            this[r] = t,
                            a(this, t)
                        }
                    })
                }
                Object.defineProperty && (r("position", "_legacyPos", "x", "y"),
                r("scale", "_legacyScale", "scaleX", "scaleY"),
                r("origin", "_legacyOrigin", "originX", "originY"))
            }(),
            t
        }();
        function _(t, e, r, n, i) {
            r = r || {};
            var a = [];
            k(t, "", t, e, r, n, a, i);
            var o = a.length
              , s = !1
              , u = r.done
              , h = r.aborted
              , l = function() {
                s = !0,
                o--,
                o <= 0 && (s ? u && u() : h && h())
            }
              , c = function() {
                o--,
                o <= 0 && (s ? u && u() : h && h())
            };
            o || u && u(),
            a.length > 0 && r.during && a[0].during((function(t, e) {
                r.during(e)
            }
            ));
            for (var f = 0; f < a.length; f++) {
                var p = a[f];
                l && p.done(l),
                c && p.aborted(c),
                r.force && p.duration(r.duration),
                p.start(r.easing)
            }
            return a
        }
        function b(t, e, r) {
            for (var n = 0; n < r; n++)
                t[n] = e[n]
        }
        function m(t) {
            return Object(u["isArrayLike"])(t[0])
        }
        function x(t, e, r) {
            if (Object(u["isArrayLike"])(e[r]))
                if (Object(u["isArrayLike"])(t[r]) || (t[r] = []),
                Object(u["isTypedArray"])(e[r])) {
                    var n = e[r].length;
                    t[r].length !== n && (t[r] = new e[r].constructor(n),
                    b(t[r], e[r], n))
                } else {
                    var i = e[r]
                      , a = t[r]
                      , o = i.length;
                    if (m(i))
                        for (var s = i[0].length, h = 0; h < o; h++)
                            a[h] ? b(a[h], i[h], s) : a[h] = Array.prototype.slice.call(i[h]);
                    else
                        b(a, i, o);
                    a.length = i.length
                }
            else
                t[r] = e[r]
        }
        function w(t, e) {
            return t === e || Object(u["isArrayLike"])(t) && Object(u["isArrayLike"])(e) && O(t, e)
        }
        function O(t, e) {
            var r = t.length;
            if (r !== e.length)
                return !1;
            for (var n = 0; n < r; n++)
                if (t[n] !== e[n])
                    return !1;
            return !0
        }
        function k(t, e, r, n, a, o, s, h) {
            for (var l = Object(u["keys"])(n), c = a.duration, f = a.delay, p = a.additive, d = a.setToFinal, v = !Object(u["isObject"])(o), y = t.animators, g = [], _ = 0; _ < l.length; _++) {
                var b = l[_]
                  , m = n[b];
                if (null != m && null != r[b] && (v || o[b]))
                    if (!Object(u["isObject"])(m) || Object(u["isArrayLike"])(m) || Object(u["isGradientObject"])(m))
                        g.push(b);
                    else {
                        if (e) {
                            h || (r[b] = m,
                            t.updateDuringAnimation(e));
                            continue
                        }
                        k(t, b, r[b], m, a, o && o[b], s, h)
                    }
                else
                    h || (r[b] = m,
                    t.updateDuringAnimation(e),
                    g.push(b))
            }
            var O = g.length;
            if (!p && O)
                for (var j = 0; j < y.length; j++) {
                    var S = y[j];
                    if (S.targetName === e) {
                        var T = S.stopTracks(g);
                        if (T) {
                            var C = Object(u["indexOf"])(y, S);
                            y.splice(C, 1)
                        }
                    }
                }
            if (a.force || (g = Object(u["filter"])(g, (function(t) {
                return !w(n[t], r[t])
            }
            )),
            O = g.length),
            O > 0 || a.force && !s.length) {
                var P = void 0
                  , M = void 0
                  , A = void 0;
                if (h) {
                    M = {},
                    d && (P = {});
                    for (j = 0; j < O; j++) {
                        b = g[j];
                        M[b] = r[b],
                        d ? P[b] = n[b] : r[b] = n[b]
                    }
                } else if (d) {
                    A = {};
                    for (j = 0; j < O; j++) {
                        b = g[j];
                        A[b] = Object(i["a"])(r[b]),
                        x(r, n, b)
                    }
                }
                S = new i["b"](r,!1,!1,p ? Object(u["filter"])(y, (function(t) {
                    return t.targetName === e
                }
                )) : null);
                S.targetName = e,
                a.scope && (S.scope = a.scope),
                d && P && S.whenWithKeys(0, P, g),
                A && S.whenWithKeys(0, A, g),
                S.whenWithKeys(null == c ? 500 : c, h ? M : n, g).delay(f || 0),
                t.addAnimator(S, e),
                s.push(S)
            }
        }
        Object(u["mixin"])(g, o["a"]),
        Object(u["mixin"])(g, n["c"]),
        e["a"] = g
    },
    d9fc: function(t, e, r) {
        "use strict";
        var n = r("21a10")
          , i = r("cbe5")
          , a = function() {
            function t() {
                this.cx = 0,
                this.cy = 0,
                this.r = 0
            }
            return t
        }()
          , o = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return Object(n["a"])(e, t),
            e.prototype.getDefaultShape = function() {
                return new a
            }
            ,
            e.prototype.buildPath = function(t, e) {
                t.moveTo(e.cx + e.r, e.cy),
                t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI)
            }
            ,
            e
        }(i["b"]);
        o.prototype.type = "circle",
        e["a"] = o
    },
    dc20: function(t, e, r) {
        "use strict";
        var n = r("7a29")
          , i = r("cbe5")
          , a = r("0da8")
          , o = r("e86a")
          , s = r("dd4f")
          , u = Math.sin
          , h = Math.cos
          , l = Math.PI
          , c = 2 * Math.PI
          , f = 180 / l
          , p = function() {
            function t() {}
            return t.prototype.reset = function(t) {
                this._start = !0,
                this._d = [],
                this._str = "",
                this._p = Math.pow(10, t || 4)
            }
            ,
            t.prototype.moveTo = function(t, e) {
                this._add("M", t, e)
            }
            ,
            t.prototype.lineTo = function(t, e) {
                this._add("L", t, e)
            }
            ,
            t.prototype.bezierCurveTo = function(t, e, r, n, i, a) {
                this._add("C", t, e, r, n, i, a)
            }
            ,
            t.prototype.quadraticCurveTo = function(t, e, r, n) {
                this._add("Q", t, e, r, n)
            }
            ,
            t.prototype.arc = function(t, e, r, n, i, a) {
                this.ellipse(t, e, r, r, 0, n, i, a)
            }
            ,
            t.prototype.ellipse = function(t, e, r, i, a, o, s, p) {
                var d = s - o
                  , v = !p
                  , y = Math.abs(d)
                  , g = Object(n["j"])(y - c) || (v ? d >= c : -d >= c)
                  , _ = d > 0 ? d % c : d % c + c
                  , b = !1;
                b = !!g || !Object(n["j"])(y) && _ >= l === !!v;
                var m = t + r * h(o)
                  , x = e + i * u(o);
                this._start && this._add("M", m, x);
                var w = Math.round(a * f);
                if (g) {
                    var O = 1 / this._p
                      , k = (v ? 1 : -1) * (c - O);
                    this._add("A", r, i, w, 1, +v, t + r * h(o + k), e + i * u(o + k)),
                    O > .01 && this._add("A", r, i, w, 0, +v, m, x)
                } else {
                    var j = t + r * h(s)
                      , S = e + i * u(s);
                    this._add("A", r, i, w, +b, +v, j, S)
                }
            }
            ,
            t.prototype.rect = function(t, e, r, n) {
                this._add("M", t, e),
                this._add("l", r, 0),
                this._add("l", 0, n),
                this._add("l", -r, 0),
                this._add("Z")
            }
            ,
            t.prototype.closePath = function() {
                this._d.length > 0 && this._add("Z")
            }
            ,
            t.prototype._add = function(t, e, r, n, i, a, o, s, u) {
                for (var h = [], l = this._p, c = 1; c < arguments.length; c++) {
                    var f = arguments[c];
                    if (isNaN(f))
                        return void (this._invalid = !0);
                    h.push(Math.round(f * l) / l)
                }
                this._d.push(t + h.join(" ")),
                this._start = "Z" === t
            }
            ,
            t.prototype.generateStr = function() {
                this._str = this._invalid ? "" : this._d.join(""),
                this._d = []
            }
            ,
            t.prototype.getStr = function() {
                return this._str
            }
            ,
            t
        }()
          , d = p
          , v = r("8d1d")
          , y = r("6d8b")
          , g = "none"
          , _ = Math.round;
        function b(t) {
            var e = t.fill;
            return null != e && e !== g
        }
        function m(t) {
            var e = t.stroke;
            return null != e && e !== g
        }
        var x = ["lineCap", "miterLimit", "lineJoin"]
          , w = Object(y["map"])(x, (function(t) {
            return "stroke-" + t.toLowerCase()
        }
        ));
        function O(t, e, r, o) {
            var s = null == e.opacity ? 1 : e.opacity;
            if (r instanceof a["a"])
                t("opacity", s);
            else {
                if (b(e)) {
                    var u = Object(n["p"])(e.fill);
                    t("fill", u.color);
                    var h = null != e.fillOpacity ? e.fillOpacity * u.opacity * s : u.opacity * s;
                    (o || h < 1) && t("fill-opacity", h)
                } else
                    t("fill", g);
                if (m(e)) {
                    var l = Object(n["p"])(e.stroke);
                    t("stroke", l.color);
                    var c = e.strokeNoScale ? r.getLineScale() : 1
                      , f = c ? (e.lineWidth || 0) / c : 0
                      , p = null != e.strokeOpacity ? e.strokeOpacity * l.opacity * s : l.opacity * s
                      , d = e.strokeFirst;
                    if ((o || 1 !== f) && t("stroke-width", f),
                    (o || d) && t("paint-order", d ? "stroke" : "fill"),
                    (o || p < 1) && t("stroke-opacity", p),
                    e.lineDash) {
                        var y = Object(v["a"])(r)
                          , O = y[0]
                          , k = y[1];
                        O && (k = _(k || 0),
                        t("stroke-dasharray", O.join(",")),
                        (k || o) && t("stroke-dashoffset", k))
                    } else
                        o && t("stroke-dasharray", g);
                    for (var j = 0; j < x.length; j++) {
                        var S = x[j];
                        if (o || e[S] !== i["a"][S]) {
                            var T = e[S] || i["a"][S];
                            T && t(w[j], T)
                        }
                    }
                } else
                    o && t("stroke", g)
            }
        }
        var k = "http://www.w3.org/2000/svg"
          , j = "http://www.w3.org/1999/xlink"
          , S = "http://www.w3.org/2000/xmlns/"
          , T = "http://www.w3.org/XML/1998/namespace";
        function C(t) {
            return document.createElementNS(k, t)
        }
        function P(t, e, r, n, i) {
            return {
                tag: t,
                attrs: r || {},
                children: n,
                text: i,
                key: e
            }
        }
        function M(t, e) {
            var r = [];
            if (e)
                for (var n in e) {
                    var i = e[n]
                      , a = n;
                    !1 !== i && (!0 !== i && null != i && (a += '="' + i + '"'),
                    r.push(a))
                }
            return "<" + t + " " + r.join(" ") + ">"
        }
        function A(t) {
            return "</" + t + ">"
        }
        function L(t, e) {
            e = e || {};
            var r = e.newline ? "\n" : "";
            function n(t) {
                var e = t.children
                  , i = t.tag
                  , a = t.attrs;
                return M(i, a) + (t.text || "") + (e ? "" + r + Object(y["map"])(e, (function(t) {
                    return n(t)
                }
                )).join(r) + r : "") + A(i)
            }
            return n(t)
        }
        function D(t, e, r) {
            r = r || {};
            var n = r.newline ? "\n" : ""
              , i = " {" + n
              , a = n + "}"
              , o = Object(y["map"])(Object(y["keys"])(t), (function(e) {
                return e + i + Object(y["map"])(Object(y["keys"])(t[e]), (function(r) {
                    return r + ":" + t[e][r] + ";"
                }
                )).join(n) + a
            }
            )).join(n)
              , s = Object(y["map"])(Object(y["keys"])(e), (function(t) {
                return "@keyframes " + t + i + Object(y["map"])(Object(y["keys"])(e[t]), (function(r) {
                    return r + i + Object(y["map"])(Object(y["keys"])(e[t][r]), (function(n) {
                        var i = e[t][r][n];
                        return "d" === n && (i = 'path("' + i + '")'),
                        n + ":" + i + ";"
                    }
                    )).join(n) + a
                }
                )).join(n) + a
            }
            )).join(n);
            return o || s ? ["<![CDATA[", o, s, "]]>"].join(n) : ""
        }
        function z(t) {
            return {
                zrId: t,
                shadowCache: {},
                patternCache: {},
                gradientCache: {},
                clipPathCache: {},
                defs: {},
                cssNodes: {},
                cssAnims: {},
                cssClassIdx: 0,
                cssAnimIdx: 0,
                shadowIdx: 0,
                gradientIdx: 0,
                patternIdx: 0,
                clipPathIdx: 0
            }
        }
        function I(t, e, r, n) {
            return P("svg", "root", {
                width: t,
                height: e,
                xmlns: k,
                "xmlns:xlink": j,
                version: "1.1",
                baseProfile: "full",
                viewBox: !!n && "0 0 " + t + " " + e
            }, r)
        }
        var R = r("5e76")
          , F = r("8582")
          , B = r("20c8")
          , N = r("d4c6")
          , H = r("b362")
          , E = {
            cubicIn: "0.32,0,0.67,0",
            cubicOut: "0.33,1,0.68,1",
            cubicInOut: "0.65,0,0.35,1",
            quadraticIn: "0.11,0,0.5,0",
            quadraticOut: "0.5,1,0.89,1",
            quadraticInOut: "0.45,0,0.55,1",
            quarticIn: "0.5,0,0.75,0",
            quarticOut: "0.25,1,0.5,1",
            quarticInOut: "0.76,0,0.24,1",
            quinticIn: "0.64,0,0.78,0",
            quinticOut: "0.22,1,0.36,1",
            quinticInOut: "0.83,0,0.17,1",
            sinusoidalIn: "0.12,0,0.39,0",
            sinusoidalOut: "0.61,1,0.88,1",
            sinusoidalInOut: "0.37,0,0.63,1",
            exponentialIn: "0.7,0,0.84,0",
            exponentialOut: "0.16,1,0.3,1",
            exponentialInOut: "0.87,0,0.13,1",
            circularIn: "0.55,0,1,0.45",
            circularOut: "0,0.55,0.45,1",
            circularInOut: "0.85,0,0.15,1"
        }
          , W = "transform-origin";
        function q(t, e, r) {
            var i = Object(y["extend"])({}, t.shape);
            Object(y["extend"])(i, e),
            t.buildPath(r, i);
            var a = new d;
            return a.reset(Object(n["f"])(t)),
            r.rebuildPath(a, 1),
            a.generateStr(),
            a.getStr()
        }
        function X(t, e) {
            var r = e.originX
              , n = e.originY;
            (r || n) && (t[W] = r + "px " + n + "px")
        }
        var Y = {
            fill: "fill",
            opacity: "opacity",
            lineWidth: "stroke-width",
            lineDashOffset: "stroke-dashoffset"
        };
        function V(t, e) {
            var r = e.zrId + "-ani-" + e.cssAnimIdx++;
            return e.cssAnims[r] = t,
            r
        }
        function U(t, e, r) {
            var n, i, a = t.shape.paths, o = {};
            if (Object(y["each"])(a, (function(t) {
                var e = z(r.zrId);
                e.animation = !0,
                Z(t, {}, e, !0);
                var a = e.cssAnims
                  , s = e.cssNodes
                  , u = Object(y["keys"])(a)
                  , h = u.length;
                if (h) {
                    i = u[h - 1];
                    var l = a[i];
                    for (var c in l) {
                        var f = l[c];
                        o[c] = o[c] || {
                            d: ""
                        },
                        o[c].d += f.d || ""
                    }
                    for (var p in s) {
                        var d = s[p].animation;
                        d.indexOf(i) >= 0 && (n = d)
                    }
                }
            }
            )),
            n) {
                e.d = !1;
                var s = V(o, r);
                return n.replace(i, s)
            }
        }
        function G(t) {
            return Object(y["isString"])(t) ? E[t] ? "cubic-bezier(" + E[t] + ")" : Object(H["a"])(t) ? t : "" : ""
        }
        function Z(t, e, r, i) {
            var a = t.animators
              , o = a.length
              , s = [];
            if (t instanceof N["a"]) {
                var u = U(t, e, r);
                if (u)
                    s.push(u);
                else if (!o)
                    return
            } else if (!o)
                return;
            for (var h = {}, l = 0; l < o; l++) {
                var c = a[l]
                  , f = [c.getMaxTime() / 1e3 + "s"]
                  , p = G(c.getClip().easing)
                  , d = c.getDelay();
                p ? f.push(p) : f.push("linear"),
                d && f.push(d / 1e3 + "s"),
                c.getLoop() && f.push("infinite");
                var v = f.join(" ");
                h[v] = h[v] || [v, []],
                h[v][1].push(c)
            }
            function g(a) {
                var o, s = a[1], u = s.length, h = {}, l = {}, c = {}, f = "animation-timing-function";
                function p(t, e, r) {
                    for (var n = t.getTracks(), i = t.getMaxTime(), a = 0; a < n.length; a++) {
                        var o = n[a];
                        if (o.needsAnimate()) {
                            var s = o.keyframes
                              , u = o.propName;
                            if (r && (u = r(u)),
                            u)
                                for (var h = 0; h < s.length; h++) {
                                    var l = s[h]
                                      , c = Math.round(l.time / i * 100) + "%"
                                      , p = G(l.easing)
                                      , d = l.rawValue;
                                    (Object(y["isString"])(d) || Object(y["isNumber"])(d)) && (e[c] = e[c] || {},
                                    e[c][u] = l.rawValue,
                                    p && (e[c][f] = p))
                                }
                        }
                    }
                }
                for (var d = 0; d < u; d++) {
                    var v = s[d]
                      , g = v.targetName;
                    g ? "shape" === g && p(v, l) : !i && p(v, h)
                }
                for (var _ in h) {
                    var b = {};
                    Object(F["b"])(b, t),
                    Object(y["extend"])(b, h[_]);
                    var m = Object(n["g"])(b)
                      , x = h[_][f];
                    c[_] = m ? {
                        transform: m
                    } : {},
                    X(c[_], b),
                    x && (c[_][f] = x)
                }
                var w = !0;
                for (var _ in l) {
                    c[_] = c[_] || {};
                    var O = !o;
                    x = l[_][f];
                    O && (o = new B["a"]);
                    var k = o.len();
                    o.reset(),
                    c[_].d = q(t, l[_], o);
                    var j = o.len();
                    if (!O && k !== j) {
                        w = !1;
                        break
                    }
                    x && (c[_][f] = x)
                }
                if (!w)
                    for (var _ in c)
                        delete c[_].d;
                if (!i)
                    for (d = 0; d < u; d++) {
                        v = s[d],
                        g = v.targetName;
                        "style" === g && p(v, c, (function(t) {
                            return Y[t]
                        }
                        ))
                    }
                var S, T = Object(y["keys"])(c), C = !0;
                for (d = 1; d < T.length; d++) {
                    var P = T[d - 1]
                      , M = T[d];
                    if (c[P][W] !== c[M][W]) {
                        C = !1;
                        break
                    }
                    S = c[P][W]
                }
                if (C && S) {
                    for (var _ in c)
                        c[_][W] && delete c[_][W];
                    e[W] = S
                }
                if (Object(y["filter"])(T, (function(t) {
                    return Object(y["keys"])(c[t]).length > 0
                }
                )).length) {
                    var A = V(c, r);
                    return A + " " + a[0] + " both"
                }
            }
            for (var _ in h) {
                u = g(h[_]);
                u && s.push(u)
            }
            if (s.length) {
                var b = r.zrId + "-cls-" + r.cssClassIdx++;
                r.cssNodes["." + b] = {
                    animation: s.join(",")
                },
                e["class"] = b
            }
        }
        var K = r("76a5")
          , Q = r("726e")
          , $ = Math.round;
        function J(t) {
            return t && Object(y["isString"])(t.src)
        }
        function tt(t) {
            return t && Object(y["isFunction"])(t.toDataURL)
        }
        function et(t, e, r, i) {
            O((function(a, o) {
                var s = "fill" === a || "stroke" === a;
                s && Object(n["k"])(o) ? vt(e, t, a, i) : s && Object(n["n"])(o) ? yt(r, t, a, i) : t[a] = o
            }
            ), e, r, !1),
            dt(r, t, i)
        }
        function rt(t) {
            return Object(n["j"])(t[0] - 1) && Object(n["j"])(t[1]) && Object(n["j"])(t[2]) && Object(n["j"])(t[3] - 1)
        }
        function nt(t) {
            return Object(n["j"])(t[4]) && Object(n["j"])(t[5])
        }
        function it(t, e, r) {
            if (e && (!nt(e) || !rt(e))) {
                var i = r ? 10 : 1e4;
                t.transform = rt(e) ? "translate(" + $(e[4] * i) / i + " " + $(e[5] * i) / i + ")" : Object(n["e"])(e)
            }
        }
        function at(t, e, r) {
            for (var n = t.points, i = [], a = 0; a < n.length; a++)
                i.push($(n[a][0] * r) / r),
                i.push($(n[a][1] * r) / r);
            e.points = i.join(" ")
        }
        function ot(t) {
            return !t.smooth
        }
        function st(t) {
            var e = Object(y["map"])(t, (function(t) {
                return "string" === typeof t ? [t, t] : t
            }
            ));
            return function(t, r, n) {
                for (var i = 0; i < e.length; i++) {
                    var a = e[i]
                      , o = t[a[0]];
                    null != o && (r[a[1]] = $(o * n) / n)
                }
            }
        }
        var ut = {
            circle: [st(["cx", "cy", "r"])],
            polyline: [at, ot],
            polygon: [at, ot]
        };
        function ht(t) {
            for (var e = t.animators, r = 0; r < e.length; r++)
                if ("shape" === e[r].targetName)
                    return !0;
            return !1
        }
        function lt(t, e) {
            var r = t.style
              , i = t.shape
              , a = ut[t.type]
              , o = {}
              , s = e.animation
              , u = "path"
              , h = t.style.strokePercent
              , l = e.compress && Object(n["f"])(t) || 4;
            if (!a || e.willUpdate || a[1] && !a[1](i) || s && ht(t) || h < 1) {
                t.path || t.createPathProxy();
                var c = t.path;
                t.shapeChanged() && (c.beginPath(),
                t.buildPath(c, t.shape),
                t.pathUpdated());
                var f = c.getVersion()
                  , p = t
                  , v = p.__svgPathBuilder;
                p.__svgPathVersion === f && v && h === p.__svgPathStrokePercent || (v || (v = p.__svgPathBuilder = new d),
                v.reset(l),
                c.rebuildPath(v, h),
                v.generateStr(),
                p.__svgPathVersion = f,
                p.__svgPathStrokePercent = h),
                o.d = v.getStr()
            } else {
                u = t.type;
                var y = Math.pow(10, l);
                a[0](i, o, y)
            }
            return it(o, t.transform),
            et(o, r, t, e),
            e.animation && Z(t, o, e),
            P(u, t.id + "", o)
        }
        function ct(t, e) {
            var r = t.style
              , n = r.image;
            if (n && !Object(y["isString"])(n) && (J(n) ? n = n.src : tt(n) && (n = n.toDataURL())),
            n) {
                var i = r.x || 0
                  , a = r.y || 0
                  , o = r.width
                  , s = r.height
                  , u = {
                    href: n,
                    width: o,
                    height: s
                };
                return i && (u.x = i),
                a && (u.y = a),
                it(u, t.transform),
                et(u, r, t, e),
                e.animation && Z(t, u, e),
                P("image", t.id + "", u)
            }
        }
        function ft(t, e) {
            var r = t.style
              , i = r.text;
            if (null != i && (i += ""),
            i && !isNaN(r.x) && !isNaN(r.y)) {
                var a = r.font || Q["a"]
                  , s = r.x || 0
                  , u = Object(n["b"])(r.y || 0, Object(o["e"])(a), r.textBaseline)
                  , h = n["a"][r.textAlign] || r.textAlign
                  , l = {
                    "dominant-baseline": "central",
                    "text-anchor": h
                };
                if (Object(K["b"])(r)) {
                    var c = ""
                      , f = r.fontStyle
                      , p = Object(K["c"])(r.fontSize);
                    if (!parseFloat(p))
                        return;
                    var d = r.fontFamily || Q["b"]
                      , v = r.fontWeight;
                    c += "font-size:" + p + ";font-family:" + d + ";",
                    f && "normal" !== f && (c += "font-style:" + f + ";"),
                    v && "normal" !== v && (c += "font-weight:" + v + ";"),
                    l.style = c
                } else
                    l.style = "font: " + a;
                return i.match(/\s/) && (l["xml:space"] = "preserve"),
                s && (l.x = s),
                u && (l.y = u),
                it(l, t.transform),
                et(l, r, t, e),
                e.animation && Z(t, l, e),
                P("text", t.id + "", l, void 0, i)
            }
        }
        function pt(t, e) {
            return t instanceof i["b"] ? lt(t, e) : t instanceof a["a"] ? ct(t, e) : t instanceof s["a"] ? ft(t, e) : void 0
        }
        function dt(t, e, r) {
            var i = t.style;
            if (Object(n["i"])(i)) {
                var a = Object(n["h"])(t)
                  , o = r.shadowCache
                  , s = o[a];
                if (!s) {
                    var u = t.getGlobalScale()
                      , h = u[0]
                      , l = u[1];
                    if (!h || !l)
                        return;
                    var c = i.shadowOffsetX || 0
                      , f = i.shadowOffsetY || 0
                      , p = i.shadowBlur
                      , d = Object(n["p"])(i.shadowColor)
                      , v = d.opacity
                      , y = d.color
                      , g = p / 2 / h
                      , _ = p / 2 / l
                      , b = g + " " + _;
                    s = r.zrId + "-s" + r.shadowIdx++,
                    r.defs[s] = P("filter", s, {
                        id: s,
                        x: "-100%",
                        y: "-100%",
                        width: "300%",
                        height: "300%"
                    }, [P("feDropShadow", "", {
                        dx: c / h,
                        dy: f / l,
                        stdDeviation: b,
                        "flood-color": y,
                        "flood-opacity": v
                    })]),
                    o[a] = s
                }
                e.filter = Object(n["d"])(s)
            }
        }
        function vt(t, e, r, i) {
            var a, o = t[r], s = {
                gradientUnits: o.global ? "userSpaceOnUse" : "objectBoundingBox"
            };
            if (Object(n["m"])(o))
                a = "linearGradient",
                s.x1 = o.x,
                s.y1 = o.y,
                s.x2 = o.x2,
                s.y2 = o.y2;
            else {
                if (!Object(n["o"])(o))
                    return void 0;
                a = "radialGradient",
                s.cx = Object(y["retrieve2"])(o.x, .5),
                s.cy = Object(y["retrieve2"])(o.y, .5),
                s.r = Object(y["retrieve2"])(o.r, .5)
            }
            for (var u = o.colorStops, h = [], l = 0, c = u.length; l < c; ++l) {
                var f = 100 * Object(n["q"])(u[l].offset) + "%"
                  , p = u[l].color
                  , d = Object(n["p"])(p)
                  , v = d.color
                  , g = d.opacity
                  , _ = {
                    offset: f
                };
                _["stop-color"] = v,
                g < 1 && (_["stop-opacity"] = g),
                h.push(P("stop", l + "", _))
            }
            var b = P(a, "", s, h)
              , m = L(b)
              , x = i.gradientCache
              , w = x[m];
            w || (w = i.zrId + "-g" + i.gradientIdx++,
            x[m] = w,
            s.id = w,
            i.defs[w] = P(a, w, s, h)),
            e[r] = Object(n["d"])(w)
        }
        function yt(t, e, r, i) {
            var a, o = t.style[r], s = {
                patternUnits: "userSpaceOnUse"
            };
            if (Object(n["l"])(o)) {
                var u = o.imageWidth
                  , h = o.imageHeight
                  , l = void 0
                  , c = o.image;
                if (Object(y["isString"])(c) ? l = c : J(c) ? l = c.src : tt(c) && (l = c.toDataURL()),
                "undefined" === typeof Image) {
                    var f = "Image width/height must been given explictly in svg-ssr renderer.";
                    Object(y["assert"])(u, f),
                    Object(y["assert"])(h, f)
                } else if (null == u || null == h) {
                    var p = function(t, e) {
                        if (t) {
                            var r = t.elm
                              , n = t.attrs.width = u || e.width
                              , i = t.attrs.height = h || e.height;
                            r && (r.setAttribute("width", n),
                            r.setAttribute("height", i))
                        }
                    }
                      , d = Object(R["a"])(l, null, t, (function(t) {
                        p(v, t),
                        p(a, t)
                    }
                    ));
                    d && d.width && d.height && (u = u || d.width,
                    h = h || d.height)
                }
                a = P("image", "img", {
                    href: l,
                    width: u,
                    height: h
                }),
                s.width = u,
                s.height = h
            } else
                o.svgElement && (a = Object(y["clone"])(o.svgElement),
                s.width = o.svgWidth,
                s.height = o.svgHeight);
            if (a) {
                s.patternTransform = Object(n["g"])(o);
                var v = P("pattern", "", s, [a])
                  , g = L(v)
                  , _ = i.patternCache
                  , b = _[g];
                b || (b = i.zrId + "-p" + i.patternIdx++,
                _[g] = b,
                s.id = b,
                v = i.defs[b] = P("pattern", b, s, [a])),
                e[r] = Object(n["d"])(b)
            }
        }
        function gt(t, e, r) {
            var i = r.clipPathCache
              , a = r.defs
              , o = i[t.id];
            if (!o) {
                o = r.zrId + "-c" + r.clipPathIdx++;
                var s = {
                    id: o
                };
                i[t.id] = o,
                a[o] = P("clipPath", o, s, [lt(t, r)])
            }
            e["clip-path"] = Object(n["d"])(o)
        }
        function _t(t) {
            return document.createTextNode(t)
        }
        function bt(t, e, r) {
            t.insertBefore(e, r)
        }
        function mt(t, e) {
            t.removeChild(e)
        }
        function xt(t, e) {
            t.appendChild(e)
        }
        function wt(t) {
            return t.parentNode
        }
        function Ot(t) {
            return t.nextSibling
        }
        function kt(t, e) {
            t.textContent = e
        }
        var jt = 58
          , St = 120
          , Tt = P("", "");
        function Ct(t) {
            return void 0 === t
        }
        function Pt(t) {
            return void 0 !== t
        }
        function Mt(t, e, r) {
            for (var n = {}, i = e; i <= r; ++i) {
                var a = t[i].key;
                void 0 !== a && (n[a] = i)
            }
            return n
        }
        function At(t, e) {
            var r = t.key === e.key
              , n = t.tag === e.tag;
            return n && r
        }
        function Lt(t) {
            var e, r = t.children, n = t.tag;
            if (Pt(n)) {
                var i = t.elm = C(n);
                if (It(Tt, t),
                Object(y["isArray"])(r))
                    for (e = 0; e < r.length; ++e) {
                        var a = r[e];
                        null != a && xt(i, Lt(a))
                    }
                else
                    Pt(t.text) && !Object(y["isObject"])(t.text) && xt(i, _t(t.text))
            } else
                t.elm = _t(t.text);
            return t.elm
        }
        function Dt(t, e, r, n, i) {
            for (; n <= i; ++n) {
                var a = r[n];
                null != a && bt(t, Lt(a), e)
            }
        }
        function zt(t, e, r, n) {
            for (; r <= n; ++r) {
                var i = e[r];
                if (null != i)
                    if (Pt(i.tag)) {
                        var a = wt(i.elm);
                        mt(a, i.elm)
                    } else
                        mt(t, i.elm)
            }
        }
        function It(t, e) {
            var r, n = e.elm, i = t && t.attrs || {}, a = e.attrs || {};
            if (i !== a) {
                for (r in a) {
                    var o = a[r]
                      , s = i[r];
                    s !== o && (!0 === o ? n.setAttribute(r, "") : !1 === o ? n.removeAttribute(r) : r.charCodeAt(0) !== St ? n.setAttribute(r, o) : "xmlns:xlink" === r || "xmlns" === r ? n.setAttributeNS(S, r, o) : r.charCodeAt(3) === jt ? n.setAttributeNS(T, r, o) : r.charCodeAt(5) === jt ? n.setAttributeNS(j, r, o) : n.setAttribute(r, o))
                }
                for (r in i)
                    r in a || n.removeAttribute(r)
            }
        }
        function Rt(t, e, r) {
            var n, i, a, o, s = 0, u = 0, h = e.length - 1, l = e[0], c = e[h], f = r.length - 1, p = r[0], d = r[f];
            while (s <= h && u <= f)
                null == l ? l = e[++s] : null == c ? c = e[--h] : null == p ? p = r[++u] : null == d ? d = r[--f] : At(l, p) ? (Ft(l, p),
                l = e[++s],
                p = r[++u]) : At(c, d) ? (Ft(c, d),
                c = e[--h],
                d = r[--f]) : At(l, d) ? (Ft(l, d),
                bt(t, l.elm, Ot(c.elm)),
                l = e[++s],
                d = r[--f]) : At(c, p) ? (Ft(c, p),
                bt(t, c.elm, l.elm),
                c = e[--h],
                p = r[++u]) : (Ct(n) && (n = Mt(e, s, h)),
                i = n[p.key],
                Ct(i) ? bt(t, Lt(p), l.elm) : (a = e[i],
                a.tag !== p.tag ? bt(t, Lt(p), l.elm) : (Ft(a, p),
                e[i] = void 0,
                bt(t, a.elm, l.elm))),
                p = r[++u]);
            (s <= h || u <= f) && (s > h ? (o = null == r[f + 1] ? null : r[f + 1].elm,
            Dt(t, o, r, u, f)) : zt(t, e, s, h))
        }
        function Ft(t, e) {
            var r = e.elm = t.elm
              , n = t.children
              , i = e.children;
            t !== e && (It(t, e),
            Ct(e.text) ? Pt(n) && Pt(i) ? n !== i && Rt(r, n, i) : Pt(i) ? (Pt(t.text) && kt(r, ""),
            Dt(r, null, i, 0, i.length - 1)) : Pt(n) ? zt(r, n, 0, n.length - 1) : Pt(t.text) && kt(r, "") : t.text !== e.text && (Pt(n) && zt(r, n, 0, n.length - 1),
            kt(r, e.text)))
        }
        function Bt(t, e) {
            if (At(t, e))
                Ft(t, e);
            else {
                var r = t.elm
                  , n = wt(r);
                Lt(e),
                null !== n && (bt(n, e.elm, Ot(r)),
                zt(n, [t], 0, 0))
            }
            return e
        }
        var Nt = r("3437")
          , Ht = 0
          , Et = function() {
            function t(t, e, r) {
                if (this.type = "svg",
                this.refreshHover = Wt("refreshHover"),
                this.configLayer = Wt("configLayer"),
                this.storage = e,
                this._opts = r = Object(y["extend"])({}, r),
                this.root = t,
                this._id = "zr" + Ht++,
                this._oldVNode = I(r.width, r.height),
                t && !r.ssr) {
                    var n = this._viewport = document.createElement("div");
                    n.style.cssText = "position:relative;overflow:hidden";
                    var i = this._svgDom = this._oldVNode.elm = C("svg");
                    It(null, this._oldVNode),
                    n.appendChild(i),
                    t.appendChild(n)
                }
                this.resize(r.width, r.height)
            }
            return t.prototype.getType = function() {
                return this.type
            }
            ,
            t.prototype.getViewportRoot = function() {
                return this._viewport
            }
            ,
            t.prototype.getViewportRootOffset = function() {
                var t = this.getViewportRoot();
                if (t)
                    return {
                        offsetLeft: t.offsetLeft || 0,
                        offsetTop: t.offsetTop || 0
                    }
            }
            ,
            t.prototype.getSvgDom = function() {
                return this._svgDom
            }
            ,
            t.prototype.refresh = function() {
                if (this.root) {
                    var t = this.renderToVNode({
                        willUpdate: !0
                    });
                    t.attrs.style = "position:absolute;left:0;top:0;user-select:none",
                    Bt(this._oldVNode, t),
                    this._oldVNode = t
                }
            }
            ,
            t.prototype.renderOneToVNode = function(t) {
                return pt(t, z(this._id))
            }
            ,
            t.prototype.renderToVNode = function(t) {
                t = t || {};
                var e = this.storage.getDisplayList(!0)
                  , r = this._backgroundColor
                  , i = this._width
                  , a = this._height
                  , o = z(this._id);
                o.animation = t.animation,
                o.willUpdate = t.willUpdate,
                o.compress = t.compress;
                var s = [];
                if (r && "none" !== r) {
                    var u = Object(n["p"])(r)
                      , h = u.color
                      , l = u.opacity;
                    this._bgVNode = P("rect", "bg", {
                        width: i,
                        height: a,
                        x: "0",
                        y: "0",
                        id: "0",
                        fill: h,
                        "fill-opacity": l
                    }),
                    s.push(this._bgVNode)
                } else
                    this._bgVNode = null;
                var c = t.compress ? null : this._mainVNode = P("g", "main", {}, []);
                this._paintList(e, o, c ? c.children : s),
                c && s.push(c);
                var f = Object(y["map"])(Object(y["keys"])(o.defs), (function(t) {
                    return o.defs[t]
                }
                ));
                if (f.length && s.push(P("defs", "defs", {}, f)),
                t.animation) {
                    var p = D(o.cssNodes, o.cssAnims, {
                        newline: !0
                    });
                    if (p) {
                        var d = P("style", "stl", {}, [], p);
                        s.push(d)
                    }
                }
                return I(i, a, s, t.useViewBox)
            }
            ,
            t.prototype.renderToString = function(t) {
                return t = t || {},
                L(this.renderToVNode({
                    animation: Object(y["retrieve2"])(t.cssAnimation, !0),
                    willUpdate: !1,
                    compress: !0,
                    useViewBox: Object(y["retrieve2"])(t.useViewBox, !0)
                }), {
                    newline: !0
                })
            }
            ,
            t.prototype.setBackgroundColor = function(t) {
                this._backgroundColor = t;
                var e = this._bgVNode;
                if (e && e.elm) {
                    var r = Object(n["p"])(t)
                      , i = r.color
                      , a = r.opacity;
                    e.elm.setAttribute("fill", i),
                    a < 1 && e.elm.setAttribute("fill-opacity", a)
                }
            }
            ,
            t.prototype.getSvgRoot = function() {
                return this._mainVNode && this._mainVNode.elm
            }
            ,
            t.prototype._paintList = function(t, e, r) {
                for (var n, i, a = t.length, o = [], s = 0, u = 0, h = 0; h < a; h++) {
                    var l = t[h];
                    if (!l.invisible) {
                        var c = l.__clipPaths
                          , f = c && c.length || 0
                          , p = i && i.length || 0
                          , d = void 0;
                        for (d = Math.max(f - 1, p - 1); d >= 0; d--)
                            if (c && i && c[d] === i[d])
                                break;
                        for (var v = p - 1; v > d; v--)
                            s--,
                            n = o[s - 1];
                        for (var y = d + 1; y < f; y++) {
                            var g = {};
                            gt(c[y], g, e);
                            var _ = P("g", "clip-g-" + u++, g, []);
                            (n ? n.children : r).push(_),
                            o[s++] = _,
                            n = _
                        }
                        i = c;
                        var b = pt(l, e);
                        b && (n ? n.children : r).push(b)
                    }
                }
            }
            ,
            t.prototype.resize = function(t, e) {
                var r = this._opts
                  , n = this.root
                  , i = this._viewport;
                if (null != t && (r.width = t),
                null != e && (r.height = e),
                n && i && (i.style.display = "none",
                t = Object(Nt["b"])(n, 0, r),
                e = Object(Nt["b"])(n, 1, r),
                i.style.display = ""),
                this._width !== t || this._height !== e) {
                    if (this._width = t,
                    this._height = e,
                    i) {
                        var a = i.style;
                        a.width = t + "px",
                        a.height = e + "px"
                    }
                    var o = this._svgDom;
                    o && (o.setAttribute("width", t),
                    o.setAttribute("height", e))
                }
            }
            ,
            t.prototype.getWidth = function() {
                return this._width
            }
            ,
            t.prototype.getHeight = function() {
                return this._height
            }
            ,
            t.prototype.dispose = function() {
                this.root && (this.root.innerHTML = ""),
                this._svgDom = this._viewport = this.storage = this._oldVNode = this._bgVNode = this._mainVNode = null
            }
            ,
            t.prototype.clear = function() {
                this._svgDom && (this._svgDom.innerHTML = null),
                this._oldVNode = null
            }
            ,
            t.prototype.toDataURL = function(t) {
                var e = encodeURIComponent(this.renderToString())
                  , r = "data:image/svg+xml;";
                return t ? (e = Object(n["c"])(e),
                e && r + "base64," + e) : r + "charset=UTF-8," + e
            }
            ,
            t
        }();
        function Wt(t) {
            return function() {
                0
            }
        }
        e["a"] = Et
    },
    dce8: function(t, e, r) {
        "use strict";
        var n = function() {
            function t(t, e) {
                this.x = t || 0,
                this.y = e || 0
            }
            return t.prototype.copy = function(t) {
                return this.x = t.x,
                this.y = t.y,
                this
            }
            ,
            t.prototype.clone = function() {
                return new t(this.x,this.y)
            }
            ,
            t.prototype.set = function(t, e) {
                return this.x = t,
                this.y = e,
                this
            }
            ,
            t.prototype.equal = function(t) {
                return t.x === this.x && t.y === this.y
            }
            ,
            t.prototype.add = function(t) {
                return this.x += t.x,
                this.y += t.y,
                this
            }
            ,
            t.prototype.scale = function(t) {
                this.x *= t,
                this.y *= t
            }
            ,
            t.prototype.scaleAndAdd = function(t, e) {
                this.x += t.x * e,
                this.y += t.y * e
            }
            ,
            t.prototype.sub = function(t) {
                return this.x -= t.x,
                this.y -= t.y,
                this
            }
            ,
            t.prototype.dot = function(t) {
                return this.x * t.x + this.y * t.y
            }
            ,
            t.prototype.len = function() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            }
            ,
            t.prototype.lenSquare = function() {
                return this.x * this.x + this.y * this.y
            }
            ,
            t.prototype.normalize = function() {
                var t = this.len();
                return this.x /= t,
                this.y /= t,
                this
            }
            ,
            t.prototype.distance = function(t) {
                var e = this.x - t.x
                  , r = this.y - t.y;
                return Math.sqrt(e * e + r * r)
            }
            ,
            t.prototype.distanceSquare = function(t) {
                var e = this.x - t.x
                  , r = this.y - t.y;
                return e * e + r * r
            }
            ,
            t.prototype.negate = function() {
                return this.x = -this.x,
                this.y = -this.y,
                this
            }
            ,
            t.prototype.transform = function(t) {
                if (t) {
                    var e = this.x
                      , r = this.y;
                    return this.x = t[0] * e + t[2] * r + t[4],
                    this.y = t[1] * e + t[3] * r + t[5],
                    this
                }
            }
            ,
            t.prototype.toArray = function(t) {
                return t[0] = this.x,
                t[1] = this.y,
                t
            }
            ,
            t.prototype.fromArray = function(t) {
                this.x = t[0],
                this.y = t[1]
            }
            ,
            t.set = function(t, e, r) {
                t.x = e,
                t.y = r
            }
            ,
            t.copy = function(t, e) {
                t.x = e.x,
                t.y = e.y
            }
            ,
            t.len = function(t) {
                return Math.sqrt(t.x * t.x + t.y * t.y)
            }
            ,
            t.lenSquare = function(t) {
                return t.x * t.x + t.y * t.y
            }
            ,
            t.dot = function(t, e) {
                return t.x * e.x + t.y * e.y
            }
            ,
            t.add = function(t, e, r) {
                t.x = e.x + r.x,
                t.y = e.y + r.y
            }
            ,
            t.sub = function(t, e, r) {
                t.x = e.x - r.x,
                t.y = e.y - r.y
            }
            ,
            t.scale = function(t, e, r) {
                t.x = e.x * r,
                t.y = e.y * r
            }
            ,
            t.scaleAndAdd = function(t, e, r, n) {
                t.x = e.x + r.x * n,
                t.y = e.y + r.y * n
            }
            ,
            t.lerp = function(t, e, r, n) {
                var i = 1 - n;
                t.x = i * e.x + n * r.x,
                t.y = i * e.y + n * r.y
            }
            ,
            t
        }();
        e["a"] = n
    },
    dd4f: function(t, e, r) {
        "use strict";
        var n = r("21a10")
          , i = r("19eb")
          , a = r("e86a")
          , o = r("cbe5")
          , s = r("6d8b")
          , u = r("726e")
          , h = Object(s["defaults"])({
            strokeFirst: !0,
            font: u["a"],
            x: 0,
            y: 0,
            textAlign: "left",
            textBaseline: "top",
            miterLimit: 2
        }, o["a"])
          , l = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return Object(n["a"])(e, t),
            e.prototype.hasStroke = function() {
                var t = this.style
                  , e = t.stroke;
                return null != e && "none" !== e && t.lineWidth > 0
            }
            ,
            e.prototype.hasFill = function() {
                var t = this.style
                  , e = t.fill;
                return null != e && "none" !== e
            }
            ,
            e.prototype.createStyle = function(t) {
                return Object(s["createObject"])(h, t)
            }
            ,
            e.prototype.setBoundingRect = function(t) {
                this._rect = t
            }
            ,
            e.prototype.getBoundingRect = function() {
                var t = this.style;
                if (!this._rect) {
                    var e = t.text;
                    null != e ? e += "" : e = "";
                    var r = Object(a["d"])(e, t.font, t.textAlign, t.textBaseline);
                    if (r.x += t.x || 0,
                    r.y += t.y || 0,
                    this.hasStroke()) {
                        var n = t.lineWidth;
                        r.x -= n / 2,
                        r.y -= n / 2,
                        r.width += n,
                        r.height += n
                    }
                    this._rect = r
                }
                return this._rect
            }
            ,
            e.initDefaultProps = function() {
                var t = e.prototype;
                t.dirtyRectTolerance = 10
            }(),
            e
        }(i["c"]);
        l.prototype.type = "tspan",
        e["a"] = l
    },
    dded: function(t, e, r) {
        "use strict";
        var n = r("21a10")
          , i = r("42e5")
          , a = function(t) {
            function e(e, r, n, i, a) {
                var o = t.call(this, i) || this;
                return o.x = null == e ? .5 : e,
                o.y = null == r ? .5 : r,
                o.r = null == n ? .5 : n,
                o.type = "radial",
                o.global = a || !1,
                o
            }
            return Object(n["a"])(e, t),
            e
        }(i["a"]);
        e["a"] = a
    },
    e263: function(t, e, r) {
        "use strict";
        r.d(e, "d", (function() {
            return p
        }
        )),
        r.d(e, "c", (function() {
            return d
        }
        )),
        r.d(e, "b", (function() {
            return g
        }
        )),
        r.d(e, "e", (function() {
            return _
        }
        )),
        r.d(e, "a", (function() {
            return b
        }
        ));
        var n = r("401b")
          , i = r("4a3f")
          , a = Math.min
          , o = Math.max
          , s = Math.sin
          , u = Math.cos
          , h = 2 * Math.PI
          , l = n["create"]()
          , c = n["create"]()
          , f = n["create"]();
        function p(t, e, r) {
            if (0 !== t.length) {
                for (var n = t[0], i = n[0], s = n[0], u = n[1], h = n[1], l = 1; l < t.length; l++)
                    n = t[l],
                    i = a(i, n[0]),
                    s = o(s, n[0]),
                    u = a(u, n[1]),
                    h = o(h, n[1]);
                e[0] = i,
                e[1] = u,
                r[0] = s,
                r[1] = h
            }
        }
        function d(t, e, r, n, i, s) {
            i[0] = a(t, r),
            i[1] = a(e, n),
            s[0] = o(t, r),
            s[1] = o(e, n)
        }
        var v = []
          , y = [];
        function g(t, e, r, n, s, u, h, l, c, f) {
            var p = i["c"]
              , d = i["a"]
              , g = p(t, r, s, h, v);
            c[0] = 1 / 0,
            c[1] = 1 / 0,
            f[0] = -1 / 0,
            f[1] = -1 / 0;
            for (var _ = 0; _ < g; _++) {
                var b = d(t, r, s, h, v[_]);
                c[0] = a(b, c[0]),
                f[0] = o(b, f[0])
            }
            g = p(e, n, u, l, y);
            for (_ = 0; _ < g; _++) {
                var m = d(e, n, u, l, y[_]);
                c[1] = a(m, c[1]),
                f[1] = o(m, f[1])
            }
            c[0] = a(t, c[0]),
            f[0] = o(t, f[0]),
            c[0] = a(h, c[0]),
            f[0] = o(h, f[0]),
            c[1] = a(e, c[1]),
            f[1] = o(e, f[1]),
            c[1] = a(l, c[1]),
            f[1] = o(l, f[1])
        }
        function _(t, e, r, n, s, u, h, l) {
            var c = i["j"]
              , f = i["h"]
              , p = o(a(c(t, r, s), 1), 0)
              , d = o(a(c(e, n, u), 1), 0)
              , v = f(t, r, s, p)
              , y = f(e, n, u, d);
            h[0] = a(t, s, v),
            h[1] = a(e, u, y),
            l[0] = o(t, s, v),
            l[1] = o(e, u, y)
        }
        function b(t, e, r, i, a, o, p, d, v) {
            var y = n["min"]
              , g = n["max"]
              , _ = Math.abs(a - o);
            if (_ % h < 1e-4 && _ > 1e-4)
                return d[0] = t - r,
                d[1] = e - i,
                v[0] = t + r,
                void (v[1] = e + i);
            if (l[0] = u(a) * r + t,
            l[1] = s(a) * i + e,
            c[0] = u(o) * r + t,
            c[1] = s(o) * i + e,
            y(d, l, c),
            g(v, l, c),
            a %= h,
            a < 0 && (a += h),
            o %= h,
            o < 0 && (o += h),
            a > o && !p ? o += h : a < o && p && (a += h),
            p) {
                var b = o;
                o = a,
                a = b
            }
            for (var m = 0; m < o; m += Math.PI / 2)
                m > a && (f[0] = u(m) * r + t,
                f[1] = s(m) * i + e,
                y(d, f, d),
                g(v, f, v))
        }
    },
    e86a: function(t, e, r) {
        "use strict";
        r.d(e, "f", (function() {
            return s
        }
        )),
        r.d(e, "d", (function() {
            return h
        }
        )),
        r.d(e, "a", (function() {
            return l
        }
        )),
        r.d(e, "b", (function() {
            return c
        }
        )),
        r.d(e, "e", (function() {
            return f
        }
        )),
        r.d(e, "g", (function() {
            return p
        }
        )),
        r.d(e, "c", (function() {
            return d
        }
        ));
        var n = r("9850")
          , i = r("d51b")
          , a = r("726e")
          , o = {};
        function s(t, e) {
            e = e || a["a"];
            var r = o[e];
            r || (r = o[e] = new i["a"](500));
            var n = r.get(t);
            return null == n && (n = a["d"].measureText(t, e).width,
            r.put(t, n)),
            n
        }
        function u(t, e, r, i) {
            var a = s(t, e)
              , o = f(e)
              , u = l(0, a, r)
              , h = c(0, o, i)
              , p = new n["a"](u,h,a,o);
            return p
        }
        function h(t, e, r, i) {
            var a = ((t || "") + "").split("\n")
              , o = a.length;
            if (1 === o)
                return u(a[0], e, r, i);
            for (var s = new n["a"](0,0,0,0), h = 0; h < a.length; h++) {
                var l = u(a[h], e, r, i);
                0 === h ? s.copy(l) : s.union(l)
            }
            return s
        }
        function l(t, e, r) {
            return "right" === r ? t -= e : "center" === r && (t -= e / 2),
            t
        }
        function c(t, e, r) {
            return "middle" === r ? t -= e / 2 : "bottom" === r && (t -= e),
            t
        }
        function f(t) {
            return s("国", t)
        }
        function p(t, e) {
            return "string" === typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
        }
        function d(t, e, r) {
            var n = e.position || "inside"
              , i = null != e.distance ? e.distance : 5
              , a = r.height
              , o = r.width
              , s = a / 2
              , u = r.x
              , h = r.y
              , l = "left"
              , c = "top";
            if (n instanceof Array)
                u += p(n[0], r.width),
                h += p(n[1], r.height),
                l = null,
                c = null;
            else
                switch (n) {
                case "left":
                    u -= i,
                    h += s,
                    l = "right",
                    c = "middle";
                    break;
                case "right":
                    u += i + o,
                    h += s,
                    c = "middle";
                    break;
                case "top":
                    u += o / 2,
                    h -= i,
                    l = "center",
                    c = "bottom";
                    break;
                case "bottom":
                    u += o / 2,
                    h += a + i,
                    l = "center";
                    break;
                case "inside":
                    u += o / 2,
                    h += s,
                    l = "center",
                    c = "middle";
                    break;
                case "insideLeft":
                    u += i,
                    h += s,
                    c = "middle";
                    break;
                case "insideRight":
                    u += o - i,
                    h += s,
                    l = "right",
                    c = "middle";
                    break;
                case "insideTop":
                    u += o / 2,
                    h += i,
                    l = "center";
                    break;
                case "insideBottom":
                    u += o / 2,
                    h += a - i,
                    l = "center",
                    c = "bottom";
                    break;
                case "insideTopLeft":
                    u += i,
                    h += i;
                    break;
                case "insideTopRight":
                    u += o - i,
                    h += i,
                    l = "right";
                    break;
                case "insideBottomLeft":
                    u += i,
                    h += a - i,
                    c = "bottom";
                    break;
                case "insideBottomRight":
                    u += o - i,
                    h += a - i,
                    l = "right",
                    c = "bottom";
                    break
                }
            return t = t || {},
            t.x = u,
            t.y = h,
            t.align = l,
            t.verticalAlign = c,
            t
        }
    }
}]);
