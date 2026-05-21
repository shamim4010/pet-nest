import React from 'react'
import MyPetsCard from '../cards/MyPetsCard'

function MyPets({myPet}) {
  return (
    <MyPetsCard {...{myPet}} />
  )
}

export default MyPets