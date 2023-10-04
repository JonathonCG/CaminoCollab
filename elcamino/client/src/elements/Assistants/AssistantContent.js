import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Spacer, Grid, Card, Row, Text, Button, Col, Divider } from "@nextui-org/react";


//Draws the LicenseCards on the screen based on the LicensePages array in QuestionCardsInfo.js
export function AssistantContent() {
    const navigate = useNavigate();

    const AssistantCards = [
        {
            id: 0,
            headerText: 'Assistant Category',
            bodyText: 'Permit',
            footerText: 'Go to the Permit Assistant for help with permits.',
            url: '/PermitAssistant?'
        },
        {
            id: 1,
            headerText: 'Assistant Category',
            bodyText: 'License',
            footerText: 'Go to the License Assistant for help with licensing.',
            url: '/LicenseAssistant?'
        },
        {
            id: 2,
            headerText: 'Assistant Category',
            bodyText: 'Planning and Zoning',
            footerText: 'Go to the Planning and Zoning Assistant for help with planning and zoning requests.',
            url: '/ZoningAssistant?'
        }
    ];

    function ReturnToAddressButton() {
        return(
            <Row justify="center">
                <Button auto size="sm" rounded ghost color="warning" onPress={() => {navigate('/')}}>
                    Return to Address Lookup
                </Button>
            </Row>
        )
    };

    // Function for displaying start page help, might need to be broken out into dedicated file
    function StartHelp() {
        return (
            <>
            <Spacer y={1} />
            <Row justify='center'>
                <Text h5>Would you like to file for a permit, license, or zoning request?</Text>
            </Row>
            </>
        )
    };


    return (
        <Container>
            <Spacer y={1} />
            <Row justify='center'>
                <Text h1>Community Development Assistant</Text>
            </Row>
            <Row justify='center'>
                <Text h4>Navigate via the cards below based on your needs</Text>
            </Row>
            <StartHelp />
            <Spacer y={1} />
            <Divider />
            <Spacer y={1} />
            <Grid.Container gap={2} justify="center">
            {AssistantCards.map((cardList) => ( // Maps the LicensePages array
                    // Key to keep items organized per React rules
                    <Grid xs={12} sm={6} md={5} lg={4} xl={4} justify="center" key={cardList.id}> 
                        <Card 
                        isPressable
                        isHoverable
                        variant="bordered"
                        borderWeight="bold"
                        onPress={()=>{ // navigate to desired assistant
                                return navigate(cardList.url);
                            }}
                        >
                            <Card.Header css={{paddingBottom: "0px"}}>
                                <Text weight="bold" color="success">
                                    {cardList.headerText}
                                </Text>
                            </Card.Header>
                            <Card.Body>
                                <Row align="center">
                                    <Col>
                                        <Text h3>{cardList.bodyText}</Text>
                                        <Text p>
                                            {cardList.footerText}
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
        </Container>
         );  
}