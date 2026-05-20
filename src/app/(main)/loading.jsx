import React from 'react'
import { ScaleLoader } from 'react-spinners'

function Loading() {
  return (
    <div className='flex justify-center items-center m-24 text'><ScaleLoader /></div>
  )
}

export default Loading