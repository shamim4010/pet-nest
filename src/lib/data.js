async function AllPets() {
  
  const res = await fetch(`${process.env.SERVER_URL}/pets`,);
  return await res.json();
}
export default AllPets