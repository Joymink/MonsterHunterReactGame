import React, { useEffect } from 'react'
import {locate} from '../data/locations'

const Human = () => {
  const location = locate.locations[localStorage.getItem("Secret Location")]
  const roleCount = location.roles.length;
  const role =Math.floor(Math.random()*roleCount);
  return (
    <div className=' flex flex-col items-center w-11/12 max-w-3xl font-mono bg-gray-500 rounded-2xl'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <h1 className='text-2xl'>You are a Human</h1>
        <h2 className='text-red-600 font-bold'>You must find out who the monsters are!</h2>
      </div>
      <div className='flex flex-col items-start w-6/12 m-2 '>
        <div className='flex w-full justify-between'>
          <p>Secret Location: </p>
          <h3>{locate.locations[localStorage.getItem("Secret Location")].title}</h3>
        </div>
        <div className='flex w-full justify-between'> 
          <p>Role:</p>
          <h3>{locate.locations[localStorage.getItem("Secret Location")].roles[role]}</h3>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center text-center m-3 gap-3'>
        <p>Make sure you are asking good questions to see if your fellow "humans" are really humans. <br/>
        Do not give out the location to just anybody! <br />  <br />
        Ex. "Do you think at our location we spend more time outdoors or indoors?" <br />
        if the location is Submarine, a human would say "Indoors", but a monster might say outdoors and you would know for sure that they are a monster.
        <br />
       </p>
       <p>
        if you ask "Have you ever been to the location before?" and the location is the mall... well a monster or human that answer would be yes.
       </p>
       <p>Continue if you are ready!</p>
      </div>
    </div>
  )
}

export default Human
