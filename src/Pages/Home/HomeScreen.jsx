import * as S from "./style.js"
import axios from "axios"
import { useEffect , useContext} from "react"
import { useNavigate } from "react-router-dom"
import NavBarr from "../../Components/NavBarr/NavBarr.jsx"
import SideBarr from "../../Components/SideBarr/SideBarr.jsx"
import Options from "../../Components/Options/Options.jsx"
import More from "../../Components/More/More.jsx"
import appContext from "../../Contexts/AppContext.js"
import Emoji from "../../Components/Emojis/Emojis"
import charge from "../../img/charge.png"




function Publish({coment , urlImage ,rateNote , localization ,user}){
 
   console.log(user)
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

export default function HomeScreen(){
 
    const {setPublishes , publishes, login  }=useContext(appContext)

  
    useEffect(async()=>{
        try {

            const promise= await axios.get(`http://localhost:5000/publish` )  
       
          setPublishes(promise.data)
         
        
        } catch (error) {
            console.log(error)
        }
    },[])

   
    return(<>
    <S.ContainerHome>
    <NavBarr/>
    <SideBarr login={login} />
    <Options publishes={publishes} setPublishes={setPublishes} />
  
    {publishes.map((item , index)=>  
    <Publish key={index} coment={item.coment} urlImage={item.urlImage} localization={item.localization} rateNote={item.rateNote} user={item.user} />)}

   <More/>
    </S.ContainerHome>
    </>)
}
    /* publishes.length===0 ?<S.Charge src={charge} /> :
    <Publish key={index} coment={item.coment} urlImage={item.urlImage} localization={item.localization} rateNote={item.rateNote} user={item.user} />)} */