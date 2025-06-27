'use client';
import { useState, useRef, useEffect } from 'react';
import { MyProjects } from './MyProjects';
import Glass from './ui/Glass';
import { SignupForm } from './SignupForm';

const tabs = [
    { label: '1st Section', content: <MyProjects /> },
    { label: '2nd Section', content: <SignupForm /> },
    {
        label: '3rd Section',
        content:
            <>
                <div className='flex justify-center items-center text-sm pb-7 text-white/80 relative z-10'><p>My name is Ahmed, I live in El Gamalia, I am 25 years old, These are some of my projects.</p></div>
                <SignupForm />
            </>
    },
];

export function CustomTabs() {
    const [activeTab, setActiveTab] = useState(0);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

    useEffect(() => {
        const updateIndicator = () => {
            const currentBtn = tabRefs.current[activeTab];
            if (currentBtn) {
                setIndicatorStyle({
                    left: currentBtn.offsetLeft,
                    width: currentBtn.offsetWidth,
                });
            }
        };

        // Run once on mount and tab change
        updateIndicator();

        // Run on resize
        window.addEventListener('resize', updateIndicator);
        return () => window.removeEventListener('resize', updateIndicator);
    }, [activeTab]);


    return (
        <div id="projects" className="scroll-mt-24 relative w-full min-w-7xl mx-auto mt-14 px-16 pb-10">
            <div className='flex justify-center items-center text-3xl font-extrabold py-4 relative z-10'>
                <h1>My Projects</h1>
            </div>
            <div className='flex justify-center items-center text-sm pb-7 text-white/80 relative z-10'><p>My name is Ahmed, I live in Cairo, El Gamalia, These are some of my projects.</p></div>
            <div className="relative flex justify-center mb-5">
                {typeof indicatorStyle.left === 'number' && typeof indicatorStyle.width === 'number' && (
                    <span
                        className="absolute bottom-0 left-0 rounded-full transition-all duration-300 h-full"
                        style={{
                            left: indicatorStyle.left,
                            width: indicatorStyle.width,
                        }}
                    >
                    </span>
                )}

                {tabs.map((tab, index) => (
                    <div
                        key={tab.label}>
                        <button
                            key={tab.label}
                            ref={(el) => (tabRefs.current[index] = el)}
                            onClick={() => setActiveTab(index)}
                            className={`flex-1 z-10 relative liquidGlass-wrapper rounded-full overflow-hidden flex items-center justify-center mx-3 px-4 py-2 text-3xl font-medium transition-colors duration-300 ${index === activeTab ? 'text-white' : 'text-white hover:text-green-300'
                                }`}

                        >
                            <Glass className='absolute rounded-full inset-0 z-0' />
                            <h1 className='z-10 relative'>{tab.label}</h1>
                        </button>
                    </div>
                ))}
            </div>
            {/* Tab content */}
            <div>{tabs[activeTab].content}</div>
        </div>



    );
}
