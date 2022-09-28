import * as S from "./style.js"
import lazer from "../../img/lazer.png"
import sagrada from "../../img/sagrada.jpeg"

export default function Options(){
    return(<>
    <S.ContainerIdleness><S.LazerImage src={lazer}/> <S.LazerText>Lazer</S.LazerText></S.ContainerIdleness>
    <S.MiddleContainer>
            <S.ContainerCulture>
                <S.CultureImg src={sagrada} /><S.CultureText>Cultura</S.CultureText>
            </S.ContainerCulture>

            <S.ContainerFood></S.ContainerFood>
        
            <S.ContainerShopping></S.ContainerShopping>
            <S.ContainerEvents></S.ContainerEvents>
    </S.MiddleContainer>
    </>)

}