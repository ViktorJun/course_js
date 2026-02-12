import {Alert} from "react-bootstrap";

export function AlertResult({show, setShow, winners = []}) {
    return (
        <Alert show={show} variant="light" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Winners</Alert.Heading>
            {winners.map((item) => (
                <p key={item.id}>{item.name}</p>
            ))}
        </Alert>
    )
}