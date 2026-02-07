import {Header} from "./header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Body} from "./body/Body";
import {Container} from "react-bootstrap";

function App() {
    return (
        <Container className="bg-light">
            <Header/>
            <Body/>
        </Container>
    );
}

export default App;
