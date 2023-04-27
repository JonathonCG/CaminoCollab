import { Container } from "@nextui-org/react";
import { EndPageNavbar } from '../elements/Navbar';
import { EndPageContent } from '../elements/EndPage/EndPageContent'
import { Footer } from "../elements/Footer";

export function EndPage() {
document.title = "Permit Requirements"

return (
  <>
  <EndPageNavbar />
  <Container lg>
    <EndPageContent />
    <Footer />
  </Container>
  </>
  )
}

// <input type="checkbox" id={reqs} checked={isChecked} onChange={handleChange} />