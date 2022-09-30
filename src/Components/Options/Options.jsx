import axios from "axios"
import * as S from "./style.js"

import { useContext, useEffect, useState } from "react"
import appContext from "../../Contexts/AppContext.js"

 function OneOption({id  , name}){
    const { setAppear  , setDesappear  }= useContext(appContext)
   
    function chooseOption(){
        console.log(`To filtrando pelo ${id}`)
      setAppear(true)
      setDesappear(false)
    }
    return(
        
        <S.ContainerOption  onClick={chooseOption}>
              <S.OptionName>{name}</S.OptionName>
     </S.ContainerOption>
    )

}

export default function Options(){
    const { setOptions, options }= useContext(appContext)
  
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

//COmo trocar a cor da opcao sem trocar a cor das outras ?