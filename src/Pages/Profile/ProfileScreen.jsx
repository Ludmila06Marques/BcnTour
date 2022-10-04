import * as S from "./style.js"
import axios from "axios"
import { useContext , useEffect } from "react"
import { useNavigate, useParams} from "react-router-dom"
import ProfileInfo from "../../Components/ProfileInfo/ProfileInfo"
import ProfileNavBarr from "../../Components/ProfileNavBarr/ProfileNavBarr"
import OptionsProfile from "../../Components/OptionsProfile/OptionsProfile"
import appContext from "../../Contexts/AppContext.js"
import Emoji from "../../Components/Emojis/Emojis"
import Publish from "../../Components/Publish/Publish.jsx"




export default function ProfileScreen(){


   const {id}=useParams()
 
    const {setUserPublishes, userPublishes, login}=useContext(appContext)

    useEffect(async()=>{
        try {
            
            const promise= await axios.get(`http://localhost:5000/publishUser/${id}` )  
       
            setUserPublishes(promise.data)
         
        
        } catch (error) {
            console.log(error)
        }
    },[setUserPublishes])
  console.log(userPublishes)
   
    return(<>
     <ProfileNavBarr id={id} />
     <ProfileInfo id={id} login={login} />
     <OptionsProfile  />
   {userPublishes.map((item , index)=> <Publish setPublishes={setUserPublishes}  key={index}  id={item.id} login={login} coment={item.coment} urlImage={item.urlImage} localizationName={item.localization.name} rateNote={item.rateNote} user={item.user}/>)}
  
    </>)
}