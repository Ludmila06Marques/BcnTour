import styled from "styled-components";

export const InputEmail=styled.input`
width: 256px;
height: 45px;
margin-bottom: 10px;
border-radius: 8px;
border: solid 1px #94a5cb;
padding: 10px;

`
export const InputPassword=styled.input`
width: 256px;
height: 45px;
border-radius: 8px;
border-radius: 8px;
border: solid 1px #94a5cb;
padding: 10px;
`
export const ContainerInputs=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const LoginButton = styled.button`
width: 256px;
height: 45px;
margin-top: 10px;
border-radius: 8px;
background-color: #94a5cb;
margin-bottom:7px;
color: white;
:hover{
  cursor: pointer;
}
`
export const SendToSignUp=styled.h1`

text-decoration: underline;
color: #94a5cc;
font-weight: bold;
:hover{
  cursor: pointer;
}
`