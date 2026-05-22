import EditPet from '@/components/ui/editpet/EditPet'
import AllPets from '@/lib/data'
import React from 'react'

async function page({ params }) {
  const petIdP = await params
  const petId = petIdP?.id
  const allPetP = AllPets()

  return (
    <div>
      <EditPet {...{ petId, allPetP }} />
    </div>
  )
}

export default page