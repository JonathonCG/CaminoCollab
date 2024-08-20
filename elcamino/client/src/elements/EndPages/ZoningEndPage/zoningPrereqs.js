import { Button, Container, Row, Spacer, Text } from "@nextui-org/react";

// I know this looks like a lot, but the jsx you see just populates the hoverable '?' tooltips on the EndPage

export const zoningPrereqs = [
    {
        id: 0, 
        name: 'Letter of Intent', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Must include the property Identification (address or parcel number), contact information, current date of the letter, detailed description of request.
                </Text>
            </Container>
    },
    {
        id: 1, 
        name: 'Site Plan or Survey', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>Optional, but preferrable to have.</Text>
            </Container>
    },
    {
        id: 2, 
        name: 'Pre-Application Meeting', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                Most Zoning requests and processes require an initial meeting with county zoning staff to better understand your zoning request and determine the best course of action.
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="/ZoningRequirements/0" target="_blank" //TODO: make sure this works
                    >
                        Pre-Application Meeting Requirements
                    </Button>
                </Row>
            </Container>
    },
    {   // Specific to Conditional-Use
        id: 3, 
        name: 'Letter of Intent', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Must include the property Identification (address or parcel number), contact information, current date of the letter, detailed description of request. The ways in which the conditional use shall comply with the applicable development standards of this Ordinance.   The ways in which the conditional use shall be consistent with the decision criteria described by Section 13.10 of this Ordinance.  Any written commitments being made by the applicant.
                </Text>
            </Container>
    },
    {  
        id: 4, 
        name: 'Property Owner Authorization or Special Power of Attorney Affidavit', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a" css={{marginBottom: "5px"}}
                    href="https://www.claytoncountyga.gov/download/98/forms/29618/property-owner-authorization-form.pdf" target="_blank"
                    >
                        Download Property Owner Authorization Form
                    </Button>
                </Row>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://www.claytoncountyga.gov/download/98/forms/29619/special-power-of-attorney-affidavit-form.pdf" target="_blank"
                    >
                        Download Special Power of Attorney Form
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 5, 
        name: 'Notarized Campaign Disclosure Form', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://www.claytoncountyga.gov/download/98/forms/29617/campaign-disclosure-form.pdf" target="_blank"
                    >
                        Download Form
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 6, 
        name: 'Property Deed', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                This is required if county records do not reflect the applicant as current owner
                </Text>
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
        id: 7, 
        name: 'Location/Vicinity Map', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Section 13.5 (E)(5) states:
                </Text>
                <Text color="white" css={{textAlign: "center"}}>
                    A location map showing and clearly identifying the subject property and showing all land within 1 mile of the subject property. The location map should identify the current zoning and use of all property within 1,320 feet of the subject property.
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART13PRPEFE_S13.5APAM" target="_blank"
                    >
                        Link to Relevant Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 8, 
        name: 'Survey of the Subject Property', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Read Section 13.5(E)(6) for details:
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART13PRPEFE_S13.5APAM" target="_blank"
                    >
                        Link to Relevant Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 9, 
        name: 'Site Plan', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Read Section 13.5(E)(7) for details:
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART13PRPEFE_S13.5APAM" target="_blank"
                    >
                        Link to Relevant Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 10, 
        name: 'Sewer/Septic Letter', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Read Section 13.16(A)(3) for details:
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a" css={{marginBottom: "5px"}}
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART13PRPEFE_S13.16COUSPRCU" target="_blank"
                    >
                        Link to Relevant Ordinance
                    </Button>
                </Row>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a" css={{marginBottom: "5px"}}
                    href="https://www.claytoncountypublichealth.org/" target="_blank"
                    >
                        Link to CCPH Website
                    </Button>
                </Row>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://www.ccwa.us/" target="_blank"
                    >
                        Link to CCWA Website
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 11, 
        name: 'Building Elevations', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Elevations must show height of building and finish materials and façade of each side of building. Read the details for the Zoning District that applies to the development for details on finish materials.
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO" target="_blank"
                    >
                        Link to Zoning Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 12, 
        name: 'Approval of PUD Concept Plan ', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="/ZoningRequirements/9" target="_blank" //TODO: make sure this works
                    >
                        PUD Concept Plan Requirements
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 13, 
        name: 'Detailed Development Plan Data', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Read Section 7.11(C) for details:
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART7PLUNDEPU_S7.11DEDEPLFIRE" target="_blank"
                    >
                        Link to Relevant Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 14, 
        name: 'Preliminary Plat', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="/ZoningRequirements/16" target="_blank"
                    >
                        Preliminary Plat Request Requirements
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 15, 
        name: 'Conceptual Site Plan Data', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Read Section 7.10(B) for details:
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART7PLUNDEPU_S7.10CODEPLFIRE" target="_blank"
                    >
                        Link to Relevant Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {   // Specific to PUD Concept
        id: 16, 
        name: 'Location/Vicinity Map', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Read Section 7.10(A)(1 and 2) for details:
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART7PLUNDEPU_S7.10CODEPLFIRE" target="_blank"
                    >
                        Link to Relevant Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 17, 
        name: 'Survey of the Subject Property', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Read Section 13.5(E)(6) for details:
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART13PRPEFE_S13.5APAM" target="_blank"
                    >
                        Link to Relevant Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 18, 
        name: 'Proposed Lot Combination Survey (Before and After Survey)', 
        tip: ''
    },
    {
        id: 19, 
        name: 'Proposed Lot Line Adjustment Survey (Before and After Survey)', 
        tip: ''
    },
    {
        id: 20, 
        name: 'Proposed Minor Subdivision Plat (Before and After Survey)', 
        tip: ''
    },
    {
        id: 21, 
        name: 'Copy of comments received from Local Utility Providers', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                At a minimum, the subdivider shall provide an affidavit indicating that a copy of the proposed preliminary plat has been provided to all appropriate local utilities.
                </Text>
            </Container>
    },
    {
        id: 22, 
        name: 'Building Elevations', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Elevations must show height of building and finish materials and façade of each side of building. Read the details for the Zoning District that applies to the development for details on finish materials.
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO" target="_blank"
                    >
                        Link to Zoning Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 23, 
        name: 'Survey', 
        tip: ''
    },
    {
        id: 24, 
        name: 'Proposed Preliminary Plat', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Must be prepared by a land surveyor or professional engineer and certified by a land surveyor registered by the state and provide items identified in Chapter 86, Section 123.               
                </Text>
                <Text color="white" css={{textAlign: "center"}}>
                    Read Chapter 86, Section 86, Section 123 for details:
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_CH86SU_ARTIIISURE_DIV4MASU_S86-123SPPRPLDOBESU" target="_blank"
                    >
                        Link to Relevant Ordinance
                    </Button>
                </Row>
            </Container>
    },
    { // Subdivision and Combination Specific
        id: 25, 
        name: 'Property Owner Authorization (if Applicant is not the Property Owner)', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://www.claytoncountyga.gov/download/98/forms/29618/property-owner-authorization-form.pdf" target="_blank"
                    >
                        Download Property Owner Authorization Form
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 26, 
        name: 'The original documents and the specified number of copies of the maintenance bonds or surety required by this article for all public improvements', 
        tip:
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Read Chapter 86, Section 127 for details:
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_CH86SU_ARTIIISURE_DIV4MASU_S86-127FIPLAPREPR" target="_blank"
                    >
                        Link to Relevant Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 27, 
        name: '"As-built" drawings showing the location, dimensions, and materials used to construct all improvements within the subdivision', 
        tip:
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Read Chapter 86, Section 127 for details:
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_CH86SU_ARTIIISURE_DIV4MASU_S86-127FIPLAPREPR" target="_blank"
                    >
                        Link to Relevant Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 28, 
        name: 'Map showing the locations of all street signs, street lights, and fire hydrants', 
        tip:
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Read Chapter 86, Section 127 for details:
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_CH86SU_ARTIIISURE_DIV4MASU_S86-127FIPLAPREPR" target="_blank"
                    >
                        Link to Relevant Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 29, 
        name: '', 
        tip: ''
    },
    {
        id: 30, 
        name: 'Property Owner Authorization', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://www.claytoncountyga.gov/download/98/forms/29618/property-owner-authorization-form.pdf" target="_blank"
                    >
                        Download Property Owner Authorization Form
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 31, 
        name: 'Proposed Preliminary Plat', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Read Section 11.4(C)(1) for details:
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART11SIDEPL_S11.4REPRST" target="_blank"
                    >
                        Link to Relevant Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 32, 
        name: 'Survey of the Subject Property', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Read Section 11.4(C)(2) for details:
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART11SIDEPL_S11.4REPRST" target="_blank"
                    >
                        Link to Relevant Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 33, 
        name: 'Site Development Plan', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Read Section 11.4(C)(3) for details:
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART11SIDEPL_S11.4REPRST" target="_blank"
                    >
                        Link to Relevant Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 34, 
        name: 'Landscaping Plan', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Read Section 11.4(C)(4) for details:
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART11SIDEPL_S11.4REPRST" target="_blank"
                    >
                        Link to Relevant Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 35, 
        name: 'Tree Protection and Replacement Plan', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Read Chapter 86, Section 73 for details:
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_CH86SU_ARTIITRPR_S86-73TRPRREST" target="_blank"
                    >
                        Link to Relevant Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 36, 
        name: 'Lighting Plan', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Read Section 11.4(C)(5) for details:
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART11SIDEPL_S11.4REPRST" target="_blank"
                    >
                        Link to Relevant Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 37, 
        name: 'Sign Plan', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Read Section 11.4(C)(6) for details:
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART11SIDEPL_S11.4REPRST" target="_blank"
                    >
                        Link to Relevant Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 38, 
        name: 'Site Drainage Plan', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Read Section 11.4(C)(7) for details:
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART11SIDEPL_S11.4REPRST" target="_blank"
                    >
                        Link to Relevant Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 39, 
        name: 'Construction Plan', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Read Section 11.7 for details:
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART11SIDEPL_S11.7SPCOPLDOBESU" target="_blank"
                    >
                        Link to Relevant Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 40,
        name: 'Subdivision Construction Plans',
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Shall be prepared for all required improvements and provide items identified in Chapter 86, Section 125.
                </Text>
                <Text color="white" css={{textAlign: "center"}}>
                    Read Chapter 86, Section 125 for details:
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_CH86SU_ARTIIISURE_DIV4MASU_S86-125SPCOPLDOBESU" target="_blank"
                    >
                        Link to Relevant Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 41,
        name: 'Site Photos of the Trees being removed',
        tip: ''
    },
    {
        id: 42,
        name: 'Map of the Area',
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Must identify the location of the tract to be harvested and, as to those trucks which will be traveling to and from such tract for purposes of picking up and hauling loads of cut forest products, the main point of ingress to such tract from a public road and, if different, the main point of egress from such tract to a public road. If multiple points of ingress and/or ingress will be used, all such points shall be identified. 
                </Text>
            </Container>
    },
    {
        id: 43,
        name: 'Statement of Sale Method',
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    A statement as to whether the timber will be removed pursuant to a lump sum sale, per unit sale, or owner harvest for purposes of ad valorem taxation under O.C.G.A. § 48-5-7.5.
                </Text>
            </Container>
    },
    {
        id: 44,
        name: "Timber Seller's Contact Information",
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    The name, address, and daytime telephone number of the timber seller if the harvest is pursuant to a lump sum or per unit sale or of the timber owner if the harvest is an owner harvest.
                </Text>
            </Container>
    },
    {
        id: 45,
        name: "Timber Harvester's Contact Information",
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    The name, business address, business telephone number, and nighttime or emergency telephone number of the person or firm harvesting such timber.
                </Text>
            </Container>
    },
    {
        id: 46,
        name: '$5,000 Bond or Letter of Credit',
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Read Chapter 86, Section 72 for details:
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_CH86SU_ARTIITRPR_S86-72TIHA" target="_blank"
                    >
                        Link to Relevant Ordinance
                    </Button>
                </Row>
            </Container>
    },
    { // Specific to Admin Appeal
        id: 47, 
        name: 'Letter of Intent', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Must include the property Identification (address or parcel number), contact information, current date of the letter, detailed description of request.  A letter describing the reasons for the appeal noting specific sections of this Ordinance, Georgia State Code, or other standard applicable to Clayton County upon which the appeal is based.
                </Text>
            </Container>
    },
    {
        id: 48, 
        name: 'All Initial Materials Submitted to the County', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Copies of all materials submitted to the County's staff member or administrative board upon which the decision being appealed was based.  
                </Text>
            </Container>
    },
    {
        id: 48, 
        name: 'Copies of any written decisions which are the subject of the appeal', 
        tip: ''
    },
    { // Specific to Variance
        id: 50, 
        name: 'Letter of Intent', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Must include the property Identification (address or parcel number), contact information, current date of the letter, detailed description of request.  describing the details of the variance being requested and stating how the request is consistent with the required findings of fact described by Section 10.8 of this Ordinance. The letter should include any written commitments being made by the petitioner.
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a" css={{marginBottom: "5px"}}
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART10BOCO_S10.8DESTVA" target="_blank"
                    >
                        Link to Relevant Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 51, 
        name: 'Survey of the Subject Property showing the existing conditions', 
        tip: ''
    },
    { // Specific to Variance
        id: 52, 
        name: 'Proposed Site Plan',
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Must clearly show the entire layout of the property and all features relevant to the variance request.  
                </Text>
            </Container>
    },
    {   // Specific to PUD Concept
        id: 53, 
        name: 'Sewer/Septic Letter', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Section 7.10(A)(3) for details:
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a" css={{marginBottom: "5px"}}
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART7PLUNDEPU_S7.10CODEPLFIRE" target="_blank"
                    >
                        Link to Relevant Ordinance
                    </Button>
                </Row>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a" css={{marginBottom: "5px"}}
                    href="https://www.claytoncountypublichealth.org/" target="_blank"
                    >
                        Link to CCPH Website
                    </Button>
                </Row>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://www.ccwa.us/" target="_blank"
                    >
                        Link to CCWA Website
                    </Button>
                </Row>
            </Container>
    },
    {   // Specific to PUD
        id: 54, 
        name: 'Location/Vicinity Map', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Read Section 7.11(A)(1 and 2) for details:
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART7PLUNDEPU_S7.11DEDEPLFIRE" target="_blank"
                    >
                        Link to Relevant Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {   // Specific to PUD
        id: 55, 
        name: 'Sewer/Septic Letter', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Section 7.11(A)(3) for details:
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a" css={{marginBottom: "5px"}}
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART7PLUNDEPU_S7.11DEDEPLFIRE" target="_blank"
                    >
                        Link to Relevant Ordinance
                    </Button>
                </Row>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a" css={{marginBottom: "5px"}}
                    href="https://www.claytoncountypublichealth.org/" target="_blank"
                    >
                        Link to CCPH Website
                    </Button>
                </Row>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://www.ccwa.us/" target="_blank"
                    >
                        Link to CCWA Website
                    </Button>
                </Row>
            </Container>
    },
    {
        id: 56, 
        name: 'Proposed Final Plat', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Must be prepared by a land surveyor or professional engineer and certified by a land surveyor registered by the state and provide items identified in Chapter 86, Section 128.               
                </Text>
                <Text color="white" css={{textAlign: "center"}}>
                    Read Chapter 86, Section 128 for details:
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_CH86SU_ARTIIISURE_DIV4MASU_S86-128SPFIPLDOBESU" target="_blank"
                    >
                        Link to Relevant Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {   // Specific to Site Development
        id: 57, 
        name: 'Location/Vicinity Map', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Read Section 11.4(C)(1) for details:
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART11SIDEPL_S11.4REPRST" target="_blank"
                    >
                        Link to Relevant Ordinance
                    </Button>
                </Row>
            </Container>
    },
    {   // Specific to Site Development
        id: 58, 
        name: 'Future Land Use Plan Amendment Supplemental Application', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                For proposed land use changes, a Future Land Use Plan Amendment Supplemental is required.
                </Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a"
                    href="https://form.jotform.com/241793737729068" target="_blank"
                    >
                        Link to Future Land Use Plan Amendment Supplemental Application
                    </Button>
                </Row>
            </Container>
    },
];