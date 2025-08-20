import React from "react";
import Glass from "./ui/Glass";
export function MyProjects() {
    return (
        <div className="grid grid-cols-1 gap-2 p-4 rounded-2xl liquidGlass-wrapper relative">
            <div className="z-10 text-white text-3xl font font-extrabold"><h2>My Projects</h2></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2 flex-col w-full z-10">
                <div
                    className="liquidGlass-wrapper h-80 md:h-96 relative rounded-3xl group"
                >
                    <div className="absolute inset-0 z-10 p-4 pointer-events-none">
                        <img
                            src="/images/P1.jpg"
                            alt="P1"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                    <div className="w-full h-full top-0 left-0 z-20 absolute opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center rounded-3xl">
                        <h2 className="text-center md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-neutral-900 mb-2">
                            Project 1
                        </h2>
                        <p className="text-base text-center text-neutral-800">
                            Simple design with HTML & CSS
                        </p>
                    </div>
                    <Glass className="rounded-2xl" />
                    <div className="absolute bg-neutral-200/50 top-0 left-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-100 transition-all ease-in z-10"></div>
                </div>
                <div
                    className="liquidGlass-wrapper h-80 md:h-96 relative rounded-3xl group"
                >
                    <div className="absolute inset-0 z-10 p-4 pointer-events-none">
                        <img
                            src="/images/P2.jpg"
                            alt="P1"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                    <div className="w-full h-full top-0 left-0 z-20 absolute opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center rounded-3xl">
                        <h2 className="text-center md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-neutral-900 mb-2">
                            Techno Market
                        </h2>
                        <p className="text-base text-center text-neutral-800">
                            Online Store HTM & CSS3 Design
                        </p>
                    </div>
                    <Glass className="rounded-2xl" />
                    <div className="absolute bg-neutral-200/50 top-0 left-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-100 transition-all ease-in z-10"></div>
                </div>
                <div
                    className="liquidGlass-wrapper h-80 md:h-96 relative rounded-3xl group"
                >
                    <div className="absolute inset-0 z-10 p-4 pointer-events-none">
                        <img
                            src="/images/P3.jpg"
                            alt="P1"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                    <div className="w-full h-full top-0 left-0 z-20 absolute opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center rounded-3xl">
                        <h2 className="text-center md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-neutral-900 mb-2">
                            EduPlatform
                        </h2>
                        <p className="text-base text-center text-neutral-800">
                            Design with Bootstrap 5
                        </p>
                    </div>
                    <Glass className="rounded-2xl" />
                    <div className="absolute bg-neutral-200/50 top-0 left-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-100 transition-all ease-in z-10"></div>
                </div>
                <div
                    className="liquidGlass-wrapper h-80 md:h-96 relative rounded-3xl group"
                >
                    <div className="absolute inset-0 z-10 p-4 pointer-events-none">
                        <img
                            src="/images/P4.jpg"
                            alt="P1"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                    <div className="w-full h-full top-0 left-0 z-20 absolute opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center rounded-3xl">
                        <h2 className="text-center md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-neutral-900 mb-2">
                            Online Shopping
                        </h2>
                        <p className="text-base text-center text-neutral-800">
                            E-commerce layout HTML & CSS3
                        </p>
                    </div>
                    <Glass className="rounded-2xl" />
                    <div className="absolute bg-neutral-200/50 top-0 left-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-100 transition-all ease-in z-10"></div>
                </div>
                <div
                    className="liquidGlass-wrapper h-80 md:h-96 relative rounded-3xl group"
                >
                    <div className="absolute inset-0 z-10 p-4 pointer-events-none">
                        <img
                            src="/images/P5.jpg"
                            alt="P1"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                    <div className="w-full h-full top-0 left-0 z-20 absolute opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center rounded-3xl">
                        <h2 className="text-center md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-neutral-900 mb-2">
                            My Portifolio
                        </h2>
                        <p className="text-base text-center text-neutral-800">
                            Type Script & tailwind CSS
                        </p>
                    </div>
                    <Glass className="rounded-2xl" />
                    <div className="absolute bg-neutral-200/50 top-0 left-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-100 transition-all ease-in z-10"></div>
                </div>
                <div
                    className="liquidGlass-wrapper h-80 md:h-96 relative rounded-3xl group"
                >
                    <div className="absolute inset-0 z-10 p-4 pointer-events-none">
                        <img
                            src="/images/P6.jpg"
                            alt="P1"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                    <div className="w-full h-full top-0 left-0 z-20 absolute opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center rounded-3xl">
                        <h2 className="text-center md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-neutral-900 mb-2">
                            Passowrd Generator
                        </h2>
                        <p className="text-base text-center text-neutral-800">
                            Secure password with HTML & CSS
                        </p>
                    </div>
                    <Glass className="rounded-2xl" />
                    <div className="absolute bg-neutral-200/50 top-0 left-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-100 transition-all ease-in z-10"></div>
                </div>
            </div>
            <Glass className="rounded-2xl" />
        </div>
    );
}
