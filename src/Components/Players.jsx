import React, {useState} from 'react'

const Players = ({player, highlight}) => {
  const [check, setCheck] = useState(false)
  
  function change(){
    setCheck(!check)
    highlight(player.id)
  }
  return (
    <div onClick={()=>change()} className={`flex gap-2 ${check&& 'text-red-500'}`}>
      <p>{player.name}</p>
      
    </div>
  )
}

export default Players
