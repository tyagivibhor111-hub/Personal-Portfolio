module.exports = [
"[project]/Downloads/my-portfolio/my-portfolio/app/components/ui/animated-theme-toggler.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedThemeToggler",
    ()=>AnimatedThemeToggler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function polygonCollapsed(cx, cy, vertexCount) {
    const pairs = Array.from({
        length: vertexCount
    }, ()=>`${cx}px ${cy}px`).join(", ");
    return `polygon(${pairs})`;
}
function getThemeTransitionClipPaths(variant, cx, cy, maxRadius, viewportWidth, viewportHeight) {
    switch(variant){
        case "circle":
            return [
                `circle(0px at ${cx}px ${cy}px)`,
                `circle(${maxRadius}px at ${cx}px ${cy}px)`
            ];
        case "square":
            {
                const halfW = Math.max(cx, viewportWidth - cx);
                const halfH = Math.max(cy, viewportHeight - cy);
                const halfSide = Math.max(halfW, halfH) * 1.05;
                const end = [
                    `${cx - halfSide}px ${cy - halfSide}px`,
                    `${cx + halfSide}px ${cy - halfSide}px`,
                    `${cx + halfSide}px ${cy + halfSide}px`,
                    `${cx - halfSide}px ${cy + halfSide}px`
                ].join(", ");
                return [
                    polygonCollapsed(cx, cy, 4),
                    `polygon(${end})`
                ];
            }
        case "triangle":
            {
                const scale = maxRadius * 2.2;
                const dx = Math.sqrt(3) / 2 * scale;
                const verts = [
                    `${cx}px ${cy - scale}px`,
                    `${cx + dx}px ${cy + 0.5 * scale}px`,
                    `${cx - dx}px ${cy + 0.5 * scale}px`
                ].join(", ");
                return [
                    polygonCollapsed(cx, cy, 3),
                    `polygon(${verts})`
                ];
            }
        case "diamond":
            {
                const R = maxRadius * Math.SQRT2;
                const end = [
                    `${cx}px ${cy - R}px`,
                    `${cx + R}px ${cy}px`,
                    `${cx}px ${cy + R}px`,
                    `${cx - R}px ${cy}px`
                ].join(", ");
                return [
                    polygonCollapsed(cx, cy, 4),
                    `polygon(${end})`
                ];
            }
        case "hexagon":
            {
                const R = maxRadius * Math.SQRT2;
                const verts = [];
                for(let i = 0; i < 6; i++){
                    const a = -Math.PI / 2 + i * Math.PI / 3;
                    verts.push(`${cx + R * Math.cos(a)}px ${cy + R * Math.sin(a)}px`);
                }
                return [
                    polygonCollapsed(cx, cy, 6),
                    `polygon(${verts.join(", ")})`
                ];
            }
        case "rectangle":
            {
                const halfW = Math.max(cx, viewportWidth - cx);
                const halfH = Math.max(cy, viewportHeight - cy);
                const end = [
                    `${cx - halfW}px ${cy - halfH}px`,
                    `${cx + halfW}px ${cy - halfH}px`,
                    `${cx + halfW}px ${cy + halfH}px`,
                    `${cx - halfW}px ${cy + halfH}px`
                ].join(", ");
                return [
                    polygonCollapsed(cx, cy, 4),
                    `polygon(${end})`
                ];
            }
        case "star":
            {
                const R = maxRadius * Math.SQRT2 * 1.03;
                const innerRatio = 0.42;
                const starPolygon = (radius)=>{
                    const verts = [];
                    for(let i = 0; i < 5; i++){
                        const outerA = -Math.PI / 2 + i * 2 * Math.PI / 5;
                        verts.push(`${cx + radius * Math.cos(outerA)}px ${cy + radius * Math.sin(outerA)}px`);
                        const innerA = outerA + Math.PI / 5;
                        verts.push(`${cx + radius * innerRatio * Math.cos(innerA)}px ${cy + radius * innerRatio * Math.sin(innerA)}px`);
                    }
                    return `polygon(${verts.join(", ")})`;
                };
                const startR = Math.max(2, R * 0.025);
                return [
                    starPolygon(startR),
                    starPolygon(R)
                ];
            }
        default:
            return [
                `circle(0px at ${cx}px ${cy}px)`,
                `circle(${maxRadius}px at ${cx}px ${cy}px)`
            ];
    }
}
const AnimatedThemeToggler = ({ className, duration = 400, variant, fromCenter = false, theme, onThemeChange, ...props })=>{
    const shape = variant ?? "circle";
    const isControlled = theme !== undefined;
    const [internalIsDark, setInternalIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isDark = isControlled ? theme === "dark" : internalIsDark;
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isControlled) return;
        const updateTheme = ()=>{
            setInternalIsDark(document.documentElement.classList.contains("dark"));
        };
        updateTheme();
        const observer = new MutationObserver(updateTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: [
                "class"
            ]
        });
        return ()=>observer.disconnect();
    }, [
        isControlled
    ]);
    const toggleTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const button = buttonRef.current;
        if (!button) return;
        const viewportWidth = window.visualViewport?.width ?? window.innerWidth;
        const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
        let x;
        let y;
        if (fromCenter) {
            x = viewportWidth / 2;
            y = viewportHeight / 2;
        } else {
            const { top, left, width, height } = button.getBoundingClientRect();
            x = left + width / 2;
            y = top + height / 2;
        }
        const maxRadius = Math.hypot(Math.max(x, viewportWidth - x), Math.max(y, viewportHeight - y));
        const applyTheme = ()=>{
            const newTheme = !isDark;
            document.documentElement.classList.toggle("dark");
            if (isControlled) {
                onThemeChange?.(newTheme ? "dark" : "light");
            } else {
                setInternalIsDark(newTheme);
                localStorage.setItem("theme", newTheme ? "dark" : "light");
            }
        };
        if (typeof document.startViewTransition !== "function") {
            applyTheme();
            return;
        }
        const clipPath = getThemeTransitionClipPaths(shape, x, y, maxRadius, viewportWidth, viewportHeight);
        const root = document.documentElement;
        root.dataset.magicuiThemeVt = "active";
        root.style.setProperty("--magicui-theme-toggle-vt-duration", `${duration}ms`);
        root.style.setProperty("--magicui-theme-vt-clip-from", clipPath[0]);
        const cleanup = ()=>{
            delete root.dataset.magicuiThemeVt;
            root.style.removeProperty("--magicui-theme-toggle-vt-duration");
            root.style.removeProperty("--magicui-theme-vt-clip-from");
        };
        const transition = document.startViewTransition(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flushSync"])(applyTheme);
        });
        if (typeof transition?.finished?.finally === "function") {
            transition.finished.finally(cleanup);
        } else {
            cleanup();
        }
        const ready = transition?.ready;
        if (ready && typeof ready.then === "function") {
            ready.then(()=>{
                document.documentElement.animate({
                    clipPath
                }, {
                    duration,
                    easing: shape === "star" ? "linear" : "ease-in-out",
                    fill: "forwards",
                    pseudoElement: "::view-transition-new(root)"
                });
            });
        }
    }, [
        shape,
        fromCenter,
        duration,
        isDark,
        isControlled,
        onThemeChange
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        ref: buttonRef,
        onClick: toggleTheme,
        className: className,
        ...props,
        children: [
            isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {}, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ui/animated-theme-toggler.tsx",
                lineNumber: 253,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {}, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ui/animated-theme-toggler.tsx",
                lineNumber: 253,
                columnNumber: 27
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Toggle theme"
            }, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ui/animated-theme-toggler.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ui/animated-theme-toggler.tsx",
        lineNumber: 246,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Downloads/my-portfolio/my-portfolio/app/components/ThemeToggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$ui$2f$animated$2d$theme$2d$toggler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/ui/animated-theme-toggler.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ThemeToggle() {
    const { resolvedTheme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-9 w-9 rounded-full animate-pulse bg-gray-100 dark:bg-gray-800"
        }, void 0, false, {
            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ThemeToggle.tsx",
            lineNumber: 16,
            columnNumber: 16
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$ui$2f$animated$2d$theme$2d$toggler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedThemeToggler"], {
        theme: resolvedTheme === "dark" ? "dark" : "light",
        onThemeChange: (t)=>{
            setTheme(t);
            // Keep a shared ?theme= link honest: toggling updates the param
            const url = new URL(window.location.href);
            if (url.searchParams.has("theme")) {
                url.searchParams.set("theme", t);
                window.history.replaceState(null, "", url);
            }
        },
        className: "rounded-full p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors [&_svg]:h-5 [&_svg]:w-5",
        variant: "circle"
    }, void 0, false, {
        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ThemeToggle.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
}),
"[project]/Downloads/my-portfolio/my-portfolio/app/components/Reveal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function Reveal({ children, delay = 0, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: `w-full ${className}`,
        initial: {
            opacity: 0,
            y: 32,
            scale: 0.985,
            filter: "blur(12px)"
        },
        whileInView: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)"
        },
        viewport: {
            once: true,
            amount: 0.15
        },
        transition: {
            duration: 0.9,
            delay,
            ease: [
                0.22,
                1,
                0.36,
                1
            ],
            // sharpen a touch faster than it travels, so it reads as a focus-pull
            filter: {
                duration: 1.1,
                delay,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            }
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/Reveal.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/my-portfolio/my-portfolio/app/components/icons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DiscordIcon",
    ()=>DiscordIcon,
    "ICONS",
    ()=>ICONS,
    "Icon",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/github.js [app-ssr] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-ssr] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/youtube.js [app-ssr] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/instagram.js [app-ssr] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/react-icons/fa6/index.mjs [app-ssr] (ecmascript)");
