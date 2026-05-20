async function AllPets() {
  const res = await fetch(`${process.env.PETS_DATA_URL}`, {
    cache : 'no-store'
  });
  return await res.json();
}

export default AllPets