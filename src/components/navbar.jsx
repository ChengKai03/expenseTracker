import { NavLink } from "react-router-dom"

export default function Navbar(){
    return(
        <header id="navbar">
        <a className="brand" href="./">Budgeter</a>
        <nav className="nav">
          <ul className="nav-list">
          <NavLink className="nav-item-text" to="/">
            <li className="nav-item" id="view-nav-option">
              <span>View</span>
            </li>
          </NavLink>
          <NavLink className="nav-item-text" to="/add-expense">
            <li className="nav-item" id="add-nav-option">
              <span>Add</span>
            </li>
          </NavLink>
          </ul> 
        </nav>
      </header>
    )
}