;
;
;
const DiscordIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1971.3728.2914a.077.077 0 01-.0066.1277 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"
        }, void 0, false, {
            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/icons.tsx",
            lineNumber: 7,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/icons.tsx",
        lineNumber: 6,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const ICONS = {
    github: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"],
    linkedin: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
    youtube: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"],
    calendar: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
    mail: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
    x: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaXTwitter"],
    medium: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaMedium"],
    discord: DiscordIcon,
    instagram: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"]
};
function Icon({ name, className }) {
    const Cmp = ICONS[name];
    if (!Cmp) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Cmp, {
        className: className
    }, void 0, false, {
        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/icons.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
}),
"[project]/Downloads/my-portfolio/my-portfolio/app/components/RichText.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Inline",
    ()=>Inline,
    "RichText",
    ()=>RichText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
/**
 * Parse a markdown string supporting inline **bold** and [text](url) links
 * into React nodes. Intentionally minimal — just the two constructs used
 * across the portfolio content.
 */ function parseInline(text) {
    const nodes = [];
    const regex = /(\*\*([\s\S]+?)\*\*)|(\[([^\]]+)\]\(([^)]+)\))/g;
    let last = 0;
    let key = 0;
    let match;
    while((match = regex.exec(text)) !== null){
        if (match.index > last) nodes.push(text.slice(last, match.index));
        if (match[2] !== undefined) {
            nodes.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                className: "font-medium text-black dark:text-white",
                children: match[2]
            }, key++, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/RichText.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this));
        } else if (match[4] !== undefined) {
            nodes.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: match[5],
                target: "_blank",
                rel: "noopener noreferrer",
                className: "underline underline-offset-4 hover:text-black dark:hover:text-white transition-colors",
                children: match[4]
            }, key++, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/RichText.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this));
        }
        last = regex.lastIndex;
    }
    if (last < text.length) nodes.push(text.slice(last));
    return nodes;
}
function Inline({ text }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: parseInline(text)
    }, void 0, false);
}
function RichText({ blocks, pClassName, listClassName = "list-disc list-inside space-y-1 pl-2" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: blocks.map((block, i)=>typeof block === "string" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: pClassName,
                children: parseInline(block)
            }, i, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/RichText.tsx",
                lineNumber: 66,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: listClassName,
                children: block.list.map((item, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: parseInline(item)
                    }, j, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/RichText.tsx",
                        lineNumber: 72,
                        columnNumber: 15
                    }, this))
            }, i, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/RichText.tsx",
                lineNumber: 70,
                columnNumber: 11
            }, this))
    }, void 0, false);
}
}),
"[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$RichText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/RichText.tsx [app-ssr] (ecmascript)");
;
;
;
function Hero({ data, time }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mb-2 h-40 w-40 sm:h-56 sm:w-56 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: data.image,
                        alt: "Profile",
                        fill: true,
                        sizes: "(max-width: 640px) 256px, 320px",
                        className: "object-contain grayscale contrast-125",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/Hero.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-black dark:via-black/60 backdrop-blur-[1px]"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/Hero.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/Hero.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mb-4 text-5xl font-bold tracking-tight sm:text-7xl",
                children: data.name
            }, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/Hero.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 flex flex-wrap items-center justify-center gap-2 text-xs text-gray-400 dark:text-gray-500 sm:text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: data.phonetic
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/Hero.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-300 dark:text-gray-700",
                        children: "•"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/Hero.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: data.noun
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/Hero.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-300 dark:text-gray-700",
                        children: "•"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/Hero.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "tabular-nums text-xs sm:text-sm",
                                    children: time || "00:00:00"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/Hero.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] uppercase tracking-wider sm:text-xs",
                                    children: data.timezone.label
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/Hero.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/Hero.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/Hero.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/Hero.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full space-y-4 text-left text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg md:text-xl",
                children: data.intro.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$RichText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Inline"], {
                            text: p
                        }, void 0, false, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/Hero.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this)
                    }, i, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/Hero.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/Hero.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Downloads/my-portfolio/my-portfolio/app/components/SectionShell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionShell",
    ()=>SectionShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function SectionShell({ title, children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `mb-16 w-full text-left ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mb-6 text-sm font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300",
                children: title
            }, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/SectionShell.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/SectionShell.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/my-portfolio/my-portfolio/app/components/Collapsible.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Collapsible",
    ()=>Collapsible
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
"use client";
;
;
;
function Collapsible({ children, collapsedHeight = "max-h-48", gradientHeight = "h-20", className = "" }) {
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative transition-all duration-500 ${!expanded ? `${collapsedHeight} overflow-hidden` : ""} ${className}`,
                children: [
                    children,
                    !expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute bottom-0 left-0 right-0 ${gradientHeight} bg-gradient-to-t from-white dark:from-black to-transparent`
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/Collapsible.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/Collapsible.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setExpanded(!expanded),
                className: "mt-4 flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors",
                children: expanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "View Less ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/Collapsible.tsx",
                            lineNumber: 46,
                            columnNumber: 23
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "View More ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/Collapsible.tsx",
                            lineNumber: 50,
                            columnNumber: 23
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/Collapsible.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Downloads/my-portfolio/my-portfolio/app/components/ExpandableExperienceItem.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExpandableExperienceItem",
    ()=>ExpandableExperienceItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
"use client";
;
;
;
function ExpandableExperienceItem({ title, role, location, children, link, logo }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group cursor-pointer py-5",
        onClick: ()=>setOpen((v)=>!v),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            logo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: logo,
                                    alt: `${title} logo`,
                                    className: "h-full w-full object-cover",
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ExpandableExperienceItem.tsx",
                                    lineNumber: 29,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ExpandableExperienceItem.tsx",
                                lineNumber: 27,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-black dark:text-white",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ExpandableExperienceItem.tsx",
                                lineNumber: 37,
                                columnNumber: 21
                            }, this),
                            link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                onClick: (e)=>e.stopPropagation(),
                                className: "text-xs text-gray-400 dark:text-gray-500 underline underline-offset-2 hover:text-black dark:hover:text-white",
                                children: "link"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ExpandableExperienceItem.tsx",
                                lineNumber: 39,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ExpandableExperienceItem.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: `h-3.5 w-3.5 shrink-0 text-gray-300 dark:text-gray-600 transition-transform duration-300 ${open ? "rotate-180" : ""}`
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ExpandableExperienceItem.tsx",
                        lineNumber: 50,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ExpandableExperienceItem.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1.5 flex items-center justify-between gap-4 pl-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-gray-400 dark:text-gray-500",
                        children: role
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ExpandableExperienceItem.tsx",
                        lineNumber: 57,
                        columnNumber: 17
                    }, this),
                    location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                className: "h-3 w-3"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ExpandableExperienceItem.tsx",
                                lineNumber: 60,
                                columnNumber: 25
                            }, this),
                            location
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ExpandableExperienceItem.tsx",
                        lineNumber: 59,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ExpandableExperienceItem.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mt-3 max-w-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `overflow-hidden text-sm leading-relaxed text-gray-500 dark:text-gray-400 transition-[max-height] duration-300 ease-out ${open ? "max-h-[600px]" : "max-h-[2.8rem]"}`,
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ExpandableExperienceItem.tsx",
                        lineNumber: 68,
                        columnNumber: 17
                    }, this),
                    !open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white dark:from-black to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ExpandableExperienceItem.tsx",
                        lineNumber: 76,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ExpandableExperienceItem.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ExpandableExperienceItem.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
}),
"[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ExperienceSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExperienceSection",
    ()=>ExperienceSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$SectionShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/SectionShell.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$Collapsible$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/Collapsible.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$RichText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/RichText.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$ExpandableExperienceItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/ExpandableExperienceItem.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
function ExperienceSection({ title, data }) {
    const { featured, previousLabel, previous } = data;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$SectionShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionShell"], {
        title: title,
        className: "mt-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 flex flex-wrap items-center gap-x-3 gap-y-1",
                        children: [
                            featured.logo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: featured.logo,
                                    alt: `${featured.name} logo`,
                                    className: "h-full w-full object-cover",
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ExperienceSection.tsx",
                                    lineNumber: 37,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ExperienceSection.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this),
                            featured.link ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: featured.link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-lg font-semibold text-black dark:text-white no-underline hover:underline hover:underline-offset-4 hover:decoration-black dark:hover:decoration-white transition-colors",
                                children: featured.name
                            }, void 0, false, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ExperienceSection.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg font-semibold text-black dark:text-white",
                                children: featured.name
                            }, void 0, false, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ExperienceSection.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-medium text-gray-500 dark:text-gray-500",
                                children: featured.role
                            }, void 0, false, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ExperienceSection.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ExperienceSection.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$Collapsible$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Collapsible"], {
                        collapsedHeight: featured.collapsedHeight ?? "max-h-48",
                        className: "space-y-3 text-base leading-relaxed text-gray-600 dark:text-gray-400",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$RichText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichText"], {
                            blocks: featured.body
                        }, void 0, false, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ExperienceSection.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ExperienceSection.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ExperienceSection.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-600",
                        children: previousLabel
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ExperienceSection.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col rounded-xl border border-gray-200 dark:border-gray-700 px-6 sm:px-8",
                        children: previous.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$ExpandableExperienceItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExpandableExperienceItem"], {
                                title: item.name,
                                role: item.role,
                                location: item.location,
                                link: item.link,
                                logo: item.logo,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$RichText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichText"], {
                                        blocks: item.body
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ExperienceSection.tsx",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ExperienceSection.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this)
                            }, item.name, false, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ExperienceSection.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ExperienceSection.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ExperienceSection.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ExperienceSection.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/TechStackSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TechStackSection",
    ()=>TechStackSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$SectionShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/SectionShell.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
/** Brand-colored icon in light mode, white in dark mode (dark logos are
 *  invisible on a dark background). Both variants come from the same CDN;
 *  the hidden one stays unfetched thanks to lazy loading. */ function TechIcon({ slug, name, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: `https://cdn.simpleicons.org/${slug}`,
                alt: name,
                className: `${className} dark:hidden`,
                loading: "lazy"
            }, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/TechStackSection.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: `https://cdn.simpleicons.org/${slug}/white`,
                alt: name,
                className: `${className} hidden dark:block`,
                loading: "lazy"
            }, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/TechStackSection.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
function TechStackSection({ title, data }) {
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const marqueeSkills = data.categories.flatMap((c)=>c.skills);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$SectionShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionShell"], {
        title: title,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsExpanded(!isExpanded),
                        className: "flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300",
                        children: [
                            isExpanded ? "Show Less" : "View Full Stack",
                            isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/TechStackSection.tsx",
                                lineNumber: 59,
                                columnNumber: 27
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/TechStackSection.tsx",
                                lineNumber: 59,
                                columnNumber: 53
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/TechStackSection.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/TechStackSection.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: !isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -10
                        },
                        transition: {
                            duration: 0.3
                        },
                        className: "w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex w-max animate-infinite-scroll",
                            children: [
                                0,
                                1
                            ].map((dup)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-12 py-4 pr-12",
                                    children: marqueeSkills.map((tech, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center justify-center gap-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-10 w-10 transition-all duration-300",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIcon, {
                                                    slug: tech.slug,
                                                    name: tech.name,
                                                    className: "h-full w-full object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/TechStackSection.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/TechStackSection.tsx",
                                                lineNumber: 78,
                                                columnNumber: 25
                                            }, this)
                                        }, `${dup}-${index}`, false, {
                                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/TechStackSection.tsx",
                                            lineNumber: 77,
                                            columnNumber: 23
                                        }, this))
                                }, dup, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/TechStackSection.tsx",
                                    lineNumber: 75,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/TechStackSection.tsx",
                            lineNumber: 73,
                            columnNumber: 15
                        }, this)
                    }, "marquee", false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/TechStackSection.tsx",
                        lineNumber: 65,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            height: 0
                        },
                        animate: {
                            opacity: 1,
                            height: "auto"
                        },
                        exit: {
                            opacity: 0,
                            height: 0
                        },
                        transition: {
                            duration: 0.4,
                            ease: "circOut"
                        },
                        className: "overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 pt-4",
                            children: data.categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 border-b border-gray-100 dark:border-zinc-800 pb-2",
                                            children: category.name
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/TechStackSection.tsx",
                                            lineNumber: 103,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 gap-2",
                                            children: category.skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "group flex items-center gap-3 rounded-lg border border-transparent p-2 transition-all hover:border-gray-100 dark:hover:border-zinc-800 hover:bg-gray-50/50 dark:hover:bg-zinc-900/50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-5 w-5 shrink-0 transition-all duration-300",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIcon, {
                                                                slug: skill.slug,
                                                                name: skill.name,
                                                                className: "h-full w-full object-contain opacity-70 group-hover:opacity-100 transition-all duration-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/TechStackSection.tsx",
                                                                lineNumber: 113,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/TechStackSection.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors",
                                                            children: skill.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/TechStackSection.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, skill.name, true, {
                                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/TechStackSection.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/TechStackSection.tsx",
                                            lineNumber: 106,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, category.name, true, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/TechStackSection.tsx",
                                    lineNumber: 102,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/TechStackSection.tsx",
                            lineNumber: 100,
                            columnNumber: 15
                        }, this)
                    }, "grid", false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/TechStackSection.tsx",
                        lineNumber: 92,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/TechStackSection.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/TechStackSection.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/TechStackSection.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ExpandableCardSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExpandableCardSection",
    ()=>ExpandableCardSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$SectionShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/SectionShell.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$Collapsible$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/Collapsible.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$RichText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/RichText.tsx [app-ssr] (ecmascript)");
