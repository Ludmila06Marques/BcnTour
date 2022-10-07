
import styled from "styled-components"


export const Overlay= styled.div`
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
left: 0;
background-color: rgba(0,0,0,.5);
display: flex;
align-items: center;
justify-content: center;
`
export const ContainerModal=styled.div`
width: 300px;
height: 150px;
background-color: white;
position: relative;
border-radius: 8px;
box-shadow: (100,100,111, 0.2) 0px 7px 29px 0px;
padding: 20px;
` 
export const Text=styled.h1`
color: black;
font-size: 20px;
font-weight: bold;

` 

export const Buttons=styled.div`
position: absolute;
bottom: 15px;


` 

export const Yes=styled.button`
width: 100px;
height: 25px;
border: 1px solid red;
border-radius: 8px;
color: red;
font-weight: bold;
:active {
            transform: scale(1.1);
            /* Scaling button to 0.98 to its original size */
            box-shadow: 5px 5px 22px 5px rgba(0, 0, 0, 0.24);
            /* Lowering the shadow */
        }

` 
export const No=styled.div`

position: absolute;
top: 0;
right: 0;

ion-icon{
    font-size: 30px;
}
:active {
            transform: scale(1.1);
            /* Scaling button to 0.98 to its original size */
            box-shadow: 5px 5px 22px 5px rgba(0, 0, 0, 0.24);
            /* Lowering the shadow */
        }

` 