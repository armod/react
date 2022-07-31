import './App.css';

function App() {

  const onButtonClick = () => { alert("hej!") }

  return (
    <div className="App">
      <h1>Hello world</h1>
      <button onClick={onButtonClick}>submit</button>
    </div>
  );
}

export default App;
