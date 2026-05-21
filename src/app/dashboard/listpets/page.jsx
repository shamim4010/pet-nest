import ListPet from "@/components/ui/listpets/ListPet"

function ListPets() {
  return (
    <div className='bg-[url("/noisebg.png")] bg-no-repeat bg-cover p-24'>
      <div>
        <ListPet />
      </div>
    </div>
  )
}

export default ListPets