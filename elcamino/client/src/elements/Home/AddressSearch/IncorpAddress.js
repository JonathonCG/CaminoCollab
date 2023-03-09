import { Spacer, Row, Card, Button, Text, Grid } from "@nextui-org/react";
import { useState, useEffect } from "react";

export function IncorpAddress({ city }) {
    const [permitURL, setPermitURL] = useState('#')

    useEffect(() => {
        if(city === 'College Park'){
            setPermitURL('https://www.collegeparkga.com/departments/building___inspections/permits')
        }
        else if(city === 'Forest Park'){
            setPermitURL('https://www.forestparkga.gov/planning/page/permits-and-applications')
        }
        else if(city === 'Jonesboro'){
            setPermitURL('https://www.jonesboroga.com/OfficeOfTheCityManager.aspx')
        }
        else if(city === 'Lake City'){
            setPermitURL('https://lakecityga.net/departments-permitapplications.asp')
        }
        else if(city === 'Lovejoy'){
            setPermitURL('https://www.cityoflovejoy.com/936/Permits')
        }
        else if(city === 'Morrow'){
            setPermitURL('http://www.cityofmorrow.com/government-cityhall-permitsforms.asp')
        }
        else if(city === 'Riverdale'){
            setPermitURL('https://www.riverdalega.gov/470/Permitting-Services')
        }
        else {
            return
        }
    }, [city]);


    return(
        <>
        <Spacer y={1} />
        <Row>
            <Card css={{padding: "1%"}}>
                <Card.Header>
                    <Text h4>This address is within {city}'s City Limits</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Footer>
                    <Grid.Container justify="center">
                        <a href={permitURL}>
                            <Button auto color="warning">
                                Go to {city} Permits Page
                            </Button>
                        </a>
                    </Grid.Container>
                </Card.Footer>
            </Card>
        </Row>
        </>
    )
}