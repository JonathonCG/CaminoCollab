import { SearchBox } from "./AddressSearch/SearchBox"
import { Container, Spacer, Grid, Row, Text, Col, Button, Divider } from "@nextui-org/react";
import { HelpMenu } from "./HelpMenu";

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
                        <Text h4>The Community Development Assistant is here to help you file a permit, zoning requests, and acquire licensing in unincorporated Clayton County</Text>
                    </Row>
                    <Spacer y={2} />
                    <Row justify="center">
                        <Text h5>Type an address below to verify that it is in Unincorporated Clayton County</Text>
                    </Row>
                    <Row justify="center">
                        <Text p>Then you'll be able to advance to the Assistant</Text>
                    </Row>
                    <Row justify="center">
                        <SearchBox />
                    </Row>
                    <Spacer y={2} />
                    <Row justify="center">
                        <HelpMenu />
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
                            href="https://claytoncountyga-energovweb.tylerhost.net/apps/selfservice/#/home"
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
