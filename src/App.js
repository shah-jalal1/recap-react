import logo from './logo.svg';
import './App.css';

function App() {
  const nayokName = ['jasim', 'razzak', 'amir khan', 'salman khan'];
  return (
    <div className="App">
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
