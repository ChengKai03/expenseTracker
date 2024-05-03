import logo from './logo.svg';
import './App.css';
import Panel from './components/panel.jsx'

function App() {
  return (
    <div className="App">
      <header id="navbar">
        <a className="brand" href="./">Budgeter</a>
        <nav className="nav">
          <ul className="nav-list">
          <li className="nav-item" id="view-nav-option">View</li>
          <li className="nav-item active" id="add-nav-option">Add</li>
          </ul> 
        </nav>
      </header>
      <content id="tracker-content">
        <Panel toShow={0}/>
        <Panel toShow={1}/>


      </content>
    </div>
  );
}

export default App;
