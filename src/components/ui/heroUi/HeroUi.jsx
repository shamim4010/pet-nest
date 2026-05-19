import React from 'react'
import '@/app/globals.css'
import Image from 'next/image'
import DogImg from '../../../../public/heropet.png'
import CatImg from '../../../../public/heropet-2.png'

function HeroUi() {
  return (
    <div className='w-full flex flex-col justify-between items-center px-6 md:px-12 lg:px-24 py-24 text-white z-0 transition-all duration-500 ease-smooth'>
      <div className='w-full h-[466px] flex flex-col justify-center items-center gap-40 md:flex-row md:justify-between'>
        <div className='flex flex-col gap-8'>
          <p className='w-70 glass-level-1 text-center py-1 rounded-2xl text-[#d0bcff]'>PET ADOPTION REDEFINED</p>
          <h2 className='text-7xl font-bold'>Find Your <p className='text-gradient'>Perfect</p> Companion</h2>
        </div>
        <div className='w-full relative flex justify-center items-center'>
          <div className='absolute top-3 right-40  border border-dashed border-blue-300 p-1'>
            <Image src={DogImg} width={200} height={300} className='rounded-xl' />
          </div>
          <div className='absolute right-0 border border-dashed border-blue-300 p-1'>
            <Image src={CatImg} width={200} height={300} className='rounded-xl' />
          </div>
        </div>
      </div>
      <div className='w-6 h-9 rounded-2xl border border-[#d0bcff] hidden md:flex justify-center pt-1'>
        <div className='w-1 h-2 rounded-2xl bg-[#d0bcff]'></div>
      </div>
    </div>
  )
}

export default HeroUi