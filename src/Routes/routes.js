
import StartingScreen from '../pages/StartingScreen'
import RegisterPlayer from '../pages/RegisterPlayer'

const routes = [
    {
        path:"",
        component:StartingScreen,
        name: "Starting Screen"
    },
    {
        path:"/RegisterPlayer",
        component:RegisterPlayer,
        name: "Register Player"
    }
   
]

export default routes
