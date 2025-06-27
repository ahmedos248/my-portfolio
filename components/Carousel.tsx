'use client';
import React, { useState } from "react";
import Slider from "react-slick";
import Skill from "./Skills";
import Glass from "./ui/Glass";
import { useInView } from 'react-intersection-observer';
import { Label } from "@radix-ui/react-label";


// Custom arrow components
function NextArrow({ onClick }: { onClick?: () => void }) {
    return (
        <div
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 text-white text-3xl cursor-pointer z-20"
            onClick={onClick}
        >
            ❯
        </div>
    );
}

function PrevArrow({ onClick }: { onClick?: () => void }) {
    return (
        <div
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 text-white text-3xl cursor-pointer z-20"
            onClick={onClick}
        >
            ❮
        </div>
    );
}

function Resizable() {
    const [display, setDisplay] = useState(true);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const skills = [
        { label: "FrontEnd Development", target: 90 },
        { label: "JavaScript(ES6+)", target: 85 },
        { label: "React JS", target: 80 },
        { label: "Bootstrap", target: 95 },
        { label: "CSS3", target: 95 },
        { label: "Responsive Design", target: 90 },
        { label: "HTML5", target: 95 },
    ];


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div id='skills' className="px-10 scroll-mt-24">
            <div
                ref={ref}
                className="rounded-full flex flex-col items-center justify-start h-[32rem] liquidGlass-wrapper relative overflow-hidden mt-16"
            >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-4 text-center z-10 text-white">Skills</h2>
                <p className="text-white/70 z-10">You can see my skills here</p>
                <div className="slider-container my-auto z-10">
                    <button className="button" onClick={() => setDisplay(!display)} />

                    <div
                        className="relative"
                        style={{
                            width: '700px',
                            display: display ? "block" : "none"
                        }}
                    >
                        {inView && (
                            <Slider {...settings}>
                                {skills.map((skill, i) => (
                                    <div key={i}>
                                        <div className="flex justify-center items-center h-[250px]">
                                            <Skill target={skill.target} label={skill.label} animate={inView} />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        )}
                    </div>
                </div>
                <Glass className="rounded-full" />
            </div>
        </div>
    );
}

export default Resizable;


