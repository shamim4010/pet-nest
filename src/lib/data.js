async function AllPets() {
  const res = await fetch(`${process.env.SERVER_URL}/pets`, {
    cache: 'no-store'
  });
  return await res.json();
}
export default AllPets