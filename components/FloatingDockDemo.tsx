"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconFolders,
    IconBrain,
    IconHome,
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
} from "@tabler/icons-react";

export function FloatingDockDemo({ className = "" }: { className?: string }) {
    const handleScroll = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        const section = document.querySelector(id);
        section?.scrollIntoView({ behavior: "smooth" });
    };

    const links = [
        {
            title: "Home",
            icon: <IconHome className="h-full w-full text-white z-10" />,
            href: "#hero",
        },
        {
            title: "Skills",
            icon: <IconBrain className="h-full w-full text-white z-10" />,
            href: "#skills",
        },
        {
            title: "Projects",
            icon: <IconFolders className="h-full w-full text-white z-10" />,
            href: "#projects",
        },
        {
            title: "Linkedin",
            icon: <IconBrandLinkedin className="h-full w-full text-white z-10" />,
            href: "#",
        },
        {
            title: "Facebook",
            icon: <IconBrandFacebook className="h-full w-full text-white z-10" />,
            href: "#",
        },
        {
            title: "Instagram",
            icon: <IconBrandInstagram className="h-full w-full text-white z-10" />,
            href: "#",
        },
        {
            title: "GitHub",
            icon: <IconBrandGithub className="h-full w-full text-white z-10" />,
            href: "#",
        },
    ];

    return (
        <div
            className={`flex items-center justify-center h-[10px] w-full ${className}`}
        >
            <FloatingDock
                items={links.map((item) => ({
                    ...item,
                    // override click
                    onClick: (e: React.MouseEvent) =>
                        item.href.startsWith("#")
                            ? handleScroll(e, item.href)
                            : null,
                }))}
            />
        </div>
    );
}
