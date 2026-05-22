'use client'
import React, { use } from 'react'
import EditPetCard from '../cards/EditPetCard'

function EditPet({ petId, allPetP }) {
    const allPet = use(allPetP);

    const petFind = allPet.find(item => item._id === petId)
    
    console.log('petFind',petId, petFind);
    

    return (
        <div>
            <EditPetCard {...{petId , petFind}} />
        </div>
    )
}

export default EditPet