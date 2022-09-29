import * as S from "./style.js"

export default function OptionsToSetting(){
    const settingsArray=[{action: 'Editar perfil' , icon:"pencil-outline"},
    {action: 'Modo escuro' , icon:"moon"},
    {action: 'Deletar conta ' , icon:"trash-outline"}]
    return(<>
    {settingsArray.map((item,index)=>
        <S.ContainerOptions>
        <S.Icon><ion-icon name={item.icon}></ion-icon></S.Icon>
            <S.Option>{item.action}</S.Option>
           
        </S.ContainerOptions>
    )}
   
    </>)
}