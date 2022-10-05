import * as S from "./style.js"
import axios from "axios"
import Emoji from "../Emojis/Emojis.jsx"
import { useNavigate } from "react-router-dom"

export default function Publish({coment , urlImage ,rateNote , localizationName , user  , login ,id , latitude , longitude }){

   
    const navigate=useNavigate()

    function update(){
        console.log("atualizando")
    }
   async function deleting(){

        try {
            await axios.delete(`http://localhost:5000/publish/${id}` )
        
          
       } catch (error) {
           alert(error)
       }
     
    }
    function goToProfile(){
     navigate(`/profile/${user.id}`)
    }


   

    return(<>
  <S.ContainerPublish>
        <S.UserInfo>
            <S.User>
          
            <S.UserImage src={user.urlImage}/>

            <S.PublishInfo>
              
            <S.UserName onClick={goToProfile} >{user.name}</S.UserName>
            <a href={`https://maps.google.com/?q=${latitude},${longitude}`} target='_blank' >
            <S.Localization  >
                <S.LocalIcon><ion-icon name="location-outline"></ion-icon></S.LocalIcon>
                <S.LocalName>{localizationName}</S.LocalName>
            </S.Localization>
            </a>
            </S.PublishInfo>

            </S.User>
           {login.id== user.id ? <S.Actions>
            <ion-icon onClick={update}  name="pencil-sharp"></ion-icon>
            <ion-icon onClick={deleting} name="trash-outline"></ion-icon>
            </S.Actions> : ''}
            
          
        </S.UserInfo>
        <S.Photo src={urlImage} />
   
       
        <S.UnderInfo>
     
        <S.Coment>
            <S.Text>{coment}</S.Text>
        </S.Coment>
        <S.Rate> <S.Emoji >{rateNote}</S.Emoji></S.Rate>
        </S.UnderInfo>
    
    </S.ContainerPublish>
    </>)
}
