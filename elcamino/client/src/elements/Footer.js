import { Spacer, Row, Text, Divider, Container } from "@nextui-org/react";

export function Footer() {
    return(
        <Container>
            <Spacer y={4} />
            <Divider x={0} height={3} />
            <Spacer y={0.5} />
            <Row justify="center">
                <Text 
                css={{textDecoration: "underline"}}
                as="a" 
                href="https://www.claytoncountyga.gov/government/community-development/">
                    Clayton County Community Development
                </Text>
            </Row>
            <Row justify="center">
                <Text 
                css={{textDecoration: "underline"}} 
                as="a" 
                href="https://claytoncountyga.gov">
                    Clayton County Home Site
                </Text>
            </Row>
            <Spacer y={0.3} />
            <Row justify="center">
                <Text color="$black" small>
                    ©2024 Clayton County Government | 
                    <Text 
                    css={{textDecoration: "underline"}} 
                    as="a" 
                    href="https://www.google.com/maps/place/Clayton+County+Board+Of+Commissioners/@33.5228864,-84.3555154,19.44z/data=!4m6!3m5!1s0x88f4fa280ce48f31:0x65efc0219400625d!8m2!3d33.522981!4d-84.3554067!16s%2Fg%2F1tn4y_l0"
                    target="_blank"
                    >112 Smith Street, Jonesboro, GA 30236
                    </Text>
                </Text>
            </Row>
            <Spacer y={0.5} />
        </Container>
    )

}
