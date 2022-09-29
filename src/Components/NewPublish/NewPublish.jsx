import Localization from "../Localization/Localization.jsx"
import * as S from "./style.js"



export default function NewPublish(){

    const optionsArray=[
        {id:1,
            name:"Lazer",
        image:"lazer"
        },
        {id:2,
            name:"Cultura",
        image:"sagrada"
        },
        {id:3,
            name:"Comida",
        image:"paella"
        },  
         {id:4,
            name:"Compras",
        image:"plaza"
        },
        {id:5,
            name:"Eventos",
        image:"font"
        },

    ]
 

    return(<> 
    <S.ContainerPublish>
    <S.Options>
           {optionsArray.map((item,index)=>  <S.Option key={index}  >{item.name}</S.Option>)}
        </S.Options>
        <S.InputComent rows="3" cols="30" wrap="hard" placeholder="Conte como foi sua experiencia"></S.InputComent>
        <S.InputImage placeholder="Compartilhe sua fotinha" ></S.InputImage>
        <S.InputLocal placeholder="Insira a localizacao" ></S.InputLocal>

        <S.Options/>
        <S.RateEmojis>
         <S.Rate>😞</S.Rate>
        <S.Rate>😐</S.Rate>
        <S.Rate>🙂</S.Rate>
        <S.Rate>😀</S.Rate>
        </S.RateEmojis>
      
    </S.ContainerPublish>

    </>)
}