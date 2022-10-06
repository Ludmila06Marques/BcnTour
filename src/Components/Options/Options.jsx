import axios from "axios"
import * as S from "./style.js"

import { useContext, useEffect, useState } from "react"
import appContext from "../../Contexts/AppContext.js"

function OneOption({id  , name , setPublishes}){

    
  
   

    async function chooseOption(){
        setPublishes([])
  
          
        try  {
            const promise=await axios.get(`http://localhost:5000/publishOption/${id}`)  
          
          console.log(promise.data)
            setPublishes(promise.data)
          
            
        } catch (error) {
            console.log(error)
        }

   
    }

  

   
    return(
        
        <S.ContainerOption  onClick={chooseOption} >
              <S.OptionName  >{name}</S.OptionName>
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

      async function getAll(){
        setPublishes([])
        try {

            const promise= await axios.get(`http://localhost:5000/publish` )  
     
          setPublishes([...promise.data])
         
        
        } catch (error) {
      }}

    return(<>
       <S.Container>
    {options.map( (item , index) =>  
       <OneOption id={item.id} name={item.name} image={item.image} key={index} index={index} setPublishes={setPublishes} publishes={publishes} /> )}
          <S.ContainerOption  onClick={getAll} >
              <S.OptionName  >Todas</S.OptionName>
     </S.ContainerOption>
       </S.Container>
    </>)

}

//COmo trocar a cor da opcao sem trocar a cor das outras ?