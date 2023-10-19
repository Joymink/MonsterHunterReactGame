import React, {useState, useRef} from 'react'
import PlayersList from '../Components/PlayersList';

const RegisterPlayer = (props) => {
  //getting the count of monsters out of the local storage
  //const count = localStorage.getItem("Monster Count")
  const count = 3;
  const [players, setPlayers] =useState( [] );
  const addRef = useRef();

  function addPlayer(event){
    const player = addRef.current.value;
    if(player){
      setPlayers(oldPlayers =>{
        return [...oldPlayers, {name:player}]
      })
      addRef.current.value = null;
    }
    else{
      return null
    }
  }

  return (
    <div className='flex flex-col items-center justify-start bg-gray-900 min-h-screen w-screen text-white lobster'>
      <div className='mt-10'>
        <h1 className='sm:text-5xl text-2xl text-center'>Enter Your Name to Decide Your <i className='text-red-600 animate-pulse'>Fate</i></h1>
      </div>
      <div className='mt-4'>
        <h2 className='sm:text-3xl text-xl text-center'>Will you be a Human or a Monster?</h2>
      </div>
      <div className='mt-4 flex flex-col justify-center items-center gap-2'>
        <h3 className='sm:text-2xl text-lg text-center'>Enter Your Name</h3>
        <div className='flex justify-center '>
          <input className='p-1 rounded-tl-md rounded-bl-md text-black' ref={addRef} type="text" placeholder='Name' />
          <button type='submit' onClick={addPlayer} className='mx-1 font-serif text-red-600 bg-slate-700 p-1 rounded-tr-md rounded-br-md'>Decide</button>
        </div>
      </div>
      <div className='mt-10 flex flex-col items-start w-10/12 '>
        <h1>Players:</h1>
        <div className='flex flex-wrap'>
          <PlayersList players={players} />

        </div>
      </div>
    </div>
  )
}

export default RegisterPlayer
