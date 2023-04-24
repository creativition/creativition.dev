import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainContent from "./pages/Main";

const App = () => {
    return (
        <div classname="app">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path={"/"} Component={MainContent} />
                    <Route path={"/About"} element={<div>あばうと</div>} />
                    <Route path={"/Member"} element={<div>めんばー</div>} />
                    <Route path={"/Projects"} element={<div>ぷろじぇくと</div>} />
                    <Route path={"/Portfolio"} element={<div>ぽーとふぉりお</div>} />
                    <Route path={"/Contact"} element={<div>こんたくと</div>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;