import { useState, useRef } from "react"


const StartingScreen = () => {
    const [read, setRead] = useState(true);

    const howMany =(number) =>{
        localStorage.setItem("Monster Count", number)
        console.log(number)
    }
    

    const changeRead =()=>{
        setRead(!read)
    }
  return (
    <div className='bg-gray-900 pt-8 flex justify-start items-center flex-col text-white lobster min-h-screen max-h-fit w-screen'>
      <div className="pb-6">
        <h1 className="sm:text-5xl text-2xl text-center">Welcome To Monster Hunter!</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="sm:text-3xl text-xl pb-2">How many monsters?</h2>
        <div className="pb-5 flex justify-center flex-wrap">
                <button onClick={()=>howMany("1")} className="py-1 px-2 m-1 bg-slate-700 rounded-lg">
                    1
                </button>
                <button onClick={()=>howMany("2")} className="py-1 px-2 m-1 bg-slate-700 rounded-lg">
                    2
                </button>
                <button onClick={()=>howMany("3")} className="py-1 px-2 m-1 bg-slate-700 rounded-lg">
                    3
                </button>
                <button onClick={()=>howMany("4")} className="py-1 px-2 m-1 bg-slate-700 rounded-lg">
                    4
                </button>
        </div>
        <div>
            <h2>How Many People?</h2>
            <div>
                <input type="number" placeholder="#"/>
                <button type="submit">Submit</button>
            </div>
            
        </div>
        <div className="p-4 flex flex-col items-center gap-3">
            <h3>Rules:</h3>
            <div className="font-serif text-center max-w-3xl">
                {read?(
                    <p>There was will be two teams: The <i>Monsters</i>, and the <i>Humans</i><br/>
                    The Humans will be assigned a secret location with a role, the secret location is the same for all humans, but their roles may very.
                    The Humans Job will be to find out who are the monsters among them. The Monsters Job is to figure out the secret location without the humans realizing they are a monster.
                    </p>
                ):(
                    <p>
                        There was will be two teams: The <i>Monsters</i>, and the <i>Humans</i><br/>
                    The Humans will be assigned a secret location with a role, the secret location is the same for all humans, but their roles may very.
                    The Humans Job will be to find out who are the monsters among them. The Monsters Job is to figure out the secret location without the humans realizing they are a monster.
                    <br/>
                    <br/>
                    Here is how the game is played:<br/>

                    </p>
                )}
            </div>
            {read? (
                    <button onClick={()=> changeRead()}>Read More...</button>
                ):(
                    <button onClick={()=> changeRead()}>Read Less...</button>
            )}
        </div>
      </div>
    </div>
  )
}

export default StartingScreen
