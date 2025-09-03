"use client"
import React, { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import Glass from "./ui/Glass"

interface Project2Props {
    className?: string;
}

const Project_2 = ({ className }: Project2Props) => {
    const [isMobile, setIsMobile] = useState(false)
    const [animateOverlay, setAnimateOverlay] = useState(false)
    const [overlayStyle, setOverlayStyle] = useState<any>(null)
    const [showMessage, setShowMessage] = useState(false)
    const [messagePos, setMessagePos] = useState({ x: 0, y: 0 })
    const [cardClicked, setCardClicked] = useState(false)
    const cardRef = useRef<HTMLDivElement>(null)

    const projectLink = "https://ahmedos248.github.io/Project2/Project2/index.html"

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768)
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const triggerAnimation = () => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const vw = window.innerWidth
        const vh = window.innerHeight

        // compute transforms so initial transform places the full-screen element
        // exactly where the card is (top-left origin)
        const scaleX = rect.width / vw
        const scaleY = rect.height / vh
        const translateX = rect.left
        const translateY = rect.top

        // Save everything we need for the overlay initial transform
        setOverlayStyle({ translateX, translateY, scaleX, scaleY })

        // Ensure overlay mounts with the initial style (two RAFs forced for reliability)
        // then set animateOverlay true so framer-motion animates from initial -> final
        requestAnimationFrame(() => requestAnimationFrame(() => {
            setAnimateOverlay(true)
        }))

        // hide overlay after the animation duration
        setTimeout(() => setAnimateOverlay(false), 1400)
    }

    const handleClick = (e: React.MouseEvent) => {
        if (isMobile) {
            triggerAnimation()
            setTimeout(() => window.open(projectLink, "_blank"), 1500)
        } else {
            setMessagePos({ x: e.clientX, y: e.clientY })
            setShowMessage(true)
            setCardClicked(true)
            setTimeout(() => {
                setShowMessage(false)
                setCardClicked(false)
            }, 1500)
        }
    }

    const handleDoubleClick = () => {
        if (!isMobile) {
            triggerAnimation()
            setTimeout(() => window.open(projectLink, "_blank"), 1500)
        }
    }

    return (
        <>
            <motion.div
                ref={cardRef}
                className="relative group cursor-pointer md:w-[455px] md:h-[295px] w-[428px] h-[276px] rounded-3xl overflow-hidden"
                onClick={handleClick}
                onDoubleClick={handleDoubleClick}
                animate={{ scale: cardClicked ? 0.95 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <div className="absolute inset-0 top-0 left-0 w-full h-full overflow-hidden pointer-events-none rounded-2xl z-10 p-3">
                    <img
                        src="images/project2.jpg"
                        title="Project 2 Preview"
                        className="w-full h-full rounded-[1rem]"
                    />
                </div>

                <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center rounded-3xl">
                    <h2 className="text-center md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-neutral-900 mb-2">
                        Project 1
                    </h2>
                    <p className="text-base text-center text-neutral-800">
                        Simple design with HTML & CSS
                    </p>
                </div>

                <Glass className="absolute inset-0 rounded-3xl" />
                <div className="absolute bg-neutral-200/50 inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all ease-in z-10"></div>
            </motion.div>

            <AnimatePresence>
                {showMessage && !isMobile && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        style={{
                            position: "fixed",
                            top: messagePos.y,
                            left: messagePos.x,
                            transform: "translate(-50%, -120%)",
                        }}
                        className="bg-neutral-900 text-white px-4 py-2 rounded-lg shadow-lg z-[100000]"
                    >
                        Double click to open project
                    </motion.div>
                )}
            </AnimatePresence>

            {animateOverlay && overlayStyle && createPortal(
                <motion.div
                    // full-screen fixed container; we only animate transform so browser uses compositing
                    initial={{
                        transform: `translate(${overlayStyle.translateX}px, ${overlayStyle.translateY}px) scale(${overlayStyle.scaleX}, ${overlayStyle.scaleY})`,
                        borderRadius: "1.5rem",
                        opacity: 1,
                    }}
                    animate={{
                        transform: "translate(0px, 0px) scale(1, 1)",
                        borderRadius: "0rem",
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1.2,
                        ease: "easeInOut",
                        opacity: { delay: 1.1, duration: 0.4 },
                    }}
                    // top/left/100vw/100vh kept in style so transform works relative to viewport
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        transformOrigin: "0 0",         // important: origin top-left
                        willChange: "transform, opacity",
                        pointerEvents: "none",          // avoid blocking interactions while animating
                    }}
                    className="z-[99999] overflow-hidden flex items-center justify-center"
                >
                    <motion.div
                        className="relative w-full h-full rounded-2xl overflow-hidden transform-gpu"
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.05 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        style={{ transformOrigin: "center center" }}
                    >
                        <div className="p-4 liquidGlass-wrapper rounded-2xl relative h-full">
                            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none rounded-2xl z-10 p-3">
                                <img
                                    src="images/project2.jpg"
                                    title="Project 2 Preview"
                                    className="w-full h-full object-cover transform-gpu"
                                    style={{ transformOrigin: "center center" }}
                                />
                            </div>
                            {/* Keep Glass if you need it; if Glass is heavy consider disabling blur during animation */}
                            <Glass className="rounded-2xl" />
                            <div className="absolute bg-neutral-200/50 inset-0 rounded-2xl z-10"></div>
                        </div>
                    </motion.div>
                </motion.div>,
                document.body
            )}
        </>
    )
}

export default Project_2
