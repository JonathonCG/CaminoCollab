import { AddressSearch } from "./AddressSearch"
import CommDevLogo  from '.../graphics/CommDev.png'
import { Spacer, Grid, Row, Text, Col, Button } from "@nextui-org/react";

export function HomeContent() {
    <Grid.Container justify="center">
        <Col css={{ "width": "100%" }}>
        <Spacer y={1} />
        <Row justify="center">
            <img width="150" src={CommDevLogo} alt='Community Development Logo'></img>
        </Row>
        <Grid>
        <Row justify="center">
            <Text h1>Permit Assistant</Text>
        </Row>
        <Row justify="center">
            <Text h4>Enter the address of where you would like to file a permit</Text>
        </Row>
        <Row justify="center">
            <Text h5>We'll verify that the address is in Unincorporated Clayton County</Text>
        </Row>
        <Row justify="center">
            <AddressSearch />
        </Row>
        <Spacer y={1} />
        <Row justify="center">
            <Text p>Then you'll be able to find the right permit, along with the required documents you'll need while filing</Text>
        </Row>
        <Spacer y={1} />
        <Row justify="center">
            {/* <Button sm auto as="a" href="https://selfservice.claytoncountyga.gov/energovprod/selfservice/Home#/home">
                Existing Customers with CSS Login
            </Button> */}
        </Row>
        </Grid>
        </Col>
    </Grid.Container>
};

