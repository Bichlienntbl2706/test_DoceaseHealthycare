import React from 'react'
import './App.css'
import Layout from './layout/layout'


function App() {
    
  const apiUrl = 'http://localhost:3000/users'; // Replace with your backend URL
  fetch(apiUrl +'/register')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  
  return (
        <Layout/>
   
  )
}

export default App
