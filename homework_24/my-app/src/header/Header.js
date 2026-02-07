import {Button, Container, InputGroup, Form} from "react-bootstrap";
export function Header() {
    return (
        <Container className="mb-3">
            <header>
                <h1>SWAPI</h1>
                <InputGroup>
                    <InputGroup.Text className='inputGroup-sizing-sm'>
                        https://example.com/users/
                    </InputGroup.Text>
                    <Form.Control
                        placeholder='people/1/'
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                    />
                    <Button variant={"light"} className="border-dark">Get info</Button>
                </InputGroup>
            </header>
        </Container>
    )
}