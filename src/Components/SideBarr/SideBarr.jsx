import * as S from "./style.js"
import appContext from "../../Contexts/AppContext.js"
import { useContext } from "react"
import { Link } from "react-router-dom"


export default function SideBarr(){
      
    const { view  }= useContext(appContext)
 


  
    return(<>
    <S.ContainerSideBarr view={view} >

    <S.Perfil>
        <S.Image></S.Image>
        <S.Name>Ludzinha</S.Name>
    </S.Perfil>
    <Link to='/profile/:id' >
    <S.Box><ion-icon name="person-outline"></ion-icon><S.Text>Meu perfil</S.Text></S.Box>
    </Link>
    <Link to='/visits' >
    <S.Box><ion-icon name="flag-outline"></ion-icon><S.Text>Minhas visitas</S.Text></S.Box>
    </Link>
   
    <Link to='/settings' >  <S.Box><ion-icon name="settings-outline"></ion-icon><S.Text>Configuracoes</S.Text></S.Box>
    </Link>
  
    <Link to="/aboutUs" >
    <S.Box><ion-icon name="information-circle-outline"></ion-icon><S.Text>Sobre nos</S.Text></S.Box>
    </Link>
    <Link to='/help' >
    <S.Box><ion-icon name="help-outline"></ion-icon><S.Text>Ajuda</S.Text></S.Box>
    </Link>
  
    </S.ContainerSideBarr>
    </>)
}