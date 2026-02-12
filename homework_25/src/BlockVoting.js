import {Container, Button, CardGroup} from "react-bootstrap";
import {CardsVoting} from "./CardsVoting";
import {useState, useCallback} from 'react';
import {AlertResult} from "./AlertResult";
export function BlockVoting() {
    const [count, setCount] = useState([
        {id: 0, name: "cool", count: 0},
        {id: 1, name: "cry", count: 0},
        {id: 2, name: "smile", count: 0},
        {id: 3, name: "rofl", count: 0},
        {id: 4, name: "good", count: 0},
        {id: 5, name: "bad", count: 0}
    ]);
    const [show, setShow] = useState(false);
    const [winners, setWinners] = useState([]);
    function handlerResultVote() {
        const maxCount = Math.max(...count.map((item) => item.count));
        const winners = count.filter((item) => item.count === maxCount);
        setWinners(winners);
        if (maxCount === 0) {
            setShow(false);
            return;
        }
        setShow(true);
    }
    const handlerCount = useCallback((id) => {
        setCount((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, count: item.count + 1 } : item
            )
        );
    }, []);
    function clearVote() {
        setShow(false);
        setWinners([]);
        setCount((prev) =>
            prev.map((item) => ({ ...item, count: 0 }))
        );
    }
    return (
        <Container className="text-center">
            <h1 className='mb-3'>Voting</h1>
            <CardGroup className='mb-3'>
                {count.map((item) => (
                    <CardsVoting key={item.id} id={item.id} name={item.name} count={item.count} onClick={handlerCount}/>
                ))}
            </CardGroup>
            <Button as="a" variant="success" onClick={() => {handlerResultVote()}}>Show Results</Button>
            <Button as="a" variant="danger" className='m-lg-3' onClick={() => {clearVote()}}>Clear the vote</Button>
            {show && <AlertResult setShow={setShow} winners={winners} />}
        </Container>
    );
}
