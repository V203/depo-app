
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import About from "./pages/About"


import Contact from './pages/contact';
import Locator from './pages/locator';
import SpecialsMenu from './components/SpecialsMenu';
import Confirmation from './pages/confirmation';
import ThankYou from './components/ThankYou';
// import Specials from './pages/Specials';
function App() {
  return (
    <Router>
      <div className="App">
        <ul className="App-header">
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={"/specials"} element={<SpecialsMenu />} />
            <Route path="locator" element={<Locator />}/>
            <Route path={"/about"} element={<About />} />
            <Route path={"/contact"} element={<Contact />}/>
            <Route path={"/confirmation"} element={<Confirmation />}/>
            <Route path={"/thanks"} element={<ThankYou />}/>
          </Routes>
        </ul>
      </div>
    </Router>

  );
}

export default App;
