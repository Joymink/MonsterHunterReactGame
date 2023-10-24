import React from 'react'
import Players from './Players'

const PlayersList = ({players, highlight}) => {
  
  return (
    players.map( (player, i) =>{
        return <div  className={`flex gap-2 m-3 p-1 rounded-lg bg-gray-600 text-xl font-mono cursor-pointer `}>
          <h1>{i + 1}</h1>
          <Players key={player.id} index={i}  highlight={highlight} player={player}/>
        </div>
    })
  )
}

export default PlayersList
