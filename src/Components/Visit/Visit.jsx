import { useState , useEffect} from "react"
import * as S from "./style.js"
import axios from "axios"

export default function Visit({ local , id}){
    
    const [locationFilter , setLocationFilter]=useState(null)
    const [rateNote , setRateNote]=useState(null)

async function filter(rateNote){
    setLocationFilter([])
    
    try {
            
        const promise= await axios.get(`http://localhost:5000/userLocation/${id}/rate/${rateNote}` )  
       
        setLocationFilter(promise.data)
     
    
    } catch (error) {
        console.log(error)
    }
}

console.log(locationFilter)

   
    return(<>
    
    <S.ContainerVisit>
        <S.RateBox>
         <S.Rate onClick={()=> filter("1")}  value={rateNote} >😞</S.Rate>
        <S.Rate  onClick={()=> filter("2")}  value={rateNote} >😐</S.Rate>
        <S.Rate onClick={()=> filter("3")}  value={rateNote} >🙂</S.Rate>
        <S.Rate  onClick={()=> filter("4")} value={rateNote}  >😀</S.Rate>
        </S.RateBox>

      {locationFilter== null ? local.map((item , index)=>     <a href={`https://maps.google.com/?q=${item.localization.latitude},${item.localization.longitude}`} target='_blank' ><S.VistiBox>
        <S.Icon><ion-icon name="location-outline"></ion-icon></S.Icon>

        <S.LocalizationName><h1>{item.localization.name}</h1></S.LocalizationName>
        <S.Date><h1>{item.localization.createdAt}</h1></S.Date>
        </S.VistiBox> </a>)  : locationFilter.map((item , index)=>     <a href={`https://maps.google.com/?q=${item.localization.latitude},${item.localization.longitude}`} target='_blank' ><S.VistiBox>
        <S.Icon><ion-icon name="location-outline"></ion-icon></S.Icon>

        <S.LocalizationName><h1>{item.localization.name}</h1></S.LocalizationName>
        <S.Date><h1>{item.localization.createdAt}</h1></S.Date>
        </S.VistiBox> </a>) }

    </S.ContainerVisit>
    </>)
}