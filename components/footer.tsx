import React from 'react'

export default function Footer() {
  return (
    <footer className='md:h-52 max-md:flex-col gap-6 w-full justify-around bg-black flex items-center p-8'>
        <h1 className='text-4xl font-bold text-white'>Beats</h1>
        <div className='flex flex-col gap-2 text-muted-foreground'>
            <h1 className='font-bold'>Title</h1>
            <div>item</div>
            <div>item</div>
            <div>item</div>
        </div>
        <div className='flex flex-col gap-2 text-muted-foreground'>
            <h1 className='font-bold' >Title</h1>
            <div>item</div>
            <div>item</div>
            <div>item</div>
        </div>
    </footer>
  )
}
