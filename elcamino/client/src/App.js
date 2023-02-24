import './App.css';
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Assistant } from "./pages/Assistant"
import { EndPage } from './pages/EndPage';
import ScrollToTop from './elements/Scrolltotop';

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Assistant" element={<Assistant />}/>
        <Route path="/nextsteps/:id" element={<EndPage />}/>
      </Routes>    
    </ScrollToTop>
  )
}

export default App;
