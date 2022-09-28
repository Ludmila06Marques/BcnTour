import * as S from "./style.js"
import NavBarr from "../../Components/NavBarr/NavBarr.jsx"
import SideBarr from "../../Components/SideBarr/SideBarr.jsx"
import NewPublish from "../../Components/NewPublish/NewPublish.jsx"


export default function OptionScreen(){
    return(<>
     <NavBarr/>
    <SideBarr />
    <NewPublish/>
    </>)
}