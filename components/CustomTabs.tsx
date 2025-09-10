'use client';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MyProjects } from './MyProjects';
import Glass from './ui/Glass';
import { ContactForm } from './ContactForm';

const tabs = [
    { label: '1st Section', content: <MyProjects /> },
    { label: '2nd Section', content: <ContactForm /> },
    {
        label: '3rd Section',
        content: (
            <>
                <div className="flex justify-center items-center text-sm pb-7 text-white/80 relative z-10">
                    <p>
                        My name is Ahmed, I live in El Gamalia, I am 25 years old, These are
                        some of my projects.
                    </p>
                </div>
                <ContactForm />
            </>
        ),
    },
];

export function CustomTabs() {
    const [activeTab, setActiveTab] = useState(0);
    const [loading, setLoading] = useState(false);
    const tabRefs = useRef<HTMLButtonElement[]>([]);

    const [indicatorStyle, setIndicatorStyle] = useState({
        left: 0,
        width: 0,
        height: 0,
    });

    useEffect(() => {
        const updateIndicator = () => {
            const currentBtn = tabRefs.current[activeTab];
            if (currentBtn) {
                setIndicatorStyle({
                    left: currentBtn.offsetLeft,
                    width: currentBtn.offsetWidth,
                    height: currentBtn.offsetHeight,
                });
            }
        };
        updateIndicator();
        window.addEventListener('resize', updateIndicator);
        return () => window.removeEventListener('resize', updateIndicator);
    }, [activeTab]);

    const handleTabChange = (index: number) => {
        setLoading(true);
        setActiveTab(index);
        setTimeout(() => setLoading(false), 500);
    };

    return (
        <div
            id="projects"
            className="scroll-mt-24 relative w-full min-w-7xl mx-auto mt-14 p-2 md:px-10 pb-10"
        >
            <div className="flex justify-center items-center text-3xl font-extrabold py-4 relative z-10">
                <h1>My Projects</h1>
            </div>
            <div className="flex justify-center items-center text-sm pb-7 text-white/80 relative z-10">
                <p>
                    My name is Ahmed, I live in Cairo, El Gamalia, These are some of my
                    projects.
                </p>
            </div>

            {/* Tabs */}
            <div className="relative flex justify-center mb-5 p-0 justify-self-center rounded-full gap-4 shadow-[inset_0_0_0_4px_rgba(255,255,255,0.1)]">
                <motion.div
                    className="absolute rounded-full overflow-hidden z-20 liquidGlass-wrapper"
                    animate={indicatorStyle}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                    <Glass className="w-full h-full rounded-full" />
                </motion.div>

                {tabs.map((tab, index) => (
                    <div key={tab.label}>
                        <button
                            ref={(el) => {
                                if (el) tabRefs.current[index] = el;
                            }}
                            onClick={() => handleTabChange(index)}
                            className={`flex-1 z-30 relative rounded-full overflow-hidden flex items-center justify-center px-4 py-2 text-xl md:text-3xl font-medium transition-colors duration-300 ${index === activeTab
                                ? 'text-white'
                                : 'text-white hover:text-green-300'
                                }`}
                        >
                            <h1 className="relative z-30 w-full h-full">{tab.label}</h1>
                        </button>
                    </div>
                ))}
            </div>

            {/* Content with loading */}
            <div>
                {loading ? (
                    <div className="text-white/70 text-lg justify-self-center min-h-[600px]">Loading...</div>
                ) : (
                    tabs[activeTab].content
                )}
            </div>
        </div>
    );
}
