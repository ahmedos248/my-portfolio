'use client';
import React from 'react'
import Glass from './ui/Glass'
import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react'
const Footer = () => {
    return (
        <section className='items-center justify-items-center'>
            <div className='lg:flex items-center lg:justify-between justify-items-center p-10 px-10 rounded-3xl liquidGlass-wrapper bg-white/50 z-20 relative lg:w-[80%] -mb-5'>
                <p className='z-10 lg:text-lg font-bold w-full relative pb-4 lg:pb-0'>See My Projects At Once & Leave Here Your E-mail Address</p>
                <Glass className='rounded-3xl -z-20' />
                <div className="relative z-10 w-full">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-full border border-white/20 bg-white/10 py-3 pl-5 pr-32 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
                    />
                    <button
                        type="submit"
                        className="absolute right-1 top-1 bottom-1 px-5 bg-white/20 text-white rounded-full hover:bg-white/30 transition"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
            <div className='flex items-center justify-between p-10 px-16 rounded-3xl liquidGlass-wrapper relative w-full'>
                <h2 className='text-3xl font-extrabold z-20'>Portifolio</h2>
                <div className='z-10 flex items-center justify-center gap-4 text-white text-3xl'>
                    <Glass className='rounded-3xl' />
                    <a href="#" className="h-full w-full z-10" >
                        <IconBrandLinkedin />
                    </a>
                    <a href="#" className="h-full w-full z-10" >
                        <IconBrandFacebook />
                    </a>
                    <a href="#" className="h-full w-full z-10" >
                        <IconBrandInstagram />
                    </a>
                    <a href="#" className="h-full w-full z-10" >
                        <IconBrandGithub />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Footer

