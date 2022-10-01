import ProfileNavBarr from "../../Components/ProfileNavBarr/ProfileNavBarr"
import appContext from "../../Contexts/AppContext"
import { useContext } from "react"
export default function VisitsScreen(){

    const{login}=useContext(appContext)

    return(<>
    <ProfileNavBarr id={login.id}/>
    </>)
}