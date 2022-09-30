import Logo from "../../Components/Logo/Logo.jsx"
import * as S from "./style"
import { Link } from "react-router-dom"
import appContext from "../../Contexts/AppContext.js"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"



export default function LoginScreen(){
       const navigate= useNavigate()
        const {setEmail , email , setPassword , password , setName , name , setCity , city , setCountry , country , setUrlImage , urlImage}= useContext(appContext)

    async function login(){
        const body={email ,password }       
        console.log(body)
        try {
            const promise= await axios.post('http://localhost:5000/login' , body)  
            console.log(promise.data)  
            navigate("/home")
        } catch (error) {
            console.log(error.response.data)
        }
    }

    return(<>
  
    <Logo/>
    <S.ContainerInputs>
        <S.InputEmail type="text" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} value={email} ></S.InputEmail>
        <S.InputPassword type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} value={password}></S.InputPassword>
        <S.LoginButton>Entrar</S.LoginButton>
        <Link to="/sign-up" >
        <S.SendToSignUp>Nao tem conta?Cadastre-se</S.SendToSignUp>
        </Link>
     </S.ContainerInputs>
    
        
    </>)
}
