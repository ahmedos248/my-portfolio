import React from "react";

interface GradientBgProps {
    className?: string;
}

const GradientBg = ({ className }: GradientBgProps) => {
    return (
        <div className={`pointer-events-none absolute inset-0 overflow-hidden blur-[60px] sm:blur-[70px] md:blur-[80px] lg:blur-[80px] ${className}`}>
            {/* Fuchsia */}
            <div className="absolute -top-20 -left-20 w-[700px] h-[700px] rounded-full bg-fuchsia-500 mix-blend-screen blob-scale" />

            {/* Yellow */}
            <div className="absolute top-10 right-0 w-[800px] h-[800px] rounded-full bg-yellow-400 mix-blend-screen blob-scale" />

            {/* Teal */}
            <div className="absolute bottom-10 right-0 w-[800px] h-[800px] rounded-full bg-teal-500 mix-blend-screen blob-scale" />

            {/* Red */}
            <div className="absolute bottom-[5%] left-[5%] w-[700px] h-[700px] rounded-full bg-red-500 mix-blend-screen blob-scale" />

            {/* Blue */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[10%] w-[900px] h-[900px] rounded-full bg-blue-500 mix-blend-screen blob-scale" />

            {/* Purple */}
            <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-purple-600/30 mix-blend-screen blob-scale" />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/30 via-transparent to-pink-900/50" />
        </div>
    );
};

export default GradientBg;
