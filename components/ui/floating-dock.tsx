'use client';

import { cn } from "@/lib/utils";
import { IconMenu } from "@tabler/icons-react";
import {
    AnimatePresence,
    motion,
    MotionValue,
    useMotionValue,
    useSpring,
    useTransform,
} from "motion/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Glass from "./Glass";

export const FloatingDock = ({
    items,
    desktopClassName,
    mobileClassName,
}: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    desktopClassName?: string;
    mobileClassName?: string;
}) => {
    return (
        <>
            <FloatingDockDesktop items={items} className={desktopClassName} />
            <FloatingDockMobile items={items} className={mobileClassName} />
        </>
    );
};

const FloatingDockMobile = ({
    items,
    className,
}: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    className?: string;
}) => {
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={cn("relative block lg:hidden", className)}>
            <AnimatePresence>
                {open && visible && (
                    <motion.div
                        layoutId="nav"
                        className="absolute inset-x-0 top-full mb-2 flex flex-col gap-2 mt-2"
                    >
                        {items.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{
                                    opacity: 0,
                                    y: -10,
                                    transition: { delay: idx * 0.05 },
                                }}
                                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                            >
                                <a
                                    href={item.href}
                                    className="flex h-10 w-10 items-center justify-center rounded-full liquidGlass-wrapper relative"
                                >
                                    <div className="h-4 w-4 z-10">{item.icon}</div>
                                    <Glass className="rounded-full" />
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                onClick={() => setOpen(!open)}
                className="flex h-10 w-10 items-center justify-center rounded-full liquidGlass-wrapper"
            >
                <Glass className="rounded-full" />
                <IconMenu className="h-5 w-5 text-white z-10" />
            </button>
        </div>
    );
};

const FloatingDockDesktop = ({
    items,
    className,
}: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    className?: string;
}) => {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(Infinity);
    const disabledMouseX = useMotionValue(Infinity); // new constant

    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        const handleScroll = () => {
            setIsAtTop(window.scrollY < 50); // only true at top of the page
        };

        if (ref.current) observer.observe(ref.current);
        window.addEventListener("scroll", handleScroll);

        // Run on first render
        handleScroll();

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    return (
        <motion.div
            ref={ref}
            onMouseMove={(e) => mouseX.set(e.clientX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
                "mx-auto hidden h-16 items-start gap-4 rounded-2xl px-4 pt-3 lg:flex",
                className
            )}
        >
            {visible &&
                items.map((item) => (
                    <IconContainer
                        key={item.title}
                        {...item}
                        mouseX={isAtTop ? mouseX : disabledMouseX}
                    />

                ))}

        </motion.div>
    );
};

function IconContainer({
    mouseX,
    title,
    icon,
    href,
}: {
    mouseX: MotionValue;
    title: string;
    icon: React.ReactNode;
    href: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [bounds, setBounds] = useState({ x: 0, width: 0 });

    useLayoutEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setBounds({ x: rect.left, width: rect.width });
        }
    }, []);

    const distance = useTransform(mouseX, (val) => val - bounds.x - bounds.width / 2);

    const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const widthIconTransform = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
    const heightIconTransform = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

    const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 18 });
    const height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 18 });
    const widthIcon = useSpring(widthIconTransform, { mass: 0.1, stiffness: 150, damping: 18 });
    const heightIcon = useSpring(heightIconTransform, { mass: 0.1, stiffness: 150, damping: 18 });

    const [hovered, setHovered] = useState(false);

    return (
        <a href={href}>
            <motion.div
                ref={ref}
                style={{ width, height, willChange: "width, height" }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="relative flex items-center justify-center rounded-full transition-transform"
            >
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, x: "-50%" }}
                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                            exit={{ opacity: 0, y: 2, x: "-50%" }}
                            className="absolute -bottom-8 left-1/2 w-fit rounded-md border border-gray-200 px-2 py-0.5 text-xs whitespace-pre bg-white/70 text-black"
                        >
                            {title}
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    style={{
                        width: widthIcon,
                        height: heightIcon,
                        willChange: "width, height",
                    }}
                    className="flex items-center justify-center"
                >
                    {icon}
                </motion.div>
                <Glass className="rounded-full" />
            </motion.div>
        </a>
    );
}
