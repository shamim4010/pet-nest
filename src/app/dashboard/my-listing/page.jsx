import NoData from '@/components/shared/nodata/NoData';
import MyPets from '@/components/ui/mylistingpets/MyPets';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react'

export const dynamic = 'force-dynamic';

async function MyListing() {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    const userInfo = session?.user

    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    console.log(userInfo?.id)

    const res = await fetch(`${process.env.SERVER_URL}/pets`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const data = await res.json();

    const userPets = data.filter(item => userInfo.id === item.userId)

    console.log('userPets ', userPets?.length)

    return (
        <div className='w-full bg-[url("/noisebg.png")] bg-no-repeat bg-cover'>
            <div className='w-full bg-black/20 backdrop-blur-2xl p-24' >
                <div>
                    <h2 className='text-5xl font-bold text-white'>My Listing Pets</h2>
                    <p className='text-white opacity-60 mt-4'>Track your journey toward a new companionship.</p>
                </div>
                <div className='flex flex-col gap-8 justify-center items-center my-12'>
                    {userPets?.length === 0 ? <NoData /> : userPets.map(myPet => {
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