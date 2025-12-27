import React from "react";

export default function StarfieldS() {
    const stars = Array.from({ length: 200 }).map(() => ({
        cx: Math.random() * 100,
        cy: Math.random() * 100,
        r: Math.random() * 2 + 0.5,
        dur: Math.random() * 5 + 3,
        begin: Math.random() * 5,
        color: Math.random() < 0.8 ? "white" : "lightblue",
    }));

    return (
        <svg
            className="fixed inset-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            <defs>
                <radialGradient id="starWhite" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="white" stopOpacity="1" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="starBlue" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="lightblue" stopOpacity="1" />
                    <stop offset="100%" stopColor="lightblue" stopOpacity="0" />
                </radialGradient>
            </defs>

            {stars.map((s, i) => (
                <circle
                    key={i}
                    cx={`${s.cx}%`}
                    cy={`${s.cy}%`}
                    r={s.r}
                    fill={`url(#${s.color === "white" ? "starWhite" : "starBlue"})`}
                >
                    <animate
                        attributeName="opacity"
                        values="0;1;0"
                        dur={`${s.dur}s`}
                        repeatCount="indefinite"
                        begin={`${s.begin}s`}
                    />
                </circle>
            ))}
        </svg>
    );
}
