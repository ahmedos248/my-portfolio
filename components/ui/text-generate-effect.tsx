"use client";
import { useMemo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
    duration = 0.5,
}: {
    words: string;
    className?: string;
    duration?: number;
}) => {
    const wordsArray = useMemo(() => words.split(" "), [words]);

    return (
        <div className={cn("font-bold", className)}>
            <div className="m-0 dark:text-white text-black text-3xl sm:text-5xl lg:text-6xl md:text-4xl leading-snug tracking-wide">
                {wordsArray.map((word, idx) => (
                    <motion.span
                        key={idx}
                        initial={{
                            clipPath: "inset(0 100% 0 0)",
                            filter: "blur(10px)",
                        }}
                        animate={{
                            clipPath: "inset(0 0% 0 0)",
                            filter: "blur(0px)",
                        }}
                        transition={{
                            duration,
                            delay: idx * 0.15, // stagger reveal
                            ease: "easeOut",
                        }}
                        className={cn(
                            "inline-block",
                            idx > 3 ? "text-purple" : "dark:text-white text-black"
                        )}
                        style={{ willChange: "clip-path" }}
                    >
                        {word}&nbsp;
                    </motion.span>
                ))}
            </div>
        </div>
    );
};
