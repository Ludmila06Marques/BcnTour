import { BrowserRouter, Routes, Route } from "react-router-dom"
import appContext from "./Contexts/AppContext.js"
import { useState } from "react"
import LoginScreen from "./Pages/Login/LoginScreen.jsx"
import SignUpScreen from "./Pages/SignUp/SignUpScreen.jsx"
import HomeScreen from "./Pages/HomeScreen.js"
import OptionScreen from "./Pages/OptionScreen.js"
import ChooseScreen from "./Pages/ChooseScreen.js"

export default function App(){
    
    const [email, setEmail]=useState("")
   const [password, setPassword]=useState("")
   const [name , setName]=useState("")
    const [token , setToken]=useState()
    //const [login , setLogin]=useState()
    //const [view , setView]=useState("password")
    //const [home  , setHome]=useState("")



    return(<>
    
    <appContext.Provider value={{email , setEmail , password , setPassword , name , setName , token , setToken  }} >
    <BrowserRouter>
    <Routes>
        
        <Route  path="/" element={<LoginScreen/>}></Route> 
        <Route  path="/sign-up" element={<SignUpScreen/>}></Route> 
        <Route  path="/home" element={<HomeScreen/>}></Route> 
        <Route  path="/home/:idDaOption" element={<OptionScreen/>}></Route> 
        <Route  path="/home/:idDaChoose" element={<ChooseScreen/>}></Route> 
        
        

    </Routes>    
    </BrowserRouter>
    </appContext.Provider>
    
    </>)
}