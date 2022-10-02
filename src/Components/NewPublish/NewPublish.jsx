import {Autocomplete } from '@react-google-maps/api';
import * as S from "./style.js"
import OptionsChoose from "../../Components/OptionsChoose/OptionsChoose.jsx"
import appContext from "../../Contexts/AppContext.js"
import { useContext, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
 





function InsertButton({coment , urlImage , rateNote , localization}){
 const    navigate=useNavigate()
    const {choose , login}=useContext(appContext)
 async  function publicar(){
        const body={
          coment,
          urlImage,
          rateNote,
          localization,
          optionId:choose,
          userId:login.id
        }
       // const headers={
         //   headers:{
           // Authorization:`Bearer ${token}`
           // }
        //}
     console.log(body)
        try {
             await axios.post('https://localhost:5000/publish' , body )
          
             navigate('/home')
        } catch (error) {
            alert(error)
        }
    }
   

    return(<>
    <S.Container onClick={publicar} >Publicar</S.Container>
    </>)
}



export default function NewPublish(){
    
   

     const [coment , setComent]=useState("")
     const [urlImage , setUrlImage]=useState("")
     const [rateNote , setRateNote]=useState("")
     const [localization , seLlocalization]=useState("")
    

    const {publishes , setPublishes  }=useContext(appContext)

    return(<> 
    <S.ContainerPublish>
    <OptionsChoose publishes={publishes} setPublishes={setPublishes} />

        <S.InputComent rows="3" cols="30" wrap="hard" placeholder="Conte como foi sua experiencia"  onChange={(e)=> setComent(e.target.value)} value={coment} ></S.InputComent>
        <S.InputImage placeholder="Compartilhe sua fotinha"  onChange={(e)=> setUrlImage(e.target.value)} value={urlImage}  ></S.InputImage>
     


     
        <S.Options/>
        <S.RateEmojis>
         <S.Rate onClick={()=> setRateNote("1")} value={rateNote} >😞</S.Rate>
        <S.Rate  onClick={()=> setRateNote("2")}  value={rateNote} >😐</S.Rate>
        <S.Rate onClick={()=> setRateNote("3")}  value={rateNote} >🙂</S.Rate>
        <S.Rate  onClick={()=> setRateNote("4")} value={rateNote}  >😀</S.Rate>
        </S.RateEmojis>
      
      <InsertButton coment={coment} urlImage={urlImage} localization={localization}  rateNote={rateNote} />
    </S.ContainerPublish>

    </>)
}
//Como trocar a cor da opcao quando clico sem trocar a cor de todas ?