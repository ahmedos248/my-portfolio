"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./LoadingScreen";
import Footer from "./Footer";
import { CustomTabs } from "./CustomTabs";
import Carousel from "./Carousel";

export default function PageWrapper() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 5800);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (loading) {
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = "var(--scrollbar-width)";
        } else {
            document.body.style.overflow = "auto";
            document.body.style.paddingRight = "0px";
        }
    }, [loading]);

    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.documentElement.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {loading ? (
                <LoadingScreen key="loader" />
            ) : (
                <motion.div
                    key="page"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <Carousel />
                    <CustomTabs />
                    <Footer />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
