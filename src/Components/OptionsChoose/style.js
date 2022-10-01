import styled from "styled-components";

export const ContainerOption=styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
margin: 5px;

:hover{
  cursor: pointer;
}


`

export const OptionText=styled.h1`

 font-size: 20px;
    color: black;
    font-weight: bold;

`
export const Container=styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 10px;
align-items: center;
width: 100%;

`
export const OptionName=styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-right: 2px;
margin-top: 2px;
border-radius: 8px;
width: 95px;
height: 50px;
color: #94a5cb;
font-weight: bold;
border: solid 1px #94a5cb;
`

//display: ${props => props.view ? "flex": "none"};
