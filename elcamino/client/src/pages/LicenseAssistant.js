import { AssistantNavbar } from '../elements/Navbar';
import { Container } from "@nextui-org/react";
import { LicenseContent } from "../elements/Assistants/LicenseAssistant/LicenseContent";
import { Footer } from '../elements/Footer';

export function LicenseAssistant() {
    document.title = "License Assistant"

    return (
        <>
        <AssistantNavbar />
        <Container lg>
            <LicenseContent />
        </Container>
        <Footer />
        </>
    )
}