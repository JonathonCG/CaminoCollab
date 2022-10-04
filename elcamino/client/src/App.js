import './App.css';
import { Route, Routes } from "react-router-dom"
import { Home } from "./Pages/Home"
import { EndPage } from './Pages/EndPage';


function App() {
  return <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/nextsteps/:id" element={<EndPage />}/>
  </Routes>    
}

export default App;
