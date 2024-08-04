// src/App.jsx
import './App.css';

const App = () => {
  const movies = [
    { name: 'The Dark Night', isWatched: true },
    { name: 'Spider Man', isWatched: false },
    { name: 'Dune', isWatched: true },
  ];

  return (
    <>
      <h1>Movie Watchlist</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index} className={movie.isWatched ? 'Watched' : 'NotWatched'}>
            {movie.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;