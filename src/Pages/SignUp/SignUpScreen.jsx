
import Logo from "../../Components/Logo/Logo.jsx"
import * as S from "./style"
import { Link } from "react-router-dom"

export default function SignUpScreen(){
    return(<>
  
    <Logo/>
    <S.ContainerInputs>
        <S.InputName type="text" placeholder="Name" ></S.InputName>
        <S.ContainerInputsCity>
            <S.InputCity type="text" placeholder="City" ></S.InputCity>
            <S.InputCountry type="text" placeholder="Country" ></S.InputCountry>
        </S.ContainerInputsCity>
        <S.InputEmail type="text" placeholder="Email" ></S.InputEmail>
        <S.InputPassword type="password" placeholder="Password"></S.InputPassword>
        <S.SignUpButton>Entrar</S.SignUpButton>
        <Link to="/" >
        <S.SendToLogin>Ja tem conta?Entre!</S.SendToLogin>
        </Link>
     </S.ContainerInputs>
    
        
    </>)
}
