import * as S from "./style.js"
import loading from "../../img/loading.jpg"


export default function Loading(){
    return(<>
    <S.ToCenter>
    <S.Container src={loading} />
    </S.ToCenter>
    </>)
}