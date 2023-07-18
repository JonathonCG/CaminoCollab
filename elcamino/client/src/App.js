import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Assistant } from "./pages/Assistant"
import { PermitAssistant } from "./pages/PermitAssistant";
import { LicenseAssistant } from "./pages/LicenseAssistant";
import { ZoningAssistant } from "./pages/ZoningAssistant";
import { LicenseEndPage } from './pages/LicenseEndPage';
import { PermitEndPage } from './pages/PermitEndPage';
import { ZoningEndPage } from "./pages/ZoningEndPage";
import ScrollToTop from './elements/Scrolltotop';

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Assistant" element={<Assistant />}/>
        <Route path="/PermitAssistant" element={<PermitAssistant />}/>
        <Route path="/LicenseAssistant" element={<LicenseAssistant />}/>
        <Route path="/ZoningAssistant" element={<ZoningAssistant />}/>
        <Route path="/LicenseRequirements/:id" element={<LicenseEndPage />}/>
        <Route path="/PermitRequirements/:id" element={<PermitEndPage />}/>
        <Route path="/ZoningRequirements/:id" element={<ZoningEndPage />}/>
      </Routes>    
    </ScrollToTop>
  )
}

export default App;
