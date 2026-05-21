import { Suspense } from "react";
import Loading from "../../loading";
import SinglePet from "@/components/singlepet/SinglePet";

async function Pets({ params }) {
    const name = await params;
    console.log(name)

    const petP = async () => {
        const res = await fetch(`${process.env.SERVER_URL}/pets/${name.id}`, {
            cache : "no-store"
        });
        return await res.json();
    }
    const pets = petP();

    return (
        <div>
            <Suspense fallback={<Loading />} >
            <SinglePet {...{pets}} />
            </Suspense>
        </div>
    )
}

export default Pets