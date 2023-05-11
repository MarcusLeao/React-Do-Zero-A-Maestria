//components
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";

//style css
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      {/*My first component*/}
      <FirstComponent/>
      <TemplateExpressions/>
    </div>
  );
  
}


export default App;
