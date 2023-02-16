import React, { useState } from 'react'
import { Questions, QuestionGroups } from './QuestionCardsInfo'
import rightchevron from '../graphics/png/icons8-chevron-right-50.png';
import { useNavigate } from 'react-router-dom';
import { Container, Spacer, Grid, Card, Row, Text, Button, Col, Image } from "@nextui-org/react";


//Draws the question cards on the screen based on the QuestionGroups array in QuestionCardsInfo.js
export function Cards() {
    const [cardPage, setCardPage] = useState(0); //standard function component state changing 
    const navigate = useNavigate();
    
    const handleClick = () => { /**this function scroll the window back to the top of the page, is called on the "go back button" */
        window.scrollTo(0,0);
      };

    const goBack = () => { /**this function changes the state setter back to 0, which is the 'first' page for the /Assistant page with the cards on it. */
    setCardPage(0);
    };

    function BackButton({endpage}) { /* Function changes what is displayed in the continue button element based on if we are on the first page or not */
        if(endpage){
            return <Button auto rounded flat color="primary" onClick={() => {goBack(); handleClick();}}>Back</Button> 
        }
            return
    }

    // Function for determining if the card has a background image
    function renderBgImg(bgImg) {
        if(Boolean(bgImg)){
            return <Card.Image src={bgImg} objectFit="cover" />
        }
            return
    }

    return (
        <Container>
            <Grid.Container gap={2} justify="center">
                {QuestionGroups[cardPage].map((cardList) => ( //Maps the QuestionGroups array
                    //Key to keep items organized per React rules
                    <Grid xs={6} sm={6} lg={3} justify="center" key={Questions[cardList].id}> 
                        <Card 
                        isPressable
                        isHoverable
                        onPress={()=>{ //onClick function that changes the 'cardPage' state to the ID of the question displayed.
                            const paramID = '/nextsteps/' + Questions[cardList].id;
                            console.log(Questions[cardList].nextPage);
                            if(Questions[cardList].endpage){
                                return navigate(paramID);
                            }
                            else{
                                return setCardPage((Questions[cardList].nextPage))
                            }
                            }}>
                            <Card.Header>
                                <Row align="center">
                                    {/* <Image src={Questions[cardList].icon} /> */}
                                    <Spacer y={1} />
                                    <Col>
                                        <Text h3>{Questions[cardList].questionText}</Text>
                                        <Text hide h5>{Questions[cardList].addinfo}</Text>
                                    </Col>
                                    {/* <Image src={rightchevron} width="10%" align="right" /> */}
                                </Row>
                            </Card.Header>
                            <Card.Body css={{ p: 0 }}>
                                {/* <Card.Image 
                                src={Questions[cardList].bgImg} 
                                width="100%"
                                height="100%"
                                objectFit="cover"
                                /> */}
                            </Card.Body>
                        </Card>
                    </Grid>
                    ))}
            </Grid.Container>
            <Spacer y={1} />
            <Row justify="center">
                <BackButton endpage={cardPage} /> 
            </Row>
        </Container>
        
        // <Button onClick={() => {return navigate('/')}}>Back to Address Lookup</Button>
         );  
}