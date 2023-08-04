import { AssistantNavbar } from '../elements/Navbar';
import { Container } from "@nextui-org/react";
import { AssistantContent } from "../elements/Assistants/AssistantContent";
import { Footer } from '../elements/Footer';

export function Assistant() {
    document.title = "Assistant"

    return (
        <>
        <AssistantNavbar />
        <Container lg>
            <AssistantContent />
        </Container>
        <Footer />
        </>
    )
}