import React, { useMemo } from "react";

export default function Starfield() {
    // generate stars once
    const stars = useMemo(() => {
        return Array.from({ length: 150 }).map((_, i) => ({
            id: i,
            top: Math.random() * 100,
            left: Math.random() * 100,
            duration: 30 + Math.random() * 40,
            delay: -(Math.random() * 60),
            size: Math.random() * 2 + 1,
        }));
    }, []);

    return (
        <div className="absolute inset-0 bg-black/50 overflow-hidden">
            {stars.map((s) => (
                <div
                    key={s.id}
                    className="star"
                    style={{
                        top: `${s.top}%`,
                        left: `${s.left}%`,
                        width: `${s.size}px`,
                        height: `${s.size}px`,
                        animationDuration: `${s.duration}s`,
                        animationDelay: `${s.delay}s`,
                    }}
                />
            ))}
        </div>
    );
}
