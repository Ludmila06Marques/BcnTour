import * as S from "./style.js"
import axios from "axios"
import Emoji from "../Emojis/Emojis.jsx"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import Modal from "../Modal/Modal.jsx"

export default function Publish({coment , urlImage ,rateNote , localizationName , user  , login ,id , latitude , longitude }){

   
    const navigate=useNavigate()

    function update(){
        console.log("atualizando")
    }
   
   async function deleting(){
           
        try {
            await axios.delete(`http://localhost:5000/publish/${id}` )
        
          
       } catch (error) {
           alert(error)
       }
     setOpenModal(false)
    }
    function goToProfile(){
     navigate(`/profile/${user.id}`)
    }

    const [appearSettings , setAppearSettings]=useState(false)
    const [openModal , setOpenModal]=useState(false)
   
function toggleButton(){
   setAppearSettings(!appearSettings)
}

    return(<>
        <S.ContainerPublish>
            <S.ContainerUserPublish>
        <S.Photo src={urlImage} />
           
        <S.Coment>
            <S.Text>{coment}</S.Text>
        </S.Coment>
        </S.ContainerUserPublish>
        <S.UserInfo>
        
        <S.PublishInfo>
        <S.UserImage src={user.urlImage}/>
        <S.UserName onClick={goToProfile} >{user.name}</S.UserName>
        </S.PublishInfo>

        <a href={`https://maps.google.com/?q=${latitude},${longitude}`} target='_blank' >
            <S.Localization  >
                <S.LocalIcon><ion-icon name="location-outline"></ion-icon></S.LocalIcon>
                <S.LocalName>{localizationName}</S.LocalName>
            </S.Localization> </a>
        </S.UserInfo>
        <S.Rate> <S.Emoji >{rateNote=="4"? <h1>😀</h1> : rateNote== "3"? <h1>🙂</h1> : rateNote=="2" ? <h1>😐</h1> : rateNote=="1" ? <h1>😞</h1> : "?" }</S.Emoji></S.Rate>
        {login.id== user.id ?
         <S.Actions>
           <S.Dots>
            <ion-icon onClick={toggleButton} name="ellipsis-horizontal-outline"></ion-icon>
            </S.Dots>
            <S.Settings  appearSettings={appearSettings} >
            <Link to={`/editPublish/${id}`}>
            <ion-icon name="pencil-sharp"></ion-icon>
            </Link>
            <ion-icon  onClick={()=>setOpenModal(true)} name="trash-outline"></ion-icon>
            </S.Settings>
            </S.Actions> : ''}

        </S.ContainerPublish>

        <S.Overlay openModal={openModal} >
        <S.ContainerModal>
            <S.TextModal>Tem certeza que deseja excluir a publicacao?</S.TextModal>
            <S.Buttons>
                <S.Yes onClick={deleting} >Yes</S.Yes>
             
            </S.Buttons>
            <S.No onClick={()=>setOpenModal(false)} ><ion-icon name="close-circle-outline"></ion-icon></S.No>
        </S.ContainerModal>
      </S.Overlay>
    </>)
}

/*
  <S.ContainerPublish>
        <S.UserInfo>
            <S.User>
          
            <S.UserImage src={user.urlImage}/>

            <S.PublishInfo>
              
            <S.UserName onClick={goToProfile} >{user.name}</S.UserName>
            <a href={`https://maps.google.com/?q=${latitude},${longitude}`} target='_blank' >
            <S.Localization  >
                <S.LocalIcon><ion-icon name="location-outline"></ion-icon></S.LocalIcon>
                <S.LocalName>{localizationName}</S.LocalName>
            </S.Localization>
            </a>
            </S.PublishInfo>

            </S.User>
           {login.id== user.id ? <S.Actions>
            <ion-icon onClick={update}  name="pencil-sharp"></ion-icon>
            <ion-icon onClick={deleting} name="trash-outline"></ion-icon>
            </S.Actions> : ''}
            
          
        </S.UserInfo>
        <S.Photo src={urlImage} />
   
       
        <S.UnderInfo>
     
        <S.Coment>
            <S.Text>{coment}</S.Text>
        </S.Coment>
        <S.Rate> <S.Emoji >{rateNote=="4"? <h1>😀</h1> : rateNote== "3"? <h1>🙂</h1> : rateNote=="2" ? <h1>😐</h1> : rateNote=="1" ? <h1>😞</h1> : "?" }</S.Emoji></S.Rate>
        </S.UnderInfo>
    
    </S.ContainerPublish> */