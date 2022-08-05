import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import axios from 'axios';





function App() {



  const [jokes, setJokes] = useState([]);

    useEffect(() => {

      axios.get('https://v2.jokeapi.dev/joke/Programming?amount=10')
      .then(res => setJokes(res.data.jokes));


    }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Jokes on you</h1>
        <ul>
          {
            jokes.map(j => j.joke ? <li key={j.id}>{j.joke}</li> : <li key={j.id}>{j.setup} {j.delivery}</li>)
          }
        </ul>
      </header>
    </div>
  );
};


export default App;