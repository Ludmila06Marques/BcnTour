import ProfileNavBarr from "../../Components/ProfileNavBarr/ProfileNavBarr.jsx"
import * as S from "./style.js"
import appContext from "../../Contexts/AppContext.js"
import { useContext } from "react"


export default function PlacesScreen(){

    const {login}=useContext(appContext)

   return(<>  
   <ProfileNavBarr id={login.id} />
   </>)
}