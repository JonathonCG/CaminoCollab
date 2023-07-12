import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { PermitAssistant } from "./pages/PermitAssistant";
import { LicenseAssistant } from "./pages/LicenseAssistant";
import { LicenseEndPage } from './pages/LicenseEndPage';
import { PermitEndPage } from './pages/PermitEndPage';
import { ZoningEndPage } from "./pages/ZoningEndPage";
import ScrollToTop from './elements/Scrolltotop';

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/PermitAssistant" element={<PermitAssistant />}/>
        <Route path="/LicenseAssistant" element={<LicenseAssistant />}/>
        <Route path="/LicenseRequirements/:id" element={<LicenseEndPage />}/>
        <Route path="/PermitRequirements/:id" element={<PermitEndPage />}/>
        <Route path="/ZoningRequirements/:id" element={<ZoningEndPage />}/>
      </Routes>    
    </ScrollToTop>
  )
}

export default App;
