import styled from "styled-components";


export const ContainerSelect=styled.div`
width: 256px;
margin-bottom:10px;
border-radius: 8px;
border: ${({theme})=> theme.borderOption};
`

export const InputCity=styled.input`

width:123px;
border-radius: 8px;
border: ${({theme})=> theme.borderOption};
padding: 10px;
margin-right: 2px;
`

export const InputCountry=styled.input`
margin-left: 5px;
width:123px;
height: 45px;
border-radius: 8px;
border: ${({theme})=> theme.borderOption};
padding: 10px;
margin-bottom: 10px;
`
export const ContainerInputsCity=styled.div`

`

export const InputName=styled.input`
width: 256px;
height: 45px;
margin-bottom: 10px;
border-radius: 8px;
border: ${({theme})=> theme.borderOption};
padding: 10px;
`
export const InputEmail=styled.input`
width: 256px;
height: 45px;
margin-bottom: 10px;
border-radius: 8px;
border: ${({theme})=> theme.borderOption};
padding: 10px;

`
export const InputPassword=styled.input`
width: 256px;
height: 45px;
border-radius: 8px;
border-radius: 8px;
border: ${({theme})=> theme.borderOption};
padding: 10px;
`
export const InputImage=styled.input`
width: 256px;
height: 45px;
border-radius: 8px;
margin-bottom: 10px;
border: ${({theme})=> theme.borderOption};
padding: 10px;
`
export const ContainerInputs=styled.div`
display:${props => props.view ? "flex": "none"};
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 100px;

`

export const SignUpButton = styled.button`
width: 256px;
height: 45px;
margin-top: 10px;
border-radius: 8px;
border: none;
background-color:${({theme})=> theme.colorBlack};
margin-bottom:7px;
color:${({theme})=> theme.colorSignUp};
:hover{
  cursor: pointer;
}
:active {
            transform: scale(1.1);
            /* Scaling button to 0.98 to its original size */
            box-shadow: 5px 5px 22px 5px rgba(0, 0, 0, 0.24);
            /* Lowering the shadow */
        }
`


export const Ask=styled.div`
display: ${props => props.view ? "none": "flex"};

flex-direction: column;
justify-content: center;
align-items: center;

`
export const AskEdit=styled.h1`
font-size: 30px;
color:${({theme})=> theme.colorSignUp};


`
export const EditButtons=styled.div`
display: flex;
justify-content: center;
align-items: center;


`
export const OptionEdit=styled.button`
margin: 10px;
width: 90px;
height: 50px;
font-size: 15px;
border-radius: 8px;
background-color: ${props => props.color ? "#D2C4E2": "transparent"};
color: ${({theme})=> theme.colorPurple};
border: ${({theme})=> theme.borderOption};
:active {
            transform: scale(1.1);
            /* Scaling button to 0.98 to its original size */
            box-shadow: 5px 5px 22px 5px rgba(0, 0, 0, 0.24);
            /* Lowering the shadow */
        }

`
export const Photo=styled.div`

img{
  width: 150px;
height: auto;
}

`