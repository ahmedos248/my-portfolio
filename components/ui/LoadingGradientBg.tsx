'use client'
import React from "react";

interface LoadingGradientBgProps {
    className?: string;
}

const LoadingGradientBg = ({ className }: LoadingGradientBgProps) => {
    return (
        <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
            {/* Violet & Pink Nebulae */}
            <div className="absolute top-[10%] left-[5%] w-[120px] sm:w-[160px] md:w-[220px] h-[120px] sm:h-[160px] md:h-[220px] rounded-full bg-[#8C00FF]/90 mix-blend-screen blur-[35px]" />
            <div className="absolute top-[25%] left-[30%] w-[90px] sm:w-[130px] md:w-[180px] h-[90px] sm:h-[130px] md:h-[180px] rounded-full bg-[#FF4CFF]/80 mix-blend-screen blur-[30px]" />
            <div className="absolute bottom-[20%] left-[25%] w-[100px] sm:w-[150px] md:w-[200px] h-[100px] sm:h-[150px] md:h-[200px] rounded-full bg-[#7A00FF]/85 mix-blend-screen blur-[35px]" />
            <div className="absolute top-[70%] right-[20%] w-[90px] sm:w-[140px] md:w-[180px] h-[90px] sm:h-[140px] md:h-[180px] rounded-full bg-[#4B0072]/80 mix-blend-screen blur-[30px]" />

            {/* Golden / Yellow Stars */}
            <div className="absolute top-[15%] right-[15%] w-[60px] sm:w-[100px] md:w-[140px] h-[60px] sm:h-[100px] md:h-[140px] rounded-full bg-yellow-300/90 mix-blend-screen blur-[25px]" />
            <div className="absolute bottom-[35%] right-[25%] w-[50px] sm:w-[90px] md:w-[120px] h-[50px] sm:h-[90px] md:h-[120px] rounded-full bg-yellow-400/85 mix-blend-screen blur-[20px]" />
            <div className="absolute top-[60%] left-[70%] w-[70px] sm:w-[120px] md:w-[160px] h-[70px] sm:h-[120px] md:h-[160px] rounded-full bg-yellow-500/80 mix-blend-screen blur-[25px]" />
            <div className="absolute top-[40%] right-[50%] w-[40px] sm:w-[70px] md:w-[100px] h-[40px] sm:h-[70px] md:h-[100px] rounded-full bg-orange-400/80 mix-blend-screen blur-[20px]" />

            {/* Teal & Aqua Clouds */}
            <div className="absolute bottom-[15%] right-[10%] w-[70px] sm:w-[120px] md:w-[160px] h-[70px] sm:h-[120px] md:h-[160px] rounded-full bg-teal-400/90 mix-blend-screen blur-[25px]" />
            <div className="absolute top-[25%] right-[40%] w-[50px] sm:w-[100px] md:w-[140px] h-[50px] sm:h-[100px] md:h-[140px] rounded-full bg-teal-500/85 mix-blend-screen blur-[20px]" />
            <div className="absolute bottom-[50%] left-[60%] w-[60px] sm:w-[110px] md:w-[150px] h-[60px] sm:h-[110px] md:h-[150px] rounded-full bg-cyan-500/80 mix-blend-screen blur-[20px]" />
            <div className="absolute top-[50%] left-[60%] w-[45px] sm:w-[90px] md:w-[120px] h-[45px] sm:h-[90px] md:h-[120px] rounded-full bg-cyan-400/85 mix-blend-screen blur-[20px]" />

            {/* Crimson & Magenta Glows */}
            <div className="absolute bottom-[20%] left-[15%] w-[70px] sm:w-[120px] md:w-[160px] h-[70px] sm:h-[120px] md:h-[160px] rounded-full bg-red-500/90 mix-blend-screen blur-[25px]" />
            <div className="absolute top-[50%] left-[10%] w-[50px] sm:w-[90px] md:w-[130px] h-[50px] sm:h-[90px] md:h-[130px] rounded-full bg-red-600/85 mix-blend-screen blur-[20px]" />
            <div className="absolute bottom-[10%] right-[40%] w-[80px] sm:w-[130px] md:w-[180px] h-[80px] sm:h-[130px] md:h-[180px] rounded-full bg-pink-600/80 mix-blend-screen blur-[30px]" />
            <div className="absolute top-[30%] left-[50%] w-[50px] sm:w-[100px] md:w-[140px] h-[50px] sm:h-[100px] md:h-[140px] rounded-full bg-pink-500/85 mix-blend-screen blur-[25px]" />

            {/* Deep Blues & Indigo */}
            <div className="absolute top-[40%] left-[50%] w-[80px] sm:w-[150px] md:w-[200px] h-[80px] sm:h-[150px] md:h-[200px] rounded-full bg-blue-500/90 mix-blend-screen blur-[30px]" />
            <div className="absolute bottom-[30%] left-[40%] w-[60px] sm:w-[120px] md:w-[160px] h-[60px] sm:h-[120px] md:h-[160px] rounded-full bg-indigo-600/85 mix-blend-screen blur-[25px]" />
            <div className="absolute top-[70%] right-[50%] w-[50px] sm:w-[110px] md:w-[150px] h-[50px] sm:h-[110px] md:h-[150px] rounded-full bg-[#0B3FFF]/85 mix-blend-screen blur-[25px]" />
            <div className="absolute bottom-[60%] right-[20%] w-[40px] sm:w-[90px] md:w-[120px] h-[40px] sm:h-[90px] md:h-[120px] rounded-full bg-indigo-400/80 mix-blend-screen blur-[20px]" />

            {/* Subtle Overlay for space feel */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-[#12001F]/30" />
        </div>
    );
};

export default LoadingGradientBg;
