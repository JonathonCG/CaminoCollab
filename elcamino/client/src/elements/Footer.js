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
                <Text color="$black" small>©2023 Clayton County Government | 112 Smith Street, Jonesboro, GA 30236</Text>
            </Row>
            <Spacer y={0.5} />
        </Container>
    )

}