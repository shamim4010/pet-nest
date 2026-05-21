import Adoption from '@/components/ui/adoption/Adoption'
import React from 'react'

function MyRequests() {
  
  
  return (
    <div className='p-24 w-full'>
        <div>
            <h2 className='text-5xl font-bold text-white'>My Adoption Requests</h2>
            <p className='text-white opacity-60 mt-4'>Track your journey toward a new companionship.</p>
        </div>
        <div>
            <Adoption />
        </div>
    </div>
  )
}

export default MyRequests