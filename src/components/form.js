// form in react js 
import React from 'react'
import { useState } from 'react'


const Myform = () => {
const [value,setvalue] = useState("")
const [submit,setsubmit] =useState()
 const handleclick =()=>{
  setsubmit(value)
   setvalue("")
 }
 const funvalue =(e)=>{
    setvalue(e.target.value)
 }
  return (
    <>
    <input
        type='text'
        name="firstname"
        placeholder='enter your name'
        onChange={funvalue}
        value={value}
       
    />
    
    
     <button style={{backgroundColor:"red"}} onClick={handleclick}>click me</button>
     <div className='oyes'>{submit}</div>
    </>

    
  )
}

export default  Myform