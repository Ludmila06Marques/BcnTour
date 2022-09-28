import * as S from "./style.js"
import lazer from "../../img/lazer.png"
import sagrada from "../../img/sagradafamilia.jpg"
import paella from "../../img/paella.jpeg"
import plaza from "../../img/plaza_catalunya.jpg"
import font from "../../img/font.jpg"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

 function OneOption({id , image , name}){
    const navigate=useNavigate()
    function chooseOption(){
       
      navigate(`/home/${id}`)
    }
    return(
        <S.ContainerOption>
    
        <S.OptionImage onClick={chooseOption} src={image} ></S.OptionImage>
        
              <S.OptionText>{name}</S.OptionText>
     </S.ContainerOption>
    )

}

export default function Options(){
   
    const [choose , setChoose]=useState()

    const optionsArray=[
        {id:1,
            name:"Lazer",
        image:lazer
        },
        {id:2,
            name:"Cultura",
        image:sagrada
        },
        {id:3,
            name:"Comida",
        image:paella
        },  
         {id:4,
            name:"Compras",
        image:plaza
        },
        {id:5,
            name:"Eventos",
        image:font
        },

    ]

  

    return(<>
       
    {optionsArray.map( (item , index) =>  
       <OneOption id={item.id} name={item.name} image={item.image} key={index}/> )}
       
    </>)

}
