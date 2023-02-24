import React, { useState } from 'react'
import { AssistantCards } from './AssistantCards'
import { AssistantPages } from './AssistantPages'
import { useNavigate } from 'react-router-dom';
import { Container, Spacer, Grid, Card, Row, Text, Button, Col, Divider } from "@nextui-org/react";


//Draws the AssistantCards on the screen based on the AssistantPages array in QuestionCardsInfo.js
export function AssistantContent() {
    const [cardPage, setCardPage] = useState(0); //standard function component state changing 
    const [prevCardPage, setPrevCardPage] = useState(0);
    const navigate = useNavigate();
    console.log(cardPage);
    console.log('prev: ' + prevCardPage);

    
    const handlePress = () => { /**this function scroll the window back to the top of the page, is called on the "go back button" */
        window.scrollTo(0,0);
      };

    const goBack = () => { /**this function changes the state setter back to 0, which is the 'first' page for the /Assistant page with the AssistantCards on it. */
        if(cardPage === 1 || 2){
            setCardPage(0);
            console.log(cardPage);
        }
        if(cardPage > 2){
            setCardPage(prevCardPage);
            console.log(cardPage);
        }
    };

    function BackButton() { /* Function changes what is displayed in the continue button element based on if we are on the first page or not */
            return (
                <Button auto size="sm" rounded flat color="secondary" onPress={() => {goBack(); handlePress();}}>
                    Back
                </Button> 
            )
    }

    // Function for determining <Card.Header>; either 'Permit' or 'Permit Category'
    function CardHeader({endpage}) {
        if(endpage){
            return (
                <Card.Header css={{}}>
                    <Text weight="bold" color="secondary">Permit</Text>
                </Card.Header>
            )
        }
        return (
            <Card.Header>
                <Text weight="bold" color="primary">Permit Category</Text>
            </Card.Header>
        )
    }

    // Function for displaying start page help, might need to be broken out into dedicated file
    function StartHelp() {
        if(cardPage === 0){
            return (
                <>
                <Spacer y={1} />
                <Row justify='center'>
                    <Text h5>Choose between 'Residential' and 'Non-Residential' permits</Text>
                </Row>
                <Row justify='center'>
                    <Text p>Or choose 'Special Event' if you are applying to host a Special Event.</Text>
                </Row>
                </>
            )
        }
        return
    }

    // Function for displaying page indicator, might need to be broken out into dedicated file
    function PageIndicator() {
        if(cardPage !== 0){
            return (
                <>
                <Spacer y={1} />
                <Row width="60%" align="baseline" justify="space-between">
                    <BackButton />
                    <Text h5 weight="bold" css={{p: "0px 20px"}}>{AssistantPages[cardPage].name}</Text>
                </Row>
                </>
            )
        }
        return
    }

    // Function for giving non-endpage AssistantCards borders
    function cardVariant(endpage) {
        if(endpage === false){
            return "bordered"
        }
        return
    }

    return (
        <Container>
            <Spacer y={1} />
            <Row justify='center'>
                <Text h1>Permit Assistant</Text>
            </Row>
            <Row justify='center'>
                <Text h4>Navigate via the cards below based on your permitting needs</Text>
            </Row>
            <StartHelp page={cardPage} />
            <PageIndicator />
            <Spacer y={1} />
            <Divider />
            <Spacer y={1} />
            <Grid.Container gap={2} justify="center">
                {AssistantPages[cardPage].cards.map((cardList) => ( //Maps the AssistantPages array
                    //Key to keep items organized per React rules
                    <Grid xs={6} sm={6} lg={3} xl={3} justify="center" key={AssistantCards[cardList].id}> 
                        <Card 
                        isPressable
                        isHoverable
                        variant={cardVariant(AssistantCards[cardList].endpage)}
                        borderWeight="bold"
                        onPress={()=>{ //onClick function that changes the 'cardPage' state to the ID of the question displayed.
                            const paramID = '/nextsteps/' + AssistantCards[cardList].id;
                            console.log(AssistantCards[cardList].nextPage);
                            if(AssistantCards[cardList].endpage){
                                return navigate(paramID);
                            }
                            else{
                                setPrevCardPage((cardPage)); //set prevCardPage with cardPage
                                return (
                                    setCardPage((AssistantCards[cardList].nextPage)) //change CardPage based on 'nextPage' from AssistantCards
                                )
                                console.log(cardPage);
                                console.log('prev: ' + prevCardPage);
                            }
                            }}>
                            <CardHeader endpage={AssistantCards[cardList].endpage} />
                            <Card.Body>
                                <Row align="center">

                                    <Col>
                                        <Text h3>{AssistantCards[cardList].questionText}</Text>
                                        <Text h5>{AssistantCards[cardList].addinfo}</Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Grid>
                    ))}
            </Grid.Container>
            <Spacer y={1} />
            <Divider />
            <Spacer y={1} />
            <PageIndicator />
        </Container>
         );  
}