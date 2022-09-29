import ProfileInfo from "../../Components/ProfileInfo/ProfileInfo"
import ProfileNavBarr from "../../Components/ProfileNavBarr/ProfileNavBarr"
import * as S from "./style.js"
import Publish from "../../Components/Publish/Publish.jsx"
import Options from "../../Components/Options/Options"
import OptionsProfile from "../../Components/OptionsProfile/OptionsProfile"

export default function ProfileScreen(){

    return(<>
     <ProfileNavBarr/>
     <ProfileInfo/>
     <OptionsProfile/>
     <Publish/>
    </>)
}