import { PermitCards } from '../../Assistants/PermitAssistant/PermitCards';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Spacer, Grid, Card, Row, Text, Button, Checkbox, Divider } from "@nextui-org/react";
import { ContinueButton } from '../ContinueButton'
import { permitPrereqs } from "./permitPrereqs";
import { PrereqTips } from "./PermitPrereqTips";


export function PEndPageContent() {
    const { id } = useParams();
    const navigate = useNavigate()
    const [selected, setSelected] = useState(false); /**State setting for the checkbox */
    const [groupSelected, setGroupSelected] = useState([])
    const card = PermitCards[id]
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
    
    // return different end pages (either permit or plans review) depending on the categoryText
    if(cardCategoryText === 'Plans Review') {
      return(
        <Grid.Container justify="center">
        <Grid  css={{p: "20px"}}>
          <Row justify="center">
            <Text h1>Plans Review Requirements</Text>
          </Row>
          <Card css={{p: "10px"}}>
            <Text h3>{card.questionText}</Text>
            <Text h5>
              It is the responsibility of the applicant to verify proper zoning for the intended use. The review/approval of your plans is only for architectural plans review and does not address zoning requirements.
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
                <Checkbox lineThrough value={permitPrereqs[reqs].id}>
                  {permitPrereqs[reqs].name} <PrereqTips tip={permitPrereqs[reqs].tip} />
                </Checkbox>
              ))}
            </Checkbox.Group>
          </Card>
          <Spacer y={1} />
          {/* <CheckboxCard /> */}
          <Card isHoverable variant={cardVariant()} borderWeight="bold" css={{p: "10px"}}>
            <Row justify="center">
              <Checkbox isSelected={selected} onChange={setSelected} color="warning">
                I have read the requirements and acknowledge that I have completed/acquired them prior to submitting my review
              </Checkbox>
            </Row>
          </Card>
        </Grid>
        <Grid css={{p: "10px", w: "100%"}}>
            <Row justify="center">
              <ContinueButton category={cardCategoryText} selected={selected} cardlink={card.endpagelink} />
            </Row>
            <Row justify="center">
              <Text color="#6e6e6e" p>
                ** You will be required to login/register to our Customer Self-Service on the next page
              </Text>
            </Row>
            <Spacer y={2} />
            <Row justify="center">
              <Button auto size="sm" onPress={() => {return navigate('/assistant')}}>
              Go back
              </Button>
            </Row>
        </Grid>
      </Grid.Container>
      )
    } else {
      return(
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
                  <Checkbox lineThrough value={permitPrereqs[reqs].id}>
                    {permitPrereqs[reqs].name} <PrereqTips tip={permitPrereqs[reqs].tip} />
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
};