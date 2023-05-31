import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Assistant } from "./pages/Assistant";
import { EndPage } from './pages/EndPage';
import ScrollToTop from './elements/Scrolltotop';
import ReactGA from 'react-ga';

// Google Analytics Initialization
const trackingId = "G-N6T9KG86GQ";
ReactGA.initialize(trackingId);

function App() {
  // Google Analytics Page Tracking
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
