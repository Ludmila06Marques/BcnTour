import Logo from "../../Components/Logo/Logo.jsx"
import * as S from "./style"
import { Link } from "react-router-dom"

export default function LoginScreen(){
    return(<>
  
    <Logo/>
    <S.ContainerInputs>
        <S.InputEmail type="text" placeholder="Email" ></S.InputEmail>
        <S.InputPassword type="password" placeholder="Password"></S.InputPassword>
        <S.LoginButton>Entrar</S.LoginButton>
        <Link to="/sign-up" >
        <S.SendToSignUp>Nao tem conta?Cadastre-se</S.SendToSignUp>
        </Link>
     </S.ContainerInputs>
    
        
    </>)
}
