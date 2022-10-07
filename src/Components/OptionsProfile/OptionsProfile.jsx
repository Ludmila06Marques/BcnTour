import axios from "axios"
import * as S from "./style.js"
import { useContext ,useEffect} from "react"
import appContext from "../../Contexts/AppContext.js"
import { useParams } from "react-router-dom"


 function OneOption({id , name}){
    const { setAppear  , setDesappear  , setUserPublishes , login }= useContext(appContext)

   
        async function chooseOption(){
            setUserPublishes([])
            console.log(`To filtrando pelo ${name}`)
              
            try  {
                const promise=await axios.get(`http://localhost:5000/publish/${login.id}/${id}`)  
              
           
              setUserPublishes(promise.data)
               
                
            } catch (error) {
                console.log(error)
            }
    
          setAppear(true)
          setDesappear(false)
        }
       
    
    return(
        
        <S.ContainerOption  onClick={chooseOption}>
              <S.OptionName>{name}</S.OptionName>
     </S.ContainerOption>
    )

}

export default function OptionsProfile(){
   
    const { setOptions, options,setUserPublishes }= useContext(appContext)
    const {id}=useParams()
    useEffect(async ()=>{
          
        try  {
           const promise=await axios.get('http://localhost:5000/option')  
         
         
           setOptions([...promise.data])
           
           
       } catch (error) {
           console.log(error)
       }
   },[])

   async function getAll(){
    setUserPublishes([])
    try {

       const promise= await axios.get(`http://localhost:5000/publishUser/${id}` )  
 
        setUserPublishes([...promise.data])
     
    
    } catch (error) {
  }}

  

    return(<>
       <S.Container>
    {options.map( (item , index) =>  
       <OneOption id={item.id} name={item.name} image={item.image} key={index}/> )}
         <S.ContainerOption  onClick={getAll} >
              <S.OptionName  >Todas</S.OptionName>
     </S.ContainerOption>
       </S.Container>
    </>)

}
