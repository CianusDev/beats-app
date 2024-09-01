/* eslint-disable @next/next/no-img-element */
import React from 'react'
import MiniCard from './mini-card'
import { Button } from './ui/button'
import {motion} from 'framer-motion'

const SecondSection = () => {
  return (
    <section className='w-full  bg-black/80 flex flex-col justify-center p-10'>
        <div className='flex items-center justify-center gap-5 py-20 flex-wrap'>
            <MiniCard
            delay={0.2}
            src={'https://images.pexels.com/photos/3756962/pexels-photo-3756962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
            title={'Extended Battery Life'}
            description={'New-And-Improved Technologies enables up to 40 hours battery life'}/>
            <MiniCard 
            delay={0.4}
            src={'https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
            title={'Extended Battery Life'}
            description={'New-And-Improved Technologies enables up to 40 hours battery life'}/>
            <MiniCard 
            delay={0.6}
            src={'https://images.pexels.com/photos/7451935/pexels-photo-7451935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
            title={'Extended Battery Life'}
            description={'New-And-Improved Technologies enables up to 40 hours battery life'}/>
        </div>         

        <motion.div 
        initial={{
          opacity:0
        }}
        whileInView={{
          opacity:1
        }}
        transition={{
          delay:0.4
        }}
        className='w-full h-full max-md:flex-col flex justify-center items-center gap-4 p-4'>
          <motion.div 
          className='w-full flex flex-col gap-6 py-6 h-full'>
            <motion.h1
            className='md:text-7xl text-5xl font-bold text-white'>Wireless Heaphone</motion.h1>
            <motion.p
            className=' text-white/60 text-lg md:text-xl'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, a animi iste recusandae cumque et explicabo perspiciatis deleniti impedit pariatur eos dolor sed quis ea officia quisquam, necessitatibus quia magnam?
            </motion.p>
            <Button
            className=' bg-[#1fd761] h-14 hover:bg-[#1fd761]/50 text-lg md:w-[200px] text-[#333333] font-semibold rounded-full'
            >
                Try Now
                
            </Button>
          </motion.div>
          <motion.div className='w-full relative h-full'>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b5914c205978767.66c4c14ba69e0.jpg' alt='' className='h-full object-cover  object-center rounded-3xl '/>
          </motion.div>
        </motion.div>                                                                                                                                                                
    </section>
  )
}

export default SecondSection