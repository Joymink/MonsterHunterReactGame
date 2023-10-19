import React from 'react'
import Players from './Players'

const PlayersList = ({players}) => {
  return (
    players.map( (player, i) =>{
        return <Players key={i} index={i} name={player.name} />
    })
  )
}

export default PlayersList
