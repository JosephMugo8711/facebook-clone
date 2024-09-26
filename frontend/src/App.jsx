//import React from 'react';
import "./styles/icons/icons.css";


function App() {
  const get = async () => {
    const response = await fetch('http://localhost:8000');
    console.log(response);
  };
  get();
  return <div> Welcome to fb </div>
  
}

export default App;

