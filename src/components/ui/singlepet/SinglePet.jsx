'use client'
import React, { use } from 'react'
import SinglePetCard from '../cards/SinglePetCard'

function SinglePet({ pets }) {
  const pet = use(pets)
  console.log(pet)
  return (
    <SinglePetCard {...{ pet}} />
  )
}

export default SinglePet