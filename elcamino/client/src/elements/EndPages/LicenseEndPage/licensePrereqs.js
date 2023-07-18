import { Button, Container, Row, Spacer, Text } from "@nextui-org/react";

// I know this looks like a lot, but the jsx you see just populates the hoverable '?' tooltips on the EndPage

export const licensePrereqs = [
    {
        id: 0, 
        name: 'Zoning Approval', // Residential
        tip: 
            <Container css={{padding: "3px"}}>
                <Button color="warning" size="sm" ghost as="a"
                href="https://form.jotform.com/62284336919161" target="_blank"
                >
                    Commercial Business Use Verification
                </Button>
            </Container>
    },
    {
        id: 1, 
        name: 'Fire Inspection Report (if zoning is approved)', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Button color="warning" size="sm" ghost as="a"
                href="https://ccfes.org/inspection-request/" target="_blank"
                >
                    Fire Inspection Request
                </Button>
            </Container>
    },
    {
        id: 2, 
        name: 'State Domestic Entity Documents', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    A domestic entity is an LLC, Corporation, or Partnership registered with the state.
                </Text>
                <Button color="warning" size="sm" ghost as="a"
                href="https://sos.ga.gov/how-to-guide/how-guide-register-domestic-entity" target="_blank"
                >
                    Georgia Secretary of State's Website
                </Button>
            </Container>
    },
    {
        id: 3, 
        name: 'Notarized Private Employer Affidavit', // Residential
        tip:
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    NOTE: both affidavits are included in the .pdf
                </Text>
                <Button color="warning" size="sm" ghost as="a"
                href="https://www.claytoncountyga.gov/download/99/business-and-alcohol-license-forms/29673/affidavit-packet.pdf" target="_blank"
                >
                    Download Affidavit Packet
                </Button>
            </Container>
    },
    {
        id: 4, 
        name: 'Notarized SAVE Affidavit', 
        tip:
            <Container css={{padding: "5px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    NOTE: both affidavits are included in the .pdf
                </Text>
                <Button color="warning" size="sm" ghost as="a"
                href="https://www.claytoncountyga.gov/download/99/business-and-alcohol-license-forms/29673/affidavit-packet.pdf" target="_blank"
                >
                    Download Affidavit Packet
                </Button>
            </Container>
    },
    {
        id: 5, 
        name: 'Tax Commissioner’s Approval  ', 
        tip: ''
    },
    {
        id: 6, 
        name: 'Identification', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white">
                    At this time, only the following state-issued identification is accepted:
                </Text>
                <Text size={12} color="white" as="li">Driver's license or ID from all 50 states, the District of Columbia (DC), and other US territories (Guam, US Virgin Islands, American Samoa, Mariana Islands and Puerto Rico)</Text>
                <Text size={12} color="white" as="li">US Passport</Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://dds.georgia.gov/how-do-i-id-card" target="_blank"
                    >
                        Georgia DDS ID Website
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 7, 
        name: 'State Licenses (if required)', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Button color="warning" size="sm" ghost as="a"
                href="https://secure.sos.state.ga.us/mylicense/Login.aspx?process=app" target="_blank"
                >
                    Secretary of State's Professional Licensing
                </Button>
            </Container>
    },
    {
        id: 8, 
        name: 'Background Check Consent Form (if required)', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>You may be required to have a background check performed.</Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://www.claytoncountyga.gov/download/99/business-and-alcohol-license-forms/29669/consent-to-background-check-form.pdf" target="_blank"
                    >
                        Download Form
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 9, 
        name: 'Food Service License', 
        tip: 
        <Container css={{padding: "3px"}}>
            <Row justify="center">
                <Button ghost size="sm" color="warning" as="a"
                href="https://dph.georgia.gov/environmental-health/food-service" target="_blank"
                >
                    Georgia Department of Health Website
                </Button>
            </Row>
        </Container>
    },
    {
        id: 10, 
        name: 'Salon or Shop License', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Georgia Secretary of State
                </Text>
                <Row justify="center">
                    <Button color="warning" size="sm" ghost as="a"
                    href="https://sos.ga.gov/georgia-state-board-cosmetology-and-barbers" target="_blank"
                    >
                        Board of Cosmetology and Barbers
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 11, 
        name: 'Master License', 
        tip: 
            <Container css={{padding: "5px"}}>
                <Text color="white" css={{textAlign: "center"}}>Georgia Secretary of State Board of Cosmetology and Barbers</Text>
                <Row justify="center">
                    <Button color="warning" size="sm" ghost as="a"
                    href="https://sos.ga.gov/how-to-guide/how-guide-master-cosmetologist-cosmetology-instructor" target="_blank"
                    >
                        Master Cosmetologist License How-To
                    </Button>
                    <Button color="warning" size="sm" ghost as="a"
                    href="https://sos.ga.gov/how-to-guide/how-guide-master-barber-barber-ii-barber-instructor" target="_blank"
                    >
                        Master Barber License How-To
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 12, 
        name: 'Food Sales License', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Row justify="center">
                    <Button color="warning" size="sm" ghost as="a"
                    href="https://agr.georgia.gov/licensing" target="_blank"
                    >
                        Georgia Department of Agriculture Licensing
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 13, 
        name: 'Grocery Store Requirements',
        tip: 
            <Container css={{padding: "3px"}}>
                <Row justify="center">
                    <Button color="warning" size="sm" ghost as="a"
                    href="#" target="_blank"
                    >
                        TODO: Make Form. This is an empty link.
                    </Button>
                </Row>
            </Container>
    },
    {id: 14, name: 'Flat Fee Election or Calculated Fee', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>Licensed Professionals can elect to pay a flat fee instead of an occupational tax based on receipts.</Text>
                <Row justify="center">
                    <Button color="warning" size="sm" ghost as="a"
                    href="https://www.claytoncountyga.gov/download/99/business-and-alcohol-license-forms/29672/flat-fee-election-for-professionals.pdf" target="_blank"
                    >
                        Download Flat Fee Election Form
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 15, 
        name: 'State License for your occupation', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://sos.ga.gov/licensing-division-georgia-secretary-states-office" target="_blank"
                    >
                        Secretary of State Licensing
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 16, 
        name: 'State License for your trade', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://sos.ga.gov/licensing-division-georgia-secretary-states-office" target="_blank"
                    >
                        Secretary of State Website
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 17, 
        name: 'Tourist Accommodation Permit', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>Clayton County Health District</Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://www.claytoncountypublichealth.org/environmental-health/tourist-accommodations/" target="_blank"
                    >
                        Tourist Accomodations Information
                    </Button>
                </Row>
            </Container>
    },
    {   // Home Type 1 specific
        id: 18, 
        name: 'Zoning Approval', // Residential
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>Contact Zoning to determine if the location allows the business type</Text>
                <Text color="white" css={{textAlign: "center"}}>(770) 473-5401</Text>
            </Container>
    },
    {   // Home Type 2 specific
        id: 19, 
        name: 'Zoning Approval', // Residential
        tip: 
            <Container css={{padding: "3px"}}>
                <Row justify="center">
                    <Button color="warning" size="sm" ghost as="a"
                    href="#" target="_blank"
                    >
                        Zoning Pre-Application
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 20,
        name: "Board of Commissioners' Approval",
        tip:
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>TODO: add more info here</Text>
            </Container>
    },
    {
        id: 21, 
        name: 'Identification (must match property address)', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white">
                    At this time, only the following state-issued identification is accepted:
                </Text>
                <Text size={12} color="white" as="li">Driver's license or ID from all 50 states, the District of Columbia (DC), and other US territories (Guam, US Virgin Islands, American Samoa, Mariana Islands and Puerto Rico)</Text>
                <Text size={12} color="white" as="li">US Passport</Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://dds.georgia.gov/how-do-i-id-card" target="_blank"
                    >
                        Georgia DDS ID Website
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 22, 
        name: "Property Owner's Authorization Form", 
        tip: 
            <Container css={{padding: "3px"}}>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://www.claytoncountypublichealth.org/environmental-health/tourist-accommodations/" target="_blank"
                    >
                        Download Form
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 23, 
        name: 'Home Occupation and Code Acknowledgement Form', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="#" target="_blank"
                    >
                        TODO: add link
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 24, 
        name: 'Short-Term Vacation Rental Application', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://www.claytoncountyga.gov/download/99/business-and-alcohol-license-forms/29670/short-term-vacation-rental-unit-permit-checklist.pdf" target="_blank"
                    >
                        Download Form
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 25, 
        name: 'Copy of Property Deed', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>You can request a copy of your deed from the Georgia Superior Court Clerks' Cooperative Authority</Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://www.gsccca.org/" target="_blank"
                    >
                        GSCCCA Website
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 26, 
        name: 'Must post County Noise Ordinance on the property', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_CH62OFMIPR_ARTIGE" target="_blank"
                    >
                        Clayton County Noise Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 27, 
        name: 'An Established Commercial Business', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_CH6ALBE_ARTIINGE_S6-5LIEL" target="_blank"
                    >
                        Link to the Relevant Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 28, 
        name: 'For on-premise distilled spirit consumption, a 50+ seat dining area is required', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>See 'Restaurants' under 'definitions'</Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_CH6ALBE_ARTIINGE_S6-2DE" target="_blank"
                    >
                        Link to the Relevant Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 29, 
        name: 'Certificate of Residency', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>The certificate of residency can be found on pages 7 and 8 of this form.</Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://www.claytoncountyga.gov/download/99/business-and-alcohol-license-forms/29678/alcohol-license-application.pdf" target="_blank"
                    >
                        Download Form
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 30, 
        name: 'Initiated Georgia Dept of Revenue Alcohol License', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>Georgia Department of Revenue</Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://www.gsccca.org/" target="_blank"
                    >
                        Alcohol Licensing
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 31, 
        name: 'Location Survey to meet the requirements of county code', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>This isn't required if the business is changing ownership</Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_CH6ALBE_ARTIINGE_S6-7BULO" target="_blank"
                    >
                        Link to the Relevant Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 32, 
        name: 'Scaled Floor plan of the facility', 
        tip: ''
    },
    {
        id: 33, 
        name: 'Copy of Lease Agreement', 
        tip: ''
    },
];