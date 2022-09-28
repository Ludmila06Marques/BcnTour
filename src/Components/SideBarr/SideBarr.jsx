import * as S from "./style.js"
import appContext from "../../Contexts/AppContext.js"
import { useContext } from "react"


export default function SideBarr(){
      
    const {setView , view }= useContext(appContext)
    function closeSideBarr(){
        setView(false)
    }



  
    return(<>
    <S.ContainerSideBarr view={view} >

    <ion-icon onClick={closeSideBarr} name="return-down-back-outline"></ion-icon>
    </S.ContainerSideBarr>
    </>)
}