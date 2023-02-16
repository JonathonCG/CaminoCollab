import { Cards } from "../elements/QuestionCards"
import { AssistantNavbar } from '../elements/Navbar';
import { Container } from "@nextui-org/react";

export function Assistant() {
    document.title = "Permit Assistant"

    return (
        <Container>
            <AssistantNavbar />
            <Cards />
        </Container>
    )
}