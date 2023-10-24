import { useState, useRef } from "react"
import { rules } from "../data/gameRules";

const StartingScreen = () => {
    const [read, setRead] = useState(true);
    const [confirm, setConfirm] = useState(false);
    const [count, setCount] = useState(4);
    const [monster, setMonster] =useState("0");
    const [monsters,setMonsters] =useState( [] );
    const countM = localStorage.getItem("Monster Count");
    const monsterCount = Number(localStorage.getItem("Monster Count"))
    const playerCounter = Number(localStorage.getItem("Player Count"))
    let monsterNums;

    const howMany =(number) =>{
        setMonster(number)
        localStorage.setItem("Monster Count", number)
    }

    function randomNums(maxNum, repeat){
        let nums = [];
        for(let i =0; i<repeat; i++){
          let temp = Math.floor(Math.random()*maxNum +1);
          while(nums.includes(temp)){
            temp =Math.floor(Math.random()*maxNum +1)
          }
          nums.push(temp)
        }
        let final = nums.sort(function(a, b){return a-b});
        return final; 
    }

    const playerCount = (number) =>{
        if(number>=4 && monster && number/monster >2){
            localStorage.setItem("Player Count", number)
            setConfirm(true);
        }
        else if (!monster){
            alert('You need to select a monster count')
        }
        else if (number<4) {
            alert('Player Count must be greater than 3')
        }
        else {
            alert('You need to have more than double the amount of humans as Monsters')
        }
        
    }

    const locationFinder = async () =>{
        const y = Math.floor(Math.random()*29)
        localStorage.setItem("Secret Location", y);
        let x = await randomNums(playerCounter,monsterCount);
        localStorage.setItem("Monster Numbers", x);
        setMonsters(x);
        monsterNums =x;
        console.log(localStorage.getItem("Monster Numbers"));
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
        <div className=" flex justify-center flex-wrap">
                <button onClick={()=>{howMany("1"); }} className={`py-1 px-2 m-1 bg-slate-700 rounded-lg ${monster==='1'? "bg-red-600":""}`}>
                    1
                </button>
                <button onClick={()=>{howMany("2")}} className={`py-1 px-2 m-1 bg-slate-700 rounded-lg ${monster==='2'? "bg-red-600":""}`}>
                    2
                </button>
                <button onClick={()=>{howMany("3")}} className={`py-1 px-2 m-1 bg-slate-700 rounded-lg ${monster==='3'? "bg-red-600":""}`}>
                    3
                </button>
                <button onClick={()=>{howMany("4")}} className={`py-1 px-2 m-1 bg-slate-700 rounded-lg ${monster==='4'? "bg-red-600":""}`}>
                    4
                </button>
        </div>
        <div className="mb-4">{countM}</div>
        <div className="flex flex-col  justify-center">
            <h2 className="text-xl">How Many People?</h2>
            <div className="flex flex-col justify-center items-center gap-2 mt-4">
                <input className="w-12 text-sm text-black" value={count} onChange={(e)=>{
                    setCount(e.target.value)
                }} type="number" placeholder="#"/>
                <button onClick={()=>playerCount(count)} className="py-1 px-2 m-1 bg-slate-700 rounded-lg">Confirm Settings</button>
                <div className={confirm? 'm-2' : 'hidden'}>
                    <div className="flex w-24 justify-between">
                      <p>Players: </p>
                      <p>{count} </p>  
                    </div>
                    <div className="flex w-24 justify-between">
                      <p>Monster(s): </p>
                      <p>{monster} </p>  
                    </div>
                </div>
                <a href="#/RegisterPlayer" onClick={()=>locationFinder()} className={confirm?`bg-green-600 px-2 rounded-lg mt-2`: "hidden"} >Start The Game</a>
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
                    <br />
                    {rules}
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
