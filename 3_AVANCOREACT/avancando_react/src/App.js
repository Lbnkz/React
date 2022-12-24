import './App.css';
import City from "./assets/city.jpg";

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/**Imagem em public */}
      <div>
        <img src="/img1.jpeg" alt="paisagem" />
      </div>
      {/**Imagem em assets SRC */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
    </div>
  );
}

export default App;
