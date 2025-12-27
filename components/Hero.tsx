'use client';
import React, { useEffect, useState } from 'react';
import { TextGenerateEffect } from './ui/text-generate-effect';
import Typewriter from 'typewriter-effect';

const Hero = () => {
    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setStartTyping(true), 5800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="hero" className="px-10 relative py-24 lg:h-[100vh] flex justify-center items-center">
            <div className="liquidGlass-wrapper-2 rounded-[90px] relative p-5 w-fit group hover:scale-105">

                {/* Title */}
                <div className="flex justify-start relative py-5 z-10">
                    <div className="relative overflow-hidden flex flex-col items-center justify-center liquidGlass-wrapper-2 bg-black/20 rounded-[55px] px-10 py-3 group-hover:scale-95">
                        <h2 className="z-10 text-white lg:text-4xl md:text-3xl text-2xl font-extrabold">
                            Portifolio
                        </h2>
                    </div>
                </div>

                {/* Typewriter */}
                <div className="flex justify-start relative py-5 z-10">
                    <div className="w-[55vw] lg:w-[40vw] h-[150px] relative overflow-hidden flex flex-col items-center justify-center liquidGlass-wrapper-2 bg-black/20 rounded-[55px] px-10 py-3 group-hover:scale-95">
                        <div className="z-10 text-white lg:text-4xl md:text-3xl text-2xl font-extrabold">
                            <Typewriter
                                options={{
                                    strings: [
                                        'Welcome to my portfolio',
                                        'Explore my projects',
                                        "Let\'s build something amazing together!",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 75,
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Intro text */}
                <div className="flex justify-start relative py-5 z-10">
                    <div className="md:max-w-[40vw] px-10 relative overflow-hidden flex flex-col items-center justify-center liquidGlass-wrapper-2 rounded-[55px] py-5 group-hover:scale-95 bg-black/20 min-h-[100px]">
                        {startTyping ? (
                            <TextGenerateEffect
                                className="z-10"
                                words="Hi, I&apos;m Ahmed a FrontEnd Developer"
                            />
                        ) : (
                            <span className="opacity-0">Hi, I&apos;m Ahmed a FrontEnd Developer</span>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
