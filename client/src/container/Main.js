import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Community from '../pages/Community';
import VictimChatroom from '../pages/victims/Chatroom';
import DomesticChatroom from '../pages/domestic/Chatroom';
import Doctor from '../pages/Doctor';
import Donate from '../pages/Donate';

function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/community" element={<Community />} />
                <Route path="/victims" element={<VictimChatroom />} />
                <Route path="/domestic" element={<DomesticChatroom />} />
                <Route path="/doctors" element={<Doctor />} />
                <Route path="/donate" element={<Donate />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;
