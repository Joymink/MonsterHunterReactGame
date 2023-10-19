
import StartingScreen from '../pages/StartingScreen'
import RegisterPlayer from '../pages/RegisterPlayer'
import Monster from '../pages/Monster'
import Human from '../pages/Human'

const routes = [
    {
        path:"/StartingScreen",
        component:StartingScreen,
        name: "Starting Screen"
    },
    {
        path:"",
        component:RegisterPlayer,
        name: "Register Player"
    },
    {
        path:"/Monster",
        component:Monster,
        name: "Monster"
    },
    {
        path:"/Human",
        component:Human,
        name: "Human"
    },
    {
        path:"",
        component:StartingScreen,
        name: "Starting Screen"
    },
]

export default routes
