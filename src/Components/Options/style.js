import styled from "styled-components";

export const ContainerOption=styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 230px;
background-size: 400px;
:hover{
  cursor: pointer;
}

`

export const OptionText=styled.h1`
position: relative;
 font-size: 40px;
    color: black;
    font-weight: bold;

`
export const OptionImage=styled.img`
position: absolute;
opacity:0.7;
width: 100%;
height: 230px;
padding: 3px;

`


//display: ${props => props.view ? "flex": "none"};
