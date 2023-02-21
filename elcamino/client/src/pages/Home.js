import { TurnstoneSearch } from "../elements/Home/Searchbox"
import CommDevLogo  from '../graphics/png/Commdevlogo.png'
import { useRef } from 'react'
import { HomeNavbar } from '../elements/Navbar';
import { Container, Spacer, Grid, Card, Row, Text, Col } from "@nextui-org/react";


export function Home() {
  document.title = "Permit Assistant"

  return (
    <Container alignContent="center" css={{w: "100%" }}>
      <HomeNavbar />
      <Spacer y={1} />
      <Grid.Container justify="center" css={{"height": "50%"}}>
        <Grid xs={12} alignItems="center" css={{"width": "100%"}}>
          <Col css={{"width": "100%"}}>
            <Spacer y={1} />
            <Row justify="center">
              <img width="150" src={CommDevLogo} alt='alt text'></img>
            </Row>
            <Row justify="center">
              <Text h1>Permit Assistant</Text>
            </Row>
            <Row justify="center">
              <Text h4>Enter the address of where you would like to file a permit</Text>
            </Row>
            <Row justify="center">
              <Text h5>We'll verify that the address is in Unincorporated Clayton County</Text>
            </Row>
            <Row justify="center">
              <TurnstoneSearch />
            </Row>
            <Spacer y={1} /> 
            <Row justify="center">
              <Text p>Then you'll be able to find the right permit, along with the required documents you'll need while filing</Text>
            </Row> 
          </Col>
        </Grid>
 
      </Grid.Container>
    </Container>
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