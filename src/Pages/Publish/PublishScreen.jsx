import NewPublish from "../../Components/NewPublish/NewPublish"
import ProfileNavBarr from "../../Components/ProfileNavBarr/ProfileNavBarr"
import Localization from "../../Components/Localization/Localization"
import appContext from "../../Contexts/AppContext"
import { useContext } from "react"


export default function PublishScreen(){

    const {login}=useContext(appContext)

    return(<>
    <ProfileNavBarr id={login.id}/>
    <NewPublish/>
    <Localization/>
    </>)
}