import LoginPage from '@/components/auth/LoginPage'
import React from 'react'

function Login() {
  return (
    <div className='w-full bg-[url("/noisebg.png")] bg-no-repeat bg-cover'>
        <div className='w-full bg-black/20 backdrop-blur-2xl p-24 flex justify-center items-center'>
          <LoginPage />
        </div>
    </div>
  )
}

export default Login