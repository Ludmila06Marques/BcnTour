import * as S from "./style.js"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Switch from "../Swich/Switch.jsx"


export default function OptionsToSetting({login}){
   
    const navigate=useNavigate()
   async function deleteAcount(){
        console.log(login.id)

        try {
            await axios.delete(`http://localhost:5000/user/${login.id}` )
          
            navigate('/')
       } catch (error) {
           alert(error)
       }
      
    }
    return(<>
    
        <S.ContainerOptions>
        <S.Icon><ion-icon name="pencil-outline"></ion-icon></S.Icon>
            <S.Option>Editar perfil</S.Option>
        </S.ContainerOptions>

        <S.ContainerOptions>
        <S.Icon><ion-icon name="moon"></ion-icon></S.Icon>
            <S.Option>Modo escuro</S.Option>
            <Switch/>
        </S.ContainerOptions>

        <S.ContainerOptions onClick={deleteAcount} >
            <S.Icon><ion-icon name="trash-outline"></ion-icon></S.Icon>
            <S.Option>Deletar conta</S.Option>
         </S.ContainerOptions>
    </>)
}