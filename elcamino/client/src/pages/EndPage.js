import { AssistantCards } from "../elements/Assistant/AssistantCards"
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Container, Spacer, Grid, Card, Row, Text, Button, Checkbox, Divider } from "@nextui-org/react";
import { EndPageNavbar } from '../elements/Navbar';
import { ContinueButton } from '../elements/EndPage/ContinueButton'
import { prereqs } from "../elements/EndPage/prereqs";
import { Footer } from "../elements/Footer";

export function EndPage() {
  document.title = "Permit Requirements"

  const { id } = useParams();
  const navigate = useNavigate()
  const [selected, setSelected] = useState(false); /**State setting for the checkbox */
  const [groupSelected, setGroupSelected] = useState([])
  const card = AssistantCards[id]
  const cardReqs = AssistantCards[id].requirements

  function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
      return false;
    for(var i = arr1.length; i--;) {
      if(arr1[i] !== arr2[i])
        return false;
    }
    return true;
  };

  useEffect(() => {
    console.log('G: ' + groupSelected);
    console.log('C: ' + cardReqs)
    if(arraysEqual(groupSelected, cardReqs)) {
      setSelected(true)
    }
  }, [groupSelected]);

  useEffect(() => {
    if(selected === true) {
      setGroupSelected(cardReqs)
    }
    if(selected === false) {
      setGroupSelected([])
    }
  }, [selected])

  function cardVariant() { /* Funtion that changes the text color next to the CheckBox */
  if(selected){
    return "bordered"
  }
}

  return (
    <>
    <EndPageNavbar />
    <Container lg>
      <Grid.Container justify="center">
        <Grid  css={{p: "20px"}}>
          <Row justify="center">
            <Text h1>Permit Requirements</Text>
          </Row>
          <Card css={{p: "10px"}}>
            <Text h3>{card.questionText} Permit</Text>
            <Text h5>
              Below are the requirements you will need <em>before</em> applying for your permit. You will need to present these during the permitting process.
            </Text>
            <Divider />
            <Spacer y={0.5} />
            <Checkbox.Group
              label="Permit Requirements Checklist"
              color="primary"
              size="sm"
              value={groupSelected}
              onChange={setGroupSelected}
              > 
              {card.requirements.map((reqs) => ( //Mapping requirements to Checkboxes
                <Checkbox lineThrough value={prereqs[reqs].id}>
                  {prereqs[reqs].name}
                </Checkbox>
              ))}
            </Checkbox.Group>
          </Card>

          <Spacer y={1} />
          {/* <CheckboxCard /> */}
          <Card isHoverable variant={cardVariant()} borderWeight="bold" css={{p: "10px"}}>
            <Row justify="center">
              <Checkbox isSelected={selected} onChange={setSelected} color="secondary">
                I have read the requirements and acknowledge that I have completed/acquired them prior to my application
              </Checkbox>
            </Row>
          </Card>
        </Grid>
        <Grid css={{p: "10px", w: "100%"}}>
            <Row justify="center">
              <ContinueButton selected={selected} cardlink={card.endpagelink} />
            </Row>
            <Spacer y={2} />
            <Row justify="center">
              <Button auto size="sm" onPress={() => {return navigate('/assistant')}}>
              Go back
              </Button>
            </Row>
        </Grid>
      </Grid.Container>
      <Footer />
    </Container>
    </>
    )
}

// <input type="checkbox" id={reqs} checked={isChecked} onChange={handleChange} />