import { Card, Text, Spacer, Grid, Button, Row } from "@nextui-org/react";

export function ZeroAddress() {
    return(
        <>
        <Spacer y={1} />
        <Row>
        <Card css={{padding: "1%"}}>
            <Card.Body>
                <Text h5>Permits cannot be applied for without a valid address</Text>
                <Text p>Please apply for an address using the application below</Text>
                <Text 
                css={{topPadding: "4px"}} 
                size={12}
                >
                    You can find your parcel # with our <Text 
                    css={{textDecoration: "underline"}} 
                    as="a" 
                    href="https://cccd-gis.maps.arcgis.com/apps/webappviewer/index.html?id=e04360c69dc34c3fbfad14fcb42f10a5"
                    target="_blank"
                    >
                        parcel viewer
                    </Text>
                </Text>
            </Card.Body>
            <Card.Divider />
                <Card.Footer>
                    <Grid.Container justify="center">
                        <a 
                        href='https://www.claytoncountyga.gov/wp-content/uploads/2022/06/Address-Assignment-Application.pdf'
                        target="_blank"
                        >
                            <Button auto color="warning">
                                Download Address Assignment Application
                            </Button>
                        </a>
                    </Grid.Container>
                </Card.Footer>
        </Card>
        </Row>
        </>
    )
}