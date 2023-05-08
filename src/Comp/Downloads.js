import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Downloads.css'
export default function Downloads() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  return (
    <> <div className="container">
    <div className="heading">Downloads</div>  <ul style={{listStyle: "none", color: "white"}}> {data.map(item => (
    <div class = "li" key={item.id}><span>{item.title}</span> <button id = "download" className= {item.id}>View in folder </button></div>
    ))}</ul>
    
  </div></>
  )
}
