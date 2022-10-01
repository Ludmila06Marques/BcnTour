import axios from "axios"
import { LoginButton } from "../../Pages/Login/style.js"
import * as S from "./style.js"
import appContext from "../../Contexts/AppContext.js"
import { useContext, useEffect, useState } from "react"



export default function ProfileInfo({id}){
 
  const [info ,setInfo]=useState([])

  useEffect(async ()=>{
    try {
            
      const promise= await axios.get(`http://localhost:5000/user/${id}` )  
 
     setInfo(promise.data)
   
  
  } catch (error) {
      console.log(error)
  }
  },[])

    return(<>
    <S.ProfileContainer>
      <S.GroupInfo>
      <S.UserImage src={info.urlImage} alt="User photo"/>
      <S.InfoCity>
      {info.country}
        </S.InfoCity>
     
        </S.GroupInfo>
        <S.Info>
          
        </S.Info>
    </S.ProfileContainer>
    </>)
}