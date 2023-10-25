import { Container } from "@nextui-org/react";
import { EndPageNavbar } from '../elements/Navbar';
import { PEndPageContent } from '../elements/EndPages/PermitEndPage/PEndPageContent'
import { Footer } from "../elements/Footer";

export function PermitEndPage() {
document.title = "Permit Requirements"

return (
  <>
  <EndPageNavbar />
  <Container lg>
    <PEndPageContent />
    <Footer />
  </Container>
  </>
  )
}

// <input type="checkbox" id={reqs} checked={isChecked} onChange={handleChange} />