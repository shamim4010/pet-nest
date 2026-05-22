import React from 'react'
import { FaPaw } from 'react-icons/fa'
import { FaMagnifyingGlass } from 'react-icons/fa6'

function NoData() {
  return (
    <div className='w-full flex justify-center items-center px-4'>
      <div className='w-full bg-[#161120]/30 backdrop-blur-3xl border border-[#ffffff10] rounded-[40px] p-8 md:p-24 text-center shadow-2xl shadow-black/30 relative overflow-hidden'>
        <div className='relative z-10 flex flex-col justify-center items-center '>
          <div className='w-18 h-18 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#b784ff] flex justify-center items-center text-white text-4xl shadow-md shadow-[#7c3aed40] animate-pulse'>
            <FaPaw />
          </div>
          <h2 className='text-4xl md:text-5xl text-white mt-8'>
            No Data Found
          </h2>
          <p className='text-[#a59bbd] mt-5'>
            Looks like there’s nothing here right now.
          </p>
        </div>
      </div>
    </div>
  )
}

export default NoData