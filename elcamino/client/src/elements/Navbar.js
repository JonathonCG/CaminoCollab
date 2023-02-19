import { Navbar } from '@nextui-org/react'
import { ClaytonLogo } from './ClaytonLogo.js'


export function HomeNavbar() {

    return (
        <Navbar isBordered variant="floating">
            <Navbar.Brand 
            onClick={() => { window.location.href = "https://claytoncountyga.gov"; } } 
            style={{cursor:'pointer'}}
            >
                <ClaytonLogo />            
            </Navbar.Brand>
            <Navbar.Content activeColor="primary" hideIn="sm" variant="underline">
                <Navbar.Link isActive href="/">Address Lookup</Navbar.Link>
                <Navbar.Link href="/Assistant">Permit Assistant</Navbar.Link>
                <Navbar.Item>Permit Requirements</Navbar.Item>
            </Navbar.Content>
        </Navbar>
    )
};

export function AssistantNavbar() {
    return (
        <Navbar isBordered variant="floating">
            <Navbar.Brand 
            onClick={() => { window.location.href = "https://claytoncountyga.gov"; } } 
            style={{cursor:'pointer'}}
            >
                <ClaytonLogo />            
            </Navbar.Brand>
            <Navbar.Content activeColor="primary" hideIn="sm" variant="underline">
                <Navbar.Link href="/">Address Lookup</Navbar.Link>
                <Navbar.Link isActive href="/Assistant">Permit Assistant</Navbar.Link>
                <Navbar.Item>Permit Requirements</Navbar.Item>
            </Navbar.Content>
        </Navbar>
    )
};

export function EndPageNavbar() {
    return (
        <Navbar isBordered variant="floating">
            <Navbar.Brand 
            onClick={() => { window.location.href = "https://claytoncountyga.gov"; } } 
            style={{cursor:'pointer'}}
            >
                <ClaytonLogo />            
            </Navbar.Brand>
            <Navbar.Content activeColor="primary" hideIn="sm" variant="underline">
                <Navbar.Link href="/">Address Lookup</Navbar.Link>
                <Navbar.Link href="/Assistant">Permit Assistant</Navbar.Link>
                <Navbar.Item isActive>Permit Requirements</Navbar.Item>
            </Navbar.Content>
        </Navbar>
    )
};