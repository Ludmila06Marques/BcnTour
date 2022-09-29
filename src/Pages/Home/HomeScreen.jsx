import * as S from "./style.js"
import NavBarr from "../../Components/NavBarr/NavBarr.jsx"
import SideBarr from "../../Components/SideBarr/SideBarr.jsx"
import Options from "../../Components/Options/Options.jsx"
import { useNavigate } from "react-router-dom"
import More from "../../Components/More/More.jsx"
import Publish from "../../Components/Publish/Publish.jsx"



export default function HomeScreen(){
    const navigate=useNavigate()
   

  

    return(<>
    <S.ContainerHome>
    <NavBarr/>
    <SideBarr />
    <Options/>
    <Publish/>
    <Publish/>
    <Publish/>
   <More/>
    </S.ContainerHome>
    </>)
}
