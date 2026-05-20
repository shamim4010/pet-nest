import FeaturedPets from '@/components/ui/features/FeaturedPets'
import HeroUi from '@/components/ui/heroUi/HeroUi'
import AllPets from '@/lib/data'
import React, { Suspense } from 'react'
import Loading from './loading';

function Home() {
  const petsP = AllPets();
  console.log(petsP)
  return (
    <div className='w-full bg-[url("/noisebg.png")] bg-no-repeat bg-cover'>
      <div className='w-full bg-white/2 backdrop-blur-sm'>
        <div className='w-full'>
          <HeroUi />
        </div>
        <div className='mt-40 md:mt-0'>
          <Suspense fallback={<Loading />}>
            <FeaturedPets {...{ petsP }} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Home