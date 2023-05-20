import React, { useState, useEffect } from 'react';
import './Downloads.css'
import Landingpage from './Landingpage/landingpage';
import Sidebar from '../Sidebar/Sidebar';
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
    <> <Sidebar/>
    <div className="contai">
    <div className="head">Downloads</div>  <ul style={{listStyle: "none", color: "white"}}> {todos.map(item => (
    <div class = "li" key={item.id}><span>{item.title}</span> <button id = "bu" className= {item.id}>View in folder </button></div>
    ))}</ul>
    
  </div></>
  )
}
