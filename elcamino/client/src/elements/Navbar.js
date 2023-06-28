import { css, Navbar, Link, Text } from '@nextui-org/react'
import { ClaytonLogo } from './ClaytonLogo.js'


export function HomeNavbar() {

    return (
        <Navbar isBordered variant="floating" >
            <Navbar.Brand>
                <Link color="inherit" href="https://claytoncountyga.gov">
                    <ClaytonLogo />
                </Link>
            </Navbar.Brand>
            <Navbar.Content activeColor="warning" hideIn="sm" variant="underline-rounded">
                <Navbar.Link isActive href="/">Address Lookup</Navbar.Link>
                <Navbar.Item>Assistant</Navbar.Item>
                <Navbar.Item>Requirements</Navbar.Item>
            </Navbar.Content>
            <Navbar.Content showIn="sm">
                <Navbar.Toggle />
            </Navbar.Content>
            <Navbar.Collapse>
                <Navbar.CollapseItem>
                    <Link color="warning" css={{minWidth: "100%"}} href="/">Address Lookup</Link>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem>
                    <Text color="inherit">Assistant</Text>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem>
                    <Text color="inherit">Requirements</Text>
                </Navbar.CollapseItem>
            </Navbar.Collapse>
        </Navbar>
    )
};

export function AssistantNavbar() {
    return (
        <Navbar isBordered variant="floating">
            <Navbar.Brand>
                <Link color="inherit" href="https://claytoncountyga.gov">
                    <ClaytonLogo />
                </Link>
            </Navbar.Brand>
            <Navbar.Content activeColor="warning" hideIn="sm" variant="underline-rounded">
                <Navbar.Link href="/">Address Lookup</Navbar.Link>
                <Navbar.Item isActive>Assistant</Navbar.Item>
                <Navbar.Item>Requirements</Navbar.Item>
            </Navbar.Content>
            <Navbar.Content showIn="sm">
                <Navbar.Toggle />
            </Navbar.Content>
            <Navbar.Collapse>
                <Navbar.CollapseItem>
                    <Link color="inherit" css={{minWidth: "100%"}} href="/">Address Lookup</Link>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem>
                    <Text color="warning">Assistant</Text>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem>
                    <Text p>Requirements</Text>
                </Navbar.CollapseItem>
            </Navbar.Collapse>
        </Navbar>
    )
};

export function EndPageNavbar() {
    return (
        <Navbar isBordered variant="floating" >
            <Navbar.Brand>
                <Link color="inherit" href="https://claytoncountyga.gov">
                    <ClaytonLogo />
                </Link>
            </Navbar.Brand>
            <Navbar.Content activeColor="warning" hideIn="sm" variant="underline-rounded">
                <Navbar.Link href="/">Address Lookup</Navbar.Link>
                <Navbar.Item>Assistant</Navbar.Item>
                <Navbar.Item isActive>Requirements</Navbar.Item>
            </Navbar.Content>
            <Navbar.Content showIn="sm">
                <Navbar.Toggle />
            </Navbar.Content>
            <Navbar.Collapse>
                <Navbar.CollapseItem>
                    <Link color="inherit" css={{minWidth: "100%"}} href="/">Address Lookup</Link>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem>
                    <Text color="inherit">Assistant</Text>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem>
                    <Text color="warning">Requirements</Text>
                </Navbar.CollapseItem>
            </Navbar.Collapse>
        </Navbar>
    )
};
<Text color="inherit">Assistant</Text>