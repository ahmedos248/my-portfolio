"use client";
import React, { use, useEffect, useState } from "react";

const Texture = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize(); // initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <svg style={{ display: "none" }}>
            <filter
                id="glass-distortion"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                filterUnits="objectBoundingBox"
            >
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency={isMobile ? "0.005 0.005" : "0.01 0.01"}
                    numOctaves={isMobile ? 1 : 2}
                    seed={isMobile ? 14 : 90}
                    result="turbulence"
                />
                {!isMobile && (
                    <feComponentTransfer in="turbulence" result="mapped">
                        <feFuncR type="gamma" amplitude={1} exponent={8} offset="0.5" />
                        <feFuncG type="gamma" amplitude={1} exponent={8} offset="0.5" />
                        <feFuncB type="gamma" amplitude={1} exponent={8} offset="0.5" />
                    </feComponentTransfer>
                )}
                <feGaussianBlur
                    in="turbulence"
                    stdDeviation={isMobile ? 0.5 : 2}
                    result="softMap"
                />
                {!isMobile && (
                    <feSpecularLighting
                        in="softMap"
                        surfaceScale={4}
                        specularConstant={0.8}
                        specularExponent={60}
                        lightingColor="white"
                        result="specLight"
                    >
                        <fePointLight x={-200} y={-200} z={300} />
                    </feSpecularLighting>
                )}
                {!isMobile && (
                    <feComposite
                        in="specLight"
                        operator="arithmetic"
                        k1={0}
                        k2={1}
                        k3={1}
                        k4={0}
                        result="litImage"
                    />
                )}
                <feDisplacementMap
                    in="SourceGraphic"
                    in2="softMap"
                    scale={isMobile ? 90 : 120}
                    xChannelSelector="R"
                    yChannelSelector="G"
                />
            </filter>
        </svg>
    );
};

export default Texture;
