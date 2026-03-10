import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {PageFirstHW} from "./pages/PageFirstHW.jsx";
import {PageSecondHW} from "./pages/PageSecondHW.jsx";

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/homework29/1' element={<PageFirstHW />}/>
            <Route path='/homework29/2' element={<PageSecondHW />}/>
            <Route path="*" element={<Navigate to="/homework29/1" replace />} />
        </Routes>
    </Router>
  )
}

export default App
