/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { MenuIcon, Plus, SearchIcon, WaypointsIcon } from "lucide-react"
import Image from 'next/image'
import IndicatorCart from './indicator-card'
import {motion} from 'framer-motion'
import { Separator } from './ui/separator'

const FirstSection = () => {
  return (
    <section className='w-full relative   bg-black/80 flex flex-col items-center '>
        <nav className='flex px-4  container items-center z-50 h-20 text-white justify-between '>
            <Image src={"/brand-beats.png"} alt='logo' height={40} width={40} className='rounded-full bg-white p-1'/>
            <div className='flex gap-6 max-md:hidden text-white/50 items-center'>
                <Link href={"#"}>Discover</Link>
                <Link href={"#"} className='mx-6'>Shop</Link>
                <Link href={"#"}>Support</Link>
            </div>
            <div className='flex items-center gap-2'>
                <Button 
                size={"icon"}
                variant={"ghost"}
                className='rounded-full'
                >
                    <SearchIcon/>
                </Button>

                <Button 
                size={"icon"}
                variant={"ghost"}
                className='rounded-full md:hidden'
                >
                    <MenuIcon/>
                </Button>
            </div>
        </nav>
        <div className='w-full h-full   items-center flex-col justify-center  flex'>
            {/* texte accrocheur */}
            <div className='absolute w-full flex items-center gap-6 md:pb-4 justify-center md:h-96 max-md:flex-col h-72 top-0'>
                <motion.h1 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{
                    duration:1
                }}
                className='text-9xl font-bold max-md:text-7xl text-white'>BEATS</motion.h1>
                <motion.img 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{
                    duration:1.2
                }} 
                src={"/spotify.png"} alt='logo-spotify' height={50} width={50} className='max-md:hidden rounded-full'/>
            </div>
            {/* image de fond */}
            <img
            src='/spotify-logo-png-white.png'className=' absolute  w-[400px]  opacity-10  object-contain object-center'/>
            {/* eraphone */}
            <div className='relative flex items-center justify-center'>
                <IndicatorCart
                className='absolute max-md:hidden z-50 bottom-52 right-14'
                icon={Plus} title='Personnalised spacial audio'/>

                <IndicatorCart
                delay={0.4}
                className='absolute max-md:hidden  flex-row-reverse z-50 top-52 left-48'
                icon={Plus} title='Add stability'/>

                <IndicatorCart
                delay={0.6}
                className='absolute max-md:hidden  flex-row-reverse z-50 bottom-52 left-10'
                icon={Plus} title='Double padding'/>
                <motion.img 
                initial={{scale:.75}}
                animate={{y:[0,10,0]}}
                transition={{
                    duration:5,
                    repeat:Infinity,
                    ease: "easeInOut",

                }}
                src='/earphone.png' width={800} height={300} className='rounded-full z-30 scale-[.75] top-0 object-cover object-center'/>
            </div>
            <div className='relative flex justify-center items-center w-full px-4'>
                <div className='bg-[#333333] absolute flex items-center gap-4 rounded-full p-4'>
                    <Button
                    className=' bg-[#1fd761] md:h-14 hover:bg-[#1fd761]/50 text-lg md:w-[200px] text-[#333333] font-semibold rounded-full'
                    >
                        Explore
                    </Button>
                    <Button
                    size={"icon"}
                    variant={"outline"}
                    className='rounded-full md:h-14 md:w-14' 
                    >
                        <WaypointsIcon/>
                    </Button>
                </div>
                <Separator className='bg-muted-foreground/50'/>
            </div>
        </div>
    </section>
  )
}

export default FirstSection