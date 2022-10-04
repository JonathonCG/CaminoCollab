import './App.css';
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Wizard } from "./pages/Wizard"
import { EndPage } from './pages/EndPage';
import ScrollToTop from './elements/Scrolltotop';

function App() {
  return (
<ScrollToTop>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/Wizard" element={<Wizard />}/>
    <Route path="/nextsteps/:id" element={<EndPage />}/>
    <Route path="/wizard" element={<Wizard />}/>
  </Routes>    
</ScrollToTop>
  )
}

export default App;
