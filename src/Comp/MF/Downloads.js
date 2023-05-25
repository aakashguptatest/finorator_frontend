import React, { useState, useEffect } from 'react';
import './Downloads.css'
import file from "../Home/static/assets/8569-file-save.json"
import Lottie from "lottie-react"

export default function Downloads() {
  
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        setTodos(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <> 
    <div className="contai">
    <div className="head">Downloads</div>  <ul> {todos.map(item => (
    <div class = "li" key={item.id}><Lottie loop = {true}  animationData= {file} style={{height : 100}}/><span style={{margin: "auto"}}>{item.title}</span> <button id = "bu" className= {item.id}>View in folder </button></div>
    ))}</ul>
    
  </div></>
  )
}
