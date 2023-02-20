import React, { useState } from 'react'
import { AssistantCards } from './AssistantCards'
import { AssistantPages } from './AssistantPages'
import { useNavigate } from 'react-router-dom';
import { Container, Spacer, Grid, Card, Row, Text, Button, Col } from "@nextui-org/react";


//Draws the AssistantCards on the screen based on the AssistantPages array in QuestionCardsInfo.js
export function AssistantContent() {
    const [cardPage, setCardPage] = useState(0); //standard function component state changing 
    console.log(cardPage);
    const navigate = useNavigate();
    
    const handlePress = () => { /**this function scroll the window back to the top of the page, is called on the "go back button" */
        window.scrollTo(0,0);
      };

    const goBack = () => { /**this function changes the state setter back to 0, which is the 'first' page for the /Assistant page with the AssistantCards on it. */
    setCardPage(0);
    console.log(cardPage);
    };

    function BackButton({page}) { /* Function changes what is displayed in the continue button element based on if we are on the first page or not */
        if(page){
            return <Button auto rounded flat color="primary" onPress={() => {goBack(); handlePress();}}>Back</Button> 
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

    // Function for determining <Card.Header>; either 'Permit' or 'Permit Category'
    function QuestionHeader({endpage}) {
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
    function StartHelp({page}) {
        if(page === 0){
            return (
                <>
                <Spacer y={1} />
                <Row justify='center'>
                    <Text h5>Pick the general zoning type that best describes the property you need a permit for.</Text>
                </Row>
                <Row justify='center'>
                    <Text p>Choose 'Special Event' if you are applying to host a Special Event.</Text>
                </Row>
                </>
            )
        }
        return
    }

    // Function for displaying page indicator, might need to be broken out into dedicated file
    function PageIndicator({page}) {
        if(page !== 0){
            return (
                <>
                <Spacer y={1} />
                <Row justify='left'>
                    <Text h5>{}</Text>
                </Row>
                </>
            )
        }
        return
    }

    return (
        <Container>
            <Spacer y={1} />
            <Row justify='center'>
                <Text h3>Navigate via the cards below based on your permitting needs</Text>
            </Row>
            <Row justify='center'>
                <Text h3></Text>
            </Row>
            {/* <StartHelp page={cardPage} />
            <PageIndicator page={cardPage} /> */}

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
                                return (
                                    setCardPage((AssistantCards[cardList].nextPage))
                                );
                                console.log(cardPage)
                            }
                            }}>
                            <QuestionHeader endpage={AssistantCards[cardList].endpage} />
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
            <Row justify="center">
                <BackButton page={cardPage} /> 
            </Row>
        </Container>
        
        // <Button onClick={() => {return navigate('/')}}>Back to Address Lookup</Button>
         );  
}