import './App.css';
import React from 'react';
import { useEffect, useState } from "react";

const movies = [
  { title: 'Mean Girls' },
  { title: 'Hackers' },
  { title: 'The Grey' },
  { title: 'Sunshine' },
  { title: 'Ex Machina' },
]

const App = () => {
  const [MovieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchdata = () => {
    fetch(`http://localhost:8080/movie/knex`)
    .then(res => {
      return res.json()
    })
    .catch(console.error);
  }
  setMovieList(fetchdata);
}, [])

  console.log(MovieList);


const movielist = movies.map((d) => <li key={d.title}>{d.title}</li>);

return (
  <div className="App">
    {movielist}
    <div>
      {MovieList.length > 0 && (
        <ul>
          {MovieList.map(user => (
            <li key={MovieList.id}>{MovieList.name}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
);
}


export default App;
