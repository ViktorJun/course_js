import {Card, Container} from "react-bootstrap";
import {useMyContext} from "../Context";
import MyPhoto from '../images/2026-02-20 17.03.20.jpg';
import {CreateImage} from "../components/CreateImage";

export function AboutMe() {
    const { color } = useMyContext();

    return (
        <Container fluid>
            <h1 className='my-3 d-flex justify-content-center'>About Me</h1>
            <Card className={`border rounded-3 min-vh-100`} data-bs-theme={color}>
                <Card.Body>
                    <Card.Title className='d-flex justify-content-center display-2'>Hi! My name is Viktor</Card.Title>
                    <CreateImage srcImage={MyPhoto} altText='My photo' height={200} width={200} />
                    <Card.Text className="text-center mt-4 border rounded-5 border-3 p-5 lh-lg fs-5">
                        I'm a frontend developer focused on building modern Single Page Applications using React and contemporary web technologies.
                        I pay close attention to application architecture, state management, and performance optimization.

                        Currently, I’m deepening my knowledge of React ecosystem tools such as React Router, Context API, and component-level optimization techniques.
                        I value clean code, scalable structure, and understanding how things work under the hood rather than just making them work.

                        My goal is to continuously grow as a developer by combining practical experience with strong conceptual understanding of JavaScript and modern frontend development.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}