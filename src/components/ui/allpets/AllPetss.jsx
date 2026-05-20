'use client'
import React, { use } from 'react'
import AllPetsCard from '../cards/AllPetsCard';

function AllPetss({ allPets }) {
  const allPet = use(allPets);
  console.log(allPet)
  return (
    <div className='grid place-items-center sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-12 gap-8'>
      {allPet.map(pet => {
        return (
          <AllPetsCard key={pet.id} {...{ pet }} />
        )
      })}
    </div>
  )
}

export default AllPetss