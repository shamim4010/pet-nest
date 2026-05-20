import React from 'react'

async function AllPets() {
  const res = await fetch('http://localhost:7000/pets', {
    cache : 'no-store'
  });
  return await res.json();
}

export default AllPets