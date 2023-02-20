import { AssistantCards } from "../elements/Assistant/AssistantCards"
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { prereqs } from "../elements/EndPage/prereqs";
import { useState } from "react";
import { Container, Spacer, Grid, Card, Row, Col, Text, Button, Checkbox } from "@nextui-org/react";
import { EndPageNavbar } from '../elements/Navbar';

export function EndPage() {
  document.title = "Permit Requirements"

  const { id } = useParams();
  const navigate = useNavigate()
  const [selected, setSelected] = useState(false); /**State setting for the checkbox */

  function ContinueButton({selected}) { /* Function changes what is displayed in the continue button element based on if "ischecked" is true or false */
    if(selected){
      return (
          <Button as="a" href={AssistantCards[id].endpagelink} size="lg" shadow color="gradient">
            Continue to the Permit Application
          </Button>
      )
    }
    return (
          <Button size="md" disabled>
            Continue to the Permit Application
          </Button>
    )
  }

  function labelColor() { /* Funtion that changes the text color next to the CheckBox */
    if(selected){
      return "success"
    }
    return
  }

  return (
    <Container>
      <EndPageNavbar />
      <Spacer y={1} />
      <Grid.Container>

      <Grid css={{p: "20px"}} justify="center">
        <Row>

        </Row>
          <Text h3>{AssistantCards[id].questionText}</Text>
          <Text h5>Below are the requirements you will need <em>before</em> applying for your permit. You will need to present these during the permitting process.</Text>
          
          <ol> 
          {AssistantCards[id].requirements.map((reqs) => (
            <li>{prereqs[reqs]}</li>
          ))}
          </ol>

          {/* <CheckboxCard /> */}
          <Card css={{p: "10px"}}>
            <Row justify="center">
              <Checkbox onChange={setSelected} color="success" labelColor={labelColor()}>
                I have read the requirements and acknowledge that I have completed/acquired them prior to my application
              </Checkbox>
            </Row>
          </Card>

      </Grid>
      <Grid css={{p: "10px", w: "100%"}} alignContent="center">
          <Row justify="center">
            <ContinueButton selected={selected} />
          </Row>
          <Spacer y={2} />
          <Row justify="center">
            <Button auto size="sm" onPress={() => {return navigate('/assistant')}}>
            Go back
            </Button>
          </Row>
      </Grid>


      </Grid.Container>
    </Container>
    )
}

// <input type="checkbox" id={reqs} checked={isChecked} onChange={handleChange} />