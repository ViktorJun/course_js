import {Header} from "./components/Header";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import {Home} from "./pages/home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import {AboutMe} from "./pages/AboutMe";
import {Contacts} from "./pages/Contacts";
import {NotFound} from "./pages/NotFound";
import {useMyContext} from "./Context";
import {Container} from "react-bootstrap";
import {ErrorBoundary} from "./components/ErrorBoundary";

function App() {
    const {color} = useMyContext();
    return (
        <Router>
            <Container fluid className={`App ${color} py-1`}>
                <Header />
                <ErrorBoundary>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about-me" element={<AboutMe />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </ErrorBoundary>
            </Container>
        </Router>
    );
}

export default App;
