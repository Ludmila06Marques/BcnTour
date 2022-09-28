import * as S from "./style.js"
import { Link } from "react-router-dom"
import { useState } from "react"
import appContext from "../../Contexts/AppContext.js"
import { useContext } from "react"


export default function NavBarr(){
      
    const {setView , view , viewNavBarr , setViewNavBarr }= useContext(appContext)

   
    function openCloseSideBarr(){
        console.log("oi")
        console.log(view)
        console.log(viewNavBarr)
        if(view === false && viewNavBarr==="list-outline"){
            setView(true)
            setViewNavBarr("return-down-back-outline")
        }else{
            setView(false)
            setViewNavBarr("list-outline")
        }
        
    }
   
    return(<>
    <S.ContainerNavBarr>
    <ion-icon onClick={openCloseSideBarr} name={viewNavBarr}></ion-icon>
    <Link to="/" >
    <ion-icon name="exit-outline"></ion-icon>
    </Link>
    </S.ContainerNavBarr>
    </>)
}