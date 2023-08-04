import { Container } from "@nextui-org/react";
import { EndPageNavbar } from '../elements/Navbar';
import { LEndPageContent } from '../elements/EndPages/LicenseEndPage/LEndPageContent'
import { Footer } from "../elements/Footer";

export function LicenseEndPage() {
document.title = "License Requirements"

return (
  <>
  <EndPageNavbar />
  <Container lg>
    <LEndPageContent />
    <Footer />
  </Container>
  </>
  )
}

// <input type="checkbox" id={reqs} checked={isChecked} onChange={handleChange} />