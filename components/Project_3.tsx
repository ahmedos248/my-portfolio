"use client"
import React, { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import Glass from "./ui/Glass"

interface Project3Props {
    className?: string;
}

const Project_3 = ({ className }: Project3Props) => {
    const [isMobile, setIsMobile] = useState(false)
    const [animateOverlay, setAnimateOverlay] = useState(false)
    const [overlayStyle, setOverlayStyle] = useState<any>(null)
    const [showMessage, setShowMessage] = useState(false)
    const [messagePos, setMessagePos] = useState({ x: 0, y: 0 })
    const [cardClicked, setCardClicked] = useState(false)
    const cardRef = useRef<HTMLDivElement>(null)

    const projectLink = "https://ahmedos248.github.io/Boot/Boot-Project/index.html"

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const triggerAnimation = () => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect()
            setOverlayStyle({
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
            })
        }

        setAnimateOverlay(true)
        // stop animation after 1.4s
        setTimeout(() => setAnimateOverlay(false), 1400)
    }

    const handleClick = (e: React.MouseEvent) => {
        if (isMobile) {
            triggerAnimation()
            // delay link until overlay animation finishes
            setTimeout(() => {
                window.open(projectLink, "_blank")
            }, 1500) // delay matches animation duration
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
            // delay link until overlay animation finishes
            setTimeout(() => {
                window.open(projectLink, "_blank")
            }, 1500)
        }
    }

    return (
        <>
            <motion.div
                ref={cardRef}
                className="relative group cursor-pointer md:w-[455px] md:h-[295px] w-[428px] h-[276px] rounded-3xl overflow-hidden" // card dimensions
                onClick={handleClick}
                onDoubleClick={handleDoubleClick}
                animate={{ scale: cardClicked ? 0.95 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {/* Iframe preview */}
                <div className="absolute inset-0 top-0 left-0 w-full h-full overflow-hidden pointer-events-none rounded-2xl z-10 p-3">
                    <iframe
                        src={projectLink}
                        title="Project 1 Preview"
                        className="md:scale-[0.3] scale-[0.28] h-[900px] w-[1440px]"
                        style={{
                            transformOrigin: "top left",
                            border: "none",
                            borderRadius: "3rem",
                        }}
                        scrolling="no"
                    />
                </div>

                {/* Hover text */}
                <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center rounded-3xl">
                    <h2 className="text-center md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-neutral-900 mb-2">
                        Project 1
                    </h2>
                    <p className="text-base text-center text-neutral-800">
                        Simple design with HTML & CSS
                    </p>
                </div>

                {/* Glass overlay */}
                <Glass className="absolute inset-0 rounded-3xl" />
                <div className="absolute bg-neutral-200/50 inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all ease-in z-10"></div>
            </motion.div>


            {/* Desktop Click Message */}
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
                    initial={{
                        top: overlayStyle.top,
                        left: overlayStyle.left,
                        width: overlayStyle.width,
                        height: overlayStyle.height,
                        borderRadius: "1.5rem",
                        opacity: 1,
                    }}
                    animate={{
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        borderRadius: "0rem",
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1.2,
                        ease: "easeInOut",
                        opacity: { delay: 1.1, duration: 0.4 },
                    }}
                    className="fixed inset-0 z-[99999] overflow-hidden flex items-center justify-center"
                >
                    <motion.div
                        className="relative w-full h-full rounded-2xl overflow-hidden"
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.1 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        style={{ transformOrigin: "center center" }}
                    >
                        <div className="p-4 liquidGlass-wrapper rounded-2xl relative h-full">
                            <div className="absolute inset-0 top-0 left-0 w-full h-full overflow-hidden pointer-events-none rounded-2xl z-10 p-3">
                                <img
                                    src="images/project3.jpg"
                                    title="Project 3 Preview"
                                    className="h-full w-full object-cover rounded-2xl"
                                />
                            </div>
                            <div className="absolute bg-neutral-200/50 top-0 left-0 w-full h-full rounded-2xl z-10"></div>
                        </div>
                    </motion.div>
                </motion.div>,
                document.body
            )}
        </>
    )
}

export default Project_3
