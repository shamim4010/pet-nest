
import Tables from '@/components/ui/dashboardtable/Tables'
import React from 'react'

function Dashboard() {
  return (
    <div className='w-full h-screen p-24'>
      <div className=" flex flex-col gap-10">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-6xl text-white">Dashboard</h2>
            <p className="text-white opacity-70">Welcome back, Star. Your adoption journey is progressing beautifully.</p>
          </div>
        </div>
        <div>
          <Tables />
        </div>
      </div>
    </div>
  )
}

export default Dashboard