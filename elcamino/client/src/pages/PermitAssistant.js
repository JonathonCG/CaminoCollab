import { AssistantNavbar } from '../elements/Navbar';
import { Container } from "@nextui-org/react";
import { PermitContent } from "../elements/Assistants/PermitAssistant/PermitContent";
import { Footer } from '../elements/Footer';

export function PermitAssistant() {
    document.title = "Permit Assistant"

    return (
        <>
        <AssistantNavbar />
        <Container lg>
            <PermitContent />
        </Container>
        <Footer />
        </>
    )
}