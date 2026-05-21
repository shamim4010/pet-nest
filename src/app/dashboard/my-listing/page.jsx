import MyPets from '@/components/ui/mylistingpets/MyPets';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react'

async function MyListing() {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    const userInfo = session?.user

    console.log(userInfo?.id)

    const res = await fetch(`${process.env.SERVER_URL}/pets`);
    const data = await res.json();

    const userPets = data.filter(item => userInfo.id === item.userId)

    console.log(userPets)

    return (
        <div className='bg-[url("/noisebg.png")] bg-no-repeat bg-cover p-24'>
            <div>
                <div>
                    <h2 className='text-5xl font-bold text-white'>My Adoption Requests</h2>
                    <p className='text-white opacity-60 mt-4'>Track your journey toward a new companionship.</p>
                </div>
                <div className='flex flex-col gap-8 justify-center items-center my-12'>
                    {userPets.map(myPet => {
                        return (
                            <MyPets key={myPet?._id} {...{ myPet }} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MyListing