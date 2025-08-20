"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Skill from "./Skills";
import Glass from "./ui/Glass";

export default function Resizable() {
    const skills = [
        { label: "FrontEnd Development", target: 90 },
        { label: "JavaScript(ES6+)", target: 85 },
        { label: "React JS", target: 80 },
        { label: "Bootstrap", target: 95 },
        { label: "CSS3", target: 95 },
        { label: "Responsive Design", target: 90 },
        { label: "HTML5", target: 95 },
    ];

    return (
        <div id="skills" className="lg:px-10 px-4 scroll-mt-24">
            <div className="md:rounded-full rounded-[150px] flex flex-col items-center justify-start h-[32rem] liquidGlass-wrapper relative mt-16 w-full mx-auto overflow-hidden max-w-[1000px]">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-4 text-center z-10 text-white">
                    Skills
                </h2>
                <p className="text-white/70 z-10">You can see my skills here</p>

                {/* Swiper Carousel */}
                <div className="my-auto z-10 w-full flex justify-center">
                    <div className="relative w-full">
                        <Swiper
                            modules={[EffectCoverflow]}
                            effect="coverflow"
                            grabCursor={true}
                            centeredSlides={true}
                            loop={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                            }}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 150,
                                modifier: 1.5,
                                scale: 1,
                                slideShadows: false,
                            }}
                            className="mySwiper"
                        >
                            {skills.map((skill, i) => (
                                <SwiperSlide key={i}>
                                    <div className="flex justify-center items-center h-[250px] transition-transform">
                                        <Skill target={skill.target} label={skill.label} animate />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <Glass className="md:rounded-full rounded-[150px]" />
            </div>
        </div>
    );
}
