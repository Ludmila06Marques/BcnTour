import axios from "axios"
import Logo from "../../Components/Logo/Logo.jsx"
import * as S from "./style"
import { Link } from "react-router-dom"
import appContext from "../../Contexts/AppContext.js"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"




export default function LoginScreen(){
       const navigate= useNavigate()
        const {setEmail , email , setPassword , password , setName , name , setCity , city , setCountry , country , setUrlImage , urlImage, setLogin , login , setTheme }= useContext(appContext)

    async function toLogin(){
        const body={email ,password }   
      
       
        try {
            
            const promise= await axios.post('http://localhost:5000/login' , body)  
           
            setLogin(promise.data.user)
            setTheme(promise.data.user.mode)
            navigate("/home")
        } catch (error) {
            console.log(error)
        }
    }
  
    return(<>

    <Logo/>
    <S.ContainerInputs>
        <S.InputEmail type="text" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} value={email} ></S.InputEmail>
        <S.InputPassword type="password" placeholder="Contraseña" onChange={(e)=> setPassword(e.target.value)} value={password}></S.InputPassword>
        <S.LoginButton onClick={toLogin}>Entrar</S.LoginButton>
        <Link to="/sign-up" >
        <S.SendToSignUp>Aun no tienes cuenta ? Haz tu registro</S.SendToSignUp>
        </Link>
     </S.ContainerInputs>
    
        
    </>)
}
