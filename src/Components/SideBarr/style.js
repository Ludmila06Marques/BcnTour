import styled from "styled-components";

export const ContainerSideBarr=styled.div`
position: fixed;
display: ${props => props.view ? "flex": "none"};
z-index: 2;

height: 100vh;
width: 150px;
background-color: #94a5cb ;
ion-icon{
    font-size: 25px;
    color: white;
    margin-top: 18px;
    margin-left: 5px;
}
`