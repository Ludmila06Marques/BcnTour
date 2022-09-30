import { BrowserRouter, Routes, Route } from "react-router-dom"
import appContext from "./Contexts/AppContext.js"
import { useState } from "react"
import LoginScreen from "./Pages/Login/LoginScreen.jsx"
import SignUpScreen from "./Pages/SignUp/SignUpScreen.jsx"
import HomeScreen from "./Pages/Home/HomeScreen.jsx"
import OptionScreen from "./Pages/Option/OptionScreen.jsx"
import ProfileScreen from "./Pages/Profile/ProfileScreen.jsx"
import AboutUsScreen from "./Pages/AboutUs/AboutUsScreen.jsx"
import SettingsScreen from "./Pages/Settings/SettingsScreen.jsx"
import HelpScreen from "./Pages/Help/HelpScreen.jsx"
import PublishScreen from "./Pages/Publish/PublishScreen.jsx"
import VisitsScreen from "./Pages/Visits/VisitsScreen.jsx"

export default function App(){
    
   const [email, setEmail]=useState("")
   const [password, setPassword]=useState("")
   const [name , setName]=useState("")
   const [city , setCity]=useState("")
   const [country , setCountry]=useState("")
   const [urlImage , setUrlImage]=useState("")

    const [token , setToken]=useState()
    //const [login , setLogin]=useState()
    const [view , setView]=useState(false)
    const[viewNavBarr , setViewNavBarr]=useState("list-outline")
    const [appear , setAppear]=useState(false)
    const [desappear , setDesappear]=useState(true)



    return(<>
    
    <appContext.Provider value={{email , setEmail , password , setPassword , appear, setAppear,desappear,setDesappear, view , setView , setViewNavBarr , viewNavBarr, name , setName , token , setToken , name , setName , city  , setCity , country , setCountry , urlImage , setUrlImage  }} >
    <BrowserRouter>
    <Routes>
        
        <Route  path="/" element={<LoginScreen/>}></Route> 
        <Route  path="/sign-up" element={<SignUpScreen/>}></Route> 
        <Route  path="/home" element={<HomeScreen/>}></Route> 
        <Route  path="/profile/:id" element={<ProfileScreen/>}></Route> 
        <Route  path="/settings" element={<SettingsScreen/>}></Route> 
        <Route  path="/aboutUs" element={<AboutUsScreen/>}></Route> 
        <Route  path="/help" element={<HelpScreen/>}></Route> 
        <Route  path="/publish" element={<PublishScreen/>}></Route> 
        <Route  path="/visits" element={<VisitsScreen/>}></Route> 
        

    </Routes>    
    </BrowserRouter>
    </appContext.Provider>
    
    </>)
}
//  <Route  path="/home/:idDaOption" element={<OptionScreen/>}></Route> 