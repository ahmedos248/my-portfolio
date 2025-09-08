import React from "react"

const Texture = () => {
    return (
        <svg style={{ display: "none" }}>
            {/* Desktop filter */}
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
                    baseFrequency="0.01 0.01"
                    numOctaves={2}
                    seed={90}
                    result="turbulence"
                />
                <feComponentTransfer in="turbulence" result="mapped">
                    <feFuncR type="gamma" amplitude={1} exponent={8} offset="0.5" />
                    <feFuncG type="gamma" amplitude={1} exponent={8} offset="0.5" />
                    <feFuncB type="gamma" amplitude={1} exponent={8} offset="0.5" />
                </feComponentTransfer>
                <feGaussianBlur in="turbulence" stdDeviation={2} result="softMap" />
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
                <feComposite
                    in="specLight"
                    operator="arithmetic"
                    k1={0}
                    k2={1}
                    k3={1}
                    k4={0}
                    result="litImage"
                />
                <feDisplacementMap
                    in="SourceGraphic"
                    in2="softMap"
                    scale={120} // lower than 300 for better perf
                    xChannelSelector="R"
                    yChannelSelector="G"
                />
            </filter>

            {/* Mobile-friendly filter */}
            <filter
                id="glass-distortion-mobile"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                filterUnits="objectBoundingBox"
            >
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.02 0.02"
                    numOctaves={1}
                    seed={14}
                    result="turbulence"
                />
                <feGaussianBlur in="turbulence" stdDeviation={1} result="softMap" />
                <feDisplacementMap
                    in="SourceGraphic"
                    in2="softMap"
                    scale={50} // very light effect
                    xChannelSelector="R"
                    yChannelSelector="G"
                />
            </filter>
        </svg>
    )
}

export default Texture
