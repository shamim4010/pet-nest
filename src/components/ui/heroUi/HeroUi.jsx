import React from 'react'
import '@/app/globals.css'
import Image from 'next/image'
import DogImg from '../../../../public/heropet.png'
import CatImg from '../../../../public/heropet-2.png'

function HeroUi() {
  return (
    <div className='w-full h-[600px] bg-[url("/noisebg.png")] bg-no-repeat bg-cover' >
      <div className='w-full h-full inset-0 bg-white/2 backdrop-blur-sm flex flex-col md:flex-row justify-center md:justify-between  items-center gap-4 px-6 md:px-12 lg:px-24 text-white z-0'>
        <div className='flex flex-col gap-8'>
          <p className='w-70 glass-level-1 text-center py-1 rounded-2xl'>PET ADOPTION REDEFINED</p>
          <h2 className='text-7xl font-bold'>Find Your <p className='text-gradient'>Perfect</p> Companion</h2>
        </div>
        <div>
          <div>
            <Image src={DogImg} width={200} height={300} />
          </div>
          <div>
            <Image src={CatImg} width={200} height={300} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroUi