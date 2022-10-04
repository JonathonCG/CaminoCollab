import './App.css';
import { Route, Routes } from "react-router-dom"
import { Home } from "./Pages/Home"
import { EndPage } from './Pages/EndPage';
import { Wizard } from './Pages/Wizard'

function App() {
  return <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/nextsteps/:id" element={<EndPage />}/>
    <Route path="/wizard" element={<Wizard />}/>
  </Routes>    
}

export default App;
