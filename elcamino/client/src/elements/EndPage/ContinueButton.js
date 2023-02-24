
import { useParams } from "react-router-dom";
import { Button } from "@nextui-org/react";

export function ContinueButton({selected}, {cardlink}) { /* Function changes what is displayed in the continue button element based on if "ischecked" is true or false */
const { id } = useParams();
    if(selected){
        return (
            <Button as="a" href={cardlink} size="lg" shadow color="gradient">
                Continue to the Permit Application
            </Button>
        )
        }
        return (
            <Button size="lg" disabled>
                Continue to the Permit Application
            </Button>
        )
}