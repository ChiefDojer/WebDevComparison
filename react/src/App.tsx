import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import WorldClock from './apps/WorldClock';
import Timer from './apps/Timer';
import Countdown from './apps/Countdown';

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/world-clock">World Clock</Link>
                <Link to="/timer">Timer</Link>
                <Link to="/countdown">Countdown</Link>
            </nav>
            <Routes>
                <Route path="/world-clock" element={<WorldClock />} />
                <Route path="/timer" element={<Timer />} />
                <Route path="/countdown" element={<Countdown />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
