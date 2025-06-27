"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import Glass from "./ui/Glass";

export function SignupForm() {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const allFilled = first && last && email && phone && message;
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
        if (allFilled) {
        }
    };
    return (
        <div className="shadow-input mx-auto w-full max-w-md rounded-3xl p-4 md:rounded-2xl md:p-8 liquidGlass-wrapper relative">
            <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 z-10 relative">
                Get In Touch
            </h2>
            <form className="my-8 z-10 relative" onSubmit={handleSubmit}>
                <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">First name</Label>
                        <Input
                            id="firstname"
                            placeholder="Ahmed"
                            type="text"
                            value={first}
                            onChange={(e) => setFirst(e.target.value)}
                        />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Last name</Label>
                        <Input
                            id="lastname"
                            placeholder="Osama"
                            type="text"
                            value={last}
                            onChange={(e) => setLast(e.target.value)}
                        />
                    </LabelInputContainer>
                </div>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        placeholder="projectmayhem@fc.com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="Number">Phone</Label>
                    <Input
                        placeholder="Phone No."
                        type="number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="Message">Message</Label>
                    <textarea
                        id="Message"
                        name="Message"
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className={`w-full resize-none rounded-3xl p-3 border-[2px] border-white/10 focus:border-white/30 outline-none transition duration-200 ${message ? "bg-black/20" : "bg-white/30"
                            }`}
                    ></textarea>
                </LabelInputContainer>

                <button
                    className={`group/btn relative block h-10 w-full rounded-3xl font-medium text-white transition-all duration-200 ${allFilled
                        ? "bg-black/20"
                        : "bg-white/30"
                        } shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_rgba(255,255,255,0.5)_inset,0px_-1px_0px_0px_rgba(255,255,255,0.5)_inset]`}
                    type="submit"
                >
                    Send &rarr;
                    <BottomGradient />
                </button>
            </form>
            <Glass className="rounded-3xl" />
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};
