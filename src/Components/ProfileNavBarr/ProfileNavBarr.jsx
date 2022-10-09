import axios from "axios"
import { useNavigate } from "react-router-dom"
import * as S from "./style.js"
import { useContext } from "react"
import appContext from "../../Contexts/AppContext.js"
import { useEffect,useState } from "react"



export default function ProfileNavBarr(){


    const navigate =useNavigate()
    const {setView , setViewNavBarr , setAppear , setDesappear, login }= useContext(appContext)
    function goHome(){
        setAppear(false)
        setDesappear(true)
        setView(false)
        setViewNavBarr("list-outline")
        navigate('/home')
    }

    return (<>
  <S.ContainerNavBarr>
<S.UserName>{login.name}</S.UserName>

<ion-icon onClick={goHome} name="chevron-back-outline"></ion-icon>


  </S.ContainerNavBarr>
    </>)
}