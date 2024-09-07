import React from 'react'
import { Button } from './ui/button'
import { ShoppingBagIcon, ShoppingCart } from 'lucide-react'

export default function FinalSection() {
  return (
    <section className='w-full relative bg-black/80 h-96 z-10  gap-4  items-center flex flex-col justify-center p-4'>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
        <div className=' justify-center items-center'>
            <h1 className='text-6xl max-md:text-4xl font-bold my-6 text-center rounded-full text- bg-p-4 '>x1 Headphones Beats</h1>
        </div>
        <h2 className='text-8xl font-bold my-6'>$ 37</h2>
        <Button className='flex items-center gap-4 rounded-full p-4'>
            Buy Now
            <ShoppingCart size={20}/>
        </Button>
    </section>
    
  )
}
