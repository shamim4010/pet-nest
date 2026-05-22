import RegisterPage from '@/components/auth/RegisterPage'
import React from 'react'

function Register() {
  return (
    <div className='w-full bg-[url("/noisebg.png")] bg-no-repeat bg-cover'>
        <div className='w-full bg-black/20 backdrop-blur-2xl p-24 flex justify-center items-center'>
          <RegisterPage />
        </div>
    </div>
  )
}

export default Register