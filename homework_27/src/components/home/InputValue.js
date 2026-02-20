import {InputGroup, Form, Container} from "react-bootstrap";
import { useMyContext } from '../../Context'
import {TodoButton} from "./TodoButton";

export function InputValue({ value, onChange, onSubmit }) {
    const { color } = useMyContext();
    return (
        <Container fluid>
            <InputGroup data-bs-theme={color}>
                <InputGroup.Text >Enter the cases</InputGroup.Text>
                <Form.Control aria-label="Enter the cases" value={value} onChange={onChange}/>
                <TodoButton name={'Enter'} onClick={onSubmit}/>
            </InputGroup>
        </Container>
    );
}