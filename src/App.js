
import './App.css';
import { HashRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from "./pages/home"
import Nav from './components/nav';
import Specials from './pages/Specials';
// import Specials from './pages/Specials';
function App() {
  return (
    <Router>
      <div className="App">
        <ul className="App-header">
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={"/specials"} element={<Specials />} />
          </Routes>
        </ul>
      </div>
    </Router>

  );
}

export default App;
