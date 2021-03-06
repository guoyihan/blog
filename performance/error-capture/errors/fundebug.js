module.exports = function (a) {
    function b(d) { if (c[d]) return c[d].exports; var e = c[d] = { i: d, l: !1, exports: {} }; return a[d].call(e.exports, e, e.exports, b), e.l = !0, e.exports } var c = {}; return b.m = a, b.c = c, b.i = function (a) { return a }, b.d = function (a, c, d) { b.o(a, c) || Object.defineProperty(a, c, { configurable: !1, enumerable: !0, get: d }) }, b.n = function (a) { var c = a && a.__esModule ? function () { return a.default } : function () { return a }; return b.d(c, "a", c), c }, b.o = function (a, b) { return Object.prototype.hasOwnProperty.call(a, b) }, b.p = "", b(b.s = 7)
}
    ([function (a, b, c) {
        (function (b) {
            var d = c(6),
                e = c(5),
                f = { releaseStage: process.env.NODE_ENV || "production", notifierVersion: function (a) { try { return (! function () { var a = new Error('Cannot find module "."'); throw a.code = "MODULE_NOT_FOUND", a }()).version } catch (a) { return null } }(d.join(b, "..")), server: { hostname: e.hostname(), platform: e.platform(), release: e.release(), nodeVersion: process.version } };
            f.configure = function (a) { a && a && (a.apikey && (f.apikey = a.apikey), a.hasOwnProperty("silent") && (f.silent = a.silent), a.appVersion && (f.appVersion = a.appVersion), a.releaseStage && (f.releaseStage = a.releaseStage), a.user && (f.user = a.user), a.metaData && (f.metaData = a.metaData)) }, a.exports = f
        }).call(b, "/")
    }, function (a, b, c) {
        function d(a, b) {
            delete a.silent; var c = JSON.stringify(a),
                d = { hostname: g.hostname, port: g.port, path: "/nodejs/", method: "POST", headers: { "Content-Type": "application/json;charset=utf-8", "Content-Length": Buffer.byteLength(c, "utf8") } },
                e = g.request(d, function (a) { if (b) return 200 === a.statusCode ? b(null, a.body) : b(new Error(a.body)) });
            e.on("error", function (a) { if (b) return b(a) }), e.write(c), e.end()
        } var e = c(3),
            f = c(4),
            g = (e.request, { request: f.request, hostname: "fundebug.com", port: 443 });
        a.exports = d
    }, function (a, b) {
        function c(a) { throw new Error("Cannot find module '" + a + "'.") } c.keys = function () { return [] }, c.resolve = c, a.exports = c, c.id = 2
    }, function (a, b) { a.exports = require("http") }, function (a, b) { a.exports = require("https") }, function (a, b) { a.exports = require("os") }, function (a, b) { a.exports = require("path") }, function (a, b, c) {
        function d(a, b, c) { var d = {}; return d.name = a.name, d.message = a.message, d.stacktrace = a.stack, d.notifierVersion = b.notifierVersion, d.server = b.server, d.apikey = g.apikey || b.apikey, d.silent = g.silent || b.silent || !1, d.appVersion = g.appVersion || b.appVersion, d.releaseStage = g.releaseStage || b.releaseStage, d.user = g.user || b.user, d.metaData = g.metaData || b.metaData, d.severity = c.severity || "error", c && (c.req && (d.req = c.req), c.res && (d.res = c.res), c.type && (d.type = c.type), c.user && (d.user = c.user), c.metaData && (d.metaData = c.metaData)), d } var e = c(0),
            f = c(1),
            g = {};
        process.on("uncaughtException", function (a) { g.notifyError(a, { type: "uncaughtError" }, function () { process.exit(1) }) }), process.on("unhandledRejection", function (a) { g.notifyError(a, { type: "uncaughtError" }) });


        var h = { logError: function (a) { } };
        g.config = e.configure,
            g.notifyError = function (a, b, c) {
                console.log(a), "function" == typeof b && (c = b, b = {}), b || (b = {}), b.type || (b.type = "caughtError"); var g = d(a, e, b); !g.silent && g.apikey && f(g, c)
            }, g.notify =
            function (a, b, c, g) { if (a) { "object" == typeof b ? (g = c, c = b, b = null) : "function" == typeof b && (g = b, c = {}, b = null), "function" == typeof c && (g = c, c = {}), c || (c = {}), c.type = "notification", c.severity = "info"; var h = d({ name: a, message: b }, e, c); !h.silent && h.apikey && f(h, g) } }, g.ExpressErrorHandler = function (a, b, c, d) { g.notifyError(a, { req: { method: b.method, ip: b.ip, protocol: b.protocol, hostname: b.hostname, path: b.path, port: b.socket.localPort }, res: { statusCode: c.statusCode, statusMessage: c.statusMessage }, type: "expressError" }), d(a) },
            g.KoaErrorHandler = function (a, b) {
                g.notifyError(a, {
                    req: {
                        method: b.request.method,
                        ip: b.request.ip,
                        protocol: b.request.protocol,
                        hostname: b.request.hostname,
                        path: b.request.path,
                        port: b.request.socket.localPort
                    },
                    res: {
                        statusCode: b.response.status,
                        statusMessage: b.response.message
                    },
                    type: "koaError"
                })
            },
            g.HapiErrorHandler = function (a, b) {
                (b || 200 !== a.raw.res.statusCode) &&
                    (b || (b = { name: a.raw.res.statusCode, message: a.raw.res.statusMessage }), g.notifyError(b, { req: { method: a.method, ip: a.info.remoteAddress, protocol: a.connection.info.protocol, hostname: a.info.hostname, path: a.path, port: a.connection.info.port }, res: { statusCode: a.raw.res.statusCode, statusMessage: a.raw.res.statusMessage }, type: "hapiError" }))
            }, a.exports = g
    }]);