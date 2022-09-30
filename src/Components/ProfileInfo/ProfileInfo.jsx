import { LoginButton } from "../../Pages/Login/style.js"
import * as S from "./style.js"
import appContext from "../../Contexts/AppContext.js"
import { useContext } from "react"



export default function ProfileInfo({login}){

    return(<>
    <S.ProfileContainer>
      <S.GroupInfo>
      <S.UserImage src={login.urlImage} alt="User photo"/>
      <S.InfoCity>
      {login.country}
        </S.InfoCity>
     
        </S.GroupInfo>
        <S.Info>
          
        </S.Info>
    </S.ProfileContainer>
    </>)
}