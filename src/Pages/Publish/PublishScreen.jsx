import NewPublish from "../../Components/NewPublish/NewPublish"
import ProfileNavBarr from "../../Components/ProfileNavBarr/ProfileNavBarr"
import Localization from "../../Components/Localization/Localization"
import appContext from "../../Contexts/AppContext"
import { useContext } from "react"
import * as S from "./style.js"


export default function PublishScreen(){

    const {login}=useContext(appContext)

    return(<>
    <S.Container>
    <ProfileNavBarr id={login.id}/>
    <NewPublish/>
    <Localization/>
    </S.Container>
    </>)
}