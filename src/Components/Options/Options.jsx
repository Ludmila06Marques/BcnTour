import axios from "axios"
import * as S from "./style.js"

import { useContext, useEffect, useState } from "react"
import appContext from "../../Contexts/AppContext.js"

function OneOption({id  , name , setPublishes , publishes}){
    const { setAppear  , setDesappear   }= useContext(appContext)
    
  
   

    async function chooseOption(){
        setPublishes([])
   
          
        try  {
            const promise=await axios.get(`http://localhost:5000/publishOption/${id}`)  
          
          console.log(promise.data)
            setPublishes(promise.data)
          
            
        } catch (error) {
            console.log(error)
        }

      setAppear(true)
      setDesappear(false)
    }

  

   
    return(
        
        <S.ContainerOption  onClick={chooseOption}>
              <S.OptionName>{name}</S.OptionName>
     </S.ContainerOption>
    )

}


  export default function Options({setPublishes , publishes}){
    const { setOptions, options }= useContext(appContext)
  
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
       <OneOption id={item.id} name={item.name} image={item.image} key={index} setPublishes={setPublishes} publishes={publishes} /> )}
       </S.Container>
    </>)

}

//COmo trocar a cor da opcao sem trocar a cor das outras ?