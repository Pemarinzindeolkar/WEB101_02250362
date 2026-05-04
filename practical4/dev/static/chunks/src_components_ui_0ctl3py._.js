(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/VideoCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function VideoCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(41);
    if ($[0] !== "db1cd0595f1983aae34fd81c03f0cc0b712a7a2d6b99d2936eeb77f4eb04848d") {
        for(let $i = 0; $i < 41; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "db1cd0595f1983aae34fd81c03f0cc0b712a7a2d6b99d2936eeb77f4eb04848d";
    }
    const { post } = t0;
    const [liked, setLiked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== post) {
        t1 = post || {};
        $[1] = post;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const { username: t2, caption: t3, audio: t4, likes: t5, comments: t6, shares: t7 } = t1;
    const username = t2 === undefined ? "user123" : t2;
    const caption = t3 === undefined ? "No caption" : t3;
    const audio = t4 === undefined ? "Original Audio" : t4;
    const likes = t5 === undefined ? 0 : t5;
    const comments = t6 === undefined ? 0 : t6;
    const shares = t7 === undefined ? 0 : t7;
    let t8;
    if ($[3] !== liked) {
        t8 = ({
            "VideoCard[handleLikeClick]": ()=>{
                setLiked(!liked);
            }
        })["VideoCard[handleLikeClick]"];
        $[3] = liked;
        $[4] = t8;
    } else {
        t8 = $[4];
    }
    const handleLikeClick = t8;
    let t9;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mr-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-12 w-12 rounded-full bg-gray-600"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/VideoCard.jsx",
                lineNumber: 55,
                columnNumber: 32
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/VideoCard.jsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[5] = t9;
    } else {
        t9 = $[5];
    }
    let t10;
    if ($[6] !== username) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-semibold text-white",
            children: [
                "@",
                username
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/VideoCard.jsx",
            lineNumber: 62,
            columnNumber: 11
        }, this);
        $[6] = username;
        $[7] = t10;
    } else {
        t10 = $[7];
    }
    let t11;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-400 text-sm ml-1",
            children: "2d ago"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/VideoCard.jsx",
            lineNumber: 70,
            columnNumber: 11
        }, this);
        $[8] = t11;
    } else {
        t11 = $[8];
    }
    let t12;
    if ($[9] !== caption) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white text-sm mt-1",
            children: caption
        }, void 0, false, {
            fileName: "[project]/src/components/ui/VideoCard.jsx",
            lineNumber: 77,
            columnNumber: 11
        }, this);
        $[9] = caption;
        $[10] = t12;
    } else {
        t12 = $[10];
    }
    let t13;
    if ($[11] !== t10 || $[12] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-2",
            children: [
                t10,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/VideoCard.jsx",
            lineNumber: 85,
            columnNumber: 11
        }, this);
        $[11] = t10;
        $[12] = t12;
        $[13] = t13;
    } else {
        t13 = $[13];
    }
    let t14;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMusic"], {
            className: "mr-2 text-xs"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/VideoCard.jsx",
            lineNumber: 94,
            columnNumber: 11
        }, this);
        $[14] = t14;
    } else {
        t14 = $[14];
    }
    let t15;
    if ($[15] !== audio) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center text-gray-400 text-sm mb-3",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "truncate max-w-[250px]",
                    children: audio
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/VideoCard.jsx",
                    lineNumber: 101,
                    columnNumber: 78
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/VideoCard.jsx",
            lineNumber: 101,
            columnNumber: 11
        }, this);
        $[15] = audio;
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white",
            children: "Video Placeholder"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/VideoCard.jsx",
            lineNumber: 109,
            columnNumber: 11
        }, this);
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mr-5 w-[300px] h-[530px] bg-black rounded-md flex items-center justify-center relative overflow-hidden",
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-4 left-4 text-white text-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-1",
                        children: "0:30"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/VideoCard.jsx",
                        lineNumber: 116,
                        columnNumber: 197
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/VideoCard.jsx",
                    lineNumber: 116,
                    columnNumber: 136
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/VideoCard.jsx",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    if ($[19] !== liked) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center",
            children: liked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaHeart"], {
                className: "text-red-500 text-xl"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/VideoCard.jsx",
                lineNumber: 123,
                columnNumber: 105
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaRegHeart"], {
                className: "text-white text-xl"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/VideoCard.jsx",
                lineNumber: 123,
                columnNumber: 152
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/VideoCard.jsx",
            lineNumber: 123,
            columnNumber: 11
        }, this);
        $[19] = liked;
        $[20] = t18;
    } else {
        t18 = $[20];
    }
    const t19 = liked ? likes + 1 : likes;
    let t20;
    if ($[21] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-white text-xs mt-1",
            children: t19
        }, void 0, false, {
            fileName: "[project]/src/components/ui/VideoCard.jsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[21] = t19;
        $[22] = t20;
    } else {
        t20 = $[22];
    }
    let t21;
    if ($[23] !== handleLikeClick || $[24] !== t18 || $[25] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "flex flex-col items-center",
            onClick: handleLikeClick,
            children: [
                t18,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/VideoCard.jsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        $[23] = handleLikeClick;
        $[24] = t18;
        $[25] = t20;
        $[26] = t21;
    } else {
        t21 = $[26];
    }
    let t22;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaComment"], {
                className: "text-white text-xl"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/VideoCard.jsx",
                lineNumber: 150,
                columnNumber: 96
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/VideoCard.jsx",
            lineNumber: 150,
            columnNumber: 11
        }, this);
        $[27] = t22;
    } else {
        t22 = $[27];
    }
    let t23;
    if ($[28] !== comments) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "flex flex-col items-center",
            children: [
                t22,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white text-xs mt-1",
                    children: comments
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/VideoCard.jsx",
                    lineNumber: 157,
                    columnNumber: 63
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/VideoCard.jsx",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        $[28] = comments;
        $[29] = t23;
    } else {
        t23 = $[29];
    }
    let t24;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaShare"], {
                className: "text-white text-xl"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/VideoCard.jsx",
                lineNumber: 165,
                columnNumber: 96
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/VideoCard.jsx",
            lineNumber: 165,
            columnNumber: 11
        }, this);
        $[30] = t24;
    } else {
        t24 = $[30];
    }
    let t25;
    if ($[31] !== shares) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "flex flex-col items-center",
            children: [
                t24,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white text-xs mt-1",
                    children: shares
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/VideoCard.jsx",
                    lineNumber: 172,
                    columnNumber: 63
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/VideoCard.jsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[31] = shares;
        $[32] = t25;
    } else {
        t25 = $[32];
    }
    let t26;
    if ($[33] !== t21 || $[34] !== t23 || $[35] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col justify-end space-y-3 py-2",
                    children: [
                        t21,
                        t23,
                        t25
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/VideoCard.jsx",
                    lineNumber: 180,
                    columnNumber: 38
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/VideoCard.jsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[33] = t21;
        $[34] = t23;
        $[35] = t25;
        $[36] = t26;
    } else {
        t26 = $[36];
    }
    let t27;
    if ($[37] !== t13 || $[38] !== t15 || $[39] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex py-6 border-b border-gray-800",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        t13,
                        t15,
                        t26
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/VideoCard.jsx",
                    lineNumber: 190,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/VideoCard.jsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[37] = t13;
        $[38] = t15;
        $[39] = t26;
        $[40] = t27;
    } else {
        t27 = $[40];
    }
    return t27;
}
_s(VideoCard, "5oFMLl0KA2P+7Df5hTCAaQ+yYE8=");
_c = VideoCard;
var _c;
__turbopack_context__.k.register(_c, "VideoCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/VideoFeed.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoFeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$VideoCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/VideoCard.jsx [app-client] (ecmascript)");
'use client';
;
;
;
// Sample data for our feed
const DUMMY_POSTS = [
    {
        id: '1',
        username: '@user1',
        caption: 'Check out this cool video! #trending #tikotk #viral',
        audio: 'original Sounds - User1',
        likes: 1234,
        comments: 432,
        shares: 89
    },
    {
        id: '2',
        username: '@user2',
        caption: 'Learning to dance #dance #fun #trending',
        audio: 'Popular Song - Artist',
        likes: 5678,
        comments: 321,
        shares: 52
    },
    {
        id: '3',
        username: '@user3',
        caption: 'Beautiful sunset today! #Nature #Sunset #Vibes',
        audio: 'Sunset vibes - Chilll Music',
        likes: 2468,
        comments: 135,
        shares: 46
    }
];
function VideoFeed() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "2593976385488547c949a64a9d2acf10e660c32a616619c46333e571fd19ae54") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2593976385488547c949a64a9d2acf10e660c32a616619c46333e571fd19ae54";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[550px] mx-auto",
            children: DUMMY_POSTS.map(_VideoFeedDUMMY_POSTSMap)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/VideoFeed.jsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = VideoFeed;
function _VideoFeedDUMMY_POSTSMap(post) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$VideoCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        post: post
    }, post.id, false, {
        fileName: "[project]/src/components/ui/VideoFeed.jsx",
        lineNumber: 50,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "VideoFeed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_ui_0ctl3py._.js.map