import { Suspense } from "react";
import Loading from "../../loading";
import SinglePet from "@/components/singlepet/SinglePet";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const dynamic = 'force-dynamic';

async function Pets({ params }) {
    const name = await params;
    console.log(name)

    const {token} = await auth.api.getToken({
        headers: await headers()
    })

    console.log('shamim', token)

    const petP = async () => {
        const res = await fetch(`${process.env.SERVER_URL}/pets/${name.id}`, {
            headers: {
                authorization: `Bearer ${token}`
            }
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