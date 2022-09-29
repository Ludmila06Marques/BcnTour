import Emoji from "../Emojis/Emojis.jsx"
import * as S from "./style.js"


export default function Publish(){
    function goToLocal(){
        console.log("indo pra loc")
    }
    function update(){
        console.log("atualizando")
    }
    function deleting(){
       console.log("deletando")
    }
    return(<>
    <S.ContainerPublish>
        <S.UserInfo>
            <S.User>
          
            <S.UserImage></S.UserImage>

            <S.PublishInfo>
            <S.UserName>Ludzinha</S.UserName>
            <S.Localization onClick={goToLocal} >
                <S.LocalIcon><ion-icon name="location-outline"></ion-icon></S.LocalIcon>
                <S.LocalName>Sagrada familia</S.LocalName>
            </S.Localization>
            </S.PublishInfo>

            </S.User>
            <S.Actions>
            <ion-icon onClick={update}  name="pencil-sharp"></ion-icon>
            <ion-icon onClick={deleting} name="trash-outline"></ion-icon>
            </S.Actions>
          
        </S.UserInfo>
        <S.Photo>
   
        </S.Photo>
        <S.UnderInfo>
     
        <S.Coment>
            <S.Text>OIOIOOIOIOIOIOI</S.Text>
        </S.Coment>
        <S.Rate> <S.Emoji>😀</S.Emoji></S.Rate>
        </S.UnderInfo>
       <Emoji/>
    </S.ContainerPublish>


    </>)
}