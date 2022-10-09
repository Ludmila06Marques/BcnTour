import axios from "axios"
import * as S from "./style.js"

import { useContext, useEffect, useState } from "react"
import appContext from "../../Contexts/AppContext.js"

function OneOption({id  , name , setPublishes , publishes}){
 
    const {  choose , setChoose, setNameOption }= useContext(appContext)
    
   function chooseAnOPtion(){
    setChoose(id)
    setNameOption(name)
    
   }
  
    return(
        
        <S.ContainerOption   onClick={chooseAnOPtion} value={choose}>
              <S.OptionName>{name}</S.OptionName>
     </S.ContainerOption>
    )

}

function ContainerOption({setPublishes , publishes}){
    const { setOptions, options}= useContext(appContext)
  
  
    useEffect(async ()=>{
          
         try  {
            const promise=await axios.get('http://localhost:5000/option')  
          
          
            setOptions([...promise.data])
            
            
        } catch (error) {
            console.log(error)
        }
    },[])


    return(<>
        <S.Container>
    {options.map( (item , index) =>  
       <OneOption id={item.id} name={item.name} image={item.image} key={index} setPublishes={setPublishes} publishes={publishes} item={item}/> )}
       </S.Container>
    </>)
}


  export default function Options(){
   

    const {  nameOption}= useContext(appContext)
    return(<>
  
    <S.Actividad>Cual fue tu actividad?: {nameOption} </S.Actividad>

    <ContainerOption/>
   
    </>)

}

//COmo trocar a cor da opcao sem trocar a cor das outras ?