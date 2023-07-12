import { Container } from "@nextui-org/react";
import { EndPageNavbar } from '../elements/Navbar';
import { ZEndPageContent } from '../elements/EndPages/ZoningEndPage/ZEndPageContent'
import { Footer } from "../elements/Footer";

export function ZoningEndPage() {
document.title = "Permit Requirements"

return (
  <>
  <EndPageNavbar />
  <Container lg>
    <ZEndPageContent />
    <Footer />
  </Container>
  </>
  )
}

// <input type="checkbox" id={reqs} checked={isChecked} onChange={handleChange} />