// components/ui/GradientBg.tsx
"use client";
import React from "react";

const GradientBg = ({ className }: { className?: string }) => {
    return (
        <div
            className={`fixed inset-0 pointer-events-none w-full h-full ${className ?? ""}`}
            aria-hidden="true"
        >
            {/* Top-left */}
            <div className="absolute -top-20 -left-20 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] z-10">
                <div className="w-full h-full rounded-full bg-fuchsia-500 blur-[40px]" />
            </div>

            {/* Top-right */}
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] z-10">
                <div className="w-full h-full rounded-full bg-yellow-400 blur-[40px]" />
            </div>

            {/* Bottom-right */}
            <div className="absolute -bottom-20 -right-20 w-[320px] h-[320px] lg:w-[540px] lg:h-[540px] z-10">
                <div className="w-full h-full rounded-full bg-teal-500 blur-[40px]" />
            </div>

            {/* Bottom-left */}
            <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] z-10">
                <div className="w-full h-full rounded-full bg-red-500 blur-[40px]" />
            </div>

            {/* Center-left (shifted further away) */}
            <div className="absolute top-1/2 left-[160px] w-[350px] h-[350px] lg:w-[600px] lg:h-[600px] z-10 -translate-y-1/2">
                <div className="w-full h-full rounded-full bg-blue-500 blur-[40px]" />
            </div>

            {/* Bottom-center (pulled down to avoid overlaps) */}
            <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 w-[320px] h-[320px] lg:w-[540px] lg:h-[540px] z-10">
                <div className="w-full h-full rounded-full bg-violet-600 blur-[40px]" />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/30 via-transparent to-pink-900/50 z-0" />
        </div>
    );
};

export default GradientBg;
