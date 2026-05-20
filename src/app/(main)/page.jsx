import FeaturedPets from '@/components/ui/features/FeaturedPets'
import HeroUi from '@/components/ui/heroUi/HeroUi'
import React from 'react'

function Home() {
  return (
    <div className='w-full h-screen bg-[url("/noisebg.png")] bg-no-repeat bg-cover'>
        <div className='w-full h-screen bg-white/2 backdrop-blur-sm'>
          <HeroUi />
          <FeaturedPets />
        </div>
    </div>
  )
}

export default Home