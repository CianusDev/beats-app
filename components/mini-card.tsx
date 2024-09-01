/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'

type Props={
    src:string,
    title:string,
    description:string,
    delay?:number|undefined
}
export default function MiniCard({title,src,description,delay}:Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1,x:[-50,0]}}
    transition={{
      duration:0.25,
      delay:delay
    }}
    className='w-[400px] relative cursor-pointer flex gap-2  h-24 bg-[#171717] shadow-md rounded-lg'>
        <img src={src} alt=''  className='object-cover  flex-shrink-0 rounded-s-lg h-full w-24 object-center'/>
        <div className='flex flex-col gap-1 p-2'>
            <h1 className='font-semibold max-md:text-md text-xl text-white'>{title}</h1>
            <p className='text-muted-foreground max-md:text-xs text-sm'>{description}</p>
        </div>
    </motion.div>
  )
}
