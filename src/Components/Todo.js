import React, { useState } from 'react'
import './Todo.css'

function Todo() {
    const[text,settext]=useState('')
    const[list,setlist]=useState([])
    const change=(e)=>{
    settext(e.target.value);

    }
    const clicking =()=>{
        setlist([...list,text]);
        settext('');
    }
    const deleteing = (index) => {
        setlist(list.filter((item, iteminde) => iteminde != index));
      };

    
  return (
   



    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={text} onChange={change} type="text" placeholder="🖊️ Add item..." />
        <i onClick={clicking} className="fas fa-plus"></i>
      </div>
      {  
      list.map((value,index)=>(
        <div className="todos">
        <div className="todo">
          <div className="left">
            <input type="checkbox" name="" id="" />
            <p>{value}</p>
          </div>
          <div key={index} className="right">
            <i onClick={() => deleteing(index)} className="fas fa-times"></i>
          </div>
        </div>
      </div>

      ))
             

      }

    </div>
  );
}



export default Todo