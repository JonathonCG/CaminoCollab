import logo from './logo.svg';
import './App.css';
import {BasicExample} from './Searchbox';
import {Cards} from './Navigation/QuestionCards';
import { Navbar } from './Navigation/Navbar';

function App() {
  return (
    <div className="App">
        
        <BasicExample />
        <Cards />
    </div>
  );
}

export default App;
