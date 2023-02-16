import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import _rightchevron from '../graphics/png/rightchevron.png'
import { Grid, Card, Row, Text, Button, Spacer } from "@nextui-org/react";

export function AddressSearchRedirect({isInClaytonCounty, zone}) {
    console.log ('zone is ' + zone)
    const [displayedString, setDisplayedString] = useState(0);
    const isFirstRender = useRef(true);
    let displayMessage = '';
    const navigate = useNavigate();
    useEffect(() => {
        console.log('in use effecccccctt')
        if (isFirstRender.current) {
            isFirstRender.current = false;
            
            return; // 👈️ return early if first render
          }
        // setDisplayedString();
    }, [isInClaytonCounty], [zone]);

        console.log('outside the effect'+displayMessage)



    if(isInClaytonCounty === 'JONESBORO'){
        return (
            <>
            <Spacer y={1} />
            <Row>
                <Card css={{padding: "1%"}}>
                    <Card.Header>
                        <Text h3>This address is within Jonesboro's City Limits</Text>
                    </Card.Header>
                    <Card.Body>
                        <Text h5>Zoning for this address is: {zone}</Text>
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>
                        <Grid.Container justify="center">
                            <a href='https://www.jonesboroga.com/OfficeOfTheCityManager.aspx'>
                                <Button auto flat color="warning">
                                    Go to Jonesboro Permits Page
                                </Button>
                            </a>
                        </Grid.Container>
                    </Card.Footer>
                </Card>
            </Row>
            </>
        );
    }
    else if(isInClaytonCounty === 'LOVEJOY'){
        return (
            <>
            <Spacer y={1} />
            <Row>
                <Card css={{padding: "1%"}}>
                    <Card.Header>
                        <Text h3>This address is within Lovejoy's City Limits</Text>
                    </Card.Header>
                    <Card.Body>
                        <Text h5>Zoning for this address is: {zone}</Text>
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>
                        <Grid.Container justify="center">
                            <a href='https://www.cityoflovejoy.com/936/Permits'>
                                <Button auto flat color="warning">
                                    Go to Lovejoy Permits Page
                                </Button>
                            </a>
                        </Grid.Container>
                    </Card.Footer>
                </Card>
            </Row>
            </>
        );
    }
    else if(isInClaytonCounty === 'LAKE CITY'){
        return (
            <>
            <Spacer y={1} />
            <Row>
                <Card css={{padding: "1%"}}>
                    <Card.Header>
                        <Text h3>This address is within Lake City's City Limits</Text>
                    </Card.Header>
                    <Card.Body>
                        <Text h5>Zoning for this address is: {zone}</Text>
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>
                    <Grid.Container justify="center">
                        <a href='https://lakecityga.net/departments-permitapplications.asp'>
                            <Button auto flat color="warning">
                                Go to Lake City Permits Page
                            </Button>
                        </a>
                    </Grid.Container>
                    </Card.Footer>
                </Card>
            </Row>
            </>
        );
    }
    else if(isInClaytonCounty === 'RIVERDALE'){
        return (
            <>
            <Spacer y={1} />
            <Row>
                <Card css={{padding: "1%"}}>
                    <Card.Header>
                        <Text h3>This address is within Riverdale's City Limits</Text>
                    </Card.Header>
                    <Card.Body>
                        <Text h5>Zoning for this address is: {zone}</Text>
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>
                        <Grid.Container justify="center">
                            <a href='https://www.riverdalega.gov/470/Permitting-Services'>
                                <Button auto flat color="warning">
                                    Go to Riverdale Permits Page
                                </Button>
                            </a>
                        </Grid.Container>
                    </Card.Footer>
                </Card>
            </Row>
            </>
        );
    }
    else if(isInClaytonCounty === 'MORROW'){
        return (
            <>
            <Spacer y={1} />
            <Row>
                <Card css={{padding: "1%"}}>
                    <Card.Header>
                        <Text h3>This address is within Morrow City Limits</Text>
                    </Card.Header>
                    <Card.Body>
                        <Text h5>Zoning for this address is: {zone}</Text>
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>
                        <Grid.Container justify="center">
                            <a href='http://www.cityofmorrow.com/government-cityhall-permitsforms.asp'>
                                <Button auto flat color="warning">
                                    Go to Morrow's Permits Page
                                </Button>
                            </a>

                        </Grid.Container>
                    </Card.Footer>
                </Card>
            </Row>
            </>
        );
    }
    else if(isInClaytonCounty === 'FOREST PARK'){
        return (
            <>
            <Spacer y={1} />
            <Row>
                <Card css={{padding: "1%"}}>
                    <Card.Header>
                        <Text h3>This address is within Forest Park City Limits</Text>
                    </Card.Header>
                    <Card.Body>
                        <Text h5>Zoning for this address is: {zone}</Text>
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>
                        <Grid.Container justify="center">
                            <a href='https://www.forestparkga.gov/planning/page/permits-and-applications'>
                                <Button auto flat color="warning">
                                    Go to Forest Park Permits Page
                                </Button>
                            </a>
                        </Grid.Container>
                    </Card.Footer>
                </Card>
            </Row>
            </>
        );
    }
    else if(isInClaytonCounty === 'UNINCORPORATED'){
        return (
            <>
            <Spacer y={1} />
            <Row>
                <Card css={{padding: "1%"}}>
                    <Card.Header>
                        <Text h3>This address in Unincorporated Clayton County</Text>
                    </Card.Header>
                    <Card.Body>
                        <Text h5>Zoning for this address is: {zone}</Text>
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer alignItems="center">
                        <Grid.Container justify="center">
                            <Button auto flat color="success" onPress={() => {return navigate('/Assistant')}}>
                                Continue to the Permit Assistant
                            </Button>
                        </Grid.Container>
                    </Card.Footer>
                </Card>
            </Row>
            </>

        );
    }
}


