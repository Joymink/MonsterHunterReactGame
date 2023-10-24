import React, {useEffect, useState} from 'react'
import { locate } from '../data/locations'

const Monster = ({monsters}) => {
  const insertingLocations =()=>{
    const box = document.getElementById('locationList');
    if(box.childNodes.length===0){
      for(let i =0; i<locate.locations.length; i++){
        let div =document.getElementById('locationList').innerHTML += `<div'> ${i +1} ${locate.locations[i].title} | </div>`;
        
      }
    }
    
  }
  useEffect(()=>{
    insertingLocations()
  },[])
  return (
    <div className='flex flex-col items-center w-11/12 max-w-3xl font-mono bg-gray-500 rounded-2xl'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <h1 className='text-2xl'>You are a <i className='text-red-600 animate-pulse font-extrabold'>Monster</i></h1>
        <h2 className='text-red-600 font-bold'>You must find out where the secret location is!</h2>
      </div>
      <div className='flex flex-col items-center w-6/12 m-2 text-center'>
        <p>Here are your fellow Monsters' player Numbers:</p>
        <div className='flex flex-col'>
          
          <div>
            {localStorage.getItem("Monster Numbers")}
          </div>
          <div className='flex gap-3'>
            {monsters.map((monster)=>{
              return <div className='flex gap-1'>
                <p>{monster.number}.</p>
                <p>{monster.name} </p>
              </div>
            })}
          </div>
          
        </div>
      </div>
      <div className='flex justify-center text-center m-3'>
        <p>Make sure you are asking good questions to other humans to see if you can make them give away <i> The Secret Location.</i></p>
      </div>
      
      <div className='flex flex-col items-center gap-5'>
        <p>Here are the potential Location spots:</p>
        <div id='locationList' className='flex justify-center w-11/12 flex-wrap mx-2 gap-2 text-center text-sm'>
          {/* Locations being inserted here by function */}
        </div>
        
      </div>
    </div>
  )
}

export default Monster
