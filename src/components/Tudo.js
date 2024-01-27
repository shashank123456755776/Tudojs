import React, { useState } from 'react'

const Tudo = () => {
    const deleteitem = (index) => {
        const updatedSubmit = [...submit];
        updatedSubmit.splice(index, 1);
        setsubmit(updatedSubmit);
      };

    const [value,setvalue]=useState()
    const [submit,setsubmit] =useState([])
    const onclick=()=>{
    
       setvalue("")
      
       setsubmit([...submit,value])
    
    }
    const onchanger=(e)=>{
     setvalue(e.target.value)
     
    }
  return (
  
   <>
    <div className='tudo' style={{color:"red"}}>
          <h1 className='h1'>  My Tudo App</h1>
         <div className='tudocom'>
            <div className='tudocoms'>
              <input  style={{borderRadius:"8px"}}
              type='text ' 
              placeholder='Add Items'
              name="firstname"
              value={value }
              onChange={onchanger}
              />
              <br/>
              <button style={{backgroundColor:"blue",borderRadius:"5px"}} onClick={onclick}>click me</button>
            </div>
            <div  style={{backgroundColor:"green"}}>
             <ol>
           {submit.map((item,index)=>{
           return <li key={index}>{item} <button onClick={()=>deleteitem(index)} style={{backgroundColor:"darkblue"}}>delete me</button></li>
           })}
             </ol>
              
            </div>
            
        </div>
    </div>
   </>
  )
}

export default Tudo