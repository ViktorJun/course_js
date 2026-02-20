import {Container, Card} from "react-bootstrap";
import {useMyContext} from "../Context";
import gitHub from '../images/25231.png';
import linkedIn from '../images/free-icon-linkedin-3991775.png';
import telegram from '../images/free-icon-telegram-2111646.png';
import {CreateImage} from "../components/CreateImage";

export function Contacts() {
    const { color } = useMyContext();
    return (
        <Container fluid>
            <h1 className='my-3 d-flex justify-content-center my-5'>My contacts</h1>
            <Card className={`border rounded-3 min-vh-20`} data-bs-theme={color}>
                <Card.Body>
                    <Card.Title className='d-flex justify-content-center display-6'>On this page you can find my contacts</Card.Title>
                    <div className="d-flex justify-content-between mx-5 my-5">
                        <Card.Link href="https://github.com/ViktorJun">
                            <CreateImage srcImage={gitHub} altText='Link to GitHub' height={120} width={120} />
                        </Card.Link>
                        <Card.Link href="https://www.linkedin.com/in/viktor-bulash-580761392/">
                            <CreateImage srcImage={linkedIn} altText='Link to LinkedIn' height={120} width={120} />
                        </Card.Link>
                        <Card.Link href="https://t.me/fsoc1iety">
                            <CreateImage srcImage={telegram} altText='Link to Telegram' height={120} width={120} />
                        </Card.Link>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}