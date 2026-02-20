import {Container, Image} from "react-bootstrap";
import gif from '../images/tenor.gif'
import errorGif from '../images/error.gif'

export function NotFound() {
    return (
        <Container
            fluid
            className="min-vh-100 d-flex flex-column align-items-center"
            style={{
                backgroundImage: `url(${errorGif})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover"
            }}
        >
            <h1 className="text-center mt-4 bg-black p-5 rounded-5 text-white">The error is being fixed</h1>
            <Image
                src={gif}
                alt="Not found"
                style={{ width: "600px", maxWidth: "100%" }}
                className="mt-4 rounded-5"
            />
        </Container>
    );
}
