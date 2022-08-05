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
        <h1 className='header'>Jokes on you</h1>
        <ul>
          {
            jokes.map(j => j.joke ? <li className='joke' key={j.id}>{j.joke}</li> : <li className='notAJoke' key={j.id}>{j.setup} {j.delivery}</li>)
          }
        </ul>
      </header>
    </div>
  );
};


export default App;