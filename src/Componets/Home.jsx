// eslint-disable-next-line no-unused-vars
import React,{useState, useEffect} from 'react'
import axios from 'axios'
function Home() {
    const [name,setName] = useState('')
    const getData= async ()=>{
     
      try {
        const  response = await axios.get('http://localhost:3000/getData')
        console.log(response);
        if(response.status===200){
            setName(response.data.name)
        }
       
      } catch (error) {
        
        console.log(error);
      }

    }


  useEffect(()=>{
    getData()
  },[])
  return (
   
    <>
    <h1> hii React</h1>
    <h1>{name?name:"amal"} </h1>
    </>
  
  )
}

export default Home