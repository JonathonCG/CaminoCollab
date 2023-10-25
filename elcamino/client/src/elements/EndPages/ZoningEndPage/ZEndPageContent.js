import { ZoningCards } from "../../Assistants/ZoningAssistant/ZoningCards";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Spacer, Grid, Card, Row, Text, Button, Checkbox, Divider } from "@nextui-org/react";
import { ContinueButton } from '../ContinueButton'
import { zoningPrereqs } from "./zoningPrereqs";
import { ZoningPrereqTips } from "./ZoningPrereqTips";


export function ZEndPageContent() {
    const { id } = useParams();
    const navigate = useNavigate()
    const [selected, setSelected] = useState(false); /**State setting for the checkbox */
    const [groupSelected, setGroupSelected] = useState([])
    const card = ZoningCards[id]
    const cardReqs = card.requirements
    const cardCategoryText = card.categoryText

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
    }, [selected]);

    // Funtion that changes the text color next to the CheckBox
    function cardVariant() { 
        if(selected){
            return "bordered"
        }
    };
    
    return(
      <Grid.Container justify="center">
      <Grid  css={{p: "20px"}}>
        <Row justify="center">
          <Text h1>Planning and Zoning Requirements</Text>
        </Row>
        <Card css={{p: "10px"}}>
          <Text h3>{card.questionText} Request</Text>
          <Text h5>
            Below are the requirements you will need <em>before</em> applying for your zoning request. You will need to present these during the Zoning process.
          </Text>
          <Divider />
          <Spacer y={0.5} />
          <Checkbox.Group
            label="Requirements Checklist"
            color="primary"
            size="sm"
            value={groupSelected}
            onChange={setGroupSelected}
            > 
            {card.requirements.map((reqs) => ( //Mapping requirements to Checkboxes
              <Checkbox lineThrough value={zoningPrereqs[reqs].id}>
                {zoningPrereqs[reqs].name} <ZoningPrereqTips tip={zoningPrereqs[reqs].tip} />
              </Checkbox>
            ))}
          </Checkbox.Group>
        </Card>
        <Spacer y={1} />
        {/* <CheckboxCard /> */}
        <Card isHoverable variant={cardVariant()} borderWeight="bold" css={{p: "10px"}}>
          <Row justify="center">
            <Checkbox isSelected={selected} onChange={setSelected} color="warning">
              I have read the requirements and acknowledge that I have completed/acquired them prior to my application
            </Checkbox>
          </Row>
        </Card>
      </Grid>
      <Grid css={{p: "10px", w: "100%"}}>
          <Row justify="center">
            <ContinueButton category={cardCategoryText} selected={selected} cardlink={card.endpagelink} />
          </Row>
          <Row justify="center">
            <Text color="error" p>
              ** You will be required to login/register to our Customer Self-Service on the next page
            </Text>
          </Row>
          <Spacer y={2} />
          <Row justify="center">
            <Button auto size="sm" rounded ghost color="warning" onPress={() => {navigate('/Assistant')}}>
              Restart Assistant
            </Button>
          </Row>
      </Grid>
    </Grid.Container>
  )
};