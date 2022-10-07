
import * as S from "./style.js"



export default function Modal(){
    return(<>
    
      <S.Overlay>
        <S.ContainerModal>
            <S.Text>Tem certeza que deseja excluir a publicacao?</S.Text>
            <S.Buttons>
                <S.Yes >Yes</S.Yes>
             
            </S.Buttons>
            <S.No><ion-icon name="close-circle-outline"></ion-icon></S.No>
        </S.ContainerModal>
      </S.Overlay>
    </>)
}

