import ProfileNavBarr from "../../Components/ProfileNavBarr/ProfileNavBarr"
import axios from "axios"
import appContext from "../../Contexts/AppContext"
import { useContext, useState , useEffect} from "react"
import Visit from "../../Components/Visit/Visit"
export default function VisitsScreen(){

    const{login}=useContext(appContext)
    const [local , setLocal]=useState([])
    useEffect(async()=>{
        try {
            
            const promise= await axios.get(`http://localhost:5000/userLocation/${login.id}` )  
       
            setLocal(promise.data)
         
        
        } catch (error) {
            console.log(error)
        }
    },[local])



    return(<>
    <ProfileNavBarr id={login.id}/>
    <Visit id={login.id} local={local} />
    </>)
}