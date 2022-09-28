import * as S from "./style.js"
import appContext from "../../Contexts/AppContext.js"
import { useContext } from "react"


export default function SideBarr(){
      
    const { view  }= useContext(appContext)
 


  
    return(<>
    <S.ContainerSideBarr view={view} >

  
    </S.ContainerSideBarr>
    </>)
}