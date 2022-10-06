import styled from "styled-components";



export const UserImage=styled.img`
background-color: white;
border-radius: 50px;
width: 45px;
height: 45px;
`
export const User=styled.div`
display: flex;
align-items: center;
`





 export const UnderInfo=styled.div`
 display: flex;
 `

 export const Emoji=styled.h1`
 font-size: 40px;

 `

 /**---------------------------------------- */

export const ContainerPublish=styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 15px;
margin-bottom: 50px;
width: 100%;
height: 500px;
background-color:white;
box-shadow: 0 0 1em black;
width: 100%;


`
export const Photo=styled.img`
margin-top: 5px;
width: 350px;
height: 350px;
padding: 10px 10px 10px 10px;
//background-color:#cdf4f4;

`
export const Coment=styled.div`
margin-top: 10px;
width: 325px;
height:auto;



`
export const Text=styled.h1`

font-size: 15px;
color: black;
font-weight: bold;
`
export const UserInfo=styled.div`
position: absolute;
bottom: 0;
display: flex;
padding: 10px;
justify-content: space-between;
align-items: center;
width: 100%;
height: 55px;
//background-color: #94A5CB;

`
export const ContainerUserPublish=styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


`

export const UserName=styled.h1`
margin-left: 5px;
font-size: 18px;
font-weight: bold;
color: black;
`


export const Localization=styled.div`
display: flex;
align-items: center;
justify-content: center;

:hover{
  cursor: pointer;
}

`

export const LocalIcon=styled.div`
ion-icon{
  font-size: 20px;
  color: black;
  font-weight: bold;
}
`


export const PublishInfo=styled.div`
display:flex; 
align-items: center;
`
export const LocalName=styled.h1`

font-size: 16px;
color: black;
font-weight: bold;
`
export const Rate=styled.div`
position: absolute;
top: 4px;
left: 5px;
display: flex;
justify-content: center;
align-items: center;



`

export const Actions=styled.div`
position: absolute;
top: -3px;
right: 5px;


`
export const Dots =styled.div`

ion-icon{


font-size: 25px;
color: black;
margin-left: 5px;
:hover{
cursor: pointer;
}}
`
export const Settings= styled.div`
display: ${props => props.appearSettings ? "flex": "none"};

flex-direction: column;
ion-icon{
  
    font-size: 25px;
    color: black;
    margin-left: 5px;
    :hover{
  cursor: pointer;
}
}
`

export const Overlay= styled.div`
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
left: 0;
background-color: rgba(0,0,0,.5);
display: ${props => props.openModal ? "flex": "none"};
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
export const TextModal=styled.h1`
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