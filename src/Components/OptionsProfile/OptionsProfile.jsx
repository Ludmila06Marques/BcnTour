import axios from "axios"
import * as S from "./style.js"
import lazer from "../../img/lazer.png"
import sagrada from "../../img/sagradafamilia.jpg"
import paella from "../../img/paella.jpeg"
import plaza from "../../img/plaza_catalunya.jpg"
import font from "../../img/font.jpg"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import appContext from "../../Contexts/AppContext.js"
import { useEffect } from "react"

 function OneOption({id , image , name}){
    const {setView , view , viewNavBarr , setViewNavBarr , setAppear , appear , setDesappear , desappear }= useContext(appContext)
    const navigate=useNavigate()
    function chooseOption(){
        console.log(`To filtrando pelo ${name}`)
      setAppear(true)
      setDesappear(false)
    }
    return(
        
        <S.ContainerOption  onClick={chooseOption}>
              <S.OptionName>{name}</S.OptionName>
     </S.ContainerOption>
    )

}

export default function OptionsProfile(){
   
    const {setView , view , viewNavBarr , setViewNavBarr , setAppear , appear , setDesappear , desappear , setOptions, options }= useContext(appContext)

    useEffect(async ()=>{
          
        try  {
           const promise=await axios.get('http://localhost:5000/option')  
         
         
           setOptions([...promise.data])
           
           
       } catch (error) {
           console.log(error)
       }
   },[options])

  

    return(<>
       <S.Container>
    {options.map( (item , index) =>  
       <OneOption id={item.id} name={item.name} image={item.image} key={index}/> )}
       </S.Container>
    </>)

}
