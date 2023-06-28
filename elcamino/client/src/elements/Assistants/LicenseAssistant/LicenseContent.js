import React, { useState } from 'react'
import { LicenseCards } from './LicenseCards'
import { LicensePages } from './LicensePages'
import { useNavigate } from 'react-router-dom';
import { Container, Spacer, Grid, Card, Row, Text, Button, Col, Divider } from "@nextui-org/react";


//Draws the LicenseCards on the screen based on the LicensePages array in QuestionCardsInfo.js
export function LicenseContent() {
    const [cardPage, setCardPage] = useState(0); //standard function component state changing 
    const [prevCardPage, setPrevCardPage] = useState(0);
    const navigate = useNavigate();
    console.log(cardPage);
    console.log('prev: ' + prevCardPage);

    
    const handlePress = () => { /**this function scroll the window back to the top of the page, is called on the "go back button" */
        window.scrollTo(0,0);
      };

    const goBack = () => { /**this function changes the state setter back to 0, which is the 'first' page for the /License page with the LicenseCards on it. */
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

    function ReturnToAddressButton() {
        if(cardPage === 0){
            return(
                <Row justify="center">
                    <Button auto size="sm" rounded ghost color="warning" onPress={() => {navigate('/')}}>
                        Return to Address Lookup
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
                    <Text h5>Choose between 'Residential' and 'Non-Residential' permits</Text>
                </Row>
                <Row justify='center'>
                    <Text p>Or choose 'Special Event' if you'd like to apply for a Special Event permit</Text>
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
                    <Text h5 weight="bold" css={{p: "0px 20px"}}>{LicensePages[cardPage].name}</Text>
                </Row>
                </>
            )
        };
        return
    };

    // Function for giving non-endpage LicenseCards borders
    function cardVariant(endpage) {
        if(endpage === false){
            return "bordered"
        };
        return
    };

    // Function for determining header color based on categoryText
    function headerColor(category) {
        const color = (category === 'Permit Category') ? 'primary' : 'secondary';
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
                <Text h1>License Assistant</Text>
            </Row>
            <Row justify='center'>
                <Text h4>Navigate via the cards below based on your licensing needs</Text>
            </Row>
            <StartHelp page={cardPage} />
            <PageIndicator />
            <Spacer y={1} />
            <Divider />
            <Spacer y={1} />
            <Grid.Container gap={2} justify="center">
                {LicensePages[cardPage].cards.map((cardList) => ( //Maps the LicensePages array
                    //Key to keep items organized per React rules
                    <Grid xs={12} sm={6} md={5} lg={4} xl={4} justify="center" key={LicenseCards[cardList].id}> 
                        <Card 
                        isPressable
                        isHoverable
                        variant={cardVariant(LicenseCards[cardList].endpage)}
                        borderWeight="bold"
                        onPress={()=>{ // onClick function that changes the 'cardPage' state to the ID of the question displayed.
                            const paramID = '/nextsteps/' + LicenseCards[cardList].id;
                            console.log(LicenseCards[cardList].nextPage);
                            if(LicenseCards[cardList].endpage){
                                return navigate(paramID);
                            }
                            else{
                                setPrevCardPage((cardPage)); // set prevCardPage with cardPage
                                return (
                                    setCardPage((LicenseCards[cardList].nextPage)) // change CardPage based on 'nextPage' from LicenseCards
                                )
                                console.log(cardPage);                                                  
                                console.log('prev: ' + prevCardPage);
                            }
                            }}>
                            <Card.Header>
                                <Text weight="bold" color={headerColor(LicenseCards[cardList].categoryText)}>
                                    {LicenseCards[cardList].categoryText}
                                </Text>
                            </Card.Header>
                            <Card.Body>
                                <Row align="center">
                                    <Col>
                                        <Text h3>{LicenseCards[cardList].questionText}</Text>
                                        <Text p color={addinfoColor(LicenseCards[cardList].categoryText)}>
                                            {LicenseCards[cardList].addinfo}
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
            <ReturnToAddressButton />
            <PageIndicator />
        </Container>
         );  
}