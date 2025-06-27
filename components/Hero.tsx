'use client';
import React from 'react'
import { cn } from '@/lib/utils'
import { FaLocationArrow } from 'react-icons/fa'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { BackgroundGradientAnimation } from './ui/GradientBg'
import Glass from './ui/Glass'
import Typewriter from 'typewriter-effect'

const Hero = () => {
    return (
        <div id="hero" className='px-10 relative py-24 lg:h-[100vh]'>
            <div className='liquidGlass-wrapper rounded-[90px] relative p-5 w-fit'>
                <div className='flex justify-start relative py-5 z-10'>
                    <div className='relative overflow-hidden flex flex-col items-center justify-center liquidGlass-wrapper rounded-full px-10 py-3'>
                        <Glass className='rounded-full' />
                        <h2 className='z-10 text-white lg:text-4xl md:text-3xl text-2xl font-extrabold'>Portifolio</h2>
                    </div>
                </div>
                <div className='flex justify-start relative py-5 z-10'>
                    <div className='w-[55vw] lg:w-[40vw] h-[150px] relative overflow-hidden flex flex-col items-center justify-center liquidGlass-wrapper rounded-full px-10 py-3'>
                        <Glass className='rounded-full' />
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
                    <div className='max-w-[40vw] relative overflow-hidden flex flex-col items-center justify-center liquidGlass-wrapper rounded-full px-10 py-3'>
                        <Glass className='rounded-full' />
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
