'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image'
import React from 'react'

function DashBoard() {

    const { data: session, isPending } = authClient.useSession()
    console.log(session)

    const userInfo = session?.user;

    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-white/3 backdrop-blur-md px-10 py-24 rounded-2xl">
            <div className="flex flex-col justify-center items-center gap-8 md:flex-row">
                <Image src={userInfo?.image} width={100} height={100} className="w-14 h-14 rounded-full object-cover" alt="profile" />
                <div className='flex flex-col gap-4'>
                    <h2 className="text-2xl text-white font-semibold">{userInfo?.name}</h2>
                    <p className="text-gray-400 text-sm">
                        {userInfo?.email}
                    </p>
                </div>
            </div>
            <button className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700">
                Edit Profile
            </button>
        </div>
    )
}

export default DashBoard