"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Starfield from "./ui/Starfield";

export default function LoadingScreen() {
    const [loading, setLoading] = useState(false);
    const pathname = usePathname();
    const duration = 3.5; // seconds

    useEffect(() => {
        if (!pathname) return;
        setLoading(true);

        const timer = setTimeout(() => setLoading(false), duration * 1700);
        return () => clearTimeout(timer);
    }, [pathname]);

    const start_tl = { top: 0, left: 0 };
    const end_tl = { top: 50, left: 50 };
    const start_tr = { top: 0, right: 0 };
    const end_tr = { top: 50, right: 50 };
    const start_br = { bottom: 0, right: 0 };
    const end_br = { bottom: 50, right: 50 };
    const start_bl = { bottom: 0, left: 0 };
    const end_bl = { bottom: 50, left: 50 };

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                    className="fixed inset-0 bg-[#200039]  z-50"
                >
                    <motion.div
                        className="absolute w-32 h-32 rounded-full bg-yellow-500"
                        style={{
                            transform: "translate(-50%, -50%)",
                            top: `${start_tl.top}%`,
                            left: `${start_tl.left}%`,
                        }}
                        animate={{
                            top: [`${start_tl.top}%`, `${end_tl.top}%`],
                            left: [`${start_tl.left}%`, `${end_tl.left}%`],
                        }}
                        transition={{
                            top: { duration: duration, ease: "easeOut" },
                            left: { duration: duration * 0.6, ease: "easeOut" },
                        }}
                    />
                    <motion.div
                        className="absolute w-32 h-32 rounded-full bg-red-500"
                        style={{
                            transform: "translate(50%, -50%)",
                            top: `${start_tr.top}%`,
                            right: `${start_tr.right}%`,
                        }}
                        animate={{
                            top: [`${start_tr.top}%`, `${end_tr.top}%`],
                            right: [`${start_tr.right}%`, `${end_tr.right}%`],
                        }}
                        transition={{
                            top: { duration: duration, ease: "easeInOut", delay: duration * 0.2 },
                            right: { duration: duration * 0.6, ease: "easeInOut", delay: duration * 0.2 },
                        }}
                    />
                    <motion.div
                        className="absolute w-32 h-32 rounded-full bg-green-500"
                        style={{
                            transform: "translate(-50%, 50%)",
                            bottom: `${start_bl.bottom}%`,
                            left: `${start_bl.left}%`,
                        }}
                        animate={{
                            bottom: [`${start_bl.bottom}%`, `${end_bl.bottom}%`],
                            left: [`${start_bl.left}%`, `${end_bl.left}%`],
                        }}
                        transition={{
                            bottom: { duration: duration, ease: "easeInOut", delay: duration * 0.4 },
                            left: { duration: duration * 0.6, ease: "easeInOut", delay: duration * 0.4 },
                        }}
                    />
                    <motion.div
                        className="absolute w-32 h-32 rounded-full bg-blue-500"
                        style={{
                            translateX: "50%",
                            translateY: "50%",
                            bottom: `${start_br.bottom}%`,
                            right: `${start_br.right}%`,
                            transformOrigin: "center",
                        }}
                        animate={{
                            bottom: [`${start_br.bottom}%`, `${end_br.bottom}%`],
                            right: [`${start_br.right}%`, `${end_br.right}%`],
                            scale: [1, 12],
                            backgroundColor: ["#3b82f6", "#FFFFFF"],
                        }}
                        transition={{
                            bottom: { duration, ease: "easeInOut", delay: duration * 0.6 },
                            right: { duration: duration * 0.6, ease: "easeInOut", delay: duration * 0.6 },
                            scale: { duration: 1, ease: "easeInOut", delay: 4.7 }, // ✅ keep < loader lifetime
                            backgroundColor: { duration: 1, ease: "easeInOut", delay: 4.7 }, // ✅ keep < loader lifetime
                        }}
                        // Optional: let this circle decide when loader hides
                        onAnimationComplete={() => {/* setLoading(false) here if you remove the timer */ }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
