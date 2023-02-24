
import { Button } from "@nextui-org/react";

export function ContinueButton({selected, cardlink}) { /* Function changes what is displayed in the continue button element based on if "ischecked" is true or false */
    if(selected){
        return (
            <a href={cardlink}>
            <Button size="lg" shadow color="gradient">
                Continue to the Permit Application
            </Button>
            </a>
        )
        }
        return (
            <Button size="lg" disabled>
                Continue to the Permit Application
            </Button>
        );
}