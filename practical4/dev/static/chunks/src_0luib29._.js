(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/api-config.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
// Define base URL for our API
const API_BASE_URL = 'http://localhost:8000'; // No /api here
// Create main API instance
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});
// Request interceptor for adding authorization
api.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error)=>{
    return Promise.reject(error);
});
// Response interceptor for handling errors
api.interceptors.response.use((response)=>response, (error)=>{
    // Handle token expiration
    if (error.response && error.response.status === 401) {
        localStorage.removeItem('token');
        // Optionally redirect to login
        window.location.href = '/login';
    }
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/contexts/authContext.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api-config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
const useAuth = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "695bf4f857dd79fc90423d03d04f9809ace27e14d4b86315456c53dc37bfc768") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "695bf4f857dd79fc90423d03d04f9809ace27e14d4b86315456c53dc37bfc768";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
_s(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const AuthProvider = (t0)=>{
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "695bf4f857dd79fc90423d03d04f9809ace27e14d4b86315456c53dc37bfc768") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "695bf4f857dd79fc90423d03d04f9809ace27e14d4b86315456c53dc37bfc768";
    }
    const { children } = t0;
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ()=>{
            const token = localStorage.getItem("token");
            if (token) {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/users/me").then((res)=>{
                    setUser(res.data);
                }).catch((error)=>{
                    console.error("Failed to fetch user:", error);
                    localStorage.removeItem("token");
                    setUser(null);
                }).finally(()=>setLoading(false));
            } else {
                setLoading(false);
            }
        };
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = async (email, password)=>{
            ;
            try {
                const res_0 = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/users/login", {
                    email,
                    password
                });
                const { token: token_0, user: userData } = res_0.data;
                localStorage.setItem("token", token_0);
                setUser(userData);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Logged in successfully");
                return true;
            } catch (t4) {
                const err = t4;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(err.response?.data?.message || "Login failed");
                return false;
            }
        };
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const login = t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = async (username, email_0, password_0)=>{
            ;
            try {
                const res_1 = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/users/register", {
                    username,
                    email: email_0,
                    password: password_0
                });
                const { token: token_1, user: userData_0 } = res_1.data;
                localStorage.setItem("token", token_1);
                setUser(userData_0);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Account created successfully");
                return true;
            } catch (t5) {
                const err_0 = t5;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(err_0.response?.data?.message || "Registration failed");
                return false;
            }
        };
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const register = t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ()=>{
            localStorage.removeItem("token");
            setUser(null);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Logged out");
        };
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    const logout = t5;
    let t6;
    if ($[6] !== loading || $[7] !== user) {
        t6 = {
            user,
            loading,
            login,
            register,
            logout
        };
        $[6] = loading;
        $[7] = user;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== children || $[10] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
            value: t6,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/contexts/authContext.jsx",
            lineNumber: 146,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = children;
        $[10] = t6;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    return t7;
};
_s1(AuthProvider, "NiO5z6JIqzX62LS5UWDgIqbZYyY=");
_c = AuthProvider;
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/MainLayout.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$authContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/authContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function LoginPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(44);
    if ($[0] !== "f038da1fda94d42251516defb7513c8212dabce4954e149a58fcddcc133c36bc") {
        for(let $i = 0; $i < 44; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f038da1fda94d42251516defb7513c8212dabce4954e149a58fcddcc133c36bc";
    }
    const { login, register } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$authContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isLogin, setIsLogin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            username: "",
            email: "",
            password: ""
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] !== formData.email || $[3] !== formData.password || $[4] !== formData.username || $[5] !== isLogin || $[6] !== login || $[7] !== register || $[8] !== router) {
        t1 = ({
            "LoginPage[handleSubmit]": async (e)=>{
                e.preventDefault();
                setLoading(true);
                let success;
                if (isLogin) {
                    success = await login(formData.email, formData.password);
                } else {
                    success = await register(formData.username, formData.email, formData.password);
                }
                setLoading(false);
                if (success) {
                    router.push("/");
                }
            }
        })["LoginPage[handleSubmit]"];
        $[2] = formData.email;
        $[3] = formData.password;
        $[4] = formData.username;
        $[5] = isLogin;
        $[6] = login;
        $[7] = register;
        $[8] = router;
        $[9] = t1;
    } else {
        t1 = $[9];
    }
    const handleSubmit = t1;
    let t2;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl font-bold",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-red-500",
                    children: "TikTok"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/MainLayout.jsx",
                    lineNumber: 68,
                    columnNumber: 45
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-black",
                    children: "Clone"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/MainLayout.jsx",
                    lineNumber: 68,
                    columnNumber: 89
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/MainLayout.jsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    const t3 = isLogin ? "Log in to your account" : "Create a new account";
    let t4;
    if ($[11] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-8",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 mt-2",
                    children: t3
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/MainLayout.jsx",
                    lineNumber: 76,
                    columnNumber: 48
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/MainLayout.jsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[11] = t3;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] !== formData || $[14] !== isLogin) {
        t5 = !isLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Username",
                value: formData.username,
                onChange: {
                    "LoginPage[<input>.onChange]": (e_0)=>setFormData({
                            ...formData,
                            username: e_0.target.value
                        })
                }["LoginPage[<input>.onChange]"],
                className: "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                required: true
            }, void 0, false, {
                fileName: "[project]/src/components/layout/MainLayout.jsx",
                lineNumber: 84,
                columnNumber: 27
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/MainLayout.jsx",
            lineNumber: 84,
            columnNumber: 22
        }, this);
        $[13] = formData;
        $[14] = isLogin;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    let t6;
    if ($[16] !== formData) {
        t6 = ({
            "LoginPage[<input>.onChange]": (e_1)=>setFormData({
                    ...formData,
                    email: e_1.target.value
                })
        })["LoginPage[<input>.onChange]"];
        $[16] = formData;
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    let t7;
    if ($[18] !== formData.email || $[19] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "email",
                placeholder: "Email",
                value: formData.email,
                onChange: t6,
                className: "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                required: true
            }, void 0, false, {
                fileName: "[project]/src/components/layout/MainLayout.jsx",
                lineNumber: 111,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/MainLayout.jsx",
            lineNumber: 111,
            columnNumber: 10
        }, this);
        $[18] = formData.email;
        $[19] = t6;
        $[20] = t7;
    } else {
        t7 = $[20];
    }
    let t8;
    if ($[21] !== formData) {
        t8 = ({
            "LoginPage[<input>.onChange]": (e_2)=>setFormData({
                    ...formData,
                    password: e_2.target.value
                })
        })["LoginPage[<input>.onChange]"];
        $[21] = formData;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    let t9;
    if ($[23] !== formData.password || $[24] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "password",
                placeholder: "Password",
                value: formData.password,
                onChange: t8,
                className: "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                required: true
            }, void 0, false, {
                fileName: "[project]/src/components/layout/MainLayout.jsx",
                lineNumber: 133,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/MainLayout.jsx",
            lineNumber: 133,
            columnNumber: 10
        }, this);
        $[23] = formData.password;
        $[24] = t8;
        $[25] = t9;
    } else {
        t9 = $[25];
    }
    const t10 = loading ? "Please wait..." : isLogin ? "Log in" : "Sign up";
    let t11;
    if ($[26] !== loading || $[27] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            disabled: loading,
            className: "w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 disabled:bg-gray-400 transition-colors",
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/components/layout/MainLayout.jsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[26] = loading;
        $[27] = t10;
        $[28] = t11;
    } else {
        t11 = $[28];
    }
    let t12;
    if ($[29] !== handleSubmit || $[30] !== t11 || $[31] !== t5 || $[32] !== t7 || $[33] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "space-y-4",
            children: [
                t5,
                t7,
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/MainLayout.jsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[29] = handleSubmit;
        $[30] = t11;
        $[31] = t5;
        $[32] = t7;
        $[33] = t9;
        $[34] = t12;
    } else {
        t12 = $[34];
    }
    let t13;
    if ($[35] !== isLogin) {
        t13 = ({
            "LoginPage[<button>.onClick]": ()=>setIsLogin(!isLogin)
        })["LoginPage[<button>.onClick]"];
        $[35] = isLogin;
        $[36] = t13;
    } else {
        t13 = $[36];
    }
    const t14 = isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in";
    let t15;
    if ($[37] !== t13 || $[38] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t13,
                className: "text-red-500 hover:underline",
                children: t14
            }, void 0, false, {
                fileName: "[project]/src/components/layout/MainLayout.jsx",
                lineNumber: 175,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/MainLayout.jsx",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[37] = t13;
        $[38] = t14;
        $[39] = t15;
    } else {
        t15 = $[39];
    }
    let t16;
    if ($[40] !== t12 || $[41] !== t15 || $[42] !== t4) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-8 rounded-lg shadow-md w-full max-w-md",
                children: [
                    t4,
                    t12,
                    t15
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/MainLayout.jsx",
                lineNumber: 184,
                columnNumber: 85
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/MainLayout.jsx",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        $[40] = t12;
        $[41] = t15;
        $[42] = t4;
        $[43] = t16;
    } else {
        t16 = $[43];
    }
    return t16;
}
_s(LoginPage, "DW2JsPHi+nhCsPiXCIqrUcluomY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$authContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LoginPage;
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0luib29._.js.map