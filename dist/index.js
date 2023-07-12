'use strict';

var React = require('react');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

/******************************************************************************
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
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var LineIcon = function (_a) {
    var name = _a.name, style = _a.style, rest = __rest(_a, ["name", "style"]);
    return React.createElement("i", __assign({ className: "lni lni-".concat(name), style: style }, rest));
};

var Svg500Px = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M35.6 7.8c-3.7 0-7.5.8-10.4 2-.3.1-.4.4-.4.7s.1.7.3 1.3c.1.4.7 1.7 1.6 1.3 3-1.1 6.1-1.7 9-1.7 3.2 0 6.5.7 9.6 2 2.4 1.1 4.7 2.5 7.2 4.7.1.1.4.1.6.1.4 0 1-.4 1.4-.8.7-.8 1.1-1.4.4-2-2.4-2.3-4.9-3.9-8.2-5.2-3.6-1.7-7.3-2.4-11.1-2.4z" }),
        React__namespace.createElement("path", { d: "M16.3 41.9s.3 1 .4 1.4c1.1 2.4 2.5 4.5 4.4 6.5 1.8 1.8 4.1 3.2 6.5 4.4 2.5 1.1 5.1 1.5 7.9 1.5 2.8 0 5.4-.6 7.9-1.5 2.4-1.1 4.5-2.5 6.5-4.4 1.8-1.8 3.2-4.1 4.4-6.5 1.1-2.5 1.5-5.1 1.5-7.9 0-2.8-.6-5.5-1.5-7.9-1.1-2.4-2.5-4.5-4.4-6.5-1.8-1.8-4.1-3.2-6.5-4.4-2.5-1.1-5.1-1.6-7.9-1.6-2.8 0-5.5.6-8 1.6-2 .8-5.4 3-7.3 5.1V4.9h28c1.1 0 1.1-1.4 1.1-2s0-2-1.1-2l-30.3.2c-.8 0-1.4.7-1.4 1.4V26c0 .7 1 1.3 1.8 1.4 1.7.4 2.1-.1 2.5-.7l.1-.1c.7-1 2.7-3 2.7-3 3.1-3.1 7.3-4.8 11.7-4.8s8.6 1.7 11.7 4.8 4.8 7.3 4.8 11.7S50.1 44 47 47.1c-3.1 3.1-7.3 4.8-11.8 4.8-3 0-5.9-.7-8.3-2.4V35.2c0-2 .8-3.9 2.3-5.5 1.6-1.7 3.8-2.8 6.1-2.8s4.5.8 6.1 2.4c1.5 1.6 2.4 3.7 2.4 5.9 0 4.8-3.8 8.5-8.5 8.5-1 0-2.7-.4-2.7-.4-1-.3-1.4 1.1-1.5 1.4-.4 1.7.3 2 .4 2.1 1.6.4 2.5.6 3.9.6 6.8 0 12.3-5.5 12.3-12.3 0-6.6-5.5-12.3-12.3-12.3-3.2 0-6.3 1.3-8.7 3.5-2.3 2.3-3.5 5.1-3.5 8V46.1c-1.3-1.4-2.5-3.5-3.4-5.8-.3-.8-1.1-.7-2-.4-.5.6-1.8 1-1.5 2z" }),
        React__namespace.createElement("path", { d: "M55.2 52.6c-.4-.4-.7-.7-1.1-.7-.3-.1-.6 0-.8.1l-.1.1c-2.3 2.3-4.8 4.1-7.8 5.2-3 1.3-6.2 2-9.6 2-3.2 0-6.5-.7-9.6-2-3-1.3-5.5-3-7.8-5.2-2.3-2.4-4.1-4.9-5.2-7.8-1.1-2.7-1.4-4.8-1.6-5.5v-.1c-.1-.7-.8-.8-2-.7-.3.2-1.6.3-1.6 1.3.4 2.3 1 4.5 1.8 6.5 1.4 3.4 3.5 6.3 6.1 8.9 2.7 2.7 5.6 4.6 8.9 6.1 3.5 1.4 7.2 2.3 11 2.3s7.5-.7 11-2.3c3.4-1.4 6.3-3.5 8.9-6.1l.1-.1c.2-.3.5-.8-.6-2zM30.7 38.5c0 .4.4.7.6 1l.1.1c.4.4.7.6 1.1.6.4 0 .4-.1.4-.1l2.3-2.3 2.1 2.1c.1.1.4.3.7.4.4 0 .7-.1 1.1-.6 1-1 .4-1.4.1-1.7l-2.1-2.1 2.3-2.4c.4-.6.1-1.1-.4-1.5-.7-.7-1.3-.7-1.7-.4l-2.3 2-2.1-2.3c-.1-.1-.3-.1-.4-.1-.3 0-.7.1-1.1.6-.7.7-.8 1.1-.4 1.6l2.3 2.3-2.1 2.4c-.4 0-.5.2-.5.4z" })));
};

var SvgAddFiles = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M38.6 22.1h-4.3v-4.3c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v4.3h-4.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h4.3V31c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3v-4.3h4.3c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" }),
        React__namespace.createElement("path", { d: "M50 1.8H14c-3.4 0-6.1 2.7-6.1 6.1V40c0 1.5.6 2.9 1.7 3.9l18 17c1 1 2.3 1.5 3.7 1.5H50c3.4 0 6.1-2.7 6.1-6.1V7.9c0-3.4-2.7-6.1-6.1-6.1zM15.7 43.4h11.7c.5 0 .9.4.9.8v11L15.7 43.4zm35.9 12.7c0 .9-.7 1.6-1.6 1.6H32.8V44.2c0-2.9-2.4-5.3-5.4-5.3h-15v-31c0-.9.7-1.6 1.6-1.6h36c.9 0 1.6.7 1.6 1.6v48.2z" })));
};

var SvgAdobe = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M40 6.1h23v51.6L40 6.1zm-16 0H1v51.6L24 6.1zm8 19.3L46.4 58h-9.7l-4.2-10.4H21.9L32 25.4z" })));
};

var SvgAgenda = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M46 1.8H18c-3.4 0-6.3 2.8-6.3 6.3v43.5c0 2.7 1.8 5 4.2 5.9V60c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-2.3H46c3.4 0 6.3-2.8 6.3-6.3V8c0-3.4-2.8-6.2-6.3-6.2zM18 53.2c-1 0-1.8-.8-1.8-1.8V39.7h20.2v13.5H18zm-1.8-18V21.7h20.2v13.5H16.2zm24.7-13.5h6.9v13.5h-6.9V21.7zM47.8 8v9.2h-6.9V6.3H46c1 0 1.8.7 1.8 1.7zM18 6.3h18.4v10.9H16.2V8c0-1 .8-1.7 1.8-1.7zm28 46.9h-5.1V39.7h6.9v11.8c0 1-.8 1.7-1.8 1.7z" })));
};

var SvgAirbnb = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 48.2c-3.5-4.4-5.5-8.2-6.2-11.6-3.1-12.3 15.6-12.3 12.5 0-.8 3.4-2.9 7.4-6.3 11.6zm19 10.1c-5.8 2.5-11.6-1.5-16.5-6.9 14.4-18 6.5-27.8-2.5-27.8-7.6 0-11.8 6.3-10.1 13.9 1 4.1 3.5 8.6 7.6 13.8-4.5 4.9-8.3 7.3-11.8 7.6C10.8 60 5.4 53.3 8 46.4c2.1-5.4 15.5-32 16.1-33.4 2.1-4.2 3.5-7.9 8.2-7.9 4.5 0 6.1 3.5 8.3 8.3 5.1 9.7 12.4 24.5 15.9 33 1.5 4.5-.4 9.8-5.5 11.9zm6.6-18.8C39.7 1.6 38.7 1 32 1c-6.3 0-9 4.4-11.7 10C5.5 40.5 4.2 44.5 3.9 45 .5 54.6 7.7 63 16.3 63c3 0 8.5-.8 15.6-8.6C40.1 63.3 46 63 47.5 63c8.7 0 15.9-8.5 12.4-18 .1-.6-2.3-5.4-2.3-5.5z" })));
};

var SvgAirtable = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M32.614 5.243c-1.158 0-2.32.229-3.414.685L5.38 15.778c-1.341.555-1.307 2.422.032 2.977l23.952 9.488a8.71 8.71 0 0 0 6.544 0l23.952-9.488c1.341-.523 1.341-2.422.032-2.976L36.006 5.928a8.68 8.68 0 0 0-3.392-.685Zm30.421 16.24a1.57 1.57 0 0 0-.592.12L35.744 31.94a1.632 1.632 0 0 0-1.013 1.504v23.723a1.6 1.6 0 0 0 2.19 1.472l26.7-10.373a1.555 1.555 0 0 0 1.014-1.47V23.075a1.6 1.6 0 0 0-1.6-1.59v-.002Zm-60.597.104a1.719 1.719 0 0 0-1.28.506c-.294.296-.523.654-.523 1.08v22.28c0 1.179 1.373 1.966 2.421 1.44l16.72-8.016.819-.392 7.917-3.829c1.243-.587 1.147-2.421-.162-2.912L2.99 21.701a1.52 1.52 0 0 0-.552-.117v.003Z" })));
};

var SvgAlarmClock = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M43.4 34.8h-9.1v-9.3c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v9.3h-.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h.3v.3c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3v-.3h9.1c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" }),
        React__namespace.createElement("path", { d: "M59.5 19.1c0-5.5-4.4-9.9-9.9-9.9-2.6 0-5 1-6.8 2.7-2.7-1.2-5.5-2-8.6-2.2V6.3H37c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H26.9c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h2.8v3.5c-3 .3-5.9 1-8.6 2.2-1.8-1.7-4.2-2.7-6.8-2.7-5.5 0-9.9 4.4-9.9 9.9 0 2.7 1.1 5.3 3.1 7.1-1.2 3-1.9 6.3-1.9 9.7 0 14.5 11.8 26.3 26.3 26.3S58.2 50.5 58.2 36c0-3.4-.7-6.7-1.9-9.7 2.1-1.9 3.2-4.5 3.2-7.2zm-9.9-5.4a5.378 5.378 0 0 1 4.6 8.2c-1.9-3-4.3-5.5-7.2-7.5.8-.5 1.7-.7 2.6-.7zM9 19.1c0-3 2.4-5.4 5.4-5.4.9 0 1.8.2 2.6.7-2.9 2-5.3 4.6-7.2 7.5-.5-.9-.8-1.8-.8-2.8zm23 38.7C20 57.8 10.2 48 10.2 36S20 14.2 32 14.2 53.8 24 53.8 36 44 57.8 32 57.8z" })));
};

var SvgAlarm = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m57.6 53.1-2-3.1c-.4-.6-.6-1.2-.6-1.9V27.3c0-5.9-2.5-11.4-7.1-15.5-3.7-3.3-8.5-5.4-13.6-5.8V4c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v1.9c-.2 0-.4 0-.6.1C17.5 7.3 8.8 16.6 8.8 27.7v20.4c-.1 1-.3 1.5-.5 1.8l-1.9 3.2c-.6 1-.6 2.2 0 3.2.6.9 1.6 1.5 2.7 1.5h20.7V60c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3v-2.2H55c1.1 0 2.1-.6 2.7-1.5.6-1 .6-2.2-.1-3.2zm-46.1.2.7-1.2c.6-1 .9-2.2 1.1-3.6V27.7c0-8.8 7-16.2 16.3-17.2 5.7-.6 11.3 1.1 15.4 4.7 3.6 3.2 5.6 7.5 5.6 12.1v20.8c0 1.5.4 2.9 1.3 4.3l.6.9h-41z" })));
};

var SvgAmazonOriginal = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56 46.2C48.4 49.4 40.1 51 32.6 51c-11 .1-21.8-3-30.6-8.2-.7-.4-1.4.3-.7 1 8 7.3 18.7 11.7 30.6 11.7 8.5 0 18.3-2.7 25.1-7.6 1.2-.9.2-2.2-1-1.7z" }),
        React__namespace.createElement("path", { d: "M62.7 42.4c-.7-1-7-1.7-11 1-.6.4-.4 1 .1 1 2.1-.3 7-.8 7.9.3s-1 5.6-1.7 7.7c-.3.6.3.8.8.4 3.8-3.1 4.8-9.5 3.9-10.4zM35.1 20.7c-3.2.3-7.6.6-10.6 2-3.5 1.5-6.1 4.6-6.1 9.2 0 5.9 3.7 8.9 8.5 8.9 3.9 0 6.2-1 9.3-4.1 1 1.4 1.4 2.3 3.2 3.8.4.1 1 .1 1.4-.1 1.1-1 3.2-2.8 4.4-3.7.4-.4.4-1 0-1.4-1-1.4-2.1-2.5-2.1-5.2v-8.9c0-3.7.3-7.2-2.5-9.7-2.1-2.1-5.8-2.8-8.5-2.8-5.4 0-11.3 2-12.5 8.6-.1.7.4 1.1.7 1.1l5.4.6c.6 0 .8-.6 1-1 .4-2.3 2.3-3.4 4.5-3.4 1.1 0 2.5.4 3.2 1.4.7 1.1.7 2.8.7 4.1v.6zM34 32.4c-.8 1.5-2.3 2.5-3.8 2.5-2.1 0-3.5-1.7-3.5-4.1 0-4.8 4.4-5.6 8.3-5.6v1.3c.1 2 .1 3.9-1 5.9z" })));
};

var SvgAmazonPay = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M1 39.5c0-.1.1-.3.3-.3.2-.1.5 0 .7.1 1.1.6 2.1 1.1 3.2 1.7 4.1 2 8.5 3.5 12.9 4.7 2.1.4 4.2.8 6.4 1.1 3.2.4 6.4.6 9.6.4 1.7 0 3.5-.1 5.4-.4 5.6-.7 11.3-2.1 16.5-4.4.3-.1.6-.1 1-.1.7.1.8.8.4 1.4-.3.3-.6.4-1 .7-3.1 2.1-6.5 3.7-10 4.8-2.5.7-5.1 1.4-7.6 1.7-4.7.5-9.6.6-14.3-.1-2.8-.4-5.5-1.1-8.2-2.1-1.6-.6-3.2-1.3-4.7-2-1.5-.8-3-1.6-4.5-2.5C5.6 43 4.3 42 2.9 41c-.2-.2-.5-.4-.7-.6-.2-.2-.4-.5-.8-.5-.1 0-.2-.1-.3-.1 0-.2-.1-.2-.1-.3zm16-26.6-.4.1c-1.4.1-2.7.7-3.8 1.6-.3.1-.4.4-.7.6v-.1c0-.3-.1-.6-.1-.8-.1-.4-.3-.7-.7-.7H10c-.7 0-.8.1-.8.8v21.5c0 .3.1.4.4.4h2.1c.3 0 .4-.1.4-.4v-7.6l.1.1c1.8 1.6 3.8 2 6.2 1.6 2-.4 3.5-1.7 4.5-3.5.7-1.4 1-3 1.1-4.5.1-1.7-.1-3.4-.7-5.1-.8-2-2.3-3.2-4.5-3.8-.3-.1-.7-.1-1-.1-.1-.1-.4-.1-.8-.1zm-4.7 4.4c0-.1.1-.3.1-.3 1.4-1 3-1.4 4.7-1.4 1.6.1 2.7.8 3.4 2.7.4 1.1.4 2.3.4 3.4s-.1 2.1-.4 3.1c-.7 2.1-2.3 3-4.4 3-1.4-.1-2.7-.6-3.8-1.4V17.3zm20.8-4.4h-.3c-1 0-2 .1-3 .4-.6.1-1.3.4-1.8.6-.4.1-.6.4-.6.7v1c0 .4.1.6.7.4.7-.1 1.6-.4 2.4-.6 1.3-.1 2.5-.3 3.8-.1.7.1 1.3.3 1.7.8.4.4.4 1.1.6 1.7v2.6h-.1c-1.1-.3-2.1-.4-3.2-.4-1.1-.1-2.3 0-3.4.4-1.4.4-2.3 1.3-3 2.5-.4 1-.6 2-.4 3.1.1 1.4.8 2.5 2.1 3.2 1.1.7 2.5.7 3.8.6 1.6-.1 3-.8 4.1-1.8.1 0 .1-.1.1-.1.1.4.1.7.1 1.1.1.3.3.4.6.4H39c.3 0 .4-.1.4-.4V18.2c0-.4 0-.8-.1-1.4-.1-1.4-.7-2.4-2-3.1-.7-.4-1.4-.6-2.3-.7-.4-.1-.7-.1-1.1-.1h-.8zm3.6 13c0 .1-.1.1-.1.3-1.1.7-2.4 1.4-3.8 1.6-.6.1-1.1 0-1.7-.1-.6-.1-1.1-.7-1.3-1.4-.1-.7-.1-1.4 0-2 .3-.8.8-1.4 1.7-1.6.7-.3 1.7-.3 2.5-.1.8.1 1.7.1 2.5.4.1 0 .1.1.1.3v1.4c0 .4.1.8.1 1.2zm26.1 13.2c0-.3-.2-.6-.6-.8-1-.5-2.4-.6-3.5-.6-2.3-.1-4.9.5-6.9 1.8-.1.1-.3.1-.4.4-.1.1-.1.3-.1.4s.1.1.4.1h.1c.7-.1 1.6-.1 2.3-.3 1.4-.3 3.2-.2 4.6 0 .3.1.5.1.7.3.4.3.4.9.3 1.4-.3 2.2-1.1 4.5-2.2 6.4-.1.1-.1.2-.1.3 0 .2.3.3.5.3.2-.1.4-.2.5-.4.3-.3.6-.6.8-.9 1-1.2 1.7-2.7 2.3-4.2.6-1.2 1.4-2.8 1.3-4.2zM49.7 26.6c-1.4-3.5-2.7-7.2-4-10.9-.1-.6-.4-1.1-.7-1.7-.1-.3-.3-.4-.7-.4H42c-.3 0-.4.1-.3.4.1.1.1.4.1.6 2 4.9 4 9.9 6.1 14.7.1.4.1.7 0 1.1-.3.7-.6 1.6-1 2.3-.3.7-.7 1.1-1.6 1.4-.4.3-1 .3-1.4.3-.3 0-.4-.1-.7-.1-.4 0-.4.1-.4.4v1c0 .6.1.7.7.8s1.1.1 1.7.1c1.7 0 3.1-.7 4-2.1.4-.6.7-1.3 1-1.8 2.4-6.1 4.8-12.1 7.2-18.2.1-.1.1-.4.1-.6 0-.3-.1-.4-.4-.4h-2c-.4 0-.7.1-.7.4-.1.1-.1.3-.1.4l-3.5 10.3c-.3.7-.4 1.4-.7 2.3-.4-.1-.4-.3-.4-.3z" })));
};

var SvgAmazon = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M25.9 35.5c1.1 1.2 2.5 1.9 4.1 1.9.2 0 .5 0 .9-.1.1 0 .2 0 .3-.1 1.8-.5 3.3-1.7 4.2-3.5.4-.8.7-1.6.9-2.4.2-.7.3-1.4.3-2.1v-3.1c0-1.2-1-2.3-2.3-2.3-2 0-3.4.1-4.4.4-3.5 1-5.5 3.5-5.5 7 .1 1.8.5 3.1 1.5 4.3-.1 0-.1 0 0 0zm4-2.6s.1 0 0 0m1.3-4.2c.2-.1.5-.1.9-.2v.8c0 .2-.1.7-.2 1.1-.1.4-.3.8-.5 1.3-.4.8-.9 1.1-1.2 1.2-.1 0-.2 0-.4.1-.2 0-.3-.1-.5-.3-.2-.3-.3-.7-.3-1.3 0-1.3.3-2.2 2.2-2.7z" }),
        React__namespace.createElement("path", { d: "M15.6 24.6c-1.6 2.3-2.4 5.1-2.4 8.2 0 4.1 1.2 7.3 3.6 9.5 2.3 2.2 5.4 3.4 9 3.4 2.2 0 4-.2 5.6-.7 1.9-.6 3.8-1.7 5.7-3.3 1.1 1.2 2.3 2.7 2.7 3 .1.1.3.2.5.3.6.3 1.2.4 1.8.4.9 0 1.6-.2 2.2-.7.3-.2 2-1.7 3.2-2.8 3.1-2.8 3.5-3.3 3.5-4.4 0-.7-.2-1.4-.7-2.1 0-.1-.1-.2-.2-.2-.6-.8-1-1.4-1.4-1.8 0 0-.2-.3-.5-1.1-.2-.6-.3-1.3-.3-2.1V16c0-.6 0-1.3-.1-1.7-.1-1.2-.2-1.6-.3-1.9-.8-5-5.3-10.3-15.2-10.6-.2 0-6.2-.2-11.4 2.5-3.1 1.6-5.4 5.2-6.4 9.6-.1.5-.1.8-.1 1 0 1.7 1.1 2.9 2.8 3.3h.2l6 .7c-.5.2-.9.3-1.4.5-2.7 1.2-4.9 2.9-6.4 5.2zM31 21.9c.9-.1 2.2-.2 4-.4l1.1-.1c1.2-.1 2.1-1.1 2.1-2.2v-1c0-3.1-.4-5.1-1.2-6.3C35.6 10 33.9 9 31.6 9c-.6 0-3.1 0-5.5 1.9-1.2 1-2.1 2.2-2.5 3.7l-4.3-.5c.7-2.7 2.1-4.8 3.8-5.7 4.2-2.2 9.1-2 9.2-2 9.2.3 10.8 5.4 11.1 6.9v.2s.1.3.1 1.3c.1.7.1 1.2.1 1.3v14.2c0 1.3.2 2.5.5 3.5.4 1.2.8 2 1.3 2.6.2.2.4.5.7.9-1.1 1-2.9 2.7-3.9 3.5-1-1.1-2.8-3.2-3.1-3.6-.4-.5-1-.9-1.6-.9-.7-.1-1.4.2-1.8.7-1.9 2-3.7 3.3-5.4 3.8-1.2.3-2.6.5-4.3.5-2.4 0-4.4-.7-5.9-2.2-1.5-1.4-2.2-3.4-2.2-6.2 0-2.2.5-4.1 1.6-5.6 1-1.5 2.5-2.6 4.5-3.4 1.7-1.1 4.2-1.7 7-2zm-4.3-3.8c.5-.5.9-1.3 1.1-2.1.2-.7.5-1.2 1-1.6 1.2-.9 2.5-.9 2.5-.9h.2c.8 0 1.3.3 1.8.9 0 0 .3.6.4 2.7-1.4.1-2.4.2-3.2.3-1.4.2-2.7.4-3.8.7zM53.1 51.8c-.1.1-.3.1-.7.3-.3.1-.5.2-.7.3C45.4 54.8 39 56 32.6 56c-9.7 0-18.6-2.4-26.9-7.1-.3-.2-.6-.2-.8.1-.1.1-.1.2-.1.3 0 .1.1.3.3.5 3.6 3.3 7.7 5.8 12.3 7.6C21.9 59 26.8 60 32 60c3.3 0 6.7-.5 10.3-1.4 3.5-1 6.7-2.2 9.5-3.9 1-.5 1.7-1.1 2.2-1.5.5-.3.5-.7.3-1.1-.3-.4-.7-.5-1.2-.3z" }),
        React__namespace.createElement("path", { d: "M58.9 48.4c-.3-.3-1.2-.6-2.7-.7-.3-.1-.6-.1-1-.1-1.2 0-2.4.2-3.7.5-.7.2-1.6.5-2.4 1.2-.1.1-.2.3-.3.4 0 .1-.1.1-.1.1 0 .1 0 .1.1.2s.2.1.4.1c.7-.1 1.4-.2 2.2-.3.7-.1 1.4-.1 2-.1 1.5 0 2.4.2 2.8.6.1.1.2.4.2.8 0 1.1-.6 3.1-1.8 6-.1.3-.1.5.1.5.1 0 .1.1.2.1s.3-.1.5-.2c1.1-1 2-2.2 2.7-3.8.7-1.6 1-2.9 1-4.1v-.3c0-.4 0-.6-.2-.9z" })));
};

var SvgAmbulance = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M57.1 9.8H25.9c-2.8 0-5.1 2.4-5.1 5.3v2.6h-3.4v-2c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v2H9.6c-1.4 0-2.7.9-3.2 2.3L1.9 32.3l-.4 1.1.8 1.1V45c0 2 1.6 3.6 3.6 3.6h.5c1 3.3 4 5.7 7.6 5.7 3.6 0 6.6-2.4 7.6-5.7h20.9c1 3.3 4 5.7 7.6 5.7 3.6 0 6.6-2.4 7.6-5.7h1.7c1.6 0 3-1.4 3-3V15.1c-.2-2.9-2.4-5.3-5.3-5.3zM10.4 22.2h10.4v8.7H7.2l3.2-8.7zM14 49.7c-1.9 0-3.4-1.6-3.4-3.5s1.5-3.5 3.4-3.5 3.4 1.6 3.4 3.5-1.5 3.5-3.4 3.5zm0-11.4c-3.2 0-6 2-7.2 4.8v-7.6h14v6.8c-1.4-2.5-3.9-4-6.8-4zm36.1 11.4c-1.9 0-3.4-1.6-3.4-3.5s1.5-3.5 3.4-3.5 3.4 1.6 3.4 3.5-1.6 3.5-3.4 3.5zm0-11.4c-3.6 0-6.7 2.5-7.6 5.8H25.3v-29c0-.5.3-.8.6-.8h31.3c.3 0 .6.4.6.9v28.9h-.1c-1-3.4-4-5.8-7.6-5.8z" }),
        React__namespace.createElement("path", { d: "M46.8 25.6h-3v-3c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v3h-3c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h3v3c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-3h3c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2z" })));
};

var SvgAmex = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56 14.7H8c-3.4 0-6.2 2.8-6.2 6.2V43c0 3.4 2.8 6.2 6.2 6.2h48c3.4 0 6.2-2.8 6.2-6.2V20.9c.1-3.4-2.7-6.2-6.2-6.2zm1.8 28.4c0 1-.8 1.7-1.7 1.7H8c-1 0-1.7-.8-1.7-1.7V20.9c0-1 .8-1.7 1.7-1.7h48c1 0 1.7.8 1.7 1.7v22.2z" }),
        React__namespace.createElement("path", { d: "m26.9 35.6-3-10.3h-3.7v12.4l-3.1-12.4h-4.2L9.7 38.5h2.1l.8-2.8h5l.7 2.8h4.2V27.8h.3l3.1 10.1h2.2l3-10.1h.3v10.7h2.1V25.3h-3.6l-3 10.3zm-14-1.7 1.6-6.7h1l1.6 6.7h-4.2zM52 25.3l-2.9 5.1-2.8-5.1H35.4v13.2h11l2.7-5 2.8 5h2.4L50.5 32l3.8-6.7H52zm-7 11.3h-7.5v-3.8h5V31h-4.9v-3.6H45l2.8 4.9-2.8 4.3z" })));
};

var SvgAnchor = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m54 46.9-5.1-5.4c-.8-.9-2.2-1-3.1-.1l-5.4 4.8c-.9.8-1 2.3-.2 3.2.8.9 2.2 1 3.2.2l1.2-1.1c-1.2 4.7-5.3 8.4-10.5 9.2V26.2h5.5c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-5.5V18c3.5-1 6-4.2 6-7.9 0-4.5-3.7-8.2-8.2-8.2s-8.2 3.7-8.2 8.2c0 3.8 2.5 6.9 6 7.9v3.6h-5.5c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h5.5v31.5c-5.2-.8-9.4-4.6-10.5-9.3l1.5 1.3c.9.8 2.4.7 3.2-.2.8-.9.7-2.4-.2-3.2l-5.5-4.9c-.9-.8-2.3-.7-3.1.2L10 46.8c-.8.9-.8 2.3.1 3.2.4.4 1 .6 1.5.6.6 0 1.2-.2 1.7-.7l1.3-1.4c1.4 7.8 8.6 13.8 17.3 13.8 8.7 0 16-6 17.3-13.9l1.5 1.6c.4.5 1 .7 1.6.7.5 0 1.1-.2 1.5-.6 1-.9 1.1-2.3.2-3.2zM28.2 10c0-2.1 1.7-3.7 3.7-3.7S35.6 8 35.6 10s-1.7 3.7-3.7 3.7-3.7-1.7-3.7-3.7z" })));
};

var SvgAndroidOriginal = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M14.8 46.5c0 2.3 1.8 4.2 4.2 4.2h2.7v8.5c0 2.1 1.7 3.8 3.8 3.8s3.8-1.7 3.8-3.8v-8.5h5.1v8.5c0 2.1 1.7 3.8 3.8 3.8 2.1 0 3.8-1.7 3.8-3.8v-8.5h2.7c2.3 0 4.2-1.8 4.2-4.2V21.9H14.8v24.6zM40.5 6.8 43.1 2c.1-.3.1-.6-.1-.7-.2-.3-.3-.3-.3-.3-.1 0-.4.1-.4.3l-2.7 4.9c-2.3-1-4.8-1.5-7.3-1.5-2.7 0-5.1.6-7.3 1.5l-2.7-4.9c-.1-.3-.4-.4-.7-.1-.3.1-.4.4-.1.7l2.7 4.8c-5.6 2.8-9 7.9-9 13.8h34.2c-.2-6-3.9-11-8.9-13.7zm-16.4 7.5c-.7 0-1.4-.7-1.4-1.4s.7-1.4 1.4-1.4 1.4.7 1.4 1.4-.5 1.4-1.4 1.4zm15.8 0c-.7 0-1.4-.7-1.4-1.4s.7-1.4 1.4-1.4 1.4.7 1.4 1.4-.6 1.4-1.4 1.4zM9.6 21.2c-2.1 0-3.8 1.7-3.8 3.8v15.9c0 2.1 1.7 3.8 3.8 3.8s3.8-1.7 3.8-3.8V25c.1-2.2-1.7-3.8-3.8-3.8zM54.4 21.2c-2.1 0-3.8 1.7-3.8 3.8v15.9c0 2.1 1.7 3.8 3.8 3.8 2.1 0 3.8-1.7 3.8-3.8V25c0-2.2-1.7-3.8-3.8-3.8z" })));
};

var SvgAndroid = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M26.9 12.3c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6zM36.5 12.3c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6z" }),
        React__namespace.createElement("path", { d: "M53.1 18.4c-.7 0-1.4.1-2 .3-1.2-3.6-3.3-6.7-6-9.1l4-4.1c.9-.9.8-2.3 0-3.2-.9-.9-2.3-.9-3.2 0l-4.5 4.6c-2.8-1.5-6-2.3-9.3-2.3-3.3 0-6.5.8-9.3 2.3l-4.5-4.6c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l3.9 4c-2.6 2.3-4.7 5.3-5.9 8.8-.7-.2-1.4-.4-2.1-.4-3.5 0-6.4 2.9-6.4 6.4V35c0 3.5 2.9 6.4 6.4 6.4.7 0 1.3-.1 1.9-.3V47c0 1.5 1.1 2.6 2.6 2.6h1.1v6.2c0 3.5 2.9 6.4 6.4 6.4 3.5 0 6.4-2.9 6.4-6.4v-6.2H34v6.2c0 3.5 2.9 6.4 6.4 6.4s6.4-2.9 6.4-6.4v-6.2h1.7c1.5 0 2.6-1.2 2.6-2.6v-5.5c.6.2 1.2.3 1.9.3 3.5 0 6.4-2.9 6.4-6.4V24.8c.1-3.5-2.8-6.4-6.3-6.4zM32 9.3c5.7 0 10.8 3.1 13.5 7.8h-27c2.7-4.8 7.8-7.8 13.5-7.8zM10.9 36.9c-1 0-1.9-.8-1.9-1.9V24.4c0-1.1.9-1.9 1.9-1.9s1.9.9 1.9 1.9V35c.1 1.1-.8 1.9-1.9 1.9zm14 18.9c0 1.1-.9 1.9-1.9 1.9s-1.9-.9-1.9-1.9v-6.2h3.8v6.2zm17.4 0c0 1.1-.9 1.9-1.9 1.9s-1.9-.9-1.9-1.9v-6.2h3.8v6.2zM17.4 45.2V21.6h29.3v23.5H17.4zM55 35.4c0 1.1-.9 1.9-1.9 1.9s-1.9-.9-1.9-1.9V24.8c0-1.1.9-1.9 1.9-1.9s1.9.9 1.9 1.9v10.6z" })));
};

var SvgAngellist = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M46.9 26.9C48.3 23 52.4 11.6 52.4 8c0-3.2-2-5.9-5.4-5.9-5.4 0-10.3 15.8-11.7 19.7C34 18.3 28.7 1 23.8 1c-3.8 0-5.5 2.8-5.5 6.3 0 4.2 4.1 15.4 5.6 19.6-.7-.3-1.6-.4-2.4-.4-2.8 0-5.8 3.5-5.8 6.3 0 1.1.6 2.7 1 3.5-4.5 1.3-6.2 4.1-6.2 8.7 0 8.7 8.2 17.9 19.9 17.9 14.2 0 23.1-10.7 23.1-24.5-.2-5.3-.9-9.9-6.6-11.5zm-4.3-12.8c.4-1.4 2.5-7.8 4.5-7.8 1.1 0 1.4 1.1 1.4 2 0 2.3-4.8 14.9-5.6 17.9l-4.1-.7 3.8-11.4zM22.1 6.8c0-1.4 1.7-5.5 5.6 5.6l4.1 12.1c-2-.1-3.4-.4-4.2.1-1.3-3.3-5.5-14.3-5.5-17.8zm-.3 23.6c3.5 0 8.2 11.4 8.2 13 0 .6-.6 1.4-1.3 1.4-2.5 0-9.3-9.3-9.3-11.8 0-.9 1.4-2.6 2.4-2.6zM44 53c-3.5 3.8-8 5.9-13.2 5.9-7.2 0-12.8-3.9-15.5-10.6-2-5.2.4-8.2 2.5-8.2 1.4 0 6.6 7.2 6.6 8.7 0 .6-1 1-1.4 1-2 0-2.7-1.8-6.2-6.2-3.5 3.5 2.5 10.6 7 10.6 3.2 0 5.2-3 4.6-5.1.4 0 1 0 1.4-.1.1 3.2 1.1 7.2 5.1 7.5 0-.1.3-.8.3-.8 0-2.1-1.3-3.9-1.3-6.1 0-3.4 2.7-6.8 5.4-8.7 1-.7 2.1-1.1 3.2-1.5 1.1-.4 2.4-1 3.2-1.8-.1-1.4-.7-2.5-2-2.5-3.5-.1-14.8.3-14.8-4.9 0-.7 0-1.6 2.1-1.6 3.8 0 13.8 1 16.8 3.5C50 33.8 50.7 45.5 44 53zM32.2 37.6c1.1.4 2.4.4 3.5.7-.8.7-1.7 1.4-2.4 2.3-.4-.9-.8-1.8-1.1-3z" })));
};

var SvgAngleDoubleDown = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M30.4 38.4c.4.4 1 .6 1.6.6.6 0 1.1-.2 1.6-.6l23-22.6c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0L32 33.6l-21.4-21c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l23 22.6z" }),
        React__namespace.createElement("path", { d: "M53.4 25.6 32 46.6l-21.4-21c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l23 22.6c.4.4 1 .6 1.6.6.6 0 1.1-.2 1.6-.6l23-22.6c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0z" })));
};

var SvgAngleDoubleLeft = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m30.4 32 21.1-21.4c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0l-22.6 23c-.9.9-.9 2.3 0 3.2l22.6 23c.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.6.9-.9.9-2.3 0-3.2L30.4 32z" }),
        React__namespace.createElement("path", { d: "m17.4 32 21.1-21.4c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0l-22.6 23c-.9.9-.9 2.3 0 3.2l22.6 23c.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.6.9-.9.9-2.3 0-3.2L17.4 32z" })));
};

var SvgAngleDoubleRight = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m38.4 30.4-22.6-23c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l21 21.4-21 21.4c-.9.9-.9 2.3 0 3.2.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7l22.6-23c.9-.8.9-2.2 0-3.1z" }),
        React__namespace.createElement("path", { d: "m51.4 30.4-22.6-23c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l21 21.4-21 21.4c-.9.9-.9 2.3 0 3.2.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7l22.6-23c.9-.8.9-2.2 0-3.1z" })));
};

var SvgAngleDoubleUp = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M33.6 25.6c-.9-.9-2.3-.9-3.2 0l-23 22.6c-.9.9-.9 2.3 0 3.2.9.9 2.3.9 3.2 0l21.4-21 21.4 21.1c.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7.9-.9.9-2.3 0-3.2l-23-22.6z" }),
        React__namespace.createElement("path", { d: "m10.6 38.4 21.4-21 21.4 21.1c.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7.9-.9.9-2.3 0-3.2l-23-22.6c-.9-.9-2.3-.9-3.2 0l-23 22.6c-.9.9-.9 2.3 0 3.2.9.9 2.3.9 3.2 0z" })));
};

var SvgAngular = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M26.8 33.7h10.6L32 21l-5.2 12.7zM32 1 3.3 11.3l4.5 38.2L32 63l24.4-13.5 4.4-38.2L32 1zm18 47.2h-6.8l-3.5-9H24.4l-3.7 9H14L32 7.9l18 40.3z" })));
};

var SvgApartment = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56 1.8H33.5c-3.4 0-6.2 2.8-6.2 6.3V12H8c-3.4 0-6.3 2.8-6.3 6.3V56c0 3.4 2.8 6.3 6.3 6.3h48c3.4 0 6.3-2.8 6.3-6.3V8c0-3.4-2.9-6.2-6.3-6.2zm-28.8 56H8c-1 0-1.8-.8-1.8-1.8V18.2c0-1 .8-1.8 1.8-1.8h19.2v41.4zM57.8 56c0 1-.8 1.8-1.8 1.8H31.7V8c0-1 .8-1.8 1.7-1.8H56c1 0 1.8.8 1.8 1.8v48z" }),
        React__namespace.createElement("path", { d: "M14 28.1h5.6c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H14c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3zM14 39.3h5.6c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H14c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3zM13.9 50.6h5.6c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-5.6c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3zM47.6 14.7H42c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h5.6c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM47.6 29.1H42c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h5.6c1.2 0 2.3-1 2.3-2.3-.1-1.3-1.1-2.3-2.3-2.3zM47.5 43.5h-5.6c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h5.6c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" })));
};

var SvgAppStore = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m32 15.1 1.1-2c.7-1.3 2.3-1.7 3.5-1 1.3.7 1.7 2.3 1 3.5l-11 18.9h7.9c2.5 0 3.9 3 3 5.1H14.2c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5h6.5L29 20l-2.7-4.5c-.7-1.3-.3-2.8 1-3.5 1.3-.7 2.8-.3 3.5 1l1.2 2.1zm-9.9 27.3-2.4 4.2c-.7 1.3-2.3 1.7-3.5 1-1.3-.7-1.7-2.3-1-3.5l1.8-3.2c2.2-.7 3.9-.2 5.1 1.5zm21.2-7.7h6.6c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5h-3.7l2.5 4.4c.7 1.3.3 2.8-1 3.5s-2.8.3-3.5-1C40 39.3 36.9 34 34.8 30.3c-2.1-3.7-.6-7.3.8-8.6 1.8 2.8 4.3 7.2 7.7 13zM32 1C14.8 1 1 14.8 1 32s13.8 31 31 31 31-13.8 31-31S49.2 1 32 1zm27.1 31c0 14.8-12 27.1-27.1 27.1-14.8 0-27.1-12-27.1-27.1 0-14.8 12-27.1 27.1-27.1 14.8 0 27.1 12 27.1 27.1z" })));
};

var SvgAppleBrand = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 65", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M55.627 22.638c-.36.279-6.709 3.857-6.709 11.812 0 9.202 8.08 12.457 8.322 12.538-.038.198-1.284 4.458-4.26 8.798-2.654 3.82-5.426 7.633-9.642 7.633-4.217 0-5.302-2.449-10.17-2.449-4.743 0-6.43 2.53-10.286 2.53-3.857 0-6.548-3.534-9.642-7.875-3.584-5.097-6.48-13.015-6.48-20.53 0-12.054 7.838-18.447 15.551-18.447 4.1 0 7.516 2.691 10.089 2.691 2.45 0 6.269-2.852 10.932-2.852 1.767 0 8.116.161 12.295 6.15ZM41.118 11.384c1.928-2.288 3.292-5.463 3.292-8.638 0-.44-.037-.886-.117-1.246-3.138.118-6.87 2.09-9.121 4.7-1.768 2.01-3.417 5.184-3.417 8.402 0 .484.08.967.118 1.122.198.037.52.08.843.08 2.815 0 6.356-1.884 8.402-4.42Z" })));
};

var SvgAppleMusic = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M10.7 32.4c0-1.2.5-2.2 1.6-2.8-.6-.9-1.4-1.3-2.6-1.4-.4 0-.9 0-1.6.3-.6.3-1 .4-1.2.4-.1 0-.5-.1-1-.4-.5-.4-.9-.5-1.3-.5-.6 0-1.2.1-1.7.5s-.9.8-1.3 1.3c-.3.6-.6 1.6-.6 2.6 0 .9.1 1.8.4 2.7.3.9.6 1.6 1 2.2.4.5.8 1 1 1.3.4.4.8.6 1.3.6.3 0 .6-.1 1-.3.4-.1.9-.3 1.3-.3s.8.1 1.2.3c.5.3.9.3 1.2.3.4 0 .9-.3 1.3-.5.1-.1.3-.3.4-.5.1-.3.4-.5.5-.8.1-.3.3-.4.4-.6.1-.3.3-.5.4-.8 0-.1.1-.3.1-.4 0-.1.1-.3.1-.4-.4-.1-.6-.4-.9-.6-.7-.4-1-1.2-1-2.2zm10.4 2.7-3-6.7h-2.3v10.7h1.9v-7h.1l2.5 5.6h1.4l2.5-5.6h.1v7h2.1V28.4H24l-2.9 6.7zM8.9 27c.5-.6.8-1.3.8-2.1v-.2c-.4 0-.8.1-1.2.4-.4.3-.8.5-1 .8-.5.6-.8 1.3-.8 1.9v.2c.8.1 1.5-.3 2.2-1zm40.9 1.4H52v10.7h-2.2V28.4zm9.1 1.7c1.3 0 2.1 1 2.1 2.1h2V32c0-2.1-1.6-3.9-4.3-3.9-2.8 0-4.5 1.8-4.5 5v1.2c0 3.1 1.7 4.9 4.5 4.9 2.7 0 4.3-1.8 4.3-3.8v-.3h-2.2c0 1.2-.6 2.1-2.1 2.1s-2.2-1-2.2-3.1V33c0-1.9.9-2.9 2.4-2.9zm-24 5.1c0 1.4-.9 2.2-2.1 2.2-1.3 0-2.1-.8-2.1-2.2v-6.9h-2.2v7.1c0 2.3 1.7 3.9 4.3 3.9 2.7 0 4.3-1.6 4.3-3.9v-7.1h-2.2v6.9zm9.7-2.3-1.6-.4c-.9-.3-1.4-.6-1.4-1.3 0-.8.6-1.3 1.8-1.3s1.8.6 1.9 1.4h2.1c0-1.9-1.6-3.2-4-3.2-2.2 0-4 1.2-4 3.2 0 1.8 1.3 2.7 2.7 3l1.6.4c1 .3 1.6.6 1.6 1.3 0 .8-.6 1.4-1.9 1.4-1.3 0-2.1-.6-2.1-1.6h-2.2c0 1.6 1 3.4 4.1 3.4 2.6 0 4.3-1.3 4.3-3.4 0-1.9-1.3-2.5-2.9-2.9z" })));
};

var SvgApplePay = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M12.2 22.5c-.7.8-1.8 1.6-3 1.4-.1-1.1.4-2.4 1.1-3.2.7-.8 2-1.6 3-1.6.1 1.5-.4 2.6-1.1 3.4m1.1 1.9c-1.7-.1-3.1 1-3.8 1-.8 0-2.1-1-3.4-1-1.7 0-3.2 1-4.2 2.5C0 30 1.4 34.7 3.1 37.2c.9 1.3 1.9 2.7 3.3 2.7 1.3 0 1.7-.8 3.2-.8s2 .8 3.4.7c1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-3 0 0-2.7-1.1-2.7-4.2 0-2.7 2.1-3.8 2.3-3.8-1.3-1.8-3.1-1.9-3.8-1.9m9.7-3.7v18.9h3v-6.5h4.1c3.7 0 6.4-2.5 6.4-6.2s-2.5-6.2-6.2-6.2H23zm3 2.5h3.4c2.5 0 4 1.4 4 3.8s-1.4 3.8-4 3.8H26v-7.6zm15.7 16.7c1.8 0 3.5-1 4.4-2.4h.1v2.3h2.7v-9.5c0-2.7-2.1-4.5-5.5-4.5-3.1 0-5.4 1.7-5.5 4.2h2.5c.1-1.1 1.3-2 2.8-2 1.7 0 2.8.8 2.8 2.3v1.1l-3.7.1c-3.4.1-5.2 1.6-5.2 4-.1 2.7 1.9 4.4 4.6 4.4zm.8-2.3c-1.6 0-2.5-.7-2.5-2 0-1.1 1-1.8 2.8-2l3.2-.1v1.1c.1 1.8-1.5 3-3.5 3zm9.9 7.2c2.8 0 4.2-1.1 5.4-4.4L63 26.1h-3l-3.5 11.2h-.1l-3.5-11.2h-3.1l4.9 13.8-.3.7c-.4 1.4-1.1 2-2.4 2h-.8v2.3c.4-.1 1.1-.1 1.2-.1z" })));
};

var SvgArchive = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56.7 4.3H7.3c-3.1 0-5.6 2.5-5.6 5.6V16c0 2.9 2.2 5.3 5.1 5.5v32.1c0 3.4 2.7 6.1 6.1 6.1H51c3.4 0 6.1-2.7 6.1-6.1V21.5c2.8-.2 5.1-2.6 5.1-5.5V9.9c.1-3.1-2.4-5.6-5.5-5.6zM51 55.2H13c-.9 0-1.6-.7-1.6-1.6V21.5h41.3v32.1c0 .9-.8 1.6-1.7 1.6zM57.8 16c0 .6-.5 1.1-1.1 1.1H7.3c-.6 0-1.1-.5-1.1-1.1V9.9c0-.6.5-1.1 1.1-1.1h49.4c.6 0 1.1.5 1.1 1.1V16z" }),
        React__namespace.createElement("path", { d: "M40.2 29.8H23.8c-2.3 0-4.3 1.9-4.3 4.3v6.2c0 2.3 1.9 4.3 4.3 4.3h16.4c2.3 0 4.3-1.9 4.3-4.3V34c-.1-2.3-2-4.2-4.3-4.2zm-.3 10.1H24.1v-5.7H40v5.7z" })));
};

var SvgArrowDownCircle = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m40.3 32-6.1 6V20.7c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2V38l-6.1-6c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l9.9 9.8c.4.4 1 .6 1.6.6s1.1-.2 1.6-.6l9.9-9.8c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0z" }),
        React__namespace.createElement("path", { d: "M32 1.7C15.3 1.7 1.8 15.3 1.8 32S15.3 62.3 32 62.3 62.2 48.7 62.2 32 48.7 1.7 32 1.7zm0 56.1C17.8 57.8 6.2 46.2 6.2 32S17.8 6.2 32 6.2c14.2 0 25.8 11.6 25.8 25.8S46.2 57.8 32 57.8z" })));
};

var SvgArrowDown = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M54.6 33.8c-.9-.9-2.3-.9-3.2 0L34.3 50.6V8c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2v42.7l-17.3-17c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l21 20.7c.4.4 1 .6 1.6.6.6 0 1.1-.2 1.6-.6l21-20.7c.9-.8.9-2.3 0-3.1z" })));
};

var SvgArrowLeftCircle = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M43.3 29.8H26l6-6.1c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0l-9.7 9.9c-.9.9-.9 2.3 0 3.2l9.7 9.9c.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.6.9-.9.9-2.3 0-3.2l-6-6.1h17.3c1.2 0 2.2-1 2.2-2.2.1-1.3-.9-2.3-2.2-2.3z" }),
        React__namespace.createElement("path", { d: "M32 1.8C15.3 1.8 1.7 15.3 1.7 32S15.3 62.2 32 62.2 62.3 48.7 62.3 32 48.7 1.8 32 1.8zm0 56C17.8 57.8 6.2 46.2 6.2 32 6.2 17.8 17.8 6.2 32 6.2S57.8 17.8 57.8 32c0 14.2-11.6 25.8-25.8 25.8z" })));
};

var SvgArrowLeft = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56 29.8H13.3l17-17.3c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0l-20.7 21c-.9.9-.9 2.3 0 3.2l20.7 21c.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.6.9-.9.9-2.3 0-3.2L13.4 34.3H56c1.2 0 2.2-1 2.2-2.2 0-1.3-1-2.3-2.2-2.3z" })));
};

var SvgArrowRightCircle = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M35.2 20.5c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l6 6.1H20.7c-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.2 2.2 2.2H38l-6 6.1c-.9.9-.9 2.3 0 3.2.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7l9.8-9.9c.9-.9.9-2.3 0-3.2l-9.8-9.8z" }),
        React__namespace.createElement("path", { d: "M32 1.8C15.3 1.8 1.7 15.3 1.7 32S15.3 62.2 32 62.2 62.3 48.7 62.3 32 48.7 1.8 32 1.8zm0 56C17.8 57.8 6.2 46.2 6.2 32 6.2 17.8 17.8 6.2 32 6.2S57.8 17.8 57.8 32c0 14.2-11.6 25.8-25.8 25.8z" })));
};

var SvgArrowRight = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m57.6 30.4-20.7-21c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l16.8 17.1H8c-1.2 0-2.2 1-2.2 2.2s1 2.3 2.2 2.3h42.7l-17 17.3c-.9.9-.9 2.3 0 3.2.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7l20.7-21c.9-.9.9-2.3 0-3.2z" })));
};

var SvgArrowTopLeft = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M48.9 51.3c-.6 0-1.2-.2-1.6-.7L17.2 20.5l-.2 24c0 1.2-1 2.3-2.3 2.2-1.2 0-2.2-1-2.2-2.3l.3-29.4c0-1.2 1-2.2 2.2-2.2l29.5-.3c1.2 0 2.2 1 2.2 2.2 0 1.2-1 2.3-2.2 2.3l-24.2.2 30.2 30.2c.9.9.9 2.3 0 3.2-.4.4-1 .7-1.6.7z" })));
};

var SvgArrowTopRight = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M15 51.3c-.6 0-1.2-.2-1.6-.7-.9-.9-.9-2.3 0-3.2l30.3-30.3H19.5c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2H49c1.2 0 2.2 1 2.2 2.2v29.7c0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2V20.5L16.6 50.7c-.4.4-1 .6-1.6.6z" })));
};

var SvgArrowUpCircle = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M33.6 19.1c-.9-.9-2.3-.9-3.2 0l-9.9 9.7c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.6l6.1-6v17.3c0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2V26l6.1 6c.9.9 2.3.9 3.2 0 .9-.9.9-2.3 0-3.2l-9.9-9.7z" }),
        React__namespace.createElement("path", { d: "M32 1.7C15.3 1.7 1.8 15.3 1.8 32S15.3 62.3 32 62.3 62.2 48.7 62.2 32 48.7 1.7 32 1.7zm0 56.1C17.8 57.8 6.2 46.2 6.2 32S17.8 6.2 32 6.2c14.2 0 25.8 11.6 25.8 25.8S46.2 57.8 32 57.8z" })));
};

var SvgArrowUp = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m54.6 27.1-21-20.7c-.9-.9-2.3-.9-3.2 0l-21 20.7c-.9.9-.9 2.3 0 3.2.9.9 2.3.9 3.2 0l17.1-16.8V56c0 1.2 1 2.2 2.2 2.2s2.3-1 2.3-2.2V13.3l17.3 17c.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7.8-.8.8-2.3-.1-3.1z" })));
};

var SvgArrowsHorizontal = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M61.6 30.4 51.4 20.1c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l6.4 6.5H9.3l6.4-6.5c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0L2.4 30.4c-.9.9-.9 2.3 0 3.2l10.2 10.3c.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.6.9-.9.9-2.3 0-3.2l-6.4-6.5h45.2l-6.4 6.5c-.9.9-.9 2.3 0 3.2.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7l10.2-10.3c.9-.9.9-2.3 0-3.2z" })));
};

var SvgArrowsVertical = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m40.8 48.2-6.5 6.4V9.3l6.5 6.4c.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7.9-.9.9-2.3 0-3.2l-10.4-10c-.9-.9-2.3-.9-3.2 0L20.1 12.6c-.9.9-.9 2.3 0 3.2s2.3.9 3.2 0l6.5-6.4v45.2l-6.5-6.4c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l10.3 10.2c.4.4 1 .6 1.6.6.6 0 1.1-.2 1.6-.6l10.3-10.2c.9-.9.9-2.3 0-3.2-.8-.8-2.3-.8-3.1 0z" })));
};

var SvgAtlassian = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M19.3 29.7c-1-1-2.4-1-3 .3L1.2 60.3c-.6 1.1.3 2.7 1.7 2.7H24c.7 0 1.4-.4 1.7-1 4.5-9.5 1.7-23.8-6.4-32.3zM30.5 2c-14.6 23.4-1 42.1 7.9 60 .3.6 1 1 1.7 1h21.1c1.4 0 2.3-1.4 1.7-2.7 0 0-28.3-56.9-29-58.3C33 .7 31.3.7 30.5 2z" })));
};

var SvgAudi = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "m42.182 39.684 2.648 2.945h-.674c-3.685 0-6.68 1.398-6.68 4.425 0 2.435 2.995 4.426 6.68 4.426 3.685 0 6.68-1.99 6.68-4.425 0-2.435-3.044-5.446-4.59-7.355h-4.064v-.016Zm5.165 7.272c0 1.267-1.43 2.287-3.175 2.287-1.744 0-3.191-1.02-3.191-2.287s1.43-2.287 3.191-2.287c1.76 0 3.175 1.02 3.175 2.287ZM33.28 47.614c0 2.419-3.964 2.419-3.964 0v-4.755h-3.422v5.068c0 4.952 10.727 5.001 10.727 0v-5.068h-3.34v4.755Z" }),
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M54.968 42.86v8.57h-3v-8.57h3Z", clipRule: "evenodd" }),
        React__namespace.createElement("path", { fill: "#000", d: "m14.197 39.98 1.184 1.448-6.597 10.02h3.965l1.07-1.778h7.534l1.12 1.777h4.129l-7.914-11.45h-4.491v-.017Zm1.036 7.354 2.27-3.75 2.37 3.75h-4.64ZM53.797 12.357c-2.65-.032-5.1.856-7.058 2.37a11.289 11.289 0 0 0-6.73-2.337 11.324 11.324 0 0 0-7.057 2.353 11.3 11.3 0 0 0-6.745-2.336c-2.633-.05-5.067.839-7.025 2.32-1.86-1.432-4.18-2.27-6.696-2.32-6.252-.082-11.401 4.952-11.5 11.187-.082 6.252 4.935 11.401 11.187 11.484a11.25 11.25 0 0 0 7.025-2.337 11.226 11.226 0 0 0 6.712 2.32c2.65.033 5.1-.839 7.058-2.352 1.876 1.43 4.196 2.32 6.73 2.336 2.648.049 5.1-.856 7.057-2.353a11.25 11.25 0 0 0 6.729 2.336c6.252.083 11.401-4.935 11.5-11.187.082-6.252-4.952-11.401-11.187-11.5m-.28 21.387a10.056 10.056 0 0 1-6.762-2.73c-1.941 1.76-4.31 2.796-7.025 2.747a9.982 9.982 0 0 1-6.745-2.731c-1.892 1.76-4.459 2.78-7.058 2.747-2.5-.033-4.92-1.02-6.729-2.698a8.92 8.92 0 0 1-1.003.806 9.917 9.917 0 0 1-6.022 1.909c-4.096-.05-7.617-2.583-9.114-6.153a4.465 4.465 0 0 1-1.037-.198 11.063 11.063 0 0 1-.641-3.85C1.463 17.738 6.15 13 11.926 12.803c.149.23.33.526.477.888h.05c2.583.05 5.05 1.07 6.893 2.88l-.082-1.416a10.848 10.848 0 0 1 6.416-2.352c.082.131.313.444.51.888 2.534.033 5.117 1.152 6.894 2.863L33 15.203a10.638 10.638 0 0 1 6.45-2.401c.164.23.328.526.477.872h.049c2.55.033 5.084 1.2 6.91 2.928l-.099-1.431a11.051 11.051 0 0 1 6.45-2.419c.081.132.46.889.526.889 5.396.246 9.69 3.487 9.92 10.184.165 5.527-4.656 9.97-10.184 9.903" }),
        React__namespace.createElement("path", { fill: "#000", d: "M15.776 27.444a10.35 10.35 0 0 1-.641-3.85c.033-2.5.905-4.787 2.352-6.614.56 0 1.12-.032 1.448-.032a9.456 9.456 0 0 0-6.465-2.682c-5.232-.066-9.543 4.13-9.608 9.345-.05 4.557 3.126 8.406 7.403 9.377.148-.18.313-.378.477-.592.477.082.987.132 1.497.148 1.99.033 3.817-.609 5.396-1.777l1.317.033a10.237 10.237 0 0 1-2.123-3.175 5.42 5.42 0 0 1-1.02-.181M12.24 32.1c-4.606-.066-8.292-3.85-8.242-8.457.066-4.59 3.866-8.291 8.473-8.242 1.71.017 3.29.56 4.606 1.464-1.431 1.876-2.303 4.196-2.32 6.73a11.337 11.337 0 0 0 2.32 7.024c-1.02.675-2.747 1.514-4.837 1.48" }),
        React__namespace.createElement("path", { fill: "#000", d: "M20.695 21.044c.181-.46.51-.724.51-.724-.312-1.102-1.2-2.254-2.007-3.093a9.63 9.63 0 0 0-2.632 6.383c-.05 1.679.592 4.327 1.875 5.808.247.28.428.592.774.889l.032-1.201c1.218-1.448 1.843-3.324 1.876-5.232 0-.987-.132-1.942-.428-2.83Zm-1.497 7.453a8.393 8.393 0 0 1-1.497-4.854 8.14 8.14 0 0 1 1.48-4.623 8.277 8.277 0 0 1 1.481 4.87 8.179 8.179 0 0 1-1.48 4.623M34.433 21.028c.18-.477.51-.724.51-.724-.264-.938-1.218-2.304-1.974-3.06a9.387 9.387 0 0 0-2.583 6.366 9.47 9.47 0 0 0 2.632 6.68l.033-1.119c1.02-1.645 1.793-3.224 1.81-5.297 0-.987-.132-1.941-.428-2.83m-1.465 7.403a8.252 8.252 0 0 1-1.447-4.82 8.38 8.38 0 0 1 1.447-4.574 8.482 8.482 0 0 1 1.448 4.804 8.478 8.478 0 0 1-1.447 4.59Z" }),
        React__namespace.createElement("path", { fill: "#000", d: "M43.366 27.411a10.695 10.695 0 0 1-.642-3.85c.033-2.5.922-4.787 2.353-6.613h1.415c-1.76-1.662-4.014-2.666-6.498-2.699a9.435 9.435 0 0 0-6.647 2.6 9.951 9.951 0 0 1 2.747 7.025c-.032 2.484-1.02 4.968-2.714 6.762a9.415 9.415 0 0 0 4.392 2.336c.149-.198.313-.395.478-.593.477.083.987.132 1.497.149 2.155.032 3.965-.757 5.495-1.794l1.2-.033a10.239 10.239 0 0 1-2.056-3.109 5.42 5.42 0 0 1-1.02-.181Zm-3.603 4.656a8.413 8.413 0 0 1-4.656-1.48 11.272 11.272 0 0 0 2.304-6.697c.049-2.632-.84-5.05-2.32-7.008a8.404 8.404 0 0 1 4.902-1.514 8.374 8.374 0 0 1 4.64 1.497 11.272 11.272 0 0 0-2.303 6.696 11.324 11.324 0 0 0 2.32 7.009c-1.02.674-2.764 1.53-4.887 1.497M62.549 20.27c-.757-2.68-4.557-6.053-8.77-6.053-2.566-.033-4.902.97-6.646 2.599 1.794 1.876 2.797 4.442 2.78 7.041-.032 2.419-1.02 5.018-2.747 6.762a9.619 9.619 0 0 0 4.393 2.32c.148-.181.312-.379.477-.592.477.098.987.148 1.497.148 4.853.065 8.851-3.834 8.934-8.67a8.867 8.867 0 0 0-.445-2.83c.181-.46.527-.724.527-.724m-9 11.78a8.191 8.191 0 0 1-4.639-1.481c1.431-1.86 2.27-4.179 2.303-6.696a11.29 11.29 0 0 0-2.32-7.009 8.317 8.317 0 0 1 4.887-1.513c4.59.066 8.292 3.866 8.242 8.473-.066 4.59-3.866 8.291-8.472 8.225" }),
        React__namespace.createElement("path", { fill: "#000", d: "M48.236 21.011c.197-.477.51-.724.51-.724-.296-1.086-1.185-2.254-2.007-3.076a9.543 9.543 0 0 0-2.583 6.367 9.432 9.432 0 0 0 2.681 6.728v-1.151c1.234-1.662 1.777-3.126 1.827-5.314 0-.987-.132-1.942-.445-2.83m-1.464 7.42c-.954-1.366-1.48-3.044-1.464-4.837a8.247 8.247 0 0 1 1.448-4.574 8.277 8.277 0 0 1 1.48 4.82c-.032 1.712-.559 3.291-1.464 4.59M29.58 27.444a11.065 11.065 0 0 1-.642-3.85 10.964 10.964 0 0 1 2.352-6.614l1.366-.032c-1.793-1.662-3.932-2.633-6.45-2.666a9.402 9.402 0 0 0-6.597 2.583c1.794 1.909 2.814 4.31 2.78 7.042-.032 2.533-1.052 4.968-2.78 6.794 1.201 1.136 2.764 1.942 4.393 2.304.148-.198.296-.395.477-.609.477.099.987.148 1.497.148 1.777.033 4.097-.576 5.446-1.81h1.267a9.74 9.74 0 0 1-2.057-3.126 5.61 5.61 0 0 1-1.036-.18m-3.62 4.655a8.114 8.114 0 0 1-4.606-1.464 11.278 11.278 0 0 0 2.336-6.712c.033-2.649-.856-5.084-2.336-7.042a8.366 8.366 0 0 1 4.837-1.48 8.427 8.427 0 0 1 4.655 1.497 11.271 11.271 0 0 0-2.303 6.696 11.263 11.263 0 0 0 2.303 6.992c-1.02.674-2.763 1.546-4.886 1.513Z" })));
};

var SvgAws = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M18.5 26.9c0 2.2 1.1 3.2 1.1 3.8 0 .3-.1.4-.4.6l-1.3.8c-.1.1-.4.1-.6.1 0 0-.8.1-2-2.5-1.4 1.8-3.7 3-6 2.8-1.5.1-5.8-.8-5.6-5.5-.1-3.7 3.2-6 6.9-5.8.7 0 2.1 0 4.5.6v-1.5c.3-2.5-1.4-4.5-4.4-4.2-.1 0-1.8 0-4.5 1-.7.4-.7.4-1 .4-.7 0-.4-2-.3-2.4.4-.6 3.5-1.7 6.3-1.7 2-.1 3.9.4 5.5 1.7 1.3 1.4 1.8 3.2 1.7 5.1l.1 6.7zM10 30c3.1 0 4.5-2 4.8-3 .1-1 .1-1.5.1-2.7-1-.1-2.4-.4-3.9-.4-1.4-.1-4.2.6-4.1 3.1.2 1.8 1.3 3.1 3.1 3zm16.6 2.2c-.8.1-1.1-.4-1.3-1l-4.8-15.9c-.1-.3-.1-.6-.1-.8 0-.3.1-.4.4-.4h2.1c.8-.1 1.1.6 1.3 1l3.5 13.6L31 15.1c.1-.3.3-1.1 1.3-1H34c.1 0 1.1 0 1.3 1l3.2 13.8L42 15.1c0-.1.3-1.1 1.3-1h2c.1 0 .6-.1.4.8 0 .1.3-1.1-5.1 16.4-.1.6-.4 1.1-1.3 1h-1.8c-1.1.1-1.3-1-1.3-1.1L32.7 18l-3.2 13.2c0 .1-.1 1.1-1.3 1.1h-1.5v-.1zm26.4.6c-.6 0-3.2 0-5.5-1.1-.4-.1-.8-.7-.8-1.1v-1.1c0-.8.6-.7.8-.6 1 .4 1.5.7 2.8 1 3.5.8 5.1-.1 5.5-.4 1.3-.8 1.4-2.5.4-3.4-1-.8-1.4-.8-5.1-2-.3-.2-4.1-1.4-4.1-5.1-.1-2.7 2.4-5.5 6.7-5.5 1.3 0 4.5.4 5.5 1.5.1.1.1.4.1.7v1c0 .4-.1.7-.4.7-.8-.1-2-1.1-4.8-1.1-.7 0-3.9.1-3.7 2.4 0 1.8 2.7 2.5 3 2.7 3.5 1.1 4.8 1.3 6 3 1.7 2.1.8 4.6.4 5.3-1.9 3.5-6.6 3.1-6.8 3.1zM57 43c-6.7 4.9-16.6 7.6-24.9 7.6-11.4.2-22.4-4-30.8-11.6-.7-.6-.1-1.4.7-.8 9.3 5.2 19.8 8 30.6 8 8 0 15.9-1.7 23.3-4.8 1.2-.5 2.2.7 1.1 1.6zm2.8-3.2c-.8-1.1-5.8-.4-7.9-.3-.7.1-.8-.4-.1-.8 3.9-2.7 10.3-2 11-1.1.8.8-.1 7.3-3.9 10.4-.6.4-1.1.1-.8-.4.7-2.2 2.5-6.7 1.7-7.8z" })));
};

var SvgAzure = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M34.8 7.3 16.5 23.1 1 51.2h14.1L34.8 7.3zm2.6 3.8-7.8 22 14.8 18.7-29 4.9H63L37.4 11.1z" })));
};

var SvgBackward = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M54.6 4.2c-2.1-1.2-4.8-1.1-6.8.3L10.4 28.9V4c0-1.2-1-2.3-2.3-2.3S5.9 2.8 5.9 4v56c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V35.1l37.4 24.4c1.1.7 2.4 1.1 3.6 1.1 1.1 0 2.2-.3 3.2-.8 2.1-1.2 3.5-3.4 3.5-5.8V10c-.1-2.4-1.5-4.6-3.6-5.8zm-1 49.8c0 1.1-.8 1.6-1.1 1.8-.7.4-1.5.3-2.2-.1L13.9 32 50.3 8.3c.7-.4 1.5-.5 2.2-.1.3.2 1.1.7 1.1 1.8v44z" })));
};

var SvgBaloon = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M41.2 1.3c-4.8 0-9.1 2.9-11.6 7.6-1.8-.9-3.7-1.4-5.8-1.4C15.6 7.4 9 15.3 9 25c0 8.7 5.4 18.3 12.9 19.7-.4 1.1-.7 2.2-.9 2.8-.7 2.4-.1 4.7.5 6.8.6 2.3 1 3.7.2 5-.7 1-.4 2.4.6 3.1.4.3.8.4 1.2.4.7 0 1.4-.4 1.9-1 2-3 1.1-6.1.4-8.6-.4-1.6-.9-3.1-.5-4.3.2-.8 1-3 1.4-4.3 4.1-1.2 7.5-5 9.5-9.5.6.3 1.1.6 1.7.8 0 .1-.1.2-.1.3-.5 1.4-1.1 3-1.3 3.8-.7 2.4-.1 4.7.5 6.8.6 2.3 1 3.7.2 5-.7 1-.4 2.4.6 3.1.4.3.8.4 1.2.4.7 0 1.4-.4 1.9-1 2-3 1.1-6.1.4-8.6-.4-1.6-.9-3.1-.5-4.3.2-.6.8-2.3 1.2-3.5.2-.5.4-1 .5-1.4.5-.1.9-.2 1.4-.3 6.8-2.1 11-11.1 11-18.3.1-9.3-6.1-16.6-13.7-16.6zM23.8 40.4c-5.2 0-10.2-7.6-10.2-15.4 0-7.2 4.6-13 10.2-13S34 17.8 34 25c0 7.7-5.1 15.4-10.2 15.4zm18.9-8.8c-1 .3-2 .3-2.9 0-.6-.2-1.3-.5-1.9-1 .5-1.8.7-3.7.7-5.6 0-5.4-2.1-10.2-5.3-13.4C35 8 38 5.8 41.3 5.8c5.1 0 9.3 5.3 9.3 11.8-.1 6.1-3.8 12.7-7.9 14z" })));
};

var SvgBan = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 1.8C15.3 1.8 1.8 15.3 1.8 32S15.3 62.3 32 62.3 62.3 48.7 62.3 32 48.7 1.8 32 1.8zM6.3 32C6.3 17.8 17.8 6.3 32 6.3c5.3 0 10.1 1.6 14.2 4.3l-32 40C9.3 45.9 6.3 39.3 6.3 32zM32 57.8c-5.3 0-10.2-1.6-14.3-4.4l32-40c4.9 4.7 8 11.3 8 18.6.1 14.2-11.5 25.8-25.7 25.8z" })));
};

var SvgBarChart = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60 55.2h-5.4V35.5c0-3.2-2.6-5.7-5.7-5.7h-5.8c-3.2 0-5.7 2.6-5.7 5.7v19.7h-6V20.4c0-3.2-2.6-5.7-5.7-5.7h-5.8c-3.2 0-5.7 2.6-5.7 5.7v34.8H6.3V6.5c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v48.9c0 2.3 1.9 4.3 4.3 4.3h54c1.2 0 2.3-1 2.3-2.3s-1.1-2.2-2.3-2.2zm-41.3 0V20.4c0-.7.6-1.2 1.2-1.2h5.8c.7 0 1.2.6 1.2 1.2v34.8h-8.2zm23.2 0V35.5c0-.7.6-1.2 1.2-1.2h5.8c.7 0 1.2.6 1.2 1.2v19.7h-8.2z" })));
};

var SvgBasketball = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56.6 14.5c-3.8-5.3-9.3-9.3-15.5-11.3C37 1.9 32.7 1.5 28.2 2c-5.2.7-9.9 2.5-13.9 5.4-4.2 3-7.4 6.8-9.6 11.4-1.9 4.1-3 8.4-3 12.5-.1 6.6 1.8 13 5.6 18.3 3.9 5.4 9.2 9.3 15.5 11.3 3 .9 6 1.4 9.1 1.4 1.2 0 2.5-.1 3.7-.2 5.2-.7 9.9-2.5 13.9-5.4 4.2-3 7.4-6.8 9.6-11.4 1.9-4.1 3-8.4 3-12.5.3-6.6-1.7-12.9-5.5-18.3zm1.1 18.2c0 1.3-.2 2.6-.4 3.9-5.5.6-10.7 2.4-15.4 5.4l-6.7-9.4 19-13.6c2.4 4.2 3.6 8.8 3.5 13.7zm-6.1-17.3L32.6 29 26 19.7c4.3-3.5 7.8-8 10.2-13 1.2.2 2.4.5 3.6.8 4.6 1.4 8.7 4.2 11.8 7.9zm-22.8-9c.8-.1 1.7-.1 2.5-.1-2 3.7-4.7 7-8 9.7l-4.4-6.2c3-1.8 6.3-2.9 9.9-3.4zm-13.5 6 4.4 6.2C16.1 20.8 12 22.3 7.9 23c.3-.8.6-1.6 1-2.3 1.5-3.2 3.7-6 6.4-8.3zm-9 18.9c0-1.2.1-2.4.4-3.6 5.6-.6 10.9-2.5 15.7-5.5l6.6 9.3-19 13.6C7.4 41 6.2 36.2 6.3 31.3zm6.2 17.5 19-13.6 6.7 9.4c-4.3 3.5-7.8 7.9-10.2 12.9-1.3-.2-2.6-.5-3.8-.9-4.6-1.5-8.6-4.1-11.7-7.8zm22.7 8.8c-.7.1-1.5.1-2.2.2 2-3.6 4.7-6.8 7.9-9.5l4.2 6c-3 1.6-6.3 2.8-9.9 3.3zm13.5-6-4.2-5.9C48 43.5 51.9 42 56 41.3c-.3.7-.5 1.3-.8 2-1.6 3.2-3.8 6-6.5 8.3z" })));
};

var SvgBehanceOriginal = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M26.1 29.8c1.7-.7 3-1.8 3.8-3.1.8-1.3 1.3-3 1.3-4.8 0-1.7-.3-3.2-.8-4.5-.6-1.3-1.4-2.3-2.5-3-1.1-.7-2.3-1.3-3.8-1.6-1.6-.3-3.2-.4-4.9-.4H1v38h18.5c1.7 0 3.4-.1 4.9-.7 1.7-.4 3.1-1.1 4.4-2 1.3-.8 2.3-2 3-3.5.7-1.4 1.1-3.1 1.1-5.1 0-2.4-.6-4.5-1.7-6.1-1.2-1.4-2.9-2.5-5.1-3.2zM9.5 19h7.9c.7 0 1.4.1 2.1.1s1.4.4 1.8.7c.6.3 1 .7 1.3 1.4.3.6.4 1.3.4 2.3 0 1.5-.4 2.8-1.4 3.5-1 .6-2.3 1-3.7 1H9.5v-9zm14.6 22.5c-.3.7-.7 1.1-1.4 1.5-.6.4-1.3.7-2 .7-.7.1-1.5.1-2.3.1h-9V33.5h9.2c1.8 0 3.2.4 4.4 1.3 1.1.8 1.7 2.3 1.7 4.2-.2 1-.2 1.8-.6 2.5zM62.4 32.5c-.4-2-1.3-3.7-2.4-5.2-1.1-1.5-2.5-2.7-4.2-3.7-1.7-.8-3.8-1.4-6.1-1.4-2.1 0-4.1.4-5.6 1.1-1.7.7-3.2 1.7-4.5 3.1-1.3 1.3-2.3 2.8-3 4.6-.7 1.7-1.1 3.7-1.1 5.8 0 2.1.3 4.1 1 5.9.7 1.8 1.7 3.2 2.8 4.6 1.3 1.3 2.7 2.3 4.5 3 1.7.7 3.7 1.1 5.9 1.1 3.1 0 5.8-.7 8-2.1 2.3-1.4 3.8-3.8 4.9-7.2H56c-.3.8-1 1.7-2 2.4s-2.4 1.1-3.9 1.1c-2.1 0-3.8-.6-4.9-1.7-1.1-1.1-1.8-3.2-1.8-5.4H63c0-2.1-.1-4.2-.6-6zM43 33.8c0-.7.3-1.4.5-2 .3-.7.6-1.4 1.1-1.9.6-.6 1.4-1.2 2.2-1.6.8-.4 1.8-.4 2.7-.4 1.8 0 3.4.6 4.2 1.5.8 1 1.5 2.4 1.7 4.4H43zM41.4 15h15.5v3.8H41.4z" })));
};

var SvgBehance = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M29.2 25.5c.8-3.4 0-6.9-2.2-9.6-2.2-2.7-5.4-4.2-8.8-4.2H7.7c-3.3 0-5.9 2.7-5.9 5.9v28.6c0 3.3 2.7 5.9 5.9 5.9h10.2c5.9 0 10.9-4.3 11.5-9.9.4-3.2-.6-6.4-2.7-8.8-.6-.6-1.2-1.2-1.8-1.7 2.1-1.5 3.8-3.7 4.3-6.2zm-10.9 8.7c2 0 3.8.8 5.1 2.3 1.3 1.4 1.9 3.3 1.6 5.3-.4 3.3-3.5 5.9-7.1 5.9H7.7c-.8 0-1.4-.6-1.4-1.4v-12h12zm6.5-9.7c-.6 2.7-3.9 5.2-6.9 5.2H6.3V17.6c0-.8.6-1.4 1.4-1.4h10.6c2.1 0 4 .9 5.3 2.6 1.2 1.6 1.7 3.6 1.2 5.7zM39.1 17h19.7c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H39.1c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3zM48.2 24.2c-7.8 0-14.1 6.3-14.1 14.1s6.3 14.1 14.1 14.1c3.4 0 6.7-1.2 9.2-3.5.9-.8 1-2.2.2-3.2-.8-.9-2.2-1-3.2-.2-1.7 1.5-4 2.4-6.3 2.4-4.5 0-8.3-3.1-9.3-7.3H60c1.2 0 2.3-1 2.3-2.3 0-7.8-6.4-14.1-14.1-14.1zm0 4.5c4.5 0 8.3 3.1 9.3 7.3H38.9c1-4.2 4.8-7.3 9.3-7.3z" })));
};

var SvgBiCycle = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M13 36.1c-6.2 0-11.2 5-11.2 11.2s5 11.2 11.2 11.2 11.2-5 11.2-11.2-5-11.2-11.2-11.2zm0 18a6.7 6.7 0 1 1 0-13.4 6.7 6.7 0 0 1 0 13.4zM51.1 36.2c-6.2 0-11.2 5-11.2 11.2s5 11.2 11.2 11.2 11.2-5 11.2-11.2-5.1-11.2-11.2-11.2zm0 17.8a6.7 6.7 0 1 1 0-13.4 6.7 6.7 0 0 1 0 13.4zM46.2 30.5c.8 1 2.2 1.1 3.2.4 1-.8 1.1-2.2.4-3.2l-8.5-10.8-.2-.2c-1-1-2.4-1.2-3.6-.6l-11.6 6.8c-.8.5-1.4 1.3-1.5 2.2-.1.9.2 1.7.8 2.4l3.8 4.4c.5.6.8 1.4.8 2.3v6.7c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3v-6.7c0-1.9-.7-3.8-1.9-5.2l-2.7-3.1 8.8-5.2 7.6 9.8zM48.6 17.7c3.4 0 6.1-2.7 6.1-6.1S52 5.4 48.6 5.4c-3.4 0-6.1 2.7-6.1 6.1s2.7 6.2 6.1 6.2zm0-7.8c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6-1.6-.6-1.6-1.5.7-1.7 1.6-1.7z" })));
};

var SvgBitbucket = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M21.2 13.4c0 3.7 5.8 5.1 10.8 5.1s10.8-1.3 10.8-5.1-5.8-5-10.8-5-10.8 1.3-10.8 5zM32 14c-2.1 0-3.8-.3-4.9-.6 1.1-.3 2.8-.6 4.9-.6 2.1 0 3.8.3 4.9.6-1.1.3-2.8.6-4.9.6zM32 22.4c-3.5 0-6.4 2.9-6.4 6.4 0 3.5 2.9 6.4 6.4 6.4s6.4-2.9 6.4-6.4c0-3.5-2.9-6.4-6.4-6.4zm0 8.3c-1 0-1.9-.9-1.9-1.9s.8-1.9 1.9-1.9 1.9.9 1.9 1.9-.9 1.9-1.9 1.9z" }),
        React__namespace.createElement("path", { d: "M51.2 5.1c-5-2.2-13.4-3.3-19.2-3.3S17.7 2.9 12.8 5.1c-1.1.5-1.8 1.6-1.6 2.8l2.5 26c.1.9.7 1.8 1.5 2.2C17.5 37.3 25.5 41 32 41c7 0 13.5-1.9 17.4-5.2.6-.5.9-1.1 1-1.9l2.5-26.1c.1-1.1-.6-2.3-1.7-2.7zm-5.3 27.7c-3.1 2.3-8.4 3.7-13.9 3.7-4.9 0-11.5-2.9-14-4L15.7 8.7c4-1.4 10.7-2.5 16.3-2.5s12.2 1 16.3 2.5l-2.4 24.1z" }),
        React__namespace.createElement("path", { d: "M48.2 40.2c-.8-.6-1.8-.7-2.7-.3l-.3.1c-2.6 1.1-8 3.5-13.2 3.4-5.8-.1-11.2-2.5-13.5-3.5-.9-.4-2-.3-2.7.3-.8.6-1.2 1.6-1.1 2.6l1.6 14.1c.1 1 .7 1.9 1.7 2.4 3.8 1.9 8.8 3 14 3s10.2-1.1 14-3c.9-.5 1.5-1.4 1.7-2.4l1.6-14.1c.1-1-.3-2-1.1-2.6zm-4.9 15.4c-3.1 1.4-7.1 2.2-11.3 2.2s-8.2-.8-11.3-2.2l-1.2-10.4c3.1 1.2 7.6 2.6 12.4 2.7 4.7.1 9.3-1.4 12.5-2.7l-1.1 10.4z" })));
};

var SvgBitcoin = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M47.9 31.9c3.8-2.4 6.3-6.4 6.5-11v-1c-.2-7.8-7-14.1-15.1-14.1h-3.5V4c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v1.8h-3.9V4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v1.8H11.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h1.8v43.3h-1.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h11.1v2c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-2h3.9v2c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3v-2h3.4c8.1 0 14.9-6.3 15.1-14.1v-1.1c-.3-4.8-2.9-8.8-6.6-11.2zM18.1 10.3h21.1c5.7 0 10.5 4.4 10.6 9.8v.7c-.2 4.9-4.5 8.9-9.7 8.9h-22V10.3zm31.7 33.4c-.2 5.4-4.9 9.8-10.6 9.8H18.1V34.2h22.1c5.1 0 9.5 3.9 9.6 8.8v.7z" })));
};

var SvgBittorrent = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M33.278 3.936h.24l-.757.074c4.707.026 9.419 1.172 13.547 3.45 5.353 2.92 9.707 7.635 12.171 13.217 1.61 3.642 2.46 7.631 2.374 11.618.023 6.47-2.404 12.885-6.578 17.814-6.028.764-12.271 1.227-18.21-.352-3.524-.877-6.657-3.15-8.663-6.167-2.037-3.606-1.34-8.596 1.748-11.398 2.15-1.95 5.254-2.786 8.092-2.152 2.511.513 4.743 2.15 6.031 4.361 1.259-.662 2.508-1.34 3.769-1.998-.888-1.494-1.984-2.883-3.354-3.963-2.304-1.824-5.225-2.814-8.154-2.896-2.778-.033-5.564.797-7.85 2.384-4.642 3.155-6.938 9.415-5.333 14.807 1.025 3.66 3.713 6.666 6.85 8.705 2.494 1.604 5.384 2.473 8.282 2.998 3.981.704 8.046.444 12.05.103-.402.414-1.006.39-1.535.484-4.272.634-8.679.654-12.901-.337-4.05-.938-7.908-2.936-10.785-5.97-4.228-4.567-5.218-11.987-1.896-17.33 1.735-2.846 4.28-5.293 7.444-6.455 3.455-1.289 7.39-1.276 10.828.068.565-1.31 1.18-2.599 1.734-3.913-5.668-2.317-12.44-1.716-17.587 1.613-2.818 1.822-5.137 4.37-6.823 7.264-1.88 3.328-2.488 7.298-1.913 11.06.758 5.071 3.529 9.818 7.592 12.951 1.976 1.56 4.312 2.612 6.716 3.322 3.107.923 6.349 1.325 9.583 1.4.458.007.918.025 1.374.083-.65.337-1.405.235-2.111.255-3.843.08-7.715-.517-11.319-1.862-2.741-1.033-5.33-2.573-7.363-4.701-2.133-2.12-3.928-4.627-4.967-7.463-1.222-3.357-1.604-7.048-.95-10.568.794-4.187 3.185-7.952 6.316-10.796 3.756-3.43 8.84-5.38 13.93-5.296.002-1.438-.002-2.879.004-4.317-4.393.002-8.788 1.15-12.586 3.366-5.02 2.92-8.965 7.611-11.058 13.02-1.536 4.053-2.11 8.568-1.067 12.815 1.194 5.186 4.488 9.802 8.9 12.753.687.504 1.473.855 2.148 1.38-.312-.021-.629-.058-.909-.206-1.422-.68-2.75-1.539-4.013-2.48-2.272-1.719-4.415-3.663-6.041-6.02-2.033-2.823-3.637-5.983-4.523-9.359-.842-3.121-1.032-6.387-.81-9.604.536-6.895 3.783-13.524 8.872-18.204 4.139-3.849 9.463-6.401 15.064-7.182 1.456-.233 2.935-.21 4.397-.376Z" })));
};

var SvgBlackboard = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56.1 9.4H34.3V6.5c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v2.8H7.9c-3.4 0-6.1 2.7-6.1 6.1v20.3c0 3.4 2.7 6.1 6.1 6.1h8.6L8.3 56.3c-.6 1.1-.2 2.5.9 3.1.3.2.7.3 1.1.3.8 0 1.6-.4 2-1.2l9.3-16.7h8.1v15.6c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3V41.9h8.3L52 58.6c.4.7 1.2 1.1 2 1.1.4 0 .8-.1 1.1-.3 1.1-.6 1.5-2 .9-3.1l-8.2-14.5h8.5c3.4 0 6.1-2.7 6.1-6.1V15.5c-.1-3.4-2.9-6.1-6.3-6.1zm1.7 26.4c0 .9-.7 1.6-1.6 1.6H7.9c-.9 0-1.6-.7-1.6-1.6V15.5c0-.9.7-1.6 1.6-1.6h48.3c.9 0 1.6.7 1.6 1.6v20.3z" })));
};

var SvgBlogger = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M62.9 27.5c-.3-1.1-1-2.1-1.7-2.5-.3-.1-1.8-.3-3.5-.4-2.8-.1-3.1-.1-3.9-.7-1.5-.9-1.8-1.7-1.8-4.1 0-4.5-2-8.9-5.6-12.7-2.7-2.7-5.6-4.5-9.2-5.6-.8-.3-2.7-.3-8.7-.4-9.6-.1-11.7.1-15.1 1.4C7.4 4.8 3 9.9 1.5 16.2c-.3 1.3-.5 3.3-.5 14.5-.1 14.1 0 16.1 1 18.9.7 2.4 1.4 3.7 3 5.8 3 3.8 7.2 6.6 11.4 7.3 2.1.3 27.3.4 30 .1 4.5-.6 8-2.4 11.4-5.8 2.4-2.4 3.9-5.1 4.8-8.6.4-1.3.4-2 .4-10.6 0-6.4 0-9.5-.1-10.3zm-44.7-8.7c1.1-1.1 1.4-1.1 8.2-1.1 6.1 0 6.3 0 7.2.4 1.3.7 1.8 1.5 1.8 3 0 1.4-.4 2.3-1.7 3-.6.4-1 .4-7 .4-3.7 0-6.6-.1-7-.1-2.3-.7-3.2-3.9-1.5-5.6zm26.6 27.6-2 .3-10.8.2c-9.4.1-12.1-.1-12.7-.3-1-.4-2-1.7-2-2.7-.1-1 .4-2.4 1.1-3.1 1-.8 1.4-.8 13.5-1 12.4 0 12.3 0 13.5 1.1 1.7 1.7 1.4 4.3-.6 5.5z" })));
};

var SvgBluetoothOriginal = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m36.4 32.4 11.3-12.5L30 1v24.9L19.5 15.5l-3.8 3.9 13.1 13.1-13.1 13.2 3.8 3.8L30 39l.3 24 18-18-11.9-12.6zm5-12.4-6.1 6.1V14l6.1 6zm-6.2 18.9 6.1 6.1-6.1 6V38.9z" })));
};

var SvgBluetooth = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m48.8 42-15-10 15-10c1.6-1.1 2.6-2.9 2.6-4.8s-1-3.7-2.6-4.8L34 2.4c-1.2-.8-2.7-.9-4-.2-1.3.7-2.1 2-2.1 3.5v22.2l-11.9-8c-1-.7-2.4-.4-3.1.6-.7 1-.4 2.4.6 3.1L25.9 32l-12.2 8.2c-1 .7-1.3 2.1-.6 3.1.4.6 1.1 1 1.9 1 .4 0 .9-.1 1.2-.4L27.9 36v22.3c0 1.5.8 2.8 2.1 3.5.6.3 1.2.5 1.8.5.7 0 1.5-.2 2.1-.7l14.9-9.9c1.6-1.1 2.6-2.9 2.6-4.8 0-2-.9-3.8-2.6-4.9zM32.4 6.8l13.9 9.3c.5.3.6.9.6 1.1 0 .2-.1.7-.6 1.1l-13.9 9.3V6.8zm13.9 41.1-13.9 9.3V36.5l13.9 9.3c.5.3.6.9.6 1.1 0 .2 0 .7-.6 1z" })));
};

var SvgBmw = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M32.985 0c-17.635 0-32 14.342-32 32 0 17.657 14.342 32 32 32 17.657 0 32-14.343 32-32 0-17.658-14.343-32-32-32m0 63.102C15.834 63.102 1.883 49.152 1.883 32 1.883 14.849 15.833.898 32.985.898c17.15 0 31.102 13.95 31.102 31.102 0 17.151-13.951 31.102-31.102 31.102Z" }),
        React__namespace.createElement("path", { fill: "#000", d: "M14.752 19.43s.069.046.092.07c0 0 .023 0 .023-.024l1.865-2.348c.23-.276.46-.576.69-.852a.967.967 0 0 0 .138-.99c-.184-.345-.506-.575-.92-.575-.323 0-.576.184-.783.437l-.829 1.036a135.25 135.25 0 0 0-1.68 2.118c.299.23.575.46.874.714.184.138.346.276.507.414" }),
        React__namespace.createElement("path", { fill: "#000", d: "M32.985 1.427c-16.875 0-30.55 13.675-30.55 30.55s13.675 30.55 30.55 30.55 30.55-13.675 30.55-30.55-13.675-30.55-30.55-30.55m-4.927 1.911 2.855-.322 2.072 6.055 2.072-6.055 2.855.322.322 8.587L36 11.603l-.207-5.732-2.003 5.732h-1.589L30.176 5.87l-.207 5.732-2.233.322.322-8.587ZM8.766 17.496l-.69-.552-.07-.07c.047-.045.07-.091.116-.137.598-.737 1.174-1.474 1.772-2.233.69-.852 1.382-1.727 2.072-2.602.138-.161.254-.322.392-.506.23-.3.552-.507.897-.645a2.091 2.091 0 0 1 2.164.46c.277.277.484.622.576.99.092.392.07.76-.046 1.151.046-.046.092-.091.161-.138.668-.46 1.543-.598 2.302-.253.76.345 1.243 1.036 1.358 1.842.024.3 0 .621-.069.92-.184.576-.575 1.014-.943 1.451-.714.898-1.428 1.773-2.141 2.67-.599.737-1.198 1.474-1.773 2.21-.046.07-.092.116-.138.162 0 0-.046-.046-.07-.046-.206-.184-.437-.346-.667-.53-.875-.69-1.726-1.381-2.601-2.072-.875-.69-1.75-1.404-2.625-2.095m24.219 33.589c-10.544 0-19.085-8.541-19.085-19.108s8.541-19.085 19.085-19.085 19.085 8.541 19.085 19.085-8.541 19.108-19.085 19.108ZM51.149 22.1l-1.105-1.888 3.776-4.95-5.664 2.602-1.588-1.474L51.725 9.6l1.588 1.473-2.993 3.914 4.766-2.187 1.404 1.75-3.177 4.167 4.466-2.05 1.105 1.888-7.758 3.569.023-.023Z" }),
        React__namespace.createElement("path", { fill: "#000", d: "M14.66 13.974c.069-.322 0-.645-.23-.875a.949.949 0 0 0-1.083-.23c-.276.115-.437.345-.598.576-.69.828-1.335 1.68-2.026 2.509 0 0-.161.184-.138.184.138.115.276.207.414.322.368.3.714.576 1.06.875.368-.437.713-.875 1.058-1.335.368-.437.714-.875 1.06-1.312.16-.23.367-.415.46-.69M14.844 31.977h18.14V13.859c-9.899.253-17.864 8.242-18.14 18.118ZM32.985 50.118c9.9-.253 17.865-8.242 18.14-18.141h-18.14v18.141Z" })));
};

var SvgBold = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M42.8 29.3c4.9-1.8 7.8-6.3 7.8-12.3 0-4.6-1.4-8.6-4.9-11.3C42.6 2.4 38.3 1 33.2 1H11.4C9.9 1 8.8 2.1 8.8 3.6v56.7c0 1.5 1.1 2.6 2.6 2.6h25c5.4 0 10-1.8 13.5-5.4 3.5-3.5 5.4-7.8 5.4-13.2-.1-7.5-4.7-13.5-12.5-15zM22.3 12.9h8.8c4 0 6.8 2.8 6.8 6.3s-2.9 6.5-6.8 6.5h-8.8V12.9zm11.6 38H22.3V36.4H34c4.6 0 8.1 2.8 8.1 7.1s-3.5 7.4-8.2 7.4z" })));
};

var SvgBoltAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M23.8 62.3c-1.2 0-2.3-.5-3.1-1.4-1.5-1.7-1-3.7-.8-4.6l5.3-22.7H14.9c-.7 0-2.1 0-3.3-.9-2-1.6-1.4-4.3-1.3-5.2L14.5 7c.2-1.1.6-2.8 2.1-4C18.3 1.7 20 1.7 21 1.8h13.7c1.2 0 3.7 0 5.2 1.9s1 4.4.8 5.6L39.5 15l8.8.1c3.5 0 4.8 1.6 5.2 2.9.7 2-.5 3.8-1 4.5L28 59.4c-.5.7-1.2 1.8-2.5 2.5-.5.2-1 .4-1.5.4 0-.1-.1 0-.2 0zm.1-2.3zm-9.1-31H28.1c.7 0 1.3.3 1.8.9.4.5.6 1.2.4 1.9l-5.8 24.8L48.7 20c.1-.1.2-.3.2-.4h-.8l-11.5-.1c-.7 0-1.3-.3-1.7-.8-.4-.5-.6-1.2-.4-1.9l1.8-8.5c.3-1.4.2-1.7.1-1.8-.1-.1-.4-.2-1.8-.2H21c-.8 0-1.3 0-1.4.1-.1.1-.3.6-.5 1.4l-4.2 20.5c0 .3-.1.5-.1.7z" })));
};

var SvgBolt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M28.4 62.3c-.7 0-1.3-.1-2-.4-1.9-.9-2.9-2.9-2.5-5l3-15.9H8.6c-1.7 0-3.3-1-4.1-2.5-.8-1.5-.6-3.4.4-4.8L27.4 3.6C28.6 2 30.6 1.4 32.5 2c1.9.6 3.1 2.3 3.1 4.3v14.1h19.8c1.8 0 3.4 1 4.1 2.6.8 1.6.5 3.5-.6 4.8l-27 32.8c-.9 1.1-2.2 1.7-3.5 1.7zm2.6-56L8.5 36.4l21.1.1c.7 0 1.3.3 1.7.8.4.5.6 1.2.5 1.9l-3.5 18.6.1.1L55.5 25l-22.1-.1c-1.2 0-2.3-1-2.3-2.3L31 6.3z" })));
};

var SvgBook = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M39.6 50.1H24.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h15.3c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.4-2.3zM24.1 34.3h15.8c2.3 0 4.3-1.9 4.3-4.3v-5.9c0-2.3-1.9-4.3-4.3-4.3H24.1c-2.3 0-4.3 1.9-4.3 4.3V30c.1 2.3 2 4.3 4.3 4.3zm.3-9.9h15.3v5.4H24.4v-5.4z" }),
        React__namespace.createElement("path", { d: "M17 6.3h35.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H17c-4 0-7.2 3.1-7.5 7V56c0 3.4 2.9 6.1 6.5 6.1h32.9c2.8 0 5.1-2.3 5.1-5.1V17c0-2.8-2.3-5.1-5.1-5.1H16.7c-1.7 0-2.7-1-2.7-2.6-.1-1.7 1.3-3 3-3zm-.4 10.1s.1 0 0 0c.1 0 .1 0 0 0h32.2c.3 0 .6.3.6.6v40.2c0 .3-.3.6-.6.6H15.9c-1.1 0-2-.7-2-1.6V16c.8.3 1.7.4 2.7.4z" })));
};

var SvgBookmarkAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56.5 22.1H29.2v-7c0-3.2-2.6-5.8-5.8-5.8h-8.2c-3.2 0-5.8 2.6-5.8 5.8v7H7.5c-3.2 0-5.8 2.6-5.8 5.8v21c0 3.2 2.6 5.8 5.8 5.8h48.9c3.2 0 5.8-2.6 5.8-5.8v-21c.1-3.2-2.5-5.8-5.7-5.8zm-42.6-6.9c0-.7.6-1.3 1.3-1.3h8.2c.7 0 1.3.6 1.3 1.3v14.7l-2.8-2.2-.2-.1c-1.4-1-3.3-1-4.7 0L14 30V15.2zm43.9 33.6c0 .7-.6 1.3-1.3 1.3h-49c-.7 0-1.3-.6-1.3-1.3v-21c0-.7.6-1.3 1.3-1.3h1.9v5.3c0 1.4.8 2.6 2 3.2.5.2 1 .4 1.5.4.8 0 1.5-.3 2.2-.8l4.2-3.3 4.1 3.3c1.1.8 2.5 1 3.7.4s2-1.8 2-3.2v-5.2h27.3c.7 0 1.3.6 1.3 1.3v20.9z" })));
};

var SvgBookmark = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M16.8 62.3c-.7 0-1.3-.1-2-.4-1.7-.8-2.8-2.5-2.8-4.4V8.2c0-3.5 2.9-6.4 6.4-6.4h27.3c3.5 0 6.4 2.9 6.4 6.4v49.1c0 1.9-1.1 3.6-2.8 4.4-1.7.8-3.7.5-5.2-.8l-11-9.6c-.7-.5-1.5-.4-2.2 0l-11 9.7c-.9.8-2 1.3-3.1 1.3zm1.5-56c-1.1 0-1.9.9-1.9 1.9v49.3c0 .1 0 .2.2.3.2.1.3 0 .3 0l11.2-9.9c2.3-1.8 5.5-1.8 7.8 0l.2.2L47 57.7s.1.1.3 0c.2-.1.2-.2.2-.3V8.2c0-1.1-.9-1.9-1.9-1.9H18.3z" })));
};

var SvgBootstrap5 = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M13.353 7C9.7 7 6.999 10.135 7.12 13.534 7.236 16.8 7.085 21.03 6 24.479 4.91 27.94 3.067 30.13.06 30.412v3.176c3.008.282 4.85 2.473 5.94 5.933 1.085 3.45 1.236 7.679 1.12 10.945C6.999 53.865 9.7 57 13.353 57h37.418c3.652 0 6.354-3.135 6.233-6.534-.116-3.266.035-7.496 1.12-10.945 1.09-3.46 2.927-5.652 5.936-5.933v-3.176c-3.009-.282-4.846-2.473-5.936-5.933-1.086-3.449-1.236-7.679-1.12-10.945C57.124 10.135 54.424 7 50.77 7H13.352Zm30.096 30.778c0 4.681-3.56 7.52-9.468 7.52H23.924c-.288 0-.564-.112-.767-.312-.204-.2-.318-.47-.318-.752V19.766c0-.282.114-.553.318-.752.203-.2.48-.312.767-.312h10c4.926 0 8.16 2.617 8.16 6.635 0 2.82-2.176 5.345-4.946 5.788v.147c3.772.405 6.311 2.968 6.311 6.506ZM32.885 22.075H27.15v7.943h4.83c3.734 0 5.792-1.474 5.792-4.11 0-2.47-1.77-3.834-4.887-3.834ZM27.15 33.17v8.755h5.946c3.887 0 5.946-1.53 5.946-4.405s-2.117-4.35-6.196-4.35H27.15Z", clipRule: "evenodd" })));
};

var SvgBootstrap = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M41.4 39.7c0 5.9-5.5 5.8-6 5.8H24.1V34.2h11.2c6-.2 6.1 4.3 6.1 5.5zm-6.9-10.2c.1 0 5.3.1 5.3-5.1 0-2.1-.4-4.9-5.3-4.9H24.1v10h10.4zm28.4-18.1v41.3c0 5.6-4.6 10.3-10.4 10.3h-41C5.7 63 1.1 58.4 1.1 52.6V11.4C1.1 5.6 5.7 1 11.5 1h41.3c5.5 0 10.1 4.6 10.1 10.4zm-15.2 29c0-3-.8-8-6.7-9.3V31c3.2-1.4 5.1-3.9 5.1-7.6 0-1 .3-9-10.7-9H17.9v36c17.7 0 19.4.1 22.6-.7 1.9-.6 7.2-2.4 7.2-9.3z" })));
};

var SvgBrave = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "m40.784 2.852 5.001 5.781s4.392-1.242 6.466.87a179.047 179.047 0 0 1 3.782 3.978l-1.342 3.356 1.708 4.971s-5.023 19.384-5.612 21.75c-1.159 4.662-1.952 6.464-5.246 8.825-3.293 2.362-9.271 6.464-10.247 7.085-.21.134-.432.288-.661.447-.835.581-1.772 1.233-2.633 1.233s-1.798-.652-2.633-1.232c-.23-.16-.45-.314-.66-.448-.977-.621-6.955-4.723-10.248-7.085-3.294-2.361-4.087-4.163-5.246-8.824-.589-2.367-5.612-21.75-5.612-21.75l1.708-4.973-1.342-3.355s1.708-1.865 3.782-3.978c2.074-2.112 6.466-.87 6.466-.87l5.001-5.78h17.568ZM19.618 12.3s-6.434 7.923-6.434 9.617c0 1.4.553 1.948 1.205 2.594.136.135.277.274.418.427l4.824 5.219c.048.051.1.106.157.163.482.494 1.19 1.22.69 2.426l-.102.246c-.549 1.307-1.226 2.92-.364 4.555.917 1.74 2.488 2.9 3.494 2.708 1.006-.192 3.37-1.45 4.24-2.025.869-.575 3.623-2.89 3.623-3.775 0-.74-1.981-1.968-2.944-2.565-.191-.119-.342-.213-.43-.272-.099-.069-.265-.174-.47-.303-.879-.557-2.465-1.56-2.504-2.006-.05-.549-.03-.71.677-2.066a28.9 28.9 0 0 1 .51-.917c.674-1.182 1.429-2.506 1.262-3.454-.189-1.07-1.835-1.683-3.23-2.203a53.623 53.623 0 0 1-.507-.192l-1.453-.555h-.001l-.002-.001c-1.391-.531-2.936-1.12-3.19-1.24-.354-.166-.263-.325.807-.428l.52-.054c1.323-.144 3.765-.408 4.952-.071.233.066.495.139.77.214 1.334.368 2.968.82 3.125 1.08.027.045.054.084.08.12.15.218.248.36.082 1.284-.05.275-.15.813-.276 1.479-.368 1.96-.944 5.025-1.017 5.713-.01.096-.021.188-.032.277v.001c-.092.767-.153 1.277.72 1.48l.228.053c.985.23 2.432.569 2.954.569.522 0 1.967-.338 2.953-.569l.229-.053c.873-.203.812-.713.72-1.48-.011-.089-.022-.182-.032-.278-.073-.687-.647-3.745-1.016-5.705v-.001c-.126-.67-.227-1.21-.277-1.486-.166-.924-.068-1.066.082-1.283.026-.037.053-.076.08-.122.157-.26 1.792-.71 3.125-1.079.275-.075.537-.148.77-.214 1.187-.337 3.629-.073 4.953.07.202.023.378.041.52.055 1.069.104 1.16.262.807.427-.255.12-1.802.71-3.194 1.242l-1.453.555c-.162.063-.332.126-.506.19l-.001.001c-1.395.52-3.041 1.134-3.23 2.204-.167.949.588 2.272 1.262 3.454.183.32.359.629.51.917.708 1.356.726 1.517.677 2.066-.04.445-1.626 1.45-2.505 2.006-.204.13-.37.234-.47.303-.087.06-.238.153-.43.272-.962.597-2.944 1.826-2.944 2.565 0 .885 2.755 3.2 3.624 3.775.87.575 3.233 1.833 4.24 2.025 1.006.192 2.577-.969 3.494-2.708.862-1.635.185-3.248-.364-4.555l-.103-.246c-.5-1.206.21-1.932.69-2.426.057-.057.11-.112.158-.163l4.824-5.22c.14-.152.282-.291.418-.427.652-.645 1.205-1.193 1.205-2.593 0-1.694-6.434-9.617-6.434-9.617s-5.428 1.056-6.16 1.056c-.584 0-1.712-.395-2.888-.808-.298-.104-.598-.21-.894-.31-1.464-.497-2.44-.501-2.44-.501h.026-.052H32c-.015 0-.987.008-2.44.5-.296.101-.596.207-.894.311-1.176.413-2.304.808-2.888.808-.732 0-6.16-1.056-6.16-1.056Zm16.578 28.507c-1.72-.906-3.862-1.676-4.196-1.676-.334 0-2.477.77-4.196 1.676l-1.09.574h-.002c-1.149.604-1.964 1.032-2.272 1.228-.398.254-.155.733.208.994s5.238 4.107 5.71 4.532l.192.175c.456.418 1.037.953 1.45.953.412 0 .994-.534 1.45-.953l.191-.175c.473-.425 5.348-4.27 5.711-4.532.363-.261.606-.74.207-.994-.307-.196-1.121-.624-2.269-1.226l-1.094-.576Z", clipRule: "evenodd" })));
};

var SvgBricks = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M57 29.8h-3v-6.1c0-3.4-2.8-6.2-6.2-6.2H16.3c-3.4 0-6.2 2.8-6.2 6.2v6.1H7c-2.9 0-5.2 2.4-5.2 5.2v6.3c0 2.9 2.4 5.2 5.2 5.2h50c2.9 0 5.2-2.4 5.2-5.2V35c0-2.9-2.3-5.2-5.2-5.2zm-7.5-6.1v6.1H34.2V22h13.5c1-.1 1.8.7 1.8 1.7zm-9.6 10.5V42H24.1v-7.8h15.8zM14.5 23.7c0-1 .8-1.8 1.8-1.8h13.5v7.8H14.5v-6zM6.2 41.3V35c0-.4.3-.8.8-.8h12.6V42H7c-.4.1-.8-.3-.8-.7zm51.6 0c0 .4-.3.8-.8.8H44.4v-7.8H57c.4 0 .8.3.8.8v6.2z" })));
};

var SvgBridge = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M61 29.1h-6.7c-3-9.2-11.8-15.9-22.3-15.9S12.7 19.9 9.7 29.1H3c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h5.7v13c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V35.9c0-.8.1-1.5.2-2.3h37.3c.1.8.2 1.5.2 2.3v10.7c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-13H61c1.2 0 2.3-1 2.3-2.3 0-1.2-1.1-2.2-2.3-2.2zm-31.2 0h-6v-9.5c1.9-.9 3.9-1.5 6-1.7v11.2zm4.5-11.2c2.1.2 4.2.9 6 1.7v9.5h-6V17.9zm-15.1 4.7v6.5h-4.7c1.1-2.5 2.7-4.7 4.7-6.5zm25.6 6.5v-6.5c2 1.8 3.6 4 4.7 6.5h-4.7z" })));
};

var SvgBriefcaseAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56 20H43.7v-1.8c0-5.7-4.6-10.3-10.3-10.3h-2.9c-5.7 0-10.3 4.6-10.3 10.3V20H8c-3.4 0-6.3 2.8-6.3 6.3v23.6c0 3.4 2.8 6.3 6.3 6.3h48c3.4 0 6.3-2.8 6.3-6.3V26.2c0-3.4-2.9-6.2-6.3-6.2zm-31.2-1.8c0-3.2 2.6-5.8 5.8-5.8h2.9c3.2 0 5.8 2.6 5.8 5.8V20H24.8v-1.8zM8 24.5h48c1 0 1.8.8 1.8 1.8v5.6h-5.9V30c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v1.9H16.7V30c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v1.9H6.3v-5.6c0-1 .7-1.8 1.7-1.8zm48 27.1H8c-1 0-1.8-.8-1.8-1.8V36.3h5.9v1.9c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-1.9h30.6v1.9c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-1.9h5.9v13.5c0 1-.8 1.8-1.8 1.8z" })));
};

var SvgBriefcase = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56 13.2H44.8V7.7c0-2.9-2.4-5.3-5.3-5.3H24.4c-2.9 0-5.3 2.4-5.3 5.3v5.5H8c-3.4 0-6.3 2.8-6.3 6.3v35.8c0 3.4 2.8 6.3 6.3 6.3h48c3.4 0 6.3-2.8 6.3-6.3V19.5c-.1-3.5-2.9-6.3-6.3-6.3zM23.7 7.7c0-.4.3-.7.7-.7h15.1c.4 0 .8.3.8.8v5.5H23.7V7.7zm34 47.6c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8V19.5c0-1 .8-1.8 1.8-1.8h48c1 0 1.8.8 1.8 1.8v35.8z" })));
};

var SvgBrushAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60.4 5.8c-1.3-1.3-2.9-2-4.7-2-1.7 0-3.3.7-4.5 1.8L15.5 38.7c-1.2 0-2.5.2-3.9.8-2.3 1-3.3 2.8-4.3 4.5-.9 1.6-1.9 3.3-4.2 5-1 .8-1.5 2-1.4 3.2.1 1.2.8 2.3 1.9 2.9C8.2 57.6 13.9 60 18.7 60c2.1 0 4-.5 5.6-1.7 2.3-1.8 3.5-4.1 3.5-6.8V51l32.7-36.1c2.4-2.4 2.3-6.6-.1-9.1zM21.6 54.9c-2.2 1.6-7.9.4-14.7-3.1 2.3-2 3.4-4 4.3-5.5.9-1.5 1.3-2.2 2.2-2.6 2.3-1 4.2-.1 4.4.1 2.7 1.9 5.4 5.2 5.4 8 .1 1.2-.4 2.2-1.6 3.1zM57.2 12l-31 34.2c-1.4-2.5-3.6-4.7-5.6-6.1L54.3 8.9c.8-.8 2.1-.8 2.9 0 .7.9.8 2.3 0 3.1z" })));
};

var SvgBrush = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60.1 19.1 45 4c-2.9-2.9-7.5-2.9-10.4 0L20.1 18.5c-2.4 2.4-3.8 5.6-3.8 9.1 0 2.7.8 5.2 2.3 7.3L3.9 49.6c-1.4 1.4-2.2 3.2-2.2 5.1 0 2 .8 3.9 2.2 5.3 1.4 1.4 3.3 2.1 5.2 2.1 1.9 0 3.8-.7 5.2-2.1L29 45.3c2.2 1.6 4.8 2.4 7.4 2.4 3.3 0 6.6-1.2 9.1-3.7L60 29.5c1.4-1.4 2.1-3.2 2.1-5.2s-.6-3.8-2-5.2zm-49 37.7c-1.1 1.1-2.9 1.1-4 0-.5-.5-.8-1.3-.8-2s.3-1.4.8-2l14.5-14.5 4 4-14.5 14.5zm19.5-16-7.3-7.3c-1.6-1.6-2.4-3.7-2.4-5.9s.9-4.3 2.4-5.9l2.5-2.5 19.1 19.1-2.5 2.5c-3.3 3.2-8.6 3.2-11.8 0zm26.3-14.5L48 35.2 29 16.1l8.9-8.9c1.1-1.1 2.9-1.1 4 0L57 22.3c.5.5.8 1.2.8 2s-.3 1.4-.9 2z" }),
        React__namespace.createElement("path", { d: "M36.4 35.2c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.8.9-2.3 0-3.2zM28.7 26.5c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.8.9-2.3 0-3.2z" })));
};

var SvgBtc = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M46.3 30.3c3.4-1.7 5.5-4.8 5.1-9.9-.7-6.9-6.3-9.3-13.9-9.9V1h-5.9v9.4c-1.6 0-3.1 0-4.6.1V1h-6v9.6c-2.1.1-4.6 0-11.8 0v6.3c4.6-.1 7-.4 7.6 2.7V46c-.4 2.4-2.3 2-6.5 2l-1.1 7H21v8h5.9v-8.2h4.6V63h5.9v-8.2c9.9-.6 16.5-3 17.3-12.3.7-7.5-2.9-10.8-8.4-12.2zM26.9 17.2c3.2 0 13.7-1.1 13.7 5.9 0 6.6-10.4 5.8-13.7 5.8V17.2zm0 30.6V35c3.9 0 16.1-1.1 16.1 6.5.1 7.1-12.2 6.3-16.1 6.3z" })));
};

var SvgBubble = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M5.9 56.1c-.6 0-1.2-.1-1.8-.4-1.5-.7-2.4-2.1-2.4-3.8V14.2c0-3.4 2.8-6.3 6.3-6.3h48c3.4 0 6.3 2.8 6.3 6.3v27.6c0 3.4-2.8 6.3-6.3 6.3H17.1l-8.5 7c-.8.6-1.7 1-2.7 1zM8 12.4c-1 0-1.8.8-1.8 1.8v37l8.6-7.1c.4-.3.9-.5 1.4-.5H56c1 0 1.8-.8 1.8-1.8V14.2c0-1-.8-1.8-1.8-1.8H8z" })));
};

var SvgBug = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M57.7 38.5h-9c-.1-2.4-.5-4.7-1.1-6.9l7.2-6.3c.9-.8 1-2.2.2-3.2-.8-.9-2.2-1-3.2-.2l-6 5.3c-1.4-2.7-3.2-4.9-5.3-6.6.9-.4 1.7-.9 2.4-1.7 1.3-1.4 1.9-3.3 1.7-5.2-.6-6.8-6-11.9-12.7-11.9-6.6 0-12.2 5.1-12.9 11.9-.2 1.9.4 3.8 1.7 5.2.7.8 1.5 1.3 2.4 1.7-2.1 1.6-3.8 3.8-5.2 6.4l-5.8-5.1c-.9-.8-2.4-.7-3.2.2-.8.9-.7 2.4.2 3.2l7 6.1c-.7 2.2-1.1 4.6-1.2 7.1H6.3c-1.2 0-2.3 1-2.3 2.3S5 43 6.3 43h8.9c.2 2.1.7 4 1.3 5.9l-7.2 6.4c-.9.8-1 2.2-.2 3.2.4.5 1.1.8 1.7.8.5 0 1.1-.2 1.5-.6l6.1-5.4c3.1 5.5 8 9 13.6 9s10.6-3.6 13.6-9.2l6.3 5.6c.4.4 1 .6 1.5.6.6 0 1.2-.3 1.7-.8.8-.9.7-2.4-.2-3.2l-7.4-6.5c.6-1.8 1-3.7 1.2-5.7h9.1c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.4-2.3zM23.5 14.1c.5-4.5 4.1-7.9 8.4-7.9 4.3 0 7.8 3.4 8.3 7.9.1.7-.1 1.3-.5 1.7-.5.5-1.1.8-1.6.8H25.7c-.6 0-1.2-.3-1.6-.7-.4-.5-.6-1.1-.6-1.8zm8.4 43.7c-6.8 0-12.4-8-12.4-17.9C19.5 30 25.1 22 31.9 22s12.4 8 12.4 17.9c0 9.8-5.6 17.9-12.4 17.9z" })));
};

var SvgBulb = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M55.2 24.9C55.2 12.1 44.8 1.8 32 1.8 19.2 1.8 8.8 12.1 8.8 24.9c0 8.6 4.8 16.5 12.3 20.5v10.7c0 3.4 2.7 6.1 6.1 6.1h9.5c3.4 0 6.1-2.7 6.1-6.1V45.4c7.6-4 12.4-11.9 12.4-20.5zM38.4 56.1c0 .9-.7 1.6-1.6 1.6h-9.5c-.9 0-1.6-.7-1.6-1.6v-9.9h12.7v9.9zm1.7-14.3h-5.5v-7.3l5.7-4.4c1-.8 1.2-2.2.4-3.2-.8-1-2.2-1.2-3.2-.4l-3 2.3V24c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v5.1l-3.8-2.7c-1-.7-2.4-.5-3.1.5-.7 1-.5 2.4.5 3.1l6.4 4.5v7.2h-6.2c-6.4-3.1-10.6-9.7-10.6-16.8 0-10.3 8.4-18.7 18.7-18.7s18.7 8.4 18.7 18.7c.2 7.2-4 13.8-10.4 16.9z" })));
};

var SvgBullhorn = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M55.9 1.8h-8.1c-3.2 0-5.9 2.4-6.2 5.5L17.2 9.7H8.1c-3.4 0-6.2 2.7-6.2 6v16.5c0 2.3 1.4 4.4 3.4 5.4l3.5 19.3c.7 3.1 3.6 5.4 6.9 5.4 2.2 0 4.3-1 5.7-2.7 1.2-1.5 1.7-3.4 1.3-5.2L20 38.8 41.5 43c.2 3.3 2.9 5.9 6.2 5.9h8.1c3.4 0 6.3-2.8 6.3-6.3V8c0-3.4-2.8-6.2-6.2-6.2zM19.6 14l21.9-2.2v26.6l-21.9-4.3V14zM6.4 15.7c0-.7.7-1.5 1.7-1.5h7v19.5h-7c-.9 0-1.7-.7-1.7-1.5V15.7zm11.5 41.1c-.5.6-1.3 1-2.2 1-1.2 0-2.3-.8-2.5-1.7L10 38.2h5.3l2.9 17v.1c.2.7-.1 1.2-.3 1.5zm39.7-14.2c0 1-.8 1.8-1.8 1.8h-8.1c-1 0-1.8-.8-1.8-1.8V8c0-1 .8-1.8 1.8-1.8h8.1c1 0 1.8.8 1.8 1.8v34.6z" })));
};

var SvgBurger = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56.8 23.1c-1-9.1-8.7-16.2-18-16.2H25.2c-4.9 0-9.4 1.9-12.8 5.3-3 3-4.8 6.8-5.2 11C4 24.8 1.8 28 1.8 31.7v.8c0 3.7 2.2 6.9 5.4 8.5.9 9.1 8.7 16.3 18 16.3h13.6c4.9 0 9.4-1.9 12.8-5.3 3-2.9 4.8-6.8 5.2-11 3.2-1.6 5.4-4.8 5.4-8.5v-.7c.1-3.9-2.2-7.2-5.4-8.7zm-41.2-7.8c2.6-2.6 6-4 9.6-4h13.6c6.5 0 12 4.6 13.3 10.8H11.9c.5-2.5 1.8-4.9 3.7-6.8zm32.8 33.4c-2.6 2.6-6 4-9.7 4H25.2c-6.5 0-12-4.6-13.3-10.8h40.2c-.5 2.6-1.8 4.9-3.7 6.8zm9.4-16.3c0 2.8-2.4 5-5.3 5h-41c-2.9 0-5.3-2.2-5.3-5v-.8c0-2.8 2.4-5 5.3-5h41.1c2.8 0 5.1 2.3 5.1 5.1v.7z" })));
};

var SvgBus = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M21.8 33.4c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 7.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zM42.2 33.4c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 7.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.6 1.5-1.5 1.5z" }),
        React__namespace.createElement("path", { d: "M56.4 4.3h-2.3c-.8-1.5-2.3-2.5-4.1-2.5H14.1c-1.8 0-3.4 1-4.1 2.5H7.6C5.4 4.3 3.5 6 3.4 8.1v4.4c0 2.2 1.9 3.9 4.3 3.9h1.7v29.7c0 3 2.2 5.5 5.1 5.9v4c0 3.4 2.8 6.3 6.3 6.3H23c3.4 0 6.3-2.8 6.3-6.3v-3.9H35V56c0 3.4 2.8 6.3 6.3 6.3h2.2c3.4 0 6.3-2.8 6.3-6.3v-4c2.9-.4 5.1-2.9 5.1-5.9V16.4h1.7c2.4 0 4.3-1.8 4.3-3.9V8.2c-.3-2.2-2.2-3.9-4.5-3.9zm-42.3 2h35.8c.1 0 .2.1.2.2V12H13.9V6.4c0-.1.1-.1.2-.1zm36 20.9H34.3V16.4h15.9v10.8zm-36.2 0V16.4h15.9v10.8H13.9zm-6-15.3V8.8h1.5v3.1H7.9zM24.7 56c0 1-.8 1.8-1.8 1.8h-2.2c-1 0-1.8-.8-1.8-1.8v-3.9h5.7V56zM45 56c0 1-.8 1.8-1.8 1.8H41c-1 0-1.8-.8-1.8-1.8v-3.9H45V56zm3.7-8.4H15.3c-.8 0-1.4-.7-1.4-1.4V31.7h36.2v14.4c0 .8-.6 1.5-1.4 1.5zm7.4-35.7h-1.5V8.8h1.5v3.1z" })));
};

var SvgCake = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M58.1 29.7h-1V11.4c0-4-3.3-7.3-7.3-7.3H14.1c-4 0-7.3 3.3-7.3 7.3v18.3h-1c-2.3 0-4.1 1.8-4.1 4.1v18.7c0 4 3.3 7.3 7.3 7.3h46c1.9 0 3.8-.8 5.1-2.1 1.4-1.4 2.1-3.2 2.1-5.2V33.8c.1-2.2-1.8-4.1-4.1-4.1zm-46.8-9.4c.8.3 1.5.7 2.3 1.2 1.5 1 3.4 2.1 6.9 2.1 3.5 0 5.4-1.2 6.9-2.1 1.3-.8 2.3-1.5 4.5-1.5s3.2.6 4.5 1.5c1.5 1 3.4 2.1 6.9 2.1 3.5 0 5.4-1.2 6.9-2.1.8-.5 1.4-.9 2.3-1.2v9.5H11.3v-9.5zm2.8-11.6h35.8c1.5 0 2.8 1.2 2.8 2.8v4.2c-2.1.4-3.5 1.2-4.7 2-1.3.8-2.3 1.5-4.5 1.5s-3.2-.6-4.5-1.5c-1.5-1-3.4-2.1-6.9-2.1-3.5 0-5.4 1.2-6.9 2.1-1.3.8-2.3 1.5-4.5 1.5s-3.2-.6-4.5-1.5c-1.2-.7-2.5-1.6-4.7-2v-4.2c-.2-1.6 1.1-2.8 2.6-2.8zM6.8 34.2h50.9v5.9c-2.7.4-4.4 1.4-5.9 2.4-1.6 1-3 1.8-5.8 1.8-2.9 0-4.2-.8-5.8-1.8-1.9-1.2-4-2.5-8.2-2.5s-6.3 1.3-8.2 2.5c-1.6 1-3 1.8-5.8 1.8s-4.2-.8-5.8-1.8c-1.5-1-3.2-2-5.9-2.4v-5.9h.5zm50.1 20.3c-.5.5-1.2.8-2 .8H9c-1.5 0-2.8-1.3-2.8-2.8v-7.8c1.4.3 2.4.9 3.6 1.6 1.9 1.2 4 2.5 8.2 2.5s6.3-1.3 8.2-2.5c1.6-1 3-1.8 5.8-1.8 2.9 0 4.2.8 5.8 1.8 1.9 1.2 4 2.5 8.2 2.5 4.1 0 6.3-1.3 8.2-2.5 1.1-.7 2.1-1.3 3.6-1.6v7.8c0 .8-.3 1.5-.9 2z" })));
};

var SvgCalculatorAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M13.1 6.25c-.957 0-1.75.793-1.75 1.75v48c0 .957.793 1.75 1.75 1.75h37.8c.957 0 1.75-.793 1.75-1.75V8c0-.957-.793-1.75-1.75-1.75H13.1ZM6.85 8c0-3.443 2.807-6.25 6.25-6.25h37.8c3.443 0 6.25 2.807 6.25 6.25v48c0 3.443-2.807 6.25-6.25 6.25H13.1c-3.443 0-6.25-2.807-6.25-6.25V8Zm13.4 6.15v7h23.5v-7h-23.5Zm-4.5-.25A4.256 4.256 0 0 1 20 9.65h24a4.256 4.256 0 0 1 4.25 4.25v7.5c0 1.111-.38 2.212-1.209 3.041-.829.829-1.93 1.209-3.041 1.209H20a4.256 4.256 0 0 1-4.25-4.25v-7.5ZM20 29.75a2.25 2.25 0 0 0 0 4.5h1a2.25 2.25 0 0 0 0-4.5h-1ZM28.75 32A2.25 2.25 0 0 1 31 29.75h1a2.25 2.25 0 0 1 0 4.5h-1A2.25 2.25 0 0 1 28.75 32ZM42 29.75a2.25 2.25 0 0 0 0 4.5h1a2.25 2.25 0 0 0 0-4.5h-1ZM17.75 42A2.25 2.25 0 0 1 20 39.75h1a2.25 2.25 0 0 1 0 4.5h-1A2.25 2.25 0 0 1 17.75 42ZM31 39.75a2.25 2.25 0 0 0 0 4.5h1a2.25 2.25 0 0 0 0-4.5h-1ZM39.75 42A2.25 2.25 0 0 1 42 39.75h1a2.25 2.25 0 0 1 0 4.5h-1A2.25 2.25 0 0 1 39.75 42ZM20 49.75a2.25 2.25 0 0 0 0 4.5h1a2.25 2.25 0 0 0 0-4.5h-1ZM28.75 52A2.25 2.25 0 0 1 31 49.75h1a2.25 2.25 0 0 1 0 4.5h-1A2.25 2.25 0 0 1 28.75 52ZM42 49.75a2.25 2.25 0 0 0 0 4.5h1a2.25 2.25 0 0 0 0-4.5h-1Z", clipRule: "evenodd" })));
};

var SvgCalculator = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M25.3 31.3h-1v-1c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v1h-1c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h1v1c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-1h1c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3zM45 33.6l.9-.9c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0l-.9.9-.8-.9c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l.9.9-.9.9c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.7l.9-.9.9.9c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.9-.9.9-2.3 0-3.2l-1-.9zM24.5 48.8h-4.9c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h4.9c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM42.7 47l-4.9 4.9c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.7l4.9-4.9c.9-.9.9-2.3 0-3.2-.9-.8-2.3-.8-3.2 0z" }),
        React__namespace.createElement("path", { d: "M48.1 1.8H15.9c-3.4 0-6.1 2.7-6.1 6.1v48.3c0 3.4 2.7 6.1 6.1 6.1H48c3.4 0 6.1-2.7 6.1-6.1V7.9c.1-3.4-2.7-6.1-6-6.1zM15.9 6.3H48c.9 0 1.6.7 1.6 1.6v13.9H14.3V7.9c0-.9.7-1.6 1.6-1.6zm-1.6 20h15.4v14.2H14.3V26.3zm20 0h15.4v14.2H34.3V26.3zm-20 29.8V45h15.4v12.8H15.9c-.9 0-1.6-.8-1.6-1.7zm33.8 1.7H34.3V45h15.4v11.1c0 .9-.7 1.7-1.6 1.7z" }),
        React__namespace.createElement("path", { d: "M18.8 20.3h26.4c1.2 0 2.3-1 2.3-2.3v-6.8c0-1.2-1-2.3-2.3-2.3H18.8c-1.2 0-2.3 1-2.3 2.3V18c0 1.2 1 2.3 2.3 2.3zm2.2-6.9h22v2.3H21v-2.3z" })));
};

var SvgCalendar = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M20.5 36.6h-3.1c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h3.1c.6 0 1-.4 1-1v-3c0-.5-.5-1-1-1zM33.5 36.6h-3.1c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h3.1c.6 0 1-.4 1-1v-3c0-.5-.4-1-1-1zM46.6 36.6h-3.1c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h3.1c.6 0 1-.4 1-1v-3c0-.5-.4-1-1-1zM20.5 49.5h-3.1c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h3.1c.6 0 1-.4 1-1v-3c0-.5-.5-1-1-1zM33.5 49.5h-3.1c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h3.1c.6 0 1-.4 1-1v-3c0-.5-.4-1-1-1zM46.6 49.5h-3.1c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h3.1c.6 0 1-.4 1-1v-3c0-.5-.4-1-1-1z" }),
        React__namespace.createElement("path", { d: "M56 15.4H34.3v-1.9c2.3-.9 3.9-3.1 3.9-5.7 0-3.4-2.8-6.1-6.2-6.1s-6.2 2.7-6.2 6.1c0 2.6 1.6 4.8 3.9 5.7v1.9H8c-3.4 0-6.3 2.8-6.3 6.3V56c0 3.4 2.8 6.3 6.3 6.3h48c3.4 0 6.3-2.8 6.3-6.3V21.6c0-3.4-2.9-6.2-6.3-6.2zM32 6.2c.9 0 1.7.7 1.7 1.6 0 .9-.7 1.6-1.7 1.6s-1.7-.7-1.7-1.6c0-.9.8-1.6 1.7-1.6zM8 19.9h48c1 0 1.8.8 1.8 1.8v6.2H6.3v-6.2c0-1.1.7-1.8 1.7-1.8zm48 37.9H8c-1 0-1.8-.8-1.8-1.8V32.3h51.5V56c.1 1-.7 1.8-1.7 1.8z" })));
};

var SvgCamera = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60.4 19.7c-1.2-1.2-2.8-1.9-4.5-1.9h-7.3v-3.9c0-1.1-.4-3.7-4.2-3.7h-25c-3.6 0-4 2.6-4 3.7v3.9H8.1c-3.5 0-6.4 2.9-6.4 6.4v23.2c0 3.5 2.9 6.4 6.4 6.4h47.7c3.5 0 6.4-2.9 6.4-6.4V24.2c.1-1.7-.6-3.3-1.8-4.5zm-2.7 27.7c0 1-.8 1.9-1.9 1.9H8.1c-1 0-1.9-.8-1.9-1.9V24.2c0-1 .8-1.9 1.9-1.9h8.5c1.8 0 3.3-1.5 3.3-3.3v-4.3H44V19c0 1.8 1.5 3.3 3.3 3.3h8.6c.5 0 1 .2 1.3.6.4.4.5.8.5 1.3v23.2z" }),
        React__namespace.createElement("path", { d: "M31.6 23.5c-5.2 0-9.4 4.2-9.4 9.5 0 5.2 4.1 9.3 9.4 9.3 5.2 0 9.4-4.2 9.4-9.3 0-5.1-4.3-9.5-9.4-9.5zm0 14.3c-2.8 0-4.9-2.1-4.9-4.8 0-2.7 2.2-5 4.9-5s4.9 2.3 4.9 5-2.2 4.8-4.9 4.8zM13.8 25.3h-2.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h2.3c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3z" })));
};

var SvgCandyCane = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M40.2 54.7c-1.9 0-3.9-.7-5.4-2.2-1.5-1.4-2.3-3.3-2.3-5.3 0-1.9.7-3.7 2.1-5L46.1 31c.7-.7 1.1-1.7 1.1-2.7 0-1.2-.6-2.3-1.5-3.1-1.7-1.5-4.3-1.4-5.9.1L14.5 49.9C11.6 52.7 7 52.6 4 49.8c-1.5-1.4-2.3-3.3-2.3-5.3 0-1.9.7-3.7 2.1-5l25.7-25.1c7.2-7 19.3-6.8 26.8.6 3.7 3.6 5.8 8.3 5.9 13.2.1 5-1.7 9.6-5.3 13.1L45.2 52.7c-1.4 1.4-3.2 2-5 2zm.3-11.9-2.7 2.7c-.5.5-.7 1.1-.7 1.8 0 .8.3 1.5.9 2.1 1.2 1.2 3.1 1.2 4.1.2l4.2-4.1-5.8-2.7zm-27.2-6.3L7 42.7c-.5.5-.7 1.1-.7 1.8 0 .8.3 1.5.9 2.1 1.2 1.2 3.1 1.2 4.1.2l7.8-7.6-5.8-2.7zm30.6 2.9 5.8 2.6 4.1-4c2.6-2.6 4-6 3.9-9.7-.1-3.8-1.7-7.4-4.5-10.1-5.8-5.7-15-5.9-20.5-.6l-6.5 6.3 5.8 2.6 4.6-4.5c3.2-3.1 8.5-3.3 11.9-.3 1.9 1.6 3.1 4 3.1 6.5.1 2.3-.8 4.5-2.5 6.1l-5.2 5.1zm-27.1-6.3 5.8 2.6 6-5.9-5.8-2.6-6 5.9z" })));
};

var SvgCandy = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M59.8 7 57 4.1c-1.7-1.7-4.1-2.6-6.6-2.3-2.4.3-4.6 1.6-6 3.7l-3.3 5.1c-6.3-1.9-13.4-.3-18.4 4.6L15 22.8c-3.5 3.5-5.4 8.1-5.4 13 0 1.9.3 3.7.8 5.4l-5 3.2c-2.1 1.3-3.5 3.5-3.7 6-.3 2.5.6 4.9 2.3 6.6l2.9 2.9c1.5 1.5 3.6 2.4 5.7 2.4h.8c2.4-.3 4.6-1.6 5.9-3.6l3.4-5.1c1.7.5 3.5.8 5.2.8 4.7 0 9.5-1.8 13.1-5.4l2.8-2.8 4.8-4.7c3.5-3.5 5.4-8.1 5.4-13 0-1.9-.3-3.7-.8-5.5l4.9-3.1c2.1-1.3 3.5-3.5 3.8-6s-.3-5.2-2.1-6.9zm-44 49.1c-.6.9-1.6 1.5-2.7 1.6-1.1.1-2.2-.3-2.9-1l-2.9-2.9c-.8-.8-1.2-1.9-1-3 .1-1.1.7-2 1.7-2.6l4.4-2.8c.8 1.2 1.7 2.4 2.7 3.5 1.1 1.1 2.4 2 3.7 2.8l-3 4.4zm2.5-10.5c-2.6-2.6-4.1-6.1-4.1-9.8 0-3.7 1.5-7.2 4.1-9.8l1.5-1.5c1.2.7 2.3 1 3.2 1.1 1.1.2 1.7.3 2.7 1.3.9.9 1.1 1.6 1.3 2.7.3 1.3.6 3.1 2.5 5s3.7 2.3 5 2.5c1.1.2 1.7.3 2.7 1.3.9.9 1.1 1.6 1.3 2.7.2.9.4 2 1.1 3.2l-1.5 1.4c-5.5 5.4-14.3 5.4-19.8-.1zM45.7 38 43 40.8c0-.2-.1-.4-.1-.6-.3-1.3-.6-3.1-2.5-5s-3.7-2.3-5-2.5c-1.1-.2-1.7-.3-2.7-1.3-.9-.9-1.1-1.6-1.3-2.7-.3-1.3-.6-3.1-2.5-5s-3.7-2.3-5-2.5c-.2 0-.4-.1-.6-.1l2.8-2.7c2.7-2.7 6.3-4.1 9.9-4.1 3.6 0 7.2 1.4 9.9 4.1 2.6 2.6 4.1 6.1 4.1 9.8s-1.6 7.2-4.3 9.8zm12-24.9c-.1 1.1-.7 2.1-1.7 2.7l-4.4 2.8c-.8-1.2-1.6-2.4-2.7-3.4-1.1-1.1-2.3-2-3.6-2.8l2.9-4.5c.6-.9 1.6-1.5 2.7-1.6 1.1-.1 2.2.3 2.9 1l2.9 2.9c.7.7 1.1 1.8 1 2.9z" })));
};

var SvgCapsule = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M20.9 62.2c-4.9 0-9.8-1.9-13.5-5.6-3.7-3.6-5.6-8.4-5.6-13.5s2-9.9 5.6-13.5L29.6 7.4c3.6-3.6 8.4-5.6 13.5-5.6s9.9 2 13.5 5.6c7.5 7.5 7.5 19.6 0 27.1L34.4 56.6c-3.7 3.8-8.6 5.6-13.5 5.6zm-.9-39-9.5 9.5c-2.8 2.8-4.3 6.4-4.3 10.4 0 3.9 1.5 7.6 4.3 10.4 2.8 2.8 6.4 4.3 10.4 4.3 3.9 0 7.6-1.5 10.4-4.3l9.5-9.5L20 23.2zm3.2-3.2L44 40.8l9.5-9.5c2.8-2.8 4.3-6.4 4.3-10.4 0-3.9-1.5-7.6-4.3-10.4S47 6.2 43.1 6.2c-3.9 0-7.6 1.5-10.4 4.3L23.2 20z" })));
};

var SvgCarAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M15.2 38.4h6.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-6.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3zM41.6 38.4H48c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-6.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3z" }),
        React__namespace.createElement("path", { d: "M60 21.4h-2.9l-4.7-12c-.7-1.8-2.5-3.1-4.5-3.1H15.7c-2 0-3.7 1.2-4.5 3l-4.7 12H4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h.8v16.6c0 2.6 2 4.8 4.5 5.2v3.9c0 3.4 2.8 6.3 6.3 6.3h2c3.4 0 6.3-2.8 6.3-6.3v-3.8h15.5v3.8c0 3.4 2.8 6.3 6.3 6.3h2c3.4 0 6.3-2.8 6.3-6.3v-3.8c2.8-.1 5-2.4 5-5.2V25.8h1c1.2 0 2.3-1 2.3-2.3s-1.1-2.1-2.3-2.1zM15.4 11c0-.1.1-.2.3-.2h32.2c.1 0 .2.1.3.1v.1l5.1 12.8h-43L15.4 11zm3.9 40.4c0 1-.8 1.8-1.8 1.8h-2c-1 0-1.8-.8-1.8-1.8v-3.8h5.5v3.8zm30.1 0c0 1-.8 1.8-1.8 1.8h-2c-1 0-1.8-.8-1.8-1.8v-3.8h5.5v3.8zm5-9c0 .4-.3.8-.8.8H10c-.4 0-.8-.3-.8-.8v-14h45.1v14z" })));
};

var SvgCar = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M17.4 30.1c-3.9 0-7.1 3.1-7.1 7s3.2 7 7.1 7 7.1-3.1 7.1-7-3.2-7-7.1-7zm0 9.5c-1.4 0-2.6-1.1-2.6-2.5s1.2-2.5 2.6-2.5 2.6 1.1 2.6 2.5c0 1.3-1.1 2.5-2.6 2.5zM46.6 29.9c-3.9 0-7.1 3.2-7.1 7.1s3.2 7.1 7.1 7.1 7.1-3.2 7.1-7.1-3.2-7.1-7.1-7.1zm0 9.6c-1.4 0-2.6-1.1-2.6-2.6s1.2-2.6 2.6-2.6 2.6 1.1 2.6 2.6-1.2 2.6-2.6 2.6zM34.4 34.7h-4.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h4.8c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" }),
        React__namespace.createElement("path", { d: "m57.8 23.3-.9-9.9c-.5-5.6-5.6-10-11.6-10H18.7c-6 0-11.1 4.4-11.6 9.9l-.9 9.9c-2.6.8-4.4 3.2-4.4 6v15.5C1.8 48.2 4.6 51 8 51h.2v3.3c0 3.4 2.8 6.3 6.3 6.3H16c3.4 0 6.3-2.8 6.3-6.3V51h19.4v3.3c0 3.4 2.8 6.3 6.3 6.3h1.6c3.4 0 6.3-2.8 6.3-6.3V51h.1c3.4 0 6.3-2.8 6.3-6.3V29.2c0-2.8-1.9-5.1-4.5-5.9zm-46.2-9.5C11.9 10.5 15 8 18.7 8h26.7c3.7 0 6.9 2.6 7.1 5.8l.8 9.2H10.7l.9-9.2zm6.2 40.5c0 1-.8 1.8-1.8 1.8h-1.6c-1 0-1.8-.8-1.8-1.8V51h5.1v3.3zm33.5 0c0 1-.8 1.8-1.8 1.8H48c-1 0-1.8-.8-1.8-1.8V51h5.1v3.3zm6.5-9.5c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8V29.2c0-1 .8-1.8 1.8-1.8h48c1 0 1.8.8 1.8 1.8v15.6z" })));
};

var SvgCaravan = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M18.3 19.6h-5.6c-1.8 0-3.3 1.5-3.3 3.3v5.6c0 1.8 1.5 3.3 3.3 3.3h5.6c1.8 0 3.3-1.5 3.3-3.3v-5.6c-.1-1.9-1.5-3.3-3.3-3.3zM17 27.2h-3.1v-3.1H17v3.1z" }),
        React__namespace.createElement("path", { d: "M60 39.9h-5.4V26.8c0-.5-.1-1-.4-1.5l-7.1-11.4c-.8-1.2-2.1-2-3.6-2H7.9c-3.4 0-6.1 2.7-6.1 6.1v20.3c0 3 2.2 5.5 5.1 6v.4c0 4 3.3 7.3 7.3 7.3s7.3-3.3 7.3-7.3v-.3H60c1.2 0 2.3-1 2.3-2.3s-1.1-2.2-2.3-2.2zm-45.8 7.7c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8 1.6 0 2.8 1.3 2.8 2.8 0 1.5-1.3 2.8-2.8 2.8zm0-10.2c-2.2 0-4.2 1-5.5 2.6h-.8c-.9 0-1.6-.7-1.6-1.6V18c0-.9.7-1.6 1.6-1.6h35.5l6.7 10.9v12.6h-8.2V25.4c0-1.8-1.5-3.3-3.3-3.3H33c-1.8 0-3.3 1.5-3.3 3.3V40h-10c-1.3-1.6-3.3-2.6-5.5-2.6zm20.1 2.5V26.6h3.1v13.3h-3.1z" })));
};

var SvgCartFull = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M37.1 47.8c-4 0-7.2 3.2-7.2 7.2s3.2 7.2 7.2 7.2 7.2-3.2 7.2-7.2c0-3.9-3.3-7.2-7.2-7.2zm0 10c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7 0 1.4-1.3 2.7-2.7 2.7zM18.1 47.8c-4 0-7.2 3.2-7.2 7.2s3.2 7.2 7.2 7.2 7.2-3.2 7.2-7.2c0-3.9-3.3-7.2-7.2-7.2zm0 10c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7 0 1.4-1.2 2.7-2.7 2.7zM58.2 1.8h-5.4c-2.4 0-4.5 1.8-4.8 4.2l-1.6 11.5h-4.2v-7.3C42.1 8.4 40.7 7 39 7h-7.4c-.3-1.5-1.6-2.6-3.1-2.6h-8.7c-1.7 0-3.2 1.5-3.2 3.4v1.9H9.3c-1.7 0-3.2 1.4-3.2 3v4.9c-.8.2-1.4.6-1.9 1.2-.6.8-.9 1.9-.6 2.9v.2l6.2 18.7C10.2 42 11.5 43 13 43h27.6c3.7 0 6.9-2.8 7.4-6.5l4.2-29.9c0-.2.2-.3.4-.3H58c1.2 0 2.3-1 2.3-2.3s-.9-2.2-2.1-2.2zM37.6 17.5h-6v-6h6v6zM21.2 8.9h6v8.6h-6V8.9zm-10.5 5.2h6v3.4h-6v-3.4zm33 21.7c-.2 1.5-1.5 2.6-3 2.6H13.9L8.5 22h37.2l-2 13.8z" })));
};

var SvgCart = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M37.1 47.8c-4 0-7.2 3.2-7.2 7.2s3.2 7.2 7.2 7.2 7.2-3.2 7.2-7.2c0-3.9-3.3-7.2-7.2-7.2zm0 10c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7 0 1.4-1.3 2.7-2.7 2.7zM18.1 47.8c-4 0-7.2 3.2-7.2 7.2s3.2 7.2 7.2 7.2 7.2-3.2 7.2-7.2c0-3.9-3.3-7.2-7.2-7.2zm0 10c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7 0 1.4-1.2 2.7-2.7 2.7zM58.2 1.8h-5.4c-2.4 0-4.5 1.8-4.8 4.2l-1.6 11.5H6.9c-1 0-2 .5-2.7 1.3-.6.8-.9 1.9-.6 2.9v.2l6.2 18.7C10.2 42 11.5 43 13 43h27.6c3.7 0 6.9-2.8 7.4-6.5l4.2-29.9c0-.2.2-.3.4-.3H58c1.2 0 2.3-1 2.3-2.3s-.9-2.2-2.1-2.2zm-14.5 34c-.2 1.5-1.5 2.6-3 2.6H13.9L8.5 22h37.2l-2 13.8z" })));
};

var SvgCashApp = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M55.517 1.1c-3.5-1.1-6.7-1.1-13.1-1.1h-19.4c-6.4 0-9.6 0-13.1 1.1a13.6 13.6 0 0 0-8.1 8.1c-1.1 3.46-1.1 6.68-1.1 13.1v19.39c0 6.41 0 9.61 1.1 13.11a13.6 13.6 0 0 0 8.1 8.1c3.46 1.1 6.68 1.1 13.1 1.1h19.4c6.4 0 9.6 0 13.1-1.12a13.599 13.599 0 0 0 8.1-8.1c1.1-3.46 1.1-6.68 1.1-13.1V22.31c0-6.41 0-9.61-1.1-13.11a13.6 13.6 0 0 0-8.1-8.1Zm-10.53 22.7c-.47.5-1.3.5-1.8 0l.02.02c-2.11-1.9-5.34-3.29-8.7-3.29-2.64 0-5.27.96-5.27 3.38 0 2.303 2.412 3.186 5.354 4.263l.727.267c5.7 1.97 10.4 4.39 10.4 10.13 0 6.23-4.72 10.5-12.469 11.02l-.7 3.39a1.319 1.319 0 0 1-1.3 1.06L26.4 54c-.83-.01-1.44-.78-1.27-1.61l.74-3.57c-3.032-.83-5.692-2.33-7.791-4.4a1.36 1.36 0 0 1 0-1.92l2.7-2.7a1.303 1.303 0 0 1 1.84 0c2.6 2.61 5.96 3.68 9.16 3.68 3.52 0 5.9-1.46 5.9-3.95 0-2.188-1.954-2.92-5.66-4.312-.394-.148-.808-.303-1.24-.468-4.77-1.71-9.28-4.2-9.28-10 0-6.7 5.46-9.97 11.9-10.3l.7-3.38a1.32 1.32 0 0 1 1.28-1.06h4.84c.83 0 1.45.78 1.28 1.61l-.79 3.8a19.73 19.73 0 0 1 6.72 3.84c.56.54.59 1.44.06 1.94l-2.5 2.6Z", clipRule: "evenodd" })));
};

var SvgCertificate = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56 34.8h-3.9V9.6c0-4.2-3.3-7.6-7.3-7.8H13.2C6.9 1.7 1.8 7 1.8 13.5v4.3c0 2 1.7 3.7 3.7 3.7H12v26.7c0 3.5 2.9 6.4 6.5 6.4h3.7v5.1c0 1 .5 1.8 1.4 2.3.4.2.8.3 1.2.3.5 0 1-.1 1.4-.4l4.6-3 4.5 2.9.2.1c.9.4 1.8.4 2.6-.1s1.2-1.3 1.2-2.2v-5H56c3.4 0 6.3-2.8 6.3-6.3V41c0-3.4-2.9-6.2-6.3-6.2zM6.3 13.5c0-4 3.1-7.3 6.9-7.3h22.7c-.6 1.2-1 2.6-1 4.1V17H6.3v-3.5zm24.4 31c-3.7 0-6.6-2.9-6.6-6.5s3-6.5 6.6-6.5 6.6 2.9 6.6 6.5-2.9 6.5-6.6 6.5zm1.7 10.1c-1-.7-2.3-.7-3.4 0l-2.4 1.6v-8c1.3.5 2.7.8 4.1.8 1.5 0 2.9-.3 4.1-.8v8l-2.4-1.6zm6.9-4.5v-5.2c1.6-1.9 2.5-4.3 2.5-6.9 0-6.1-5-11-11.1-11s-11.1 4.9-11.1 11c0 2.6.9 5.1 2.5 7v5.1h-3.7c-1.1 0-2-.8-2-1.9V21.5h19.2c2 0 3.7-1.7 3.7-3.7v-7.4c0-2.2 1.5-3.9 3.5-4.1h1.5c1.8 0 3.2 1.5 3.2 3.3v40.5h-8.2zm18.5-1.8c0 1-.8 1.8-1.8 1.8h-3.9V39.3H56c1 0 1.8.8 1.8 1.8v7.2z" })));
};

var SvgCheckBox = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M61.6 8.8c-.9-.9-2.3-.9-3.2 0l-3.6 3.6v-.7c0-3.4-2.8-6.3-6.3-6.3H8c-3.4 0-6.3 2.8-6.3 6.3v40.6c0 3.4 2.8 6.3 6.3 6.3h40.6c3.4 0 6.3-2.8 6.3-6.3V18.8l6.8-6.8c.8-.9.8-2.3-.1-3.2zM50.3 52.3c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8V11.7C6.3 10.8 7 10 8 10h40.6c1 0 1.8.8 1.8 1.8V17L40.1 27.2 33.9 21c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l7.8 7.8s.1.1.2.1l.2.2c.1 0 .1.1.2.1s.1.1.2.1.2.1.3.1h1c.1 0 .2-.1.4-.1h.1c.1 0 .2-.1.3-.2 0 0 .1 0 .1-.1.1-.1.2-.1.3-.2l8.6-8.6v28.9z" })));
};

var SvgCheckmarkCircle = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 1.8C15.3 1.8 1.8 15.3 1.8 32S15.3 62.3 32 62.3 62.3 48.7 62.3 32 48.7 1.8 32 1.8zm0 56C17.8 57.8 6.3 46.2 6.3 32 6.3 17.8 17.8 6.3 32 6.3s25.8 11.6 25.8 25.8c0 14.1-11.6 25.7-25.8 25.7z" }),
        React__namespace.createElement("path", { d: "M40.6 22.7 28.7 34.3 23.3 29c-.9-.9-2.3-.8-3.2 0-.9.9-.8 2.3 0 3.2l6.4 6.2c.6.6 1.4.9 2.2.9.8 0 1.6-.3 2.2-.9L43.8 26c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2-.1z" })));
};

var SvgCheckmark = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60.6 13.4c-.9-.9-2.3-.9-3.2 0l-34 33L6.6 29.9c-.9-.9-2.3-.8-3.2 0-.9.9-.8 2.3 0 3.2l17.7 17.2c.6.6 1.4.9 2.3.9s1.6-.3 2.3-.9l34.9-33.9c.9-.7.9-2.1 0-3z" })));
};

var SvgChefHat = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M47.3 12.7C45.1 6.1 39 1.8 32 1.8S18.9 6.2 16.7 12.7C8.9 14.4 3.4 21.3 3.4 29.2v.1c0 6.1 4.6 11.2 10.5 12.2 0 3.4.1 10.2.2 14.5 0 3.4 2.8 6.2 6.2 6.2h23.3c3.4 0 6.2-2.7 6.2-6.1l.3-14.6c5.9-1 10.4-6.2 10.4-12.4.1-7.8-5.4-14.7-13.2-16.4zm-3.6 45.1H20.4c-.9 0-1.7-.8-1.7-1.7 0-1.2 0-2.7-.1-4.1h26.9l-.1 4c0 1-.8 1.8-1.7 1.8zm4.8-20.6c-1.5.1-2.7 1.3-2.7 2.8l-.2 7.4H18.5c0-3.2-.1-6.2-.1-7.4 0-1.5-1.2-2.7-2.7-2.8-4.3-.2-7.8-3.7-7.8-7.9v-.1c0-5.9 4.2-11.1 10.1-12.2 1.3-.3 2.4-1.2 2.8-2.5 1.5-4.9 6-8.2 11.2-8.2 5.2 0 9.7 3.3 11.2 8.2.4 1.3 1.5 2.3 2.8 2.5 5.8 1.1 10.1 6.3 10.1 12.2 0 4.3-3.3 7.8-7.6 8z" })));
};

var SvgChevronDownCircle = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 1.8C15.3 1.8 1.8 15.3 1.8 32S15.3 62.3 32 62.3 62.3 48.7 62.3 32 48.7 1.8 32 1.8zm0 56C17.8 57.8 6.3 46.2 6.3 32 6.3 17.8 17.8 6.3 32 6.3s25.8 11.6 25.8 25.8c0 14.1-11.6 25.7-25.8 25.7z" }),
        React__namespace.createElement("path", { d: "M43.9 23.8 32 35.5 20.1 23.8c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l13.5 13.3c.4.4 1 .6 1.6.6.6 0 1.1-.2 1.6-.6L47.1 27c.9-.9.9-2.3 0-3.2-.8-.9-2.3-.9-3.2 0z" })));
};

var SvgChevronDown = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 45.6c-.6 0-1.1-.2-1.6-.6l-23-22.6c-.9-.9-.9-2.3 0-3.2.9-.9 2.3-.9 3.2 0L32 40.1 53.4 19c.9-.9 2.3-.9 3.2 0 .9.9.9 2.3 0 3.2l-23 22.6c-.5.5-1 .8-1.6.8z" })));
};

var SvgChevronLeftCircle = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 1.8C15.3 1.8 1.8 15.3 1.8 32S15.3 62.3 32 62.3 62.3 48.7 62.3 32 48.7 1.8 32 1.8zm0 56C17.8 57.8 6.3 46.2 6.3 32 6.3 17.8 17.8 6.3 32 6.3s25.8 11.6 25.8 25.8c0 14.1-11.6 25.7-25.8 25.7z" }),
        React__namespace.createElement("path", { d: "M40.2 16.9c-.9-.9-2.3-.9-3.2 0L23.8 30.4c-.9.9-.9 2.3 0 3.2L37 47.1c.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.6.9-.9.9-2.3 0-3.2L28.5 32l11.7-11.9c.9-.9.9-2.4 0-3.2z" })));
};

var SvgChevronLeft = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M43.3 57.3c-.6 0-1.2-.2-1.6-.7l-22.6-23c-.9-.9-.9-2.3 0-3.2l22.6-23c.9-.9 2.3-.9 3.2 0 .9.9.9 2.3 0 3.2L23.9 32 45 53.4c.9.9.9 2.3 0 3.2-.6.4-1.1.7-1.7.7z" })));
};

var SvgChevronRightCircle = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 1.8C15.3 1.8 1.8 15.3 1.8 32S15.3 62.3 32 62.3 62.3 48.7 62.3 32 48.7 1.8 32 1.8zm0 56C17.8 57.8 6.3 46.2 6.3 32 6.3 17.8 17.8 6.3 32 6.3s25.8 11.6 25.8 25.8c0 14.1-11.6 25.7-25.8 25.7z" }),
        React__namespace.createElement("path", { d: "M27 16.9c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2L35.5 32 23.8 43.9c-.9.9-.9 2.3 0 3.2.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7l13.3-13.5c.9-.9.9-2.3 0-3.2L27 16.9z" })));
};

var SvgChevronRight = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M20.7 57.3c-.6 0-1.1-.2-1.6-.6-.9-.9-.9-2.3 0-3.2l21-21.5-21-21.4c-.9-.9-.9-2.3 0-3.2.9-.9 2.3-.9 3.2 0l22.6 23c.9.9.9 2.3 0 3.2l-22.6 23c-.4.4-1 .7-1.6.7z" })));
};

var SvgChevronUpCircle = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 1.8C15.3 1.8 1.8 15.3 1.8 32S15.3 62.3 32 62.3 62.3 48.7 62.3 32 48.7 1.8 32 1.8zm0 56C17.8 57.8 6.3 46.2 6.3 32 6.3 17.8 17.8 6.3 32 6.3s25.8 11.6 25.8 25.8c0 14.1-11.6 25.7-25.8 25.7z" }),
        React__namespace.createElement("path", { d: "M33.6 23.8c-.9-.9-2.3-.9-3.2 0L16.9 37c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.6L32 28.5l11.9 11.7c.9.9 2.3.9 3.2 0 .9-.9.9-2.3 0-3.2L33.6 23.8z" })));
};

var SvgChevronUp = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M55 45.6c-.6 0-1.1-.2-1.6-.6L32 23.9l-21.4 21c-.9.9-2.3.9-3.2 0-.9-.9-.9-2.3 0-3.2l23-22.6c.9-.9 2.3-.9 3.2 0l23 22.6c.9.9.9 2.3 0 3.2-.4.4-1 .7-1.6.7z" })));
};

var SvgChrome = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M61.4 39c3.2-13.5-3.2-27.9-16.2-34.2-3.1-1.5-6.4-2.4-9.7-2.8h-.3C22.9.6 10.5 7 4.8 18.8-.3 29.2 1.2 41.1 7.6 49.9c.1.1.1.2.2.3 2.8 3.7 6.5 6.9 11 9.1 4.2 2.1 8.7 3 13.2 3 11.2 0 22-6.3 27.3-17 1-2 1.7-4 2.2-6.1-.1-.1-.1-.2-.1-.2zm-3.8-4.1L38.8 22.6l-.9-.6h-.1c-.1-.1-.2-.1-.2-.1-.2-.1-.3-.2-.5-.3-2.3-1.1-4.9-1.4-7.4-.9l6.8-14c2.3.4 4.6 1.1 6.8 2.2 10 4.8 15.5 15.4 14.3 26zm-19.2.2c-1.7 3.5-6 5-9.5 3.3-3.5-1.7-5-6-3.3-9.5 1.2-2.5 3.8-4 6.4-4 1 0 2.1.2 3.1.7.1.1.2.1.4.2l.9.6c2.5 2 3.5 5.6 2 8.7zM8.8 20.8c3-6.2 8.2-10.8 14.7-13.1 2.6-.9 5.3-1.4 8.1-1.4L21.6 27c-2.5 5.2-.8 11.3 3.7 14.5L10.4 46c-4.7-7.3-5.6-16.8-1.6-25.2zm12 34.4c-2.8-1.4-5.3-3.2-7.3-5.3L35.7 43c.2 0 .3-.1.4-.2 2.6-1 4.9-3 6.3-5.7.9-1.9 1.3-4 1.1-6l13.1 8.5c-.4 1.2-.9 2.4-1.4 3.6C49 56 33.5 61.4 20.8 55.2z" })));
};

var SvgChromecast = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M1.1 48.8v8.5h8.5c0-4.7-3.8-8.5-8.5-8.5zm0-11.2v5.6c7.7 0 14.1 6.3 14.1 14.1h5.6C20.7 46.5 12 37.6 1.1 37.6zm11.3-19.7v4.6C23.5 26.1 32.3 35 35.9 46.1h15.8V17.9H12.4zM1.1 26.4V32c14.1 0 25.4 11.4 25.4 25.4H32c.1-17.2-13.8-31-30.9-31zM57.5 6.6H6.6C3.5 6.6 1 9.2 1 12.3v8.5h5.6v-8.5h50.7v39.3H37.6v5.6h19.7c3.1 0 5.6-2.5 5.6-5.6V12.3c.1-3.3-2.4-5.7-5.4-5.7z" })));
};

var SvgCircleMinus = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M42.2 29.7H21.8c-1.2 0-2.2 1-2.2 2.3 0 1.2 1 2.2 2.3 2.2h20.4c1.2 0 2.2-1 2.2-2.3-.1-1.2-1.1-2.2-2.3-2.2z" }),
        React__namespace.createElement("path", { d: "M32 1.8C15.3 1.8 1.8 15.3 1.8 32s13.6 30.3 30.3 30.3c16.7 0 30.3-13.6 30.3-30.3C62.3 15.3 48.7 1.8 32 1.8zm0 56C17.8 57.8 6.3 46.2 6.3 32 6.3 17.8 17.8 6.3 32 6.3s25.8 11.6 25.8 25.8c0 14.1-11.6 25.7-25.8 25.7z" })));
};

var SvgCirclePlus = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M42.2 29.7h-8v-7.9c0-1.2-1-2.2-2.3-2.2-1.2 0-2.2 1-2.2 2.3v7.9h-7.9c-1.2 0-2.2 1-2.2 2.3 0 1.2 1 2.2 2.3 2.2h7.9v7.9c0 1.2 1 2.2 2.3 2.2 1.2 0 2.2-1 2.2-2.3v-7.9h7.9c1.2 0 2.2-1 2.2-2.3 0-1.2-1-2.2-2.2-2.2z" }),
        React__namespace.createElement("path", { d: "M32 1.8C15.3 1.8 1.8 15.3 1.8 32s13.6 30.3 30.3 30.3c16.7 0 30.3-13.6 30.3-30.3C62.3 15.3 48.7 1.8 32 1.8zm0 56C17.8 57.8 6.3 46.2 6.3 32S17.8 6.3 32 6.3 57.8 17.8 57.8 32 46.2 57.8 32 57.8z" })));
};

var SvgCisco = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M43.55 48.328v-2.962l-.06.026a5.484 5.484 0 0 1-2.135.542 3.163 3.163 0 0 1-2.15-.632 2.768 2.768 0 0 1-.938-1.328 3.227 3.227 0 0 1-.062-1.779 2.73 2.73 0 0 1 .952-1.517 2.842 2.842 0 0 1 1.499-.645c.975-.11 1.96.074 2.83.527l.063.035v-2.978l-.136-.038a7.632 7.632 0 0 0-2.696-.352 6.24 6.24 0 0 0-2.408.55 5.513 5.513 0 0 0-1.97 1.522 5.923 5.923 0 0 0-.107 7.214 5.632 5.632 0 0 0 3.133 2.016c1.31.32 2.683.271 3.966-.14l.218-.06m-29.32 0v-2.963l-.058.026a5.484 5.484 0 0 1-2.136.542 3.155 3.155 0 0 1-2.15-.632 2.747 2.747 0 0 1-.936-1.328 3.206 3.206 0 0 1-.064-1.779c.139-.6.472-1.136.952-1.517a2.842 2.842 0 0 1 1.499-.645c.975-.11 1.96.074 2.83.527l.063.035v-2.978l-.136-.038a7.632 7.632 0 0 0-2.696-.352 6.25 6.25 0 0 0-2.408.55 5.547 5.547 0 0 0-1.973 1.522 5.93 5.93 0 0 0-.11 7.214 5.626 5.626 0 0 0 3.137 2.016c1.309.32 2.68.271 3.965-.14l.221-.06m10.464-2.46-.01 2.553.186.032c.587.11 1.176.184 1.771.227.52.05 1.043.058 1.565.032.499-.038.992-.131 1.47-.278a4.05 4.05 0 0 0 1.522-.813c.4-.343.706-.781.888-1.275a3.493 3.493 0 0 0-.018-2.56 2.848 2.848 0 0 0-.795-1.104 3.363 3.363 0 0 0-1.168-.68l-1.925-.715a1.034 1.034 0 0 1-.526-.5.654.654 0 0 1 .022-.585c.099-.162.24-.293.41-.379.216-.103.448-.17.686-.197a3.942 3.942 0 0 1 1.226.014c.48.053.955.136 1.422.256l.101.02v-2.354l-.184-.04c-.477-.114-.96-.2-1.448-.259a7.587 7.587 0 0 0-1.904-.008c-.8.072-1.56.382-2.19.88-.426.336-.749.782-.935 1.291a3.541 3.541 0 0 0 0 2.398c.144.386.373.73.672 1.015.258.248.552.462.872.63.418.224.864.397 1.325.52.152.045.304.093.453.144l.227.083.064.026c.224.08.432.208.603.373.12.112.213.251.269.403.037.14.038.288.003.43a.904.904 0 0 1-.443.528c-.23.117-.478.194-.733.229a5.424 5.424 0 0 1-1.139.056 13.877 13.877 0 0 1-1.485-.197 24.465 24.465 0 0 1-.766-.18l-.088-.015Zm-6.6 2.654h2.8V37.411h-2.8v11.112Zm32.432-7.83a2.92 2.92 0 0 1 3.691 4.532l-.045.037a2.923 2.923 0 0 1-3.646-4.568M46.46 42.97a5.847 5.847 0 0 0 7.109 5.619 5.704 5.704 0 0 0 1.87-10.499 5.884 5.884 0 0 0-8.98 4.88Zm14.77-14.49a1.387 1.387 0 0 0 2.771 0V25.4a1.387 1.387 0 0 0-2.77 0v3.08Zm-7.584 0a1.392 1.392 0 0 0 2.776 0v-6.905a1.39 1.39 0 0 0-2.773 0v6.904m-7.699 2.782a1.39 1.39 0 0 0 2.771 0V16.326a1.387 1.387 0 0 0-2.77 0v14.936Zm-7.568-2.782a1.39 1.39 0 0 0 2.774 0v-6.904a1.387 1.387 0 0 0-2.771 0v6.904m-7.733 0a1.392 1.392 0 0 0 2.77 0V25.4a1.386 1.386 0 0 0-2.77 0v3.08Zm-7.654 0a1.387 1.387 0 0 0 2.771 0v-6.904a1.387 1.387 0 0 0-2.77 0v6.904ZM15.3 31.262a1.386 1.386 0 0 0 2.77 0V16.326a1.386 1.386 0 0 0-2.77 0v14.936Zm-7.63-2.782a1.392 1.392 0 0 0 2.774 0v-6.904a1.387 1.387 0 0 0-2.771 0v6.904M0 28.48a1.39 1.39 0 0 0 2.77 0V25.4a1.387 1.387 0 0 0-2.77 0v3.08Z" })));
};

var SvgClipboard = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M45.5 9.4H44v-1c0-2.3-1.8-4.1-4-4.1h-5.7V4c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v.3H24c-2.2 0-4 1.8-4 4.1v1h-1.5c-3.2 0-5.8 2.7-5.8 5.9v41c0 3.3 2.6 5.9 5.8 5.9h27.1c3.2 0 5.8-2.7 5.8-5.9v-41c-.1-3.3-2.7-5.9-5.9-5.9zm-21-.6h15v5.6h-15V8.8zm22.3 47.5c0 .8-.6 1.4-1.3 1.4h-27c-.7 0-1.3-.6-1.3-1.4v-41c0-.8.6-1.4 1.3-1.4H20v1c0 2.3 1.8 4.1 4 4.1h16c2.2 0 4-1.8 4-4.1v-1h1.6c.7 0 1.3.6 1.3 1.4v41z" })));
};

var SvgClose = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M35.2 32 59.6 7.6c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0L32 28.8 7.6 4.4c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2L28.8 32 4.4 56.4c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7L32 35.2l24.4 24.4c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.9-.9.9-2.3 0-3.2L35.2 32z" })));
};

var SvgCloudCheck = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m39.1 26.9-8.8 8.3-2.5-2.5c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l3.6 3.6c.5.5 1.2.8 2 .8.6 0 1.3-.2 1.8-.6.1 0 .1-.1.2-.1l10-9.4c.9-.9.9-2.3.1-3.2-.9-1-2.3-1-3.2-.1z" }),
        React__namespace.createElement("path", { d: "M57.3 23.6c-2.7-2.9-6.4-4.8-10.3-5.5-2.2-3.4-5.4-5.9-9.1-7.2-1.7-.7-3.7-1-5.8-1-9.4 0-17.2 7.2-17.8 16.4-7.1.8-12.5 6.7-12.5 13.8 0 7.7 6.3 13.9 14.1 14h27.8c10.2 0 18.6-8.1 18.6-18.1 0-4.6-1.8-9-5-12.4zm-13.6 26H16c-5.5 0-9.7-4.2-9.7-9.5s4.3-9.5 9.7-9.5h.5c1.2 0 2.3-1 2.3-2.3v-1c0-7.2 6-13 13.3-13 1.6 0 3 .2 4.3.7 3.1 1 5.7 3.2 7.3 6.1.4.6 1 1.1 1.7 1.1 3.3.3 6.5 1.9 8.7 4.3 2.4 2.6 3.7 5.9 3.7 9.3 0 7.7-6.4 13.8-14.1 13.8z" })));
};

var SvgCloudDownload = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m35.7 34.7-1.5 1.5v-6.8c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v6.8l-1.4-1.5c-.9-.9-2.3-.9-3.2-.1-.9.9-.9 2.3-.1 3.2l4.8 4.9c.6.6 1.4.9 2.2.9.8 0 1.6-.3 2.2-.9l4.8-4.9c.9-.9.8-2.3-.1-3.2-.8-.8-2.2-.8-3.1.1z" }),
        React__namespace.createElement("path", { d: "M57.3 23.6c-2.7-2.9-6.4-4.8-10.3-5.5-2.2-3.4-5.4-5.9-9.1-7.2-1.7-.7-3.7-1-5.8-1-9.4 0-17.2 7.2-17.8 16.3-7.1.9-12.5 6.8-12.5 13.9 0 7.7 6.3 13.9 14.1 14h27.8c10.2 0 18.6-8.1 18.6-18.1 0-4.6-1.8-9-5-12.4zm-13.6 26H16c-5.5 0-9.7-4.2-9.7-9.5s4.3-9.5 9.7-9.5h.5c1.2 0 2.3-1 2.3-2.3v-1c0-7.2 6-13 13.3-13 1.6 0 3 .2 4.3.7 3.1 1 5.7 3.2 7.3 6.1.4.6 1 1.1 1.7 1.1 3.3.3 6.5 1.9 8.7 4.3 2.4 2.6 3.7 5.9 3.7 9.3 0 7.7-6.4 13.8-14.1 13.8z" })));
};

var SvgCloudNetwork = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M54.9 41.6c-3.2 0-6 2.1-6.9 5h-1v-6.4c5.4-2 9.2-7.2 9.2-13.2 0-3.5-1.3-7-3.8-9.6-2-2.2-4.8-3.7-7.7-4.3-1.7-2.5-4.1-4.4-6.9-5.4-1.3-.5-2.9-.8-4.5-.8-7.1 0-13 5.4-13.7 12.3-5.2.9-9.3 5.4-9.3 10.9 0 4.5 2.7 8.4 6.7 10.1v6.4h-1c-1-2.9-3.7-5-6.9-5-4 0-7.3 3.2-7.3 7.2S5.1 56 9.1 56c3.2 0 6-2.1 6.9-5h2.7c1.6 0 2.8-1.3 2.8-2.8V41h8.2v2.1c-2.9.9-5.1 3.7-5.1 6.9 0 4 3.3 7.2 7.3 7.2s7.3-3.2 7.3-7.2c0-3.2-2.1-5.9-5.1-6.9V41h8.3v7.2c0 1.6 1.3 2.8 2.9 2.8H48c1 2.9 3.7 5 6.9 5 4 0 7.3-3.2 7.3-7.2.1-4-3.2-7.2-7.3-7.2zM9.1 51.5c-1.5 0-2.8-1.2-2.8-2.7 0-1.5 1.3-2.7 2.8-2.7s2.8 1.2 2.8 2.7c0 1.4-1.3 2.7-2.8 2.7zM32 52.6c-1.5 0-2.8-1.2-2.8-2.7 0-1.5 1.3-2.7 2.8-2.7 1.5 0 2.8 1.2 2.8 2.7 0 1.5-1.3 2.7-2.8 2.7zM21.4 36.5c-3.7 0-6.6-2.9-6.6-6.5s2.9-6.5 6.6-6.5h.4c1.2 0 2.3-1 2.3-2.3v-.8c0-5 4.1-9.1 9.2-9.1 1.1 0 2.1.2 3 .5 2.1.7 3.9 2.3 5.1 4.3.4.6 1 1.1 1.7 1.2 2.3.2 4.5 1.3 6 3 1.7 1.8 2.6 4.1 2.6 6.6 0 5.3-4.4 9.6-9.8 9.6H21.4zm33.5 15c-1.5 0-2.8-1.2-2.8-2.7 0-1.5 1.3-2.7 2.8-2.7s2.8 1.2 2.8 2.7c.1 1.4-1.2 2.7-2.8 2.7z" })));
};

var SvgCloudSync = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M39.7 46c-.9-.6-2.2-.4-2.8.6-1.1 1.7-3 2.7-5.1 2.7-1 0-2-.3-2.9-.7h1.9c1.1 0 2-.9 2-2s-.9-2-2-2h-6.3c-1.3 0-2.5 1.1-2.5 2.5V52c0 1.1.9 2 2 2s2-.9 2-2v-.6c1.7 1.1 3.6 1.8 5.7 1.8 3.4 0 6.5-1.7 8.4-4.5.8-.8.5-2.1-.4-2.7zM42.7 31.5c0-1.1-.9-2-2-2s-2 .9-2 2v1c-2-1.5-4.4-2.7-6.6-2.7-3.8 0-7.2 2.1-9 5.5-.5 1-.1 2.2.8 2.7 1 .5 2.2.1 2.7-.8 1.1-2.1 3.2-3.4 5.5-3.4 1.4 0 3.5 1.2 4.9 2.5h-1.8c-1.1 0-2 .9-2 2s.9 2 2 2h5c1.3 0 2.5-1.1 2.5-2.5v-6.3z" }),
        React__namespace.createElement("path", { d: "M58 23.4c-2.7-3-6.6-5.1-10.7-5.8-2.2-3.6-5.5-6.3-9.4-7.6-1.8-.7-3.7-1-5.9-1-9.7 0-17.7 7.7-18.1 17.3C6.7 27 1 33.2 1 40.6 1 48.5 7.5 55 15.4 55c1.1 0 2-.9 2-2s-.9-2-2-2C9.6 51 5 46.4 5 40.6s4.6-10.4 10.4-10.4h.5c1.1 0 2-.9 2-2v-1.1C17.9 19.3 24.2 13 32 13c1.7 0 3.2.3 4.5.8 3.3 1.1 6 3.5 7.8 6.7.3.6.9 1 1.5 1 3.5.4 6.8 2.1 9.2 4.6 2.6 2.8 4 6.4 4 10.1C59 44.4 52.3 51 44.1 51c-1.1 0-2 .9-2 2s.9 2 2 2C54.5 55 63 46.6 63 36.2c0-4.8-1.8-9.3-5-12.8z" })));
};

var SvgCloudUpload = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M34.6 27.1c-.6-.6-1.4-.9-2.2-.9-.8 0-1.6.3-2.2.9L25.5 32c-.9.9-.8 2.3.1 3.2.9.9 2.3.8 3.2-.1l1.5-1.5v7.7c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3v-7.7l1.5 1.5c.4.5 1 .7 1.6.7.6 0 1.1-.2 1.6-.6.9-.9.9-2.3.1-3.2l-5.1-4.9z" }),
        React__namespace.createElement("path", { d: "M57.3 23.6c-2.7-2.9-6.4-4.8-10.3-5.5-2.2-3.4-5.4-5.9-9.1-7.2-1.7-.6-3.7-1-5.8-1-9.4 0-17.2 7.2-17.8 16.3-7.1.9-12.5 6.8-12.5 13.9C1.8 47.8 8.1 54 15.9 54h27.8c10.2 0 18.6-8.1 18.6-18.1 0-4.5-1.8-8.9-5-12.3zm-13.6 26H16c-5.5 0-9.7-4.2-9.7-9.4 0-5.3 4.3-9.4 9.7-9.4h.5c1.2 0 2.3-1 2.3-2.3v-1c0-7.2 6-13 13.3-13 1.6 0 3 .2 4.3.7 3.1 1 5.7 3.2 7.3 6.1.4.6 1 1.1 1.7 1.1 3.3.3 6.5 1.9 8.7 4.3 2.4 2.6 3.7 5.9 3.7 9.3 0 7.5-6.4 13.6-14.1 13.6z" })));
};

var SvgCloud = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M43.7 54.1H15.9c-7.8 0-14.1-6.3-14.1-14 0-7.1 5.5-13 12.5-13.9.5-9.1 8.3-16.3 17.7-16.3 2.1 0 4.1.3 5.8 1 3.7 1.3 6.9 3.8 9.1 7.2 4 .7 7.7 2.6 10.3 5.5 3.2 3.4 4.9 7.8 4.9 12.4.2 10-8.2 18.1-18.4 18.1zM16 49.6h27.7c7.8 0 14.1-6.1 14.1-13.7 0-3.4-1.3-6.7-3.7-9.3-2.2-2.4-5.4-3.9-8.7-4.3-.7-.1-1.4-.5-1.7-1.1-1.6-2.9-4.2-5.1-7.3-6.1-1.3-.5-2.7-.7-4.3-.7-7.3 0-13.3 5.8-13.3 13v1c0 1.2-1 2.3-2.3 2.3H16c-5.5 0-9.7 4.2-9.7 9.5s4.2 9.4 9.7 9.4z" })));
};

var SvgCloudflare = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M9 37.3H7.6v4.9h3.7V41H9zM28 37.3h-1.8v4.8H28c1.7 0 2.7-1 2.7-2.5 0-1.3-1-2.3-2.7-2.3zm1.4 2.5c0 .8-.5 1.2-1.3 1.2h-.5v-2.5h.5c.7.1 1.3.5 1.3 1.3zM3.6 38.5c.5 0 1 .4 1.2.8h1.4c-.3-1.2-1.3-2.1-2.6-2.1C2 37.2 1 38.3 1 39.8c0 1.4 1.2 2.5 2.6 2.5 1.3 0 2.3-.8 2.6-1.9H4.7c-.2.4-.6.6-1.1.6-.8 0-1.3-.6-1.3-1.3.1-.6.5-1.2 1.3-1.2zM22.6 40c0 .6-.3 1-.8 1s-.9-.4-.9-1v-2.7h-1.4V40c0 1.5.9 2.2 2.2 2.2 1.4 0 2.3-.6 2.3-2.2v-2.7h-1.4V40zM15.3 37.3c-1.6 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.5 2.6 2.5s2.6-1.2 2.6-2.6c0-1.5-1-2.5-2.6-2.5zm1.3 2.5c0 .6-.5 1.3-1.3 1.3s-1.3-.7-1.3-1.3c0-.6.5-1.3 1.2-1.3.9 0 1.4.6 1.4 1.3zM32.6 37.3v4.9h1.5v-1.8h2.2v-1h-2.2v-.9h2.4v-1.2zM58.2 40.3h2.3v-1.1h-2.3v-.7h2.6v-1.2h-3.9v4.9h3.9V41h-2.6zM55 39c0-.5-.1-.9-.4-1.2-.4-.4-.8-.5-1.6-.5h-2.3v4.8H52v-1.4h.6l1 1.4h1.5L54 40.5c.6-.2 1-.7 1-1.5zm-1.4.1c0 .4-.3.5-.8.5h-.9v-1.2h.9c.5.1.8.3.8.7zM62.5 37.4c-.3 0-.5.3-.5.5s.3.5.5.5c.3 0 .5-.3.5-.5s-.3-.5-.5-.5zm0 .9c-.3 0-.4-.1-.4-.4s.1-.4.4-.4c.3 0 .4.1.4.4s-.2.4-.4.4z" }),
        React__namespace.createElement("path", { d: "M62.7 37.8c0-.1-.1-.1-.3-.1h-.3v.5h.1v-.3h.1l.1.3h.1l-.1-.3c.3 0 .3 0 .3-.1zm-.2.1h-.1v-.1h.1c.1-.1.1-.1 0 .1.1-.1.1 0 0 0zM39.8 37.3h-1.3v4.9h3.6V41h-2.3zM45.6 37.3l-2.1 4.9h1.4l.4-.9h1.8l.4.9h1.4l-2.1-4.9h-1.2zm.1 3 .5-1.4.5 1.4h-1zM52.3 34.8l.1-.5c.1-.6.1-1.2-.1-1.6-.3-.4-.8-.6-1.3-.6L40.4 32c-.1 0-.1 0-.1-.1v-.1c0-.1.1-.1.3-.1l10.7-.1c1.3 0 2.7-1 3.1-2.3l.6-1.5v-.3c-.8-3.4-3.6-5.7-6.8-5.7-3.1 0-5.7 1.9-6.6 4.8-.6-.4-1.4-.6-2.2-.6-1.4.1-2.7 1.3-2.8 2.8 0 .4 0 .8.1 1-2.5.1-4.4 2.1-4.4 4.5v.6c0 .1.1.1.3.1h19.6c-.1 0 .1 0 .1-.2zM55.9 27.5h-.3c-.1 0-.1 0-.1.1l-.4 1.4c-.1.6-.1 1.2.1 1.6.3.4.8.6 1.3.6l2.3.1c.1 0 .1 0 .1.1v.1c0 .1-.1.1-.3.1l-2.3.4c-1.3 0-2.7 1-3.1 2.3l-.1.4c0 .1 0 .1.1.1h8.1c.1 0 .1 0 .3-.1.1-.5.3-1 .3-1.5-.2-3.1-2.8-5.7-6-5.7z" })));
};

var SvgCloudySun = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M39.4 13.6c1.2 0 2.3-1 2.3-2.3v-4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v4.1c0 1.2 1.1 2.2 2.3 2.2zM55.3 11.8c-.9-.9-2.3-.9-3.2 0l-2.6 2.6c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.6l2.6-2.6c.9-1 .9-2.4 0-3.3zM60 26.7h-4.1c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3H60c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM25.3 17.9c.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7.9-.9.9-2.3 0-3.2l-2.9-2.9c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l2.9 3zM49.4 28.2c0-6.1-5-11.1-11.1-11.1-4.8 0-9 3.2-10.5 7.6-.7-.1-1.4-.2-2.1-.2-7.4 0-13.5 5.4-14.2 12.4-5.5.9-9.7 5.5-9.7 11 0 6.1 5.1 11 11.4 11.1h21.5c8.2 0 14.9-6.4 14.9-14.2 0-3.2-1.2-6.3-3.3-8.9 1.9-2.1 3.1-4.8 3.1-7.7zm-11.1-6.5c3.6 0 6.6 2.9 6.6 6.6 0 1.8-.7 3.4-1.9 4.6-1.6-1-3.5-1.7-5.4-2.1-1.4-2-3.3-3.6-5.4-4.7.8-2.6 3.3-4.4 6.1-4.4zm-3.6 32.7H13.3c-3.9 0-7-2.9-7-6.6s3.1-6.6 7-6.6h.4c1.2 0 2.3-1 2.3-2.3v-.8c0-5.1 4.4-9.2 9.8-9.2 1.2 0 2.2.2 3.2.5 2.3.7 4.2 2.3 5.4 4.4.4.6 1 1 1.7 1.1 2.5.3 4.8 1.4 6.4 3.1 1.8 1.9 2.7 4.1 2.7 6.6-.1 5.5-4.8 9.8-10.5 9.8z" })));
};

var SvgCodeAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56 7.4H8c-3.4 0-6.3 2.8-6.3 6.3v22.6c0 3.4 2.8 6.3 6.3 6.3h21.8v9.5h-6.6c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3H41c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-6.6v-9.5H56c3.4 0 6.3-2.8 6.3-6.3V13.7c0-3.5-2.9-6.3-6.3-6.3zm1.8 28.9c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8V13.7c0-1 .8-1.8 1.8-1.8h48c1 0 1.8.8 1.8 1.8v22.6z" }),
        React__namespace.createElement("path", { d: "M45.1 17.6c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l3.7 3.7-3.6 3.7c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7l5-5c1-1 1-2.6 0-3.6l-5.1-5.2zM18.3 24.9l3.6-3.6c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0l-5 5c-1 1-1 2.6 0 3.6l5.1 5.1c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.9-.9.9-2.3 0-3.2l-3.7-3.7zM35.1 17.1c-1.2-.5-2.5.1-2.9 1.3L27.6 30c-.5 1.2.1 2.5 1.3 2.9.3.1.5.2.8.2.9 0 1.7-.5 2.1-1.4L36.4 20c.4-1.1-.1-2.5-1.3-2.9z" })));
};

var SvgCode = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M19.6 14.1c-.9-.8-2.4-.7-3.2.2L2.6 29.9c-1.1 1.2-1.1 3.1 0 4.3l13.9 15.6c.4.5 1.1.8 1.7.8.5 0 1.1-.2 1.5-.6.9-.8 1-2.3.2-3.2L6.7 32l13.1-14.7c.9-1 .8-2.4-.2-3.2zM61.4 29.9 47.5 14.3c-.8-.9-2.2-1-3.2-.2s-1 2.2-.2 3.2L57.3 32 44.2 46.7c-.8.9-.7 2.3.2 3.2.4.4 1 .6 1.5.6.6 0 1.2-.3 1.7-.8l13.9-15.6c1-1.2 1-3-.1-4.2zM37.9 14.4c-1.2-.4-2.5.2-2.8 1.4L24.7 46.7c-.4 1.2.2 2.5 1.4 2.8.2.1.5.1.7.1.9 0 1.8-.6 2.1-1.5l10.3-30.9c.5-1.1-.1-2.4-1.3-2.8z" })));
};

var SvgCodepen = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m62 20.4-28.5-19c-1-.6-2-.6-3 0l-28.4 19c-.7.4-1.1 1.4-1.1 2.1v18.9c0 .8.4 1.7 1.1 2.3l28.4 18.9c1 .6 2 .6 3 0l28.4-18.9c.7-.4 1.1-1.4 1.1-2.3V22.5c.1-.8-.3-1.7-1-2.1zM34.7 8.6l20.9 14-9.5 6.2L34.6 21c.1 0 .1-12.4.1-12.4zm-5.3 0V21l-11.6 7.8-9.3-6.2 20.9-14zm-23 18.9L13 32l-6.6 4.5v-9zm23 27.9-20.9-14 9.3-6.2L29.4 43v12.4zm2.7-17L22.6 32l9.5-6.4 9.5 6.4-9.5 6.4zm2.6 17V43l11.6-7.8 9.3 6.2-20.9 14zm23-18.9L51.1 32l6.6-4.5v9z" })));
};

var SvgCoffeeCup = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M54.2 25.7c-1.3 0-2.6.3-3.7.9-.2-3.2-2.9-5.7-6.1-5.7H9.3c-3.4 0-6.1 2.7-6.1 6.1v9.5c0 9.2 5.9 17 14.1 19.9H4c-1.2 0-2.3 1-2.3 2.3S2.7 61 4 61h45.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H36.4c5.9-2.1 10.5-6.7 12.7-12.4 1.4 1.1 3.2 1.8 5.1 1.8 2.2 0 4.4-.9 5.9-2.5 1.5-1.5 2.2-3.5 2.1-5.5v-4.1c0-4.4-3.5-8-8-8zM46 36.5c0 9.2-7.5 16.7-16.7 16.7h-4.9c-9.2 0-16.7-7.5-16.7-16.7V27c0-.9.7-1.6 1.6-1.6h35.1c.9 0 1.6.7 1.6 1.6v9.5zm10.9 3.8c-.7.7-1.6 1.1-2.6 1.1-1.9 0-3.5-1.6-3.5-3.5v-4.1c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5V38c0 .8-.3 1.6-.9 2.3zM13.8 16.5c1.2 0 2.3-1 2.3-2.3V5.3c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v8.9c0 1.3 1.1 2.3 2.3 2.3zM26.9 16.5c1.2 0 2.3-1 2.3-2.3V5.3c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v8.9c0 1.3 1 2.3 2.3 2.3zM40 16.5c1.2 0 2.3-1 2.3-2.3V5.3c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v8.9c0 1.3 1 2.3 2.3 2.3z" })));
};

var SvgCog = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32.1 19.6c-6.8 0-12.4 5.6-12.4 12.4 0 6.9 5.6 12.4 12.4 12.4S44.5 38.9 44.5 32c0-6.8-5.6-12.4-12.4-12.4zm0 20.4c-4.4 0-7.9-3.6-7.9-7.9 0-4.4 3.5-7.9 7.9-7.9S40 27.7 40 32c0 4.4-3.6 8-7.9 8z" }),
        React__namespace.createElement("path", { d: "M60.7 38.1 55.1 35c.2-1.1.3-2.2.3-3.3 0-1.2-.1-2.3-.2-3.4l5.7-3.2c1.3-.7 1.8-2.3 1.2-3.7l-5.8-9.8c-.7-1.2-2.3-1.7-3.6-1.2l-6 3.3c-.3-.2-.6-.5-.8-.7-1.1-.9-2.1-1.8-3.7-2.6-.1 0-.2-.1-.2-.3V6.5c0-2.6-2.1-4.8-4.8-4.8H26.9c-2.6 0-4.8 2.2-4.8 4.8v3.9c0 .1-.1.2-.2.3-1.5.7-2.6 1.7-3.8 2.6-.2.2-.5.4-.7.6l-5.3-3c-2-1.1-3.7-.4-4.4.8l-5.5 9.5c-.3.8-.4 1.6-.2 2.4.2.8.7 1.4 1.4 1.8l5.6 3c-.2 1-.2 2.1-.2 3.4 0 1.1.1 2.2.2 3.3l-5.8 3.2C1.9 39 1.4 40.6 2 42l5.8 9.8c.7 1.2 2.2 1.7 3.6 1.2l6-3.3c.3.2.5.4.8.7 1.1 1 2.2 1.9 3.8 2.6.1 0 .2.1.2.3v4.3c0 2.6 2.1 4.8 4.8 4.8h10.2c2.6 0 4.8-2.2 4.8-4.8V53c0-.1.1-.2.2-.3 1.5-.7 2.5-1.6 3.7-2.6.3-.2.5-.4.8-.7l5.3 3c2 1.1 3.6.4 4.4-.8l5.6-9.5c.4-.7.5-1.5.3-2.2s-.9-1.4-1.6-1.8zM53.1 48l-4.8-2.7c-1.4-.8-3-.6-4.2.4-.5.4-.9.7-1.3 1.1-1 .9-1.7 1.5-2.7 1.9-1.6.8-2.7 2.5-2.7 4.3v4.4c0 .2-.1.3-.3.3H26.9c-.2 0-.3-.1-.3-.3v-4.3c0-1.8-1.1-3.5-2.7-4.3-1-.5-1.8-1.1-2.8-2-.4-.3-.8-.7-1.3-1-.7-.5-1.5-.8-2.4-.8-.6 0-1.3.2-1.9.5l-4.8 2.7-4-6.8 4.7-2.6c1.4-.8 2.2-2.3 2-4-.1-1-.2-2-.2-3 0-1.1.1-2.1.2-2.9.3-1.7-.5-3.4-2-4.2L7 22.2l3.9-6.7 4.8 2.7c1.4.8 3 .6 4.2-.4.4-.3.8-.7 1.2-1 1-.9 1.8-1.5 2.8-2 1.7-.8 2.7-2.5 2.7-4.3V6.6c0-.2.1-.3.3-.3h10.2c.2 0 .3.1.3.3v3.8c0 1.8 1.1 3.5 2.7 4.3 1 .5 1.7 1.1 2.7 1.9.4.4.8.7 1.3 1.1 1.2 1 2.9 1.1 4.2.3l4.8-2.7 4 6.8-4.6 2.6c-1.4.8-2.2 2.5-1.9 4.2.1.9.2 1.9.2 2.9s-.1 2-.3 3c-.3 1.7.5 3.3 2 4.1l4.5 2.5-3.9 6.6z" })));
};

var SvgCogs = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M43 34.1c-4.8 0-8.8 4-8.8 8.8s3.9 8.8 8.8 8.8 8.8-4 8.8-8.8-4-8.8-8.8-8.8zm0 13.2c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3 4.3 1.9 4.3 4.3c0 2.3-1.9 4.3-4.3 4.3z" }),
        React__namespace.createElement("path", { d: "m61.8 46.2-3.1-1.7c.1-.6.1-1.2.1-1.7 0-.6 0-1.2-.1-1.7l3.2-1.8c1.2-.7 1.6-2.1 1.1-3.4l-3.8-6.5c-.7-1.1-2.1-1.6-3.3-1.1l-3.5 1.9-.1-.1c-.6-.5-1.3-1.1-2.2-1.6v-2.1c0-2.1-1.7-3.9-3.9-3.9h-6.5c-2.1 0-3.9 1.7-3.9 3.9v2.1c-.9.5-1.6 1.1-2.3 1.6l-2.9-1.6c-1.8-1-3.3-.3-3.9.8l-3.6 6.1c-.4.6-.5 1.4-.3 2.1.2.7.7 1.3 1.3 1.6l3.2 1.7c-.1.5-.1 1.1-.1 1.7 0 .6 0 1.1.1 1.7L24 46.3c-1.2.7-1.6 2.1-1.1 3.4l3.8 6.5c.7 1.1 2.1 1.6 3.3 1.1l3.5-1.9s.1 0 .1.1c.7.6 1.3 1.1 2.3 1.6v2.4c0 2.1 1.7 3.9 3.9 3.9h6.5c2.1 0 3.9-1.7 3.9-3.9V57c.9-.5 1.5-1 2.2-1.6 0 0 .1 0 .1-.1l2.9 1.6c1.8 1 3.3.3 3.9-.8l3.6-6.1c.4-.6.5-1.4.3-2.1-.3-.8-.7-1.4-1.4-1.7zM54.2 41c.1.5.1 1.1.1 1.8 0 .6 0 1.2-.2 1.8-.2 1.4.4 2.8 1.7 3.5l2.2 1.2-1.8 3-2.4-1.4c-1.2-.7-2.6-.5-3.6.3-.3.2-.6.5-.8.7-.6.5-1 .9-1.6 1.1-1.3.6-2.2 2-2.2 3.5v2.3h-5.3v-2.2c0-1.5-.9-2.9-2.2-3.5-.6-.3-1-.6-1.6-1.2-.3-.2-.5-.4-.8-.7-1-.8-2.5-.9-3.6-.3l-2.4 1.4-1.8-3 2.3-1.3c1.2-.7 1.9-2 1.7-3.4-.1-.6-.1-1.2-.1-1.8 0-.7 0-1.2.1-1.8.2-1.4-.4-2.8-1.7-3.5L28 36.3l1.7-3 2.4 1.3c1.2.7 2.6.5 3.6-.3.3-.2.5-.4.8-.7.6-.6 1.1-.9 1.6-1.2 1.3-.6 2.2-2 2.2-3.5V27h5.3v1.8c0 1.5.9 2.9 2.2 3.5.5.3.9.6 1.6 1.1.3.2.6.5.9.7 1 .8 2.4.9 3.6.3l2.4-1.4 1.8 3-2.3 1.3c-1.2.9-1.9 2.3-1.6 3.7zM15.3 11.6c-2 0-3.7 1.7-3.7 3.7s1.7 3.7 3.7 3.7 3.7-1.7 3.7-3.7-1.6-3.7-3.7-3.7z" }),
        React__namespace.createElement("path", { d: "m27 24.6 2.5-4.2c.3-.6.4-1.3.3-2s-.6-1.2-1.2-1.5l-1.8-.9v-1.6l1.8-1c1.1-.6 1.6-2 1.1-3.2L27 5.7c-.6-1-2-1.5-3.1-1l-2 1.1c-.3-.2-.6-.5-.9-.7v-1C21 2.2 19.5.7 17.6.7h-4.5c-1.9 0-3.4 1.5-3.4 3.4v1c-.3.3-.6.5-.9.8L7.2 5c-1.6-.9-3-.2-3.6.8L1.1 10c-.3.6-.4 1.3-.3 2 .2.7.6 1.2 1.2 1.5l1.7 1V16L2 17c-1.1.6-1.6 2-1.1 3.2l2.6 4.5c.6 1.1 2 1.5 3.1 1l2-1.1c.3.2.6.5 1 .7v1.2c0 1.9 1.5 3.4 3.4 3.4h4.5c1.9 0 3.4-1.5 3.4-3.4v-1.3c.3-.2.6-.5.9-.7l1.6.9c1.5.9 3 .3 3.6-.8zm-7.2-4.2c-.2.2-.4.3-.6.5-.4.4-.6.5-.9.7-1.2.6-1.9 1.7-1.9 3v.8h-2.2v-.8c0-1.3-.8-2.5-1.9-3-.3-.1-.5-.3-1-.7-.2-.2-.4-.3-.6-.5-.9-.8-2.2-.9-3.3-.3l-1 .6-.4-.8.9-.5c1.1-.6 1.7-1.8 1.5-3 0-.4-.1-.8-.1-1.2 0-.4 0-.8.1-1.1.2-1.2-.4-2.5-1.5-3.1l-.9-.5.5-.8 1 .6c1.1.6 2.3.5 3.3-.3.2-.2.4-.3.5-.5.4-.4.7-.6 1-.7 1.2-.6 1.9-1.7 1.9-3v-.5h2.2v.5c0 1.3.7 2.5 1.9 3 .3.1.5.3.9.7.2.2.4.3.6.5.9.8 2.2.9 3.3.3l1-.6.5.8-.9.5c-1.1.6-1.7 1.9-1.5 3.1.1.3.1.7.1 1.1 0 .4 0 .7-.1 1.1-.2 1.3.4 2.5 1.5 3.1l.8.5-.5.8-1-.6c-1-.6-2.3-.5-3.2.3z" })));
};

var SvgCoin = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M35.8 29.8h-7.1c-2.1 0-3.8-1.6-3.8-3.6s1.7-3.6 3.8-3.6H39c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-4.8v-2.4c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2v2.4h-1.1c-4.6 0-8.3 3.6-8.3 8.1s3.7 8.1 8.3 8.1h7.1c2.1 0 3.8 1.6 3.8 3.6s-1.7 3.6-3.8 3.6H25c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h4.8v2.4c0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2V46h1.6c4.6 0 8.3-3.6 8.3-8.1.1-4.5-3.7-8.1-8.3-8.1z" }),
        React__namespace.createElement("path", { d: "M32 1.8C15.3 1.8 1.8 15.3 1.8 32S15.3 62.2 32 62.2 62.2 48.7 62.2 32 48.7 1.8 32 1.8zm0 56C17.8 57.8 6.2 46.2 6.2 32 6.2 17.8 17.8 6.2 32 6.2c14.2 0 25.8 11.6 25.8 25.8 0 14.2-11.6 25.8-25.8 25.8z" })));
};

var SvgCoinbase = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M7.64 38.29c-1.893 0-3.746-1.362-3.746-4.437 0-3.085 1.853-4.427 3.746-4.427.932 0 1.663.24 2.184.58l-.571 1.253c-.35-.25-.872-.411-1.392-.411-1.142 0-2.184.902-2.184 2.985 0 2.083 1.072 3.005 2.184 3.005.52 0 1.041-.16 1.392-.41l.57 1.281c-.54.36-1.251.581-2.183.581ZM14.161 38.29c-2.414 0-3.746-1.913-3.746-4.437s1.322-4.427 3.746-4.427c2.414 0 3.746 1.893 3.746 4.427 0 2.524-1.332 4.437-3.746 4.437Zm0-7.492c-1.342 0-2.003 1.202-2.003 3.035 0 1.833.66 3.045 2.003 3.045 1.342 0 2.003-1.212 2.003-3.045s-.66-3.035-2.003-3.035ZM20.231 28.053c-.571 0-1.032-.44-1.032-.981 0-.541.461-.982 1.032-.982.57 0 1.032.44 1.032.982 0 .54-.471.981-1.032.981Zm-.872 1.543h1.743v8.514H19.36v-8.514ZM27.934 38.11v-5.68c0-.991-.601-1.612-1.783-1.612-.631 0-1.212.11-1.563.25v7.052h-1.723v-8.093c.852-.35 1.944-.601 3.276-.601 2.384 0 3.536 1.041 3.536 2.844v5.85h-1.743M34.254 38.29c-1.102 0-2.194-.27-2.865-.6V25.71h1.723v4.106c.41-.19 1.072-.35 1.663-.35 2.194 0 3.686 1.582 3.686 4.187 0 3.215-1.663 4.637-4.207 4.637Zm.22-7.472c-.47 0-1.031.11-1.362.28v5.59c.25.11.741.22 1.232.22 1.373 0 2.384-.952 2.384-3.125.01-1.863-.871-2.965-2.254-2.965ZM43.149 38.29c-2.444 0-3.686-.991-3.686-2.674 0-2.374 2.524-2.795 5.098-2.935v-.54c0-1.073-.711-1.453-1.803-1.453-.801 0-1.783.25-2.354.52l-.44-1.181c.68-.3 1.833-.601 2.974-.601 2.034 0 3.276.791 3.276 2.894v5.37c-.611.33-1.863.6-3.065.6Zm1.422-4.457c-1.743.09-3.476.24-3.476 1.753 0 .901.691 1.452 2.004 1.452.55 0 1.202-.09 1.472-.22v-2.985ZM50.1 38.29c-.991 0-2.033-.27-2.654-.6l.58-1.323c.442.27 1.373.551 2.024.551.932 0 1.553-.46 1.553-1.172 0-.771-.651-1.072-1.513-1.392-1.142-.43-2.414-.952-2.414-2.544 0-1.403 1.092-2.384 2.985-2.384 1.032 0 1.883.25 2.484.6l-.54 1.203c-.381-.24-1.142-.501-1.753-.501-.902 0-1.403.47-1.403 1.092 0 .77.631 1.041 1.473 1.362 1.182.44 2.494.931 2.494 2.594-.01 1.513-1.182 2.514-3.316 2.514ZM61.81 33.813l-5.66.791c.17 1.533 1.172 2.304 2.604 2.304.852 0 1.773-.21 2.354-.52l.501 1.291c-.66.35-1.803.601-2.975.601-2.684 0-4.187-1.723-4.187-4.437 0-2.604 1.453-4.427 3.837-4.427 2.213 0 3.526 1.452 3.526 3.746.02.21.02.43 0 .65Zm-3.536-3.125c-1.323 0-2.194 1.011-2.224 2.784l4.127-.57c-.02-1.483-.771-2.214-1.903-2.214Z" })));
};

var SvgCommentsAlt2 = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M44.4 19.5H18.6c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h25.9c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.4-2.3zM39.2 31.7H18.6c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h20.6c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" }),
        React__namespace.createElement("path", { d: "M56 7.9H8c-3.4 0-6.3 2.8-6.3 6.3v37.7c0 1.6.9 3.1 2.4 3.8.6.3 1.2.4 1.8.4 1 0 1.9-.3 2.7-1l8.5-7H56c3.4 0 6.3-2.8 6.3-6.3V14.2c0-3.5-2.9-6.3-6.3-6.3zm1.8 33.9c0 1-.8 1.8-1.8 1.8H16.3c-.5 0-1 .2-1.4.5l-8.6 7.1v-37c0-1 .8-1.8 1.8-1.8h48c1 0 1.8.8 1.8 1.8v27.6z" })));
};

var SvgCommentsReply = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56 7.8H8c-3.4 0-6.2 2.8-6.2 6.2v37.7c0 1.6.9 3.1 2.4 3.8.6.3 1.2.4 1.8.4 1 0 1.9-.3 2.7-1l8.5-7h5.1c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-5.9c-.5 0-1 .2-1.4.5l-8.6 7.1V14c-.1-1 .6-1.7 1.6-1.7h48c.9 0 1.7.8 1.7 1.7v31.7c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V14c0-3.4-2.8-6.2-6.3-6.2z" }),
        React__namespace.createElement("path", { d: "M53 43.6c-2.3-2.3-5.3-3.9-8.7-4.6v-2.2c0-1.3-.7-2.5-1.9-3-1.2-.6-2.5-.4-3.6.4l-10.1 8.1c-.8.6-1.3 1.6-1.3 2.6s.5 2 1.3 2.6l10.1 8.1c.6.5 1.4.7 2.1.7.5 0 1-.1 1.5-.3 1.2-.6 1.9-1.7 1.9-3v-1.2c2.1.5 4.5 1.6 7.1 3.2 1.1.7 2.4.7 3.5 0 1.1-.6 1.7-1.8 1.7-3.1 0-.8-.1-1.4-.2-1.8-.6-2.7-1.5-4.6-3.4-6.5zM43.9 47c-1-.2-2 .1-2.8.8-.8.7-1.2 1.6-1.2 2.7v.1l-7.1-5.7 7.1-5.7v.7c0 1.7 1.2 3.1 2.9 3.4 2.8.5 5.2 1.7 7.1 3.5 1 1 1.5 1.8 1.9 3-2.4-1.2-5.1-2.3-7.9-2.8zM9.6 24.9c0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1-2.7-6.1-6.1-6.1-6.1 2.7-6.1 6.1zm7.8 0c0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6.9-.1 1.6.7 1.6 1.6zM32 31c3.4 0 6.1-2.7 6.1-6.1s-2.7-6.1-6.1-6.1-6.1 2.7-6.1 6.1S28.6 31 32 31zm0-7.8c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6zM48.2 31c3.4 0 6.1-2.7 6.1-6.1s-2.7-6.1-6.1-6.1-6.1 2.7-6.1 6.1 2.8 6.1 6.1 6.1zm0-7.8c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6c0-.8.7-1.6 1.6-1.6z" })));
};

var SvgComments = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56 7.9H8c-3.4 0-6.3 2.8-6.3 6.3v37.7c0 1.6.9 3.1 2.4 3.8.6.3 1.2.4 1.8.4 1 0 1.9-.3 2.7-1l8.5-7H56c3.4 0 6.3-2.8 6.3-6.3V14.2c0-3.5-2.9-6.3-6.3-6.3zm1.8 33.9c0 1-.8 1.8-1.8 1.8H16.3c-.5 0-1 .2-1.4.5l-8.6 7.1v-37c0-1 .8-1.8 1.8-1.8h48c1 0 1.8.8 1.8 1.8v27.6z" }),
        React__namespace.createElement("path", { d: "M15.8 20.7c-3.4 0-6.1 2.7-6.1 6.1s2.7 6.1 6.1 6.1 6.1-2.7 6.1-6.1-2.8-6.1-6.1-6.1zm0 7.8c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6.9 0 1.6.7 1.6 1.6 0 .8-.7 1.6-1.6 1.6zM32 20.7c-3.4 0-6.1 2.7-6.1 6.1S28.6 33 32 33s6.1-2.7 6.1-6.1-2.7-6.2-6.1-6.2zm0 7.8c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6.9 0 1.6.7 1.6 1.6 0 .8-.7 1.6-1.6 1.6zM48.2 20.7c-3.4 0-6.1 2.7-6.1 6.1s2.7 6.1 6.1 6.1 6.1-2.7 6.1-6.1-2.7-6.1-6.1-6.1zm0 7.8c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6c.1.8-.7 1.6-1.6 1.6z" })));
};

var SvgCompass = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56.2 59 45.5 37c3.1-2.4 5.6-5.6 7.1-9.3.5-1.2-.1-2.5-1.3-2.9-1.2-.5-2.5.1-2.9 1.3-1 2.7-2.8 5-4.9 6.8l-4.2-8.7C41 22.4 42 20 42 17.3c0-4.7-3.3-8.7-7.8-9.7V4c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v3.6c-4.4 1-7.8 5-7.8 9.7 0 2.7 1.1 5.1 2.8 6.9l-4.2 8.7c-2.1-1.8-3.9-4.1-4.9-6.8-.5-1.2-1.8-1.7-2.9-1.3-1.2.5-1.7 1.8-1.3 2.9 1.5 3.8 4 7 7.1 9.3L7.8 59c-.5 1.1-.1 2.5 1 3 .3.2.7.2 1 .2.8 0 1.6-.5 2-1.3l10.5-21.6c3 1.4 6.2 2.2 9.6 2.2s6.7-.8 9.6-2.2L52.1 61c.4.8 1.2 1.3 2 1.3.3 0 .7-.1 1-.2 1.2-.6 1.6-2 1.1-3.1zM32 11.8c3 0 5.5 2.4 5.5 5.4S35 22.7 32 22.7s-5.5-2.4-5.5-5.4 2.5-5.5 5.5-5.5zm0 25.3c-2.7 0-5.3-.6-7.7-1.8l4.2-8.7c1.1.4 2.2.6 3.4.6 1.2 0 2.4-.2 3.4-.6l4.2 8.7c-2.2 1.2-4.8 1.8-7.5 1.8z" })));
};

var SvgConnectdevelop = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m61.8 30.5-5.6-9.9c.1-.1.1-.4.1-.8 0-.8-.8-1.7-1.7-1.7l-6.4-11c.1-.1.1-.4.1-.6 0-1-.8-1.7-1.7-1.7-.6 0-1 .3-1.4.7h-12c-.2-.3-.6-.5-1.1-.5-.6 0-1 .3-1.3.7h-12c-.4-.5-.9-.7-1.4-.7-1 0-1.7.8-1.7 1.7 0 .1.1.4.1.6l-6.4 11c-.6.3-1.1.8-1.1 1.6v.1L2.4 30.4c-.8.1-1.4.8-1.4 1.7 0 .8.6 1.6 1.4 1.7l6.2 10.7c-.1.1-.1.3-.1.6 0 .8.6 1.6 1.4 1.7L15.7 57c-.1.1-.1.4-.1.6 0 1 .8 1.7 1.7 1.7.6 0 1-.3 1.3-.6h12.1c.4.3.8.6 1.4.6.4 0 1-.3 1.3-.6h12.1c.3.3.8.6 1.3.6 1 0 1.7-.8 1.7-1.7 0-.1 0-.3-.1-.4L54.2 47c.8-.1 1.4-.8 1.4-1.7 0-.1 0-.4-.1-.6L61.7 34c.8-.1 1.4-.8 1.4-1.7 0-.9-.5-1.6-1.3-1.8zm-45 23.7-4.9-8.6h4.9v8.6zm0-9.4h-4.9c0-.1-.1-.1-.1-.4l5.1-5.4v5.8h-.1zm0-7.1L11 43.8c-.1-.1-.3-.3-.4-.3l-6.2-11c.1-.1.1-.3.1-.4v-.4l5.9-10.2c.3 0 .6-.1.8-.3l5.6 5.9v10.6zm0-11.7-5.1-5.4c.1-.3.3-.6.3-.8v-.1l5-1.7-.2 8zm0-9-4.9 1.7 4.9-8.6V17zm37 4.3.1.1-4 18.9-7.2-7.6 11.1-11.4zM32.5 43.5l1.3 1.4h-2.7l1.4-1.4zm0-1.4L23 32.4l9-9.5 9.5 9.9-9 9.3zm.5.7 8.9-9.3 7.6 8-.5 3.3H35l-2-2zM45.9 8.2c.1.2.1.2.4.2l6.5 11.4v.1c0 .3.1.7.3.8l-11 11.4-9.5-9.9 13.3-14zm-1-.3L32.1 21.6l-6.5-6.8L44.5 8h.4v-.1zm-14 0c.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4h8.5L24.9 14l-5.8-6.1h11.8zm-13.1.7.1-.1c.1 0 .1-.1.3-.1l5.8 6.1-6.2 2.3V8.6zm0 9.1 6.9-2.5 6.8 7.2-9.2 9.5-4.6-4.9c.1 0 .1-9.3.1-9.3zm0 10.4 4.1 4.2-4.1 4.4v-8.6zm0 9.9 4.8-5.1 9.5 9.7-2 2H17.8V38zm.7 18.4c-.1-.1-.4-.3-.7-.4l-.1-.1V45.6h11.4L18.5 56.4zm14.7 0c-.3-.3-.7-.4-1.1-.4-.4 0-.8.1-1.1.4H20l10.4-10.7h4.4l10.4 10.7h-12zm13.7-1.3-.4.8c-.1 0-.3.1-.4.1L35.9 45.6h13l-2 9.5zm1.4-2.6 1.4-6.9h2.5l-3.9 6.9zm3.9-7.7h-2.4l.4-2.4 2 2c.2.1 0 .2 0 .4zm7.5-12.2-6.4 10.9c-.1.1-.3.1-.4.1l-2.4-2.5 4-18.5 5.1 8.9c0 .1-.1.3-.1.4.1.5.2.6.2.7z" })));
};

var SvgConstructionHammer = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M53.9 1.8H16.6c-2.9 0-5.5 1.6-6.8 4.2L3.1 19.5c-.8 1.5-.7 3.3.2 4.8.9 1.5 2.5 2.3 4.2 2.3h15.6V56c0 3.4 2.8 6.2 6.2 6.2h5.3c3.4 0 6.2-2.8 6.2-6.2V26.6h13c4.2 0 7.6-3.4 7.6-7.6V9.3c0-4.2-3.4-7.5-7.5-7.5zM36.4 56c0 1-.8 1.8-1.8 1.8h-5.3c-1 0-1.8-.8-1.8-1.8V26.6h8.8V56zm20.5-36.9c0 1.7-1.4 3.1-3.1 3.1H7.5c-.1 0-.3-.1-.3-.2-.1-.1-.1-.3 0-.4L14 8c.5-1 1.6-1.7 2.7-1.7h37.2c1.7 0 3.1 1.4 3.1 3.1v9.7z" })));
};

var SvgConstruction = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M57.5 24.1c2.6 0 4.8-2.2 4.8-4.8v-3.2c0-2.1-1.4-4-3.4-4.6L27.9 2c-.5-.1-.9-.2-1.4-.2H14.2c-2.6 0-4.8 2.2-4.8 4.8v12.7c0 2.6 2.2 4.8 4.8 4.8H17v18.4H8c-3.4 0-6.2 2.8-6.2 6.2V56c0 3.4 2.8 6.2 6.2 6.2h22.5c3.4 0 6.3-2.8 6.3-6.2v-7.3c0-3.4-2.8-6.2-6.3-6.2h-9V24.1h28.6V35c0 2.1 1.5 4 3.6 4.5 2.7.7 4.4 3.4 3.9 6.2-.4 2.1-2.2 3.9-4.3 4.3-1.6.3-3.2-.1-4.5-1.2-1.2-1-1.9-2.5-1.9-4.1 0-.6.1-1.2.3-1.8.4-1.2-.2-2.5-1.4-2.9-1.2-.4-2.5.2-2.9 1.4a9.6 9.6 0 0 0-.6 3.3c0 2.9 1.3 5.7 3.5 7.6 1.8 1.5 4 2.3 6.4 2.3.6 0 1.2-.1 1.8-.2 4-.7 7.3-4 8-8 .9-5.2-2.2-10-7.2-11.3-.2 0-.2-.1-.2-.2V24.1h2.9zM32.3 48.7V56c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8v-7.3c0-.9.8-1.7 1.8-1.7h22.5c1 0 1.8.8 1.8 1.7zm25.5-32.6v3.2c0 .2-.1.3-.3.3H29.2V7l28.4 8.7c.1.1.2.2.2.4zm-43.9 3.2V6.5c0-.2.1-.3.3-.3h10.5v13.3H14.2c-.2.1-.3-.1-.3-.2z" })));
};

var SvgConsulting = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M25.1 23.6c0 4 3.2 7.2 7.2 7.2s7.2-3.2 7.2-7.2-3.2-7.2-7.2-7.2c-3.9-.1-7.2 3.2-7.2 7.2zm10.5 0c0 1.8-1.5 3.2-3.2 3.2s-3.2-1.5-3.2-3.2 1.5-3.2 3.2-3.2 3.2 1.4 3.2 3.2z" }),
        React__namespace.createElement("path", { d: "M8.1 31.7c.5 0 .9-.2 1.2-.4l7.1-5.6c.9-.7 1-1.9.3-2.8-.7-.9-1.9-1-2.8-.3l-3.6 2.9C12.9 15.3 21.9 8.2 32.4 8.2c10.5 0 19.6 7.1 22.2 17.3.3 1.1 1.4 1.7 2.4 1.4 1.1-.3 1.7-1.4 1.4-2.4-3-12-13.8-20.4-26.1-20.4-12.2 0-22.8 8.2-25.9 20L4.1 21c-.7-.9-1.9-1.1-2.8-.4-.9.7-1.1 1.9-.4 2.8l5.6 7.5c.3.4.8.7 1.3.8h.3zM62.8 44.8l-3.9-8.5c-.2-.5-.6-.9-1.2-1.1-.5-.2-1.1-.1-1.6.1l-8.1 4c-1 .5-1.4 1.7-.9 2.7.5 1 1.7 1.4 2.7.9l3.9-1.9a22.9 22.9 0 0 1-9.2 11.3v-9.4c0-5.1-3.8-9.3-8.5-9.3h-7.7c-4.7 0-8.5 4.2-8.5 9.4v9c-4.2-2.8-7.4-6.9-9-11.9-.3-1-1.5-1.6-2.5-1.3-1 .3-1.6 1.5-1.3 2.5 3.6 11 13.8 18.4 25.4 18.4 11.1 0 21-6.8 25-17.1l1.7 3.8c.3.7 1.1 1.2 1.8 1.2.3 0 .6-.1.8-.2 1.1-.4 1.5-1.6 1.1-2.6zm-39 9.3V42.9c0-3 2-5.4 4.5-5.4h1.8v6.9c0 1.1.9 2 2 2s2-.9 2-2v-6.9H36c2.5 0 4.5 2.4 4.5 5.3v11.4c-2.6 1-5.3 1.5-8.2 1.5-3 .1-5.9-.5-8.5-1.6z" })));
};

var SvgControlPanel = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M48.4 1.8H15.6c-3.4 0-6.3 2.8-6.3 6.3v48c0 3.4 2.8 6.3 6.3 6.3h32.7c3.4 0 6.3-2.8 6.3-6.3V8c0-3.4-2.8-6.2-6.2-6.2zM50.1 56c0 1-.8 1.8-1.8 1.8H15.6c-1 0-1.8-.8-1.8-1.8V8c0-1 .8-1.8 1.8-1.8h32.7c1 0 1.8.8 1.8 1.8v48z" }),
        React__namespace.createElement("path", { d: "M42.2 14.4H26.6v-.3c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v.3h-.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h.3v.3c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V19h15.6c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM42.2 29.8h-.3v-.3c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v.3H21.8c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h15.6v.3c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-.3h.3c1.2 0 2.3-1 2.3-2.3-.2-1.3-1.2-2.3-2.4-2.3zM42.2 45.1H26.6v-.3c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v.3h-.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h.3v.3c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-.3h15.6c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" })));
};

var SvgCool = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 .8C14.8.8.8 14.8.8 32s14 31.3 31.3 31.3 31.3-14 31.3-31.3S49.2.8 32 .8zm0 4.5c10.3 0 19.2 5.8 23.7 14.3H8.3C12.8 11.1 21.7 5.3 32 5.3zm0 53.5c-14.8 0-26.8-12-26.8-26.8 0-2.8.4-5.4 1.2-8h12.9v5c0 1.1.9 2 2 2h6.2c1.1 0 2-.9 2-2v-5h4.8v5c0 1.1.9 2 2 2h6.2c1.1 0 2-.9 2-2v-5h12.9c.8 2.5 1.2 5.2 1.2 8 .2 14.8-11.8 26.8-26.6 26.8z" }),
        React__namespace.createElement("path", { d: "M43.6 40.6c-3.2 2.9-7.3 4.6-11.6 4.6s-8.5-1.6-11.6-4.6c-.9-.8-2.3-.8-3.2.1-.8.9-.8 2.3.1 3.2 4 3.7 9.2 5.8 14.7 5.8s10.7-2 14.7-5.8c.9-.8 1-2.3.1-3.2s-2.3-.9-3.2-.1z" })));
};

var SvgCoral = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M56.723 35.014a3.051 3.051 0 1 1-.049-6.102 3.051 3.051 0 0 1 .05 6.102m-29.52-14.09a3.052 3.052 0 1 1 .05 6.103 3.052 3.052 0 0 1-.05-6.103M8.7 12.912a3.027 3.027 0 1 1-.05 6.053 3.027 3.027 0 0 1 .05-6.053Zm34.53-7.988a3.05 3.05 0 1 1 .05 6.102 3.05 3.05 0 0 1-.05-6.102m21.457 27.064a7.963 7.963 0 1 0-10.369 7.566v4.068a5.557 5.557 0 0 1-5.556 5.557h-2.952a13.048 13.048 0 0 0-8.608 3.224 16.87 16.87 0 0 0-4.019-7.441 12.949 12.949 0 0 0 12.577-12.95V15.567a7.963 7.963 0 1 0-4.961 0v16.372a8.037 8.037 0 0 1-8.037 8.037h-4.689a10.221 10.221 0 0 0 1.588-5.531V31.54a7.963 7.963 0 1 0-4.961 0v2.903a5.531 5.531 0 0 1-5.334 5.531 8.112 8.112 0 0 1-8.062-8.111v-8.36a7.963 7.963 0 1 0-4.961 0v8.335a13.073 13.073 0 0 0 12.949 13.048h2.952a10.07 10.07 0 0 1 7.442 3.423 11.709 11.709 0 0 1 3.2 7.889v7.764h4.96v-1.761a8.136 8.136 0 0 1 8.137-8.137h2.952a10.468 10.468 0 0 0 10.469-10.468V39.53a7.963 7.963 0 0 0 5.457-7.442" })));
};

var SvgCpanel = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M21.3 29.1c-.6-2.4-2.7-3.9-4.9-3.9h-3.5c-.7 0-1.3.4-1.4 1.1L8.1 38.7h2.4c.7 0 1.1-.4 1.4-1.1l2.5-9.3h2c.8 0 1.5.6 1.7 1.4.3 1.1-.6 2.3-1.7 2.3h-1c-.7 0-1.3.4-1.4 1.1l-.6 2.4h3.1c3.5-.1 5.5-3.6 4.8-6.4zM6.2 31.8H8c.7 0 1.1-.4 1.4-1.1l.6-2.4H6.1c-2.3 0-4.2 1.4-4.9 3.9-.8 3.2 1.7 6.3 4.8 6.3h1.1l.7-2.5c.1-.4-.1-.8-.6-.8H6.1c-2.3.2-2.3-3.4.1-3.4zm24-3.4h-7.6l-.3 1.3c-.1 1 .4 1.8 1.4 1.8h5.6c.4 0 .1.4.1.4l-.8 3.1c0 .1-.1.4-.6.4h-3.4c-.4 0-.4-.8 0-.8h2.1c.7 0 1.1-.4 1.4-1.1l.4-1.3H24c-3.8 0-4.2 6.2-.1 6.2h5.6c1.1 0 2-.7 2.3-1.7l1.4-5.1c.2-1.5-1.2-3.2-3-3.2zM62.3 25h-1.8c-.4 0-.8.3-1 .8L56 38.6c2 0 3.9-1.4 4.4-3.4l2.7-9.4c0-.3-.3-.8-.8-.8zm-22.8 3.4h-4.6l-2.5 9.4c-.1.4.1.8.6.8h1.8c.4 0 .8-.3 1-.8l1.7-6.2h2c1.3 0 2 1.1 1.7 2.3l-1.1 3.9c-.1.4.1.8.6.8h1.8c.4 0 .8-.3 1-.8l.8-3.2c.9-3.1-1.6-6.2-4.8-6.2zm9.4 7.3c-.4 0-.6-.3-.4-.7l.8-3c.1-.4.4-.6.8-.6h3.2c.3 0 .4.1.4.4l-.1.3c-.1.1-.1.3-.4.3h-2.1c-.7 0-1.3.4-1.4 1.1l-.4 1.3h5.1c1.1 0 2-.7 2.3-1.7L57 32c.4-1.8-.8-3.5-2.7-3.5h-4.5c-1.7 0-3.2 1.1-3.8 3l-1.1 3.9c-.4 1.7.8 3.5 2.7 3.5H54c.7 0 1.1-.4 1.4-1.1l.6-2c-.1-.1-7.1-.1-7.1-.1z" })));
};

var SvgCreativeCommons = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M31.7 26.9 27.5 29c-1.1-2.4-3.2-2.5-3.4-2.5-2.8 0-4.2 1.8-4.2 5.5 0 3 1.1 5.5 4.2 5.5 1.8 0 3.1-.8 3.8-2.7l3.8 2c-.7 1.4-3.2 4.8-8.2 4.8-2.8 0-9.2-1.3-9.2-9.6 0-7.3 5.4-9.6 9.2-9.6 3.9 0 6.5 1.4 8.2 4.5zm17.9 0L45.5 29c-1.1-2.5-3.2-2.5-3.5-2.5-2.8 0-4.2 1.8-4.2 5.5 0 3 1.1 5.5 4.2 5.5 1.8 0 3.1-.8 3.8-2.7l3.9 2c-.3.4-2.7 4.8-8.2 4.8-2.8 0-9.2-1.3-9.2-9.6 0-7.3 5.4-9.6 9.2-9.6 3.7 0 6.4 1.4 8.1 4.5zM31.9 1C14.1 1 1 15.4 1 32c0 17.3 14.2 31 30.9 31C48.2 63 63 50.5 63 32 63 14.8 49.6 1 31.9 1zm.2 56.4c-14 0-25.5-11.6-25.5-25.4 0-13.2 10.7-25.4 25.5-25.4 14.1 0 25.4 11.1 25.4 25.4-.1 15.2-12.5 25.4-25.4 25.4z" })));
};

var SvgCreditCards = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M59.2 18.1v-5.7c0-1.8-.8-3.4-2.2-4.5-1.4-1.1-3.2-1.5-4.9-1.1L8.6 17.2H8c-3.4 0-6.2 2.8-6.2 6.2V51c0 3.4 2.8 6.2 6.2 6.2h48c3.4 0 6.2-2.8 6.2-6.2V23.5c0-2.3-1.2-4.3-3-5.4zm-6.1-6.9c.5-.1.9.1 1.1.3s.5.5.5 1v4.8H27.9l25.2-6.1zM8 21.7h48c1 0 1.8.8 1.8 1.8v3.9H6.2v-3.9c0-1 .8-1.8 1.8-1.8zm49.8 10.2v4.5H6.2v-4.5h51.6zm-1.8 21H8c-1 0-1.8-.8-1.8-1.8V40.9h51.5v10.2c.1 1-.7 1.8-1.7 1.8z" })));
};

var SvgCrop = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M57.7 50.4h-5.1V12.2l4.4-5c.8-.9.7-2.4-.2-3.2s-2.4-.7-3.2.2l-4.3 4.9H15.9V4c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v5.1H6.3C5 9.1 4 10.1 4 11.4s1 2.2 2.2 2.2h5.1v36.8h-5c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h5.1V60c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-5.1H48V60c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-5.1h5.1c1.2 0 2.2-1 2.2-2.2s-.7-2.3-2-2.3zM15.9 13.6h29.4L15.9 46.7V13.6zm2.8 36.8 29.4-33.1v33.1H18.7z" })));
};

var SvgCrossCircle = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 1.8C15.3 1.8 1.8 15.3 1.8 32S15.3 62.3 32 62.3 62.3 48.7 62.3 32 48.7 1.8 32 1.8zm0 56C17.8 57.8 6.3 46.2 6.3 32 6.3 17.8 17.8 6.3 32 6.3s25.8 11.6 25.8 25.8c0 14.1-11.6 25.7-25.8 25.7z" }),
        React__namespace.createElement("path", { d: "M41.2 22.7c-.9-.9-2.3-.9-3.2 0l-6 6.1-6.1-6.1c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l6.1 6.1-6.1 6.1c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7l6.1-6.1 6.1 6.1c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.9-.9.9-2.3 0-3.2L35.2 32l6.1-6.1c.8-.9.8-2.3-.1-3.2z" })));
};

var SvgCrown = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M59.4 9.1c-2-1.2-4.4-1.2-6.4 0l-6.8 4.1c-.6.4-1.3.3-1.9-.1l-8.4-6.7c-2.2-1.8-5.5-1.8-7.7 0l-8.5 6.9c-.5.4-1.3.5-1.9.1l-6.8-4c-2-1.1-4.4-1.1-6.4.2-2 1.2-3.1 3.4-2.9 5.7l3.2 36.6c.4 4 3.7 7.1 7.7 7.1h38.6c4 0 7.4-3 7.7-7.1l3.3-37c.2-2.3-.9-4.5-2.8-5.8zm-8.2 45.4H12.7c-1.7 0-3.1-1.3-3.2-3l-1-10.2h46.8l-.9 10.2c-.1 1.7-1.5 3-3.2 3zm6.5-40-2 22.3H8.2L6.3 14.9c-.1-.9.5-1.4.7-1.5.2-.1.5-.3.9-.3.3 0 .5.1.8.2l6.8 4c2.2 1.3 5 1.1 7-.5L31 9.9c.6-.5 1.5-.5 2.1 0l8.4 6.7c2 1.6 4.8 1.8 7 .5l6.8-4.1c.8-.5 1.5-.1 1.7 0 .2.1.8.6.7 1.5z" }),
        React__namespace.createElement("path", { d: "M23.9 47.1c0-.1-.1-.3-.2-.4l-.3-.3c-.8-.8-2.4-.8-3.2 0l-.3.3c-.1.1-.2.3-.2.4-.1.1-.1.3-.1.4v.8c0 .1.1.3.1.4 0 .1.1.3.2.4l.3.3c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7l.3-.3c.1-.1.1-.3.2-.4 0-.1.1-.3.1-.4v-.8c0-.2 0-.3-.1-.4zM33.3 46.1c-.1-.1-.3-.2-.4-.2-.1-.1-.3-.1-.4-.1-.7-.2-1.5.1-2 .6-.4.4-.7 1-.7 1.6 0 .6.2 1.2.7 1.6.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.4-.4.7-1 .7-1.6 0-.6-.2-1.2-.7-1.6-.2-.2-.3-.3-.4-.3zM41.7 45.7c-.1 0-.3.1-.4.1-.1 0-.3.1-.4.2l-.3.3c-.4.4-.7 1-.7 1.6 0 .6.2 1.2.7 1.6.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.4-.4.7-1 .7-1.6 0-.6-.3-1.2-.7-1.6-.6-.5-1.4-.7-2.1-.6z" })));
};

var SvgCss3 = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M48.5 15.8c-.8-.9-1.9-1.3-3.1-1.3H16.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h28.2l-1.1 6H19.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h23.8l-1.9 10.7-8.6 3.1-8.6-3.3-1.1-5.5c-.2-1.2-1.4-2-2.7-1.8-1.2.2-2 1.4-1.8 2.7l1.2 6c.2 1.2 1.1 2.2 2.3 2.6l9.4 3.4c.4.1.8.2 1.2.2.4 0 .8-.1 1.2-.2l9.4-3.4c1.2-.4 2.1-1.5 2.3-2.7l4-22.3c.2-1.2-.1-2.3-.9-3.3v-.1z" }),
        React__namespace.createElement("path", { d: "M58.5 4.3c-1.5-1.6-3.6-2.6-5.8-2.6H11.3c-2.2.1-4.3 1-5.8 2.6s-2.2 3.9-1.9 6l4.9 41.3c.4 3.2 2.8 5.9 5.9 6.6L30.2 62c.6.1 1.2.2 1.8.2s1.2-.1 1.8-.2l15.8-3.7c3.1-.7 5.5-3.4 5.9-6.6l4.9-41.3c.2-2.2-.5-4.4-1.9-6.1zm-2.6 5.6L51 51.2c-.2 1.3-1.1 2.4-2.5 2.8l-15.8 3.7c-.5.1-1 .1-1.5 0L15.5 54c-1.3-.3-2.3-1.4-2.5-2.8L8.1 9.9c-.1-1 .2-1.9.8-2.6.6-.7 1.5-1.1 2.4-1.1h41.4c.9 0 1.8.4 2.4 1.1.6.7.9 1.6.8 2.6z" })));
};

var SvgCup = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56.6 9.4H47V4.8c0-1.7-1.4-3.1-3.1-3.1H20.1c-1.7 0-3.1 1.4-3.1 3.1v4.6H7.4c-1.8 0-3.1 1.3-3.1 3.1v.8c0 7.4 5.5 13.5 12.7 14.6v.3c0 7.4 5.5 13.6 12.7 14.7v14.9h-7.9c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h20.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-7.9v-15c3.2-.5 6.2-1.9 8.5-4.3 2.8-2.8 4.3-6.5 4.2-10.4v-.3c7.2-1.1 12.7-7.2 12.7-14.6v-.8c0-1.7-1.3-3-3.1-3zM8.8 13.9H17v9.4c-4.5-.9-7.9-4.8-8.2-9.4zm33.7 14.3c0 2.7-1 5.3-2.9 7.2-2 2-4.7 3.1-7.6 3.1-5.8 0-10.5-4.6-10.5-10.3V6.3h21V28.2zm4.5-4.9v-9.4h8.2c-.3 4.6-3.7 8.5-8.2 9.4z" })));
};

var SvgCustomer = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60.21 47v-.06A7.49 7.49 0 0 0 51 41.7c-3.41 1-8.09 2.4-11.62 3.42a4.68 4.68 0 0 0-.09-3.12c-.9-2.25-3.41-3.26-5.51-3.26H24a3.94 3.94 0 0 1-2.58-1.2 5.65 5.65 0 0 0-3.84-1.5H9.67a6.34 6.34 0 0 0-6.21 6.46v12.59a6.46 6.46 0 0 0 6.32 6.58h9.51a6.13 6.13 0 0 0 3.42-1.06h.1A18.75 18.75 0 0 0 31.87 63a18.47 18.47 0 0 0 5.56-.84l17.66-5.39h.13A7.74 7.74 0 0 0 60.21 47ZM9.78 57.67a2.46 2.46 0 0 1-2.32-2.58V42.54a2.34 2.34 0 0 1 2.21-2.46h7.9a1.63 1.63 0 0 1 1.14.45 10.64 10.64 0 0 0 .94.75v16.35a2.2 2.2 0 0 1-.36 0ZM53.86 53l-17.62 5.34a14.27 14.27 0 0 1-4.37.66 14.8 14.8 0 0 1-7.16-1.85l-1.06-.57V42.76H33.78a2.08 2.08 0 0 1 1.8.75c.14.36-.12 1.55-2.15 3.48l-1.15 1.11.79 1.37c.81 1.4 1.6 1.17 4.94.22 1.58-.45 3.69-1.06 5.79-1.68 4.18-1.22 8.36-2.47 8.36-2.47a3.53 3.53 0 0 1 4.21 2.53A3.76 3.76 0 0 1 53.86 53ZM50.55 15.61a7.31 7.31 0 1 0-7.31-7.3 7.32 7.32 0 0 0 7.31 7.3Zm0-10.61a3.31 3.31 0 1 1-3.31 3.31A3.31 3.31 0 0 1 50.55 5ZM48.18 37.38h3.3a7.26 7.26 0 0 0 7.25-7.25v-5.69a7.26 7.26 0 0 0-7.25-7.25h-3a7.26 7.26 0 0 0-7.25 7.25v5.66a7.22 7.22 0 0 0 6.95 7.28Zm-2.94-12.94a3.25 3.25 0 0 1 3.25-3.25h3a3.26 3.26 0 0 1 3.25 3.25v5.69a3.26 3.26 0 0 1-3.25 3.25h-3.3a3.2 3.2 0 0 1-2.94-3.32Z" })));
};

var SvgCut = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M46.6 42.1c-1.3 0-2.5.3-3.7.7l-8.1-11.9L52.2 5.3c.7-1 .4-2.4-.6-3.1-1-.7-2.4-.4-3.1.6L32 26.9 15.5 2.7c-.7-1-2.1-1.3-3.1-.6-1 .7-1.3 2.1-.6 3.1l17.5 25.6-8.1 11.9c-1.1-.5-2.4-.7-3.7-.7-5.6 0-10.1 4.5-10.1 10.1s4.5 10.1 10.1 10.1 10.1-4.5 10.1-10.1c0-2.6-1-5-2.7-6.8L32 34.9l7.2 10.5c-1.7 1.8-2.7 4.2-2.7 6.8 0 5.6 4.5 10.1 10.1 10.1s10.1-4.5 10.1-10.1-4.6-10.1-10.1-10.1zM17.4 57.8c-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6 5.6 2.5 5.6 5.6-2.5 5.6-5.6 5.6zm29.2 0c-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6c3.1 0 5.6 2.5 5.6 5.6s-2.6 5.6-5.6 5.6z" })));
};

var SvgDashboard = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 14.5c-16.7 0-30.3 14.7-30.3 32.8 0 1.2 1 2.3 2.3 2.3h56c1.2 0 2.3-1 2.3-2.3 0-18.1-13.6-32.8-30.3-32.8zM31 45l1-3.1 1 3.1h-2zm6.7 0L35 36.6c-.4-1.3-1.6-2.2-3-2.2s-2.6.9-3 2.2L26.3 45h-20C7.4 30.5 18.5 19 32 19s24.6 11.5 25.7 26h-20z" }),
        React__namespace.createElement("path", { d: "M32 24.9c-1.2 0-2.3 1-2.3 2.3v2.5c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3v-2.5c0-1.3-1.1-2.3-2.3-2.3zM46.4 32.3l-1.6 1.6c-.9.9-.9 2.3 0 3.2.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7l1.6-1.6c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.8-3.2.1zM17.7 32.3c-.8-.9-2.3-1-3.2-.2-.9.8-1 2.3-.2 3.2l1.5 1.6c.4.5 1.1.7 1.7.7.5 0 1.1-.2 1.5-.6.9-.8 1-2.3.2-3.2l-1.5-1.5z" })));
};

var SvgDatabase = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 1.8c-11.7 0-20.9 5.5-20.9 12.4v35.6c0 6.9 9.4 12.4 20.8 12.4 11.5 0 20.9-5.6 20.9-12.4V14.2c.1-7-9.1-12.4-20.8-12.4zm0 4.5c9.6 0 16.4 4.2 16.4 7.9 0 3.8-6.7 7.9-16.4 7.9s-16.4-4.2-16.4-7.9c0-3.8 6.8-7.9 16.4-7.9zm0 51.5c-9.4 0-16.3-4.2-16.3-7.9V46c3.8 2.8 9.6 4.5 16.3 4.5 6.7 0 12.6-1.8 16.4-4.5v3.9c0 3.7-7 7.9-16.4 7.9zM32 46c-9.6 0-16.3-4-16.3-7.6v-4.6c3.9 2.8 10 4.5 16.3 4.5 6.6 0 12.5-1.7 16.4-4.5v4.6C48.4 42 41.6 46 32 46zm13.8-15.9c-3.1 2.3-8.2 3.7-13.8 3.7-5.5 0-10.7-1.4-13.8-3.7-1.2-.8-2.5-2.2-2.5-3.9V22c3.8 2.8 9.7 4.6 16.4 4.6 6.7 0 12.6-1.8 16.4-4.6v4.2c-.1 1.6-1.5 3-2.7 3.9z" })));
};

var SvgDelivery = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M58.17 11H26.92a4.83 4.83 0 0 0-4.83 4.83v.44H8.59a2.65 2.65 0 0 0-2.36 1.47l-4.95 10.1A2.65 2.65 0 0 0 1 29v15.65a2 2 0 0 0 2 2h2.71a7.64 7.64 0 0 0 15.06 0h21a7.64 7.64 0 0 0 15.06 0h3.47A2.7 2.7 0 0 0 63 44V15.85A4.83 4.83 0 0 0 58.17 11ZM9.45 20.29h12.64v6.55H6.23ZM13.24 49a3.66 3.66 0 1 1 3.65-3.65A3.66 3.66 0 0 1 13.24 49Zm0-11.31a7.65 7.65 0 0 0-7.16 5H5V30.84h17.09v11.81H20.4a7.65 7.65 0 0 0-7.16-4.98ZM49.29 49a3.66 3.66 0 1 1 3.65-3.65A3.66 3.66 0 0 1 49.29 49ZM59 42.65h-2.55a7.64 7.64 0 0 0-14.33 0h-16v-26.8a.84.84 0 0 1 .83-.83h31.22a.84.84 0 0 1 .83.83Z" })));
};

var SvgDev = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M17.7 25.4c-.6-.4-1.1-.6-1.7-.6h-2.4v14.3H16c.6 0 1.1-.1 1.7-.6.6-.4.7-1 .7-1.8V27c0-.6-.2-1.2-.7-1.6zM56.8 1.1H7.2C3.8 1.1 1 3.9 1 7.3V57c0 3.1 2.8 5.9 6.2 5.9H57c3.4 0 6-2.7 6-6V7.3c-.1-3.4-2.8-6.2-6.2-6.2zM22.4 36.8c0 2.7-1.7 6.6-6.6 6.6H9.4V20.5H16c4.9 0 6.6 3.9 6.6 6.6l-.2 9.7zm13.7-12.1h-7.3V30h4.5v4.1h-4.5v5.3h7.3v4.1h-8.6c-1.5 0-2.8-1.1-3-2.7V23.4c0-1.5 1.1-2.8 2.7-3h8.9v4.3zm14.4 15.7c-1.8 4.2-5.1 3.4-6.6 0l-5.3-20h4.6l4.1 15.7 4.1-15.6h4.5l-5.4 19.9z" })));
};

var SvgDialogflow = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "m56.972 15.278-24.105 13.92-24.119-13.92V43.12l12.06 6.955V64l36.164-20.88V15.278Z" }),
        React__namespace.createElement("path", { fill: "#000", d: "M32.867 27.842 8.748 13.922 32.867 0l24.105 13.921-24.105 13.921Z" }),
        React__namespace.createElement("path", { fill: "#000", d: "M32.44 27.418 8.9 13.83l-.152.091 24.119 13.921 24.105-13.92-.566-.337-23.967 13.833Z" }),
        React__namespace.createElement("path", { fill: "#000", d: "M32.867 28.015v-.173L8.9 14.002l-.153.092 24.119 13.921Z" })));
};

var SvgDiamondAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M61.9 24.2 53.2 4.3c-.4-1-1.2-1.7-2.1-2.1-.2-.1-.3-.2-.5-.3-.3-.1-.6-.1-1-.1H14.7c-1.6 0-3.1 1-3.8 2.5L2.1 24.2c-.6 1.4-.4 3 .5 4.2l26.1 32.2c.7.9 1.7 1.5 2.8 1.6.2 0 .3.1.5.1 1.3 0 2.5-.6 3.3-1.6l26.1-32.1.1-.1c.8-1.3 1-2.9.4-4.3zm-4.7.5H45.3l5.1-15.4 6.8 15.4zm-15.4-3.8L35 6.2h11.7l-4.9 14.7zM32 10.5l6.6 14.2H25.4L32 10.5zM22 21.2l-5.6-15H29l-7 15zm17.2 8L32 52.4l-7.1-23.2h14.3zM27 51.4 9 29.2h11.2L27 51.4zm16.9-22.2H55L37 51.3l6.9-22.1zM13.1 10.3l5.5 14.3H6.8l6.3-14.3z" })));
};

var SvgDiamondShape = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 62.2c-1.3 0-2.5-.6-3.3-1.7L5.1 28.4c-.9-1.2-1.1-2.8-.5-4.2l8.7-19.9c.7-1.5 2.2-2.5 3.8-2.5h29.6c1.6 0 3.1 1 3.8 2.5l8.7 19.9c.6 1.4.4 3-.5 4.2L35.3 60.5c-.8 1.1-2 1.7-3.3 1.7zM8.8 25.9 32 57.5l23.2-31.6-8.6-19.7H17.4L8.8 25.9z" })));
};

var SvgDigitalocean = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M32.804 49.205V60c18.32 0 32.608-17.717 26.607-36.926-2.604-8.382-9.303-15.05-17.685-17.685C22.516-.61 4.8 13.676 4.8 31.996h10.827c0-11.494 11.398-20.384 23.495-16.002 4.477 1.619 8.065 5.207 9.684 9.652 4.41 12.086-4.492 23.474-15.97 23.495V38.378H22.009v10.827h10.795Zm-10.795 8.287h-8.287v-8.287h8.287v8.287Zm-15.24-8.287h6.953V42.25H6.769v6.954Z", clipRule: "evenodd" })));
};

var SvgDinersClub = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M12.88 24H9.1c-4.3 0-7.87 3.11-8.09 7.65-.01.15-.01.3-.01.45 0 .14 0 .27.01.41.22 4.19 3.79 7.57 8.09 7.55h3.78c4.39.02 8.4-3.58 8.4-7.96 0-4.79-4.01-8.1-8.4-8.1ZM9.12 39.37a7.35 7.35 0 0 1-7.35-7.35c0-4.06 3.29-7.36 7.35-7.36s7.35 3.29 7.35 7.36-3.29 7.35-7.35 7.35Z", clipRule: "evenodd" }),
        React__namespace.createElement("path", { fill: "#000", d: "M36.15 30.08c-.02.08-.02.2 0 .49.05.8.57 1.46 1.24 1.46.47 0 .83-.25 1.14-.57l.12.12c-.39.52-.87.95-1.56.95-1.34 0-1.61-1.3-1.61-1.84 0-1.66 1.12-2.15 1.71-2.15.68 0 1.42.43 1.43 1.33v.15l-.08.05h-2.37l-.02.01Zm1.5-.27c.21 0 .24-.11.24-.21 0-.43-.26-.78-.74-.78-.51 0-.87.38-.97.99h1.47ZM38.801 32.19h.23c.24 0 .4 0 .4-.28v-2.37c0-.26-.31-.31-.44-.38v-.13c.62-.26.96-.48 1.03-.48.05 0 .07.03.07.11v.76h.02c.21-.33.57-.87 1.08-.87.21 0 .48.14.48.45 0 .23-.16.43-.4.43-.26 0-.26-.2-.56-.2-.14 0-.62.19-.62.7v1.98c0 .28.17.28.41.28h.47v.22c-.46 0-.82-.02-1.18-.02s-.7 0-1.01.02v-.22h.02ZM42.048 31.24c.11.56.45 1.03 1.06 1.03.5 0 .68-.3.68-.6 0-1-1.84-.68-1.84-2.04 0-.47.38-1.08 1.31-1.08.27 0 .63.08.96.25l.06.86h-.19c-.08-.53-.38-.84-.92-.84-.34 0-.66.19-.66.56 0 .99 1.96.68 1.96 2.01 0 .56-.45 1.15-1.45 1.15-.34 0-.73-.12-1.03-.29l-.09-.97.15-.04ZM52.41 32.19h.16c.24 0 .41 0 .41-.28v-4.7c0-.55-.13-.57-.45-.66v-.14c.34-.11.69-.26.87-.36.09-.05.16-.09.19-.09.05 0 .07.05.07.12v5.83c0 .28.19.28.42.28h.14v.22c-.29 0-.58-.02-.89-.02-.31 0-.61 0-.92.02v-.22ZM57.83 31.95c0 .15.09.16.24.16h.34v.18c-.36.03-1.06.21-1.22.26l-.04-.03v-.68c-.51.41-.9.71-1.5.71-.46 0-.93-.3-.93-1v-2.16c0-.22-.03-.43-.51-.47v-.16c.3 0 .98-.06 1.09-.06.09 0 .09.06.09.24v2.18c0 .25 0 .98.73.98.29 0 .67-.22 1.02-.51v-2.27c0-.17-.41-.26-.71-.35v-.15c.76-.05 1.23-.12 1.32-.12.07 0 .07.06.07.15v3.12l.01-.02ZM59.51 29.16c.34-.29.79-.61 1.26-.61.98 0 1.57.85 1.57 1.77 0 1.11-.81 2.21-2.02 2.21-.62 0-.95-.2-1.17-.3l-.25.19-.18-.09c.07-.5.12-.99.12-1.5v-3.62c0-.55-.13-.57-.45-.66v-.14c.34-.11.69-.26.87-.36.09-.05.16-.09.19-.09.05 0 .07.05.07.12v3.08h-.01Zm0 2.3c0 .32.3.86.87.86.9 0 1.28-.89 1.28-1.64 0-.91-.69-1.67-1.35-1.67-.31 0-.57.2-.8.4v2.05ZM47.67 34.11v.02c-.02.13-.04.25-.06.37-.01.13-.01.25-.01.38l-.16.06v-.02c-.01-.18-.03-.43-.32-.43h-.74v2.43c.01.35.15.37.36.38h.11v.17h-.02c-.18 0-.5-.01-.75-.01-.27 0-.59.01-.77.01h-.02v-.17h.1c.26-.01.36-.01.36-.37v-2.44h-.73c-.34.01-.33.07-.41.41l-.18.01v-.02c.02-.13.05-.26.06-.39.02-.13.03-.26.03-.39v-.02h.14v.02c.04.11.12.11.24.11h.02l2.38.01c.12-.01.22-.01.22-.13v-.02h.03l.13.02-.01.01ZM51.048 34.17c-.97 0-1.72.75-1.72 1.71s.76 1.67 1.74 1.67 1.76-.71 1.76-1.78c0-.99-.79-1.6-1.78-1.6Zm.07 3.14c-.73 0-1.1-.77-1.1-1.59 0-.61.23-1.31 1.02-1.31s1.11.8 1.11 1.46c-.01.67-.16 1.44-1.03 1.44ZM62.52 34.13c.28 0 .48.21.48.49s-.21.48-.48.48-.48-.21-.48-.48.21-.49.48-.49Zm0 .88c.22 0 .38-.18.38-.39 0-.21-.16-.4-.38-.4s-.38.19-.38.4c0 .21.17.39.38.39Zm-.24-.14v-.02c.06 0 .07 0 .07-.04v-.36c0-.05 0-.07-.07-.07v-.02h.25c.09 0 .16.04.16.13 0 .07-.05.13-.11.15l.08.11c.04.05.08.1.11.11v.02h-.09s-.08-.1-.17-.22h-.05v.16s.01.03.07.04v.02h-.23l-.02-.01Zm.16-.26h.06c.06 0 .09-.05.09-.12 0-.07-.05-.1-.09-.1h-.05v.23l-.01-.01ZM35.51 32.19v.22c-.3 0-.6-.01-.9-.01-.3 0-.61 0-.91.01v-.22h.15c.24 0 .41 0 .41-.28v-2.18c0-.49-.3-.72-.78-.72-.27 0-.7.22-.98.4v2.5c0 .28.18.28.42.28h.15v.22c-.29 0-.59-.01-.89-.01-.3 0-.61 0-.91.01v-.22h.15c.23 0 .4 0 .4-.28v-2.23c0-.32-.09-.4-.49-.56v-.16c.37-.12.71-.23 1.12-.41.02 0 .05.02.05.09v.55c.48-.35.89-.64 1.46-.64.72 0 .97.53.97 1.18v2.18c0 .28.19.28.42.28h.16ZM25.538 26.52c-.63 0-1.11.01-1.47.01-.33 0-.66 0-.99-.01v.22c.38 0 .77-.05.77.71v4.1c-.02.58-.27.59-.77.64v.22c.38 0 .75-.01 1.13-.01.4 0 .79.01 1.22.01 3 0 3.49-2.1 3.49-2.94 0-1.49-1.2-2.95-3.38-2.95Zm.02 5.62c-.41 0-.88-.07-.88-.72v-4.6c.16-.01.31-.03.66-.03 1.63 0 2.65 1.14 2.65 2.72 0 1.26-.6 2.63-2.43 2.63ZM30.87 32.19h.15v.22c-.29 0-.59-.01-.89-.01-.3 0-.61.01-.92.01v-.22h.16c.24 0 .41 0 .41-.27v-2.29c0-.38-.13-.43-.44-.6v-.13c.39-.12.87-.28.9-.3.06-.04.11-.05.15-.05.05 0 .06.05.06.12v3.25c0 .27.19.27.42.27ZM29.7 26.83c0-.21.2-.41.41-.41.21 0 .42.18.42.41 0 .23-.19.42-.42.42a.42.42 0 0 1-.41-.42Z" }),
        React__namespace.createElement("path", { fill: "#000", d: "M36.15 30.08c-.02.08-.02.2 0 .49.05.8.57 1.46 1.24 1.46.47 0 .83-.25 1.14-.57l.12.12c-.39.52-.87.95-1.56.95-1.34 0-1.61-1.3-1.61-1.84 0-1.66 1.12-2.15 1.71-2.15.68 0 1.42.43 1.43 1.33v.15l-.08.05h-2.37l-.02.01Zm1.5-.27c.21 0 .24-.11.24-.21 0-.43-.26-.78-.74-.78-.51 0-.87.38-.97.99h1.47ZM38.801 32.19h.23c.24 0 .4 0 .4-.28v-2.37c0-.26-.31-.31-.44-.38v-.13c.62-.26.96-.48 1.03-.48.05 0 .07.03.07.11v.76h.02c.21-.33.57-.87 1.08-.87.21 0 .48.14.48.45 0 .23-.16.43-.4.43-.26 0-.26-.2-.56-.2-.14 0-.62.19-.62.7v1.98c0 .28.17.28.41.28h.47v.22c-.46 0-.82-.02-1.18-.02s-.7 0-1.01.02v-.22h.02ZM42.048 31.24c.11.56.45 1.03 1.06 1.03.5 0 .68-.3.68-.6 0-1-1.84-.68-1.84-2.04 0-.47.38-1.08 1.31-1.08.27 0 .63.08.96.25l.06.86h-.19c-.08-.53-.38-.84-.92-.84-.34 0-.66.19-.66.56 0 .99 1.96.68 1.96 2.01 0 .56-.45 1.15-1.45 1.15-.34 0-.73-.12-1.03-.29l-.09-.97.15-.04ZM52.11 30.86l-.19 1.23c-.36.22-1.31.45-1.87.45-1.98 0-3.23-1.28-3.23-3.18 0-1.73 1.55-2.97 3.21-2.97.68 0 1.34.22 1.99.45l.08 1.2h-.21c-.16-.98-.86-1.38-1.81-1.38-.95 0-2.38.65-2.38 2.68 0 1.7 1.22 2.93 2.52 2.93.84 0 1.53-.58 1.7-1.46l.19.05ZM52.41 32.19h.16c.24 0 .41 0 .41-.28v-4.7c0-.55-.13-.57-.45-.66v-.14c.34-.11.69-.26.87-.36.09-.05.16-.09.19-.09.05 0 .07.05.07.12v5.83c0 .28.19.28.42.28h.14v.22c-.29 0-.58-.02-.89-.02-.31 0-.61 0-.92.02v-.22ZM57.83 31.95c0 .15.09.16.24.16h.34v.18c-.36.03-1.06.21-1.22.26l-.04-.03v-.68c-.51.41-.9.71-1.5.71-.46 0-.93-.3-.93-1v-2.16c0-.22-.03-.43-.51-.47v-.16c.3 0 .98-.06 1.09-.06.09 0 .09.06.09.24v2.18c0 .25 0 .98.73.98.29 0 .67-.22 1.02-.51v-2.27c0-.17-.41-.26-.71-.35v-.15c.76-.05 1.23-.12 1.32-.12.07 0 .07.06.07.15v3.12l.01-.02ZM59.51 29.16c.34-.29.79-.61 1.26-.61.98 0 1.57.85 1.57 1.77 0 1.11-.81 2.21-2.02 2.21-.62 0-.95-.2-1.17-.3l-.25.19-.18-.09c.07-.5.12-.99.12-1.5v-3.62c0-.55-.13-.57-.45-.66v-.14c.34-.11.69-.26.87-.36.09-.05.16-.09.19-.09.05 0 .07.05.07.12v3.08h-.01Zm0 2.3c0 .32.3.86.87.86.9 0 1.28-.89 1.28-1.64 0-.91-.69-1.67-1.35-1.67-.31 0-.57.2-.8.4v2.05ZM31.56 34.09l.13.02v.02c-.02.13-.04.25-.05.37-.01.13-.01.25-.01.38h-.01l-.17.06v-.02c-.01-.18-.03-.43-.32-.43h-.73v2.43c0 .35.14.37.36.38h.1v.17h-.01c-.19 0-.51-.01-.75-.01-.28 0-.6.01-.78.01h-.02v-.17h.11c.25-.01.35-.01.36-.37v-2.44h-.74c-.34.01-.33.07-.4.41h-.01l-.17.01v-.02c.02-.13.04-.26.05-.39.02-.13.03-.26.03-.39v-.02h.15v.02c.03.11.12.11.23.11h2.4c.13 0 .22 0 .23-.12v-.02h.02v.01ZM24.47 34.24h.02v.17h-.09c-.1.01-.2.01-.26.07-.04.04-.06.09-.06.18v2.4c0 .23.16.24.32.25h.09v.17h-.02c-.22 0-.5-.01-.73-.01-.23 0-.49.01-.67.01h-.02v-.17h.08c.17-.01.32-.02.32-.25v-2.4c0-.09-.02-.14-.06-.18-.06-.06-.15-.06-.26-.07h-.08v-.17h.02c.18 0 .45.01.68.01.23 0 .5-.01.72-.01ZM34.459 36.72v.02c-.07.24-.12.48-.16.73h-.01v.01c-.3 0-.83-.02-1.24-.02-.41 0-.96.02-1.22.02h-.02v-.17h.08c.17-.01.32-.02.32-.25v-2.4c0-.09-.02-.14-.06-.18-.06-.06-.15-.06-.26-.07h-.08v-.17h.02c.28 0 .76.01 1.14.01.38 0 .86-.01 1.18-.01h.02v.25c0 .16 0 .34.02.47l-.02.02-.16.04V35c-.03-.3-.07-.52-.54-.52h-.62v1.16h.53c.26 0 .31-.14.34-.38v-.02h.18v.02c-.01.18-.02.36-.02.54 0 .17.01.34.02.52v.02h-.02l-.16.03v-.02c-.03-.28-.03-.44-.34-.44h-.53v1.05c0 .28.24.28.54.28.55 0 .78-.03.91-.54v-.02h.03l.15.04h-.02ZM28.351 34.24h.02v.17h-.09c-.19.01-.39.02-.39.57v2.09c0 .16 0 .32.02.46v.02h-.2l-2.34-2.6v1.84c.01.4.07.51.42.52h.09v.17h-.02c-.2 0-.39-.01-.59-.01-.21 0-.42.01-.62.01h-.03v-.17h.09c.3-.01.39-.2.39-.57v-1.93c0-.25-.2-.4-.39-.4h-.09v-.17h.03c.17 0 .35.01.52.01.14 0 .27-.01.43-.01l2.02 2.28v-1.69c0-.37-.25-.41-.38-.42h-.12v-.17h.02c.21 0 .43.01.64.01.19 0 .38-.01.57-.01ZM37.781 37.31c-.22-.03-.3-.08-.43-.27l-.77-1.16c.35-.14.63-.4.63-.82 0-.42-.21-.63-.51-.73h-.01c-.18-.07-.39-.09-.6-.09-.24 0-.46.01-.74.01-.28 0-.56-.01-.71-.01h-.02v.17h.1c.15.01.31.01.31.33v2.34c0 .15-.14.23-.31.23h-.1v.17h.02c.23 0 .45-.01.67-.01.26 0 .52.01.79.01h.02v-.17h-.1c-.22-.01-.36-.01-.36-.35V36h.27c.3.52.6 1.01.95 1.48.16 0 .31-.01.45-.01.15 0 .3.01.45.01h.02v-.17h-.02Zm-1.92-1.52h-.2v-1.33c.06 0 .12-.02.24-.02.4 0 .65.25.65.65 0 .54-.23.7-.69.7ZM41.638 34.24v.17h-.09c-.19.01-.38.03-.39.57v2.09c0 .16.01.32.03.46v.02h-.21l-2.33-2.6v1.84c0 .4.06.51.41.52h.1v.17h-.02c-.2 0-.4-.01-.6-.01-.2 0-.41.01-.62.01h-.02v-.17h.08c.31 0 .39-.2.4-.57v-1.93c0-.25-.2-.4-.4-.4h-.08v-.17h.02c.17 0 .35.01.53.01.13 0 .27-.01.42-.01l2.02 2.28v-1.69c0-.37-.25-.41-.38-.42h-.12v-.17h.02c.22 0 .43.01.64.01.19 0 .38-.01.57-.01h.02ZM44.778 37.31c-.15 0-.23-.05-.29-.18-.06-.13-.11-.3-.16-.46l-.85-2.41-.04-.11c-.02-.03-.04-.03-.05-.03-.02 0-.04.01-.05.01-.09.06-.27.15-.42.2-.03.18-.12.41-.18.58l-.73 2.11c-.07.19-.21.29-.38.29h-.05v.18h.02c.16-.01.33-.02.49-.02.19 0 .38.01.56.01h.02v-.17h-.07c-.15 0-.32-.03-.33-.14 0-.08.06-.2.11-.36l.14-.46h1.01l.18.52c.05.14.09.27.09.32 0 .09-.16.12-.27.12h-.07v.18h.02c.24-.01.47-.02.69-.02.22 0 .43.01.64.01h.02v-.17h-.05Zm-2.16-1.26.4-1.23.4 1.23h-.8ZM48.83 34.66v2.4c0 .23.15.24.32.25h.08v.17h-.01c-.23 0-.5-.02-.73-.02-.23 0-.5.02-.68.02h-.02v-.17h.09c.16-.01.32-.02.32-.25v-2.4c0-.09-.02-.14-.06-.18-.06-.06-.16-.06-.26-.07h-.09v-.17h.02c.18 0 .46.01.68.01.22 0 .51-.01.73-.01h.01v.17h-.08c-.11.01-.2.01-.26.07-.04.04-.06.09-.06.18ZM56.65 34.24v.17h-.09c-.19.01-.39.03-.39.57v2.09c0 .16 0 .32.02.46v.02h-.2l-2.34-2.6v1.84c0 .4.07.51.42.52h.09v.17h-.02c-.19 0-.39-.01-.59-.01-.2 0-.42.01-.62.01h-.02v-.17h.08c.3-.01.39-.2.39-.57v-1.93c0-.25-.2-.4-.39-.4h-.08v-.17h.02c.17 0 .35.01.52.01.14 0 .27-.01.43-.01l2.02 2.28v-1.69c0-.37-.25-.41-.38-.42h-.12v-.17h.02c.21 0 .43.01.64.01.19 0 .38-.01.57-.01h.02ZM59.79 37.31c-.15-.01-.23-.05-.29-.18-.06-.13-.11-.3-.17-.46l-.84-2.41s-.03-.08-.05-.11c-.01-.03-.03-.03-.05-.03-.02 0-.03.01-.04.01-.09.06-.27.15-.42.2-.04.18-.12.41-.18.58l-.74 2.11a.39.39 0 0 1-.38.29h-.04v.17h.02c.16 0 .33-.01.49-.01.18 0 .37.01.56.01h.02v-.17h-.07c-.16 0-.33-.03-.33-.15 0-.07.06-.19.1-.35l.14-.46h1.02l.17.52c.06.14.1.27.1.32 0 .09-.16.12-.27.12h-.07v.17h.02c.24 0 .47-.01.69-.01.22 0 .43.01.63.01h.02v-.17h-.04Zm-2.16-1.26.4-1.23.4 1.23h-.8ZM62.59 36.66v.03c-.05.26-.11.52-.17.78l-.02.01c-.41 0-.81-.01-1.21-.01-.4 0-.81.01-1.22.01h-.02v-.17h.09c.16-.01.32-.02.32-.29v-2.37c0-.22-.16-.23-.32-.24h-.09v-.17h.02c.25 0 .49.01.73.01s.46-.01.7-.01h.02v.17h-.14c-.18.01-.29 0-.29.23v2.37c0 .17.11.22.26.24.08.01.16.01.25.01.11 0 .23-.01.35-.02.19-.02.35-.13.43-.24.07-.1.11-.22.14-.32v-.02h.17ZM62.52 34.13c.28 0 .48.21.48.49s-.21.48-.48.48-.48-.21-.48-.48.21-.49.48-.49Zm0 .88c.22 0 .38-.18.38-.39 0-.21-.16-.4-.38-.4s-.38.19-.38.4c0 .21.17.39.38.39Zm-.24-.14v-.02c.06 0 .07 0 .07-.04v-.36c0-.05 0-.07-.07-.07v-.02h.25c.09 0 .16.04.16.13 0 .07-.05.13-.11.15l.08.11c.04.05.08.1.11.11v.02h-.09s-.08-.1-.17-.22h-.05v.16s.01.03.07.04v.02h-.23l-.02-.01Zm.16-.26h.06c.06 0 .09-.05.09-.12 0-.07-.05-.1-.09-.1h-.05v.23l-.01-.01Z" }),
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M13.78 32.02c0 1.98-1.24 3.67-2.99 4.35v-8.7c1.75.67 2.99 2.36 2.99 4.35Z", clipRule: "evenodd" }),
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M12.882 24h-3.78c-4.3 0-7.87 3.11-8.09 7.65v.86c.22 4.19 3.79 7.57 8.09 7.55h3.78c4.39.02 8.4-3.58 8.4-7.96 0-4.79-4.01-8.1-8.4-8.1Zm-3.76 15.37a7.35 7.35 0 0 1-7.35-7.35c0-4.06 3.29-7.36 7.35-7.36s7.35 3.29 7.35 7.36-3.29 7.35-7.35 7.35Z", clipRule: "evenodd" }),
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M7.45 27.67v8.69a4.648 4.648 0 0 1-2.99-4.34c0-1.98 1.24-3.68 2.99-4.35Z", clipRule: "evenodd" })));
};

var SvgDinner = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M45.7 1.8h-3.2c-2 0-3.6 1.6-3.6 3.6v51.9c0 2.8 2.2 5 5 5h2.8c2.8 0 5-2.2 5-5v-20h1.5c2 0 3.6-1.6 3.6-3.6V12.8c-.1-6.1-5.1-11-11.1-11zm1 56h-2.8c-.3 0-.5-.2-.5-.5v-20h3.8v19.9c0 .3-.3.6-.5.6zm5.6-25h-8.9V6.3h2.3c3.6 0 6.6 3 6.6 6.6v19.9zM27.1 2c-1.2 0-2.3 1-2.3 2.3v14.1h-4.3V4.2c0-1.2-1-2.3-2.3-2.3S16 3 16 4.2v14.1h-4.3V4.2c0-1.2-1-2.3-2.3-2.3S7.2 3 7.2 4.2v21.6c0 2.9 2 5.3 4.8 6v25.5c0 2.8 2.2 5 5 5h2.7c2.8 0 5-2.2 5-5V31.8c2.7-.6 4.7-3.1 4.7-5.9V4.2C29.3 3 28.3 2 27.1 2zm-7.5 55.8h-2.7c-.3 0-.5-.2-.5-.5V31.9h3.7v25.3c0 .3-.2.6-.5.6zm3.6-30.4h-9.9c-.9 0-1.6-.7-1.6-1.6v-3h13.1v3c0 .9-.7 1.6-1.6 1.6z" })));
};

var SvgDirectionAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M45.8 29.9h-9.1v-5.8H41c1 0 2-.4 2.7-1.2l3.4-3.7c1.2-1.4 1.2-3.5 0-4.8l-3.4-3.7C43 9.9 42 9.5 41 9.5h-4.3V4c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v5.4H18.2c-2 0-3.6 1.6-3.6 3.6v7.5c0 2 1.6 3.6 3.6 3.6h14.1v5.8H23c-1 0-2 .4-2.7 1.2l-3.4 3.7c-1.2 1.4-1.2 3.5 0 4.8l3.4 3.7c.7.8 1.7 1.2 2.7 1.2h9.3V60c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V44.6h9.1c2 0 3.6-1.6 3.6-3.6v-7.5c0-2-1.6-3.6-3.6-3.6zm-26.7-16h21.6l2.6 2.8-2.6 2.8H19.1v-5.6zm25.8 26.2H23.3l-2.6-2.8 2.6-2.8h21.6v5.6z" })));
};

var SvgDirectionLtr = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M21.7 25.9h1.1v13.8c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V6.2h7.5v33.5c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V6.2h13c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H21.6c-6.7 0-12.1 5.2-12.1 12 0 6.7 5.5 12.1 12.2 12.1zm0-19.7h1.1v15.2h-1.1c-4.3 0-7.6-3.4-7.6-7.6-.1-4.2 3.3-7.6 7.6-7.6zM46.7 44.9c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l2.9 2.9H13.7c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h32.6l-2.9 2.9c-.9.9-.9 2.3 0 3.2.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7l6.6-6.7c.9-.9.9-2.3 0-3.2l-6.5-6.6z" })));
};

var SvgDirectionRtl = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M21.7 25.9h1.1v13.8c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V6.2h7.5v33.5c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V6.2h13c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H21.6c-6.7 0-12.1 5.2-12.1 12 0 6.7 5.5 12.1 12.2 12.1zm0-19.7h1.1v15.2h-1.1c-4.3 0-7.6-3.4-7.6-7.6-.1-4.2 3.3-7.6 7.6-7.6zM51.7 51H19.1l2.9-2.9c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0l-6.6 6.7c-.9.9-.9 2.3 0 3.2l6.6 6.7c.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.6.9-.9.9-2.3 0-3.2l-2.9-2.9h32.6c1.2 0 2.2-1 2.2-2.2s-1-2.3-2.2-2.3z" })));
};

var SvgDirection = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m58.4 17.5-4.8-6.2c-.9-1.2-2.4-1.9-3.9-1.9H26.9V4c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v5.4h-13c-2.7 0-4.9 2.2-4.9 4.9v12.4c0 2.7 2.2 4.9 4.9 4.9h12.9V60c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V31.7h22.7c1.5 0 3-.7 3.9-1.9l4.8-6.2c1.6-1.8 1.6-4.3.2-6.1zm-3.6 3.3L50 27c-.1.1-.2.2-.4.2H9.5c-.2 0-.4-.2-.4-.4V14.3c0-.2.2-.4.4-.4h40.1c.1 0 .3.1.4.2l4.8 6.2c.1.1.1.4 0 .5z" })));
};

var SvgDiscordAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M54.214 11.274A52.124 52.124 0 0 0 41.01 7.125a38.723 38.723 0 0 0-1.691 3.512c-4.923-.74-9.8-.74-14.633 0a37.561 37.561 0 0 0-1.712-3.512 51.953 51.953 0 0 0-13.213 4.16C1.404 23.911-.861 36.224.27 48.363c5.543 4.139 10.914 6.653 16.195 8.298a40.27 40.27 0 0 0 3.468-5.712 34.105 34.105 0 0 1-5.462-2.658c.458-.34.906-.694 1.34-1.06 10.53 4.926 21.972 4.926 32.377 0 .438.366.886.72 1.339 1.06a34.023 34.023 0 0 1-5.472 2.663 40.088 40.088 0 0 0 3.468 5.712c5.286-1.645 10.662-4.16 16.204-8.303 1.329-14.072-2.27-26.272-9.514-37.09ZM21.368 40.9c-3.16 0-5.753-2.952-5.753-6.545 0-3.594 2.537-6.55 5.754-6.55 3.216 0 5.808 2.95 5.753 6.55.005 3.593-2.537 6.545-5.753 6.545Zm21.263 0c-3.16 0-5.753-2.952-5.753-6.545 0-3.594 2.537-6.55 5.753-6.55 3.217 0 5.81 2.95 5.754 6.55 0 3.593-2.537 6.545-5.754 6.545Z" })));
};

var SvgDiscord = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M26.4 27.1c-1.8 0-3.1 1.6-3.1 3.4s1.4 3.4 3.1 3.4c1.8 0 3.1-1.5 3.1-3.4.1-1.9-1.3-3.4-3.1-3.4z" }),
        React__namespace.createElement("ellipse", { cx: 37.6, cy: 30.4, rx: 3.1, ry: 3.4 }),
        React__namespace.createElement("path", { d: "M52.7 1H11.3C7.8 1 4.9 3.8 4.9 7.3v41.9c0 3.5 2.8 6.3 6.3 6.3h35.1l-1.7-5.6 3.9 3.7 3.8 3.5 6.6 5.9V7.3c.3-3.5-2.7-6.3-6.2-6.3zm-12 40.4s-1.1-1.3-2.1-2.5c4.1-1.1 5.6-3.7 5.6-3.7-1.3.8-2.5 1.4-3.5 1.8-1.5.7-3.1 1.1-4.5 1.3-3 .6-5.6.4-8 0-1.8-.3-3.2-.8-4.5-1.3-.7-.3-1.6-.6-2.3-1-.1 0-.1-.1-.3-.1 0 0-.1 0-.1-.1-.6-.3-.8-.6-.8-.6s1.6 2.5 5.5 3.7c-1 1.1-2.1 2.5-2.1 2.5-6.9-.3-9.4-4.6-9.4-4.6 0-10 4.5-18 4.5-18 4.5-3.4 8.7-3.2 8.7-3.2l.3.4c-5.7 1.5-8.2 4-8.2 4s.7-.4 1.8-.8c3.4-1.4 5.9-1.8 7-2h.6c1.8-.3 4.1-.3 6.2 0 3 .3 6.1 1.3 9.3 3 0 0-2.4-2.3-7.8-3.9l.4-.6s4.2-.1 8.7 3.2c0 0 4.5 8 4.5 18 .1-.1-2.6 4.4-9.5 4.5z" })));
};

var SvgDiscover = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M63 29.75v18.367H11.676C44.875 42.441 63 29.75 63 29.75ZM19.96 28.811v3.323l-2.413-2.5v2.316h-.406v-3.313s2.305 2.392 2.412 2.509V28.81h.407ZM21.973 29.198v.843h1.23v.378h-1.23v1.143h1.26v.387h-1.667V28.81h1.667v.388h-1.26ZM26.43 28.81v.388h-.756v2.751h-.416v-2.751h-.746v-.387h1.918ZM31.93 28.81l-1.23 3.353s-.94-2.335-.997-2.47c-.058.135-1.008 2.47-1.008 2.47l-1.23-3.352h.445l.795 2.247.969-2.383.029-.077.998 2.46.794-2.247h.436ZM34.733 28.762c-.901 0-1.647.726-1.647 1.617 0 .892.746 1.618 1.647 1.618.9 0 1.647-.726 1.647-1.617 0-.892-.737-1.618-1.647-1.618Zm0 2.857a1.24 1.24 0 0 1 0-2.48c.678 0 1.24.562 1.24 1.24 0 .679-.552 1.24-1.24 1.24ZM38.704 30.554c.455-.058.746-.387.746-.862 0-.59-.378-.881-1.163-.881h-.474v3.138h.406v-1.346h.059l.9 1.327.456.02h.058s-.94-1.318-.988-1.396Zm-.485-.32v-1.036h.068c.397 0 .756.039.756.514 0 .474-.378.523-.746.523h-.078ZM43.345 31.95h-.572s-1.21-1.347-1.25-1.396h-.01l-.038.039v1.356h-.416V28.81h.416v1.27l1.27-1.27h.551l-1.482 1.463c.039.049 1.53 1.676 1.53 1.676ZM59.192 17.254a.705.705 0 0 0-.708.707c0 .388.32.707.708.707.387 0 .707-.32.707-.707a.711.711 0 0 0-.707-.707Zm0 1.288a.581.581 0 0 1-.572-.58.567.567 0 1 1 1.133 0 .58.58 0 0 1-.561.58Z", clipRule: "evenodd" }),
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M59.288 18.037a.23.23 0 0 0 .174-.232c0-.155-.106-.242-.31-.242h-.261v.804h.193v-.31l.233.31h.242l-.271-.33Zm-.165-.116h-.039v-.213h.04c.096 0 .144.039.144.106 0 .068-.048.107-.145.107ZM56.084 22.436c1.356-.271 2.112-1.201 2.112-2.606 0-1.715-1.191-2.703-3.274-2.703h-2.684v9.174h1.812v-3.69h.232l2.5 3.69H59l-2.916-3.865Zm-1.511-1.085h-.523v-2.78h.552c1.124 0 1.734.464 1.734 1.356 0 .89-.61 1.424-1.763 1.424ZM47.732 18.677v2.034h3.187v1.56h-3.187v2.48h3.313v1.55H45.93v-9.174h5.115v1.55h-3.313ZM45.106 17.127l-3.991 9.407h-.969l-3.923-9.407h1.966l2.47 6.161 2.5-6.161h1.947Z", clipRule: "evenodd" }),
        React__namespace.createElement("path", { fill: "#000", d: "M34.967 25.213a4.815 4.815 0 1 0-6.808-6.809 4.815 4.815 0 0 0 6.808 6.81Z" }),
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M3.654 17.127H1v9.174h2.635c1.405 0 2.412-.33 3.303-1.056a4.607 4.607 0 0 0 1.676-3.526c0-2.713-2.034-4.592-4.96-4.592Zm2.103 6.888c-.562.513-1.299.736-2.47.736h-.485v-6.074h.484c1.172 0 1.88.213 2.47.746.63.552.998 1.405.998 2.286 0 .882-.368 1.763-.997 2.306Z", clipRule: "evenodd" }),
        React__namespace.createElement("path", { fill: "#000", d: "M11.251 17.127H9.45v9.174h1.802v-9.174Z" }),
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M18.322 23.512c0 1.773-1.308 3.012-3.188 3.012-1.375 0-2.373-.542-3.197-1.743l1.163-1.124c.417.804 1.104 1.23 1.967 1.23.804 0 1.404-.552 1.404-1.298 0-.387-.184-.707-.542-.95-.184-.106-.543-.27-1.25-.522-1.695-.6-2.277-1.25-2.277-2.519 0-1.492 1.25-2.625 2.887-2.625a4.13 4.13 0 0 1 2.723 1.017l-.95 1.22c-.465-.513-.91-.736-1.453-.736-.775 0-1.347.436-1.347 1.017 0 .494.32.756 1.405 1.153 2.054.746 2.655 1.405 2.655 2.868ZM20.755 21.71c0 1.85 1.288 3.157 3.11 3.157.813 0 1.452-.28 2.179-.997v2.102c-.823.387-1.492.533-2.267.533-2.742 0-4.883-2.083-4.883-4.786 0-2.703 2.19-4.805 4.922-4.805.785 0 1.434.165 2.228.562v2.112c-.756-.727-1.405-1.037-2.267-1.037-1.695 0-3.023 1.395-3.023 3.158Z", clipRule: "evenodd" })));
};

var SvgDisplayAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56 3.8H8c-3.4 0-6.3 2.8-6.3 6.3v30.2c0 3.4 2.8 6.3 6.3 6.3h15.7l-2.5 9.2h-4.5c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h30.5c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-4.5l-2.5-9.2H56c3.4 0 6.3-2.8 6.3-6.3V10.1c0-3.5-2.9-6.3-6.3-6.3zM38.2 55.7H25.8l2.5-9.2h7.3l2.6 9.2zm19.6-15.5c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8V10.1c0-1 .8-1.8 1.8-1.8h48c1 0 1.8.8 1.8 1.8v30.1z" })));
};

var SvgDisplay = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56.1 9.4H7.9c-3.4 0-6.1 2.7-6.1 6.1v22.8c0 3.4 2.7 6.1 6.1 6.1h21.9v5.7h-7.9c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h20.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-7.9v-5.7h21.9c3.4 0 6.1-2.7 6.1-6.1V15.5c-.1-3.4-2.9-6.1-6.3-6.1zm1.7 28.9c0 .9-.7 1.6-1.6 1.6H7.9c-.9 0-1.6-.7-1.6-1.6V15.5c0-.9.7-1.6 1.6-1.6h48.3c.9 0 1.6.7 1.6 1.6v22.8z" })));
};

var SvgDocker = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M35 29.9h-6.3v-5.8H35v5.8zm0-19.7h-6.3v5.9H35v-5.9zm7.6 14.1h-6.3V30h6.3v-5.7zm-15.1-7.1h-6.3V23h6.3v-5.8zm7.5 0h-6.3V23H35v-5.8zm26.9 9.7c-1.4-1-4.6-1.3-7-.8-.3-2.4-1.7-4.4-3.9-6.2l-1.4-.8-.8 1.4c-1.7 2.7-2.3 7.2-.4 10.1-.8.4-2.5 1.1-4.6 1.1H1.2c-.8 4.9.6 11.4 4.2 15.8 3.5 4.2 9 6.3 16 6.3 15.2 0 26.6-7 31.8-19.8 2 0 6.6 0 8.9-4.4.1-.1.7-1.3.8-1.7l-1-1zm-49.5-2.6H6V30h6.3v-5.7h.1zm7.5 0h-6.3V30h6.3v-5.7zm7.6 0h-6.3V30h6.3v-5.7zm-7.6-7.1h-6.3V23h6.3v-5.8z" })));
};

var SvgDollar = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M39.5 29.8h-15c-4.9 0-9-3.8-9-8.5s4-8.5 9-8.5h22.1c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H36.2V4c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2v4.2h-7.2c-7.4 0-13.5 5.8-13.5 13s6 13 13.5 13h15c4.9 0 9 3.8 9 8.5s-4 8.5-9 8.5H14.2c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h17.5V60c0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2v-4.2h3.2c7.4 0 13.5-5.8 13.5-13s-5.9-13-13.3-13z" })));
};

var SvgDomain = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M7.7 36.8c-.9 0-1.7-.4-2.2-1.1l-3.4-4.9c-.7-1-.4-2.4.6-3.1 1-.7 2.4-.4 3.1.6L7.6 31l1.5-2.2c.5-.7 1.3-1.1 2.2-1.1.9 0 1.7.4 2.2 1.1L15 31l1.8-2.7c.7-1 2.1-1.3 3.1-.6 1 .7 1.3 2.1.6 3.1l-3.4 4.9c-.5.7-1.3 1.1-2.2 1.1-.9 0-1.7-.4-2.2-1.1l-1.5-2.2-1.5 2.2c-.3.7-1.1 1.1-2 1.1zM28.3 36.8c-.9 0-1.7-.4-2.2-1.1l-3.4-4.9c-.7-1-.4-2.4.6-3.1 1-.7 2.4-.4 3.1.6l1.8 2.7 1.5-2.2c.5-.7 1.3-1.1 2.2-1.1.9 0 1.7.4 2.2 1.1l1.5 2.2 1.8-2.7c.7-1 2.1-1.3 3.1-.6 1 .7 1.3 2.1.6 3.1l-3.4 4.9c-.5.7-1.3 1.1-2.2 1.1-.9 0-1.7-.4-2.2-1.1L32 33.4l-1.5 2.2c-.5.8-1.3 1.2-2.2 1.2zm5.2-5.6zM56.3 36.8c-.9 0-1.7-.4-2.2-1.1l-1.5-2.2-1.5 2.2c-.5.7-1.3 1.1-2.2 1.1-.9 0-1.7-.4-2.2-1.1l-3.4-4.9c-.7-1-.4-2.4.6-3.1 1-.7 2.4-.4 3.1.6l1.8 2.7 1.5-2.2c.5-.7 1.3-1.1 2.2-1.1.9 0 1.7.4 2.2 1.1l1.5 2.2 1.8-2.7c.7-1 2.1-1.3 3.1-.6 1 .7 1.3 2.1.6 3.1l-3.4 4.9c-.3.7-1.1 1.1-2 1.1zm-5.2-5.6z" })));
};

var SvgDownload = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60 44c-1.2 0-2.3 1-2.3 2.3v8.9c0 .9-.7 1.6-1.6 1.6H7.9c-.9 0-1.6-.7-1.6-1.6v-8.9C6.3 45 5.2 44 4 44s-2.3 1-2.3 2.3v8.9c0 3.4 2.7 6.1 6.1 6.1h48.3c3.4 0 6.1-2.7 6.1-6.1v-8.9c.1-1.3-1-2.3-2.2-2.3z" }),
        React__namespace.createElement("path", { d: "M30.4 46.5c.4.4 1 .6 1.6.6s1.1-.2 1.6-.6l14.5-14.1c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0L34.3 39.6V5c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v34.6L19.1 29.2c-.9-.9-2.3-.8-3.2 0-.9.9-.8 2.3 0 3.2l14.5 14.1z" })));
};

var SvgDribbble = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 1.8C15.3 1.8 1.8 15.3 1.8 32S15.3 62.3 32 62.3 62.3 48.7 62.3 32 48.7 1.8 32 1.8zm25.7 31.1c-5.9-.4-12.1.2-18.2 1.7-.9-2.4-1.8-4.7-2.8-7 6.3-2.1 12.2-5.2 17.3-8.9 2.4 3.9 3.7 8.5 3.7 13.4.1.2 0 .5 0 .8zM51.3 15c-4.8 3.6-10.5 6.5-16.6 8.4-3.2-6.4-6.8-11.8-10.6-16 2.5-.8 5.1-1.2 7.9-1.2 7.7.1 14.6 3.5 19.3 8.8zM19.7 9.4c3.8 3.8 7.4 9 10.6 15.3-7.9 1.9-16 2.2-23.3.9 1.9-7 6.5-12.8 12.7-16.2zM6.3 30c3.3.7 6.7 1 10.1 1 5.2 0 10.6-.7 15.9-2.1 1 2.2 2 4.5 2.8 6.9-8.8 2.8-16.6 7.2-22.8 12.9-3.7-4.6-6-10.4-6-16.7v-2zm9.2 21.8c5.7-5.2 13-9.3 21.1-11.8.3 1 .6 2 .9 2.9 1.3 4.5 2.3 9 3 13.3-2.7.9-5.5 1.5-8.5 1.5-6.3.1-12-2.2-16.5-5.9zm29.3 2.5c-.7-4.1-1.7-8.4-2.9-12.7-.3-1-.6-1.9-.9-2.9 5.4-1.3 11-1.8 16.2-1.5-1.5 7.4-6.2 13.5-12.4 17.1z" })));
};

var SvgDrop = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 62.3c-13.7 0-24.8-11.1-24.8-24.8 0-18.2 22.5-34.6 23.4-35.3.8-.6 1.9-.6 2.7 0 1 .7 23.4 18 23.4 35.3.1 13.6-11 24.8-24.7 24.8zm0-55.4C27.3 10.6 11.8 24 11.8 37.5c0 11.2 9.1 20.3 20.3 20.3s20.3-9.1 20.3-20.3C52.3 24.6 36.7 10.8 32 6.9z" })));
};

var SvgDropboxOriginal = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m1 35.2 15.5 9.9L32 35.2l-15.5-9.8zM16.4 48.5 32 58.4l15.5-9.9L32 38.6zM32 35.2l15.5 9.9L63 35.2l-15.5-9.8zM16.5 5.6 1 15.5l15.5 9.9L32 15.5zM63 15.5 47.5 5.6 32 15.5l15.5 9.9z" })));
};

var SvgDropbox = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m60.9 30.5-9.3-6.2 9.4-6.2c.8-.6 1.3-1.5 1.3-2.5s-.6-1.8-1.4-2.3L46.6 3.8c-.9-.6-2.3-.6-3.2 0L32 11.4 20.7 3.9c-1-.8-2.5-.8-3.4 0L3 13.3c-.8.5-1.3 1.4-1.3 2.4s.5 1.9 1.3 2.4l9.3 6.2L3 30.5c-.8.5-1.3 1.4-1.3 2.4s.5 1.9 1.3 2.4l8.4 5.6v5.8c0 1 .5 1.9 1.4 2.5L30.4 60c.5.3 1 .5 1.6.5.5 0 1-.1 1.5-.4l17.6-10.8c.8-.6 1.3-1.5 1.3-2.4v-6l8.4-5.6c.8-.5 1.3-1.4 1.3-2.4.1-.9-.4-1.8-1.2-2.4zM32 31.9l-11.4-7.6L32 16.8l11.4 7.6L32 31.9zM45 8.2l11.4 7.6-8.9 5.9-11.4-7.6L45 8.2zM7.5 15.7 19 8.2l8.9 5.9-11.4 7.5h-.1l-8.9-5.9zm9 11.3L28 34.6l-9 5.9-11.5-7.6 9-5.9zM16 44l1.4.9c.5.3 1 .5 1.6.5.6 0 1.1-.2 1.6-.5l9.2-6.1v15.6L16 45.9V44zm32 2-13.8 8.4V38.8l9.2 6c.5.3 1 .5 1.6.5.6 0 1.1-.2 1.6-.5l1.4-.9V46zm-3-5.5-8.9-5.8 11.4-7.6 8.9 5.9L45 40.5z" })));
};

var SvgDrupalOriginal = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M45.9 12.9c-.2 0-.2-.1 0 0-2.8-1.8-5.4-2.7-8.1-4.1-.4-.1-.7-.4-1.1-.7-1.8-1.4-4.5-4.4-6.7-6.9-.1 1.3-.3 2.3-.6 3.3C29 6.1 28 7.3 27.2 8c-.2.1-.2.1-.3.1-3.1 2.4-5 3.1-7.6 4.5-.1.1-.6.3-1 .6-1.6 1-4.4 3-6.9 5.9C4.6 27 2.9 38.8 7.7 48c1.8 3.4 4.3 6.6 7.4 9 3.2 2.5 7.5 4 11.4 4.9 5.6 1.3 11 1.3 16.3-.8 4.1-1.6 7.7-4.3 10.5-7.7 3.8-4.7 5.7-10.7 5.7-16.7.5-15.3-11.3-22.5-13.1-23.8zM11 23c-.1-.1-1.1-.7-.1-2 3-4.5 8.5-7.6 10.2-8.4.6-.3 3.3-1.6 5.9-3.5 1.7-1.3 2.8-2.5 3.3-6.4.4 1.4.4 2.5.4 4-.1 1.6-1.6 2.5-1.7 2.7-.3.3-1.6.8-1.8 1.1-.3.1-.3.3 0 .3.4.1.7.3.7.7 0 .3-.1 1.1-1.6 2.5-2.5 2.5-4.4 4.2-8.8 6.8-4.2 2.5-6.3 2.2-6.5 2.2zm35.2 34.9c-.3.3-3.1 2.3-6.4 2.5s-7.6.4-10.2-2c-.4-.4-.3-1.1 0-1.3.3-.3.4-.4.8-.4.3 0 .3 0 .4.1 1.1 1 3 1.7 6.8 1.7s6.7-1.1 7.8-2c.4-.4.7-.1.8.1.2.6.4 1.1 0 1.3zm-10.7-5.3c.7-.6 1.7-1.6 2.7-2 1.1-.4 1.6-.3 2.5-.3 1 0 2 .1 2.7.4.7.4 1.1 1.6 1.4 2.1.3.6 0 1-.4 1.1-.4.3-.4.1-.8-.7-.4-.7-.7-1.6-3-1.6-2.1 0-2.7.7-3.8 1.6-1.1.8-1.4 1.1-1.7.7-.3-.3-.1-.8.4-1.3zm16 .4c-2.1-.1-6.5-6.9-9.2-6.9-3.5-.1-11 7.2-17 7.2-3.5 0-4.7-.4-5.9-1.4-1.7-1.3-2.7-3.3-2.7-5.8.1-4.7 4.5-9.1 10.1-9.2 6.9-.1 11.9 6.9 15.4 6.9 3-.1 8.8-5.9 11.6-5.9 3 0 3.8 3.1 3.8 5 0 1.8-.6 5.2-2 7.4-1.5 2.1-2.4 2.8-4.1 2.7z" })));
};

var SvgDrupal = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M39.4 12.8c-.7-.2-1.4-.7-1.9-1.4-.3-.4-.7-1-1.2-1.7L32 3.4c-.8-1.3-2.4-1.9-4-1.7-1.6.3-2.8 1.5-3.1 3l-1.4 6.8c-.3 1.1-1.1 1.9-2.1 2.4-9.2 4-15.1 13-15.1 23 0 13.9 11.5 25.3 25.7 25.3s25.7-11.3 25.7-25.3c0-10.8-7.5-20.8-18.3-24.1zm-7.4 45c-11.7 0-21.2-9.3-21.2-20.8 0-8.2 4.9-15.6 12.4-18.9 2.4-1 4.1-3 4.7-5.4l1.2-5.6 3.5 5.1c.5.7.9 1.4 1.3 1.8 1 1.4 2.6 2.6 4.2 3 8.9 2.8 15.1 11 15.1 20 0 11.4-9.5 20.8-21.2 20.8z" }),
        React__namespace.createElement("path", { d: "M48 32c-.4-1.7-1.4-3.2-2.9-4-1.1-.7-2.4-1-3.8-.9-1 .1-1.9.3-2.8.6-.9.4-1.7.9-2.3 1.3l-.5.3c-.1 0-.1.1-.2.1s-.1-.1-.2-.1l-.2-.3c-.5-.3-1-.8-1.8-1.1-3.1-1.5-6.5-1.9-9.4-1.1-2.1.6-3.9 2-5 3.9-.9 1.8-1.2 4-.7 6.1.6 2.3 2 4.2 3.9 5.4 1.2.7 2.6 1.1 4 1.1.7 0 1.4-.1 2.3-.3 2.9-.8 5.1-2.5 7-4.3l.6.9c1.8 2.3 5.3 3.8 8.4 2.2 1.4-.7 3.3-2.3 3.7-6 .2-1.6.2-2.7-.1-3.8zm-14 1.9-1.1 1c-1.7 1.6-3.5 3.1-5.6 3.7-.5.1-.9.2-1.2.2-.6 0-1.2-.2-1.7-.5-.9-.5-1.5-1.5-1.8-2.6-.2-1-.1-2.1.3-2.8.5-.9 1.4-1.5 2.3-1.8.6-.2 1.3-.3 1.9-.3 1.4 0 2.9.4 4.2 1.1l.1.1c.3.1.6.4 1 .6l.3.2c.2.2.4.3.7.5.3.2.5.3.8.5-.1 0-.1 0-.2.1zm9.7 1.2c-.1.9-.4 2.1-1.3 2.6s-2.2-.2-2.8-1c-.2-.2-.3-.5-.5-.8l-.3-.5c-.5-.8-.9-1.4-1.4-1.8.3-.2.6-.3.9-.5l.4-.3c.5-.4 1.1-.7 1.6-.9.4-.2.9-.3 1.3-.3.5 0 .9.1 1.1.2l.1.1c.4.2.7.7.8 1.3v.1c.2.4.2 1 .1 1.8zM36.5 50.5l-1.2.6c-.9.3-1.8.4-2.7.4-.9-.1-1.8-.3-2.8-.7-1.1-.5-2.5 0-3 1.2-.5 1.1 0 2.5 1.2 3 1.4.6 2.8 1 4.2 1.1h.8c1.2 0 2.5-.2 3.7-.6.7-.3 1.4-.6 2.1-1 1.1-.6 1.4-2 .8-3.1-.7-1.2-2-1.6-3.1-.9zM37.6 43.1c-2 0-3.9.9-5.2 2.3-.9.9-.8 2.3.1 3.2.4.4 1 .6 1.5.6.6 0 1.2-.2 1.6-.7.5-.5 1.3-.9 2-.9.5 0 .9.1 1.1.3.9.9 2.3.9 3.2 0 .9-.9.9-2.3 0-3.2-1-1-2.5-1.5-4.3-1.6z" })));
};

var SvgDumbbell = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M61 29.8h-2.2v-.2c0-3.9-3.2-7.2-7.2-7.2s-7.2 3.2-7.2 7.2v.2H19.6v-.2c0-3.9-3.2-7.2-7.2-7.2s-7.2 3.2-7.2 7.2v.2H3c-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.2 2.2 2.2h2.3v.2c0 3.9 3.2 7.2 7.2 7.2s7.2-3.2 7.2-7.2v-.2h24.9v.2c0 3.9 3.2 7.2 7.2 7.2s7.2-3.2 7.2-7.2v-.2h2c1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2zm-45.9 4.7c0 1.5-1.2 2.7-2.7 2.7S9.7 36 9.7 34.5v-4.9c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7v4.9zm39.2 0c0 1.5-1.2 2.7-2.7 2.7S49 35.9 49 34.5v-4.9c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7v4.9z" })));
};

var SvgEdge = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M3.3 28.4zm57.4 2c0-5.5-1-10.5-3.5-15.3C52.1 5.9 43 1 32.4 1 15 1 5.2 14.1 3.3 28.4c5.3-7.7 14.6-15.2 27.4-15.6 0 0 13.8 0 12.4 13.1H21.3c.7-4.6 2.2-7.3 4.2-9.8-9.4 4.5-15.2 12.1-15 23.6.1 8.9 6.3 18.1 15 21.5 10.4 3.9 24 .8 29.9-2.7V45.4c-10 7-33.9 7.6-33.9-8.4h39.1v-6.6h.1z" })));
};

var SvgEmptyFile = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M49.5 1.8h-35c-3.4 0-6.1 2.7-6.1 6.1V40c0 1.5.6 2.9 1.7 3.9l18 17c1 1 2.3 1.5 3.7 1.5h17.6c3.4 0 6.1-2.7 6.1-6.1V7.9c.1-3.4-2.7-6.1-6-6.1zM16.2 43.4h11.7c.5 0 .9.4.9.8v11L16.2 43.4zm34.9 12.7c0 .9-.7 1.6-1.6 1.6H33.3V44.2c0-2.9-2.4-5.3-5.4-5.3h-15v-31c0-.9.7-1.6 1.6-1.6h34.9c.9 0 1.6.7 1.6 1.6v48.2z" })));
};

var SvgEnter = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M45.2 1.8H33.9c-2.6 0-4.8 2.2-4.8 4.8v6.9c0 1.2 1 2.2 2.2 2.2s2.3-1 2.3-2.2v-7c0-.2.1-.3.3-.3h11.3c2.4 0 4.3 1.9 4.3 4.3v42.9c0 2.4-1.9 4.3-4.3 4.3H33.9c-.2 0-.3-.1-.3-.3v-6.9c0-1.2-1-2.2-2.3-2.2s-2.2 1-2.2 2.2v6.9c0 2.6 2.2 4.8 4.8 4.8h11.3c4.9 0 8.8-4 8.8-8.8V10.6c0-4.9-4-8.8-8.8-8.8z" }),
        React__namespace.createElement("path", { d: "m37.1 30.4-10-10.2c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l6.2 6.3H12.3c-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.2 2.2 2.2h17.9l-6.3 6.4c-.9.9-.9 2.3 0 3.2.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7l10-10.2c.9-.7.9-2.1 0-3z" })));
};

var SvgEnvato = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M51.2 1.4c-1-.4-2.7-.6-5.1-.3-5.6.7-10.7 3.2-14.9 7-7.9 7.2-13.6 17-14.2 31-.1.4-1.1-.1-1.4-.1-3-5.8-4.2-11.5-1.7-20.3.4-.7-1.1-1.7-1.4-1.4-.6.6-2.8 3-4.2 5.5-7.4 13-2.6 29.4 10.5 36.7 12.9 7.3 29.4 2.7 36.7-10.4 8.3-15.2.6-45-4.3-47.7z" })));
};

var SvgEnvelope = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56 9.6H8c-3.4 0-6.3 2.8-6.3 6.3v32.4c0 3.4 2.8 6.3 6.3 6.3h48c3.4 0 6.3-2.8 6.3-6.3V15.8c0-3.4-2.9-6.2-6.3-6.2zm0 4.5h.3L32 29.7 7.7 14.1H56zm0 35.8H8c-1 0-1.8-.8-1.8-1.8V18.5l23.4 15c.7.5 1.5.7 2.3.7.8 0 1.6-.2 2.3-.7l23.4-15v29.7c.2 1-.6 1.7-1.6 1.7z" })));
};

var SvgEraser = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m59.2 57.8-27.4-.1 28.6-28.6c2.4-2.4 2.4-6.4 0-8.8L43.7 3.5c-1.2-1.2-2.7-1.8-4.4-1.8s-3.3.7-4.4 1.8L6 32.4c-2.7 2.7-4.2 6.3-4.2 10s1.5 7.4 4.2 10l5.4 5.4c2.8 2.8 6.4 4.2 10 4.2H21.7l37.5.2c1.2 0 2.2-1 2.3-2.2 0-1.2-1-2.2-2.3-2.2zM38 6.7c.3-.3.8-.5 1.2-.5s.9.2 1.2.5l16.7 16.7c.7.7.7 1.8 0 2.5L35.5 47.6 16.3 28.4 38 6.7zM9.1 49.4c-1.8-1.8-2.8-4.3-2.8-6.9s1-5 2.8-6.9l4-4 19.1 19.1-4 4c-3.8 3.8-9.9 3.8-13.7 0l-5.4-5.3z" })));
};

var SvgEthereum = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M14.86 32.556 32.852 2l17.996 30.556-17.996 10.887-17.994-10.887Z" }),
        React__namespace.createElement("path", { fill: "#000", d: "M14.86 36.05 32.852 62l18.006-25.95-18.006 10.88-17.994-10.88Z" })));
};

var SvgEuro = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M49.2 57.8c-10.5 0-19.7-6.6-23.7-15.9h14.8c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H24c-.4-1.7-.6-3.5-.6-5.4 0-1 .1-1.9.2-2.8h16.7c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H24.5C27.8 14.1 37.8 6.2 49.2 6.2c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2c-13.9 0-25.9 9.9-29.3 22.9h-5.1c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h4.3c-.1 1-.2 1.9-.2 2.9 0 1.8.2 3.6.5 5.4h-4.6c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h5.8c4.2 11.7 15.6 20.4 28.5 20.4 1.2 0 2.2-1 2.2-2.2s-.9-2.2-2.1-2.2z" })));
};

var SvgExitDown = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M57.5 29.1h-6.9c-1.2 0-2.2 1-2.2 2.2s1 2.3 2.2 2.3h6.9c.2 0 .3.1.3.3v11.3c0 2.4-1.9 4.3-4.3 4.3H10.6c-2.4 0-4.3-1.9-4.3-4.3V33.9c0-.2.1-.3.3-.3h6.9c1.2 0 2.2-1 2.2-2.3s-1-2.2-2.2-2.2h-7c-2.6 0-4.8 2.2-4.8 4.8v11.3c0 4.9 4 8.8 8.8 8.8h42.9c4.9 0 8.8-4 8.8-8.8V33.9c0-2.6-2.1-4.8-4.7-4.8z" }),
        React__namespace.createElement("path", { d: "M30.4 37.1c.4.4 1 .6 1.6.6.6 0 1.1-.2 1.6-.6l10.2-10c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0l-6.3 6.2V12.3c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2v17.9l-6.4-6.3c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l10.1 10z" })));
};

var SvgExitUp = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M57.5 29.1h-6.9c-1.2 0-2.2 1-2.2 2.2s1 2.3 2.2 2.3h6.9c.2 0 .3.1.3.3v11.3c0 2.4-1.9 4.3-4.3 4.3H10.6c-2.4 0-4.3-1.9-4.3-4.3V33.9c0-.2.1-.3.3-.3h6.9c1.2 0 2.2-1 2.2-2.3s-1-2.2-2.2-2.2h-7c-2.6 0-4.8 2.2-4.8 4.8v11.3c0 4.9 4 8.8 8.8 8.8h42.9c4.9 0 8.8-4 8.8-8.8V33.9c0-2.6-2.1-4.8-4.7-4.8z" }),
        React__namespace.createElement("path", { d: "m23.4 23.9 6.4-6.3v17.9c0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2V17.7l6.3 6.2c.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7.9-.9.9-2.3 0-3.2l-10.2-10c-.9-.9-2.3-.9-3.2 0l-10.2 10c-.9.9-.9 2.3 0 3.2 1 .9 2.4.9 3.3.1z" })));
};

var SvgExit = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M45.2 1.8H33.9c-2.6 0-4.8 2.2-4.8 4.8v6.9c0 1.2 1 2.2 2.2 2.2s2.3-1 2.3-2.2v-7c0-.2.1-.3.3-.3h11.3c2.4 0 4.3 1.9 4.3 4.3v42.9c0 2.4-1.9 4.3-4.3 4.3H33.9c-.2 0-.3-.1-.3-.3v-6.9c0-1.2-1-2.2-2.3-2.2s-2.2 1-2.2 2.2v6.9c0 2.6 2.2 4.8 4.8 4.8h11.3c4.9 0 8.8-4 8.8-8.8V10.6c0-4.9-4-8.8-8.8-8.8z" }),
        React__namespace.createElement("path", { d: "M17.6 34.2h17.9c1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2H17.7l6.2-6.3c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0l-10 10.2c-.9.9-.9 2.3 0 3.2l10 10.2c.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.6.9-.9.9-2.3 0-3.2l-6.3-6.6z" })));
};

var SvgEye = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 52.7C12.2 52.7 2.4 33.8 2 33c-.3-.6-.3-1.4 0-2 .4-.8 10.2-19.6 30-19.6S61.6 30.2 62 31c.3.6.3 1.4 0 2-.4.8-10.2 19.7-30 19.7zM6.6 32C8.8 35.7 17.4 48.2 32 48.2c14.6 0 23.2-12.5 25.4-16.2-2.2-3.7-10.8-16.2-25.4-16.2C17.4 15.8 8.8 28.3 6.6 32z" }),
        React__namespace.createElement("path", { d: "M32 40.5c-4.7 0-8.5-3.8-8.5-8.5s3.8-8.5 8.5-8.5 8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5zM32 28c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" })));
};

var SvgFacebookFill = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M47.4 25.8h-7.6V15.6H46c1.1 0 2-.8 2-2V3c0-1.1-.8-2-2-2h-7.3c-7.9 0-13.4 5.6-13.4 13.9v10.7h-8.8c-1.4 0-2.7 1.1-2.7 2.7v7.2c0 1.4 1.1 2.7 2.7 2.7h8.6v22.1c0 1.4 1.1 2.7 2.7 2.7h9.4c.6 0 1.1-.3 1.5-.7s.7-1.1.7-1.7V38.3H46c1.3 0 2.3-.8 2.5-2v-.2l1.4-6.9c.1-.7 0-1.5-.6-2.3-.2-.5-1.1-1-1.9-1.1z" })));
};

var SvgFacebookLine = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M35.9 62.3h-7.3c-2.2 0-4-1.9-4-4.2V36.6h-5.3c-2.2 0-4-1.9-4-4.2V26c0-2.3 1.8-4.2 4-4.2h5.2v-5.3c0-8.7 5.4-14.8 13.2-14.8h5.5c2.2 0 4 1.9 4 4.2v7.5c0 2.3-1.8 4.2-4 4.2h-3.4v4.1h4.8c1.2.1 2.3.6 3.1 1.5.8 1 1.1 2.2.9 3.5L47.4 33c-.3 2-1.9 3.4-3.9 3.4h-3.7V58c0 2.4-1.7 4.3-3.9 4.3zm-6.8-4.5h6.2V34.2c0-1.2 1-2.3 2.3-2.3H43l1.1-5.7h-6.5c-1.2 0-2.3-1-2.3-2.3v-6.7c0-1.9.5-4.2 4.1-4.2h3.3V6.3h-5c-5.3 0-8.7 4-8.7 10.3v7.5c0 1.2-1 2.3-2.3 2.3h-6.9v5.7h7c1.2 0 2.3 1 2.3 2.3v23.4zm15-31.9z" })));
};

var SvgFacebookMessenger = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M31.9 1.1C14.5 1.1 1 13.9 1 31.1c0 9.1 3.7 16.9 9.7 22.2.4.4.7 1.1.8 1.7l.1 5.5c.1 1.7 1.8 3 3.5 2.2l6.2-2.7c.4-.1 1.1-.3 1.7-.1 2.8.7 5.8 1.3 9 1.3 17.5-.1 31-12.9 31-30S49.4 1.1 31.9 1.1zm18.6 23.1-9.1 14.3c-1.4 2.2-4.5 3-6.6 1.3l-7.2-5.5c-.7-.4-1.5-.4-2.2 0l-9.8 7.3c-1.3 1-3-.6-2.1-2l9.1-14.3c1.4-2.2 4.5-3 6.6-1.3l7.2 5.5c.7.4 1.5.4 2.2 0l9.7-7.5c1.5-.6 3 .9 2.2 2.2z" })));
};

var SvgFacebookOriginal = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M59.5 1h-55C2.5 1 1 2.6 1 4.5v55c0 2 1.6 3.5 3.5 3.5h29.6V38.9h-8v-9.3h8v-6.9c0-8 4.8-12.4 12-12.4 2.4 0 4.8.1 7.2.4V19h-4.8c-3.8 0-4.6 1.8-4.6 4.5v5.9H53l-1.3 9.4h-8v23.8h15.8c2 0 3.5-1.5 3.5-3.5V4.5c-.1-2-1.7-3.5-3.5-3.5z" })));
};

var SvgFacebookOval = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 1C14.8 1 1 14.8 1 32s13.8 31 31 31 31-13.8 31-31S49.2 1 32 1zm8.2 18.9h-3.1c-1.4 0-2.3.7-2.3 2-.1 1.1 0 2.3 0 3.2 0 .4.1.4.4.4h4.6c.4 0 .6.1.6.6-.1 1.8-.4 3.7-.4 5.5 0 .4-.1.4-.6.4h-3.7c-.8 0-.7-.1-.7.7v17.1c0 .6-.1.7-.7.7H28c-.6 0-.7-.1-.7-.7V32.5c0-.4-.1-.7-.6-.6H24c-.6.3-.6.1-.6-.3v-5.5c0-.4.1-.4.4-.4h2.8c.6 0 .7-.1.7-.7v-4.2c0-1.7.4-3.2 1.4-4.6 1.3-1.7 3.1-2.5 5.1-2.7 2.1-.1 4.2 0 6.3-.1.3 0 .4.1.4.4v5.5c.1.4 0 .6-.3.6z" })));
};

var SvgFacebook = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M36.2 63.8h-7.8c-2 0-3.6-1.7-3.6-3.8V36.2h-6.4c-2 0-3.6-1.7-3.6-3.8v-6.9c0-2.1 1.6-3.8 3.6-3.8h6.2v-6.3C24.6 6.3 30 .2 38 .2h6c2 0 3.6 1.7 3.6 3.8v8.1c0 2.1-1.6 3.8-3.6 3.8h-4.3v5.7h5.7c1.2.1 2.2.6 2.9 1.4.7.9 1 2.1.8 3.2L47.9 33c-.2 1.8-1.7 3.1-3.6 3.1h-4.6V60c0 2-1.6 3.8-3.5 3.8zm-9.7-31.1c1 0 1.8.8 1.8 1.8V60c0 .2.1.3.1.3h7.8s.1-.1.1-.3V34.3c0-1 .8-1.8 1.8-1.8h6.3s.1 0 .1-.1v-.1l1.2-6.7c0-.2 0-.3-.1-.4 0 0-.1-.1-.2-.1H38c-1 0-1.8-.8-1.8-1.8v-7.1c0-1.8.3-3.8 3.7-3.8H44s.1-.1.1-.3v-8c0-.2-.1-.3-.1-.3h-5.9c-6 0-9.9 4.6-9.9 11.7v8.1c0 1-.8 1.8-1.8 1.8h-8s-.1.1-.1.3v6.9c0 .2.1.3.1.3l8.1-.2z" })));
};

var SvgFacetime = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M3 21.842v20.316c0 4.436 3.602 8.023 8.024 8.023h24.445c4.436 0 8.024-3.601 8.024-8.023V21.842c0-4.436-3.602-8.023-8.024-8.023H11.037C6.602 13.805 3 17.405 3 21.841Zm52.744-5.437-9.206 7.592a3.56 3.56 0 0 0-1.293 2.74v10.512a3.55 3.55 0 0 0 1.265 2.726l9.206 7.731c2.1 1.752 5.284.264 5.284-2.461V18.88c.014-2.711-3.157-4.213-5.256-2.475Z" })));
};

var SvgFigma = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M42.4 21.5c5.8 0 10.4-4.6 10.4-10.4S48 1 42.4 1H21.6c-5.8 0-10.4 4.6-10.4 10.4s4.6 10.4 10.4 10.4c-5.8 0-10.4 4.6-10.4 10.4s4.6 10.4 10.4 10.4c-5.8 0-10.4 4.6-10.4 10.4s4.7 10 10.4 10S32 58.4 32 52.6V21.8h10.4v-.3zm0 0c-5.8 0-10.4 4.6-10.4 10.4s4.6 10.4 10.4 10.4 10.4-4.6 10.4-10.4c-.3-5.8-4.8-10.4-10.4-10.4z" })));
};

var SvgFiles = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56 4.4H34.2c-3.4 0-6.3 2.8-6.3 6.3v7.1H8c-3.4 0-6.3 2.8-6.3 6.3v19.2c0 1.2.5 2.4 1.4 3.3L15 58.3c.9.9 2.1 1.4 3.3 1.4h11.5c3.4 0 6.2-2.8 6.2-6.3V39.9l5.1 5.1c.9.9 2.1 1.4 3.3 1.4H56c3.4 0 6.3-2.8 6.3-6.3V10.6c0-3.4-2.9-6.2-6.3-6.2zM9.4 46.3h5.5c.1 0 .2.1.2.2V52l-5.7-5.7zm22.2 7.1c0 1-.8 1.8-1.7 1.8H19.6v-8.6c0-2.6-2.1-4.7-4.7-4.7H6.3v-18c0-1 .8-1.8 1.8-1.8h23.4c.1 0 .2.1.2.2v31.1zm4.5-19.9V33h5c.1 0 .2.1.2.2v5.5l-5.2-5.2zm21.7 6.6c0 1-.8 1.8-1.8 1.8H45.7v-8.6c0-2.6-2.1-4.7-4.7-4.7h-5v-6.2c0-2.2-1.6-4.1-3.6-4.5v-7.2c0-1 .8-1.8 1.8-1.8H56c1 0 1.8.8 1.8 1.8v29.4z" })));
};

var SvgFirebase = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M12.638 40.866 18.37 4.124c.198-1.252 1.879-1.548 2.472-.428l6.162 11.533-14.367 25.637Zm40.762 8.93-5.47-33.842c-.165-1.054-1.483-1.482-2.241-.725L11.22 49.796 30.3 60.506c1.186.659 2.67.659 3.855 0L53.4 49.796ZM37.912 20.271l-4.416-8.403a1.313 1.313 0 0 0-2.34 0l-19.408 34.6 26.164-26.197Z" })));
};

var SvgFirefoxOriginal = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M61.6 29.2c-.1-.6-.1-.8-.1-.8s-.1.3-.6.8c-.1-1.4-.4-2.7-.7-4-.4-1.7-1.1-3.2-1.8-4.7-.4-1-1.1-2-1.7-2.8-.1-.3-.4-.7-.7-1-1.1-1.8-2.4-3-4-5.1-1-1.7-1.7-3.4-2-5.2-.4 1.1-.7 2.3-1 3.4-1.6-1.6-2.8-2.7-3.5-3.4C41.5 3 42 1 42 1s-7.3 8.2-4.2 16.7c1.1 3 3 5.5 5.5 7.3 3.1 2.5 6.4 4.5 8.2 9.6-1.4-2.7-3.5-4.9-6.1-6.5.8 1.8 1.1 4 1.1 5.8 0 7.6-6.2 13.8-13.8 13.8-1.1 0-2-.1-3.1-.4-1.1-.1-2.4-.6-3.4-1.1-1.7-1-3-2.3-4.1-3.8l.3.1c.6.1 1.1.4 1.7.4 2.4.4 4.8.1 7.1-.8 2.3-1.3 3.5-2.1 4.5-1.7 1.1.3 1.8-.7 1.1-1.7-1.3-1.7-3.4-2.5-5.5-2.1-2.3.3-4.3 1.8-7.1.4-.1-.1-.4-.1-.6-.3-.1-.1.6.1.4 0-.6-.3-1.3-.7-1.8-1.1l.4.1c-.8-.4-1.4-1.1-1.8-2-.4-1-.6-2-.1-3 .3-.4.7-.8 1.1-1.1.4.1.6.3.6.3s-.1-.3-.3-.4h.1c.3.1 1.1.4 1.4.7.3.1.4.3.7.6 0 0 .1-.1 0-.3-.1-.3-.4-.6-.7-.8.3.1.6.3.8.4.1-.6.4-1.1.3-1.7 0-.3 0-.7-.1-1-.1-.1.1-.3.1-.1 0-.1-.1-.3-.1-.4l.1-.1c.1-.1.3-.1.4-.3.9-.6 1.9-1.2 2.9-1.5.8-.4 1.4-.6 1.7-.7.1-.1.4-.3.6-.4.7-.6 1.1-1.4 1.3-2.3v-1c-.1-.4-.8-.8-4.8-1.1-1.4-.1-2.5-1.3-2.8-2.7.8-2 2.1-3.7 4-4.8.1-.1-.4 0-.3-.1.3-.1.7-.3 1.1-.4.1-.1-.8-.4-1.6-.3-.4 0-1 .1-1.4.4.1-.1.8-.4.7-.4-1.1.1-2 .6-3 1.1 0-.1 0-.1.1-.3-.8.3-1.4.8-1.8 1.4v-.3c-.3.3-.7.6-.8.8-2.1-.8-4.5-1.1-6.9-.6-.4-.4-.8-.8-1.3-1.4h-.1c-.1-.1-.3-.4-.4-.8-.3-.1-.3-.4-.4-.6-.1 0-.1.1-.1.1-.4-1.1-.6-2.1-.6-3.2-.7.4-1.2 1.1-1.4 1.8-.2.3-.2.4-.3.6v-.2c0-.1.1-.4.1-.4v.1c-.3.2-.4.5-.5.7-.1.3-.1.4-.3.8v-.2.1c-.8 1.8-1.4 4-1.6 5.9-.1.4-.1.7-.1 1.1-.6.7-1.1 1.4-1.6 2.1-1.6 2.5-2.7 5.4-3.4 8.3C2.5 27 3.2 26 3.8 25c-1.3 3.2-2 6.9-2 10.6.1-1.1.4-2.1.8-3.2-.1 4.4.6 8.6 2.4 12.7 2.4 5.5 6.5 10 11.6 13.1 2 1.4 4.4 2.5 6.8 3.2.3.1.7.1 1 .3-.1 0-.1-.1-.3-.1 2.9 1 5.9 1.4 8.8 1.4 10.5 0 14-4 14.3-4.4.4-.4 1-1.1 1.3-1.7.1-.1.4-.1.6-.3l.1-.1.1-.1c1.6-.8 3.1-1.7 4.5-2.8 2-1.4 3.5-3.5 4.2-6.1.4-.8.4-1.8.1-2.8.1-.1.1-.4.3-.6 2.3-3.5 3.5-7.8 3.7-12V32c-.4-.9-.4-1.9-.5-2.8zM24 17c-.1.1-.1.3-.1.4 0-.2.1-.3.1-.4z" })));
};

var SvgFirefox = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M43.5 3.7c-1.8-.5-3.7.5-4.2 2.3v.1c-.3 1.3.1 2.7 1.2 3.6l.2.1c2.4 1.6 4.3 5.1 5.4 8.8-.7-.4-1.4-.5-2.2-.4-.9.2-1.7.7-2.1 1.3-.9 1.2-.9 2.8 0 4.1 1.7 2.2 2.3 4.9 1.9 7.6-.4 2.7-1.9 5.1-4.1 6.7-1.9 1.3-4.1 2-6.3 2h-.1c.2-.4.4-.8.6-1 .2-.3.7-.5 1.2-.8.5-.2 1-.5 1.4-.9.4-.3.7-.5 1-.8.3-.3.6-.5.8-.6.1 0 .2 0 .2-.1.3-.1.8-.2 1.3-.5l.1-.1c1.2-.8 1.7-2.3 1.3-3.7-.3-1.1-1-2-2-2.5-1.1-.6-2.3-.8-3.4-.9-1.5-.1-2.7.1-3.7.5-.8.3-1.4.8-2 1.2-.2.1-.4.2-.5.3-.5.3-1.2.3-2.3.3h-1.6c.3-.2.5-.3.6-.5.6-.6 1-1.2 1.2-2.1.2-.7.6-1.2 1-1.5l4.2-2.8c1.2-.9 1.8-2.3 1.5-3.6-.3-1.5-1.7-2.6-3.3-2.6h-2.5c-1.1 0-1.8-.1-2.3-.2.3-.7 1.1-1.8 2.3-3 1-1 1.3-2.4.8-3.6-.5-1.3-1.8-2.2-3.2-2.2h-.2c-3.3.3-6.3 1.8-8.4 4.3h-3.1l-.1-.1c-.6-1-1-2.2-1.2-3.4a3.4 3.4 0 0 0-3.4-3.2c-1 0-1.9.4-2.5 1.1-2.8 3-3.8 7.2-2.6 11.1C1.1 24.7.5 32.3 2.7 39.4 5.1 47 10.4 53.3 17.6 57c4.3 2.2 9.2 3.4 14 3.4 17 0 30.3-12.5 30.3-28.4v-2.3c.4-15.1-9.3-23.3-18.4-26zm14.3 28.4C57.8 45.5 46.5 56 32 56c-4.1 0-8.3-1-12-2.9C13.9 50 9.4 44.7 7.3 38.2c-2-6.3-1.3-13 1.8-18.9l.5-1-.4-1c-.8-1.8-.7-3.7 0-5.4.3.9.7 1.8 1.1 2.6.4.8.9 1.4 1.2 1.9l.8.9 1.2-.1c1.8-.2 3.4-.2 4.8-.1l1.3.1.8-1.1c.6-.9 1.5-1.7 2.4-2.3-1.1 1.6-1.8 3.6-1.1 5.3.7 1.6 2.5 2.5 5.5 2.6l-1.1.7c-1.3.9-2.3 2.3-2.8 3.8-1 0-1.9.3-2.6.7-.2.1-.4.2-.6.4-1 .8-1.7 2-1.8 3.2-.1.9.2 1.9.8 2.5 1.1 1.2 2.8 1.5 4.2 1.6 1.3.1 2.5.1 3.8.1h.3c1.4 0 3 0 4.7-1 .2-.2.5-.3.7-.5.4-.3.7-.5 1.1-.6l.1-.1c.2-.1.6-.2 1.3-.2-.2.2-.4.3-.6.5-.2.2-.4.3-.7.5-.3.2-.6.4-1 .6-.7.4-1.7.9-2.4 1.7-.7.8-1.2 1.8-1.6 2.6-.2.4-.4.8-.6 1.1-.5.8-.6 1.9-.2 2.8.4.9 1.2 1.6 2.2 1.8h.1c.9.1 1.9.3 2.9.2 3.2 0 6.2-1 8.9-2.8 3.2-2.3 5.4-5.8 5.9-9.7.3-1.8.2-3.5-.2-5.2.6.3 1.2.3 1.8.2 1.1-.3 1.9-1.3 1.9-2.5v-.2c-.4-4.6-1.9-10-4.6-14 5.7 3.3 10.6 9.7 10.6 19.6v2.6z" })));
};

var SvgFireworks = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M47.8 36.2c0-1.7-.6-3.2-1.8-4.4L23 8.9l1-1c1-1 1.3-2.6.8-3.9-.6-1.3-1.9-2.2-3.3-2.2H5.3c-2 0-3.6 1.6-3.6 3.6v16.1c0 1.5.9 2.7 2.2 3.3.5.1 1 .2 1.4.2.9 0 1.8-.4 2.5-1l1-1 23 23c1.2 1.2 2.8 1.8 4.3 1.8 1.6 0 3.1-.6 4.3-1.8l5.4-5.4c1.3-1.2 2-2.7 2-4.4zM33.1 25.4l-4.7 10.9-6-6 4.6-11 6.1 6.1zM6.2 6.3h13l-13 13v-13zM19.8 12l3.8 3.8-4.6 11-7-7 7.8-7.8zm23 25.4-5.4 5.4c-.6.6-1.7.6-2.3 0l-3.2-3.2 4.7-10.9 6.2 6.2c.3.3.5.8.5 1.2 0 .6-.2 1-.5 1.3zM45.2 52.9c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l5.5 5.5c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2l-5.5-5.5zM50.6 47.5c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l9.1 9.1c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2l-9.1-9.1zM61.6 47.5 56.1 42c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l5.5 5.5c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.4 0-3.2z" })));
};

var SvgFirstAid = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M26.9 31.7h2.8v2.8c0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2v-2.8h2.8c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-2.8v-2.8c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2v2.8h-2.8c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2z" }),
        React__namespace.createElement("path", { d: "M56.1 14.5H41.9v-2.8c0-4-3.3-7.3-7.3-7.3h-5.1c-4 0-7.3 3.3-7.3 7.3v2.8H7.9c-3.4 0-6.1 2.7-6.1 6.1v12.1c0 2 1 3.8 2.5 4.8V54c0 3.1 2.5 5.7 5.6 5.7h44.3c3.1 0 5.6-2.6 5.6-5.7V37.5c1.5-1.1 2.5-2.9 2.5-4.9v-12c-.1-3.4-2.8-6.1-6.2-6.1zm-29.5-2.9c0-1.6 1.3-2.8 2.8-2.8h5.1c1.6 0 2.8 1.3 2.8 2.8v2.8H26.6v-2.8zm-20.4 9c0-.9.8-1.6 1.7-1.6H56.3c.9 0 1.6.7 1.6 1.6v12.1c0 .7-.5 1.3-1 1.4-1 .1-1.8.3-2.5.5l-14.8 4.1c-4.9 1.4-10.1 1.4-15 0L9.7 34.5c-.7-.2-1.4-.3-2-.4h-.2c-.7-.2-1.2-.7-1.2-1.4V20.6zm47.9 34.6H9.9c-.6 0-1.1-.5-1.1-1.2V39l14.4 4c2.9.8 5.8 1.2 8.7 1.2s5.9-.4 8.7-1.2l14.5-4.1V54c.1.7-.4 1.2-1 1.2z" })));
};

var SvgFitbit = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M35.768 4.864c0 2.606-2.158 4.76-4.76 4.76-2.594 0-4.76-2.154-4.76-4.76 0-2.592 2.166-4.76 4.76-4.76 2.602 0 4.76 2.168 4.76 4.76Zm-4.76 8.646c-2.802 0-4.97 2.168-4.97 4.982 0 2.81 2.168 4.978 4.982 4.978 2.8 0 4.968-2.168 4.968-4.978 0-2.814-2.198-4.982-5-4.982h.02Zm0 13.418c-2.802 0-5.19 2.374-5.19 5.186s2.386 5.186 5.2 5.186c2.8 0 5.186-2.374 5.186-5.186s-2.386-5.186-5.186-5.186h-.01Zm0 13.614c-2.802 0-4.97 2.168-4.97 4.968 0 2.814 2.168 4.982 4.982 4.982 2.8 0 4.968-2.168 4.968-4.982 0-2.582-2.198-4.968-5-4.968h.02Zm0 13.844c-2.594 0-4.76 2.154-4.76 4.76 0 2.582 2.166 4.75 4.76 4.75 2.602 0 4.76-2.158 4.76-4.76 0-2.594-2.158-4.75-4.76-4.75Zm13.198-41.522c-3.032 0-5.624 2.606-5.624 5.626 0 3.018 2.592 5.614 5.624 5.614 3.022 0 5.614-2.594 5.614-5.614 0-3.022-2.592-5.626-5.614-5.626Zm0 13.408a5.812 5.812 0 0 0-5.842 5.842 5.816 5.816 0 0 0 5.842 5.832 5.81 5.81 0 0 0 5.832-5.842 5.808 5.808 0 0 0-5.832-5.832Zm0 13.624c-3.032 0-5.624 2.606-5.624 5.614 0 3.032 2.592 5.626 5.624 5.626 3.022 0 5.614-2.606 5.614-5.626 0-3.018-2.592-5.614-5.614-5.614ZM57.82 25.624c-3.456 0-6.478 2.814-6.478 6.49 0 3.458 2.802 6.49 6.478 6.49 3.678 0 6.49-2.846 6.49-6.522-.218-3.688-3.032-6.478-6.49-6.478v.02ZM17.6 14.166c-2.374 0-4.312 1.95-4.312 4.326 0 2.374 1.938 4.322 4.312 4.322a4.332 4.332 0 0 0 4.322-4.322 4.323 4.323 0 0 0-4.322-4.314v-.012Zm0 13.408c-2.592 0-4.542 1.936-4.542 4.542 0 2.594 1.928 4.542 4.522 4.542 2.602 0 4.52-1.946 4.52-4.542 0-2.606-1.958-4.542-4.552-4.542h.052Zm0 13.612c-2.374 0-4.312 1.95-4.312 4.322 0 2.386 1.938 4.326 4.312 4.326 2.386 0 4.322-1.96 4.322-4.354a4.31 4.31 0 0 0-4.322-4.322v.028ZM4.206 28.218A3.875 3.875 0 0 0 .31 32.114 3.873 3.873 0 0 0 4.206 36a3.871 3.871 0 0 0 3.886-3.886 3.873 3.873 0 0 0-3.886-3.896Z" })));
};

var SvgFlagAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m51.9 33.7-3.4-8 3.4-8c.1-.1.1-.3.1-.4v-.5c0-1.2-1-2.3-2.3-2.3H34.3v-2.8c0-1.2-1-2.3-2.3-2.3H16.4V4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v56c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V31.7h13.3v1.8c0 1.8 1.5 3.3 3.3 3.3h16.7c1.2 0 2.3-1 2.3-2.3.1-.3 0-.6-.1-.8zm-35.5-6.5V13.9h13.3v13.3H16.4zM34.3 19h12.2l-2.8 6.7 2.8 6.7H34.3V19z" })));
};

var SvgFlag = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M50.7 11.5c-1.2-1.3-2.8-2.1-4.6-2.1H16.3V4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v56c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V36.8H44c3.1 0 5.7-2.3 6.1-5.3l2-15.2c.2-1.8-.3-3.5-1.4-4.8zm-5 19.4c-.1.8-.8 1.4-1.6 1.4H16.3V13.9H46c.6 0 1 .3 1.2.5.2.2.5.6.4 1.3l-1.9 15.2z" })));
};

var SvgFlagsAlt1 = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M63.2 23.7c-.3-1.2-1.6-1.9-2.8-1.6-5.9 1.7-16.7 2.7-28 2.7-11.9 0-22.9-1.1-28.7-2.9-1.2-.4-2.4.3-2.8 1.5-.3.9 0 1.9.8 2.4l4.7 12.7c.4 1 1.3 1.8 2.4 1.9h.4c.9 0 1.8-.4 2.4-1.2l7.6-10.4c1.4.1 2.9.2 4.4.3l6 11.5c.5 1 1.5 1.6 2.6 1.6s2.1-.6 2.6-1.6L41 29.1c1.5-.1 3-.1 4.4-.3l7.5 10.4c.6.8 1.4 1.2 2.4 1.2h.4c1.1-.2 2-.9 2.3-1.9l4.6-12.4c.4-.5.8-1.5.6-2.4zM9.5 34.2 7 27.3c2 .4 4.3.7 6.8 1l-4.3 5.9zM32 35.9l-3.5-6.6h7L32 35.9zm22.5-1.7-4.2-5.8c2.4-.3 4.7-.6 6.7-1l-2.5 6.8z" })));
};

var SvgFlickr = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M14.4 45.4c7.4 0 13.4-6 13.4-13.4s-6-13.4-13.4-13.4S1 24.6 1 32s6 13.4 13.4 13.4ZM49.6 45.4C57 45.4 63 39.4 63 32s-6-13.4-13.4-13.4-13.4 6-13.4 13.4 6 13.4 13.4 13.4Z" })));
};

var SvgFlower = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M49.6 20.8c-1.9 0-4.6.7-8.5 2.1 1.4-3.8 2.1-6.6 2.1-8.5 0-7-5-12.7-11.2-12.7-6.2 0-11.2 5.7-11.2 12.7 0 1.9.7 4.6 2.1 8.5-3.8-1.4-6.6-2.1-8.5-2.1-7 0-12.7 5-12.7 11.2 0 6.2 5.7 11.2 12.7 11.2 1.9 0 4.6-.7 8.5-2.1-1.4 3.8-2.1 6.6-2.1 8.5 0 7 5 12.7 11.2 12.7 6.2 0 11.2-5.7 11.2-12.7 0-1.9-.7-4.6-2.1-8.5 3.8 1.4 6.6 2.1 8.5 2.1 7 0 12.7-5 12.7-11.2 0-6.2-5.7-11.2-12.7-11.2zM26.7 32c0-2.9 2.4-5.3 5.3-5.3s5.3 2.4 5.3 5.3-2.4 5.3-5.3 5.3-5.3-2.4-5.3-5.3zM32 6.3c3.7 0 6.7 3.7 6.7 8.2 0 1.1-.5 3.5-2.5 8.8-1.3-.6-2.7-.9-4.2-.9s-2.9.3-4.2 1c-2.1-5.2-2.5-7.6-2.5-8.8 0-4.7 3-8.3 6.7-8.3zM6.3 32c0-3.7 3.7-6.7 8.2-6.7 1.1 0 3.5.5 8.8 2.5-.6 1.3-1 2.7-1 4.2s.3 2.9 1 4.2c-5.2 2.1-7.6 2.5-8.8 2.5-4.6 0-8.2-3-8.2-6.7zM32 57.8c-3.7 0-6.7-3.7-6.7-8.2 0-1.1.5-3.5 2.5-8.8 1.3.6 2.7 1 4.2 1s2.9-.3 4.2-1c2.1 5.2 2.5 7.6 2.5 8.8 0 4.5-3 8.2-6.7 8.2zm17.6-19.1c-1.1 0-3.5-.5-8.8-2.5.6-1.3 1-2.7 1-4.2s-.3-2.9-1-4.2c5.2-2.1 7.6-2.5 8.8-2.5 4.5 0 8.2 3 8.2 6.7s-3.7 6.7-8.2 6.7z" })));
};

var SvgFlutter = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M55.733 29.772 40.121 45.384 55.733 61H37.887l-6.691-6.69-8.925-8.926 15.615-15.612h17.847ZM37.887 3l-29 29 8.925 8.925L55.733 3H37.887Z" })));
};

var SvgFolder = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M61 19.6v-3.3c0-3.4-2.7-6.1-6.1-6.1H32.7l-.3-.8c-.7-1.8-2.4-2.9-4.3-2.9H7.9c-3.4 0-6.1 2.7-6.1 6.1v38.9c0 3.4 2.7 6.1 6.1 6.1h48.3c3.4 0 6.1-2.7 6.1-6.1V22.7c0-1.2-.5-2.3-1.3-3.1zm-6.1-5c.9 0 1.6.7 1.6 1.6v1.9H35.9l-1.4-3.5h20.4zm2.9 36.9c0 .9-.7 1.6-1.6 1.6H7.9c-.9 0-1.6-.7-1.6-1.6v-39c0-.9.7-1.6 1.6-1.6l20.3.1 4.1 10.2c.3.9 1.2 1.4 2.1 1.4h23.3s.1 0 .1.1v28.8z" })));
};

var SvgFord = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M32.87 19.85C15.12 19.85.75 25.3.75 32.01s14.37 12.14 32.12 12.14 32.1-5.43 32.1-12.14c0-6.71-14.37-12.16-32.1-12.16Zm0 23.05c-17.02 0-30.86-4.85-30.86-10.89 0-6.04 13.83-10.93 30.86-10.93s30.88 4.91 30.88 10.93S49.94 42.9 32.87 42.9ZM45.7 31.44c-.73-.08-1.64.54-2.38 1.45-.37.46-.77 1.33-.83 1.84-.08.52.06 1.04.25 1.18.19.15 1.01.58 2.3-.72.73-.72 1.43-1.91 1.43-1.91l-.23-.06c.44-.81.35-1.68-.54-1.78Zm-12.83-9.46C16.34 21.98 2.99 26.47 2.99 32c0 5.53 13.36 10.05 29.88 10.05S62.78 37.55 62.78 32c0-5.55-13.4-10.02-29.91-10.02ZM18.91 37.32c-1.8 0-3.4-1.18-3.44-3.29-.02-1.28 1.01-2.86 2.94-3.33.23 0 .31.08.31.21 0 .08-.08.18-.27.27-.56.21-1.53 1.31-1.53 2.32 0 .77.48 1.62 1.29 1.8.22.06.43.04.64.04 2.01 0 4.27-2.26 6.71-5.7-.39.02-2.07.21-2.49.68-.19.15-.31.06-.35-.1 0-.04.06-.19.13-.27.66-.75 2.65-.91 3.13-.97 1.78-2.74 4.06-4.48 4.68-4.61-.01 0-.03 0-.05-.01-1.59-.37-3.04-.68-4.18-.68-4 0-5.78 1.72-5.7 3.29.04.64.56 1.06 1.32.91.83-.15 1.99-.93 2.28-1.62.06-.14.23-.17.29-.12.12.1.08.25.08.25-.1.81-1.35 3.04-3.5 3.04-1.2 0-2.01-1.12-1.99-2.22.02-2.05 2.11-4.12 7.27-4.12.97 0 2.07.08 3.27.29 1.39.25 4.85.83 7.66.87 1.04 0 2.36.04 3.44-.12 1.14-.19.89-.23 1.34-.23.41 0 .41.17.41.33 0 .66-2.32 1.93-4.29 1.93-2.9 0-5.91-1.31-7.47-1.74.06.06.1.15.05.27-.02.04-.23.27-.31.33-.41.37-1.82 1.29-3.36 3.87 1.24-.06 2.69-.31 2.69-.31s-.08-.27-.08-.5c.06-.89.58-1.43 1.24-1.33.37.06.62.37.62.71 0 .35-.27.87-.54 1.12-.19.14-.39.29-.64.41 0 .23.31.41.58.44-.06.23-.04.33-.14.31-.62 0-.87-.6-.87-.6-.83.15-1.63.25-3.27.41-4.12 6.67-5.41 7.77-7.93 7.77h.03Zm28.4-1.1c.89-.04 2.53-1.74 2.92-2.15.08-.1.23-.29.31-.29.08 0 .25.08.25.21 0 .08-.19.39-.33.58-.83 1.04-2.2 2.63-3.75 2.67-.77 0-1.06-.31-1.16-.91-.35.31-1.55.85-2.78.85-1.01-.02-1.43-.62-1.63-1.1-.19-.39-.27-.97-.12-1.55-.56.29-1.08.33-1.82.31-.87-.02-1.41-.41-1.68-1.43-1 1.82-1.04 1.88-2.05 3.79h-1.76l2.26-3.83c.29-.52.44-.93.54-1.37.06-.25-.12-.48-.39-.5-.29 0-.76.29-1.22.72 0 0-1.16 1.24-2.01 2.5-.81 1.2-2.2 2.57-3.71 2.57-1.1 0-2.09-.6-2.3-1.76 0 0-.11.27-1.08.83-.08.04-.29.16-.35.12a.882.882 0 0 1-.31-.52c.06.02.19-.08.58-.39.77-.58.93-1.04.93-1.04.19-.39.52-1.01.75-1.45.62-1.24 1.7-2.51 3.46-2.57.29 0 .37.12.43.23.17.12.11.37.11.37-1.24.19-2.09.91-2.61 1.62-.31.46-.64 1.2-.7 1.74-.12.93.31 1.55.95 1.7 1.2.19 2.2-.68 2.98-2.03.2-.35.35-1.26.35-1.76s-.27-1.01-.48-1.22c0-.35.23-.58.5-.58.08 0 .16 0 .25.08.41.41.64 1.2.64 1.8 0 .21 0 .41-.04.62.87-1.06 1.97-2.42 2.82-2.69.17-.08.33-.08.5-.08 1.55-.04 1.34 1.37 1.34 1.37.83-.95 1.41-1.3 2.17-1.26.83.04 1.12.62 1.12 1.08-.02.54-.42 1.16-1.1 1.18-.6 0-.95-.29-1.14-.83-.39.14-.58.41-.66.95-.12.68.39 1.22 1.06 1.22 1.14 0 1.64-.5 2.05-.87 1.41-1.33 2.2-2.71 4.23-2.69 1.22.02 1.53.99 1.74 1.41l2.67-4.51h1.64l-4.43 7.85c-.08.17-.29.48-.27.72.04.39.54.29.35.29h-.02Zm-16.34-8.01c.12-.12.33-.5.29-.75-.02-.12-.08-.27-.23-.25-.31.06-.5.21-.58.52-.11.33-.06.56 0 .81 0 0 .2.02.52-.33Z", clipRule: "evenodd" })));
};

var SvgForward = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M58.1 4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v24.9L16.2 4.5c-2-1.3-4.6-1.4-6.8-.3C7.3 5.4 5.9 7.6 5.9 10v44c0 2.4 1.3 4.6 3.5 5.8 1 .5 2.1.8 3.2.8 1.3 0 2.5-.4 3.6-1.1l37.4-24.4V60c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V4zM13.7 55.7c-.7.4-1.5.5-2.2.1-.3-.2-1.1-.7-1.1-1.8V10c0-1.1.8-1.6 1.1-1.8.3-.2.7-.3 1-.3.4 0 .8.1 1.2.4L50.1 32 13.7 55.7z" })));
};

var SvgFrameExpand = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M19.3 1.8H7.9c-3.4 0-6.1 2.7-6.1 6.1v11.4c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V7.9C6.3 7 7 6.3 7.9 6.3h11.4c1.2 0 2.3-1 2.3-2.3s-1.1-2.2-2.3-2.2zM56.1 1.8H44.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h11.4c.9 0 1.6.7 1.6 1.6v11.4c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V7.9c0-3.4-2.8-6.1-6.2-6.1zM60 42.5c-1.2 0-2.3 1-2.3 2.3v11.4c0 .9-.7 1.6-1.6 1.6H44.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h11.4c3.4 0 6.1-2.7 6.1-6.1V44.7c.1-1.2-1-2.2-2.2-2.2zM19.3 57.8H7.9c-.9 0-1.6-.7-1.6-1.6V44.7c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v11.4c0 3.4 2.7 6.1 6.1 6.1h11.4c1.2 0 2.3-1 2.3-2.3s-1-2.1-2.2-2.1z" })));
};

var SvgFreshJuice = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M55.9 32.4c-2-.4-4 .1-5.7 1.4.9-1.8 2.5-4 3.8-5.4.8-.9.8-2.3-.1-3.2-.9-.8-2.3-.8-3.2.1-.9.9-4.5 5.1-5.5 8.9-.3-.2-.7-.3-1-.6-1.7-1.2-3.7-1.6-5.5-1.3-4.1.7-6.9 4.5-6.3 8.7 1.4 9.7 4.3 13.5 6.5 14.9 1.1.8 2.3 1.2 3.6 1.2.4 0 .7 0 1.1-.1h.2c1.1-.2 1.8-.6 2.5-1.3.6-.6 1.5-.6 2.1 0 .3.3 1.2 1.1 2.6 1.3 1.8.3 3.3-.1 4.8-1.1 2.1-1.5 4.9-5.4 6.4-14.9.6-4-2.2-7.9-6.3-8.6zm1.8 8c-1.4 9-3.9 11.4-4.6 11.9-.4.3-.7.4-1.5.3h-.1c-1.1-1.1-2.7-1.7-4.2-1.7s-3 .6-4.2 1.7c0 0-.1 0-.2.1-.7.1-1 0-1.4-.3-.7-.5-3.2-2.9-4.6-11.9-.3-1.8.8-3.3 2.6-3.6.9-.2 1.8.3 2.2.5 1.7 1.2 3.6 1.9 5.6 1.9h.5c2-.1 3.7-.8 5.2-1.9.6-.5 1.4-.7 2.2-.5 1.6.2 2.8 1.9 2.5 3.5zM29.5 6.8H21c-2.6 0-4.9 1.8-5.5 4.4L14.3 17H7c-1.5 0-2.9.6-3.9 1.7s-1.5 2.5-1.4 4l2.5 29.7c.2 2.7 2.5 4.8 5.2 4.8h13.7c2.7 0 5-2.1 5.2-4.8l2.5-29.7c.1-1.5-.4-2.9-1.4-4-1-1.1-2.4-1.7-3.9-1.7h-6.8l1.1-4.8c.1-.5.6-.9 1.1-.9h8.4c1.2 0 2.3-1 2.3-2.3s-.9-2.2-2.1-2.2zm-6.3 45.9H9.5c-.4 0-.7-.3-.7-.7L6.9 30.4h18.8L23.9 52c0 .4-.3.7-.7.7zm3-31c.1.1.2.3.2.5l-.3 3.6H6.6l-.3-3.6c0-.3.1-.5.2-.5.1-.1.3-.2.5-.2h18.7c.3 0 .5.1.5.2z" })));
};

var SvgFriendly = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 .8C14.8.8.8 14.8.8 32s14 31.3 31.3 31.3 31.3-14 31.3-31.3S49.2.8 32 .8zm0 58c-14.8 0-26.8-12-26.8-26.8S17.3 5.3 32 5.3s26.8 12 26.8 26.8-12 26.7-26.8 26.7z" }),
        React__namespace.createElement("circle", { cx: 20, cy: 22.8, r: 4 }),
        React__namespace.createElement("circle", { cx: 44, cy: 22.8, r: 4 }),
        React__namespace.createElement("path", { d: "M48.2 31.8c-1.2 0-2.3 1-2.3 2.3C46 41.2 40.2 47 33.1 47c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3c9.6 0 17.4-7.8 17.4-17.4 0-1.3-1-2.4-2.3-2.4z" })));
};

var SvgFullScreen = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60 21.5c1.2 0 2.3-1 2.3-2.3V5c0-1.8-1.4-3.2-3.2-3.2H44.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h9.8L32 28.8 9.4 6.3h9.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H5C3.2 1.8 1.8 3.2 1.8 5v14.3c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V9.4L28.8 32 6.3 54.6v-9.8c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3V59c0 1.8 1.4 3.2 3.2 3.2h14.3c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H9.4L32 35.2l22.6 22.6h-9.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3H59c1.8 0 3.2-1.4 3.2-3.2V44.7c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v9.8L35.2 32 57.8 9.4v9.8c0 1.3 1 2.3 2.2 2.3z" })));
};

var SvgFunnel = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M26.2 62.2c-.6 0-1.2-.2-1.8-.5-1-.6-1.5-1.6-1.5-2.7V27.2L5.4 6.9c-.7-1-.9-2.3-.4-3.4s1.7-1.8 3-1.8h48c1.3 0 2.5.8 3 2s.3 2.4-.6 3.4l-17.2 20v23.3c0 .6-.2 1.5-1.1 2.4l-.2.2-12 8.9c-.5.2-1.1.3-1.7.3zm.5-37.6c.5.6.8 1.5.8 2.1v29.9l9.3-6.9v-23c0-.5 0-1.4.8-2.2L53.2 6.3H10.8l15.9 18.3zm-3.5 2.9.1.1-.1-.1zM55.1 4.1z" })));
};

var SvgGallery = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M23.1 41c3.4 0 6.2-2.8 6.2-6.1 0-3.4-2.8-6.1-6.2-6.1-3.4 0-6.2 2.8-6.2 6.1.1 3.4 2.8 6.1 6.2 6.1zm0-7.8c.9 0 1.7.7 1.7 1.6 0 .9-.7 1.6-1.7 1.6-.9 0-1.7-.7-1.7-1.6.1-.8.8-1.6 1.7-1.6zM49.2 21.4c3.4 0 6.2-2.8 6.2-6.1s-2.8-6.1-6.2-6.1-6.2 2.7-6.2 6.1 2.8 6.1 6.2 6.1zm0-7.7c.9 0 1.7.7 1.7 1.6 0 .9-.7 1.6-1.7 1.6s-1.7-.7-1.7-1.6c0-.9.8-1.6 1.7-1.6z" }),
        React__namespace.createElement("path", { d: "M63.3 7.2C63.3 3.8 60.4 1 57 1H33.5c-3.4 0-6.2 2.8-6.2 6.3v14.3H7.5c-3.4 0-6.3 2.8-6.3 6.3v29C1.2 60.2 4 63 7.5 63H31c3.4 0 6.3-2.8 6.3-6.3V42.5H57c3.4 0 6.3-2.8 6.3-6.3v-29zM33.5 5.5H57c1 0 1.8.8 1.8 1.8v23.2L50.9 25c-.9-.6-2.2-.5-2.9.3L43.6 30l-6.7-5c-.2-.1-.4-.2-.5-.3-1-1.7-2.7-2.8-4.6-3.1V7.2c-.1-.9.7-1.7 1.7-1.7zM7.5 26H31c1 0 1.8.8 1.8 1.8V48L27 43.9c-.9-.6-2.2-.5-2.9.3L19.6 49l-6.7-5c-.8-.6-2-.6-2.8.1l-4.4 3.7v-20c0-1 .8-1.8 1.8-1.8zm24.4 32.3-8.7-6.6 2.7-3 6.8 4.7v3.3c0 .7-.3 1.3-.8 1.6zM5.7 56.8v-3.1l5.9-5 13.1 9.9H7.5c-1-.1-1.8-.9-1.8-1.8zm31.5-26 9.5 7.2h-9.5v-7.2zM57 38h-2.8l-7-5.3 2.7-3 8.8 6.2v.3c.1 1-.7 1.8-1.7 1.8z" })));
};

var SvgGame = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M59.4 25.1c-1.9-1.9-4.6-3.1-7.3-3.1H34.2V6.6c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v15.5H12c-5.6 0-10.2 4.5-10.2 10.1v17.4c0 5.6 4.6 10.1 10.2 10.1 5.1 0 9.3-3.7 10.1-8.4h20c.8 4.8 5 8.5 10.1 8.5 5.6 0 10.2-4.5 10.2-10.1V32.2c-.1-2.6-1.1-5.1-3-7.1zm-1.7 24.5c0 3.1-2.5 5.6-5.7 5.6s-5.7-2.5-5.7-5.6c0-1.6-1.3-2.9-2.9-2.9H20.6c-1.6 0-2.9 1.3-2.9 2.9 0 3-2.6 5.5-5.7 5.5-3.2 0-5.7-2.5-5.7-5.6V32.2c0-3.1 2.6-5.6 5.7-5.6h40.1c1.5 0 3 .6 4.1 1.7 1 1 1.6 2.4 1.6 3.9v17.4z" }),
        React__namespace.createElement("path", { d: "M21.1 34.8h-2.2v-2.1c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v2.1h-2.2c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h2.2v2.1c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-2.1h2.2c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM49 35h.4c.1 0 .3-.1.4-.1.1-.1.3-.1.4-.2l.3-.3c.4-.4.7-1 .7-1.6 0-.6-.2-1.2-.7-1.6l-.3-.3c-.1-.1-.3-.1-.4-.2-.1-.1-.3-.1-.4-.1-.7-.1-1.5.1-2 .6-.4.4-.7 1-.7 1.6 0 .6.2 1.2.7 1.6.4.3 1 .6 1.6.6zM46.2 35.5l-.3-.3c-.1-.1-.3-.1-.4-.2-.1-.1-.3-.1-.4-.1-.7-.1-1.5.1-2 .6-.4.4-.7 1-.7 1.6 0 .6.2 1.2.7 1.6.2.2.5.4.7.5.3.1.6.2.9.2h.4c.2 0 .3-.1.4-.1.1 0 .3-.1.4-.2l.3-.3c.4-.4.7-1 .7-1.6 0-.7-.3-1.3-.7-1.7zM47.4 40.3c-.4.4-.7 1-.7 1.6 0 .6.2 1.2.7 1.6l.3.3c.1.1.3.2.4.2.1.1.3.1.4.1h.8c.1 0 .3-.1.4-.1.1-.1.3-.1.4-.2l.3-.3c.4-.4.7-1 .7-1.6 0-.6-.2-1.2-.7-1.6-.6-.9-2.1-.9-3 0zM55.4 36.2c-.1-.1-.1-.3-.2-.4l-.3-.3c-.5-.5-1.3-.8-2-.6-.1 0-.3.1-.4.1-.1 0-.3.1-.4.2l-.3.3-.3.3c-.1.1-.2.3-.2.4-.1.1-.1.3-.1.4v.4c0 .6.2 1.2.7 1.6.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.4-.4.7-1 .7-1.6v-.4c-.3-.1-.3-.2-.4-.4z" })));
};

var SvgGatsby = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 1C14.8 1 1 14.8 1 32s13.8 31 31 31 31-13.8 31-31S49.2 1 32 1zM7.6 32.3l24 24c-13.1-.1-23.8-10.8-24-24zm29.9 23.4L8.3 26.5C10.9 15.7 20.4 7.6 32 7.6c8 0 15.2 3.9 19.7 10l-3.4 3c-3.5-5.2-9.6-8.5-16.3-8.5-8.6 0-15.9 5.5-18.7 13.1l25.5 25.5c6.2-2.3 11-7.5 12.5-14H40.7V32h15.6c.1 11.6-8.1 21.3-18.8 23.7z" })));
};

var SvgGift = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M54.1 14.5h-4.6c1.1-.8 2-1.7 2.4-2.8.6-1.5.6-4-2.5-6.9-3.3-3.2-6.3-3.2-8.2-2.7-4.3 1.1-7.2 6.1-8.8 9.7-1.6-3.6-4.5-8.5-8.8-9.7-1.9-.5-4.9-.4-8.2 2.7-3.1 3-3 5.4-2.5 6.9.4 1.1 1.3 2 2.4 2.8H9.9c-2.9 0-5.3 2.4-5.3 5.3v6.6c0 2.8 2.3 5.1 5.1 5.2V56c0 3.4 2.8 6.3 6.3 6.3h32.7c3.4 0 6.3-2.8 6.3-6.3V31.5c2.5-.4 4.4-2.6 4.4-5.2v-6.6c0-2.9-2.4-5.2-5.3-5.2zM42.3 6.3c.1 0 .4-.1.7-.1.7 0 1.8.3 3.3 1.7 1.2 1.1 1.5 1.9 1.4 2.1-.5 1.4-5.5 2.9-11.2 3.5 1.4-3.1 3.5-6.6 5.8-7.2zM18.4 8c1.5-1.4 2.6-1.7 3.3-1.7.3 0 .5.1.7.1 2.3.6 4.5 4 5.9 7.2-5.7-.6-10.7-2.1-11.2-3.5-.1-.3.2-1 1.3-2.1zM9.1 26.3v-6.6c0-.4.3-.8.8-.8h44.2c.4 0 .8.3.8.8v6.6c0 .4-.3.8-.8.8H9.9c-.4 0-.8-.3-.8-.8zm39.6 31.5H16c-1 0-1.8-.8-1.8-1.8V31.6h36.2V56c.1 1-.7 1.8-1.7 1.8z" })));
};

var SvgGit = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M62.5 31 32.9 1.3c-.4-.4-1.4-.4-2 0l-8.2 8.2 7.6 7.6c.6-.3 1.3-.4 2-.4 2.8 0 4.9 2.3 4.9 4.9 0 .7-.1 1.4-.4 2l6.1 6.1c.6-.3 1.3-.4 2-.4 2.8 0 4.9 2.3 4.9 4.9 0 2.8-2.3 4.9-4.9 4.9-2.8 0-4.9-2.3-4.9-4.9 0-.7.1-1.4.4-2l-6.1-6.1h-.1v11.5c1.8.8 3.1 2.5 3.1 4.6 0 2.8-2.3 4.9-4.9 4.9-2.8 0-4.9-2.3-4.9-4.9 0-2.1 1.3-3.9 3.1-4.6V26.4c-1.8-.8-3.1-2.5-3.1-4.6 0-.7.1-1.4.4-2l-7.6-7.6L1.4 31c-.4.4-.4 1.4 0 2l29.7 29.7c.4.4 1.4.4 2 0L62.7 33c.3-.6.3-1.4-.2-2z" })));
};

var SvgGithubOriginal = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 1.8c-17 0-31 13.8-31 31C1 46.4 9.9 58 22.3 62.2c1.6.3 2.1-.7 2.1-1.4s0-2.7-.1-5.4c-8.6 2-10.4-4.2-10.4-4.2-1.4-3.5-3.5-4.5-3.5-4.5-2.8-2 .1-2 .1-2 3.1.1 4.8 3.2 4.8 3.2 2.7 4.8 7.3 3.4 9 2.5.3-2 1.1-3.4 2-4.2-6.8-.7-14.1-3.4-14.1-15.2 0-3.4 1.3-6.1 3.2-8.2-.3-.7-1.4-3.9.3-8.2 0 0 2.7-.8 8.6 3.2 2.5-.7 5.1-1.1 7.8-1.1s5.4.3 7.8 1.1c5.9-3.9 8.5-3.2 8.5-3.2 1.7 4.2.7 7.5.3 8.2 2 2.1 3.2 4.9 3.2 8.2 0 11.8-7.3 14.5-14.1 15.2 1.1 1 2.1 3 2.1 5.8 0 4.2-.1 7.5-.1 8.5 0 .8.6 1.7 2.1 1.4C54.1 57.8 63 46.3 63 32.6c-.1-17-14-30.8-31-30.8z" })));
};

var SvgGithub = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M62.2 31C61.6 15.5 48.9 2.8 33.3 2.2c-8.4-.3-16.2 2.7-22.3 8.4-6 5.8-9.3 13.5-9.3 21.8 0 13.7 9.2 25.7 22.4 29.2.4.1.7.1 1.1.1.9 0 1.8-.3 2.5-.9 1-.8 1.6-2 1.6-3.3v-3.2c0-.9.1-4.7.1-5.4.1-.5.2-.9.5-1.2.6-.8.7-1.9.3-2.8-.4-.8-1.2-1.4-2.1-1.4-.6-.1-1.3-.2-1.8-.4-.8-.2-1.5-.5-2.3-.9-.6-.3-1.1-.8-1.6-1.4-.3-.3-.7-1-1.1-2.3-.4-1.2-.5-2.4-.5-3.7 0-1.8.5-3.2 1.6-4.4.6-.7.8-1.6.4-2.4-.3-.7-.4-1.5-.2-2.5 1.4.5 1.8.8 1.9.9l.1.1c.4.2.7.4 1 .6l.3.2c.5.3 1.2.4 1.8.2 1.6-.4 3.3-.7 4.9-.7 1.7 0 3.3.2 4.9.7.6.2 1.2.1 1.8-.2l1.1-.7c.7-.4 1.5-.8 2.2-1.1.2.9.1 1.8-.2 2.6-.3.8-.1 1.7.4 2.3 1.1 1.2 1.6 2.6 1.6 4.4 0 1.4-.2 2.6-.5 3.6-.4 1-.7 1.8-1.2 2.4-.4.5-1 .9-1.8 1.4-.8.4-1.5.7-2.3.9-.5.1-1.2.3-1.9.4h-.1c-.9.2-1.6.8-2 1.6-.3.8-.3 1.7.3 2.5.4.5.6 1.3.6 2.2v7.5c0 1.3.6 2.6 1.7 3.3 1.1.8 2.4 1 3.6.6C54.2 57.4 62.9 44.8 62.2 31zm-22 26v-7c0-.9-.1-1.7-.3-2.4h.1c1-.3 2.1-.7 3.2-1.3 0 0 .1 0 .1-.1 1.2-.7 2.2-1.5 2.9-2.4 1-1.1 1.5-2.5 2-3.8.5-1.5.7-3.1.7-5.1 0-2.4-.7-4.6-2-6.4.4-1.9.2-4-.7-6.2-.2-.6-.8-1.1-1.4-1.3-1.1-.4-2.3-.2-3.9.3-1 .4-2 .9-3 1.4l-.2.3c-3.4-.8-7-.8-10.4 0-.1-.1-.2-.1-.4-.2-.6-.4-1.4-.8-2.7-1.3-1.6-.7-2.9-.9-4.1-.5-.6.2-1.2.7-1.4 1.4-.8 2.3-1 4.3-.6 6.2-1.3 1.8-2 4-2 6.4 0 1.8.2 3.4.7 5 .5 1.6 1.1 2.9 1.9 3.8.9 1.1 1.9 1.9 3 2.5 1 .6 2.1 1 3.2 1.3h.2c-.1.3-.1.7-.2 1V51.5c-2.2-.8-4-1.9-5.6-3.5-1.2-1.4-2.6-2.7-3.3-3.1-1.4-.7-2.3.7-2.1 1.5.3 1 1.7 1.6 2.6 2.4.9.9 1.1 2.1 1.7 3.1.9 1.3 4 3 6.6 3v2.3C13.9 54.1 6.3 44 6.3 32.5c0-7.1 2.8-13.7 7.9-18.6C19 9.2 25.4 6.7 32.1 6.7h1c13.3.5 24.1 11.3 24.6 24.5.6 11.6-6.6 22.2-17.5 25.8z" })));
};

var SvgGo = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M5.69 27.285c-.125 0-.156-.063-.094-.156l.654-.842c.063-.093.219-.155.343-.155h11.125c.124 0 .155.093.093.186l-.53.81c-.062.094-.218.188-.311.188l-11.28-.031ZM.985 30.151c-.125 0-.156-.062-.094-.155l.654-.842c.063-.093.219-.156.343-.156h14.21c.124 0 .186.094.155.187l-.25.748c-.03.125-.155.187-.28.187l-14.738.031ZM8.526 33.018c-.125 0-.156-.093-.094-.187l.436-.779c.063-.093.187-.187.312-.187h6.232c.125 0 .187.094.187.218l-.062.748c0 .125-.125.218-.219.218l-6.792-.03ZM40.87 26.724c-1.963.498-3.303.872-5.235 1.37-.467.125-.498.156-.904-.31-.467-.53-.81-.873-1.464-1.185-1.963-.966-3.864-.686-5.64.467-2.119 1.371-3.21 3.397-3.178 5.92.03 2.494 1.744 4.55 4.206 4.893 2.12.28 3.895-.467 5.297-2.056.281-.343.53-.717.842-1.153H28.78c-.655 0-.81-.406-.592-.935.405-.966 1.153-2.587 1.589-3.397.093-.187.312-.498.779-.498h11.342c-.062.841-.062 1.682-.187 2.524-.342 2.243-1.184 4.3-2.555 6.107-2.243 2.96-5.172 4.799-8.88 5.297-3.054.405-5.89-.187-8.383-2.056-2.306-1.745-3.614-4.051-3.957-6.918-.405-3.396.592-6.45 2.649-9.13 2.212-2.898 5.141-4.736 8.725-5.39 2.929-.53 5.733-.188 8.257 1.526 1.652 1.09 2.836 2.587 3.615 4.394.187.28.062.436-.312.53Z" }),
        React__namespace.createElement("path", { fill: "#000", d: "M51.184 43.955c-2.836-.062-5.422-.872-7.603-2.742-1.839-1.589-2.992-3.614-3.366-6.014-.56-3.52.406-6.637 2.524-9.41 2.275-2.992 5.017-4.55 8.726-5.204 3.178-.56 6.17-.25 8.88 1.59 2.462 1.682 3.989 3.956 4.394 6.948.53 4.207-.686 7.634-3.584 10.563-2.056 2.088-4.58 3.397-7.478 3.989-.841.156-1.683.187-2.493.28ZM58.6 31.367c-.03-.406-.03-.717-.093-1.029-.561-3.085-3.397-4.83-6.357-4.144-2.898.654-4.767 2.493-5.453 5.422-.561 2.43.623 4.892 2.867 5.89 1.714.747 3.427.654 5.079-.188 2.462-1.277 3.801-3.272 3.957-5.951Z" })));
};

var SvgGoodreads = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M13.9 49.9H19c.1 0 .4-.1.4.3.8 4.2 3.7 6.6 7.6 7.8 3.2 1 6.6 1 9.9.1 4.1-.8 6.8-3.4 8.2-7.3 1-2.7 1.3-5.4 1.4-8v-6.3h-.1c-.1.1-.1.4-.3.6-2.7 5.2-7.5 8.2-12.8 8.3-12.6.3-20.7-7-21-21.4-.1-3 .1-5.8 1-8.5C15.7 6.8 22.2 1.1 31.9 1 39.3 1 44.2 5.7 46 9.6c.1.1.1.3.3.1V2.3h5.4v40.2c0 9.4-3.2 17.5-12.5 19.7-8.3 2-19.2.6-23.7-6.9-1-1.7-1.5-3.5-1.6-5.4zM31.7 5.4c-6.3-.1-13.3 4.9-14 16.2-.4 7.2 1.8 14.8 8.6 18 3.4 1.6 9 1.8 13.1-1.1 5.8-4.1 7.6-11.7 6.6-18.8-1.1-8.4-5.7-14.3-14.3-14.3z" })));
};

var SvgGoogleMeet = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "m35.808 32 6.257 5.375 6.998 6.012v-22.44l-6.628 5.53L35.808 32ZM3 42.333V52c0 2.21 1.78 4 3.977 4h9.61V42.333H3ZM16.587 8 3 21.667h13.587V8ZM16.587 21.667H3v20.666h13.587V21.667Z" }),
        React__namespace.createElement("path", { fill: "#000", d: "m57.746 13.787-8.683 7.16v22.44l8.722 7.193C59.091 51.607 61 50.67 61 49V15.333c0-1.69-1.952-2.616-3.254-1.546ZM35.808 32v10.333H16.587V56h28.5c2.197 0 3.976-1.79 3.976-4v-8.613L35.808 32ZM45.087 8h-28.5v13.667h19.22V32l13.256-11.047V12c0-2.21-1.78-4-3.976-4Z" })));
};

var SvgGoogleCloud = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M61.997 33.584a17.457 17.457 0 0 0-6.712-8.716 24.235 24.235 0 0 0-7.318-11.799l-.113.113v-.132a24.077 24.077 0 0 0-10.816-5.502 24.529 24.529 0 0 0-12.157.454A24.36 24.36 0 0 0 14.5 14.317a24.216 24.216 0 0 0-6.032 10.55c.133-.056.284-.094.416-.132-.227.133-.435.284-.643.435a17.584 17.584 0 0 0-6.334 8.604 17.551 17.551 0 0 0-.151 10.664 17.487 17.487 0 0 0 6.07 8.792h.018l-.019.057a17.331 17.331 0 0 0 10.57 3.517h13.406l.076.075h13.462a17.527 17.527 0 0 0 10.475-3.365 17.535 17.535 0 0 0 6.391-8.944 17.464 17.464 0 0 0-.208-10.986ZM51.56 41.942a6.841 6.841 0 0 1-1.456 2.193 6.642 6.642 0 0 1-2.193 1.456c-.813.34-1.683.51-2.572.51H31.858v-.075H18.395a6.6 6.6 0 0 1-2.76-.605 6.95 6.95 0 0 1-2.515-1.985 6.738 6.738 0 0 1-1.305-2.931 6.612 6.612 0 0 1 .189-3.215 6.69 6.69 0 0 1 4.425-4.424 6.851 6.851 0 0 1 3.214-.208 7 7 0 0 1 2.93 1.323c.852.681 1.532 1.551 1.986 2.534l7.81-7.809a17.588 17.588 0 0 0-6.165-5.067 16.959 16.959 0 0 0-4.368-1.456c.057-.057.095-.076.152-.057a13.468 13.468 0 0 1 8.924-4.349 13.416 13.416 0 0 1 9.473 2.95h.151a13.406 13.406 0 0 1 3.593 4.67 13.493 13.493 0 0 1 1.23 5.9v1.342c.888 0 1.758.17 2.57.51a6.64 6.64 0 0 1 2.194 1.456 6.84 6.84 0 0 1 1.456 2.194c.34.813.51 1.683.51 2.571 0 .89-.17 1.759-.51 2.572h-.019Z" })));
};

var SvgGoogleDrive = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M42.1 39.1 22.3 4.9h19.4l19.9 34.2H42.1zm-16.7 2.8-9.7 17.2h37.6L63 41.9H25.4zM19.7 9.1 1 41.9l9.7 17.2 18.9-32.8-9.9-17.2z" })));
};

var SvgGooglePay = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M15.166 25.59a5.56 5.56 0 0 0-3.928-1.537c-2.67 0-4.937 1.8-5.748 4.227a6.135 6.135 0 0 0 0 3.919c.81 2.426 3.078 4.226 5.748 4.226 1.384 0 2.567-.355 3.486-.978v-.002a4.738 4.738 0 0 0 2.044-3.111h-5.53V28.39h9.656c.118.687.177 1.384.176 2.082 0 3.115-1.113 5.75-3.046 7.532h-.002l.002.001c-1.696 1.565-4.023 2.472-6.786 2.472a10.24 10.24 0 0 1 0-20.477 9.837 9.837 0 0 1 6.85 2.666l-2.922 2.922Zm15.156 6.438v7.217h-2.29V21.423h6.072a5.492 5.492 0 0 1 3.932 1.543 4.959 4.959 0 0 1 1.643 3.76 4.937 4.937 0 0 1-1.643 3.784c-1.061 1.012-2.372 1.518-3.932 1.517h-3.782v.001Zm0-8.411v6.221h3.84a3.029 3.029 0 0 0 2.265-.921 3.037 3.037 0 0 0 0-4.356 2.986 2.986 0 0 0-2.266-.945h-3.84Zm14.633 3.036c1.692 0 3.028.452 4.007 1.357.98.904 1.468 2.144 1.467 3.72v7.515h-2.19v-1.692h-.1c-.947 1.393-2.208 2.09-3.782 2.09-1.343 0-2.467-.398-3.371-1.194a3.815 3.815 0 0 1-1.357-2.987c0-1.261.477-2.265 1.43-3.01.954-.745 2.227-1.119 3.82-1.12 1.36 0 2.48.248 3.359.746v-.523a2.608 2.608 0 0 0-.946-2.027 3.242 3.242 0 0 0-2.21-.834c-1.278 0-2.29.539-3.035 1.618l-2.017-1.27c1.11-1.593 2.75-2.39 4.925-2.39Zm-2.963 8.86a1.83 1.83 0 0 0 .76 1.492c.506.399 1.135.61 1.779.597a3.65 3.65 0 0 0 2.575-1.069c.758-.714 1.138-1.551 1.138-2.513-.714-.568-1.71-.853-2.987-.853-.93 0-1.705.224-2.326.673-.627.455-.939 1.008-.939 1.672Zm13.363 9.107L63 27.051h-2.493l-3.533 8.76h-.05l-3.634-8.76h-2.488l5.027 11.422-2.837 6.147h2.363Z", clipRule: "evenodd" })));
};

var SvgGoogleWallet = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M22.7 14.1c5.2 8.5 8.9 15.6 11.7 22.5-1.1 4.7-2.7 9.2-4.4 13.5-1.8-7.3-3.7-14.1-7.8-20.6.9-4.8.3-10 .5-15.4zM16 24.3H3.2c-.8 0-1.4 1.1-.8 1.7 5.8 7.6 9.9 16.2 12.7 25.9h14.4c-2.3-9.7-5.4-18.5-11.4-26.8-.6-.4-1.3-.8-2.1-.8zM22.7 12c9.4 15.1 18 32.6 19.2 51h15.6C55.8 44 48 26.2 37.7 12h-15zm34.8-9.4c-.3-1-1.1-1.6-2.1-1.6H43.2c-.7 0-1.3.7-1.1 1.4 1.8 6.3 3.1 13.2 3.7 20.3 6.6 11.8 11 24.7 12.5 37.3 2.3-8.3 3.5-18.5 3.5-28 0-10.1-1.6-20-4.3-29.4z" })));
};

var SvgGoogle = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M61.5 29.2H32.8v8.5h20.6c-1.1 11.8-10.7 16.9-20 16.9-11.8 0-22.3-9.2-22.3-22.5 0-12.8 10-22.5 22.3-22.5 9.4 0 15.1 6.1 15.1 6.1l5.8-6.1S46.5 1.1 33 1.1C15.2 1 1.6 15.9 1.6 32c0 15.6 12.8 31 31.7 31C50 63 62 51.7 62 34.8c.1-3.5-.5-5.6-.5-5.6z" })));
};

var SvgGraduation = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m61.5 34-4.2-4.3v-3.8c.6-.7 1-1.6 1-2.6 0-1.5-.8-2.8-2.2-3.4l-24.5-11c-.9-.4-2-.4-3 0L4 19.8c-1.3.6-2.2 1.9-2.2 3.4S2.7 26 4 26.6l8.4 3.8v11.8c0 7.3 5.9 13.2 13.1 13.2h9.1c7.3 0 13.1-5.9 13.1-13.2V30.6l4.8-2.2.3-.1v1.6l-4 4.1c-1.1 1.1-1.1 2.8 0 3.9l4.3 4.5c.5.5 1.2.8 2 .8.7 0 1.5-.3 2-.8l4.3-4.5c1.1-1.1 1.1-2.8.1-3.9zm-18.3 8.2c0 4.8-3.9 8.7-8.6 8.7h-9.1c-4.8 0-8.6-3.9-8.6-8.7v-9.7l11.9 5.4c.5.2 1 .3 1.5.3s1-.1 1.5-.3l11.4-5.1v9.4zm-12.9-8.7L7.4 23.2l22.7-10 22.6 10.2-22.4 10.1zM55.1 38l-2-2 2-2 2 2-2 2z" })));
};

var SvgGrammarly = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M32 63c17.12 0 31-13.88 31-31C63 14.88 49.12 1 32 1 14.88 1 1 14.88 1 32c0 17.12 13.88 31 31 31Zm6.61-22.732c-1.04 0-2.002-.686-2.186-1.687a2.04 2.04 0 0 1 .452-1.71 2.11 2.11 0 0 1 .73-.553c.281-.13.588-.197.9-.196H50v11.804a2.05 2.05 0 0 1-.203.883c-.133.276-.326.52-.566.714a2.132 2.132 0 0 1-1.742.441c-1.023-.18-1.724-1.123-1.724-2.139v-1.97l.4-2.183a18.171 18.171 0 0 1-6.222 4.557 18.472 18.472 0 0 1-7.589 1.595c-10.496 0-18.932-8.5-18.323-18.914.526-8.947 7.92-16.265 17.055-16.866a18.635 18.635 0 0 1 9.515 1.869 18.242 18.242 0 0 1 7.215 6.373c.266.447.348.978.231 1.483a2.044 2.044 0 0 1-.862 1.239c-.962.652-2.285.308-2.95-.633-2.511-3.453-6.888-6.313-11.881-6.313-9.58 0-16.93 9.405-13.07 19.258 1.703 4.34 5.733 7.45 10.426 8.17 5.764.885 11.034-1.12 14.07-5.48l-1.897.258h-3.272Z", clipRule: "evenodd" })));
};

var SvgGraph = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M46.3 12.9c-3.6 0-6.5 2.9-6.5 6.5v.7l-2.4 1.6-2.7-.9c-.8-2.7-3.3-4.6-6.2-4.6-3.6 0-6.5 2.9-6.5 6.5 0 .6.1 1.1.2 1.6-.7.6-1.6 1.2-2.3 1.8-1.1-.7-2.3-1.2-3.7-1.2-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5 6.5-2.9 6.5-6.5c0-.6-.1-1.1-.2-1.6.7-.6 1.6-1.2 2.3-1.8 1.1.7 2.3 1.2 3.7 1.2 2.6 0 4.8-1.5 5.9-3.7l2 .7c.4.1.7.2 1.1.2.7 0 1.4-.2 2-.6l2.3-1.5c1.2 1.1 2.7 1.7 4.4 1.7 3.6 0 6.5-2.9 6.5-6.5s-2.8-6.6-6.4-6.6zM16.2 33.4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm12.3-8.8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm17.8-3.2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" }),
        React__namespace.createElement("path", { d: "M57 5.9H7C3.6 5.9.7 8.7.7 12.2v26.4c0 3.4 2.8 6.3 6.3 6.3h22.8v8.8h-11c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h26.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H34.3v-8.8H57c3.4 0 6.3-2.8 6.3-6.3V12.1c0-3.4-2.9-6.2-6.3-6.2zm1.8 32.6c0 1-.8 1.8-1.8 1.8H7c-1 0-1.8-.8-1.8-1.8V12.1c0-1 .8-1.8 1.8-1.8h50c1 0 1.8.8 1.8 1.8v26.4z" })));
};

var SvgGridAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M21.7 3.4H9c-3.4 0-6.2 2.8-6.2 6.2v12.7c0 3.4 2.8 6.2 6.2 6.2h12.7c3.4 0 6.2-2.8 6.2-6.2V9.7c.1-3.5-2.7-6.3-6.2-6.3zm1.8 19c0 1-.8 1.8-1.8 1.8H9c-1 0-1.8-.8-1.8-1.8V9.7c0-1 .8-1.8 1.8-1.8h12.7c1 0 1.8.8 1.8 1.8v12.7zM55 3.4H42.3c-3.4 0-6.2 2.8-6.2 6.2v12.7c0 3.4 2.8 6.2 6.2 6.2H55c3.4 0 6.2-2.8 6.2-6.2V9.7c0-3.5-2.8-6.3-6.2-6.3zm1.8 19c0 1-.8 1.8-1.8 1.8H42.3c-1 0-1.8-.8-1.8-1.8V9.7c0-1 .8-1.8 1.8-1.8H55c1 0 1.8.8 1.8 1.8v12.7zM21.7 35.3H9c-3.4 0-6.2 2.8-6.2 6.2v12.7c0 3.4 2.8 6.2 6.2 6.2h12.7c3.4 0 6.2-2.8 6.2-6.2V41.6c.1-3.5-2.7-6.3-6.2-6.3zm1.8 19c0 1-.8 1.8-1.8 1.8H9c-1 0-1.8-.8-1.8-1.8V41.6c0-1 .8-1.8 1.8-1.8h12.7c1 0 1.8.8 1.8 1.8v12.7zM55 35.3H42.3c-3.4 0-6.2 2.8-6.2 6.2v12.7c0 3.4 2.8 6.2 6.2 6.2H55c3.4 0 6.2-2.8 6.2-6.2V41.6c0-3.5-2.8-6.3-6.2-6.3zm1.8 19c0 1-.8 1.8-1.8 1.8H42.3c-1 0-1.8-.8-1.8-1.8V41.6c0-1 .8-1.8 1.8-1.8H55c1 0 1.8.8 1.8 1.8v12.7z" })));
};

var SvgGrid = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60 34.2c1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2h-7V18.6h7c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-7V7.3c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v6.8H34.2V7.3c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2v6.8H15.5V7.3c0-1.2-1-2.2-2.2-2.2S11 6.1 11 7.3v6.8H4c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h7v11.1H4c-1.2 0-2.2 1-2.2 2.2C1.8 33 2.8 34 4 34h7v11.1H4c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h7v6.8c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-6.8h14.3v6.8c0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2v-6.8h14.3v6.8c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-6.8h7c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-7V34.2H60zM48.5 18.6v11.1H34.2V18.6h14.3zm-33 0h14.3v11.1H15.5V18.6zm0 26.8V34.2h14.3v11.1H15.5zm33 0H34.2V34.2h14.3v11.2z" })));
};

var SvgGrow = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M59 45.9a7.63 7.63 0 0 0-9.31-5.29c-3.53 1-8.37 2.48-12 3.53a4.81 4.81 0 0 0-.11-3.21c-.92-2.29-3.47-3.31-5.6-3.31H22a4 4 0 0 1-2.68-1.25 5.77 5.77 0 0 0-3.9-1.52H7.31A6.45 6.45 0 0 0 1 41.42v12.86A6.57 6.57 0 0 0 7.43 61h9.74a6.34 6.34 0 0 0 3.51-1.08l.12.06a19.23 19.23 0 0 0 9.26 2.39 18.64 18.64 0 0 0 5.68-.86L53.84 56h.12a7.89 7.89 0 0 0 5.09-10ZM7.43 57A2.57 2.57 0 0 1 5 54.28V41.42a2.46 2.46 0 0 1 2.31-2.57h8.1a1.74 1.74 0 0 1 1.2.48 11.54 11.54 0 0 0 1 .78v16.81a2 2 0 0 1-.42 0Zm45.18-4.82-18.06 5.48a14.75 14.75 0 0 1-4.49.68 15.2 15.2 0 0 1-7.35-1.91l-1.12-.59V41.6H32a2.16 2.16 0 0 1 1.89.8c.16.41-.12 1.63-2.22 3.63l-1.15 1.09.79 1.36C32.17 50 32.17 50 42.27 47c4.29-1.25 8.57-2.53 8.57-2.53a3.66 3.66 0 0 1 4.37 2.62 3.9 3.9 0 0 1-2.6 5.06ZM62.92 10.24A3.22 3.22 0 0 0 60 7.3c-2.49-.19-7.15 0-10.41 3.21a10 10 0 0 0-1.44 1.81 12.41 12.41 0 0 0-2.81-6.65c-3-3.38-8-3.95-10.66-4a3.22 3.22 0 0 0-3.18 3c-.21 2.86-.11 8.17 2.87 11.51 2.47 2.77 6.27 3.33 9 3.33a17.6 17.6 0 0 0 2-.1v14.68a2 2 0 0 0 4 0v-9c2.84-.05 7.58-.61 10.53-3.54 3.18-3.26 3.26-8.49 3.02-11.31Zm-18.67 5.28c-2.09.13-5.28-.12-6.94-2-1.86-2.07-2-5.93-1.91-7.83 1.91.12 5.13.63 6.91 2.62s2.02 5.33 1.94 7.21ZM57 18.75c-1.93 1.92-5.47 2.32-7.59 2.38.27-2.16 1-5.8 3-7.79 1.78-1.77 4.48-2.09 6.22-2.09H59c.06 1.81 0 5.51-2 7.5Z" })));
};

var SvgHackerNews = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M1 1v62h62V1H1zm3 27.3s0-.1 0 0c0-.1 0 0 0 0zm30.1 7.5v13.9h-4.4V35.5l-11-21.3h5.1c7.3 13.5 6.8 14.1 8.2 17.3 1.7-3.8.7-3.4 8.5-17.3h4.8L34.1 35.8z" })));
};

var SvgHammer = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M10.8 28.2h.2l22-.7c.2.6.8 1.1 1.4 1.3l2.7.8c.1 3.3 2.9 6 6.2 6h4.9c3.4 0 6.2-2.8 6.2-6.2 0-4.9-.1-12.6-.1-12.6 0-.4-.1-10.9-11.1-14.9-.7-.2-1.5-.2-2.1.3-.6.4-1 1.1-1 1.8v8.3l-.7.8h-4.6c-1.2 0-2.2 1-2.2 2.2v.8l-21.8-.8c-1.7-.1-3.3.6-4.6 1.7-1.2 1.2-1.9 2.8-1.9 4.5v.4c0 1.7.7 3.3 1.9 4.5 1.5 1.1 3 1.8 4.6 1.8zm26.6-10.6h3.4c.7 0 1.3-.3 1.7-.8l1.9-2.2c.4-.4.6-.9.6-1.5V7.6c5 3.4 5.1 8.8 5.1 9.1 0 0 .1 7.6.1 12.6 0 1-.8 1.7-1.7 1.7h-4.9c-1 0-1.7-.8-1.7-1.7v-1.4c0-1-.7-1.9-1.6-2.2l-2.7-.8v-7.3zM9.1 21.5c0-.5.2-.9.5-1.3.3-.3.8-.5 1.3-.5l21.9.8v2.4l-22 .7c-.5 0-.9-.2-1.3-.5-.3-.3-.5-.8-.5-1.3v-.3zM57 47.3h-8.7v-2.8h3.3c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H41.4c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h2.3v2.8H20.1v-5.5H23c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H12.9c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h2.7v5.5H7c-2.9 0-5.2 2.4-5.2 5.2V57c0 2.9 2.4 5.2 5.2 5.2h50c2.9 0 5.2-2.4 5.2-5.2v-4.4c0-2.9-2.3-5.3-5.2-5.3zm.7 9.7c0 .4-.3.8-.8.8H7c-.4 0-.8-.3-.8-.8v-4.4c0-.4.3-.8.8-.8h50c.4 0 .8.3.8.8V57z" })));
};

var SvgHand = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M57.3 45.8V15.2c0-3.2-2.8-5.7-6.2-5.7-.6 0-1.2.1-1.7.2V8.5c0-3.2-2.8-5.7-6.2-5.7-1.2 0-2.4.3-3.3.9-1.1-1.2-2.8-1.9-4.6-1.9-2.6 0-4.9 1.5-5.8 3.6-.7-.3-1.4-.4-2.2-.4-3.4 0-6.2 2.6-6.2 5.7v21.6l-1.3-1.6c-2.3-3-6.5-4-9.8-2.2-1.6.9-2.8 2.4-3.2 4.2-.4 1.8 0 3.7 1.2 5.3l9 11.9c.5.6.9 1.3 1.4 1.9 1.4 2 2.9 4.2 5 5.9 4 3.3 9.4 4.5 14.5 4.5 2.5 0 4.8-.3 7-.7 12.5-2.7 12.5-12.1 12.4-15.7zM43.9 57.1c-5.2 1.1-13 1.1-17.6-2.8-1.6-1.4-2.9-3.2-4.2-5.1l-1.5-2.1-9-11.9c-.4-.5-.5-1.1-.4-1.6.1-.5.4-.9.9-1.2 1.3-.7 3.2-.2 4.1 1l.1.1 5.4 6.4c.6.7 1.6 1 2.5.7.9-.3 1.5-1.2 1.5-2.1V10.7c0-.6.8-1.2 1.7-1.2.9 0 1.7.6 1.7 1.2v17.6c0 1.2 1 2.3 2.3 2.3s2.2-1 2.2-2.3V7.4c0-.7.8-1.2 1.7-1.2s1.7.6 1.7 1.3v21.6c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V8.5c0-.6.8-1.2 1.7-1.2s1.7.6 1.7 1.2v22.6c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-16c.1-.6.8-1.1 1.7-1.1.9 0 1.7.6 1.7 1.2v30.7c-.1 4.5-.8 9.4-9.1 11.2z", style: {
                fill: "#030104",
            } })));
};

var SvgHandshake = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M61 35.52h-2.34c-.79 0-1.46-.92-1.46-2V18.4c0-1.11.72-2.08 1.54-2.08H61a2 2 0 0 0 0-4h-2.26a5.44 5.44 0 0 0-4.74 2.9H40.91L39 13.55a14.12 14.12 0 0 0-12.7-3.22c-5.6 1.42-9.3 5.93-10.59 7.79h-2a5.72 5.72 0 0 0-5.45-5.8H3a2 2 0 0 0 0 4h5.24c.79 0 1.46.91 1.46 2v15.11c0 1.11-.72 2.09-1.54 2.09H3a2 2 0 0 0 0 4h5.16a5.46 5.46 0 0 0 4.71-2.9h.7a4.45 4.45 0 0 1 2.17.57 2 2 0 0 0 .36 1.56l2.31 3.09a2.07 2.07 0 0 0 1.08.73l3.06.82 1.37 2.92a2 2 0 0 0 1.28 1.08l3.22.88 2.09 3.32a2 2 0 0 0 1.15.86L37.23 54a2 2 0 0 0 .54.08 2 2 0 0 0 1.66-.88l10.45-15.52a1 1 0 0 1 .83-.44h3.67a5.31 5.31 0 0 0 4.28 2.28H61a2 2 0 0 0 0-4ZM18.94 20.44c1.07-1.51 4-5.14 8.34-6.24a10.15 10.15 0 0 1 9.09 2.36l4.09 3.56a2.41 2.41 0 0 1 .92 1.56 1.14 1.14 0 0 1-.32.85l-1.7 1.82a2.56 2.56 0 0 1-3.43.3l-.4-.3a6.42 6.42 0 0 0-8.42.59l-8.83 9.13a8.39 8.39 0 0 0-4.58-1.45v-10.5h2a4 4 0 0 0 3.24-1.68Zm27.63 15-9.65 14.32-3.44-1-2.09-3.32a2 2 0 0 0-1.16-.86l-3.08-.84-1.38-2.93a2 2 0 0 0-1.28-1.08l-3.29-.88-.88-1.17 9.62-10a2.44 2.44 0 0 1 3.18-.21l.4.3a6.57 6.57 0 0 0 8.77-.77L44 25.26a5.14 5.14 0 0 0 1.39-3.79 5.45 5.45 0 0 0-.62-2.25h8.43v14h-2.49a5 5 0 0 0-4.14 2.22Z" })));
};

var SvgHappy = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M46.3 35.3H17.7c-.7 0-1.4.3-1.8.9-.4.6-.6 1.3-.4 2 2.1 7.4 8.9 12.6 16.5 12.6 7.8 0 14.4-5 16.5-12.6.2-.7.1-1.4-.4-2-.4-.6-1.1-.9-1.8-.9zM32 46.2c-4.6 0-8.7-2.5-11-6.4h22c-2.2 3.9-6.3 6.4-11 6.4z" }),
        React__namespace.createElement("path", { d: "M32 .8C14.8.8.8 14.8.8 32s14 31.3 31.3 31.3 31.3-14 31.3-31.3S49.2.8 32 .8zm0 58c-14.8 0-26.8-12-26.8-26.8S17.3 5.3 32 5.3s26.8 12 26.8 26.8-12 26.7-26.8 26.7z" }),
        React__namespace.createElement("circle", { cx: 20, cy: 22.8, r: 4 }),
        React__namespace.createElement("circle", { cx: 44, cy: 22.8, r: 4 })));
};

var SvgHarddrive = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M48.2 2.3H15.8c-3.3 0-6 2.7-6 6v47.4c0 3.3 2.7 6 6 6h32.5c3.3 0 6-2.7 6-6V8.3c0-3.3-2.7-6-6.1-6zm1.6 53.4c0 .9-.7 1.5-1.5 1.5H15.8c-.9 0-1.5-.7-1.5-1.5V8.3c0-.9.7-1.5 1.5-1.5h32.5c.9 0 1.5.7 1.5 1.5v47.4z" }),
        React__namespace.createElement("path", { d: "M43.6 32c0-6.3-5.2-11.5-11.5-11.5S20.6 25.7 20.6 32c0 2.3.7 4.5 1.9 6.3-1.9 1.3-3.7 2.7-4.4 4-2.1 3.6-.9 8.2 2.7 10.3 1.2.7 2.5 1 3.8 1 .6 0 1.3-.1 1.9-.3 1.9-.5 3.6-1.8 4.6-3.5.8-1.3 1.1-3.8 1.3-6.4 6.2-.1 11.2-5.2 11.2-11.4zM27.2 47.6c-.4.7-1.1 1.2-1.8 1.4-.8.2-1.6.1-2.3-.3-.7-.4-1.2-1.1-1.4-1.8s-.1-1.6.3-2.3c.5-.9 3.1-2.7 6.1-4.4-.1 3.4-.4 6.6-.9 7.4zm5.3-8.6c0-1.1 0-2.1-.1-2.7 0-.8-.5-1.5-1.1-1.9-.7-.4-1.5-.4-2.2-.1-.6.3-1.7.9-2.9 1.6-.8-1.2-1.2-2.5-1.2-4 0-3.9 3.1-7 7-7s7 3.1 7 7c.1 3.8-2.8 6.8-6.5 7.1zM42.8 50.3c-.4.4-.7 1-.7 1.6 0 .6.2 1.2.7 1.6.4.4 1 .7 1.6.7h.4c.1 0 .3-.1.4-.1.1-.1.3-.1.4-.2l.3-.3c.4-.4.7-1 .7-1.6 0-.6-.2-1.2-.7-1.6-.8-.9-2.3-.9-3.1-.1z" })));
};

var SvgHeadphone = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M53.6 18c-5.9-5.8-13.7-8.9-22.1-8.7-16.4.2-29.7 13.5-29.7 29.6v11.5c0 2.3 1.9 4.3 4.3 4.3h6.2c2.3 0 4.3-1.9 4.3-4.3v-8.8c0-2.3-1.9-4.3-4.3-4.3h-6c.8-13 11.8-23.5 25.2-23.7 7.1-.2 13.9 2.5 18.9 7.4 4.5 4.4 7.1 10.1 7.3 16.2h-5.9c-2.3 0-4.3 1.9-4.3 4.3v8.8c0 2.3 1.9 4.3 4.3 4.3H58c2.3 0 4.3-1.9 4.3-4.3v-12c0-7.5-3.1-14.8-8.7-20.3zM11.9 50.2H6.3v-8.3H12v8.3zm45.9 0h-5.7v-8.3h5.7v8.3z" })));
};

var SvgHeartFill = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 57.6c-.8 0-1.6-.3-2.2-.8-2.3-2-4.6-3.9-6.6-5.6-5.8-4.9-10.9-9.2-14.4-13.4C4.8 33 3 28.6 3 23.7c0-4.7 1.6-9.1 4.6-12.3 3-3.2 7.1-5 11.6-5 3.3 0 6.4 1.1 9.1 3.1 1.1.8 2 1.8 2.9 2.9.4.5 1.1.5 1.5 0 .9-1.1 1.9-2 2.9-2.9 2.7-2.1 5.8-3.1 9.1-3.1 4.5 0 8.6 1.8 11.6 5s4.6 7.6 4.6 12.3c0 4.9-1.8 9.3-5.8 14-3.5 4.2-8.6 8.5-14.4 13.4-2 1.7-4.3 3.6-6.6 5.6-.5.6-1.3.9-2.1.9z" })));
};

var SvgHeartMonitor = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M42.3 17 39.8 5.6c-.5-2.3-2.5-3.8-4.8-3.8h-6c-2.3 0-4.3 1.6-4.8 3.8L21.6 17c-3.3.2-5.9 2.9-5.9 6.2v17.5c0 3.3 2.6 6 5.9 6.2l2.6 11.5c.5 2.3 2.5 3.8 4.8 3.8h6c2.3 0 4.3-1.6 4.8-3.8L42.3 47c3.3-.2 5.9-2.9 5.9-6.2V23.3c0-3.4-2.6-6.1-5.9-6.3zM28.6 6.6c0-.2.2-.3.4-.3h6c.2 0 .4.1.4.3L37.7 17H26.2l2.4-10.4zM22 21.5h20c1 0 1.8.8 1.8 1.8v8.3l-7-4c-.7-.4-1.5-.4-2.2 0L27 31.9l-6.7-3.8v-4.8c-.1-1 .7-1.8 1.7-1.8zm13.4 35.9c0 .2-.2.3-.4.3h-6c-.2 0-.4-.1-.4-.3L26.2 47h11.5l-2.3 10.4zM42 42.5H22c-1 0-1.8-.8-1.8-1.8v-7.4l5.5 3.2c.7.4 1.5.4 2.2 0l7.6-4.3 8.2 4.7v3.9c.1.9-.7 1.7-1.7 1.7z" })));
};

var SvgHeart = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 59c-1.3 0-2.6-.5-3.6-1.4-2.3-2-4.4-3.8-6.3-5.4-5.7-4.9-10.7-9-14.2-13.2-4.1-5-6.1-9.7-6.1-15 0-5.1 1.8-9.9 5-13.4C10.1 7 14.7 5 19.6 5c3.7 0 7.2 1.2 10.2 3.5.8.6 1.5 1.2 2.2 2 .7-.7 1.4-1.4 2.2-2 3-2.3 6.4-3.5 10.2-3.5 5 0 9.5 2 12.8 5.6 3.3 3.5 5 8.3 5 13.4 0 5.3-1.9 10-6.1 15-3.5 4.2-8.5 8.4-14.2 13.2-1.9 1.6-4.1 3.5-6.4 5.4-.9.9-2.2 1.4-3.5 1.4zM19.6 9.5c-3.7 0-7.1 1.5-9.6 4.1C7.6 16.3 6.3 20 6.3 24c0 4.1 1.6 8 5 12.1 3.3 3.9 8.1 8 13.6 12.7 1.9 1.6 4.1 3.5 6.4 5.5.4.3 1 .3 1.4 0 2.3-2 4.5-3.8 6.4-5.5C44.7 44 49.5 40 52.7 36.1c3.4-4.1 5-8 5-12.1 0-4-1.4-7.7-3.8-10.3-2.5-2.7-5.9-4.2-9.5-4.2-2.7 0-5.2.9-7.4 2.5-.9.7-1.7 1.5-2.5 2.4-.6.7-1.5 1.2-2.5 1.2s-1.8-.4-2.5-1.2c-.8-.9-1.6-1.7-2.5-2.4-2.1-1.6-4.6-2.5-7.4-2.5z" })));
};

var SvgHelicopter = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60 22.1c-1.2 0-2.2 1-2.2 2.2v.3h-21v-2c0-1.7-1.4-3.1-3.1-3.1H24v-5.7h11.9c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H7.5c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h11.9v5.7H10c-4.5 0-8.2 3.7-8.2 8.2v13.6c0 1.7 1.4 3.1 3.1 3.1h4.6v5.7H7c-.1-1.1-1.1-2-2.2-2-1.2 0-2.2 1-2.2 2.2 0 2.4 2 4.3 4.5 4.3H32c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-5.4v-5.7h7.1c1.7 0 3.1-1.4 3.1-3.1v-2l21-2.3c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V24.4c0-1.3-1-2.3-2.2-2.3zm-37.9 28h-8.2v-5.7h8.2v5.7zm10.2-10.2h-26V27.8c0-2.1 1.7-3.7 3.7-3.7h22.3v15.8zm4.5-5.1v-5.7h21v3.4l-21 2.3z" })));
};

var SvgHelmet = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M57.4 38.1C57.4 23.6 46 11.9 32 11.9 18 11.9 6.6 23.6 6.6 38v.1c-2.7.2-4.9 2.4-4.9 5.2v3.5c0 2.9 2.4 5.2 5.2 5.2h50c2.9 0 5.2-2.4 5.2-5.2v-3.5c.1-2.7-2-5-4.7-5.2zM20.5 19.9v3.8c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-6.1c1.5-.6 3.1-.9 4.7-1.1v9.6c0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2v-9.6c1.6.2 3.2.6 4.7 1.1v6.1c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-3.8c5.7 3.9 9.4 10.5 9.4 18.1v.1H11.1V38c0-7.5 3.8-14.2 9.4-18.1zm37.3 27c0 .4-.3.8-.8.8H7c-.4 0-.8-.3-.8-.8v-3.5c0-.4.3-.8.8-.8h50c.4 0 .8.3.8.8v3.5z" })));
};

var SvgHelp = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M45.9 16.7c-.7-6.6-6.1-12-12.9-12.9-6.2-.7-12 2.4-14.8 7.8-.6 1.1-.1 2.5 1 3 1.1.6 2.5.1 3-1 2-3.8 6-5.9 10.3-5.5 4.7.6 8.4 4.4 8.9 8.9.5 4.3-1.8 8.4-5.7 10.2-4.1 2-6.7 6.2-6.7 10.9V48c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-9.9c0-2.9 1.7-5.6 4.2-6.8 5.5-2.4 8.8-8.4 8.1-14.6zM31.3 55.2c-1.2 0-2.3 1-2.3 2.3v.5c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-.5c-.1-1.3-1.1-2.3-2.3-2.3z" })));
};

var SvgHighlightAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m60 10.2-5.3-5.3c-3-3-7.8-3-10.8 0L13.7 35.1c-1 1-1 2.7 0 3.8l.3.3L9.1 44c-.9.9-1.4 2.1-1.5 3.2l-4.9 4.9c-.7.7-1 1.7-.9 2.6.1.9.7 1.8 1.6 2.2l7.4 4c.5.3 1 .4 1.5.4.8 0 1.7-.3 2.3-1l3.1-3.1c1.1-.1 2.3-.6 3.1-1.5l4.9-4.9.2.2c.5.5 1.2.8 1.9.8s1.4-.3 1.9-.8L60 20.9c1.4-1.4 2.2-3.3 2.2-5.4 0-2-.7-3.9-2.2-5.3zM12 56.6 7.2 54l2.2-2.2 3.7 3.7-1.1 1.1zm10.5-8.8-4.9 4.9c-.3.3-.8.3-1.1 0l-4.3-4.3c-.2-.3-.2-.5-.2-.6s0-.4.2-.6l4.9-4.9 2.7 2.7 2.7 2.8zm34.3-30.1-29 29-4.8-4.8-4.9-4.9 29-29c1.2-1.2 3.2-1.2 4.4 0l5.3 5.3c1.3 1.3 1.3 3.2 0 4.4z" })));
};

var SvgHighlight = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M35.3 1.8h-6.6c-3.8 0-7 3.1-7 7V43c0 1.4 1.2 2.6 2.6 2.6h.1v4.6c0 1.2.4 2.2 1.1 3.1v6c0 .9.4 1.8 1.2 2.4.5.4 1.1.6 1.8.6.3 0 .6 0 .8-.1l7.1-2.1c1.3-.4 2.2-1.6 2.2-3v-3.8c.6-.8 1-1.9 1-3v-4.6c1.5 0 2.6-1.2 2.6-2.6V8.7c.1-3.8-3-6.9-6.9-6.9zm-9.1 6.9c0-1.4 1.1-2.5 2.5-2.5h6.6c1.4 0 2.5 1.1 2.5 2.5v32.4H26.2V8.7zM30 57.2v-2.1h4.1v.9L30 57.2zm5.1-7c0 .2-.2.4-.4.4h-5.4c-.2 0-.4-.2-.4-.4v-4.6h6.2v4.6z" })));
};

var SvgHome = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56.4 62.3H43.3c-3.2 0-5.9-2.6-5.9-5.9V45.8c0-.8-.6-1.4-1.4-1.4h-8c-.8 0-1.4.6-1.4 1.4v10.6c0 3.3-2.6 5.9-5.9 5.9H7.6c-3.2 0-5.9-2.6-5.9-5.9V22.7c0-1.7.8-3.2 2.2-4.1L29.4 2.5c1.6-1 3.6-1 5.1 0L60 18.7c1.4.9 2.2 2.4 2.2 4.1v33.6c.1 3.2-2.6 5.9-5.8 5.9zM28 39.9h8c3.3 0 5.9 2.6 5.9 5.9v10.6c0 .8.6 1.4 1.4 1.4h13.1c.8 0 1.4-.6 1.4-1.4V22.7c0-.1-.1-.2-.1-.3L32.1 6.3c-.1-.1-.2-.1-.3 0L6.4 22.4c-.1.1-.2.2-.2.3v33.7c0 .8.6 1.4 1.4 1.4h13.1c.8 0 1.4-.6 1.4-1.4V45.8c0-3.2 2.6-5.9 5.9-5.9z" })));
};

var SvgHospital = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M55.3 20.3 35.7 3.1c-2.1-1.8-5.3-1.8-7.4 0L8.7 20.3c-1.2 1.1-1.9 2.6-1.9 4.2v32.2c0 3.1 2.5 5.6 5.6 5.6H21c3.1 0 5.6-2.5 5.6-5.6V45.5c0-.6.5-1.1 1.1-1.1h8.6c.6 0 1.1.5 1.1 1.1v11.1c0 3.1 2.5 5.6 5.6 5.6h8.6c3.1 0 5.6-2.5 5.6-5.6V24.5c0-1.6-.7-3.2-1.9-4.2zm-2.6 36.4c0 .6-.5 1.1-1.1 1.1H43c-.6 0-1.1-.5-1.1-1.1V45.5c0-3.1-2.5-5.6-5.6-5.6h-8.6c-3.1 0-5.6 2.5-5.6 5.6v11.1c0 .6-.5 1.1-1.1 1.1h-8.6c-.6 0-1.1-.5-1.1-1.1V24.5c0-.3.1-.6.4-.8L31.3 6.5c.4-.4 1-.4 1.4 0l19.6 17.1c.2.2.4.5.4.8v32.3z" }),
        React__namespace.createElement("path", { d: "M37.1 19.5c-1.2 0-2.2 1-2.2 2.2v2.8h-5.7v-2.8c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2V32c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-2.8h5.7V32c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V21.8c0-1.3-1-2.3-2.2-2.3z" })));
};

var SvgHourglass = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M57 56.7h-3.2c.1-.8.1-1.5.1-2.3 0-7.1-6.2-14.9-11.7-21.8-.1-.2-.3-.4-.4-.6.1-.2.3-.4.4-.6 5.5-6.9 11.7-14.7 11.7-21.8 0-.8 0-1.6-.1-2.3H57c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h3.2c-.1.8-.1 1.6-.1 2.3 0 7.1 6.2 14.9 11.7 21.8.1.2.3.4.4.6-.1.2-.3.4-.4.6-5.5 6.9-11.7 14.7-11.7 21.8 0 .8 0 1.6.1 2.3H7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h50c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zm-42.4-2.3c0-5.5 6-13 10.8-19 .5-.7 1.1-1.3 1.6-2 .6-.8.6-2 0-2.8-.5-.6-1-1.3-1.6-2-4.8-6-10.8-13.5-10.8-19 0-.8 0-1.6.1-2.3h34.6c.1.8.1 1.6.1 2.3 0 5.5-6 13-10.8 19-.5.7-1.1 1.3-1.6 2-.6.8-.6 2 0 2.8.5.6 1 1.3 1.6 2 4.8 6 10.8 13.5 10.8 19 0 .8 0 1.6-.1 2.3H14.7c-.1-.8-.1-1.5-.1-2.3z" })));
};

var SvgHtml5 = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32.5 47.3c-.5 0-.9-.1-1.3-.3l-8-3.2c-1.2-.5-2-1.5-2.2-2.7l-.9-5c-.2-1.2.6-2.4 1.8-2.6 1.2-.2 2.4.6 2.6 1.8l.8 4.5 7.2 2.9 7.2-3 1.8-8.9H22.7c-1.7 0-3.2-1.2-3.5-3l-1.4-8c-.2-1.1.1-2.3.8-3.2l.1-.1c.8-.8 1.8-1.3 3-1.3h23.2c1.2 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3H22.3l1.2 6.6h19.2c1.1 0 2.1.5 2.8 1.3.7.8 1 1.9.7 3L44.1 41c-.2 1.2-1 2.2-2.1 2.6l-8 3.3c-.5.3-1 .4-1.5.4zm-.3-4.5zM22.1 18.9z" }),
        React__namespace.createElement("path", { d: "M32 62.2c-.6 0-1.2-.1-1.8-.2l-15.8-3.7c-3.1-.7-5.5-3.4-5.9-6.6L3.6 10.4c-.2-2.2.5-4.4 1.9-6.1C7 2.7 9.1 1.8 11.3 1.8h41.4c2.2 0 4.3.9 5.8 2.6 1.5 1.6 2.2 3.9 1.9 6l-4.9 41.3c-.4 3.2-2.8 5.9-5.9 6.6L33.8 62c-.6.2-1.2.2-1.8.2zM11.3 6.3c-.9 0-1.8.4-2.4 1.1-.6.6-.9 1.5-.8 2.5L13 51.2c.2 1.3 1.1 2.4 2.5 2.8l15.8 3.7c.5.1 1 .1 1.5 0L48.5 54c1.3-.3 2.3-1.4 2.5-2.8l4.9-41.3c.1-1-.2-1.9-.8-2.6-.6-.7-1.5-1.1-2.4-1.1H11.3zM49 56.1z" })));
};

var SvgImage = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M39.6 31.7c4.7 0 8.6-3.8 8.6-8.6s-3.8-8.6-8.6-8.6-8.6 4-8.6 8.7 3.9 8.5 8.6 8.5zm0-12.6c2.2 0 4.1 1.8 4.1 4.1s-1.8 4.1-4.1 4.1-4.1-1.8-4.1-4.1 1.8-4.1 4.1-4.1z" }),
        React__namespace.createElement("path", { d: "M52.7 1.8H11.3C7.9 1.8 5.1 4.6 5.1 8v48c0 3.4 2.8 6.3 6.3 6.3h41.3c3.4 0 6.3-2.8 6.3-6.3V8c-.1-3.4-2.9-6.2-6.3-6.2zM11.3 6.3h41.3c1 0 1.8.8 1.8 1.8V43l-7.3-6c-2.1-1.7-5.1-1.6-7 .3l-8.2 8.1L21.4 36c-2-1.8-5-1.8-7 0l-4.8 4.3V8c0-1 .8-1.7 1.7-1.7zm41.4 51.5H11.3c-1 0-1.8-.8-1.8-1.8v-9.7l7.8-7.1c.3-.3.7-.3 1 0L30.4 50c.4.4 1 .6 1.5.6.6 0 1.1-.2 1.6-.7l9.7-9.6c.3-.3.7-.3 1 0l10.1 8.4V56c.1 1-.7 1.8-1.6 1.8z" })));
};

var SvgImdb = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M58.8 1H5.2c-2.3.1-4.1 2-4.3 4.1v53.7C1.1 61 2.8 62.7 5 63H59c2.3-.1 4.1-2.1 4.1-4.4V5.4c-.2-2.3-2-4.3-4.3-4.4zm2.9 57.6c0 1.7-1.3 3-2.8 3.1H5c-1.6-.1-2.8-1.4-2.8-3V5.2c.1-1.6 1.4-2.8 3-3h53.5c1.7.1 3 1.4 3 3.1v53.3z" }),
        React__namespace.createElement("path", { d: "M8.4 22.3h4.9v19H8.4zM22.6 31.3l-.7-4.9c-.1-1.5-.4-3-.6-4.1H15v19h4.2V28.8L21 41.3h3.1l1.7-12.8v12.8H30v-19h-6.5l-.9 9zM42.1 23.8c-.4-.6-1.1-.8-2-1.1-.8-.1-2.3-.3-4.5-.3h-3.7v19h5.9c1.5 0 3.6.2 4.5-1.3.4-.6.5-1.4.6-2.2.1-.7.1-1.4.1-2.2v-6.6c0-1.8 0-3-.1-3.7-.1-.6-.4-1.1-.8-1.6zm-3.5 11.6c0 1.3-.3 2-.4 2.3-.1.3-.6.4-1.3.4V25.5c.6 0 .8 0 1.1.1.1.1.3.3.4.6.1.3.1.8.1 1.7v7.5h.1zM55.3 28.3c-.2-.4-.5-.6-1-.8-.8-.3-1.8-.4-2.7-.2-.4.1-.8.2-1.2.4-.2.1-.4.2-.6.4-.1.1-.5.3-.5.4v-6.2h-4.8v19H49l.3-1.3c.4.4.8.8 1.3 1.1.4.3 1 .3 1.5.3s1.1-.1 1.6-.3c1.1-.5 1.8-1.6 1.9-2.8.1-1.7.1-3.4.1-5.2v-3.5c-.1-.5-.2-.9-.4-1.3zm-4.2 8.5c0 .8 0 1.5-.1 1.7-.1.3-.4.4-.8.4-.3 0-.4-.1-.6-.3-.1-.3-.1-.7-.1-1.5V32c0-.8 0-1.4.1-1.5s.3-.3.6-.3.7.1.8.4c.1.3.1.7.1 1.5v4.7z" })));
};

var SvgInbox = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60 26.3c-1.2 0-2.3 1-2.3 2.3v18.8c0 3.9-2.9 7-6.5 7H12.8c-3.7 0-6.5-3.1-6.5-7V28.5c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v18.8c0 6.3 4.9 11.5 11 11.5h38.5c6.1 0 11-5.1 11-11.5V28.5c.1-1.2-1-2.2-2.2-2.2z" }),
        React__namespace.createElement("path", { d: "M30.4 41.2c.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.7l12.2-12.1c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0l-8.3 8.2V7.5c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v26.8L21.4 26c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l12.2 12z" })));
};

var SvgIndentDecrease = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M9.7 6.3h45.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H9.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3zM55.5 57.8H9.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h45.8c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM17.4 42.9c.5.4 1.2.7 1.9.7.4 0 .8-.1 1.2-.2 1.1-.4 1.8-1.4 1.9-2.5V23.4c0-1.2-.7-2.4-1.8-2.9-1-.5-2.2-.3-3.1.4l-10 8.5c-.7.6-1.2 1.5-1.2 2.4 0 .9.4 1.8 1.1 2.4l10 8.7zm.5-16.4v10.9l-6.4-5.5 6.4-5.4zM55.5 15.7H33.6c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h21.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.2-2.3zM55.5 29.8H33.6c-1.2 0-2.3 1-2.3 2.3s1 2.2 2.3 2.2h21.8c1.2 0 2.3-1 2.3-2.2s-1-2.3-2.2-2.3zM55.5 43.8H33.6c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h21.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.2-2.3z" })));
};

var SvgIndentIncrease = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M8.5 6.3h45.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H8.5c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3zM54.3 57.8H8.5c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h45.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3zM56.6 29.5l-10.1-8.6c-.9-.8-2.1-.9-3.1-.4-1.1.5-1.8 1.6-1.8 2.9v17.5c.1 1.1.8 2.1 1.9 2.5.4.2.8.2 1.2.2.7 0 1.3-.2 1.9-.7l10-8.6c.7-.6 1.1-1.4 1.1-2.4s-.4-1.9-1.1-2.4zm-10.5 7.9V26.5l6.4 5.4-6.4 5.5zM8.5 20.2h21.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H8.5c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3zM8.5 34.3h21.8c1.2 0 2.3-1 2.3-2.3 0-1.2-1-2.3-2.3-2.3H8.5c-1.2 0-2.3 1-2.3 2.3.1 1.3 1.1 2.3 2.3 2.3zM8.5 48.3h21.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H8.5c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3z" })));
};

var SvgInfinite = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M48 17.8c-5.8 0-12.8 7-16 10.7-3.3-3.7-10.2-10.7-16-10.7-7.9 0-14.2 6.4-14.2 14.2S8.1 46.2 16 46.2c5.8 0 12.8-7 16-10.7 3.3 3.7 10.2 10.7 16 10.7 7.8 0 14.2-6.4 14.2-14.2S55.9 17.8 48 17.8zM16 41.7c-5.4 0-9.7-4.4-9.7-9.7s4.4-9.7 9.7-9.7c3.6 0 9.5 5.5 13.1 9.7-3.6 4.2-9.5 9.7-13.1 9.7zm32 0c-3.6 0-9.5-5.5-13.1-9.7 3.6-4.2 9.5-9.7 13.1-9.7 5.4 0 9.7 4.4 9.7 9.7s-4.3 9.7-9.7 9.7z" })));
};

var SvgInformation = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M40.4 56h-6.1V21.6c0-2.8-2.3-5-5-5h-5.6c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h5.6c.3 0 .5.2.5.5V56h-6.1c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h16.8c1.2 0 2.3-1 2.3-2.3S41.6 56 40.4 56z" }),
        React__namespace.createElement("circle", { cx: 31.5, cy: 8.7, r: 3 })));
};

var SvgInstagramFill = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("circle", { cx: 32.1, cy: 32, r: 11.6 }),
        React__namespace.createElement("path", { d: "M44.7 1H19.3C9.2 1 1 9.2 1 19.3v25.2C1 54.8 9.2 63 19.3 63h25.2C54.8 63 63 54.8 63 44.7V19.3C63 9.2 54.8 1 44.7 1zM32.1 47.2c-8.5 0-15.2-6.9-15.2-15.2s6.8-15.2 15.2-15.2c8.3 0 15.1 6.9 15.1 15.2s-6.7 15.2-15.1 15.2zm21-29c-1 1.1-2.5 1.7-4.2 1.7-1.5 0-3-.6-4.2-1.7-1.1-1.1-1.7-2.5-1.7-4.2s.6-3 1.7-4.2C45.8 8.6 47.2 8 48.9 8c1.5 0 3.1.6 4.2 1.7 1 1.3 1.7 2.8 1.7 4.4-.1 1.6-.7 3-1.7 4.1z" }),
        React__namespace.createElement("path", { d: "M49 11.6c-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4c1.3 0 2.4-1.1 2.4-2.4s-1-2.4-2.4-2.4z" })));
};

var SvgInstagramOriginal = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M62.9 19.2c-.1-3.2-.7-5.5-1.4-7.6S59.7 7.8 58 6.1s-3.4-2.7-5.4-3.5c-2-.8-4.2-1.3-7.6-1.4C41.5 1 40.5 1 32 1s-9.4 0-12.8.1-5.5.7-7.6 1.4-3.8 1.9-5.5 3.6-2.8 3.4-3.5 5.5c-.8 2-1.3 4.2-1.4 7.6S1 23.5 1 32s0 9.4.1 12.8c.1 3.4.7 5.5 1.4 7.6.7 2.1 1.8 3.8 3.5 5.5s3.5 2.8 5.5 3.5c2 .7 4.2 1.3 7.6 1.4 3.4.2 4.3.2 12.8.2s9.4 0 12.8-.1 5.5-.7 7.6-1.4c2.1-.7 3.8-1.8 5.5-3.5s2.8-3.5 3.5-5.5c.7-2 1.3-4.2 1.4-7.6.1-3.2.1-4.2.1-12.7s.2-9.6.1-13zm-5.6 25.3c-.1 3-.7 4.6-1.1 5.8-.6 1.4-1.3 2.5-2.4 3.5-1.1 1.1-2.1 1.7-3.5 2.4-1.1.4-2.7 1-5.8 1.1H32.1c-8.2 0-9.3 0-12.5-.1-3-.1-4.6-.7-5.8-1.1-1.4-.6-2.5-1.3-3.5-2.4-1.1-1.1-1.7-2.1-2.4-3.5-.4-1.1-1-2.7-1.1-5.8V32c0-8.3 0-9.3.1-12.5.1-3 .7-4.6 1.1-5.8.6-1.4 1.3-2.5 2.3-3.5 1.1-1.1 2.1-1.7 3.5-2.3 1.1-.4 2.7-1 5.8-1.1 3.2-.1 4.2-.1 12.5-.1s9.3 0 12.5.1c3 .1 4.6.7 5.8 1.1 1.4.6 2.5 1.3 3.5 2.3 1.1 1.1 1.7 2.1 2.4 3.5.4 1.1 1 2.7 1.1 5.8.1 3.2.1 4.2.1 12.5s-.1 9.3-.2 12.5z" }),
        React__namespace.createElement("path", { d: "M32 16.1c-8.9 0-15.9 7.2-15.9 15.9 0 8.9 7.2 15.9 15.9 15.9s16-7 16-15.9-7.1-15.9-16-15.9zm0 26.3c-5.8 0-10.4-4.7-10.4-10.4S26.3 21.6 32 21.6c5.8 0 10.4 4.6 10.4 10.4S37.8 42.4 32 42.4z" }),
        React__namespace.createElement("circle", { cx: 48.7, cy: 15.4, r: 3.7 })));
};

var SvgInstagram = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 17.6c-7.9 0-14.4 6.4-14.4 14.4 0 7.9 6.4 14.4 14.4 14.4 7.9 0 14.3-6.4 14.3-14.4 0-7.9-6.4-14.4-14.3-14.4zm0 24.3c-5.4 0-9.9-4.4-9.9-9.9 0-5.4 4.4-9.9 9.9-9.9 5.4 0 9.8 4.4 9.8 9.9 0 5.4-4.4 9.9-9.8 9.9zM47 11.6c-2 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.5-3.5-3.5-3.5z" }),
        React__namespace.createElement("path", { d: "M46.9 1.8H17.1C8.6 1.8 1.8 8.6 1.8 17.1V47c0 8.4 6.9 15.3 15.3 15.3H47c8.4 0 15.3-6.9 15.3-15.3V17.1c0-8.5-6.9-15.3-15.4-15.3zm10.9 45.1c0 6-4.8 10.8-10.8 10.8H17.1c-6 0-10.8-4.8-10.8-10.8V17.1c0-6 4.9-10.8 10.8-10.8h29.8c6 0 10.8 4.9 10.8 10.8v29.8z" })));
};

var SvgInvention = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M43.6 21.9c-3.4-3.2-7.8-4.8-12.6-4.5-8.7.5-15.6 7.7-15.7 16.3-.1 5.5 2.5 10.5 6.8 13.6v7.2c0 3.7 3 6.6 6.7 6.6H35c3.7 0 6.7-3 6.7-6.6v-7.1c4.4-3.1 7-8.1 7-13.5.1-4.5-1.8-8.8-5.1-12zm-8.5 34.8h-6.2c-1.2 0-2.2-1-2.2-2.1v-6.1h10.7v6.1c-.1 1.1-1.1 2.1-2.3 2.1zm3.8-12.8h-4.7v-2.7c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v2.7H25c-3.4-2.3-5.4-6-5.3-10.2.1-6.3 5.1-11.5 11.5-11.9h.7c3.3 0 6.2 1.1 8.5 3.3 2.4 2.3 3.8 5.5 3.8 8.8.1 4.1-1.9 7.8-5.3 10zM32 13.1c1.2 0 2.3-1 2.3-2.3V5.1c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v5.8c.1 1.2 1.1 2.2 2.3 2.2zM58 16.4c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0l-4 3.9c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.6l4-4zM9.2 13.2c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l3.9 3.9c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2l-3.9-3.9zM8.8 35.9H3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h5.8c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM61 35.9h-5.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3H61c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" })));
};

var SvgInvestMonitor = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M35.1 11.9h-5.4c-1 0-1.8-.7-1.8-1.6s.8-1.6 1.8-1.6h8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-2.3V4c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v.1h-1.2c-3.5 0-6.3 2.8-6.3 6.1s2.8 6.1 6.3 6.1H35c1 0 1.8.7 1.8 1.6s-.8 1.6-1.8 1.6h-9c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h4.9v.1c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3v-.1c3.3-.1 6-2.8 6-6.1-.1-3.4-2.9-6.1-6.4-6.1zM13.8 35.3H9.7c-2.3 0-4.3 1.9-4.3 4.3V58c0 2.3 1.9 4.3 4.3 4.3h4.1c2.3 0 4.3-1.9 4.3-4.3V39.6c-.1-2.4-2-4.3-4.3-4.3zm-.3 22.5H9.9v-18h3.6v18zM34.1 29.6H30c-2.3 0-4.3 1.9-4.3 4.2V58c0 2.3 1.9 4.3 4.3 4.3h4.1c2.3 0 4.3-1.9 4.3-4.3V33.9c-.1-2.4-2-4.3-4.3-4.3zm-.3 28.2h-3.6V34.1h3.6v23.7zM54.3 35.3h-4.1c-2.3 0-4.3 1.9-4.3 4.3V58c0 2.3 1.9 4.3 4.3 4.3h4.1c2.3 0 4.3-1.9 4.3-4.3V39.6c0-2.4-1.9-4.3-4.3-4.3zm-.2 22.5h-3.6v-18h3.6v18z" })));
};

var SvgInvestment = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32.2 45.1c1.1 0 2-.9 2-2v-1h.7c3.3 0 6.1-2.7 6.1-6s-2.7-6-6.1-6h-5.2c-1.1 0-2.1-.9-2.1-2s.9-2 2.1-2H38c1.1 0 2-.9 2-2s-.9-2-2-2h-3.8v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1h-.5c-3.3 0-6.1 2.7-6.1 6s2.7 6 6.1 6h5.2c1.1 0 2.1.9 2.1 2s-.9 2-2.1 2h-8.6c-1.1 0-2 .9-2 2s.9 2 2 2h3.8v1c.1 1.1 1 2 2.1 2z" }),
        React__namespace.createElement("path", { d: "M8.4 31.7c.5 0 .9-.2 1.2-.4l7.1-5.6c.9-.7 1-1.9.3-2.8-.7-.9-1.9-1-2.8-.3l-3.6 2.9c2.5-10.2 11.6-17.3 22-17.3 10.5 0 19.6 7.1 22.2 17.3.3 1.1 1.4 1.7 2.4 1.4 1.1-.3 1.7-1.4 1.4-2.4-3-12-13.8-20.4-26.1-20.4-12.2 0-22.8 8.2-25.9 20L4.4 21c-.7-.9-1.9-1.1-2.8-.4-.9.7-1.1 1.9-.4 2.8l5.6 7.5c.3.4.8.7 1.3.8h.3zM63 44.8l-3.9-8.5c-.2-.5-.6-.9-1.2-1.1-.5-.2-1.1-.1-1.6.1l-8.1 4c-1 .5-1.4 1.7-.9 2.7.5 1 1.7 1.4 2.7.9l4-1.9c-3.4 8.9-11.8 14.8-21.4 14.8-9.9 0-18.5-6.3-21.6-15.7-.3-1-1.5-1.6-2.5-1.3-1 .3-1.6 1.5-1.3 2.5 3.6 11 13.8 18.4 25.4 18.4 11.1 0 21-6.8 25-17.1l1.7 3.8c.3.7 1.1 1.2 1.8 1.2.3 0 .6-.1.8-.2 1.2-.4 1.6-1.6 1.1-2.6z" })));
};

var SvgIos = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M62.72 8.52c-.6-1.58-2.04-3.8-4.08-5.38-1.2-.9-2.56-1.78-4.48-2.34C52.08.2 49.52 0 46.4 0H17.6c-3.14 0-5.68.2-7.74.82-1.92.58-3.34 1.44-4.5 2.34-2.04 1.56-3.48 3.8-4.1 5.38C.02 11.72 0 15.32 0 17.6v28.8c0 2.28.02 5.88 1.26 9.08.62 1.58 2.06 3.8 4.1 5.38 1.18.9 2.58 1.78 4.5 2.34 2.06.6 4.6.8 7.74.8h28.8c3.14 0 5.68-.2 7.74-.82 1.92-.58 3.34-1.44 4.5-2.34 2.04-1.56 3.48-3.8 4.1-5.38C64 52.28 64 48.66 64 46.38v-28.8c0-2.28-.02-5.88-1.26-9.08l-.02.02ZM12.68 44H10.3V29.78h2.38V44ZM11.5 27.38c-.8 0-1.48-.66-1.48-1.48s.66-1.48 1.48-1.48 1.5.66 1.5 1.48c-.02.82-.68 1.48-1.5 1.48Zm14.3 16.98c-6.28 0-10.24-4.48-10.24-11.62 0-7.14 3.96-11.64 10.24-11.64s10.24 4.5 10.24 11.64c0 7.14-3.96 11.62-10.24 11.62Zm20.72 0c-4.72 0-8.04-2.6-8.26-6.48h2.14c.24 2.7 2.78 4.54 6.32 4.54 3.38 0 5.8-1.84 5.8-4.38 0-2.1-1.46-3.36-4.8-4.2l-2.8-.72c-4.18-1.06-6.04-2.82-6.04-5.8 0-3.64 3.28-6.24 7.72-6.24 4.4 0 7.6 2.6 7.74 6.18H52.2c-.2-2.54-2.46-4.24-5.66-4.24-3.12 0-5.44 1.74-5.44 4.22 0 1.94 1.4 3.08 4.72 3.92l2.44.62c4.54 1.14 6.44 2.88 6.44 6.02 0 3.96-3.18 6.56-8.18 6.56ZM33.86 32.74c0 5.9-3.12 9.64-8.06 9.64s-8.04-3.74-8.04-9.64c0-5.92 3.1-9.66 8.04-9.66 4.94 0 8.06 3.74 8.06 9.66Z" })));
};

var SvgIsland = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M52.4 22.8c5.5 0 9.9-4.4 9.9-9.9S57.8 3 52.4 3s-9.9 4.4-9.9 9.9 4.4 9.9 9.9 9.9zm0-15.3c3 0 5.4 2.4 5.4 5.4s-2.4 5.4-5.4 5.4c-3 0-5.4-2.4-5.4-5.4s2.4-5.4 5.4-5.4zM60 56.5c-.7 0-1-.2-1.8-1.2-1-1.1-2.4-2.7-5.2-2.7-2.7 0-4.2 1.6-5.2 2.7-.9 1-1.1 1.2-1.8 1.2s-1-.2-1.8-1.2c-1-1.1-2.4-2.7-5.2-2.7-2.7 0-4.2 1.6-5.2 2.7-.9 1-1.1 1.2-1.8 1.2s-1-.2-1.8-1.2c-1-1.1-2.4-2.7-5.2-2.7s-4.2 1.6-5.2 2.7c-.4.5-.7.8-1 1-.9-2.1-3.6-9.2-2.5-14.8.2-1.3.8-2.8 1.4-4.4.6-1.7 1.3-3.5 1.7-5.4 0-.1.1-.2.1-.4 1.8 1 4.2 3.3 5 6 .3 1 1.2 1.7 2.2 1.7.2 0 .4 0 .6-.1 1.2-.3 1.9-1.6 1.6-2.8-1-3.6-4-7.1-7.2-8.8 2.7-2.8 7.5-4.2 12.3-3.3 1.2.2 2.4-.6 2.6-1.8.2-1.2-.6-2.4-1.8-2.6-6.1-1.1-12 .6-15.8 4-.6-2.4-1.7-4.5-2.8-6.2-1.2-1.7-3-3.8-5.5-4.2-1.2-.2-2.4.6-2.6 1.8-.2 1.2.6 2.4 1.8 2.6.5.1 1.5.9 2.5 2.3.8 1.2 1.6 2.9 2.1 4.6-3.7-1.7-8.2-1.7-11.8.6-1.1.7-1.4 2.1-.7 3.1s2.1 1.4 3.1.7c3-1.9 7.3-1.3 9.8 1.3v.1c-.3 1.6-.9 3.3-1.6 5-.6 1.7-1.3 3.5-1.6 5.2-.8 4.2.1 8.7 1.1 12.3-.6-.2-1.2-.3-1.9-.3-2.7 0-4.2 1.6-5.2 2.7-.9 1-1.2 1.2-1.8 1.2-1.2 0-2.3 1-2.3 2.3S2.8 61 4 61c2.7 0 4.2-1.6 5.2-2.7.9-1 1.2-1.2 1.8-1.2.7 0 1 .2 1.8 1.2.8.9 2 2.2 4 2.5.2.1.5.1.7.1h.5c2.7 0 4.2-1.6 5.2-2.7.9-1 1.2-1.2 1.8-1.2s1 .2 1.8 1.2c1 1.1 2.4 2.7 5.2 2.7 2.7 0 4.2-1.6 5.2-2.7.9-1 1.2-1.2 1.8-1.2.7 0 1 .2 1.8 1.2 1 1.1 2.4 2.7 5.2 2.7 2.7 0 4.2-1.6 5.2-2.7.9-1 1.2-1.2 1.8-1.2s1 .2 1.8 1.2c1 1.1 2.4 2.7 5.2 2.7 1.2 0 2.3-1 2.3-2.3s-1.1-2.1-2.3-2.1z" })));
};

var SvgItalic = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M51.2 1.8H22.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h11.5l-9.2 51.5H12.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h30.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H29.7l9.2-51.5h12.3c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3z" })));
};

var SvgJaguar = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M8.247 18.136a1.334 1.334 0 0 0-.047.143c.08.002.278-.027.289-.029.528-.055.657-.387.657-.387-.224-.07-.419-.052-.419-.052-.353.027-.45.255-.475.314a.186.186 0 0 1-.005.011Zm50.257 16.085c.66-.22 1.22-.633 1.352-.957.104-.217.093-.446-.084-.621-.286-.283-.94-.005-1.424.2a7.75 7.75 0 0 1-.28.115s-1.46.426-3.469-.502c0 0-2.038-.996-4.255-2.372 0 0-2.964-1.464-3.676-1.857-3.683-2.04-9.351-4.38-12.178-5.547l-.637-.263c-1.676-.695-4.75-1.772-4.75-1.772-4.099-1.5-5.865-1.79-5.865-1.79-.483-.098-.52.024-.52.024-.049.06.037.144.037.144.423.702.52 1.186.52 1.186-2.782-2.903-7.73-3.157-7.73-3.157-1.496-.08-2.344.68-2.344.68-.12.122.013.206.013.206 1.791.584 2.828 2.5 2.828 2.5-2.138-1.716-3.447-1.995-3.447-1.995-1.452-.266-1.428-.798-1.428-.798 1.331.334 2.161-.357 2.427-.668.099-.117.024-.185-.054-.194-2.11-.231-3.298.004-3.298.004-2.126.32-2.547.844-2.669.995a.964.964 0 0 1-.017.021c-.125.118-.154.568.43.482l.002-.004c.017-.059.208-.715.853-.758 0 0 .694-.1 1.082.088 0 0-.602.88-1.523.947l-.487.035c-.111.007-.927.089-1.4.924 0 0-.247.372.04.68a.41.41 0 0 1 .014.016c.008.01.016.02.026.028 0 0 .28.343.668.318 0 0 .314.086.665-.495 0 0 .399-.679.581-.896 0 0 .234-.36.706-.36 0 0 1.006-.092 1.188 1.155.09.624-.067 1.081-1.18 1.976 0 0-.183.157-.376.278 0 0-.12.097-.048.206 0 0 .165.231.388.215l.023-.001c.215-.015.438-.03 1.54-1.127 0 0 1.529-.394 1.529-1.582 0 0 .036-.645-.308-1.116 0 0 .698.054 1.315 1.189 0 0 .19.498.671.58 0 0 1.665.297 2.811 1.216.449.36.951.835 1.304 1.398-.239-.511-.592-1.508-.307-2.494 0 0 .67 2.011 1.387 2.61.532.444 1.165.77 3.027 1.213 0 0-2.602-.596-5.085-.348 0 0-2.334.216-2.998 1.701l-.009.02c-.091.206-.185.417-.204.714 0 0-.078.868.979.92.316-.158.635-.439.865-.801.14-.22-.156-.304-.156-.304-.266-.12-.2-.375-.2-.375.123-.531 1.142-.573 1.142-.573 1.355 0 3.097.677 3.097.677 3.787 1.205 4.526-.6 4.526-.6.548-.994-.145-3.362-.145-3.362 2.81 2.24 7.316 2.46 7.316 2.46-2.792.351-6.3-.888-6.3-.888.434.87.312 1.918.312 1.918 1.095.505 2.222.84 2.895.974l.107.022c.666.136 1.67.341 5.699.223l.286-.01c.195-.007.37-.013.53-.01.108-.516-.98-1.459-.98-1.459 1.134.494 2.193 1.876 2.39 2.142.128.163.263.363.408.611.03.052.068.119.111.198.551.994 2.163 3.905 6.074 3.847l2.166.014s2.956-.072 4.214.8c.619.43.86.637 1.121.863.088.075.178.153.286.242.097.08.197.163.298.25.714.602 1.538 1.297 2.476 1.38.71.1 1.317-.072 1.486-.553 0 0 .243-.604-.346-.95a4.457 4.457 0 0 1-.872-.43l-.03-.02c-.613-.384-.635-.398-1.179-.876-.207-.183-.459-.498-.704-.807-.244-.306-.483-.605-.667-.76-.401-.337-.951-.735-2.236-.785-1.307-.051-2.83-.118-3.277-.209-.466-.094-.733-.167-1.146-.499a2.894 2.894 0 0 1-.731-.89 7.184 7.184 0 0 1-.246-.505c-.113-.246-.246-.536-.433-.88-.232-.423-.674-.772-.674-.772l.086.054c.524.334.817.52 1.197 1.09.837 1.252 1.503 1.631 2.066 1.83.556.198 1.749.34 2.757.46.505.061.964.116 1.273.17a2.84 2.84 0 0 1 1.598.872l.273.283c.378.392.758.786 1.11 1.113.616.575 1.01.825 2.226 1.183.524.153.68.324.68.324.744.247 2.198.24 2.895.008Zm.744-2.197s.845-.15 1.108.461c.093.22.039.57-.27.952-1.106 1.452-3.47 1.3-4.028 1.264-.1-.007-.142-.01-.107.002.19.451.25 1.257-.526 1.71 0 0-1.32.715-3.603-.823-.429-.234-1.008-.723-1.518-1.155-.406-.343-.769-.65-.979-.762-1.085-.58-2.19-.592-3.548-.592l-2.234.062c-4.387.113-5.827-2.419-6.802-4.134-.121-.214-.236-.415-.348-.597-.247-.402-.874-.915-1.86-1.033 0 0-.713-.05-1.32-.005-3.082.232-4.982.036-4.982.036-1.95-.224-3.282-.768-3.282-.768-.56 1.255-2.88 1.02-2.88 1.02-2.04-.182-3.612-1.098-3.612-1.098-1.447-.64-2.164-.458-2.164-.458-.217.05-.17.291-.17.291.08.301-.04.617-.16.746-.178.257-.548.499-.755.62-.09.063-.266.122-.427.14-.222.024-.458.02-.745-.106-.2-.087-.511-.314-.622-.625 0 0-.593-1.431.93-2.617 0 0 1.092-1.038 3.796-1.008-.71-.54-3.32-2.41-5.147-2.286 0 0-1.647.17-2.816 1.431 0 0-.454.517-.999.499-.616 0-.837-.83-.837-.83-.1-.264.126-.446.126-.446l.075-.06a3.977 3.977 0 0 1-.085-.306c-.04-.182-.024-.225-.024-.225s.36.198.52.201l.079-.004c.282-.058.587-.586.587-.586.271-.668.03-1.175-.195-1.333-.282-.198-.66-.074-.812.045-.171.134-.34.403-.43.62 0 0-.076.183-.06.38.009.111.076.27.136.412.036.085.07.164.086.221 0 0-.43-.015-.677-.264 0 0-.007.06-.245.084-.536.053-.887-.307-1.063-.513-.174-.206-.45-.687-.45-.687-.223-.423.054-.706.054-.706.517-.6 1.153-1.017 1.153-1.017.053-.046.036-.118.036-.118-.124-.26.13-.47.13-.47C8.727 15.946 12.994 16 12.994 16c8.237 0 19.687 5.196 19.687 5.196 5.935 2.453 9.947 4.51 9.947 4.51 3.502 1.76 7.003 3.599 7.949 4.14.252.144.54.324.867.529.903.564 2.105 1.316 3.68 2.021 0 0 1.116.496 2.573.195.35-.072.65-.214.91-.339.245-.116.455-.217.642-.228ZM11.935 17.333c.549.017 1.02-.189 1.022-.218.002-.03-.608-.087-.608-.087-.558.023-.786.23-.79.254-.003.024.146.043.376.05Zm14.024 29.541c-2.643 0-5.155-.909-5.155-3.982 0-.999.444-2.022 1.113-2.755 1.05-1.139 2.642-1.593 4.147-1.593.91 0 1.964.206 2.784.623v.95c-.743-.554-1.722-.936-2.676-.936-2.174 0-3.673 1.36-3.673 3.61 0 2.037 1.323 3.43 3.358 3.43.518 0 1.235-.092 1.728-.28v-2.922h1.529v3.262c-.112.05-.23.098-.353.141-.858.307-1.94.452-2.802.452ZM12.86 40.213l-1.77 3.693h3.456l-1.686-3.693Zm2.946 6.485L14.8 44.45h-3.97L9.75 46.698h-.97l3.991-8.003h.95l3.908 8.003h-1.82Zm33.484-6.485-1.77 3.693h3.454l-1.684-3.693Zm2.945 6.485-1.008-2.248h-3.97l-1.08 2.248h-.97l3.992-8.003h.951l3.906 8.003h-1.82Zm-14.292.177c2.012 0 3.214-.671 3.599-2.265.099-.408.145-.858.145-1.654v-4.26h-.942v4.58c0 .554-.047.912-.107 1.204-.26 1.27-1.222 1.737-2.664 1.737-.683 0-1.491-.159-1.96-.702-.412-.464-.498-1.093-.498-2.148v-4.671h-1.53v4.752c0 .06 0 .12.002.18.013.901.141 1.737.77 2.353.617.62 1.819.894 3.185.894Zm24.87-5.76c0-1.352-.983-1.864-2.21-1.864H59.48v3.828h.983c.825 0 1.318-.154 1.703-.463.405-.326.648-.826.648-1.5Zm.39 5.583-2.121-3.073H59.48v3.073h-1.53v-8.002h2.894c1.174 0 2.35.17 3.004.893.342.377.528.903.528 1.579 0 1.237-.932 1.986-1.763 2.28l2.352 3.25h-1.762ZM2.314 48.343c-.404.19-.846.315-1.302.315 1.049-.758 1.492-1.529 1.644-2.806.089-.708.089-1.417.089-2.125v-5.031h1.53v6.056c0 1.479-.57 2.908-1.96 3.59Z", clipRule: "evenodd" })));
};

var SvgJamstack = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M25.692 2.241a35.714 35.714 0 0 1 6.208-.85c7.54-.006 15.08-.003 22.62-.001 2.702.026 5.412-.083 8.112.058.002 10.193.006 20.388-.001 30.58-.005 5.738-1.608 11.474-4.64 16.348-3.462 5.59-8.778 10.042-14.953 12.331-3.043 1.186-6.295 1.752-9.547 1.913a30.89 30.89 0 0 1-9.924-1.429c-5.914-1.895-11.179-5.717-14.861-10.712-2.636-3.506-4.464-7.609-5.373-11.896-1.39-6.425-.695-13.298 2.01-19.294C9.039 10.894 16.74 4.341 25.692 2.241Zm7.563 7c-.011 7.365-.011 14.73 0 22.096 7.216.007 14.432.008 21.648 0 .006-7.366.01-14.731-.001-22.094-7.215-.004-14.432-.002-21.647-.002m-22.9 23.387c-.065.809.037 1.617.13 2.42.725 5.515 3.521 10.747 7.765 14.354 3.78 3.276 8.706 5.228 13.715 5.327.007-7.357 0-14.715.004-22.071-7.205-.044-14.41.017-21.614-.03m22.905.06c-.018 7.368-.023 14.739.003 22.108 1.25-.078 2.503-.182 3.73-.442 5.086-1.017 9.73-3.956 12.95-8.003 3.088-3.85 4.85-8.728 4.953-13.661-7.211-.004-14.423-.002-21.636-.002Z" })));
};

var SvgJava = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M42.4 38.9c1.1-.8 2.8-1.5 2.8-1.5s-4.6.8-9.3 1.3c-5.7.3-11.8.5-14.9 0-7.3-1 3.9-3.7 3.9-3.7s-4.4-.3-9.9 2.4c-6.2 3 15.9 4.4 27.4 1.5zm-10.2-4c-2.4-5.2-10.1-9.7 0-17.6 12.5-10 6-16.3 6-16.3 2.7 10.3-9.2 13.4-13.4 19.7-2.9 4.2 1.5 8.9 7.4 14.2zM46 13.7s-21.3 5.4-11.1 17c3 3.4-.8 6.5-.8 6.5s7.6-3.9 4.1-8.9c-3.2-4.6-5.8-6.9 7.8-14.6zm-.7 32.6c-.1.1-.1.1-.1.3 15.5-4.1 9.9-14.5 2.4-11.8-.4.1-.8.4-1 .8.4-.1.8-.3 1.4-.4 3.5-.7 8.9 5.1-2.7 11.1zm5.6 7.6s1.7 1.4-2 2.5c-7 2.1-29.1 2.7-35.3.1-2.3-1 2-2.4 3.2-2.7 1.4-.3 2.1-.1 2.1-.1-2.4-1.7-15.9 3.4-6.8 4.8 24.9 4.2 45.3-1.6 38.8-4.6zm-27-5c-9.4 2.7 5.8 8.2 17.9 3-1.1-.4-2.4-1.1-3.4-1.7-5.5 1.1-7.9 1.1-12.8.6-4.1-.5-1.7-1.9-1.7-1.9zm21.8 11.8c-9.4 1.7-21.4 1.5-28.3.4 0 0 1.4 1.1 8.7 1.7 11.1.7 28.3-.4 28.7-5.8 0 0-.7 2.2-9.1 3.7zm-5.4-17c-7.2 1.4-11.4 1.4-16.6.8-4.1-.4-1.4-2.4-1.4-2.4-10.4 3.5 5.8 7.5 20.6 3.1-.9-.3-1.7-.8-2.6-1.5z" })));
};

var SvgJavascript = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M1 1v62h62V1H1Zm33.8 48.3c0 6.1-3.6 8.9-8.8 8.9-4.6 0-7.3-2.4-8.7-5.4l4.8-3c.8 1.7 1.7 3 3.8 3 2 0 3.1-.7 3.1-3.7V29.5h5.8v19.8Zm13.8 8.9c-5.4 0-8.9-2.7-10.7-5.9l4.8-2.8c1.3 2 3 3.5 5.8 3.5 2.4 0 3.9-1.1 3.9-3 0-2-1.5-2.7-4.2-3.9l-1.4-.6c-4.2-1.7-7-4.1-7-8.9 0-4.4 3.2-7.6 8.5-7.6 3.7 0 6.3 1.3 8.2 4.7l-4.5 3c-1-1.7-2-2.5-3.8-2.5-1.7 0-2.8 1.1-2.8 2.5 0 1.7 1.1 2.4 3.5 3.5l1.4.6c4.9 2.1 7.8 4.2 7.8 9.2.1 5.3-4 8.2-9.5 8.2Z" })));
};

var SvgJcb = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 65", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M10.6 8.7C5.4 8.7 1 12.9 1 18.2v38.2h52.4c5.4 0 9.6-4.4 9.6-9.6V8.7H10.6Zm10.8 37.6c0 3.9-3.1 6.9-6.9 6.9H4.4V38.5s3.1.8 7 .8c6.6 0 8.6-2.5 8.6-5.6v-8h-5.9v8.2c0 2-1.3 3.4-3.7 3.4-2 0-3.9-.6-5.9-1.5v-17c0-3.9 3.1-6.9 6.9-6.9h10v34.4Zm19.1 0c0 3.9-3.1 6.9-6.9 6.9h-10V37.4c1.7 1.4 4.8 2.4 9.7 2.3 2.7-.1 5.4-.8 5.4-.8v-3c-1.4.7-3.1 1.4-5.2 1.5-3.7.3-5.9-1.5-5.9-4.8 0-3.2 2.3-5.1 5.9-4.8 2.1.1 3.9.7 5.2 1.6v-3s-2.8-.7-5.4-.8c-4.8-.1-7.9.7-9.7 2.3v-9c0-3.9 3.1-6.9 6.9-6.9h10v34.3Zm19 0c0 3.9-3.1 6.9-6.9 6.9H42.4v-14h10.7c2.5 0 4.4-1.4 4.4-3.5 0-2-1.7-3.2-3.9-3.2v-.1c2-.3 3.1-1.5 3.1-3.1 0-2-1.7-3.1-3.9-3.2H42.5v-7.2c0-3.9 3.1-6.9 6.9-6.9h10.1v34.3ZM49.9 33h.4c.7.1 1.4 1.1 1.4 2 0 1-.7 1.7-1.4 1.7H46V33h3.9ZM46 31.4V28h3.9c.7.1 1.4.7 1.4 1.7 0 .8-.7 1.6-1.4 1.7H46Z" })));
};

var SvgJoomlaOriginal = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M12.2 32.1 11.1 31c-3.7-3.7-4.8-8.9-3.5-13.7-3.7-.8-6.5-4.2-6.5-8.2C1.1 4.6 4.8.9 9.3.9c4.2 0 7.6 3 8.2 6.9 4.5-1.1 9.3.1 12.8 3.7l.4.4-6.1 6.1-.4-.4c-2-2-5.2-2-7.2 0s-2 5.2 0 7.2l13.7 13.7-6.1 6.1-6.5-6.2-5.9-6.3Z" }),
        React__namespace.createElement("path", { d: "m19.1 25.4 6.5-6.5 6.1-6.1 1.1-1.1c3.7-3.7 8.9-4.8 13.5-3.5.6-4.1 4.1-7 8.2-7 4.5 0 8.2 3.7 8.2 8.2 0 4.2-3.1 7.6-7.2 8.2 1.4 4.6.1 9.9-3.5 13.4l-.4.4-5.9-6.1.4-.4c2-2 2-5.2 0-7.2s-5.2-2-7.2 0l-1 1.3-6.1 6-6.5 6.5-6.2-6.1Z" }),
        React__namespace.createElement("path", { d: "M46.6 56.2c-4.8 1.4-10 .3-13.7-3.4l-.4-.4 6.1-6.1.4.4c2 2 5.2 2 7.2 0s2-5.2 0-7.2l-1.3-1.1-6.1-6.2-6.5-6.5 6.1-6.1 13.8 13.8c3.5 3.5 4.8 8.5 3.7 13 4.1.6 7 4.1 7 8.2 0 4.5-3.7 8.2-8.2 8.2-3.9.1-7.3-2.9-8.1-6.6Z" }),
        React__namespace.createElement("path", { d: "m44.3 39-6.5 6.5-6.1 6.1-1.1 1.1c-3.5 3.5-8.5 4.8-13 3.7-1 3.8-4.2 6.6-8.2 6.6-4.5 0-8.2-3.7-8.2-8.2 0-3.8 2.7-7.2 6.3-8-1.1-4.7 0-9.6 3.5-13.1l.4-.4 6.1 6.1-.4.4c-2 2-2 5.2 0 7.2s5.2 2 7.2 0l1.1-1.1 6.1-6.1 6.5-6.5 6.3 5.7Z" })));
};

var SvgJoomla = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56.8 43.7c.3-4.2-1.1-8.3-4-11.4 2.8-3.2 4.2-7.5 3.7-11.6 3.7-1.4 6.2-5.1 6.2-9.3 0-5.5-4.5-10-10-10-4.1 0-7.8 2.5-9.3 6.1-4.2-.4-8.6.8-11.9 3.7-3.1-2.8-7.2-4.2-11.3-3.8-1.6-3.5-5.1-6.1-9.3-6.1C5.5 1.1 1 5.7 1 11.2c0 4 2.3 7.3 5.6 9-.6 4.5.7 8.8 3.8 12.1-3 3.2-4.2 7.3-3.8 11.6C3.3 45.5 1 49 1 52.8c0 5.5 4.5 10 10 10 4 0 7.5-2.3 9.2-5.6 4.2.4 8.2-1 11.4-3.8 3.2 3 7.8 4.4 12.1 3.7 1.7 3.4 5.2 5.6 9.2 5.6 5.5 0 10-4.5 10-10 .2-3.8-2.3-7.5-6.1-9Zm-12.7-1.3c0 .6-.1 1.1-.7 1.6-.7.7-1.7.8-2.5.4l3-3c0 .3.2.7.2 1Zm-24.6-.9 3 3c-.7.3-1.7.1-2.4-.4-.4-.4-.7-1-.7-1.6 0-.4 0-.8.1-1Zm12.1-5.9-3.2-3.2 3.2-3.2 3.2 3.2-3.2 3.2ZM19.4 22.3c0-.6.1-1.1.7-1.6.7-.7 1.7-.8 2.5-.4l-3 3c-.2-.4-.2-.7-.2-1Zm24.4.9-3-3c.7-.3 1.8-.1 2.5.4.4.4.7 1 .7 1.6.1.4-.1.7-.2 1Zm.7-10.6 2.7.7.4-2.8C48 8 50.3 6 52.7 6c3 0 5.2 2.3 5.2 5.1 0 2.7-2 4.8-4.5 5.1l-2.8.4.7 2.7c.8 3 .3 6.1-1.4 8.6l-2.1-2.3c.7-1.1 1-2.3 1-3.5 0-2-.7-3.7-2.1-5.1-2.8-2.8-7.2-2.8-10 0l-11 11-2.3-2.1 11-10.9c2.6-2.6 6.6-3.5 10.1-2.4ZM5.9 11.2c0-2.8 2.3-5.1 5.2-5.1 2.5 0 4.8 1.8 5.1 4.4l.4 2.5 2.5-.6c3-.7 5.8-.1 8.2 1.6L25 16.3c-2.7-1.7-6.4-1.3-8.6 1.1-1.4 1.4-2.1 3.1-2.1 5.1 0 2 .7 3.7 2.1 5.1l11 11-2.4 2-9.7-10-1.1-1.1c-2.7-2.7-3.5-6.4-2.7-10.2l.7-2.4-2.5-.6c-2.2-.5-3.8-2.7-3.8-5.1Zm13.3 41.1-2.4-.6-.6 2.4c-.4 2.4-2.7 4.1-5.1 4.1-3 0-5.2-2.3-5.2-5.1 0-2.4 1.7-4.5 4-5.1l2.4-.6-.6-2.7c-.7-3-.1-6.1 1.4-8.5l2.3 2.3c-.7 1.1-1 2.3-1 3.5 0 2 .7 3.7 2.1 5.1 2.8 2.8 7.2 2.8 10 0l11-11 2.3 2.1-11 11c-2.5 2.8-6.1 3.8-9.6 3.1Zm33.9 5.8c-2.7-.1-4.8-1.8-5.4-4.2l-.4-2.7-2.5 1c-3.1.8-6.4.4-8.9-1.4l2.3-2.3c2.7 1.7 6.4 1.3 8.6-1.1 1.4-1.4 2.1-3.1 2.1-5.1 0-2-.7-3.7-2.1-5.1L35.9 26.4l2.3-2.3 11 11c2.5 2.5 3.5 6.2 2.7 9.7l-.6 2.7 2.7.5c2.5.4 4.5 2.7 4.5 5.1-.3 2.7-2.6 5-5.4 5Z" })));
};

var SvgJsfiddle = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56.3 29.8c-.4-.3-.6-.7-.7-1.1-.3-1.8-.4-3.7-1-5.4-4-11-16.9-15.7-27.1-10-3 1.7-5.4 4-7.2 6.9-.4-.1-.6-.3-.8-.4-3.2-1.4-6.5-1.1-9.5 1-2.8 2-4 4.8-3.5 8.5 0 .3-.1.8-.4 1.1C1.7 33.6 0 39 1.6 44.2 3.2 49.3 8 53 13.2 53.1c3.2-.1 6.6-.1 10-.1 9.2 0 18.3.1 27.7-.1 5.8-.1 10.6-4.1 11.9-9.6 1.1-5.4-1.4-10.7-6.5-13.5zM58.7 47c-2 2.4-4.7 3.8-7.9 3.8-6.2.1-12.6 0-18.8 0 0 .1-17.9 0-18.1 0-4.8 0-8.5-2.1-10.4-6.6s-.4-10 3.8-12.8c1-.7 1.4-1.3 1.1-2.5-.6-3 .4-5.2 3-6.9 2.5-1.7 5.2-1.7 7.9-.3 1.1.6 1.7 1.3 2.4-.3 1.6-3 3.8-5.1 6.6-6.6 10.7-6.1 25.1.8 25.3 14.5 0 .8.3 1.4 1.1 1.7 6.6 3.1 8.4 10.7 4 16zm-9.6-8.9c-.7 3.4-3.8 6.1-7.3 6.1-1.8 0-3.5-.7-4.8-2-3-2.8-7.9-8.2-10.6-10.3-2.3-1.7-4.7-1.4-6.6.4-5.5 4.8 1.7 13.4 7.3 8.5.4-.4.8-1.1 1.4-1.4.8-.6 2.3-.1 1.4 1.1-2 3-5.4 4.2-8.6 3.2S16 39.8 16 36c.1-2.4 1.4-4.8 3.8-6.1s5.1-1.4 7.3.3c5.6 4.2 8.3 9 11.9 11.1 2.7 1.7 5.9.7 7.6-2 3.2-5.4-3.8-11.6-8.6-6.9-.4.4-.7 1-1.3 1.3-1.1.7-2-.4-1.4-1.1 2.3-3.1 5.5-4.5 9.2-3.1 3.4 1.3 5.3 5 4.6 8.6z" })));
};

var SvgJuice = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M50.9 16.1c-.9-1.1-2.3-1.7-3.7-1.7h-12l3.3-8.2h8.7c1.2 0 2.2-1 2.3-2.2 0-1.2-1-2.3-2.2-2.3h-9.2c-1.6 0-3 1-3.5 2.4l-4.2 10.3H16.8c-1.4 0-2.8.6-3.7 1.7-.9 1.1-1.4 2.5-1.2 3.9l4 35.4c.4 3.9 3.7 6.8 7.6 6.8h17.1c3.9 0 7.2-2.9 7.6-6.8l4-35.4c.1-1.4-.3-2.8-1.3-3.9zm-34.5 3c.1-.1.2-.2.3-.2h30.4c.2 0 .3.1.3.2s.1.2.1.4l-1.3 11.2-1-.5c-3-1.5-6.4-1.6-9.4-.3l-1.2.5c-1.7.8-3.6.7-5.3-.1l-.3-.2c-3.1-1.5-6.8-1.4-9.7.2l-1.6.8-1.3-11.6c-.1-.2 0-.3 0-.4zm24.1 38.7h-17c-1.6 0-3-1.2-3.2-2.8l-2.1-19 3.2-1.6c1.8-.9 3.9-1 5.7-.1l.5.3c2.9 1.4 6.2 1.4 9.1.1l1.2-.5c1.8-.8 3.8-.7 5.5.2l2.5 1.3-2.2 19.5c-.2 1.3-1.5 2.6-3.2 2.6z" })));
};

var SvgKey = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60.1 43.3 48.6 31.9c-3-2.9-7.5-2.9-10.4 0l-1.5 1.5L7 2.4c-.8-.9-2.3-.9-3.2 0-.9.8-.9 2.3 0 3.2l3.4 3.6-4.8 5c-.9.9-.8 2.3.1 3.2.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7l4.7-4.9 5.6 5.9-7 7.4c-.9.9-.8 2.3.1 3.2.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7l6.9-7.2 14.5 15.1-1.5 1.5c-2.9 3-2.9 7.5 0 10.4l11.4 11.6c1.5 1.4 3.4 2.1 5.2 2.1 1.9 0 3.8-.7 5.2-2.2l6.2-6.2c1.4-1.4 2.2-3.3 2.2-5.3-.2-2-.9-3.9-2.3-5.3zm-3.2 7.4-6.2 6.2c-1.2 1.2-2.9 1.2-4.1 0L35.1 45.4c-1.2-1.2-1.2-2.9 0-4.1l3-3 .1-.1.1-.1 3.1-3.1c.6-.6 1.3-.9 2-.9s1.5.3 2.1.9l11.4 11.5c.6.6.9 1.3.9 2.1-.1.8-.4 1.5-.9 2.1z" })));
};

var SvgKeyboard = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56 11.9H8c-3.4 0-6.3 2.8-6.3 6.3v27.6c0 3.4 2.8 6.3 6.3 6.3h48c3.4 0 6.3-2.8 6.3-6.3V18.2c0-3.5-2.9-6.3-6.3-6.3zm1.8 33.9c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8V18.2c0-1 .8-1.8 1.8-1.8h48c1 0 1.8.8 1.8 1.8v27.6z" }),
        React__namespace.createElement("path", { d: "M42.2 38.9H21.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h20.4c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM23.5 24c0-1.2-1-2.3-2.3-2.3h-1.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h1.7c1.3 0 2.3-1 2.3-2.3zM31.1 26.3h1.7c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-1.7c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3zM44.5 21.8h-1.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h1.7c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM25.3 34H27c1.2 0 2.3-1 2.3-2.2s-1-2.3-2.3-2.3h-1.7c-1.2 0-2.3 1-2.3 2.3s1.1 2.2 2.3 2.2zM36.9 34h1.7c1.2 0 2.3-1 2.3-2.2s-1-2.3-2.3-2.3h-1.7c-1.2 0-2.3 1-2.3 2.3s1.1 2.2 2.3 2.2z" })));
};

var SvgKeywordResearch = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60.7 50.6 47.6 37.5c-1.9-1.9-5-2-7.1-.3l-5.1-5.1c5.8-7.4 5.3-18.1-1.5-24.9-7.3-7.3-19.3-7.3-26.6 0S0 26.5 7.3 33.8c3.7 3.7 8.5 5.5 13.3 5.5 4.1 0 8.2-1.3 11.6-4l5.1 5.1c-1.8 2.1-1.7 5.2.3 7.1l13.1 13.1c1 1 2.4 1.5 3.7 1.5 1.3 0 2.7-.5 3.7-1.5l2.6-2.6c2-2 2-5.3 0-7.4zM10.4 30.7c-5.6-5.6-5.6-14.7 0-20.3 2.8-2.8 6.5-4.2 10.1-4.2s7.3 1.4 10.1 4.2c5.6 5.6 5.6 14.7 0 20.3-5.5 5.6-14.6 5.6-20.2 0zm47.1 24.2-2.6 2.6c-.3.3-.8.3-1.1 0L40.7 44.4c-.3-.3-.3-.8 0-1.1l2.6-2.6c.1-.1.3-.2.5-.2s.4.1.5.2l13.1 13.1c.4.3.4.8.1 1.1z" }),
        React__namespace.createElement("path", { d: "M15.6 19.2h4.9c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-4.9c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3zM25.8 22.1H15.6c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h10.2c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" })));
};

var SvgKubernetes = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "m24.82 33.269-6.879 1.983a14.947 14.947 0 0 1 2.057-8.648l5.247 4.678c.495.425.565 1.134.14 1.632-.14.211-.284.285-.564.355ZM27.018 38.302c.07.214.07.495-.07.709l-2.696 6.521c-2.481-1.628-4.468-4.11-5.458-6.946l7.016-1.207c.569 0 1.138.354 1.208.923ZM27.937 28.162l-5.882-4.184c1.843-1.772 4.11-3.046 6.591-3.615l1.418-.284-.354 7.093c0 .636-.565 1.134-1.204 1.134-.214 0-.355-.07-.569-.144ZM29.429 33.34l1.344-1.703H32.9l1.348 1.702-.495 2.057-1.916.92-1.913-.92-.495-2.057ZM32.83 40.924l3.404 6.17c-.424.07-.852.14-1.347.284-.993.21-1.987.355-3.05.355-1.488 0-3.047-.284-4.465-.71l3.475-6.31c.354-.425.92-.568 1.418-.284.21.14.354.284.565.495ZM33.894 27.313l-.425-7.16c3.12.354 5.886 1.699 8.013 3.825l-5.816 4.114c-.495.284-1.204.214-1.558-.284a.63.63 0 0 1-.214-.495ZM37.793 37.309l7.09 1.207c-.355.99-.78 1.913-1.345 2.692a13.535 13.535 0 0 1-4.257 4.254l-2.762-6.665c-.144-.565.14-1.134.635-1.344.214-.074.428-.144.639-.144ZM45.307 30.787c.355 1.489.428 2.977.285 4.465l-6.736-1.913c-.639-.14-.993-.78-.85-1.418.071-.214.141-.354.285-.495l5.318-4.822a14.364 14.364 0 0 1 1.698 4.183Z" }),
        React__namespace.createElement("path", { fill: "#000", d: "M62.965 38.516 57.578 15.33c-.358-1.133-1.208-2.056-2.271-2.622L33.683 2.354C33.114 2.074 32.479 2 31.91 2c-.568 0-1.204 0-1.772.144L8.514 12.564a3.815 3.815 0 0 0-2.127 2.626L1.07 38.516a4.463 4.463 0 0 0 .779 3.401l14.959 18.504c.853.853 2.056 1.421 3.264 1.491h23.82c1.275.14 2.482-.424 3.261-1.491l14.96-18.504c.708-.993.993-2.197.852-3.401ZM54.1 40.074c-.14 0-.21 0-.354-.07-.047-.047-.094-.07-.14-.07-.14 0-.215-.074-.285-.074-.284-.07-.495-.21-.779-.354-.14 0-.284-.07-.425-.14h-.073a11.952 11.952 0 0 0-2.268-.64h-.07a.802.802 0 0 0-.569.215s0 .07-.07.07l-.565-.07c-1.277 4.04-4.043 7.444-7.658 9.641l.214.569s-.074 0-.074.07c-.14.21-.14.495-.07.709.284.709.639 1.418 1.134 2.057v.14c.144.14.214.214.284.355.214.214.354.424.495.709.074.07.144.14.144.214 0 0 .07 0 .07.07.144.354.144.709.07 1.063-.07.355-.354.64-.635.78-.214.07-.355.143-.569.143-.568 0-1.063-.354-1.347-.852-.07 0-.07-.07-.07-.07-.07-.07-.07-.141-.145-.215-.14-.21-.21-.495-.28-.779l-.144-.425v-.07c-.21-.782-.565-1.491-.92-2.2a1.115 1.115 0 0 0-.568-.425c0-.047-.024-.07-.07-.07l-.285-.495c-.709.21-1.488.495-2.267.635a14.222 14.222 0 0 1-3.83.498c-2.126 0-4.183-.354-6.17-1.133l-.28.565c0 .047-.025.07-.074.07-.21.074-.425.214-.565.428-.355.71-.71 1.418-.923 2.197l-.14.425c-.07.284-.215.498-.285.78-.07.073-.14.143-.14.213-.074 0-.074.07-.074.07-.28.499-.78.853-1.344.853-.144 0-.355-.073-.499-.143-.639-.355-.92-1.204-.565-1.913.07 0 .07-.074.07-.074.07-.07.07-.14.14-.21.215-.285.355-.57.5-.71.14-.144.21-.214.28-.354v-.07c.428-.64.853-1.348 1.137-2.057.07-.214.07-.498-.074-.709 0 0-.07 0-.07-.07l.355-.499c-.71-.354-1.274-.779-1.913-1.274-2.766-2.127-4.752-5.036-5.816-8.297l-.635.07s0-.07-.074-.07a.806.806 0 0 0-.565-.21h-.07c-.853.14-1.562.354-2.341.635h-.07c-.144 0-.285.074-.429.144-.21.07-.494.21-.779.284-.07 0-.284-.074-.284 0s0 .07-.07.07c-.14.07-.21.07-.355.07-.639.07-1.274-.354-1.418-.993a1.382 1.382 0 0 1 1.134-1.628c.05-.05.097-.074.144-.074.14 0 .21-.07.284-.07.281 0 .565-.07.85-.07.14-.07.284-.07.424-.07.853-.07 1.632-.215 2.412-.425.214-.144.424-.285.498-.499 0 0 .07 0 .07-.07l.565-.14c-.635-4.044.284-8.154 2.482-11.628.073-.144.143-.215.214-.355l-.411-.414c.032-.204-.098-.453-.228-.58-.565-.568-1.274-.992-1.983-1.417-.144-.07-.284-.144-.428-.214a8.21 8.21 0 0 1-.78-.425c-.07 0-.21-.14-.21-.14s0-.074-.074-.074c-.565-.495-.709-1.344-.284-1.983.214-.354.569-.498.993-.498.355 0 .71.144.993.354l.07.074c.074.07.144.07.215.14.214.214.354.425.568.639.07.07.21.14.281.284.498.565 1.137 1.134 1.773 1.629.143.07.284.144.428.144.144 0 .21-.074.28-.074h.074l.425.284c2.337-2.481 5.387-4.254 8.718-4.963.853-.14 1.632-.284 2.412-.354l.07-.565v-.144c.214-.14.284-.355.354-.565 0-.853 0-1.632-.14-2.411v-.07c0-.144 0-.285-.07-.429-.07-.28-.144-.565-.144-.85v-.354c0-.354.144-.709.428-.993.354-.354.78-.565 1.204-.495.709.07 1.277.78 1.204 1.488v.425c-.07.284-.07.569-.14.853 0 .14-.07.28-.07.425v.07c-.145.85-.145 1.632-.145 2.411.074.21.144.425.355.565v-.07l.073.568c3.331.355 6.592 1.63 9.217 3.686.565.568 1.204 1.133 1.773 1.702l.565-.354h.073c.07.07.211.07.281.07.144 0 .284-.07.425-.14a9.324 9.324 0 0 0 1.776-1.563c.07-.07.21-.14.28-.28.144-.214.355-.428.57-.639.07 0 .14-.07.213-.144l.07-.07c.281-.21.64-.355.994-.355s.779.215.99.499c.498.635.354 1.488-.281 1.983 0 .07.07.07 0 .144-.074.07-.144.07-.214.14-.285.14-.495.284-.78.425-.144.07-.284.144-.428.214-.705.425-1.344.85-1.983 1.418-.144.14-.214.424-.214.639v.07l-.425.424a19.194 19.194 0 0 1 2.482 5.816c.424 2.054.569 4.18.284 6.237l.569.144c.07.21.28.425.495.495.779.214 1.628.355 2.41.425h.071c.14.07.284.07.425.07.284 0 .568 0 .85.074.143 0 .283 0 .283.07s.074.07.144.07a1.67 1.67 0 0 1 1.274 1.488c-.21.569-.779.993-1.418.993Z" })));
};

var SvgLaptopPhone = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M58.1 22.1h-6V10.4c0-3.4-2.7-6.1-6.1-6.1H13c-3.4 0-6.1 2.7-6.1 6.1v17.5c-.6.5-1.1 1.2-1.4 2.1L1.8 48c-.2 1 .1 2.1.8 2.9.6.8 1.6 1.2 2.6 1.2h32.2v3.5c0 2.3 1.9 4.2 4.2 4.2h16.5c2.3 0 4.2-1.9 4.2-4.2V26.3c0-2.3-1.9-4.2-4.2-4.2zM6.5 47.6l3.3-15.9h27.7v15.9h-31zm30.9-21.3v.9h-26V10.4c0-.9.7-1.6 1.6-1.6h33c.9 0 1.6.7 1.6 1.6v11.7h-6c-2.3 0-4.2 1.9-4.2 4.2zm20.4 28.9H41.9V26.6h15.9v28.6z" }),
        React__namespace.createElement("path", { d: "M47.6 34.3h5c1.2 0 2.3-1 2.3-2.3 0-1.2-1-2.3-2.3-2.3h-5c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3zM49.9 49.8c-.1 0-.3.1-.4.1-.1.1-.3.1-.4.2l-.3.3c-.4.4-.7 1-.7 1.6 0 .6.2 1.2.7 1.6l.3.3c.1.1.3.2.4.2.1.1.3.1.4.1h.4c.6 0 1.2-.2 1.6-.7.4-.4.7-1 .7-1.6 0-.6-.2-1.2-.7-1.6-.5-.4-1.3-.6-2-.5z" })));
};

var SvgLaptop = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m62.2 53.7-4-17.3c.2-.3.3-.7.3-1v-23c0-3.4-2.8-6.3-6.3-6.3H11.8c-3.4 0-6.3 2.8-6.3 6.3v23c0 .3.1.7.2.9l-4 17.5c-.2 1 .1 2 .8 2.8.7.8 1.7 1.3 2.8 1.3h53.4c1.1 0 2.2-.5 2.8-1.4.7-.8.9-1.9.7-2.8zM10.1 12.4c0-1 .8-1.8 1.8-1.8h40.3c1 0 1.8.8 1.8 1.8v20.8H10.1V12.4zm-3.6 41 3.6-15.7h43.7l3.6 15.7H6.5z" })));
};

var SvgLaravel = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M62 15.2c-.2-.2-.2-.2 0 0-.1-.1-.1-.1-.1-.3 0 0 0-.1-.1-.1l-.1-.1-.1-.1-11.7-6.7c-.3-.1-.7-.1-1 0l-11.5 6.6-.1.1s-.1 0-.1.1l-.1.1s0 .1-.1.1c0 .1 0 .1-.1.1V28.1l-9.7 5.6V8.3c0-.1 0-.1-.1-.1 0 0 0-.1-.1-.1l-.1-.1-.1-.1-.1-.1-11.6-6.7c-.3-.1-.7-.1-1 0L2.6 7.7l-.1.2s-.1 0-.1.1v.1s0 .1-.1.1c0 0 0 .1-.1.1V48.5c0 .4.1.7.4.8l23.2 13.4c.1 0 .1 0 .1.1h.6c.1 0 .1 0 .1-.1l22.9-13.4c.3-.1.4-.4.4-.8V36L61 29.7c.3-.1.4-.4.4-.8V15.5c.6-.2.6-.3.6-.3zm-47.4-12 9.7 5.6-9.7 5.6-9.7-5.6 9.7-5.6zm10.5 7.3v24.3L19.5 38l-4.1 2.3V16l5.6-3.2 4.1-2.3zm0 49.8L3.7 48.1V10.5l4.1 2.3 5.6 3.2V42.2s0 .1.1.1c0 0 0 .1.1.1l.1.1s.1 0 .1.1l.1.1L25.2 49v11h-.1zm1-12.8-9.6-5.6L26.7 36l11.1-6.3 9.7 5.6-7 4.1-14.4 8.1zm22.2.6L27.1 60.3V49.1l15.8-9 5.5-3.2v11.2zm0-14.5-4.1-2.3-5.6-3.2v-11l4.1 2.3 5.6 3.2v11zm1-12.7-9.7-5.6 9.7-5.5 9.7 5.6-9.7 5.5zm1 12.7v-11l5.6-3.2 4.1-2.3v11l-9.7 5.5z" })));
};

var SvgLayers = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m53.5 38.8-.8-.4 1-.6c2-1.2 3.1-3.3 3.1-5.7 0-2.3-1.3-4.4-3.3-5.6l-2.1-1.2 2.3-1.4c2-1.2 3.1-3.3 3.1-5.7 0-2.3-1.3-4.4-3.3-5.5L35.4 2.6c-2-1.1-4.5-1.1-6.4 0L10.4 13.4c-2 1.2-3.2 3.3-3.2 5.6s1.2 4.5 3.2 5.6l2.2 1.3-2.2 1.3c-2 1.2-3.2 3.3-3.2 5.6s1.2 4.5 3.2 5.6l.9.5-.9.5c-2 1.2-3.3 3.3-3.3 5.6 0 2.4 1.2 4.5 3.2 5.6l18.4 10.7c1 .6 2.1.9 3.3.9 1.2 0 2.4-.3 3.4-1L53.8 50c2-1.2 3.1-3.3 3.1-5.7-.1-2.3-1.3-4.4-3.4-5.5zM11.6 19c0-.3.1-1.2 1-1.7L31.2 6.5c.6-.4 1.4-.4 2 0l18.2 10.1c.9.5 1 1.4 1 1.7 0 .3-.1 1.2-1 1.8L33.1 31.4c-.6.4-1.4.4-2.1 0L12.6 20.7c-.9-.5-1-1.4-1-1.7zm1 12.1 4.4-2.6 11.7 6.8c1 .6 2.1.9 3.3.9 1.2 0 2.4-.3 3.4-1L47 28.1l4.3 2.4c.9.5 1 1.4 1 1.7 0 .3-.1 1.2-1 1.8L33.1 45.2c-.6.4-1.4.4-2.1 0L12.6 34.5c-.9-.5-1-1.4-1-1.7 0-.3.1-1.2 1-1.7zm38.8 15.1L33.1 57.5c-.6.4-1.4.4-2.1 0L12.6 46.8c-.9-.5-1-1.4-1-1.7 0-.3.1-1.2 1-1.7l3.1-1.8 13.1 7.6c1 .6 2.1.9 3.3.9 1.2 0 2.4-.3 3.4-1l12.9-7.9 3 1.6c.9.5 1 1.4 1 1.7 0 .3-.1 1.2-1 1.7z" })));
};

var SvgLayout = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M55.8 1.9H8.1c-3.4 0-6.2 2.8-6.2 6.2v47.6c0 3.4 2.8 6.2 6.2 6.2h47.6c3.4 0 6.2-2.8 6.2-6.2V8.1c.1-3.4-2.7-6.2-6.1-6.2zM8.1 6.4h47.6c1 0 1.8.8 1.8 1.8V17H6.4V8.1c0-1 .8-1.7 1.7-1.7zm13.4 15h36v15.9h-36V21.4zM6.4 55.8V21.4H17v36.1H8.1c-.9 0-1.7-.8-1.7-1.7zm49.4 1.7H21.5V41.8h36v14c0 .9-.7 1.7-1.7 1.7z" })));
};

var SvgLeaf = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m61.6 58.2-13-12.9c3-3.7 4.5-8.1 4.5-12.9 0-7.1-3.5-14.5-9.9-20.8C26.6-5 6 4.9 5.8 5l-.6.3-.4.7c-.1.2-10 20.7 6.7 37.2 6.5 6.5 14.1 9.8 21 9.8 4.7 0 9.1-1.5 12.9-4.6l13 12.9c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.9-.8.9-2.2 0-3.1zM14.6 40C1.8 27.2 7.1 12.1 8.5 8.7 12 7.2 27.2 2 40.1 14.8c5.5 5.5 8.5 11.7 8.5 17.7 0 3.6-1.1 6.9-3.3 9.7L38 34.9V22.2c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v8.2l-8.2-8.2c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l5.8 5.8h-8.2c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h12.7l9.7 9.6C34.7 51 23.7 49 14.6 40z" })));
};

var SvgLibrary = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M57.2 9.4h-22c-1.2 0-2.3.4-3.2 1-.9-.6-2-1-3.2-1h-22c-2.8 0-5 2.3-5 5V47c0 2.8 2.3 5 5 5h23v.3c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3V52h23c2.8 0 5-2.3 5-5V14.4c-.1-2.8-2.4-5-5.2-5zM6.8 47.6c-.3 0-.5-.2-.5-.5V14.4c0-.3.2-.5.5-.5h22.1c.5 0 .9.4.9.9v32.8h-23zm51-.6c0 .3-.2.5-.5.5h-23V14.8c0-.5.4-.9.9-.9h22.1c.3 0 .5.2.5.5V47z" }),
        React__namespace.createElement("path", { d: "M14.3 23.7h7.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-7.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3zM42 23.7h7.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H42c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3zM49.6 27.4h-7.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h7.4c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM21.8 27.4h-7.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h7.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3zM21.8 36.2h-7.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h7.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3zM49.6 36.2h-7.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h7.4c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" })));
};

var SvgLicense = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M48.4 40.6H14.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h34.2c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.4-2.3zM48.4 21.8H39c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h9.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3zM48.4 31.2H39c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h9.4c1.2 0 2.3-1 2.3-2.3 0-1.3-1-2.3-2.3-2.3z" }),
        React__namespace.createElement("path", { d: "M56 11H8c-3.4 0-6.3 2.8-6.3 6.3v29.5C1.8 50.2 4.6 53 8 53h48c3.4 0 6.3-2.8 6.3-6.3V17.3c0-3.5-2.9-6.3-6.3-6.3zm1.8 35.7c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8V17.3c0-1 .8-1.8 1.8-1.8h48c1 0 1.8.8 1.8 1.8v29.4z" }),
        React__namespace.createElement("path", { d: "M18.3 35.7c3.9 0 7.1-3.2 7.1-7.1 0-3.9-3.2-7.1-7.1-7.1s-7.1 3.2-7.1 7.1c.1 4 3.2 7.1 7.1 7.1zm0-9.6c1.4 0 2.6 1.2 2.6 2.6 0 1.4-1.2 2.6-2.6 2.6s-2.6-1.2-2.6-2.6c.1-1.5 1.2-2.6 2.6-2.6z" })));
};

var SvgLifering = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 62.2c-7.7 0-15.5-2.9-21.4-8.8C4.9 47.7 1.8 40.1 1.8 32s3.1-15.7 8.9-21.4C16.3 4.9 23.9 1.8 32 1.8s15.7 3.1 21.4 8.9c11.8 11.8 11.8 31 0 42.8-5.9 5.8-13.7 8.7-21.4 8.7zm-10.8-6.8c6.8 3.1 14.7 3.1 21.6 0L32 44.6 21.2 55.4zm-10.3-8.6c.8 1.2 1.8 2.3 2.9 3.4 1.1 1.1 2.2 2 3.4 2.9l10.9-10.9c-1.4-.5-2.7-1.4-3.8-2.5s-1.9-2.4-2.5-3.8L10.9 46.8zm25-4.6 10.9 10.9c1.2-.8 2.3-1.8 3.4-2.9 1.1-1.1 2-2.2 2.9-3.4L42.2 35.9c-.5 1.4-1.4 2.7-2.5 3.8s-2.4 1.9-3.8 2.5zm-27.3-21c-1.5 3.3-2.4 7-2.4 10.8s.8 7.4 2.4 10.8L19.4 32 8.6 21.2zm36 10.8 10.8 10.8c3.1-6.8 3.1-14.7 0-21.6L44.6 32zM32 25.6c-1.7 0-3.3.7-4.5 1.9-1.2 1.2-1.9 2.8-1.9 4.5s.7 3.3 1.9 4.5c1.2 1.2 2.8 1.9 4.5 1.9s3.3-.7 4.5-1.9 1.9-2.8 1.9-4.5-.7-3.3-1.9-4.5c-1.2-1.2-2.8-1.9-4.5-1.9zm-21.1-8.4 10.9 10.9c.5-1.4 1.4-2.7 2.5-3.8 1.1-1.1 2.4-1.9 3.8-2.5L17.2 10.9c-1.2.8-2.3 1.8-3.4 2.9-1.1 1.1-2 2.2-2.9 3.4zm28.8 7.1c1.1 1.1 1.9 2.4 2.5 3.8l10.9-10.9c-.8-1.2-1.8-2.3-2.9-3.4-1.1-1.1-2.2-2-3.4-2.9L35.9 21.8c1.4.6 2.7 1.4 3.8 2.5zM21.2 8.6 32 19.4 42.8 8.6c-3.3-1.5-7-2.4-10.8-2.4s-7.4.9-10.8 2.4z" })));
};

var SvgLineDashed = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60 29.8H49.8c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3H60c1.2 0 2.3-1 2.3-2.3 0-1.3-1.1-2.3-2.3-2.3zM37.1 29.8H26.9c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h10.2c1.2 0 2.3-1 2.3-2.3-.1-1.3-1.1-2.3-2.3-2.3zM14.2 29.8H4c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h10.2c1.2 0 2.3-1 2.3-2.3-.1-1.3-1.1-2.3-2.3-2.3z" })));
};

var SvgLineDotted = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M8.7 29.8H4c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h4.7c1.2 0 2.3-1 2.3-2.3-.1-1.3-1.1-2.3-2.3-2.3zM34.3 29.8h-4.7c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h4.7c1.2 0 2.3-1 2.3-2.3 0-1.3-1-2.3-2.3-2.3zM60 29.8h-4.7c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3H60c1.2 0 2.3-1 2.3-2.3 0-1.3-1.1-2.3-2.3-2.3z" })));
};

var SvgLineDouble = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M4 26.6h56c1.2 0 2.3-1 2.3-2.3S61.3 22 60 22H4c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3zM60 37.4H4c-1.2 0-2.3 1-2.3 2.3S2.7 42 4 42h56c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" })));
};

var SvgLineSpacing = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M37.2 7.6h22.7c1.2 0 2.3-1 2.3-2.3S61.2 3 59.9 3H37.2c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3zM59.9 20.8H37.2c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h22.7c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3zM59.9 38.6H37.2c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h22.7c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3zM59.9 56.4H37.2c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h22.7c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3zM22.8 15.3c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.9-.9.9-2.3 0-3.2l-9.4-9.4c-1.3-1.3-3.3-1.3-4.6 0l-9.5 9.4c-.9.9-.9 2.3 0 3.2.9.9 2.3.9 3.2 0L12 9v46l-6.3-6.4c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l9.4 9.5c.6.6 1.4 1 2.3 1 .9 0 1.7-.3 2.3-.9l9.5-9.5c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0L16.5 55V9l6.3 6.3z" })));
};

var SvgLine = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M63 27.7C63 13.8 49 2.4 32 2.4S1 13.7 1 27.7c0 12.4 11 22.8 25.9 24.8 1 .1 2.4.7 2.7 1.5.3.7.1 2 .1 2.8 0 0-.4 2.3-.4 2.7-.1.7-.6 3.1 2.7 1.5 3.2-1.4 17.8-10.6 24.4-18 4.5-4.8 6.6-9.8 6.6-15.3zM21 35c0 .3-.3.6-.6.6h-8.7c-.1 0-.3-.1-.4-.1-.1-.1-.1-.3-.1-.4V21.5c0-.3.3-.6.6-.6h2.1c.3 0 .6.3.6.6v10.7h5.9c.3 0 .6.3.6.6V35zm5.2 0c0 .3-.3.6-.6.6h-2.1c-.3 0-.6-.3-.6-.6V21.5c0-.3.3-.6.6-.6h2.1c.3 0 .6.3.6.6V35zm15.1 0c0 .3-.3.6-.6.6h-2.2c-.1 0-.1-.1-.1-.1L32 27.1v8c0 .3-.3.6-.6.6h-2.1c-.3 0-.6-.3-.6-.6V21.6c0-.3.3-.6.6-.6h2.1l.1.1 6.2 8.3v-8c0-.3.3-.6.6-.6h2.4c.3 0 .6.3.6.6V35zm12-11.3c0 .3-.3.6-.6.6h-5.9v2.3h5.9c.3 0 .6.3.6.6v2.1c0 .3-.3.6-.6.6h-5.9V32h5.9c.3 0 .6.3.6.6v2.1c0 .3-.3.6-.6.6H44c-.1 0-.3-.1-.4-.1-.1-.1-.1-.3-.1-.4V21.3c0-.1.1-.3.1-.4.1-.1.3-.1.4-.1h8.7c.3 0 .6.3.6.6v2.3z" })));
};

var SvgLineiconsAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M3.803 40.128H2V50.42h6.115v-1.66H3.803v-8.632ZM10.186 42.07a1.04 1.04 0 0 0 1.03-1.044c0-.58-.467-1.026-1.03-1.026-.59 0-1.057.45-1.057 1.03 0 .578.47 1.04 1.057 1.04Zm-.855 8.353h1.717v-6.962H9.331v6.962ZM14.54 50.42v-3.746c0-1.126.646-1.86 1.706-1.86.89 0 1.465.563 1.465 1.732v3.874h1.717v-4.286c0-1.802-.901-2.886-2.65-2.886-.943 0-1.786.408-2.222 1.115l-.143-.901H12.82v6.961h1.717l.004-.003ZM24.23 50.606c1.814 0 3.085-.913 3.38-2.44h-1.593c-.198.66-.816 1.03-1.764 1.03-1.142 0-1.787-.622-1.915-1.846l5.237-.015v-.52c0-2.172-1.325-3.567-3.411-3.567-2.086 0-3.466 1.507-3.466 3.69 0 2.184 1.453 3.664 3.524 3.664l.008.004Zm-.043-5.944c1.03 0 1.69.633 1.69 1.593h-3.492c.167-1.041.788-1.593 1.802-1.593ZM29.813 42.07a1.04 1.04 0 0 0 1.03-1.044c0-.58-.467-1.026-1.03-1.026-.59 0-1.053.45-1.053 1.03 0 .578.458 1.04 1.053 1.04Zm-.863 8.353h1.717v-6.962H28.95v6.962ZM32.039 46.93c0 2.211 1.379 3.676 3.492 3.676 1.815 0 3.17-1.115 3.38-2.735H37.18c-.183.761-.789 1.185-1.648 1.185-1.099 0-1.775-.816-1.775-2.125 0-1.31.734-2.14 1.83-2.14.816 0 1.395.407 1.593 1.2h1.717c-.183-1.679-1.48-2.735-3.38-2.735-2.051 0-3.477 1.523-3.477 3.675ZM39.782 46.93c0 2.173 1.561 3.664 3.722 3.664 2.16 0 3.718-1.491 3.718-3.663 0-2.172-1.562-3.664-3.718-3.664-2.153 0-3.722 1.492-3.722 3.664Zm1.72 0c0-1.27.817-2.124 2.002-2.124 1.184 0 2 .858 2 2.125 0 1.266-.816 2.125-2 2.125-1.185 0-2.001-.859-2.001-2.125ZM50.294 50.42v-3.746c0-1.126.645-1.86 1.706-1.86.89 0 1.465.563 1.465 1.732v3.874h1.717v-4.286c0-1.802-.901-2.886-2.65-2.886-.944 0-1.787.408-2.222 1.115l-.144-.901h-1.593v6.961h1.718l.004-.003ZM62 48.326c0 1.406-1.197 2.284-2.914 2.284s-2.828-.932-2.832-2.292h1.628c.012.606.466.987 1.25.987.786 0 1.24-.327 1.24-.832 0-.353-.178-.606-.8-.746l-1.255-.299c-1.251-.28-1.857-.874-1.857-1.985 0-1.368 1.15-2.187 2.758-2.187 1.609 0 2.615.905 2.63 2.257h-1.631c-.008-.59-.408-.971-1.069-.971-.66 0-1.068.31-1.068.827 0 .396.315.645.901.789l1.255.299c1.08.245 1.67.722 1.748 1.64l.008.232.008-.003ZM39.468 31.43c.71-.716.71-1.884 0-2.6L27.106 16.34a1.81 1.81 0 0 0-2.574 0 1.855 1.855 0 0 0 0 2.601L36.894 31.43a1.81 1.81 0 0 0 2.574 0ZM39.138 22.209c.71-.717.71-1.884 0-2.6l-5.013-5.072a1.81 1.81 0 0 0-2.574 0 1.855 1.855 0 0 0 0 2.6l5.02 5.072a1.81 1.81 0 0 0 2.573 0h-.006ZM32.456 33.227c.709-.716.709-1.883 0-2.6l-5.02-5.07a1.81 1.81 0 0 0-2.574 0 1.855 1.855 0 0 0 0 2.6l5.02 5.07a1.81 1.81 0 0 0 2.573 0Z" })));
};

var SvgLineiconsSymbolAlt2 = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M32 1c-8.56 0-16.31 3.47-21.92 9.08C4.47 15.69 1 23.44 1 32c0 8.56 3.47 16.31 9.08 21.92C15.69 59.53 23.44 63 32 63c8.56 0 16.31-3.47 21.92-9.08C59.53 48.31 63 40.56 63 32 63 14.88 49.12 1 32 1Zm-.54 16.82a2.746 2.746 0 0 1 3.91 0l7.61 7.69a2.832 2.832 0 0 1 0 3.95 2.734 2.734 0 0 1-3.9 0l-7.62-7.7a2.8 2.8 0 0 1 0-3.94Zm1.37 28.36a2.734 2.734 0 0 1-3.9 0l-7.62-7.69a2.813 2.813 0 0 1 0-3.95 2.746 2.746 0 0 1 3.91 0l7.61 7.7a2.8 2.8 0 0 1 0 3.94Zm10.65-2.72a2.764 2.764 0 0 1-3.91 0L20.81 24.5a2.813 2.813 0 0 1 0-3.95 2.752 2.752 0 0 1 3.9 0l18.77 18.96a2.832 2.832 0 0 1 0 3.95Z" })));
};

var SvgLineiconsSymbolAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M53 1H11C5.48 1 1 5.48 1 11v42c0 5.52 4.48 10 10 10h42c5.52 0 10-4.48 10-10V11c0-5.52-4.48-10-10-10ZM31.52 14.03a3.495 3.495 0 0 1 4.95 0l9.63 9.75c1.37 1.38 1.39 3.62.02 5a3.477 3.477 0 0 1-4.95 0l-9.65-9.75c-1.37-1.37-1.37-3.62 0-5Zm1.74 35.94a3.495 3.495 0 0 1-4.95 0l-9.65-9.75a3.555 3.555 0 0 1 0-5 3.477 3.477 0 0 1 4.95 0l9.65 9.75a3.574 3.574 0 0 1 0 5Zm13.48-3.46a3.477 3.477 0 0 1-4.95 0L18.02 22.5a3.574 3.574 0 0 1 0-5 3.477 3.477 0 0 1 4.95 0l23.77 24.01a3.574 3.574 0 0 1 0 5Z" })));
};

var SvgLineiconsSymbol = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M55.522 55.676c2.225-2.247 2.225-5.91 0-8.157L16.742 8.343a5.677 5.677 0 0 0-8.073 0c-2.225 2.248-2.225 5.89 0 8.157l38.779 39.176a5.677 5.677 0 0 0 8.074 0ZM54.486 26.75c2.225-2.248 2.225-5.91 0-8.157L38.76 2.686a5.677 5.677 0 0 0-8.074 0c-2.225 2.247-2.225 5.909 0 8.156L46.43 26.75a5.677 5.677 0 0 0 8.075 0h-.02ZM33.524 61.314c2.225-2.247 2.225-5.909 0-8.157L17.778 37.252a5.677 5.677 0 0 0-8.074 0c-2.225 2.247-2.225 5.909 0 8.157L25.45 61.313a5.677 5.677 0 0 0 8.074 0Z" })));
};

var SvgLineicons = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M15.795 27.775h-1.462v8.348h4.96v-1.346h-3.498v-7.002ZM20.972 29.35a.843.843 0 0 0 .835-.847.83.83 0 0 0-.835-.832.838.838 0 0 0-.857.835c0 .47.382.845.857.845Zm-.693 6.776h1.393v-5.647h-1.393v5.647ZM24.505 36.123v-3.038c0-.914.523-1.51 1.383-1.51.722 0 1.188.457 1.188 1.406v3.142h1.393v-3.476c0-1.462-.731-2.341-2.15-2.341-.765 0-1.449.33-1.802.904l-.116-.731h-1.292v5.647h1.393l.003-.003ZM32.364 36.274c1.472 0 2.502-.74 2.742-1.979h-1.293c-.16.536-.661.835-1.43.835-.927 0-1.45-.504-1.554-1.497l4.248-.012v-.423c0-1.761-1.074-2.892-2.767-2.892-1.692 0-2.81 1.222-2.81 2.993s1.178 2.972 2.858 2.972l.006.003Zm-.035-4.821c.835 0 1.371.513 1.371 1.292h-2.833c.136-.845.64-1.292 1.462-1.292ZM36.892 29.35a.843.843 0 0 0 .835-.847.83.83 0 0 0-.835-.832.84.84 0 1 0 0 1.68Zm-.7 6.776h1.394v-5.647h-1.393v5.647ZM38.698 33.293c0 1.793 1.119 2.981 2.833 2.981 1.471 0 2.571-.904 2.741-2.218h-1.405c-.148.617-.64.96-1.336.96-.892 0-1.44-.661-1.44-1.723s.595-1.736 1.484-1.736c.662 0 1.131.33 1.292.973h1.393c-.148-1.361-1.2-2.218-2.742-2.218-1.664 0-2.82 1.235-2.82 2.981ZM44.978 33.293c0 1.761 1.267 2.972 3.02 2.972 1.751 0 3.015-1.21 3.015-2.972s-1.267-2.972-3.016-2.972c-1.746 0-3.019 1.21-3.019 2.972Zm1.396 0c0-1.03.662-1.724 1.623-1.724s1.623.697 1.623 1.724c0 1.027-.662 1.724-1.623 1.724s-1.623-.697-1.623-1.724ZM53.505 36.123v-3.038c0-.914.523-1.51 1.384-1.51.721 0 1.188.457 1.188 1.406v3.142h1.393v-3.476c0-1.462-.731-2.341-2.15-2.341-.765 0-1.449.33-1.802.904l-.117-.731H52.11v5.647h1.393l.003-.003ZM63 34.424c0 1.141-.97 1.853-2.363 1.853s-2.294-.756-2.298-1.86h1.32c.01.492.379.801 1.015.801.637 0 1.006-.264 1.006-.674 0-.287-.145-.492-.65-.605l-1.017-.243c-1.015-.227-1.507-.709-1.507-1.61 0-1.11.933-1.774 2.238-1.774 1.304 0 2.12.734 2.133 1.83h-1.323c-.007-.478-.331-.787-.867-.787s-.867.252-.867.671c0 .322.256.523.731.64l1.018.242c.876.199 1.355.587 1.418 1.33l.007.19.006-.004ZM8.973 35.893a.94.94 0 0 0 0-1.327L2.6 28.194a.94.94 0 0 0-1.327 0 .94.94 0 0 0 0 1.327l6.372 6.372a.94.94 0 0 0 1.327 0ZM8.802 31.188a.94.94 0 0 0 0-1.327l-2.584-2.587a.94.94 0 0 0-1.326 0 .94.94 0 0 0 0 1.327l2.587 2.587a.94.94 0 0 0 1.327 0h-.004ZM5.358 36.81a.94.94 0 0 0 0-1.327l-2.587-2.587a.94.94 0 0 0-1.327 0 .94.94 0 0 0 0 1.327l2.587 2.587a.94.94 0 0 0 1.327 0Z" })));
};

var SvgLink = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m58.9 42.3-8.1-8.1c-4.1-4.1-10.5-4.5-15.1-1.2l-4.8-4.8c1.4-1.9 2.2-4.2 2.2-6.7 0-3.1-1.2-6.1-3.4-8.3l-8.1-8.1C17.1.6 9.7.6 5.1 5.1 3 7.4 1.8 10.3 1.8 13.4c0 3.1 1.2 6 3.4 8.2l8 8.1c2.3 2.3 5.3 3.4 8.2 3.4 2.2 0 4.3-.6 6.2-1.8l5 5c-1.2 1.8-1.8 4-1.8 6.2 0 3.1 1.2 6 3.4 8.2l8 8.1c2.3 2.3 5.3 3.4 8.2 3.4 3 0 6-1.1 8.2-3.4 2.2-2.2 3.4-5.1 3.4-8.2.3-3.1-.9-6-3.1-8.3zM16.4 26.5l-8-8.1C7 17 6.3 15.2 6.3 13.3c0-1.9.7-3.7 2.1-5.1 1.4-1.4 3.2-2.1 5.1-2.1 1.8 0 3.7.7 5.1 2.1l8.1 8c1.3 1.4 2.1 3.2 2.1 5.1 0 1.3-.3 2.4-.9 3.5l-2.5-2.5c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l2.3 2.3c-2.8 1.4-6 .9-8.1-1.3zm39.2 29.1c-2.8 2.8-7.4 2.8-10.1 0l-8-8.1c-1.4-1.4-2.1-3.2-2.1-5.1 0-1 .2-2 .6-2.9l2.3 2.2c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.9-.9.9-2.3 0-3.2L39 36.3c1.1-.6 2.3-.9 3.5-.9 1.8 0 3.7.7 5.1 2.1l8.1 8c1.3 1.4 2.1 3.2 2.1 5.1-.1 1.9-.8 3.7-2.2 5z" })));
};

var SvgLinkedinOriginal = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M58.5 1H5.6C3.1 1 1.1 3 1.1 5.5v53c0 2.4 2 4.5 4.5 4.5h52.7c2.5 0 4.5-2 4.5-4.5V5.4C63 3 61 1 58.5 1zM19.4 53.7h-9.1V24.2h9.1v29.5zm-4.6-33.6c-3 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3-2.2 5.3-5.3 5.3zm39.1 33.6h-9.1V39.4c0-3.4-.1-7.9-4.8-7.9-4.8 0-5.5 3.8-5.5 7.6v14.6h-9.1V24.2h8.9v4.1h.1c1.3-2.4 4.2-4.8 8.7-4.8 9.3 0 11 6 11 14.2v16h-.2z" })));
};

var SvgLinkedin = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M14.6 63H5.7C2.6 63 0 60.5 0 57.5V28c0-3.1 2.5-5.5 5.7-5.5h8.9c3.1 0 5.7 2.5 5.7 5.5v29.5c.1 3-2.5 5.5-5.7 5.5zM5.7 27.4c-.3 0-.6.1-.6.4v29.5c0 .1.1.4.6.4h8.9c.3 0 .6-.1.6-.4V28c0-.1-.3-.4-.6-.4H5.7v-.2zM58.8 63h-9c-3.1 0-5.7-2.5-5.7-5.5V45.3c0-.6-.4-1-1.2-1-.6 0-1.2.4-1.2 1v12.1c0 3.1-2.5 5.5-5.7 5.5h-8.9c-3.1 0-5.7-2.5-5.7-5.5V28c0-3.1 2.5-5.5 5.7-5.5H36c1.9 0 3.5.9 4.5 2.3.4-.1.9-.4 1.2-.6 3.1-1.5 6.6-1.9 9.8-1.5 7 .9 12.4 6.7 12.5 13.7v21.3c.3 2.8-2.2 5.3-5.2 5.3zM43 39.4c3.4 0 6.1 2.8 6.1 6v12.1c0 .1.1.4.6.4h8.9c.3 0 .6-.1.6-.4V36.3c-.1-4.4-3.6-8.2-8.2-8.6-2.3-.3-5 .1-7.3 1.2-1.2.4-2.2 1.2-3.2 1.8l-3.9 2.8V28c0-.1-.1-.4-.6-.4h-8.9c-.3 0-.6.1-.6.4v29.5c0 .1.1.4.6.4h9c.3 0 .6-.1.6-.4V45.3c.2-3.3 2.8-5.9 6.3-5.9zM10.8 21.9C5 21.9.2 17.2.2 11.4S4.8 1 10.8 1s10.6 4.7 10.6 10.5-4.8 10.4-10.6 10.4zm0-15.8c-3.1 0-5.7 2.5-5.7 5.4 0 3.1 2.5 5.4 5.7 5.4s5.7-2.5 5.7-5.4c0-3.1-2.5-5.4-5.7-5.4z" })));
};

var SvgList = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M16.1 14.5h44.5c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H16.1c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3zM60.5 29.8H16.1c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h44.5c1.2 0 2.3-1 2.3-2.3-.1-1.3-1.1-2.3-2.4-2.3zM60.5 49.5H16.1c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h44.5c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.4-2.3z" }),
        React__namespace.createElement("circle", { cx: 6.2, cy: 12.2, r: 2.7 }),
        React__namespace.createElement("circle", { cx: 6.2, cy: 32, r: 2.7 }),
        React__namespace.createElement("circle", { cx: 6.2, cy: 51.8, r: 2.7 })));
};

var SvgLockAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M47 19.8v-2.6c0-8-6-14.8-13.6-15.4-4.2-.4-8.4 1.1-11.5 3.9-3.1 2.8-4.9 6.8-4.9 10.9v3.2C11.2 20.9 6.8 26 6.8 32.2v18.1c0 6.6 5.4 11.9 11.9 11.9h26.4c6.6 0 12-5.4 12-12V32c.1-6-4.3-11-10.1-12.2zM24.9 9C27.1 7 30 6 33 6.3c5.3.5 9.5 5.3 9.5 10.9v2.3h-21v-3c0-2.8 1.2-5.5 3.4-7.5zm27.8 41.3c0 4.1-3.4 7.5-7.5 7.5H18.8c-4.1 0-7.4-3.3-7.4-7.4V32.2c0-4.5 3.6-8.1 8.1-8.1h25c4.5 0 8.2 3.6 8.2 7.9v18.3z" }),
        React__namespace.createElement("path", { d: "M32 34.5c-1.2 0-2.3 1-2.3 2.3v10.5c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3V36.7c0-1.2-1.1-2.2-2.3-2.2z" })));
};

var SvgLock = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M50.4 21.9h-6.1v-7.4c0-6.8-5.5-12.3-12.3-12.3S19.8 7.7 19.8 14.5v7.4h-6.1c-3.8 0-6.9 3-6.9 6.6V43c0 10.3 8.9 18.7 19.8 18.7h11c10.9 0 19.7-8.5 19.7-19V28.5c0-3.6-3.1-6.6-6.9-6.6zm-26.1-7.4c0-4.3 3.5-7.8 7.8-7.8s7.8 3.5 7.8 7.8v7.4H24.3v-7.4zm28.5 28.2c0 8-6.8 14.5-15.2 14.5h-11c-8.4 0-15.3-6.4-15.3-14.2V28.5c0-1.2 1.1-2.1 2.4-2.1h36.7c1.3 0 2.4.9 2.4 2.1v14.2z" }),
        React__namespace.createElement("path", { d: "M36.1 39.4h-8.2c-1.8 0-3.3 1.5-3.3 3.3v8.2c0 1.8 1.5 3.3 3.3 3.3h8.2c1.8 0 3.3-1.5 3.3-3.3v-8.2c0-1.8-1.5-3.3-3.3-3.3zm-1.2 10.2h-5.7v-5.7h5.7v5.7z" })));
};

var SvgMagento = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 1 5.2 16.5v31l7.6 4.5V21L32 9.9 51.2 21v31l7.6-4.5v-31z" }),
        React__namespace.createElement("path", { d: "M35.9 52 32 54.1 28.2 52V21l-7.8 4.4v31L32 63l11.6-6.6v-31L35.9 21z" })));
};

var SvgMagnet = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M54.5 9.5c-4.9-5-11.4-7.8-18.3-7.8-6.5 0-12.6 2.4-17.2 7L3.6 24.3c-2.5 2.5-2.5 6.6 0 9.1l5.9 5.9c2.5 2.5 6.6 2.5 9.1 0l14.5-14.4c1.8-1.8 4.6-2.1 6.3-.7.9.7 1.4 1.8 1.5 3 .1 1.4-.5 2.7-1.5 3.7L24.9 45.4c-2.5 2.5-2.5 6.6 0 9.1l5.9 5.9c1.2 1.2 2.9 1.9 4.5 1.9s3.3-.6 4.5-1.9l15.5-15.5c9.5-9.5 9.2-25.3-.8-35.4zM15.4 36c-.7.7-2 .7-2.7 0l-5.9-5.9c-.7-.7-.7-2 0-2.7l5.1-5.1 8.6 8.6-5.1 5.1zm21.2 21.2c-.7.7-2 .7-2.7 0L28 51.3c-.7-.7-.7-2 0-2.7l5.1-5.1 8.6 8.6-5.1 5.1zm15.6-15.5L45 48.9l-8.6-8.6 6.3-6.3c1.9-1.9 2.9-4.5 2.8-7.1-.1-2.5-1.3-4.7-3.2-6.3-1.6-1.3-3.5-1.9-5.5-1.9-2.5 0-5 1-6.9 2.9l-6.1 6.1-8.6-8.6 7.2-7.2c3.7-3.6 8.6-5.7 13.9-5.7h.1c5.7 0 11 2.3 15.1 6.5 8 8.3 8.4 21.3.7 29z" })));
};

var SvgMagnifier = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60.4 50.3 48.7 38.7c-1.2-1.2-2.8-1.9-4.5-1.9-1.2 0-2.3.3-3.3.9l-5.2-5.2c2.6-3.3 4.1-7.4 4.1-11.8 0-5.1-2-9.9-5.6-13.5-3.6-3.6-8.4-5.6-13.5-5.6s-9.9 2-13.5 5.6c-3.6 3.6-5.6 8.4-5.6 13.5s2 9.9 5.6 13.5c3.6 3.6 8.4 5.6 13.5 5.6 4.3 0 8.4-1.4 11.8-4.1l5.2 5.2c-.6 1-.9 2.1-.9 3.3 0 1.7.7 3.3 1.9 4.5l11.6 11.6c1.2 1.2 2.8 1.9 4.5 1.9 1.7 0 3.3-.7 4.5-1.9l1.1-1.1c1.2-1.2 1.9-2.8 1.9-4.5 0-1.6-.7-3.2-1.9-4.4zM10.5 31.1c-2.7-2.7-4.3-6.4-4.3-10.3s1.5-7.5 4.3-10.3 6.4-4.3 10.3-4.3 7.5 1.5 10.3 4.3 4.3 6.4 4.3 10.3-1.5 7.5-4.3 10.3-6.4 4.3-10.3 4.3-7.5-1.6-10.3-4.3zm46.7 25-1.1 1.1c-.7.7-1.9.7-2.7 0L41.8 45.6c-.7-.7-.7-1.9 0-2.7l1.1-1.1c.4-.4.8-.5 1.3-.5s1 .2 1.3.5l11.6 11.6c.4.4.5.8.5 1.3.2.6 0 1.1-.4 1.4z" }),
        React__namespace.createElement("path", { d: "M24.7 12.7c-.9.9-.9 2.3 0 3.2 2.4 2.4 2.4 6.4 0 8.8-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c2-2 3.1-4.7 3.1-7.6s-1.1-5.5-3.1-7.6c-.9-.9-2.4-.9-3.2 0z" })));
};

var SvgMailchimp = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M46.7 30.2c.4-.1.8-.1 1.3 0 .1-.4.3-1.4.1-2.4-.3-1.4-.7-2.4-1.5-2.3-.8.1-.8 1.1-.6 2.7 0 .8.4 1.6.7 2zm-7.3 1.2c.6.3 1 .4 1.1.3.3-.3-.4-1.3-1.7-1.8-1.4-.6-3-.4-4.2.4-.4.3-.8.7-.8 1 .1.4 1.4-.4 3.1-.4 1.1-.1 1.8.3 2.5.5zm-1.3.7c-1.3.1-2 .8-1.8 1.4.1 0 .1.1.7-.1.8-.3 1.7-.4 2.7-.3.4 0 .6.1.7-.1.1-.2-.9-1.1-2.3-.9zm7.5 2.4c.4-1-1.5-2-2-1-.4 1 1.6 1.9 2 1zm2.1-2.9c-1.1 0-1.1 2.3 0 2.3s1.1-2.3 0-2.3zM17.6 42.5c-.1 0-.8.1-1.1-.3-.7-1.1 1.5-2.8.4-4.9-1.3-2.4-3.9-1.8-4.8-.8-1.1 1.4-1.1 3.2-.7 3.2.6.1.6-.8 1.1-1.7.4-.8 1.7-1.1 2.4-.4 1.7 1.1.1 2.4.3 3.9.1 2.4 2.5 2.3 3 1.3.1-.1 0-.1 0-.3-.2.1-.1-.2-.6 0zM59 40.2c-.4-1.7-.4-1.3-1-2.8.3-.4 2.1-3.2-.4-6.1-1.4-1.5-4.6-2.4-5.8-2.5-.1-1.5.7-8.2-3-11.4 3-3 4.6-6.3 4.6-9.2 0-5.5-6.6-7-14.8-3.7l-1.6.9s-3.1-3.1-3.2-3.1C24.5-6-4.7 26.6 4.6 34.3l2.1 1.8c-.6 1.4-.8 3.1-.6 4.6.4 4.6 4.9 8.3 9.3 8.3 7.9 18.5 37 18.5 44.5.4.1-.6 1.3-3.4 1.3-5.8-.1-2.4-1.4-3.4-2.2-3.4zm-43.7 6.7c-3.2-.1-6.6-3-6.9-6.3-.8-8.5 10.3-10.4 11.7-1.7.5 4-.7 8.1-4.8 8zm-2.5-15.8c-2.1.4-3.9 1.5-5.1 3.2-.7-.6-2-1.7-2.1-2-1.8-3.4 2-10.1 4.5-13.8 6.5-9.3 16.6-16.3 21.4-15 .8.1 3.4 3.1 3.4 3.1s-4.8 2.7-9.2 6.3c-5.9 4.4-10.4 11-12.9 18.2zM45.7 45s-4.9.8-9.6-1c.8-2.8 3.7.8 13.2-2 2.1-.6 4.8-1.8 7-3.5.4 1.1.8 2.3 1 3.4.4-.1 2-.1 1.5 2.5-.4 2.7-1.7 4.9-3.5 7-1.3 1.4-2.7 2.4-4.2 3.2-.8.4-1.8.8-2.8 1.1-7.3 2.4-14.9-.1-17.5-5.9-.1-.4-.4-.8-.4-1.4-1.1-3.8-.1-8.2 2.7-11.1.1-.1.4-.4.4-.7 0-.1-.1-.4-.3-.6-1-1.4-4.2-3.8-3.7-8.5.4-3.2 3.4-5.6 6.1-5.5h.7c1.1.1 2.3.1 3.2.3 1.7.1 3.1-.1 4.8-1.5.6-.4 1.1-.8 1.8-1.1.7-.1 1.4 0 1.8.3 1.4.8 1.5 3.1 1.7 4.8 0 1 .1 3.2.1 3.8.1 1.4.4 1.7 1.3 2 .4.1.8.3 1.4.4 1.8.4 3 1.1 3.5 1.7.4.4.6.8.7 1.3.1 1.5-1.3 3.5-5.1 5.2-6.5 3-13 2-13.8 2-2.8-.4-4.4 3.2-2.7 5.8 3.1 4.6 16.9 2.8 21-3 .1-.1 0-.1-.1-.1-5.8 3.9-13.4 5.2-17.7 3.5-.7-.3-2-.8-2.3-2.4 6.1 1.8 9.7.1 9.7.1s.4-.1.1-.1zm-21-26.6c2.4-2.7 5.1-5.1 7.7-6.3h.1v.1c-.1.4-.6 1.1-.7 1.7 0 .1 0 .1.1.1 1.5-1.1 4.4-2.3 6.8-2.4.1 0 .1 0 .1.1v.1c-.4.3-.8.7-1.1 1.1v.1h.1c1.7 0 4.1.6 5.6 1.4.1.1 0 .3-.1.1-9.6-2.3-16.9 2.5-18.6 3.7.2.1.2.1 0 .2z" })));
};

var SvgMapMarker = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 1.8C18.2 1.8 7 12.6 7 25.9 7 36 20.4 52 28.3 60.6c1 1.1 2.3 1.6 3.7 1.6 1.4 0 2.7-.6 3.7-1.6C43.6 52 57 36 57 25.9 57 12.6 45.8 1.8 32 1.8zm.4 55.8c-.2.2-.5.2-.8 0C21.9 47 11.5 33.2 11.5 25.9c0-10.8 9.2-19.6 20.5-19.6s20.5 8.8 20.5 19.6c0 7.3-10.4 21.1-20.1 31.7z" }),
        React__namespace.createElement("path", { d: "M32 15.7c-6 0-10.9 4.9-10.9 10.9s4.9 11 10.9 11 10.9-4.9 10.9-10.9-4.9-11-10.9-11zm0 17.4c-3.6 0-6.4-2.9-6.4-6.4s2.9-6.4 6.4-6.4 6.4 2.9 6.4 6.4-2.8 6.4-6.4 6.4z" })));
};

var SvgMap = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m57.4 17.8-14.8-3.4c0-.3.1-.5.1-.8 0-5-4-9-8.9-9-5 0-9 4-9 9 0 1 .3 2.3.9 3.8l-2.9.6-13.1-3.7c-1.9-.5-3.9-.2-5.5 1s-2.5 3-2.5 5v28.6c0 2.8 1.9 5.3 4.6 6l15.8 4.5h.1c.2 0 .4.1.6.1h.5l18.2-3.8 13.2 3.1c.5.1.9.2 1.4.2 1.4 0 2.8-.5 3.9-1.4 1.5-1.2 2.4-3 2.4-4.9V23.9c-.1-2.9-2.1-5.4-5-6.1zM33.7 9.1c2.5 0 4.4 2 4.4 4.5 0 1.1-1.4 4.4-4.5 9.2-3.1-4.8-4.5-8-4.5-9.2.1-2.5 2.1-4.5 4.6-4.5zm-6.1 12.4c1.1 2 2.4 4 3.6 5.7.5.8 1.5 1.3 2.4 1.3 1 0 1.9-.5 2.4-1.3 1-1.5 2.1-3.1 3.1-4.8v29l-14.1 3V22.1l2.6-.6zM6.3 48.8V20.3c0-.6.3-1.1.7-1.4s1-.4 1.5-.3l12 3.4v32.2l-13-3.7c-.7-.2-1.2-.9-1.2-1.7zm51.5 3.7c0 .7-.4 1.2-.7 1.4-.2.2-.8.5-1.5.3l-12-2.8V19.2l12.8 3c.8.2 1.4.9 1.4 1.7v28.6z" }),
        React__namespace.createElement("path", { d: "M34.1 15.5c.1 0 .3-.1.4-.1.1 0 .3-.1.4-.2l.3-.3c.4-.4.7-1 .7-1.6 0-.6-.2-1.2-.7-1.6l-.3-.3c-.1-.1-.3-.2-.4-.2-.1-.1-.3-.1-.4-.1-.7-.1-1.5.1-2 .6-.4.4-.7 1-.7 1.6 0 .6.2 1.2.7 1.6.4.4 1 .7 1.6.7.1-.1.3-.1.4-.1z" })));
};

var SvgMarkdown = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M58.4 13H5.5C3.1 13 1 15 1 17.5v29.1C1 48.9 3 51 5.5 51h53c2.4 0 4.5-2 4.5-4.5V17.3c-.1-2.4-2.1-4.3-4.6-4.3zm1.5 33.6c0 .8-.7 1.5-1.5 1.5H5.5c-.8 0-1.5-.7-1.5-1.5V17.3c0-.8.7-1.5 1.5-1.5h53c.8 0 1.5.7 1.5 1.5v29.2h-.1z" }),
        React__namespace.createElement("path", { d: "M50.1 21.8h-5.9v10.4h-6.1l9 9.9 8.9-9.9h-5.9zM21.8 29.3l-5.9-7.5h-6v20.3h6V30.4l5.9 7.4 5.9-7.4v11.7h6.1V21.8h-6.1z" })));
};

var SvgMashroom = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M54.8 14.7C50.3 6.2 41.6 1 32 1S13.7 6.2 9.2 14.7c-1.9 3.5-2.8 7.1-2.9 10.9V25.9c0 .3.1.6.2.8 2.3 5 8.5 8.8 16.5 10.5l-1.7 16c-.3 2.5.5 5 2.2 6.9 1.7 1.9 4.1 2.9 6.6 2.9H34c2.5 0 5-1.1 6.6-3 1.7-1.9 2.5-4.4 2.2-6.9l-1.7-15.9c7.9-1.7 14.1-5.5 16.4-10.5.1-.3.2-.6.2-.9-.1-3.9-1.1-7.7-2.9-11.1zM38.9 53.5c.2 1.4-.3 2.8-1.2 3.8-1 1.1-2.3 1.7-3.7 1.7h-3.9c-1.4 0-2.7-.6-3.6-1.6-.9-1-1.4-2.4-1.2-3.8L27 37.8c1.6.2 3.3.3 5.1.3 1.8 0 3.5-.1 5.2-.3l1.6 15.7zM32 34.1c-10 0-19-3.6-21.7-8.7.1-3.1.9-6 2.5-8.9C16.5 9.4 23.9 5 32 5s15.5 4.4 19.2 11.6c1.5 2.8 2.3 5.8 2.4 8.9-2.6 5-11.6 8.6-21.6 8.6z" }),
        React__namespace.createElement("path", { d: "M31.6 8.9c-.1 0-.2.1-.4.1-.1 0-.2.1-.4.2-.1.1-.2.1-.3.2-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.4-.5-1-.7-1.7-.5zM20.6 21.7c-.4.4-.6.9-.6 1.4 0 .5.2 1.1.6 1.4.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.8-2-.8-2.8 0zM44.2 22.3c0-.1-.1-.2-.2-.3-.1-.1-.1-.2-.2-.3-.5-.5-1.1-.7-1.8-.5-.1 0-.2.1-.4.1-.1.1-.2.1-.3.2-.1.1-.2.2-.3.2-.1.1-.2.2-.2.3-.1.1-.1.2-.2.3s-.1.2-.1.4v.8c0 .1.1.2.1.4 0 .1.1.2.2.4.1.1.1.2.2.3.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.1-.1.2-.2.2-.3.1-.1.1-.2.2-.4 0-.1.1-.2.1-.4v-.8c0-.1 0-.3-.1-.4z" })));
};

var SvgMastercard = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M54.5 13.2h-45c-4.3 0-7.7 3.5-7.7 7.7v22.2c0 4.3 3.5 7.7 7.7 7.7h45c4.3 0 7.7-3.5 7.7-7.7V20.9c.1-4.3-3.4-7.7-7.7-7.7zm3.3 29.9c0 1.8-1.5 3.2-3.2 3.2h-45c-1.8 0-3.2-1.5-3.2-3.2V20.9c0-1.8 1.5-3.2 3.2-3.2h45c1.8 0 3.2 1.5 3.2 3.2v22.2z" }),
        React__namespace.createElement("path", { d: "M36.9 22.4c-2 0-3.9.6-5.4 1.7-1.4-1-3.1-1.4-4.9-1.4-5.1 0-9.3 4.2-9.3 9.3s4.2 9.3 9.3 9.3c1.7 0 3.4-.5 4.9-1.4 1.6 1.1 3.4 1.7 5.4 1.7 5.3 0 9.6-4.3 9.6-9.6s-4.3-9.6-9.6-9.6zm.2 16.8c-1.3 0-2.5-.4-3.5-.9 1.5-1.7 2.5-3.8 2.5-6.3-.1-2.5-1-4.7-2.5-6.3 1.1-.6 2.2-.9 3.5-.9 3.9 0 7.2 3.2 7.2 7.2-.1 4-3.3 7.2-7.2 7.2z" })));
};

var SvgMediumAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M64 32C64 14.337 49.662 0 32 0S0 14.338 0 32c0 17.66 14.338 31.998 32 31.998S64 49.66 64 32Zm-28.787 0c0 7.865-6.333 14.242-14.145 14.242-7.813 0-14.146-6.378-14.146-14.242 0-7.865 6.333-14.244 14.146-14.244 7.812 0 14.145 6.378 14.145 14.244Zm15.518 0c0 7.404-3.167 13.408-7.073 13.408-3.906 0-7.073-6.004-7.073-13.409 0-7.404 3.166-13.408 7.073-13.408 3.906 0 7.073 6.002 7.073 13.409Zm6.347 0c0 6.632-1.113 12.011-2.487 12.011S52.104 38.633 52.104 32c0-6.633 1.113-12.011 2.487-12.011 1.373 0 2.487 5.377 2.487 12.012Z", clipRule: "evenodd" })));
};

var SvgMedium = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M18.5 14.4C28.2 14.4 36 22.3 36 32s-7.9 17.6-17.5 17.6S1 41.7 1 32s7.9-17.6 17.5-17.6zm27.9 1c4.8 0 8.7 7.5 8.7 16.6 0 9.2-3.9 16.6-8.7 16.6s-8.7-7.5-8.7-16.6 3.9-16.6 8.7-16.6zm13.5 1.8c1.7 0 3.1 6.6 3.1 14.8s-1.4 14.8-3.1 14.8-3.1-6.6-3.1-14.8 1.4-14.8 3.1-14.8z" })));
};

var SvgMenu = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60 29.8H4c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h56c1.2 0 2.3-1 2.3-2.3 0-1.3-1.1-2.3-2.3-2.3zM60 46.8H4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h56c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM4 17.2h56c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H4c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3z" })));
};

var SvgMercedes = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M32.985 0c-17.651 0-32 14.325-32 31.988C.985 49.653 15.31 64 32.985 64s32-14.325 32-32.011C64.985 14.3 50.659 0 32.985 0m0 62.78c-12.026 0-21.455-6.31-25.942-15.016l.683-.253c1.162 1.934 2.688 3.615 4.738 5.895 2.528 2.81 10.522 8.222 20.498 8.222 10.636 0 19.997-5.573 25.236-14.094.41-.115.546-.3.387-.645 2.391-4.284 4.031-9.65 4.031-14.9 0-3.317-.478-6.011-1.252-8.406a36.082 36.082 0 0 0-1.709-4.33.717.717 0 0 1-.114-.415c.137.116.183.185.297.346.455.852 1.503 2.948 1.981 4.33.66 1.819 1.845 4.352 1.845 8.474 0 16.835-13.643 30.791-30.702 30.791M7.294 47.05l22.411-16.305-1.913-1.106L7.818 46.43c-2.255-4.123-3.804-9.397-3.804-14.418 0-15.89 12.504-28.764 28.356-28.856l-4.077 25.701 1.913 1.129 2.574-26.83c.045-.345.273-.345.273 0l.16 28.28 4.555-2.694-4.35-25.586c15.578.415 28.492 13.127 28.492 28.81 0 5.067-1.526 10.34-3.803 14.486L38.155 29.64l-1.913 1.106 21.455 15.73c.523.368.364.529-.205.23L33.418 32.656v5.274l24.142 9.327c-5.056 8.337-14.19 13.68-24.644 13.68-10.454 0-19.45-5.32-24.506-13.68l24.188-9.327v-5.274L7.568 47.28c-.593.323-.753.139-.206-.253m-.57.276c-1.07-2.21-2.186-5.343-2.641-7.807 0-.138-.023-.253 0-.391.09.092.114.207.182.391.729 2.28 1.366 4.307 3.006 7.37l-.57.46.024-.023ZM63.688 26.53s-.114-.207-.183-.368c-2.346-7.3-4.327-10.156-8.176-14.417-5.056-5.619-13.324-9.949-22.115-9.972-16.809 0-30.429 13.795-30.429 30.768 0 5.044 1.093 9.42 1.959 11.607 1.025 2.533 2.801 5.965 2.892 6.126.069.184.091.254.091.415-.136-.092-.182-.184-.296-.346-.5-.737-2.596-4.56-3.257-6.218-1.412-3.615-2.46-7.554-2.46-11.699C1.714 14.923 15.722.714 33.054.714 48.518.714 61 11.584 63.641 26.139c0 .138.046.253 0 .368" })));
};

var SvgMeta1 = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M25.504 27.039h1.994l3.391 6.134 3.391-6.134h1.951v10.08h-1.627v-7.726l-2.973 5.35h-1.526l-2.974-5.35v7.725h-1.627v-10.08ZM41.48 37.298c-.754 0-1.416-.166-1.987-.5a3.5 3.5 0 0 1-1.336-1.386c-.32-.59-.479-1.267-.479-2.03 0-.773.156-1.457.468-2.052a3.493 3.493 0 0 1 1.3-1.397c.554-.336 1.191-.504 1.911-.504.715 0 1.33.17 1.847.508.516.338.913.812 1.191 1.421.279.61.418 1.325.418 2.146v.446h-5.522c.1.615.35 1.098.745 1.451.396.353.896.53 1.501.53.485 0 .903-.073 1.253-.217.35-.144.679-.362.986-.655l.864 1.059c-.859.787-1.913 1.18-3.16 1.18Zm1.188-5.98c-.341-.347-.788-.521-1.34-.521-.537 0-.987.177-1.35.533-.362.355-.591.833-.687 1.433h3.96c-.048-.615-.243-1.096-.584-1.444ZM46.786 30.941H45.29v-1.332h1.497v-2.203h1.57v2.203h2.275v1.332h-2.275v3.377c0 .561.096.962.288 1.202.192.24.52.36.986.36.207 0 .382-.009.526-.025a9.86 9.86 0 0 0 .475-.069v1.318a4.727 4.727 0 0 1-1.303.18c-1.695 0-2.542-.926-2.542-2.78v-3.563ZM58.81 37.118h-1.54v-1.051a2.784 2.784 0 0 1-1.045.91 3.15 3.15 0 0 1-1.44.321c-.662 0-1.249-.17-1.76-.508a3.484 3.484 0 0 1-1.206-1.396c-.293-.593-.439-1.271-.439-2.034 0-.768.149-1.447.446-2.038.298-.59.71-1.053 1.235-1.39.526-.335 1.13-.503 1.81-.503.514 0 .975.1 1.383.299.403.194.751.485 1.015.846v-.965h1.541v7.51Zm-1.57-4.881a2.142 2.142 0 0 0-.795-1.012 2.176 2.176 0 0 0-1.256-.37c-.672 0-1.208.225-1.606.676-.398.451-.597 1.06-.597 1.829 0 .773.192 1.385.576 1.836.383.451.904.677 1.562.677.484 0 .916-.125 1.296-.375.379-.25.652-.585.82-1.008v-2.253ZM17.642 26.698c-1.308 0-2.331.985-3.257 2.237-1.272-1.62-2.336-2.237-3.61-2.237-2.596 0-4.585 3.379-4.585 6.955 0 2.237 1.083 3.649 2.896 3.649 1.305 0 2.244-.616 3.912-3.532l1.174-2.075c.168.27.345.563.53.875l.783 1.317c1.524 2.55 2.373 3.415 3.912 3.415 1.767 0 2.75-1.431 2.75-3.715 0-3.745-2.034-6.889-4.505-6.889Zm-5.916 6.282c-1.353 2.12-1.821 2.596-2.574 2.596-.775 0-1.236-.68-1.236-1.894 0-2.596 1.294-5.25 2.837-5.25.836 0 1.534.482 2.604 2.013-1.016 1.558-1.631 2.535-1.631 2.535Zm5.106-.267-.936-1.56c-.253-.412-.496-.791-.73-1.138.844-1.301 1.54-1.95 2.366-1.95 1.719 0 3.094 2.53 3.094 5.639 0 1.184-.388 1.872-1.192 1.872-.77 0-1.139-.51-2.602-2.863Z" })));
};

var SvgMeta2 = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M4.901 23.635h3.252l5.53 10.003 5.53-10.003h3.18v16.436h-2.652V27.474l-4.849 8.723h-2.489l-4.848-8.723v12.597H4.9V23.635ZM30.952 40.365c-1.229 0-2.31-.272-3.24-.816a5.708 5.708 0 0 1-2.178-2.26c-.52-.963-.781-2.066-.78-3.31 0-1.26.253-2.376.762-3.347a5.699 5.699 0 0 1 2.12-2.277c.903-.548 1.942-.822 3.116-.822 1.166 0 2.17.276 3.012.828.84.552 1.488 1.324 1.942 2.318.454.994.681 2.16.681 3.499v.728h-9.004c.164 1.002.57 1.79 1.215 2.365.646.575 1.462.863 2.448.863.79 0 1.471-.117 2.043-.352a5.2 5.2 0 0 0 1.608-1.068l1.409 1.725c-1.401 1.284-3.12 1.926-5.154 1.926Zm1.937-9.75c-.556-.568-1.284-.851-2.184-.851-.876 0-1.61.29-2.2.868-.592.58-.966 1.358-1.122 2.337h6.457c-.078-1.002-.395-1.787-.951-2.354ZM39.605 29.998h-2.441v-2.172h2.441v-3.592h2.56v3.592h3.71v2.172h-3.71v5.506c0 .916.156 1.57.47 1.961.312.391.848.587 1.608.587.336 0 .622-.014.857-.041.234-.027.493-.065.774-.112v2.149a7.707 7.707 0 0 1-2.125.294c-2.762 0-4.144-1.511-4.144-4.532v-5.812ZM59.212 40.071h-2.513v-1.714a4.538 4.538 0 0 1-1.702 1.485c-.689.348-1.472.522-2.348.523-1.08 0-2.037-.276-2.87-.828-.834-.552-1.49-1.311-1.967-2.278-.477-.966-.716-2.072-.716-3.316 0-1.252.243-2.36.728-3.323.485-.962 1.156-1.718 2.013-2.265.857-.548 1.841-.822 2.953-.822.837 0 1.589.162 2.254.487a4.456 4.456 0 0 1 1.655 1.38v-1.574h2.513v12.245Zm-2.56-7.96a3.491 3.491 0 0 0-1.297-1.65c-.591-.402-1.274-.604-2.049-.604-1.096 0-1.968.368-2.618 1.104-.65.736-.974 1.73-.974 2.982 0 1.26.313 2.258.94 2.994.625.735 1.474 1.103 2.547 1.103.79 0 1.494-.203 2.113-.61a3.449 3.449 0 0 0 1.338-1.644V32.11Z" })));
};

var SvgMeta = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M44.626 12.729c-4.756 0-8.473 3.582-11.839 8.132-4.624-5.889-8.492-8.133-13.12-8.133C10.23 12.729 3 25.01 3 38.008 3 46.14 6.935 51.27 13.526 51.27c4.744 0 8.156-2.236 14.221-12.839 0 0 2.528-4.464 4.268-7.54.61.984 1.251 2.045 1.925 3.181l2.845 4.785c5.54 9.271 8.627 12.413 14.22 12.413 6.422 0 9.995-5.2 9.995-13.503 0-13.61-7.393-25.04-16.374-25.04ZM23.122 35.561c-4.918 7.708-6.619 9.436-9.357 9.436-2.817 0-4.492-2.474-4.492-6.884 0-9.437 4.705-19.086 10.314-19.086 3.037 0 5.575 1.754 9.463 7.32-3.692 5.662-5.928 9.214-5.928 9.214Zm18.56-.97L38.28 28.92a117.732 117.732 0 0 0-2.654-4.133c3.065-4.73 5.593-7.088 8.6-7.088 6.247 0 11.244 9.197 11.244 20.494 0 4.306-1.41 6.805-4.333 6.805-2.8 0-4.139-1.85-9.457-10.407Z" })));
};

var SvgMic = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 43.9c3.2 0 6.2-1.3 8.5-3.5 2.2-2.2 3.4-5.2 3.4-8.3V13.6C43.9 7 38.6 1.7 32 1.7c-6.6 0-11.9 5.3-11.9 11.9V32c0 6.6 5.3 11.9 11.9 11.9zm-7.4-30.3c0-4.1 3.3-7.4 7.4-7.4 4.1 0 7.4 3.3 7.4 7.4V32c0 1.9-.7 3.8-2.1 5.2-1.4 1.4-3.3 2.2-5.3 2.2-4.1 0-7.4-3.3-7.4-7.4V13.6z" }),
        React__namespace.createElement("path", { d: "M52.6 31.5c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3c0 8.9-7.2 16.1-16.1 16.1-8.8 0-16-7.2-16-16 0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3c0 10.6 8 19.3 18.3 20.4v5.7h-6.2c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h16.9c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-6.2V52c10.4-1.1 18.5-9.9 18.5-20.5z" })));
};

var SvgMicrophone = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M44.2 1.8c-10 0-18.1 8.1-18.1 18.1 0 1.7.3 3.4.7 5L4.3 47.3c-3.4 3.4-3.4 9 0 12.4 1.7 1.7 3.9 2.5 6.2 2.5 2.3 0 4.5-.8 6.2-2.5l22.5-22.5c1.6.5 3.2.7 5 .7 10 0 18.1-8.1 18.1-18.1s-8.2-18-18.1-18zM7.5 56.5c-1.6-1.6-1.6-4.4 0-6l.3-.3 6 6-.2.2c-1.7 1.8-4.5 1.8-6.1.1zm9.4-3.4-6-6 17.9-17.8c1.5 2.5 3.6 4.5 6 6L16.9 53.1zm13.7-33.3c0-1.2.2-2.3.4-3.4L47.5 33c-1.1.3-2.2.4-3.3.4-7.5 0-13.6-6.1-13.6-13.6zM51.9 31 33 12.1c2.5-3.5 6.5-5.8 11.1-5.8 7.5 0 13.6 6.1 13.6 13.6.1 4.6-2.3 8.7-5.8 11.1z" })));
};

var SvgMicroscope = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M47.5 57.7H36.9V52c.3 0 .5 0 .8-.1 9.8-1.2 17.2-10.1 17.2-20.6 0-6-2.3-11.4-6.4-15.3-.4-.4-.8-.7-1.2-1.1l1.6-2.5c.9-1.4 1.2-3.1.9-4.7-.3-1.6-1.3-3-2.7-3.9l-1.6-1.1c-1.4-.9-3.1-1.2-4.7-.9-1.6.3-3 1.3-3.9 2.7l-11.2 17c-1.9 2.9-1.1 6.8 1.8 8.6l1.6 1.1c1.1.7 2.2 1 3.4 1 2 0 4-1 5.2-2.8l7-10.7c.2.2.4.3.6.5 3.3 3.1 5 7.4 5 12.1 0 8.3-5.7 15.2-13.2 16.1-.6.1-1.2.1-1.8.1-.8 0-1.5 0-2.2-.2-3.8-.6-7.2-2.7-9.5-5.9h7c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H11.4c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h6.9c2.9 5.5 8.1 9.4 14 10.3v5.8H21.7c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h25.8c1.2 0 2.2-1 2.2-2.2s-.9-2-2.2-2zM34 27c-.5.8-1.6 1-2.4.5L30 26.4c-.8-.5-1-1.6-.5-2.4l11-16.9c.3-.4.6-.7 1.1-.8h.4c.3 0 .7.1 1 .3l1.6 1.1c.4.3.7.6.8 1.1.1.5 0 .9-.2 1.3L34 27z" })));
};

var SvgMicrosoftEdge = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M58.1 48.1c-.1-.1-.3-.1-.4 0-.8.4-1.8.8-2.7 1.1-3 1.1-5.9 1.7-9 1.7-5.9 0-11.4-2-15.8-5.5-4.4-3.7-6.8-8.5-6.8-13.5 0-1.1.3-2.4.7-3.4-7.5 6.5-8.9 17.8-2.8 25.9 1.4 2.1 3.2 3.8 5.4 5.1 3.9 2.4 8.5 3.2 13 2.4.7-.1 1.4-.3 2-.6l.3-.1c6.6-2.3 12.4-6.9 16.1-12.8.3-.1.3-.3 0-.3z" }),
        React__namespace.createElement("path", { d: "M26.3 60.6c-.1-.1-.3-.1-.4-.3-2.1-1.4-3.9-3.1-5.4-5.2-3.2-4.4-4.5-9.9-3.7-15.4.8-5.5 3.8-10.1 8.2-13.4 0 0 .1-.1.3-.1.4-.3 1-.7 1.6-1 .4-.3.8-.4 1.3-.7h.1c.8-.4 2.3-1 3.9-1 2.3 0 4.4 1 5.9 2.4-.1-.3-.3-.4-.4-.7-1.3-2.1-3.1-4.8-7.3-7-4.4-2.3-9.2-2.4-10.1-2.4-9.6 0-17.6 5.9-19 13.7-.3.7-.3 1.4-.3 2.1 0 4.7 1 9.3 3 13.5 4.8 10.3 14.8 16.8 25.5 17.8.8.1 1.7.1 2.5.1h.1c-.7-.1-1.3-.3-2-.6-1.3-.4-2.6-1.1-3.8-1.8z" }),
        React__namespace.createElement("path", { d: "m60.5 17.1-.1-.3C55.3 7.1 44.4 1 32 1 18.4 1 6.7 10 2.6 22.3c-.1.4-.3 1-.4 1.4.4-.7 1-1.4 1.5-2.1 1-1 2-2 3.1-2.8 3.5-2.5 8.2-4.2 13.2-4.2 1.4 0 6.2.1 10.7 2.5s6.6 5.2 7.9 7.5c.6 1 1 2.1 1.3 3.1.1.7.3 1.4.4 2.1.1 1 .1 1.8.1 2.3v.3c0 1.5-.8 3.7-2.1 5.4l-.3.3c-.3.3-.4.4-.4.7 0 .4.3.8.8 1.3 3.2 2.3 9.6 2.1 9.9 2 2.5 0 4.9-.7 7.2-2 4.5-2.5 7.2-7.3 7.2-12.5.3-5.3-1.4-8.8-2.2-10.5z" })));
};

var SvgMicrosoftTeams = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M61.559 15.254a6.491 6.491 0 0 1-6.49 6.491 6.483 6.483 0 0 1-6.482-6.49c0-3.585 2.906-6.492 6.481-6.492a6.497 6.497 0 0 1 6.491 6.491ZM44.256 12.368c0 5.183-4.194 9.378-9.368 9.378h-.242v-3.614a4.242 4.242 0 0 0-4.243-4.243h-4.766a8.79 8.79 0 0 1-.126-1.521C25.51 7.195 29.706 3 34.888 3a9.363 9.363 0 0 1 9.368 9.368ZM63 27.365v14.59c0 5.56-4.505 10.075-10.066 10.075h-.048c-1.53 0-2.984-.34-4.292-.96-2.48 5.532-7.973 9.446-14.434 9.61-6.937-.174-12.759-4.669-14.939-10.85h11.18a4.242 4.242 0 0 0 4.243-4.243V24.633h25.614A2.73 2.73 0 0 1 63 27.365Z" }),
        React__namespace.createElement("path", { fill: "#000", d: "M32.67 18.113a2.568 2.568 0 0 0-.069-.262 1.812 1.812 0 0 0-.116-.29 1.161 1.161 0 0 0-.077-.155c-.01-.02-.01-.03-.02-.049a3.023 3.023 0 0 0-.416-.562 2.674 2.674 0 0 0-1.89-.794H3.645A2.642 2.642 0 0 0 1 18.646v26.428a2.642 2.642 0 0 0 2.645 2.644h26.438a2.64 2.64 0 0 0 2.635-2.644V18.646a3.2 3.2 0 0 0-.049-.533Zm-8.855 7.924h-5.377v14.396h-3.275V26.037h-5.26v-2.79h13.912v2.79Z" })));
};

var SvgMicrosoft = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M1 30.6h29.6V1H1v29.6zM63 30.6V1H33.4v29.6H63zM1 63h29.6V33.4H1V63zM33.4 63H63V33.4H33.4V63z" })));
};

var SvgMinus = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M59 34.3H5c-1.2 0-2.3-1-2.3-2.3 0-1.2 1-2.3 2.3-2.3h54c1.2 0 2.3 1 2.3 2.3 0 1.2-1.1 2.3-2.3 2.3z" })));
};

var SvgMobile = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M34.9 9.5h-5.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h5.8c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" }),
        React__namespace.createElement("path", { d: "M44.4 1.8H19.6c-3.4 0-6.3 2.8-6.3 6.3v48c0 3.4 2.8 6.3 6.3 6.3h24.9c3.4 0 6.3-2.8 6.3-6.3V8c-.1-3.4-2.9-6.2-6.4-6.2zM46.2 56c0 1-.8 1.8-1.8 1.8H19.6c-1 0-1.8-.8-1.8-1.8V8c0-1 .8-1.8 1.8-1.8h24.9c1 0 1.8.8 1.8 1.8v48z" }),
        React__namespace.createElement("path", { d: "M34.1 53.3c-.1-.1-.1-.2-.2-.3l-.3-.3c-.5-.5-1.3-.8-2-.6-.1 0-.3.1-.4.1-.1 0-.3.1-.4.2l-.3.3-.3.3c-.1.1-.1.3-.2.4-.1.1-.1.3-.1.4v.4c0 .6.2 1.2.7 1.6l.3.3c.1.1.3.2.4.2.1 0 .3.1.4.1h.4c.6 0 1.2-.2 1.6-.7l.3-.3c.1-.1.1-.3.2-.4.1-.1.1-.3.1-.4v-.8c-.1-.2-.2-.3-.2-.5z" })));
};

var SvgMoneyLocation = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 1.4C17.9 1.4 6.5 12.3 6.5 25.6c0 10.1 13.6 26 21.7 34.6 1 1.1 2.4 1.7 3.8 1.7 1.5 0 2.8-.6 3.8-1.7 8.1-8.6 21.7-24.5 21.7-34.6C57.5 12.3 46.1 1.4 32 1.4zm.5 55.7c-.2.2-.4.3-.5.3-.1 0-.4 0-.5-.3C21.6 46.6 11 32.8 11 25.6 11 14.8 20.4 6 32 6s21 8.8 21 19.6c0 7.2-10.6 21-20.5 31.5z" }),
        React__namespace.createElement("path", { d: "M34.6 25h-5.1c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h8.2c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-3.3V17c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2v.5h-.3c-3.3 0-6 2.7-6 6s2.7 6 6 6h5.1c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-8.2c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h3.3v.5c0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2v-.5h.3c3.3 0 6-2.7 6-6s-2.7-5.9-6-5.9z" })));
};

var SvgMoneyProtection = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M53.6 7.5 33.3 1.9c-.8-.2-1.7-.2-2.5 0L10.4 7.5c-2.1.6-3.6 2.5-3.6 4.7V27c0 15.5 9.2 29.2 23.4 34.9.6.2 1.2.4 1.8.4.6 0 1.2-.1 1.8-.4 14.2-5.7 23.4-19.5 23.4-35V12.2c0-2.2-1.5-4.1-3.6-4.7zm-.9 19.4c0 13.4-8.3 25.8-20.5 30.8h-.3c-12.5-5-20.6-17.1-20.6-30.7V12.2c0-.1.1-.3.2-.3l20.4-5.6h.2l20.4 5.6c.1 0 .2.2.2.3v14.7z" }),
        React__namespace.createElement("path", { d: "M35.5 27.2h-7c-1.6 0-2.8-1.3-2.8-2.9s1.3-2.9 2.8-2.9h11.2c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-5.4v-1.5c0-1.2-1-2.2-2.3-2.2s-2.2 1-2.2 2.2V17h-1.3c-4 0-7.3 3.3-7.3 7.4s3.3 7.4 7.3 7.4h7c1.6 0 2.8 1.3 2.8 2.9 0 1.6-1.3 2.9-2.8 2.9H24.4c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h5.4v1.5c0 1.2 1 2.2 2.2 2.2s2.3-1 2.3-2.2V42h1.3c4 0 7.3-3.3 7.3-7.4 0-4.1-3.3-7.4-7.4-7.4z" })));
};

var SvgMongodb = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M37.57 7.139C34.878 3.962 32.558.712 32.087.046a.106.106 0 0 0-.175 0c-.47.666-2.79 3.916-5.482 7.093C3.354 36.536 30.072 56.37 30.072 56.37l.217.15c.202 3.069.706 7.479.706 7.479h2.01s.502-4.391.705-7.459l.218-.17S60.646 36.537 37.57 7.139ZM32 55.939s-1.198-1.021-1.521-1.533l-.003-.055 1.449-32.006a.076.076 0 0 1 .15 0l1.45 32.006-.004.055c-.323.512-1.52 1.534-1.52 1.534Z" })));
};

var SvgMoreAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("circle", { cx: 10.9, cy: 32, r: 8 }),
        React__namespace.createElement("circle", { cx: 32, cy: 32, r: 8 }),
        React__namespace.createElement("circle", { cx: 53.1, cy: 32, r: 8 })));
};

var SvgMore = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 39.5c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5 7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5zM32 29c-1.7 0-3 1.4-3 3s1.4 3 3 3 3-1.4 3-3-1.3-3-3-3zM55.7 39.5c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5 7.5 3.4 7.5 7.5c.1 4.1-3.3 7.5-7.5 7.5zm0-10.5c-1.7 0-3 1.4-3 3s1.4 3 3 3 3-1.4 3-3-1.3-3-3-3zM8.3 39.5C4.2 39.5.8 36.1.8 32s3.4-7.5 7.5-7.5 7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5zm0-10.5c-1.7 0-3 1.4-3 3s1.4 3 3 3c1.7 0 3-1.4 3-3s-1.4-3-3-3z" })));
};

var SvgMouse = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 1.8c-11.2 0-20.2 9.9-20.2 22.1v16.2c0 12.2 9.1 22.1 20.2 22.1 5.2 0 10.1-2.1 13.8-5.9 4.2-4.2 6.5-10.2 6.4-16.3V23.9c0-12.2-9.1-22.1-20.2-22.1zm15.7 22.1V25H34.4V6.5c7.6 1.3 13.3 8.6 13.3 17.4zM29.9 6.4V25H16.2v-1.1c0-9 6-16.4 13.7-17.5zm12.7 46.8c-2.9 2.9-6.7 4.5-10.6 4.5-8.7 0-15.7-7.9-15.7-17.6V29.5h31.5v10.6c0 5-1.9 9.8-5.2 13.1z" })));
};

var SvgMove = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m61.3 29.7-8.1-8.1c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l5 5H34.3V9l4.9 5c.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.7.9-.9.9-2.3 0-3.2l-8.1-8.1c-.6-.6-1.4-1-2.3-1-.9 0-1.7.3-2.3 1l-8.1 8.1c-.9.9-.9 2.3 0 3.2.9.9 2.3.9 3.2 0l5-5v20.8H9l5-5c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0l-8.1 8.1c-1.3 1.3-1.3 3.3 0 4.6l8.1 8.1c.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.7.9-.9.9-2.3 0-3.2l-5-5h20.8V55l-5-5c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l8.1 8.1c.6.6 1.4 1 2.3 1 .9 0 1.7-.3 2.3-1l8.1-8.1c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0l-4.9 5V34.2H55l-5 5c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7l8.1-8.1c1.2-1.3 1.2-3.3 0-4.6z" })));
};

var SvgMushroom = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M54.3 15.1C49.9 6.9 41.4 1.8 32 1.8S14.1 6.9 9.7 15.2C7.9 18.6 7 22.1 6.9 25.8V26.1c0 .3.1.6.2.9 2.2 4.9 8.2 8.6 15.8 10.2l-1.6 15.1c-.3 2.5.5 5 2.2 6.9s4.1 3 6.6 3h3.7c2.5 0 5-1.1 6.6-3 1.7-1.9 2.5-4.4 2.2-6.9L41 37.2c7.6-1.7 13.5-5.4 15.7-10.2.1-.3.2-.7.2-1 .1-3.8-.9-7.5-2.6-10.9zm-16 37.7c.1 1.3-.3 2.5-1.1 3.4s-2 1.5-3.3 1.5h-3.7c-1.3 0-2.4-.5-3.3-1.5s-1.2-2.2-1.1-3.4L27.4 38c1.5.2 3 .2 4.6.2 1.6 0 3.2-.1 4.7-.3l1.6 14.9zM32 33.7c-10.7 0-18.4-4-20.6-8.1.1-2.9.9-5.6 2.3-8.3 3.6-6.8 10.6-11 18.3-11 7.7 0 14.7 4.2 18.3 11 1.4 2.6 2.2 5.4 2.3 8.4-2.3 4-9.9 8-20.6 8z" }),
        React__namespace.createElement("circle", { cx: 21.9, cy: 24.4, r: 2.3 }),
        React__namespace.createElement("circle", { cx: 42.2, cy: 24.4, r: 2.3 }),
        React__namespace.createElement("circle", { cx: 32, cy: 14.2, r: 2.3 })));
};

var SvgMusic = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60.2 2.2c-.5-.4-1.2-.6-1.9-.4L22.2 9.7c-1 .2-1.8 1.1-1.8 2.2v30.6c-1.8-1.3-4.1-2.1-6.5-2.1-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11V29.1l31.7-6.9v14.1c-1.8-1.3-4.1-2.1-6.5-2.1-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11V4c0-.7-.3-1.3-.9-1.8zM13.9 57.8c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zm11-44.1 31.7-6.9v10.8l-31.7 6.9V13.7zm25.2 37.9c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5z" })));
};

var SvgMysql = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M58.952 49.853c-3.481-.097-6.182.26-8.445 1.212-.652.261-1.697.261-1.783 1.081.348.345.39.908.695 1.385.522.866 1.437 2.032 2.264 2.637l2.785 1.99c1.697 1.038 3.612 1.644 5.266 2.682.958.606 1.915 1.385 2.873 2.034.488.346.783.91 1.393 1.125v-.131c-.304-.388-.392-.95-.696-1.385l-1.307-1.253c-1.261-1.687-2.829-3.159-4.526-4.369-1.393-.952-4.44-2.25-5.005-3.849l-.086-.097c.956-.097 2.088-.433 3.003-.693 1.48-.388 2.829-.302 4.35-.691l2.092-.606v-.388c-.784-.779-1.35-1.817-2.176-2.552-2.22-1.903-4.658-3.763-7.183-5.32-1.35-.865-3.09-1.429-4.527-2.163-.524-.26-1.393-.39-1.697-.822-.786-.95-1.22-2.205-1.785-3.331l-3.57-7.526c-.783-1.687-1.263-3.374-2.219-4.931-4.483-7.354-9.36-11.81-16.846-16.179-1.61-.908-3.524-1.3-5.56-1.774l-3.265-.175c-.697-.302-1.393-1.124-2.003-1.514C8.514 2.693 2.114-.681.285 3.765c-1.175 2.812 1.742 5.58 2.732 7.008.741.995 1.698 2.12 2.221 3.244.293.735.39 1.514.696 2.293.696 1.903 1.35 4.023 2.263 5.798.488.908 1 1.861 1.61 2.682.348.485.958.693 1.088 1.471-.61.866-.652 2.162-1 3.245-1.568 4.888-.958 10.944 1.261 14.543.698 1.081 2.342 3.461 4.572 2.552 1.959-.779 1.522-3.244 2.088-5.407.131-.519.043-.865.304-1.212v.097l1.785 3.59c1.35 2.12 3.7 4.326 5.659 5.798 1.043.778 1.87 2.12 3.176 2.595v-.13h-.086c-.261-.389-.654-.563-1.002-.866-.783-.778-1.653-1.73-2.263-2.595-1.827-2.422-3.437-5.105-4.874-7.873-.698-1.34-1.307-2.811-1.871-4.152-.264-.52-.264-1.3-.698-1.557-.653.95-1.61 1.774-2.09 2.941-.828 1.86-.913 4.153-1.218 6.532-.175.044-.098 0-.175.097-1.392-.345-1.872-1.774-2.394-2.984-1.305-3.072-1.524-8.003-.392-11.55.305-.909 1.612-3.764 1.09-4.629-.263-.822-1.132-1.297-1.612-1.946-.566-.823-1.173-1.86-1.566-2.768-1.043-2.424-1.565-5.105-2.698-7.528-.524-1.124-1.437-2.293-2.177-3.33-.828-1.168-1.74-1.99-2.394-3.374-.217-.485-.521-1.255-.173-1.774.086-.346.261-.485.608-.563.565-.484 2.177.13 2.743.388 1.61.65 2.959 1.255 4.308 2.162.61.433 1.263 1.255 2.047 1.472h.915c1.393.302 2.959.097 4.263.485 2.307.737 4.396 1.817 6.27 2.986C29 15.096 33.703 20.2 36.88 26.3c.521.995.739 1.903 1.219 2.941.915 2.12 2.046 4.283 2.959 6.36.915 2.034 1.785 4.111 3.09 5.798.654.909 3.264 1.384 4.439 1.86.871.388 2.22.737 3.005 1.212 1.479.908 2.959 1.947 4.35 2.941.696.518 2.874 1.6 3.004 2.463l.005-.023Zm-44.389-37.59a6.958 6.958 0 0 0-1.783.215v.097h.086c.348.693.957 1.169 1.393 1.775l1.002 2.076.085-.097c.61-.432.915-1.124.915-2.162-.261-.302-.304-.606-.521-.908-.262-.433-.828-.65-1.177-.995v-.002Z", clipRule: "evenodd" })));
};

var SvgNetflix = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M9.6 39.181c-.963.17-1.942.22-2.956.355l-3.09-9.053v9.442c-.964.101-1.842.236-2.754.371V23h2.568l3.513 9.814V23H9.6v16.181Zm5.32-9.847c1.048 0 2.653-.05 3.616-.05v2.702c-1.2 0-2.602 0-3.615.05v4.02c1.588-.1 3.175-.236 4.78-.286v2.6l-7.483.592V23h7.483v2.703h-4.78v3.631Zm14.831-3.631h-2.804v12.431c-.912 0-1.824 0-2.702.034V25.703H21.44V23h8.31v2.703Zm4.392 3.445h3.699v2.703h-3.7v6.131h-2.651V23h7.55v2.703h-4.898v3.445Zm9.29 6.47c1.537.033 3.09.152 4.594.236v2.669c-2.415-.152-4.83-.304-7.297-.355V23h2.703v12.618Zm6.874 3.09c.862.051 1.774.102 2.652.203V23h-2.652v15.709ZM64.8 23l-3.429 8.226 3.429 9.07c-1.014-.135-2.027-.32-3.04-.49l-1.943-5-1.976 4.595c-.98-.169-1.926-.22-2.905-.355l3.48-7.921L55.273 23h2.905l1.773 4.544L61.844 23H64.8Z" })));
};

var SvgNetlify = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "m46.657 22.21-.024-.01c-.013-.005-.026-.01-.038-.022a.184.184 0 0 1-.047-.155l1.289-7.889 6.042 6.053-6.284 2.677a.13.13 0 0 1-.055.01h-.025a.187.187 0 0 1-.033-.028 2.86 2.86 0 0 0-.825-.636Zm8.763-.481 6.46 6.47c1.342 1.345 2.014 2.016 2.259 2.794.037.115.067.23.09.349L48.79 24.794a.404.404 0 0 0-.025-.01c-.062-.025-.133-.054-.133-.117 0-.064.073-.094.135-.119l.02-.008 6.633-2.811Zm8.546 11.689c-.334.627-.984 1.279-2.084 2.382L54.6 43.092l-9.42-1.964-.05-.01c-.084-.014-.172-.029-.172-.104a2.849 2.849 0 0 0-1.092-1.99c-.039-.04-.029-.1-.017-.154 0-.009 0-.017.004-.024l1.771-10.893.007-.036c.01-.084.025-.18.1-.18a2.882 2.882 0 0 0 1.933-1.11c.015-.017.025-.036.045-.046.053-.025.117 0 .172.024l16.084 6.813h.002ZM52.923 44.77 40.947 56.764l2.05-12.619.004-.016a.26.26 0 0 1 .01-.048c.016-.04.06-.057.101-.074l.02-.008a3.084 3.084 0 0 0 1.159-.863c.04-.047.088-.092.15-.1a.145.145 0 0 1 .048 0l8.434 1.736.002-.002ZM38.411 59.303l-1.35 1.352-14.926-21.602-.016-.023c-.023-.032-.048-.064-.043-.1 0-.027.018-.05.036-.07l.017-.023c.045-.066.083-.133.125-.205l.033-.058.005-.005c.024-.04.045-.079.085-.1.035-.017.084-.01.122-.002l16.536 3.415c.046.007.09.026.126.055.022.022.027.045.032.072a2.931 2.931 0 0 0 1.714 1.96c.046.024.026.076.005.131a.39.39 0 0 0-.025.075c-.209 1.269-1.995 12.181-2.475 15.128Zm-2.82 2.823c-.995.986-1.582 1.508-2.245 1.719a3.329 3.329 0 0 1-2.01 0c-.777-.247-1.448-.918-2.79-2.264l-14.99-15.01 3.916-6.08a.252.252 0 0 1 .067-.08c.041-.03.101-.016.151 0a4.052 4.052 0 0 0 2.73-.138c.045-.017.09-.028.125.003a.297.297 0 0 1 .047.054l14.999 21.797v-.002Zm-23.48-17.002L8.674 41.68l6.79-2.9a.139.139 0 0 1 .056-.013c.056 0 .09.057.12.109.068.105.14.208.216.307l.022.027c.02.028.006.056-.014.083l-3.75 5.83h-.001Zm-4.96-4.968L2.801 35.8c-.74-.741-1.277-1.279-1.65-1.741l13.227 2.747.05.009c.082.013.172.028.172.105 0 .083-.098.122-.182.153l-.038.017-7.229 3.066ZM.391 31.82c.015-.28.066-.558.15-.826.247-.778.917-1.45 2.26-2.794l5.567-5.575c2.563 3.725 5.133 7.445 7.71 11.161.046.06.096.127.044.177-.243.269-.487.563-.659.881a.268.268 0 0 1-.083.104c-.022.013-.045.008-.07.003h-.003L.39 31.817v.002ZM9.858 21.13l7.482-7.496c.705.31 3.267 1.392 5.555 2.36 1.734.735 3.314 1.403 3.81 1.62.05.02.096.04.117.09.014.03.007.068 0 .1-.24 1.099.087 2.246.872 3.051.05.05 0 .122-.043.184l-.023.035-7.6 11.789a.23.23 0 0 1-.073.083c-.04.025-.096.014-.143.002a3.784 3.784 0 0 0-.905-.123c-.273 0-.57.05-.87.105h-.002c-.033.005-.063.011-.09-.009a.35.35 0 0 1-.075-.085L9.857 21.131h.001Zm8.997-9.01 9.69-9.704C29.888 1.073 30.56.401 31.336.155a3.329 3.329 0 0 1 2.01 0c.778.246 1.45.918 2.791 2.262l2.1 2.103-6.892 10.69a.257.257 0 0 1-.068.08c-.042.028-.1.016-.15 0a3.491 3.491 0 0 0-3.2.617c-.045.047-.112.02-.169-.005-.9-.393-7.9-3.355-8.902-3.78ZM39.7 5.986l6.363 6.372-1.533 9.511v.025a.222.222 0 0 1-.014.064c-.016.033-.05.04-.083.05-.328.1-.637.253-.913.455a.283.283 0 0 0-.034.029c-.018.02-.036.038-.066.041a.187.187 0 0 1-.072-.011l-9.697-4.126-.019-.009c-.061-.025-.135-.055-.135-.118a3.67 3.67 0 0 0-.516-1.527c-.047-.077-.099-.157-.059-.236L39.7 5.986ZM33.146 20.35l9.09 3.856c.05.023.105.045.127.097a.175.175 0 0 1 0 .095c-.027.133-.05.285-.05.439v.255c0 .064-.065.09-.125.116l-.018.006c-1.44.616-20.218 8.634-20.246 8.634-.029 0-.059 0-.087-.028-.05-.05 0-.12.045-.184l.023-.033 7.47-11.584.014-.02c.043-.07.093-.148.173-.148l.075.011c.17.024.32.046.472.046a3.374 3.374 0 0 0 2.817-1.498.271.271 0 0 1 .056-.067c.046-.033.112-.016.164.007Zm-10.41 15.331 20.467-8.741s.03 0 .058.028c.112.112.207.187.299.257l.045.029c.041.023.083.05.086.093 0 .017 0 .027-.003.042l-1.754 10.786-.006.043c-.012.084-.023.179-.102.179a2.881 2.881 0 0 0-2.288 1.414l-.008.013c-.024.039-.045.075-.084.095-.035.017-.08.01-.116.002L23.007 36.55c-.016-.003-.253-.866-.272-.868Z" })));
};

var SvgNetwork = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M31.9 18.4c4.2 0 7.5-3.4 7.5-7.5S36 3.4 31.9 3.4s-7.5 3.4-7.5 7.5 3.3 7.5 7.5 7.5zm0-10.6c1.7 0 3 1.4 3 3s-1.4 3-3 3-3-1.4-3-3 1.3-3 3-3zM23.6 28.5c2.1-2.3 5.2-3.7 8.4-3.7s6.3 1.3 8.4 3.7c.4.5 1 .7 1.7.7.5 0 1.1-.2 1.5-.6.9-.8 1-2.3.1-3.2-3-3.2-7.3-5.1-11.7-5.1s-8.7 1.9-11.7 5.1c-.8.9-.8 2.3.1 3.2.9.9 2.3.8 3.2-.1zM13.4 50.1c4.2 0 7.5-3.4 7.5-7.5 0-4.2-3.4-7.5-7.5-7.5s-7.5 3.4-7.5 7.5c-.1 4.2 3.3 7.5 7.5 7.5zm0-10.6c1.7 0 3 1.4 3 3 0 1.7-1.4 3-3 3s-3-1.4-3-3c-.1-1.6 1.3-3 3-3zM13.1 51.8c-4.4 0-8.7 1.9-11.7 5.1-.8.9-.8 2.3.1 3.2.9.9 2.3.8 3.2-.1 2.1-2.3 5.2-3.7 8.4-3.7s6.3 1.3 8.4 3.7c.4.5 1 .7 1.7.7.5 0 1.1-.2 1.5-.6.9-.8 1-2.3.1-3.2-3-3.2-7.3-5.1-11.7-5.1zM50.4 50.1c4.2 0 7.5-3.4 7.5-7.5 0-4.2-3.4-7.5-7.5-7.5-4.2 0-7.5 3.4-7.5 7.5 0 4.2 3.4 7.5 7.5 7.5zm0-10.6c1.7 0 3 1.4 3 3 0 1.7-1.4 3-3 3-1.7 0-3-1.4-3-3s1.4-3 3-3zM62.7 57c-3-3.2-7.3-5.1-11.7-5.1s-8.7 1.9-11.7 5.1c-.8.9-.8 2.3.1 3.2.9.8 2.3.8 3.2-.1 2.1-2.3 5.2-3.7 8.4-3.7s6.3 1.3 8.4 3.7c.4.5 1 .7 1.7.7.5 0 1.1-.2 1.5-.6.8-.9.9-2.3.1-3.2zM39.2 40.9c.5-1.1 0-2.5-1.1-3l-3.9-1.8V32c0-1.2-1-2.3-2.2-2.3s-2.3 1-2.3 2.3v4l-4 1.9c-1.1.5-1.6 1.9-1.1 3s1.9 1.6 3 1.1l4.2-2 4.5 2c.3.1.6.2.9.2.8 0 1.6-.5 2-1.3z" })));
};

var SvgNextjs = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M29.904.017c-.137.013-.575.057-.97.088-9.09.82-17.604 5.723-22.997 13.26-3.003 4.192-4.924 8.946-5.65 13.981C.032 29.104 0 29.623 0 32.006s.031 2.903.288 4.66C2.027 48.683 10.579 58.78 22.178 62.52c2.077.67 4.267 1.126 6.756 1.401.97.107 5.162.107 6.131 0 4.298-.475 7.94-1.538 11.53-3.371.551-.282.657-.357.582-.42-.05-.037-2.396-3.183-5.211-6.986l-5.117-6.912-6.413-9.49c-3.529-5.216-6.431-9.482-6.456-9.482-.025-.007-.05 4.21-.063 9.357-.019 9.014-.025 9.377-.138 9.59-.162.306-.287.431-.55.569-.2.1-.375.119-1.32.119h-1.082l-.288-.182a1.17 1.17 0 0 1-.42-.456l-.13-.282L20 33.432l.019-12.548.194-.243c.1-.132.312-.3.462-.382.257-.125.357-.138 1.44-.138 1.276 0 1.488.05 1.82.413.094.1 3.566 5.33 7.72 11.629 4.154 6.299 9.834 14.9 12.625 19.122l5.067 7.675.257-.169c2.27-1.476 4.673-3.578 6.575-5.767 4.048-4.648 6.656-10.315 7.532-16.358.257-1.757.288-2.276.288-4.66 0-2.383-.031-2.902-.288-4.66C61.973 15.33 53.421 5.234 41.822 1.493 39.776.83 37.6.373 35.16.1c-.6-.063-4.735-.132-5.255-.082Zm13.1 19.354c.3.15.545.438.632.738.05.162.063 3.64.05 11.478l-.018 11.247-1.983-3.04-1.99-3.04v-8.176c0-5.285.025-8.256.063-8.4.1-.35.319-.626.619-.788.256-.132.35-.144 1.332-.144.926 0 1.089.012 1.295.125Z" })));
};

var SvgNight = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M35.5 4c-1.7-.5-3.4-.9-5.2-1.2-1.3-.2-2.7.5-3.2 1.7-.6 1.2-.3 2.7.7 3.5 7.1 6.6 9.7 16.3 6.8 25.4C31.4 43.5 22 50.6 11.1 50.9c-1.4 0-2.5.9-2.9 2.2-.4 1.3.2 2.7 1.3 3.4 2.5 1.5 5 2.7 7.5 3.5 2.9.9 5.9 1.3 8.9 1.3 5.1 0 10.1-1.3 14.6-3.8 7.1-3.9 12.1-10.2 14.3-17.8C59.1 24.7 50.6 9 35.5 4zm15 34.4c-1.8 6.5-6.2 11.8-12.1 15.1-6.2 3.4-13.3 4.1-20 2.1-.7-.2-1.5-.5-2.2-.8 10.6-2.1 19.4-9.7 22.7-20.1 2.9-9.2 1.1-18.9-4.8-26.5 12.8 4.3 20 17.6 16.4 30.2z" })));
};

var SvgNissan = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M62.831 22.345h-7.572c-.996 0-1.866-.833-2.319-1.54-4.021-6.521-11.702-10.597-20.071-10.597-8.37 0-16.485 4.275-20.416 11.159l-.036.072c-.072.272-.344.924-1.322.924H2.87c-1.105 0-2.011.906-2.011 2.029v13.55c0 1.123.906 2.01 2.01 2.01h6.848c.525 0 .996.308 1.413.906.09.145.254.344.435.58.308.416.706.942.978 1.358 4.166 6.776 11.974 10.996 20.397 10.996 8.424 0 15.489-3.532 19.673-9.474.109-.163.254-.38.435-.616.543-.76 1.268-1.793 1.848-2.953.362-.652.616-.778 1.123-.778h6.811a2.022 2.022 0 0 0 2.029-2.011V24.41a2.037 2.037 0 0 0-2.029-2.029m-51.302.562v-.037c.725-.127 1.25-.58 1.432-1.268 3.84-6.684 11.448-10.832 19.89-10.832 8.441 0 15.67 3.949 19.582 10.325.562.888 1.594 1.812 2.808 1.812h7.572c.326 0 .598.108.833.271l-1.884 1.757a1.235 1.235 0 0 0-.634-.18H4.538c-.236 0-.472.072-.653.198l-1.54-1.938c.163-.054.326-.09.508-.09h8.64l.037-.018ZM17 47.217c-.58-.435-1.286-1.178-1.974-2.03-.508-.615-.997-1.285-1.468-1.92-.489-.67-.923-1.304-1.268-1.83-.398-.633-.688-1.086-.742-1.213-.254-.489-.49-1.087-.073-1.648.399-.562 1.45-1.196 2.083-1.431l3.968 2.318-.182.308-3.387-1.884C16.584 45.37 24.1 50.75 32.94 50.75c8.84 0 15.615-5.29 18.35-12.554l-2.97 1.558-.09-.145s-.037-.09-.073-.145v-.018l4.094-2.355 2.608 2.083c-.833 2.12-3.17 5.743-6.358 5.362-4.203 4.656-9.057 6.902-15.56 6.902-6.504 0-12.246-2.608-16.177-6.738l-1.939-.634c.634 1.286 1.522 2.427 2.156 3.115m30.669-7.083c-2.21 6.268-9.112 8.641-14.818 8.75-5.706-.109-12.59-2.464-14.818-8.75-.073-.18-.055-.29-.018-.326 0 0 .054-.018.072-.018h29.546s.072 0 .072.018c.036.036.036.145-.036.326M61.762 25.95v9.22a.63.63 0 0 1-.634.634H4.538a.63.63 0 0 1-.635-.634v-9.22c0-.345.29-.634.634-.634h56.591c.344 0 .634.29.634.634Z" }),
        React__namespace.createElement("path", { fill: "#000", d: "M18.214 24.32h29.908c1.05 0 .616-.888.362-1.36 1.214.2 2.137.725 2.916 1.395-2.626-8.043-9.89-11.92-18.44-11.92s-15.815 4.71-18.423 12.138c.634-.49 1.884-1.196 2.807-1.359-.036.526.2 1.123.888 1.123m.073-1.612c2.536-6.576 8.26-8.804 14.582-8.804 6.322 0 13.151 2.138 15.253 8.804 0 0 .018.109.036.145 0-.018 0-.072-.036-.145.09.399.054.562-.399.562h-28.93c-.29 0-.67-.073-.488-.562M14.61 32.435l-2.41-6.033H8.577v7.953h2.21V28.05l2.554 6.304h3.496v-7.953H14.61v6.033Z" }),
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M20.985 26.402v7.953h-2.427v-7.953h2.427Z", clipRule: "evenodd" }),
        React__namespace.createElement("path", { fill: "#000", d: "m41.456 26.402-2.844 7.953h2.282l.507-1.431h3.297l-.598-1.757h-2.083l1.033-2.99 2.174 6.178h2.282l-2.808-7.953h-3.242ZM27.017 29.464h-2.372v-1.286h4.474v-1.776h-4.565c-1.196 0-2.174.58-2.174 2.283 0 .797.127 2.572 2.681 2.572h2.41v1.286h-4.873v1.812h4.945c1.16 0 2.282-.942 2.282-2.464 0-1.521-.833-2.41-2.808-2.41M54.371 32.435l-2.41-6.033H48.34v7.953h2.21V28.05l2.554 6.304h3.514v-7.953h-2.246v6.033ZM35.405 29.464h-2.373v-1.286h4.474v-1.776h-4.565c-1.195 0-2.192.58-2.192 2.283 0 .797.145 2.572 2.682 2.572h2.427v1.286h-4.873v1.812h4.945c1.16 0 2.283-.942 2.283-2.464 0-1.521-.833-2.41-2.826-2.41" })));
};

var SvgNodejsAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M13.365 24.457a.74.74 0 0 1 .37.643l-.012 9.495a.371.371 0 0 1-.184.32.362.362 0 0 1-.37 0L9.53 32.83a.75.75 0 0 1-.371-.642v-4.436c0-.265-.141-.51-.37-.641l-1.551-.893a.736.736 0 0 0-.738 0l-1.551.893a.738.738 0 0 0-.37.641v4.437c0 .263-.14.505-.37.642L.565 34.917a.35.35 0 0 1-.368 0 .365.365 0 0 1-.184-.32L0 25.101c0-.266.142-.51.37-.644l6.128-3.526a.728.728 0 0 1 .339-.097H6.9a.716.716 0 0 1 .337.098l6.128 3.525Zm29.193 5.748a.184.184 0 0 0 .093-.16v-2.43a.184.184 0 0 0-.093-.16l-2.105-1.216a.187.187 0 0 0-.187 0l-2.104 1.215a.186.186 0 0 0-.09.16v2.43c0 .067.034.128.092.16l2.105 1.214a.186.186 0 0 0 .184 0l2.105-1.213Zm.293-18.154a.371.371 0 0 1 .368-.004l3.647 2.035c.234.131.38.378.38.647v17.639a.742.742 0 0 1-.37.64l-6.13 3.542a.744.744 0 0 1-.74 0l-6.13-3.54a.74.74 0 0 1-.37-.64v-7.078c0-.264.141-.508.37-.64l6.13-3.538a.74.74 0 0 1 .74 0L42.28 22a.26.26 0 0 0 .388-.225V12.37c0-.131.07-.253.182-.32ZM64 26.91a.74.74 0 0 1-.368.64l-3.677 2.135a.372.372 0 0 1-.37.002.373.373 0 0 1-.185-.321v-1.745a.369.369 0 0 0-.185-.32l-1.92-1.107a.366.366 0 0 0-.37 0l-1.918 1.107a.367.367 0 0 0-.185.32v2.22c0 .132.071.255.187.32l6.166 3.538a.37.37 0 0 1-.003.644l-3.683 2.047a.738.738 0 0 1-.727-.004l-6.089-3.47a.743.743 0 0 1-.373-.645v-7.074a.74.74 0 0 1 .37-.641l6.128-3.537a.74.74 0 0 1 .743 0l6.09 3.536a.74.74 0 0 1 .369.64v1.715ZM31.633 51.197c-.211 0-.421-.056-.606-.162l-1.93-1.143c-.288-.16-.148-.218-.052-.25.384-.135.462-.166.872-.399.043-.024.1-.016.144.01l1.482.88c.054.03.13.03.18 0l5.779-3.336a.182.182 0 0 0 .088-.156v-6.67a.186.186 0 0 0-.09-.159l-5.777-3.333a.178.178 0 0 0-.178 0l-5.776 3.333a.184.184 0 0 0-.091.158v6.67c0 .063.034.124.09.154l1.582.914c.86.43 1.384-.076 1.384-.586V40.54c0-.094.074-.167.168-.167h.732c.091 0 .167.073.167.167v6.585c0 1.146-.625 1.804-1.712 1.804-.334 0-.597 0-1.332-.361l-1.517-.874a1.222 1.222 0 0 1-.606-1.055v-6.67c0-.433.232-.838.607-1.053l5.785-3.337a1.267 1.267 0 0 1 1.215 0l5.779 3.339c.373.215.606.62.606 1.053v6.67c0 .432-.233.836-.606 1.053l-5.779 3.338a1.215 1.215 0 0 1-.609.162v.003Zm1.785-4.596c-2.529 0-3.059-1.161-3.059-2.135 0-.092.075-.166.167-.166h.747c.082 0 .152.06.165.141.113.761.448 1.145 1.978 1.145 1.218 0 1.736-.276 1.736-.921 0-.372-.148-.649-2.04-.834-1.583-.156-2.561-.505-2.561-1.77 0-1.167.984-1.861 2.632-1.861 1.85 0 2.767.642 2.883 2.022a.168.168 0 0 1-.168.183h-.75a.166.166 0 0 1-.163-.13c-.18-.8-.618-1.056-1.805-1.056-1.33 0-1.485.462-1.485.81 0 .42.183.544 1.977.78 1.776.237 2.62.57 2.62 1.818 0 1.259-1.05 1.98-2.882 1.98l.008-.006Zm7.032-7.067h.194c.159 0 .189-.11.189-.176 0-.17-.117-.17-.182-.17h-.2l-.001.346Zm-.236-.546h.43c.147 0 .436 0 .436.33 0 .229-.146.277-.235.306.167.011.183.118.205.27l.002.014v.011c.013.101.031.263.065.319h-.265l-.005-.04c-.013-.104-.043-.339-.043-.354-.017-.07-.042-.105-.13-.105h-.219v.5h-.241v-1.251Zm-.517.622c0 .518.418.937.932.937a.942.942 0 0 0 .936-.937.934.934 0 0 0-.938-.932.93.93 0 0 0-.931.93l.001.002Zm2.047.003c0 .613-.502 1.114-1.114 1.114a1.116 1.116 0 0 1-1.114-1.114 1.113 1.113 0 1 1 2.227 0h.001ZM57.08 27.22a.14.14 0 0 1 .142 0l1.176.678c.044.026.07.072.07.123v1.358c0 .051-.026.098-.07.123l-1.176.68a.14.14 0 0 1-.142 0l-1.175-.68a.141.141 0 0 1-.073-.122V28.02a.14.14 0 0 1 .071-.123l1.177-.678Zm-32.936-6.003a.75.75 0 0 0-.758 0l-6.297 3.632a.75.75 0 0 0-.379.659v7.272c0 .27.147.522.387.658l6.289 3.632a.75.75 0 0 0 .758 0l6.293-3.632a.76.76 0 0 0 .379-.658v-7.272a.76.76 0 0 0-.38-.659l-6.292-3.632Z", clipRule: "evenodd" })));
};

var SvgNodejs = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M31.974 64c-.826 0-1.755-.103-2.477-.723l-7.845-4.645c-1.136-.722-.62-.826-.104-1.032 1.549-.413 1.859-.723 3.51-1.548.103-.104.413-.104.62.103l5.986 3.613c.104.103.413.103.723 0L55.82 46.245c.104-.103.413-.413.413-.62V18.478c0-.31-.103-.413-.413-.619L32.284 4.542c-.103-.103-.413-.103-.723 0L8.232 18.064c-.103.104-.413.413-.413.62v26.942c0 .31.104.413.413.62l6.4 3.612c3.51 1.755 5.678-.31 5.678-2.477V20.955c0-.413.31-.723.722-.723h2.994c.413 0 .722.31.722.723v26.632c0 4.645-2.477 7.226-6.813 7.226-1.445 0-2.27 0-5.367-1.445l-6.09-3.407C5.031 49.136 4 47.484 4 45.626V18.477c0-1.754.826-3.303 2.477-4.335L29.703.619c1.445-.825 3.51-.825 4.955 0L58.09 14.245c1.445.826 2.478 2.478 2.478 4.336v26.942c0 1.754-.826 3.303-2.478 4.335l-23.329 13.42c-1.032.619-1.858.722-2.787.722Zm18.89-26.632c0-5.058-3.303-6.4-10.632-7.433-7.329-1.032-7.948-1.445-7.948-3.2 0-1.445.62-3.303 5.987-3.303 4.748 0 6.503 1.033 7.226 4.336.103.31.31.413.722.413h2.994c.103 0 .413-.104.413-.104s.103-.31.103-.413c-.413-5.677-4.232-8.154-11.561-8.154-6.71 0-10.736 2.787-10.736 7.535 0 5.058 4.026 6.503 10.323 7.123 7.639.722 8.258 1.858 8.258 3.303 0 2.58-2.065 3.613-6.916 3.613-6.194 0-7.536-1.549-7.949-4.645-.103-.31-.31-.62-.722-.62h-2.787a.705.705 0 0 0-.723.723c0 3.922 2.065 8.67 12.284 8.67 7.432.207 11.664-2.683 11.664-7.844Z" })));
};

var SvgNotepad = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M51.4 4.2c-1.6-1.6-3.6-2.4-5.8-2.4h-24c-3.4 0-6.3 2.8-6.3 6.3V12h-2.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h2.8v13.3h-2.8c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h2.8v13.3h-2.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h2.8V56c0 3.4 2.8 6.3 6.3 6.3h24c4.5 0 8.2-3.7 8.3-8.2v-44c-.1-2.3-.9-4.4-2.5-5.9zM49.3 54c0 2.1-1.7 3.7-3.8 3.7h-24c-1 0-1.8-.8-1.8-1.8V52h5.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-5.4V34.3h5.4c1.2 0 2.3-1 2.3-2.3 0-1.2-1-2.3-2.3-2.3h-5.4V16.4h5.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-5.4V8c0-1 .8-1.8 1.8-1.8h24c1 0 1.9.4 2.7 1.1.7.7 1.1 1.7 1.1 2.7v44z" })));
};

var SvgNotion = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M11.993 11.39c1.98 1.608 2.723 1.486 6.442 1.238l35.059-2.105c.743 0 .125-.742-.123-.866l-5.823-4.209c-1.115-.866-2.602-1.858-5.45-1.61L8.15 6.314c-1.238.123-1.485.742-.992 1.238l4.835 3.838Zm2.105 8.17v36.888c0 1.982.99 2.724 3.22 2.601l38.53-2.23c2.23-.122 2.479-1.486 2.479-3.096v-36.64c0-1.608-.618-2.475-1.984-2.351l-40.264 2.35c-1.486.126-1.981.869-1.981 2.478Zm38.036 1.979c.247 1.115 0 2.229-1.117 2.354l-1.857.37v27.233c-1.611.866-3.098 1.362-4.336 1.362-1.983 0-2.48-.62-3.965-2.475L28.715 31.319v18.445l3.843.867s0 2.227-3.1 2.227l-8.546.495c-.249-.495 0-1.732.866-1.98l2.23-.618V26.368l-3.096-.248c-.248-1.115.37-2.723 2.106-2.848l9.168-.618 12.638 19.311V24.883l-3.222-.37c-.248-1.363.742-2.353 1.981-2.476l8.55-.497ZM5.3 2.972l35.31-2.6C44.948 0 46.064.249 48.789 2.229L60.06 10.15c1.86 1.362 2.48 1.733 2.48 3.218v43.45c0 2.724-.993 4.334-4.46 4.58l-41.007 2.477c-2.604.124-3.843-.247-5.206-1.981l-8.3-10.77c-1.488-1.982-2.106-3.465-2.106-5.2V7.303c0-2.227.992-4.084 3.84-4.33Z", clipRule: "evenodd" })));
};

var SvgNpm = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 33.8h-3.5v-6.9H32v6.9zM63 20v20.6H32V44H18.2v-3.5H1V20h62zm-44.8 3.3H4.4v13.8h6.9V26.9h3.5v10.4h3.5l-.1-14zm17.3 0H21.7v17.2h6.9V37h6.9V23.3zm24 0H38.9v13.8h6.9V26.9h3.5v10.4h3.5V26.9h3.5v10.4h3.5v-14h-.3z" })));
};

var SvgOculus = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M11.13 34.187a1.516 1.516 0 0 1-.601.218c-.22.032-.43.025-.65.025H5.425c-.219 0-.43.007-.649-.025a1.541 1.541 0 0 1-.602-.218 1.24 1.24 0 0 1-.58-1.032c0-.416.218-.8.58-1.031.185-.116.382-.186.602-.218.219-.032.43-.026.65-.026H9.88c.218 0 .43-.006.649.026.218.032.416.102.601.218.363.236.581.621.581 1.031 0 .417-.22.801-.582 1.032Zm1.79-4.006a4.25 4.25 0 0 0-1.618-.743 5.64 5.64 0 0 0-1.032-.122c-.26-.006-.52-.006-.78-.006H5.815c-.26 0-.519 0-.779.006a5.64 5.64 0 0 0-1.032.122 4.248 4.248 0 0 0-1.62.743C1.42 30.906.859 32 .859 33.155c0 1.16.56 2.25 1.524 2.974.479.358 1.025.61 1.619.743a5.64 5.64 0 0 0 1.032.122c.26.006.52.006.78.006H9.49c.26 0 .52 0 .779-.006a5.64 5.64 0 0 0 1.032-.122 4.238 4.238 0 0 0 1.619-.743c.964-.725 1.523-1.82 1.524-2.975.001-1.16-.56-2.248-1.523-2.973ZM59.278 34.33l-1.173 1.125c.848.9 2.092 1.352 3.49 1.352 1.852 0 3.264-.862 3.264-2.267 0-1.312-.988-2.027-2.557-2.173l-.877-.08c-.72-.066-1.186-.29-1.186-.688 0-.424.48-.663 1.3-.663.89 0 1.554.345 1.992.848l1.159-1.112c-.72-.81-1.823-1.194-3.067-1.194-1.936 0-3.165.901-3.165 2.227 0 1.206.933 2 2.6 2.147l.89.08c.721.066 1.102.305 1.102.702 0 .49-.594.716-1.356.716-.975-.001-1.822-.372-2.416-1.02Zm-4.409 2.358h1.823v-7.104H54.8v4.082c0 .928-.706 1.537-1.625 1.537-.904 0-1.511-.636-1.511-1.537v-4.082h-1.894v4.36c0 1.737 1.384 2.85 2.967 2.85.89 0 1.654-.385 2.134-.875v.769ZM47.663 27h-1.894v9.688h1.894V27Zm-5.892 9.688h1.823v-7.104H41.7v4.082c0 .928-.706 1.537-1.625 1.537-.904 0-1.512-.636-1.512-1.537v-4.082H36.67v4.36c0 1.737 1.385 2.85 2.968 2.85.89 0 1.653-.385 2.134-.875v.769Zm-7.687-2.2c-.367.397-.904.675-1.611.675-1.258 0-2.063-.86-2.063-2.014 0-1.18.805-2.041 2.063-2.041.706 0 1.244.278 1.611.702l1.3-1.219c-.678-.689-1.696-1.126-2.896-1.126-2.29 0-3.971 1.576-3.971 3.67s1.68 3.67 3.97 3.67c1.187 0 2.22-.437 2.897-1.112l-1.3-1.205Zm-10.74.675c-1.257 0-2.077-.86-2.077-2.014 0-1.18.82-2.041 2.077-2.041 1.258 0 2.077.86 2.077 2.04.001 1.154-.819 2.015-2.077 2.015Zm0 1.644c2.29 0 3.971-1.577 3.971-3.671s-1.68-3.67-3.97-3.67-3.97 1.576-3.97 3.67 1.68 3.67 3.97 3.67Z" })));
};

var SvgOffer = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m59.8 27-2.4-1.9c-.6-.5-.8-1.2-.7-1.9l.8-2.9c.5-1.8.1-3.7-1-5.3-1.2-1.6-3-2.6-5-2.7l-3.1-.2c-.8 0-1.6-.5-1.8-1.2l-1.1-2.7c-.7-1.7-2.2-3.1-4-3.7-1.9-.6-3.9-.4-5.6.6l-2.6 1.6c-.7.4-1.6.4-2.4 0l-2.6-1.6c-1.7-1-3.7-1.3-5.6-.6-1.8.6-3.3 1.9-4 3.7L17.4 11c-.3.7-1 1.2-1.8 1.2l-3.1.2c-2 .1-3.9 1.1-5 2.7-1.1 1.5-1.5 3.5-1 5.3l.8 2.9c.2.7-.1 1.4-.7 1.9L4.2 27c-1.6 1.2-2.4 3-2.4 5 0 1.9.9 3.7 2.4 5l2.4 1.9c.6.5.9 1.2.7 1.9l-.8 2.9c-.5 1.8-.1 3.7 1 5.3 1.2 1.6 3 2.6 5 2.7l3.1.2c.8 0 1.6.5 1.8 1.2l1.1 2.7c.7 1.7 2.2 3.1 4 3.7 1.9.6 3.9.4 5.6-.6l2.6-1.6c.7-.4 1.6-.4 2.4 0l2.6 1.6c1.1.6 2.3 1 3.5 1 .7 0 1.4-.1 2.1-.3 1.8-.6 3.3-1.9 4-3.7l1.1-2.7c.3-.7 1-1.2 1.8-1.2l3.1-.2c2-.1 3.9-1.1 5-2.7 1.1-1.5 1.5-3.5 1-5.3l-.8-2.9c-.2-.7.1-1.4.7-1.9l2.4-1.9c1.6-1.2 2.4-3 2.4-5 .3-2-.6-3.8-2.2-5.1zM57 33.4l-2.4 1.9c-2 1.6-2.9 4.2-2.2 6.6l.8 2.9c.2.7-.1 1.2-.3 1.5-.4.5-1 .8-1.6.9l-3.1.2c-2.5.1-4.8 1.7-5.7 4L41.3 54c-.3.7-.9 1-1.3 1.1-.6.2-1.3.1-1.9-.2l-2.6-1.6c-1.1-.6-2.3-1-3.5-1s-2.4.3-3.5 1l-2.6 1.6c-.6.3-1.3.4-1.9.2-.3-.1-1-.4-1.3-1.1l-1.1-2.7c-.9-2.3-3.2-3.9-5.7-4l-3.1-.2c-.7 0-1.3-.4-1.6-.9-.2-.3-.5-.8-.3-1.5l.8-2.9c.7-2.4-.2-5-2.2-6.6L7 33.4c-.5-.4-.7-.9-.7-1.4 0-.6.3-1.1.7-1.4l2.4-1.9c2-1.6 2.9-4.2 2.2-6.6l-.8-2.9c-.2-.7.1-1.2.3-1.5.4-.5 1-.8 1.6-.9l3.1-.2c2.5-.1 4.8-1.7 5.7-4l1.1-2.7c.4-.6 1-.9 1.4-1 .6-.2 1.3-.1 1.9.2l2.6 1.6c2.1 1.3 4.9 1.3 7 0l2.6-1.6c.6-.3 1.3-.4 1.9-.2.3.1 1 .4 1.3 1.1l1.1 2.7c.9 2.3 3.2 3.9 5.7 4l3.1.2c.7 0 1.3.4 1.6.9.2.3.5.8.3 1.5l-.8 2.9c-.7 2.4.2 5 2.2 6.6l2.4 1.9c.5.4.7.9.7 1.4.2.5-.1 1-.6 1.3z" }),
        React__namespace.createElement("path", { d: "M41.2 22.8c-.9-.9-2.3-.9-3.2 0L22.8 38c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7s1.2-.2 1.6-.7L41.2 26c.9-.9.9-2.4 0-3.2zM29.2 29.1c2.4-2.4 2.4-6.2 0-8.6-1.1-1.1-2.7-1.8-4.3-1.8s-3.1.6-4.3 1.8c-2.4 2.4-2.4 6.2 0 8.6 1.1 1.1 2.7 1.8 4.3 1.8s3.1-.6 4.3-1.8zm-5.4-5.3c.3-.3.7-.5 1.1-.5s.8.2 1.1.5c.6.6.6 1.6 0 2.2-.6.6-1.6.6-2.2 0-.6-.6-.6-1.6 0-2.2zM34.5 34.5c-1.1 1.1-1.8 2.7-1.8 4.3 0 1.6.6 3.1 1.8 4.3 1.2 1.2 2.7 1.8 4.3 1.8 1.6 0 3.1-.6 4.3-1.8 1.1-1.1 1.8-2.7 1.8-4.3 0-1.6-.6-3.1-1.8-4.3-2.4-2.4-6.2-2.4-8.6 0zm5.4 5.4c-.6.6-1.6.6-2.2 0-.3-.3-.5-.7-.5-1.1s.2-.8.5-1.1c.3-.3.7-.5 1.1-.5.4 0 .8.2 1.1.5.3.3.5.7.5 1.1s-.2.8-.5 1.1z" })));
};

var SvgOpera = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M40.2 5.1c-21.3 0-31.6 28-18.5 44.4 4.5 5.8 11 9.4 18.5 9.4 4.5 0 8.9-1.4 12.4-3.8C47.2 59.9 39.9 63 32 63h-1.4C14.1 62.3 1 48.6 1 32 1 14.8 14.8 1 32 1h.1C40 1 47.2 4 52.7 8.9c-3.6-2.4-7.9-3.8-12.5-3.8zm12.7 49.7c-5.1 3.1-11.3 3-16.5-.7 7-2.7 12.3-11.4 12.3-22.1 0-10.6-5.1-19.4-12.3-22.1 5.2-3.7 11.4-3.8 16.6-.6 13.4 12.3 13.3 33.3-.1 45.5z" })));
};

var SvgPackage = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m62 21.3-4.5-14c-.8-2.6-3.3-4.4-6-4.4H13.1c-2.7 0-5.1 1.7-6 4.2l-5 14.1c-.2.6-.3 1.2-.3 1.9v30.3c0 4.3 3.5 7.7 7.7 7.7h45.1c4.3 0 7.7-3.5 7.7-7.7V23c0-.5-.1-1.1-.3-1.7zM53.2 8.7l3.7 11.6H34.3V7.4h17.2c.7 0 1.5.5 1.7 1.3zm-41.9-.1c.3-.7 1-1.2 1.7-1.2h16.7v12.9H7.2l4.1-11.7zm43.2 48h-45c-1.8 0-3.2-1.4-3.2-3.2V24.8h51.5v28.6c0 1.8-1.5 3.2-3.3 3.2z" })));
};

var SvgPaddle = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M6.484 23.342v-2.264A10.46 10.46 0 0 0 16.94 10.62h2.093A10.46 10.46 0 0 0 29.49 21.093v2.264a10.46 10.46 0 0 0-10.457 10.457H16.94A10.46 10.46 0 0 0 6.484 23.342ZM16.94 6.694h17.986c8.784 0 15.06 6.273 15.06 15.478 0 9.204-6.273 15.475-15.06 15.475H16.94V64h7.529V44.341h10.457c12.633 0 22.59-9.956 22.59-22.17C57.516 9.96 47.56 0 34.926 0H16.94v6.694Z" })));
};

var SvgPageBreak = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M46.8 1.8H17.2c-2.9 0-5.3 2.4-5.3 5.3v14.4c0 2.9 2.4 5.3 5.3 5.3h29.7c2.9 0 5.3-2.4 5.3-5.3V7c-.1-2.9-2.5-5.2-5.4-5.2zm.8 19.6c0 .4-.3.8-.8.8H17.2c-.4 0-.8-.3-.8-.8V7c0-.4.3-.8.8-.8h29.7c.4 0 .8.3.8.8v14.4zM46.8 37.4H17.2c-2.9 0-5.3 2.4-5.3 5.3V57c0 2.9 2.4 5.3 5.3 5.3h29.7c2.9 0 5.3-2.4 5.3-5.3V42.6c-.1-2.9-2.5-5.2-5.4-5.2zm.8 19.6c0 .4-.3.8-.8.8H17.2c-.4 0-.8-.3-.8-.8V42.6c0-.4.3-.8.8-.8h29.7c.4 0 .8.3.8.8V57zM21.8 34.3c1.2 0 2.3-1 2.3-2.3 0-1.2-1-2.3-2.3-2.3h-5.1c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h5.1zM34.5 34.3c1.2 0 2.3-1 2.3-2.3 0-1.2-1-2.3-2.3-2.3h-5.1c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h5.1zM47.3 34.3c1.2 0 2.3-1 2.3-2.3 0-1.2-1-2.3-2.3-2.3h-5.1c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h5.1z" })));
};

var SvgPagination = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M61.4 30 51 19.5c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l9.3 9.3-9.3 9.3c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7L61.4 34c1.1-1.1 1.1-2.9 0-4zM16.2 19.5c-.9-.9-2.3-.9-3.2 0L2.6 30c-1.1 1.1-1.1 2.9 0 4.1L13 44.5c.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.7.9-.9.9-2.3 0-3.2L6.9 32l9.3-9.3c.9-.9.9-2.4 0-3.2zM21.9 29.3c-1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7-1.2-2.7-2.7-2.7z" }),
        React__namespace.createElement("circle", { cx: 32.3, cy: 32, r: 2.7 }),
        React__namespace.createElement("path", { d: "M42.9 29.3c-1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7c1.5 0 2.7-1.2 2.7-2.7s-1.2-2.7-2.7-2.7z" })));
};

var SvgPaintBucketAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M52.4 22.2c0-11.3-9.2-20.4-20.4-20.4-11.3 0-20.4 9.2-20.4 20.4v2.6l1.6 31.5c.2 3.3 2.9 5.9 6.2 5.9h25.2c3.3 0 6.1-2.6 6.2-5.9l1.6-31.5v-2.6zM16.2 27h2.9v3.4c0 2.7 2.2 4.9 4.9 4.9h1.7v4.2c0 3.5 2.8 6.3 6.3 6.3 2.8 0 5.1-1.9 5.9-4.4H40c2.7 0 4.9-2.2 4.9-4.9V27h2.9l-1.1 21.9H17.3L16.2 27zm19.6 5.3c-1.2 0-2.2 1-2.2 2.2v5.2c0 .9-.7 1.6-1.6 1.6-1 0-1.8-.8-1.8-1.8v-4.7c0-2.2-1.8-4-4-4H24c-.2 0-.4-.2-.4-.4V27h16.8v9.5c0 .2-.2.4-.4.4h-1.9v-2.4c0-1.2-1-2.2-2.3-2.2zM32 6.2c8.8 0 15.9 7.1 15.9 15.9v.3H16.1v-.3c0-8.7 7.1-15.9 15.9-15.9zm12.6 51.6H19.4c-.9 0-1.7-.7-1.7-1.7l-.1-2.7h29l-.1 2.7c-.2.9-.9 1.7-1.9 1.7z" })));
};

var SvgPaintRoller = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M54.9 9.4h-.3V8c0-3.4-2.8-6.2-6.2-6.2H20.7c-3.4 0-6.2 2.8-6.2 6.2v1.4H11c-2.3 0-4.2 1.9-4.2 4.2v14c0 2.3 1.9 4.2 4.2 4.2h26.4V35c-2.9.5-5.1 3.1-5.1 6.1V56c0 3.4 2.8 6.2 6.2 6.2h2.2c3.4 0 6.2-2.8 6.2-6.2V41.1c0-3-2.2-5.6-5.1-6.1v-3.6c0-2.3-1.9-4.2-4.2-4.2H11.3V13.9h3.1v1.4c0 3.4 2.8 6.2 6.2 6.2h27.6c3.4 0 6.2-2.8 6.2-6.2v-1.4h.3c1.2 0 2.2-1 2.2-2.2s-.7-2.3-2-2.3zM42.5 41.1V56c0 1-.8 1.8-1.8 1.8h-2.2c-1 0-1.8-.8-1.8-1.8V41.1c0-1 .8-1.8 1.8-1.8h2.2c1 0 1.8.8 1.8 1.8zm7.6-25.8c0 1-.8 1.8-1.8 1.8H20.7c-1 0-1.8-.8-1.8-1.8V8c0-1 .8-1.8 1.8-1.8h27.6c1 0 1.8.8 1.8 1.8v7.3z" })));
};

var SvgPallet = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m55.9 43.9-.3-.2c-.8-.5-1.7-.9-3.8-1.5h-.1c-.7-.1-1.5-.4-1.8-.6l-.1-.1c-.4-.4-.7-1.1-.7-1.9 0-.7.3-1.4.7-1.9l3.9-3.9c6.9-6.9 6.9-17.8 0-24.8-4.6-4.7-11-7.2-18.1-7.2-7.9 0-15.9 3.4-22 9.4C8 16.9 5 24.3 5 32.4S8.1 48 13.8 53.5c5.7 5.7 13.2 8.8 21.2 8.8 7.9 0 15.4-3.2 21.1-8.9 1.2-1.2 1.9-3 1.9-4.7 0-1.9-.8-3.7-2.1-4.8zm-3 6.3c-4.8 4.9-11.2 7.6-17.9 7.6-6.9 0-13.1-2.6-18-7.5-4.8-4.7-7.5-11-7.5-17.9 0-6.9 2.6-13.1 7.4-18C22.2 9.2 29 6.2 35.8 6.2c5.9 0 11.1 2 14.9 5.9 5.2 5.3 5.2 13.3 0 18.5l-4 4c-1.2 1.3-1.9 3.1-1.9 5 0 2 .7 3.7 1.9 5 1.2 1.3 3.6 1.9 4.2 2 1.4.3 1.9.6 2.3.8.2.3.4.8.4 1.3-.1.5-.4 1.2-.7 1.5z" }),
        React__namespace.createElement("path", { d: "M36.8 36.7c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zM47.7 27.3c0-3.3-2.7-6.1-6.1-6.1s-6.1 2.7-6.1 6.1c0 3.3 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1zm-6.1 1.6c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6 1.6.7 1.6 1.6-.7 1.6-1.6 1.6zM37.3 16.7c0-4-3.3-7.3-7.3-7.3s-7.3 3.3-7.3 7.3S26 24 30 24s7.3-3.2 7.3-7.3zM30 19.6c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8s2.8 1.3 2.8 2.8c0 1.5-1.2 2.8-2.8 2.8z" })));
};

var SvgPaperclip = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32.8 62.3h-.5c-4.6 0-9.6-1.9-12.7-4.8-3.3-3.1-5.1-7.3-5.1-11.6v-31c0-4.3 2.1-8.2 5.8-10.7 3.6-2.5 8.1-3.1 12.3-1.6l.2.1c.5.2 1.1.3 1.7.7 4.6 2.4 7.4 6.7 7.4 11.6v26.5c0 2.7-.9 5.2-2.6 7.2-.3.4-.5.6-.7.7-1.9 1.7-4.1 2.6-6.6 2.6-2.8 0-5.5-1.3-7.3-3.4-1.7-2-2.7-4.6-2.7-7.3V19.2c0-1.2 1-2.3 2.3-2.3s2.3 1 2.3 2.3v22.2c0 1.6.6 3.2 1.6 4.4.9 1.1 2.4 1.8 3.8 1.8 1.3 0 2.4-.5 3.4-1.4l.4-.4c1-1.2 1.6-2.7 1.6-4.3V14.9c0-3.2-1.8-6-5-7.6l-.1-.1c-.2-.1-.4-.2-.8-.3l-.3-.1c-2.9-1-5.9-.6-8.4 1.1C20.3 9.5 19 12 19 14.8v31c0 3 1.4 6.1 3.7 8.3 2.3 2.1 6.2 3.6 9.7 3.6 3.4.1 6.6-1.2 9.1-3.5 2.4-2.3 3.7-5.3 3.6-8.4V21.7c0-1.2 1-2.3 2.3-2.3s2.3 1 2.3 2.3v24.1c.1 4.3-1.7 8.5-5 11.7-3.3 3-7.6 4.8-11.9 4.8z" })));
};

var SvgPatreon = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M63 24.7C63 37 53 47 40.7 47S18.4 37 18.4 24.7s10-22.3 22.3-22.3C53 2.3 63 12.3 63 24.7zm-62 37h11V2.3H1v59.4z" })));
};

var SvgPause = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M20.5 58H10c-3.4 0-6.3-2.8-6.3-6.3V12.3C3.8 8.8 6.6 6 10 6h10.5c3.4 0 6.3 2.8 6.3 6.3v39.5c-.1 3.4-2.9 6.2-6.3 6.2zM10 10.5c-1 0-1.8.8-1.8 1.8v39.5c0 1 .8 1.8 1.8 1.8h10.5c1 0 1.8-.8 1.8-1.8V12.3c0-1-.8-1.8-1.8-1.8H10zM54 58H43.5c-3.4 0-6.3-2.8-6.3-6.3V12.3C37.2 8.9 40 6 43.5 6H54c3.4 0 6.3 2.8 6.3 6.3v39.5c0 3.4-2.9 6.2-6.3 6.2zM43.5 10.5c-1 0-1.8.8-1.8 1.8v39.5c0 1 .8 1.8 1.8 1.8H54c1 0 1.8-.8 1.8-1.8V12.3c0-1-.8-1.8-1.8-1.8H43.5z" })));
};

var SvgPaypalOriginal = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m55.7 18.9-.1-.1c-2.7 12.8-11.2 19.7-25 19.7H25l-3.2 20.7h-3l-.4 2.2c-.1.8.6 1.7 1.4 1.7h10c1.1 0 2.2-.8 2.4-2l.1-.4 1.8-12 .1-.7c.1-1.1 1.1-2 2.4-2h1.5c9.7 0 17.3-3.9 19.5-15.3 1.1-5 .5-8.9-1.9-11.8zM25 38.3z" }),
        React__namespace.createElement("path", { d: "m22.3 37.3-.1.6c.1-1.4 1.4-2.4 2.7-2.4h5.6c11.1 0 19.7-4.5 22.4-17.6.1-.4.1-.7.1-1.1.7-4.8 0-8.2-2.7-11.1-.7-.8-1.7-1.5-2.7-2.2-1.4-.8-2.8-1.4-4.5-1.7-1.1-.3-2.5-.4-3.9-.6-1.2-.1-2.3-.2-3.6-.2H16.5c-1.4 0-2.5 1-2.7 2.2l-8 50.9c-.1 1.1.6 2 1.7 2h11.8l3-18.8z" })));
};

var SvgPaypal = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M51.9 11.9c-1-6.1-5.8-10.1-12.2-10.1H19.4c-1 0-1.9.7-2.2 1.7L5.6 50.8c-.2.7 0 1.4.4 1.9s1.1.9 1.8.9h5.6L12 59.5c-.2.7 0 1.4.4 1.9s1.1.9 1.8.9h14.4c1 0 2-.7 2.2-1.7L35.1 42h4.5c4.1 0 8.2-1.6 11.6-4.5 3.4-2.8 5.8-6.7 6.8-10.8 1.5-6.4-1-12.3-6.1-14.8zM21.2 6.3h18.6c4.4 0 7.5 2.9 7.8 7.2.1 1.4 0 2.5-.3 3.5-.7 3-2.6 6.1-5.3 8.3-2.6 2.2-5.7 3.4-8.7 3.4h-6.2c-1 0-1.9.7-2.2 1.7L20.4 49h-9.7L21.2 6.3zm32.5 19.4c-.7 3.1-2.6 6.1-5.3 8.3-2.6 2.2-5.7 3.4-8.7 3.4h-6.3c-1 0-2 .7-2.2 1.7l-4.3 18.6H17l1-4.2h4.1c1 0 1.9-.7 2.2-1.7l4.5-18.6h4.4c4.1 0 8.2-1.6 11.7-4.5 3.4-2.9 5.8-6.7 6.8-10.7.1-.3.1-.5.2-.8 1.8 2.1 2.6 5.1 1.8 8.5z" })));
};

var SvgPencilAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M62.2 11.9c0-.8-.3-1.6-.9-2.2-1.2-1.2-2.4-2.4-3.5-3.6-1.1-1.1-2.1-2.2-3.2-3.2-.5-.6-1.1-1-1.9-1.1-.9-.1-1.7.1-2.4.7l-6.8 6.8H8.1c-3.4 0-6.3 2.8-6.3 6.3V56c0 3.4 2.8 6.3 6.3 6.3h40.5c3.4 0 6.3-2.8 6.3-6.3V20.5l6.5-6.5c.5-.6.8-1.3.8-2.1zM32.8 36c-.1.1-.1.1-.2.1l-7.2 2.4 2.4-7.2c0-.1.1-.1.1-.2l18-18 5 4.9-18.1 18zm17.5 20c0 1-.8 1.8-1.8 1.8H8.1c-1 0-1.8-.8-1.8-1.8V15.5c0-1 .8-1.8 1.8-1.8h30.8L24.7 28c-.5.5-1 1.2-1.2 2l-3.7 11.2c-.3.8-.1 1.5.3 2.2.3.4.9 1 2 1h.4L34 40.6c.7-.2 1.4-.7 1.9-1.2L50.3 25v31zM54 14.9 49 10l3.1-3.1c.8.8 4.1 4.1 4.9 5l-3 3z" })));
};

var SvgPencil = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M61.2 13c-3.2-3.4-6.6-6.8-10-10.1-.7-.7-1.5-1.1-2.4-1.1-.9 0-1.8.3-2.4 1L8.7 40.2c-.6.6-1 1.3-1.3 2L1.9 59c-.3.8-.1 1.6.3 2.2.5.6 1.2 1 2.1 1h.4l17.1-5.7c.8-.3 1.5-.7 2-1.3l37.5-37.4c.6-.6 1-1.5 1-2.4s-.4-1.7-1.1-2.4zM20.6 52.1c-.1.1-.2.1-.3.2L7.4 56.6l4.3-12.9c0-.1.1-.2.2-.3L39.4 16l8.7 8.7-27.5 27.4zm30.6-30.6-8.7-8.7 6.1-6.1c2.9 2.8 5.8 5.8 8.6 8.7l-6 6.1z" })));
};

var SvgPhoneSet = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m60.2 55.2-1.8-18.1c-.3-3.3-3.1-5.8-6.4-5.8H12c-3.3 0-6 2.5-6.4 5.8L3.8 55.2c-.2 1.8.4 3.6 1.6 4.9 1.2 1.3 2.9 2.1 4.7 2.1h43.6c1.8 0 3.5-.8 4.7-2.1 1.4-1.3 1.9-3.1 1.8-4.9zm-5 1.9c-.4.4-.9.6-1.4.6H10.2c-.5 0-1-.2-1.4-.6-.4-.4-.5-.9-.5-1.5l1.8-18.1c.1-1 .9-1.7 1.9-1.7h40c1 0 1.8.7 1.9 1.7l1.8 18.1c0 .6-.1 1.1-.5 1.5z" }),
        React__namespace.createElement("path", { d: "M32 39.3c-4.1 0-7.5 3.4-7.5 7.5 0 4.2 3.4 7.5 7.5 7.5 4.2 0 7.5-3.4 7.5-7.5s-3.3-7.5-7.5-7.5zm0 10.5c-1.7 0-3-1.4-3-3 0-1.7 1.4-3 3-3 1.7 0 3 1.4 3 3 0 1.7-1.3 3-3 3zM6.1 20.6c.2 4.4 4 6.7 6.6 6.7h7.1c3.2-.2 6.4-2.3 6.4-6.7v-1.9h13.2v1.9c0 4.4 3.2 6.5 6.4 6.7h7.1c2.7 0 6.4-2.3 6.6-6.7V16.2c-.3-2.9-1.3-5.3-3.1-7.2l-.1-.1c-2.6-2.4-5.6-3.7-7.9-4.5-6.8-2.6-15.3-2.6-15.7-2.6-6 .1-9.8.6-15.6 2.6-2.4.9-5.4 2.2-8 4.5L9 9c-1.8 1.9-2.8 4.3-3.1 7.2v.3c.1.2.2 3.7.2 4.1zm6.2-8.4c2-1.8 4.4-2.8 6.4-3.6 5.2-1.9 8.5-2.2 14.1-2.4.5 0 8.1.1 14.1 2.4 2.1.8 4.5 1.8 6.4 3.6 1 1.1 1.6 2.6 1.8 4.3v3.9c-.1 2.1-2.1 2.4-2.1 2.4h-6.9c-1-.1-2.1-.5-2.1-2.2v-4.1c0-1-.6-1.9-1.6-2.1-.7-.4-18.4-.4-19.1-.1-.9.3-1.6 1.2-1.6 2.1v4.2c0 1.7-1.1 2.1-2.1 2.2h-6.9s-2-.3-2.1-2.3v-3.9c.1-1.9.7-3.3 1.7-4.4z" })));
};

var SvgPhone = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M48.6 60.9c-8.1 0-19.6-5.8-30.2-15.8C4 31.3-2.1 15.9 4.3 9.1c.3-.3.7-.6 1.1-.8l8.1-4.6c2.1-1.2 4.7-.6 6.1 1.4l5.9 8.4c.7 1 1 2.2.7 3.4-.2 1.1-.9 2.1-1.9 2.8L20.8 22c2.7 3.9 10 13.6 21.6 20.5.1.1.2 0 .2 0l2.5-3.4c1.4-1.9 4.1-2.4 6.2-1.1l8.8 5.6c2.1 1.3 2.7 4 1.4 6.1l-4.8 7.7c-.3.4-.6.8-.9 1.1-1.8 1.6-4.3 2.4-7.2 2.4zM15.8 7.6s-.1 0 0 0l-8.2 4.6c-3.8 4.1.9 17.2 14 29.6 13.3 12.6 27 17.1 31.4 13.3l4.8-7.7-8.8-5.6h-.2l-2.5 3.4c-1.4 1.9-4.1 2.4-6.1 1.2-12.5-7.5-20.3-17.9-23.1-22-.7-1-.9-2.2-.7-3.3.2-1.2.9-2.2 1.9-2.8l3.5-2.3L16 7.7c-.1 0-.2-.1-.2-.1z" })));
};

var SvgPhp = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 17.4c16.6 0 29.3 6.9 29.3 14.7S48.6 46.9 32 46.9s-29.3-7-29.3-14.8S15.4 17.4 32 17.4m0-1.7C14.8 15.7 1 23 1 32s13.8 16.2 31 16.2S63 41 63 32 49.2 15.7 32 15.7zm-9.9 15.1c-.7 3.9-3.5 3.5-6.8 3.5l1.4-6.9c3.7 0 6.1-.4 5.4 3.4zM10.4 41.2H14l.8-4.4c3.9 0 6.5.3 8.7-1.8 2.5-2.4 3.2-6.5 1.4-8.5-1-1.1-2.4-1.7-4.5-1.7h-6.9l-3.1 16.4zm18.1-20.7H32l-.8 4.4c3 0 5.9-.1 7.3 1.1 1.4 1.4.7 3-.7 11h-3.7c1.4-7.6 1.7-8.3 1.3-8.9-.4-.6-2-.6-4.8-.6L28.8 37h-3.5l3.2-16.5zm21.4 10.3c-.7 3.9-3.5 3.5-6.8 3.5l1.4-6.9c3.7 0 6.1-.4 5.4 3.4zM38.2 41.2h3.5l.8-4.2c4.2 0 6.5.3 8.7-1.8 2.5-2.4 3.2-6.5 1.4-8.5-1-1.1-2.4-1.7-4.5-1.7h-6.9l-3 16.2z" })));
};

var SvgPieChart = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M37.4 2.2C21-.7 5.2 10.2 2.3 26.6c-1.5 7.9.3 16 4.9 22.6 4.6 6.7 11.5 11.1 19.4 12.6 1.8.3 3.6.5 5.4.5 14.3 0 27.1-10.3 29.8-24.9 2.9-16.4-8-32.2-24.4-35.2zm19.9 34.4c-.1.8-.3 1.6-.5 2.3l-22.6-8.5v-24c.8.1 1.6.2 2.3.3 14 2.5 23.3 15.9 20.8 29.9zM29.7 6.4v23.4H6.4l.3-2.4c2.1-11.7 11.8-20.1 23-21zm-2.3 50.9c-6.8-1.2-12.6-5-16.5-10.7-2.6-3.7-4.1-8-4.5-12.4h25.2l23.6 8.9C50.3 53.3 39 59.5 27.4 57.3z" })));
};

var SvgPilcrow = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M49.8 1.8H28.3C19.3 1.8 12 9.1 12 18c0 8.6 6.6 15.6 15 16.2V60c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V6.3H40V60c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V6.3h5.3C51 6.3 52 5.2 52 4s-1-2.2-2.2-2.2zM16.5 18c0-6 4.6-11.1 10.5-11.7v23.4c-5.9-.6-10.5-5.6-10.5-11.7z" })));
};

var SvgPin = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M47 16.7c0-8.3-6.7-15-15-15s-15 6.7-15 15c0 7.5 5.5 13.7 12.7 14.8V60c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3V31.5C41.4 30.4 47 24.2 47 16.7zM32 27.2c-5.8 0-10.5-4.7-10.5-10.5S26.2 6.2 32 6.2s10.5 4.7 10.5 10.5S37.8 27.2 32 27.2z" }),
        React__namespace.createElement("path", { d: "M34.6 8.5c-3.1 0-5.7 2.5-5.7 5.7s2.5 5.7 5.7 5.7 5.7-2.5 5.7-5.7-2.6-5.7-5.7-5.7zm0 6.8c-.6 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.6 1.2-1.2 1.2z" })));
};

var SvgPinterest = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M1.8 32.1c.2 9.3 4.5 18.6 11.8 24.2 2.3 1.7 4.8 2.7 7.4 3.8-1.1-7.1 1.6-14.2 3.1-21.2.2-.7.3-1.5.3-2.3 0-1.1-.4-2.2-.7-3.3-.3-1.8-.1-3.7.7-5.4 1.1-2.3 3.7-4.1 6-3.2 2.1.8 2.9 3.6 2.5 5.8-.4 2.3-1.6 4.3-2.2 6.5-.7 2.2-.6 4.9 1 6.4 1.5 1.4 3.9 1.5 5.8.7 2.8-1.2 4.6-4 5.7-6.8 2-5.2 1.6-11.8-2.5-15.6-1.7-1.7-4.1-2.8-6.7-3.2-4.4-.7-9.2.6-12.3 3.8s-4.5 8.1-3.2 12.3c.4 1.4 1.2 2.8 1.5 4.2s.2 3.2-.8 4.2c-.1.1-.2.2-.4.3-.2.1-.5-.1-.7-.2-1.9-1.2-3.4-3.1-4.3-5.1-2.8-6.1-1.4-13.7 3-18.7s11.5-7.4 18.1-6.5c6.2.8 12.3 4.5 14.9 10.2 1.6 3.4 1.9 7.3 1.3 11-.6 3.8-2.1 7.4-4.6 10.3s-6.1 4.9-9.9 5.1c-3.1.2-6.4-.9-8-3.5-1 5.4-2.9 10.7-5.7 15.4-.1.2 6.4 1.6 7 1.6 7.4.6 15.3-2.3 21.1-6.9 16-12.7 14.3-37-1.5-49C41.3.7 31.6-.5 22 2.9c-2.9 1-5.6 2.7-8.1 4.5-4 3-7.2 6.9-9.3 11.4-2.1 4.1-2.9 8.7-2.8 13.3z" })));
};

var SvgPizza = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M62 36.3c-2.2-6.9-7-14.2-13.5-20.8C41.9 9 34.6 4.2 27.7 2c-2.7-.9-5.6.5-6.7 3.2L2.1 55c-.8 2-.3 4.2 1.2 5.7 1 1 2.4 1.6 3.8 1.6.6 0 1.3-.1 1.9-.4l32.9-12.5h.1L58.8 43c2.7-1.1 4.1-4 3.2-6.7zM7.4 57.7c-.5.2-.8 0-.9-.2-.1-.1-.4-.5-.2-.9L9.9 47c1.2 1.7 3.2 2.8 5.4 2.8 3.6 0 6.6-2.9 6.6-6.6 0-3.6-2.9-6.6-6.6-6.6-.5 0-1 .1-1.5.2l6.9-18.1c.8.5 1.7 1.1 2.6 1.7-1.3 1.2-2.1 2.9-2.1 4.8 0 3.6 2.9 6.6 6.6 6.6 2.4 0 4.5-1.3 5.7-3.3 4.2 4 8.4 8.8 12 14.6l-1 .4c-.4-3.3-3.2-5.8-6.5-5.8-3.6 0-6.6 2.9-6.6 6.6 0 1.4.4 2.7 1.2 3.8L7.4 57.7zm5.8-14.4c0-1.1.9-2.1 2.1-2.1 1.1 0 2.1.9 2.1 2.1 0 1.1-.9 2.1-2.1 2.1-1.1 0-2.1-1-2.1-2.1zm14-19.9c.8.7 1.7 1.3 2.6 2.1 0 1.1-.9 2-2.1 2-1.1 0-2.1-.9-2.1-2.1 0-1 .7-1.8 1.6-2zm10 23c-.8-.3-1.4-1-1.4-2 0-1.1.9-2.1 2.1-2.1 1.1 0 2.1.9 2.1 2.1 0 .4-.1.7-.3 1l-2.5 1zm20-7.7-7.6 2.9c-4.8-7.9-10.5-14.2-16.2-19-.1 0-.1-.1-.2-.1-1.4-1.2-2.8-2.3-4.1-3.3-2.4-1.8-4.6-3.3-6.8-4.6l2.9-7.7c.1-.3.5-.6.8-.6h.3c6.1 1.9 13 6.4 18.9 12.4 5.9 5.9 10.5 12.9 12.4 18.9.3.5 0 1-.4 1.1z" })));
};

var SvgPlane = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M37 62.3c-.9 0-1.8-.4-2.4-1L29.4 56c-1.1-1.1-1.3-2.9-.5-4.2l4-6.4-6.8-6.7L14.4 53c-.6.8-1.5 1.2-2.5 1.3-1 .1-1.9-.3-2.6-1l-6.5-6.5c-1.2-1.2-1.3-3-.4-4.3L13.3 26 9 21.8c-3.5-3.5-3.4-9.2.1-12.7 1.7-1.7 3.9-2.6 6.3-2.7 2.5 0 4.7.9 6.4 2.6l4.2 4.3 16.3-11c1.4-.9 3.2-.7 4.3.4l6.5 6.5c.7.7 1 1.6 1 2.6s-.5 1.9-1.3 2.5L38.6 26.1l6.7 6.8 6.5-4.1c1.4-.9 3.1-.7 4.3.5l5.2 5.2c.8.8 1.1 1.8 1 2.9-.2 1.1-.8 2-1.8 2.6l-13.1 7.3-7.3 13.1c-.5 1-1.5 1.6-2.6 1.8-.1 0-.3.1-.5.1zm-3.8-8.9 3.6 3.7 7.2-13 13-7.2-3.6-3.7-6.5 4.1c-1.4.9-3.2.7-4.3-.5l-8.1-8.3c-.7-.7-1-1.6-1-2.6.1-1 .5-1.9 1.3-2.5l14.3-11.7-5-5.1-16.3 10.9c-1.4.9-3.2.7-4.4-.4l-4.8-4.9c-.8-.8-1.9-1.2-3.1-1.2-1.2 0-2.4.5-3.2 1.4-1.8 1.8-1.8 4.6-.1 6.3l4.9 4.8c1.2 1.2 1.3 3 .4 4.4L6.6 44.2l5 5.1L23.3 35c.6-.8 1.5-1.2 2.5-1.3 1 0 1.9.3 2.6 1l8.2 8.1c1.1 1.1 1.3 2.9.5 4.3l-3.9 6.3zM13.7 25.3z" })));
};

var SvgPlayStoreAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M59.14 30.203a3.771 3.771 0 0 0-1.254-1.067c-.464-.246-3.485-1.974-6.309-3.613a330.16 330.16 0 0 1-3.8-2.211c-.514-.296-.928-.543-1.225-.711l-.464-.276-12.261-7.069-11.314-6.535c-5.745-3.308-11.649-6.723-12.3-7.099h-.01c-.484-.286-1.067-.523-1.64-.592a3.127 3.127 0 0 0-.858 0h-.03l-.03.02c-.019 0-.039.01-.049.02h-.059c-.335.049-.651.177-.918.404C5.612 2.047 5 3.172 5 4.377v55.58c0 .919.395 1.896 1.165 2.498.395.425.977.612 1.54.523h.118c.632 0 1.284-.148 1.847-.474.562-.325 6.604-3.82 12.498-7.226l11.659-6.743 11.995-6.93s.059-.03.089-.05l.157-.078h.03l.05-.04h.069l.118-.118h.01c.8-.464 10.188-5.864 11.511-6.625.997-.582 1.876-1.57 1.856-2.843a2.84 2.84 0 0 0-.573-1.648ZM25.671 14.516l6.427 3.711 10.277 5.934-5.34 5.311-20.219-20.07c2.873 1.658 6.111 3.524 8.855 5.114ZM8.456 5.946l26.152 25.955L8.455 57.845V5.946ZM32.1 45.564l-6.308 3.643c-2.744 1.58-6.002 3.455-8.954 5.163l20.198-20.09 5.38 5.35L32.1 45.565Zm14.088-8.115c-.276.158-.513.296-.691.395L39.464 31.9l5.992-5.953c.76.444 2.281 1.322 4.394 2.547a670.165 670.165 0 0 0 5.913 3.396c-1.718.987-7.187 4.176-9.576 5.558Z", clipRule: "evenodd" })));
};

var SvgPlayStoreFill = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "m10.273 1 27.32 27.316 7.05-7.05C35.01 15.42 22.109 7.58 16.306 4.054L12.418 1.7A4.826 4.826 0 0 0 10.273 1Zm-4.17 3.27c-.055.3-.103.602-.103.926V59.18c0 .227.046.438.077.653L33.871 32.04 6.103 4.27Zm43.174 19.808-7.96 7.96 7.821 7.822c4.144-2.512 7.015-4.256 7.333-4.448 1.409-.861 2.204-2.16 2.18-3.58-.02-1.392-.816-2.637-2.17-3.403-.302-.174-3.134-1.884-7.204-4.35ZM37.594 35.762 10.355 63c.53-.092 1.058-.25 1.564-.555a235259 235259 0 0 1 32.586-19.772l-6.911-6.911Z" })));
};

var SvgPlayStore = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M59.15 30.009a4.003 4.003 0 0 0-1.356-1.16 444.459 444.459 0 0 1-6.224-3.571c-1.395-.79-2.751-1.58-3.756-2.175l-.624-.361c-.224-.137-.43-.254-.585-.342L22.85 8.675a6716.506 6716.506 0 0 1-10.73-6.185l-1.424-.829-.088-.039c-.556-.312-1.151-.527-1.688-.585a3.075 3.075 0 0 0-.946 0l-.078.02s-.039.01-.049.01H7.82c-.43.067-.79.233-1.044.448C5.683 2.149 5 3.368 5 4.705v54.92c0 1.092.478 2.126 1.249 2.721.39.42.946.654 1.482.654.108 0 .205-.01.303-.02h.117c.731 0 1.424-.185 2.01-.526.555-.322 6.525-3.775 12.349-7.14l23.305-13.472c.068-.03.126-.059.136-.078l.098-.04.185-.038.185-.176c.888-.517 10.058-5.785 11.355-6.536 1.297-.75 2.029-1.892 2.01-3.131a3.116 3.116 0 0 0-.635-1.834Zm-13.716 7.306-5.502-5.414 5.463-5.423c.536.312 1.346.78 2.38 1.375l1.717.995c2.01 1.161 4.048 2.341 5.287 3.044-1.102.643-2.897 1.687-4.672 2.721-1.62.937-3.21 1.864-4.234 2.459l-.439.243Zm-25.997-25.84c2.098 1.21 4.253 2.458 6.165 3.56l16.096 9.297-4.682 4.653L19.29 11.397l.146.078ZM9.146 56.659V7.134L34.099 31.9 9.146 56.66Zm16.573-7.98c-1.97 1.142-4.214 2.43-6.409 3.698l17.706-17.608 4.72 4.692L25.72 48.68Z" })));
};

var SvgPlay = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M9.7 62.3c-.7 0-1.5-.2-2.1-.6-1.4-.8-2.2-2.1-2.2-3.7V6c0-1.5.8-2.9 2.2-3.7 1.4-.8 3-.7 4.4.1l44.8 26.1c1.3.8 2 2.1 2 3.6 0 1.4-.7 2.8-2 3.5l-44.9 26c-.7.4-1.5.7-2.2.7zm-.1-4.5zm.2-51.4v51.2l44-25.6-44-25.6z" })));
};

var SvgPlaystation = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M38.8 15.7v14.9c6.3 3.1 11.2 0 11.2-8 0-8.2-3-11.8-11.4-14.8-3.4-1.1-9.6-3-13.9-3.8v44.6l10.1 3.2V14.5c0-1.8.8-3 2.1-2.5 1.5.3 1.9 2 1.9 3.7z" }),
        React__namespace.createElement("path", { d: "M58.8 35.4c-4.2-1.5-9.6-2.1-13.9-1.7-4.4.4-7.5 1.5-7.5 1.5l-.7.3v6l10.8-3.8c1.8-.7 4.5-.8 6-.3 1.5.4 1.3 1.4-.6 2.1l-16.3 5.6V51l22.1-7.9s3-1.1 4.2-2.7c1.2-1.3.7-3.4-4.1-5zM2.7 38.8c-2.2 1.7-1.4 4.5 3.5 5.9 5.2 1.7 10.5 2.1 15.5 1.3.3 0 .7-.1 1-.1v-5.2l-5.1 1.8c-1.8.7-4.5.8-6 .3-1.5-.4-1.3-1.4.7-2.1L22.7 37v-6L8.2 36.2c.1-.1-3.4 1-5.5 2.6z" })));
};

var SvgPlug = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M45.3 11.9h-3.4V4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v7.9H26.6V4c0-1.2-1-2.3-2.3-2.3S22 2.7 22 4v7.9h-3.4c-2.3 0-4.3 1.9-4.3 4.3v12.4c0 7.3 6 13.3 13.3 13.3h2V60c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3V41.9h2c7.3 0 13.3-6 13.3-13.3V16.2c0-2.4-1.9-4.3-4.2-4.3zM45 28.6c0 4.9-4 8.8-8.8 8.8h-8.4c-4.9 0-8.8-4-8.8-8.8V16.4h26v12.2z" })));
};

var SvgPlus = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60 29.8H34.3V4c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v25.8H4c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h25.8V60c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3V34.3H60c1.2 0 2.3-1 2.3-2.3 0-1.2-1.1-2.2-2.3-2.2z" })));
};

var SvgPointerDown = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M36.8 62.2c-1.5 0-2.9-.4-4.1-1.2-.5-.4-1.1-.8-1.5-1.3-1.5-1.7-2.5-4.2-2.8-7-.2-1.7-.1-3.3 0-4.9-2.2.2-4.5-.6-6.2-2.1-2.8.7-6-.2-8-2.4-1.4.3-2.9.2-4.4-.3-2.2-.8-4-2.5-4.8-4.6-.7-1.7-.7-3.5-.7-5.1 0-3.3-.1-6.8.1-10.2.2-4.7.9-10.8 4.5-15.1 2.9-3.5 7.4-5.6 13.2-6.3 5-.5 12.2.1 17 2.6 4.6 2.4 7.6 8.6 9.1 11.6.2.4.4.9.5 1.1 2.9 4.8 5.5 8.6 8 11.8 1.3 1.7 2.9 3.8 3 6.5 0 3-2.1 5.9-5.1 6.9-2.4.8-5.1.5-7.7-.9-.5-.3-1.1-.6-1.6-.9 0 3.7 0 7.5-.1 11.2-.1 2-.2 3.9-1 5.8-1 2.2-2.9 3.8-5.2 4.5-.7.2-1.5.3-2.2.3zm-2.3-5.5c.2.2.4.4.7.6.7.5 1.7.6 2.6.3 1.1-.3 2-1.1 2.4-2 .5-1.1.6-2.5.6-4.1.2-5.3.1-10.7 0-15.9 0-.9.5-1.7 1.3-2.1.8-.4 1.8-.2 2.4.4 1.4 1.3 2.9 2.6 4.4 3.5 1.5.8 3 1 4.2.6 1-.3 2-1.4 2-2.5 0-1.2-1-2.5-2-3.8-2.7-3.4-5.3-7.3-8.3-12.2-.2-.3-.4-.8-.7-1.4-1.1-2.3-3.8-7.8-7.1-9.5C33 6.4 26.7 6 22.6 6.4c-3.2.3-7.6 1.4-10.2 4.7-2.8 3.3-3.4 8.4-3.5 12.4-.1 3.3-.1 6.7-.1 9.9 0 1.3 0 2.5.4 3.5.3.9 1.1 1.6 2.1 1.9.9.3 1.8.3 2.5-.1.5-.3 1.1-.4 1.7-.2.6.2 1.1.5 1.4 1.1.9 1.7 3.3 2.4 4.9 1.5 1-.5 2.2-.2 2.9.7 1.1 1.5 3.4 2 4.9 1 .7-.4 1.6-.5 2.3-.1.7.4 1.2 1.2 1.2 2 0 1-.1 2-.1 3-.1 1.6-.2 3.1-.1 4.6.1 1.8.7 3.4 1.6 4.4z" })));
};

var SvgPointerLeft = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M35.3 59.7h-4.8c-1.6 0-3.3 0-5.1-.7-2.1-.8-3.8-2.5-4.6-4.8-.5-1.5-.6-3-.3-4.4-2.1-2.1-3.1-5.2-2.4-8-1.5-1.7-2.2-4-2.1-6.2-1.6.1-3.2.2-4.9 0-2.8-.3-5.3-1.3-7-2.8-.5-.5-.9-1-1.3-1.5-1.2-1.8-1.5-4.1-.9-6.4.7-2.4 2.3-4.3 4.5-5.2 1.9-.8 3.8-1 5.8-1 3.7-.1 7.5-.1 11.2-.1-.3-.5-.7-1-.9-1.6-1.4-2.6-1.7-5.3-.9-7.7 1-3 3.9-5.1 6.9-5.1 2.7 0 4.8 1.7 6.5 3 3.3 2.5 7 5.1 11.8 8 .1.1.6.3 1.1.5 3 1.4 9.1 4.4 11.6 9.1 2.6 4.9 3.2 12.1 2.6 17-.6 5.8-2.8 10.3-6.3 13.2-4.3 3.6-10.4 4.3-15.1 4.5-1.8.2-3.6.2-5.4.2zM19.2 31c.8 0 1.6.4 2 1.2.4.7.4 1.6-.1 2.3-1 1.5-.5 3.8 1 4.9.9.7 1.2 1.9.7 2.9-.9 1.6-.1 3.9 1.5 4.9.5.3.9.8 1.1 1.4s.1 1.2-.2 1.7c-.4.7-.5 1.6-.1 2.5.3 1 1.1 1.7 1.9 2.1 1 .4 2.3.4 3.5.4 3.3 0 6.6.1 9.9-.1 4-.2 9.1-.7 12.4-3.4 3.2-2.7 4.3-7 4.7-10.2.5-4.2 0-10.5-2.1-14.4-1.8-3.3-7.2-6-9.5-7.1-.7-.3-1.1-.5-1.4-.7-5-3-8.8-5.7-12.2-8.3-1.3-1-2.6-2-3.8-2-1.2 0-2.2 1-2.5 2-.4 1.2-.2 2.7.6 4.2.8 1.6 2.2 3 3.5 4.4.6.7.8 1.6.4 2.4-.4.8-1.2 1.3-2.1 1.3-5.2-.1-10.6-.1-15.9 0-1.6 0-3 .1-4.1.6-.9.4-1.7 1.3-2 2.4-.3 1-.2 1.9.3 2.6.2.2.4.5.6.7 1 .9 2.6 1.5 4.4 1.7 1.5.1 3 0 4.6-.1.9-.3 1.9-.3 2.9-.3z" })));
};

var SvgPointerRight = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M61.9 24.9c-.7-2.4-2.3-4.3-4.5-5.2-1.9-.8-3.8-1-5.8-1-3.7-.1-7.5-.1-11.2-.1.3-.5.7-1 .9-1.6 1.4-2.6 1.7-5.3.9-7.7-1-3-3.8-5.1-6.8-5.1h-.1c-2.7 0-4.8 1.7-6.5 3-3.2 2.5-7 5.1-11.8 8-.1.1-.6.3-1.1.5-3 1.4-9.1 4.4-11.6 9.1-2.6 4.9-3.2 12.1-2.6 17C2.3 47.6 4.5 52.1 8 55c4.3 3.6 10.4 4.3 15.1 4.5 1.8.1 3.6.1 5.4.1h4.8c1.6 0 3.3 0 5.1-.7 2.1-.8 3.8-2.5 4.6-4.8.5-1.5.6-3 .3-4.4 2.1-2 3.1-5.2 2.4-8 1.5-1.7 2.2-4 2.1-6.2 1.6.1 3.2.2 4.9 0 2.8-.3 5.3-1.3 7-2.8.5-.5.9-1 1.3-1.5 1.2-1.7 1.6-4 .9-6.3zm-4.6 3.9c-.2.2-.4.5-.6.7-1 .9-2.6 1.5-4.4 1.7-1.5.1-3 0-4.6-.1-1-.1-2-.1-3-.1-.8 0-1.6.4-2 1.2-.4.7-.4 1.6.1 2.3 1 1.5.5 3.8-1 4.9-.9.7-1.2 1.9-.7 2.9.9 1.6.1 3.9-1.5 4.9-.5.3-.9.8-1.1 1.4-.2.6-.1 1.2.2 1.7.4.7.5 1.6.1 2.5-.3 1-1.1 1.7-1.9 2.1-1 .4-2.3.4-3.5.4-3.3 0-6.6.1-9.9-.1-4-.2-9.1-.7-12.4-3.4-3.2-2.7-4.3-7-4.7-10.2C6 37.3 6.4 31 8.5 27c1.8-3.3 7.2-6 9.5-7.1.7-.3 1.1-.5 1.4-.7 5-3 8.8-5.7 12.2-8.3 1.3-1 2.6-2 3.8-2 1.2 0 2.2 1 2.5 2 .4 1.2.2 2.7-.6 4.2-.8 1.6-2.2 3-3.5 4.4-.6.7-.8 1.6-.4 2.4s1.2 1.4 2.1 1.3c5.2-.1 10.6-.1 15.9 0 1.6 0 3 .1 4.1.6.9.4 1.7 1.3 2 2.4.4.9.3 1.9-.2 2.6z" })));
};

var SvgPointerTop = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M38.4 62.2c-4.5 0-9.7-.8-13.5-2.8-4.6-2.4-7.6-8.6-9.1-11.6-.2-.4-.4-.9-.5-1.1-2.9-4.8-5.5-8.6-8-11.8-1.3-1.7-2.9-3.8-3-6.5 0-3 2.1-5.9 5.1-6.9 2.4-.8 5.1-.5 7.7.9.5.3 1.1.6 1.6.9 0-3.7 0-7.5.1-11.2.1-2 .2-4 1-5.8 1-2.2 2.9-3.8 5.2-4.5 2.2-.6 4.5-.3 6.4.9.6.4 1.1.8 1.5 1.3 1.6 1.7 2.5 4.2 2.8 7 .2 1.7.1 3.3 0 4.9 2.2-.2 4.5.6 6.2 2.1 2.8-.7 6 .2 8 2.4 1.4-.3 2.9-.2 4.4.3 2.2.8 4 2.5 4.8 4.6.7 1.7.7 3.5.7 5.1 0 3.3.1 6.7-.1 10.2-.2 4.7-.9 10.8-4.5 15.1-2.9 3.5-7.4 5.6-13.2 6.3-1.2.2-2.4.2-3.6.2zM12 25.8c-.4 0-.8.1-1.2.2-1 .3-2 1.4-2 2.5 0 1.2 1 2.5 2 3.8 2.7 3.4 5.3 7.3 8.3 12.2.2.3.4.8.7 1.4 1.1 2.3 3.8 7.8 7.1 9.5 4 2.1 10.3 2.6 14.5 2.1 3.2-.4 7.6-1.4 10.2-4.7 2.7-3.3 3.3-8.4 3.4-12.4.1-3.3.1-6.7.1-9.9 0-1.2 0-2.5-.4-3.5-.3-.9-1.1-1.6-2.1-1.9-.9-.3-1.8-.3-2.5.1-.5.3-1.1.4-1.7.2-.6-.2-1.1-.5-1.4-1.1-.9-1.7-3.3-2.4-4.9-1.5-1 .5-2.2.2-2.9-.7-1.1-1.5-3.4-2-4.9-1-.7.4-1.6.5-2.3.1-.7-.4-1.2-1.2-1.2-2 0-1 .1-2 .1-3 .1-1.6.2-3.1.1-4.6-.2-1.8-.8-3.4-1.7-4.4-.2-.2-.4-.4-.7-.6-.7-.5-1.7-.6-2.6-.3-1.1.3-2 1.1-2.4 2-.5 1.1-.6 2.5-.6 4.1-.2 5.3-.1 10.6 0 15.9 0 .9-.5 1.7-1.3 2.1-.7.4-1.7.3-2.3-.4-1.4-1.3-2.9-2.6-4.4-3.5-1.1-.5-2.1-.7-3-.7z" })));
};

var SvgPointer = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M33.2 62.3c-1.6 0-3.1-.9-3.9-2.4L2.3 8.2c-.9-1.7-.6-3.8.8-5.1 1.4-1.4 3.4-1.7 5.2-.8L60 29.4c1.6.8 2.5 2.4 2.4 4.2-.1 1.7-1.2 3.2-2.8 3.9l-15.9 6.2-6.2 15.9c-.6 1.6-2.1 2.7-3.9 2.8-.2-.2-.3-.1-.4-.1zM6.4 6.4l26.8 51.2L39.7 41c.2-.6.7-1.1 1.3-1.3l16.7-6.5L6.4 6.4z" })));
};

var SvgPopup = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56 5H8c-3.4 0-6.2 2.8-6.2 6.2V44c0 3.4 2.8 6.2 6.2 6.2h14.6l6.9 8.4c.6 1 1.5 1.4 2.5 1.4s1.9-.4 2.5-1.2l6.9-8.4H56c3.4 0 6.2-2.8 6.2-6.2V11.3C62.2 7.8 59.4 5 56 5zm1.8 39.1c0 1-.8 1.8-1.8 1.8H41.3c-1.1 0-2.2.4-3 1.2l-.2.2-6.1 7.5-6.1-7.5-.2-.2c-.8-.8-1.8-1.2-3-1.2H8c-1 0-1.8-.8-1.8-1.8V11.3c0-1 .8-1.8 1.8-1.8h48c1 0 1.8.8 1.8 1.8v32.8z" }),
        React__namespace.createElement("path", { d: "M17.2 19.7h27.5c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H17.2c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2zM17.2 30h19.9c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H17.2c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2zM47.3 35.7H17.2c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h30.1c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2z" })));
};

var SvgPostcard = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56 11.9H8c-3.4 0-6.2 2.8-6.2 6.2v27.7C1.8 49.2 4.6 52 8 52h48c3.4 0 6.2-2.8 6.2-6.2V18.2c0-3.5-2.8-6.3-6.2-6.3zm1.8 33.9c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8V18.2c0-1 .8-1.8 1.8-1.8h48c1 0 1.8.8 1.8 1.8v27.6z" }),
        React__namespace.createElement("path", { d: "M32 20.9c-1.2 0-2.2 1-2.2 2.2v15.3c0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2V23.1c0-1.2-1-2.2-2.2-2.2zM11.6 33h8.9c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-8.9c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2zM52 20.9h-9.4c-1.5 0-2.6 1.2-2.6 2.6v9.4c0 1.4 1.2 2.6 2.6 2.6H52c1.4 0 2.6-1.2 2.6-2.6v-9.4c0-1.5-1.2-2.6-2.6-2.6zM50.1 31h-5.7v-5.7h5.7V31zM23 36.1H11.6c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2H23c1.2 0 2.2-1 2.2-2.2s-.9-2.2-2.2-2.2z" })));
};

var SvgPostgresql = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M45.675 0c-2.487.018-4.96.38-7.347 1.075l-.168.053a29.124 29.124 0 0 0-4.56-.44c-3.141-.053-5.84.71-8.016 1.979C23.44 1.923 18.992.64 14.304.896c-3.264.179-6.827 1.17-9.467 3.957C2.205 7.64.813 11.952 1.107 17.82c.08 1.618.541 4.258 1.306 7.677.766 3.419 1.84 7.421 3.182 11.072 1.341 3.653 2.81 6.933 5.106 9.163 1.147 1.117 2.726 2.056 4.587 1.978 1.307-.053 2.488-.626 3.507-1.472.496.654 1.026.939 1.509 1.203.608.333 1.2.56 1.813.71 1.102.274 2.987.642 5.195.266a9.82 9.82 0 0 0 2.333-.72c.03.88.064 1.741.099 2.613.11 2.763.179 5.315 1.008 7.552.133.366.499 2.248 1.939 3.91 1.44 1.664 4.261 2.701 7.474 2.013 2.267-.485 5.15-1.36 7.064-4.085 1.894-2.694 2.747-6.558 2.915-12.824.043-.339.093-.627.147-.896l.45.04h.054c2.418.109 5.042-.235 7.234-1.254 1.942-.898 3.411-1.808 4.48-3.421.267-.4.56-.883.64-1.715.08-.832-.397-2.133-1.189-2.733-1.587-1.205-2.584-.747-3.653-.525a16.73 16.73 0 0 1-3.206.389c3.083-5.192 5.294-10.707 6.555-15.587.747-2.88 1.165-5.536 1.2-7.858.035-2.323-.155-4.379-1.547-6.158C56.96 1.6 50.845.064 46.115.011c-.147-.003-.294-.006-.44-.003V0Zm-.126 1.707c4.475-.043 10.192 1.213 14.296 6.458.923 1.179 1.198 2.902 1.166 5.024-.035 2.12-.427 4.659-1.144 7.44-1.392 5.387-4.022 11.667-7.726 17.302.131.093.273.17.422.229.773.32 2.536.595 6.053-.128.885-.187 1.533-.312 2.205.2a1.387 1.387 0 0 1 .488 1.133 1.877 1.877 0 0 1-.346.896c-.68 1.022-2.022 1.99-3.742 2.787-1.522.71-3.706 1.08-5.642 1.101-.971.011-1.867-.064-2.627-.301l-.048-.019c-.293 2.827-.968 8.408-1.408 10.955-.352 2.053-.968 3.685-2.144 4.907-1.173 1.221-2.835 1.957-5.07 2.437-2.767.595-4.786-.045-6.087-1.141-1.299-1.094-1.894-2.544-2.251-3.432-.245-.614-.373-1.408-.496-2.47a54.135 54.135 0 0 1-.275-3.824 137.074 137.074 0 0 1-.08-6.728 8.162 8.162 0 0 1-4.138 2.027c-1.838.312-3.478.005-4.456-.24a6.072 6.072 0 0 1-1.387-.536c-.453-.243-.885-.517-1.173-1.059-.17-.31-.223-.67-.152-1.016.09-.35.294-.661.581-.882.528-.43 1.227-.67 2.28-.888 1.917-.395 2.587-.664 2.995-.987.346-.277.738-.837 1.432-1.659a3.07 3.07 0 0 1-.008-.109 7.893 7.893 0 0 1-3.547-.955c-.4.422-2.443 2.582-4.933 5.579-1.048 1.253-2.206 1.973-3.427 2.024-1.221.053-2.325-.563-3.264-1.472-1.875-1.821-3.37-4.955-4.675-8.496-1.301-3.541-2.36-7.485-3.112-10.845-.754-3.36-1.2-6.07-1.264-7.376-.28-5.552 1.019-9.294 3.246-11.654 2.229-2.36 5.285-3.253 8.264-3.424 5.346-.306 10.424 1.558 11.45 1.958 1.979-1.344 4.528-2.182 7.712-2.128 1.512.02 3.016.216 4.483.581l.053-.024a18.282 18.282 0 0 1 1.971-.57 25.67 25.67 0 0 1 5.523-.67l.002-.005Zm.406 1.786h-.39c-1.527.022-3.05.193-4.544.512 3.323 1.472 5.832 3.739 7.6 6a22.506 22.506 0 0 1 3.019 5.12c.293.704.49 1.299.603 1.76.056.232.093.427.106.63.006.101.011.205-.032.384 0 .008-.013.026-.016.034.08 2.336-.498 3.92-.568 6.15-.053 1.616.36 3.514.462 5.586.096 1.947-.139 4.086-1.403 6.184.107.128.203.256.304.384 3.344-5.266 5.755-11.093 7.04-16.061.688-2.675 1.053-5.099 1.085-7.019.027-1.92-.33-3.312-.786-3.893-3.579-4.576-8.422-5.741-12.48-5.773v.002Zm-12.774.683c-3.152.008-5.413.96-7.128 2.387-1.768 1.474-2.954 3.493-3.733 5.56-.925 2.453-1.243 4.826-1.368 6.437l.035-.021a13.814 13.814 0 0 1 3.541-1.376c1.339-.307 2.781-.403 4.088.104 1.307.506 2.387 1.698 2.779 3.506 1.877 8.686-.584 11.915-1.491 14.352a25.639 25.639 0 0 0-.883 2.702c.115-.027.23-.059.344-.07.64-.053 1.142.16 1.44.288.912.379 1.539 1.174 1.878 2.08.088.238.152.494.189.758.04.108.058.223.053.338-.1 3.322-.09 6.647.035 9.968.061 1.435.152 2.699.267 3.696.114.995.277 1.752.381 2.008.341.854.84 1.971 1.741 2.731.902.757 2.195 1.264 4.558.757 2.048-.44 3.312-1.05 4.157-1.928.843-.877 1.347-2.098 1.67-3.968.482-2.8 1.453-10.92 1.57-12.448-.053-1.152.117-2.037.485-2.712a3.154 3.154 0 0 1 1.472-1.346c.254-.115.491-.192.686-.248a15.847 15.847 0 0 0-.648-.867 11.881 11.881 0 0 1-1.776-2.93 22.158 22.158 0 0 0-.686-1.289c-.354-.64-.802-1.44-1.272-2.338-.938-1.8-1.96-3.982-2.49-6.107-.528-2.123-.606-4.32.749-5.87 1.2-1.375 3.307-1.946 6.47-1.626-.094-.28-.15-.512-.307-.885a20.841 20.841 0 0 0-2.776-4.704C44.53 7.688 40.192 4.29 33.488 4.18h-.307v-.005Zm-17.712.139c-.338 0-.677.01-1.013.029-2.693.155-5.24.936-7.061 2.867C5.57 9.14 4.37 12.307 4.632 17.547c.05.992.483 3.77 1.224 7.072.739 3.301 1.787 7.186 3.045 10.618 1.262 3.432 2.79 6.419 4.24 7.832.731.707 1.366.992 1.942.968.578-.026 1.274-.36 2.125-1.381 1.551-1.87 3.16-3.692 4.827-5.461a9.326 9.326 0 0 1-3.112-8.4c.274-1.971.312-3.814.28-5.27-.032-1.418-.134-2.362-.134-2.952v-.064l-.002-.016v-.002a26.382 26.382 0 0 1 1.578-9.003c.747-1.984 1.859-4 3.526-5.632-1.638-.539-4.544-1.36-7.691-1.515a20.272 20.272 0 0 0-1.013-.026h.002ZM48.531 18.4c-1.811.024-2.827.49-3.36 1.101-.755.867-.827 2.387-.358 4.259.467 1.875 1.432 3.97 2.339 5.712.453.872.893 1.656 1.248 2.293.357.64.619 1.094.779 1.48.146.358.309.672.474.966.702-1.48.827-2.934.755-4.448-.093-1.875-.528-3.792-.464-5.734.072-2.269.52-3.746.56-5.501a15.445 15.445 0 0 0-1.973-.128Zm-21.958.307a7.516 7.516 0 0 0-1.642.197c-1.074.26-2.108.663-3.075 1.197a6.446 6.446 0 0 0-.93.608l-.06.054c.017.389.094 1.333.126 2.722.032 1.52-.005 3.459-.299 5.558-.637 4.56 2.672 8.336 6.56 8.341.227-.936.6-1.885.974-2.885 1.082-2.918 3.213-5.046 1.418-13.35-.293-1.36-.874-1.909-1.674-2.218a3.93 3.93 0 0 0-1.398-.224Zm21.112.544h.134c.176.005.338.024.48.058.144.032.266.08.368.147a.436.436 0 0 1 .2.293l-.003.022h.003-.003a.64.64 0 0 1-.093.36 1.783 1.783 0 0 1-.294.4c-.27.298-.632.497-1.029.565a1.573 1.573 0 0 1-1.093-.275 1.62 1.62 0 0 1-.347-.314.695.695 0 0 1-.168-.339.454.454 0 0 1 .112-.341c.087-.1.194-.181.312-.24.256-.144.603-.251.995-.31.146-.021.29-.032.426-.034v.008Zm-20.853.448c.141 0 .29.013.443.034.408.056.77.166 1.048.326.135.07.255.166.354.282a.596.596 0 0 1 .144.454.806.806 0 0 1-.2.41 1.73 1.73 0 0 1-.381.347 1.707 1.707 0 0 1-1.195.301 1.94 1.94 0 0 1-1.12-.608 1.893 1.893 0 0 1-.314-.437.746.746 0 0 1-.11-.472c.04-.288.278-.437.51-.52a2.31 2.31 0 0 1 .818-.107l.003-.01Zm24.16 19.581-.008.003c-.392.141-.715.2-.987.32a1.206 1.206 0 0 0-.637.57c-.168.307-.312.851-.27 1.776.121.083.255.146.395.187.456.139 1.222.23 2.075.216 1.701-.019 3.795-.416 4.907-.933.912-.424 1.759-.976 2.514-1.64h-.002c-3.715.768-5.814.562-7.102.032a3.506 3.506 0 0 1-.885-.534v.003Zm-21.416.25h-.056c-.141.014-.347.062-.744.502-.928 1.04-1.253 1.693-2.019 2.304-.765.608-1.76.933-3.746 1.341-.63.128-.99.27-1.23.384.078.064.07.08.187.142.29.16.664.301.965.378.854.214 2.256.462 3.72.214 1.464-.251 2.987-.952 4.286-2.774.224-.314.248-.778.064-1.277-.187-.499-.595-.928-.883-1.048a1.742 1.742 0 0 0-.544-.16v-.005Z" })));
};

var SvgPostman = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M57.325 12.442h.002C46.525-1.545 26.43-4.128 12.442 6.674-1.545 17.476-4.128 37.57 6.674 51.557c10.802 13.988 30.897 16.57 44.884 5.769l.008-.006c13.98-10.804 16.56-30.893 5.76-44.878Zm-8.189 7.984-2.498-2.458-.538-.538.15-.15 3.787-3.576a4.578 4.578 0 0 1 1.05 2.926 4.72 4.72 0 0 1-1.387 3.333 5.032 5.032 0 0 1-.564.463ZM15.034 47.161l.443.416 2.32 2.32-5.163-.336 2.4-2.4Zm31.333-35.226a4.784 4.784 0 0 1 2.88.986l-4.16 4.187h-.001a.433.433 0 0 0-.114.14v.001a.362.362 0 0 0-.032.082.426.426 0 0 0 .146.445l3.146 3.146a4.666 4.666 0 0 1-5.171-.987 4.712 4.712 0 0 1-1.007-5.1 4.674 4.674 0 0 1 4.313-2.9ZM43.46 22.388c-.012.41-.197.797-.507 1.067L30.491 34.3l-.042.037-.455-.455-.198-.198-.097-.097-.278-.278-.107-.107-.213-.214 11.8-11.693a1.481 1.481 0 0 1 .966-.433 1.5 1.5 0 0 1 1.14.433c.042.039.081.08.118.123.103.152.192.314.266.48.05.157.074.323.069.49ZM29.066 34.353a.498.498 0 0 0 .021.063l.109.106.467.458-.173.021-2.587.317.318-.317 1.252-1.253.593.605ZM41.644 19.96c-.516.068-1.014.3-1.411.696L28.474 32.363l-2.308-2.308c6.1-6.07 9.829-9.24 12.147-10.28a2.88 2.88 0 0 1 3.331.185ZM25.488 30.736l.048.048 1.903 1.903-4.965 1.062 3.014-3.013ZM18.98 46.28a.744.744 0 0 0-.4.853l.532 2.32a.16.16 0 0 1 0 .187.16.16 0 0 1-.212 0l-3.146-3.173 9.694-9.839 5.02-.779 1.844 1.845a65.546 65.546 0 0 1-13.332 8.586ZM33.193 37l-1.947-1.945L43.5 24.31c-.87 3.457-5.49 8.14-10.307 12.69Zm16.88-20.958v.001a.4.4 0 0 0-.507-.16.37.37 0 0 0-.16.507c.187.393.135.858-.133 1.2a.338.338 0 0 0-.1.253.38.38 0 0 0 .1.253.29.29 0 0 0 .213 0 .35.35 0 0 0 .347-.107 1.84 1.84 0 0 0 .24-1.947Z" })));
};

var SvgPound = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M58.7 57.8H22.5c3.3-3.1 5.4-7.5 5.4-12.4v-8.8h25.8c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H27.9V20.9c0-8.1 6.5-14.6 14.5-14.6 3.7 0 7.3 1.4 10 4 .9.9 2.3.8 3.2-.1.9-.9.8-2.3-.1-3.2-3.5-3.4-8.2-5.2-13.1-5.2-10.5 0-19 8.6-19 19.1v11.2H7.8c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h15.6v8.8c0 6.8-5.5 12.4-12.3 12.4H5.3C4 57.8 3 58.8 3 60s1 2.2 2.2 2.2h53.5c1.2 0 2.2-1 2.2-2.2s-.9-2.2-2.2-2.2z" })));
};

var SvgPowerSwitch = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 37.9c1.2 0 2.3-1 2.3-2.3V5c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v30.7c.1 1.2 1.1 2.2 2.3 2.2z" }),
        React__namespace.createElement("path", { d: "M43.1 9.7c-1.1-.5-2.5 0-3 1.1s0 2.5 1.1 3c8 3.6 13.2 11.7 13.2 20.5 0 12.4-10.1 22.5-22.5 22.5S9.5 46.7 9.5 34.3c0-8.8 5.2-16.8 13.2-20.5 1.1-.5 1.6-1.8 1.1-3-.5-1.1-1.8-1.6-3-1.1C11.3 14.1 5 23.7 5 34.3c0 14.9 12.1 27 27 27s27-12.1 27-27c0-10.6-6.3-20.2-15.9-24.6z" })));
};

var SvgPrinter = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M54.6 14.5V7c0-2.9-2.4-5.3-5.3-5.3H14.6c-2.9 0-5.3 2.4-5.3 5.3v7.5c-2.8.1-5.1 2.4-5.1 5.2v14.4c0 2.8 2.3 5.1 5.1 5.2V57c0 2.9 2.4 5.3 5.3 5.3h34.8c2.9 0 5.3-2.4 5.3-5.3V39.3c2.8-.1 5.1-2.4 5.1-5.2V19.7c-.1-2.8-2.4-5.1-5.2-5.2zM13.9 7c0-.4.3-.8.8-.8h34.8c.4 0 .8.3.8.8v7.5H13.9V7zm36.2 50c0 .4-.3.8-.8.8H14.6c-.4 0-.8-.3-.8-.8V39.3h36.3V57zm5.1-22.9c0 .4-.3.8-.8.8H9.5c-.4 0-.8-.3-.8-.8V19.7c0-.4.3-.8.8-.8h44.9c.4 0 .8.3.8.8v14.4z" }),
        React__namespace.createElement("path", { d: "M24.5 47h15c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-15c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3zM50 23.2h-7.5c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3H50c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3zM24.5 54.6h15c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-15c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3z" })));
};

var SvgProducthunt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M36.1 22.7h-8.9V32h8.9c2.5 0 4.7-2.1 4.7-4.6.1-2.7-2.2-4.7-4.7-4.7z" }),
        React__namespace.createElement("path", { d: "M32 1C14.8 1 1 14.8 1 32s13.8 31 31 31 31-13.8 31-31S49.2 1 32 1zm4.1 37.2h-8.9v9.3H21v-31h15.1c6.1 0 10.9 4.8 10.9 10.9.1 6-4.9 10.8-10.9 10.8z" })));
};

var SvgProtection = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M53.6 7.5 33.3 1.9c-.8-.2-1.7-.2-2.5 0L10.4 7.5c-2.1.6-3.6 2.5-3.6 4.7V27c0 15.5 9.2 29.2 23.4 34.9.6.2 1.2.4 1.8.4s1.2-.1 1.8-.4c14.2-5.7 23.4-19.5 23.4-35V12.2c0-2.2-1.5-4.1-3.6-4.7zm-.9 19.4c0 13.4-8.3 25.8-20.5 30.8h-.3c-12.5-5-20.6-17.1-20.6-30.7V12.2c0-.1.1-.3.2-.3l20.4-5.6h.2l20.4 5.6c.1 0 .2.2.2.3v14.7z" }),
        React__namespace.createElement("path", { d: "M43.3 22.6 29.5 34.2 23.3 29c-1-.8-2.4-.7-3.2.3-.8 1-.7 2.4.3 3.2l7.6 6.4c.4.4.9.5 1.4.5s1-.2 1.4-.5L46.2 26c1-.8 1.1-2.2.3-3.2-.8-.9-2.3-1-3.2-.2z" })));
};

var SvgPulse = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M35.6 49.5c-2.2 0-3.9-1.3-4.6-3.3l-8.8-27.3-9.9 22.7c-.8 1.7-2.5 2.9-4.4 2.9H4c-1.2 0-2.2-1-2.2-2.2S2.8 40 4 40h3.9c.1 0 .2-.1.3-.2l9.9-22.6c.6-1.7 2.4-2.8 4.3-2.7 1.9 0 3.6 1.2 4.2 3l8.8 27.3c0 .1.1.2.3.2.2 0 .3-.1.3-.2l3.6-9.8c.7-1.5 2.1-2.6 3.8-2.8h.2c1.6-.1 3.2.7 4.2 2.2l.1.2 4.1 7.8c0 .1.2.2.3.2h8c1.2 0 2.2 1 2.2 2.2S61.2 47 60 47h-8c-1.8 0-3.4-1-4.3-2.6l-4-7.7s-.1 0-.1.1l-3.5 9.6c-.7 1.9-2.4 3.1-4.5 3.1zM22.2 18.9c0 .1 0 .1 0 0z" })));
};

var SvgPyramids = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56.8 52.7H7.2c-1.9 0-3.6-1-4.6-2.6-.9-1.7-.9-3.6 0-5.3L16 22.1c.7-1.1 1.8-1.8 3.2-1.8 1.3 0 2.5.7 3.2 1.8l4.2 7 9.4-16c.7-1.1 1.8-1.8 3.2-1.8 1.3 0 2.5.7 3.2 1.8l19 31.7c1 1.6 1 3.6.1 5.3-1.1 1.6-2.8 2.6-4.7 2.6zM19.2 25.6 6.5 47.1c-.2.3-.1.6 0 .8.1.1.3.4.7.4h49.6c.4 0 .6-.2.7-.4.1-.1.2-.4 0-.8L39.1 16.6l-9.4 16c-.7 1.1-1.8 1.8-3.2 1.8-1.3 0-2.5-.7-3.1-1.8l-4.2-7z" })));
};

var SvgPython = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M61.7 24c-1.1-4.2-3.1-7.5-7.3-7.5h-5.6v6.6c0 5.1-4.4 9.4-9.1 9.4H24.8c-4.1 0-7.3 3.5-7.3 7.6v14.1c0 3.9 3.5 6.3 7.3 7.6 4.6 1.4 9.1 1.7 14.8 0 3.7-1.1 7.3-3.2 7.3-7.6v-5.6H32.2v-1.8h22.2c4.2 0 5.9-3 7.3-7.5 1.5-4.9 1.5-9.4 0-15.3zM40.5 52c1.5 0 2.8 1.3 2.8 2.8 0 1.5-1.3 2.8-2.8 2.8-1.5.1-2.8-1.3-2.8-2.8-.1-1.5 1.2-2.8 2.8-2.8zM24.1 30.6h14.8c4.1 0 7.3-3.4 7.3-7.6V9.1c0-3.9-3.4-6.9-7.3-7.6-4.9-.7-10.3-.7-14.8 0-6.3 1.1-7.3 3.4-7.3 7.6v5.6h14.8v1.8H11.4c-4.2 0-8 2.7-9.1 7.5-1.4 5.6-1.4 9.1 0 14.9 1.1 4.4 3.5 7.5 7.9 7.5H15v-6.7c-.1-4.9 4.2-9.1 9.1-9.1zm-.9-19.7c-1.5 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8c1.5 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8z" })));
};

var SvgQuestionCircle = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 1.8C15.3 1.8 1.8 15.3 1.8 32S15.3 62.3 32 62.3 62.3 48.7 62.3 32 48.7 1.8 32 1.8zm0 56C17.8 57.8 6.3 46.2 6.3 32 6.3 17.8 17.8 6.3 32 6.3s25.8 11.6 25.8 25.8c0 14.1-11.6 25.7-25.8 25.7z" }),
        React__namespace.createElement("path", { d: "M33.8 12.1c-2.9-.5-5.9.3-8.1 2.2-2.2 1.9-3.5 4.6-3.5 7.6 0 1.1.2 2.2.6 3.3.4 1.2 1.7 1.8 2.9 1.4 1.2-.4 1.8-1.7 1.4-2.9-.2-.6-.3-1.2-.3-1.8 0-1.6.7-3.1 1.9-4.1 1.2-1 2.8-1.5 4.5-1.2 2.1.4 3.9 2.2 4.3 4.3.4 2.5-.9 5-3.2 6-2.6 1.1-4.3 3.7-4.3 6.7v6.2c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3v-6.2c0-1.1.6-2.1 1.5-2.5 4.3-1.8 6.8-6.3 6-10.9-1.1-4.1-4.3-7.4-8.3-8.1zM32.1 45.8h-.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h.3c1.2 0 2.2-1 2.2-2.3s-.9-2.3-2.2-2.3z" })));
};

var SvgQuora = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M51.1 62.3c-4 0-7.2-1.4-9.7-4.2-3 1-6.2 1.6-9.5 1.6C16 59.7 3 46.7 3 30.7c.1-16 13-28.9 29-28.9s29 13 29 28.9c0 8.6-2.6 15.1-8.2 20.1 1 .6 2.3 1.3 3.4 1.7.8.3 1.4 1.2 1.4 2.1v5.1c0 1.2-.9 2.2-2.1 2.2-.6.1-3.5.4-4.4.4zm-9-9.2c.7 0 1.4.3 1.8.9 1.3 1.8 3.2 3.7 7.2 3.7.3 0 1 0 1.9-.1V56c-1.8-.8-4.3-2.3-5.4-4-.2-.3-.3-.6-.4-.9-.2-1.3.7-2.1 1.9-3.2 5-4.3 7.3-9.6 7.3-17.3 0-13.5-11-24.4-24.5-24.4-13.4.1-24.3 11-24.3 24.5S18.5 55.2 32 55.2c3.3 0 6.4-.6 9.3-1.8.3-.2.6-.3.8-.3z" }),
        React__namespace.createElement("path", { d: "M32.3 52.1c-7.5 0-13.6-6.1-13.6-13.6V22.8c0-7.5 6.1-13.6 13.6-13.6 3.6 0 7.1 1.5 9.6 4s3.9 5.9 3.9 9.6c-.1 17.9-.3 18.7-.4 19-.2.8-.7 1.4-1.4 1.6-.7.3-1.5.1-2.2-.3-.9-.7-4.1-1.6-7.3-2.3v1.6c1.7.9 4.6 2.5 6 3.7.5.5.8 1.1.7 1.8 0 .7-.4 1.3-.9 1.7-2.3 1.6-5.2 2.5-8 2.5zm0-38.4c-5 0-9.1 4.1-9.1 9.1v15.7c0 5 4.1 9.1 9.1 9.1.8 0 1.5-.1 2.2-.3-1.1-.6-2.3-1.3-3.2-1.7-.8-.4-1.3-1.2-1.3-2V38c0-.7.3-1.3.8-1.7.5-.4 1.2-.6 1.8-.5 1.5.3 5.3 1 8.4 2 .1-3.9.1-10.5.2-15.1 0-2.4-.9-4.7-2.7-6.4-1.5-1.7-3.8-2.6-6.2-2.6z" })));
};

var SvgQuotation = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M19.2 49.5c-1.2 0-2.3-.7-2.7-1.8l-3.3-8c-3.7-.6-7-2.5-9.1-5.4-2.2-2.9-2.9-6.5-2-10 1.4-5.7 7.3-10 13.8-9.9 4.6.1 8.4 2 10.9 5.4 2.4 3.4 3 8 1.6 12.2-1.3 3.8-3 7.6-4.6 11.3-.6 1.5-1.3 3-1.9 4.4-.4 1.1-1.5 1.8-2.7 1.8zm1.5-3.5zm-5-27.1c-4.4 0-8.4 2.8-9.3 6.5-.5 2.2-.1 4.4 1.3 6.2 1.6 2.2 4.3 3.6 7.2 3.8l1.4.1 2.9 7c.1-.3.3-.7.4-1 1.6-3.6 3.2-7.3 4.4-11 1-2.8.6-5.9-1-8.1-1.6-2.2-4.1-3.4-7.2-3.5h-.1zM52.3 49.6c-1.2 0-2.3-.7-2.7-1.8l-3.3-8c-3.7-.6-7-2.5-9.1-5.4-2.2-2.9-2.9-6.5-2-10 1.4-5.7 7.3-10 13.8-9.9 4.6.1 8.4 2 10.8 5.4 2.4 3.4 3 8 1.6 12.2-1.3 3.8-3 7.6-4.6 11.3-.6 1.5-1.3 3-1.9 4.4-.3 1.1-1.4 1.8-2.6 1.8zm1.5-3.5zm-5-27.2c-4.4 0-8.4 2.8-9.3 6.5-.5 2.2-.1 4.4 1.3 6.3 1.6 2.2 4.3 3.6 7.2 3.8l1.4.1 2.9 7c.1-.3.3-.7.4-1 1.6-3.6 3.2-7.3 4.4-11 1-2.8.6-5.9-1-8.2-1.6-2.2-4.1-3.4-7.2-3.5h-.1z" })));
};

var SvgRadioButton = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M9.1 4.3c-4 0-7.3 3.3-7.3 7.3S5 19 9.1 19s7.3-3.3 7.3-7.3-3.3-7.4-7.3-7.4zm0 10.2c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.2 2.8-2.8 2.8zM9.1 24.7c-4 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3-3.3-7.3-7.3-7.3zm0 10.1c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.2 2.8-2.8 2.8zM9.1 45c-4 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3S13.1 45 9.1 45zm0 10.2c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.2 2.8-2.8 2.8zM24.4 13.9H60c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H24.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3zM60 29.8H24.4c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3H60c1.2 0 2.3-1 2.3-2.3 0-1.3-1.1-2.3-2.3-2.3zM60 50.1H24.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3H60c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" })));
};

var SvgRain = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M57.3 18.6c-2.7-2.9-6.4-4.9-10.3-5.6-2.2-3.5-5.4-6.1-9.1-7.4-1.7-.7-3.7-1-5.8-1-9.5 0-17.2 7.4-17.8 16.7-7 .9-12.5 6.8-12.5 14.1 0 5.1 2.6 9.7 7 12.3.3.2.7.3 1.1.3.8 0 1.5-.4 1.9-1.1.6-1.1.3-2.5-.8-3.1-3-1.7-4.8-4.9-4.8-8.4 0-5.4 4.3-9.7 9.7-9.7h.5c1.2 0 2.3-1 2.3-2.3v-1c0-7.3 6-13.3 13.3-13.3 1.6 0 3 .2 4.3.7 3.1 1.1 5.7 3.3 7.3 6.3.4.7 1 1.1 1.7 1.2 3.3.3 6.4 1.9 8.7 4.3 2.4 2.6 3.8 6 3.8 9.5 0 4.9-2.5 9.3-6.6 11.9-1.1.7-1.4 2-.7 3.1s2 1.4 3.1.7c5.5-3.4 8.7-9.3 8.7-15.7 0-4.6-1.8-9.1-5-12.5z" }),
        React__namespace.createElement("path", { d: "M22 40.2c-1.2 0-2.3 1-2.3 2.3v14.7c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V42.5c-.1-1.3-1.1-2.3-2.3-2.3zM32 35.3c-1.2 0-2.3 1-2.3 2.3v14.7c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3V37.6c0-1.3-1.1-2.3-2.3-2.3zM42 40.2c-1.2 0-2.3 1-2.3 2.3v14.7c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V42.5c0-1.3-1-2.3-2.3-2.3z" })));
};

var SvgReact = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M51.6 22.6c-.7-.1-1.3-.4-2-.6.1-.4.1-.8.3-1.4 1.4-7.2.4-12.9-2.8-14.9-3.2-1.8-8.4.1-13.6 4.6-.4.4-1.1.8-1.5 1.4-.3-.3-.7-.6-1-1-5.5-4.9-10.9-6.9-14.3-5-3.2 1.8-4.2 7.3-2.8 14 .1.7.3 1.4.4 2-.7.1-1.5.4-2.2.7C5.6 24.7 1 28.4 1 31.9c0 3.8 4.9 7.6 11.6 9.8.6.1 1.1.4 1.7.4-.1.7-.4 1.4-.4 2.2-1.3 6.6-.3 11.9 2.9 13.7 3.2 2 8.8 0 14-4.8.4-.4.8-.7 1.3-1.1.4.4 1.1 1 1.7 1.4 5 4.5 10.2 6.3 13.5 4.5 3.2-2 4.3-7.6 2.9-14.6-.1-.4-.1-1.1-.4-1.7.4-.1.7-.1 1.1-.4 7-2.1 12.1-5.9 12.1-9.7-.1-3.1-4.9-6.7-11.4-9zM35.2 12.4c4.5-3.9 8.7-5.3 10.7-4.3 2 1.1 2.8 5.9 1.5 12.2-.1.4-.1.7-.3 1.3-2.7-.6-5.3-1.1-8.1-1.3-1.5-2.2-3.2-4.5-5-6.3.4-.8.8-1.2 1.2-1.6zM21.3 38.3c.6 1.1 1.3 2.1 2 3.1-2-.1-3.8-.4-5.6-.8.4-1.7 1.1-3.5 2-5.3.4.9 1.1 2.1 1.6 3zm-3.6-14.4c1.7-.4 3.5-.7 5.5-1-.7 1-1.3 2-1.8 3.1s-1.1 2-1.7 3.2c-.9-1.9-1.4-3.6-2-5.3zm3.2 8.3c.7-1.7 1.7-3.2 2.7-4.9 1-1.7 2-3.2 2.9-4.8 1.8-.1 3.6-.1 5.5-.1 1.8 0 3.8.1 5.5.1 1.1 1.5 2 3.1 2.9 4.6 1 1.5 1.8 3.2 2.7 4.9-.7 1.7-1.7 3.2-2.7 4.9-1 1.7-2 3.2-2.9 4.8-1.8.1-3.6.1-5.6.1s-3.8-.1-5.5-.1c-1.1-1.5-2-3.1-2.9-4.8s-1.7-3-2.6-4.7zm21.8 6.1c.6-1.1 1.1-2.1 1.7-3.2.7 1.7 1.4 3.5 2 5.3-1.8.4-3.8.7-5.8 1 .8-1 1.5-2.1 2.1-3.1zm1.8-9.2c-.6-1.1-1.1-2.1-1.7-3.2s-1.3-2-1.8-2.9c2 .3 3.8.6 5.5 1-.6 1.7-1.3 3.4-2 5.1zM32 15.6c1.3 1.4 2.4 2.8 3.5 4.3-2.4-.1-4.8-.1-7.2 0 1.3-1.6 2.6-3 3.7-4.3zM18 8.2c2-1.1 6.6.4 11.2 4.8.3.3.6.6 1 .8-1.8 2-3.5 4.2-5.2 6.3-2.7.3-5.5.7-8.1 1.3-.1-.6-.3-1.3-.4-1.8-1.1-5.9-.4-10.3 1.5-11.4zM15.2 40c-.4-.1-1-.3-1.5-.4-2.7-.7-5.5-2.1-7.7-3.8-1.4-1-2.1-2.2-2.4-3.6 0-2.2 3.9-5 9.4-7 .7-.3 1.4-.4 2.1-.7.8 2.7 1.8 5.2 2.9 7.7-1 2.5-2.1 5-2.8 7.8zm13.9 11.7c-2 1.8-4.3 3.2-6.9 4.2-1.4.7-2.9.7-4.2.1-2-1.1-2.7-5.3-1.7-11.1.1-.7.3-1.4.4-2 2.7.6 5.5 1 8.1 1.1 1.5 2.2 3.4 4.5 5.2 6.5-.1.6-.5.9-.9 1.2zm3-2.8c-1.3-1.4-2.4-2.8-3.6-4.3 1.1 0 2.2.1 3.5.1s2.5 0 3.6-.1c-1.1 1.3-2.2 2.7-3.5 4.3zm15.8 3.5c-.1 1.4-.8 2.9-2 3.8-2 1.1-6-.3-10.4-4.2-.4-.4-1-.8-1.5-1.4 1.8-2 3.5-4.2 5-6.5 2.8-.1 5.5-.7 8.1-1.3.1.4.1 1 .3 1.4.7 2.8.7 5.6.5 8.2zm2.2-12.9c-.3.1-.7.1-1.1.3-.8-2.7-2-5.2-3.1-7.7 1.1-2.4 2.1-5 2.9-7.6.7.1 1.3.4 1.8.6 5.6 2 9.5 4.8 9.5 7 .1 2.3-4 5.4-10 7.4zM32 37.6c3.1 0 5.5-2.5 5.5-5.5S35 26.6 32 26.6c-2.9 0-5.5 2.5-5.5 5.5s2.4 5.5 5.5 5.5z" })));
};

var SvgReddit = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("circle", { cx: 22.6, cy: 35.9, r: 4.2 }),
        React__namespace.createElement("circle", { cx: 41.4, cy: 35.9, r: 4.2 }),
        React__namespace.createElement("path", { d: "M32 51.2c4.6 0 7.9-1.1 10-3.1.4-.4.4-1.3 0-1.7-.4-.4-1.3-.4-1.7 0-1.5 1.7-4.3 2.4-8.3 2.4s-6.7-.8-8.3-2.4c-.4-.4-1.3-.4-1.7 0-.4.4-.4 1.3 0 1.7 2.1 2.1 5.4 3.1 10 3.1z" }),
        React__namespace.createElement("path", { d: "M45.7 55.3c2-.8 3.9-1.7 5.6-2.8 5.3-3.5 8.3-8.3 8.3-13.2 0-.7-.1-1.4-.1-2 2-1.3 3.5-3.5 3.5-6 0-3.9-3.2-7-7-7-1.7 0-3.5.7-4.6 1.7-4.8-3.1-10.9-4.8-17.5-5l3.6-11.5 9.8 2.4c0 3.2 2.7 5.8 5.8 5.8s5.8-2.7 5.8-5.8S56.1 6 53 6c-2.4 0-4.5 1.4-5.3 3.5L36.8 7.2c-.6-.2-1.3.1-1.4.8l-4.2 13.2c-7 .1-13.5 2-18.5 5-1.3-1.1-2.9-1.7-4.6-1.7-3.9 0-7 3.2-7 7 0 2.5 1.4 4.8 3.5 6-.1.7-.1 1.4-.1 2 0 5 2.9 9.7 8.3 13.2 1.7 1.1 3.5 2 5.6 2.8-.1-.2 14.4 5.8 27.3-.2zm7.3-47c1.8 0 3.5 1.5 3.5 3.5 0 1.8-1.5 3.5-3.5 3.5-1.8 0-3.5-1.5-3.5-3.5s1.6-3.5 3.5-3.5zm-49.5 23c0-2.5 2-4.6 4.6-4.6 1 0 2 .3 2.7.8-2.7 2.1-4.6 4.6-5.6 7.4a4.6 4.6 0 0 1-1.7-3.6zM32 55.4c-13.9 0-25.2-7.3-25.2-16S18.1 23.3 32 23.3s25.2 7.3 25.2 16S45.9 55.4 32 55.4zm26.9-20.6c-1-2.7-2.9-5.2-5.6-7.4.8-.6 1.7-.8 2.7-.8 2.5 0 4.6 2 4.6 4.6-.1 1.5-.7 2.8-1.7 3.6z" })));
};

var SvgReload = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M8.4 29c.3 0 .7-.1 1-.2l11.1-3.9c1.2-.4 1.8-1.7 1.4-2.9-.4-1.2-1.7-1.8-2.9-1.4L12.1 23c3.3-8.6 11.7-14.4 21.3-14.4 10.5 0 19.6 7 22.2 17 .3 1.2 1.5 1.9 2.7 1.6 1.2-.3 1.9-1.5 1.6-2.7-3.1-12-14-20.4-26.6-20.4-11.2 0-21.1 6.6-25.2 16.5l-2.1-6c-.4-1.2-1.7-1.8-2.9-1.4-1.2.4-1.8 1.7-1.4 2.9L5.5 27c.6 1.3 1.7 2 2.9 2zM62.1 49.7 58 39c-.3-.7-.8-1.3-1.5-1.6-.7-.3-1.5-.3-2.2 0l-11 4.2c-1.2.4-1.7 1.7-1.3 2.9.4 1.2 1.7 1.7 2.9 1.3l6.9-2.6c-4 7.3-11.8 12.1-20.5 12.1-9.9 0-18.6-6.2-21.7-15.4-.4-1.2-1.7-1.8-2.8-1.4-1.2.4-1.8 1.7-1.4 2.8 3.7 11 14.1 18.4 25.9 18.4 10.3 0 19.6-5.7 24.3-14.5l2.3 6.1c.3.9 1.2 1.4 2.1 1.4.3 0 .5 0 .8-.2 1.2-.3 1.7-1.6 1.3-2.8z" })));
};

var SvgRemoveFile = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M38.6 22.1H25.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h13.2c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" }),
        React__namespace.createElement("path", { d: "M49.5 1.8h-35c-3.4 0-6.1 2.7-6.1 6.1V40c0 1.5.6 2.9 1.7 3.9l18 17c1 1 2.3 1.5 3.7 1.5h17.6c3.4 0 6.1-2.7 6.1-6.1V7.9c.1-3.4-2.7-6.1-6-6.1zM16.2 43.4h11.7c.5 0 .9.4.9.8v11L16.2 43.4zm34.9 12.7c0 .9-.7 1.6-1.6 1.6H33.3V44.2c0-2.9-2.4-5.3-5.4-5.3h-15v-31c0-.9.7-1.6 1.6-1.6h34.9c.9 0 1.6.7 1.6 1.6v48.2z" })));
};

var SvgReply = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M30.3 56.9c-.8 0-1.6-.3-2.3-.8L4.1 36.9c-1.5-1.2-2.4-3-2.4-4.9 0-1.9.9-3.7 2.4-4.9L28 7.9c1.1-.9 2.6-1 3.8-.4 1.3.6 2 1.9 2 3.3V21c8.1 1.3 15.5 4.9 21.1 10.4 3.9 4 5.8 7.7 6.9 13.3.2 1.2.4 3.4.4 6.3 0 1.3-.7 2.6-1.9 3.2-1.2.6-2.6.6-3.7-.1-8.4-5.4-16.2-8.7-22.8-9.7v9c0 1.4-.8 2.6-2 3.3-.5.1-1 .2-1.5.2zm-.9-44.3L7 30.6c-.7.4-.8 1.1-.8 1.4s.1.9.7 1.4l22.4 18v-9.6c0-.6.3-1.2.7-1.6.5-.4 1.1-.7 1.7-.6 9.3.6 19 5.4 26 9.8-.1-2.3-.2-3.4-.3-3.8-.9-4.7-2.4-7.6-5.7-11-5.3-5.2-12.5-8.6-20.4-9.4-1.1-.1-2-1.1-2-2.2V12.6z" })));
};

var SvgRestaurant = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M45.9 37.4h-5c-2 0-3.6 1.6-3.6 3.6v5c0 2 1.6 3.6 3.6 3.6h5c2 0 3.6-1.6 3.6-3.6v-5c0-2-1.6-3.6-3.6-3.6zM45 45h-3.1v-3.1H45V45z" }),
        React__namespace.createElement("path", { d: "M59.7 20.6v-1.2c0-.4-.1-.8-.3-1.1L51.8 4.9c-1.1-1.9-3.1-3.1-5.3-3.1h-29c-2.2 0-4.2 1.2-5.3 3.1L4.6 18.3v.1c0 .1-.1.2-.1.3-.1.2-.2.5-.2.8v36.8c0 3.4 2.7 6.1 6.1 6.1h43.1c3.4 0 6.1-2.7 6.1-6.1l.1-35.7zm-30.1 1c-.4 1.8-2.1 3.1-4 3.1s-3.5-1.3-4-3.1h8zM16.1 7.1c.3-.5.8-.8 1.4-.8h29c.6 0 1.1.3 1.4.8l5.6 10h-43l5.6-10zM55 21.6c-.4 1.8-2 3.1-4 3.1-1.9 0-3.5-1.3-4-3.1h8zm-12.7 0c-.4 1.8-2 3.1-4 3.1s-3.5-1.3-4-3.1h8zm-25.4 0c-.4 1.8-2 3.1-4 3.1-1.9 0-3.5-1.3-4-3.1h8zM19 57.8V42.3c0-.2.2-.4.4-.4h4.8c.2 0 .4.2.4.4v15.4H19zm34.6 0H29.2V42.3c0-2.7-2.2-4.9-4.9-4.9h-4.8c-2.7 0-4.9 2.2-4.9 4.9v15.4h-4.1c-.9 0-1.6-.7-1.6-1.6v-28c1.2.7 2.6 1 4.1 1 2.5 0 4.8-1.1 6.4-2.8 1.6 1.7 3.8 2.8 6.4 2.8 2.5 0 4.8-1.1 6.4-2.8 1.6 1.7 3.8 2.8 6.4 2.8 2.5 0 4.8-1.1 6.4-2.8 1.6 1.7 3.8 2.8 6.4 2.8 1.5 0 2.9-.4 4.1-1v28c-.3.9-1.1 1.7-1.9 1.7z" })));
};

var SvgRevenue = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M61.9 44.8c-1.1-3.4-4.7-5.3-8.1-4.4l-12.1 2.9c-.3-2.9-2.6-5.3-5.8-5.8H23.1c-1-1.5-2.6-2.5-4.6-2.5H8c-3.4 0-6.3 2.8-6.3 6.3v12.4C1.7 57.1 4.5 60 8 60h10.5c1.5 0 3-.6 4-1.7.2-.2.3-.4.5-.6 2.9 1.4 6 2.2 9.1 2.2 1.9 0 3.8-.3 5.6-.8L53 54.5l4.3-1.3c1.7-.5 3.2-1.6 4.1-3.2.9-1.5 1.1-3.4.5-5.2zM19.3 54.9c-.2.2-.5.3-.8.3H8c-1 0-1.8-.8-1.8-1.8V41.1c0-1 .8-1.8 1.8-1.8h10.7c.5 0 .9.4.9.9v14c0 .4-.2.6-.3.7zm38.2-7c-.3.5-.7.9-1.3 1l-4.4 1.3-15.2 4.3c-3.9 1.1-8 .7-11.6-1.1l-.9-.5v-11h11.5c1.1.2 1.8 1 1.8 1.9v.5l-3.4.8c-1.2.3-2 1.5-1.7 2.7.3 1.2 1.5 2 2.7 1.7l20-4.8c1.1-.3 2.3.3 2.7 1.4.1.6.1 1.3-.2 1.8zM47.3 21.5h5.1c1.5 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8h-7.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h2.8v.3c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-.3h.3c4 0 7.3-3.3 7.3-7.3s-3.3-7.3-7.3-7.3h-5.1c-1.5 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8h7.6c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-2.8v-.4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v.3h-.3c-4 0-7.3 3.3-7.3 7.3.1 4.1 3.4 7.4 7.4 7.4z" })));
};

var SvgRoad = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m63.1 53.6-11-44.9C51.7 7.2 50.2 6 48.6 6H15.4c-1.6 0-3.1 1.1-3.5 2.7L.9 53.6c-.3 1.1 0 2.2.6 3 .7.9 1.7 1.4 2.8 1.4h55.4c1.1 0 2.1-.5 2.8-1.4s.9-2 .6-3zM32 46.8c-1.2 0-2.2 1-2.2 2.2v4.4H13.7l10.1-42.9h6v5c0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2v-5h6l10.1 42.9H34.2V49c0-1.2-1-2.2-2.2-2.2zM16.1 10.5h3L9 53.5H5.5l10.6-43zm38.9 43-10.1-43h3l10.6 42.9H55z" }),
        React__namespace.createElement("path", { d: "M32 30.6c1.2 0 2.2-1 2.2-2.2v-4.9c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2v4.9c0 1.2 1 2.2 2.2 2.2zM34.2 36.3c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2v4.9c0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2v-4.9z" })));
};

var SvgRocket = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m61.4 19.5-8.2-8.2-.3-.3c-.6-.4-1.2-.6-1.8-.6l-12.9 1.1C28.5 3.4 16.3-.1 6 2.7 4.4 3.1 3.1 4.4 2.7 6c-2.8 10.2.7 22.5 8.9 32.1l-1.1 12.7v.2c0 .6.2 1.3.6 1.8l8.5 8.6c.6.6 1.3.9 2.1.9.3 0 .6 0 .8-.1 1-.3 1.8-1.2 2.1-2.2l1.2-10.7c1.4.7 2.8 1.3 4.2 1.8.5.2 1 .3 1.5.3 1.3 0 2.5-.5 3.4-1.4l14.9-14.9c1.3-1.3 1.8-3.3 1.2-5-.5-1.4-1.1-2.8-1.8-4.2l10.5-1.2h.2c1.1-.2 1.9-1 2.2-2.1.3-1.2.1-2.3-.7-3.1zM20.4 56 15 50.5l.7-8.1c1.8 1.6 3.7 3.1 5.7 4.4l-1 9.2zm26.2-24.2L31.8 46.6c-.1.1-.2.1-.3.1-5.2-1.8-10.2-5-14.3-9.1C8.4 28.7 4.4 16.8 7 7.2c.1-.1.1-.2.2-.2 2-.5 4-.8 6.1-.8 8.3 0 17.3 3.9 24.2 10.9 4.1 4.1 7.3 9.1 9.1 14.3.1.2.1.3 0 .4zm.2-10.3c-1.3-2-2.8-4-4.4-5.8l8.1-.7 5.4 5.4-9.1 1.1zM55.3 40.2c-.3-.2-1.4-.7-2.6.3-1 .8-5.7 5.5-6.6 6.4-6.4 6.4-6.4 6.4-6 7.8.1.4.3.8.6 1 3.2 3.2 8.1 3.9 11.8 3.9 2.8 0 4.9-.4 5.1-.5.9-.2 1.6-.9 1.8-1.8.1-.5 2.2-11.2-3.5-16.9-.3 0-.5-.1-.6-.2zm-.2 14.9c-2.6.3-6.6.3-9.6-1.2 2.2-2.2 6.1-6.2 8.3-8.3 1.5 2.8 1.5 6.9 1.3 9.5z" }),
        React__namespace.createElement("path", { d: "M26.1 17.8c-4.6 0-8.3 3.7-8.3 8.3s3.7 8.3 8.3 8.3 8.3-3.7 8.3-8.3-3.7-8.3-8.3-8.3zm0 12.2c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8S30 24 30 26.1 28.2 30 26.1 30z" })));
};

var SvgRssFeed = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M5.9 1.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3c28.6 0 51.8 23 51.8 51.2 0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3C62.3 26.7 37 1.8 5.9 1.8z" }),
        React__namespace.createElement("path", { d: "M5.9 15.2c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3c21.4 0 38.7 17 38.7 37.8 0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3c0-23.5-19.4-42.4-43.3-42.4z" }),
        React__namespace.createElement("path", { d: "M5.9 27c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3c14.6 0 26.5 11.7 26.5 26 0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3C36.9 40.6 23 27 5.9 27z" }),
        React__namespace.createElement("path", { d: "M5.9 39.1c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3c7.7 0 13.9 6.2 13.9 13.8 0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3c0-10.1-8.3-18.4-18.5-18.4z" }),
        React__namespace.createElement("path", { d: "M8.3 49.1c-3.6 0-6.6 3-6.6 6.6s2.9 6.6 6.6 6.6 6.6-3 6.6-6.6-3-6.6-6.6-6.6zm0 8.7c-1.1 0-2.1-.9-2.1-2.1 0-1.2.9-2.1 2.1-2.1 1.1 0 2.1.9 2.1 2.1 0 1.1-.9 2.1-2.1 2.1z" })));
};

var SvgRulerAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60.4 16.8 47.2 3.6c-1.2-1.2-2.7-1.8-4.4-1.8s-3.2.6-4.4 1.8L3.6 38.3c-1.2 1.2-1.8 2.7-1.8 4.4s.6 3.2 1.8 4.4l13.2 13.2c1.2 1.2 2.7 1.8 4.4 1.8 1.7 0 3.2-.7 4.4-1.8l34.7-34.7c1.2-1.2 1.8-2.8 1.8-4.4.1-1.6-.5-3.2-1.7-4.4zm-3.2 5.7L22.5 57.2c-.7.7-1.8.7-2.5 0L6.8 44c-.3-.3-.5-.8-.5-1.2s.2-.9.5-1.2L9.4 39l9 9c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2l-9-9 3.6-3.6 5.4 5.4c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2L19.4 29l3.6-3.6 9 9c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2l-9-9 3.6-3.6 5.4 5.4c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2L33 15.3l3.6-3.6 9 9c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2l-9-9 1.7-1.7c.3-.3.8-.5 1.2-.5s.9.2 1.2.5L57.2 20c.3.3.5.8.5 1.2 0 .5-.2 1-.5 1.3z" })));
};

var SvgRulerPencil = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M51.7 1.8h-4.9c-4.2 0-7.6 3.4-7.6 7.6V48c0 .4.1.8.3 1.2l7 11.6c.6 1 1.6 1.6 2.8 1.6s2.2-.6 2.8-1.6l7-11.6c.2-.4.3-.8.3-1.2V9.4c-.1-4.2-3.5-7.6-7.7-7.6zm-4.9 4.4h4.9c1.7 0 3.1 1.4 3.1 3.1V12H43.7V9.4c0-1.7 1.4-3.2 3.1-3.2zm2.5 50.3-5.6-9.2V16.6h11.1v30.7l-5.5 9.2zM23.6 1.9H10.9c-3.4 0-6.2 2.8-6.2 6.2v47.7c0 3.4 2.8 6.2 6.2 6.2h12.7c3.4 0 6.2-2.8 6.2-6.2V8.1c.1-3.4-2.7-6.2-6.2-6.2zm1.8 54c0 1-.8 1.8-1.8 1.8H10.9c-1 0-1.8-.8-1.8-1.8v-3.5h7c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-7v-5h2c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-2v-4.9h7c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-7v-4.9h2c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-2v-4.9h7c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-7V8.1c0-1 .8-1.8 1.8-1.8h12.7c1 0 1.8.8 1.8 1.8v47.8z" })));
};

var SvgRuler = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M41.1 1.8H22.9c-3.4 0-6.2 2.8-6.2 6.2v48c0 3.4 2.8 6.2 6.2 6.2h18.2c3.4 0 6.2-2.8 6.2-6.2V8c.1-3.4-2.8-6.2-6.2-6.2zM42.9 56c0 1-.8 1.8-1.8 1.8H22.9c-1 0-1.8-.8-1.8-1.8v-3.5h12.5c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H21.1V43h7.4c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-7.4v-4.9h12.5c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H21.1v-4.9h7.4c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-7.4v-4.9h12.5c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H21.1V8c0-1 .8-1.8 1.8-1.8h18.2c1 0 1.8.8 1.8 1.8v48z" })));
};

var SvgRupee = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M52.4 17H39.2c-.4-4-1.9-7.9-4.5-10.8h17.7c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H11.6c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h12.7c6.1 0 9.6 5.1 10.3 10.8h-23c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h22.8c-2 5.5-10.9 9.7-17 9.7-.9 0-1.7.5-2 1.3-.4.8-.2 1.7.3 2.4l22.2 26.5c.4.5 1.1.8 1.7.8.5 0 1-.2 1.4-.5 1-.8 1.1-2.2.3-3.2L21.9 35.2c7.4-1.5 15.7-6.6 17.2-13.7h13.3c1.2 0 2.2-1 2.2-2.2s-1-2.3-2.2-2.3z" })));
};

var SvgSad = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 .8C14.8.8.8 14.8.8 32s14 31.3 31.3 31.3 31.3-14 31.3-31.3S49.2.8 32 .8zm0 58c-14.8 0-26.8-12-26.8-26.8S17.3 5.3 32 5.3s26.8 12 26.8 26.8-12 26.7-26.8 26.7z" }),
        React__namespace.createElement("circle", { cx: 20, cy: 22.8, r: 4 }),
        React__namespace.createElement("circle", { cx: 44, cy: 22.8, r: 4 }),
        React__namespace.createElement("path", { d: "M32 40c-5.5 0-10.7 2-14.7 5.8-.9.8-1 2.3-.1 3.2.8.9 2.3 1 3.2.1 3.2-2.9 7.3-4.6 11.6-4.6s8.5 1.6 11.6 4.6c.4.4 1 .6 1.5.6.6 0 1.2-.2 1.6-.7.8-.9.8-2.3-.1-3.2C42.7 42.1 37.5 40 32 40z" })));
};

var SvgSafari = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M32 1C14.88 1 1 14.88 1 32c0 17.12 13.88 31 31 31 17.12 0 31-13.88 31-31C63 14.88 49.12 1 32 1Zm22.788 16.278-.436-.651c.145.215.29.43.436.651Zm-1.683-2.315-.265-.33c.094.108.183.222.265.33Zm-3.751-3.815-.33-.266c.12.095.222.184.33.266Zm-1.974-1.5-.652-.436c.215.145.43.29.652.436ZM35.018 5.043l-.652-.064c.215.02.43.038.652.064Zm-5.39-.07-.652.063c.215-.019.43-.038.652-.063Zm-12.35 4.239-.651.436c.215-.145.43-.29.651-.436Zm-2.315 1.683-.317.253c.108-.082.21-.171.317-.253Zm-3.815 3.751-.266.33c.095-.108.184-.216.266-.33Zm-1.5 1.974-.436.652c.145-.215.29-.43.436-.652ZM5.043 28.982l-.064.652c.02-.215.038-.43.064-.652Zm-.07 5.39.063.652a25.1 25.1 0 0 0-.063-.651Zm4.239 12.343.436.652a14.5 14.5 0 0 1-.436-.651Zm.506.76 4.833-3.233-.531-.81-4.833 3.233a26.9 26.9 0 0 1-4.119-11.527l2.891-.291-.095-.968-2.89.291c-.052-.557-.07-1.126-.083-1.696h5.814v-.967h-5.82c.012-.57.037-1.127.082-1.696l2.891.278.095-.968-2.891-.278a26.917 26.917 0 0 1 4.13-11.527l4.834 3.233.532-.81-4.846-3.207c.329-.462.651-.918 1.006-1.354l2.24 1.84.62-.752-2.24-1.841c.36-.437.752-.848 1.138-1.26l4.106 4.107.69-.69-4.106-4.106c.411-.386.822-.778 1.246-1.138l1.841 2.252.753-.62-1.84-2.24c.448-.354.898-.69 1.353-1.018l3.233 4.833.81-.531-3.233-4.834a26.9 26.9 0 0 1 11.527-4.118l.29 2.89.969-.094-.291-2.891c.556-.05 1.126-.07 1.695-.083V10.7h.968v-5.82c.57.012 1.126.037 1.696.081l-.279 2.892.968.095.279-2.892a26.917 26.917 0 0 1 11.527 4.132L43.45 14.02l.81.531 3.233-4.833c.462.329.917.652 1.354 1.006l-1.841 2.24.752.62 1.841-2.24c.437.36.848.753 1.26 1.139l-1.55 1.512-21.195 14.133-14.133 21.194-1.512 1.512a42.319 42.319 0 0 1-1.139-1.246l2.24-1.841-.614-.753-2.24 1.84a26.824 26.824 0 0 1-.999-1.36Zm1.43 1.879c-.082-.108-.171-.203-.253-.317l.253.317Zm3.498 3.498.317.253c-.108-.082-.21-.17-.317-.253Zm1.974 1.493.652.437c-.215-.14-.43-.285-.652-.437Zm12.362 4.612.652.064c-.215-.02-.43-.038-.652-.064Zm5.39.07.646-.063c-.222.019-.424.038-.645.063Zm12.356-4.239.652-.436c-.222.145-.437.29-.652.436Zm2.31-1.683.328-.265a9.956 9.956 0 0 1-.329.265Zm2.119-1.898.05-.05a12.07 12.07 0 0 1-.05.05Zm1.695-1.853.266-.33a6.046 6.046 0 0 0-.266.33Zm.424-.52-2.24-1.84-.62.753 2.24 1.84c-.36.437-.753.848-1.139 1.26l-4.106-4.106-.69.69 4.107 4.105c-.412.386-.823.779-1.247 1.14l-1.84-2.253-.753.62 1.84 2.24c-.449.347-.898.689-1.353 1.018l-3.233-4.84-.81.532 3.233 4.833a26.9 26.9 0 0 1-11.527 4.119l-.291-2.892-.968.095.291 2.892c-.557.05-1.126.07-1.696.082v-5.814h-.967v5.814a30.341 30.341 0 0 1-1.696-.082l.278-2.892-.968-.095-.278 2.892a26.916 26.916 0 0 1-11.527-4.132l3.233-4.833-.81-.531-3.207 4.833c-.462-.329-.918-.652-1.354-1.006l1.84-2.24-.752-.62-1.841 2.24c-.437-.36-.848-.753-1.26-1.139l1.526-1.512 21.194-14.133 14.133-21.194 1.512-1.512c.386.411.778.822 1.139 1.246l-2.24 1.841.62.753 2.24-1.84c.348.448.69.898 1.018 1.353l-4.846 3.233.532.81 4.833-3.233a26.9 26.9 0 0 1 4.119 11.527l-2.892.29.095.969 2.892-.291c.05.556.07 1.126.082 1.695h-5.814v.968h5.814c-.013.57-.038 1.126-.082 1.696l-2.892-.279-.095.968 2.892.279a26.916 26.916 0 0 1-4.132 11.527L49.98 43.45l-.531.81 4.833 3.233c-.316.436-.658.885-1.006 1.34Zm5.75-14.474c-.024.215-.037.436-.062.651l.063-.651Zm-4.238 12.368c-.145.215-.29.437-.436.652l.436-.652Z" }),
        React__namespace.createElement("path", { fill: "#000", d: "m27.183 5.305 1.133 5.7-.95.19-1.132-5.7.95-.19ZM36.82 58.699l-1.133-5.7.95-.19 1.132 5.7-.949.19ZM24.59 5.896l.842 2.784-.93.279-.842-2.784.93-.279ZM39.412 58.09l-.842-2.784.93-.279.842 2.784-.93.278ZM22.072 6.758l2.227 5.371-.892.373-2.227-5.37.892-.374ZM41.938 57.242l-2.227-5.37.892-.374 2.227 5.371-.892.373ZM18.777 8.309l.854-.455 1.373 2.562-.854.455-1.373-2.562ZM45.203 55.691l-.854.456-1.372-2.563.854-.455 1.372 2.562ZM8.3 18.79l2.561 1.372-.455.854-2.562-1.373.455-.854ZM55.687 45.21l-2.562-1.373.456-.855 2.562 1.373-.456.854ZM12.129 24.289l-5.371-2.227.373-.892 5.371 2.227-.373.892ZM51.881 39.707l5.371 2.227-.373.892-5.371-2.22.373-.899ZM6.18 23.668l2.784.841-.278.93-2.784-.841.279-.93ZM57.815 40.33l-2.784-.841.279-.93 2.783.841-.278.93ZM5.487 26.236l5.7 1.133-.19.949-5.7-1.133.19-.949ZM58.501 37.769l-5.7-1.133.19-.949 5.7 1.133-.19.949ZM5.297 36.814l5.7-1.132.19.949-5.7 1.132-.19-.949ZM58.69 27.185l-5.7 1.133-.19-.95 5.701-1.132.19.95ZM5.902 39.414l2.784-.842.278.93-2.783.842-.279-.93ZM58.097 24.598l-2.784.841-.278-.93 2.784-.841.278.93ZM7.127 42.832l-.373-.892 5.371-2.227.373.892-5.37 2.227ZM56.871 21.176l.373.892-5.37 2.227-.374-.892 5.371-2.227ZM8.315 45.215l-.456-.854 2.563-1.373.455.854-2.562 1.373ZM55.699 18.79l.456.853-2.563 1.373-.455-.854 2.562-1.373ZM19.64 56.147l-.855-.456 1.373-2.562.854.455-1.373 2.563ZM44.357 7.848l.854.455-1.372 2.562-.855-.455 1.373-2.562ZM21.176 56.87l2.227-5.372.892.373-2.22 5.371-.9-.373ZM42.83 7.122l-2.227 5.365-.892-.374 2.227-5.37.892.379ZM24.59 58.097l-.93-.278.842-2.784.93.279-.842 2.783ZM39.408 5.896l.93.279-.842 2.784-.93-.279.842-2.784ZM27.183 58.693l-.949-.19 1.133-5.7.949.19-1.133 5.7ZM36.812 5.295l.95.19-1.133 5.7-.95-.19 1.133-5.7Z" })));
};

var SvgSave = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m58.6 11.5-9.7-8.9-.2-.1c-.7-.5-1.5-.8-2.2-.8H11.9c-4.2 0-7.6 3.4-7.6 7.6v45.2c0 4.2 3.4 7.6 7.6 7.6h40.2c4.2 0 7.6-3.4 7.6-7.6V14.1c0-.9-.3-1.8-1.1-2.6zM39.9 6.3V12H19V6.3h20.9zM21.5 57.8V39.3h21v18.4h-21zm33.7-3.2c0 1.7-1.4 3.1-3.1 3.1H47V38.4c0-1.9-1.6-3.5-3.5-3.5h-23c-1.9 0-3.5 1.6-3.5 3.5v19.4h-5.1c-1.7 0-3.1-1.4-3.1-3.1V9.4c0-1.7 1.4-3.1 3.1-3.1h2.6V13c0 1.9 1.6 3.5 3.5 3.5h22.9c1.9 0 3.5-1.6 3.5-3.5V6.3h1.8l9 8.3v40z" }),
        React__namespace.createElement("path", { d: "M36.1 42.5h-8.2c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h8.2c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM36.1 50.1h-8.2c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h8.2c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" })));
};

var SvgSchoolBenchAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60 16.7c-1.2 0-2.3 1-2.3 2.3v7.9H42.2c-2.6 0-4.8 2.2-4.8 4.8v5.1c0 1.8 1 3.4 2.5 4.2v8.5c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-7.9h13.3v7.9c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V18.9c-.1-1.2-1.2-2.2-2.4-2.2zM41.9 31.6c0-.2.1-.3.3-.3h15.6V37H42.2c-.2 0-.3-.1-.3-.3v-5.1zM30.8 18.8 7.5 12.4c-1.3-.4-2.7-.1-3.9.8-1.2.9-1.9 2.3-1.9 3.9V22c0 2.2 1.4 4.1 3.4 4.6l1.7.5v22.4c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V28.3L24.7 32v17.5c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V33.1h.5c1 0 1.9-.3 2.7-.9 1.2-.9 1.9-2.3 1.9-3.9v-4.9c-.1-2.1-1.6-4-3.6-4.6zm-1 9.6c0 .2-.1.3-.1.3L6.4 22.3s-.1-.1-.1-.3v-4.9c0-.2.1-.3.1-.3l23.3 6.4s.1.1.1.3v4.9z" })));
};

var SvgSchoolBench = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m32.8 26.1-28-10.2c-1.2-.4-2.5.2-2.9 1.3-.4 1.2.2 2.5 1.3 2.9l3.6 1.3V46c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V23.1l13.3 4.8V46c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V29.5l2.1.8c.3.1.5.1.8.1.9 0 1.8-.6 2.1-1.5.2-1.1-.4-2.4-1.5-2.8zM60 15.8c-1.2 0-2.3 1-2.3 2.3v15.6H47.4c-2.7 0-5 2.2-5 5V46c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-7.5c0-.3.2-.5.5-.5h10.3v8c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V18c-.1-1.2-1.2-2.2-2.4-2.2z" })));
};

var SvgScooter = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M49.8 6.8H39c-1-2.9-3.7-5.1-7-5.1s-6 2.1-7 5.1H14.2C13 6.8 12 7.8 12 9s1 2.2 2.2 2.2h7.6c-2.9 2.1-4.7 5.5-4.7 9.2v21.1c0 4.9 3.1 9.2 7.6 10.7V56c0 3.4 2.8 6.2 6.2 6.2h2.2c3.4 0 6.2-2.8 6.2-6.2v-3.7c4.5-1.5 7.6-5.8 7.6-10.7V20.5c0-3.7-1.8-7.1-4.7-9.2h7.6c1.2 0 2.2-1 2.2-2.2s-.9-2.3-2.2-2.3zM32 6.2c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8-2.8-1.3-2.8-2.8 1.2-2.8 2.8-2.8zm1.1 51.6h-2.2c-1 0-1.8-.8-1.8-1.8v-7.3c0-1 .8-1.8 1.8-1.8h2.2c1 0 1.8.8 1.8 1.8V56c-.1 1-.8 1.8-1.8 1.8zm9.4-16.2c0 2.5-1.3 4.6-3.3 5.8-.6-2.8-3.1-4.9-6.1-4.9h-2.2c-3 0-5.5 2.1-6.1 4.9-2-1.2-3.3-3.4-3.3-5.8V20.5c0-3.1 2.1-5.7 5-6.6 1.3 1.5 3.3 2.5 5.5 2.5s4.1-1 5.5-2.5c2.9.8 5 3.5 5 6.6v21.1z" })));
};

var SvgScrollDown = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m38 40.6-6 6-6-6c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l7.6 7.6c.4.4 1 .7 1.6.7s1.1-.2 1.6-.7l7.6-7.6c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0z" }),
        React__namespace.createElement("path", { d: "M41.8 1.8H22.2c-5.7 0-10.3 4.6-10.3 10.3v40c0 5.7 4.6 10.3 10.3 10.3h19.6c5.7 0 10.3-4.6 10.3-10.3V12c0-5.7-4.6-10.2-10.3-10.2zM47.6 52c0 3.2-2.6 5.8-5.8 5.8H22.2c-3.2 0-5.8-2.6-5.8-5.8V12c0-3.2 2.6-5.8 5.8-5.8h19.6c3.2 0 5.8 2.6 5.8 5.8v40z" }),
        React__namespace.createElement("path", { d: "M32 26.2h.4c.1 0 .3-.1.4-.1.1-.1.3-.1.4-.2l.3-.3c.4-.4.7-1 .7-1.6 0-.6-.2-1.2-.7-1.6l-.3-.3c-.1-.1-.3-.2-.4-.2-.1 0-.3-.1-.4-.1-.7-.1-1.5.1-2 .6-.4.4-.7 1-.7 1.6 0 .6.2 1.2.7 1.6.4.3 1 .6 1.6.6zM29.9 34.4c.1.1.1.3.2.4.1.1.2.2.3.4l.3.3c.1.1.3.2.4.2.1.1.3.1.4.1h.4c.6 0 1.2-.2 1.6-.6.1-.1.2-.2.3-.4.1-.1.1-.3.2-.4.1-.1.1-.3.1-.4v-.4c0-.6-.2-1.2-.7-1.6-.8-.8-2.3-.8-3.2 0-.4.4-.7 1-.7 1.6v.4c.3.1.4.3.4.4z" })));
};

var SvgSearchAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M61.4 55.7 44.9 42.3c6.8-9.3 6.1-22.6-2.4-31-4.5-4.5-10.5-7-16.9-7s-12.4 2.5-16.9 7c-9.3 9.3-9.3 24.5 0 33.8 4.5 4.5 10.5 7 16.9 7 6.1 0 11.8-2.3 16.3-6.4l16.7 13.5c.4.3.9.5 1.4.5.7 0 1.3-.3 1.7-.8.8-1 .7-2.4-.3-3.2zm-35.8-8.1c-5.2 0-10-2-13.7-5.7-7.6-7.6-7.6-19.9 0-27.4 3.7-3.7 8.5-5.7 13.7-5.7 5.2 0 10 2 13.7 5.7 7.6 7.6 7.6 19.9 0 27.4-3.6 3.7-8.5 5.7-13.7 5.7z" })));
};

var SvgSearch = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60.1 49.5 49.8 39.2c-1.4-1.4-3.3-2.2-5.3-2.2-1.2 0-2.4.3-3.4.8l-5.2-5.2c5.9-7.5 5.4-18.4-1.5-25.4C27-.1 14.8-.1 7.4 7.4-.1 14.9-.1 27 7.4 34.5 11.1 38.1 16 40 20.9 40c4.2 0 8.4-1.4 11.8-4.1l5.2 5.2c-.5 1-.8 2.2-.8 3.4 0 2 .8 3.9 2.2 5.3l10.3 10.3c1.5 1.5 3.4 2.2 5.3 2.2s3.8-.7 5.3-2.2c2.8-2.9 2.8-7.7-.1-10.6zM10.5 31.2c-5.7-5.7-5.7-15 0-20.7 2.9-2.9 6.6-4.3 10.3-4.3 3.7 0 7.5 1.4 10.4 4.3 5.7 5.7 5.7 15 0 20.7-5.7 5.7-15 5.7-20.7 0zm46.4 25.7c-1.1 1.1-3 1.2-4.2 0L42.4 46.6c-.6-.6-.9-1.3-.9-2.1s.3-1.5.9-2.1 1.3-.9 2.1-.9 1.5.3 2.1.9l10.3 10.3c1.1 1.2 1.1 3 0 4.2z" })));
};

var SvgSelectCursor = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m59.2 47.1-14.9-5.6c-1-.4-2.1-.1-2.8.6-.7.7-1 1.8-.6 2.8l.3.7c-.3-.1-.5-.2-.8-.2h-3c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h3c.9 0 1.6-.5 2-1.2l4.2 11.1c.3.8 1 1.4 1.9 1.5h.2c.8 0 1.5-.4 1.9-1.1l2.2-3.7 2.5 2.5c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2L56 53.2l3.7-2.1c.8-.4 1.2-1.3 1.1-2.1-.3-.9-.8-1.6-1.6-1.9zm-8.9 4.5L49 53.8l-2.5-6.7 6.7 2.5-2.1 1.2c-.3.2-.6.5-.8.8zM30 45.4h-4.8c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2H30c1.2 0 2.2-1 2.2-2.2s-.9-2.2-2.2-2.2zM18 45.4h-3c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h3c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2zM8.3 45.4h-.4V45c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v2.7c0 1.2 1 2.2 2.2 2.2h2.7c1.2 0 2.2-1 2.2-2.2s-1.1-2.3-2.3-2.3zM8.3 2.8H5.6c-1.2 0-2.2 1-2.2 2.2v2.7c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-.5h.4c1.2 0 2.2-1 2.2-2.2s-.9-2.2-2.1-2.2zM45.6 7.2h.4v.4c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V5c0-1.2-1-2.2-2.2-2.2h-2.7c-1.2 0-2.2 1-2.2 2.2s1.1 2.2 2.3 2.2zM37.3 7.2h3c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-3c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2zM30 2.8h-4.8C24 2.8 23 3.8 23 5s1 2.2 2.2 2.2H30c1.2 0 2.2-1 2.2-2.2s-.9-2.2-2.2-2.2zM18 2.8h-3c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h3c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2zM48.3 33.9c-1.2 0-2.2 1-2.2 2.2v3c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-3c.1-1.2-1-2.2-2.2-2.2zM50.6 24.1c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v4.8c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-4.8zM50.6 13.8c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v3c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-3zM5.6 40.8c1.2 0 2.2-1 2.2-2.2v-3c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v3c0 1.2 1 2.2 2.2 2.2zM5.6 30.5c1.2 0 2.2-1 2.2-2.2v-4.8c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v4.8c0 1.2 1 2.2 2.2 2.2zM5.6 18.4c1.2 0 2.2-1 2.2-2.2v-3c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v3c0 1.2 1 2.2 2.2 2.2z" })));
};

var SvgSeo = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M57 6.6H7C3.6 6.6.7 9.4.7 12.9v26.4c0 3.4 2.8 6.3 6.3 6.3h22.8V53h-11c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h26.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H34.3v-7.4H57c3.4 0 6.3-2.8 6.3-6.3V12.8c0-3.4-2.9-6.2-6.3-6.2zm1.8 32.6c0 1-.8 1.8-1.8 1.8H7c-1 0-1.8-.8-1.8-1.8V12.8c0-1 .8-1.8 1.8-1.8h50c1 0 1.8.8 1.8 1.8v26.4z" }),
        React__namespace.createElement("path", { d: "M16.1 20.4h4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-4c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2c.9 0 1.7.8 1.7 1.7 0 .9-.8 1.7-1.7 1.7h-4c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h4c3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2-.9 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7zM31.9 20.4h4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-4c-3.4 0-6.2 2.8-6.2 6.2v8c0 3.4 2.8 6.2 6.2 6.2h4c1.2 0 2.3-1 2.3-2.3 0-1.2-1-2.3-2.3-2.3h-4c-.9 0-1.7-.8-1.7-1.7v-1.7h5.7c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-5.7v-1.7c0-.8.8-1.5 1.7-1.5zM48.9 15.9h-2.3c-2.8 0-5.1 2.3-5.1 5.1v10.2c0 2.8 2.3 5.1 5.1 5.1h2.3c2.8 0 5.1-2.3 5.1-5.1V20.9c-.1-2.8-2.3-5-5.1-5zm.5 15.2c0 .3-.3.6-.6.6h-2.3c-.3 0-.6-.3-.6-.6V20.9c0-.3.3-.6.6-.6h2.3c.3 0 .6.3.6.6v10.2z" })));
};

var SvgService = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M58.7 39.7h-1.5c-1.5-12.5-11.1-22.2-22.9-23.3v-2.5h1.1c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-6.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h1.1v2.5c-11.9 1.1-21.4 10.8-23 23.3H5.3c-2 0-3.6 1.6-3.6 3.6v5.2c0 3.4 2.7 6.1 6.1 6.1h48.3c3.4 0 6.1-2.7 6.1-6.1v-5.2c.1-2-1.6-3.6-3.5-3.6zM32 20.7c10.4 0 19.1 8.1 20.7 18.9H11.3C12.9 28.9 21.6 20.7 32 20.7zm25.8 27.8c0 .9-.7 1.6-1.6 1.6H7.9c-.9 0-1.6-.7-1.6-1.6v-4.3h51.5v4.3z" })));
};

var SvgShareAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M13.2 24.2c.4.4 1 .6 1.5.6.6 0 1.2-.2 1.6-.7.9-.9.8-2.3-.1-3.2l-5.7-5.4h11.9c5.4 0 9.8 4.4 9.8 9.8v15c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-15c0-7.9-6.4-14.3-14.3-14.3h-12l5.8-5.4c.9-.8 1-2.3.1-3.2-.8-.9-2.3-1-3.2-.1L4 10.8c-.7.6-1 1.5-1 2.3 0 .9.4 1.7 1 2.4l9.2 8.7z" }),
        React__namespace.createElement("path", { d: "M59 38.1c-1.2 0-2.3 1-2.3 2.3v14.5c0 1.6-1.3 2.9-2.9 2.9H10.2c-1.6 0-2.9-1.3-2.9-2.9V40.3c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v14.5c0 4.1 3.3 7.4 7.4 7.4h43.7c4.1 0 7.4-3.3 7.4-7.4V40.3c.1-1.2-.9-2.2-2.2-2.2z" })));
};

var SvgShare = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M29.5 42.6c1.2 0 2.3-1 2.3-2.3v-15c0-5.4 4.4-9.8 9.8-9.8h11.9L47.7 21c-.9.9-.9 2.3-.1 3.2.4.5 1 .7 1.6.7.6 0 1.1-.2 1.5-.6l9.2-8.7c.6-.6 1-1.5 1-2.4 0-.9-.4-1.7-1-2.3l-9.2-8.5c-.9-.8-2.3-.8-3.2.1-.8.9-.8 2.3.1 3.2l5.8 5.4h-12c-7.9 0-14.3 6.4-14.3 14.3v15c.2 1.2 1.2 2.2 2.4 2.2z" }),
        React__namespace.createElement("path", { d: "M59 38.1c-1.2 0-2.3 1-2.3 2.3v14.5c0 1.6-1.3 2.9-2.9 2.9H10.2c-1.6 0-2.9-1.3-2.9-2.9V40.3c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v14.5c0 4.1 3.3 7.4 7.4 7.4h43.7c4.1 0 7.4-3.3 7.4-7.4V40.3c.1-1.2-.9-2.2-2.2-2.2z" })));
};

var SvgShield = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M52 7.1 33.9 2c-1.3-.4-2.7-.4-4 0L12 7.1c-3.2.9-5.4 3.8-5.4 7.1v14.6c0 14.6 8.9 27.5 22.8 33 .8.3 1.7.5 2.6.5.9 0 1.8-.2 2.6-.5 13.8-5.5 22.7-18.4 22.7-33V14.2c.1-3.3-2.1-6.2-5.3-7.1zm.9 21.7c0 12.7-7.8 24-19.9 28.8-.6.2-1.3.2-1.9 0C19 52.8 11.2 41.5 11.2 28.8V14.2c0-1.3.9-2.4 2.1-2.8l17.9-5c.3-.1.5-.1.8-.1.3 0 .5 0 .8.1l18.1 5.1c1.2.3 2.1 1.5 2.1 2.8v14.5z" })));
};

var SvgShiftLeft = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M7.1 1.8c-1.2 0-2.2 1-2.2 2.2v56c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V4c0-1.2-1-2.2-2.2-2.2zM56.9 32.2H27l6.9-7c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0L20 32.8c-.9.9-.9 2.3 0 3.2l10.6 10.8c.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.6.9-.9.9-2.3 0-3.2l-6.8-7h29.9c1.2 0 2.2-1 2.2-2.2s-.9-2.3-2.2-2.3z" })));
};

var SvgShiftRight = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56.9 1.8c-1.2 0-2.2 1-2.2 2.2v56c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V4c.1-1.2-.9-2.2-2.2-2.2zM33.3 22c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l6.9 7H7c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h30l-6.8 7c-.9.9-.9 2.3 0 3.2.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7L44 36c.9-.9.9-2.3 0-3.2L33.3 22z" })));
};

var SvgShip = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M11.9 42.7v4.5c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-4.8c0-.2 0-.4-.1-.5l-4.1-16.6c-.1-.5 0-.9.2-1.3s.6-.7 1.1-.8L32 19.1l18.4 4.1c.5.1.9.4 1.1.8.2.4.3.9.2 1.3l-4.1 16.6c0 .2-.1.4-.1.5v4.8c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-4.5l4-16.3c.4-1.6.1-3.3-.8-4.8s-2.3-2.4-3.9-2.8l-1.9-.4V9.1c0-4-3.3-7.3-7.3-7.3H21.8c-4 0-7.3 3.3-7.3 7.3v9.3l-1.9.4c-1.7.4-3.1 1.4-3.9 2.8-.9 1.4-1.2 3.1-.8 4.8l4 16.3zM19 9.1c0-1.6 1.3-2.8 2.8-2.8h20.4c1.6 0 2.8 1.3 2.8 2.8v8.3l-12.5-2.8c-.3-.1-.7-.1-1 0L19 17.4V9.1zM56.2 52.7c-3.1 0-4.7 2-5.8 3.4-1 1.3-1.4 1.7-2.3 1.7s-1.3-.4-2.3-1.7c-1.1-1.4-2.7-3.4-5.8-3.4-3.1 0-4.7 2-5.8 3.4-1 1.3-1.4 1.7-2.3 1.7s-1.3-.4-2.3-1.7c-1.1-1.4-2.7-3.4-5.8-3.4s-4.7 2-5.8 3.4c-1 1.3-1.4 1.7-2.3 1.7-.8 0-1.3-.4-2.3-1.7-1.1-1.4-2.7-3.4-5.8-3.4-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2c.8 0 1.3.4 2.3 1.7 1.1 1.4 2.7 3.4 5.8 3.4 3.1 0 4.7-2 5.8-3.4 1-1.3 1.4-1.7 2.3-1.7.9 0 1.3.4 2.3 1.7 1.1 1.4 2.7 3.4 5.8 3.4 3.1 0 4.7-2 5.8-3.4 1-1.3 1.4-1.7 2.3-1.7.9 0 1.3.4 2.3 1.7 1.1 1.4 2.7 3.4 5.8 3.4s4.7-2 5.8-3.4c1-1.3 1.4-1.7 2.3-1.7 1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2z" })));
};

var SvgShopify = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M40.401 7.996c1.195-.401 1.997-.401 1.997-.401L40.008 64 4.006 57.199S8.802 20.804 8.802 19.6c0-1.596 0-1.596 1.997-2.398.174 0 .65-.151 1.393-.388.97-.309 2.394-.762 4.205-1.216C17.6 10.402 21.602 0 29.999 0c1.203 0 2.398.393 3.2 1.997h.401c3.601 0 5.598 2.799 6.801 5.999Zm-11.336 3.638c1.402-.427 2.852-.87 4.134-1.641 0-2.398-.401-4.003-.802-5.607-1.997.802-4.395 3.2-5.598 8.004.715-.284 1.483-.518 2.266-.756ZM30.8 2.799c-.401-.401-.802-.401-1.203-.401-5.607 0-9.2 7.595-10.402 12.407.802-.2 1.602-.501 2.402-.802.8-.3 1.6-.601 2.402-.802 1.203-6.4 4.403-9.199 6.801-10.402ZM26.398 28.79c2.398 0 4.796 1.204 4.796 1.204l1.595-7.194S31.194 22 27.993 22c-8.797 0-12.8 5.598-12.8 11.597 0 4.036 2.268 5.807 4.258 7.363 1.557 1.216 2.945 2.3 2.945 4.233 0 .794-.401 2.398-2.398 2.398-2.8 0-6-2.799-6-2.799l-1.603 5.598s3.2 4.002 9.6 4.002c5.196 0 9.199-4.002 9.199-10 0-4.898-3.301-7.247-5.86-9.068-1.617-1.151-2.938-2.092-2.938-3.332 0-.802 0-3.2 4.002-3.2Zm7.996-24.405c.4 1.203.802 2.808.802 4.804v.401c.601 0 1.1-.1 1.6-.2.499-.1.998-.2 1.6-.2-.803-2.407-2.006-4.805-4.002-4.805ZM52.39 11.99c.401 0 .803 0 .803.401 0 .202 1.718 12.13 3.428 23.993 1.69 11.737 3.373 23.411 3.373 23.606l-19.2 4.003L43.19 7.995h.401l3.602 3.592s4.795.401 5.196.401Z", clipRule: "evenodd" })));
};

var SvgShoppingBasket = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56.4 19.6H54L47.5 3.2C47 2 45.7 1.5 44.6 1.9c-1.2.5-1.7 1.8-1.3 2.9l5.8 14.8H14.9l5.8-14.7c.5-1.2-.1-2.5-1.3-2.9-1.1-.5-2.4 0-2.9 1.2L10 19.6H7.6c-1.8 0-3.3 1.5-3.3 3.3V31c0 1.7 1.2 3 2.9 3.2L9.7 56c.4 3.6 3.4 6.3 7 6.3h30.6c3.6 0 6.6-2.7 7-6.3l2.5-21.8c1.6-.2 2.9-1.6 2.9-3.2v-8.2c0-1.8-1.5-3.2-3.3-3.2zM8.8 24.1h46.4v5.7H8.8v-5.7zm38.5 33.7H16.7c-1.3 0-2.4-1-2.6-2.3l-2.4-21.2h40.6l-2.4 21.2c-.2 1.3-1.3 2.3-2.6 2.3z" }),
        React__namespace.createElement("path", { d: "M21.8 38.8c-1.2 0-2.3 1-2.3 2.3v7.5c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V41c0-1.2-1-2.2-2.3-2.2zM42.2 38.8c-1.2 0-2.3 1-2.3 2.3v7.5c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V41c-.1-1.2-1.1-2.2-2.3-2.2z" })));
};

var SvgShortcode = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M30.8 24.6h7.6c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-7.6c-3.5 0-6.4 2.9-6.4 6.4V28c0 3.5 2.9 6.4 6.4 6.4h3.5c1 0 1.9.8 1.9 1.9V38c0 1-.8 1.9-1.9 1.9h-7.1c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h7.1c3.5 0 6.4-2.9 6.4-6.4v-1.6c0-3.5-2.8-6.4-6.4-6.4h-3.5c-1 0-1.9-.8-1.9-1.9v-1.6c.1-1.1.9-2 1.9-2zM17.4 20.5c-.8-1-2.2-1.1-3.2-.3L2.9 29.4c-.7.6-1.2 1.5-1.2 2.5s.4 1.8 1.2 2.4l11.4 9.2c.4.3.9.5 1.4.5.7 0 1.3-.3 1.7-.8.8-1 .6-2.4-.3-3.2L7 31.8l10.1-8.2c1-.7 1.1-2.2.3-3.1zM61.1 29.4l-11.4-9.2c-1-.8-2.4-.6-3.2.3-.8 1-.6 2.4.3 3.2l10.1 8.1L46.8 40c-1 .8-1.1 2.2-.3 3.2.4.6 1.1.8 1.8.8.5 0 1-.2 1.4-.5l11.4-9.2c.8-.6 1.2-1.5 1.2-2.5s-.5-1.8-1.2-2.4z" })));
};

var SvgShovel = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m61.6 15.1-6.4-6.4-6.4-6.4c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l4.8 4.9-2.8 2.6-.6-.6c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l.6.6L28 32.8l-4.6-4.6c-1-1-2.6-1-3.6 0L5.1 43.1C.7 47.5.7 54.8 5.1 59.2c2.1 2.2 5 3.3 8 3.3s5.9-1.2 8-3.3l14.7-14.9c1-1 1-2.6 0-3.6L31.2 36l16.5-16.6.5.5c.9.9 2.3.9 3.2 0 .9-.9.9-2.3 0-3.2l-.5-.6 2.8-2.8 4.8 4.8c.9.9 2.3.9 3.2 0 .8-.7.8-2.1-.1-3zM31.2 42.5 17.9 56c-1.3 1.3-3 2-4.8 2-1.8 0-3.5-.7-4.8-2-2.7-2.7-2.7-7.1 0-9.8l13.3-13.5 3.2 3.3-.6.6c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7l.5-.5 3.3 3.2z" })));
};

var SvgShuffle = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m61.4 45.1-7.9-8.2c-.9-.9-2.3-.9-3.2-.1-.9.9-.9 2.3-.1 3.2l4.9 5H44.7L34.3 32l10.4-13.1H55l-4.9 5c-.9.9-.8 2.3.1 3.2.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7l7.9-8.2c1.2-1.2 1.2-3.2 0-4.5l-7.9-8.2c-.9-.9-2.3-.9-3.2-.1-.9.9-.9 2.3-.1 3.2l4.9 5H44.1c-1 0-1.9.4-2.5 1.2l-10.2 13-10.2-12.8c-.6-.8-1.5-1.2-2.5-1.2H4c-1.2 0-2.3 1-2.3 2.3S2.7 19 4 19h14.1l10.5 13-10.5 13.1H4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h14.7c1 0 1.9-.4 2.5-1.2l10.2-12.7 10.2 12.7c.6.8 1.5 1.2 2.5 1.2H55l-4.9 5c-.9.9-.8 2.3.1 3.2.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7l7.9-8.2c1.2-1.3 1.2-3.3.1-4.5z" })));
};

var SvgSignalApp = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "m26.14 4.816.63 2.546c-2.479.61-4.85 1.59-7.036 2.91l-1.347-2.25a27.894 27.894 0 0 1 7.752-3.206Zm13.44 0-.63 2.546c2.478.61 4.85 1.59 7.034 2.91l1.357-2.25a27.894 27.894 0 0 0-7.762-3.206ZM8.883 17.526a27.894 27.894 0 0 0-3.207 7.752l2.547.63c.61-2.479 1.59-4.85 2.91-7.035l-2.25-1.348Zm-1.4 14.472c0-1.273.095-2.544.285-3.802l-2.595-.394a28.1 28.1 0 0 0 0 8.391L7.77 35.8a25.332 25.332 0 0 1-.285-3.802Zm39.848 23.975-1.348-2.249a25.304 25.304 0 0 1-7.026 2.91l.63 2.546a27.895 27.895 0 0 0 7.744-3.207Zm10.902-23.975c.001 1.272-.094 2.543-.284 3.802l2.594.393c.42-2.78.42-5.61 0-8.39l-2.594.393c.19 1.258.285 2.53.284 3.802Zm1.807 6.72-2.546-.63a25.306 25.306 0 0 1-2.91 7.035l2.25 1.356a27.896 27.896 0 0 0 3.206-7.761Zm-23.38 18.375c-2.52.379-5.083.379-7.604 0l-.393 2.594a28.1 28.1 0 0 0 8.391 0l-.394-2.594Zm16.625-10.04a25.47 25.47 0 0 1-5.377 5.372l1.558 2.113a28.043 28.043 0 0 0 5.932-5.915l-2.113-1.57ZM47.91 11.57a25.466 25.466 0 0 1 5.377 5.377l2.113-1.575a28.045 28.045 0 0 0-5.915-5.915L47.91 11.57Zm-35.477 5.377a25.466 25.466 0 0 1 5.377-5.377l-1.575-2.113a28.043 28.043 0 0 0-5.915 5.915l2.113 1.575Zm44.402.577-2.248 1.348a25.305 25.305 0 0 1 2.909 7.026l2.546-.63a27.895 27.895 0 0 0-3.207-7.744ZM29.057 6.907c2.52-.379 5.084-.379 7.604 0l.394-2.594a28.1 28.1 0 0 0-8.391 0l.393 2.594ZM13.78 55.233l-5.42 1.265 1.264-5.42-2.555-.6-1.265 5.42a2.625 2.625 0 0 0 3.155 3.155l5.416-1.243-.595-2.577Zm-6.164-7.096 2.555.595.875-3.758a25.267 25.267 0 0 1-2.822-6.886l-2.547.63a27.79 27.79 0 0 0 2.582 6.654l-.643 2.765Zm12.25 5.688-3.758.875.595 2.555 2.765-.643a27.791 27.791 0 0 0 6.654 2.58l.63-2.545a25.266 25.266 0 0 1-6.869-2.84l-.017.018ZM32.859 9.248a22.75 22.75 0 0 0-19.25 34.855l-2.187 9.332 9.332-2.187a22.75 22.75 0 1 0 12.105-42Z" })));
};

var SvgSignal = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 22.4c-3.2 0-5.8 2.6-5.8 5.8 0 2.4 1.5 4.5 3.6 5.4v19.6c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3V33.5c2.1-.9 3.6-2.9 3.6-5.4-.2-3.1-2.8-5.7-6-5.7zm0 4.5c.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3s-1.3-.6-1.3-1.3c0-.7.6-1.3 1.3-1.3zM22.1 27.5c0-1.9.8-3.7 2.1-5 .9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0-2.2 2.2-3.4 5.1-3.4 8.2 0 3.1 1.2 6.1 3.4 8.3.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.7.9-.9.9-2.3 0-3.2-1.3-1.4-2.1-3.2-2.1-5.1zM42.9 19.3c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2 1.4 1.3 2.1 3.1 2.1 5s-.7 3.7-2.1 5.1c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7 2.2-2.2 3.4-5.2 3.4-8.3 0-3.1-1.2-6-3.4-8.2z" }),
        React__namespace.createElement("path", { d: "M13.7 27.5c0-3.8 1.5-7.3 4.2-10 .9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0-3.6 3.5-5.5 8.2-5.5 13.2s2 9.7 5.5 13.2c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.9-.9.9-2.3 0-3.2-2.7-2.7-4.2-6.2-4.2-10zM49.3 14.3c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2 2.7 2.7 4.2 6.2 4.2 10s-1.5 7.3-4.2 10c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.7 3.6-3.5 5.5-8.2 5.5-13.2s-2-9.7-5.5-13.2z" }),
        React__namespace.createElement("path", { d: "M5.3 27.5c0-5.7 2.2-11 6.3-15 .9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0C3.5 14.2.8 20.6.8 27.5c0 6.9 2.7 13.3 7.6 18.2.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.9-.9.9-2.3 0-3.2-4.1-4-6.3-9.3-6.3-15zM55.6 9.3c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2 4.1 4 6.3 9.3 6.3 15 0 5.7-2.2 11-6.3 15-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.7 4.9-4.9 7.6-11.3 7.6-18.2.1-6.9-2.7-13.3-7.6-18.2z" })));
};

var SvgSketch = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M3.3 20.3 1 23.4h11.3l.8-16.3-9.8 13.2zM49.5 5.6 33.4 4l17 18.5-.9-16.9zM14 27.2l-1.4-2.7H1.1l28.2 32.8L14 27.2zm.2-3.8h35.6L39.6 12.3 32 4 14.2 23.4zm37.2 1.1L34.7 57.4l28.2-32.8H51.4v-.1zM52 8.6 50.9 7l.1 2.2.7 14.2H63L52 8.6zm-37.9 3.1-.6 10.7L30.6 4 14.5 5.6l-.4 6.1zm36.1 12.8H13.8L19.2 35 32 60l18.2-35.5z" })));
};

var SvgSkippingRope = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M54.6 42.5h-7c-3.3 0-6.2 2.1-7.2 5.1h-21a6.7 6.7 0 0 1 0-13.4h25.3c6.2 0 11.2-5 11.2-11.2s-5-11.2-11.2-11.2H24.1c0-4.2-3.5-7.6-7.7-7.6h-7c-4.2 0-7.7 3.4-7.7 7.7v1.9c0 4.2 3.4 7.7 7.7 7.7h7c3.3 0 6.2-2.1 7.2-5.1h21a6.7 6.7 0 0 1 0 13.4H19.3c-6.2 0-11.2 5-11.2 11.2s5 11.2 11.2 11.2h20.6c0 4.2 3.5 7.6 7.7 7.6h7c4.2 0 7.7-3.4 7.7-7.7v-1.9c-.1-4.3-3.5-7.7-7.7-7.7zm-35-28.7c0 1.8-1.4 3.2-3.2 3.2h-7c-1.8 0-3.2-1.4-3.2-3.2V12c0-1.8 1.4-3.2 3.2-3.2h7c1.8 0 3.2 1.4 3.2 3.2v1.8zM57.8 52c0 1.8-1.4 3.2-3.2 3.2h-7c-1.8 0-3.2-1.4-3.2-3.2v-1.9c0-1.8 1.4-3.2 3.2-3.2h7c1.8 0 3.2 1.4 3.2 3.2V52z" })));
};

var SvgSkype = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M3.1 32.3c.1-1.4.1-2.7.4-3.9.1-.6 0-1-.3-1.6C.9 22.9.5 18.6 1.5 14.3c1.1-4.9 3.9-8.7 8.5-11 5.6-3 11.3-3 16.9.1.4.1.8.3 1.4.1 7.2-.8 13.8.6 19.9 4.7 6.3 4.2 10.3 10.1 12 17.6.8 3.2.8 6.6.4 9.9-.1.4-.1.8.1 1.3 2.3 3.9 3 8.2 1.7 12.7-1.3 4.9-4.1 8.7-8.6 11.1-5.6 3-11.4 3-16.9-.1-.4-.1-.8-.3-1.3-.1-4.5.6-8.9.1-13.2-1.4-5.6-1.8-10.3-5.4-13.8-10.1-2.7-3.9-4.6-7.9-5.1-12.4-.3-1.6-.3-3-.4-4.4zm29 18.4c1.7-.1 3.2-.4 4.9-.6 2.4-.4 4.5-1.4 6.3-2.7 3.1-2.5 4.4-5.8 3.9-9.7-.3-2.7-1.5-4.8-3.8-6.3-1.1-.8-2.5-1.4-3.8-1.8-3-1-6.1-1.7-9.2-2.5-1.5-.3-3-.8-4.4-1.7-1.6-1-2-2.7-1.1-4.1.6-1 1.6-1.6 2.5-2 1.7-.7 3.4-.7 5.1-.6 2.1.1 3.8 1.1 4.8 3 .4.8.8 1.6 1.4 2.3.4.6.8 1.1 1.5 1.4 1.8.8 4.2-.1 4.8-2 .6-1.5.1-3-.7-4.2-1.4-2.3-3.4-3.7-5.8-4.5-2.3-.8-4.5-1.1-7-1.1-3.2 0-6.3.4-9.4 1.7-3.2 1.6-5.2 3.9-5.6 7.6-.3 3.4 1.1 6.1 3.8 7.9 1.7 1.3 3.7 2 5.8 2.5 2.1.6 4.2 1.1 6.5 1.5 1.4.4 3 .8 4.2 1.5 2.5 1.5 2.7 4.8.4 6.6-1.1 1-2.5 1.5-4.1 1.7-1.7.3-3.5.3-5.4-.1-2-.6-3.2-2-4.2-3.7-.4-1.1-1-2-1.7-3-.8-1.3-2.1-1.5-3.5-1.3-1.4.3-2.4 1.1-2.7 2.5-.1 1.1 0 2.3.4 3.2 1.1 3 3.2 4.9 5.9 6.3 3.7 2 6.9 2.2 10.2 2.2z" })));
};

var SvgSlackLine = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M25.3 15.5H21c-3.3 0-6.1-2.2-6.8-5.2-.5-2.3.2-4.7 1.8-6.4 1.7-1.7 4-2.3 6.3-1.8 3 .7 5.2 3.6 5.2 6.9v4.3c0 1.1-1 2.2-2.2 2.2zm-6.7-6.3c.2 1 1.3 1.7 2.5 1.7h2v-2c0-1.2-.7-2.3-1.7-2.5-.8-.2-1.6 0-2.1.6-.7.6-.9 1.4-.7 2.2zM21.6 33.3H11.1c-4.7 0-8.5-3.8-8.5-8.5s3.8-8.5 8.5-8.5h10.4c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.4 8.5zM11.1 20.8c-2.2 0-4 1.8-4 4s1.8 4 4 4h10.4c2.2 0 4-1.8 4-4s-1.8-4-4-4H11.1zM39 29.4c-4.6 0-8.4-3.8-8.4-8.6V10.3c0-4.7 3.8-8.6 8.4-8.6s8.4 3.8 8.4 8.6v10.5c0 4.8-3.7 8.6-8.4 8.6zm0-23.1c-2.2 0-3.9 1.8-3.9 4.1v10.5c0 2.2 1.8 4.1 3.9 4.1 2.2 0 3.9-1.8 3.9-4.1V10.3c0-2.2-1.7-4-3.9-4zM52.1 46.8H44c-4.6 0-8.4-3.7-8.4-8.3s3.8-8.3 8.4-8.3h8.1c4.6 0 8.4 3.7 8.4 8.3s-3.8 8.3-8.4 8.3zM44 34.7c-2.1 0-3.9 1.7-3.9 3.8s1.7 3.8 3.9 3.8h8.1c2.1 0 3.9-1.7 3.9-3.8s-1.7-3.8-3.9-3.8H44zM26.5 60.8c-4.4 0-8-3.7-8-8.3v-8.3c0-4.6 3.6-8.3 8-8.3s8 3.7 8 8.3v8.3c0 4.6-3.6 8.3-8 8.3zm0-20.3c-1.9 0-3.5 1.7-3.5 3.8v8.3c0 2.1 1.6 3.8 3.5 3.8s3.5-1.7 3.5-3.8v-8.3c0-2.1-1.5-3.8-3.5-3.8zM54.6 28.1h-4.1c-1.2 0-2.3-1-2.3-2.3v-4.1c0-3.2 2.1-6 5-6.7 2.2-.5 4.5.1 6.1 1.7 1.6 1.6 2.3 3.9 1.8 6.2-.6 3.1-3.4 5.2-6.5 5.2zm-1.8-4.5h1.8c1.1 0 2-.7 2.2-1.6.2-.8 0-1.5-.6-2-.5-.5-1.2-.7-1.9-.5-.9.2-1.5 1.2-1.5 2.3v1.8zM9.7 48.4c-1.7 0-3.4-.7-4.6-1.9-1.6-1.6-2.3-3.9-1.8-6.2.7-2.9 3.4-5.1 6.6-5.1H14c1.2 0 2.3 1 2.3 2.3v4.1c0 3.2-2.1 6-5 6.7-.6 0-1.1.1-1.6.1zm.2-8.7c-1.1 0-2 .7-2.2 1.6-.2.8 0 1.5.6 2 .5.5 1.2.7 1.9.5.9-.2 1.5-1.2 1.5-2.3v-1.8H9.9zM43.3 62.2c-.5 0-1-.1-1.5-.2-2.9-.7-5-3.5-5-6.7v-4.1c0-1.2 1-2.3 2.3-2.3h4.1c3.2 0 5.9 2.1 6.6 5.1.5 2.3-.1 4.6-1.8 6.2-1.3 1.4-3 2-4.7 2zm-2-8.6v1.8c0 1.1.7 2.1 1.5 2.3.7.2 1.4 0 1.9-.5s.7-1.3.6-2c-.2-.9-1.2-1.6-2.2-1.6h-1.8z" })));
};

var SvgSlack = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M23.8 33.7c-3.5 0-6.5 3-6.5 6.5v16.2c0 3.5 3 6.5 6.5 6.5s6.5-3 6.5-6.5V40.2c0-3.7-2.8-6.5-6.5-6.5zM1 40.2c0 3.5 3 6.5 6.5 6.5s6.5-3 6.5-6.5v-6.5H7.6C4 33.7 1 36.5 1 40.2zM23.8 1c-3.5 0-6.5 3-6.5 6.5s3 6.5 6.5 6.5h6.5V7.5C30.3 4 27.5 1 23.8 1zM7.5 30.3h16.3c3.5 0 6.5-3 6.5-6.5s-3-6.5-6.5-6.5H7.5c-3.5 0-6.5 3-6.5 6.5s2.8 6.5 6.5 6.5zM56.4 17.3c-3.5 0-6.5 3-6.5 6.5v6.5h6.5c3.5 0 6.5-3 6.5-6.5s-2.9-6.5-6.5-6.5zM33.7 7.5v16.3c0 3.5 3 6.5 6.5 6.5s6.5-3 6.5-6.5V7.5c0-3.5-3-6.5-6.5-6.5-3.7 0-6.5 3-6.5 6.5zM46.7 56.5c0-3.5-3-6.5-6.5-6.5h-6.5v6.5c0 3.5 3 6.5 6.5 6.5s6.5-3 6.5-6.5zM56.5 33.7H40.2c-3.5 0-6.5 3-6.5 6.5s3 6.5 6.5 6.5h16.3c3.5 0 6.5-3 6.5-6.5 0-3.7-3-6.5-6.5-6.5z" })));
};

var SvgSlice = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m61.3 51.9-12-12L18.6 9.3C17.1 7.8 15.1 7 13 7c-2.1 0-4.1.8-5.6 2.3l-3.3 3.3C1 15.7 1 20.8 4.1 23.9l30.7 30.7c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7l1.5-1.5 3.5 3.3c.4.4 1 .6 1.5.6h14.8c1.3 0 2.4-.8 2.8-2 .4-1.1 0-2.3-.8-3.1zm-54-36.1 3.3-3.3c.6-.6 1.5-1 2.4-1 .9 0 1.8.4 2.4 1l2.3 2.3L9.5 23l-2.3-2.3c-1.3-1.3-1.3-3.5.1-4.9zm5.4 10.4 2.5-2.5 7 7c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.9-.9.9-2.3 0-3.2l-7-7 2.5-2.5 23.7 23.7-8.2 8.2-23.7-23.7zm32.7 26.3-2.7-2.6 5.1-5.1 7.7 7.7H45.4z" })));
};

var SvgSlideshare = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M61.8 30.2c-.4-.3-1-.3-1.4-.1-.4.1-.7.4-1.3.7V7.4c0-1.5-.3-2.9-1.4-4.2-.7-1.1-2-1.7-3.2-2-.1 0-.1-.1-.3-.1H9.5c-.7.2-1.4.5-2.1.9C5.8 3 5 4.4 4.7 6.2v24.7c-.1-.1-.3-.1-.6-.3s-.7-.4-1-.4c-.8-.3-1.5.3-1.4 1.3.1.6.3 1.1.6 1.4 1.4 1.7 3.2 3.2 5.2 4.5 2.2 1.4 4.5 2.7 6.9 3.8.1.1.1.1.3.1-.1.8-.4 1.7-.6 2.5-.4 2.2-.8 4.5-.6 6.7.1 2.8 1 5.5 2.7 7.9 1.7 2.4 4.1 3.9 7 4.3.1 0 .3.1.4.1h1.8c.6-.1 1.1-.3 1.7-.4 2.2-.7 3.9-2.9 3.9-5.3.1-3.9.1-7.9.1-11.6v-.7c.6.1 1 .3 1.4.4.1.1.1.3.1.4 0 3.2 0 6.6.1 10 0 1.1 0 2.1.3 3.2.7 2.4 2.5 3.6 4.8 4.1.1 0 .3.1.4.1H40c1.1-.3 2.2-.6 3.2-1.1 2.5-1.1 4.2-3.2 5.3-5.6 1.4-3.1 1.7-6.3 1.3-9.7-.1-1.5-.6-3.1-.8-4.6 0-.1-.1-.3-.1-.4.8-.4 1.7-.7 2.5-1.1 2.9-1.4 5.9-3.2 8.3-5.3.7-.7 1.4-1.7 2.1-2.4.1-.1.1-.4.1-.6.5-1.2.3-1.7-.1-2zm-6 2.8c-2.4 1.1-4.6 2.1-7 2.7-3.5.7-7 1-10.5.7-.8-.1-1.8-.1-2.7.1-1.4.1-2.4 1-2.5 2.5 0 .1-.1.1-.1.3-.8-.7-1.7-1.4-2.5-2.1-.7-.6-1.4-.7-2.2-.7-2 0-4.1.1-6 .1-4.8-.1-9.1-1.1-13.5-3.2-.1-.1-.3-.3-.3-.6 0-7.9 0-15.9.1-23.7 0-.8.1-1.5.4-2.4.3-1.3 1.3-1.8 2.4-2.1.7-.1 1.5-.1 2.2-.1h37.6c1 0 2 0 2.9.4 1.3.6 1.8 1.5 2.1 2.8.1.7.1 1.7.1 2.4v22.3c0 .2-.1.3-.5.6z" }),
        React__namespace.createElement("path", { d: "M17.8 22.6c-1.5 2-1.8 4.3-.7 6.6 1.4 2.8 3.8 4.1 6.6 4.2 1.8-.1 3.4-.6 4.8-1.4 3.5-2.4 3.8-7.4.7-10.4-3.4-3.2-8.8-2.8-11.4 1zM45.8 21.1c-3.5-2.5-8.3-1.8-10.7 1.4-1.5 2.1-1.8 4.5-.7 6.9 1.4 2.8 3.8 3.9 6.6 4.1 2.1-.1 3.9-.7 5.3-2 3.2-2.9 2.9-8.1-.5-10.4z" })));
};

var SvgSlim = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M9.9 26.6c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l1.4 1.4H3c-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.2 2.2 2.2h5.1L6.7 37c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7l5.2-5.2c.9-.9.9-2.3 0-3.2l-5.2-5.2zM61 31.2h-5.1l1.4-1.4c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0l-5.2 5.2c-.9.9-.9 2.3 0 3.2l5.2 5.2c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.9-.9.9-2.3 0-3.2l-1.4-1.4H61c1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2zM44.7 26.2c-1.2-5.4 1.8-14.2 1.8-14.3.4-1.2-.2-2.5-1.4-2.9-1.2-.4-2.5.2-2.9 1.4-.1.4-3.4 10.1-2 16.7.2.8.4 1.6.6 2.3-.8.1-1.6.2-2.5.3-2.1.3-4.2.6-6.3.6-2.2 0-4.4-.3-6.5-.6-.9-.1-1.8-.3-2.7-.4.2-.7.4-1.5.5-2.3 1.5-6.6-1.8-16.3-2-16.7-.3-1.1-1.5-1.7-2.7-1.3-1.2.4-1.8 1.7-1.4 2.9 0 .1 3 8.9 1.8 14.3-.6 2.6-1.2 4.7-1.8 6.6-.8 2.5-1.4 4.6-1.4 6.5 0 3 2.7 12.4 3.3 14.3.3 1 1.2 1.6 2.2 1.6.2 0 .4 0 .6-.1 1.2-.4 1.9-1.6 1.5-2.8-.7-2.5-1.8-6.2-2.4-9.1.6-.2 1.9-.5 4.2-.5 2.1 0 4.1 1.1 4.6 1.7v7c0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2v-7.1c.1-.4 1.4-1.5 3.4-1.5 2.5 0 4.2.3 5 .5-.7 2.9-1.7 6.6-2.4 9.1-.3 1.2.3 2.4 1.5 2.8.2.1.4.1.6.1 1 0 1.9-.6 2.2-1.6.5-1.9 3.3-11.3 3.3-14.3 0-1.9-.6-4-1.4-6.5-.5-2-1.2-4.2-1.7-6.7zm-12.9 14c-1.8-1.2-4.3-2-6.6-2-1.9 0-3.5.2-4.8.5.1-1.2.6-2.7 1.2-4.6 0-.1.1-.2.1-.3 1 .1 2.1.3 3.3.4 2.2.3 4.6.7 7.1.7s4.9-.4 7-.7c1.1-.2 2.1-.3 3-.4 0 .1.1.2.1.2.6 1.9 1 3.4 1.2 4.6-2.1-.5-4.5-.5-5.7-.5-2.3.1-4.5.9-5.9 2.1z" }),
        React__namespace.createElement("path", { d: "M32 27.4c2.6.1 3-4 .4-4.5-3.1-.6-3.6 4.5-.4 4.5z" })));
};

var SvgSmile = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 .8C14.8.8.8 14.8.8 32s14 31.3 31.3 31.3 31.3-14 31.3-31.3S49.2.8 32 .8zm0 58c-14.8 0-26.8-12-26.8-26.8S17.3 5.3 32 5.3s26.8 12 26.8 26.8-12 26.7-26.8 26.7z" }),
        React__namespace.createElement("circle", { cx: 20, cy: 22.8, r: 4 }),
        React__namespace.createElement("circle", { cx: 44, cy: 22.8, r: 4 }),
        React__namespace.createElement("path", { d: "M43.6 40.6c-3.2 2.9-7.3 4.6-11.6 4.6s-8.5-1.6-11.6-4.6c-.9-.8-2.3-.8-3.2.1-.8.9-.8 2.3.1 3.2 4 3.7 9.2 5.8 14.7 5.8s10.7-2 14.7-5.8c.9-.8 1-2.3.1-3.2s-2.3-.9-3.2-.1z" })));
};

var SvgSnapchat = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32.5 4.2c2.4 0 10.4.7 14.2 9.1 1.3 2.8.8 7.9.7 11.9-.1.7-.1 1.3-.1 2v.3l.1.1c.1.1.7.8 2.1.8 1-.1 2-.3 3.2-.8.1-.1.4-.1.7-.1s.6.1.8.1c.6.1 1.1.6 1.1 1 0 .1-.1 1-2.4 1.8-.1.1-.4.1-.8.3-1.4.4-3.5 1.1-4.2 2.8-.4 1-.3 2.1.3 3.2.3.6 4.3 9.7 13.3 11.1 0 .1 0 .1-.1.1-.1.4-1.1 1.7-7.2 2.5-1 .1-1.1 1.3-1.4 2.5-.1.4-.1.8-.3 1.4l-.1.1h-.1c-.3 0-.7-.1-1.1-.1-.8-.1-2-.4-3.5-.4-.8 0-1.7.1-2.7.1-1.8.3-3.4 1.4-4.9 2.5-2.1 1.5-4.3 3.1-7.7 3.1H31.5c-3.4 0-5.6-1.5-7.7-3.1-1.7-1.1-3.1-2.2-4.9-2.5h-2.8c-1.5 0-2.7.3-3.5.4-.4.1-.8.1-1.1.1-.1 0-.1 0-.3-.1-.1-.4-.3-.8-.3-1.4-.3-1.3-.4-2.4-1.4-2.5-6-.8-7-2.2-7.2-2.5 0-.1-.1-.1-.1-.1 9.1-1.5 13.2-10.5 13.3-11.1.7-1.3.7-2.4.3-3.2-.7-1.7-2.9-2.4-4.2-2.8-.3-.1-.6-.1-.8-.3-1.8-.7-2.4-1.4-2.4-2 .1-.4 1-1.1 1.7-1.1.1 0 .3 0 .4.1 1.3.6 2.4.8 3.4.8 1.5 0 2.4-.7 2.4-.8l.1-.1v-.3c0-.6-.1-1.3-.1-2-.3-4-.6-9.1.7-11.9 3.8-8.6 11.6-9.1 14.2-9.1.3 0 1.3 0 1.3.1m0-1.2h-1.1c-2.5 0-11.2.7-15.3 9.8-1.4 3.1-1.1 8.3-.8 12.5 0 .4.1 1.1.1 1.5-.1.1-.6.3-1.1.3-.8 0-1.7-.3-2.9-.8-.3-.1-.6-.1-1-.1-1.3 0-2.8.8-2.9 2.1-.1.8.3 2.2 3.1 3.2.3.1.6.1.8.3 1.1.4 2.9.8 3.5 2.1.3.6.1 1.4-.3 2.4v.1c-.1.4-3.9 9-12.3 10.4-.7.1-1.1.7-1.1 1.4 0 .1.1.4.1.6.7 1.5 3.2 2.5 8.1 3.2.1.1.3 1 .4 1.4.1.4.1 1 .3 1.4.1.4.4 1.1 1.5 1.1.4 0 .8-.1 1.4-.1.8-.1 2-.4 3.2-.4.8 0 1.5.1 2.4.1 1.5.3 2.9 1.1 4.5 2.4 2.2 1.5 4.8 3.2 8.6 3.2h.7c3.8 0 6.3-1.7 8.6-3.2 1.5-1.1 2.9-2 4.5-2.4.8-.1 1.7-.1 2.4-.1 1.3 0 2.4.1 3.2.3.6.1 1.1.1 1.4.1h.2c.7 0 1.3-.4 1.4-1.1.1-.4.3-1 .3-1.4.1-.4.3-1.3.4-1.4 4.8-.8 7.6-1.8 8.1-3.2.1-.1.1-.4.1-.6.1-.7-.4-1.3-1.1-1.4-8.4-1.4-12.2-10.1-12.3-10.4-.4-.8-.4-1.7-.3-2.4.4-1.1 2.4-1.7 3.5-2.1.3-.1.7-.1.8-.3 2.1-.8 3.1-1.8 3.1-2.9 0-.8-.7-1.7-2-2.1-.4-.1-.8-.3-1.3-.3-.3 0-.8.1-1.1.3-1 .4-2 .7-2.7.8-.4 0-.8-.1-1.1-.3 0-.4.1-.8.1-1.3v-.1c.3-4.2.6-9.4-.8-12.5C43.7 3.7 35 3 32.5 3z" })));
};

var SvgSortAlphaAsc = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m28.7 48.2-6.4 6.3V4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v50.6l-6.4-6.3c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l9.5 9.5c.6.6 1.4.9 2.3.9s1.6-.3 2.3-.9l9.5-9.5c.9-.9.9-2.3 0-3.2-.7-.9-2.2-.9-3-.1zM52.2 57.8h-4l4.7-6.5c.5-.7.6-1.6.2-2.3-.4-.8-1.2-1.2-2-1.2h-7.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h3.4L42 58.7c-.5.7-.6 1.6-.2 2.3.4.8 1.2 1.2 2 1.2h8.4c1.2 0 2.3-1 2.3-2.3s-1.1-2.1-2.3-2.1zM56.1 15.7 49.8 3c-.4-.8-1.2-1.2-2-1.2s-1.6.5-2 1.2l-6.4 12.7c-.6 1.1-.1 2.5 1 3 1.1.6 2.5.1 3-1l.6-1.3h7.4l.6 1.3c.4.8 1.2 1.2 2 1.2.3 0 .7-.1 1-.2 1.3-.5 1.7-1.9 1.1-3zm-9.8-3.8L47.8 9l1.5 2.9h-3z" })));
};

var SvgSortAmountAsc = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m22.7 43.2-6.3 6.3V9.1c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v40.4l-6.3-6.3c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l9.5 9.5c.6.6 1.4.9 2.3.9.8 0 1.6-.3 2.3-.9l9.5-9.5c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0zM34.8 11.3h4.9c1.2 0 2.2-1 2.2-2.3 0-1.2-1-2.2-2.3-2.2h-4.9c-1.2 0-2.2 1-2.2 2.3 0 1.2 1 2.2 2.3 2.2zM34.8 26.6h12.5c1.2 0 2.2-1 2.2-2.3s-1-2.3-2.3-2.2H34.7c-1.2 0-2.2 1-2.2 2.3 0 1.2 1 2.2 2.3 2.2zM34.8 41.9h17.6c1.2 0 2.2-1 2.2-2.3 0-1.2-1-2.2-2.3-2.2H34.7c-1.2 0-2.2 1-2.2 2.3 0 1.2 1 2.2 2.3 2.2zM60 52.6H34.8c-1.2 0-2.2 1-2.2 2.3 0 1.2 1 2.2 2.3 2.2h25.2c1.2 0 2.2-1 2.2-2.3-.1-1.2-1.1-2.2-2.3-2.2z" })));
};

var SvgSortAmountDsc = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m22.7 43.2-6.3 6.3V9.1c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v40.4l-6.3-6.3c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l9.5 9.5c.6.6 1.4.9 2.3.9.8 0 1.6-.3 2.3-.9l9.5-9.5c.9-.9.9-2.3 0-3.2-.9-.8-2.3-.8-3.2 0zM39.7 52.7h-4.9c-1.2 0-2.2 1-2.3 2.2 0 1.2 1 2.3 2.2 2.3h4.9c1.2 0 2.2-1 2.3-2.2 0-1.3-1-2.3-2.2-2.3zM47.3 37.4H34.8c-1.2 0-2.2 1-2.3 2.2 0 1.2 1 2.3 2.2 2.3h12.5c1.2 0 2.2-1 2.3-2.2 0-1.3-1-2.3-2.2-2.3zM52.4 22.1H34.8c-1.2 0-2.3 1-2.3 2.2 0 1.2 1 2.3 2.2 2.3h17.6c1.2 0 2.2-1 2.3-2.2 0-1.3-1-2.3-2.2-2.3zM60 6.9H34.8c-1.2 0-2.2 1-2.3 2.2 0 1.2 1 2.3 2.2 2.3h25.2c1.2 0 2.2-1 2.3-2.2.1-1.3-1-2.3-2.2-2.3z" })));
};

var SvgSoundcloudOriginal = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M1.702 30.104c-.13 0-.232.1-.249.243L1 33.79l.453 3.384c.017.143.12.242.25.242.124 0 .227-.099.246-.24l.538-3.386-.538-3.445c-.019-.142-.122-.242-.247-.242Zm2.55-1.882c-.021-.148-.127-.25-.258-.25-.132 0-.24.106-.258.25l-.61 5.569.61 5.444c.017.146.126.252.258.252.13 0 .236-.103.257-.25l.694-5.447-.693-5.568Zm9.604-5.136a.478.478 0 0 0-.469.465l-.485 10.244.485 6.62a.478.478 0 0 0 .47.463.482.482 0 0 0 .469-.464v.002l.548-6.62-.549-10.245a.482.482 0 0 0-.469-.465Zm-4.97 3.56c-.193 0-.35.154-.365.359l-.547 6.787.547 6.567a.372.372 0 0 0 .364.357c.19 0 .347-.153.364-.357l.621-6.567-.621-6.789c-.017-.203-.174-.356-.364-.356Zm10.022 14.232c.31 0 .562-.25.574-.57l.476-6.51-.475-13.638a.582.582 0 0 0-.575-.57.58.58 0 0 0-.575.57l-.422 13.638.422 6.511a.58.58 0 0 0 .575.569Zm10.341.03a.796.796 0 0 0 .787-.783l.332-6.322-.332-15.752a.796.796 0 0 0-.787-.784.795.795 0 0 0-.787.784l-.296 15.746.296 6.332c.007.428.36.78.787.78Zm-5.21-.024c.371 0 .67-.298.68-.678v.004l.405-6.41-.405-13.738a.685.685 0 0 0-.68-.677.682.682 0 0 0-.682.677l-.36 13.739.36 6.409a.682.682 0 0 0 .682.674Zm-12.678-.06c.22 0 .4-.177.416-.41l.586-6.622-.586-6.299a.423.423 0 0 0-.416-.408.422.422 0 0 0-.417.411l-.515 6.296.515 6.622c.015.233.193.41.417.41ZM6.43 40.46c.16 0 .292-.127.31-.303l.658-6.367-.657-6.606c-.02-.177-.15-.304-.311-.304-.164 0-.295.128-.311.304L5.54 33.79l.579 6.365c.016.177.147.305.31.305Zm20.204-20.627a.735.735 0 0 0-.735.731l-.328 13.236.328 6.37a.734.734 0 0 0 1.469-.005v.005l.368-6.37-.368-13.237a.735.735 0 0 0-.734-.73ZM16.372 40.89a.532.532 0 0 0 .523-.517l.512-6.577-.512-12.587a.532.532 0 0 0-.523-.518.53.53 0 0 0-.522.518l-.454 12.587.454 6.58c.012.287.241.514.522.514Zm5.719-.624.44-6.468-.44-14.098a.633.633 0 0 0-.628-.625.631.631 0 0 0-.628.625l-.39 14.097.39 6.471a.63.63 0 0 0 .628.621.633.633 0 0 0 .628-.623Zm33.284-14.595a7.613 7.613 0 0 0-2.95.593C51.818 19.392 46.055 14 39.025 14c-1.721 0-3.398.339-4.879.912-.575.222-.729.451-.734.896v24.204a.923.923 0 0 0 .823.902c.02.002 21.003.012 21.14.012A7.627 7.627 0 0 0 63 33.3a7.627 7.627 0 0 0-7.625-7.627Zm-23.522-9.885a.849.849 0 0 0-.84.838l-.345 17.18.345 6.234c.006.456.382.831.84.831a.848.848 0 0 0 .84-.837v.007l.373-6.236-.374-17.18a.848.848 0 0 0-.84-.837ZM7.158 45.774c-.902-.212-1.146-.325-1.146-.682 0-.252.204-.513.813-.513.52 0 .927.211 1.293.585l.82-.796c-.536-.56-1.186-.894-2.072-.894-1.122 0-2.033.634-2.033 1.667 0 1.122.733 1.455 1.78 1.698 1.073.244 1.269.407 1.269.773 0 .43-.318.618-.992.618-.544 0-1.056-.187-1.455-.651l-.821.732c.43.634 1.26 1.032 2.21 1.032 1.555 0 2.237-.731 2.237-1.812 0-1.236-1-1.545-1.903-1.757Zm5.237-2.3c-1.552 0-2.47 1.203-2.47 2.935 0 1.731.918 2.933 2.47 2.933s2.472-1.202 2.472-2.933c0-1.732-.92-2.935-2.472-2.935Zm0 4.74c-.918 0-1.3-.79-1.3-1.805 0-1.016.382-1.805 1.3-1.805.92 0 1.301.789 1.301 1.805s-.381 1.805-1.3 1.805Zm7.065-1.455c0 .91-.448 1.471-1.17 1.471-.724 0-1.163-.577-1.163-1.487v-3.18h-1.139v3.196c0 1.657.928 2.584 2.301 2.584 1.447 0 2.31-.951 2.31-2.6v-3.18H19.46v3.196Zm6.048-.79c0 .318.016 1.033.016 1.244-.073-.146-.26-.43-.398-.642l-2.017-3.009H22.02v5.692h1.122v-2.505c0-.317-.016-1.032-.016-1.243.073.146.26.43.398.643l2.09 3.105h1.016v-5.692h-1.122v2.408Zm4.365-2.406h-1.78v5.691h1.698c1.464 0 2.911-.846 2.911-2.845 0-2.082-1.203-2.846-2.829-2.846Zm-.082 4.586h-.56v-3.48h.602c1.203 0 1.7.577 1.7 1.74 0 1.04-.546 1.74-1.742 1.74Zm6.431-3.545c.512 0 .838.228 1.041.618l1.057-.488c-.358-.74-1.009-1.26-2.082-1.26-1.486 0-2.527 1.203-2.527 2.935 0 1.796.999 2.933 2.486 2.933 1.033 0 1.716-.479 2.106-1.284l-.959-.57c-.3.505-.602.725-1.114.725-.853 0-1.35-.781-1.35-1.804 0-1.057.49-1.805 1.342-1.805Zm4.222-1.041h-1.139v5.691h3.421v-1.122h-2.282v-4.57Zm5.28-.089c-1.553 0-2.471 1.203-2.471 2.935 0 1.731.918 2.933 2.471 2.933s2.472-1.202 2.472-2.933c0-1.732-.92-2.935-2.471-2.935Zm0 4.74c-.919 0-1.3-.79-1.3-1.805 0-1.016.381-1.805 1.3-1.805.918 0 1.3.789 1.3 1.805s-.382 1.805-1.3 1.805Zm7.064-1.455c0 .91-.446 1.471-1.17 1.471s-1.162-.577-1.162-1.487v-3.18h-1.138v3.196c0 1.657.927 2.584 2.3 2.584 1.448 0 2.31-.951 2.31-2.6v-3.18h-1.14v3.196Zm4.342-3.196h-1.78v5.691h1.698c1.465 0 2.91-.846 2.91-2.845 0-2.082-1.202-2.846-2.828-2.846Zm-.082 4.586h-.56v-3.48h.602c1.202 0 1.698.577 1.698 1.74 0 1.04-.545 1.74-1.74 1.74Z" })));
};

var SvgSoundcloud = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M48.3 48.8h-9c-1.6 0-2.9-1.3-2.9-2.9V18.1c0-1.6 1.3-2.9 2.8-2.9h.6c1.2 0 2.7.2 4.2.7h.1c2.8 1 5.2 2.8 6.8 5.2 3 .6 5.7 2 7.5 4.2 2.4 2.5 3.7 5.9 3.7 9.5.2 7.7-6.1 14-13.8 14zm-7.4-4.5h7.4c5.3 0 9.5-4.2 9.5-9.4 0-2.5-.9-4.7-2.5-6.4l-.1-.1c-1.4-1.6-3.5-2.6-5.8-2.9l-1.1-.1-.6-1c-1.1-1.9-2.9-3.4-5-4.2-.7-.2-1.3-.3-1.8-.4v24.5zM26.5 47.4c-1.2 0-2.3-1-2.3-2.3V18.8c0-1.2 1-2.3 2.3-2.3s2.3 1 2.3 2.3v26.3c-.1 1.3-1.1 2.3-2.3 2.3zM14.8 45.8c-1.2 0-2.3-1-2.3-2.3v-23c0-1.2 1-2.3 2.3-2.3s2.3 1 2.3 2.3v23.1c0 1.2-1 2.2-2.3 2.2zM4 42.4c-1.2 0-2.3-1-2.3-2.3V23.8c0-1.2 1-2.3 2.3-2.3s2.3 1 2.3 2.3v16.3c0 1.3-1.1 2.3-2.3 2.3z" })));
};

var SvgSpeechless = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("circle", { cx: 20, cy: 22.7, r: 4 }),
        React__namespace.createElement("circle", { cx: 44, cy: 22.7, r: 4 }),
        React__namespace.createElement("path", { d: "M32 .8C14.8.8.8 14.8.8 32s14 31.3 31.3 31.3 31.3-14 31.3-31.3S49.2.8 32 .8zm0 58c-14.8 0-26.8-12-26.8-26.8S17.3 5.3 32 5.3s26.8 12 26.8 26.8-12 26.7-26.8 26.7z" }),
        React__namespace.createElement("path", { d: "M43.7 43H20.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h23.3c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.2-2.3z" })));
};

var SvgSpellcheck = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M24.3 29.3c-.3-.6-.8-.9-1.4-.9h-6c-.7 0-1.2.3-1.4.9L4.1 55.4c-.5 1.1.3 2.1 1.4 2.1h4.9c.6 0 1.2-.4 1.3-.9l1.6-4h12.4l1.5 4c.1.6.8.9 1.3.9h5.2c1.3-.1 2.1-1.2 1.6-2.1l-11-26.1zm-8.6 16.1 4.1-10.5 4.1 10.5h-8.2zM61.6 4.8c-.9-.9-2.3-.9-3.2 0L37.5 25.5l-5.2-5.1c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l6.3 6.2c.6.6 1.3.9 2.1.9s1.5-.3 2.1-.9L61.6 8c.9-.9.9-2.3 0-3.2z" })));
};

var SvgSpinnerArrow = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M58.2 26.8c-.4-1.2-1.6-1.8-2.8-1.5-1.2.4-1.8 1.6-1.5 2.8.7 2.2 1.1 4.5 1.1 6.8 0 3.5-.8 6.8-2.3 9.9-3.9 8-11.8 13-20.7 13C19.3 57.8 9 47.5 9 35s10.3-22.8 23-22.8c2.3 0 4.6.3 6.7 1l-3.4 1.6c-1.1.5-1.6 1.9-1.1 3 .4.8 1.2 1.3 2 1.3.3 0 .6-.1.9-.2l8.8-4.1c.5-.3 1-.7 1.2-1.3s.2-1.2-.1-1.7L43 3c-.5-1.1-1.9-1.6-3-1.1s-1.6 1.9-1.1 3l1.9 4.2c-2.8-1-5.8-1.5-8.9-1.5C16.9 7.7 4.5 19.9 4.5 35S16.9 62.3 32 62.3c10.6 0 20.1-5.9 24.7-15.4 1.8-3.7 2.8-7.7 2.8-11.9 0-2.8-.5-5.6-1.3-8.2z" })));
};

var SvgSpinnerSolid = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 62.3C15.3 62.3 1.8 48.7 1.8 32S15.3 1.8 32 1.8c4.6 0 9.1 1 13.2 3 1.1.5 1.6 1.9 1 3-.5 1.1-1.9 1.6-3 1-3.5-1.7-7.3-2.5-11.2-2.5C17.8 6.3 6.3 17.8 6.3 32s11.6 25.8 25.8 25.8c9.9 0 18.8-5.6 23.2-14.5 1.7-3.5 2.6-7.3 2.6-11.2 0-2.6-.4-5.2-1.2-7.7-.4-1.2.3-2.4 1.5-2.8 1.2-.4 2.4.3 2.8 1.5.9 2.9 1.4 6 1.4 9.1 0 4.6-1 9.1-3 13.2C54.1 55.7 43.7 62.3 32 62.3z" })));
};

var SvgSpinner = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M33.3 2c-4.3 0-7.8 3.5-7.8 7.8s3.5 7.8 7.8 7.8 7.8-3.5 7.8-7.8S37.6 2 33.3 2zM33.3 52.5c-2.6 0-4.8 2.1-4.8 4.8s2.1 4.8 4.8 4.8c2.6 0 4.8-2.1 4.8-4.8s-2.2-4.8-4.8-4.8zM57 30c-1.9 0-3.5 1.6-3.5 3.5S55.1 37 57 37s3.5-1.6 3.5-3.5c-.1-1.9-1.6-3.5-3.5-3.5zM15.4 33.5c0-3.3-2.7-5.9-5.9-5.9-3.3 0-5.9 2.7-5.9 5.9 0 3.3 2.7 5.9 5.9 5.9 3.3 0 5.9-2.6 5.9-5.9z" }),
        React__namespace.createElement("circle", { cx: 50.1, cy: 50.2, r: 4.1 }),
        React__namespace.createElement("path", { d: "M16.5 10.1c-1.7 0-3.4.7-4.6 1.9-2.5 2.5-2.5 6.7 0 9.2 1.3 1.3 2.9 1.9 4.6 1.9 1.7 0 3.3-.6 4.6-1.9 1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6-1.2-1.2-2.9-1.9-4.6-1.9zM50 19.6c.8 0 1.5-.3 2.1-.8.6-.6.9-1.3.8-2.1 0-.8-.3-1.4-.8-1.9-.6-.6-1.3-.9-2.1-.8-.8 0-1.4.3-1.9.8-.6.6-.9 1.3-.8 2.1 0 .8.3 1.4.8 1.9.4.5 1.1.8 1.9.8zM16.5 45c-2.9 0-5.3 2.4-5.3 5.3s2.4 5.3 5.3 5.3 5.3-2.4 5.3-5.3-2.4-5.3-5.3-5.3z" })));
};

var SvgSpotifyOriginal = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 1C14.8 1 1 14.8 1 32s13.8 31 31 31 31-13.8 31-31S49.2 1 32 1zm14.2 44.7c-.6.8-1.7 1.1-2.7.7-7.3-4.5-16.5-5.5-27.2-3.1-1.1.3-2.1-.4-2.3-1.4-.3-1.1.4-2.1 1.4-2.4C27.2 36.8 37.2 38 45.6 43c.9.7 1.2 1.8.6 2.7zm3.8-8.3c-.7 1.1-2.3 1.4-3.2.7-8.3-5.1-21-6.6-30.9-3.5-1.3.4-2.7-.3-3-1.7-.4-1.3.3-2.7 1.7-3 11.3-3.5 25.2-1.7 34.8 4.1.9.7 1.3 2.1.6 3.4zm.3-8.9c-10-5.9-26.5-6.5-36.1-3.5-1.4.4-3.1-.4-3.5-2-.4-1.4.4-3.1 2-3.5 11-3.2 29-2.7 40.6 4.2 1.4.8 1.8 2.7 1.1 3.9-.8 1.3-2.7 1.7-4.1.9z" })));
};

var SvgSpotify = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M42.2 48.7c-.3 0-.7-.1-1-.2-6.5-3.2-14-3.9-20.9-2.1-1.2.3-2.4-.4-2.7-1.6-.3-1.2.4-2.4 1.6-2.8 8-2.1 16.5-1.3 24 2.4 1.1.5 1.6 1.9 1 3-.4.8-1.2 1.3-2 1.3zM45.3 38c-.3 0-.6-.1-.9-.2-5.2-2.4-10.9-3.7-16.4-3.7-3.3 0-6.1.3-8.8 1.1-1.2.3-2.4-.4-2.8-1.6-.3-1.2.4-2.4 1.6-2.8 3.1-.8 6.3-1.2 9.9-1.2 6.2 0 12.5 1.4 18.3 4.1 1.1.5 1.6 1.9 1.1 3-.4.8-1.2 1.3-2 1.3zM48.5 26.8c-.3 0-.6-.1-1-.2-6.1-2.9-12.7-4.3-19.7-4.3-3.1 0-6.5.4-10 1.1-1.2.3-2.4-.5-2.7-1.7-.1-1.3.7-2.5 1.9-2.7 3.8-.8 7.5-1.2 10.9-1.2 7.6 0 14.8 1.6 21.6 4.7 1.1.5 1.6 1.9 1.1 3-.4.8-1.2 1.3-2.1 1.3z" }),
        React__namespace.createElement("path", { d: "M32 62.3C15.3 62.3 1.8 48.7 1.8 32 1.8 15.3 15.3 1.8 32 1.8S62.3 15.4 62.3 32c0 16.7-13.6 30.3-30.3 30.3zm0-56C17.8 6.3 6.3 17.8 6.3 32S17.8 57.8 32 57.8 57.8 46.2 57.8 32C57.8 17.8 46.2 6.3 32 6.3z" })));
};

var SvgSpray = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M22.8 21.4h-.4V19h.7c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-6c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h.7v2.4h-.4c-7 0-12.7 5.7-12.7 12.7v24.3c0 2.1 1.7 3.8 3.8 3.8h23.1c2.1 0 3.8-1.7 3.8-3.8V34.2c.1-7.1-5.6-12.8-12.6-12.8zm-5.3 4.5h5.3c4.5 0 8.1 3.6 8.2 8H9.3c0-4.4 3.7-8 8.2-8zM9.2 57.8V38.5H31v19.3H9.2zM48.8 19c-1.2 0-2.3 1-2.3 2.3v.2c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-.2C51 20 50 19 48.8 19zM48.8 8.6c-1.2 0-2.3 1-2.3 2.3v.1c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-.2C51 9.6 50 8.6 48.8 8.6zM57 25.5c-1.2 0-2.3 1-2.3 2.3v.2c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-.2c0-1.3-1.1-2.3-2.3-2.3zM40 13.8c-1.2 0-2.3 1-2.3 2.3v.2c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V16c0-1.2-1-2.2-2.3-2.2zM57 13.8c-1.2 0-2.3 1-2.3 2.3v.2c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V16c0-1.2-1.1-2.2-2.3-2.2zM57 1.8c-1.2 0-2.3 1-2.3 2.3v.2c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V4c0-1.2-1.1-2.2-2.3-2.2z" })));
};

var SvgSprout = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M62 12.8c.1-.7-.2-1.4-.6-1.8-.5-.5-1.2-.7-1.8-.6-.6.1-14.4 1.7-21.1 8.4-2.3 2.2-4 5.2-5.2 8.2-1-4.8-3.2-12.4-7.7-16.9C18.9 3.5 5.1 1.8 4.5 1.8c-.7-.1-1.3.1-1.8.6S2 3.6 2 4.3c.1.6 1.7 14.4 8.4 21.1 5.3 5.3 14.9 7.4 19.1 8.1V60c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V42.1c3.9-.6 14.1-2.7 19.6-8.2 6.6-6.7 8.2-20.5 8.3-21.1zm-48.4 9.3C9.7 18.2 7.8 10.8 7 6.7c4.1.8 11.5 2.7 15.4 6.6 3.9 3.9 5.8 11.3 6.6 15.4-4.1-.7-11.5-2.6-15.4-6.6zM35 37.4c.8-4.1 2.7-11.5 6.6-15.4s11.3-5.8 15.4-6.6c-.8 4.1-2.7 11.5-6.6 15.4S39.1 36.6 35 37.4z" })));
};

var SvgSquarespace = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M23.6 42.6c-1.1 1.1-1.1 3.1 0 4.2s3.1 1.1 4.2 0l19-19c2.4-2.4 6.1-2.4 8.4 0 2.4 2.4 2.4 6.1 0 8.4L36.6 54.9c2.4 2.4 6.1 2.4 8.4 0l14.5-14.5c4.6-4.6 4.6-12.2 0-17-4.6-4.6-12.2-4.6-17 0L23.6 42.6zm29.6-12.7c-1.1-1.1-3.1-1.1-4.2 0L30 49c-2.4 2.4-6.1 2.4-8.4 0-1.1-1.1-3.1-1.1-4.2 0s-1.1 3.1 0 4.2c4.6 4.6 12.2 4.6 17 0l18.9-19c1-1.2 1-3.2-.1-4.3zM21.5 40.4l19-19c1.1-1.1 1.1-3.1 0-4.2s-3.1-1.1-4.2 0l-19.1 19c-2.4 2.4-6.1 2.4-8.4 0-2.4-2.4-2.4-6.2 0-8.6L27.4 9.1c-2.4-2.4-6.1-2.4-8.4 0L4.5 23.6c-4.6 4.6-4.6 12.2 0 17 4.6 4.6 12.4 4.6 17-.2zM11 34.1c1.1 1.1 3.1 1.1 4.2 0l19.1-19c2.4-2.4 6.1-2.4 8.4 0 1.1 1.1 3.1 1.1 4.2 0s1.1-3.1 0-4.2c-4.6-4.6-12.2-4.6-17 0l-19 19C9.7 31 9.7 33 11 34.1z" })));
};

var SvgStackoverflow = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M50.2 57.5H11.5V40.9H5.8V63h49.8V40.9h-5.4v16.6ZM41.732.98l-4.417 3.277 16.444 22.166 4.417-3.277L41.732.98ZM31.56 9.876l-3.517 4.23 21.221 17.647 3.517-4.23L31.559 9.877Z" }),
        React__namespace.createElement("path", { d: "M44.6 46.4H17v5.5h27.6v-5.5ZM48.4 33.1 23.5 21.3l-2.4 5.1 25 11.7 2.3-5ZM45.7 39.6l-27-5.8-1.3 5.5L44.6 45l1.1-5.4Z" })));
};

var SvgStamp = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M46 35h-7.3l1.2-24.4c.1-2.4-.7-4.7-2.3-6.4C36 2.6 34.1 1.8 32 1.8c-2.1 0-4.1.9-5.6 2.4-1.6 1.7-2.5 4-2.4 6.4L25.3 35H18c-6.2 0-11.2 5.4-11.2 12.1v4.7c0 1.5 1.1 2.7 2.5 2.8V56c0 3.4 2.8 6.3 6.3 6.3h32.7c3.4 0 6.3-2.8 6.3-6.3v-1.4c1.4-.1 2.5-1.3 2.5-2.8v-4.7c0-6.7-5-12.1-11.1-12.1zM28.6 10.4c-.1-1.2.4-2.3 1.1-3.1C31 6 33 6 34.3 7.3c.8.8 1.2 1.9 1.1 3L34.2 35h-4.4l-1.2-24.6zM11.4 47.1c0-4.2 3-7.6 6.7-7.6H46c3.7 0 6.7 3.4 6.7 7.6v3.1H11.4v-3.1zm37 10.7H15.6c-1 0-1.8-.8-1.8-1.8v-1.3H50V56c.1 1-.7 1.8-1.6 1.8z" })));
};

var SvgStarEmpty = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "m32 8.5 3.402-1.6-1.4-2.6c-.4-.8-1.2-1.3-2-1.3s-1.6.5-2 1.2l-1.4 2.6L32 8.5ZM37.537 11.038l-4.025 2.01 3.083 6.174 4.026-2.012-3.084-6.172ZM39 23.9c.3.7 1 1.1 1.7 1.2l3 .4.6-4.5-1.8-.2-.8-1.6-4 2.1 1.3 2.6ZM48.98 21.722l-.628 4.456 7.03.992.629-4.456-7.03-.992ZM63.1 25.1c-.3-.8-1-1.4-1.8-1.6l-3-.5-.3 4 2.4 2.4 2.2-2c.6-.6.8-1.5.5-2.3ZM53.934 29.335l-5.02 4.733 3.087 3.275 5.02-4.734-3.087-3.274ZM48.9 40.2l1.3-1.3-3.1-3.2-2.1 2.1c-.5.5-.8 1.3-.7 2l.5 2.9 4.4-.7-.3-1.8ZM50.056 46.448l-4.427.806 1.236 6.788 4.427-.806-1.236-6.788ZM51.602 55.4 47 56l-.898 3.3 2.7 1.4c.3.2.7.2 1 .2.5 0 1-.2 1.3-.4.7-.5 1-1.4.9-2.2l-.4-2.9ZM37.84 50.01l-2.047 4.008 6.233 3.185 2.048-4.008-6.233-3.185ZM31 47.6 28.3 49l2.1 4 1.6-.9 1.7.9 2-4-2.7-1.4c-.6-.3-1.4-.3-2 0ZM24.098 51.082l-6.246 3.158 2.03 4.016 6.247-3.158-2.03-4.016ZM16 56l-3.7-.5-.5 2.9c-.1.8.2 1.7.9 2.2.4.3.9.4 1.3.4s.7-.1 1-.3l2.7-1.4L16 56ZM14.374 44.202l-1.151 6.702 4.435.762 1.151-6.702-4.435-.762ZM19.7 39.8c.1-.7-.1-1.5-.6-2l-2.2-2.1-3.1 3.2 1.3 1.3-.3 1.7 4.4.8.5-2.9ZM8.482 27.716 5.395 30.99l5.02 4.734 3.087-3.275-5.02-4.733ZM6.302 26.7l-.6-3.7-3.1.5c-.9.1-1.6.7-1.8 1.6-.2.9 0 1.7.6 2.3l2.3 2 2.6-2.7ZM17.34 21.327l-6.93.987.635 4.456 6.93-.988-.635-4.455ZM21.6 20.8l-1.9.2.6 4.5 3.1-.4c.7-.1 1.4-.5 1.7-1.2l1.4-2.6-4-2.1-.9 1.6ZM27.606 8.952l-3.137 6.146 4.008 2.046 3.137-6.146-4.008-2.046Z" })));
};

var SvgStarFill = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m59.7 23.9-18.1-2.8-8.2-17.2c-.6-1.2-2.2-1.2-2.8 0l-8.2 17.3-18 2.7c-1.3.2-1.8 1.9-.8 2.8l13.1 13.5-3.1 18.9c-.2 1.3 1.1 2.4 2.3 1.6l16.3-8.9 16.2 8.9c1.1.6 2.5-.4 2.2-1.6l-3.1-18.9 13.1-13.5c.8-.9.4-2.6-.9-2.8z" })));
};

var SvgStarHalf = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M45.2 27.4c1.2 0 2.2-1 2.2-2.2 0-1.2-.9-2.3-2.2-2.3l-4.3-.2-1.5-3.8c-.4-1.2-1.7-1.7-2.9-1.3-1.2.4-1.7 1.8-1.3 2.9l2 5.2c.3.8 1.1 1.4 2 1.4l6 .3c-.1 0 0 0 0 0zM62.1 25.3c-.3-1.1-1.3-1.8-2.4-1.8l-5.9-.2c-1.2-.1-2.3.9-2.3 2.2 0 1.2.9 2.3 2.2 2.3h.7l-3 2.3c-1 .7-1.2 2.2-.4 3.2.4.6 1.1.9 1.8.9.5 0 .9-.1 1.4-.5l7.2-5.4c.7-.8 1.1-2 .7-3zM46.1 33.9l-3.5 2.6c-.7.6-1.1 1.5-.8 2.4l1.2 4.2c.3 1 1.2 1.6 2.2 1.6.2 0 .4 0 .6-.1 1.2-.4 1.9-1.6 1.5-2.8l-.8-2.7 2.3-1.7c1-.7 1.2-2.2.4-3.2-.7-.8-2.1-1-3.1-.3zM50 50.9c-.3-1.2-1.6-1.9-2.8-1.5-1.2.4-1.9 1.6-1.5 2.8l.2.7-2.8-1.9c-1-.7-2.4-.4-3.1.7-.7 1-.4 2.4.7 3.1l7 4.5c.4.3.9.4 1.4.4.6 0 1.1-.2 1.6-.5.9-.7 1.3-1.8.9-2.8L50 50.9z" }),
        React__namespace.createElement("path", { d: "m38 47.8-4.8-3.1h-.1c-.1-.1-.3-.2-.5-.2h-.1c-.2 0-.4-.1-.6-.1h-.1c-.2 0-.3 0-.5.1h-.1c-.2.1-.4.1-.5.2L18 52.8 22.2 39c.3-.9-.1-1.9-.8-2.4L9.7 27.8l15-.6c.9 0 1.7-.6 2-1.4L32 12.1l.5 1.4c.3.9 1.2 1.4 2.1 1.4.3 0 .5 0 .8-.2 1.2-.4 1.7-1.8 1.3-2.9L34.5 6c-.4-1-1.4-1.7-2.5-1.7S29.9 5 29.5 6L23 22.8l-18.7.7c-1.1 0-2.1.8-2.4 1.8-.3 1 0 2.2.9 2.9l14.7 11.1-5 17.1c-.3 1.1.1 2.2.9 2.8.5.4 1 .5 1.6.5.5 0 1-.1 1.4-.4l15.6-10 3.6 2.3c.4.2.8.4 1.2.4.7 0 1.5-.4 1.9-1 .7-1.1.4-2.5-.7-3.2z" })));
};

var SvgStatsDown = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60 57.8H6.3V4c0-1.2-1-2.3-2.3-2.3S1.8 2.8 1.8 4v56c0 1.2 1 2.3 2.3 2.3h56c1.2 0 2.3-1 2.3-2.3s-1.2-2.2-2.4-2.2z" }),
        React__namespace.createElement("path", { d: "M60 28.6c-1.2 0-2.3 1-2.3 2.3v7.5L51 32.8c-.4-.3-.9-.5-1.4-.5H36.8L29.7 23c-.4-.6-1.1-.9-1.8-.9H15.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h11.5l7.1 9.3c.4.6 1.1.9 1.8.9h13.2l5.5 4.6h-7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3H60c1.2 0 2.3-1 2.3-2.3V30.9c0-1.3-1.1-2.3-2.3-2.3z" })));
};

var SvgStatsUp = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60 57.8H6.3V4c0-1.2-1-2.3-2.3-2.3S1.8 2.8 1.8 4v54.1c0 2.3 1.9 4.2 4.2 4.2h54c1.2 0 2.3-1 2.3-2.3s-1.1-2.2-2.3-2.2z" }),
        React__namespace.createElement("path", { d: "M59 22.1H47.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h6.8l-5.3 4.6H35.7c-.7 0-1.4.3-1.8.9l-7.1 9.3H16.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h11.6c.7 0 1.4-.3 1.8-.9l7.1-9.3h12.9c.5 0 1.1-.2 1.5-.6l6.6-5.8v7.7c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V25.3c-.1-1.7-1.6-3.2-3.4-3.2z" })));
};

var SvgSteam = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M31.9.9C15.7.9 2.1 13.5 1 29.5l16.6 6.9c1.4-1 3.1-1.4 4.9-1.4h.4l7.3-10.9V24c0-6.5 5.2-11.7 11.7-11.7S53.7 17.5 53.7 24 48.5 35.7 42 35.7h-.3l-10.6 7.6v.4c0 4.8-3.9 8.9-8.9 8.9-4.2 0-7.9-3.1-8.6-7L2 40.5c3.7 13 15.8 22.7 29.9 22.7C49 63.1 63 49.2 63 32S49 .9 31.9.9z" }),
        React__namespace.createElement("path", { d: "m20.4 48.1-3.8-1.5c.7 1.4 1.8 2.7 3.4 3.2 3.2 1.4 7.2-.1 8.6-3.5.7-1.7.7-3.4 0-5.1s-2-3-3.5-3.7c-1.6-.7-3.2-.6-4.8-.1l3.9 1.7c2.4 1.1 3.7 3.9 2.7 6.3-1.1 2.5-3.9 3.6-6.5 2.7zM50 24c0-4.2-3.5-7.9-7.9-7.9-4.2 0-7.9 3.5-7.9 7.9s3.7 7.9 7.9 7.9S50 28.3 50 24zm-13.6 0c0-3.2 2.7-5.8 5.8-5.8 3.2 0 5.8 2.7 5.8 5.8 0 3.2-2.7 5.8-5.8 5.8-3.2.1-5.8-2.6-5.8-5.8z" })));
};

var SvgSthethoscope = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M55.4 1.8H49c-1.2 0-2.2 1-2.2 2.2v2.5c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-.3h3.1v17.4c0 6.2-5 11.2-11.2 11.2H42c-6.2 0-11.2-5-11.2-11.2V6.2h3.1v.3c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V4c0-1.2-1-2.2-2.2-2.2h-6.4c-1.9 0-3.5 1.6-3.5 3.5v18.4c0 8.5 6.8 15.4 15.3 15.7V52c0 3.2-2.4 5.8-5.4 5.8H21.4c-3.2 0-5.8-2.6-5.8-5.8v-8.2c3.6-1 6.3-4.2 6.3-8.1 0-4.6-3.8-8.4-8.4-8.4-4.6 0-8.4 3.8-8.4 8.4 0 3.8 2.6 7.1 6.1 8.1V52c0 5.7 4.6 10.3 10.3 10.3h14.8c5.5 0 9.9-4.6 9.9-10.3V39c7.2-1.4 12.7-7.8 12.7-15.4V5.3c0-2-1.6-3.5-3.5-3.5zM9.6 35.6c0-2.2 1.8-3.9 3.9-3.9s3.9 1.8 3.9 3.9c0 2.2-1.8 3.9-3.9 3.9s-3.9-1.7-3.9-3.9z" })));
};

var SvgStop = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56 62.3H8c-3.4 0-6.3-2.8-6.3-6.3V8c0-3.4 2.8-6.3 6.3-6.3h48c3.4 0 6.3 2.8 6.3 6.3v48c0 3.4-2.9 6.3-6.3 6.3zM8 6.3C7 6.3 6.3 7 6.3 8v48c0 1 .8 1.8 1.8 1.8h48c1 0 1.8-.8 1.8-1.8V8c0-1-.8-1.8-1.8-1.8H8z" })));
};

var SvgStrikethrough = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60 19.6H34.3V6.3h14.5C50 6.3 51 5.2 51 4s-1-2.3-2.3-2.3H15.2C14 1.8 13 2.8 13 4s1 2.3 2.3 2.3h14.5v13.3H4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h25.8V60c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3V24.1H60c1.2 0 2.3-1 2.3-2.3s-1.1-2.2-2.3-2.2z" })));
};

var SvgStripe = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 65", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M63 32.93c0-4.408-2.136-7.887-6.217-7.887-4.1 0-6.58 3.479-6.58 7.853 0 5.184 2.929 7.802 7.13 7.802 2.05 0 3.6-.465 4.771-1.12v-3.444c-1.17.585-2.514.947-4.219.947-1.67 0-3.152-.586-3.341-2.618h8.422c0-.224.034-1.12.034-1.532Zm-8.508-1.636c0-1.946 1.189-2.755 2.274-2.755 1.05 0 2.17.81 2.17 2.755h-4.444ZM43.556 25.043c-1.688 0-2.773.792-3.375 1.343l-.224-1.068h-3.79V45.4l4.306-.912.018-4.874c.62.447 1.532 1.085 3.048 1.085 3.083 0 5.89-2.48 5.89-7.94-.017-4.994-2.859-7.715-5.873-7.715Zm-1.033 11.866c-1.016 0-1.619-.362-2.032-.81l-.018-6.39c.448-.498 1.068-.843 2.05-.843 1.567 0 2.652 1.757 2.652 4.013 0 2.308-1.068 4.03-2.652 4.03ZM30.243 24.027l4.323-.93V19.6l-4.323.912v3.514Z", clipRule: "evenodd" }),
        React__namespace.createElement("path", { fill: "#000", d: "M34.566 25.336h-4.323v15.07h4.323v-15.07Z" }),
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "m25.61 26.61-.275-1.274h-3.72v15.07h4.306V30.191c1.016-1.326 2.738-1.085 3.272-.895v-3.961c-.551-.207-2.566-.586-3.583 1.274ZM17 21.598l-4.203.896-.017 13.795c0 2.549 1.912 4.426 4.46 4.426 1.413 0 2.446-.258 3.015-.568V36.65c-.552.223-3.273 1.016-3.273-1.533v-6.114h3.273v-3.668h-3.273L17 21.598ZM5.357 29.71c0-.672.551-.93 1.464-.93 1.309 0 2.962.396 4.271 1.102v-4.047c-1.43-.568-2.841-.792-4.27-.792C3.324 25.043 1 26.868 1 29.917c0 4.753 6.544 3.995 6.544 6.045 0 .792-.688 1.05-1.653 1.05-1.43 0-3.255-.585-4.702-1.378v4.1c1.602.688 3.221.98 4.702.98 3.582 0 6.045-1.773 6.045-4.856-.017-5.132-6.579-4.22-6.579-6.148Z", clipRule: "evenodd" })));
};

var SvgStumbleupon = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M63 33.3v8.6c0 7.6-6.2 13.8-13.8 13.8s-13.8-6.1-13.8-13.8v-8.5l4.2 2 6.3-1.8v8.7c0 1.8 1.4 3.2 3.2 3.2s3.2-1.4 3.2-3.2v-8.9c.1-.1 10.7-.1 10.7-.1zm-27.8-7.2 4.2 2 6.3-1.8v-4.4c0-7.5-6.3-13.5-13.8-13.5s-13.8 5.9-13.8 13.4v20c0 1.8-1.4 3.2-3.2 3.2s-3.2-1.4-3.2-3.2v-8.5H1v8.6c0 7.6 6.2 13.8 13.8 13.8S28.6 49.6 28.6 42V22.3c0-1.8 1.4-3.2 3.2-3.2 1.8 0 3.2 1.4 3.2 3.2v3.8h.2z" })));
};

var SvgSun = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 18.4c-7.5 0-13.6 6.1-13.6 13.6S24.5 45.6 32 45.6 45.6 39.5 45.6 32 39.5 18.4 32 18.4zm0 22.7c-5 0-9.1-4.1-9.1-9.1s4.1-9.1 9.1-9.1 9.1 4.1 9.1 9.1-4.1 9.1-9.1 9.1zM32 11.3c1.2 0 2.3-1 2.3-2.3V4c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v5.1c.1 1.2 1.1 2.2 2.3 2.2zM32 52.7c-1.2 0-2.3 1-2.3 2.3v5c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3v-5.1c0-1.2-1.1-2.2-2.3-2.2zM48.3 18c.6 0 1.2-.2 1.6-.7l3.2-3.2c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0l-3.2 3.2c-.9.9-.9 2.3 0 3.2.4.5 1 .7 1.6.7zM14.2 46.7 11 49.8c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7s1.2-.2 1.6-.7l3.2-3.2c.9-.9.9-2.3 0-3.2-.9-.8-2.4-.8-3.2.1zM60 29.8h-5.1c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3H60c1.2 0 2.3-1 2.3-2.3 0-1.3-1.1-2.3-2.3-2.3zM11.3 32c0-1.2-1-2.3-2.3-2.3H4c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h5.1c1.2 0 2.2-1.1 2.2-2.3zM49.8 46.7c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l3.2 3.2c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2l-3.2-3.2zM14.2 11c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l3.2 3.2c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.9-.9.9-2.3 0-3.2L14.2 11z" })));
};

var SvgSupport = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M30.9 20.3H14c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h16.8c1.2 0 2.2-1 2.2-2.2s-.9-2.2-2.1-2.2zM21.8 32.7H14c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h7.7c1.2 0 2.2-1 2.2-2.2s-.9-2.2-2.1-2.2zM48.6 34.5c-.1-.1-.2-.2-.4-.2-.1-.1-.3-.1-.4-.1-.7-.1-1.5.1-2 .6l-.3.3c-.1.1-.2.3-.2.4-.1.1-.1.3-.1.4 0 .2-.1.3-.1.4 0 .2 0 .3.1.4 0 .2.1.3.1.4.1.1.1.3.2.4l.3.3c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7l.3-.3c.1-.1.1-.2.2-.4.1-.1.1-.3.1-.4v-.4c0-.6-.2-1.2-.7-1.6-.1 0-.2-.1-.3-.2zM47.9 15.9c-2.5-.3-4.8.9-6 3.1-.6 1.1-.2 2.5.9 3 1.1.6 2.5.2 3-.9.3-.5.9-.8 1.5-.7.6.1 1.2.6 1.2 1.1.1.7-.3 1.1-.7 1.3-1.7.8-2.9 2.8-2.9 4.6v1.3c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-1.3c0-.2.2-.5.4-.6 2.2-1.1 3.5-3.4 3.2-5.9-.2-2.6-2.4-4.7-5-5z" }),
        React__namespace.createElement("path", { d: "M56 7.9H8c-3.4 0-6.2 2.8-6.2 6.2v37.7c0 1.6.9 3.1 2.4 3.8.6.3 1.2.4 1.8.4 1 0 1.9-.3 2.7-1l8.5-7H56c3.4 0 6.2-2.8 6.2-6.2V14.2c0-3.5-2.8-6.3-6.2-6.3zm1.8 33.9c0 1-.8 1.8-1.8 1.8H16.3c-.5 0-1 .2-1.4.5l-8.6 7.1v-37c0-1 .8-1.8 1.8-1.8h48c1 0 1.8.8 1.8 1.8v27.6z" })));
};

var SvgSurfBoard = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M43.2 2c-.7-.4-1.6-.4-2.3 0-3.3 1.7-6.4 4.4-8.9 7.9-2.5-3.5-5.6-6.2-8.9-7.9-.7-.4-1.6-.4-2.3 0C10.9 6.9 4.3 20.5 4.3 35.8c0 9.6 2.5 18.6 7.1 25.3.5.7 1.3 1.1 2.1 1.1h36.9c.9 0 1.7-.4 2.1-1.1 4.6-6.7 7.1-15.7 7.1-25.3.1-15.3-6.5-28.9-16.4-33.8zM8.8 35.8c0-.9 0-1.9.1-2.8l24.8-8.8c.6 2.3 1 4.7 1.2 7.2L9 40.7c-.1-1.6-.2-3.2-.2-4.9zM21.9 6.5c3.1 1.8 5.9 4.8 8.1 8.7.8 1.5 1.6 3.1 2.2 4.7L9.4 28.1c1.6-9.8 6.2-18 12.5-21.6zm7.4 51.3H14.6c-2.3-3.6-3.9-7.9-4.9-12.6l25.4-9.1c0 7.5-1.8 14.7-5 20.3-.3.5-.6.9-.8 1.4zm20.1 0H34.5c3.3-6.2 5.1-14 5.1-21.9 0-7.9-1.8-15.5-5-21.7 2.1-3.4 4.7-6 7.5-7.6C50 11 55.2 22.7 55.2 35.8c0 8.3-2 16.1-5.8 22z" })));
};

var SvgSuspect = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 .8C14.8.8.8 14.8.8 32s14 31.3 31.3 31.3 31.3-14 31.3-31.3S49.2.8 32 .8zm0 58c-14.8 0-26.8-12-26.8-26.8S17.3 5.3 32 5.3s26.8 12 26.8 26.8-12 26.7-26.8 26.7z" }),
        React__namespace.createElement("path", { d: "M43.7 43H20.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h23.3c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.2-2.3zM28.9 21.5c0-1.2-1-2.3-2.3-2.3h-10c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h10c1.3 0 2.3-1.1 2.3-2.3zM47.3 19.3h-10c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h10c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3z" })));
};

var SvgSvelte = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M29.493 2.849c8.484-5.406 20.224-2.885 26.166 5.62v.01a18.193 18.193 0 0 1 3.115 13.781 17.188 17.188 0 0 1-2.557 6.386A18.084 18.084 0 0 1 58.274 37c.001 1.07-.095 2.14-.287 3.193a17.064 17.064 0 0 1-7.723 11.458l-14.891 9.5c-8.458 5.406-20.224 2.885-26.167-5.62A18.23 18.23 0 0 1 6.081 41.75a17.188 17.188 0 0 1 2.558-6.39 18.067 18.067 0 0 1-2.084-8.365c.002-1.073.098-2.143.287-3.198a17.099 17.099 0 0 1 7.744-11.448l14.907-9.5Zm-4.438 53.865c1.005-.001 2.006-.13 2.98-.38A10.938 10.938 0 0 0 31.064 55l14.88-9.495a10.303 10.303 0 0 0 4.647-6.89 10.963 10.963 0 0 0-1.87-8.307 11.845 11.845 0 0 0-12.708-4.709c-1.07.286-2.091.734-3.027 1.328L27.3 30.573a3.124 3.124 0 0 1-.917.401 3.561 3.561 0 0 1-3.823-1.417 3.307 3.307 0 0 1-.614-1.922c.008-.185.03-.37.068-.552a3.124 3.124 0 0 1 1.4-2.083l14.907-9.495c.281-.183.591-.318.916-.4.289-.084.586-.13.886-.136A3.569 3.569 0 0 1 43.05 16.5c.4.565.615 1.24.615 1.932v.287l-.053.552.553.172c2.096.633 4.069 1.619 5.833 2.916l.76.558.282-.855c.15-.454.27-.92.359-1.39.11-.635.166-1.278.167-1.922a10.964 10.964 0 0 0-2.016-6.375 11.843 11.843 0 0 0-9.755-5.083c-1.005 0-2.006.125-2.98.375-1.07.288-2.09.738-3.025 1.333l-14.907 9.495a10.323 10.323 0 0 0-4.645 6.89 10.964 10.964 0 0 0 1.875 8.287 11.838 11.838 0 0 0 12.703 4.708c1.07-.287 2.09-.735 3.026-1.328l5.677-3.625c.28-.181.588-.317.911-.401a3.566 3.566 0 0 1 3.828 1.417c.406.559.626 1.23.63 1.922a3.125 3.125 0 0 1-1.453 2.65l-14.89 9.547c-.283.18-.593.316-.917.402a3.46 3.46 0 0 1-.896.114 3.553 3.553 0 0 1-2.927-1.562 3.312 3.312 0 0 1-.614-1.927v-.287l.052-.552-.552-.167a19.338 19.338 0 0 1-5.834-2.916l-.76-.578-.281.854c-.151.455-.271.92-.36 1.39-.11.633-.166 1.275-.166 1.917a10.937 10.937 0 0 0 2.041 6.37 11.822 11.822 0 0 0 9.724 5.094Z", clipRule: "evenodd" })));
};

var SvgSwift = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M63.1 18.2v-1.8c0-1.4-.1-2.7-.4-4.1-.1-1.4-.7-2.7-1.3-3.8-1.3-2.4-3.2-4.5-5.8-5.8-1.3-.6-2.5-1.1-3.9-1.3-1.4-.1-2.7-.4-4.1-.4H15.5c-1.1 0-2 .1-3.1.3-1 .1-2 .4-3 .8-.3.1-.7.3-1 .4-.9.6-1.7 1.2-2.5 1.9-.3.1-.5.4-.9.7-1 1-1.7 2-2.4 3.2-.6 1.3-1.1 2.5-1.3 3.9S1 14.9.9 16.3V47.5c0 1.4.1 2.7.4 4.1.1 1.4.7 2.7 1.3 3.9C3.9 58 5.8 60 8.4 61.3c1.3.6 2.5 1.1 3.9 1.3 1.4.1 2.7.4 4.1.4H47.6c1.4 0 2.7-.1 4.1-.4 1.4-.1 2.7-.7 3.9-1.3 2.4-1.3 4.5-3.2 5.8-5.8.6-1.3 1.1-2.5 1.3-3.9s.4-2.7.4-4.1V18.2zm-9.7 33.3c-2.8-5.3-7.9-4.1-10.5-2.7-.1.1-.4.3-.7.4H42c-5.3 3-12.8 3.1-20.1-.1-6-2.7-11-7-14.5-12.5 1.7 1.3 3.5 2.4 5.5 3.2 7.9 3.7 15.6 3.4 21.2 0-7.9-6-14.3-13.9-19.5-20.2-1-1.1-1.8-2.2-2.7-3.5 6 5.5 15.6 12.5 19 14.3-7.3-7.6-13.6-17.2-13.4-16.7 11.4 11.5 21.9 18.1 21.9 18.1.4.1.7.4 1 .6.1-.6.4-1.1.6-1.7 1.8-6.6-.1-14.3-4.8-20.5 10.7 6.3 16.9 18.4 14.3 28.7-.1.1-.1.4-.1.7 5.1 6.1 3.7 13.1 3 11.9z" })));
};

var SvgSyringe = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M61.6 15.3 48.7 2.4c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l4.8 4.8-4.9 4.9-1-1c-3-3-7.9-3-10.9 0L15.6 32.4c-1.8 1.8-2.5 4.3-2.1 6.7L11 41.5C9.6 43 8.8 44.9 8.8 47c0 1.4.4 2.8 1.1 4l-7.5 7.5c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7l7.5-7.5c1.2.7 2.5 1.1 4 1.1 2.1 0 4-.8 5.5-2.3l2.4-2.4c.4.1.8.1 1.3.1 2 0 3.9-.8 5.5-2.3l18.1-18.1c3-3 3-7.9 0-10.9l-1-1 4.9-4.9 4.8 4.8c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.7-.7.7-2.2-.2-3zM14.8 49.8l-.5-.5c-.6-.6-.9-1.4-.9-2.3s.3-1.7.9-2.3l1.4-1.4 5.1 5.1-1.4 1.4c-1.3 1.2-3.4 1.2-4.6 0zm31.7-22.6-18.1 18c-1.3 1.2-3.3 1.3-4.5 0l-5.1-5.1c-1.3-1.3-1.3-3.3 0-4.5l18.1-18.1c1.3-1.3 3.3-1.3 4.5 0l5.1 5.1c1.3 1.3 1.3 3.3 0 4.6z" })));
};

var SvgTShirt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M45.1 58.6H18.7c-4 0-7.3-3.1-7.6-7.2L9.6 23.3H5.7c-1.7 0-3.1-1.3-3.2-2.9L1.8 8.6c0-1.8 1.4-3.1 3.2-3.1h18.4c1.4 0 2.6.9 3.1 2.3l.1.4c.3 2.4 2.7 4.4 5.5 4.4s5.2-1.9 5.5-4.3c.1-1.5 1.5-2.8 3.2-2.8h18.4c1.8 0 3.2 1.4 3.2 3.1v.2l-.8 11.7c-.1 1.6-1.5 2.9-3.2 2.9h-4.1l-1.5 28.1c-.3 3.9-3.6 7.1-7.7 7.1zm-31-36.9 1.6 29.4c.1 1.6 1.4 2.9 3.1 2.9h26.5c1.6 0 3-1.3 3.1-2.9L50 21.7c0-1.8 1.7-2.9 3.2-2.9h4.1l.6-8.9H41.8C40.7 14 36.7 17 32 17c-4.7 0-8.7-3-9.8-7.1H6.3l.6 8.9h4c1.7 0 3.1 1.3 3.2 2.9z" })));
};

var SvgTab = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M48.6 1.8H15.4c-3.4 0-6.1 2.7-6.1 6.1v48.3c0 3.4 2.7 6.1 6.1 6.1h33.1c3.4 0 6.1-2.7 6.1-6.1V7.9c.1-3.4-2.7-6.1-6-6.1zm1.6 54.3c0 .9-.7 1.6-1.6 1.6H15.4c-.9 0-1.6-.7-1.6-1.6V7.9c0-.9.7-1.6 1.6-1.6h33.1c.9 0 1.6.7 1.6 1.6v48.2z" }),
        React__namespace.createElement("path", { d: "M33 10.1h-7.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3H33c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM39.4 10.1h-1.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h1.3c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3zM32 48.8c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3c0-1.3-1.1-2.3-2.3-2.3z" })));
};

var SvgTag = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M57.4 16.3c0-2.3-1.9-4.1-4.2-4.2l-8.8-.1C40.2 5.6 32.7-.7 21.3 1.1c-1.2.2-2.1 1.3-1.9 2.6.2 1.2 1.3 2.1 2.6 1.9C30 4.3 35.4 8 38.7 12l-6.3-.1h-.1c-1.1 0-2.2.5-3 1.2L8.1 34.2c-1.2 1.2-1.8 2.7-1.8 4.4s.6 3.2 1.8 4.4l18.3 18.3c1.2 1.2 2.8 1.8 4.4 1.8s3.2-.6 4.4-1.8l21.2-21.2c.8-.8 1.3-1.9 1.2-3.1l-.2-20.7zM32.1 58.2c-.7.7-1.8.7-2.5 0L11.3 39.9c-.3-.3-.5-.8-.5-1.2 0-.5.2-.9.5-1.2l21.2-21.2 9.4.2c.4.8.7 1.5 1 2.1-1.7 1-2.8 2.9-2.8 5 0 3.2 2.6 5.8 5.8 5.8s5.8-2.6 5.8-5.8c0-2.7-1.8-4.9-4.3-5.6-.2-.4-.3-.9-.5-1.3l6 .1.4 20.4-21.2 21zm13.7-36.1c.7 0 1.3.6 1.3 1.3s-.6 1.3-1.3 1.3-1.3-.6-1.3-1.3.6-1.3 1.3-1.3z" })));
};

var SvgTailwindcss = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M17.86 26c2-8 7-12 15-12 12 0 13.5 9 19.5 10.5 4 1 7.5-.5 10.5-4.5-2 8-7 12-15 12-12 0-13.5-9-19.5-10.5-4-1-7.5.5-10.5 4.5Zm-15 18c2-8 7-12 15-12 12 0 13.5 9 19.5 10.5 4 1 7.5-.5 10.5-4.5-2 8-7 12-15 12-12 0-13.5-9-19.5-10.5-4-1-7.5.5-10.5 4.5Z", clipRule: "evenodd" })));
};

var SvgTargetCustomer = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60 29.8h-5.9C53 19.3 44.7 11 34.3 9.9V4c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v5.9C19.3 11 11 19.3 9.9 29.8H4c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h5.9c1 10.6 9.4 19 19.9 20.1V60c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3v-5.6c10.5-1.1 18.9-9.5 19.9-20.1H60c1.2 0 2.3-1 2.3-2.3 0-1.2-1.1-2.2-2.3-2.2zm-25.8 20c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2-8-1-14.4-7.5-15.3-15.6h2.3c1.2 0 2.3-1 2.3-2.3 0-1.2-1-2.3-2.3-2.3h-2.3c1.1-8 7.4-14.3 15.3-15.3.1 1.1 1.1 2 2.2 2s2.1-.9 2.2-2c8 1 14.3 7.3 15.3 15.3-1.1.1-2 1.1-2 2.2 0 1.2.9 2.1 2 2.2-.8 8.3-7.2 14.8-15.3 15.8z" }),
        React__namespace.createElement("path", { d: "M38.1 36.1c1.3-1.4 2.1-3.3 2.1-5.4 0-4.5-3.7-8.2-8.2-8.2-4.5 0-8.2 3.7-8.2 8.2 0 2.1.8 4 2.1 5.4-1.6.7-3 1.6-4.3 2.7-.9.8-1 2.2-.2 3.2.4.5 1.1.8 1.7.8.5 0 1.1-.2 1.5-.6 2.1-1.8 4.7-2.9 7.4-2.9 2.8 0 5.4 1 7.4 2.8.9.8 2.3.8 3.2-.2.8-.9.8-2.3-.2-3.2-1.3-1-2.7-1.9-4.3-2.6zM32 27c2 0 3.7 1.7 3.7 3.7S34 34.4 32 34.4s-3.7-1.7-3.7-3.7S30 27 32 27z" })));
};

var SvgTargetRevenue = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M61 29.8h-5.2C54.7 18.4 45.6 9.3 34.3 8.2V3c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v5.2C18.4 9.3 9.3 18.4 8.2 29.8H3c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h5.2C9.3 45.8 18.4 54.9 29.8 56v5c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3v-5.2C45.8 54.7 54.9 45.6 56 34.2h5c1.2 0 2.3-1 2.3-2.3 0-1.1-1.1-2.1-2.3-2.1zM34.3 51.3v-.8c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v.8c-8.9-1-16-8.1-17-17h.8c1.2 0 2.3-1 2.3-2.3 0-1.2-1-2.3-2.3-2.3h-.8c1-8.9 8.1-16 17-17v.8c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3v-.8c8.9 1 16 8.1 17 17h-.8c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h.8c-1.1 8.9-8.1 15.9-17 17z" }),
        React__namespace.createElement("path", { d: "M34.5 29.8h-5c-.8 0-1.5-.6-1.5-1.3s.7-1.3 1.5-1.3h7.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-2c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2h-.9c-3.3 0-6 2.6-6 5.8 0 3.2 2.7 5.8 6 5.8h5c.8 0 1.5.6 1.5 1.3s-.7 1.3-1.5 1.3h-8.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h4.4c0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2 3.1-.2 5.6-2.7 5.6-5.8-.1-3.2-2.8-5.8-6.1-5.8z" })));
};

var SvgTarget = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60 29.8h-5.9c-1-10.8-9.4-19.5-19.9-20.6V4c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v5.2c-10.5 1.1-18.9 9.7-19.9 20.6H4c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h5.9c1 10.8 9.4 19.5 19.9 20.6v5c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3v-5.2c10.5-1.1 18.9-9.7 19.9-20.6H60c1.2 0 2.3-1 2.3-2.3 0-1.1-1.1-2.1-2.3-2.1zm-10.4 0h-6.2c-.9-4.8-4.5-8.6-9.2-9.5v-6.5c8.1 1 14.4 7.6 15.4 16zM32 39.5c-4 0-7.2-3.4-7.2-7.5s3.2-7.4 7.1-7.5c3.9 0 7.1 3.4 7.1 7.5.1 4.1-3.1 7.4-7 7.5zm-2.2-25.8v6.5c-4.6.9-8.3 4.7-9.2 9.5h-6.2c1-8.3 7.3-14.9 15.4-16zM14.4 34.3h6.2c.9 4.8 4.5 8.6 9.2 9.5v6.5c-8.1-1.1-14.4-7.7-15.4-16zm19.9 16v-6.5c4.6-.9 8.3-4.7 9.2-9.5h6.2c-1.1 8.3-7.4 14.9-15.4 16z" })));
};

var SvgTaxi = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M15.6 41.2h6.1c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-6.1c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2zM41.1 41.2h6.1c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-6.1c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2z" }),
        React__namespace.createElement("path", { d: "M60 24.6h-3.9l-4.5-11.5c-.6-1.8-2.4-3-4.4-3h-5.1l-.7-2.3c-.7-2.1-2.6-3.6-4.8-3.6h-9.2c-2.2 0-4.2 1.4-4.8 3.6l-.7 2.3h-5.7c-1.9 0-3.6 1.2-4.4 3L7.2 24.6H4c-1.2 0-2.2 1-2.2 2.2S2.8 29 4 29h1.5V44.8c0 2.6 1.9 4.7 4.3 5.2v3.5c0 3.4 2.8 6.2 6.2 6.2h1.7c3.4 0 6.2-2.8 6.2-6.2v-3.4h14.8v3.4c0 3.4 2.8 6.2 6.2 6.2h1.7c3.4 0 6.2-2.8 6.2-6.2V50c2.7-.2 4.8-2.5 4.8-5.2V29H60c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2zM26.9 9.1c.1-.2.3-.4.5-.4h9.2c.2 0 .5.2.5.4l.3 1H26.6l.3-1zm-11 5.6s.1-.2.2-.2h31.1c.1 0 .2.1.2 0v.1L52.3 27H11.1l4.8-12.3zm3.6 38.8c0 1-.8 1.8-1.8 1.8H16c-1 0-1.8-.8-1.8-1.8v-3.4h5.2v3.4zm29 0c0 1-.8 1.8-1.8 1.8H45c-1 0-1.8-.8-1.8-1.8v-3.4h5.2v3.4zm4.9-8.6c0 .4-.3.8-.8.8H10.8c-.4 0-.8-.3-.8-.8V31.5h43.4v13.4z" })));
};

var SvgTeabag = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M15.5 31.7h5.1c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-5.1c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3z" }),
        React__namespace.createElement("path", { d: "m59.7 42.7-3.8-1.9V22.2c0-11.3-9-20.5-20.1-20.5-11 0-18.6 6-19.9 15.3H8.3c-1.7 0-3.1 1.2-3.5 2.9l-1.6 6.9c-.2.5-.2.9-.2 1.1v28.2c0 1.6.6 3.2 1.8 4.3 1.2 1.1 2.7 1.8 4.3 1.8l17.7-.1c3.4 0 6.1-2.8 6.1-6.1V27.8c0-.2 0-.4-.1-.5L31 19.9c-.3-1.7-1.8-2.9-3.5-2.9h-7.2c1.4-7.9 8.8-10.8 15.3-10.8 8.6 0 15.6 7.2 15.6 16v18.6l-3.8 1.9c-.8.4-1.2 1.2-1.2 2V58c0 2.3 1.9 4.2 4.2 4.2h6.3c2.3 0 4.2-1.9 4.2-4.2V44.7c.1-.8-.4-1.6-1.2-2zM28.4 27.9V56c0 .9-.7 1.6-1.6 1.6l-17.7.1c-.4 0-.8-.2-1.1-.5-.3-.3-.5-.7-.5-1.1v-28L9 21.5h17.8l1.6 6.4zm28.1 29.9h-5.7V46.1l2.8-1.4 2.8 1.4v11.7z" })));
};

var SvgTelegramOriginal = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m62.8 10.8-9.4 44c-.7 3.1-2.5 3.8-5.1 2.4L34.2 46.8l-6.9 6.6c-.7.7-1.4 1.4-3 1.4l1.1-14.5 26.3-23.9c1.1-1.1-.3-1.5-1.7-.6L17.3 36.4 3.2 32.1c-3.1-1-3.1-3.1.7-4.5L58.7 6.3c2.7-.8 5 .6 4.1 4.5Z" })));
};

var SvgTelegram = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M53.8 10.2C48.1 4.2 40.3 1 32 1s-16.1 3.2-21.8 9.2S1 23.7 1 32s3.2 16.1 9.2 21.8S23.7 63 32 63s16.1-3.2 21.8-9.2S63 40.3 63 32s-3.2-16.1-9.2-21.8zM32 60C16.5 60 4 47.5 4 32S16.5 4 32 4s28 12.7 28 28-12.5 28-28 28z" }),
        React__namespace.createElement("path", { d: "M46.7 17.6c-1.1-.7-2.7-.1-3.1.1L14 29.3c-1.1.4-2.3 1.3-2 2.7.1 1.6 1.8 2.1 2 2.3l6.9 2.4c.5 2 1.2 4 1.8 6 .2.7.5 1.4.7 2.1.2.6.3 1.2.7 1.7.2.2.4.4.6.5.4.1.8.2 1.2.2.3 0 .8-.1 1-.4l3.9-3.7 6.6 5.1c.1.1.1.1.3.1.6.3 1.1.3 1.4.3.3 0 .8-.1 1.1-.1 1.1-.4 1.7-1.5 1.7-1.7 0-.1.1-.1.1-.1l5.4-26.9v-.1c.1-1.4-.5-1.8-.7-2.1zm-20.1 26 .4-3.7 2 1.4-2.4 2.3zm13.3 2.1c-.1.3-.3.5-.6.5-.2 0-.3-.1-.5-.2-3.7-2.9-7.3-5.7-11-8.6 4.2-3.6 8.3-7.3 12.4-11.1.5-.4.9-.8 1.2-1.4.3-.6.3-1.3-.1-1.7-.4-.4-1-.6-1.6-.4-.6.1-1.1.4-1.6.7-5.5 3.5-10.9 7-16.4 10.4l-.6.3c-.2 0-.4 0-.6-.1-1.1-.4-2.3-.7-3.4-1.1-1.1-.4-2.3-.6-3.3-1.2 10.3-4.1 20.6-8.1 31-12.2-1.6 8.5-3.2 17-4.8 25.6 0 .1-.1.3-.1.5z" })));
};

var SvgTesla = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M62.594 10.416C52.088 5.837 41.825 4.382 32.86 4.45c-8.967-.068-19.232 1.387-29.736 5.966C1.872 8.148 1.36 6.772 1.36 6.772 12.842 2.23 23.597.673 32.86.634c9.26.04 20.016 1.594 31.5 6.138 0 0-.36 1.117-1.765 3.644Zm-20.918 3.381-8.813 49.569-8.885-49.576c-8.344.006-10.99.927-11.376 4.688 0 0-5.638-2.102-8.477-6.37C15.215 6.97 26.36 6.738 26.36 6.738l6.496 7.912 6.495-7.91s11.145.231 22.237 5.37c-2.843 4.268-8.478 6.37-8.478 6.37-.383-3.76-3.033-4.682-11.434-4.682Z", clipRule: "evenodd" })));
};

var SvgTextAlignCenter = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M11.6 8.9h40.7c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H11.6c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3zM7.8 25.8h48.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H7.8c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3zM15.5 38.2c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h33.1c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H15.5zM60 55.1H4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h56c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" })));
};

var SvgTextAlignJustify = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M4 8.9h56c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H4c-1.2 0-2.3 1-2.3 2.3S2.8 8.9 4 8.9zM60 21.3H4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h56c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM60 38.2H4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h56c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM42.5 55.1H4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h38.5c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" })));
};

var SvgTextAlignLeft = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M4 8.9h40.7c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H4c-1.2 0-2.3 1-2.3 2.3S2.8 8.9 4 8.9zM4 25.8h48.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H4c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3zM4 42.7h33.1c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H4c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3zM60 55.1H4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h56c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" })));
};

var SvgTextAlignRight = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M19.3 8.9H60c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H19.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3zM60 21.3H11.6c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3H60c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM60 38.2H26.9c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3H60c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM60 55.1H4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h56c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" })));
};

var SvgTextFormatRemove = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M43 52.9H6.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3H43c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM59.3 41l2.3-2.3c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0l-2.3 2.3-2.3-2.3c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l2.3 2.3-2.3 2.3c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7l2.3-2.3 2.3 2.3c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.9-.9.9-2.3 0-3.2L59.3 41zM30.5 10.1c-.3-.9-1-1.2-1.9-1.2h-7.7c-.8 0-1.7.3-1.9 1.2L4.2 45c-.6 1.4.3 2.8 1.8 2.8h5.1c.9 0 1.8-.7 2-1.3l2.4-6h18l2.2 6c.2.9 1.2 1.3 2 1.3h5.4c1.7-.2 2.7-1.7 2-2.9L30.5 10.1zM19.3 33.2l5.2-13.7 5.2 13.7H19.3z" })));
};

var SvgTextFormat = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M6.1 46h5.3c.9 0 1.9-.7 2.1-1.4l2.5-6.3h18.8l2.3 6.3c.2.9 1.2 1.4 2.1 1.4h5.7c1.8-.2 2.8-1.8 2.1-3.1L31.7 6.5c-.4-.9-1.1-1.3-2-1.3h-8c-.8 0-1.8.4-2 1.3L4.2 43.1c-.6 1.4.3 2.9 1.9 2.9zm19.4-29.6 5.4 14.3H20l5.5-14.3zM47.3 56.5H4c-1.2 0-2.3 1-2.3 2.3S2.8 61 4 61h43.3c1.2 0 2.3-1 2.3-2.3s-1.1-2.2-2.3-2.2zM60 3c-1.2 0-2.3 1-2.3 2.3V46c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V5.3C62.3 4 61.2 3 60 3z" })));
};

var SvgThought = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M25.5 44.2c-4.9 0-9.6-2.5-12.4-6.6C8 35 4.8 29.8 4.8 24.2c0-8.3 6.8-15.1 15.1-15.2.7 0 1.4 0 2.1.1C24.5 4 29.7.7 35.5.7c6.7 0 12.6 4.5 14.4 10.9 5.6 2.3 9.3 7.7 9.3 13.9 0 8.3-6.7 15-15 15-2.5 0-4.9-.6-7.1-1.8-2.9 3.4-7.1 5.4-11.6 5.5zm-5.6-30.7c-5.8.1-10.6 4.8-10.6 10.7 0 4.1 2.5 7.9 6.2 9.6.4.2.7.5 1 .9 1.9 3.1 5.3 5 8.9 5 3.7-.1 7.1-2 9.1-5.1.3-.5.9-.9 1.5-1 .6-.1 1.3 0 1.8.4 1.9 1.4 4.1 2.2 6.4 2.2 5.8 0 10.5-4.7 10.5-10.5 0-4.7-3-8.7-7.4-10.1-.8-.2-1.4-.9-1.5-1.7-1-4.9-5.3-8.5-10.3-8.5-4.5 0-8.5 2.9-10 7.2-.4 1.1-1.6 1.8-2.7 1.5-1-.5-2-.6-2.9-.6zM40.7 56c-3.6 0-6.6-3-6.6-6.6s3-6.6 6.6-6.6 6.6 3 6.6 6.6-2.9 6.6-6.6 6.6zm0-8.7c-1.2 0-2.1.9-2.1 2.1 0 1.2.9 2.1 2.1 2.1s2.1-.9 2.1-2.1c.1-1.2-.9-2.1-2.1-2.1zM52.6 63.3c-3 0-5.4-2.4-5.4-5.4s2.4-5.4 5.4-5.4c1.5 0 2.9.6 3.9 1.6S58 56.5 58 58v.2c-.2 2.8-2.5 5.1-5.4 5.1zm0-6.3c-.5 0-.9.4-.9.9s.4.9.9.9.8-.4.9-.9c0-.3-.1-.4-.2-.5-.1-.2-.4-.4-.7-.4z" })));
};

var SvgThumbsDown = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M53.5 8.1c-4.5-3-10.9-4.7-17.7-4.7-1.2 0-2.2 0-3.5.1-8.1.7-13.5 2-16.2 3.8 0 0-.1 0-.1.1l-.5.3H6.6c-2.7 0-4.8 2.2-4.8 4.8v22.9c0 2.6 2.2 4.8 4.8 4.8h11.9c.1 0 .2.1.2.1 2.1 2.1 7.5 8.1 13.2 17 1.3 2.1 3.4 3.3 5.9 3.3h.6c2.6-.2 4.8-1.6 5.9-3.8 1.4-2.6.3-10.2-.3-13.9 5.3.1 14 .3 16.6-5.4 3.7-8.7 1.3-23.9-7.1-29.4zM6.3 35.5V12.6c0-.2.2-.3.3-.3H12v23.5H6.5c-.1 0-.2-.2-.2-.3zm50.1.1c-1.4 3.1-8.6 2.9-12.5 2.8h-2.8c-.7 0-1.3.3-1.8.8-.4.5-.6 1.2-.4 1.9l.3 1.4c1.4 7.4 1.2 11.5.9 12.2-.5 1-1.5 1.3-2.2 1.4-1 .1-1.7-.3-2.3-1.2-5.9-9.2-11.6-15.4-13.8-17.7-.9-.9-2.1-1.5-3.5-1.5h-2V12.2c.4 0 .8-.2 1.1-.4l1-.7c1-.6 4.3-2.2 14.2-3.1 1-.1 1.9-.1 3-.1 5.9 0 11.5 1.4 15.3 3.9 6.5 4.2 8.5 17 5.5 23.8z" })));
};

var SvgThumbsUp = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60.5 26.6c-2.6-5.8-11.4-5.6-16.6-5.4.6-3.6 1.7-11.3.3-13.9-1.1-2.3-3.3-3.7-5.9-3.9-2.6-.2-5 1-6.4 3.3-5.7 8.9-11.2 14.8-13.2 17 0 0-.1.1-.2.1h-12c-2.6 0-4.8 2.2-4.8 4.8v22.9c0 2.7 2.2 4.8 4.8 4.8h8.9l.5.3s.1 0 .1.1c2.7 1.8 8.2 3.1 16.2 3.8 1.3.1 2.3.1 3.5.1 6.8 0 13.3-1.7 17.7-4.7 8.5-5.5 10.9-20.7 7.1-29.3zM6.3 51.4V28.5c0-.2.1-.3.3-.3H12v23.5H6.6c-.2.1-.3-.1-.3-.3zm44.7.8c-3.8 2.5-9.3 3.9-15.3 3.9-1.1 0-2 0-3-.1-9.8-.9-13.1-2.4-14.1-3.1l-1-.7c-.3-.2-.7-.4-1.1-.4V28.2h2c1.3 0 2.6-.5 3.5-1.5 2.2-2.2 7.9-8.4 13.8-17.7.4-.8 1.2-1.2 2.2-1.1.7.1 1.7.3 2.2 1.4.3.7.5 4.8-.9 12.1l-.4 1.5c-.2.7 0 1.4.4 1.9s1.1.8 1.8.8h2.8c3.9-.1 11.1-.3 12.4 2.8 3.1 6.8 1.1 19.6-5.3 23.8z" })));
};

var SvgThunderAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M57.3 23.5c-2.7-2.9-6.4-4.9-10.3-5.6-2.2-3.5-5.4-6.1-9.1-7.4-1.7-.7-3.7-1-5.8-1-9.5 0-17.2 7.4-17.8 16.7-7 .9-12.5 6.9-12.5 14.1C1.8 48.2 8 54.5 16 54.5h27.8c10.2 0 18.6-8.3 18.6-18.5-.1-4.6-1.9-9.1-5.1-12.5zM43.7 50H15.9c-5.4 0-9.7-4.3-9.7-9.7 0-5.4 4.3-9.7 9.7-9.7h.5c1.2 0 2.3-1 2.3-2.3v-1C18.7 20 24.7 14 32 14c1.6 0 3 .2 4.3.7 3.1 1.1 5.7 3.3 7.3 6.3.4.7 1 1.1 1.7 1.2 3.3.3 6.4 1.9 8.7 4.3 2.4 2.6 3.8 6 3.8 9.5 0 7.8-6.4 14-14.1 14z" }),
        React__namespace.createElement("path", { d: "M36.7 31.4h-3.9l4.8-6.2c.8-1 .6-2.4-.4-3.2-1-.8-2.4-.6-3.2.4l-7.2 9.3c-.6.8-.7 1.8-.3 2.7.4.9 1.3 1.4 2.3 1.4h3.7l-5.1 6.1c-.8 1-.7 2.4.3 3.2.4.4.9.5 1.4.5.6 0 1.3-.3 1.7-.8l7.8-9.3c.6-.8.8-1.8.4-2.8-.4-.7-1.3-1.3-2.3-1.3z" })));
};

var SvgThunder = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M57.3 19.6c-2.7-2.9-6.4-4.9-10.3-5.6-2.2-3.5-5.4-6.1-9.1-7.4-1.7-.7-3.7-1-5.8-1-9.5 0-17.2 7.4-17.8 16.7-7 .9-12.5 6.8-12.5 14.1C1.8 44.3 8 50.6 16 50.6c1.2 0 2.2-1 2.3-2.2 0-1.2-1-2.3-2.2-2.3-5.4 0-9.7-4.3-9.7-9.7 0-5.4 4.3-9.7 9.7-9.7h.5c1.2 0 2.3-1 2.3-2.3v-1c0-7.3 6-13.3 13.3-13.3 1.6 0 3 .2 4.3.7 3.1 1.1 5.7 3.3 7.3 6.3.4.7 1 1.1 1.7 1.2 3.3.3 6.4 1.9 8.7 4.3 2.4 2.6 3.8 6 3.8 9.5 0 5.8-3.7 11.1-9.2 13.1-1.2.4-1.8 1.7-1.3 2.9.4 1.2 1.7 1.8 2.9 1.3 7.3-2.6 12.1-9.6 12.1-17.3-.2-4.5-2-9-5.2-12.5z" }),
        React__namespace.createElement("path", { d: "M48.9 32.3c-.6-1.3-1.8-2-3.2-2h-3.2l.4-.7c.8-1.5.8-3.4-.1-4.9-.9-1.5-2.5-2.4-4.2-2.4h-7.7c-1.9 0-3.7 1.1-4.5 2.9l-5.6 12.5c-.5 1.1-.4 2.4.3 3.4s1.8 1.6 3 1.6h4.5l-3.3 11c-.5 1.7.2 3.4 1.8 4.2.5.3 1.1.4 1.7.4 1 0 2.1-.5 2.8-1.3l17-20.9c.7-1.1.9-2.5.3-3.8zm-18 18.2 2.8-9.4c.2-.7.1-1.4-.3-2-.4-.6-1.1-.9-1.8-.9h-6.1l5-11.2c.1-.2.2-.2.4-.2h7.7c.2 0 .3.1.4.2s.1.3 0 .4l-2.2 4c-.4.7-.4 1.5 0 2.2.4.7 1.1 1.1 1.9 1.1h5L30.9 50.5z" })));
};

var SvgTicketAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M46.8 1.8H17.2c-4.4 0-8 3.6-8 8v49c0 1.3.9 2.5 2.2 2.8 1.3.4 2.6-.2 3.3-1.3l3.5-5.8 4.5 6.5c.5.8 1.5 1.3 2.4 1.3 1 0 1.9-.5 2.4-1.3l4.6-6.7 4.6 6.7c.5.8 1.5 1.3 2.4 1.3s1.9-.5 2.4-1.3l4.4-6.5 3.5 5.9c.7 1.1 2 1.7 3.3 1.3 1.3-.4 2.2-1.5 2.2-2.8V9.8c-.1-4.4-3.7-8-8.1-8zm3.5 51.4L48.4 50c-.5-.9-1.4-1.4-2.4-1.4s-1.9.5-2.5 1.3L39 56.5l-4.6-6.7c-.5-.8-1.4-1.3-2.4-1.3s-1.9.5-2.4 1.3L25 56.5l-4.5-6.7c-.6-.8-1.5-1.3-2.4-1.3H18c-1 0-1.9.6-2.4 1.4L13.8 53V9.8c0-2 1.6-3.5 3.5-3.5h29.5c2 0 3.5 1.6 3.5 3.5v43.4z" }),
        React__namespace.createElement("path", { d: "M42.3 19.7H21.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h20.6c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM42.3 30H21.7c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h20.6c1.2 0 2.3-1 2.3-2.3-.1-1.3-1.1-2.3-2.3-2.3z" })));
};

var SvgTicket = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M59.6 26.4c1.5-.1 2.7-1.3 2.7-2.9V18c0-3.4-2.7-6.1-6.1-6.1H7.9c-3.4 0-6.1 2.7-6.1 6.1v5.6c0 1.5 1.2 2.8 2.7 2.9 2.8.3 4.9 2.7 4.9 5.6 0 2.9-2.1 5.3-4.9 5.5-1.5.1-2.7 1.4-2.7 2.9V46c0 3.4 2.7 6.1 6.1 6.1h48.3c3.4 0 6.1-2.7 6.1-6.1v-5.5c0-1.5-1.2-2.8-2.7-2.9-2.8-.3-4.9-2.7-4.9-5.6 0-3 2.1-5.4 4.9-5.6zm-1.8 15.4V46c0 .9-.7 1.6-1.6 1.6H31.7v-5.4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v5.4H7.9c-.9 0-1.6-.7-1.6-1.6v-4c4.4-1 7.6-5 7.6-9.8 0-4.7-3.2-8.8-7.6-9.9V18c0-.9.7-1.6 1.6-1.6h19.3v5.4c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-5.4h24.4c.9 0 1.6.7 1.6 1.6v4.1c-4.4 1.1-7.6 5.1-7.6 9.9 0 4.7 3.2 8.7 7.6 9.8z" }),
        React__namespace.createElement("path", { d: "M29.5 27.2c-1.2 0-2.3 1-2.3 2.3v5.1c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-5.1c-.1-1.3-1.1-2.3-2.3-2.3z" })));
};

var SvgTiktokAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M33.413.053C36.907 0 40.373.027 43.84 0c.213 4.08 1.68 8.24 4.667 11.12 2.986 2.96 7.2 4.32 11.306 4.773V26.64c-3.84-.133-7.706-.933-11.2-2.587-1.52-.693-2.933-1.573-4.32-2.48-.026 7.787.027 15.574-.053 23.334-.213 3.733-1.44 7.44-3.6 10.506-3.493 5.12-9.547 8.454-15.76 8.56-3.813.214-7.627-.826-10.88-2.746C8.613 58.053 4.827 52.24 4.267 46c-.054-1.333-.08-2.667-.027-3.973.48-5.067 2.987-9.92 6.88-13.227 4.427-3.84 10.613-5.68 16.4-4.587.053 3.947-.107 7.894-.107 11.84-2.64-.853-5.733-.613-8.053.987-1.68 1.093-2.96 2.773-3.627 4.667-.56 1.36-.4 2.853-.373 4.293.64 4.373 4.853 8.053 9.333 7.653 2.987-.026 5.84-1.76 7.387-4.293.507-.88 1.067-1.787 1.093-2.827.267-4.773.16-9.52.187-14.293.027-10.747-.027-21.467.053-32.187Z" })));
};

var SvgTiktok = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M55.619 1H8.381C4.31 1 1 4.311 1 8.381v47.238C1 59.689 4.311 63 8.381 63h47.238C59.689 63 63 59.689 63 55.619V8.381C63 4.31 59.689 1 55.619 1Zm-5.896 27.048c-.338.033-.678.05-1.018.052a11.058 11.058 0 0 1-9.255-5.001v17.03a12.588 12.588 0 1 1-12.587-12.587c.263 0 .52.023.778.04v6.203c-.258-.031-.512-.078-.778-.078a6.424 6.424 0 1 0 0 12.848c3.549 0 6.683-2.796 6.683-6.344l.062-28.925h5.934a11.054 11.054 0 0 0 10.187 9.868v6.894" })));
};

var SvgTimer = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M34.3 12V6.3h5.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H24.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h5.4V12c-12.9 1.2-23 12-23 25.1C6.8 51 18.1 62.3 32 62.3S57.2 51 57.2 37.1C57.2 24 47.1 13.2 34.3 12zM32 57.8c-11.4 0-20.7-9.3-20.7-20.7S20.6 16.4 32 16.4s20.7 9.3 20.7 20.7S43.4 57.8 32 57.8z" }),
        React__namespace.createElement("path", { d: "M44.7 34.8H34.3V24.4c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v10.5h-2.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h2.8v2.8c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3v-2.8h10.5c1.2 0 2.3-1 2.3-2.3s-1.1-2.4-2.4-2.4z" })));
};

var SvgTounge = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 .8C14.8.8.8 14.8.8 32s14 31.3 31.3 31.3 31.3-14 31.3-31.3S49.2.8 32 .8zm0 58c-14.8 0-26.8-12-26.8-26.8S17.3 5.3 32 5.3s26.8 12 26.8 26.8-12 26.7-26.8 26.7z" }),
        React__namespace.createElement("circle", { cx: 20, cy: 22.8, r: 4 }),
        React__namespace.createElement("circle", { cx: 44, cy: 22.8, r: 4 }),
        React__namespace.createElement("path", { d: "M43.6 40.6c-3.2 2.9-7.3 4.6-11.6 4.6s-8.5-1.6-11.6-4.6c-.9-.8-2.3-.8-3.2.1-.8.9-.8 2.3.1 3.2 4 3.7 9.2 5.8 14.7 5.8 2.6 0 5.2-.5 7.6-1.4v2.3c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V46c.9-.6 1.8-1.3 2.6-2 .9-.8 1-2.3.1-3.2s-2.4-1-3.3-.2z" })));
};

var SvgToyota = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M44.304 52.69c-.057-3.152-2.602-5.697-5.698-5.697-3.171 0-5.716 2.545-5.697 5.698 0 3.114 2.526 5.66 5.697 5.697 3.096-.038 5.64-2.583 5.698-5.697Zm-8.85 0c-.057-1.993 1.367-3.607 3.152-3.588 1.71 0 3.115 1.595 3.134 3.589-.02 1.956-1.424 3.57-3.134 3.608-1.785-.019-3.21-1.633-3.152-3.608ZM50.741 49.386h3.305V47.45H44.91v1.937h3.438v8.698h2.392v-8.698ZM56.895 55.691h4.348l.893 2.393h2.849l-4.35-10.635h-2.98l-4.502 10.635h2.849l.893-2.393Zm2.26-5.697 1.48 3.893h-3l1.5-3.893h.02ZM4.27 58.084h2.412v-8.698h3.286V47.45H.985v1.937H4.27v8.698ZM21.97 52.69c-.038-3.152-2.583-5.697-5.697-5.697-3.153 0-5.679 2.545-5.698 5.698 0 3.114 2.545 5.66 5.698 5.697 3.114-.038 5.66-2.583 5.697-5.697Zm-8.83 0c-.039-1.993 1.367-3.607 3.152-3.588 1.728 0 3.152 1.595 3.152 3.589s-1.405 3.57-3.152 3.608c-1.766-.019-3.19-1.633-3.153-3.608ZM27.364 58.084h1.196V54.04l4.197-6.59H30.06l-2.696 4.501-2.545-4.5H21.97l4.197 6.59v4.044h1.197ZM32.34 42.436c16.218 0 29.435-8.261 29.435-18.403 0-10.141-13.198-18.421-29.436-18.421-16.237 0-29.436 8.261-29.436 18.421S16.102 42.436 32.34 42.436Zm0-35.913c15.724 0 28.524 7.863 28.524 17.51 0 9.648-12.8 17.51-28.525 17.51-15.724 0-28.524-7.843-28.524-17.51 0-9.666 12.8-17.51 28.524-17.51" }),
        React__namespace.createElement("path", { fill: "#000", d: "m25.18 19.247.436.076.076-.455c.703-4.235 2.222-7.559 4.178-9.116l1.12-.893-1.424.076c-6.893.418-11.888 2.241-12.743 4.653a2.662 2.662 0 0 0-.133.76c0 .398.114.816.342 1.196.95 1.633 3.912 2.963 8.148 3.684m-7.502-5.336c.646-1.842 5.07-3.438 10.73-3.97-1.614 1.824-2.849 4.768-3.494 8.338-3.685-.684-6.306-1.861-7.084-3.172a1.402 1.402 0 0 1-.228-.74c0-.152.019-.304.076-.456ZM28.313 19.153l-.095.493.494.038c1.178.095 2.412.133 3.627.133 1.216 0 2.45-.057 3.628-.133l.493-.038-.076-.493c-.683-3.818-2.184-6.096-4.045-6.096-1.86 0-3.361 2.278-4.045 6.096m4.045-5.204c1.254 0 2.431 1.9 3.058 4.843-1.007.057-2.013.114-3.058.114a40.4 40.4 0 0 1-3.057-.114c.608-2.963 1.785-4.843 3.057-4.843M38.986 18.887l.076.455.437-.076c4.235-.721 7.197-2.07 8.147-3.684.36-.627.437-1.31.209-1.956-.855-2.393-5.85-4.235-12.743-4.653l-1.425-.095 1.121.893c1.956 1.557 3.475 4.9 4.178 9.116m8.033-4.976c.057.152.076.304.076.456 0 .247-.076.493-.228.74-.778 1.31-3.418 2.488-7.102 3.172-.646-3.57-1.88-6.514-3.495-8.337 5.64.513 10.066 2.127 10.73 3.969M29.32 39.264l1.367.095-1.045-.892c-2.696-2.298-4.367-7.787-4.367-14.282v-1.538l-.361-.076c-6.476-1.159-11.072-3.893-11.737-6.932l-.152-.721-.588.474c-3.096 2.602-4.73 5.679-4.73 8.907 0 7.616 9.287 14.035 21.594 14.965M12.513 16.532c1.177 3.076 5.602 5.64 11.85 6.837v.797c0 6.04 1.424 11.243 3.798 14.054C16.937 37.023 8.62 31.155 8.62 24.28c0-2.773 1.349-5.431 3.893-7.748M36.764 23.634v-.664l-.494.038c-1.272.114-2.602.17-3.912.17s-2.64-.056-3.912-.17l-.494-.038v.664c0 6.04 1.9 10.617 4.406 10.617 2.507 0 4.406-4.558 4.406-10.616Zm-4.406 9.705c-1.671 0-3.437-3.76-3.513-9.382 1.158.076 2.336.133 3.513.133 1.178 0 2.355-.057 3.495-.133-.058 5.622-1.843 9.382-3.495 9.382ZM39.385 22.628v1.538c.019 6.514-1.653 11.984-4.35 14.281l-1.044.893 1.367-.095c12.326-.93 21.593-7.35 21.593-14.965 0-3.228-1.633-6.324-4.728-8.907l-.57-.474-.171.721c-.646 3.058-5.26 5.774-11.736 6.932l-.38.076h.019Zm12.78-6.096c2.546 2.317 3.894 4.976 3.894 7.748 0 6.875-8.318 12.743-19.542 13.94 2.355-2.811 3.798-8.015 3.798-14.054v-.797c6.248-1.197 10.673-3.76 11.87-6.837" })));
};

var SvgTrainAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M54 17.6c-.8-6.8-6.6-11.9-13.5-11.9h-.7V5c0-1.8-1.5-3.2-3.2-3.2h-9.2c-1.8 0-3.2 1.5-3.2 3.2v.7h-.8c-6.9 0-12.6 5.1-13.4 11.9-.1.5-.1 1.1-.1 1.6v27.1c0 3.4 2.7 6.1 6.1 6.1h.9l-4.2 6.4c-.7 1-.4 2.4.6 3.1.4.3.8.4 1.2.4.7 0 1.4-.4 1.9-1l5.8-8.9h19.7l5.6 8.8c.4.7 1.2 1 1.9 1 .4 0 .8-.1 1.2-.3 1.1-.7 1.4-2.1.7-3.1l-4-6.4h.7c3.4 0 6.1-2.7 6.1-6.1V19.1c0-.5 0-1-.1-1.5zm-24.2 2.5V28H14.4v-7.9h15.4zm4.4 0h15.4V28H34.2v-7.9zM28.7 6.2h6.7v3.3h-6.7V6.2zm-5.3 4h.8v.7c0 1.8 1.5 3.2 3.2 3.2h9.2c1.8 0 3.2-1.5 3.2-3.2v-.7h.7c3.7 0 7 2.2 8.3 5.4H15.1c1.4-3.2 4.6-5.4 8.3-5.4zM48 47.9H16c-.9 0-1.6-.7-1.6-1.6V32.5h35.2v13.8c0 .9-.7 1.6-1.6 1.6z" }),
        React__namespace.createElement("path", { d: "M26.5 37.4h-5.4c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h5.4c1.2 0 2.2-1 2.2-2.2s-.9-2.2-2.2-2.2zM43.3 37.4h-5.4c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h5.4c1.2 0 2.2-1 2.2-2.2s-.9-2.2-2.2-2.2z" })));
};

var SvgTrain = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M54 17.6c-.8-6.8-6.6-11.9-13.5-11.9h-.7V5c0-1.8-1.5-3.3-3.3-3.3h-9.2C25.5 1.7 24 3.2 24 5v.7h-.8c-6.9 0-12.6 5.1-13.4 11.9-.1.5-.1 1.1-.1 1.6v27.1c0 3.4 2.7 6.1 6.1 6.1h.9l-4.2 6.4c-.7 1-.4 2.4.6 3.1.4.3.8.4 1.2.4.7 0 1.4-.4 1.9-1l5.8-8.9h19.7l5.6 8.8c.4.7 1.2 1 1.9 1 .4 0 .8-.1 1.2-.3 1.1-.7 1.4-2.1.7-3.1l-4-6.4h.9c3.4 0 6.1-2.7 6.1-6.1V19.1c0-.5 0-1-.1-1.5zm-24.2 2.5V28H14.4v-7.9h15.4zm4.5 0h15.4V28H34.3v-7.9zM28.7 6.3h6.7v3.3h-6.7V6.3zm-5.3 3.9h.8v.7c0 1.8 1.5 3.3 3.3 3.3h9.2c1.8 0 3.3-1.5 3.3-3.3v-.7h.7c3.7 0 7 2.2 8.3 5.4H15.1c1.4-3.2 4.6-5.4 8.3-5.4zM48 47.9H16c-.9 0-1.6-.7-1.6-1.6V32.5h35.2v13.8c0 .9-.7 1.6-1.6 1.6z" }),
        React__namespace.createElement("path", { d: "M23.4 34.4c-3.2 0-5.8 2.6-5.8 5.8 0 3.2 2.6 5.8 5.8 5.8s5.8-2.6 5.8-5.8c0-3.2-2.6-5.8-5.8-5.8zm0 7.1c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3s1.3.6 1.3 1.3c0 .7-.6 1.3-1.3 1.3zM40.6 34.4c-3.2 0-5.8 2.6-5.8 5.8 0 3.2 2.6 5.8 5.8 5.8s5.8-2.6 5.8-5.8c0-3.2-2.6-5.8-5.8-5.8zm0 7.1c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3s1.3.6 1.3 1.3c0 .7-.5 1.3-1.3 1.3z" })));
};

var SvgTrashCan = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M48.9 8.8h-7.7V7.1c0-3-2.4-5.4-5.4-5.4h-7.7c-3 0-5.4 2.4-5.4 5.4v1.7H15c-2.9 0-5.3 2.4-5.3 5.3v3c0 2.2 1.3 4 3.2 4.8l1.6 34.6c.2 3.3 2.8 5.8 6.1 5.8h22.5c3.3 0 6-2.6 6.1-5.8L51 21.8c1.9-.8 3.2-2.7 3.2-4.8v-3c0-2.8-2.4-5.2-5.3-5.2zM27.3 7.1c0-.5.4-.9.9-.9h7.7c.5 0 .9.4.9.9v1.7h-9.4V7.1zm-13 7c0-.4.3-.8.8-.8h33.8c.4 0 .8.3.8.8v3c0 .4-.3.8-.8.8H15.1c-.4 0-.8-.3-.8-.8v-3zm28.9 43.7H20.8c-.9 0-1.6-.7-1.6-1.5l-1.6-33.9h28.9l-1.6 33.9c-.1.8-.8 1.5-1.7 1.5z" }),
        React__namespace.createElement("path", { d: "M32 32.4c-1.2 0-2.3 1-2.3 2.3v12.7c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3V34.7c0-1.3-1.1-2.3-2.3-2.3zM40 34.4c-1.3-.1-2.3.8-2.4 2.1l-.6 8.8c-.1 1.2.8 2.3 2.1 2.4h.2c1.2 0 2.2-.9 2.2-2.1l.6-8.8c0-1.3-.9-2.3-2.1-2.4zM23.9 34.4c-1.2.1-2.2 1.2-2.1 2.4l.7 8.8c.1 1.2 1.1 2.1 2.2 2.1h.2c1.2-.1 2.2-1.2 2.1-2.4l-.7-8.8c0-1.3-1.1-2.2-2.4-2.1z" })));
};

var SvgTravel = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M62.3 43.9c0-5.5-4.3-9.8-9.8-9.8-5.5 0-9.9 4.4-9.9 9.8 0 3.2 3.2 8.8 5.6 12.6H18.6c-1.4 0-2.8-.6-3.8-1.6-1.3-1.3-1.8-3.1-1.4-5 .5-2.4 2.8-4.2 5.5-4.2h9.9c2.6 0 5.1-1 7-2.9 2.7-2.7 3.6-6.6 2.3-10.3-1.3-3.9-5.1-6.6-9.5-6.6H15.8c2.4-3.9 5.7-9.8 5.7-13.1 0-5.5-4.3-9.8-9.8-9.8-5.5 0-9.9 4.4-9.9 9.8 0 4.6 6.7 14.6 8 16.6l.3.3.1.1c.1.1.2.1.3.2l.1.1c.1.1.2.1.3.1h.1c.2 0 .3.1.5.1h17c2.4 0 4.5 1.4 5.2 3.5.7 2.1.2 4.2-1.3 5.7-1 1-2.3 1.6-3.8 1.6h-9.9c-4.9 0-9 3.3-9.9 7.8-.7 3.3.3 6.7 2.7 9 1.9 1.9 4.3 2.9 7 2.9h33.8c.2 0 .3 0 .5-.1h.1c.1 0 .2-.1.3-.1.1 0 .1-.1.2-.1.1-.1.2-.1.3-.2l.1-.1c.1-.1.2-.2.2-.3 0 0 .1 0 .1-.1 1.5-1.6 8.2-11.2 8.2-15.9zM11.7 7.5c3 0 5.3 2.3 5.3 5.3 0 1.9-2.7 7-5.3 11.2-2.7-4.2-5.4-9.2-5.4-11.2 0-2.9 2.4-5.3 5.4-5.3zm40.7 31.1c3 0 5.3 2.3 5.3 5.3 0 1.9-2.7 6.8-5.4 10.8-2.6-4-5.4-8.9-5.4-10.8.1-2.9 2.5-5.3 5.5-5.3z" }),
        React__namespace.createElement("path", { d: "M13.9 12.7c0-.6-.2-1.2-.6-1.6-.8-.8-2.4-.8-3.2 0l-.3.3c-.1.1-.1.3-.2.4-.1.1-.1.3-.1.4v.8c0 .1.1.3.1.4 0 .1.1.3.2.4l.3.3c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.3-.2.6-.8.6-1.4zM54 45.9c.4-.4.7-1 .7-1.6 0-.6-.2-1.2-.7-1.6l-.3-.3c-.1-.1-.3-.1-.4-.2-.1 0-.3-.1-.4-.1H52c-.1 0-.3.1-.4.1-.1.1-.3.1-.4.2l-.3.3c-.4.4-.7 1-.7 1.6 0 .6.2 1.2.7 1.6l.3.3c.1.1.3.1.4.2.1 0 .3.1.4.1h.4c.6 0 1.2-.2 1.6-.6z" })));
};

var SvgTree = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M46.9 25.8c0-11.6-6-24-14.9-24s-14.9 12.4-14.9 24c0 11.3 5.4 20.3 12.7 21.9V60c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3V47.7c7.1-1.6 12.5-10.6 12.5-21.9zM34.2 43v-5.9c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3V43c-4.6-1.8-8.2-8.9-8.2-17.2 0-10 5.1-19.5 10.4-19.5s10.4 9.5 10.4 19.5c.2 8.2-3.4 15.4-8 17.2z" })));
};

var SvgTrees = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M14.2 14.5C6.7 14.5 1.8 24.6 1.8 34c0 9 4.3 16.2 10.2 17.7v8.2c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-8.3c5.8-1.5 10.1-8.7 10.1-17.7-.1-9.3-5.1-19.4-12.5-19.4zm2.3 32.4v-4.7c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3V47c-3.2-1.7-5.6-7-5.6-13 0-7.6 3.9-15 7.9-15s7.9 7.4 7.9 15c0 5.9-2.4 11.1-5.6 12.9zM62.3 26.6c0-12-6-24.8-15-24.8s-15 12.8-15 24.8c0 11.6 5.4 20.9 12.7 22.6V60c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V49.2c7.2-1.6 12.7-11 12.7-22.6zM49.5 44.5v-7.4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v7.4c-4.6-1.9-8.2-9.3-8.2-17.8 0-10.4 5.1-20.3 10.5-20.3s10.5 9.9 10.5 20.3c.1 8.5-3.6 15.9-8.2 17.8z" })));
};

var SvgTrello = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M55.4 1H8.8C4.5 1 1 4.5 1 8.8v46.5C1 59.5 4.5 63 8.8 63h46.5c4.2 0 7.8-3.5 7.8-7.8V8.8C63 4.5 59.6 1 55.4 1zM28.3 47.9c0 2-1.7 3.7-3.7 3.7H13.1c-2 0-3.7-1.7-3.8-3.7V12.7C9.3 10.7 11 9 13 9h11.4c2 0 3.7 1.7 3.7 3.7l.2 35.2zM55 32.4c0 2-1.7 3.7-3.7 3.7H40c-2 0-3.7-1.7-3.7-3.7V12.7c0-2 1.7-3.7 3.7-3.7h11.3c2 0 3.7 1.7 3.7 3.7v19.7z" })));
};

var SvgTrowel = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60.3 48.7 48.4 36.9c-1.2-1.2-2.9-1.9-4.6-1.9-1.6 0-3 .6-4.2 1.6l-7.4-7.4 7.7-7.6c.9-.9 1.2-2.1 1-3.3-.2-1.2-1-2.2-2.2-2.7L6.9 2c-1.4-.5-2.9-.2-4 .8-1.1 1.1-1.4 2.6-.8 4l13.5 31.6c.5 1.1 1.5 1.9 2.7 2.1.2 0 .5.1.7.1 1 0 1.9-.4 2.6-1.1l7.4-7.3 7.4 7.4c-2.1 2.5-2 6.4.4 8.8l11.9 11.9c1.2 1.2 2.9 1.9 4.6 1.9 1.7 0 3.4-.7 4.6-1.9l2.4-2.4c2.5-2.5 2.5-6.6 0-9.2zm-41-13.2L7.1 7l28.6 12.2-16.4 16.3zm37.8 19.3-2.4 2.4c-.8.8-2.1.8-2.8 0L40 45.3c-.8-.8-.8-2 0-2.8l2.4-2.4c.4-.4.9-.6 1.4-.6.5 0 1 .2 1.4.6L57.1 52c.8.7.8 2 0 2.8z" })));
};

var SvgTumblr = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M50.1 59.1c-1.7 1.7-6 3.9-11.8 3.9-14.6 0-17.9-10.7-17.9-17V28.5h-5.8c-.7 0-1.3-.6-1.3-1.3V19c0-.8.6-1.7 1.4-2 7.7-2.6 10-9.1 10.3-14 .1-1.4.7-2 2-2h8.6c.7 0 1.3.6 1.3 1.3v13.9H47c.7 0 1.3.4 1.3 1.1v9.8c0 .7-.6 1.3-1.3 1.3H36.8v16c0 4.2 3 6.5 8.2 4.4.6-.1 1.1-.4 1.5-.3.4.1.7.4.8 1l2.7 7.7c.3.6.6 1.4.1 1.9Z" })));
};

var SvgTwitch = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M6.5 1 2.4 11.7v43.5h14.8V63h8.3l7.9-7.9h12l16.2-16.2V1H6.5zM56 36.1l-9.3 9.3H32l-7.9 7.9v-7.9H11.6V6.5H56v29.6zm-9.2-18.9v16.2h-5.5V17.2h5.5zm-14.8 0v16.2h-5.5V17.2H32z" })));
};

var SvgTwitterFill = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m56.1 15.3 3.8-4.8c1.1-1.3 1.4-2.3 1.5-2.8-3 1.8-5.8 2.4-7.6 2.4h-.7l-.4-.4c-2.4-2.1-5.4-3.2-8.6-3.2-7 0-12.5 5.8-12.5 12.5 0 .4 0 1 .1 1.4l.3 2-2.1-.1C17.1 21.9 6.6 10.9 4.9 9c-2.8 5-1.2 9.8.5 12.8l3.4 5.6-5.4-3c.1 4.2 1.7 7.5 4.8 9.9l2.7 2-2.7 1.1c1.7 5.1 5.5 7.2 8.3 8l3.7 1-3.5 2.4c-5.6 4-12.6 3.7-15.7 3.4 6.3 4.4 13.8 5.4 19 5.4 3.9 0 6.8-.4 7.5-.7 28-6.6 29.3-31.6 29.3-36.6v-.7l.6-.4c3.4-3.2 4.8-4.9 5.6-5.9-.3.1-.7.3-1.1.4l-5.8 1.6z" })));
};

var SvgTwitterOriginal = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M20.3 57.4c23.6 0 36.4-19.5 36.4-36.4 0-.4 0-1.1-.1-1.7 2.5-1.8 4.7-4.1 6.4-6.6-2.4 1.1-4.8 1.7-7.3 2 2.7-1.6 4.7-4.1 5.6-7.1-2.5 1.4-5.1 2.5-8.2 3.1-2.4-2.5-5.6-4.1-9.3-4.1-7.1 0-12.9 5.8-12.9 12.9 0 1 .1 2 .3 3C20.9 21.8 11.5 16.7 5.1 9c-1.1 2-1.7 4.1-1.7 6.4 0 4.5 2.3 8.3 5.8 10.6-2.1-.1-4.1-.7-5.8-1.6v.1c0 6.1 4.4 11.4 10.2 12.6-1.1.3-2.3.4-3.2.4-.8 0-1.7-.1-2.4-.3 1.7 5.1 6.4 8.8 12 8.9-4.4 3.4-9.9 5.5-15.8 5.5-1.2.2-2.2 0-3.2-.1 5.4 3.8 12.1 5.9 19.3 5.9" })));
};

var SvgTwitter = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M21.4 56.8c-6.7 0-13.2-1.9-18.6-5.6-.9-.6-1.2-1.7-.9-2.7.4-1 1.4-1.6 2.4-1.4.8.1 1.6.2 2.4.2 2.9 0 5.7-.6 8.3-1.7-3.2-1.6-5.8-4.4-6.9-8-.2-.7-.1-1.4.3-2C5.6 33 4 29.4 4 25.5v-.1c0-.8.4-1.5 1.1-1.9.1-.1.2-.1.3-.2-.9-1.8-1.4-3.9-1.4-5.9 0-2.5.6-4.8 1.8-6.8.4-.6 1-1 1.8-1.1.7-.1 1.5.3 1.9.8C14.3 16.2 21.2 20 28.6 21v-.1c0-7.5 6.1-13.6 13.6-13.6 3.3 0 6.4 1.2 8.9 3.4 1.1-.4 2.3-1.2 3.5-1.9.6-.4 1.2-.8 1.8-1.1.7-.4 1.6-.4 2.4.1s1.1 1.3 1 2.1c-.1.6-.3 2-.7 3.5h.4c.9-.2 1.8.2 2.3 1 .5.8.5 1.7 0 2.5-1.4 2.1-3.5 3.5-5.4 4.8-.2.1-.4.3-.5.4v.3C56 39.2 43 56.8 21.4 56.8zM12.8 51c2.7.8 5.6 1.2 8.6 1.2 18.8 0 30.1-15.3 30.1-30.1v-1.2c-.1-.8.2-1.6.9-2.1.5-.4 1.1-.8 1.6-1.2l.9-.6c-.5-.2-.9-.7-1.1-1.2-.2-.5-.2-1.1 0-1.6-.9.4-1.8.7-2.7.9-.7.1-1.5-.1-2-.7-1.8-1.9-4.1-2.9-6.6-2.9-5 0-9.1 4.1-9.1 9.1 0 .6.1 1.3.2 2.1.1.7 0 1.4-.5 1.9s-1.1.8-1.8.8c-8.5-.4-16.5-3.9-22.5-9.8-.1.5-.1 1-.1 1.5 0 3.1 1.5 5.9 4.1 7.6.8.6 1.2 1.6.9 2.6-.3 1-1.2 1.6-2.2 1.6-.7 0-1.5-.1-2.2-.3 1.1 2.8 3.6 5 6.7 5.6 1 .2 1.8 1.1 1.8 2.2s-.7 2-1.7 2.2c-.6.2-1.3.3-1.8.4 1.7 2 4.1 3.2 6.8 3.2 1 0 1.8.6 2.1 1.5.3.9 0 1.9-.8 2.5-3.1 2.4-6.2 4-9.6 4.8z" })));
};

var SvgTypescript = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M58.55 0H7.05A6.25 6.25 0 0 0 .8 6.25v51.5A6.25 6.25 0 0 0 7.05 64h51.5a6.25 6.25 0 0 0 6.25-6.25V6.25A6.25 6.25 0 0 0 58.55 0ZM37.925 35.5h-8v22.875H23.55V35.5h-8v-5.125h22.375V35.5ZM58.55 54.263c-.5 1.125-1.362 1.962-2.375 2.625-1 .612-2.125 1.087-3.5 1.375-1.375.287-2.75.425-4.25.425s-3-.126-4.375-.388-2.612-.65-3.625-1.175v-6.006c-.079-.063-.16-.124-.237-.189l.237-.055v.244a11.836 11.836 0 0 0 3.513 1.936c1.25.475 2.624.712 4 .712.874 0 1.537-.075 2.124-.212.613-.15 1.1-.35 1.5-.6.4-.25.698-.55.888-.9.19-.35.287-.725.287-1.125 0-.575-.162-1.075-.474-1.5-.288-.425-.713-.825-1.25-1.188-.5-.362-1.125-.712-1.875-1.05-.75-.337-1.513-.687-2.375-1.037-2.125-1-3.8-2-4.875-3.375-1.088-1.25-1.625-2.875-1.625-4.75 0-1.5.287-2.7.875-3.75.625-1.125 1.362-1.95 2.375-2.625 1-.688 2.125-1.188 3.5-1.5a18.845 18.845 0 0 1 4.25-.475c1.5 0 2.75.087 3.875.262 1.125.175 2.175.45 3.125.813v5.875a8.258 8.258 0 0 0-1.5-.863 13.888 13.888 0 0 0-3.5-.975c-.55-.078-1.1-.117-1.625-.117-.763 0-1.413.063-2 .2-.6.138-1.1.325-1.5.575-.4.25-.712.537-.938.887-.226.35-.338.738-.338 1.163 0 .462.125.875.375 1.25.25.362.6.712 1.063 1.05.413.325.975.65 1.625.975.75.325 1.425.65 2.25.988 1.125.474 2.125 1 3 1.5a9.928 9.928 0 0 1 2.25 1.75c.675.625 1.163 1.375 1.5 2.25.338.875.513 1.862.513 3 0 1.625-.388 2.875-.888 4Z" })));
};

var SvgUbuntu = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 66.1", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 2C14.8 2 1 16 1 33s13.8 31 31 31 31-13.8 31-31S49.2 2 32 2zm6.6 11.7c1.1-2 3.5-2.5 5.4-1.4 2 1.1 2.5 3.5 1.4 5.5s-3.5 2.5-5.4 1.4c-1.9-1.2-2.5-3.6-1.4-5.5zM12 37c-2.3 0-4-1.7-4-4s1.7-3.9 3.9-3.9 3.9 1.7 3.9 3.9c.1 2.3-1.7 4-3.8 4zm3.4.4c2.8-2.3 2.8-6.5 0-8.7 1.1-4.1 3.7-7.6 7-9.9l3 4.9c-6.3 4.5-6.3 14.1 0 18.6l-3 4.9c-3.2-2.2-5.9-5.7-7-9.8zM44 53.9c-2 1.1-4.4.4-5.4-1.4-1-1.8-.4-4.4 1.4-5.4 1.8-1 4.4-.4 5.4 1.4 1.3 1.9.6 4.3-1.4 5.4zm.1-8.6c-3.2-1.3-7 .8-7.6 4.4-.7.1-6.1 1.7-12.1-1.1l2.8-5.1c7.2 3.2 15.4-1.4 16.1-9.3l5.8.1c-.2 4.1-2.2 8-5 11zm-.8-13.2c-.7-7.7-8.9-12.7-16.1-9.3l-2.8-5.1c6.1-3 11.4-1.4 12.1-1.1.6 3.5 4.2 5.6 7.6 4.4 3 3 4.8 6.8 5.1 11l-5.9.1z" })));
};

var SvgUnderline = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 49.5c11.8 0 21.4-9.4 21.4-20.9V4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v24.6c0 9-7.6 16.4-16.9 16.4C22.6 45 15 37.7 15 28.6V4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v24.6c.2 11.6 9.8 20.9 21.6 20.9zM56.2 57.8H7.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h48.4c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" })));
};

var SvgUnlink = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m29.7 13.2-8.1-8.1C17.1.6 9.7.6 5.1 5.1 3 7.4 1.8 10.3 1.8 13.4c0 3.1 1.2 6 3.4 8.2l8 8.1c2.3 2.3 5.3 3.4 8.2 3.4 3 0 6-1.1 8.2-3.4 2.2-2.2 3.4-5.1 3.4-8.2.1-3.1-1.1-6-3.3-8.3zM16.4 26.5l-8-8.1C7 17 6.3 15.2 6.3 13.3c0-1.9.7-3.7 2.1-5.1 1.4-1.4 3.2-2.1 5.1-2.1 1.8 0 3.7.7 5.1 2.1l8.1 8c1.3 1.4 2.1 3.2 2.1 5.1 0 1.2-.3 2.4-.9 3.5l-2.5-2.5c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l2.3 2.3c-2.8 1.4-6 .9-8.1-1.3zM58.9 42.3l-8.1-8.1c-4.5-4.5-12-4.5-16.5 0-2.2 2.2-3.4 5.1-3.4 8.2s1.2 6 3.4 8.2l8 8.1c2.3 2.3 5.3 3.4 8.2 3.4 3 0 6-1.1 8.2-3.4 2.2-2.2 3.4-5.1 3.4-8.2.2-3-1-5.9-3.2-8.2zm-3.3 13.3c-2.8 2.8-7.4 2.8-10.1 0l-8-8.1c-1.4-1.4-2.1-3.2-2.1-5.1 0-1 .2-2 .6-2.9l2.2 2.3c.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.6.9-.9.9-2.3 0-3.2L39 36.3c1.1-.6 2.3-.9 3.5-.9 1.8 0 3.7.7 5.1 2.1l8.1 8c1.3 1.4 2.1 3.2 2.1 5.1-.1 1.9-.8 3.7-2.2 5zM39.7 16.4c1.2 0 2.3-1 2.3-2.3V6.5c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v7.7c0 1.2 1 2.2 2.3 2.2zM47.6 24.4c0 1.2 1 2.3 2.3 2.3h7.6c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-7.6c-1.3 0-2.3 1-2.3 2.3zM41.8 20.6c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7l6.5-6.6c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0l-6.5 6.6c-.9.9-.9 2.3 0 3.2zM24.4 47.6c-1.2 0-2.3 1-2.3 2.3v7.7c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-7.7c-.1-1.3-1.1-2.3-2.3-2.3zM13.9 39.7c0-1.2-1-2.3-2.3-2.3H6.5c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h5.1c1.3-.1 2.3-1.1 2.3-2.3zM16.9 42.3l-6.5 6.5c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7l6.5-6.5c.9-.9.9-2.3 0-3.2-.9-.9-2.4-.9-3.2 0z" })));
};

var SvgUnlock = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M50.4 21.9h-6.1v-7.4c0-6.8-5.5-12.3-12.3-12.3S19.8 7.7 19.8 14.5c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3c0-4.3 3.5-7.8 7.8-7.8s7.8 3.5 7.8 7.8v7.4H13.6c-3.8 0-6.9 3-6.9 6.6V43c0 10.3 8.9 18.7 19.8 18.7h11c10.9 0 19.7-8.5 19.7-19V28.5c.1-3.6-3-6.6-6.8-6.6zm2.4 20.8c0 8-6.8 14.5-15.2 14.5h-11c-8.4 0-15.3-6.4-15.3-14.2V28.5c0-1.2 1.1-2.1 2.4-2.1h36.7c1.3 0 2.4.9 2.4 2.1v14.2z" }),
        React__namespace.createElement("path", { d: "M36.1 39.4h-8.2c-1.8 0-3.3 1.5-3.3 3.3v8.2c0 1.8 1.5 3.3 3.3 3.3h8.2c1.8 0 3.3-1.5 3.3-3.3v-8.2c0-1.8-1.5-3.3-3.3-3.3zm-1.2 10.2h-5.7v-5.7h5.7v5.7z" })));
};

var SvgUnsplash = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M43.6 28.5H63V63H1V28.5h19.4v17.2h23V28.5zM43.6 1H20.4v17.3h23V1z" })));
};

var SvgUpload = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60 44c-1.2 0-2.3 1-2.3 2.3v8.9c0 .9-.7 1.6-1.6 1.6H7.9c-.9 0-1.6-.7-1.6-1.6v-8.9C6.3 45 5.2 44 4 44s-2.3 1-2.3 2.3v8.9c0 3.4 2.7 6.1 6.1 6.1h48.3c3.4 0 6.1-2.7 6.1-6.1v-8.9c.1-1.3-1-2.3-2.2-2.3z" }),
        React__namespace.createElement("path", { d: "m19.1 20.7 10.7-10.4v34.6c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3V10.3l10.7 10.4c.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7.9-.9.8-2.3 0-3.2l-14.7-14c-.9-.8-2.3-.8-3.1 0L15.9 17.5c-.9.9-.9 2.3 0 3.2.9.8 2.3.9 3.2 0z" })));
};

var SvgUser = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 36.8c8.3 0 15-6.7 15-15s-6.7-15-15-15-15 6.7-15 15 6.7 15 15 15zm0-25.5c5.8 0 10.5 4.7 10.5 10.5S37.8 32.3 32 32.3s-10.5-4.7-10.5-10.5S26.2 11.3 32 11.3zM61.5 53.2C53.3 46.3 42.9 42.5 32 42.5S10.7 46.3 2.5 53.2c-.9.8-1.1 2.2-.3 3.2.8.9 2.2 1.1 3.2.3C12.8 50.4 22.2 47 32 47s19.2 3.4 26.5 9.6c.4.4.9.5 1.5.5s1.3-.3 1.7-.8c.8-.9.7-2.3-.2-3.1z" })));
};

var SvgUsers = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M21.8 36.8c6.9 0 12.4-5.6 12.4-12.4S28.6 12 21.8 12 9.4 17.5 9.4 24.4 15 36.8 21.8 36.8zm0-20.4c4.4 0 7.9 3.6 7.9 7.9s-3.6 7.9-7.9 7.9c-4.4 0-7.9-3.6-7.9-7.9s3.5-7.9 7.9-7.9zM21.8 39.9c-7.2 0-14.1 2.9-19.4 8.3-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7 4.4-4.5 10.2-7 16.2-7 5.9 0 11.7 2.5 16.2 7 .9.9 2.3.9 3.2 0 .9-.9.9-2.3 0-3.2-5.3-5.3-12.2-8.3-19.4-8.3zM47.3 36.8c4 0 7.3-3.3 7.3-7.3s-3.3-7.3-7.3-7.3-7.3 3.3-7.3 7.3c-.1 4 3.2 7.3 7.3 7.3zm0-10.2c1.6 0 2.8 1.3 2.8 2.8 0 1.6-1.3 2.8-2.8 2.8s-2.8-1.3-2.8-2.8c-.1-1.5 1.2-2.8 2.8-2.8zM61.5 45.6c-5.3-4.9-12.6-6.9-19.9-5-1.2.3-1.9 1.5-1.6 2.7.3 1.2 1.6 1.9 2.7 1.6 5.8-1.5 11.6 0 15.7 3.9.4.4 1 .6 1.5.6.6 0 1.2-.2 1.6-.7 1-.8.9-2.2 0-3.1z" })));
};

var SvgUx = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M48.1 38.5c1.9 0 3.5-1.6 3.5-3.5v-7.4c0-1.9-1.6-3.5-3.5-3.5h-7.4c-1.9 0-3.5 1.6-3.5 3.5V29H26.8v-1.4c0-1.9-1.6-3.5-3.5-3.5h-1.4v-7.9h1.4c1.9 0 3.5-1.6 3.5-3.5V5.3c0-1.9-1.6-3.5-3.5-3.5h-7.4c-1.9 0-3.5 1.6-3.5 3.5v7.4c0 1.9 1.6 3.5 3.5 3.5h1.4v7.9h-1.4c-1.9 0-3.5 1.6-3.5 3.5V35c0 1.9 1.6 3.5 3.5 3.5h7.4c1.9 0 3.5-1.6 3.5-3.5v-1.4h10.4V35c0 1.9 1.6 3.5 3.5 3.5h1.4v9.3h-1.4c-1.9 0-3.5 1.6-3.5 3.5v7.4c0 1.9 1.6 3.5 3.5 3.5h7.4c1.9 0 3.5-1.6 3.5-3.5v-7.4c0-1.9-1.6-3.5-3.5-3.5h-1.4v-9.3h1.4zM16.9 6.2h5.4v5.4h-5.4V6.2zM22.3 34h-5.4v-5.4h5.4V34zm24.8 23.8h-5.4v-5.4h5.4v5.4zm-5.4-29.2h5.4V34h-5.4v-5.4z" })));
};

var SvgVector = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M55.3 29.2c3.8 0 6.9-3.1 6.9-6.9s-3.1-6.9-6.9-6.9c-3.1 0-5.8 2.1-6.6 4.9H38.6c-.9-2.8-3.5-4.9-6.6-4.9-3.1 0-5.8 2.1-6.6 4.9H15.3c-.9-2.8-3.5-4.9-6.6-4.9-3.8 0-6.9 3.1-6.9 6.9s3.1 6.9 6.9 6.9c2.9 0 5.4-1.8 6.4-4.4h3.6c-3.5 3-6.1 7.1-7 11.7h-1.3c-2 0-3.6 1.6-3.6 3.6V45c0 2 1.6 3.6 3.6 3.6h7.5c2 0 3.6-1.6 3.6-3.6v-4.9c0-2-1.6-3.6-3.6-3.6h-1.5c1.2-4.9 4.8-9 9.6-10.9 1.2 2.1 3.4 3.6 6 3.6 2.5 0 4.7-1.4 5.9-3.4 4.6 1.9 7.9 5.9 9.1 10.7h-1c-2 0-3.6 1.6-3.6 3.6V45c0 2 1.6 3.6 3.6 3.6h7.5c2 0 3.6-1.6 3.6-3.6v-4.9c0-2-1.6-3.6-3.6-3.6h-1.9c-.9-4.6-3.4-8.8-6.9-11.7h4.2c1 2.6 3.5 4.4 6.4 4.4zm0-9.3c1.3 0 2.4 1.1 2.4 2.4s-1.1 2.4-2.4 2.4c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4zM8.7 24.7c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4 2.4 1.1 2.4 2.4-1.1 2.4-2.4 2.4zM17 44.1h-5.7V41H17v3.1zm35.7 0H47V41h5.7v3.1zM32 24.7c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4c1.3 0 2.4 1.1 2.4 2.4s-1.1 2.4-2.4 2.4z" })));
};

var SvgVercel = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "m32 6 30 52H2L32 6Z", clipRule: "evenodd" })));
};

var SvgVideo = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60.7 27.7c-1-.8-2.3-1.1-3.6-.8L47.6 29c-.3-3.1-3-5.6-6.2-5.6h-2.7c.7-1.3 1.1-2.7 1.1-4.3 0-4.8-3.9-8.8-8.7-8.8-4.6 0-8.3 3.5-8.7 8-1.1-2.3-3.4-4-6.1-4-3.7 0-6.8 3-6.8 6.8 0 .8.1 1.5.4 2.3H8c-3.4 0-6.3 2.8-6.3 6.3v17.7c0 3.4 2.8 6.3 6.3 6.3h33.4c3.4 0 6.3-2.8 6.3-6.3v-.5l9.4 2.1c.3.1.6.1.9.1 1 0 1.9-.3 2.6-.9 1-.8 1.6-2 1.6-3.3V31c.1-1.3-.5-2.5-1.5-3.3zM31.1 14.9c2.3 0 4.2 1.9 4.2 4.3s-1.9 4.3-4.2 4.3-4.3-1.9-4.3-4.3 2-4.3 4.3-4.3zm-7.6 8.5h-.8l.3-1.2c.1.4.2.8.5 1.2zM14 21.2c0-1.2 1-2.3 2.3-2.3s2.3 1 2.3 2.3-1 2.3-2.3 2.3-2.3-1.1-2.3-2.3zm29.2 26.1c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8V29.7c0-1 .8-1.8 1.8-1.8h33.4c1 0 1.8.8 1.8 1.8v17.6zm14.6-2.8-10.1-2.2v-8.7l10.1-2.2v13.1z" })));
};

var SvgVimeo = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M63 17.6c-.3 6.1-4.5 14.4-12.7 24.9C41.9 53.5 34.7 59 28.9 59c-3.5 0-6.6-3.2-9.2-10-1.7-6-3.2-12.2-5-18.4-1.8-6.6-3.8-10-6.1-10-.4 0-2.1 1-4.9 3l-2.7-4c3.1-2.7 6.1-5.4 9.2-8.2 4.1-3.5 7-5.4 9.2-5.5 4.8-.4 7.7 3 8.9 9.9 1.1 7.6 2 12.4 2.5 14.2 1.4 6.3 3 9.4 4.5 9.4 1.3 0 3.2-2 5.9-6.1s3.9-7.3 4.2-9.4c.4-3.5-1.1-5.4-4.2-5.4-1.4 0-3 .3-4.5 1.1 3-10 8.7-14.9 17.3-14.7 6.3.3 9.3 4.5 9 12.7z" })));
};

var SvgVisa = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M24.8 39.6h4l2.4-15.2h-3.9zM39.2 30.5c-1.4-.7-2.2-1.2-2.2-1.9 0-.6.7-1.3 2.3-1.3 1.3 0 2.2.3 3 .6l.4.1.5-3.2c-.8-.3-2-.6-3.5-.6-3.9 0-6.7 2-6.7 5 0 2.2 1.9 3.5 3.5 4.2 1.5.7 2.1 1.2 2.1 1.9 0 1-1.2 1.5-2.4 1.5-1.6 0-2.5-.2-3.8-.8l-.5-.2-.6 3.5c.9.3 2.6.7 4.3.7 4.2.1 6.9-2 6.9-5.2-.1-1.8-1.1-3.2-3.3-4.3zM50.2 24.4c-.9 0-1.7.3-2.1 1.3l-5.9 13.9h4v.1s.6-1.9.9-2.3h5c.1.5.5 2.3.5 2.3h3.7l-3.2-15.2h-2.9zm-2 9.9c.3-.9 1.6-4.2 1.6-4.2 0 .1.4-.9.5-1.4l.3 1.3s.8 3.7.9 4.4c-.6-.1-2.5-.1-3.3-.1zM21.6 24.4l-3.9 10.5-2.1-10.5H7.7l4.4 3.3 3.2 11.9h4.1l6.4-15.2z" }),
        React__namespace.createElement("path", { d: "M54.6 13.3H9.4c-4.2 0-7.7 3.4-7.7 7.7v22c0 4.2 3.4 7.7 7.7 7.7h45.1c4.2 0 7.7-3.4 7.7-7.7V21c.1-4.2-3.4-7.7-7.6-7.7zM57.8 43c0 1.8-1.4 3.2-3.2 3.2H9.4c-1.8 0-3.2-1.4-3.2-3.2V21c0-1.8 1.4-3.2 3.2-3.2h45.1c1.8 0 3.2 1.4 3.2 3.2v22z" })));
};

var SvgVk = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M41.4 1H22.6C5.1 1 1 5.1 1 22.6v19C1 58.9 5.1 63 22.6 63h19C58.9 63 63 58.9 63 41.4V22.6C63 5.1 58.9 1 41.4 1zM51 45.2h-4.5c-1.7 0-2.3-1.4-5.4-4.5-2.7-2.7-3.9-3-4.5-3-.8 0-1.1.1-1.1 1.4v4.1c0 1.1-.3 1.7-3.2 1.7-4.8 0-10-3-13.8-8.3-5.6-7.9-7-13.8-7-15.1 0-.7.1-1.3 1.4-1.3h4.5c1.1 0 1.6.4 2 1.7 2.3 6.5 5.9 12.1 7.5 12.1.6 0 .8-.3.8-1.7v-6.6c-.1-3.1-1.7-3.2-1.7-4.5 0-.4.4-1.1 1.1-1.1h7c1 0 1.3.4 1.3 1.7v8.9c0 1 .4 1.3.7 1.3.6 0 1.1-.3 2.1-1.4 3.2-3.7 5.5-9.2 5.5-9.2.3-.7.8-1.3 2-1.3h4.5c1.4 0 1.7.7 1.4 1.7-.6 2.7-6.1 10.4-6.1 10.4-.4.7-.7 1.1 0 2 .4.7 2.1 2 3.1 3.2 2 2.3 3.4 4.1 3.8 5.4.5 1.7-.1 2.4-1.4 2.4z" })));
};

var SvgVmware = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M34.79 26.151c1.61.503 2.664 1.581 3.161 3.235v9.244h7.154v-.01h1.101v-.019h.103V22.918c-.821-2.729-2.56-4.51-5.214-5.343H9.073c-2.655.83-4.393 2.61-5.214 5.343v32.97c.821 2.728 2.597 4.455 5.326 5.18h31.798c2.73-.725 4.505-2.452 5.326-5.18v-8.596H37.95v2.07c-.497 1.654-1.573 2.7-3.227 3.139h-19.27c-1.655-.439-2.73-1.485-3.228-3.139V29.385c.498-1.653 1.552-2.731 3.162-3.234H34.79Z" }),
        React__namespace.createElement("path", { fill: "#000", d: "M61.86 8.275c-.821-2.729-2.56-4.51-5.215-5.343h-32.02c-2.656.833-4.394 2.614-5.215 5.343v8.385h8.357v-1.917c.498-1.654 1.552-2.732 3.163-3.234h19.4c1.611.502 2.665 1.58 3.163 3.234v19.976c-.498 1.654-1.574 2.7-3.228 3.139h-19.27c-1.654-.439-2.73-1.485-3.228-3.139v-9.482H19.41v16.008c.82 2.728 2.596 4.455 5.326 5.18h31.797c2.73-.725 4.506-2.452 5.326-5.18V8.275Z" })));
};

var SvgVolkswagen = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M39.122 8.797c-1.957-.53-4.03-.783-6.126-.783a24.56 24.56 0 0 0-6.01.76l6.08 16.766 6.056-16.743ZM56.97 32.011c0-2.993-.506-5.85-1.52-8.498l-11.4 29.755c7.647-4.007 12.92-12.022 12.92-21.257Z" }),
        React__namespace.createElement("path", { fill: "#000", d: "M45.064 11.262 38.04 30.607h-9.903L21.09 11.169a24.056 24.056 0 0 0-6.77 5.804l10.017 25.978L28 33.462h9.627l3.661 9.489 10.11-26.3c-1.773-2.165-3.938-3.985-6.356-5.412" }),
        React__namespace.createElement("path", { fill: "#000", d: "M32.996 0C15.38 0 .985 14.37.985 32.011.985 49.652 15.379 64 32.996 64c17.618 0 31.989-14.394 31.989-31.989C64.985 14.417 50.637 0 32.996 0m0 59.924c-15.36 0-27.935-12.529-27.935-27.89 0-15.36 12.551-27.958 27.935-27.958 15.384 0 27.936 12.552 27.936 27.959S48.38 59.924 32.996 59.924Z" }),
        React__namespace.createElement("path", { fill: "#000", d: "m32.79 38.575-6.196 16.052v.506c2.027.576 4.169.853 6.403.853 2.095 0 4.122-.254 6.056-.76l-.069-.6-6.195-16.051ZM9.022 32.011c0 9.028 5.02 16.927 12.482 21.004L10.381 24.043c-.898 2.487-1.359 5.159-1.359 7.968" })));
};

var SvgVolumeHigh = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M46.9 26.9c-.8-.9-2.3-1-3.2-.1-.9.8-1 2.3-.1 3.2 1 1.1 1 3 0 4.2-.8.9-.8 2.3.1 3.2.4.4 1 .6 1.5.6.6 0 1.2-.2 1.7-.7 2.6-3 2.6-7.6 0-10.4z" }),
        React__namespace.createElement("path", { d: "M52.5 22.7c-.8-.9-2.3-1-3.2-.1-.9.8-1 2.3-.1 3.2 3.2 3.4 3.2 9 0 12.4-.8.9-.8 2.3.1 3.2.4.4 1 .6 1.5.6.6 0 1.2-.2 1.7-.7 4.7-5.1 4.7-13.5 0-18.6z" }),
        React__namespace.createElement("path", { d: "M58.1 18.6c-.8-.9-2.3-1-3.2-.1-.9.8-1 2.3-.1 3.2 5.3 5.7 5.3 15 0 20.7-.8.9-.8 2.3.1 3.2.4.4 1 .6 1.5.6.6 0 1.2-.2 1.7-.7 6.8-7.5 6.8-19.5 0-26.9zM34.4 12.3c-1.6-.9-3.5-.8-5 .1l-10.8 6.7c-.1 0-.1.1-.2.1H5.6c-2.7 0-4.9 2.2-4.9 4.9v15.8c0 2.7 2.2 4.9 4.9 4.9h12.8c.1 0 .1 0 .2.1l10.8 6.7c.8.5 1.7.7 2.6.7.8 0 1.6-.2 2.4-.6 1.6-.9 2.5-2.5 2.5-4.3V16.5c0-1.7-1-3.4-2.5-4.2zm-2 35.2c0 .2-.1.3-.2.3-.1.1-.3.1-.4 0L21 41c-.8-.5-1.7-.7-2.6-.7H5.6c-.2 0-.4-.2-.4-.4V24.1c0-.2.2-.4.4-.4h12.8c.9 0 1.8-.3 2.6-.7l10.8-6.7c.1-.1.3-.1.4 0 .1.1.2.2.2.3v30.9z" })));
};

var SvgVolumeLow = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M46.9 26.9c-.8-.9-2.3-1-3.2-.1-.9.8-1 2.3-.1 3.2 1 1.1 1 3 0 4.2-.8.9-.8 2.3.1 3.2.4.4 1 .6 1.5.6.6 0 1.2-.2 1.7-.7 2.6-3 2.6-7.6 0-10.4zM34.4 12.3c-1.6-.9-3.5-.8-5 .1l-10.8 6.7c-.1 0-.1.1-.2.1H5.6c-2.7 0-4.9 2.2-4.9 4.9v15.8c0 2.7 2.2 4.9 4.9 4.9h12.8c.1 0 .1 0 .2.1l10.8 6.7c.8.5 1.7.7 2.6.7.8 0 1.6-.2 2.4-.6 1.6-.9 2.5-2.5 2.5-4.3V16.5c0-1.7-1-3.4-2.5-4.2zm-2 35.2c0 .2-.1.3-.2.3-.1.1-.3.1-.4 0L21 41c-.8-.5-1.7-.7-2.6-.7H5.6c-.2 0-.4-.2-.4-.4V24.1c0-.2.2-.4.4-.4h12.8c.9 0 1.8-.3 2.6-.7l10.8-6.7c.1-.1.3-.1.4 0 .1.1.2.2.2.3v30.9z" })));
};

var SvgVolumeMedium = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M50.8 42c-.5 0-1.1-.2-1.5-.6-.9-.8-1-2.3-.1-3.2 3.2-3.4 3.2-9 0-12.4-.8-.9-.8-2.3.1-3.2.9-.8 2.3-.8 3.2.1 4.7 5.1 4.7 13.4 0 18.5-.5.5-1.1.8-1.7.8zm-5.6-4.1c-.5 0-1.1-.2-1.5-.6-.9-.8-1-2.3-.1-3.2 1-1.1 1.1-3 0-4.2-.8-.9-.8-2.3.1-3.2.9-.8 2.3-.8 3.2.1 2.7 2.9 2.6 7.4 0 10.3-.5.5-1.1.8-1.7.8zM32 52.3c-.9 0-1.8-.2-2.6-.7l-10.8-6.7c-.1 0-.1-.1-.2-.1H5.6c-2.7 0-4.9-2.2-4.9-4.9V24.1c0-2.7 2.2-4.9 4.9-4.9h12.8c.1 0 .1 0 .2-.1l10.8-6.7c1.5-.9 3.4-1 5-.1s2.5 2.5 2.5 4.3v30.9c0 1.8-1 3.4-2.5 4.3-.8.3-1.6.5-2.4.5zM5.6 23.7c-.2 0-.4.2-.4.4v15.8c0 .2.2.4.4.4h12.8c.9 0 1.8.3 2.6.7l10.8 6.7c.1.1.3.1.4 0 .1-.1.2-.2.2-.3V16.5c0-.2-.1-.3-.2-.3-.1-.1-.3-.1-.4 0L21 23c-.8.5-1.7.7-2.6.7H5.6z" })));
};

var SvgVolumeMute = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M45.6 12.9c-.9-.9-2.3-.9-3.2 0l-5 5v-1c0-1.8-1-3.4-2.5-4.3-1.6-.9-3.5-.8-5 .1l-10.8 6.7c-.1 0-.1.1-.2.1H6.1c-2.7 0-4.9 2.2-4.9 4.9v15.8c0 2.7 2.2 4.9 4.9 4.9h4l-2.7 2.7c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7l34.9-35c1-.8 1-2.2.1-3.1zM6.1 40.7c-.2 0-.4-.2-.4-.4V24.5c0-.2.2-.4.4-.4h12.8c.9 0 1.8-.3 2.6-.7l10.8-6.7c.1-.1.3-.1.4 0 .1.1.2.2.2.3v5.5L14.7 40.7H6.1zM35.1 31.1c-1.2 0-2.3 1-2.3 2.3v14.5c0 .2-.1.3-.2.3-.1.1-.3.1-.4 0l-8.7-5.4c-1.1-.7-2.4-.3-3.1.7-.7 1.1-.3 2.4.7 3.1l8.7 5.4c.8.5 1.7.7 2.6.7.8 0 1.6-.2 2.4-.6 1.6-.9 2.5-2.5 2.5-4.3V33.4c.1-1.3-.9-2.3-2.2-2.3z" })));
};

var SvgVolume = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 52.3c-.9 0-1.8-.2-2.6-.7l-10.8-6.7c-.1 0-.1-.1-.2-.1H5.6c-2.7 0-4.9-2.2-4.9-4.9V24.1c0-2.7 2.2-4.9 4.9-4.9h12.8c.1 0 .1 0 .2-.1l10.8-6.7c1.5-.9 3.4-1 5-.1s2.5 2.5 2.5 4.3v30.9c0 1.8-1 3.4-2.5 4.3-.8.3-1.6.5-2.4.5zM5.6 23.7c-.2 0-.4.2-.4.4v15.8c0 .2.2.4.4.4h12.8c.9 0 1.8.3 2.6.7l10.8 6.7c.1.1.3.1.4 0 .1-.1.2-.2.2-.3V16.5c0-.2-.1-.3-.2-.3-.1-.1-.3-.1-.4 0L21 23c-.8.5-1.7.7-2.6.7H5.6z" })));
};

var SvgVsCode = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M62.845 10a3.241 3.241 0 0 0-.184-.514 2.967 2.967 0 0 0-.252-.495 3.611 3.611 0 0 0-.707-.823 3.644 3.644 0 0 0-.901-.61L48.033 1.374a3.928 3.928 0 0 0-2.325-.32 3.893 3.893 0 0 0-1.831.853 2.756 2.756 0 0 0-.252.223L23.029 25.028l-12.022-9.913-1.046-.872a2.55 2.55 0 0 0-1.279-.59c-.068-.01-.135-.02-.203-.02-.058-.01-.126-.01-.184-.01-.097 0-.184 0-.281.01-.087 0-.165.02-.242.039-.165.029-.33.077-.485.145L2.59 15.765a2.693 2.693 0 0 0-1.153.95c-.281.426-.436.93-.436 1.433v27.704c0 .504.155 1.007.436 1.434.28.416.688.746 1.153.95l4.698 1.976c.436.184.92.242 1.395.175.475-.078.91-.282 1.279-.592l1.046-.91 12.022-9.913 20.596 22.897c.068.068.145.136.223.203.01.01.02.02.029.02a3.892 3.892 0 0 0 1.83.853c.785.135 1.6.019 2.326-.32L60.8 56.443c.165-.078.32-.165.475-.272.3-.203.58-.455.813-.717a3.907 3.907 0 0 0 .91-2.52V11.066c.001-.358-.047-.717-.154-1.066ZM8.75 40.91V23.09l8.012 8.915L8.75 40.91Zm22.737-8.905L47.5 18.797v26.405L31.487 32.005Z" })));
};

var SvgVuejs = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M48.082 6.514h-2.667l-7.048.002-6.332 10.55-6.356-10.55-7.056-.003H6.057v.001H2.219l29.858 50.973L61.781 6.515H48.082Zm-16.015 40.4L11.525 11.846h7.53l13.028 22.419 12.925-22.42H52.5l-20.433 35.07Z" })));
};

var SvgWallet = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M55.8 21.3h-2.2v-7.4c0-1.9-.9-3.8-2.5-4.9-1.6-1.1-3.6-1.4-5.4-.8l-37.6 13H7c-3.3 0-6 2.7-6 6v22.3c0 3.3 2.7 6 6 6h48.8c3.3 0 6-2.7 6-6V27.3c0-3.3-2.7-6-6-6zM47 12c.6-.2 1.3-.1 1.8.3s.8 1 .8 1.6v7.4H20.3L47 12zm8.8 39.5H7c-1.1 0-2-.9-2-2V27.3c0-1.1.9-2 2-2h48.8c1.1 0 2 .9 2 2v3.9H46.4c-4.1 0-7.4 3.3-7.4 7.4s3.3 7.4 7.4 7.4h11.4v3.6c0 1-.9 1.9-2 1.9zm2-16.3V42H46.4c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4h11.4z" })));
};

var SvgWarning = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60.5 41.3 39.1 12.2c-1.7-2.3-4.3-3.6-7.1-3.6-2.9 0-5.5 1.3-7.1 3.6L3.5 41.3c-2 2.7-2.3 6.2-.8 9.2s4.5 4.9 7.9 4.9h42.8c3.4 0 6.4-1.9 7.9-4.9 1.5-2.9 1.2-6.5-.8-9.2zm-3.2 7.2c-.8 1.5-2.2 2.4-3.9 2.4H10.6c-1.7 0-3.1-.9-3.9-2.4-.7-1.5-.6-3.2.4-4.5l21.4-29.1c.8-1.1 2.1-1.8 3.5-1.8s2.7.6 3.5 1.8L56.9 44c1 1.3 1.1 3 .4 4.5z" }),
        React__namespace.createElement("path", { d: "M32 23c-1.2 0-2.3 1-2.3 2.3v10.9c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-11c0-1.2-1.1-2.2-2.3-2.2zM32 40.8c-1.2 0-2.3 1-2.3 2.3v.5c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V43c0-1.2-1.1-2.2-2.3-2.2z" })));
};

var SvgWebhooks = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M30.718 27.2c-6.178-3.098-8.44-7.209-6.945-12.241 1.316-4.435 5.752-7.337 10.27-6.655 2.253.34 4.235 1.263 5.78 3.023 2.337 2.667 2.865 5.78 2.151 9.246l2.135.579 3.201.868c2.273-6.234-.393-13.518-6.214-17.258-6.061-3.893-13.914-3.071-19.062 2-2.687 2.649-4.158 5.88-4.5 9.62-.483 5.29 1.703 9.558 5.375 13.21l-5.84 9.793c-.19.014-.355.024-.502.033-.269.016-.48.029-.688.058-3.839.544-6.54 3.958-5.895 7.44.73 3.933 4.309 6.348 7.983 5.385 3.896-1.02 5.97-4.78 4.5-8.644-.532-1.398-.203-2.294.463-3.394 1.877-3.101 3.727-6.219 5.61-9.394l2.178-3.669Zm13.223 4.686-5.647-9.96c.093-.233.184-.454.272-.665v-.001c.185-.448.354-.858.495-1.277.747-2.21.296-4.228-1.122-6.02-1.736-2.194-4.764-2.991-7.345-2.004-2.605.997-4.272 3.554-4.158 6.383.115 2.86 2.034 5.414 5.008 5.929 1.78.308 2.652 1.154 3.442 2.61 1.68 3.1 3.42 6.165 5.162 9.233v.001c.688 1.212 1.376 2.424 2.061 3.64 5.832-3.888 10.657-3.764 14.26.285 3.12 3.51 3.186 8.854.153 12.438-3.557 4.201-8.348 4.368-13.826.82l-4.352 3.642c5.546 5.536 13.463 6.272 19.723 1.963 6.099-4.199 8.222-12.258 5.116-19.063-2.57-5.633-9.737-10.895-19.242-7.954Zm-12.623 16.99H42.76c.16.214.309.424.455.63.303.428.592.834.928 1.195 2.424 2.592 6.516 2.72 9.106.315 2.685-2.492 2.807-6.68.27-9.281-2.483-2.547-6.725-2.79-9.03-.094-1.4 1.639-2.835 1.831-4.694 1.802-3.397-.052-6.795-.042-10.193-.032-1.363.004-2.726.008-4.088.008.309 6.695-2.222 10.867-7.242 11.858-4.916.97-9.443-1.538-11.037-6.114-1.81-5.2.428-9.359 6.897-12.66l-1.465-5.315C5.617 32.724.327 39.565.872 47.26c.483 6.793 5.963 12.827 12.665 13.907 3.64.588 7.06-.022 10.233-1.822 4.082-2.316 6.451-5.958 7.548-10.47Z", clipRule: "evenodd" })));
};

var SvgWebsiteAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M19.6 27.5c-1-.7-2.4-.4-3.1.6l-2 2.9-1.6-2.4c-.5-.7-1.3-1.1-2.2-1.1-.9 0-1.7.4-2.2 1.1L6.8 31l-2-2.9c-.7-1-2.1-1.3-3.1-.6-1 .7-1.3 2.1-.6 3.1l3.5 5.2c.5.7 1.3 1.1 2.2 1.1.9 0 1.7-.4 2.2-1.1l1.6-2.4 1.6 2.4c.5.7 1.3 1.1 2.2 1.1s1.7-.4 2.2-1.1l3.5-5.2c.8-1 .5-2.4-.5-3.1zM40.9 27.5c-1-.7-2.4-.4-3.1.6l-2 2.9-1.6-2.4c-.5-.7-1.3-1.1-2.2-1.1-.9 0-1.7.4-2.2 1.1L28.2 31l-2-2.9c-.7-1-2.1-1.3-3.1-.6-1 .7-1.3 2.1-.6 3.1l3.5 5.2c.5.7 1.3 1.1 2.2 1.1.9 0 1.7-.4 2.2-1.1l1.6-2.4 1.6 2.4c.5.7 1.3 1.1 2.2 1.1.9 0 1.7-.4 2.2-1.1l3.5-5.2c.7-1 .5-2.4-.6-3.1zM62.3 27.5c-1-.7-2.4-.4-3.1.6l-2 2.9-1.6-2.4c-.5-.7-1.3-1.1-2.2-1.1-.9 0-1.7.4-2.2 1.1L49.5 31l-2-2.9c-.7-1-2.1-1.3-3.1-.6-1 .7-1.3 2.1-.6 3.1l3.5 5.2c.5.7 1.3 1.1 2.2 1.1.9 0 1.7-.4 2.2-1.1l1.6-2.4 1.6 2.4c.5.7 1.3 1.1 2.2 1.1.9 0 1.7-.4 2.2-1.1l3.5-5.2c.8-1 .5-2.4-.5-3.1z" })));
};

var SvgWebsite = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m47 26.3.5-1.1.5 1.1c.4.9 1.3 1.4 2.3 1.4s1.8-.5 2.3-1.4l2.5-5.1c.6-1.1.1-2.5-1-3s-2.5-.1-3 1l-.8 1.5-.5-1.1c-.4-.9-1.3-1.4-2.3-1.4-1 0-1.8.5-2.3 1.4l-.5 1.1-.7-1.6c-.6-1.1-1.9-1.6-3-1-.6.3-1 .9-1.2 1.5-.1-.6-.6-1.2-1.2-1.5-1.1-.6-2.5-.1-3 1l-.8 1.5-.5-1.1c-.4-.9-1.3-1.4-2.3-1.4-1 0-1.8.5-2.3 1.4l-.5 1.1-.8-1.5c-.6-1.1-1.9-1.6-3-1-.6.3-1 .9-1.2 1.5-.1-.6-.6-1.2-1.2-1.5-1.1-.6-2.5-.1-3 1l-.8 1.5-.5-1.1c-.4-.9-1.3-1.4-2.3-1.4s-1.8.5-2.3 1.4l-.5 1.1-.8-1.5c-.6-1.1-1.9-1.6-3-1-1.1.6-1.6 1.9-1 3l2.5 5.1c.4.9 1.3 1.4 2.3 1.4 1 0 1.8-.5 2.3-1.4l.5-1.1.5 1.1c.4.9 1.3 1.4 2.3 1.4 1 0 1.8-.5 2.3-1.4l2.5-5.1c.1-.2.1-.3.2-.5 0 .2.1.3.2.5l2.5 5.1c.4.9 1.3 1.4 2.3 1.4 1 0 1.8-.5 2.3-1.4l.5-1.1.5 1.1c.4.9 1.3 1.4 2.3 1.4 1 0 1.8-.5 2.3-1.4l2.5-5.1c.1-.2.1-.3.2-.5 0 .2.1.3.2.5l2.5 5.1c.4.9 1.3 1.4 2.3 1.4.9.1 1.8-.5 2.2-1.3z" }),
        React__namespace.createElement("path", { d: "M58.4 7.3H5.6C2.9 7.3.8 9.5.8 12.2v21.2c0 2.7 2.2 4.9 4.8 4.9h31.7c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H5.6c-.2 0-.3-.2-.3-.4V12.2c0-.2.1-.4.3-.4h52.9c.2 0 .3.2.3.4v21.2c0 .2-.2.4-.4.4-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3c2.7 0 4.9-2.2 4.9-4.9V12.2c0-2.7-2.2-4.9-4.9-4.9z" }),
        React__namespace.createElement("path", { d: "m61.3 43.9-14.1-7.1c-1.2-.6-2.6-.4-3.4.5-.9.9-1.1 2.3-.5 3.5l7.1 14.1c.6 1.1 1.7 1.9 3 1.9h.1c1.1 0 2.1-.7 2.5-1.7l1.7-3.9 3.9-1.7c1-.4 1.6-1.4 1.7-2.5-.1-1.4-.8-2.6-2-3.1zm-7.1 3.8-1.1 2.5-3.7-7.3 7.3 3.7-2.5 1.1z" })));
};

var SvgWechat = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56.5 51.5c3.9-2.8 6.5-7 6.5-11.8C63 31.1 54.7 24 44.3 24s-18.6 7-18.6 15.6S34 55.2 44.3 55.2c2.1 0 4.2-.3 6.1-.8.1-.1.3-.1.6-.1s.7.1 1 .3l4.1 2.4c.1.1.1.1.3.1.3 0 .6-.3.6-.6 0-.1-.1-.3-.1-.4 0-.1-.6-2-.7-3.2v-.4c-.2-.4 0-.8.3-1zM38.1 37.3c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zm12.4 0c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1 2.5-2.5 2.5z" }),
        React__namespace.createElement("path", { d: "M44.3 22.8h1.3C43.8 13.9 34.5 7 23.4 7 11.1 7.1 1 15.4 1 25.7c0 5.8 3 10.7 7.8 14.1.4.3.6.7.6 1.3 0 .1-.1.3-.1.4-.4 1.4-1 3.7-1 3.8-.3.2-.3.3-.3.6 0 .4.3.7.8.7.1 0 .3-.1.4-.1l4.9-2.8c.3-.1.8-.3 1.3-.3.1 0 .4.1.7.1 2.3.7 4.8 1 7.3 1h1.3c-.4-1.4-.7-3-.7-4.5 0-9.8 9-17.2 20.3-17.2zm-13.4-6.1c1.7 0 3 1.4 3 3s-1.4 3-3 3-3-1.4-3-3 1.3-3 3-3zm-15 6.1c-1.7 0-3-1.4-3-3s1.4-3 3-3 3 1.4 3 3-1.3 3-3 3z" })));
};

var SvgWeight = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M53.5 1.8h-43C7.1 1.8 4.3 4.6 4.3 8v48c0 3.4 2.8 6.2 6.2 6.2h42.9c3.4 0 6.2-2.8 6.2-6.2V8c.1-3.4-2.7-6.2-6.1-6.2zM55.2 56c0 1-.8 1.8-1.8 1.8H10.5c-1 0-1.8-.8-1.8-1.8V8c0-1 .8-1.8 1.8-1.8h42.9c1 0 1.8.8 1.8 1.8v48z" }),
        React__namespace.createElement("path", { d: "M45.8 14c-9.2-1.7-18.5-1.7-27.6 0-.9.2-1.8.7-2.3 1.5-.5.7-.6 1.6-.5 2.4l1.9 9.3c.3 1.5 1.7 2.6 3.2 2.6.2 0 .4 0 .6-.1 7.2-1.4 14.5-1.4 21.7 0 1.7.3 3.5-.8 3.8-2.5l1.9-9.3c.2-.8 0-1.7-.5-2.4-.4-.7-1.2-1.3-2.2-1.5zm-3.3 11.1c-2.9-.5-5.9-.8-8.8-.9l-1.2-3.6c-.4-1.2-1.7-1.8-2.9-1.4-1.2.4-1.8 1.7-1.4 2.9l.7 2.1c-2.5.1-5 .4-7.5.8L20 18.1c7.9-1.4 15.9-1.4 23.8 0l-1.3 7z" })));
};

var SvgWhatsapp = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M54 9.9c-5.8-5.8-13.7-9-21.8-9-17 0-30.9 13.8-30.9 30.8 0 5.5 1.4 10.7 4.1 15.5L1 63.1l16.5-4.2c4.5 2.4 9.6 3.8 14.8 3.8 16.9-.1 30.7-13.9 30.7-31 0-8.2-3.2-15.9-9-21.8zM32.1 57.4c-4.5 0-9.2-1.3-13.1-3.7l-1-.6-9.7 2.5 2.7-9.4-.6-1c-2.5-4.1-3.9-8.9-3.9-13.7C6.5 17.4 17.9 6 32.1 6c6.8 0 13.2 2.7 18 7.5s7.5 11.3 7.5 18.2c.2 14.3-11.4 25.7-25.5 25.7zm14.1-19.2c-.8-.4-4.5-2.3-5.4-2.4-.7-.3-1.3-.4-1.7.4-.4.8-2 2.4-2.4 3-.4.4-.8.6-1.7.1-.8-.4-3.2-1.1-6.2-3.9-2.3-2-3.9-4.5-4.2-5.4-.4-.8-.1-1.1.4-1.6.4-.4.8-.8 1.1-1.4.4-.4.4-.8.8-1.3.4-.4.1-1-.1-1.4-.3-.4-1.7-4.2-2.4-5.8-.6-1.6-1.3-1.3-1.7-1.3h-1.4c-.4 0-1.4.1-2 1-.7.8-2.7 2.7-2.7 6.5s2.7 7.3 3.2 8c.4.4 5.5 8.3 13.1 11.7 1.8.8 3.2 1.3 4.4 1.7 1.8.6 3.5.4 4.8.3 1.5-.1 4.5-1.8 5.2-3.7.6-1.7.6-3.4.4-3.7-.2-.2-.8-.5-1.5-.8z" })));
};

var SvgWheelbarrow = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M55 42.8c-1 0-1.9.2-2.8.5l-1.8-2.1c3.7-2.2 6.6-5.7 8-10l1.8-5.5c.3-.9 1-3-.2-4.8-.9-1.2-2.3-1.8-4.4-1.8H18.2l-3-9.1c-.6-2-2.4-3.3-4.5-3.3H4c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h6.7c.1 0 .2.1.2.2l3.3 10.4v31.5c0 1.2.7 2.3 1.9 2.7.3.1.7.2 1 .2.7 0 1.4-.3 2-.8l15.6-11.7h6.7c1.6 0 3.2-.2 4.7-.6l2.7 3.2c-.7 1.1-1.1 2.4-1.1 3.8 0 4 3.3 7.3 7.3 7.3s7.3-3.3 7.3-7.3c-.1-4-3.3-7.2-7.3-7.2zm-36.2 7.3v-6.4h8.5l-8.5 6.4zm0-10.9V23.7h37.5c0 .1-.1.3-.2.6l-1.8 5.5c-1.9 5.6-7 9.4-12.8 9.4H18.8zM55 52.8c-1.5 0-2.8-1.2-2.8-2.8s1.2-2.8 2.8-2.8 2.8 1.2 2.8 2.8-1.3 2.8-2.8 2.8z" })));
};

var SvgWheelchair = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M40.2 52.3c-3.1 3.5-7.6 5.4-12.3 5.4-9.2 0-16.7-7.5-16.7-16.7 0-5.4 2.5-10.3 6.8-13.4 1-.7 1.2-2.1.5-3.1s-2.1-1.2-3.1-.5C10 27.9 6.8 34.3 6.8 41c0 11.7 9.5 21.2 21.2 21.2 6 0 11.7-2.5 15.7-6.9.8-.9.8-2.3-.2-3.2-1-.8-2.5-.7-3.3.2z" }),
        React__namespace.createElement("path", { d: "m54.9 48.9-4 .3L49.6 35c-.1-1.5-1.3-2.7-2.9-2.7H26.8l-.5-8.2h13.3c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H26.1l-.2-2.9c3.6-.6 6.4-3.7 6.4-7.4 0-4.1-3.4-7.5-7.5-7.5s-7.5 3.4-7.5 7.5c0 2.9 1.7 5.5 4.1 6.7l1.1 18.1c0 1.5 1.3 2.7 2.9 2.7h20l1.2 14.4v.3c.3 1.4 1.5 2.4 2.9 2.4h.1l5.7-.5c1.2-.1 2.2-1.2 2.1-2.4-.2-1.4-1.3-2.3-2.5-2.2zM24.7 6.2c1.7 0 3 1.4 3 3s-1.4 3-3 3-3-1.4-3-3 1.4-3 3-3z" })));
};

var SvgWindows = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M62.9 30.5V1.1C51.6 2.6 40.4 4.2 29 6v24.7c11.4-.1 22.6-.1 33.9-.2zM1 10.2V31c8.3 0 16.9-.1 25.2-.1V6.7C17.9 7.8 9.3 8.9 1 10.2zM1 33.4v20.8c8.3 1.1 16.9 2.2 25.2 3.4v-24c-8.3-.2-16.9-.2-25.2-.2zM29.3 33.8c.1 8.2.1 16.2.1 24.3 11.2 1.5 22.4 3.1 33.6 4.8V33.8H29.3z" })));
};

var SvgWordpressFill = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M32 1C14.8 1 1 14.9 1 32s13.8 31 31 31 31-14 31-31S49 1 32 1zm27.5 31c0 10.4-5.8 19.4-14.2 24l8-20.6c.4-1.1 3.2-7.9 4.2-13.7 1.3 3.3 2 6.8 2 10.3zM37.9 18.5H23.8c-.6 0-1 .4-1 1s.4 1 1 1h2l3.5 9-4.2 10.8-7.6-19.9h2.4c.6 0 1-.4 1-1s-.4-1-1-1h-4.1l-6.6-.1C13.7 10.4 22.4 5.2 32 5.2c7 0 13.5 2.8 18.3 7.3-2.5.4-4.5 2.4-5.1 4.8-.6 2.8.4 5.1 1.5 7.2 1.1 2.3 2.3 4.4 1.4 6.9L44.4 41l-7.9-20.6H38c.6 0 1-.4 1-1 0-.5-.7-.9-1.1-.9zM4.5 32c0-3.5.7-6.9 2-10L20 56.7C10.7 52.3 4.5 42.9 4.5 32zm27.8 5.9 8 20.3c-2.7.8-5.4 1.3-8.3 1.3-2.7 0-5.2-.3-7.6-1.1l7.9-20.5z" })));
};

var SvgWordpress = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M58.6 16.2c-.8-1.4-2-3-3-4.1C49.8 5.1 41.2 1 32 1 19.7 1 8.7 8 3.7 19.2c-.1.3-.3.6-.4.8-.1.4-.4 1.1-.7 1.8 0 .1-.1.3-.1.4C1.4 25.4 1 28.8 1 32c0 11 5.6 20.9 15.1 26.5l.4.3c.6.3 1.1.7 1.7.8.3.1.4.3.7.4h.1c.4.3 1.1.4 1.7.7l.1.1c3.5 1.4 7.3 2.1 11.3 2.1 2.1 0 4.2-.1 6.3-.7.7-.1 1.3-.3 2-.4.8-.1 1.7-.4 2.5-.8 1.4-.4 2.7-1.1 3.9-1.8C56.7 53.8 63 43.4 63 32c0-5.6-1.4-11-4.4-15.8zM32 4.5c6.6 0 13.1 2.5 18.2 6.9-4.6 2.1-1.3 8.3.1 12.1.4 1.1.7 2.1.7 3l-5.6 16.9L38.9 24c.8-.1 1.7-.8 1.7-1.7 0-1-.7-1.8-1.8-1.8H24c-.8.1-1.6.8-1.6 1.7 0 1 .7 1.8 1.8 1.8h.8l3.8 11-2.7 8.3L19.5 24c.8-.1 1.4-.8 1.4-1.7 0-1-.7-1.8-1.8-1.8H7.4c4.2-9.6 13.9-16 24.6-16zm-3.2 19.6h6L43.3 49l-2.8 9.2h-.1l-3.2-9.7-8.4-24.4zm-8.1 32.8L9.5 24.1H15.7L24.2 49l-2.7 8.3c-.4-.1-.6-.2-.8-.4zM4.5 32c0-2.7.4-5.4 1.1-7.9l10.3 30C8.7 49.2 4.5 41 4.5 32zm20.3 26.5 5.9-17.8 6.1 18.2c-1.7.3-3.2.4-4.8.4-2.5.2-4.9-.1-7.2-.8zM45 56.1c-.1 0-.1.1-.1.1L55.3 25c.6-1.4 1.1-3 1.5-4.5 1.7 3.5 2.5 7.5 2.5 11.6.2 10-5.5 19.3-14.3 24z" })));
};

var SvgWorldAlt = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M51.2 19.2c-1.4-3.8-4.1-6.8-7.7-8.5-3.1-1.4-6.5-1.8-9.8-1l-2-5.5c-.4-1-1.2-1.9-2.2-2.3-1-.4-2.1-.4-3 0-11.7 5.3-17.4 19-13 31.1 3.1 8.5 10.5 14.4 18.9 15.9v8.6H27c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h15.2c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-5.3v-8.2c2.2 0 4.3-.3 6.5-.9 1-.3 1.9-1 2.4-1.9.5-1 .6-2.1.2-3.1l-2.1-5.8c6.6-3.2 9.9-11.1 7.3-18.4zM17.7 31.7c-3.6-9.7.8-20.7 10-25.2l1.8 5c-2.6 1.5-4.7 3.8-6 6.6-1.7 3.6-1.9 7.7-.5 11.5s4.1 6.8 7.7 8.5c2 .9 4.2 1.4 6.3 1.4.8 0 1.6-.1 2.4-.2l1.9 5.3c-9.8 2.3-20.1-3.2-23.6-12.9zm23 2.5c-2.6 1-5.5.8-8-.3-2.5-1.2-4.5-3.3-5.4-5.9s-.8-5.5.3-8c1.2-2.5 3.3-4.5 5.9-5.4 1.2-.4 2.4-.6 3.6-.6 1.5 0 3 .3 4.4 1 2.5 1.2 4.5 3.3 5.4 5.9 2 5.3-.8 11.3-6.2 13.3z" })));
};

var SvgWorld = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M58.4 17.1c-4.1-7.1-11-12.4-19-14.4-2.6-.6-5-.9-7.4-.9-2.5 0-5.1.3-7.6 1-7.9 2-14.7 7.2-18.7 14.4-2.6 4.6-3.9 9.6-3.9 14.8v.7c.1 5.5 1.8 10.9 4.7 15.6 4.8 7.6 12.7 12.6 21.5 13.6 1.2.2 2.5.3 4 .3 1.2 0 2.5-.1 3.7-.2 9-1.1 16.9-6.1 21.8-13.7 3-4.6 4.6-10 4.8-15.6V32c0-5-1.4-10.2-3.9-14.9zm-7.1 13.5c-.3-3.3-1.1-6.5-2.4-9.5h6.4c1.4 3 2.2 6.3 2.4 9.5h-6.4zm-45 0c.2-3.3 1-6.5 2.4-9.5h5.8c-1.3 3-2 6.2-2.3 9.5H6.3zm13.2-9.5h10.2v9.5H16.8c.3-3.4 1.2-6.6 2.7-9.5zm21.7-4.5h-7V8.3c2.3 1.8 4.6 4.6 7 8.3zM29.8 8.2v8.4h-7.5c2.5-3.8 5-6.6 7.5-8.4zm0 26.9v9.5h-10c-1.6-2.9-2.6-6.2-2.9-9.5h12.9zm0 14V56c-2.5-1.7-5-4.1-7.2-6.9h7.2zm4.5 6.9v-7h7.6c-2.1 2.9-4.7 5.3-7.6 7zm0-11.4v-9.5h12.6c-.2 3.3-1 6.5-2.4 9.5H34.3zm0-14v-9.5H44c1.5 2.9 2.5 6.2 2.8 9.5H34.3zm18.3-14h-6.1c-2.2-3.7-4.4-6.7-6.6-9 5.1 1.6 9.6 4.8 12.7 9zM23.5 7.7c-2.2 2.3-4.4 5.3-6.6 8.8h-5.4c3-4 7.2-7.1 12-8.8zM6.4 35.1h5.9c.3 3.3 1.1 6.5 2.4 9.5H9.5c-1.7-3-2.7-6.2-3.1-9.5zm6.3 14h4.5c1.6 2.6 3.6 5 5.6 7-3.9-1.5-7.4-3.9-10.1-7zm29.2 6.7c2-1.9 3.8-4.2 5.2-6.6 0 0 0-.1.1-.1h4.1c-2.6 2.9-5.8 5.2-9.4 6.7zm12.6-11.2h-5.2c1.2-3 1.9-6.2 2-9.5h6.2c-.3 3.3-1.4 6.5-3 9.5z" })));
};

var SvgWrite = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M53.1 10.3H50.8V8c0-3.4-2.8-6.3-6.3-6.3H14.3C10.8 1.8 8 4.6 8 8v34.2c0 1.3.5 2.5 1.4 3.5l14.6 15c.9 1 2.2 1.5 3.6 1.5h18.3c2.7 0 5-2.2 5-5v-.9l4.8-9.7c.2-.3.2-.6.2-1l.1-32.4c0-1.5-1.3-2.8-2.9-2.9zm-1.6 8.1h-5.6v-3.7h5.6v3.7zm-7.1-3.6c.1 0 .1 0 0 0 .1 0 .1 0 0 0zM23.8 54l-8.2-8.4h8.2V54zm22.1 3.8H28.3V43.9c0-1.6-1.3-2.8-2.8-2.8h-13V8c0-1 .8-1.8 1.8-1.8h30.4c1 0 1.8.8 1.8 1.8v2.2h-2c-1.7 0-3 1.3-3 2.9l-.1 32.5c0 .4.1.7.2 1l4.9 9.7v.9c-.1.3-.3.6-.6.6zm2.7-7-2.8-5.7V22.9h5.6v22.2l-2.8 5.7z" })));
};

var SvgXbox = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "m22.3 19.4 1.3-1.5-2.3-2c-3.8-3.4-6.3-5.1-8.6-5.9-1.8-.7-2-.6-3.5 1-3.5 3.8-6.6 10-7.5 15.3-.7 4.4-.8 5.5-.6 7.6.8 6.3 2.2 10.7 5.2 15.1 1.3 1.8 1.5 2.3 1.1 1.3-.6-1.4-.1-4.8 1.1-8 2.3-6.1 8.2-16 13.8-22.9zM17.7 5.3c.8 0 2.1 0 3 .1 2.3.4 6.3 1.8 8.9 3.1 1.2.8 2.4 1.3 2.4 1.2 0 0 1.3-.6 2.7-1.3 4.6-2.3 9-3.4 12-3.2l1.5.1-1-.3c-2.1-1.4-6.1-2.8-9.3-3.5-3.1-.7-8.9-.7-12 0-2.7.6-4.8 1.3-7.2 2.4-2.7 1.4-2.9 1.6-1 1.4zM32.3 26.2c-.6-.1-6.2 4.8-10.1 9-7 7.5-11.1 13.9-11.1 17.7 0 1.8.7 2.8 4.2 5.1 4.2 2.8 9 4.5 13.8 4.9 3.9.3 8.7-.1 12.5-1.3 4.5-1.4 10.6-5.2 11.5-7 1.3-2.4-1.3-8-6.8-14.8-3.4-4.2-12.9-13.4-14-13.6zM62.4 26c-1-4.4-2.8-8.4-5.2-12-1.5-2.1-3.5-4.2-4.1-4.2-1 0-3.1.7-4.5 1.7-1.8 1.1-3.5 2.5-6.1 4.8l-2 1.7 1.8 2.3c5.6 7 11.7 17.5 13.5 23.1.8 2.5 1.3 5.1 1 6.5-.1 1-.1 1 .1.7.8-1 2.5-3.9 3.2-5.5.8-2 1.8-5.1 2.3-7.3.7-2.9.6-9 0-11.8z" })));
};

var SvgXrp = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 65 65", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M46.9 62.7c-5.1 0-10-2.6-12.7-7.2-2.2-3.7-2.6-8-1.1-12 .4-1.2.3-2.8-.6-3.4-1-.6-2.5.1-3.3 1.1-2.8 3.1-6.8 4.9-11 4.9-8.1 0-14.7-6.5-14.7-14.4S10 17.3 18.1 17.3c4.6 0 9 2.2 11.8 5.8.5.7 1.5 1.3 2.3 1 .9-.4 1.2-1.9.8-3.1-1.3-3.9-.8-8.1 1.3-11.7 4-6.9 13-9.2 20-5.3 3.4 1.9 5.9 5.1 6.9 8.8 1 3.7.5 7.6-1.5 10.9-2.3 3.9-6.2 6.4-10.7 7-1 .3-2 1-2 1.8s1 1.5 1.9 1.6c4.5.6 8.4 3.2 10.7 7 2 3.3 2.5 7.2 1.5 10.9-1 3.8-3.4 6.9-6.9 8.8-2.3 1.3-4.8 1.9-7.3 1.9zM31.7 35.4c1.1 0 2.1.3 3.1.9 3 1.9 3.6 5.8 2.5 8.7-1 2.7-.7 5.7.8 8.2 2.8 4.8 9.1 6.4 13.9 3.6 2.4-1.3 4-3.5 4.7-6.1.7-2.5.3-5.2-1-7.4-1.6-2.7-4.3-4.5-7.4-4.9-3.3-.4-5.8-3-5.8-6s2.5-5.6 5.8-6c3.1-.4 5.9-2.2 7.4-4.9 1.3-2.3 1.7-4.9 1-7.4C56 11.5 54.3 9.4 52 8c-4.9-2.7-11.1-1-13.9 3.7-1.4 2.4-1.7 5.3-.9 8 1 3.2.1 7.3-3.3 8.7-2.6 1.1-5.7 0-7.6-2.5-1.9-2.5-5-4-8.2-4-5.6 0-10.2 4.4-10.2 9.9s4.6 9.9 10.2 9.9c2.9 0 5.7-1.2 7.7-3.4 1.4-1.7 3.6-2.9 5.9-2.9z" })));
};

var SvgYahoo = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M60.2 5.3s-.4-.1-.7-.1c-1.7 0-3.5 1-3.5 3.5-1 13-2.1 26.1-3.9 38.5 1.1-.1 1.8.1 2.7.4 2-12.5 6.8-31.4 7.9-36.8.3-.6.4-1.5.4-2.1 0-2-1.2-3.1-2.9-3.4zM44.4 4.8c-2.5.6-4.9.6-7.3 0-2 3.8-9.6 16.2-14.4 24-4.8-8.3-10.7-17.5-14.4-24-3 .6-4.2.7-7.3 0 5.9 8.9 15.4 25.8 18.5 31.4L19 59.3s2.1-.3 3.5-.3c1.5 0 3.5.3 3.5.3l-.4-23.1c6.1-10.6 16-27.8 18.8-31.4 0-.2 0 0 0 0zM51.9 52.5c-2.4 0-3.4 1.7-3.4 3.5 0 2.1 1.7 3.2 3.9 3.2 1.5 0 3.2-1 3.2-3.5.1-1.8-1.6-3.2-3.7-3.2z" })));
};

var SvgYcombinator = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M1 1v62h62V1H1zm33.1 35.2V49H30V36.2L19.2 16.1h4.9s7.9 16.1 8 16.3c.1-.7 8.2-16.2 8.2-16.2h4.5l-10.7 20z" })));
};

var SvgYen = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M49.2 5.2c.6-1.1.3-2.4-.8-3.1-1.1-.6-2.4-.3-3.1.8L32 25.1 18.7 2.8c-.6-1.1-2-1.4-3.1-.8-1.1.6-1.4 2-.8 3.1l15 24.9v2.2H19.3c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h10.5v5.7H19.3c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h10.5v13c0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2V47h10.5c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H34.2v-5.7h10.5c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H34.2v-2.2l15-25.1z" })));
};

var SvgYoutube = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M61.7 17.1c-.7-2.7-2.8-4.8-5.5-5.5-4.8-1.3-24.2-1.3-24.2-1.3s-19.4 0-24.2 1.3c-2.7.7-4.8 2.8-5.5 5.5C1 22 1 32 1 32s0 10.1 1.3 14.9c.7 2.7 2.8 4.8 5.5 5.5 4.8 1.3 24.2 1.3 24.2 1.3s19.4 0 24.2-1.3c2.7-.7 4.8-2.8 5.5-5.5C63 42.1 63 32 63 32s0-10-1.3-14.9zM25.8 41.3V22.7L41.9 32l-16.1 9.3z" })));
};

var SvgZapier = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 65 64", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { fill: "#000", d: "M40.143 32.015c0 2.258-.408 4.499-1.204 6.612a18.78 18.78 0 0 1-6.615 1.205h-.027c-2.26 0-4.5-.407-6.615-1.204a18.736 18.736 0 0 1-1.205-6.614v-.03c0-2.328.427-4.557 1.2-6.614a18.72 18.72 0 0 1 6.617-1.204h.026c2.328 0 4.557.427 6.614 1.204a18.726 18.726 0 0 1 1.204 6.614v.03h.005ZM63.2 26.778H44.917L57.844 13.85a31.453 31.453 0 0 0-7.384-7.382L37.53 19.396V1.111C35.811.82 34.07.675 32.327.675h-.033c-1.774 0-3.511.151-5.204.436v18.285L14.157 6.466a31.276 31.276 0 0 0-3.996 3.382l-.006.006a31.528 31.528 0 0 0-3.38 3.996L19.71 26.778H1.42S.985 30.214.985 31.99v.022c0 1.775.15 3.516.436 5.21H19.71L6.775 50.148a31.546 31.546 0 0 0 7.385 7.384l12.93-12.928V62.89c1.692.284 3.426.434 5.198.435h.044a31.6 31.6 0 0 0 5.197-.435V44.604l12.932 12.93a31.577 31.577 0 0 0 4-3.381h.002a31.63 31.63 0 0 0 3.379-4L44.913 37.223h18.288c.284-1.693.433-3.428.433-5.2v-.045c0-1.742-.146-3.48-.433-5.197v-.002Z" })));
};

var SvgZip = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M56.3 11.6h-3.4V9.4c0-4.2-3.4-7.6-7.6-7.6H10.8c-4.2 0-7.6 3.4-7.6 7.6v30.7c0 1.4.6 2.7 1.6 3.6L23 60.9c.9.9 2.1 1.3 3.4 1.3h18.8c4.2 0 7.6-3.4 7.6-7.6V34.5h3.4c1.4 0 2.5-1.1 2.5-2.5V14.2c.1-1.4-1-2.6-2.4-2.6zm-46 31.2H23c.2 0 .4.2.4.4v11.9L10.3 42.8zm38.1 11.8c0 1.7-1.4 3.1-3.1 3.1H28V43.2c0-2.7-2.2-4.9-4.9-4.9H7.6V9.4c0-1.7 1.4-3.1 3.1-3.1h34.5c1.7 0 3.1 1.4 3.1 3.1v2.3H18.1c-1.4 0-2.5 1.1-2.5 2.5V32c0 1.4 1.1 2.5 2.5 2.5h30.3v20.1zm-10-35.3v7.6c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5v-7.6c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5zm-7.6 7.6c0 1.4-1.1 2.5-2.5 2.5H24c-.9 0-1.8-.5-2.2-1.3-.4-.8-.4-1.8.1-2.6l2.3-3.8h-.9c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5h5.5c.9 0 1.8.5 2.2 1.3.4.8.4 1.8-.1 2.6l-2.3 3.8c1.2.1 2.2 1.2 2.2 2.5zm17.8 0h-2.5c0 1.4-1.1 2.5-2.5 2.5S41 28.3 41 26.9v-7.6c0-1.4 1.1-2.5 2.5-2.5h5.1c2.8 0 5.1 2.3 5.1 5.1 0 2.7-2.3 5-5.1 5z" })));
};

var SvgZoomIn = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M61 51.1 46.7 36.7c-.8-.8-1.8-1.2-3-1.2-1.1 0-2.2.4-3 1.2l-.4.4-2.8-2.8c6.3-7.9 5.8-19.5-1.5-26.8-3.8-3.8-8.8-5.9-14.2-5.9-5.4 0-10.4 2.1-14.2 5.9-7.8 7.8-7.8 20.6 0 28.4 3.8 3.8 8.8 5.9 14.2 5.9 4.6 0 9-1.6 12.5-4.4l2.8 2.8-.4.4c-1.6 1.6-1.6 4.3 0 5.9l14.4 14.4c.8.8 1.8 1.2 3 1.2 1.1 0 2.2-.4 3-1.2l4-4c1.6-1.5 1.6-4.2-.1-5.8zM21.8 37.4c-4.2 0-8.1-1.6-11-4.6-6.1-6.1-6.1-16 0-22.1 2.9-2.9 6.9-4.6 11-4.6 4.2 0 8.1 1.6 11 4.6 6.1 6.1 6.1 16 0 22.1-2.9 3-6.8 4.6-11 4.6zM54 57.7l-13.9-14 3.6-3.6L57.6 54 54 57.7z" }),
        React__namespace.createElement("path", { d: "M26.9 19.6h-2.8v-2.8c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v2.8h-2.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h2.8V27c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-2.8h2.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3z" })));
};

var SvgZoomOut = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 64 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M61 51 46.7 36.7c-1.6-1.6-4.3-1.6-5.9 0l-.4.4-2.8-2.8c2.8-3.5 4.4-7.9 4.4-12.5 0-5.4-2.1-10.4-5.9-14.2-7.8-7.8-20.6-7.8-28.4 0-3.8 3.8-5.9 8.8-5.9 14.2 0 5.4 2.1 10.4 5.9 14.2 3.9 3.9 9.1 5.9 14.2 5.9 4.4 0 8.9-1.5 12.5-4.4l2.8 2.8-.4.4c-.8.8-1.2 1.8-1.2 3 0 1.1.4 2.2 1.2 3L51.1 61c.8.8 1.9 1.2 3 1.2s2.1-.4 3-1.2l4-4c.8-.8 1.2-1.8 1.2-3 0-1.1-.5-2.2-1.3-3zM10.8 32.9c-2.9-2.9-4.6-6.8-4.6-11s1.6-8.1 4.6-11c3-3 7-4.6 11-4.6s8 1.5 11 4.6c2.9 2.9 4.6 6.8 4.6 11s-1.6 8.1-4.6 11c-6 6-15.9 6-22 0zM54 57.6 40.1 43.7l3.6-3.6L57.6 54 54 57.6z" }),
        React__namespace.createElement("path", { d: "M26.9 19.6H16.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h10.2c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3z" })));
};

var SvgZoom = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React__namespace.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 65 64", width: "1em", height: "1em", "aria-labelledby": titleId }, props),
        title ? React__namespace.createElement("title", { id: titleId }, title) : null,
        React__namespace.createElement("path", { d: "M61.6 18.4c-.7-.4-1.6-.4-2.3.1l-10.7 6.9c-.9.6-1.4 1.5-1.4 2.6v8c0 1 .5 2 1.4 2.6l10.7 6.9c.4.2.8.4 1.2.4.4 0 .7-.1 1.1-.3.7-.4 1.2-1.2 1.2-2V20.4c0-.9-.5-1.6-1.2-2zm-3.3 21.1-6.6-4.3v-6.5l6.6-4.3v15.1zM31.1 15.9H4.5c-1.2 0-2.3 1-2.3 2.3V37c0 6.1 5.1 11.1 11.4 11.1h26.6c1.2 0 2.3-1 2.3-2.3V27c0-6.1-5.1-11.1-11.4-11.1zM38 43.6H13.6c-3.8 0-6.9-3-6.9-6.6V20.4h24.4c3.8 0 6.9 3 6.9 6.6v16.6z" })));
};

exports.AddFiles = SvgAddFiles;
exports.Adobe = SvgAdobe;
exports.Agenda = SvgAgenda;
exports.Airbnb = SvgAirbnb;
exports.Airtable = SvgAirtable;
exports.Alarm = SvgAlarm;
exports.AlarmClock = SvgAlarmClock;
exports.Amazon = SvgAmazon;
exports.AmazonOriginal = SvgAmazonOriginal;
exports.AmazonPay = SvgAmazonPay;
exports.Ambulance = SvgAmbulance;
exports.Amex = SvgAmex;
exports.Anchor = SvgAnchor;
exports.Android = SvgAndroid;
exports.AndroidOriginal = SvgAndroidOriginal;
exports.Angellist = SvgAngellist;
exports.AngleDoubleDown = SvgAngleDoubleDown;
exports.AngleDoubleLeft = SvgAngleDoubleLeft;
exports.AngleDoubleRight = SvgAngleDoubleRight;
exports.AngleDoubleUp = SvgAngleDoubleUp;
exports.Angular = SvgAngular;
exports.Apartment = SvgApartment;
exports.AppStore = SvgAppStore;
exports.AppleBrand = SvgAppleBrand;
exports.AppleMusic = SvgAppleMusic;
exports.ApplePay = SvgApplePay;
exports.Archive = SvgArchive;
exports.ArrowDown = SvgArrowDown;
exports.ArrowDownCircle = SvgArrowDownCircle;
exports.ArrowLeft = SvgArrowLeft;
exports.ArrowLeftCircle = SvgArrowLeftCircle;
exports.ArrowRight = SvgArrowRight;
exports.ArrowRightCircle = SvgArrowRightCircle;
exports.ArrowTopLeft = SvgArrowTopLeft;
exports.ArrowTopRight = SvgArrowTopRight;
exports.ArrowUp = SvgArrowUp;
exports.ArrowUpCircle = SvgArrowUpCircle;
exports.ArrowsHorizontal = SvgArrowsHorizontal;
exports.ArrowsVertical = SvgArrowsVertical;
exports.Atlassian = SvgAtlassian;
exports.Audi = SvgAudi;
exports.Aws = SvgAws;
exports.Azure = SvgAzure;
exports.Backward = SvgBackward;
exports.Baloon = SvgBaloon;
exports.Ban = SvgBan;
exports.BarChart = SvgBarChart;
exports.Basketball = SvgBasketball;
exports.Behance = SvgBehance;
exports.BehanceOriginal = SvgBehanceOriginal;
exports.BiCycle = SvgBiCycle;
exports.Bitbucket = SvgBitbucket;
exports.Bitcoin = SvgBitcoin;
exports.Bittorrent = SvgBittorrent;
exports.Blackboard = SvgBlackboard;
exports.Blogger = SvgBlogger;
exports.Bluetooth = SvgBluetooth;
exports.BluetoothOriginal = SvgBluetoothOriginal;
exports.Bmw = SvgBmw;
exports.Bold = SvgBold;
exports.Bolt = SvgBolt;
exports.BoltAlt = SvgBoltAlt;
exports.Book = SvgBook;
exports.Bookmark = SvgBookmark;
exports.BookmarkAlt = SvgBookmarkAlt;
exports.Bootstrap = SvgBootstrap;
exports.Bootstrap5 = SvgBootstrap5;
exports.Brave = SvgBrave;
exports.Bricks = SvgBricks;
exports.Bridge = SvgBridge;
exports.Briefcase = SvgBriefcase;
exports.BriefcaseAlt = SvgBriefcaseAlt;
exports.Brush = SvgBrush;
exports.BrushAlt = SvgBrushAlt;
exports.Btc = SvgBtc;
exports.Bubble = SvgBubble;
exports.Bug = SvgBug;
exports.Bulb = SvgBulb;
exports.Bullhorn = SvgBullhorn;
exports.Burger = SvgBurger;
exports.Bus = SvgBus;
exports.Cake = SvgCake;
exports.Calculator = SvgCalculator;
exports.CalculatorAlt = SvgCalculatorAlt;
exports.Calendar = SvgCalendar;
exports.Camera = SvgCamera;
exports.Candy = SvgCandy;
exports.CandyCane = SvgCandyCane;
exports.Capsule = SvgCapsule;
exports.Car = SvgCar;
exports.CarAlt = SvgCarAlt;
exports.Caravan = SvgCaravan;
exports.Cart = SvgCart;
exports.CartFull = SvgCartFull;
exports.CashApp = SvgCashApp;
exports.Certificate = SvgCertificate;
exports.CheckBox = SvgCheckBox;
exports.Checkmark = SvgCheckmark;
exports.CheckmarkCircle = SvgCheckmarkCircle;
exports.ChefHat = SvgChefHat;
exports.ChevronDown = SvgChevronDown;
exports.ChevronDownCircle = SvgChevronDownCircle;
exports.ChevronLeft = SvgChevronLeft;
exports.ChevronLeftCircle = SvgChevronLeftCircle;
exports.ChevronRight = SvgChevronRight;
exports.ChevronRightCircle = SvgChevronRightCircle;
exports.ChevronUp = SvgChevronUp;
exports.ChevronUpCircle = SvgChevronUpCircle;
exports.Chrome = SvgChrome;
exports.Chromecast = SvgChromecast;
exports.CircleMinus = SvgCircleMinus;
exports.CirclePlus = SvgCirclePlus;
exports.Cisco = SvgCisco;
exports.Clipboard = SvgClipboard;
exports.Close = SvgClose;
exports.Cloud = SvgCloud;
exports.CloudCheck = SvgCloudCheck;
exports.CloudDownload = SvgCloudDownload;
exports.CloudNetwork = SvgCloudNetwork;
exports.CloudSync = SvgCloudSync;
exports.CloudUpload = SvgCloudUpload;
exports.Cloudflare = SvgCloudflare;
exports.CloudySun = SvgCloudySun;
exports.Code = SvgCode;
exports.CodeAlt = SvgCodeAlt;
exports.Codepen = SvgCodepen;
exports.CoffeeCup = SvgCoffeeCup;
exports.Cog = SvgCog;
exports.Cogs = SvgCogs;
exports.Coin = SvgCoin;
exports.Coinbase = SvgCoinbase;
exports.Comments = SvgComments;
exports.CommentsAlt2 = SvgCommentsAlt2;
exports.CommentsReply = SvgCommentsReply;
exports.Compass = SvgCompass;
exports.Connectdevelop = SvgConnectdevelop;
exports.Construction = SvgConstruction;
exports.ConstructionHammer = SvgConstructionHammer;
exports.Consulting = SvgConsulting;
exports.ControlPanel = SvgControlPanel;
exports.Cool = SvgCool;
exports.Coral = SvgCoral;
exports.Cpanel = SvgCpanel;
exports.CreativeCommons = SvgCreativeCommons;
exports.CreditCards = SvgCreditCards;
exports.Crop = SvgCrop;
exports.CrossCircle = SvgCrossCircle;
exports.Crown = SvgCrown;
exports.Css3 = SvgCss3;
exports.Cup = SvgCup;
exports.Customer = SvgCustomer;
exports.Cut = SvgCut;
exports.Dashboard = SvgDashboard;
exports.Database = SvgDatabase;
exports.Delivery = SvgDelivery;
exports.Dev = SvgDev;
exports.Dialogflow = SvgDialogflow;
exports.DiamondAlt = SvgDiamondAlt;
exports.DiamondShape = SvgDiamondShape;
exports.Digitalocean = SvgDigitalocean;
exports.DinersClub = SvgDinersClub;
exports.Dinner = SvgDinner;
exports.Direction = SvgDirection;
exports.DirectionAlt = SvgDirectionAlt;
exports.DirectionLtr = SvgDirectionLtr;
exports.DirectionRtl = SvgDirectionRtl;
exports.Discord = SvgDiscord;
exports.DiscordAlt = SvgDiscordAlt;
exports.Discover = SvgDiscover;
exports.Display = SvgDisplay;
exports.DisplayAlt = SvgDisplayAlt;
exports.Docker = SvgDocker;
exports.Dollar = SvgDollar;
exports.Domain = SvgDomain;
exports.Download = SvgDownload;
exports.Dribbble = SvgDribbble;
exports.Drop = SvgDrop;
exports.Dropbox = SvgDropbox;
exports.DropboxOriginal = SvgDropboxOriginal;
exports.Drupal = SvgDrupal;
exports.DrupalOriginal = SvgDrupalOriginal;
exports.Dumbbell = SvgDumbbell;
exports.Edge = SvgEdge;
exports.EmptyFile = SvgEmptyFile;
exports.Enter = SvgEnter;
exports.Envato = SvgEnvato;
exports.Envelope = SvgEnvelope;
exports.Eraser = SvgEraser;
exports.Ethereum = SvgEthereum;
exports.Euro = SvgEuro;
exports.Exit = SvgExit;
exports.ExitDown = SvgExitDown;
exports.ExitUp = SvgExitUp;
exports.Eye = SvgEye;
exports.Facebook = SvgFacebook;
exports.FacebookFill = SvgFacebookFill;
exports.FacebookLine = SvgFacebookLine;
exports.FacebookMessenger = SvgFacebookMessenger;
exports.FacebookOriginal = SvgFacebookOriginal;
exports.FacebookOval = SvgFacebookOval;
exports.Facetime = SvgFacetime;
exports.Figma = SvgFigma;
exports.Files = SvgFiles;
exports.Firebase = SvgFirebase;
exports.Firefox = SvgFirefox;
exports.FirefoxOriginal = SvgFirefoxOriginal;
exports.Fireworks = SvgFireworks;
exports.FirstAid = SvgFirstAid;
exports.Fitbit = SvgFitbit;
exports.Flag = SvgFlag;
exports.FlagAlt = SvgFlagAlt;
exports.FlagsAlt1 = SvgFlagsAlt1;
exports.Flickr = SvgFlickr;
exports.Flower = SvgFlower;
exports.Flutter = SvgFlutter;
exports.Folder = SvgFolder;
exports.Ford = SvgFord;
exports.Forward = SvgForward;
exports.FrameExpand = SvgFrameExpand;
exports.FreshJuice = SvgFreshJuice;
exports.Friendly = SvgFriendly;
exports.FullScreen = SvgFullScreen;
exports.Funnel = SvgFunnel;
exports.Gallery = SvgGallery;
exports.Game = SvgGame;
exports.Gatsby = SvgGatsby;
exports.Gift = SvgGift;
exports.Git = SvgGit;
exports.Github = SvgGithub;
exports.GithubOriginal = SvgGithubOriginal;
exports.Go = SvgGo;
exports.Goodreads = SvgGoodreads;
exports.Google = SvgGoogle;
exports.GoogleCloud = SvgGoogleCloud;
exports.GoogleDrive = SvgGoogleDrive;
exports.GoogleMeet = SvgGoogleMeet;
exports.GooglePay = SvgGooglePay;
exports.GoogleWallet = SvgGoogleWallet;
exports.Graduation = SvgGraduation;
exports.Grammarly = SvgGrammarly;
exports.Graph = SvgGraph;
exports.Grid = SvgGrid;
exports.GridAlt = SvgGridAlt;
exports.Grow = SvgGrow;
exports.HackerNews = SvgHackerNews;
exports.Hammer = SvgHammer;
exports.Hand = SvgHand;
exports.Handshake = SvgHandshake;
exports.Happy = SvgHappy;
exports.Harddrive = SvgHarddrive;
exports.Headphone = SvgHeadphone;
exports.Heart = SvgHeart;
exports.HeartFill = SvgHeartFill;
exports.HeartMonitor = SvgHeartMonitor;
exports.Helicopter = SvgHelicopter;
exports.Helmet = SvgHelmet;
exports.Help = SvgHelp;
exports.Highlight = SvgHighlight;
exports.HighlightAlt = SvgHighlightAlt;
exports.Home = SvgHome;
exports.Hospital = SvgHospital;
exports.Hourglass = SvgHourglass;
exports.Html5 = SvgHtml5;
exports.Image = SvgImage;
exports.Imdb = SvgImdb;
exports.Inbox = SvgInbox;
exports.IndentDecrease = SvgIndentDecrease;
exports.IndentIncrease = SvgIndentIncrease;
exports.Infinite = SvgInfinite;
exports.Information = SvgInformation;
exports.Instagram = SvgInstagram;
exports.InstagramFill = SvgInstagramFill;
exports.InstagramOriginal = SvgInstagramOriginal;
exports.Invention = SvgInvention;
exports.InvestMonitor = SvgInvestMonitor;
exports.Investment = SvgInvestment;
exports.Ios = SvgIos;
exports.Island = SvgIsland;
exports.Italic = SvgItalic;
exports.Jaguar = SvgJaguar;
exports.Jamstack = SvgJamstack;
exports.Java = SvgJava;
exports.Javascript = SvgJavascript;
exports.Jcb = SvgJcb;
exports.Joomla = SvgJoomla;
exports.JoomlaOriginal = SvgJoomlaOriginal;
exports.Jsfiddle = SvgJsfiddle;
exports.Juice = SvgJuice;
exports.Key = SvgKey;
exports.Keyboard = SvgKeyboard;
exports.KeywordResearch = SvgKeywordResearch;
exports.Kubernetes = SvgKubernetes;
exports.Laptop = SvgLaptop;
exports.LaptopPhone = SvgLaptopPhone;
exports.Laravel = SvgLaravel;
exports.Layers = SvgLayers;
exports.Layout = SvgLayout;
exports.Leaf = SvgLeaf;
exports.Library = SvgLibrary;
exports.License = SvgLicense;
exports.Lifering = SvgLifering;
exports.Line = SvgLine;
exports.LineDashed = SvgLineDashed;
exports.LineDotted = SvgLineDotted;
exports.LineDouble = SvgLineDouble;
exports.LineIcon = LineIcon;
exports.LineSpacing = SvgLineSpacing;
exports.Lineicons = SvgLineicons;
exports.LineiconsAlt = SvgLineiconsAlt;
exports.LineiconsSymbol = SvgLineiconsSymbol;
exports.LineiconsSymbolAlt = SvgLineiconsSymbolAlt;
exports.LineiconsSymbolAlt2 = SvgLineiconsSymbolAlt2;
exports.Link = SvgLink;
exports.Linkedin = SvgLinkedin;
exports.LinkedinOriginal = SvgLinkedinOriginal;
exports.List = SvgList;
exports.Lock = SvgLock;
exports.LockAlt = SvgLockAlt;
exports.Magento = SvgMagento;
exports.Magnet = SvgMagnet;
exports.Magnifier = SvgMagnifier;
exports.Mailchimp = SvgMailchimp;
exports.Map = SvgMap;
exports.MapMarker = SvgMapMarker;
exports.Markdown = SvgMarkdown;
exports.Mashroom = SvgMashroom;
exports.Mastercard = SvgMastercard;
exports.Medium = SvgMedium;
exports.MediumAlt = SvgMediumAlt;
exports.Menu = SvgMenu;
exports.Mercedes = SvgMercedes;
exports.Meta = SvgMeta;
exports.Meta1 = SvgMeta1;
exports.Meta2 = SvgMeta2;
exports.Mic = SvgMic;
exports.Microphone = SvgMicrophone;
exports.Microscope = SvgMicroscope;
exports.Microsoft = SvgMicrosoft;
exports.MicrosoftEdge = SvgMicrosoftEdge;
exports.MicrosoftTeams = SvgMicrosoftTeams;
exports.Minus = SvgMinus;
exports.Mobile = SvgMobile;
exports.MoneyLocation = SvgMoneyLocation;
exports.MoneyProtection = SvgMoneyProtection;
exports.Mongodb = SvgMongodb;
exports.More = SvgMore;
exports.MoreAlt = SvgMoreAlt;
exports.Mouse = SvgMouse;
exports.Move = SvgMove;
exports.Mushroom = SvgMushroom;
exports.Music = SvgMusic;
exports.Mysql = SvgMysql;
exports.Netflix = SvgNetflix;
exports.Netlify = SvgNetlify;
exports.Network = SvgNetwork;
exports.Nextjs = SvgNextjs;
exports.Night = SvgNight;
exports.Nissan = SvgNissan;
exports.Nodejs = SvgNodejs;
exports.NodejsAlt = SvgNodejsAlt;
exports.Notepad = SvgNotepad;
exports.Notion = SvgNotion;
exports.Npm = SvgNpm;
exports.Oculus = SvgOculus;
exports.Offer = SvgOffer;
exports.Opera = SvgOpera;
exports.Package = SvgPackage;
exports.Paddle = SvgPaddle;
exports.PageBreak = SvgPageBreak;
exports.Pagination = SvgPagination;
exports.PaintBucketAlt = SvgPaintBucketAlt;
exports.PaintRoller = SvgPaintRoller;
exports.Pallet = SvgPallet;
exports.Paperclip = SvgPaperclip;
exports.Patreon = SvgPatreon;
exports.Pause = SvgPause;
exports.Paypal = SvgPaypal;
exports.PaypalOriginal = SvgPaypalOriginal;
exports.Pencil = SvgPencil;
exports.PencilAlt = SvgPencilAlt;
exports.Phone = SvgPhone;
exports.PhoneSet = SvgPhoneSet;
exports.Php = SvgPhp;
exports.PieChart = SvgPieChart;
exports.Pilcrow = SvgPilcrow;
exports.Pin = SvgPin;
exports.Pinterest = SvgPinterest;
exports.Pizza = SvgPizza;
exports.Plane = SvgPlane;
exports.Play = SvgPlay;
exports.PlayStore = SvgPlayStore;
exports.PlayStoreAlt = SvgPlayStoreAlt;
exports.PlayStoreFill = SvgPlayStoreFill;
exports.Playstation = SvgPlaystation;
exports.Plug = SvgPlug;
exports.Plus = SvgPlus;
exports.Pointer = SvgPointer;
exports.PointerDown = SvgPointerDown;
exports.PointerLeft = SvgPointerLeft;
exports.PointerRight = SvgPointerRight;
exports.PointerTop = SvgPointerTop;
exports.Popup = SvgPopup;
exports.Postcard = SvgPostcard;
exports.Postgresql = SvgPostgresql;
exports.Postman = SvgPostman;
exports.Pound = SvgPound;
exports.PowerSwitch = SvgPowerSwitch;
exports.Printer = SvgPrinter;
exports.Producthunt = SvgProducthunt;
exports.Protection = SvgProtection;
exports.Pulse = SvgPulse;
exports.Pyramids = SvgPyramids;
exports.Python = SvgPython;
exports.QuestionCircle = SvgQuestionCircle;
exports.Quora = SvgQuora;
exports.Quotation = SvgQuotation;
exports.RadioButton = SvgRadioButton;
exports.Rain = SvgRain;
exports.React = SvgReact;
exports.Reddit = SvgReddit;
exports.Reload = SvgReload;
exports.RemoveFile = SvgRemoveFile;
exports.Reply = SvgReply;
exports.Restaurant = SvgRestaurant;
exports.Revenue = SvgRevenue;
exports.Road = SvgRoad;
exports.Rocket = SvgRocket;
exports.RssFeed = SvgRssFeed;
exports.Ruler = SvgRuler;
exports.RulerAlt = SvgRulerAlt;
exports.RulerPencil = SvgRulerPencil;
exports.Rupee = SvgRupee;
exports.Sad = SvgSad;
exports.Safari = SvgSafari;
exports.Save = SvgSave;
exports.SchoolBench = SvgSchoolBench;
exports.SchoolBenchAlt = SvgSchoolBenchAlt;
exports.Scooter = SvgScooter;
exports.ScrollDown = SvgScrollDown;
exports.Search = SvgSearch;
exports.SearchAlt = SvgSearchAlt;
exports.SelectCursor = SvgSelectCursor;
exports.Seo = SvgSeo;
exports.Service = SvgService;
exports.Share = SvgShare;
exports.ShareAlt = SvgShareAlt;
exports.Shield = SvgShield;
exports.ShiftLeft = SvgShiftLeft;
exports.ShiftRight = SvgShiftRight;
exports.Ship = SvgShip;
exports.Shopify = SvgShopify;
exports.ShoppingBasket = SvgShoppingBasket;
exports.Shortcode = SvgShortcode;
exports.Shovel = SvgShovel;
exports.Shuffle = SvgShuffle;
exports.Signal = SvgSignal;
exports.SignalApp = SvgSignalApp;
exports.Sketch = SvgSketch;
exports.SkippingRope = SvgSkippingRope;
exports.Skype = SvgSkype;
exports.Slack = SvgSlack;
exports.SlackLine = SvgSlackLine;
exports.Slice = SvgSlice;
exports.Slideshare = SvgSlideshare;
exports.Slim = SvgSlim;
exports.Smile = SvgSmile;
exports.Snapchat = SvgSnapchat;
exports.SortAlphaAsc = SvgSortAlphaAsc;
exports.SortAmountAsc = SvgSortAmountAsc;
exports.SortAmountDsc = SvgSortAmountDsc;
exports.Soundcloud = SvgSoundcloud;
exports.SoundcloudOriginal = SvgSoundcloudOriginal;
exports.Speechless = SvgSpeechless;
exports.Spellcheck = SvgSpellcheck;
exports.Spinner = SvgSpinner;
exports.SpinnerArrow = SvgSpinnerArrow;
exports.SpinnerSolid = SvgSpinnerSolid;
exports.Spotify = SvgSpotify;
exports.SpotifyOriginal = SvgSpotifyOriginal;
exports.Spray = SvgSpray;
exports.Sprout = SvgSprout;
exports.Squarespace = SvgSquarespace;
exports.Stackoverflow = SvgStackoverflow;
exports.Stamp = SvgStamp;
exports.StarEmpty = SvgStarEmpty;
exports.StarFill = SvgStarFill;
exports.StarHalf = SvgStarHalf;
exports.StatsDown = SvgStatsDown;
exports.StatsUp = SvgStatsUp;
exports.Steam = SvgSteam;
exports.Sthethoscope = SvgSthethoscope;
exports.Stop = SvgStop;
exports.Strikethrough = SvgStrikethrough;
exports.Stripe = SvgStripe;
exports.Stumbleupon = SvgStumbleupon;
exports.Sun = SvgSun;
exports.Support = SvgSupport;
exports.SurfBoard = SvgSurfBoard;
exports.Suspect = SvgSuspect;
exports.Svelte = SvgSvelte;
exports.Svg500Px = Svg500Px;
exports.Swift = SvgSwift;
exports.Syringe = SvgSyringe;
exports.TShirt = SvgTShirt;
exports.Tab = SvgTab;
exports.Tag = SvgTag;
exports.Tailwindcss = SvgTailwindcss;
exports.Target = SvgTarget;
exports.TargetCustomer = SvgTargetCustomer;
exports.TargetRevenue = SvgTargetRevenue;
exports.Taxi = SvgTaxi;
exports.Teabag = SvgTeabag;
exports.Telegram = SvgTelegram;
exports.TelegramOriginal = SvgTelegramOriginal;
exports.Tesla = SvgTesla;
exports.TextAlignCenter = SvgTextAlignCenter;
exports.TextAlignJustify = SvgTextAlignJustify;
exports.TextAlignLeft = SvgTextAlignLeft;
exports.TextAlignRight = SvgTextAlignRight;
exports.TextFormat = SvgTextFormat;
exports.TextFormatRemove = SvgTextFormatRemove;
exports.Thought = SvgThought;
exports.ThumbsDown = SvgThumbsDown;
exports.ThumbsUp = SvgThumbsUp;
exports.Thunder = SvgThunder;
exports.ThunderAlt = SvgThunderAlt;
exports.Ticket = SvgTicket;
exports.TicketAlt = SvgTicketAlt;
exports.Tiktok = SvgTiktok;
exports.TiktokAlt = SvgTiktokAlt;
exports.Timer = SvgTimer;
exports.Tounge = SvgTounge;
exports.Toyota = SvgToyota;
exports.Train = SvgTrain;
exports.TrainAlt = SvgTrainAlt;
exports.TrashCan = SvgTrashCan;
exports.Travel = SvgTravel;
exports.Tree = SvgTree;
exports.Trees = SvgTrees;
exports.Trello = SvgTrello;
exports.Trowel = SvgTrowel;
exports.Tumblr = SvgTumblr;
exports.Twitch = SvgTwitch;
exports.Twitter = SvgTwitter;
exports.TwitterFill = SvgTwitterFill;
exports.TwitterOriginal = SvgTwitterOriginal;
exports.Typescript = SvgTypescript;
exports.Ubuntu = SvgUbuntu;
exports.Underline = SvgUnderline;
exports.Unlink = SvgUnlink;
exports.Unlock = SvgUnlock;
exports.Unsplash = SvgUnsplash;
exports.Upload = SvgUpload;
exports.User = SvgUser;
exports.Users = SvgUsers;
exports.Ux = SvgUx;
exports.Vector = SvgVector;
exports.Vercel = SvgVercel;
exports.Video = SvgVideo;
exports.Vimeo = SvgVimeo;
exports.Visa = SvgVisa;
exports.Vk = SvgVk;
exports.Vmware = SvgVmware;
exports.Volkswagen = SvgVolkswagen;
exports.Volume = SvgVolume;
exports.VolumeHigh = SvgVolumeHigh;
exports.VolumeLow = SvgVolumeLow;
exports.VolumeMedium = SvgVolumeMedium;
exports.VolumeMute = SvgVolumeMute;
exports.VsCode = SvgVsCode;
exports.Vuejs = SvgVuejs;
exports.Wallet = SvgWallet;
exports.Warning = SvgWarning;
exports.Webhooks = SvgWebhooks;
exports.Website = SvgWebsite;
exports.WebsiteAlt = SvgWebsiteAlt;
exports.Wechat = SvgWechat;
exports.Weight = SvgWeight;
exports.Whatsapp = SvgWhatsapp;
exports.Wheelbarrow = SvgWheelbarrow;
exports.Wheelchair = SvgWheelchair;
exports.Windows = SvgWindows;
exports.Wordpress = SvgWordpress;
exports.WordpressFill = SvgWordpressFill;
exports.World = SvgWorld;
exports.WorldAlt = SvgWorldAlt;
exports.Write = SvgWrite;
exports.Xbox = SvgXbox;
exports.Xrp = SvgXrp;
exports.Yahoo = SvgYahoo;
exports.Ycombinator = SvgYcombinator;
exports.Yen = SvgYen;
exports.Youtube = SvgYoutube;
exports.Zapier = SvgZapier;
exports.Zip = SvgZip;
exports.Zoom = SvgZoom;
exports.ZoomIn = SvgZoomIn;
exports.ZoomOut = SvgZoomOut;
//# sourceMappingURL=index.js.map
