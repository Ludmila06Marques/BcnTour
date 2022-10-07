import ProfileNavBarr from "../../Components/ProfileNavBarr/ProfileNavBarr.jsx"
import { useContext } from "react"
import appContext from "../../Contexts/AppContext.js"
export default function AboutUsScreen(){
    const {login}=useContext(appContext)

    return(<>
    <ProfileNavBarr id={login.id} />
    </>)
}