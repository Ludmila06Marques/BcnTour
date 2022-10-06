import axios from "axios"
import * as S from "./style.js"

import { useContext, useEffect, useState } from "react"
import appContext from "../../Contexts/AppContext.js"

function OneOption({id  , name , setPublishes , publishes}){
 
    const {  choose , setChoose  }= useContext(appContext)
    
  
    return(
        
        <S.ContainerOption   onClick={()=> setChoose(`${id}`)} value={choose}>
              <S.OptionName>{name}</S.OptionName>
     </S.ContainerOption>
    )

}


  export default function Options({setPublishes , publishes}){
    const { setOptions, options,choose}= useContext(appContext)
  
    useEffect(async ()=>{
          
         try  {
            const promise=await axios.get('http://localhost:5000/option')  
          
          
            setOptions([...promise.data])
            
            
        } catch (error) {
            console.log(error)
        }
    },[])



    return(<>
    <S.Actividad>Actividad:${choose}</S.Actividad>
       <S.Container>
    {options.map( (item , index) =>  
       <OneOption id={item.id} name={item.name} image={item.image} key={index} setPublishes={setPublishes} publishes={publishes} item={item}/> )}
       </S.Container>
    </>)

}

//COmo trocar a cor da opcao sem trocar a cor das outras ?