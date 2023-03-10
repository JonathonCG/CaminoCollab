import { Badge, Tooltip } from "@nextui-org/react";

export function PrereqTips({tip}) {

    if(tip){
        return(
            <Tooltip content={tip} trigger="hover" placement="right" color="invert" css={{maxWidth: "50%"}}>
                <Badge  
                size="sm"
                css={{marginLeft: '3px'}}
                >?</Badge>
            </Tooltip>
        )
    }
    else if(tip === '') {
        return;
    }

}