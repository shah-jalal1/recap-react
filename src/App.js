import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const nayokName = ['jasim', 'razzak', 'amir khan', 'salman khan'];
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      <Nayok name="jashim"></Nayok>
      <Nayok name='sakib'></Nayok>
      <Nayok name={nayokName[0]} age='30'></Nayok>
      <Nayok name='sakib khan'></Nayok>
      <Nayok name={nayokName[3]}></Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

function MovieCounter(props) {
  const [count, setCount] = useState(1);
  const handleClik = () => setCount(count+1);
    return (
      <div>
        <button onClick={handleClik}>Add Movie</button>
        <h3>Number of movies: {count}</h3>
        <MoviesDisplay movies={count}></MoviesDisplay>
      </div>
    )
}

function MoviesDisplay(props) {
  return <h4>Movies i acted: {props.movies}</h4>
}

function Nayok(props) {
  const nayokStyle = {
      backgroundColor: 'green',
      border: '2px solid purple',
      margin:'10px'
  }
  return (
  <div style={nayokStyle}>
    <h1>Ami nayok {props.name}</h1>
    <h2>i am {props.age || 20} years old</h2>
  </div>
  )
}

export default App;
