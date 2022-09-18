// v1.0.2

! function() {
    var e, a, c, r, s, n, t, o, f, i, u, b;
    let l = (...e) => new Uint8Array(...e),
        h = (...e) => new Uint16Array(...e);

    function k() {
        this.t = h(16), this.o = h(288)
    }

    function w(e, a) {
        this.i = e, this.u = 0, this.l = 0, this.h = 0, this.k = a, this.v = 0, this.p = new k, this.A = new k
    }

    function v(e, a, c, r) {
        var s, n;
        for (s = 0; c > s; ++s) e[s] = 0;
        for (s = 0; 30 - c > s; ++s) e[s + c] = s / c | 0;
        for (n = r, s = 0; 30 > s; ++s) a[s] = n, n += 1 << e[s]
    }

    function d(e, a, c, r) {
        var s, n;
        for (s = 0; 16 > s; ++s) e.t[s] = 0;
        for (s = 0; r > s; ++s) e.t[a[c + s]]++;
        for (e.t[0] = 0, n = 0, s = 0; 16 > s; ++s) b[s] = n, n += e.t[s];
        for (s = 0; r > s; ++s) a[c + s] && (e.o[b[a[c + s]]++] = s)
    }

    function p(e) {
        e.h-- || (e.l = e.i[e.u++], e.h = 7);
        var a = 1 & e.l;
        return e.l >>>= 1, a
    }

    function A(e, a, c) {
        if (!a) return c;
        for (; 24 > e.h;) e.l |= e.i[e.u++] << e.h, e.h += 8;
        var r = e.l & 65535 >>> 16 - a;
        return e.l >>>= a, e.h -= a, r + c
    }

    function z(e, a) {
        for (var c, r, s, n; 24 > e.h;) e.l |= e.i[e.u++] << e.h, e.h += 8;
        c = 0, r = 0, s = 0, n = e.l;
        do {
            r = 2 * r + (1 & n), n >>>= 1, ++s, c += a.t[s], r -= a.t[s]
        } while (r >= 0);
        return e.l = n, e.h -= s, a.o[c + r]
    }

    function X(e, a, c) {
        var r, s, n, t, o, b, l = A(e, 5, 257),
            h = A(e, 5, 1),
            k = A(e, 4, 4);
        for (r = 0; 19 > r; ++r) u[r] = 0;
        for (r = 0; k > r; ++r) t = A(e, 3, 0), u[f[r]] = t;
        for (d(i, u, 0, 19), s = 0; l + h > s;) switch (o = z(e, i)) {
            case 16:
                for (b = u[s - 1], n = A(e, 2, 3); n; --n) u[s++] = b;
                break;
            case 17:
                for (n = A(e, 3, 3); n; --n) u[s++] = 0;
                break;
            case 18:
                for (n = A(e, 7, 11); n; --n) u[s++] = 0;
                break;
            default:
                u[s++] = o
        }
        d(a, u, 0, l), d(c, u, l, h)
    }

    function j(a, c, r) {
        for (var f, i, u, b, l;;) {
            if (256 === (f = z(a, c))) return e;
            if (256 > f) a.k[a.v++] = f;
            else
                for (i = A(a, s[f -= 257], n[f]), u = z(a, r), l = b = a.v - A(a, t[u], o[u]); b + i > l; ++l) a.k[a.v++] = a.k[l]
        }
    }

    function x(c) {
        for (var r, s; c.h > 8;) c.u--, c.h -= 8;
        if ((r = 256 * (r = c.i[c.u + 1]) + c.i[c.u]) !== (65535 & ~(256 * c.i[c.u + 3] + c.i[c.u + 2]))) return a;
        for (c.u += 4, s = r; s; --s) c.k[c.v++] = c.i[c.u++];
        return c.h = 0, e
    }

    function P(s, n) {
        var t, o, f = new w(s, n);
        do {
            switch (t = p(f), A(f, 2, 0)) {
                case 0:
                    o = x(f);
                    break;
                case 1:
                    o = j(f, c, r);
                    break;
                case 2:
                    X(f, f.p, f.A), o = j(f, f.p, f.A);
                    break;
                default:
                    o = a
            }
            if (o !== e) throw Error("Data error")
        } while (!t);
        return f.v < f.k.length ? "function" == typeof f.k.slice ? f.k.slice(0, f.v) : f.k.subarray(0, f.v) : f.k
    }

    function U(e, a = 0) {
        var c, r, s, n, t, o, f = e.replace(/[^A-Za-z0-9+/]/g, ""),
            i = f.length,
            u = a ? Math.ceil((3 * i + 1 >> 2) / a) * a : 3 * i + 1 >> 2,
            b = l(u);
        for (s = 0, n = 0, t = 0; i > t; t++)
            if (r = 3 & t, s |= ((o = f.charCodeAt(t)) > 64 && 91 > o ? o - 65 : o > 96 && 123 > o ? o - 71 : o > 47 && 58 > o ? o + 4 : 43 === o ? 62 : 47 === o ? 63 : 0) << 6 * (3 - r), 3 === r || i - t == 1) {
                for (c = 0; 3 > c && u > n; c++, n++) b[n] = s >>> (16 >>> c & 24) & 255;
                s = 0
            } return b
    }
    e = 0, a = -3, c = new k, r = new k, s = l(30), n = h(30), t = l(30), o = h(30), f = l([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), i = new k, u = l(320), b = h(16), ((e, a) => {
            var c;
            for (c = 0; 7 > c; ++c) e.t[c] = 0;
            for (e.t[7] = 24, e.t[8] = 152, e.t[9] = 112, c = 0; 24 > c; ++c) e.o[c] = 256 + c;
            for (c = 0; 144 > c; ++c) e.o[24 + c] = c;
            for (c = 0; 8 > c; ++c) e.o[168 + c] = 280 + c;
            for (c = 0; 112 > c; ++c) e.o[176 + c] = 144 + c;
            for (c = 0; 5 > c; ++c) a.t[c] = 0;
            for (a.t[5] = 32, c = 0; 32 > c; ++c) a.o[c] = c
        })(c, r), v(s, n, 4, 3), v(t, o, 2, 1), s[28] = 0, n[28] = 258,
        function(e, a = {}) {
            let c = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : a;
            let r = c;
            let s = "undefined" != typeof require ? require : null,
                n = U("AWoFAACNU9Fu40QUnXvnzjhpm6nbJuyyMWwekYJExFPfolAhGa2ASonEs5sMrSGxg+106UfxUTzzE5yx2+4uQquNHHvuueeeOXN97Y4OtZ/UTZWvG2d/vvnN4xlv/K954a+rcu+rJve16++rsimbh713L4tDVW7zm8muLHFNNlX2dlFV5Vtn7rPtwTv5MWvunNR/VI3T+4BnTVZ86/S6rJ2u88Lx9Q+uf+Nv8+I6UI+xffm7XzYPW+/6W+z8S74BHoXlVbZ3pioPxcbZXXnvV6WzAQ/Prs6NnxwhzprDrp7c+ibNmuVduXcR1u2itynXh50vGjcE9P3Wh3X93cMqu/0p23ln11lxn9XuvPB/PqWX+Q32unW99V2+3VS+cDbbbK6WSxwvaErbEVMH52OlxkRqzPhrZjUW3BSpmIAyxxoP0TPRkspC1OMvFSUjAPoZ0EqbVI8M/wVSaiZkUrMwz2mjjAD4QMCkMtL0N4XqCWncGLcpEzG/UlaRJbasrRYrxhprbWSjnu31bf8I9qziCPasMr1EiBNLMhCxqcyFU5my1iY2SEsPKZ1EZAZQSO3ccmqnbIysdPA8xUn5ko4pITpOmOw3iN8wfc336EQAv8JmBCRGUlE/0WQSQ3rQliMSRNxFU2amSzphCDFqbefwCA5PYIpAuiLSq5Y1CCz9jnX8vywXWAOwove0YotldDJDR+bWRFFkcfbovdoBalHTH7Qap0HDvdNod4ojLO3JDG2dRyZCc7r+/VfjqNOIn3w8ap49aT7mzz/N5+pjPi8+zefqYz6HQYMUDaaqw0lphzfUG+KdmTanT+ckQ2JNwBHGis+GbDR37HOgp2l4x3FqwjzqruoCyFmLnwecWXf8gF+0+PAD/jA40JjlBT/PPStOUh6RvMbHkdKCnjOw/FlKI9b/hC+IJ8xvFL9ANcbuhaKXSn8ehhVnmpOaET5YfjXDlCkah2jOFKLHGsxpwgLJL0LuUkIjEPKXgXMpOGmbNV1WQhbOXs/aqRUMtchQYzj5Xw=="),
                t = !!n[0],
                o = t ? n[1] | n[2] << 8 | n[3] << 16 | n[4] << 24 : n.length,
                f = t ? l(o) : l(n.buffer, 5, n.length - 5);
            t && P(l(n.buffer, 5, n.length - 5), f);
            let i = 0,
                u = {},
                b = [];
            let h = [],
                k = [],
                w = [];
            let v = 0,
                d = null,
                p = null,
                A = [],
                z = null;
            let X = [114, 101, 113, 117, 105, 114, 101].map((e => String.fromCharCode(e))).join("");
            a.X = {}, s && (a[X] = s);
            let j = new Float64Array(1),
                x = l(j.buffer);

            function y() {
                let e = 0,
                    a = 0,
                    c = 0;
                for (; c = f[i++], e |= (127 & c) << a, 0 != (128 & c);) a += 7;
                return e
            }

            function N() {
                return f[i++] | f[i++] << 8 | f[i++] << 16 | f[i++] << 24
            }

            function S() {
                let e = y();
                let a = "";
                for (let c = 0; e > c; c++) a += String.fromCharCode(y());
                return a
            }

            function W(e, a) {
                let c = u;
                return function s() {
                    let n = v,
                        t = {};
                    v = e;
                    let o = u;
                    u = t, u[e] = {};
                    let f = w[e],
                        l = f.length;
                    for (let e = 0; l > e; e++) {
                        let a = f[e];
                        let r = c[a];
                        t[a] = r
                    }
                    let h = b,
                        k = i,
                        X = d,
                        j = p,
                        x = r,
                        P = A;
                    let U = null,
                        y = null;
                    b = [], A = [], i = a, d = s, p = arguments, r = this;
                    try {
                        U = q()
                    } catch (e) {
                        if (A.length) {
                            let a = A.pop();
                            i = a, z = e, U = q()
                        } else y = e
                    }
                    if (A = P, i = k, b = h, d = X, u = o, v = n, p = j, r = x, y) throw y;
                    return U
                }
            }

            function q() {
                for (;;) {
                    let e = f[i++];
                    switch (e) {
                        case 26:
                            u[v][y()] = p;
                            break;
                        case 63:
                            b[f[i++]] = y();
                            break;
                        case 65:
                            b[f[i++]] = (x[0] = f[i++], x[1] = f[i++], x[2] = f[i++], x[3] = f[i++], x[4] = f[i++], x[5] = f[i++], x[6] = f[i++], x[7] = f[i++], j[0]);
                            break;
                        case 6: {
                            let e = y(),
                                a = y();
                            u[v][a] = p[e];
                            break
                        }
                        case 75:
                            b[f[i++]] = b[f[i++]];
                            break;
                        case 21:
                            b[f[i++]] = W(y(), N());
                            break;
                        case 0:
                            b[f[i++]] = h[y()];
                            break;
                        case 84:
                            b[f[i++]] = b[f[i++]] + b[f[i++]];
                            break;
                        case 7:
                            b[f[i++]] = b[f[i++]] / b[f[i++]];
                            break;
                        case 13:
                            b[f[i++]] = b[f[i++]] - b[f[i++]];
                            break;
                        case 67:
                            b[f[i++]] = b[f[i++]] * b[f[i++]];
                            break;
                        case 47:
                            b[f[i++]] = b[f[i++]] < b[f[i++]];
                            break;
                        case 72:
                            k.push(b[f[i++]]);
                            break;
                        case 20:
                            b[f[i++]] = b[f[i++]][b[f[i++]]] = b[f[i++]];
                            break;
                        case 48:
                            b[f[i++]] = b[f[i++]][b[f[i++]]];
                            break;
                        case 43: {
                            let e = y(),
                                a = Array(e);
                            for (let c = 0; e > c; c++) a[e - c - 1] = k.pop();
                            let c = f[i++],
                                r = f[i++],
                                s = f[i++],
                                n = b[r],
                                t = b[s];
                            b[c] = n[t].apply(n, a);
                            break
                        }
                        case 16: {
                            let e = f[i++],
                                r = !!f[i++],
                                s = y(),
                                n = h[s];
                            if (n in a) {
                                b[e] = a[n];
                                break
                            }
                            if (r && !(n in c)) throw new ReferenceError(n + " is not defined");
                            b[e] = c[n];
                            break
                        }
                        case 32: {
                            let e = {},
                                a = y(),
                                c = f[i++];
                            for (let c = 0; a > c; c++) {
                                let a = k.pop(),
                                    c = k.pop();
                                switch (k.pop()) {
                                    case 0:
                                        e[c] = a;
                                        break;
                                    case 1:
                                        Object.defineProperty(e, c, {
                                            get: a
                                        });
                                        break;
                                    case 2:
                                        Object.defineProperty(e, c, {
                                            set: a
                                        })
                                }
                            }
                            b[c] = e;
                            break
                        }
                        case 28:
                            b[f[i++]] = u[y()][y()];
                            break;
                        case 40:
                            b[f[i++]] = u[y()][y()] = b[f[i++]];
                            break;
                        case 56:
                            u[y()][y()] = b[f[i++]];
                            break;
                        case 44: {
                            let e = f[i++],
                                a = N();
                            b[e] || (i = a);
                            break
                        }
                        case 2:
                        case 23:
                            return b[0];
                        default:
                            throw "u" + e
                    }
                }
            }(() => {
                for (i = 0;;) {
                    let e = f[i++];
                    if (14 === e) h.push(S());
                    else {
                        if (27 !== e) return void i--; {
                            let e = y(),
                                a = y(),
                                c = [];
                            for (let e = 0; a > e; e++) c.push(y());
                            w[e] = c
                        }
                    }
                }
            })(), W(0, i).call(this)
        }(0, {})
}();
