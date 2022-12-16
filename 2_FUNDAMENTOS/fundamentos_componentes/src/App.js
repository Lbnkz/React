import './App.css';
//components
import FirstComponent from "./components/FirstComponents"
import MyComponent from './components/MyComponent';
import TemplateExpression from './components/TemplateExpression';
import Events from './components/Events';
import Challenge from './components/Challenge';
//styles / CSS


function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
      <Challenge/>
    </div>
  );
}

export default App;
