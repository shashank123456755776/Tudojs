
import React from 'react'
import Videos from './components/Videos'
import Myform from './components/form'
import Form2methods from './components/form2methods'
import Tudo from './components/Tudo'



const App = () => {
 //Here bgColor Pass as a Props 
 let channel1 = {
    name:"coder dost",
    color :"blue",
 }
  let channel2 = {
    name :"shashank dost",
    color:"green",
  }
  return (
    <>
    
       {/* <Videos bgColor ="red" title ="reactjs tutorials" views ="100k"  channel1 ={channel1.name} che={channel1.color}/>
       <Videos bgColor ="green" title ="nodejs tutorials" views="1000k" channel2 ={channel2.name} le ={channel2.color}/>
       <Myform/>
       <Form2methods/> */}
       <Tudo/>
       </>
  )
}

export default App