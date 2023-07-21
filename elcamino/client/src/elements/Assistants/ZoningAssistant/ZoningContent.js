import React, { useState } from 'react'
import { ZoningCards } from './ZoningCards'
import { ZoningPages } from './ZoningPages'
import { useNavigate } from 'react-router-dom';
import { Container, Spacer, Grid, Card, Row, Text, Button, Col, Divider } from "@nextui-org/react";


//Draws the ZoningCards on the screen based on the ZoningPages array in QuestionCardsInfo.js
export function ZoningContent() {
    const [cardPage, setCardPage] = useState(0); //standard function component state changing 
    const [prevCardPage, setPrevCardPage] = useState(0);
    const navigate = useNavigate();
    console.log(cardPage);
    console.log('prev: ' + prevCardPage);

    
    const handlePress = () => { /**this function scroll the window back to the top of the page, is called on the "go back button" */
        window.scrollTo(0,0);
      };

    const goBack = () => { /**this function changes the state setter back to 0, which is the 'first' page for the /Zoning page with the ZoningCards on it. */
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
            <Button auto size="sm" rounded ghost color="warning" onPress={() => {goBack(); handlePress();}}>
                Back
            </Button> 
        )
    };

    function ReturnToAssistantButton() {
        if(cardPage === 0){
            return(
                <Row justify="center">
                    <Button auto size="sm" rounded ghost color="warning" onPress={() => {navigate('/Assistant')}}>
                        Return to Assistant Selection
                    </Button>
                </Row>
            )
        } else {
            return
        };
    };

    // Function for displaying start page help, might need to be broken out into dedicated file
    function StartHelp() {
        if(cardPage === 0){
            return (
                <>
                <Spacer y={1} />
                <Row justify='center'>
                    <Text h5>Choose a 'Request' or 'Request Category' to continue</Text>
                </Row>
                <Row justify='center'>
                    <Text p></Text>
                </Row>
                </>
            )
        };
        return
    };

    // Function for displaying page indicator, might need to be broken out into dedicated file
    function PageIndicator() {
        if(cardPage !== 0){
            return (
                <>
                <Spacer y={1} />
                <Row width="60%" align="baseline" justify="space-between">
                    <BackButton />
                    <Text h5 weight="bold" css={{p: "0px 20px"}}>{ZoningPages[cardPage].name}</Text>
                </Row>
                </>
            )
        };
        return
    };

    // Function for giving non-endpage ZoningCards borders
    function cardVariant(endpage) {
        if(endpage === false){
            return "bordered"
        };
        return
    };

    // Function for determining header color based on categoryText
    function headerColor(category) {
        const color = (category === 'Request Category') ? 'primary' : 'secondary';
        return color
    };
    
    // Function for determining addinfo color based on categoryText
    function addinfoColor(category) {
        const color = (category === 'Plans Review') ? 'error' : 'black'; // if category = plans, make text red (error color), if not, make it black
        return color
    };

    return (
        <Container>
            <Spacer y={1} />
            <Row justify='center'>
                <Text h1>Zoning Assistant</Text>
            </Row>
            <Row justify='center'>
                <Text h4>Navigate via the cards below based on your zoning needs</Text>
            </Row>
            <StartHelp page={cardPage} />
            <PageIndicator />
            <Spacer y={1} />
            <Divider />
            <Spacer y={1} />
            <Grid.Container gap={2} justify="center">
                {ZoningPages[cardPage].cards.map((cardList) => ( //Maps the ZoningPages array
                    //Key to keep items organized per React rules
                    <Grid xs={12} sm={6} md={5} lg={4} xl={4} justify="center" key={ZoningCards[cardList].id}> 
                        <Card 
                        isPressable
                        isHoverable
                        variant={cardVariant(ZoningCards[cardList].endpage)}
                        borderWeight="bold"
                        onPress={()=>{ // onClick function that changes the 'cardPage' state to the ID of the question displayed.
                            const paramID = '/ZoningRequirements/' + ZoningCards[cardList].id;
                            console.log(ZoningCards[cardList].nextPage);
                            if(ZoningCards[cardList].endpage){
                                return navigate(paramID);
                            }
                            else{
                                setPrevCardPage((cardPage)); // set prevCardPage with cardPage
                                return (
                                    setCardPage((ZoningCards[cardList].nextPage)) // change CardPage based on 'nextPage' from ZoningCards
                                )
                            }
                            }}>
                            <Card.Header css={{paddingBottom: "0px"}}>
                                <Text weight="bold" color={headerColor(ZoningCards[cardList].categoryText)}>
                                    {ZoningCards[cardList].categoryText}
                                </Text>
                            </Card.Header>
                            <Card.Body>
                                <Row align="center">
                                    <Col>
                                        <Text h3>{ZoningCards[cardList].questionText}</Text>
                                        <Text p color={addinfoColor(ZoningCards[cardList].categoryText)}>
                                            {ZoningCards[cardList].addinfo}
                                        </Text>
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
            <ReturnToAssistantButton />
            <PageIndicator />
        </Container>
         );  
}