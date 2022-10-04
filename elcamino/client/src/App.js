import './App.css';
import { Route, Routes } from "react-router-dom"
import { Home } from "./Pages/Home"
import { Wizard } from "./Pages/Wizard"
import { EndPage } from './Pages/EndPage';


function App() {
  return <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/Wizard" element={<Wizard />}/>
    <Route path="/nextsteps/:id" element={<EndPage />}/>
  </Routes>    
}

export default App;
