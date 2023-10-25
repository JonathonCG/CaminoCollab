import { AssistantNavbar } from '../elements/Navbar';
import { Container } from "@nextui-org/react";
import { ZoningContent } from "../elements/Assistants/ZoningAssistant/ZoningContent";
import { Footer } from '../elements/Footer';

export function ZoningAssistant() {
    document.title = "Zoning Assistant"

    return (
        <>
        <AssistantNavbar />
        <Container lg>
            <ZoningContent />
        </Container>
        <Footer />
        </>
    )
}