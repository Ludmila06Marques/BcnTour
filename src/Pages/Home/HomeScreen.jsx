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
import Publish from "../../Components/Publish/Publish.jsx"






export default function HomeScreen(){
 
    const {setPublishes , publishes, login  }=useContext(appContext)

  
    useEffect(async()=>{
        try {

            const promise= await axios.get(`http://localhost:5000/publish` )  
       
          setPublishes([...promise.data])
         
        
        } catch (error) {
            console.log(error)
        }
    },[publishes])
console.log(publishes)
   
    return(<>
    <S.ContainerHome>
    <NavBarr/>
    <SideBarr login={login} />
    <Options publishes={publishes} setPublishes={setPublishes} />
  
    {publishes.map((item , index)=>  
    <Publish key={index} id={item.id} setPublishes={setPublishes} login={login} coment={item.coment} urlImage={item.urlImage} localizationName={item.localization.name}  rateNote={item.rateNote} user={item.user} longitude={item.localization.longitude} latitude={item.localization.latitude}/>)}

   <More/>
    </S.ContainerHome>
    </>)
}
    /* publishes.length===0 ?<S.Charge src={charge} /> :
    <Publish key={index} coment={item.coment} urlImage={item.urlImage} localization={item.localization} rateNote={item.rateNote} user={item.user} />)} */