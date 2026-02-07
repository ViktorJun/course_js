import {Container, InputGroup, Form} from "react-bootstrap";

export function Body(){
    return (
        <Container className="vh-100 d-flex flex-column">
            <InputGroup className="flex-grow-1">
                <Form.Control as="textarea" className='h-100 border-dark mb-3' aria-label="With textarea"/>
            </InputGroup>
        </Container>
    )
}