import React from 'react'
import { PermitCards } from './PermitCards'
import { PermitPages } from './PermitPages'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Container, Spacer, Grid, Card, Row, Text, Button, Col, Divider } from "@nextui-org/react";


//Draws the PermitCards on the screen based on the PermitPages array in QuestionCardsInfo.js
export function PermitContent() {
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
            <Button auto size="sm" rounded ghost color="warning" onPress={() => {goBack()}} >
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
                    <Text h5>Choose between 'Residential' and 'Non-Residential' permits</Text>
                </Row>
                <Row justify='center'>
                    <Text p>or choose 'Special Event' if you'd like to apply for a Special Event permit</Text>
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
                    <Text h5 weight="bold" css={{p: "0px 20px"}}>{PermitPages[cardPage].name}</Text>
                </Row>
                </>
            )
        };
        return
    };

    // Function for giving non-endpage PermitCards borders
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
                {PermitPages[cardPage].cards.map((cardList) => ( //Maps the PermitPages array
                    //Key to keep items organized per React rules
                    <Grid xs={12} sm={6} md={5} lg={4} xl={4} justify="center" key={PermitCards[cardList].id}> 
                        <Card 
                        isPressable
                        isHoverable
                        variant={cardVariant(PermitCards[cardList].endpage)}
                        borderWeight="bold"
                        onPress={()=>{ // onClick function that changes the 'cardPage' state to the ID of the question displayed.
                            const paramID = '/PermitRequirements/' + PermitCards[cardList].id;
                            console.log(PermitCards[cardList].nextPage);
                            if(PermitCards[cardList].endpage){
                                return navigate(paramID);
                            } else {
                                return (
                                    navigate(`/PermitAssistant?page=${PermitCards[cardList].nextPage}`)
                                )
                            }
                            }}>
                            <Card.Header css={{paddingBottom: "0px"}}>
                                <Text weight="bold" color={headerColor(PermitCards[cardList].categoryText)}>
                                    {PermitCards[cardList].categoryText}
                                </Text>
                            </Card.Header>
                            <Card.Body>
                                <Row align="center">
                                    <Col>
                                        <Text h3>{PermitCards[cardList].questionText}</Text>
                                        <Text p color={addinfoColor(PermitCards[cardList].categoryText)}>
                                            {PermitCards[cardList].addinfo}
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