;
;
;
;
function ExpandableCardSection({ title, data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$SectionShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionShell"], {
        title: title,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-lg font-semibold text-black dark:text-white",
                        children: data.heading
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ExpandableCardSection.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ExpandableCardSection.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$Collapsible$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Collapsible"], {
                    collapsedHeight: data.collapsedHeight ?? "max-h-48",
                    className: "space-y-3 text-base leading-relaxed text-gray-600 dark:text-gray-400",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$RichText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichText"], {
                        blocks: data.body
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ExpandableCardSection.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ExpandableCardSection.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ExpandableCardSection.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ExpandableCardSection.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/my-portfolio/my-portfolio/app/components/WaterImage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WaterImage",
    ()=>WaterImage,
    "WaterOverlay",
    ()=>WaterOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
"use client";
;
;
;
// WebGL shader — client-only, no SSR. The plain <img> underneath acts as the
// fallback until the canvas mounts.
const Water = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/Downloads/my-portfolio/my-portfolio/node_modules/@paper-design/shaders-react/dist/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
function WaterOverlay({ colorHighlight = "#94a3b8", highlights = 0.3, onReady }) {
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // The library stamps `data-paper-shader` on its mount element at the exact
    // moment WebGL init completes and frames start rendering — watch for it.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!onReady) return;
        const el = wrapRef.current;
        if (!el) return;
        if (el.querySelector("[data-paper-shader]")) {
            onReady();
            return;
        }
        const observer = new MutationObserver(()=>{
            if (el.querySelector("[data-paper-shader]")) {
                observer.disconnect();
                onReady();
            }
        });
        observer.observe(el, {
            subtree: true,
            attributes: true,
            childList: true
        });
        return ()=>observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapRef,
        "aria-hidden": true,
        className: "pointer-events-none absolute inset-0 -z-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Water, {
            className: "absolute inset-0 [&_canvas]:absolute [&_canvas]:inset-0 [&_canvas]:block [&_canvas]:h-full [&_canvas]:w-full",
            colorBack: "#00000000",
            colorHighlight: colorHighlight,
            highlights: highlights,
            layering: 0.4,
            edges: 0,
            waves: 0.15,
            caustic: 0.15,
            size: 0.4,
            speed: 0.35,
            fit: "cover"
        }, void 0, false, {
            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/WaterImage.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/WaterImage.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
function WaterImage({ src, alt }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: src,
                alt: alt,
                className: "h-full w-full object-cover",
                loading: "lazy"
            }, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/WaterImage.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Water, {
                className: "absolute inset-0 h-full w-full [&_canvas]:absolute [&_canvas]:inset-0 [&_canvas]:block [&_canvas]:h-full [&_canvas]:w-full",
                image: src,
                scale: 1,
                colorBack: "#00000000",
                colorHighlight: "#ffffff",
                highlights: 0.12,
                layering: 0,
                edges: 0,
                waves: 0,
                caustic: 0.07,
                size: 0.7,
                speed: 0.35,
                fit: "cover"
            }, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/WaterImage.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Downloads/my-portfolio/my-portfolio/app/components/CountUp.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CountUp",
    ()=>CountUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function CountUp({ value, duration = 1800 }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-10% 0px"
    });
    const match = value.match(/\d+(\.\d+)?/);
    const target = match ? parseFloat(match[0]) : null;
    const decimals = match?.[1] ? match[1].length - 1 : 0;
    const prefix = match ? value.slice(0, match.index) : "";
    const suffix = match ? value.slice((match.index ?? 0) + match[0].length) : "";
    const [display, setDisplay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>target === null ? value : 0..toFixed(decimals));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!inView || target === null) return;
        let raf = 0;
        const start = performance.now();
        const tick = (now)=>{
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(2, -10 * t); // expo-out: rapid start, gentle landing
            setDisplay((t >= 1 ? target : target * eased).toFixed(decimals));
            if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return ()=>cancelAnimationFrame(raf);
    }, [
        inView,
        target,
        decimals,
        duration
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        children: target === null ? value : `${prefix}${display}${suffix}`
    }, void 0, false, {
        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/CountUp.tsx",
        lineNumber: 37,
        columnNumber: 10
    }, this);
}
}),
"[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ProjectSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectSection",
    ()=>ProjectSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$SectionShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/SectionShell.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$RichText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/RichText.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$WaterImage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/WaterImage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$CountUp$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/CountUp.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
