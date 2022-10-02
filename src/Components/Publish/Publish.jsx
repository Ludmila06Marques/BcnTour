import * as S from "./style.js"
import axios from "axios"
import Emoji from "../Emojis/Emojis.jsx"
import { useNavigate } from "react-router-dom"

export default function Publish({coment , urlImage ,rateNote , localization , user  , login ,id }){

   
    const navigate=useNavigate()
    function goToLocal(){
        console.log("indo pra loc")
    }
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
            <S.Localization onClick={goToLocal} >
                <S.LocalIcon><ion-icon name="location-outline"></ion-icon></S.LocalIcon>
                <S.LocalName>{localization}</S.LocalName>
            </S.Localization>
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
       <Emoji/>
    </S.ContainerPublish>
    </>)
}
