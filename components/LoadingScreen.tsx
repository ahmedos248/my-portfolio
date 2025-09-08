"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Glass from "./ui/Glass"
import Typewriter from "typewriter-effect"
import LoadingGradientBg from "./ui/LoadingGradientBg"

export default function LoadingScreen() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 5800) // ⏳ stays for 2s
        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#230034]"
                >
                    {/* Colorful Gradient Blobs */}
                    <LoadingGradientBg />
                    {/* Glass Wrapper */}
                    <div className="liquidGlass-wrapper rounded-[55px] px-10 py-6 relative overflow-hidden z-10">
                        <Glass className="rounded-[55px]" />
                        <div className="absolute w-full h-full inset-0 pointer-events-none" />

                        {/* Animated Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-white text-2xl md:text-3xl font-bold tracking-tight z-20 relative"
                        >
                            <Typewriter
                                options={{
                                    strings: ["Loading Portfolio...", "Welcome!"],
                                    autoStart: true,
                                    loop: false,
                                    delay: 50,
                                    deleteSpeed: 30,
                                }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