function ProjectSection({ title, data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$SectionShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionShell"], {
        title: title,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 flex items-start justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-x-3 gap-y-1",
                            children: [
                                data.link ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: data.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-lg font-semibold text-black dark:text-white underline underline-offset-4 decoration-gray-300 dark:decoration-gray-700 hover:decoration-black dark:hover:decoration-white transition-colors",
                                    children: data.name
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ProjectSection.tsx",
                                    lineNumber: 32,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg font-semibold text-black dark:text-white",
                                    children: data.name
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ProjectSection.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this),
                                data.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-medium text-gray-500 dark:text-gray-500",
                                    children: data.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ProjectSection.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ProjectSection.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        data.image && // eslint-disable-next-line @next/next/no-img-element
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: data.image,
                            alt: data.name,
                            className: "h-12 w-auto shrink-0 rounded-lg object-contain",
                            loading: "lazy"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ProjectSection.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ProjectSection.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row sm:items-start gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0 space-y-3 text-base leading-relaxed text-gray-600 dark:text-gray-400",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$RichText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichText"], {
                                blocks: data.body
                            }, void 0, false, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ProjectSection.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ProjectSection.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        data.cardImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "shrink-0 self-start sm:self-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative -rotate-2 hover:rotate-0 transition-transform duration-300 ease-out",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 rounded-2xl bg-gray-200 dark:bg-gray-700 translate-x-1.5 translate-y-1.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ProjectSection.tsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative rounded-2xl overflow-hidden w-40 sm:w-44 border border-gray-200 dark:border-gray-700 shadow-md",
                                        style: {
                                            aspectRatio: "4/5"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$WaterImage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WaterImage"], {
                                                src: data.cardImage,
                                                alt: "Illustration"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ProjectSection.tsx",
                                                lineNumber: 69,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-black/0 dark:bg-black/10 pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ProjectSection.tsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ProjectSection.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ProjectSection.tsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ProjectSection.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ProjectSection.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                data.stats && data.stats.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4",
                    children: data.stats.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl font-bold tabular-nums text-black dark:text-white sm:text-3xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$CountUp$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CountUp"], {
                                        value: stat.value
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ProjectSection.tsx",
                                        lineNumber: 82,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ProjectSection.tsx",
                                    lineNumber: 81,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-gray-400 dark:text-gray-500",
                                    children: stat.label
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ProjectSection.tsx",
                                    lineNumber: 84,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, stat.label, true, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ProjectSection.tsx",
                            lineNumber: 80,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ProjectSection.tsx",
                    lineNumber: 78,
                    columnNumber: 11
                }, this),
                data.footerLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: data.footerLink.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "mt-8 inline-flex items-center gap-1 text-xs font-medium text-black dark:text-white underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",
                    children: [
                        data.footerLink.label,
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            className: "h-3 w-3"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ProjectSection.tsx",
                            lineNumber: 97,
                            columnNumber: 37
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ProjectSection.tsx",
                    lineNumber: 91,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ProjectSection.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ProjectSection.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/YouTubeSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "YouTubeSection",
    ()=>YouTubeSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/youtube.js [app-ssr] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$SectionShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/SectionShell.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/icons.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
function getYouTubeId(url) {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : null;
}
function YouTubeSection({ title, data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$SectionShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionShell"], {
        title: title,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-4",
                    children: [
                        data.logo && // eslint-disable-next-line @next/next/no-img-element
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: data.logo,
                            alt: "YouTube",
                            className: "h-8 w-auto shrink-0 object-contain",
                            loading: "lazy"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/YouTubeSection.tsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1.5 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: data.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "inline-flex items-center gap-2 text-base font-semibold text-black dark:text-white hover:underline underline-offset-4 transition-colors",
                                    children: [
                                        data.name,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                            className: "h-3.5 w-3.5 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/YouTubeSection.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/YouTubeSection.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-gray-500 dark:text-gray-500",
                                    children: data.tagline
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/YouTubeSection.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: data.community.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "inline-flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiscordIcon"], {
                                            className: "h-3.5 w-3.5 text-[#5865F2]"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/YouTubeSection.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-black dark:text-white",
                                                    children: data.community.count
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/YouTubeSection.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                data.community.text
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/YouTubeSection.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/YouTubeSection.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/YouTubeSection.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/YouTubeSection.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2",
                    children: [
                        data.videos.map((video)=>{
                            const videoId = getYouTubeId(video.url);
                            const thumbnail = videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: video.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-zinc-900",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative aspect-video overflow-hidden",
                                        children: [
                                            thumbnail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: thumbnail,
                                                alt: video.title,
                                                fill: true,
                                                sizes: "(max-width: 640px) 50vw, 33vw",
                                                className: "object-cover transition-transform duration-300 group-hover:scale-105"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/YouTubeSection.tsx",
                                                lineNumber: 84,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"], {
                                                className: "absolute left-2.5 top-2.5 h-4 w-4 text-white drop-shadow"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/YouTubeSection.tsx",
                                                lineNumber: 94,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/YouTubeSection.tsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex-1 px-2.5 pb-2.5 pt-1 text-xs font-medium leading-snug text-gray-700 line-clamp-2 group-hover:text-black dark:text-gray-300 dark:group-hover:text-white",
                                        children: video.title
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/YouTubeSection.tsx",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, video.url, true, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/YouTubeSection.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this);
                        }),
                        data.footerLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: data.footerLink.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "group flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 p-3 text-center transition-colors hover:border-gray-300 hover:bg-white dark:border-gray-700 dark:bg-zinc-900 dark:hover:border-gray-600 dark:hover:bg-zinc-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-1 ring-gray-200 transition-transform group-hover:scale-105 dark:ring-gray-700",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: data.image,
                                        alt: data.name,
                                        fill: true,
                                        sizes: "48px",
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/YouTubeSection.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/YouTubeSection.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-1 text-xs font-semibold text-gray-700 group-hover:text-black dark:text-gray-300 dark:group-hover:text-white",
                                    children: [
                                        "Visit Channel",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                            className: "h-3.5 w-3.5 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-gray-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/YouTubeSection.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/YouTubeSection.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/YouTubeSection.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/YouTubeSection.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/YouTubeSection.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/YouTubeSection.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/my-portfolio/my-portfolio/app/components/ExperienceItem.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExperienceItem",
    ()=>ExperienceItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
"use client";
;
;
;
function ExperienceItem({ title, role, children, collapsible = false, link, collapsedHeight = "max-h-20", logo }) {
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 flex flex-col justify-between sm:flex-row sm:items-baseline",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            logo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: logo,
                                    alt: `${title} logo`,
                                    className: "h-full w-full object-cover",
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ExperienceItem.tsx",
                                    lineNumber: 26,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ExperienceItem.tsx",
                                lineNumber: 24,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-black dark:text-white",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ExperienceItem.tsx",
                                lineNumber: 29,
                                columnNumber: 21
                            }, this),
                            link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-xs text-gray-400 dark:text-gray-500 underline underline-offset-2 hover:text-black dark:hover:text-white",
                                children: "link"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ExperienceItem.tsx",
                                lineNumber: 31,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ExperienceItem.tsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-gray-400 dark:text-gray-500",
                        children: role
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ExperienceItem.tsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ExperienceItem.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative max-w-xl text-sm leading-relaxed text-gray-500 dark:text-gray-400 transition-all duration-300 ${!isExpanded && collapsible ? `${collapsedHeight} overflow-hidden` : ""}`,
                children: [
                    children,
                    collapsible && !isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-black to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ExperienceItem.tsx",
                        lineNumber: 47,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ExperienceItem.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            collapsible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsExpanded(!isExpanded),
                className: "mt-2 flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white",
                children: isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "View Less ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ExperienceItem.tsx",
                            lineNumber: 58,
                            columnNumber: 39
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "View More ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ExperienceItem.tsx",
                            lineNumber: 62,
                            columnNumber: 39
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ExperienceItem.tsx",
                lineNumber: 52,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/ExperienceItem.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
}),
"[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/EducationSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EducationSection",
    ()=>EducationSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$SectionShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/SectionShell.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$RichText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/RichText.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$ExperienceItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/ExperienceItem.tsx [app-ssr] (ecmascript)");
;
;
;
;
function EducationSection({ title, data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$SectionShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionShell"], {
        title: title,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-12",
            children: data.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$ExperienceItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExperienceItem"], {
                    title: item.title,
                    role: item.role,
                    link: item.link,
                    logo: item.logo,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$RichText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichText"], {
                        blocks: item.body
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/EducationSection.tsx",
                        lineNumber: 24,
                        columnNumber: 13
                    }, this)
                }, item.title, false, {
                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/EducationSection.tsx",
                    lineNumber: 23,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/EducationSection.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/EducationSection.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/my-portfolio/my-portfolio/app/components/GithubGraph.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GithubGraph",
    ()=>GithubGraph
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$react$2d$github$2d$calendar$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/react-github-calendar/build/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function GithubGraph({ username }) {
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full overflow-x-auto pb-4 scrollbar-hide",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-w-max justify-center text-xs px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$react$2d$github$2d$calendar$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GitHubCalendar"], {
                username: username,
                colorScheme: theme === "dark" ? "dark" : "light",
                blockSize: 10,
                blockMargin: 4,
                fontSize: 12
            }, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/GithubGraph.tsx",
                lineNumber: 20,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/GithubGraph.tsx",
            lineNumber: 19,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/GithubGraph.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
}),
"[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/GithubSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GithubSection",
    ()=>GithubSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$SectionShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/SectionShell.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$GithubGraph$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/GithubGraph.tsx [app-ssr] (ecmascript)");
;
;
;
function GithubSection({ title, data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$SectionShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionShell"], {
        title: title,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$GithubGraph$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GithubGraph"], {
            username: data.username
        }, void 0, false, {
            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/GithubSection.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/GithubSection.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/PublicationsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PublicationsSection",
    ()=>PublicationsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$SectionShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/SectionShell.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$Collapsible$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/Collapsible.tsx [app-ssr] (ecmascript)");
;
;
;
;
function PublicationsSection({ title, data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$SectionShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionShell"], {
        title: title,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: data.items.map((pub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-1 flex items-start justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: pub.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-lg font-semibold text-black dark:text-white underline underline-offset-4 decoration-gray-300 dark:decoration-gray-700 hover:decoration-black dark:hover:decoration-white transition-colors",
                                    children: pub.title
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/PublicationsSection.tsx",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, this),
                                pub.logo && // eslint-disable-next-line @next/next/no-img-element
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: pub.logo,
                                    alt: "publication venue logo",
                                    className: "h-8 w-auto shrink-0 rounded-md object-contain",
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/PublicationsSection.tsx",
                                    lineNumber: 37,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/PublicationsSection.tsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-medium text-gray-500 dark:text-gray-500",
                            children: pub.venue
                        }, void 0, false, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/PublicationsSection.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-sm text-gray-600 dark:text-gray-400",
                            children: [
                                "Authors: ",
                                pub.authors
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/PublicationsSection.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$Collapsible$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Collapsible"], {
                            collapsedHeight: pub.collapsedHeight ?? "max-h-32",
                            gradientHeight: "h-16",
                            className: "mt-6 space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 font-bold",
                                    children: "Abstract"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/PublicationsSection.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base leading-relaxed text-gray-600 dark:text-gray-400",
                                    children: pub.abstract
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/PublicationsSection.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/PublicationsSection.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: pub.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "mt-4 inline-flex items-center gap-1 text-xs font-medium text-black dark:text-white underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",
                            children: [
                                pub.linkLabel ?? "View Publication",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/PublicationsSection.tsx",
                                    lineNumber: 63,
                                    columnNumber: 53
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/PublicationsSection.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this)
                    ]
                }, pub.title, true, {
                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/PublicationsSection.tsx",
                    lineNumber: 25,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/PublicationsSection.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/PublicationsSection.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/RecommendationsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RecommendationsSection",
    ()=>RecommendationsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$SectionShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/SectionShell.tsx [app-ssr] (ecmascript)");
;
;
function RecommendationsSection({ title, data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$SectionShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionShell"], {
        title: title,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-8 rounded-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8",
            children: data.items.map((rec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3",
                            children: [
                                rec.link ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: rec.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-base font-semibold text-black dark:text-white underline underline-offset-4 decoration-gray-300 dark:decoration-gray-700 hover:decoration-black dark:hover:decoration-white transition-colors",
                                    children: rec.name
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/RecommendationsSection.tsx",
                                    lineNumber: 23,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-base font-semibold text-black dark:text-white",
                                    children: rec.name
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/RecommendationsSection.tsx",
                                    lineNumber: 32,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-2 text-xs font-medium text-gray-500 dark:text-gray-500",
                                    children: rec.role
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/RecommendationsSection.tsx",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/RecommendationsSection.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400",
                            children: rec.quote.map((para, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: para
                                }, i, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/RecommendationsSection.tsx",
                                    lineNumber: 38,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/RecommendationsSection.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this)
                    ]
                }, rec.name, true, {
                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/RecommendationsSection.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/RecommendationsSection.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/RecommendationsSection.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ContactSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactSection",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$SectionShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/SectionShell.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/icons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$WaterImage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/WaterImage.tsx [app-ssr] (ecmascript)");
;
;
;
;
function ContactSection({ title, data, socials }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$SectionShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionShell"], {
        title: title,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-black dark:text-white",
                                children: data.heading
                            }, void 0, false, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ContactSection.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-base leading-relaxed text-gray-600 dark:text-gray-400",
                                children: data.subheading
                            }, void 0, false, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ContactSection.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex flex-col gap-3 sm:flex-row",
                                children: data.ctas.map((cta)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: cta.href,
                                        ...cta.href.startsWith("http") ? {
                                            target: "_blank",
                                            rel: "noopener noreferrer"
                                        } : {},
                                        className: cta.primary ? "inline-flex items-center justify-center gap-2 rounded-lg bg-black dark:bg-white px-5 py-3 text-sm font-semibold text-white dark:text-black transition-opacity hover:opacity-90" : "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 px-5 py-3 text-sm font-semibold text-black dark:text-white transition-colors hover:bg-gray-50 dark:hover:bg-zinc-900",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: cta.icon,
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ContactSection.tsx",
                                                lineNumber: 53,
                                                columnNumber: 19
                                            }, this),
                                            cta.label
                                        ]
                                    }, cta.label, true, {
                                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ContactSection.tsx",
                                        lineNumber: 43,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ContactSection.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-600",
                                        children: data.socialsLabel
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ContactSection.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-2",
                                        children: socials.map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: social.href,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                "aria-label": social.label,
                                                className: "flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 transition-colors hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: social.icon,
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ContactSection.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 21
                                                }, this)
                                            }, social.label, false, {
                                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ContactSection.tsx",
                                                lineNumber: 66,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ContactSection.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ContactSection.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ContactSection.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    data.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shrink-0 self-start sm:self-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative rotate-2 hover:rotate-0 transition-transform duration-300 ease-out",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 rounded-2xl bg-gray-200 dark:bg-gray-700 translate-x-1.5 translate-y-1.5"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ContactSection.tsx",
                                    lineNumber: 86,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative rounded-2xl overflow-hidden w-40 sm:w-44 aspect-square border border-gray-200 dark:border-gray-700 shadow-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$WaterImage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WaterImage"], {
                                            src: data.image,
                                            alt: "Illustration"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ContactSection.tsx",
                                            lineNumber: 88,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-black/0 dark:bg-black/10 pointer-events-none"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ContactSection.tsx",
                                            lineNumber: 90,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ContactSection.tsx",
                                    lineNumber: 87,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ContactSection.tsx",
                            lineNumber: 84,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ContactSection.tsx",
                        lineNumber: 83,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ContactSection.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ContactSection.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ContactSection.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/my-portfolio/my-portfolio/app/data/portfolio.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"meta":{"siteUrl":"https://heyvibhor.com/","calendarUrl":"","email":"tyagivibhor111@gmail.com","_note_siteUrl":"Your domain. Also set in app/sitemap.ts and app/robots.ts (hardcoded there).","_note_calendarUrl":"To enable the calendar: paste your link into calendarUrl above, then move the object in contact.data._disabled_ctas into contact.data.ctas."},"socials":[{"label":"GitHub","href":"https://github.com/tyagivibhor111-hub","icon":"github"},{"label":"LinkedIn","href":"https://www.linkedin.com/in/vibhor-tyagi-5b2954416/","icon":"linkedin"},{"label":"Email","href":"mailto:tyagivibhor111@gmail.com","icon":"mail"}],"_disabled_socials":[{"label":"X","href":"PASTE_YOUR_X_LINK_HERE","icon":"x","_how":"To enable: replace href, then move this object into the top-level socials array."}],"posts":[],"sections":[{"type":"hero","data":{"image":"/me.png","name":"Vibhor Tyagi","phonetic":"/ˈvɪbɔːr ˈtjɑːɡi/","noun":"noun","timezone":{"label":"IST","tz":"Asia/Kolkata"},"intro":["an AI/ML engineer in the making, currently an apprentice at Global Infoventures building **computer vision** systems on NVIDIA DGX A100 hardware, where an automated alert pipeline cut incident response time by roughly 50%.","a third-year CS student at ABES Institute of Technology who likes to ship end to end: PyTorch models, Flask and FastAPI backends, React and Next.js frontends, and LLM agents with LangChain and LangGraph. 400+ DSA problems solved, 1700+ rating."]}},{"type":"experience","title":"Experience","data":{"featured":{"name":"Global Infoventures Pvt. Ltd.","role":"AI/ML Apprenticeship Trainee, Ghaziabad (On-site)","dateRange":"Aug 2026 - Present","collapsedHeight":"max-h-48","body":["Building a computer vision safety monitoring system that flags compliance issues from real-world data.",{"list":["Trained, tested, and validated machine learning and deep learning models on **NVIDIA DGX A100** infrastructure.","Integrated **Flask** APIs with the ML system to automate alerts and streamline the workflow.","Reduced incident response time by approximately **50%** with the streamlined alert workflow."]},"**Stack:** Python, PyTorch, TensorFlow, CNNs, Object Detection, Flask, Docker, NVIDIA DGX A100"]},"previousLabel":"Previously","previous":[{"name":"1M1B in partnership with Microsoft","role":"Green Skills & Applied AI Intern","location":"Remote (Noida)","body":["Jul 2026 - Oct 2026",{"list":["Built AI-driven sustainability prototypes that supported better environmental decision-making.","Improved climate data analysis efficiency by **19%** with AI-assisted workflows, cutting processing time and surfacing key patterns faster.","Researched 10+ green technology approaches and proposed AI-based strategies for climate action, sustainability planning, and resource optimization."]},"**Stack:** Python, Scikit-learn, Matplotlib, TensorFlow, OpenAI/LLMs"]},{"name":"Brandvio","role":"Frontend Developer Intern","location":"Hybrid (Noida)","body":["Jun 2026 - Jul 2026",{"list":["Built secure authentication workflows with **JWT**, **OAuth**, and role-based access control (RBAC).","Wrote reusable, maintainable component-based code following SOLID principles, improving development efficiency by **60%**.","Evaluated and integrated modern frontend technologies to improve performance, scalability, and user experience."]},"**Stack:** HTML, CSS, JavaScript, React, Tailwind CSS, Express"]}]}},{"type":"techStack","title":"Tech Stack","data":{"categories":[{"name":"Languages","skills":[{"name":"C","slug":"c"},{"name":"C++","slug":"cplusplus"},{"name":"Java","slug":"openjdk"},{"name":"Python","slug":"python"},{"name":"JavaScript","slug":"javascript"},{"name":"TypeScript","slug":"typescript"}]},{"name":"AI & ML","skills":[{"name":"PyTorch","slug":"pytorch"},{"name":"TensorFlow","slug":"tensorflow"},{"name":"Scikit-learn","slug":"scikitlearn"},{"name":"OpenCV","slug":"opencv"},{"name":"Pandas","slug":"pandas"},{"name":"NumPy","slug":"numpy"},{"name":"LangChain","slug":"langchain"},{"name":"LangGraph","slug":"langgraph"}]},{"name":"Frameworks","skills":[{"name":"React","slug":"react"},{"name":"Next.js","slug":"nextdotjs"},{"name":"Express","slug":"express"},{"name":"Flask","slug":"flask"},{"name":"FastAPI","slug":"fastapi"}]},{"name":"Databases","skills":[{"name":"MySQL","slug":"mysql"},{"name":"MongoDB","slug":"mongodb"},{"name":"PostgreSQL","slug":"postgresql"}]},{"name":"DevOps & Tools","skills":[{"name":"Git","slug":"git"},{"name":"Docker","slug":"docker"},{"name":"Kubernetes","slug":"kubernetes"},{"name":"Jenkins","slug":"jenkins"},{"name":"Linux","slug":"linux"}]}]}},{"type":"project","title":"Featured Project","data":{"name":"ExamSuraksha","link":"https://github.com/tyagivibhor111-hub/ExamSuraksha","subtitle":"multi-agent AI proctoring and tutoring platform","body":["A multi-agent proctoring system that combines **OpenCV**, audio analysis, and LLMs to detect exam anomalies and raise severity-based alerts.",{"list":["AI tutoring engine built on Gemini and OpenAI that analyzes exam performance and generates personalized **4-week study plans**.","Streamlit and SQLite analytics platform with real-time monitoring, email alerts, student risk profiling, and incident reporting."]},"**Stack:** Python, OpenCV, Streamlit, Gemini, REST APIs, Pandas, NumPy, Flask"],"footerLink":{"label":"View on GitHub","url":"https://github.com/tyagivibhor111-hub/ExamSuraksha"}}},{"type":"project","title":"Full-Stack AI","data":{"name":"AI Course Generator","subtitle":"personalized courses generated with Gemini AI","body":["An AI-powered platform that builds personalized course structures with chapter-specific content and YouTube video recommendations.",{"list":["Authentication, course management, image storage, and a responsive UI built with Shadcn UI."]},"**Stack:** Next.js, PostgreSQL, Drizzle ORM, Firebase, Gemini AI, Shadcn UI"]}},{"type":"expandableCard","title":"Achievements & Certifications","data":{"heading":"Problem solving, certifications, and community","collapsedHeight":"max-h-48","body":[{"list":["Solved **400+ DSA problems** across LeetCode and Codeforces, with a **1700+ rating** and an 80+ day coding streak.","**Agentic AI Certified**, Oracle University (Jul 2026). [View certificate](https://go.fliplink.me/view/2DE7FF14-B984-484D-AED7-3E890A5C83EB)","**Elements of AI** (2 ECTS), University of Helsinki & MinnaLearn (Jun 2026). [View certificate](https://certificates.mooc.fi/validate/7wj3b4ypze3)","Completed the **AICTE IBM SkillsBuild** Data Analytics with AI Internship Program 2026.","Part of a **Guinness World Record** through the \"AI for ALL\" initiative (MPIT Centre of Excellence, TCS Foundation, TCS iON).","Campus Ambassador at Career360."]}]}},{"type":"education","title":"Education","data":{"items":[{"title":"ABES Institute of Technology, Ghaziabad","role":"B.Tech, Computer Science & Engineering","body":["2024 - 2028 | CGPA: 8","Guided junior students in programming fundamentals and coding practice."]}]}},{"type":"github","title":"GitHub Contributions","data":{"username":"tyagivibhor111-hub"}},{"type":"contact","title":"Get in Touch","data":{"heading":"Let's build something together","subheading":"open to AI/ML and software engineering roles, internships, and collaborations. email me or find me on LinkedIn.","ctas":[{"label":"Email me","href":"mailto:tyagivibhor111@gmail.com","icon":"mail","primary":true}],"_disabled_ctas":[{"label":"Schedule a meeting","href":"PASTE_YOUR_CALENDAR_LINK_HERE","icon":"calendar","primary":true,"_how":"To enable: replace href, also set meta.calendarUrl, then move this object into ctas (set Email's primary to false)."}],"socialsLabel":"Find me on"}}]});}),
"[project]/Downloads/my-portfolio/my-portfolio/app/data/posts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPost",
    ()=>getPost,
    "getSortedPosts",
    ()=>getSortedPosts,
    "posts",
    ()=>posts
]);
/**
 * Every blog post / essay on the site, as pure content.
 *
 * ADDING A POST = append one object to the `posts` array in `portfolio.json`.
 * No component, route, or middleware edits are needed — the dynamic `/[slug]`
 * route, the markdown endpoint, reading time, and the "Ask ChatGPT" prompt are
 * all derived from this data (see `postHelpers.ts`). This file only provides
 * the types and lookup helpers.
 *
 * A post's `blocks` use the same idea as the portfolio's rich text:
 *   { type: "p",    text: "A paragraph with **bold** and [links](https://...)." }
 *   { type: "h2",   text: "A section heading" }
 *   { type: "list", items: ["First bullet", "Second **bold** bullet"] }
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$data$2f$portfolio$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/data/portfolio.json (json)");
;
const posts = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$data$2f$portfolio$2e$json__$28$json$29$__["default"].posts;
function getPost(slug) {
    return posts.find((p)=>p.slug === slug);
}
function getSortedPosts() {
    return [
        ...posts
    ].sort((a, b)=>a.date < b.date ? 1 : -1);
}
}),
"[project]/Downloads/my-portfolio/my-portfolio/app/data/postHelpers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chatGptUrl",
    ()=>chatGptUrl,
    "postMarkdownUrl",
    ()=>postMarkdownUrl,
    "postToMarkdown",
    ()=>postToMarkdown,
    "postUrl",
    ()=>postUrl,
    "readingTime",
    ()=>readingTime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$data$2f$portfolio$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/data/portfolio.json (json)");
;
/**
 * Everything derived from a post's content lives here, so `posts.ts` stays pure
 * content and the page/route/markdown views can never drift from each other.
 */ const SITE = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$data$2f$portfolio$2e$json__$28$json$29$__["default"].meta.siteUrl.replace(/\/$/, "");
function postUrl(post) {
    return `${SITE}/${post.slug}`;
}
function postMarkdownUrl(post) {
    return `${postUrl(post)}?format=markdown`;
}
function postToMarkdown(post) {
    return [
        `# ${post.title}`,
        ...post.blocks.map((block)=>{
            if (block.type === "h2") return `### ${block.text}`;
            if (block.type === "list") return block.items.map((i)=>`* ${i}`).join("\n");
            return block.text;
        })
    ].join("\n\n");
}
function readingTime(post) {
    const words = postToMarkdown(post).split(/\s+/).length;
    return `${Math.max(1, Math.round(words / 200))} min read`;
}
function chatGptUrl(post) {
    const prompt = `Fetch and read this: ${postMarkdownUrl(post)} - it's "${post.title}" by Vibhor Tyagi, served as plain markdown.

Start your first reply with a short summary in a few bullet points. Then ask me follow-up questions to help me apply it to my own situation, and answer anything else I ask about it. Keep it practical and specific.`;
    return `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`;
}
}),
"[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ThoughtsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThoughtsSection",
    ()=>ThoughtsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$SectionShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/SectionShell.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$RichText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/RichText.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$data$2f$posts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/data/posts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$data$2f$postHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/data/postHelpers.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
/** The preview text for a card: the post's first paragraph. */ function previewText(post) {
    const firstParagraph = post.blocks.find((b)=>b.type === "p");
    return firstParagraph && firstParagraph.type === "p" ? firstParagraph.text : post.description;
}
function ThoughtsSection({ title, data }) {
    const count = data.count ?? 3;
    const posts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$data$2f$posts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSortedPosts"])();
    const previews = posts.slice(0, count);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$SectionShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionShell"], {
        title: title,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 sm:grid-cols-3",
                children: previews.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/${post.slug}`,
                        className: "group relative block overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 p-4 transition-all hover:-translate-y-0.5 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-1.5 flex items-center gap-2 text-[10px] font-medium text-gray-400 dark:text-gray-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "uppercase tracking-widest",
                                        children: post.kicker
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ThoughtsSection.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-700"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ThoughtsSection.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$data$2f$postHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readingTime"])(post)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ThoughtsSection.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ThoughtsSection.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-1.5 flex items-start justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold leading-snug text-black dark:text-white",
                                        children: post.title
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ThoughtsSection.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                        className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black dark:group-hover:text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ThoughtsSection.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ThoughtsSection.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative max-h-12 overflow-hidden text-xs leading-relaxed text-gray-600 dark:text-gray-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$RichText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Inline"], {
                                        text: previewText(post)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ThoughtsSection.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent dark:from-black"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ThoughtsSection.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ThoughtsSection.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this)
                        ]
                    }, post.slug, true, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ThoughtsSection.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ThoughtsSection.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: data.viewAllHref ?? "/thoughts",
                className: "mt-4 inline-flex items-center gap-1 text-xs font-medium text-black dark:text-white underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",
                children: [
                    data.viewAllLabel ?? "View more",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                        className: "h-3 w-3"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ThoughtsSection.tsx",
                        lineNumber: 71,
                        columnNumber: 44
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ThoughtsSection.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ThoughtsSection.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/PodcastSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PodcastSection",
    ()=>PodcastSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/youtube.js [app-ssr] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$SectionShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/SectionShell.tsx [app-ssr] (ecmascript)");
;
;
;
;
function getYouTubeId(url) {
    const match = url.match(/(?:[?&]v=|youtu\.be\/)([^?&/]+)/);
    return match ? match[1] : null;
}
function PodcastSection({ title, data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$SectionShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionShell"], {
        title: title,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: data.episodes.map((episode)=>{
                const videoId = getYouTubeId(episode.url);
                const thumbnail = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: episode.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "group flex flex-col sm:flex-row overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-zinc-900",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative aspect-video w-full sm:w-64 shrink-0 overflow-hidden",
                            children: [
                                thumbnail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: thumbnail,
                                    alt: episode.title,
                                    fill: true,
                                    sizes: "(max-width: 640px) 100vw, 256px",
                                    className: "object-cover transition-transform duration-300 group-hover:scale-105"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/PodcastSection.tsx",
                                    lineNumber: 41,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"], {
                                    className: "absolute left-2.5 top-2.5 h-4 w-4 text-white drop-shadow"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/PodcastSection.tsx",
                                    lineNumber: 49,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/PodcastSection.tsx",
                            lineNumber: 39,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col justify-center gap-1.5 p-4 sm:p-5 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-semibold leading-snug text-black dark:text-white",
                                    children: episode.title
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/PodcastSection.tsx",
                                    lineNumber: 54,
                                    columnNumber: 17
                                }, this),
                                episode.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs leading-relaxed text-gray-500 dark:text-gray-500",
                                    children: episode.description
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/PodcastSection.tsx",
                                    lineNumber: 58,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mt-1 inline-flex items-center gap-1 text-xs font-medium text-gray-500 group-hover:text-black dark:text-gray-500 dark:group-hover:text-white transition-colors",
                                    children: [
                                        "Watch on YouTube",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                            className: "h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/PodcastSection.tsx",
                                            lineNumber: 64,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/PodcastSection.tsx",
                                    lineNumber: 62,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/PodcastSection.tsx",
                            lineNumber: 53,
                            columnNumber: 15
                        }, this)
                    ]
                }, episode.url, true, {
                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/PodcastSection.tsx",
                    lineNumber: 31,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/PodcastSection.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/PodcastSection.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/registry.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionRenderer",
    ()=>SectionRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$sections$2f$Hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/Hero.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$sections$2f$ExperienceSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ExperienceSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$sections$2f$TechStackSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/TechStackSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$sections$2f$ExpandableCardSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ExpandableCardSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$sections$2f$ProjectSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ProjectSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$sections$2f$YouTubeSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/YouTubeSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$sections$2f$EducationSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/EducationSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$sections$2f$GithubSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/GithubSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$sections$2f$PublicationsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/PublicationsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$sections$2f$RecommendationsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/RecommendationsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$sections$2f$ContactSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ContactSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$sections$2f$ThoughtsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/ThoughtsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$sections$2f$PodcastSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/PodcastSection.tsx [app-ssr] (ecmascript)");
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
;
;
;
function SectionRenderer({ section, ctx }) {
    switch(section.type){
        case "hero":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$sections$2f$Hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hero"], {
                data: section.data,
                time: ctx.time
            }, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/registry.tsx",
                lineNumber: 55,
                columnNumber: 14
            }, this);
        case "experience":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$sections$2f$ExperienceSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExperienceSection"], {
                title: section.title,
                data: section.data
            }, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/registry.tsx",
                lineNumber: 57,
                columnNumber: 14
            }, this);
        case "techStack":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$sections$2f$TechStackSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TechStackSection"], {
                title: section.title,
                data: section.data
            }, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/registry.tsx",
                lineNumber: 59,
                columnNumber: 14
            }, this);
        case "expandableCard":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$sections$2f$ExpandableCardSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExpandableCardSection"], {
                title: section.title,
                data: section.data
            }, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/registry.tsx",
                lineNumber: 61,
                columnNumber: 14
            }, this);
        case "project":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$sections$2f$ProjectSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjectSection"], {
                title: section.title,
                data: section.data
            }, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/registry.tsx",
                lineNumber: 63,
                columnNumber: 14
            }, this);
        case "youtube":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$sections$2f$YouTubeSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YouTubeSection"], {
                title: section.title,
                data: section.data
            }, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/registry.tsx",
                lineNumber: 65,
                columnNumber: 14
            }, this);
        case "education":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$sections$2f$EducationSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EducationSection"], {
                title: section.title,
                data: section.data
            }, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/registry.tsx",
                lineNumber: 67,
                columnNumber: 14
            }, this);
        case "github":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$sections$2f$GithubSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GithubSection"], {
                title: section.title,
                data: section.data
            }, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/registry.tsx",
                lineNumber: 69,
                columnNumber: 14
            }, this);
        case "publications":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$sections$2f$PublicationsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicationsSection"], {
                title: section.title,
                data: section.data
            }, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/registry.tsx",
                lineNumber: 71,
                columnNumber: 14
            }, this);
        case "recommendations":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$sections$2f$RecommendationsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RecommendationsSection"], {
                title: section.title,
                data: section.data
            }, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/registry.tsx",
                lineNumber: 73,
                columnNumber: 14
            }, this);
        case "contact":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$sections$2f$ContactSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContactSection"], {
                title: section.title,
                data: section.data,
                socials: ctx.socials
            }, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/registry.tsx",
                lineNumber: 75,
                columnNumber: 14
            }, this);
        case "thoughts":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$sections$2f$ThoughtsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThoughtsSection"], {
                title: section.title,
                data: section.data
            }, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/registry.tsx",
                lineNumber: 77,
                columnNumber: 14
            }, this);
        case "podcast":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$sections$2f$PodcastSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PodcastSection"], {
                title: section.title,
                data: section.data
            }, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/registry.tsx",
                lineNumber: 79,
                columnNumber: 14
            }, this);
    }
}
}),
"[project]/Downloads/my-portfolio/my-portfolio/app/data/generateMarkdown.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateMarkdown",
    ()=>generateMarkdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$data$2f$posts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/data/posts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$data$2f$postHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/data/postHelpers.ts [app-ssr] (ecmascript)");
;
;
/** Find the first section of a given type, narrowed to its variant. */ function find(sections, type) {
    return sections.find((s)=>s.type === type);
}
/** Render Block[] to markdown: strings as paragraphs, `{list}` as bullet lists. */ function blocks(content) {
    return content.map((b)=>typeof b === "string" ? b : b.list.map((li)=>`- ${li}`).join("\n")).join("\n\n");
}
function generateMarkdown(data, time) {
    const { sections, socials, meta } = data;
    const parts = [];
    // Title + About
    const hero = find(sections, "hero");
    if (hero) {
        const { name, phonetic, noun, timezone, intro } = hero.data;
        parts.push(`# ${name}\n${phonetic} • ${noun} • ${time || "00:00:00"} ${timezone.label}`);
        parts.push(`## About\n\n${intro.join("\n\n")}`);
    }
    // Featured page (small pill on the visual site)
    if (meta.featured) {
        const url = new URL(meta.featured.href, meta.siteUrl).toString();
        parts.push(`**${meta.featured.tag}:** [${meta.featured.title}](${url})`);
    }
    // Experience
    const experience = find(sections, "experience");
    if (experience) {
        const { featured, previous } = experience.data;
        const entry = (e)=>{
            const meta = e.dateRange ? `*${e.dateRange}*` : e.link ? `[${e.link}](${e.link})` : "";
            return `### ${e.name}\n**${e.role}**${meta ? `\n${meta}` : ""}\n\n${blocks(e.body)}`;
        };
        parts.push(`## ${experience.title}\n\n${[
            featured,
            ...previous
        ].map(entry).join("\n\n")}`);
    }
    // In Between These Experiences (and any other narrative card)
    const card = find(sections, "expandableCard");
    if (card) {
        parts.push(`## ${card.title}\n\n### ${card.data.heading}\n\n${blocks(card.data.body)}`);
    }
    // Coolest Experiment (project)
    const project = find(sections, "project");
    if (project) {
        const p = project.data;
        const lines = [
            `## ${project.title}`,
            "",
            `### ${p.name}`
        ];
        if (p.subtitle) lines.push(`**${p.subtitle}**`);
        if (p.link) lines.push(`[${p.link}](${p.link})`);
        lines.push("", blocks(p.body));
        if (p.stats?.length) lines.push("", p.stats.map((s)=>`- ${s.value} ${s.label}`).join("\n"));
        if (p.footerLink) lines.push("", `${p.footerLink.label}: [${p.footerLink.url}](${p.footerLink.url})`);
        parts.push(lines.join("\n"));
    }
    // Podcast
    const podcast = find(sections, "podcast");
    if (podcast) {
        const items = podcast.data.episodes.map((e)=>`- [${e.title}](${e.url})${e.description ? ` — ${e.description}` : ""}`).join("\n");
        parts.push(`## ${podcast.title}\n\n${items}`);
    }
    // Education
    const education = find(sections, "education");
    if (education) {
        const items = education.data.items.map((e)=>`### ${e.title}\n**${e.role}**\n${blocks(e.body)}`).join("\n\n");
        parts.push(`## ${education.title}\n\n${items}`);
    }
    // Research Publications
    const publications = find(sections, "publications");
    if (publications) {
        const items = publications.data.items.map((p)=>`### ${p.title}\n**${p.venue}**\nAuthors: ${p.authors}\n[${p.link}](${p.link})\n\n**Abstract:**\n${p.abstract}`).join("\n\n");
        parts.push(`## ${publications.title}\n\n${items}`);
    }
    // Tech stack
    const tech = find(sections, "techStack");
    if (tech) {
        const skills = tech.data.categories.flatMap((c)=>c.skills.map((s)=>s.name)).join(", ");
        parts.push(`## ${tech.title}\n\n${skills}`);
    }
    // Recommendations
    const recommendations = find(sections, "recommendations");
    if (recommendations) {
        const items = recommendations.data.items.map((r)=>`### ${r.link ? `[${r.name}](${r.link})` : r.name}\n${r.quote.join("\n\n")}`).join("\n\n");
        parts.push(`## ${recommendations.title}\n\n${items}`);
    }
    // YouTube
    const youtube = find(sections, "youtube");
    if (youtube) {
        const y = youtube.data;
        const handle = y.url.split("/@")[1] ?? "";
        const videos = y.videos.map((v)=>`- [${v.title}](${v.url})`).join("\n");
        const lines = [
            `## YouTuber @${handle}`,
            "",
            `I run [${y.name}](${y.url}) — ${y.tagline}. ${y.community.count} ${y.community.text}: ${y.community.url}`,
            "",
            "Selected videos:",
            videos
        ];
        if (y.footerLink) lines.push("", `${y.footerLink.label}: ${y.footerLink.url}`);
        parts.push(lines.join("\n"));
    }
    // Thoughts (essays / notes, pulled from posts.ts)
    const thoughts = find(sections, "thoughts");
    if (thoughts) {
        const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$data$2f$posts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSortedPosts"])().map((p)=>`- [${p.title}](${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$data$2f$postHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postUrl"])(p)}) — ${p.description}`).join("\n");
        parts.push(`## ${thoughts.title}\n\n${items}`);
    }
    // Get in Touch
    const contact = find(sections, "contact");
    if (contact) {
        const linkedin = socials.find((s)=>s.icon === "linkedin");
        const linkedinMd = linkedin ? `[LinkedIn](${linkedin.href})` : "LinkedIn";
        parts.push(`## ${contact.title}\n\nConnect with me on ${linkedinMd} or shoot an [email](mailto:${meta.email})`);
    }
    // Links footer
    const links = [
        ...socials.map((s)=>`- ${s.label}: [${s.href}](${s.href})`),
        `- Calendar: [${meta.calendarUrl}](${meta.calendarUrl})`
    ].join("\n");
    parts.push(`---\n\n**Links:**\n${links}`);
    return parts.join("\n\n") + "\n";
}
}),
"[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/qrcode.react/lib/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/qr-code.js [app-ssr] (ecmascript) <export default as QrCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/bot.js [app-ssr] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-ssr] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/ThemeToggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/Reveal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/icons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$sections$2f$registry$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/sections/registry.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$WaterImage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/components/WaterImage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$data$2f$generateMarkdown$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/data/generateMarkdown.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$data$2f$portfolio$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Downloads/my-portfolio/my-portfolio/app/data/portfolio.json (json)");
"use client";
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
;
;
;
const portfolio = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$data$2f$portfolio$2e$json__$28$json$29$__["default"];
function Home() {
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showQR, setShowQR] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("human");
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    // Hold the navbar entrance until its water shader is rendering, so it never
    // pops in half-drawn. The timeout is a fallback for browsers without WebGL.
    const [navReady, setNavReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fallback = setTimeout(()=>setNavReady(true), 1600);
        return ()=>clearTimeout(fallback);
    }, []);
    const copyMarkdown = async ()=>{
        await navigator.clipboard.writeText(markdownContent);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    // Single clock, shared by the hero display and the agent-mode markdown.
    const tz = portfolio.sections.find((s)=>s.type === "hero")?.data.timezone.tz ?? "Asia/Kolkata";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateTime = ()=>{
            setTime(new Date().toLocaleTimeString("en-IN", {
                timeZone: tz,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false
            }));
        };
        updateTime();
        const timer = setInterval(updateTime, 1000);
        return ()=>clearInterval(timer);
    }, [
        tz
    ]);
    const markdownContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$data$2f$generateMarkdown$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateMarkdown"])(portfolio, time), [
        time
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex min-h-screen flex-col items-center bg-white dark:bg-black px-3 pt-16 text-black dark:text-white selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black pb-32 sm:px-4 sm:pt-24 sm:pb-40 overflow-x-hidden transition-colors duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-6 right-6 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/docs",
                title: "This portfolio is open source. Build your own with JSON using your AI editor. Read the docs.",
                className: "group fixed bottom-24 right-4 z-40 inline-flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/80 px-2.5 py-2 text-xs font-medium text-gray-500 shadow-sm backdrop-blur-md transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white sm:bottom-6 sm:right-6 sm:px-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden sm:inline",
                        children: "Open source"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                        className: "h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: mode === "agent" ? /* Agent Mode - Markdown View */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].main, {
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -10
                    },
                    transition: {
                        duration: 0.35,
                        ease: "easeOut"
                    },
                    className: "flex w-full max-w-2xl flex-col items-start text-left px-4 sm:px-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: copyMarkdown,
                            className: "mb-6 inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:opacity-80 active:scale-95 dark:bg-white dark:text-black",
                            children: [
                                copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 25
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 57
                                }, this),
                                copied ? "Copied!" : "Copy Markdown"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                            lineNumber: 91,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "w-full whitespace-pre-wrap font-sans text-sm leading-relaxed text-black dark:text-gray-300 selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black antialiased",
                            children: markdownContent
                        }, void 0, false, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this)
                    ]
                }, "agent", true, {
                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                    lineNumber: 83,
                    columnNumber: 11
                }, this) : /* Human Mode - Data-driven sections */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].main, {
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -10
                    },
                    transition: {
                        duration: 0.35,
                        ease: "easeOut"
                    },
                    className: "flex w-full max-w-2xl flex-col items-center text-center",
                    children: [
                        portfolio.meta.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: 0,
                            className: "mb-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: portfolio.meta.featured.href,
                                className: "group inline-flex max-w-full items-center gap-2 rounded-full border border-gray-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/80 py-1.5 pl-1.5 pr-3 shadow-sm backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/90 dark:hover:bg-zinc-900",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-black dark:bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white dark:text-black",
                                        children: portfolio.meta.featured.tag
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors group-hover:text-black dark:group-hover:text-white",
                                        children: portfolio.meta.featured.title
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                        className: "h-3.5 w-3.5 shrink-0 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black dark:group-hover:text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                                lineNumber: 115,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                            lineNumber: 114,
                            columnNumber: 15
                        }, this),
                        portfolio.sections.map((section, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                                delay: section.type === "hero" ? 0 : 0.05,
                                className: section.type === "hero" ? "flex flex-col items-center" : "",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$sections$2f$registry$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionRenderer"], {
                                    section: section,
                                    ctx: {
                                        time,
                                        socials: portfolio.socials
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 17
                                }, this)
                            }, i, false, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                                lineNumber: 131,
                                columnNumber: 15
                            }, this))
                    ]
                }, "human", true, {
                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                    lineNumber: 104,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].nav, {
                initial: {
                    opacity: 0,
                    y: 60,
                    scale: 0.8,
                    x: "-50%"
                },
                animate: navReady ? {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    x: "-50%"
                } : {
                    opacity: 0,
                    y: 60,
                    scale: 0.8,
                    x: "-50%"
                },
                transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 15
                },
                className: "fixed bottom-6 left-1/2 flex items-center gap-3 overflow-hidden rounded-full border border-gray-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/80 px-4 py-3 shadow-sm backdrop-blur-md transition-colors hover:bg-white/90 dark:hover:bg-zinc-900 sm:gap-6 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": true,
                        className: "nav-edge-shine pointer-events-none absolute inset-0 -z-10 rounded-full"
                    }, resolvedTheme, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$WaterImage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WaterOverlay"], {
                        colorHighlight: resolvedTheme === "dark" ? "#475569" : "#2563eb",
                        highlights: resolvedTheme === "dark" ? 0.22 : 0.45,
                        onReady: ()=>setNavReady(true)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMode(mode === "human" ? "agent" : "human"),
                            className: "group relative flex h-7 w-12 cursor-pointer rounded-full bg-gray-200 dark:bg-zinc-700 p-1 transition-colors duration-200 ease-in-out hover:bg-gray-300 dark:hover:bg-zinc-600 focus:outline-none",
                            role: "switch",
                            "aria-checked": mode === "agent",
                            title: `Switch to ${mode === "human" ? "agent" : "human"} mode`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex h-5 w-5 transform items-center justify-center rounded-full bg-white dark:bg-white shadow-sm transition duration-200 ease-in-out ${mode === "agent" ? "translate-x-5" : "translate-x-0"}`,
                                children: mode === "human" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                    className: "h-3 w-3 text-black"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                                    lineNumber: 178,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                    className: "h-3 w-3 text-black"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                                    lineNumber: 180,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowQR(true),
                        className: "text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110",
                        "aria-label": "Show QR Code",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__["QrCode"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-6 w-px bg-gray-200 dark:bg-zinc-700"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    portfolio.socials.map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: social.href,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "aria-label": social.label,
                            className: "text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                name: social.icon,
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                                lineNumber: 202,
                                columnNumber: 13
                            }, this)
                        }, social.label, false, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: portfolio.meta.calendarUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "Calendar",
                        className: "text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$app$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "calendar",
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            showQR && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[60] flex items-center justify-center bg-black/20 dark:bg-white/5 backdrop-blur-sm",
                onClick: ()=>setShowQR(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-black p-8 shadow-2xl",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowQR(false),
                            className: "absolute -right-3 -top-3 rounded-full bg-black dark:bg-white p-2 text-white dark:text-black transition-transform hover:scale-110",
                            "aria-label": "Close",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                                lineNumber: 231,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                            lineNumber: 226,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg bg-white p-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$my$2d$portfolio$2f$my$2d$portfolio$2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QRCodeSVG"], {
                                value: `${portfolio.meta.siteUrl}?theme=${resolvedTheme === "dark" ? "dark" : "light"}`,
                                size: 200,
                                level: "H",
                                includeMargin: false
                            }, void 0, false, {
                                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                                lineNumber: 235,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                            lineNumber: 233,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                    lineNumber: 222,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
                lineNumber: 218,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/my-portfolio/my-portfolio/app/page.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Downloads_my-portfolio_my-portfolio_app_23ca8804._.js.map