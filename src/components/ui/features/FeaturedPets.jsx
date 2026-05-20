'use client'
import React, { use } from 'react'
import FeatureCard from '../cards/FeatureCard';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

function FeaturedPets({ petsP }) {
    const allPets = use(petsP);
    console.log(allPets)
    return (
        <div className='w-full p-6 md:p-12 lg:p-24'>
            <p className='w-30 text-center text-[#d0bcff] glass-level-1 px-2 rounded-2xl'>Featured Pets</p>
            <div>
                <h2 className='text-6xl text-white py-4'>Featured Stars</h2>
                <p className='text-white opacity-80'>Discover our most remarkable companions. Each pet is curated for their unique personality, waiting to find their forever stage in your home.</p>
                <div className='grid place-items-center sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-12 gap-8'>
                    {allPets?.slice(0, 6).map(pet => {
                        return (
                            <FeatureCard key={pet.id} {...{ pet }} />
                        )
                    })}
                </div>
                <Link href="/allpets" className="flex w-fit items-center gap-2 rounded-full border border-[#d0bcff]/30 px-5 py-2 text-[#d0bcff] transition hover:border-[#ffb2b9]/40 hover:text-[#ffb2b9]">
                    See All Pets <FaArrowRightLong />
                </Link>
            </div>
        </div>
    )
}

export default FeaturedPets