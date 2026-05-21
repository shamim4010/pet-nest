import { headers } from "next/headers";
import { auth } from "./auth";

async function AllPets() {
  const { token } = await auth.api.getToken({
    headers: await headers()
  })
  const res = await fetch(`${process.env.SERVER_URL}/pets`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });
  return await res.json();
}
export default AllPets