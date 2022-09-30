import axios from "axios"
import Logo from "../../Components/Logo/Logo.jsx"
import * as S from "./style"
import { Link } from "react-router-dom"
import appContext from "../../Contexts/AppContext.js"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"


export default function SignUpScreen(){
    const navigate= useNavigate()
        const {setEmail , email , setPassword , password , setName , name , setCity , city , setCountry , country , setUrlImage , urlImage}= useContext(appContext)
    
    async  function  signup(){
        const body={email ,password, name ,city , country , urlImage }       
        console.log(body)
        try {
            const promise= await axios.post('http://localhost:5000/sign-up' , body)  
            console.log(promise.data)  
            navigate("/")
        } catch (error) {
            console.log(error.response.data)
        }
     
    }
  
    return(<>
  
    <Logo/>
    <S.ContainerInputs>
        <S.InputName type="text" placeholder="Name" onChange={(e)=> setName(e.target.value)} value={name}></S.InputName>
        <S.ContainerInputsCity>
            <S.InputCity type="text" placeholder="City"onChange={(e)=> setCity(e.target.value)}  value={city}></S.InputCity>
            <S.InputCountry type="text" placeholder="Country"onChange={(e)=> setCountry(e.target.value)}  value={country} ></S.InputCountry>
        </S.ContainerInputsCity>
        <S.InputImage type="url" placeholder="Sua melhor foto"onChange={(e)=> setUrlImage(e.target.value)}  value={urlImage}></S.InputImage>
        <S.InputEmail type="text" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}  value={email} ></S.InputEmail>
        <S.InputPassword type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}  value={password}></S.InputPassword>
       
        <S.SignUpButton onClick={signup} >Cadastrar</S.SignUpButton>
       
        <Link to="/" >
        <S.SendToLogin>Ja tem conta?Entre!</S.SendToLogin>
        </Link>
     </S.ContainerInputs>
    
        
    </>)
}
