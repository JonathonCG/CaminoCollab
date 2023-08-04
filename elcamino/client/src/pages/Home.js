import { HomeNavbar } from '../elements/Navbar';
import { Footer } from "../elements/Footer";
import { Container } from "@nextui-org/react";
import { HomeContent } from "../elements/Home/HomeContent";


export function Home() {
  document.title = "Assistant"

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

//   return (

//     <div className="home">
//       <div className="home__preinfo">
//         <img width="200" src={commdevlogo} alt='alt text'></img>
//         <h2>Permit Assistant</h2>
//         <hr ref={ref}/>
//       </div>
//       {/* <p>Click and type through the following prompts to figure out what you need to do to obtain a permit</p> */}
//         <p>Before you begin, check the address of the project to verify that it is in Unincorporated Clayton County.</p>
//       <div onClick={handleClick}>
//         <TurnstoneSearch /> 
//       </div>
//     </div> 
//   )
// }