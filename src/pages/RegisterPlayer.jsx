import React, {useState, useRef, useEffect} from 'react'
import PlayersList from '../Components/PlayersList';
import {v4 as uuidv4} from 'uuid';
import Human from '../Components/Human';
import Monster from '../Components/Monster';



const RegisterPlayer = (props) => {
  //getting the count of monsters out of the local storage
  const [players, setPlayers] =useState( [] );
  const [monster, setMonster] = useState( [] );
  const [modal, setModal] = useState(false);
  const addRef = useRef();
  const [open, setOpen] =useState(0);
  const monsters = localStorage.getItem("Monster Numbers").split(",").map((nums)=>{
     return Number(nums)
  });
  
  
  

  function addPlayer(){
    const player = addRef.current.value;
    if(player){
      setPlayers(oldPlayers =>{
        return [...oldPlayers, {id: uuidv4(), name:player, check:false}]
      })
      addRef.current.value = null;
    }
    else{
      return null
    }
    decideFate(player);
    let pList= JSON.stringify(players)
    localStorage.setItem("Player List", pList);
  }
  

  function highlight(id){
    const stuff = [...players];
    const player = stuff.find(specificPlayer => specificPlayer.id === id);
    player.check = !player.check;
    setPlayers(stuff)
    let pList= JSON.stringify(players)
    localStorage.setItem("Player List", pList);
  }

  function deletePlayers(){
    const newPlayers = players.filter(player=> !player.check)
    setPlayers(newPlayers)
    let pList= JSON.stringify(players)
    localStorage.setItem("Player List", pList);
  }
  function decideFate(name){
    if(monsters.includes(players.length +1)){
      setMonster(oldMonster =>{
        return [...oldMonster, {number:(players.length+1), name: name}]
      })
      setOpen(2);
    }
    else{
      setOpen(1);
    }
  }
  function close(){
    setOpen(0);
  }
  console.log(monsters)
  


  return (
    <div  className='flex flex-col items-center justify-start bg-gray-900 min-h-screen w-screen text-white lobster'>
      <div className={modal?"hidden":'flex flex-col items-center'}>

      
      <div className='mt-10 '>
        <h1 className='sm:text-5xl text-2xl text-center'>Enter Your Name to Decide Your <i className='text-red-600 animate-pulse mr-3'>Fate</i></h1>
      </div>
      <div className='mt-4'>
        <h2 className='sm:text-3xl text-xl text-center'>Will you be a Human or a Monster?</h2>
      </div>
      <div className={open===0?'mt-4 flex flex-col justify-center items-center gap-2':"hidden"}>
        <h3 className='sm:text-2xl text-lg text-center'>Enter Your Name</h3>
        <div className='flex justify-center '>
          <input className='p-1 rounded-tl-md rounded-bl-md text-black' onKeyDown={e =>{
            if(e.key === "Enter"){
              addPlayer();
              
            }
          }} ref={addRef} type="text" placeholder='Name' />
          <button type='submit'  onClick={()=>{addPlayer();  }} className='mx-1 font-serif text-red-600 bg-slate-700 p-1 rounded-tr-md rounded-br-md'>Decide</button>
        </div>
      </div>
        {open===1?(
          <div className='flex flex-col items-center mt-10 bg-gray-500 py-4 gap-3 rounded-xl'>
            <div className='text-2xl text-center'>
              Player Number: {players.length }
              <p>{players[players.length-1].name}</p>
            </div>
            <Human />  
            <button onClick={()=>close()} className='bg-green-500 px-2 py-1 rounded-lg'>Continue</button></div>
        ):open===2?(
          <div className='flex flex-col items-center mt-10 bg-gray-500 py-4 gap-3 rounded-xl'>
            <div className='text-2xl text-center'>
              Player Number: {players.length}
              <p>{players[players.length-1].name}</p>
            </div>
            <Monster monsters ={monster}/> 
            <button onClick={()=>close()} className='bg-green-500 px-2 py-1 rounded-lg'>Continue</button></div>
        ):(
          <div></div>
        )}
        </div>
        
        




      {/* Player List Below */}
      <div className={modal?"hidden":`mt-10 flex flex-col items-start justify-center w-10/12 max-w-3xl`}>
        <h1>Players: {players.length}</h1>
        <div className='flex flex-wrap'>
          <PlayersList players={players} highlight={highlight}/>

        </div>
        <button onClick={()=>setModal(true)} className='bg-red-900 px-2 py-1 rounded-xl mt-10 hover:bg-red-800'>Delete</button>
        <a href="/" className='mt-2 font-serif text-xs'>Go Back</a>
      </div>
      <div id='modal' className={modal?"bg-white flex flex-col absolute top-1/3 font-mono rounded-2xl text-black p-5":"hidden"}>
        <div className='font-bold text-2xl' >
          Confirm:
        </div>
        <div className='text-lg'>
          Are you sure you want to delete these players? It might mess up who becomes a monster.
        </div>
        <div className='flex gap-10 mt-4'>
          <button className='bg-red-500 px-2 rounded-lg font-extrabold hover:bg-red-300' onClick={()=>setModal(false)} >No</button>
          <button className='bg-green-500 px-2 rounded-lg font-extrabold hover:bg-green-300' onClick={()=>{deletePlayers(); setModal(false)}}>Yes</button>
        </div>
      </div>
    </div>
  )
}

export default RegisterPlayer
