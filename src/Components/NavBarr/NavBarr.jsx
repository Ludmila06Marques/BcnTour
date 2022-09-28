import * as S from "./style.js"
import { Link } from "react-router-dom"
import { useState } from "react"
import appContext from "../../Contexts/AppContext.js"
import { useContext } from "react"


export default function NavBarr(){
      
    const {setView , view }= useContext(appContext)


    function openSideBarr(){
        console.log('ta dando')
        setView(true)
    }
   
    return(<>
    <S.ContainerNavBarr>
    <ion-icon onClick={openSideBarr} name="list-outline"></ion-icon>
    <Link to="/" >
    <ion-icon name="exit-outline"></ion-icon>
    </Link>
    </S.ContainerNavBarr>
    </>)
}