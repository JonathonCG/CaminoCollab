import { HomeNavbar } from '../elements/Navbar';
import { Footer } from "../elements/Footer";
import { Container } from "@nextui-org/react";
import { HomeContent } from "../elements/Home/HomeContent";


export function Home() {
  document.title = "Permit Assistant"

  return (
    <>
    <HomeNavbar />
    <Container alignContent="center" lg>
      <HomeContent />
      <Footer />
    </Container>
    </>
  )
};