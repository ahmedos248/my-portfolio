import React from "react";
import Glass from "./ui/Glass";
import Project_1 from "./Project_1";
import Project_2 from "./Project_2";
import Project_3 from "./Project_3";
export function MyProjects() {
    return (
        <div className="grid grid-cols-1 gap-4 p-2 rounded-2xl liquidGlass-wrapper relative">
            <div className="relative z-10">
                <h2
                    className="text-3xl font-extrabold"
                    style={{
                        color: "transparent",          // makes the inside transparent
                        WebkitTextStroke: "1px white" // white outline only
                    }}
                >
                    My Projects
                </h2>
            </div>

            <div className="flex flex-wrap justify-center lg:gap-2 gap-4 w-full z-10">
                <Project_1 />
                <Project_2 />
                <Project_3 />
                <Project_1 />
                <Project_1 />
                <Project_1 />
            </div>
            <Glass className="rounded-2xl" />
        </div>
    );
}
