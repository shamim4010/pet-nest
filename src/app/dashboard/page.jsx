
import DashBoard from '@/components/ui/dashboard/DashBoard'
import React from 'react'

function Dashboard() {
  return (
    <div className='w-full bg-[url("/noisebg.png")] bg-no-repeat bg-cover'>
      <div className=" w-full bg-black/20 backdrop-blur-2xl flex flex-col gap-10 p-24">
        <DashBoard />
      </div>
    </div>
  )
}

export default Dashboard