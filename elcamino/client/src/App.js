import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Assistant } from "./pages/Assistant";
import { PermitAssistant } from "./pages/PermitAssistant";
import { LicenseAssistant } from "./pages/LicenseAssistant";
import { EndPage } from './pages/EndPage';
import ScrollToTop from './elements/Scrolltotop';

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Assistant" element={<Assistant />}/>
        <Route path="/PermitAssistant" element={<PermitAssistant />}/>
        <Route path="/LicenseAssistant" element={<LicenseAssistant />}/>
        <Route path="/nextsteps/:id" element={<EndPage />}/>
      </Routes>    
    </ScrollToTop>
  )
}

export default App;
