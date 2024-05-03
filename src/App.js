
import './App.css';
import Home from './pages/home.jsx'
import Entry from './pages/entry.jsx'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/add-expense" element={ <Entry/> }/>
      </Routes>
    </Router>
  );
}

export default App;
