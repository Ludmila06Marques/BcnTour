import axios from "axios"
import Logo from "../../Components/Logo/Logo.jsx"
import * as S from "./style"
import { Link } from "react-router-dom"
import appContext from "../../Contexts/AppContext.js"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Select from 'react-select'
import { useState } from "react"


export default function SignUpScreen(){

    const navigate= useNavigate()
        const {setEmail , email , setPassword , password , setName , name , setCountry , country , setUrlImage , urlImage  , countries , setCountries}= useContext(appContext)
    
    async  function  signup(){
        const body={email ,password, name  , country , urlImage }       
        console.log(body)
        try {
            const promise= await axios.post('http://localhost:5000/sign-up' , body)  
            console.log(promise.data)  
            navigate("/")
        } catch (error) {
            console.log(error.response.data)
        }
     
    }
 
   useEffect(async ()=>{
    try {
        const promise= await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/paises')  
   
      setCountries(promise.data)
    } catch (error) {
        console.log(error)
    }

   },[countries])

    const selectCountry=(country)=>{
        setCountry(country)
    }
    
    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          borderBottom: '1px dotted pink',
          color:'blue',
          padding: 20,
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
        
            return { ...provided, opacity, transition };
          }
       
      }
    return(<>
  
    <Logo  />
    <S.ContainerInputs>
        <S.InputName type="text" placeholder="Name" onChange={(e)=> setName(e.target.value)} value={name}></S.InputName>


        <S.ContainerInputsCity>
            
            <S.ContainerSelect>
            <Select
            defaultValue={{ label:"De onde voce é?" , value:"empty"}}
            options= {countries === undefined ? "" : countries.map(e=>({label:e.nome, value:e.value}))}
            onChange={selectCountry}
          styles={customStyles}
        
            />
            </S.ContainerSelect>
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


      
