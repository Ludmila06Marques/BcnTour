import * as S from "./style.js"
import NavBarr from "../../Components/NavBarr/NavBarr.jsx"
import SideBarr from "../../Components/SideBarr/SideBarr.jsx"
import Options from "../../Components/Options/Options.jsx"
import wpp from "../../img/wpp.png"
import { useNavigate } from "react-router-dom"
import More from "../../Components/More/More.jsx"



export default function HomeScreen(){
    const navigate=useNavigate()
   

  

    return(<>
    <S.ContainerHome>
    <NavBarr/>
    <SideBarr />
    <Options/>
   <More/>
    </S.ContainerHome>
    </>)
}
//<S.ContainerMessage><a href="https://wa.me/34607190787?text=Tengo%20una%20idea%20de%20punto%20turistico!" target="_blank"><img src={wpp}/></a></S.ContainerMessage>