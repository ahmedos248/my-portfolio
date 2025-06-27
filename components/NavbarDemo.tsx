"use client";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    MobileNavHeader,
    MobileNavToggle,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Glass from "./ui/Glass";
import { FloatingDockDemo } from "./FloatingDockDemo";
import GlowButton from "./GlowButton";

export function NavbarDemo() {
    return (
        <div className="relative w-full">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody className="liquidGlass-wrapper rounded-full relative">
                    <NavbarLogo />
                    <Glass className="rounded-full" />
                    <div className="flex items-center gap-4">
                        <div className="absolute inset-0 z-10 flex items-center justify-center">
                            <FloatingDockDemo />
                        </div>
                    </div>
                    <div>
                        <GlowButton />
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav className="liquidGlass-wrapper rounded-full relative">
                    <Glass className="rounded-full" />
                    <MobileNavHeader className="z-10 relative w-full">
                        <NavbarLogo />
                        <div className="absolute left-[100%] translate-x-[-115%]">
                            <FloatingDockDemo />
                        </div>
                    </MobileNavHeader>
                </MobileNav>
            </Navbar>

            {/* Navbar */}
        </div>
    );
}

