import {Container, Card, ListGroup} from "react-bootstrap";
import '../theme.css';
import {useMyContext} from "../../Context";
import {TodoButton} from "./TodoButton";

export function ListCases({ items, handlerButtons }) {
    const { color } = useMyContext();
    return (
        <Container className={`background ${color} border rounded-3 min-vh-100`}>
            <Card className={`mt-3 d-${items.length === 0 ? 'none' : 'block'}`} data-bs-theme={color}>
                <ListGroup variant="flush" onClick={handlerButtons}>
                    {items.map((item) => (
                        <ListGroup.Item
                            key={item.id}
                            className={`d-flex align-items-center justify-content-between ${item.status ? 'todo-done-container' : ''}`}
                        >
                            <span className={item.status ? 'todo-done' : ''}>
                                {item.text}
                            </span>
                            <div className="d-flex gap-2">
                                <TodoButton
                                    name={item.status ? 'Not completed' : 'Completed'}
                                    variant={item.status ? 'outline-warning' : 'outline-success'}
                                    data-action="done"
                                    data-id={item.id}
                                />
                                <TodoButton
                                    name='Delete'
                                    variant='outline-danger'
                                    data-action="delete"
                                    data-id={item.id}
                                />
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
        </Container>
    );
}