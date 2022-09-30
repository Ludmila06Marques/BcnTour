import axios from "axios"
import Logo from "../../Components/Logo/Logo.jsx"
import * as S from "./style"
import { Link } from "react-router-dom"
import appContext from "../../Contexts/AppContext.js"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

export default function LoginScreen(){
 
    return(<>
  
    <Logo/>
    <S.ContainerInputs>
        <S.InputEmail type="text" placeholder="Email"  onChange={(e)=> setEmail(e.target.value)}  value={email}></S.InputEmail>
        <S.InputPassword type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}  value={password}></S.InputPassword>
       
        <S.LoginButton onClick={login} >Entrar</S.LoginButton>
     
        <Link to="/sign-up" >
        <S.SendToSignUp>Nao tem conta?Cadastre-se</S.SendToSignUp>
        </Link>
     </S.ContainerInputs>
    
        
    </>)
}
