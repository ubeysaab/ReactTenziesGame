import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
const initialArray = 

[
  {
  value:Math.floor(Math.random()*7),
  checked:false,

},
  {
  value:Math.floor(Math.random()*7),
  checked:false,

},
  {
  value:Math.floor(Math.random()*7),
  checked:false,

},
  {
  value:Math.floor(Math.random()*7),
  checked:false,

},
  {
  value:Math.floor(Math.random()*7),
  checked:false,

},
  {
  value:Math.floor(Math.random()*7),
  checked:false,

},
  {
  value:Math.floor(Math.random()*7),
  checked:false,

},
  {
  value:Math.floor(Math.random()*7),
  checked:false,

},
  {
  value:Math.floor(Math.random()*7),
  checked:false,

},
  {
  value:Math.floor(Math.random()*7),
  checked:false,

},

]

let [current,setCurrent] = useState({})

function handleCheck(id){
  const key = "value"
if(!(key in current)){
  setCurrent(dies.find((item,i)=> i==id))
  setDies(prev => {
    return (
      prev.map((item,i)=>{
        return i==id ? {...item,checked:!item.checked}:item
      })
    )
  
  
  }
  )
console.log("value doesn't found this is the first click")

}else if("value" in current && current.value==dies[id].value) {
  setDies(prev => {
    return (
      prev.map((item,i)=>{
        return i==id ? {...item,checked:!item.checked}:item
      })
    )
  
  
  }
  )


}


// console.log(current)
// console.log(dies)

}



function randomize(){


  if(dies.filter(item=>item.checked).length==10){
    
    setDies(
      initialArray
    )
  }else {

    setDies(dies.map(item=>{
      return (
        item.checked?item:{...item,value:Math.floor(Math.random()*7)}
      )
    }))
  }
}


  let [dies,setDies] = useState(initialArray)
  return (
    <>
      <div className="container">
        <div className="texts">
          <h3> Tenzies</h3>

          <p>
            Roll until alldice are the same. Click each die to freeze it at its
            current value between rolls
          </p>
        </div>

        <div className="dies">
            {
              dies.map((item,i)=>{
                return (
                 <Die  
                value={item.value} checked={item.checked} handleCheck={handleCheck}  id={i} />
                )
              })
            }
        </div>
        <button onClick={randomize}> {dies.filter(item=>item.checked).length==10?"game finish":"randomize"}</button>
      </div>
    </>
  );
}

function Die(props){
  return (
    <div className={props.checked?"die checked":"die"} onClick={()=>props.handleCheck(props.id)}>
      {props.value}
    </div>
  )
}

export default App;
