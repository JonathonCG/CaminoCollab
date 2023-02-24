import { Navbar, Link, Text } from '@nextui-org/react'
import { ClaytonLogo } from './ClaytonLogo.js'


export function HomeNavbar() {

    return (
        <Navbar isBordered variant="floating" >
            <Navbar.Brand>
                <ClaytonLogo as="a" href="claytoncountyga.gov" />            
            </Navbar.Brand>
            <Navbar.Content activeColor="primary" hideIn="xs" variant="underline">
                <Navbar.Link isActive href="/">Address Lookup</Navbar.Link>
                <Navbar.Link href="/Assistant">Permit Assistant</Navbar.Link>
                <Navbar.Item>Permit Requirements</Navbar.Item>
            </Navbar.Content>
            <Navbar.Content showIn="xs">
                <Navbar.Toggle />
            </Navbar.Content>
            <Navbar.Collapse>
                <Navbar.CollapseItem>
                    <Link color="warning" css={{minWidth: "100%"}} href="/">Address Lookup</Link>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem>
                    <Link color="inherit" href="/Assistant">Permit Assistant</Link>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem>
                    <Text>Permit Requirements</Text>
                </Navbar.CollapseItem>
            </Navbar.Collapse>
        </Navbar>
    )
};

export function AssistantNavbar() {
    return (
        <Navbar isBordered variant="floating" >
            <Navbar.Brand>
                <ClaytonLogo as="a" href="claytoncountyga.gov" />            
            </Navbar.Brand>
            <Navbar.Content activeColor="primary" hideIn="xs" variant="underline">
                <Navbar.Link href="/">Address Lookup</Navbar.Link>
                <Navbar.Link isActive href="/Assistant">Permit Assistant</Navbar.Link>
                <Navbar.Item>Permit Requirements</Navbar.Item>
            </Navbar.Content>
            <Navbar.Content showIn="xs">
                <Navbar.Toggle />
            </Navbar.Content>
            <Navbar.Collapse>
                <Navbar.CollapseItem>
                    <Link color="inherit" css={{minWidth: "100%"}} href="/">Address Lookup</Link>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem>
                    <Link color="warning" href="/Assistant">Permit Assistant</Link>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem>
                    <Text p>Permit Requirements</Text>
                </Navbar.CollapseItem>
            </Navbar.Collapse>
        </Navbar>
    )
};

export function EndPageNavbar() {
    return (
        <Navbar isBordered variant="floating" >
            <Navbar.Brand>
                <ClaytonLogo as="a" href="claytoncountyga.gov" />            
            </Navbar.Brand>
            <Navbar.Content activeColor="primary" hideIn="xs" variant="underline">
                <Navbar.Link href="/">Address Lookup</Navbar.Link>
                <Navbar.Link href="/Assistant">Permit Assistant</Navbar.Link>
                <Navbar.Item isActive>Permit Requirements</Navbar.Item>
            </Navbar.Content>
            <Navbar.Content showIn="xs">
                <Navbar.Toggle />
            </Navbar.Content>
            <Navbar.Collapse>
                <Navbar.CollapseItem>
                    <Link color="inherit" css={{minWidth: "100%"}} href="/">Address Lookup</Link>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem>
                    <Link color="inherit" href="/Assistant">Permit Assistant</Link>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem>
                    <Text color="warning">Permit Requirements</Text>
                </Navbar.CollapseItem>
            </Navbar.Collapse>
        </Navbar>
    )
};