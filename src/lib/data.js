async function AllPets() {
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets`,);
  return await res.json();
}
export default AllPets