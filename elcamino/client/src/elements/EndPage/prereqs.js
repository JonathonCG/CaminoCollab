import { Button, Container, Row, Text } from "@nextui-org/react";

// I know this looks like a lot, but the jsx you see just populates the hoverable '?' tooltips on the EndPage

export const prereqs = [
    {id: 0, name: 'Site Plan (must be to scale)',
        tip: 
            <Container css={{padding: "3px"}}>
            <Text size={14} color="white" h5>
                Site Plan is required for all residential construction 
                <br /> Site Survey is accepted for residential construction on an improved property
            </Text>
            <Text size={14} color="white">
                The following list will be required for all residential site plans: 
            </Text>
                <Text size={12} color="white" as="li">Show graphic scale and north arrow and reference applicable subdivision final plat Book/Page</Text>
                <Text size={12} color="white" as="li">Submit paper & PDF file of site plan with boundary line survey sealed by a design professional</Text>
                <Text size={12} color="white" as="li">Show building address, lot number, S/D name, phase/unit number, land lot/district/parcel</Text>
                <Text size={12} color="white" as="li">Show lot size, impervious area, driveway location, proposed structure foot print and square feet</Text>
                <Text size={12} color="white" as="li">Delineate 75-feet undisturbed buffers of state waters from wrested point of vegetation</Text>
                <Text size={12} color="white" as="li">Reference all zoning variances and Conditions obtained from Clayton County</Text>
                <Text size={12} color="white" as="li">Reference floor plan styles, elevations and percentages of exterior materials types used</Text>
                <Text size={12} color="white" as="li">Show adjoining structures with zoning and ownership information</Text>
                <Text size={12} color="white" as="li">Show setback lines, disturbed/undisturbed buffers, easements septic field and reserves</Text>
                <Text size={12} color="white" as="li">Show location, size, species of all existing trees 6” and greater, identify all specimen trees</Text>
                <Text size={12} color="white" as="li">Show tree protection fencing and indicate preserved and removed trees</Text>
                <Text size={12} color="white" as="li">Show entire critical root zones of all trees included in preservation calculation</Text>
                <Text size={12} color="white" as="li">Show required landscaping</Text>
            </Container>
    },
    {id: 1, name: 'Survey', tip: ''},
    {id: 2, name: 'Flood Elevation Certificate (If Appliable)', tip: ''},
    {id: 3, name: 'Environmental Health Plan', // Residential
        tip:
            <Container css={{padding: "5px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    More information at:
                </Text>
                <Button color="warning" size="sm" ghost as="a" css={{sideMargin: "20px"}}
                href="https://www.claytoncountypublichealth.org/" target="_blank"
                >
                    Clayton Public Health Website
                </Button>
            </Container>
    },
    {id: 4, name: 'Contractor Affidavits', tip: ''},
    {id: 5, name: 'Energy Code Compliance Certificate', 
        tip: 
            <Container css={{padding: "5px"}}>
                <Text color="white" css={{textAlign: "center"}}>Energy Code Compliance Certificate</Text>
                <Button color="warning" size="sm" ghost as="a" css={{sideMargin: "20px"}}
                href="https://www.dca.ga.gov/sites/default/files/ga_energycodecompliancecertificate.pdf" target="_blank"
                >
                    Go to Certificate
                </Button>
            </Container>
    },
    {id: 6, name: 'Sewer Bond',
        tip:
            <Container css={{padding: "5px"}}>
                <Text color="white" css={{textAlign: "center"}}>Clayton County Sewer Bond</Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a" css={{sideMargin: "20px"}}
                    href="https://www.claytoncountyga.gov/download/91/building-permits/65366/sewer-approval.pdf" target="_blank"
                    >
                        Go to Form
                    </Button>
                </Row>
            </Container>
    },
    {id: 7, name: 'Floor Plan (must be to scale)', tip: ''},
    {id: 8, name: 'Zoning Variance (If Applicable)', 
        tip: 
            <Container css={{padding: "5px"}}>
                <Text color="white" css={{textAlign: "center"}}>More information at:</Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a" css={{sideMargin: "20px"}}
                    href="https://www.claytoncountyga.gov/government/community-development/planning-zoning/" target="_blank"
                    >
                        Clayton Planning and Zoning Website
                    </Button>
                </Row>
            </Container>
    },
    {id: 9, name: 'Grading Permit (If applicable)', 
        tip: 
            <Text color="white">Contact Clayton County Transportation and Development at 770-477-3674 for more information</Text>
    },
    {id: 10, name: 'State Professional License', 
        tip: 
            <Text color="white">
                First time contractor registration requires the state card holder to be present.
                <br /> A Georgia Business License, State Identification and State Professional License is required. 
            </Text>
    },
    {id: 11, name: 'Business License', 
        tip: 
            <Container css={{padding: "5px"}}>
                <Text color="white" css={{textAlign: "center"}}>How do you get a business license?</Text>
                <Button color="warning" size="sm" ghost as="a" css={{sideMargin: "20px"}}
                href="https://www.georgia.org/small-business/get-business-license-georgia" target="_blank"
                >
                    Georgia Business License Website
                </Button>
            </Container>
    },
    {id: 12, name: 'Authorized Agent Form (If Applicable)', 
        tip: 
            <Container css={{padding: "5px"}}>
                <Text color="white" css={{textAlign: "center"}}>Authorized Agent Form</Text>
                <Button color="warning" size="sm" ghost as="a" css={{sideMargin: "20px"}}
                href="https://sos.ga.gov/sites/default/files/forms/49%20Form%20-%20Authorized%20Permit%20Agent%20Form.pdf" target="_blank"
                >
                    Go to Form
                </Button>
            </Container>
    },
    {id: 13, name: 'Homeowner Affidavit (If Applicable)',
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white" css={{textAlign: "center"}}>Business License, State License or Authorized Agent Forms are not needed if homeowner is the contractor, but a homeowner affidavit will be needed</Text>
                <Row justify="center">
                    <Button color="warning" size="sm" ghost as="a" css={{width: "50%"}}
                    href="https://www.claytoncountyga.gov/download/91/building-permits/29686/homeowner-affidavit.pdf" target="_blank"
                    >
                        Go to Affidavit
                    </Button>
                </Row>
            </Container>
    },
    {id: 14, name: 'Identification', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white">
                    At this time, only the following state-issued identification is accepted:
                </Text>
                <Text size={12} color="white" as="li">Driver's license from all 50 states, the District of Columbia (DC), and other US territories (Guam, US Virgin Islands, American Samoa, Mariana Islands and Puerto Rico)</Text>
                <Text size={12} color="white" as="li">State-issued ID card</Text>
                <Row justify="center">
                    <Button ghost size="sm" color="warning" as="a" css={{width: "50%"}}
                    href="https://dds.georgia.gov/how-do-i-id-card" target="_blank"
                    >
                        Georgia DDS ID Website
                    </Button>
                </Row>
            </Container>
    },
    {id: 15, name: 'HVAC Letter', tip: ''},
    {id: 16, name: 'Engineering Letter (If Applicable)', tip: ''},
    {id: 17, name: 'Mobile Home Registration', tip: ''},
    {id: 18, name: 'Mobile Home Tax Receipt', tip: ''},
    {id: 19, name: 'Property Tax Verification', 
        tip: 
            <Container css={{padding: "5px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Property Tax Verification Form 
                    <br />This should be filled out by the Tax Commissioner's Office
                </Text>
                <Button color="warning" size="sm" ghost as="a" css={{sideMargin: "20px"}}
                href="https://www.claytoncountyga.gov/download/91/building-permits/66807/tax-commissioners-approval-on-demolition-permits-application.pdf" target="_blank"
                >
                    Go to Form
                </Button>
            </Container>
    },
    {id: 20, name: 'Refund Request Letter', 
        tip:
            <Container css={{padding: "5px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Cash Bond Refund Request Letter
                </Text>
                <Button color="warning" size="sm" ghost as="a" css={{sideMargin: "20px"}}
                href="https://www.claytoncountyga.gov/download/91/building-permits/29425/cash-bond-refund-request.pdf" target="_blank"
                >
                    Go to Letter
                </Button>
            </Container>
    },
    {id: 21, name: 'Cash Bond Required', tip: ''},
    {id: 22, name: 'Event Route', tip: ''},
    {id: 23, name: 'Elevations w/ Finish Materials', 
        tip: 
            <Container css={{padding: "3px"}}>
                <Text color="white">
                    When a new dwelling lot is not part of a recorded subdivision plat, an original stamped survey is needed stating that no portion of the property is located within a flood plain
                </Text>
            </Container>
    },
    {id: 24, name: 'Police Approval', 
        tip: 
            <Container css={{padding: "5px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    More information at:
                </Text>
                <Button color="warning" size="sm" ghost as="a" css={{sideMargin: "20px"}}
                href="https://www.claytonpolice.com/" target="_blank"
                >
                    CCPD Website
                </Button>
            </Container>
    },
    {id: 25, name: 'Fire Marshal Plan Review Application', 
        tip: 
            <Container css={{padding: "5px"}}>
                <Text color="white" css={{textAlign: "center"}}>Fire Marshal Plan Review Application with payment (check)</Text>
                <Button color="warning" size="sm" ghost as="a" css={{sideMargin: "20px"}}
                href="http://www.ccfes.org/wp-content/uploads/2016/12/Plan-Review-Application-11.13.17-updated.pdf" target="_blank"
                >
                    Go to Application
                </Button>
            </Container>
    },
    {id: 26, name: 'GDOT / County T&D Permit', 
        tip: 
            <Container css={{padding: "5px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    More information at:
                </Text>
                <Button color="warning" size="sm" ghost as="a" css={{sideMargin: "20px"}}
                href="https://www.claytoncountyga.gov/government/transportation-and-development/" target="_blank"
                >
                    Clayton Transportation and Development Website
                </Button>
            </Container>
    },
    {id: 27, name: 'Proposed Floor Plan (must be to scale)', tip: ''},
    {id: 28, name: 'Existing Floor Plan (must be to scale)', tip: ''},
    {id: 29, name: 'Environmental Health Plan', // Commercial
        tip:
            <Container css={{padding: "5px"}}>
                <Text color="white" css={{textAlign: "center"}}>
                    Approved Plan is required for new structures and a signed letter for renovations during application intake for food service structures
                </Text>
                <Text color="white" css={{textAlign: "center"}}>
                    More information at:
                </Text>
                <Row justify="center">
                    <Button color="warning" size="sm" ghost as="a" css={{width: "50%"}}
                    href="https://www.claytoncountypublichealth.org/" target="_blank"
                    >
                        Clayton Public Health Website
                    </Button>
                </Row>
            </Container>
    },
    {id: 30, name: 'Two (2) hard copies of the construction plans', // Commercial
        tip:
            <Container css={{padding: "5px"}}>
                <Text color="white">
                Two (2) hard copies of the construction plans including mechanical, electrical and plumbing are to be delivered in office for review & stamping. 
                </Text>
            </Container>
    },
    {id: 31, name: 'Water Authority Approval Letter', // Commercial
    tip:
        <Container css={{padding: "5px"}}>
            <Text color="white" css={{textAlign: "center"}}>
                Approved letter for Environmental Compliance Review for Grease Trap and/or Sand Trap from the Water Authority is required             </Text>
            <Text color="white" css={{textAlign: "center"}}>
                More information at:
            </Text>
            <Row justify="center">
                <Button ghost size="sm" color="warning" as="a" css={{width: "50%"}}
                href="https://www.ccwa.us/" target="_blank"
                >
                    CCWA Website
                </Button>
            </Row>
        </Container>
},
];