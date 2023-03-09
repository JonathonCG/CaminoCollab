import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { IncorpAddress } from './IncorpAddress';
import { UnincorpAddr } from './UnincorpAddress';

export function AddressSearchRedirect({addr, isInClaytonCounty, zone}) {
    const isFirstRender = useRef(true);
    const navigate = useNavigate();
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            
            return; // 👈️ return early if first render
          }
    }, [isInClaytonCounty], [zone]);

    function titleCase(str) {
        return str.toLowerCase().split(' ').map(function(word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
      };


    if(isInClaytonCounty === ''){

        return;
    }
    else if(isInClaytonCounty === 'UNINCORPORATED'){
        return (
            <UnincorpAddr addr={addr} zone={zone} />
        );
    }
    else if(isInClaytonCounty === 'COLLEGE PARK' || 'FOREST PARK' || 'LAKE CITY' || 'LOVEJOY' || 'JONESBORO' || 'RIVERDALE' ) {
        const city = titleCase(isInClaytonCounty)
        return(
            <IncorpAddress city={city} />
        );
    };

    // if(isInClaytonCounty === 'JONESBORO'){
    //     return (
    //         <>
    //         <Spacer y={1} />
    //         <Row>
    //             <Card css={{padding: "1%"}}>
    //                 <Card.Header>
    //                     <Text h4>This address is within Jonesboro's City Limits</Text>
    //                 </Card.Header>
    //                 <Card.Divider />
    //                 <Card.Footer>
    //                     <Grid.Container justify="center">
    //                         <a href='https://www.jonesboroga.com/OfficeOfTheCityManager.aspx'>
    //                             <Button auto color="warning">
    //                                 Go to Jonesboro Permits Page
    //                             </Button>
    //                         </a>
    //                     </Grid.Container>
    //                 </Card.Footer>
    //             </Card>
    //         </Row>
    //         </>
    //     );
    // }
    // else if(isInClaytonCounty === 'LOVEJOY'){
    //     return (
    //         <>
    //         <Spacer y={1} />
    //         <Row>
    //             <Card css={{padding: "1%"}}>
    //                 <Card.Header>
    //                     <Text h4>This address is within Lovejoy's City Limits</Text>
    //                 </Card.Header>
    //                 <Card.Divider />
    //                 <Card.Footer>
    //                     <Grid.Container justify="center">
    //                         <a href='https://www.cityoflovejoy.com/936/Permits'>
    //                             <Button auto color="warning">
    //                                 Go to Lovejoy Permits Page
    //                             </Button>
    //                         </a>
    //                     </Grid.Container>
    //                 </Card.Footer>
    //             </Card>
    //         </Row>
    //         </>
    //     );
    // }
    // else if(isInClaytonCounty === 'LAKE CITY'){
    //     return (
    //         <>
    //         <Spacer y={1} />
    //         <Row>
    //             <Card css={{padding: "1%"}}>
    //                 <Card.Header>
    //                     <Text h4>This address is within Lake City's City Limits</Text>
    //                 </Card.Header>
    //                 <Card.Divider />
    //                 <Card.Footer>
    //                 <Grid.Container justify="center">
    //                     <a href='https://lakecityga.net/departments-permitapplications.asp'>
    //                         <Button auto color="warning">
    //                             Go to Lake City Permits Page
    //                         </Button>
    //                     </a>
    //                 </Grid.Container>
    //                 </Card.Footer>
    //             </Card>
    //         </Row>
    //         </>
    //     );
    // }
    // else if(isInClaytonCounty === 'RIVERDALE'){
    //     return (
    //         <>
    //         <Spacer y={1} />
    //         <Row>
    //             <Card css={{padding: "1%"}}>
    //                 <Card.Header>
    //                     <Text h4>This address is within Riverdale's City Limits</Text>
    //                 </Card.Header>
    //                 <Card.Divider />
    //                 <Card.Footer>
    //                     <Grid.Container justify="center">
    //                         <a href='https://www.riverdalega.gov/470/Permitting-Services'>
    //                             <Button auto color="warning">
    //                                 Go to Riverdale Permits Page
    //                             </Button>
    //                         </a>
    //                     </Grid.Container>
    //                 </Card.Footer>
    //             </Card>
    //         </Row>
    //         </>
    //     );
    // }
    // else if(isInClaytonCounty === 'MORROW'){
    //     return (
    //         <>
    //         <Spacer y={1} />
    //         <Row>
    //             <Card css={{padding: "1%"}}>
    //                 <Card.Header>
    //                     <Text h4>This address is within Morrow City Limits</Text>
    //                 </Card.Header>
    //                 <Card.Divider />
    //                 <Card.Footer>
    //                     <Grid.Container justify="center">
    //                         <a href='http://www.cityofmorrow.com/government-cityhall-permitsforms.asp'>
    //                             <Button auto color="warning">
    //                                 Go to Morrow's Permits Page
    //                             </Button>
    //                         </a>

    //                     </Grid.Container>
    //                 </Card.Footer>
    //             </Card>
    //         </Row>
    //         </>
    //     );
    // }
    // else if(isInClaytonCounty === 'FOREST PARK'){
    //     return (
    //         <>
    //         <Spacer y={1} />
    //         <Row>
    //             <Card css={{padding: "1%"}}>
    //                 <Card.Header>
    //                     <Text h4>This address is within Forest Park City Limits</Text>
    //                 </Card.Header>
    //                 <Card.Divider />
    //                 <Card.Footer>
    //                     <Grid.Container justify="center">
    //                         <a href='https://www.forestparkga.gov/planning/page/permits-and-applications'>
    //                             <Button auto color="warning">
    //                                 Go to Forest Park Permits Page
    //                             </Button>
    //                         </a>
    //                     </Grid.Container>
    //                 </Card.Footer>
    //             </Card>
    //         </Row>
    //         </>
    //     );
    // }
    // else if(isInClaytonCounty === 'UNINCORPORATED'){
    //     return (
    //         <>
    //         <Spacer y={1} />
    //         <Row>
    //             <Card css={{padding: "1%"}}>
    //                 <Card.Header>
    //                     <Text h3>This address in Unincorporated Clayton County</Text>
    //                 </Card.Header>
    //                 <Card.Divider />
    //                 <Card.Body>
    //                     <Text h5>
    //                         Zoning for this address is: <Text 
    //                         css={{textDecoration: "underline"}} 
    //                         as="a" 
    //                         href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO"
    //                         target="_blank"
    //                         >
    //                             {zone}
    //                         </Text>
    //                         *
    //                     </Text>
    //                     <Text p>
    //                         *For official zoning, file for a <Text 
    //                         css={{textDecoration: "underline"}} 
    //                         as="a" 
    //                         href="https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/plan/apply/60/0/0"
    //                         target="_blank"
    //                         >
    //                             Zoning Verification Letter
    //                         </Text>
    //                     </Text>
    //                 </Card.Body>
    //                 <Card.Divider />
    //                 <Card.Footer>
    //                     <Grid.Container justify="center">
    //                         <Button css={{width: "100%", margin: "0% 15%"}} color="primary" onPress={() => {return navigate('/Assistant')}}>
    //                             Continue to the Permit Assistant
    //                         </Button>
    //                         <Button 
    //                         css={{width: "100%", margin: "3% 25% 0%"}} 
    //                         auto size="xs" color="primary" ghost
    //                         as="a" href={`https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/search?m=1&fm=1&ps=10&pn=1&em=true&st=${encodeURIComponent(addr)}`}
    //                         target="_blank"
    //                         >
    //                             Check for existing permits at this address
    //                         </Button>
    //                     </Grid.Container>
    //                 </Card.Footer>
    //             </Card>
    //         </Row>
    //         </>

    //     );
    // }
}


