import { useNavigate } from 'react-router-dom';
import { Spacer, Row, Card, Button, Text, Grid } from "@nextui-org/react";

export function UnincorpAddr({zone, addr}) {
    const navigate = useNavigate();

    return(
        <>
            <Spacer y={1} />
            <Row>
                <Card css={{padding: "1%"}}>
                    <Card.Header>
                        <Text h3>This address in Unincorporated Clayton County</Text>
                    </Card.Header>
                    <Card.Divider />
                    <Card.Body>
                        <Text h5>
                            Zoning for this address is: <Text 
                            css={{textDecoration: "underline"}} 
                            as="a" 
                            href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO"
                            target="_blank"
                            >
                                {zone}
                            </Text>
                            *
                        </Text>
                        <Text p>
                            *For official zoning, file for a <Text 
                            css={{textDecoration: "underline"}} 
                            as="a" 
                            href="https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/plan/apply/60/0/0"
                            target="_blank"
                            >
                                Zoning Verification Letter
                            </Text>
                        </Text>
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>
                        <Grid.Container justify="center">
                            <Button css={{width: "50%", margin: "0% 15%"}} color="primary" onPress={() => {return navigate('/PermitAssistant')}}>
                                Continue to the Permit Assistant
                            </Button>
                            <Button css={{width: "50%", margin: "1% 15% 0% 15%"}} color="primary" onPress={() => {return navigate('/LicenseAssistant')}}>
                                Continue to the License Assistant
                            </Button>
                            <Button 
                            css={{width: "40%", margin: "3% 25% 0%"}} 
                            auto size="xs" color="primary" ghost
                            as="a" href={`https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/search?m=1&fm=1&ps=10&pn=1&em=true&st=${encodeURIComponent(addr)}`}
                            target="_blank"
                            >
                                Check for existing permits and licenses here
                            </Button>
                        </Grid.Container>
                    </Card.Footer>
                </Card>
            </Row>
            </>
    )
}