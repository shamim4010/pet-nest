import AllPets from '@/lib/data'
import React, { Suspense } from 'react'
import Loading from '../loading'
import AllPetss from '@/components/ui/allpets/AllPetss'

function AllPet() {
    const allPets = AllPets()

    return (
        <div className='w-full bg-[url("/noisebg-2.png")] bg-no-repeat bg-cover'>
            <div className='w-full bg-white/3 backdrop-blur-md'>
                <div className='w-full p-6 md:p-12 lg:p-24'>
                    <p className='w-30 text-center text-[#6dc78e] glass-level-1 px-2 rounded-2xl'>all pets</p>
                    <div>
                        <h2 className='text-6xl text-white py-4'>Find Your Soul Match</h2>
                        <p className='text-white opacity-80'>248 companions waiting for their forever orbit</p>
                        <div className='py-12'>
                            <Suspense fallback={<Loading />}>
                            <AllPetss {...{allPets}} />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllPet