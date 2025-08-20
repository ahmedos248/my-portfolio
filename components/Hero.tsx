'use client';
import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import Glass from './ui/Glass'
import Typewriter from 'typewriter-effect'

const Hero = () => {
    return (
        <div id="hero" className='px-10 relative py-24 lg:h-[100vh] flex justify-center items-center'>
            <div className='liquidGlass-wrapper rounded-[90px] relative p-5 w-fit group hover:scale-105'>
                <div className='flex justify-start relative py-5 z-10 '>
                    <div className='relative overflow-hidden flex flex-col items-center justify-center liquidGlass-wrapper rounded-[55px] px-10 py-3 group-hover:scale-95'>
                        <Glass className='rounded-[55px] ' />
                        <div className='absolute bg-black/20 w-full h-full top-0 left-0'></div>
                        <h2 className='z-10 text-white lg:text-4xl md:text-3xl text-2xl font-extrabold '>Portifolio</h2>
                    </div>
                </div>
                <div className='flex justify-start relative py-5 z-10'>
                    <div className='w-[55vw] lg:w-[40vw] h-[150px] relative overflow-hidden flex flex-col items-center justify-center liquidGlass-wrapper rounded-[55px] px-10 py-3 group-hover:scale-95'>
                        <Glass className='rounded-[55px]' />
                        <div className='absolute bg-black/20 w-full h-full top-0 left-0'></div>
                        <div className='z-10 text-white lg:text-4xl md:text-3xl text-2xl font-extrabold'>
                            <Typewriter
                                options={{
                                    strings: ['Welcome to my portfolio', 'Explore my projects', 'Let\'s build something amazing together!'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 75,
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className='flex justify-start relative py-5 z-10'>
                    <div className='md:max-w-[40vw] px-10 relative overflow-hidden flex flex-col items-center justify-center liquidGlass-wrapper rounded-[55px] py-5 group-hover:scale-95'>
                        <Glass className='rounded-[55px]' />
                        <div className='absolute bg-black/20 w-full h-full top-0 left-0'></div>
                        <TextGenerateEffect
                            className='z-10'
                            words='Hi, I&apos;m Ahmed a FrontEnd Developer'
                        />
                    </div>
                </div>
                <Glass className='rounded-[90px]' />
            </div>
        </div>
    )
}

export default Hero
