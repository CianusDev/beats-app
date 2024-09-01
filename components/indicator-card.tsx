import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import React from 'react'
import {delay, motion} from 'framer-motion'

type Props={
    icon:LucideIcon,
    title:string,
    className?:string,
    delay?:number|undefined
}

const IndicatorCart = ({icon,title,className,delay}:Props) => {
  return (
    <motion.div
    initial={{opacity:0,x:200}}
    whileInView={{opacity:1,x:0}}
    transition={{
        delay:delay
    }}
    className={cn(className,'flex items-center gap-4')}>
        <motion.div
        initial={{opacity:0,scale:0}}
        whileInView={{opacity:1,scale:1}}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
        }}
        className='w-16 h-16 bg-black/50 flex justify-center items-center rounded-full '>
            {React.createElement(icon,{className:"text-[#1fd761] "})}
        </motion.div>
        <motion.div 
        initial={{opacity:0,scale:0}}
        whileInView={{opacity:1,scale:1}}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay:0.2,
        }}
        className='text-md bg-black/50 text-white font-bold px-4 h-16 text-center rounded-3xl flex justify-center items-center'>
            {title}
        </motion.div>
    </motion.div>
  )
}

export default IndicatorCart