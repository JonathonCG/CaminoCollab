import React from 'react'
import { LicenseCards } from './LicenseCards'
import { LicensePages } from './LicensePages'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Container, Spacer, Grid, Card, Row, Text, Button, Col, Divider } from "@nextui-org/react";


//Draws the LicenseCards on the screen based on the LicensePages array in QuestionCardsInfo.js
export function LicenseContent() {
    // Read 'state' from the URL, if no parameters are given, set page to zero
    const [searchParams] = useSearchParams();
    const cardPage = searchParams.get("page") ?? 0;

    const navigate = useNavigate();

    const goBack = () => {
        window.scrollTo(0,0);
        navigate(-1);
    };

    function BackButton() { /* Function changes what is displayed in the continue button element based on if we are on the first page or not */
        return (
            <Button auto size="sm" rounded ghost color="warning" onPress={() => {goBack()}}>
                Back
            </Button> 
        )
    };

    function ReturnToAssistantButton() {
        if(!cardPage){
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
        if(cardPage){
            return (
                <>
                <Spacer y={1} />
                <Row justify='center'>
                    <Text h5>Choose between 'Commercial' and 'Home' licenses </Text>
                </Row>
                <Row justify='center'>
                    <Text p>or choose 'Alcohol' if you'd like to apply to serve alcohol</Text>
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
                    <Text h5 weight="bold" css={{p: "0px 20px"}}>
                        {LicensePages[cardPage].name}
                    </Text>
                </Row>
                </>
            )
        };
        return
    };

    // Function for giving non-endpage LicenseCards borders
    function cardVariant(endpage, category) {
        if(category === 'Information') {
            return 'bordered'
        } else if(endpage === false) {
            return 'bordered'
        };
        return
    };

    // Function for determining header color based on categoryText
    function headerColor(category) {
        if(category === 'License Category') {
            return "primary"
        } else if(category === 'Information') {
            return "warning"
        } else {
            return "secondary"
        };
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
                    // Key to keep items organized per React rules
                    <Grid xs={12} sm={6} md={5} lg={4} xl={4} justify="center" key={LicenseCards[cardList].id}> 
                        <Card 
                        isPressable
                        isHoverable
                        variant={cardVariant(LicenseCards[cardList].endpage, LicenseCards[cardList].categoryText)}
                        borderWeight="bold"
                        onPress={()=>{ // onClick function that changes the 'cardPage' state to the ID of the question displayed.
                            const paramID = '/LicenseRequirements/' + LicenseCards[cardList].id;
                            if(LicenseCards[cardList].categoryText == 'Information') {
                                return (
                                    window.open(
                                        LicenseCards[cardList].endpagelink, 
                                        "_blank", 
                                        "noreferrer"
                                    )
                                )
                            } else if(LicenseCards[cardList].endpage) {
                                return navigate(paramID);
                            } else {
                                return (
                                    navigate(`/LicenseAssistant?page=${LicenseCards[cardList].nextPage}`)
                                )
                            }
                            }}
                        >
                            <Card.Header css={{paddingBottom: "0px"}}>
                                <Text weight="bold" color={headerColor(LicenseCards[cardList].categoryText)}>
                                    {LicenseCards[cardList].categoryText}
                                </Text>
                            </Card.Header>
                            <Card.Body>
                                <Row align="center">
                                    <Col>
                                        <Text h3>{LicenseCards[cardList].questionText}</Text>
                                        <Text p>{LicenseCards[cardList].addinfo}</Text>
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