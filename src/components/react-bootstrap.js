import React from "react"
import { Container, Row, Col} from "react-bootstrap"

const ReactBootstrap = () => {
    return (
        <Container>
            <Row>
                <Col sm={4}>Column 1</Col>
                <Col sm={4}>Column 2</Col>
                <Col sm={4}>Column 3</Col>
            </Row>
        </Container>
    )
}

export default ReactBootstrap