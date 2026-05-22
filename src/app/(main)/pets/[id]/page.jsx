import { Suspense } from "react";
import Loading from "../../loading";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import SinglePet from "@/components/ui/singlepet/SinglePet";

export const dynamic = 'force-dynamic';

async function Pets({ params }) {
    const name = await params;
    console.log(name)

    const {token} = await auth.api.getToken({
        headers: await headers()
    })

    console.log('shamim', token)

    const petP = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets/${name.id}`, {
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