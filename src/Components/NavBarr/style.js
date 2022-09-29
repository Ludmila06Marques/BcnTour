import styled from "styled-components";



export const ContainerNavBarr=styled.div`
opacity: 1;
display: flex;
justify-content: space-between;
padding: 15px;
align-items: center;
width: 100%;
height: 58px;
background-color: #94a5cb;

ion-icon{
    font-size: 25px;
    color: white;
}
 `
export const Separe=styled.div`
display: flex;

align-items: center;
:hover{
  cursor: pointer;
}
`

export const SepareTwo=styled.div`
display: flex;
`
export const Back=styled.div`
display: ${props => props.appear ? "flex": "none"};
:hover{
  cursor: pointer;
}
`
export const Out=styled.div`
display: ${props => props.desappear ? "flex": "none"};
:hover{
  cursor: pointer;
}
`