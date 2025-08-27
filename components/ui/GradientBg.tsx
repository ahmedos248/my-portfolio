import React from "react";

const GradientBg = () => {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden blur-[60px] sm:blur-[70px] md:blur-[80px] lg:blur-[80px]">
            {/* Fuchsia */}
            <div className="absolute -top-20 -left-20 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] rounded-full bg-fuchsia-500 mix-blend-screen" />
            {/* Yellow */}
            <div className="absolute top-10 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[650px] md:h-[650px] lg:w-[800px] lg:h-[800px] rounded-full bg-yellow-400 mix-blend-screen" />
            {/* Teal */}
            <div className="absolute bottom-10 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[650px] md:h-[650px] lg:w-[800px] lg:h-[800px] rounded-full bg-teal-500 mix-blend-screen" />
            {/* Red */}
            <div
                className="absolute bottom-[5%] left-[5%] rounded-full bg-red-500 mix-blend-screen"
                style={{
                    width: "clamp(400px, 30vw, 700px)",  // min, preferred, max
                    height: "clamp(400px, 30vw, 700px)",
                }}
            />
            <div
                className="fixed top-1/2 left-0 -translate-y-1/2 -translate-x-[10%] rounded-full bg-blue-500 mix-blend-screen"
                style={{
                    width: "900px",       // initial size prevents CLS
                    height: "900px",
                    maxWidth: "40vw",     // scales down for smaller screens
                    maxHeight: "40vw",
                }}
            />
            {/* Purple */}
            <div className="absolute bottom-[-100px] sm:bottom-[-150px] lg:bottom-[-200px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[650px] md:h-[650px] lg:w-[800px] lg:h-[800px] rounded-full bg-purple-600/30 mix-blend-screen" />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/30 via-transparent to-pink-900/50" />
        </div>
    );
};

export default GradientBg;
