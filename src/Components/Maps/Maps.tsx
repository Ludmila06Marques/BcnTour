import { GoogleMap , LoadScript, Marker , Autocomplete  , StandaloneSearchBox} from '@react-google-maps/api';
import * as S from "./style.js"
import { useState } from 'react';
import React from 'react';
export default function Maps(){
 


      const [map , setMap]=useState<google.maps.Map>()
    const [searchBox , setSearchBox]=useState<google.maps.places.SearchBox>()
    const [latitude , setLatitude ]=useState(0)
    const [longitude , setLongitude ]=useState(0)

    const onPlacesChanged=()=>{
      const places= searchBox!.getPlaces()
      console.log(places)
      const place = places![0]

      const location={
        lat: place?.geometry?.location?.lat() || 0,
        lng: place?.geometry?.location?.lng() || 0
      }

     setLatitude(location.lat)
     setLongitude(location.lng)
   

      map?.panTo(location)
    }

    const onMapLoad=(map:google.maps.Map)=>{
      setMap(map)
    }

      const onLoad= (ref:google.maps.places.SearchBox) => {
     setSearchBox(ref)
      }
   
    return(<>
    <S.ContainerMap>
      <LoadScript googleMapsApiKey='AIzaSyAssr79pCIRnUcpvKCRRqBoOqjUkWm1tVQ'libraries={['places']} >
      <GoogleMap
      onLoad={onMapLoad}
        mapContainerStyle={{width:"100%", height:"100%"}}
        center={{lat:41.386723,lng: 2.154950}}
        zoom={15}
 
      >
        <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged} >
        <S.InputLocal placeholder="Insira a localizacao" ></S.InputLocal>
        </StandaloneSearchBox>
  
         <Marker  position={{lat:latitude , lng:longitude}}/>
    
    
      </GoogleMap>
      </LoadScript>

  </S.ContainerMap>
    </>)
}
