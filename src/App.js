import { BrowserRouter, Routes, Route } from "react-router-dom"
import appContext from "./Contexts/AppContext.js"
import { useState } from "react"
import LoginScreen from "./Pages/Login/LoginScreen.jsx"
import SignUpScreen from "./Pages/SignUp/SignUpScreen.jsx"
import HomeScreen from "./Pages/Home/HomeScreen.jsx"
import OptionScreen from "./Pages/Option/OptionScreen.jsx"
import ChooseScreen from "./Pages/Choose/ChooseScreen.jsx"
import ProfileScreen from "./Pages/Profile/ProfileScreen.jsx"
import AboutUsScreen from "./Pages/AboutUsScreen.js"
import SettingsScreen from "./Pages/SettingsScreen.js"
import HelpScreen from "./Pages/HelpScreen.js"

export default function App(){
    
    const [email, setEmail]=useState("")
   const [password, setPassword]=useState("")
   const [name , setName]=useState("")
    const [token , setToken]=useState()
    //const [login , setLogin]=useState()
    const [view , setView]=useState(false)
    const[viewNavBarr , setViewNavBarr]=useState("list-outline")
    //const [home  , setHome]=useState("")
    const [appear , setAppear]=useState(false)
    const [desappear , setDesappear]=useState(true)



    return(<>
    
    <appContext.Provider value={{email , setEmail , password , setPassword , appear, setAppear,desappear,setDesappear, view , setView , setViewNavBarr , viewNavBarr, name , setName , token , setToken  }} >
    <BrowserRouter>
    <Routes>
        
        <Route  path="/" element={<LoginScreen/>}></Route> 
        <Route  path="/sign-up" element={<SignUpScreen/>}></Route> 
        <Route  path="/home" element={<HomeScreen/>}></Route> 
        <Route  path="/home/:idDaOption" element={<OptionScreen/>}></Route> 
        <Route  path="/home/:idDaOption/:idDaChoose" element={<ChooseScreen/>}></Route> 
        <Route  path="/profile" element={<ProfileScreen/>}></Route> 
        <Route  path="/settings" element={<SettingsScreen/>}></Route> 
        <Route  path="/aboutUs" element={<AboutUsScreen/>}></Route> 
        <Route  path="/help" element={<HelpScreen/>}></Route> 
        

    </Routes>    
    </BrowserRouter>
    </appContext.Provider>
    
    </>)
}