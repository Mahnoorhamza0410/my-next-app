(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/BannerLayout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BannerLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$magicui$2f$particles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/magicui/particles.tsx [app-client] (ecmascript)"); // adjust the path if needed
'use client';
;
;
function BannerLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-screen overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/hero-bg.jpg",
                alt: "Hero Background",
                className: "absolute inset-0 w-full h-full object-cover z-[-2]",
                style: {
                    objectPosition: '8% center'
                }
            }, void 0, false, {
                fileName: "[project]/components/BannerLayout.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-[-1] pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$magicui$2f$particles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Particles"], {}, void 0, false, {
                    fileName: "[project]/components/BannerLayout.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/BannerLayout.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pt-[390px] sm:pt-[120px] flex flex-col justify-center items-center text-center z-10",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/BannerLayout.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BannerLayout.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = BannerLayout;
var _c;
__turbopack_context__.k.register(_c, "BannerLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/CountdownTimer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CountPart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function CountPart({ targetDate = '2025-12-31T23:59:59' }) {
    _s();
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountPart.useEffect": ()=>{
            const calculateTimeLeft = {
                "CountPart.useEffect.calculateTimeLeft": ()=>{
                    const endDate = new Date(targetDate);
                    const now = new Date();
                    if (isNaN(endDate.getTime())) {
                        console.error('Invalid date format');
                        return {
                            days: 0,
                            hours: 0,
                            minutes: 0
                        };
                    }
                    const difference = +endDate - +now;
                    // Static values for now
                    return {
                        days: 2,
                        hours: 8,
                        minutes: 48
                    };
                }
            }["CountPart.useEffect.calculateTimeLeft"];
            setTimeLeft(calculateTimeLeft());
            const timer = setInterval({
                "CountPart.useEffect.timer": ()=>{
                    setTimeLeft(calculateTimeLeft());
                }
            }["CountPart.useEffect.timer"], 1000);
            return ({
                "CountPart.useEffect": ()=>clearInterval(timer)
            })["CountPart.useEffect"];
        }
    }["CountPart.useEffect"], [
        targetDate
    ]);
    if (!timeLeft) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative bg-no-repeat bg-cover bg-center w-full opacity-40 bg-[linear-gradient(90deg,rgba(47,35,82,0.2)_0%,rgba(143,108,250,0.2)_100%)] mx-auto px-4 py-10 sm:py-12 z-10 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    top: '0px',
                    left: '0px',
                    width: '100%',
                    height: '90px'
                },
                className: "jsx-d04bbdfcc4d4f043" + " " + "absolute inset-0 z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    id: "d04bbdfcc4d4f043",
                    children: "@media (width>=640px){div.jsx-d04bbdfcc4d4f043{height:124px!important}}"
                }, void 0, false, void 0, this)
            }, void 0, false, {
                fileName: "[project]/components/CountdownTimer.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-full mx-auto px-4 flex flex-wrap items-center justify-center gap-12 sm:gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 min-w-max z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/Live.png",
                                alt: "Get Ready Icon",
                                width: 40,
                                height: 40
                            }, void 0, false, {
                                fileName: "[project]/components/CountdownTimer.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "text-[28px] sm:text-[36px] font-semibold text-white whitespace-nowrap",
                                children: "Get Ready..."
                            }, void 0, false, {
                                fileName: "[project]/components/CountdownTimer.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CountdownTimer.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full sm:w-auto z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-5",
                            children: Object.entries(timeLeft).map(([unit, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[rgba(144,53,171,0.20)] text-white p-4 rounded-md text-center",
                                    style: {
                                        width: '91px',
                                        height: '60px',
                                        paddingRight: unit === "minutes" ? "16px" : "8px",
                                        paddingLeft: "8px",
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl sm:text-3xl font-bold leading-8",
                                            style: {
                                                fontSize: '24px'
                                            },
                                            children: value
                                        }, void 0, false, {
                                            fileName: "[project]/components/CountdownTimer.tsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs sm:text-base font-normal text-[#B7B7B7] leading-6",
                                            style: {
                                                fontSize: '16px'
                                            },
                                            children: unit.toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/components/CountdownTimer.tsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, unit, true, {
                                    fileName: "[project]/components/CountdownTimer.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/CountdownTimer.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/CountdownTimer.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CountdownTimer.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CountdownTimer.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(CountPart, "FOc75etvWWxLQuOXBaop/MjMUe8=");
_c = CountPart;
var _c;
__turbopack_context__.k.register(_c, "CountPart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/CustomVideo.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CustomVideo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function CustomVideo() {
    _s();
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const handlePlayPause = ()=>{
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomVideo.useEffect": ()=>{
            const video = videoRef.current;
            if (!video) return;
            const handlePlay = {
                "CustomVideo.useEffect.handlePlay": ()=>setIsPaused(false)
            }["CustomVideo.useEffect.handlePlay"];
            const handlePause = {
                "CustomVideo.useEffect.handlePause": ()=>setIsPaused(true)
            }["CustomVideo.useEffect.handlePause"];
            const handleEnded = {
                "CustomVideo.useEffect.handleEnded": ()=>setIsPaused(true)
            }["CustomVideo.useEffect.handleEnded"];
            video.addEventListener('play', handlePlay);
            video.addEventListener('pause', handlePause);
            video.addEventListener('ended', handleEnded);
            return ({
                "CustomVideo.useEffect": ()=>{
                    video.removeEventListener('play', handlePlay);
                    video.removeEventListener('pause', handlePause);
                    video.removeEventListener('ended', handleEnded);
                }
            })["CustomVideo.useEffect"];
        }
    }["CustomVideo.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full px-5 sm:px-0 max-w-4xl mx-auto relative sm:pt-[125px] pt-[170px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    ref: videoRef,
                    controls: true,
                    playsInline: true,
                    muted: false,
                    className: "w-full h-auto rounded-lg shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                            src: "/video/awesom-video.mp4",
                            type: "video/mp4"
                        }, void 0, false, {
                            fileName: "[project]/components/CustomVideo.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        "Your browser does not support the video tag."
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CustomVideo.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                isPaused && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handlePlayPause,
                    className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/icons/media-player.png",
                        alt: "Play",
                        className: "w-16 h-16 opacity-80 hover:opacity-100"
                    }, void 0, false, {
                        fileName: "[project]/components/CustomVideo.tsx",
                        lineNumber: 55,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/CustomVideo.tsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CustomVideo.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CustomVideo.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(CustomVideo, "8owlWzx6NFXgwu+Q16PjC3ORiTU=");
_c = CustomVideo;
var _c;
__turbopack_context__.k.register(_c, "CustomVideo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/TwoSectionLayout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TwoSectionLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function TwoSectionLayout() {
    const cards = [
        {
            title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white",
                        children: "LP "
                    }, void 0, false, {
                        fileName: "[project]/components/TwoSectionLayout.tsx",
                        lineNumber: 9,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#8F6CFA]",
                        children: "x"
                    }, void 0, false, {
                        fileName: "[project]/components/TwoSectionLayout.tsx",
                        lineNumber: 10,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white",
                        children: "AMPLIFIER"
                    }, void 0, false, {
                        fileName: "[project]/components/TwoSectionLayout.tsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            icon: '/icons/LA-AMP.svg',
            desc: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "underline",
                        children: "LP Double Dipping."
                    }, void 0, false, {
                        fileName: "[project]/components/TwoSectionLayout.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this),
                    ' ',
                    "Deposit into LP AND Continue to earn fees"
                ]
            }, void 0, true)
        },
        {
            title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white",
                    children: "GIVEAWAY POOL"
                }, void 0, false, {
                    fileName: "[project]/components/TwoSectionLayout.tsx",
                    lineNumber: 26,
                    columnNumber: 11
                }, this)
            }, void 0, false),
            icon: '/icons/Giveaway.svg',
            desc: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    "Air Dropped monthly to 3 random",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/components/TwoSectionLayout.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "underline",
                        children: " Top 100 RHINO Holders."
                    }, void 0, false, {
                        fileName: "[project]/components/TwoSectionLayout.tsx",
                        lineNumber: 33,
                        columnNumber: 20
                    }, this),
                    ' '
                ]
            }, void 0, true)
        },
        {
            title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white",
                        children: "EARN "
                    }, void 0, false, {
                        fileName: "[project]/components/TwoSectionLayout.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#8F6CFA]",
                        children: "FEES"
                    }, void 0, false, {
                        fileName: "[project]/components/TwoSectionLayout.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            icon: '/icons/Earn-fees.svg',
            desc: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    "Earn % of trading fees PLS Tokens ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/components/TwoSectionLayout.tsx",
                        lineNumber: 47,
                        columnNumber: 45
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "underline",
                        children: " Auto Deposited."
                    }, void 0, false, {
                        fileName: "[project]/components/TwoSectionLayout.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    ' '
                ]
            }, void 0, true)
        },
        {
            title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white",
                    children: "VIP TOOLS"
                }, void 0, false, {
                    fileName: "[project]/components/TwoSectionLayout.tsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, this)
            }, void 0, false),
            icon: '/icons/VIP.svg',
            desc: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    "Access",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "underline",
                        children: " Holder only"
                    }, void 0, false, {
                        fileName: "[project]/components/TwoSectionLayout.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    ' ',
                    "Wealth Building Tools & Courses on",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#8F6CFA]",
                        children: " Solidity.win"
                    }, void 0, false, {
                        fileName: "[project]/components/TwoSectionLayout.tsx",
                        lineNumber: 63,
                        columnNumber: 45
                    }, this)
                ]
            }, void 0, true)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col md:flex-row gap-6 p-0 sm:p-6 max-w-[1180px] mx-auto pb-[94px] sm:pb-[146px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full md:w-2/3 flex flex-col gap-1 sm:gap-6 order-1 md:order-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-[linear-gradient(90deg,rgba(47,35,82,0.01)_0%,rgba(143,108,250,0.20)_100%)] md:bg-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 sm:px-0 py-10 sm:py-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[24px] font-['Kumbh_Sans'] sm:text-[44px] font-kumbh font-bold text-white text-center md:text-left",
                                children: [
                                    "Holder Benefits",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-normal italic text-[24px] font-kumbh sm:text-[44px]",
                                        children: "Let’s Eat"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TwoSectionLayout.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TwoSectionLayout.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/TwoSectionLayout.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/TwoSectionLayout.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "block sm:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/30.png",
                            alt: "Vertical",
                            className: "w-full h-full object-cover my-0 sm:my-4 p-5 sm:p-[0]"
                        }, void 0, false, {
                            fileName: "[project]/components/TwoSectionLayout.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/TwoSectionLayout.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden sm:flex flex-row gap-4 items-center sm:items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/BQ.png",
                                className: "w-10 h-10 sm:w-auto sm:h-auto"
                            }, void 0, false, {
                                fileName: "[project]/components/TwoSectionLayout.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-300 text-left font-['Open_Sans']",
                                children: "...RhinoFi has positioned itself for long term growth & stability."
                            }, void 0, false, {
                                fileName: "[project]/components/TwoSectionLayout.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TwoSectionLayout.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:gap-[10px] gap-[16px] sm:py-0 py-0 p-5 sm:p-0",
                        children: cards.map((card, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                // Apply a different background color for the first card and the others
                                className: `${idx === 0 ? 'bg-[#8F6CFA3D]' : 'bg-[#89898926]'} transition-colors duration-300 text-white py-6 px-5 sm:pr-[71px] sm:pl-[71px] rounded-[10px] shadow flex flex-col items-center text-center leading-[24px]`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: card.icon,
                                        alt: "icon",
                                        width: 40,
                                        height: 40,
                                        className: card.icon === '/icons/Earn-fees.svg' ? 'mt-[18px]' : card.icon === '/icons/LA-AMP.svg' ? 'mt-[2px]' : ''
                                    }, void 0, false, {
                                        fileName: "[project]/components/TwoSectionLayout.tsx",
                                        lineNumber: 124,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-[14px] sm:text-[20px] font-semibold mt-4 mb-2",
                                        children: card.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/TwoSectionLayout.tsx",
                                        lineNumber: 135,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[12px] sm:text-[16px] text-white-300 capitalize",
                                        children: card.desc
                                    }, void 0, false, {
                                        fileName: "[project]/components/TwoSectionLayout.tsx",
                                        lineNumber: 136,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/components/TwoSectionLayout.tsx",
                                lineNumber: 116,
                                columnNumber: 5
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/TwoSectionLayout.tsx",
                        lineNumber: 114,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TwoSectionLayout.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden sm:block max-w-full  order-2 sm:order-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/Holder-Benifits.png",
                    alt: "Vertical",
                    className: "max-w-full h-[535px] object-cover"
                }, void 0, false, {
                    fileName: "[project]/components/TwoSectionLayout.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/TwoSectionLayout.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TwoSectionLayout.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c = TwoSectionLayout;
var _c;
__turbopack_context__.k.register(_c, "TwoSectionLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ThumbGallerySlider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// 'use client';
// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Thumbs, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/thumbs';
// import 'swiper/css/autoplay'; // optional: not required usually, but just in case
// const images = [
//   '/hero-bg.jpg',
//   '/Rhino-big.png',
//   '/hero-bg.jpg',
//   '/Rhino-big.png',
// ];
// function ThumbGallerySlider() {
//   const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Main Image Slider */}
//       <Swiper
//         spaceBetween={10}
//         loop
//         autoplay={{
//           delay: 5000, // 5 seconds
//           disableOnInteraction: false,
//         }}
//         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//         thumbs={{ swiper: thumbsSwiper }}
//         modules={[Thumbs, Autoplay]}
//         className="w-full h-full"
//       >
//         {images.map((img, i) => (
//           <SwiperSlide key={i}>
//             <img
//               src={img}
//               alt={`Slide ${i}`}
//               // className="w-full h-full object-cover"
//               className="w-full h-full object-contain sm:object-cover"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       {/* Thumbnails with Overlay */}
//       <div className="absolute bottom-0 left-0 w-full z-10 bg-black/50 py-4">
//         <div className="max-w-4xl mx-auto px-4 overflow-hidden">
//           <Swiper
//             onSwiper={setThumbsSwiper}
//             spaceBetween={10}
//             slidesPerView={4}
//             watchSlidesProgress
//             loop
//             modules={[Thumbs]}
//             className="overflow-hidden"
//           >
//             {images.map((img, i) => {
//               const isActive = activeIndex === i;
//               return (
//                 <SwiperSlide key={i}>
//                   <div
//                     className={`rounded-[20px] ${
//                       isActive
//                         ? 'p-[2px] bg-[linear-gradient(90deg,#9F54B6,#2CC0D4)]'
//                         : 'p-[1px] border border-white'
//                     }`}
//                   >
//                     <img
//                       src={img}
//                       alt={`Thumb ${i}`}
//                       className="w-full h-20 object-cover rounded-[20px] cursor-pointer transition-opacity duration-200"
//                     />
//                   </div>
//                 </SwiperSlide>
//               );
//             })}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default ThumbGallerySlider;
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$thumbs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thumbs$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/thumbs.mjs [app-client] (ecmascript) <export default as Thumbs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/autoplay.mjs [app-client] (ecmascript) <export default as Autoplay>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const images = [
    '/hero-bg.jpg',
    '/Rhino-big.png',
    '/hero-bg.jpg',
    '/Rhino-big.png'
];
function ThumbGallerySlider() {
    _s();
    const [thumbsSwiper, setThumbsSwiper] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full sm:h-screen h-auto overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                spaceBetween: 10,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                onSlideChange: (swiper)=>setActiveIndex(swiper.realIndex),
                thumbs: {
                    swiper: thumbsSwiper
                },
                modules: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$thumbs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thumbs$3e$__["Thumbs"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"]
                ],
                className: "w-full h-full",
                children: images.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: img,
                            alt: `Slide ${i}`,
                            className: "w-full h-full object-contain sm:object-cover"
                        }, void 0, false, {
                            fileName: "[project]/components/ThumbGallerySlider.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this)
                    }, i, false, {
                        fileName: "[project]/components/ThumbGallerySlider.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ThumbGallerySlider.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-full z-10 bg-black/50 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-4 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                        onSwiper: setThumbsSwiper,
                        spaceBetween: 10,
                        slidesPerView: 4,
                        watchSlidesProgress: true,
                        loop: true,
                        modules: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$thumbs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thumbs$3e$__["Thumbs"]
                        ],
                        className: "overflow-hidden",
                        children: images.map((img, i)=>{
                            const isActive = activeIndex === i;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `rounded-[18px] sm:rounded-[20px] ${isActive ? 'p-[2px] bg-[linear-gradient(90deg,#9F54B6,#2CC0D4)]' : 'p-[1px] border-2 border-white'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: img,
                                        alt: `Thumb ${i}`,
                                        className: "w-[205px] sm:w-[auto] h-[auto] sm:h-[auto] object-cover rounded-[20px] cursor-pointer transition-opacity duration-200"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ThumbGallerySlider.tsx",
                                        lineNumber: 148,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ThumbGallerySlider.tsx",
                                    lineNumber: 141,
                                    columnNumber: 19
                                }, this)
                            }, i, false, {
                                fileName: "[project]/components/ThumbGallerySlider.tsx",
                                lineNumber: 140,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/ThumbGallerySlider.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ThumbGallerySlider.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ThumbGallerySlider.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ThumbGallerySlider.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_s(ThumbGallerySlider, "jXKHcToZljH9ouGfgqGDa4tUWuU=");
_c = ThumbGallerySlider;
const __TURBOPACK__default__export__ = ThumbGallerySlider;
var _c;
__turbopack_context__.k.register(_c, "ThumbGallerySlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/TokenTabsWithIframe.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TokenTabsWithIframe)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function TokenTabsWithIframe() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('buy');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-col items-center justify-center gap-6 px-4 py-10 bg-[url('/upper-home.png')] bg-lightgray bg-cover bg-no-repeat bg-blend-multiply pt-[60px] sm:pt-[75px] pb-[150px] sm:pb-[130px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[350px] flex gap-4 p-2 justify-center items-center rounded-full bg-[radial-gradient(70.71%_70.71%_at_50%_50%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_100%)] shadow-[inset_1px_1px_10px_rgba(143,108,250,0.6),inset_0_0_0_1px_rgba(255,255,255,0.06)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab('buy'),
                        className: `w-[174px] px-6 py-2 text-sm font-semibold transition-all duration-200 rounded-full ${activeTab === 'buy' ? 'text-white bg-[#8f6cfabf] shadow-[1px_1px_2px_rgba(0,0,0,0.15)]' : 'text-white/80'}`,
                        children: "BUY TOKEN"
                    }, void 0, false, {
                        fileName: "[project]/components/TokenTabsWithIframe.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab('chart'),
                        className: `w-[174px] px-6 py-2 text-sm font-semibold transition-all duration-200 rounded-full ${activeTab === 'chart' ? 'text-white bg-[#8f6cfabf] shadow-[1px_1px_2px_rgba(0,0,0,0.15)]' : 'text-white/80'}`,
                        children: "VIEW CHART"
                    }, void 0, false, {
                        fileName: "[project]/components/TokenTabsWithIframe.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TokenTabsWithIframe.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white text-[14px] mt-[14px] sm:mt-[12px] font-normal underline w-[350px] px-6 py-2 bg-white/10 text-center rounded-lg ",
                children: "Click to BRIDGE to Pulsechain"
            }, void 0, false, {
                fileName: "[project]/components/TokenTabsWithIframe.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center w-full mx-4 ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-4 mt-[10px] sm:mt-[0px] bg-white/10 text-center rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg h-[370px] w-[330px] sm:h-[500px] sm:w-[370px] overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.1)]",
                        children: activeTab === 'buy' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            src: "https://pulsex.mypinata.cloud/ipfs/bafybeiesh56oijasgr7creubue6xt5anivxifrwd5a5argiz4orbed57qi/#/?inputCurrency=0x616cb6a245Ed4c11216Ec58D10B6A2E87271845d&outputCurrency=PLS",
                            className: "w-full h-[600px] border-none",
                            allowFullScreen: true,
                            title: "Pulsex DApp"
                        }, void 0, false, {
                            fileName: "[project]/components/TokenTabsWithIframe.tsx",
                            lineNumber: 44,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            src: "https://pulsex.mypinata.cloud/ipfs/bafybeiesh56oijasgr7creubue6xt5anivxifrwd5a5argiz4orbed57qi/#/?inputCurrency=0x616cb6a245Ed4c11216Ec58D10B6A2E87271845d&outputCurrency=PLS",
                            className: "w-full h-[600px] border-none",
                            allowFullScreen: true,
                            title: "Token Chart"
                        }, void 0, false, {
                            fileName: "[project]/components/TokenTabsWithIframe.tsx",
                            lineNumber: 51,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/TokenTabsWithIframe.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/TokenTabsWithIframe.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/TokenTabsWithIframe.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TokenTabsWithIframe.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_s(TokenTabsWithIframe, "YTK2lGsCF+/VnzxfZ36SHnjTdJw=");
_c = TokenTabsWithIframe;
var _c;
__turbopack_context__.k.register(_c, "TokenTabsWithIframe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/textbg/BuyRhino.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const BuyRhino = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full px-4 pt-[24px] pb-[24px] sm:pt-[38px] sm:pb-[38px] bg-[linear-gradient(90deg,rgba(143,108,250,0.20)_0%,rgba(47,35,82,0.20)_100%)] mt-[100px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-white font-['Kumbh_Sans'] text-[28px] sm:text-[44px] font-bold leading-[28px] sm:leading-[48px] text-center",
            children: "Buy RhinoFi (RHINO)"
        }, void 0, false, {
            fileName: "[project]/components/textbg/BuyRhino.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/textbg/BuyRhino.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
};
_c = BuyRhino;
const __TURBOPACK__default__export__ = BuyRhino;
var _c;
__turbopack_context__.k.register(_c, "BuyRhino");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/textbg/RhinoFi.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const RhinoFi = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full px-4 py-10 bg-[linear-gradient(90deg,rgba(47,35,82,0.01)_0%,rgba(143,108,250,0.20)_100%)]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-white text-[28px] font-['Kumbh_Sans'] sm:text-[44px] font-bold leading-[28px] sm:leading-[48px] sm:text-right text-center",
            children: "RhinoFi Brand Assets"
        }, void 0, false, {
            fileName: "[project]/components/textbg/RhinoFi.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/textbg/RhinoFi.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
};
_c = RhinoFi;
const __TURBOPACK__default__export__ = RhinoFi;
var _c;
__turbopack_context__.k.register(_c, "RhinoFi");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/BannerSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BannerWithCountdown)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$magicui$2f$particles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/magicui/particles.tsx [app-client] (ecmascript)"); // Importing your custom particles component
'use client';
;
;
function BannerWithCountdown() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-[-1] pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$magicui$2f$particles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Particles"], {}, void 0, false, {
                        fileName: "[project]/components/BannerSection.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/components/BannerSection.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-center bg-cover min-h-[90vh] flex flex-col items-center justify-center text-white text-center px-4",
                style: {
                    backgroundImage: 'url("/hero-bg.jpg")'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ADADAD] font-extrabold text-[36px] sm:text-[60px] capitalize leading-[130%]",
                        style: {
                            textShadow: '0px 5px 12px rgba(0, 0, 0, 0.20)'
                        },
                        children: "THE FIRST EVER"
                    }, void 0, false, {
                        fileName: "[project]/components/BannerSection.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white font-light text-[18px] sm:text-[42px] mt-4 leading-[125%]",
                        children: [
                            "Hyper Deflationary, Dynamically Taxed, ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/BannerSection.tsx",
                                lineNumber: 26,
                                columnNumber: 50
                            }, this),
                            " Multi-Rewards Machine"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BannerSection.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "inline-flex items-center cursor-pointer uppercase sm:h-[auto] h-[59px] sm:w-[auto] w-[340px] justify-center px-[32px] sm:px-[51px] py-[18px] font-bold text-[18px] sm:text-[22px] rounded-[500px] bg-gradient-to-r from-[#BB57BF] via-[#2E4B94] to-[#2CC8D8] text-white leading-[48px] transition",
                        children: [
                            "Join The Stampede",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "36",
                                height: "37",
                                viewBox: "0 0 36 37",
                                fill: "none",
                                className: "ml-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "0.5",
                                        y: "1",
                                        width: "35",
                                        height: "35",
                                        rx: "17.5",
                                        stroke: "white"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BannerSection.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M17.9998 34.0833C26.6063 34.0833 33.5832 27.1064 33.5832 18.5C33.5832 9.89355 26.6063 2.91666 17.9998 2.91666C9.3934 2.91666 2.4165 9.89355 2.4165 18.5C2.4165 27.1064 9.3934 34.0833 17.9998 34.0833Z",
                                        fill: "url(#paint0_linear_3941_1324)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BannerSection.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M9.47041 18.3355C14.0133 16.3562 17.0425 15.0514 18.5583 14.421C22.8859 12.6209 23.7852 12.3083 24.3713 12.2979C24.5002 12.2957 24.7884 12.3276 24.9751 12.4791C25.1328 12.607 25.1762 12.7798 25.1969 12.9011C25.2177 13.0224 25.2435 13.2987 25.223 13.5146C24.9885 15.9787 23.9737 21.9584 23.4575 24.7182C23.239 25.886 22.8089 26.2775 22.3925 26.3159C21.4875 26.3991 20.8004 25.7178 19.9239 25.1432C18.5523 24.2442 17.7775 23.6845 16.4462 22.8072C14.9076 21.7933 15.905 21.2361 16.7818 20.3254C17.0113 20.087 20.9985 16.4603 21.0757 16.1313C21.0854 16.0902 21.0943 15.9368 21.0032 15.8558C20.9121 15.7748 20.7776 15.8025 20.6806 15.8246C20.543 15.8558 18.352 17.304 14.1074 20.1691C13.4855 20.5962 12.9222 20.8043 12.4175 20.7934C11.8611 20.7814 10.7908 20.4788 9.9951 20.2201C9.0192 19.9029 8.24356 19.7352 8.3111 19.1964C8.34628 18.9158 8.73272 18.6288 9.47041 18.3355Z",
                                        fill: "white"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BannerSection.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                            id: "paint0_linear_3941_1324",
                                            x1: "17.9998",
                                            y1: "2.91666",
                                            x2: "17.9998",
                                            y2: "33.8522",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    stopColor: "#2AABEE"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BannerSection.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "1",
                                                    stopColor: "#229ED9"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BannerSection.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BannerSection.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/BannerSection.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BannerSection.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BannerSection.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BannerSection.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-no-repeat bg-cover bg-center w-full opacity-40 bg-[linear-gradient(90deg,rgba(47,35,82,0.2)_0%,rgba(143,108,250,0.2)_100%)] mx-auto px-4 py-10 sm:py-12 z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-center text-white text-2xl font-semibold mb-8",
                        children: "Get Ready"
                    }, void 0, false, {
                        fileName: "[project]/components/BannerSection.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row justify-center items-center gap-6 max-w-4xl mx-auto",
                        children: [
                            'Days',
                            'Hours',
                            'Seconds'
                        ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/10 border border-white/20 rounded-lg p-6 text-center text-white w-full sm:w-1/3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl font-medium",
                                    children: item
                                }, void 0, false, {
                                    fileName: "[project]/components/BannerSection.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/components/BannerSection.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/BannerSection.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BannerSection.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BannerSection.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = BannerWithCountdown;
var _c;
__turbopack_context__.k.register(_c, "BannerWithCountdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/VideoLowerSec.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Lowervideosection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center pt-[15px] sm:pt-[25px] pb-[85px] sm:pb-[130px] w-full px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[18px] text-center sm:text-[24px] text-[#DAD9D9] font-semibold leading-[150%] sm:leading-[170%] w-[400px] sm:w-[800px]",
                children: "Crypto ipsum bitcoin ethereum dogecoin litecoin. Solana BitTorrent vechain dash nexo terraUSD. Monero ren kava WAX klaytn solana klaytn algorand. Solana stacks decentraland amp aave terra flow decred velas. Terra XRP ren enjin filecoin secret terra decred compound decentraland."
            }, void 0, false, {
                fileName: "[project]/components/VideoLowerSec.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-[15px] sm:mt-[20px] font-poppins text-[16px] text-center text-[#DAD9D9] font-normal leading-[150%] sm:leading-[170%] w-[400px] sm:w-[800px]",
                children: "Crypto ipsum bitcoin ethereum dogecoin litecoin. Solana BitTorrent vechain dash nexo terraUSD. Monero ren kava WAX klaytn solana klaytn algorand. Solana stacks decentraland amp aave terra flow decred compound decentraland."
            }, void 0, false, {
                fileName: "[project]/components/VideoLowerSec.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-[40px] w-full max-w-[842px] ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center border-[2px] border-[#666666] rounded overflow-hidden w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-[#444] text-white text-[14px] sm:text-[18px]  px-3 py-1 px-3 py-1 sm:px-4 sm:py-2",
                            onClick: ()=>alert("Left button clicked"),
                            children: "$RHINO:"
                        }, void 0, false, {
                            fileName: "[project]/components/VideoLowerSec.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "0xE7308da032326dE7A2a2b80E1131650E845Ab989",
                            className: "flex-1 px-3 py-[6px] bg-black text-white placeholder-white placeholder:text-[14px] placeholder:font-medium outline-none text-sm"
                        }, void 0, false, {
                            fileName: "[project]/components/VideoLowerSec.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-[#C336FF] text-white font-bold text-[14px] sm:text-[18px] px-3 py-1 sm:px-4 sm:py-2",
                            onClick: ()=>navigator.clipboard.writeText("0xE7308da032326dE7A2a2b80E1131650E845Ab989"),
                            children: "Copy"
                        }, void 0, false, {
                            fileName: "[project]/components/VideoLowerSec.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VideoLowerSec.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VideoLowerSec.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VideoLowerSec.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
};
_c = Lowervideosection;
const __TURBOPACK__default__export__ = Lowervideosection;
var _c;
__turbopack_context__.k.register(_c, "Lowervideosection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/VideoLowerSec1.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Lowervideosection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center pt-[15px] sm:pt-[25px] pb-[85px] sm:pb-[130px] w-full px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[18px] text-center sm:text-[24px] text-[#DAD9D9] font-semibold leading-[150%] sm:leading-[170%] w-[400px] sm:w-[800px]",
                children: "Crypto ipsum bitcoin ethereum dogecoin litecoin. Solana BitTorrent vechain dash nexo terraUSD. Monero ren kava WAX klaytn solana klaytn algorand. Solana stacks decentraland amp aave terra flow decred velas. Terra XRP ren enjin filecoin secret terra decred compound decentraland."
            }, void 0, false, {
                fileName: "[project]/components/VideoLowerSec1.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-[15px] sm:mt-[20px] font-poppins text-[16px] text-center text-[#DAD9D9] font-normal leading-[150%] sm:leading-[170%] w-[400px] sm:w-[800px]",
                children: "XRP ipsum bitcoin ethereum dogecoin litecoin. Solana BitTorrent vechain dash nexo terraUSD. Monero ren kava WAX klaytn solana klaytn algorand. Solana stacks decentraland amp aave terra flow decred compound decentraland."
            }, void 0, false, {
                fileName: "[project]/components/VideoLowerSec1.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-[40px] w-full max-w-[842px] ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center border-[2px] border-[#666666] rounded overflow-hidden w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-[#444] text-white text-[14px] sm:text-[18px]  px-3 py-1 px-3 py-1 sm:px-4 sm:py-2",
                            onClick: ()=>alert("Left button clicked"),
                            children: "$RHINO:"
                        }, void 0, false, {
                            fileName: "[project]/components/VideoLowerSec1.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "0xE7308da032326dE7A2a2b80E1131650E845Ab989",
                            className: "flex-1 px-3 py-[6px] bg-black text-white placeholder-white placeholder:text-[14px] placeholder:font-medium outline-none text-sm"
                        }, void 0, false, {
                            fileName: "[project]/components/VideoLowerSec1.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-[#C336FF] text-white font-bold text-[14px] sm:text-[18px] px-3 py-1 sm:px-4 sm:py-2",
                            onClick: ()=>navigator.clipboard.writeText("0xE7308da032326dE7A2a2b80E1131650E845Ab989"),
                            children: "Copy"
                        }, void 0, false, {
                            fileName: "[project]/components/VideoLowerSec1.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VideoLowerSec1.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VideoLowerSec1.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VideoLowerSec1.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
};
_c = Lowervideosection;
const __TURBOPACK__default__export__ = Lowervideosection;
var _c;
__turbopack_context__.k.register(_c, "Lowervideosection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/VideoLowerSec2.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Lowervideosection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center pt-[15px] sm:pt-[25px] pb-[85px] sm:pb-[130px] w-full px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[18px] text-center sm:text-[24px] text-[#DAD9D9] font-semibold leading-[150%] sm:leading-[170%] w-[400px] sm:w-[800px]",
                children: "BNB ipsum bitcoin ethereum dogecoin litecoin. Solana BitTorrent vechain dash nexo terraUSD. Monero ren kava WAX klaytn solana klaytn algorand. Solana stacks decentraland amp aave terra flow decred velas. Terra XRP ren enjin filecoin secret terra decred compound decentraland."
            }, void 0, false, {
                fileName: "[project]/components/VideoLowerSec2.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-[15px] sm:mt-[20px] font-poppins text-[16px] text-center text-[#DAD9D9] font-normal leading-[150%] sm:leading-[170%] w-[400px] sm:w-[800px]",
                children: "SOL ipsum bitcoin ethereum dogecoin litecoin. Solana BitTorrent vechain dash nexo terraUSD. Monero ren kava WAX klaytn solana klaytn algorand. Solana stacks decentraland amp aave terra flow decred compound decentraland."
            }, void 0, false, {
                fileName: "[project]/components/VideoLowerSec2.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-[40px] w-full max-w-[842px] ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center border-[2px] border-[#666666] rounded overflow-hidden w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-[#444] text-white text-[14px] sm:text-[18px]  px-3 py-1 px-3 py-1 sm:px-4 sm:py-2",
                            onClick: ()=>alert("Left button clicked"),
                            children: "$RHINO:"
                        }, void 0, false, {
                            fileName: "[project]/components/VideoLowerSec2.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "0xE7308da032326dE7A2a2b80E1131650E845Ab989",
                            className: "flex-1 px-3 py-[6px] bg-black text-white placeholder-white placeholder:text-[14px] placeholder:font-medium outline-none text-sm"
                        }, void 0, false, {
                            fileName: "[project]/components/VideoLowerSec2.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-[#C336FF] text-white font-bold text-[14px] sm:text-[18px] px-3 py-1 sm:px-4 sm:py-2",
                            onClick: ()=>navigator.clipboard.writeText("0xE7308da032326dE7A2a2b80E1131650E845Ab989"),
                            children: "Copy"
                        }, void 0, false, {
                            fileName: "[project]/components/VideoLowerSec2.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VideoLowerSec2.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VideoLowerSec2.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VideoLowerSec2.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
};
_c = Lowervideosection;
const __TURBOPACK__default__export__ = Lowervideosection;
var _c;
__turbopack_context__.k.register(_c, "Lowervideosection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/SupplyTab.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoLowerSec$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/VideoLowerSec.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoLowerSec1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/VideoLowerSec1.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoLowerSec2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/VideoLowerSec2.tsx [app-client] (ecmascript)"); // Adjust path as needed
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const TabSection = ()=>{
    _s();
    const tabs = [
        'Supply',
        'Tax',
        'Info'
    ];
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(tabs[0]); // Set the first tab as active by default
    const cryptoText = `Crypto ipsum bitcoin ethereum dogecoin litecoin. Solana BitTorrent vechain dash nexo terraUSD. Monero ren kava WAX klaytn solana klaytn algorand. Solana stacks decentraland amp aave terra flow decred velas. Terra XRP ren enjin filecoin secret terra decred compound decentraland.`;
    // Function to render content based on active tab
    const renderTabContent = ()=>{
        switch(activeTab){
            case 'Supply':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoLowerSec$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/SupplyTab.tsx",
                    lineNumber: 17,
                    columnNumber: 16
                }, this); // Replace with the actual content of this tab
            case 'Tax':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoLowerSec1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/SupplyTab.tsx",
                    lineNumber: 19,
                    columnNumber: 16
                }, this); // You can modify this content later
            case 'Info':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoLowerSec2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/SupplyTab.tsx",
                    lineNumber: 21,
                    columnNumber: 16
                }, this); // You can modify this content later
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoLowerSec$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/SupplyTab.tsx",
                    lineNumber: 23,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-2xl mx-auto mt-10 p-4 bg-black text-white font-bold rounded-xl shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-[5px] sm:gap-[8px]",
                children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab(tab),
                        className: `flex-1 text-center py-4 px-10 h-[60px] bg-[#2B2B2B] cursor-pointer 
              ${activeTab === tab ? 'border-b-4 border-[#00BB00] text-white font-semibold' : 'border-b-4 border-[#8F6CFA] text-white'} 
              rounded-t-[10px] rounded-b-[0px] transition-all duration-200`,
                        children: tab
                    }, tab, false, {
                        fileName: "[project]/components/SupplyTab.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/SupplyTab.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 space-y-4",
                children: renderTabContent()
            }, void 0, false, {
                fileName: "[project]/components/SupplyTab.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SupplyTab.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
};
_s(TabSection, "TPoYHp+eDLWWVi8i4JjK5Rpp5U0=");
_c = TabSection;
const __TURBOPACK__default__export__ = TabSection;
var _c;
__turbopack_context__.k.register(_c, "TabSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// 'use client';
// import BannerLayout from '@/components/BannerLayout';
// import CountdownTimer from '@/components/CountdownTimer ';
// import CustomVideo from '@/components/CustomVideo';
// import TwoSectionLayout from '@/components/TwoSectionLayout';
// import ThumbGallerySlider from '@/components/ThumbGallerySlider';
// // import CountdownTimer from '@/components/CountdownTimer '
// import TokenTabsWithIframe from '@/components/TokenTabsWithIframe';
// import BuyRhino from '@/components/textbg/BuyRhino';
// import RhinoFi from '@/components/textbg/RhinoFi';
// import DynamicLayout from '@/components/DynamicLayout';
// import { Particles } from "@/components/magicui/particles";
// export default function Page() {
//   return (
//     <main>
//       {/* Banner with content inside */}
//         {/* <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ADADAD] font-extrabold text-[36px] sm:text-[60px] ">
//           THE FIRST EVER
//         </h1> */}
//         {/* <p className="text-white font-light text-[18px] sm:text-[42px] mt-4">
//           Hyper Deflationary, Dynamically Taxed, <br /> Multi-Rewards Machine
//         </p> */}
//         <div className="flex flex-col items-center justify-center w-full">
//         <div
//         className="w-full  bg-center bg-no-repeat  min-h-[700px] flex items-center justify-center"
//         style={{ backgroundImage: "url('/hero-bg.jpg')" }}
//       >
//         {/* Insert Particles JUST inside Banner */}
//                  <div className="absolute inset-0 z-0">
//                   <Particles 
//                     quantity={40} 
//                     staticity={40} 
//                     ease={40} 
//                     size={1} 
//                     color="#ffffff"
//                   />
//                 </div>
//                 <div className='flex flex-col items-center w-full'>
//         <DynamicLayout
//           title="THE FIRST EVER"
//           subtitle={
//             <>
//               Hyper Deflationary, Dynamically Taxed, Multi-Rewards Machine{' '}
//             </>
//           }
//           noSubtitleBg={true}
//         />
//         <CountdownTimer />
//           </div>
//       </div>
//           {/* <a
//             href="#"
//             className="inline-flex items-center uppercase justify-center px-[32px] sm:px-[51px] py-[18px] font-bold text-[18px] sm:text-[22px] rounded-[500px] bg-gradient-to-r from-[#BB57BF] via-[#2E4B94] to-[#2CC8D8] text-white"
//           >
//             Join The Stampede
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="36"
//               height="37"
//               viewBox="0 0 36 37"
//               fill="none"
//               className="ml-2"
//             >
//               <rect x="0.5" y="1" width="35" height="35" rx="17.5" stroke="white" />
//               <path
//                 d="M17.9998 34.0833C26.6063 34.0833 33.5832 27.1064 33.5832 18.5C33.5832 9.89355 26.6063 2.91666 17.9998 2.91666C9.3934 2.91666 2.4165 9.89355 2.4165 18.5C2.4165 27.1064 9.3934 34.0833 17.9998 34.0833Z"
//                 fill="url(#paint0_linear_3941_1324)"
//               />
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M9.47041 18.3355C14.0133 16.3562 17.0425 15.0514 18.5583 14.421C22.8859 12.6209 23.7852 12.3083 24.3713 12.2979C24.5002 12.2957 24.7884 12.3276 24.9751 12.4791C25.1328 12.607 25.1762 12.7798 25.1969 12.9011C25.2177 13.0224 25.2435 13.2987 25.223 13.5146C24.9885 15.9787 23.9737 21.9584 23.4575 24.7182C23.239 25.886 22.8089 26.2775 22.3925 26.3159C21.4875 26.3991 20.8004 25.7178 19.9239 25.1432C18.5523 24.2442 17.7775 23.6845 16.4462 22.8072C14.9076 21.7933 15.905 21.2361 16.7818 20.3254C17.0113 20.087 20.9985 16.4603 21.0757 16.1313C21.0854 16.0902 21.0943 15.9368 21.0032 15.8558C20.9121 15.7748 20.7776 15.8025 20.6806 15.8246C20.543 15.8558 18.352 17.304 14.1074 20.1691C13.4855 20.5962 12.9222 20.8043 12.4175 20.7934C11.8611 20.7814 10.7908 20.4788 9.9951 20.2201C9.0192 19.9029 8.24356 19.7352 8.3111 19.1964C8.34628 18.9158 8.73272 18.6288 9.47041 18.3355Z"
//                 fill="white"
//               />
//               <defs>
//                 <linearGradient
//                   id="paint0_linear_3941_1324"
//                   x1="17.9998"
//                   y1="2.91666"
//                   x2="17.9998"
//                   y2="33.8522"
//                   gradientUnits="userSpaceOnUse"
//                 >
//                   <stop stopColor="#2AABEE" />
//                   <stop offset="1" stopColor="#229ED9" />
//                 </linearGradient>
//               </defs>
//             </svg>
//           </a> */}
//         </div>
//       {/* Other Sections */}
//       {/* <CountdownTimer targetDate="2025-12-31T23:59:59" /> */}
//       <CustomVideo />
//       <TwoSectionLayout />
//       <RhinoFi/>
//       <ThumbGallerySlider/>
// <BuyRhino/>
//       <TokenTabsWithIframe/>
//     </main>
//   );
// }
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BannerLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BannerLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CountdownTimer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CountdownTimer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CustomVideo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CustomVideo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TwoSectionLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TwoSectionLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThumbGallerySlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ThumbGallerySlider.tsx [app-client] (ecmascript)");
// import CountdownTimer from '@/components/CountdownTimer '
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TokenTabsWithIframe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TokenTabsWithIframe.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$textbg$2f$BuyRhino$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/textbg/BuyRhino.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$textbg$2f$RhinoFi$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/textbg/RhinoFi.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BannerSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BannerSection.tsx [app-client] (ecmascript)");
// import BannerSection from '@/components/BannerSection';
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SupplyTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SupplyTab.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BannerLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ADADAD] font-extrabold text-[36px] sm:text-[60px] capitalize leading-[130%]",
                        style: {
                            textShadow: '0px 5px 12px rgba(0, 0, 0, 0.20)'
                        },
                        children: "THE FIRST EVER"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 138,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white font-light text-[18px] sm:text-[42px] mt-4 leading-[125%]",
                        children: [
                            "Hyper Deflationary, Dynamically Taxed, ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 142,
                                columnNumber: 50
                            }, this),
                            " Multi-Rewards Machine"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center w-full sm:mt-[48px] mt-[28px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "inline-flex items-center uppercase sm:h-[auto] h-[59px] sm:w-[auto] w-[340px] justify-center px-[32px] sm:px-[51px] py-[18px] font-bold text-[18px] sm:text-[22px] rounded-[500px] bg-gradient-to-r from-[#BB57BF] via-[#2E4B94] to-[#2CC8D8] text-white leading-[48px]",
                            children: [
                                "Join The Stampede",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "36",
                                    height: "37",
                                    viewBox: "0 0 36 37",
                                    fill: "none",
                                    className: "ml-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "0.5",
                                            y: "1",
                                            width: "35",
                                            height: "35",
                                            rx: "17.5",
                                            stroke: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M17.9998 34.0833C26.6063 34.0833 33.5832 27.1064 33.5832 18.5C33.5832 9.89355 26.6063 2.91666 17.9998 2.91666C9.3934 2.91666 2.4165 9.89355 2.4165 18.5C2.4165 27.1064 9.3934 34.0833 17.9998 34.0833Z",
                                            fill: "url(#paint0_linear_3941_1324)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M9.47041 18.3355C14.0133 16.3562 17.0425 15.0514 18.5583 14.421C22.8859 12.6209 23.7852 12.3083 24.3713 12.2979C24.5002 12.2957 24.7884 12.3276 24.9751 12.4791C25.1328 12.607 25.1762 12.7798 25.1969 12.9011C25.2177 13.0224 25.2435 13.2987 25.223 13.5146C24.9885 15.9787 23.9737 21.9584 23.4575 24.7182C23.239 25.886 22.8089 26.2775 22.3925 26.3159C21.4875 26.3991 20.8004 25.7178 19.9239 25.1432C18.5523 24.2442 17.7775 23.6845 16.4462 22.8072C14.9076 21.7933 15.905 21.2361 16.7818 20.3254C17.0113 20.087 20.9985 16.4603 21.0757 16.1313C21.0854 16.0902 21.0943 15.9368 21.0032 15.8558C20.9121 15.7748 20.7776 15.8025 20.6806 15.8246C20.543 15.8558 18.352 17.304 14.1074 20.1691C13.4855 20.5962 12.9222 20.8043 12.4175 20.7934C11.8611 20.7814 10.7908 20.4788 9.9951 20.2201C9.0192 19.9029 8.24356 19.7352 8.3111 19.1964C8.34628 18.9158 8.73272 18.6288 9.47041 18.3355Z",
                                            fill: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                id: "paint0_linear_3941_1324",
                                                x1: "17.9998",
                                                y1: "2.91666",
                                                x2: "17.9998",
                                                y2: "33.8522",
                                                gradientUnits: "userSpaceOnUse",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        stopColor: "#2AABEE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "1",
                                                        stopColor: "#229ED9"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 170,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 169,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-end w-full mt-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CountdownTimer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 186,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CustomVideo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BannerSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SupplyTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TwoSectionLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$textbg$2f$RhinoFi$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThumbGallerySlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$textbg$2f$BuyRhino$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 200,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TokenTabsWithIframe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_9de3a128._.js.map