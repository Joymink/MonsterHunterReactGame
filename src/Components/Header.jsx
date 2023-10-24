import React from 'react'
import logo from '../assets/Monster_Hunter_logo.png'

const Header = () => {
  return (
    <div className='flex w-screen px-2 p-3 pt-10 justify-center items-center bg-gray-900 '>
        <div>
             <img src={logo} alt="Monster Hunter Logo" className='lg:h-44 '/>
        </div>
    </div>
  )
}

export default Header
