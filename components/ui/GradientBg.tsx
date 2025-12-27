// components/ui/GradientBg.tsx
"use client";
import React from "react";

const GradientBg = ({ className }: { className?: string }) => {
    return (
        <div
            className={`fixed inset-0 pointer-events-none w-full h-full ${className ?? ""}`}
            aria-hidden="true"
        >
            <img src="/images/pink.png" className="absolute -top-10 -left-10 w-[180px] h-[180px] z-10 scale-[400%]" />
            <img src="/images/yellow.png" className="absolute -top-10 -right-10 w-[180px] h-[180px] z-10 scale-[400%]" />
            <img src="/images/green.png" className="absolute -bottom-10 -right-10 w-[200px] h-[200px] z-10 scale-[400%]" />
            <img src="/images/rose.png" className="absolute -bottom-10 -left-10 w-[180px] h-[180px] z-10 scale-[400%]" />
            <img src="/images/blue.png" className="absolute top-1/2 left-[50px] sm:left-[120px] md:left-[160px] w-[200px] h-[200px] z-10 -translate-y-1/2 scale-[400%]" />
            <img src="/images/purple.png" className="absolute bottom-[150px] sm:bottom-[30px] md:bottom-[40px] left-1/2 -translate-x-1/2 w-[200px] h-[200px] z-10 scale-[400%]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/30 via-transparent to-pink-900/50 z-0" />
        </div>
    );
};

export default GradientBg;
