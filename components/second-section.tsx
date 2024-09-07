/* eslint-disable @next/next/no-img-element */
import React from 'react'
import MiniCard from './mini-card'
import { Button } from './ui/button'
import {motion} from 'framer-motion'
import { CircleCheck, CircleMinus, CirclePlus, Pause, SkipBack, SkipForward } from 'lucide-react'

const SecondSection = () => {
  return (
    <section className='w-full  bg-black flex flex-col justify-center p-2'>
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
        // initial={{
        //   opacity:0
        // }}
        // whileInView={{
        //   opacity:1
        // }}

        className='w-full h-full max-md:flex-col-reverse flex justify-center items-center gap-4 mb-6 p-4'>
          <motion.div 
          className='w-[600px] max-md:w-full  flex flex-col gap-6 py-6 h-full'>
            <motion.h1
            initial={{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            transition={{
              delay:0.4
            }}
            className='md:text-7xl text-5xl font-bold text-white'>Wireless Heaphone</motion.h1>
            <motion.p
            initial={{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            transition={{
              delay:0.6
            }}
            className=' text-white/60 text-lg md:text-xl'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, a animi iste recusandae cumque et explicabo perspiciatis deleniti impedit pariatur eos dolor sed quis ea officia quisquam, necessitatibus quia magnam?
            </motion.p>
            {/* <Button
            className=' bg-[#1fd761] h-14 hover:bg-[#1fd761]/50 text-lg md:w-[200px] text-[#333333] font-semibold rounded-full'
            >
                Try Now
                
            </Button> */}
          </motion.div>
          <motion.div className='w-[600px] max-md:w-full  relative h-full'>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b5914c205978767.66c4c14ba69e0.jpg' alt='' className='h-full w-full object-cover  object-center rounded-3xl '/>
          </motion.div>
      </motion.div>



        <motion.div
          // initial={{
          //   opacity:0
          // }}
          // whileInView={{
          //   opacity:1
          // }}
          // transition={{
          //   delay:0.4
          // }}
          className='w-full h-full max-md:flex-col flex justify-center items-center gap-4 p-4'>


        <motion.div className=' w-[450px] max-md:w-full relative shadow-md bg-gradient-to-b from-gray-700 via-gray-900 to-black p-4 rounded-3xl h-full'>
          <motion.img
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{
              delay:0.4
            }}
          src='https://img.freepik.com/free-vector/colorful-equalizer-wave-background_23-2148445835.jpg?t=st=1725463293~exp=1725466893~hmac=b8684206559609ca4b1dc8740ee6513894c578e1ae7cf18238ade0bf6ea55a77&w=1060' alt='' className='h-full object-contain  object-center rounded-3xl '/>

          <div className='p-4'>

            <div className='flex items-center justify-between'>
              <div className='flex flex-col gap-2'>
                <h1 className='text-3xl text-white font-bold'>Spatial Sound</h1>
                <h2 className='flex font-bold items-center gap-2'>
                  <span
                  className='h-6 w-6 text-xl flex items-center justify-center  text-center rounded-md bg-muted-foreground'>S</span> 
                  <p className='text-xl text-white/80'>Spatial</p>
                </h2>
              </div>
              <div className='flex items-center gap-4'>
                <CircleMinus size={40} className='text-white'/>
                <CircleCheck size={44} className='fill-green-600 text-[#333333]'/>
              </div>
            </div>

            <div className='w-full h-1 bg-muted rounded-full my-4'/>

            <div className='flex items-center  text-muted-foreground justify-between'>
              <span>0:12</span>
              <span>2:17</span>
            </div>

            <div className='flex justify-center items-center gap-4'>
              <SkipBack size={40} className='text-muted fill-muted'/>
                <div className='h-24 w-24 flex justify-center items-center rounded-full bg-muted'>
                  <Pause size={40} className='fill-[#333333] text-[#333333]'/>
                </div>
              <SkipForward size={40} className='text-muted fill-muted'/>
            </div>

          </div>
        </motion.div>

    
          <motion.div 
          className='w-[600px]  max-md:w-full flex flex-col gap-6 py-6 px-4 h-full'>
            <motion.h1
            initial={{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            transition={{
              delay:0.4
            }}
            className='md:text-7xl text-5xl font-bold text-white'>Spatial Sound</motion.h1>
            <motion.p
            initial={{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            transition={{
              delay:0.6
            }}
            className=' text-white/60 text-lg md:text-xl'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, a animi iste recusandae cumque et explicabo perspiciatis deleniti impedit pariatur eos dolor sed quis ea officia quisquam, necessitatibus quia magnam?
            </motion.p>
            <Button
            
            className=' bg-[#1fd761] h-14 hover:bg-[#1fd761]/50 text-lg md:w-[200px] text-[#333333] font-semibold rounded-full'
            >
                Listen
            </Button>
          </motion.div>


      </motion.div>    
                                                                                                                                                                
    </section>
  )
}

export default SecondSection