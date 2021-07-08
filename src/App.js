import './App.css';
import React, { useState } from 'react';
import Axios from 'axios';

function App() {
  const [joke, setJoke] = useState("");

  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke").then((response) => {
      setJoke(response.data.type + ".." + response.data.setup + ".." + response.data.punchline);
      console.log(response);
    });
  }

  return (
    <div className="App">
      <button onClick={getJoke}>Click me</button>
      {joke}
    </div>
  );
}

export default App;
