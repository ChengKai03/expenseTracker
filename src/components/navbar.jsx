

export default function Navbar(){
    return(
        <header id="navbar">
        <a className="brand" href="./">Budgeter</a>
        <nav className="nav">
          <ul className="nav-list">
          <li className="nav-item" id="view-nav-option">View</li>
          <li className="nav-item active" id="add-nav-option">Add</li>
          </ul> 
        </nav>
      </header>
    )
}