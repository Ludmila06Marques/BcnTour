import axios from "axios"
import ProfileInfo from "../../Components/ProfileInfo/ProfileInfo"
import ProfileNavBarr from "../../Components/ProfileNavBarr/ProfileNavBarr"
import * as S from "./style.js"
import Options from "../../Components/Options/Options"
import OptionsProfile from "../../Components/OptionsProfile/OptionsProfile"
import { useEffect } from "react"
import appContext from "../../Contexts/AppContext.js"
import { useContext } from "react"
import { useParams } from "react-router-dom"
import Emoji from "../../Components/Emojis/Emojis"
import { useNavigate } from "react-router-dom"

function Publish({coment , urlImage ,rateNote , localization , login}){

   
    const navigate=useNavigate()
    function goToLocal(){
        console.log("indo pra loc")
    }
    function update(){
        console.log("atualizando")
    }
    function deleting(){
       console.log("deletando")
    }
    function goToProfile(){
 navigate('/profile/:id')
    }

    return(<>
  <S.ContainerPublish>
        <S.UserInfo>
            <S.User>
          
            <S.UserImage src={login.urlImage}/>

            <S.PublishInfo>
            <S.UserName onClick={goToProfile} >{login.name}</S.UserName>
            <S.Localization onClick={goToLocal} >
                <S.LocalIcon><ion-icon name="location-outline"></ion-icon></S.LocalIcon>
                <S.LocalName>{localization}</S.LocalName>
            </S.Localization>
            </S.PublishInfo>

            </S.User>
            <S.Actions>
            <ion-icon onClick={update}  name="pencil-sharp"></ion-icon>
            <ion-icon onClick={deleting} name="trash-outline"></ion-icon>
            </S.Actions>
          
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


export default function ProfileScreen(){


    const{id}=useParams()
 
    const {setUserPublishes, userPublishes, login}=useContext(appContext)

    useEffect(async()=>{
        try {
            
            const promise= await axios.get(`http://localhost:5000/publishUser/${id}` )  
       
            setUserPublishes(promise.data)
         
        
        } catch (error) {
            console.log(error)
        }
    },[userPublishes])
  
   
    return(<>
     <ProfileNavBarr login={login} />
     <ProfileInfo login={login} />
     <OptionsProfile/>
   {userPublishes.map((item , intes)=> <Publish coment={item.coment} urlImage={item.urlImage} localization={item.localization} rateNote={item.rateNote} login={login}/>)}
  
    </>)
}