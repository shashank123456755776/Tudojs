import React from 'react'
import "./Videos.css"
// ere we are basicaaly using props to passes diffrent values in same componenets

const Videos = ({title , bgColor ,views,channel1,channel2 ,che,le}) => {
    const {name,color} =[channel1,channel2]
   
    
  return (
 
    <>
    <div className='picsa'>
    <div className='pic'>
    <img className='img1' src='https://plus.unsplash.com/premium_photo-1705883267788-4040699634c4?q=80&w=1437&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='welcome ' ></img>
    <div className='pics' style={{color:bgColor}}>{title} </div>
    <div>{views}</div>
    <div style={{color:che,le}}>{channel1 }{channel2} </div>
    </div>
    </div>
   
 
    </>

  )
}

export default Videos