import React from "react";
import Glass from "./ui/Glass";

const LiquidGlowButton = () => {
    return (
        <>
            <button className="z-50 btnui relative overflow-hidden flex flex-col items-center justify-center liquidGlass-wrapper rounded-full">
                <span className="circle1 z-10" />
                <span className="circle2 z-10" />
                <span className="circle3 z-10" />
                <span className="circle4 z-10" />
                <span className="circle5 z-10" />
                <span className="text z-10">Let's Connect</span>
                <Glass className="rounded-full" />
            </button>
        </>
    );
};

export default LiquidGlowButton;




