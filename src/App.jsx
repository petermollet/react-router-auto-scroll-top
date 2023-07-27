import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import HomeView from "./views/HomeView.jsx";
import AboutView from "./views/AboutView.jsx";
import UsersVIew from "./views/UsersVIew.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

const App = () => {
    return(
        <BrowserRouter>
            <NavBar />
            <main>
                <Routes>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/about" element={<AboutView />} />
                    <Route path="/users" element={<UsersVIew />} />
                </Routes>
            </main>
            <ScrollToTop />
        </BrowserRouter>
    )
}

export default App;
