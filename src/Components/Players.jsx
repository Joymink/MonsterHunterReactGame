import React from 'react'

const Players = (props) => {
  return (
    <div className='flex gap-2 m-3 p-1 rounded-lg bg-gray-600 text-xl font-mono'>
      <h3 className='text-xl'>{props.index +1}</h3>
      <p>{props.name}</p>
    </div>
  )
}

export default Players
