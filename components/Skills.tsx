'use client';
import React, { useEffect, useState } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Glass from './ui/Glass';
import { useInView } from 'react-intersection-observer';

const Skill = ({ target, label }: { target: number; label: string; animate: boolean }) => {
    const [value, setValue] = useState(0);
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.4,
    });

    useEffect(() => {
        if (!inView) {
            setValue(0);
            return;
        }

        const timer = setInterval(() => {
            setValue((prev) => {
                if (prev >= target) {
                    clearInterval(timer);
                    return target;
                }
                return prev + 1;
            });
        }, 10);

        return () => clearInterval(timer);
    }, [inView, target]);

    return (
        <div ref={ref} className="lg:w-60 lg:h-60 md:w-48 md:h-48 w-40 h-40 liquidGlass-wrapper rounded-full p-4 flex items-center justify-center relative">
            <CircularProgressbarWithChildren
                key={inView ? "visible" : "hidden"}
                className="z-10 relative"
                value={value}
                styles={buildStyles({
                    pathColor: '#ff4d67',
                    trailColor: '#00000066',
                    strokeLinecap: 'round',
                })}
            >
                <div className="text-center text-white z-10">
                    <div className="text-2xl font-bold">{value}%</div>
                    <div className="text-sm text-gray-200 mt-1">{label}</div>
                </div>
            </CircularProgressbarWithChildren>
            <Glass className="rounded-full" />
            <div className='absolute bg-black/20 w-full h-full top-0 left-0 rounded-full'></div>
        </div>
    );
};

export default Skill;





