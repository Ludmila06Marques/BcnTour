import * as S from "./style.js"
import logo from "../../img/logo.webp"

export default function Logo(){
    return(<>
<S.ImageLogo><img src={logo} alt="Logo "/></S.ImageLogo>
    </>)
}
