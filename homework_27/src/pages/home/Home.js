import {useState} from "react";
import {InputValue} from "../../components/home/InputValue";
import {Container} from "react-bootstrap";
import {ListCases} from "../../components/home/ListCases";
import './Home.css';
import {ErrorBoundary} from "../../components/ErrorBoundary";

export function Home() {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);
    const addTodo = () => {
        const trimmed = text.trim();
        if (!trimmed) return;
        setTodos(prev => [...prev, { id: crypto.randomUUID(), text: trimmed, status: false }]);
        setText("");
    };
    const handlerButtons = (e) => {
        const btn = e.target.closest("button[data-action]");
        if (!btn) return;
        const { action, id } = btn.dataset;
        if (action === 'done') {
            setTodos(prev =>
                prev.map(t => t.id === id ? { ...t, status: !t.status } : t)
            );
        }
        if (action === 'delete') {
            setTodos(prev => prev.filter(t => t.id !== id));
        }
    }
    return (
        <Container fluid className="mt-3">
            <h1 className='justify-content-center d-flex'>To Do List</h1>
            <InputValue
                value={text}
                onChange={e => setText(e.target.value)}
                onSubmit={addTodo}
            />
            <h3 className='justify-content-center d-flex mt-4'>Your cases</h3>
            <ErrorBoundary>
                <ListCases items={todos} handlerButtons={handlerButtons}/>
            </ErrorBoundary>
        </Container>
    );
}