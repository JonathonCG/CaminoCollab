import React, { useState } from 'react'
import { Button, Card, Row, Text } from "@nextui-org/react";

export function HelpMenu() {
    const [open, setOpen] = useState(false);

    const onPress = (() => {
        if(open){
            setOpen(false)
        } else {
            setOpen(true)
        }
        console.log(open);
    });

    if(!open) {
        return(
            <>
            <Button 
            size="xs" 
            auto
            color="grey" 
            css={{zIndex: "0"}} 
            onPress={onPress}
            >
                Can't find your address?
            </Button>
            </>
        )
    } else if(open) {
        return(
            <Card css={{width: 'fit-content', padding: '10px'}}>
                <Card.Header css={{padding: '0px'}}>
                <Row justify="center">
                    <Text>Contact Community Development:</Text>
                </Row>
                </Card.Header>
                <Card.Body css={{padding: '0px'}}>
                    <Text align="center">(770) 477-3569</Text>
                </Card.Body>
                <Card.Footer css={{padding: '0px'}}>
                    <Row justify="center">
                        <Button auto light size="sm" color="error" onPress={onPress}>
                            Close
                        </Button>
                    </Row>
                </Card.Footer>
            </Card>
        )
    }

}