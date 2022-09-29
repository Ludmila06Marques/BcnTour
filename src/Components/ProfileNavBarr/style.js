import styled from "styled-components"

export const ContainerNavBarr=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 58px;
background-color: #94a5cb;
padding: 10px;
ion-icon{
    font-size: 30px;
    color: white;
    margin-left:10px;
    :hover{
  cursor: pointer;
}
}



`

export const  UserName=styled.h1`
font-size: 20px;
color: white;
font-weight: bold;
`