import { AssistantNavbar } from '../elements/Navbar';
import { Container } from "@nextui-org/react";
import { AssistantContent } from "../elements/Assistant/AssistantContent";

export function Assistant() {
    document.title = "Permit Assistant"

    return (
        <Container>
            <AssistantNavbar />
            <AssistantContent />
        </Container>
    )
}