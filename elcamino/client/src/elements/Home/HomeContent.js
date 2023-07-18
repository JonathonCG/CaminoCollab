import { SearchBox } from "./AddressSearch/SearchBox"
import { Container, Spacer, Grid, Row, Text, Col, Button, Divider } from "@nextui-org/react";

export function HomeContent() {
    return(
        <Grid.Container justifyContent="center">
            <Col css={{ "width": "100%" }}>
                <Spacer y={1} />
                <Grid xs={12}>
                    <Row justify="center">
                        <Text h1>Community Development Assistant</Text>
                    </Row>
                    <Row justify="center">
                        <Text h4>This web app can help you file for a permit, license, or zoning request in Unincorporated Clayton County</Text>
                    </Row>
                    <Spacer y={1} />
                    <Row justify="center">
                        <Text h5>Type an address below to verify that it is in Unincorporated Clayton County</Text>
                    </Row>
                    <Row justify="center">
                        <Text p>Then you can navigate the assistant to find what you need along with the required documents you'll need while filing</Text>
                    </Row>
                    <Row justify="center">
                        <SearchBox />
                    </Row>
                    <Container>
                        <Spacer y={2} />
                        <Divider />
                        <Spacer y={2} />
                        <Row justify="center">
                            <Text p>If you already know how to navigate our Customer Self Service Portal, click below</Text>
                        </Row>
                        <Spacer y={0.5} />
                        <Row justify="center">
                            <Button 
                            color="warning" 
                            size="xs" 
                            auto 
                            ghost
                            css={{zIndex: "0"}}
                            as="a" 
                            href="https://selfservice.claytoncountyga.gov/energovprod/selfservice/#/home"
                            >
                                Existing Customers with CSS Login
                            </Button>
                        </Row>
                    </Container>
                </Grid>
            </Col>
        </Grid.Container>
    )
};